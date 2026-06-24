# MD General Medicine — Theory Pass Kit

> An adaptive daily study system built on a focused pass-kit, to get one postgraduate student
> (**Mitsu Patel**, Jaipur National University) through the **MD General Medicine theory papers**.
> Content/strategy layer: [`pass-kit.md`](pass-kit.md) · [`exam-reference/`](exam-reference/).
>
> *Refactored in-place from a CBSE Class 12 Physics kit — the physics version lives in git history and on
> `main`. The repo folder name is a historical artifact.*

---

# The Daily Loop — System Mental Model

> The design for the adaptive daily study system. The **what & why** (the model); the **how** (skills,
> schema, file layout) lives in `.claude/skills/` and `tracker.json`.

## Goal & constraints

- **Target:** clear the MD General Medicine **theory** examination — **4 papers × 100 = 400 marks**.
- **Pass gate (binding, no grace marks):** **≥ 40% in EACH of the four papers AND ≥ 50% aggregate** (≥ 200/400).
  A single paper below 40% fails the whole theory head, so the system projects **per paper**, not just an average.
- **Practical / clinical + viva (≥ 50%) is a separate gate → out of scope.** This system is theory-only.
- **No secret syllabus.** Unlike a school board, MD Medicine is all of internal medicine. The kit drills the
  high-yield, repeatedly-examined topics with muggable mark-frames + cited sources — it raises the floor; it is
  not a guarantee. Preparation stays **general**, not over-fit to one university's past papers.

## The calendar (Day 1 = 23 Jun 2026)

Two milestones: a full-format **prelim** (internal 4-paper mock) and the **final theory**.

| Phase | Days / dates | Notes |
|---|---|---|
| Build A/B/C — new Tier-1 systems | **Day 1–33 · 23 Jun → 25 Jul** | weekday `laq-set`; **Sundays = `paper-mock`** (gentle → 1 paper → 2 papers) |
| Last new-Tier-1 day | **Fri 25 Jul (Day 33)** | all new high-yield systems banked by here |
| **PRELIM** — full 4×100 mock | **Mon 27 Jul (Day 35)** | graded like any mock; its results re-rank the weak systems |
| Targeted push (prelim-weak) | **Day 37–50 · 29 Jul → 11 Aug** | no new content — strengthen exposed weak spots; Sunday weak-paper mocks |
| Final taper — revision only | **Day 51–55 · 12 → 16 Aug** | all due/weak, no new questions; dress-rehearsal pass-by-paper check |
| **FINAL THEORY** | **Sun 17 Aug (Day 56)** | |

## Sequencing

Honour Mitsu's priority — **Neurology first** (her #1) — then by weightage:
**Neuro → Cardio → Endo → Nephro → Resp → GI → Infectious Disease** (Tier 1), sprinkling **Tier 2**
(Haem/Onc, Rheumatology, Critical care) and weaving in the **Paper I (Basic Sciences) and Paper IV (Recent
Advances) floor sets** so no paper is left at zero. A loose day-by-day skeleton is planned for runway safety,
but each day's files are **built day-of** so they adapt to yesterday's results.

## The daily loop

```
[grade yesterday] → [build today's learning file] → [build today's test + frozen rubric]
   → she studies + writes the test by hand → photos into the day folder → [evaluate] → results + tracker → repeat
```

1. **Learning file** (`learning.md`, built day-of, published): self-contained. For each new item it shows the
   exam question, the **muggable marking-scheme answer copied from the bank** (Definition → Aetiopathogenesis →
   Clinical features → Investigations → Management), a "what to draw / tabulate" checklist, and cited sources —
   plus a **⚠ verify-before-mugging** flag while the system is unverified. **It never authors lessons.**
2. **Test file** (`test.md`) + a **frozen per-question rubric** (`rubric.md`), generated together. `laq-set`
   on weekdays (~1–2 LAQs + short notes, ~25–35 marks); `paper-mock` Sundays; the `prelim` is the full 4×100.
3. She studies, then writes the test **by hand on paper** (real exam conditions).
4. She photographs the answer sheets → images into `daily/NN-YYYY-MM-DD/submission/`.
5. **Evaluation** grades the images against the **frozen rubric** (block step-marking) → writes `results.md`
   and updates the **tracker**.

## State model — lightweight, NO SQLite

- **One rolling `tracker.json`** (git-diffable): `papers` + `systems` maps, and per question →
  stable ID · times-seen · last-seen · **content-score** history · presentation (legibility) deduction ·
  mastery label · numerical-variant state. Single source of truth for selection and the dashboard.
- **Stable question reference** = a hidden `<!-- id: sysNN-…-qN -->` join key under each bank heading (not the
  GitHub anchor, which breaks on re-titling).
- **Mastery labels:** Weak < 40% · Shaky 40–65% · Solid 65–85% · Mastered > 85% (recency-smoothed over the last
  two attempts).
- **Selection = agentic within a written spacing policy** (in the skill): Weak resurfaces ≤ 2 days · Shaky 3–4 ·
  Solid ~6 · Mastered ~10 / in mocks. A weekday set ≈ 1–2 new LAQs + 3–5 short notes + 2–3 due/spot-checks.
- **Projection = per paper, then a two-constraint gate:** roll per-system mastery into each paper (out of 100),
  then require **aggregate ≥ 50% AND every paper ≥ 40%**. The dashboard names the binding constraint (e.g.
  "Paper III below the 40% floor") rather than hiding a failing paper inside an average.

## Operating policies

- **Numerical-variant rule** (the few `num`/scoring questions — eGFR, anion gap, Child-Pugh, etc.): first
  exposure uses original values; 2nd+ resurfacing **swaps the numbers**. On any swap the answer is **recomputed
  and re-verified** (incl. a clinical-plausibility check) before the rubric is frozen.
- **Content vs presentation split:** marks are docked for illegible handwriting (real-exam discipline), but the
  **content score and the presentation deduction are recorded separately** — selection keys off content only,
  so a topic she *knows* but wrote messily is never re-queued. (`handwriting-parsing` splits legibility from
  photo quality.)
- **Verification gate (safety):** answers are authored from standard texts, cited, and adversarially
  fact-checked — but a wrong dose is dangerous, so **Mitsu signs off each system** (flips its `Verification`
  line) before it is treated as muggable.
- **Graceful degradation:** if a day's photos are missing/late, the next test runs off the last-known tracker
  state + spacing rule and we backfill later — a missing day never blocks the loop.

## Out of scope

- The practical / clinical + viva examination (separate ≥ 50% gate).
