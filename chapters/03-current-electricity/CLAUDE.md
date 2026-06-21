# Chapter 3 — Current Electricity (content map)

> Pass-kit content map for Claude. Pointers + coverage status for this chapter only.

## Chapter

- **Number / name:** Chapter 3 — Current Electricity (Unit I+II cluster)
- **Approx weightage:** ~6 marks (per repo `exam-reference/weightage-blueprint.md`)
- **Difficulty:** Easy — intuitive concepts, plug-in numericals; high return-on-effort for a pass.
- **Layout:** SPLIT (five question-bank files under `question-bank/`).

## Question-bank files

| File | Holds |
|------|-------|
| `question-bank/01-mcq-assertion-reason.md` | Section A: 16 MCQs + 6 Assertion–Reason, 1m each |
| `question-bank/02-short-answer.md` | Sections B/C conceptual, 2–3m (15 Qs) |
| `question-bank/03-derivations.md` | 3–5m derivations / long answers (10 Qs) |
| `question-bank/04-numericals.md` | Worked numericals, 2–5m (15 Qs) |
| `question-bank/05-case-study.md` | Section D case-based, 4m each (3 cases) |

Total ≈ 49 items (well above the 25–40 target; MCQ/AR counted individually).

## Important / repeated questions (high frequency)

- **I = neAv_d** derivation (drift velocity ↔ current) — almost guaranteed. `03-derivations.md` Q1.
- **v_d = (eE/m)τ** and **Ohm's law from electron theory → ρ = m/(ne²τ)** — `03-derivations.md` Q2, Q3.
- **Temperature dependence of resistance** R = R₀[1+αΔT]; ρ–T graphs — `03-derivations.md` Q4.
- **Kirchhoff's laws** statement + two-loop circuit solve — `02-short-answer.md` Q9 (states), `04-numericals.md` Q10.
- **Wheatstone bridge balance** P/Q = R/S derivation — `03-derivations.md` Q7.
- **Meter bridge** X = Y·l/(100−l) — `02-short-answer.md` Q11, `04-numericals.md` Q9.
- **Potentiometer: compare EMFs** E₁/E₂ = l₁/l₂ — `03-derivations.md` Q8, `04-numericals.md` Q7.
- **Potentiometer: internal resistance** r = R(l₁−l₂)/l₂ — `03-derivations.md` Q9, `04-numericals.md` Q8.
- **Cells in series / parallel** equivalents + numericals — `03-derivations.md` Q5/Q6, `04-numericals.md` Q14/Q15.
- **EMF vs terminal voltage; internal resistance** V = ε − Ir — `02-short-answer.md` Q4/Q5, `05-case-study.md` Q2.

### Key derivations (must-know, boxed in file)
- I = neAv_d · v_d = (eE/m)τ · ρ = m/(ne²τ), σ = ne²τ/m · P/Q = R/S · E₁/E₂ = l₁/l₂ · r = R(l₁−l₂)/l₂ · series (nε, nr) / parallel (ε, r/n) · I = ε/(R+r), V = ε − Ir.

## Diagram inventory (questions needing a drawing)

| Question | Diagram |
|----------|---------|
| `02-short-answer.md` Q2 | V–I graphs: ohmic vs non-ohmic |
| `02-short-answer.md` Q10 / `03-derivations.md` Q7 | Wheatstone bridge circuit |
| `02-short-answer.md` Q11 / `05-case-study.md` Q3 | Meter bridge setup |
| `03-derivations.md` Q4 | Resistivity vs temperature (metal vs semiconductor) |
| `03-derivations.md` Q8 | Potentiometer — EMF comparison |
| `03-derivations.md` Q9 | Potentiometer — internal resistance |
| `04-numericals.md` Q10 | Two-loop Kirchhoff circuit |

All diagrams are "what-to-draw" checklists — no images embedded.

## Sources used

- NCERT solutions: https://byjus.com/ncert-solutions-class-12-physics/chapter-3-current-electricity/ (values cross-checked by hand)
- Important questions / PYQs: https://www.vedantu.com/cbse/important-questions-class-12-physics-chapter-3
- Important questions: https://www.learncbse.in/important-questions-for-class-12-physics-chapter-3/

Numeric answers independently re-computed (`python3`): I_max 30 A; R 17 Ω / V 8.5 V; series 6 Ω / 2 A; parallel 10/5/4 A, total 19 A; v_d 1.1×10⁻⁴ m/s, t 2.7×10⁴ s; heater ≈867 °C; E₂ 2.25 V; r 1.69 Ω; meter bridge X 8.16 Ω.

## Syllabus accuracy (2025-26)

All topics are in the current rationalised CBSE Class 12 Physics syllabus (Chapter 3). No deleted sub-topics included (e.g. no Carbon-resistor colour-code experiment claims, no removed material). Drift velocity, Ohm's law, resistivity & temperature dependence, Kirchhoff's laws, Wheatstone bridge, meter bridge, potentiometer (EMF comparison + internal resistance), and cells in series/parallel are all retained.

## Coverage / status

- **Status: COMPLETE.** All listed important topics covered across the five files.
- Every numerical verified by independent calculation.
- One nuance flagged in-file: meter-bridge formula depends on which gap holds the unknown — `04-numericals.md` Q9 uses X (left gap) = Y·l/(100−l) = 8.16 Ω (byjus' 8.2 Ω rounds the same setup).
- Kirchhoff numerical (`04-numericals.md` Q10) uses a clean template; values should be swapped to match the actual exam circuit — the method is what scores.
