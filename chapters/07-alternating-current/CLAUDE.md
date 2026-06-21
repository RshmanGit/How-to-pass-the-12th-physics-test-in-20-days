# Chapter 7 — Alternating Current (Content Map)

> Per-directory content map for Claude Code. Pointers + status only.

## Chapter

- **Number / name:** Chapter 7 — Alternating Current
- **Approx weightage:** ~2 marks for this chapter, assessed inside the **EMI + Alternating
  Current** unit. A board paper typically pulls 1 short/derivation + 1 numerical from here, plus
  a transformer / power-factor MCQ.
- **Difficulty:** Medium. The LCR phasor + resonance derivations are high-yield and repeat almost
  verbatim; numericals (reactance, resonance, transformer turns ratio) are short and formulaic.
- **Layout:** SINGLE file.

## Question-bank files

| File | Holds |
|------|-------|
| `question-bank.md` | All questions for the chapter, in five H2 sections: **MCQ & Assertion-Reason** (Q1-Q8), **Short Answer 2-3m** (Q9-Q15), **Derivations & Long Answer** (Q16-Q19), **Numericals** (Q20-Q27), **Case-Study** (Q28). 28 questions total. |

## Important / repeated questions (high board frequency)

- **rms vs average value of AC** (Q9, Q10) + the rms-vs-half-cycle-average MCQ trap (Q1).
- **Reactance X_L = ωL, X_C = 1/(ωC); DC vs high-frequency behaviour** (Q3, Q11) — perennial.
- **Power factor + wattless current** (Q4, Q12) and the choke-coil A-R (Q7) — very frequent 2m.
- **Series LCR impedance by phasors, Z = √[R²+(X_L−X_C)²], tan φ** (Q17) — recurring 5m derivation.
- **Resonance: f₀ = 1/(2π√(LC)), Q-factor, current-vs-frequency curve** (Q5, Q13, Q18) — almost
  guaranteed.
- **Transformer: principle, V_s/V_p = N_s/N_p, ideal V_pI_p = V_sI_s, losses** (Q6, Q8, Q14, Q15).
- **Power transmission case study** (Q28) — the standard 4m case study for this unit.
- **AC through a pure inductor (current lags by π/2)** (Q2, Q19).

### Key derivations (mark-carrying)
- Average power in AC + power factor ⟨P⟩ = V_rms I_rms cos φ — Q16
- Series LCR impedance & phase via phasor diagram — Q17
- Resonance: f₀ = 1/(2π√(LC)) and Q-factor — Q18
- AC through pure inductor (I = (V₀/ωL) sin(ωt − π/2)) — Q19

### Repeated NCERT numericals (verified values)
- R = 100 Ω, 220 V, 50 Hz → I = 2.20 A, P = 484 W (NCERT 7.1) — Q20
- L = 44 mH, 220 V, 50 Hz → X_L = 13.82 Ω, I = 15.9 A (NCERT 7.3) — Q21
- C = 60 µF, 110 V, 60 Hz → X_C = 44.2 Ω, I = 2.49 A (NCERT 7.4) — Q22
- L = 2.0 H, C = 32 µF, R = 10 Ω → ω₀ = 125 rad/s, Q = 25 (NCERT 7.6) — Q23
- L = 0.12 H, C = 480 nF, R = 23 Ω, 230 V → ν₀ = 663 Hz, I₀ = 14.14 A, Q = 21.7 (NCERT 7.20) — Q24
- RL: R = 30 Ω, X_L = 40 Ω, 200 V → Z = 50 Ω, I = 4 A, cos φ = 0.6, P = 480 W — Q25
- Transformer 2300 V / 4000 turns → 230 V → N_s = 400 turns (NCERT 7.23) — Q26
- Step-up 220 V → 2200 V, 1100 W → ratio 10, I_s = 0.5 A, I_p = 5 A — Q27

## Diagram inventory (questions needing a drawing)

| Q | Diagram | What scores |
|---|---------|-------------|
| Q17 | LCR phasor diagram | I reference; V_R along I, V_L +90°, V_C −90°; resultant V and angle φ |
| Q18 | Current-vs-frequency resonance curve | peak at f₀; two curves (sharp high-Q small R vs broad low-Q large R); half-power points & bandwidth |

## Sources used (verification only — no text reproduced)

- NCERT exercise solutions: https://byjus.com/ncert-solutions-class-12-physics/chapter-7-alternating-current/
- Important questions / PYQs: https://www.vedantu.com/cbse/important-questions-class-12-physics-chapter-7
- Important questions: https://www.learncbse.in/important-questions-for-class-12-physics-chapter-7/

## Syllabus / scope notes (2025-26)

- All topics here are in the current rationalised CBSE Class 12 syllabus: rms/average values, AC
  through R/L/C, reactance, series LCR (impedance, resonance, Q-factor), power & power factor,
  wattless current, transformers, and (case-study) power transmission.
- **Deliberately excluded** (belong to Ch.6 EMI, not AC): motional EMF, self/mutual inductance,
  eddy currents, AC generator. Some source pages mix these in — dropped here to keep scope clean.
- **Not in current syllabus / not emphasised:** LC oscillations (the energy-exchange / electrical-
  mechanical analogy was trimmed) — omitted to stay on-syllabus. Resonance and Q-factor are
  retained.

## Coverage / status

- **Status: COMPLETE.** 28 questions covering every required topic: rms/average values, R-L-C
  reactance and phase, series LCR impedance/resonance/Q-factor, average power & power factor &
  wattless current, transformers (principle, turns ratio, losses, numericals), plus the power-
  transmission case study.
- Answers follow CBSE marking-scheme step style with mark splits and diagram checklists.
- All numeric values cross-checked against NCERT (verified with a calculator): 7.1, 7.3, 7.4,
  7.6, 7.20, 7.23.
