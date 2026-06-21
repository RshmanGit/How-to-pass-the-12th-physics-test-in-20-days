---
description: Build today's study plan — select questions and write the day's learning file.
argument-hint: [date e.g. 2026-06-22]
---

Use the `daily-prep` skill to build the study day: $ARGUMENTS

Rules:
- If no date was given, infer it (last `activity` date + 1 study day, else day 01). **State the inferred
  date and ask me to confirm before doing any work** — never guess silently.
- Build **one day only**. If today is more than one study day past the last activity, surface the gap and
  ask which single day to run.
- If yesterday has a `submission/` folder but no `results.md`, remind me to run `/grade` first (prep should be grade-aware).
