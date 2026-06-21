---
name: seed-tracker
description: Use ONCE to bootstrap the daily-loop state layer. Parses the 195 important questions in pass-kit.md Part 2, injects a stable hidden ID comment under each question's bank heading, and writes tracker.json. Do NOT run again after seeding — it would overwrite score history. This skill owns the canonical tracker.json schema that daily-prep, daily-test, and daily-eval read.
---

# seed-tracker

Bootstrap the daily study loop. Run this **exactly once**, before the first `/prep`.

After this runs there will be (a) a `<!-- id: ... -->` comment under each of the 195 bank
headings listed in `pass-kit.md` Part 2, and (b) a fresh `tracker.json` at the repo root.

> **Guard:** if `tracker.json` already exists, STOP and ask the user. Re-seeding clobbers all
> history. The only safe re-run is into a repo with no tracker.

## Why a helper script

The injection is a purely mechanical transform of 195 headings + JSON scaffolding — error-prone
to do by hand. Write a **stdlib-only Python helper to the scratchpad, run it, then discard it**
(do not commit it — the repo stays content-only). Commit only the results: the ID comments in the
banks and `tracker.json`.

## The stable ID scheme (the join key)

The ID is derived from the bank file path + the heading's own `QN` number — **not** from title text,
so it survives re-wording.

- **Split chapter** (`chapters/NN-slug/question-bank/0X-type.md`): `ch{NN}-{typecode}-q{N}`
  - typecode by filename: `01-mcq-assertion-reason→mcq` · `02-short-answer→sa` · `03-derivations→deriv` · `04-numericals→num` · `05-case-study→cs`
  - e.g. `02-short-answer.md` `### Q7.` in ch01 → `ch01-sa-q7`
- **Single-file chapter** (`chapters/NN-slug/question-bank.md`): `ch{NN}-q{N}`
  - e.g. ch05 `### Q7.` → `ch05-q7`

`{N}` is read from the heading (`### Q7. …` → 7), never invented. Split chapters need the typecode
because `Q1` recurs across their 5 files; single-file chapters number continuously so `ch05-q7` is unique.

## Matching a bullet to its heading (robust, no slug replication)

Each Part-2 bullet is `- [text](FILE#ANCHOR) — *MARKS · TYPE*`. The `ANCHOR` always starts `q{N}-`.
So: extract `{N}` from the anchor → open `FILE` → find the **single** heading line matching
`^### Q{N}[. ]` → insert the ID comment on the **next line**. Never edit the heading line itself —
that is what guarantees the existing GitHub anchor is unchanged (it derives from heading text only).
If a file yields zero or >1 match for a `QN`, **fail loudly** (don't guess).

Idempotency: if the line after the heading is already `<!-- id: ... -->`, skip insertion.

## Parsing marks and type

From the italic suffix `*MARKS · TYPE*`:
- **marks** = max integer in `MARKS` (ranges undercount otherwise): `2-3m→3`, `3-5m→5`, `5m→5`. Case-studies are `4`.
- **type** for split chapters = from filename (authoritative). For single-file chapters, from `TYPE`:
  contains `deriv`/`long answer`/`graph`→`deriv` · `short answer`→`sa` · `numerical`→`num` · `case`→`cs` · `mcq`→`mcq`.

## Tier tagging

- **tier 1** (`must_introduce: true`): every Part-2 bullet in chapters **03, 09, 11, 12, 14** (= 74 questions: 14+16+13+13+18).
- **tier 2** (`must_introduce: true`): the ~18 curated "memorise, don't master" items from pass-kit Part-1 Tier-2.
  Canonical anchors (confirm each resolves during the run):
  - `ch01-deriv-q5` (line charge), `ch01-deriv-q6` (plane sheet), `ch01-deriv-q7` (spherical shell), `ch01-deriv-q1` (axial dipole field)
  - `ch02-deriv-q5` (energy ½CV²), `ch02-deriv-q7` (series/parallel combinations)
  - `ch05-q7` (dia/para/ferro), `ch05-q8` (Curie's law)
  - `ch06-q8` (Lenz's law), `ch06-q13` (motional EMF)
  - `ch07-q14` (transformer), `ch07-q18` (LCR resonance)
  - `ch08-q10` (EM-wave properties), `ch08-q12` (EM spectrum order/uses)
  - `ch10-q18` (YDSE fringe width)
  - `ch13-q9` (mass defect/BE), `ch13-q21` (BE/nucleon Fe-56), `ch13-q22` (energy released per fission)
- **tier 0** (`must_introduce: false`): all other Part-2 questions (seeded so they can be linked / used as spot-checks, but not force-introduced).

74 tier-1 + ~18 tier-2 ≈ 92 must-cover (the README's "~94").

## Canonical tracker.json schema

```jsonc
{
  "meta": {
    "student": "Dhruvi", "exam_date": "2026-07-15", "pass_mark": 23, "total_marks": 70,
    "bands": { "weak": 0.40, "shaky": 0.65, "solid": 0.85 },  // upper cut of each band; >solid = mastered
    "seeded_at": "<today ISO>", "schema_version": 1
  },
  "chapters": {                                  // exam_marks from weightage-blueprint; sum = 70
    "ch01": { "name": "Electric Charges and Fields", "exam_marks": 5 },
    "ch02": { "name": "Electrostatic Potential and Capacitance", "exam_marks": 5 },
    "ch03": { "name": "Current Electricity", "exam_marks": 6 },
    "ch04": { "name": "Moving Charges and Magnetism", "exam_marks": 6 },
    "ch05": { "name": "Magnetism and Matter", "exam_marks": 5 },
    "ch06": { "name": "Electromagnetic Induction", "exam_marks": 4 },
    "ch07": { "name": "Alternating Current", "exam_marks": 2 },
    "ch08": { "name": "Electromagnetic Waves", "exam_marks": 4 },
    "ch09": { "name": "Ray Optics and Optical Instruments", "exam_marks": 10 },
    "ch10": { "name": "Wave Optics", "exam_marks": 4 },
    "ch11": { "name": "Dual Nature of Radiation and Matter", "exam_marks": 4 },
    "ch12": { "name": "Atoms", "exam_marks": 4 },
    "ch13": { "name": "Nuclei", "exam_marks": 4 },
    "ch14": { "name": "Semiconductor Electronics", "exam_marks": 7 }
  },
  "current_selection": null,                     // set by daily-prep, cleared by daily-eval
  "questions": {
    "ch01-sa-q7": {
      "display": "chapters/01-electric-charges-and-fields/question-bank/02-short-answer.md#q7-state-gausss-law-in-electrostatics-2m",
      "chapter": "ch01", "type": "sa", "marks": 2, "tier": 2, "must_introduce": true,
      "times_seen": 0, "last_seen": null,
      "physics_score_history": [],               // [{date, pct}] physics only — selection reads ONLY this
      "presentation_deduction_history": [],      // [{date, marks}] legibility deductions — never feeds selection
      "label": "unseen",                         // unseen | weak | shaky | solid | mastered
      "numerical_variant": null                  // type:"num" only → {uses_original_values, last_variant_date, verified}
    }
    // … 195 rows. type:"num" rows seed numerical_variant = {uses_original_values:true, last_variant_date:null, verified:true}
  },
  "projections": { "worst": null, "best": null, "trend": [] },  // filled by daily-eval
  "activity": []                                                // filled by daily-eval
}
```

## Procedure

1. Guard: abort if `tracker.json` exists.
2. Write the Python helper to scratchpad. It: reads `pass-kit.md`; regex-extracts every Part-2 bullet
   `^- \[(?P<text>.+?)\]\((?P<file>chapters/.+?\.md)#(?P<anchor>[^)]+)\)\s*—\s*\*(?P<meta>.+?)\*`;
   for each, derives `{N}`/typecode/ID, marks, type, tier; injects the ID comment (idempotent, heading-line untouched);
   accumulates question rows; writes `tracker.json` per the schema with today's `seeded_at`.
3. Run it.
4. **Self-check (the helper prints these; verify before finishing):**
   - exactly **195** question rows; every ID unique.
   - **74** tier-1, **~18** tier-2, rest tier-0; every tier-2 canonical anchor resolved (else report the misses).
   - every bullet matched exactly one heading (zero unmatched, zero ambiguous).
   - `git diff --stat` on `chapters/` shows only **added** lines (the comments), **no heading lines changed**.
   - chapter `exam_marks` sum to 70.
5. Spot-check 3 anchors still resolve (one split, one single-file, one case-study) by confirming the
   heading text is byte-identical to before. Report the summary; discard the helper script.
