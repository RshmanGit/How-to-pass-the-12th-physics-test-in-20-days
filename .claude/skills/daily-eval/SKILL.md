---
name: daily-eval
description: Use when the student's handwritten answer-sheet photos are in a day's submission/ folder. Transcribes them via the handwriting-parsing skill, grades against that day's frozen rubric.md with block/step-marking, splits content score from presentation (legibility) deduction, writes results.md, and updates tracker.json — score histories, labels, per-paper projections, and the activity heatmap row. Run as the first step of a study day (grades yesterday). Invoked by the /grade command.
---

# daily-eval

Grade one day's submission against its frozen rubric, then update all state. Schema/IDs/algorithm constants:
see [`seed-tracker`](../seed-tracker/SKILL.md). Inputs: `daily/NN-YYYY-MM-DD/submission/*`,
`daily/NN-YYYY-MM-DD/rubric.md`, `tracker.json`.

## 1. Transcribe (reuse handwriting-parsing)

Run the **`handwriting-parsing`** skill on the submission images. It returns, per section: a transcription, a
**legibility rating**, the **root-cause split (handwriting vs photo vs both)**, and **content-at-risk** signals.
It assigns **no marks** — grading is yours.

- If a section's blocker is **photo capture** (not handwriting) → do **not** grade it; ask the user to re-shoot
  that section. Grade everything readable now and hold the rest (graceful degradation — a missing section never
  blocks the loop; backfill later).

## 2. Grade against the frozen rubric

For each question, match the transcription to `rubric.md` and award **block / step marks** — the LAQ mark-blocks
(**Definition / Aetiopathogenesis / Clinical features / Investigations / Management**) and "draw/tabulate" items
stand **independently** (partial credit even if a block is blank).
- **bank-matched** mode for standard questions: score blocks against the frozen key.
- **first-principles** mode for unseen / applied / "diagnostic-dilemma" parts: grade the clinical reasoning directly.
- For swapped numericals/scores, grade against the **recomputed** value in the rubric, never the bank original.

## 3. Split content vs presentation (load-bearing)

For each question record **two** numbers:
- **content score** = marks the medicine earns, ignoring legibility. `pct = content_marks / question_marks × 100`.
- **presentation deduction** = marks docked for genuinely **handwriting**-caused illegibility (per the skill's
  report) — **never** for photo problems, never folded into the content score.

The selection loop keys off content only, so a topic she *knows* but wrote messily must not be re-queued.

## 4. Update the tracker (per graded question)

- push `{date, pct}` to `content_score_history`; push `{date, marks}` to `presentation_deduction_history` (same length).
- `times_seen += 1`; `last_seen = today`.
- recompute `label` from a **recency-smoothed** content %: mean of the **last two** attempts (or the single
  attempt if only one), against bands — Weak <40 · Shaky 40–65 · Solid 65–85 · Mastered >85 (inclusive-low).
  Smoothing stops one bad day from dropping a known topic straight to Weak.

## 5. Recompute projections — per paper, then the two-constraint gate

The pass rule is **≥40% in EACH paper AND ≥50% aggregate** — so never project a single global ratio (it would
hide a failing paper). Mastery fraction `mf` by label: Mastered .90 · Solid .70 · Shaky .45 · Weak .15 ·
Unseen → .25 (best) / 0 (worst).

**Step A — per system `s`** over its **must_introduce** questions, with `S(s) = Σ marks`:
```
sysMarks_*(s) = exam_marks(s) · clamp( Σ marks·mf_*(label) / S(s), 0, 1 )   // * = worst | best
```
**Step B — per paper `p`** (sum its systems; sys08 has no paper and is skipped):
```
paperScore_*(p) = Σ_{s ∈ p} sysMarks_*(s)        // 0..100  (== paperPct, since marks_per_paper = 100)
```
Apply a **per-paper motivational floor** to the *worst* line only, capped strictly below 40 so it can never
fake-clear a paper:
```
paperScore_worst(p) = max( min(38, round(15 + 0.5·dayIndex)), Σ sysMarks_worst )
```
**Step C — aggregate + the gate** (only over papers that HAVE content — a paper with no seeded/graded
must_introduce question projects `null` and is excluded from the denominator):
```
aggregate_*   = mean over scored papers of paperScore_*(p)            // % of 400
floorClear_*(p) = paperScore_*(p) >= 40
passProjected_best = (aggregate_best >= 50) AND (all scored papers floorClear_best)
binding = "floor"     if NOT all floorClear_best   (a paper < 40 → fail even if aggregate ok)
        = "aggregate" else if aggregate_best < 50
        = "clear"     otherwise
at_risk_papers = [ p : paperScore_best(p) < 40 ]
```
Write:
```jsonc
"projections": {
  "papers": { "P1": {"worst":.., "best":..}, ... , "Pk": null },   // null = not started
  "aggregate": { "worst_pct": .., "best_pct": .. },
  "verdict": { "binding": "floor|aggregate|clear", "at_risk_papers": ["P3"], "passProjectedBest": false }
}
```
and **append** `{date, papers:{…}, aggregate:{…}}` to `projections.trend` (never overwrite the trend).

## 6. Append the activity row (heatmap)

Read `current_selection` (before clearing) for the day's tier counts:
```
weighted_activity_score = 3·tier1_done + 1.5·tier2_done + 1·test_marks_earned
```
`tier1_done` / `tier2_done` = count of tier-1 / tier-2 items practiced today; `test_marks_earned` = content
marks earned on the test. Append `{date, tier1_done, tier2_done, test_marks, weighted_activity_score}` to `activity`.

## 7. Clear the selection & write results.md

- Set `current_selection = null` (the day is consumed — stops a stale set leaking into tomorrow).
- Write `daily/NN-YYYY-MM-DD/results.md` (**published**). Front-matter:
  `--- date / dayIndex / totalMarks / projectionAtPace ---`. Body: per-question content marks **and** the
  separate presentation deduction + one-line feedback; the writer-facing legibility notes from the skill; the
  day's total; one verdict line driven by `verdict.binding` —
  *"Projected at current pace: aggregate ~A% (pass ≥50%); weakest paper <Paper> ~B% (floor ≥40%) — <on track |
  fix Paper X first, it's below the 40% floor>."* Name the binding paper; never show two bare numbers.

## Self-check before finishing
- every graded question updated exactly once; the two history arrays are equal length.
- presentation never entered content history; labels recomputed; `current_selection` cleared.
- projections computed **per paper** with the AND-gate; empty papers projected `null` & excluded from the
  aggregate; `projections.trend` **appended** (length grew by 1); one new `activity` row; `results.md` written.
- photo-blocked sections were held (not zero-scored) and flagged for re-shoot.
