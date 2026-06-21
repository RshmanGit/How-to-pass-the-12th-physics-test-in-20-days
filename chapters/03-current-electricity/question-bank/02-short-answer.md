# Chapter 3: Current Electricity — Sections B/C (Short Answer)

> Conceptual 2–3 mark questions. Answers are written as the labelled points that earn marks, not essays.

---

### Q1. Define drift velocity and relaxation time (2m)

Explain the two terms with their roles in conduction.

- **Drift velocity (v_d):** the average velocity acquired by free electrons in the direction opposite to the applied electric field, superimposed on their random thermal motion. …1m
- **Relaxation time (τ):** the average time between two successive collisions of a free electron with the lattice ions. …½m
- Relation: v_d = (eE/m)τ, so larger τ ⇒ larger drift velocity ⇒ higher conductivity. …½m

---

### Q2. State Ohm's law and define ohmic / non-ohmic conductors (2m)

- **Ohm's law:** at constant temperature (and physical conditions), the current through a conductor is directly proportional to the potential difference across it: V = IR. …1m
- **Ohmic conductors** obey Ohm's law — V–I graph is a straight line through the origin (e.g. metals at fixed T). …½m
- **Non-ohmic conductors** do not — V–I graph is non-linear (e.g. diode, thermistor, electrolyte). …½m

**Diagram — V–I graphs** (draw both):
- [ ] Straight line through origin labelled "ohmic"
- [ ] Curved line labelled "non-ohmic (e.g. diode)"
- [ ] Axes labelled V (x) and I (y)
- Earns: ~1m if asked to "draw and distinguish"

---

### Q3. Why is the V–I graph for a metal at high temperature non-linear? (2m)

- At low currents the metal stays at roughly constant temperature, so V ∝ I (ohmic). …½m
- At large currents, I²R heating raises the temperature, raising resistance R. …1m
- Then V = IR rises faster than I, so the graph bends upward (slope increases) — it becomes non-linear. …½m

---

### Q4. Distinguish EMF and terminal voltage (2m)

- **EMF (ε):** the potential difference across the cell terminals when **no current** is drawn (open circuit); it is the energy supplied per unit charge by the cell. …1m
- **Terminal voltage (V):** the potential difference across the terminals when the cell **drives a current** I; V = ε − Ir (discharge). …1m
- So V < ε on discharge (drop Ir lost inside the cell); V = ε only when I = 0; V > ε while charging.

---

### Q5. Internal resistance — definition and dependence (2m)

- **Internal resistance (r):** the opposition offered by the electrolyte and electrodes of a cell to the flow of current through the cell itself. …1m
- It **increases** with: greater electrode separation, smaller electrode area, lower electrolyte concentration, and lower temperature. …1m

---

### Q6. Why are alloys like manganin/constantan used for standard resistors? (2m)

- They have **high resistivity** (compact high-value resistors). …1m
- They have a **very low temperature coefficient of resistance**, so their resistance barely changes with temperature — the standard value stays reliable. …1m

---

### Q7. Why is the potentiometer preferred over a voltmeter for measuring EMF? (2m)

- At the balance (null) point, the potentiometer draws **no current** from the cell, so there is **no Ir drop** — it measures the true EMF. …1m
- A voltmeter always draws some current, so it reads the terminal voltage (< EMF), not the EMF; the potentiometer effectively has infinite resistance at balance. …1m

---

### Q8. State the principle of a potentiometer (2m)

- The potential drop across any length of a uniform current-carrying wire is **directly proportional to that length**: V ∝ l, i.e. V = kl where k is the potential gradient (V per unit length). …1m
- A cell is balanced when its EMF equals the potential drop across the balancing length, so EMF ∝ balancing length. …1m

---

### Q9. State Kirchhoff's two laws (2m)

- **Junction (current) rule:** the algebraic sum of currents meeting at any junction is zero, ΣI = 0 (conservation of charge). …1m
- **Loop (voltage) rule:** the algebraic sum of changes in potential around any closed loop is zero, ΣV = 0 (conservation of energy). …1m

---

### Q10. Wheatstone bridge — balance condition and use (3m)

- **Setup:** four resistors P, Q, R, S in a quadrilateral; a cell across one diagonal, a galvanometer across the other. …½m
- **Balance condition:** galvanometer current = 0 when **P/Q = R/S**. …1m
- Derivation idea: at balance, points B and D are at equal potential, so I₁P = I₂R and I₁Q = I₂S; dividing gives P/Q = R/S. …1m
- **Use:** an unknown resistance is found by adjusting the others to balance. …½m

**Diagram — Wheatstone bridge** (draw it):
- [ ] Four resistors P, Q, R, S forming a diamond/quadrilateral
- [ ] Cell (EMF) across one diagonal, galvanometer G across the other
- [ ] Junctions labelled A, B, C, D
- Earns: ~1m

---

### Q11. Meter bridge — principle (3m)

- A meter bridge is a practical Wheatstone bridge using a 1 m uniform resistance wire. …½m
- Unknown X in left gap, standard Y in right gap; jockey slides till galvanometer reads zero at length l (cm) from left. …1m
- Since wire resistance ∝ length: X/Y = l/(100−l) ⇒ **X = Y·l/(100−l)**. …1m
- For best accuracy, choose Y so the null point lies near the middle (≈50 cm), where the bridge is most sensitive. …½m

**Diagram — meter bridge** (draw it):
- [ ] 1 m wire AC with jockey/galvanometer
- [ ] Unknown X (left gap), standard Y (right gap)
- [ ] Cell + key in the main circuit; balance length l marked
- Earns: ~1m

---

### Q12. Effect of stretching a wire on its resistance (2m)

- On stretching, **volume stays constant**, so if length increases ×k the area decreases ×(1/k). …½m
- R = ρl/A ⇒ R ∝ l²/V ⇒ R ∝ l² (volume fixed). …1m
- Example: double the length ⇒ resistance becomes 4× (and ⇒ ¼ original area). …½m

---

### Q13. Combination reasoning: getting required equivalent resistance (2m)

Given three resistors 1Ω, 2Ω, 3Ω, state how to obtain (i) maximum and (ii) minimum equivalent resistance.

- **Maximum:** all in series ⇒ R = 1 + 2 + 3 = **6 Ω**. …1m
- **Minimum:** all in parallel ⇒ 1/R = 1/1 + 1/2 + 1/3 = 11/6 ⇒ R = **6/11 ≈ 0.55 Ω**. …1m

---

### Q14. Why does drift velocity not increase total energy of electrons much? / Conductivity in terms of n, τ (3m)

Express conductivity microscopically and state its dependence.

- From v_d = (eτ/m)E and J = ne·v_d, current density J = (ne²τ/m)E. …1m
- Compare with J = σE ⇒ **σ = ne²τ/m**, and resistivity **ρ = m/(ne²τ)**. …1m
- So conductivity rises with free-electron density n and relaxation time τ; heating reduces τ, lowering σ (raising ρ) in metals. …1m

---

### Q15. Two cells in series vs parallel — when to use which (2m)

- **Series** (EMFs add, internal resistances add): use when external resistance R ≫ r, to get a larger total EMF and current. …1m
- **Parallel** (same EMF, internal resistance r/n): use when R ≪ r, to reduce effective internal resistance and supply a larger current. …1m
