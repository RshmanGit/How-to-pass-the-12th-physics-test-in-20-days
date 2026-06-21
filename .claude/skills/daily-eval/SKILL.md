---
name: daily-eval
description: Use when the student's handwritten answer-sheet photos are in a day's submission/ folder. Transcribes them via the handwriting-parsing skill, grades against that day's frozen rubric.md with CBSE step-marking, splits physics score from presentation (legibility) deduction, writes results.md, and updates tracker.json — score histories, labels, projections, and the activity heatmap row. Run as the first step of a study day (grades yesterday). Invoked by the /grade command.
---

# daily-eval

Grade one day's submission against its frozen rubric, then update all state. Schema/IDs/algorithm
constants: see [`seed-tracker`](../seed-tracker/SKILL.md). Inputs: `daily/NN-YYYY-MM-DD/submission/*`,
`daily/NN-YYYY-MM-DD/rubric.md`, `tracker.json`.

## 1. Transcribe (reuse handwriting-parsing)

Run the **`handwriting-parsing`** skill on the submission images. It returns, per section: a transcription,
a **legibility rating**, the **root-cause split (handwriting vs photo vs both)**, and **content-at-risk**
signals. It assigns **no marks** — grading is yours.

- If a section's blocker is **photo capture** (not handwriting) → do **not** grade it; ask the user to
  re-shoot that section. Grade everything readable now and hold the rest (graceful degradation — a missing
  section never blocks the loop; backfill later).

## 2. Grade against the frozen rubric

For each question, match the transcription to `rubric.md` and award CBSE **step marks** (formula / substitution
/ result / labelled-diagram marks stand independently — partial credit even if the final answer slips).
- **bank-matched** mode for standard questions: score steps against the frozen key.
- **first-principles** mode for unseen / application / case-study parts: grade the physics reasoning directly.
- For swapped numericals, grade against the **recomputed** value in the rubric, never the bank original.

## 3. Split physics vs presentation (load-bearing)

For each question record **two** numbers:
- **physics score** = marks the physics earns, ignoring legibility. `pct = physics_marks / question_marks × 100`.
- **presentation deduction** = marks docked for genuinely **handwriting**-caused illegibility (per the skill's
  report) — **never** for photo problems, never folded into the physics score.

The selection loop keys off physics only, so a topic she *knows* but wrote messily must not be re-queued.

## 4. Update the tracker (per graded question)

- push `{date, pct}` to `physics_score_history`; push `{date, marks}` to `presentation_deduction_history` (same length).
- `times_seen += 1`; `last_seen = today`.
- recompute `label` from a **recency-smoothed** physics %: mean of the **last two** attempts (or the single
  attempt if only one), against bands — Weak <40 · Shaky 40–65 · Solid 65–85 · Mastered >85 (inclusive-low).
  Smoothing stops one bad day from dropping a known topic straight to Weak.

## 5. Recompute projections (loose, motivational — not a forecast)

Mastery fraction `mf` by label: Mastered .90 · Solid .70 · Shaky .45 · Weak .15 · Unseen → .25 (best) / 0 (worst).
Per chapter `c` over its **must_introduce** questions, with `S(c) = Σ marks`:
```
chapterProj_worst = exam_marks(c) · clamp( Σ marks·mf_worst(label) / S(c), 0, 1 )   // unseen → 0
chapterProj_best  = exam_marks(c) · clamp( Σ marks·mf_best(label)  / S(c), 0, 1 )   // unseen → .25
worst = max( round(8 + 0.7·dayIndex), Σ chapterProj_worst )      // floor so week-1 isn't demoralizing
best  = min( 70, Σ chapterProj_best )
```
Set `projections.worst`/`best`; **append** `{date, worst, best}` to `projections.trend` (never overwrite the trend).

## 6. Append the activity row (heatmap)

Read `current_selection` (before clearing) for the day's tier counts:
```
weighted_activity_score = 3·tier1_done + 1.5·tier2_done + 1·test_marks_earned
```
`tier1_done` / `tier2_done` = count of tier-1 / tier-2 items practiced today; `test_marks_earned` = physics
marks earned on the test. Append `{date, tier1_done, tier2_done, test_marks, weighted_activity_score}` to `activity`.

## 7. Clear the selection & write results.md

- Set `current_selection = null` (the day is consumed — stops a stale set leaking into tomorrow).
- Write `daily/NN-YYYY-MM-DD/results.md` (**published**). Front-matter:
  `--- date / dayIndex / totalMarks / projectionAtPace ---`. Body: per-question physics marks **and** the
  separate presentation deduction + one-line feedback; the writer-facing legibility notes from the skill;
  the day's total; one line — *"Projected at current pace: worst ~X / best ~Y out of 70 (pass = 23)."*

## Self-check before finishing
- every graded question updated exactly once; the two history arrays are equal length.
- presentation never entered physics history; labels recomputed; `current_selection` cleared.
- `projections.trend` **appended** (length grew by 1), one new `activity` row, `results.md` written.
- photo-blocked sections were held (not zero-scored) and flagged for re-shoot.
