# How-to-pass-the-12th-physics-test-in-20-days

> CBSE Class 12 Physics (042) — an adaptive daily study system built on top of a focused pass-kit,
> to get one student over the **23 / 70 (33%)** theory pass line by 15 Jul 2026.
> Content/strategy layer: [`pass-kit.md`](pass-kit.md) · [`exam-reference/`](exam-reference/).

---

# The Daily Loop — System Mental Model

> The agreed design for the adaptive daily study system. Written down so the plan survives a long
> conversation. This is the **what & why** (the model); the **how** (skills, schema, file layout)
> gets built after this is locked.

## Goal & constraints

- **Target:** clear CBSE Class 12 Physics (042) theory — **23 / 70 (33%)** with a margin.
- **Practical/internal gate: already passed → out of scope.** This system is theory-only.
- **Student:** generalised pass-kit, now driven for one student. She has already started on **Coulomb's law (Ch 1)**.
- **Bias:** maximise exam score in a tight window → everything stays **exam-question-oriented**, not concept-oriented.

## The calendar (verified weekdays)

Today is **Sun 21 Jun 2026**. She studies from **Mon 22 Jun**.

| Phase | Dates | Notes |
|---|---|---|
| New content | **22 Jun → 12 Jul** (21 days) | 6 new Qs/day target |
| Sundays — full mock, **no new Tier-1** | **28 Jun · 5 Jul · 12 Jul** | breathing room / anti-burnout |
| **Last new-Tier-1 day** | **Sat 11 Jul** | because 12 Jul is a Sunday mock |
| Dress-rehearsal full mock | Sun 12 Jul | last new-content day |
| Pure revision (no new Qs) | Mon–Tue 13–14 Jul | |
| **Exam** | **Wed 15 Jul** | |

The 3 Sundays auto-deliver the confidence ramp: small/gentle paper (28 Jun) → half-paper (5 Jul) → full dress rehearsal (12 Jul).

## Capacity math (front-loading is mandatory)

- **Effective new-Tier-1 days = 18** (21 minus 3 Sundays).
- **Tier-1 = 74 Qs ≈ 31 marks**, breakdown: 28 derivations/long · 21 numericals · 19 short-answer · 6 case-study.
  - Ch 14 (18) · Ch 9 (16) · Ch 3 (14) · Ch 12 (13) · Ch 11 (13).
- **Tier-2 harvest ≈ 20 targeted items** ("memorise, don't master") from Ch 1, 2, 5, 6, 7, 8, 10, 13.
- **Must-cover ≈ 94 Qs.** At 6/day over 18 days = ~108 capacity → **only ~2 days of real buffer.**
- 6 Qs/day (vs the 4.5 even-spread baseline) is deliberate slack for sick days / re-teach. The thin buffer means **Tier-1 must be front-loaded — no slipping it into the back half.**

## Sequencing — hybrid (honour her start, then chase marks)

Finish her current **electrostatics→current cluster (Ch 1 → 2 → 3)** since she's mid-Coulomb and it's contiguous → **jump to the big earners Ch 14 then Ch 9** (don't plod 4→5→6→7→8) → **modern physics Ch 11 → 12 → 13** → sprinkle remaining Tier-2 (5, 6, 7, 8, 10), parking lighter items on Sundays. **All new Tier-1 banked by Sat 11 Jul.** (Note: Ch 1 is Tier-2, not Tier-1 — her start point is not top priority, hence the early pivot.)

A loose **21-day sequence skeleton** (which ~6 Qs land which day) is planned up front for runway safety, but each day's files are **built day-of** (see below) so they can adapt to yesterday's results. Each day's 6 must be **effort-balanced** — cap ~2–3 derivations, mix in numericals/short-answers.

## The daily loop

```
[grade yesterday's submission] → [build today's learning file] → [build today's test + frozen rubric]
   → she studies + writes test by hand → photos into repo folder → [evaluate] → results + tracker update → repeat
```

1. **Learning file** (one MD per day, built day-of, not pre-generated): self-contained, read top-to-bottom and you're done for the day. Embeds the material for the day's ~6 Qs **plus links to reliable popular sources** (Khan Academy / good YouTube). May fold in a **re-teach** of something she failed.
2. **Test file** (one MD per day) + **frozen per-question marking rubric** generated at the same time. CBSE-format mirror. **Mini-paper (~30–45 min, ~12–18 marks) on weekdays; full paper on Sundays only.** Composition follows the spacing policy: today's new + due-for-review + a couple of spot-checks. **Mostly covered topics; uncovered kept minimal early** (confidence ramp).
3. She studies, then writes the test **by hand on paper** (real exam conditions).
4. She photographs the answer sheets → images dropped into a repo folder → relayed.
5. **Evaluation** grades the images against the **frozen rubric**, CBSE step-marking → writes a `results.md` (human-facing) and updates the **tracker** (machine state).

A one-time **HTML sample-paper-as-image** shows her how to lay out / label answers — loose guidance, not hard rules, so she writes the way she will in the real exam.

## State model — lightweight, NO SQLite

The scale is tiny (~94 Qs, 21 days) and selection is an agent's fuzzy-judgment job, not a query job. So:

- **One rolling tracker file** (markdown/JSON, git-diffable — *not* a binary DB): per question →
  **stable reference · times-seen · last-seen date · physics-score history · current label**. It is the single source of truth the selection agent reads, so it never forgets a weak item or double-counts across scattered results files.
- **Stable question reference** = the join key (the existing anchor slug is fine, as long as it's stable). This is the one piece of structure that must exist.
- **Mastery labels** (≈ CBSE partial-credit bands): **Weak <40% · Shaky 40–65% · Solid 65–85% · Mastered >85%** (confirm exact cuts at build).
- **Selection = agentic, within a written spacing policy** (lives in the skill, not in code): Weak resurfaces ≤2 days · Shaky 3–4 · Solid ~6 · Mastered ~10 / in mocks. Each test ≈ **6 new + 3–5 due + 1–2 spot-checks.** The agent uses judgment *within* these guardrails (reading the tracker + question bank + [`weightage-blueprint`](exam-reference/weightage-blueprint.md)).

## Operating policies

- **Numerical-variant rule:** first exposure uses the original values; **2nd+ resurfacing swaps the numbers** (keyed to the tracker's repeat-count) so it tests method not memory; plus a manual "make it hard" override. **On any value swap, the answer must be recomputed *and verified* before the rubric is frozen** (agents slip on arithmetic — a swapped question with the old key grades correct work as wrong).
- **Handwriting:** marks *are* docked for unclear handwriting (trains her for the real exam). **But record the physics score and the presentation deduction separately** — the selection loop keys off the **physics** score only, so it never re-feeds a topic she actually knows just because she wrote it messily. (The `handwriting-parsing` skill already splits legibility from photo quality.)
- **Confidence ramp:** week 1 ~95% covered + confidence-building → middle introduces 1–2 application stretches → final mocks (12 Jul + 13–14 Jul) go fully realistic, incl. competency / unseen-application framing.
- **Graceful degradation:** if a day's photos/results are missing or late, the next test runs off the **last-known tracker state + spacing rule** and we backfill later — a missing day never blocks the loop.

## Components to build (the "how", after this is locked)

- **Test-generation skill** — reads tracker + bank + blueprint + spacing policy → selects questions → builds CBSE-format test MD → generates & **freezes** per-question rubric → applies numerical-variant rule (with recompute-verify). Mini vs Sunday-full modes.
- **Evaluation skill** — ingests answer-sheet images → uses **`handwriting-parsing`** → grades vs frozen rubric (CBSE step-marking), two modes: **bank-matched** for standard Qs, **first-principles** for unseen/application Qs → splits physics vs handwriting → writes `results.md` + updates tracker.
- **Existing asset:** `handwriting-parsing` skill (transcription + legibility, separates handwriting vs photo problems).

## Locked primitives going into build

1. **Lightweight stable question reference** (the join key).
2. **One rolling tracker file** + **written spacing/selection policy** in the skill — no SQLite.
3. **Daily cycle order**, with graceful degradation.
4. **Two skills** (test-generation, evaluation) leveraging the existing handwriting-parsing skill.

## Out of scope

- Practical / internal assessment (already passed).
