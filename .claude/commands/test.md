---
description: Build today's MD-theory test paper + frozen marking rubric from the prep selection.
argument-hint: [date e.g. 2026-06-23]
---

Use the `daily-test` skill to build the test for: $ARGUMENTS

Rules:
- Read `tracker.current_selection`. If it is missing or its `date` ≠ this day, **STOP and tell me to run
  `/prep` for this day first** (the test must match what was taught).
- If no date was given, infer it from `current_selection.date` and confirm.
- **One day only.** `test.md` must contain no answers; `rubric.md` is frozen once written.
