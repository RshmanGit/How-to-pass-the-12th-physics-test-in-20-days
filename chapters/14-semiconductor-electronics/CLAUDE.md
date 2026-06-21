# Chapter 14 — Semiconductor Electronics: Materials, Devices and Simple Circuits (Content Map)

## Chapter
- **Number / Name:** Chapter 14 — Semiconductor Electronics: Materials, Devices and Simple Circuits
- **Unit:** Unit IX — Electronic Devices (CBSE Class 12 Physics, 2025-26)
- **Approx weightage:** ~7 marks (Unit IX is the only chapter in its unit = 7 marks). Usually 1-2 MCQ/AR + one short answer + a rectifier/V-I long answer, with a case study in lean years.
- **Difficulty:** Easy-to-moderate and high-yield. Conceptual, formula-light; questions repeat almost verbatim (depletion region, biasing, rectifiers, special diodes). The diagram-heavy long answers (rectifiers, V-I curve) are near-guaranteed marks — practise drawing them.

## Question-bank files (SPLIT layout)
| File | Holds |
|------|-------|
| `question-bank/01-mcq-assertion-reason.md` | Section A: 16 MCQs (Q1-Q16) + Assertion-Reason (Q17-Q21), 1 mark each. Band gaps, doping, neutrality, depletion/biasing, knee voltage, dynamic resistance, ripple frequency, Zener/photodiode/LED/solar cell. 21 items. |
| `question-bank/02-short-answer.md` | Sections B/C conceptual, 2-3m (Q1-Q14). Intrinsic vs extrinsic, n vs p, depletion formation, biasing effects, Zener regulator, photodiode, LED, solar cell, band diagrams, hole conduction, diode equation. 14 questions. |
| `question-bank/03-derivations.md` | Long answers 3-5m (Q1-Q7). V-I characteristics, half-wave & full-wave rectifiers, capacitor filter, law of mass action, band diagrams of n/p type, Zener breakdown. Diagram-heavy. 7 questions. |
| `question-bank/04-numericals.md` | Worked numericals (Q1-Q11). Carrier conc after doping (×2), photodiode wavelength, energy gap ↔ λ, diode equation, dynamic resistance, conductivity ratio, ideal-diode circuits, rectifier frequency, Zener series resistor. 11 questions. |
| `question-bank/05-case-study.md` | Section D case-based, 4m each (Q1-Q3), 4 sub-parts each. Rectification, special-purpose diodes, doping & carrier type. 3 case studies. |

**Total: ~56 numbered questions** (plus 12 case sub-parts) across the five files.

## Important / repeated questions (pass-kit priority)
- **Formation of the depletion region + barrier potential** — most repeated conceptual question. (02 Q4, 01 Q6-Q7)
- **Effect of forward/reverse bias on depletion width & barrier** — (02 Q5, 01 Q8)
- **Forward vs reverse bias comparison (table + circuits)** — (02 Q6)
- **V-I characteristics of a junction diode (circuit + graph, knee voltage, dynamic resistance)** — (03 Q1)
- **Half-wave rectifier (circuit + waveforms)** — (03 Q2)
- **Full-wave rectifier, centre-tapped (circuit + waveforms + efficiency)** — highest-value long answer. (03 Q3)
- **Zener diode as voltage regulator (circuit + working)** — (02 Q8, 03 Q7)
- **Photodiode — working + why reverse-biased** — (02 Q9, 01 Q14)
- **LED — working + visible band-gap range + why not Si/Ge** — (02 Q10, 01 Q15, Q20)
- **Solar cell — principle + material criteria (1.0-1.8 eV)** — (02 Q11, 01 Q16)
- **Intrinsic vs extrinsic; n-type vs p-type** — (02 Q1, Q2)
- **Numericals:** carrier conc via law of mass action after doping (04 Q1, Q2); photodiode detect/not-detect a wavelength (04 Q3); conductivity ratio at two temperatures (04 Q7); ideal-diode circuits (04 Q8, Q9).

## Key derivations / must-know results
- **Law of mass action:** n_e · n_h = n_i² → minority density = n_i²/(majority density). (03 Q5, 04 Q1-Q2)
- **Diode equation:** I = I₀[exp(eV/k_BT) − 1]; reverse → I → −I₀ (saturation). (02 Q14, 04 Q5)
- **Dynamic resistance:** r_d = ΔV/ΔI. (01 Q11, 04 Q6)
- **Knee voltage:** ~0.7 V Si, ~0.3 V Ge. Band gaps: Ge 0.7 eV, Si 1.1 eV. (01 Q10)
- **Photon energy / band gap:** E = hc/λ, hc = 1.24 × 10⁻⁶ eV·m; detect only if hc/λ ≥ E_g. (04 Q3-Q4)
- **Rectifier output frequency:** half-wave = f, full-wave = 2f. (01 Q12, 04 Q10, 05 Q1)
- **Conductivity-temperature:** σ ∝ n_i ∝ exp(−E_g/2k_BT). (02 Q3, 04 Q7)
- **Visible LED band gap ≈ 1.8-3 eV; solar-cell material ≈ 1.0-1.8 eV.**

## Diagram inventory (questions needing a drawing)
| Question | Diagram | Mark-scoring labels |
|----------|---------|---------------------|
| 02 Q4 | p-n junction at equilibrium | depletion layer, − ions (p) / + ions (n), field arrow n→p, barrier V_B |
| 02 Q6 | Forward & reverse bias circuits | battery polarity for each, diode symbol with p/n, series resistor |
| 02 Q8 | Zener regulator circuit | series R_s, Zener reverse-biased across R_L, V_out = V_Z |
| 02 Q12 | Band structures of 3 solids | overlap (conductor), small gap (semiconductor), large gap (insulator) |
| 03 Q1 | Diode V-I characteristic | forward knee ~0.7 V, reverse saturation + breakdown, both circuits |
| 03 Q2 | Half-wave rectifier | transformer, single diode, R_L; output = positive half-cycles only |
| 03 Q3 | Full-wave rectifier (centre-tap) | centre-tapped transformer, D₁/D₂ polarity, R_L; output = both humps positive |
| 03 Q4 | Capacitor filter | C across R_L; smoothed ripple waveform |
| 03 Q6 | n/p band diagrams | donor level below CB; acceptor level above VB |
| 03 Q7 | Zener V-I characteristic | reverse breakdown near-vertical at V_Z |

> All diagrams are given as "what to draw" checklists — no images, no base64. ASCII used only where it clarifies.

## Sources used (verification only — answers authored from physics)
- Official CBSE curriculum 2025-26 (syllabus confirmation): https://cbseacademic.nic.in/web_material/CurriculumMain26/SrSec/Physics_SrSec_2025-26.pdf
- NCERT solutions (numeric cross-check): https://byjus.com/ncert-solutions-class-12-physics/chapter-14-semiconductor-electronics-materials/
- Important questions / PYQs: https://www.vedantu.com/cbse/important-questions-class-12-physics-chapter-14
- Important questions / repeated topics: https://www.learncbse.in/important-questions-for-class-12-physics-chapter-14/

## Syllabus accuracy note (2025-26) — IMPORTANT
- Verified against the official CBSE 2025-26 curriculum PDF. Unit IX = Chapter 14 = **7 marks**. The
  official listed content is: *energy bands (qualitative); intrinsic & extrinsic semiconductors (p & n
  type); p-n junction; semiconductor diode I-V characteristics in forward/reverse bias; diode as a
  rectifier.*
- **TRANSISTORS and LOGIC GATES are NOT in the syllabus — excluded entirely** (no transistor action,
  CE amplifier, oscillator, or AND/OR/NOT/NAND/NOR gates anywhere in this question bank).
- **Special-purpose diodes (Zener regulator, photodiode, LED, solar cell):** the official one-line
  syllabus text stops at "diode as a rectifier" and does not name these explicitly. They remain in the
  NCERT textbook chapter and recur in board/sample papers, and the task brief mandates covering them, so
  they ARE included. If a school follows the strict syllabus line, treat the special-diode questions
  (02 Q8-Q11, 03 Q7, 05 Q2) as enrichment rather than guaranteed exam content.

## Coverage / status
- **Status:** COMPLETE. All mandated topics covered: energy bands; intrinsic/extrinsic & n/p type &
  doping; p-n junction (formation, depletion, barrier); diode V-I (forward/reverse); rectifiers
  (half & full wave); special-purpose diodes (Zener, photodiode, LED, solar cell).
- Standard NCERT-style numericals included (law of mass action, photodiode wavelength, conductivity
  ratio, ideal-diode circuits) plus board MCQ/AR, short answers, long-answer derivations, and 3 case
  studies.
- Every numeric answer carries units; derivations list mark-carrying steps; all 10 diagram questions
  use "what to draw" checklists (no images).
