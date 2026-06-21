# Chapter 7 — Alternating Current: Question Bank

> CBSE Class 12 Physics (2025-26 syllabus). Approx weightage: ~2 marks for this chapter
> within the EMI + Alternating Current unit (board paper usually pulls 1 short/derivation +
> 1 numerical from here, plus a transformer/power-factor MCQ). Answers are written as the
> **mark-earning steps** of the CBSE marking scheme, not as essays.
>
> Note on scope: motional EMF, self/mutual inductance, eddy currents and the AC generator
> belong to **Chapter 6 (Electromagnetic Induction)** and are not repeated here. This file
> covers only Alternating Current: rms/average values, R-L-C behaviour, reactance, series LCR
> (impedance, resonance, Q-factor), power & power factor, and transformers.

Constants / conventions: ω = 2πf (angular frequency, rad/s); X_L = ωL; X_C = 1/(ωC);
rms value = peak/√2 for sinusoidal AC; √2 ≈ 1.414.

---

## MCQ & Assertion-Reason

### Q1. RMS value of sinusoidal AC (1m)

The peak value of an alternating current is I₀ = 10 A. Its rms (virtual) value is:

(a) 10 A  (b) 7.07 A  (c) 14.14 A  (d) 6.37 A

**Answer: (b) 7.07 A.**
I_rms = I₀/√2 = 10/1.414 = **7.07 A**. (Choice (d) 6.37 A is the *average over a half-cycle*,
2I₀/π — a common trap.) (1m)

---

### Q2. Phase relation in a pure inductor (1m)

In a purely inductive AC circuit, the current:

(a) is in phase with the voltage
(b) leads the voltage by π/2
(c) lags the voltage by π/2
(d) leads the voltage by π

**Answer: (c) lags the voltage by π/2.** In a pure inductor, voltage leads current by 90°
(equivalently current lags voltage by π/2). Mnemonic **"ELI"**: in an **L**, **E** (voltage)
leads **I**. (1m)

---

### Q3. Effect of frequency on reactance (1m)

As the frequency of the source increases, in an AC circuit:

(a) both X_L and X_C increase
(b) X_L increases and X_C decreases
(c) X_L decreases and X_C increases
(d) both X_L and X_C decrease

**Answer: (b).** X_L = ωL ∝ f (rises with f); X_C = 1/(ωC) ∝ 1/f (falls with f). At very high
f an inductor blocks and a capacitor conducts. (1m)

---

### Q4. Condition for resonance / wattless current (1m)

The average power dissipated in a pure capacitor (or pure inductor) connected to an AC source is:

(a) maximum  (b) V_rms·I_rms  (c) zero  (d) ½V_rms·I_rms

**Answer: (c) zero.** Phase difference φ = 90°, so power factor cos φ = 0 and
P_avg = V_rms·I_rms·cos φ = **0**. The current is called **wattless current**. (1m)

---

### Q5. Resonant frequency of a series LCR circuit (1m)

At resonance in a series LCR circuit, the impedance is:

(a) maximum and equals √(R² + X²)  (b) minimum and equals R
(c) zero  (d) equal to X_L + X_C

**Answer: (b) minimum and equals R.** At resonance X_L = X_C, so the reactive part cancels and
Z = R (minimum); hence current is maximum. (1m)

---

### Q6. Ideal transformer relation (1m)

In an ideal step-up transformer the secondary has more turns than the primary. Compared with the
primary, the secondary has:

(a) higher voltage and higher current  (b) higher voltage and lower current
(c) lower voltage and higher current  (d) same voltage, higher current

**Answer: (b) higher voltage and lower current.** For an ideal transformer V_s/V_p = N_s/N_p and
power is conserved (V_pI_p = V_sI_s), so stepping voltage **up** steps current **down**. (1m)

---

### Q7. Assertion-Reason — choke coil (1m)

**Assertion (A):** A choke coil is preferred over a resistor to limit AC in a circuit.
**Reason (R):** A choke coil reduces current without dissipating power as heat.

(a) Both A and R true, R is the correct explanation of A
(b) Both A and R true, R is NOT the correct explanation
(c) A true, R false
(d) A false, R true

**Answer: (a).** A choke (large L, small R) limits AC through its reactance X_L; being almost
purely inductive its power factor ≈ 0, so it wastes almost no power (unlike a resistor). R
correctly explains A. (1m)

---

### Q8. Assertion-Reason — transformer and DC (1m)

**Assertion (A):** A transformer cannot step up a steady DC voltage.
**Reason (R):** A transformer works on the principle of mutual induction, which needs a
*changing* flux.

(a) Both A and R true, R is the correct explanation of A
(b) Both A and R true, R is NOT the correct explanation
(c) A true, R false
(d) A false, R true

**Answer: (a).** Steady DC gives constant flux → dΦ/dt = 0 → no induced EMF in the secondary
(and the primary would burn out due to low resistance). R correctly explains A. (1m)

---

## Short Answer (2-3m)

### Q9. Define rms and average value of AC (2m)

**Restated:** What is meant by the rms value and the average (mean) value of an alternating
current?

- **RMS value (1m):** The rms (root-mean-square / virtual) value of an AC is that **steady DC
  current which produces the same heating** in a given resistor in the same time. For sinusoidal
  AC, I_rms = I₀/√2 = 0.707 I₀.
- **Average value (1m):** The mean value over **one half-cycle** (the full-cycle mean is zero).
  For sinusoidal AC, I_avg = 2I₀/π = 0.637 I₀. (½m for noting full-cycle average = 0.) (2m)

---

### Q10. Why AC is measured by rms value (2m)

**Restated:** Why are AC meters calibrated to read rms values and not peak or average values?

- The **full-cycle average of sinusoidal AC is zero**, so an average-reading meter would read
  zero — useless. (1m)
- The **heating effect (I²R) depends on the square** of the current, which is always positive; its
  mean gives a non-zero, physically meaningful quantity. The rms value captures the actual power
  delivered, so meters read rms. (1m)

---

### Q11. Reactance of L and C; behaviour at DC and high frequency (2-3m)

**Restated:** Define inductive and capacitive reactance and state how each behaves for DC and for
very high frequency AC.

- **Inductive reactance (1m):** X_L = ωL = 2πfL (unit Ω). For DC, f = 0 → X_L = 0 (inductor acts
  as a plain wire). For high f, X_L is large → inductor **blocks** high-frequency AC.
- **Capacitive reactance (1m):** X_C = 1/(ωC) = 1/(2πfC) (unit Ω). For DC, f = 0 → X_C = ∞
  (capacitor **blocks** DC). For high f, X_C → 0 → capacitor **passes** high-frequency AC. (1m
  for the DC/high-f limits.) (3m)

---

### Q12. Power factor and wattless current (2-3m)

**Restated:** Define power factor of an AC circuit. What is wattless current and when does it flow?

- **Power factor (1m):** cos φ, the ratio of true (average) power to apparent power:
  cos φ = P_avg /(V_rms I_rms) = R/Z, where φ is the phase angle between voltage and current.
- **Average power (½m):** P_avg = V_rms·I_rms·cos φ.
- **Wattless current (1m):** When φ = 90° (a pure inductor or pure capacitor), cos φ = 0, so
  P_avg = 0 even though current flows. This non-power-consuming current is the **wattless
  current**. Its component along the voltage (I cos φ) is zero. (½m for the φ = 90° condition.)
  (3m)

---

### Q13. Quality factor of a series resonant circuit (2m)

**Restated:** Define the quality factor (Q-factor) of a series LCR circuit and state what it
measures.

- **Definition (1m):** Q = (resonant angular frequency)/(bandwidth) = ω₀/Δω. Equivalent forms:
  Q = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C).
- **Significance (1m):** Q measures the **sharpness of resonance** — a high Q means a tall,
  narrow current peak (good frequency selectivity, as needed for tuning a radio). (2m)

---

### Q14. Working principle of a transformer (2-3m)

**Restated:** State the principle on which a transformer works and write its turns-ratio relation.

- **Principle (1m):** **Mutual induction** — an alternating current in the primary sets up a
  changing flux that links the secondary through a common soft-iron core, inducing an AC EMF in
  the secondary.
- **Turns ratio (1m):** V_s/V_p = N_s/N_p = k (transformation ratio).
- **Ideal current relation (1m):** Assuming 100% efficiency, V_pI_p = V_sI_s ⇒ I_s/I_p = N_p/N_s.
  So N_s > N_p ⇒ step-up (voltage up, current down). (3m)

---

### Q15. Sources of energy loss in a real transformer (2-3m)

**Restated:** List the main causes of energy loss in a practical transformer and how each is
minimised.

- **Copper loss (½m):** I²R heating in the windings → use thick low-resistance copper wire.
- **Iron / eddy-current loss (1m):** Induced eddy currents in the core → use a **laminated**
  core (thin insulated sheets) to break up the current paths.
- **Hysteresis loss (½m):** Repeated magnetisation reversal of the core → use **soft iron / 
  silicon steel** with a thin hysteresis loop.
- **Flux leakage (½m):** Not all primary flux links the secondary → wind coils one over the
  other on the same core. (2-3m)

---

## Derivations & Long Answer

### Q16. Average power in an AC circuit; power factor (3m)

**Restated:** Derive the expression for the average power consumed in an AC circuit and identify
the power factor.

- **Set up (1m):** Let V = V₀ sin ωt and I = I₀ sin(ωt − φ), where φ is the phase by which current
  lags voltage.
- **Instantaneous power:** P = VI = V₀I₀ sin ωt · sin(ωt − φ).
- **Expand & average over a cycle (1m):**
  P = V₀I₀ sin ωt (sin ωt cos φ − cos ωt sin φ).
  ⟨sin²ωt⟩ = ½ and ⟨sin ωt cos ωt⟩ = 0 over a full cycle, so
  ⟨P⟩ = ½ V₀I₀ cos φ.
- **In rms form (1m):** Using V₀ = √2 V_rms, I₀ = √2 I_rms,
  **P_avg = V_rms · I_rms · cos φ.**
  Here **cos φ is the power factor.** (3m)

---

### Q17. Series LCR circuit — impedance and phase by phasors (5m)

**Restated:** Using a phasor (rotating-vector) diagram, obtain the impedance and phase angle of a
series LCR circuit connected to V = V₀ sin ωt.

- **Common current (1m):** In series the same current I flows through R, L, C. Take I as the
  reference phasor.
- **Voltage phasors (1m):**
  - V_R = IR, **in phase** with I.
  - V_L = IX_L, **leads** I by 90°.
  - V_C = IX_C, **lags** I by 90°.
- **Resultant voltage (1m):** V_L and V_C are antiparallel, so the net reactive voltage is
  (V_L − V_C). By Pythagoras:
  V = √[V_R² + (V_L − V_C)²] = I√[R² + (X_L − X_C)²].
- **Impedance (1m):**
  **Z = V/I = √[R² + (X_L − X_C)²]**, with X_L = ωL, X_C = 1/(ωC).
- **Phase angle (1m):**
  **tan φ = (X_L − X_C)/R.**
  If X_L > X_C the circuit is inductive (current lags); if X_L < X_C it is capacitive (current
  leads). (5m)

**Diagram — LCR phasor diagram** (draw it; do not just describe):
- [ ] Reference current phasor I along +x
- [ ] V_R along I; V_L up (+90°); V_C down (−90°)
- [ ] Resultant V from V_R and (V_L − V_C), with angle φ marked
- Earns: ~1m for correctly oriented phasors + ~1m for the resultant/φ

---

### Q18. Resonance in series LCR; resonant frequency and Q-factor (5m)

**Restated:** Explain electrical resonance in a series LCR circuit. Derive the resonant frequency
and the Q-factor, and sketch the current-vs-frequency curve.

- **Condition (1m):** Resonance occurs when X_L = X_C, so the reactances cancel and Z = R is
  minimum ⇒ current is **maximum** (I_max = V_rms/R) and the circuit is purely resistive
  (φ = 0, power factor = 1).
- **Resonant frequency (1m):** X_L = X_C ⇒ ωL = 1/(ωC) ⇒
  **ω₀ = 1/√(LC)**, i.e. **f₀ = 1/(2π√(LC)).**
- **Sharpness / bandwidth (1m):** Half-power points occur where current falls to I_max/√2; the
  bandwidth is Δω = R/L.
- **Q-factor (1m):**
  **Q = ω₀/Δω = ω₀L/R = 1/(ω₀CR) = (1/R)√(L/C).**
  High Q ⇒ sharp, narrow resonance.
- **Application (1m):** Used to **tune** a radio/TV to a desired station's frequency. (5m)

**Diagram — resonance (current vs frequency) curve** (draw it):
- [ ] Axes: current I on y-axis, frequency f (or ω) on x-axis
- [ ] Single peak at f₀ where I = I_max
- [ ] Two curves: a tall narrow one (high Q, small R) and a short broad one (low Q, large R)
- [ ] Mark half-power points (I_max/√2) and bandwidth Δω
- Earns: ~1m peak at f₀ + ~1m for showing sharpness depends on R

---

### Q19. AC through a pure inductor — current and phase (3m)

**Restated:** For an AC source V = V₀ sin ωt connected across a pure inductor L, obtain the
current and show that it lags the voltage by π/2; identify the inductive reactance.

- **Set up (1m):** Kirchhoff: V₀ sin ωt = L (dI/dt) ⇒ dI = (V₀/L) sin ωt dt.
- **Integrate (1m):** I = −(V₀/ωL) cos ωt = (V₀/ωL) sin(ωt − π/2).
- **Result (1m):** So I₀ = V₀/(ωL) and the current **lags** the voltage by **π/2**. The quantity
  **X_L = ωL** plays the role of resistance (inductive reactance). (3m)

---

## Numericals

### Q20. RMS current and power in a pure resistor (2m) [NCERT 7.1]

**Given:** R = 100 Ω, V_rms = 220 V, f = 50 Hz.
**Find:** rms current and net power.

- I_rms = V_rms/R = 220/100 = **2.20 A.**
- P = V_rms·I_rms = 220 × 2.20 = **484 W.** (For a pure resistor cos φ = 1.) (2m)

---

### Q21. RMS current through a pure inductor (2m) [NCERT 7.3]

**Given:** L = 44 mH = 44 × 10⁻³ H, V_rms = 220 V, f = 50 Hz.
**Find:** rms current.

- X_L = 2πfL = 2π(50)(44 × 10⁻³) = 13.82 Ω.
- I_rms = V_rms/X_L = 220/13.82 = **15.9 A.** (2m)

---

### Q22. RMS current through a pure capacitor (2m) [NCERT 7.4]

**Given:** C = 60 µF = 60 × 10⁻⁶ F, V_rms = 110 V, f = 60 Hz.
**Find:** rms current.

- X_C = 1/(2πfC) = 1/[2π(60)(60 × 10⁻⁶)] = 44.2 Ω.
- I_rms = V_rms/X_C = 110/44.2 = **2.49 A.** (2m)

---

### Q23. Series LCR — resonant frequency and Q-factor (3m) [NCERT 7.6]

**Given:** L = 2.0 H, C = 32 µF = 32 × 10⁻⁶ F, R = 10 Ω.
**Find:** resonant angular frequency and Q-factor.

- ω₀ = 1/√(LC) = 1/√(2.0 × 32 × 10⁻⁶) = 1/√(6.4 × 10⁻⁵) = **125 rad/s.**
- Q = ω₀L/R = (125 × 2.0)/10 = **25.** (3m)

---

### Q24. Full LCR resonance numerical (3m) [NCERT 7.20]

**Given:** L = 0.12 H, C = 480 nF = 480 × 10⁻⁹ F, R = 23 Ω, supply V_rms = 230 V.
**Find:** resonant frequency ν₀, peak current at resonance, and Q-factor.

- ν₀ = 1/(2π√(LC)) = 1/[2π√(0.12 × 480 × 10⁻⁹)] = 1/(2π × 2.4 × 10⁻⁴) = **663 Hz.**
- At resonance Z = R, so I₀ = V₀/R = (√2 × 230)/23 = 325.3/23 = **14.14 A** (peak).
- Q = (1/R)√(L/C) = (1/23)√(0.12 / 480 × 10⁻⁹) = (1/23)(500) = **21.7.** (3m)

---

### Q25. Power factor of a series RL circuit (2-3m)

**Given:** R = 30 Ω in series with an inductor of X_L = 40 Ω, across V_rms = 200 V.
**Find:** impedance, current, power factor and average power.

- Z = √(R² + X_L²) = √(30² + 40²) = √(900 + 1600) = √2500 = **50 Ω.**
- I_rms = V_rms/Z = 200/50 = **4.0 A.**
- Power factor cos φ = R/Z = 30/50 = **0.6.**
- P_avg = V_rms·I_rms·cos φ = 200 × 4 × 0.6 = **480 W.** (3m)

---

### Q26. Ideal transformer turns ratio (2m) [NCERT 7.23 style]

**Given:** Step-down transformer, primary V_p = 2300 V on N_p = 4000 turns, secondary V_s = 230 V.
**Find:** number of secondary turns N_s.

- V_s/V_p = N_s/N_p ⇒ N_s = N_p × (V_s/V_p) = 4000 × (230/2300) = **400 turns.** (2m)

---

### Q27. Transformer with current and power (2-3m)

**Given:** Ideal step-up transformer, input 220 V, output 2200 V, output power 1100 W.
**Find:** turns ratio, secondary current, and primary current.

- Turns ratio N_s/N_p = V_s/V_p = 2200/220 = **10** (step-up by 10).
- I_s = P/V_s = 1100/2200 = **0.5 A.**
- Ideal ⇒ V_pI_p = V_sI_s ⇒ I_p = P/V_p = 1100/220 = **5.0 A.** (3m)

---

## Case-Study

### Q28. Case study — transmission of electrical power (4m)

**Passage:** Electrical power generated at a plant must travel long distances to consumers. The
line wires have a fixed resistance R_line. To minimise heat (I²R) loss in the lines, power is
transmitted at very high voltage and correspondingly low current using step-up transformers near
the plant; step-down transformers at the user end bring it back to safe levels.

**(a) (1m)** A power P is sent at voltage V down a line of resistance R_line. Write the line power
loss in terms of P, V, R_line.
- Line current I = P/V, so loss P_loss = I²R_line = **(P²/V²)·R_line.**

**(b) (1m)** Why does raising the transmission voltage reduce the loss?
- P_loss ∝ 1/V². Doubling V cuts the current to half and the loss to **one-quarter**; high V ⇒
  low current ⇒ low I²R loss.

**(c) (1m)** Which type of transformer is used at the generating end and which at the consumer
end?
- **Step-up** at the generating end; **step-down** at the consumer end.

**(d) (1m)** Why is power transmitted as AC rather than DC for this scheme?
- Transformers (needed to step voltage up/down efficiently) work only on **AC**, because they
  rely on a changing flux (mutual induction); DC cannot be transformed this way. (4m)
