---
name: daily-prep
description: Use to start one study day — read tracker.json, select today's question set with the grade-aware spacing policy, record that exact set in tracker.json (current_selection), and write that day's learning.md. Run AFTER yesterday is graded and BEFORE daily-test. Builds one day only; if the date is ambiguous or a gap exists, stop and ask. Invoked by the /prep command.
---

# daily-prep

Pick today's set (1–2 new LAQs + short notes + due/recall), **record it in the tracker**, and write a
self-contained `learning.md`. The recorded set is the contract `daily-test` reads — prep is the *only* selector.

Schema and IDs: see [`seed-tracker`](../seed-tracker/SKILL.md). Read the whole `tracker.json` each run — it is
the accumulated memory of every test, so selection spans all history, not just yesterday.

## Resolve the day (push back — never guess)

`daily/NN-YYYY-MM-DD/`. **NN = (date − 24 Jun 2026) + 1** (Day 1 = 24 Jun 2026). Two milestones: **PRELIM
(full 4-paper mock) 27 Jul = Day 34**, **FINAL 17 Aug = Day 55.** Calendar:

| Day | Date | Phase | Mode | New Tier-1? |
|--|--|--|--|--|
| 01–13 | 24 Jun – 6 Jul | Build A | weekday `laq-set`; **Sun = `paper-mock`** (gentle → 1 paper) | yes — Neurology → Cardiology |
| 14–26 | 7 Jul – 19 Jul | Build B | `laq-set`; **Sun = `paper-mock`** (1 → 2 papers) | yes — Endo, Nephro, Resp, GI |
| 27–32 | 20 Jul – 25 Jul | Build C | `laq-set` + sprinkle Tier-2 | yes — **ID; last new-Tier-1 = Fri 25 Jul (Day 32)** |
| 33 | 26 Jul | Pre-prelim | `revision` (light) | no |
| **34** | **27 Jul** | **PRELIM** | **`prelim` — full 4×100 = 400** | **no** |
| 35 | 28 Jul | Diagnostic | `revision` — ingest prelim results, re-rank weak systems | no |
| 36–49 | 29 Jul – 11 Aug | Targeted push | `laq-set` driven by prelim-weak systems; **Sun = weak-paper `paper-mock`** | no new — strengthen only |
| 50–54 | 12 Aug – 16 Aug | Final taper | `revision` only — all due/weak, **no new questions** | no |
| — | 17 Aug | **FINAL THEORY** | — | — |

- If `/prep` was given no date → infer (last `activity` date + 1 study day, else day 01), **state the inferred
  date, then ask the user to confirm before doing anything.**
- **Never build more than one day.** If today is >1 study day past the last activity, surface the gap and ask
  which single day to run (graceful degradation: proceed off last-known tracker state, backfill later).

## Spacing policy (resurface after)

Read **content_score_history only** (never presentation). For `times_seen ≥ 1`, an item is **due** when
`today − last_seen ≥` its interval: **Weak 2d · Shaky 3–4d · Solid 6d · Mastered 10d** (Mastered otherwise only
in mocks). **Eligible-new** = `must_introduce` rows with `label:"unseen"`.

## Select today's set

A medicine LAQ is a heavy writing unit, so cap by **answer load**, not question count:

- **`laq-set` (weekday):** ~**1–2 new LAQs + 3–5 short notes (SAQ/crit) + 2–3 due/spot-check recalls**;
  `target_marks` ≈ **25–35**. **Cap 2 LAQs/day** (an LAQ is the heavy item — the analogue of physics's
  derivation cap). Spot-check = a random Solid/Mastered, anti-decay.
- **`paper-mock` (Sunday):** **no new Tier-1.** Compose from due + already-covered to fill the day's target;
  size ramps (1 paper = 100 → 2 papers) per the table. Lighter learning file (it's a review/test day).
- **`prelim` (Day 35):** **no new.** All four papers; every covered system represented (see daily-test).
- **`revision` days:** all due/weak items, **no new questions**.

**Ranking eligible-new:** Tier 1 before Tier 2; within a tier by system `exam_marks` (desc); then honour her
priority skeleton **Neurology (all) → Cardiology → Endocrinology → Nephrology → Respiratory → Gastroenterology
→ Infectious Disease**, parking **Tier-2 (Haem/Onc, Rheumatology, Critical Care)** on later weekdays/Sundays.
Weave a little of the **floor systems (Basic Sciences, Recent Advances)** into Build B/C so Papers I and IV are
not left at zero. **All new Tier-1 banked by Fri 25 Jul (Day 32).**

**Effort balance:** the 2-LAQ cap is firm; mix in short notes / criteria / a numerical. A full 15m LAQ counts
as heavy.

**Re-teach:** for any item that came back **weak** in yesterday's `results.md`, add it to `reteach[]` (it also
appears in `due`) and fold a short re-teach block into today's `learning.md`. After the prelim (Day 36+),
re-teach is driven by the **weakest systems/papers** the prelim exposed.

**Confidence ramp:** Build A = mostly model-answer mugging + confidence; Build B/C add applied/"discuss" framing;
post-prelim is targeted at exposed weak spots; the taper is pure consolidation.

## Write `current_selection` (the prep→test contract)

```jsonc
"current_selection": {
  "date": "2026-06-23", "day_index": 1, "mode": "laq-set", "target_marks": 30,
  "new": ["sys01-laq-q1", "..."], "due": ["sys01-saq-q2"], "spot_check": ["sys01-crit-q2"], "reteach": []
}
```
`mode` ∈ `laq-set | paper-mock | prelim | revision`. Overwrite any existing `current_selection`. Assert every
chosen ID exists in `questions`.

## Write `daily/NN-YYYY-MM-DD/learning.md`

Self-contained — she reads it top-to-bottom and is done. Front-matter for the website:
```yaml
---
date: 2026-06-23
dayIndex: 1
title: "Stroke & the acute neurology essays"   # TOPIC only — the site adds "Day N" itself
systems: ["Neurology"]
---
```
**Don't repeat "Day N" in `title` or in the body's H1** — the site renders the day number and date as page
chrome. Keep the body H1 a short encouraging line.

Then, for each **new** item, **do NOT author lessons yourself** — the cited sources do the teaching. Give,
**in this order**, five things:
1. **The question** — **always show the actual exam question first**, as a callout (`> **Q (Xm).** …`), pulled
   faithfully from the question bank (with its marks). She must *see what she's answering*.
2. **Answer to memorise (muggable)** — the marking-scheme model answer **copied from the system's question
   bank** (`systems/NN-*/question-bank*`), paired right under the question. Format it as **clearly labelled,
   scannable mark-blocks** — one per line (`**Definition** *(1m)*`, `**Aetiopathogenesis** *(2m)*`, …), keep the
   bank's block names and per-block marks. No dense prose. The bank stays the source of truth; `learning.md` is
   a daily read-from snapshot.
3. **What to draw / tabulate** — the checklist that scores independent marks (tables, flowcharts, labelled diagrams).
4. **Key facts / doses to remember** — the high-value examiner-favourite points.
5. **Learn it** — **1–2 reliable references** for the topic (Harrison's / Davidson's / API by chapter, or a
   reputable source). Pointers to read, not copied.
6. **⚠ Verify-before-mugging flag** — if the item's system `CLAUDE.md` still shows `Verification: ☐ unverified`,
   add a one-line "⚠ verify this against your source before memorising — not yet signed off" note.

For any `reteach[]` item, repeat its muggable answer + a one-line note on the mistake that lost marks + one
targeted reference. Keep due/spot-check items to a one-line "revise: …" pointer. Math in `$…$`/`$$…$$`.

## Self-check before finishing
- mode + new-Tier-1 rule match the calendar; **LAQ cap (≤2) respected**; every selected ID exists.
- `current_selection.date` == the resolved day; `learning.md` written with valid front-matter.
- unverified-system items carry the verify-before-mugging flag.
- Do **not** create `test.md`/`rubric.md` — that's `daily-test`.
