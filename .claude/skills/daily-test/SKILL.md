---
name: daily-test
description: Use after daily-prep to build the day's MD-theory-format test paper and its FROZEN per-question marking rubric, from the set daily-prep recorded in tracker.json (current_selection). Does NOT select questions itself. Applies the numerical-variant recompute-verify rule to the few calc/score questions. Run before the student writes the test by hand. Invoked by the /test command.
---

# daily-test

Turn today's recorded selection into `test.md` (student-facing, no answers) and `rubric.md` (the frozen
marking key). Schema/IDs: see [`seed-tracker`](../seed-tracker/SKILL.md). Both files go in
`daily/NN-YYYY-MM-DD/` and are **never published** to the website.

## Read the selection — do not re-select

Load `tracker.current_selection`.
- If it is `null`, or its `date` ≠ the day you were asked to build → **STOP**: tell the user to run `/prep`
  for this day first. (Drift guard — the test must match what was taught.)
- Build exactly the IDs in `new + due + spot_check`. Pull each question and its marking-scheme answer from the
  bank (resolve via the row's `display`, or grep the `<!-- id: … -->` comment if the link drifted).

## Numerical-variant rule (the few calc/score questions — do carefully)

Medicine has few numericals — they live in `type:"num"` (e.g. eGFR/CKD-EPI, anion gap, serum osmolality,
corrected Na, drug dosing by weight) and in some `type:"crit"` blocks that total a score (e.g. Child-Pugh,
APACHE). For those items look at `times_seen`:
- **`times_seen == 0`** (first exposure): use the bank's original values verbatim.
- **`times_seen ≥ 1`** (2nd+ exposure, or a manual "make it hard" override): **swap the numbers** so it tests
  method, not memory.

On any swap you **must**, before freezing the rubric:
1. Recompute the full answer from scratch with the new values — re-derive independently, don't patch the old number.
2. Verify units and significant figures; sanity-check the magnitude; **clinical-plausibility check** — the
   result must be physiologically sane (e.g. eGFR not negative, a dose within a real therapeutic range, a
   Child-Pugh total in 5–15).
3. Only then write the recomputed answer into `rubric.md`.

A swapped question whose rubric still holds the old answer will mark correct work as wrong — so this gate is
mandatory. Record the swap on the tracker row: `numerical_variant = {uses_original_values:false,
last_variant_date:"<today>", verified:true}`. (daily-test owns this field; daily-eval owns scoring fields.)
LAQ/SAQ/qualitative-crit items have no numbers to swap — skip the rule for them.

## Build `test.md` (no answers)

Front-matter `--- date / dayIndex / mode / totalMarks ---`. Then, by mode:
- **`laq-set`:** a compact paper — the selected LAQs + short notes, each tagged with its marks, totalling
  `target_marks` (~25–35). Mark LAQs clearly (they need headed sub-sections) vs short notes.
- **`paper-mock`:** mirror one (or two) real **100-mark paper(s)** — a few **LAQs (10–15m, with internal
  *OR* choice)** + a set of **short notes (SAQ/crit, ~5m)** summing to 100 per paper. Ramp size per the
  calendar (1 paper → 2 papers).
- **`prelim` (Day 35):** the full **4 papers × 100 = 400**, every covered system represented — the real
  dress-rehearsal. (daily-eval grades it paper-by-paper, exactly like any mock.)
- Questions only — **no answers, no rubric leaks**. Add "draw / tabulate" prompts where the bank flags one.

## Build `rubric.md` (frozen marking key)

One block per test question, in **block / step-marking** form (the bank answers already annotate the mark
blocks):
- the ID, the marks, and the block-by-block breakdown — for an LAQ:
  **Definition · Aetiopathogenesis · Clinical features · Investigations · Management** (each independent), plus
  any "draw/tabulate" item that scores on its own; for an SAQ: definition + key-points + one
  classification/criterion; for a `crit`: the score table + grading + use.
- the model answer / final value — **for swapped numericals/scores, the recomputed value**, not the bank's
  original;
- note acceptable alternative wording/management and where diagram/table labels score.

This file is **frozen**: `daily-eval` grades strictly against it. Do not edit it after the student writes.

## Self-check before finishing
- `current_selection.date` matched the day (else you would have stopped).
- Every swapped `num`/`crit-with-total` item had its rubric answer recomputed + verified (incl. clinical-plausibility).
- `test.md` total marks == `target_marks` (laq-set) or the mock/prelim structure; `test.md` contains **no answers**.
- `rubric.md` has exactly one block per `test.md` question, with named mark-blocks.
