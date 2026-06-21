---
name: daily-test
description: Use after daily-prep to build the day's CBSE-format test paper and its FROZEN per-question marking rubric, from the set daily-prep recorded in tracker.json (current_selection). Does NOT select questions itself. Applies the numerical-variant recompute-verify rule. Run before the student writes the test by hand. Invoked by the /test command.
---

# daily-test

Turn today's recorded selection into `test.md` (student-facing, no answers) and `rubric.md` (the frozen
marking key). Schema/IDs: see [`seed-tracker`](../seed-tracker/SKILL.md). Both files go in
`daily/NN-YYYY-MM-DD/` and are **never published** to the website.

## Read the selection — do not re-select

Load `tracker.current_selection`.
- If it is `null`, or its `date` ≠ the day you were asked to build → **STOP**: tell the user to run
  `/prep` for this day first. (This is the drift guard — the test must match what was taught.)
- Build exactly the IDs in `new + due + spot_check`. Pull each question and its marking-scheme answer
  from the bank (resolve via the row's `display`, or grep the `<!-- id: … -->` comment if the link drifted).

## Numerical-variant rule (highest-risk step — do this carefully)

For each `type:"num"` item, look at its `times_seen`:
- **`times_seen == 0`** (first exposure): use the bank's original values verbatim.
- **`times_seen ≥ 1`** (2nd+ exposure, or a manual "make it hard" override): **swap the numbers** so it tests
  method, not memory.

On any swap you **must**, before freezing the rubric:
1. Recompute the full answer from scratch with the new values — re-derive independently, don't patch the old number.
2. Verify units and significant figures; sanity-check the magnitude.
3. Only then write the recomputed answer into `rubric.md`.

A swapped question whose rubric still holds the old answer will mark correct work as wrong — so this gate
is mandatory. Record the swap on the tracker row: `numerical_variant = {uses_original_values:false,
last_variant_date:"<today>", verified:true}`. (daily-test owns this field; daily-eval owns scoring fields.)

## Build `test.md` (no answers)

Front-matter `--- date / dayIndex / mode / totalMarks ---`. Then:
- **`mini`:** a compact paper — the selected questions, each tagged with its marks, totalling `target_marks`
  (~12–18). Section labels optional; keep it ~30–45 min.
- **`mock`:** mirror the real paper for its target size, honouring the official structure
  (A 1m·MCQ/A-R · B 2m·VSA · C 3m·SA · D 4m·case study · E 5m·LA), **internal choice (OR) in B/C/E, none in D**.
  Day-21 full mock = the complete A16/B10/C21/D8/E15 = 70. Smaller Sunday mocks scale down proportionally.
- Questions only — **no answers, no rubric leaks**. Include "draw a labelled diagram" where the bank flags one.

## Build `rubric.md` (frozen marking key)

One block per test question, in CBSE **step-marking** form (the bank answers already annotate `(½m)` steps):
- the ID, the marks, and the mark-by-mark breakdown (e.g. formula ½ · substitution ½ · result 1 · labelled diagram 1);
- the model answer / final value — **for swapped numericals, the recomputed value**, not the bank's original;
- note any acceptable alternative method and where diagram labels score.

This file is **frozen**: `daily-eval` grades strictly against it. Do not edit it after the student writes.

## Self-check before finishing
- `current_selection.date` matched the day (else you would have stopped).
- Every `type:"num"` with `times_seen ≥ 1` was swapped **and** its rubric answer recomputed + verified.
- `test.md` total marks == `target_marks` (mini) or the mock structure; `test.md` contains **no answers**.
- `rubric.md` has exactly one block per `test.md` question.
