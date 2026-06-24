---
name: seed-tracker
description: Use to bootstrap the daily-loop state layer. Parses the important questions in pass-kit.md Part 2, injects a stable hidden ID comment under each question's bank heading, and writes tracker.json. Safe to re-run ONLY during the authoring build (before any real score history exists); never re-run once the student has started the daily loop — it would overwrite score history. This skill owns the canonical tracker.json schema that daily-prep, daily-test, and daily-eval read.
---

# seed-tracker

Bootstrap the daily study loop. After this runs there will be (a) a `<!-- id: ... -->` comment under each
bank heading listed in `pass-kit.md` Part 2, and (b) a fresh `tracker.json` at the repo root.

> **Guard:** if `tracker.json` already exists **and contains any non-empty `content_score_history`**, STOP
> and ask — re-seeding would clobber real history. During the **authoring build** (systems being added phase
> by phase, before the student starts Day 1) there is no history yet, so re-seeding to pick up newly-authored
> systems is safe. The freeze takes effect the moment the student begins the real loop.

## Why a helper script

The injection is a purely mechanical transform of the Part-2 headings + JSON scaffolding — error-prone to do
by hand. Write a **stdlib-only Python helper to the scratchpad, run it, then discard it** (do not commit it —
the repo stays content-only). Commit only the results: the ID comments in the banks and `tracker.json`.

## The stable ID scheme (the join key)

The ID is derived from the bank file path + the heading's own `QN` number — **not** from title text, so it
survives re-wording.

- **Split system** (`systems/NN-slug/question-bank/0X-type.md`): `sys{NN}-{typecode}-q{N}`
  - typecode by filename: `01-laq→laq` · `02-saq→saq` · `03-criteria→crit` · `04-numericals→num` · `05-case→case` · (`0X-mcq→mcq` if present)
  - e.g. `01-laq.md` `### Q3.` in system 01 → `sys01-laq-q3`
- **Single-file system** (`systems/NN-slug/question-bank.md`): `sys{NN}-q{N}`
  - e.g. sys09 `### Q7.` → `sys09-q7`

`{N}` is read from the heading (`### Q3. …` → 3), never invented. Split systems need the typecode because
`Q1` recurs across their sub-files; single-file systems number continuously so `sys09-q7` is unique.

## Matching a bullet to its heading (robust, no slug replication)

Each Part-2 bullet is `- [text](FILE#ANCHOR) — *MARKS · TYPE*`. The `ANCHOR` always starts `q{N}-`. So:
extract `{N}` from the anchor → open `FILE` → find the **single** heading line matching `^### Q{N}[. ]` →
insert the ID comment on the **next line**. Never edit the heading line itself — that guarantees the existing
GitHub anchor is unchanged (it derives from heading text only). If a file yields zero or >1 match for a `QN`,
**fail loudly** (don't guess). Ignore Part-2 lines that are `*(scheduled: …)*` placeholders (systems not yet
authored have no bullets, only a content-map link).

Idempotency: if the line after the heading is already `<!-- id: ... -->`, skip insertion.

## Parsing marks and type

From the italic suffix `*MARKS · TYPE*`:
- **marks** = max integer in `MARKS` (ranges undercount otherwise): `5m→5`, `10m→10`, `10-15m→15`.
- **type** = the `TYPE` token, one of `laq | saq | crit | num | case | mcq`. (For split systems the filename is
  authoritative and must agree with the suffix.)

## Tier tagging (by system)

Tier is assigned by which **system** a question belongs to (read from the ID prefix `sysNN`):

- **Tier 1** (`must_introduce: true`) — the high-yield core: **sys01 Neurology, sys02 Cardiology,
  sys03 Endocrinology, sys04 Nephrology, sys05 Respiratory, sys06 Gastroenterology, sys07 Infectious Disease.**
- **Tier 2** (`must_introduce: true`) — "memorise the flagship, don't master": **sys09 Haem/Onc, sys10
  Rheumatology, sys11 Critical Care**, and the per-paper floors **sys12 Basic Sciences, sys13 Recent Advances**
  (a minimum set so Papers I and IV clear the 40% floor).
- **Tier 0** (`must_introduce: false`) — **sys08 Diagnostic Criteria & Scores** (cross-cutting reference; its
  scores are also embedded in each clinical system's `03-criteria.md`), plus any other non-must questions.

> Tier is **not** the same as `tier` count constants — do not hard-code totals; count whatever Part 2 contains
> this run (see self-checks). Phase 1 seeds only Neurology (sys01), so all rows will be Tier 1.

## Canonical tracker.json schema (v2)

```jsonc
{
  "meta": {
    "student": "Mitsu",
    "institution": "Jaipur National University",
    "exam_name": "MD General Medicine — Theory",
    "scope": "theory-only",                       // practical/viva gate is separate & out of scope
    "milestones": { "prelim": "2026-07-27", "final": "2026-08-17" },
    "pass_rule": {                                // BOTH bind, no grace marks
      "per_paper_floor_pct": 40,                  // ≥40% in EACH paper
      "aggregate_pct": 50,                        // ≥50% across all four (≥200/400)
      "papers_count": 4, "marks_per_paper": 100, "total_marks": 400
    },
    "practical_note": "Separate ≥50% practical/clinical+viva gate exists; out of scope for this kit.",
    "bands": { "weak": 0.40, "shaky": 0.65, "solid": 0.85 },  // upper cut of each band; >solid = mastered
    "seeded_at": "<today ISO>", "schema_version": 2
  },
  "papers": {                                     // each paper's systems' exam_marks sum to "marks"
    "P1": { "name": "Paper I — Basic Sciences",        "marks": 100 },
    "P2": { "name": "Paper II — Medicine & Allied (A)", "marks": 100 },
    "P3": { "name": "Paper III — Medicine & Allied (B)","marks": 100 },
    "P4": { "name": "Paper IV — Recent Advances",       "marks": 100 }
  },
  "systems": {                                    // the leaf unit (replaces physics "chapters")
    "sys01": { "name": "Neurology",                     "paper_id": "P2", "exam_marks": 45 },
    "sys02": { "name": "Cardiology",                    "paper_id": "P3", "exam_marks": 20 },
    "sys03": { "name": "Endocrinology",                 "paper_id": "P3", "exam_marks": 16 },
    "sys04": { "name": "Nephrology",                    "paper_id": "P3", "exam_marks": 14 },
    "sys05": { "name": "Respiratory",                   "paper_id": "P3", "exam_marks": 16 },
    "sys06": { "name": "Gastroenterology / Hepatology", "paper_id": "P3", "exam_marks": 16 },
    "sys07": { "name": "Infectious & Tropical Disease", "paper_id": "P2", "exam_marks": 35 },
    "sys08": { "name": "Diagnostic Criteria & Scores",  "paper_id": null, "exam_marks": 0 },
    "sys09": { "name": "Haematology / Oncology",        "paper_id": "P2", "exam_marks": 20 },
    "sys10": { "name": "Rheumatology",                  "paper_id": "P3", "exam_marks": 9 },
    "sys11": { "name": "Critical Care / Sepsis",        "paper_id": "P3", "exam_marks": 9 },
    "sys12": { "name": "Basic Sciences",                "paper_id": "P1", "exam_marks": 100 },
    "sys13": { "name": "Recent Advances",               "paper_id": "P4", "exam_marks": 100 }
  },
  "current_selection": null,                      // set by daily-prep, cleared by daily-eval
  "questions": {
    "sys01-laq-q1": {
      "display": "systems/01-neurology/question-bank/01-laq.md#q1-acute-ischaemic-stroke-...-15m",
      "system": "sys01", "type": "laq", "marks": 15, "tier": 1, "must_introduce": true,
      "times_seen": 0, "last_seen": null,
      "content_score_history": [],               // [{date, pct}] content only — selection reads ONLY this
      "presentation_deduction_history": [],      // [{date, marks}] legibility deductions — never feeds selection
      "label": "unseen",                         // unseen | weak | shaky | solid | mastered
      "numerical_variant": null                  // type:"num" (& any crit with a computed total) → {uses_original_values, last_variant_date, verified}
    }
    // … one row per Part-2 bullet. type:"num" rows seed numerical_variant = {uses_original_values:true, last_variant_date:null, verified:true}
  },
  "projections": {                               // filled by daily-eval; per-paper, never a single global ratio
    "papers": { "P1": {"worst":null,"best":null}, "P2": {"worst":null,"best":null},
                "P3": {"worst":null,"best":null}, "P4": {"worst":null,"best":null} },
    "aggregate": { "worst_pct": null, "best_pct": null },
    "verdict": { "binding": null, "at_risk_papers": [], "passProjectedBest": null },
    "trend": []
  },
  "activity": []                                  // filled by daily-eval
}
```

## Procedure

1. Guard: abort if `tracker.json` exists with real history (see Guard above).
2. Write the Python helper to scratchpad. It: reads `pass-kit.md`; regex-extracts every Part-2 bullet
   `^- \[(?P<text>.+?)\]\((?P<file>systems/.+?\.md)#(?P<anchor>[^)]+)\)\s*—\s*\*(?P<meta>.+?)\*`;
   for each, derives `{N}`/typecode/ID, marks, type, tier (by `sysNN`); injects the ID comment (idempotent,
   heading-line untouched); accumulates question rows; writes `tracker.json` per the schema with today's
   `seeded_at`. The `papers`/`systems`/`meta` blocks are static (copy from the schema above).
3. Run it.
4. **Self-check (the helper prints these; verify before finishing):**
   - one question row per Part-2 bullet; every ID unique; every bullet matched exactly one heading
     (zero unmatched, zero ambiguous).
   - tier counts reported (Tier-1 = sys01–07 rows, Tier-2 = sys09–13 rows, Tier-0 = sys08) — report the
     numbers, do **not** assert a hard-coded total (it grows each phase).
   - `git diff --stat` on `systems/` shows only **added** lines (the comments), **no heading lines changed**.
   - **invariant:** for each paper, Σ `exam_marks` of its systems == that paper's `marks` (100); all four
     sum to 400. (sys08 has `paper_id:null`/`exam_marks:0` and is excluded.)
5. Spot-check anchors still resolve (confirm heading text byte-identical to before). Report the summary;
   discard the helper script.
