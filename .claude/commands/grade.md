---
description: Grade the day's handwritten answer sheets and update scores, projections, and trackers.
argument-hint: [date e.g. 2026-06-23]
---

Use the `daily-eval` skill to grade: $ARGUMENTS — the images in `daily/NN-YYYY-MM-DD/submission/`.

Rules:
- If no date was given, infer the most recent day that has a `submission/` folder but no `results.md`,
  **state it, and ask me to confirm.**
- **One day only.** Hold (don't zero) any section blocked by photo quality and ask me to re-shoot it.
- Grade content (medicine) and presentation (legibility) **separately** — selection keys off content only.
