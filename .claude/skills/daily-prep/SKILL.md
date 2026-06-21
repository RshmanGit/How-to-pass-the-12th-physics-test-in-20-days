---
name: daily-prep
description: Use to start one study day — read tracker.json, select today's question set with the grade-aware spacing policy, record that exact set in tracker.json (current_selection), and write that day's learning.md. Run AFTER yesterday is graded and BEFORE daily-test. Builds one day only; if the date is ambiguous or a gap exists, stop and ask. Invoked by the /prep command.
---

# daily-prep

Pick today's ~6-new + due + spot-check set, **record it in the tracker**, and write a self-contained
`learning.md`. The recorded set is the contract `daily-test` reads — prep is the *only* selector.

Schema and IDs: see [`seed-tracker`](../seed-tracker/SKILL.md). Read the whole `tracker.json` each run —
it is the accumulated memory of every test, so selection spans all history, not just yesterday.

## Resolve the day (push back — never guess)

`daily/NN-YYYY-MM-DD/`. **NN = (date − 22 Jun 2026) + 1.** Calendar:

| Day | Date | Mode | New Tier-1? |
|--|--|--|--|
| 01–06 | Mon 22 Jun – Sat 27 Jun | `mini` (~12–18m) | yes |
| **07** | **Sun 28 Jun** | `mock` gentle (~20m) | **no** |
| 08–13 | Mon 29 Jun – Sat 4 Jul | `mini` | yes |
| **14** | **Sun 5 Jul** | `mock` half (~35m) | **no** |
| 15–20 | Mon 6 Jul – Sat 11 Jul | `mini` | yes (**11 Jul = last new-Tier-1 day**) |
| **21** | **Sun 12 Jul** | `mock` full (70m, dress rehearsal) | **no** |
| 22–23 | Mon 13 – Tue 14 Jul | `mini` revision | **no new Qs at all** |
| — | Wed 15 Jul | EXAM | — |

- If `/prep` was given no date → infer (last `activity` date + 1 study day, else day 01), **state the
  inferred date, then ask the user to confirm before doing anything.**
- **Never build more than one day.** If today is >1 study day past the last activity, surface the gap
  and ask which single day to run (graceful degradation: proceed off last-known tracker state, backfill later).

## Spacing policy (resurface after)

Read **physics_score_history only** (never presentation). For `times_seen ≥ 1`, an item is **due** when
`today − last_seen ≥` its interval: **Weak 2d · Shaky 3–4d · Solid 6d · Mastered 10d** (Mastered otherwise
only in mocks). **Eligible-new** = `must_introduce` rows with `label:"unseen"`.

## Select today's set

- **`mini` (weekday):** ~**6 new + 3–5 due + 1–2 spot-checks** (spot-check = a random Solid/Mastered, anti-decay).
- **`mock` (Sunday):** **no new Tier-1.** Compose mostly from due + already-covered to fill the day's target
  marks; the size ramps (gentle → half → full) per the table. Lighter learning file (it's a review/test day).
- **Days 22–23:** revision only — all due/weak items, **no new questions**.

**Ranking eligible-new:** tier 1 before tier 2; within a tier by chapter `exam_marks` (desc); then by the
README sequencing skeleton — honour her current electrostatics→current cluster (Ch 1→2→3), then the big
earners **Ch 14 → Ch 9**, then modern physics **Ch 11 → 12 → 13**, sprinkling Tier-2 (5,6,7,8,10) and parking
lighter items on Sundays. **All new Tier-1 must be banked by Sat 11 Jul (day 20).**

**Effort balance:** cap **2–3 derivations** in a day's set; mix in numericals / short-answers / MCQ. A `cs`
or 5m `deriv` counts as heavy.

**Re-teach:** for any item that came back **weak** in yesterday's `results.md`, add it to `reteach[]` (it
also appears in `due`) and fold a short re-teach block into today's `learning.md`.

**Confidence ramp:** week 1 ≈ mostly-covered + confidence-building; mid-window introduces 1–2 application
stretches; days 21–23 go fully realistic (competency / unseen-application framing).

## Write `current_selection` (the prep→test contract)

```jsonc
"current_selection": {
  "date": "2026-06-22", "day_index": 1, "mode": "mini", "target_marks": 15,
  "new": ["ch03-deriv-q1", "..."], "due": ["ch01-sa-q7"], "spot_check": ["ch02-num-q1"], "reteach": []
}
```
Overwrite any existing `current_selection`. Assert every chosen ID exists in `questions`.

## Write `daily/NN-YYYY-MM-DD/learning.md`

Self-contained — she reads it top-to-bottom and is done. Front-matter for the website:
```yaml
---
date: 2026-06-22
dayIndex: 1
title: "Coulomb's law & the electric field"   # TOPIC only — the site adds "Day N" itself
chapters: ["Ch 1", "Ch 3"]
---
```
**Don't repeat "Day N" in `title` or in the body's H1** — the site renders the day number and date as
page chrome, so a "Day 1 —" prefix would show twice. Keep the body H1 a short encouraging line.
Then, for each **new** item: teach the material (derive/explain it as *learning*, not as the test question),
state the formula(s) and what diagram to draw, and add **1–2 reliable external links** (Khan Academy / a
reputable YouTube explainer). Include the re-teach block for any `reteach[]` item. Keep due/spot-check items
to a one-line "revise: …" pointer (she already learned them). Math in `$…$`/`$$…$$` (KaTeX renders it on the site).

## Self-check before finishing
- mode + new-Tier-1 rule match the calendar; derivation cap respected; every selected ID exists.
- `current_selection.date` == the resolved day; `learning.md` written with valid front-matter.
- Do **not** create `test.md`/`rubric.md` — that's `daily-test`.
