# Chapter 3: Current Electricity — Numericals (worked)

> Every problem: formula → substitute → answer with units. These are the repeated NCERT/board patterns. Always write the formula first — it earns step marks even if arithmetic slips.

---

### Q1. Maximum current from a storage battery (2m)

A storage battery has EMF 12 V and internal resistance 0.4 Ω. What is the maximum current it can supply?

- Maximum current ⇒ external resistance ≈ 0 (short circuit): I_max = ε/r. …1m
- I_max = 12 / 0.4 = **30 A**. …1m

---

### Q2. External resistance and terminal voltage (2m)

A cell of EMF 10 V and internal resistance 3 Ω is connected to a resistor. The current is 0.5 A. Find the resistor and the terminal voltage.

- ε = I(R + r) ⇒ R = ε/I − r = 10/0.5 − 3 = 20 − 3 = **17 Ω**. …1m
- V = IR = 0.5 × 17 = **8.5 V** (= ε − Ir = 10 − 0.5×3 = 8.5 V ✓). …1m

---

### Q3. Series combination across a battery (3m)

Three resistors 1 Ω, 2 Ω, 3 Ω are combined in series and connected to a 12 V battery (negligible internal resistance). Find (a) total resistance and (b) potential drop across each.

- (a) R_series = 1 + 2 + 3 = **6 Ω**; current I = V/R = 12/6 = **2 A**. …1m
- (b) V₁ = IR₁ = 2×1 = **2 V**; V₂ = 2×2 = **4 V**; V₃ = 2×3 = **6 V**. …1m
- Check: 2 + 4 + 6 = 12 V = battery EMF ✓. …1m

---

### Q4. Parallel combination — branch currents (3m)

Resistors 2 Ω, 4 Ω, 5 Ω are in parallel across a 20 V supply (negligible internal resistance). Find the current in each and the total current.

- In parallel, each resistor has the full 20 V across it: I = V/R. …1m
- I₁ = 20/2 = **10 A**; I₂ = 20/4 = **5 A**; I₃ = 20/5 = **4 A**. …1m
- Total I = 10 + 5 + 4 = **19 A** (equivalent R = 20/19 ≈ 1.05 Ω). …1m

---

### Q5. Drift speed and time of travel in a copper wire (3m)
<!-- id: ch03-num-q5 -->

A copper wire has free-electron density n = 8.5×10²⁸ m⁻³, cross-section A = 2.0×10⁻⁶ m², length 3.0 m, carrying current 3.0 A. Find the drift speed and the time an electron takes to traverse the wire.

- v_d = I/(neA). …1m
- v_d = 3.0 / (8.5×10²⁸ × 1.6×10⁻¹⁹ × 2.0×10⁻⁶) = **1.1×10⁻⁴ m/s**. …1m
- Time t = l/v_d = 3.0 / 1.1×10⁻⁴ ≈ **2.7×10⁴ s** (≈ 7.6 hours) — shows electrons drift extremely slowly. …1m

---

### Q6. Steady temperature of a heating element (3m)

A heating element on 230 V draws 3.2 A when first switched on (at 27 °C) and settles to 2.8 A at steady state. Temperature coefficient α = 1.70×10⁻⁴ °C⁻¹. Find the steady temperature.

- Cold resistance R₀ = 230/3.2 = 71.9 Ω; hot resistance R = 230/2.8 = 82.1 Ω. …1m
- R = R₀[1 + α(T − T₀)] ⇒ (T − T₀) = (R − R₀)/(R₀α) = (82.1 − 71.9)/(71.9 × 1.70×10⁻⁴) = 840 °C. …1m
- T = 27 + 840 ≈ **867 °C**. …1m

---

### Q7. Potentiometer — comparing EMFs (3m)
<!-- id: ch03-num-q7 -->

In a potentiometer, a cell of EMF 1.25 V balances at 35.0 cm. A second cell balances at 63.0 cm. Find the EMF of the second cell.

- E₁/E₂ = l₁/l₂ ⇒ E₂ = E₁ · l₂/l₁. …1m
- E₂ = 1.25 × 63.0/35.0. …1m
- E₂ = **2.25 V**. …1m

---

### Q8. Potentiometer — internal resistance of a cell (3m)
<!-- id: ch03-num-q8 -->

A cell balances at 76.3 cm on open circuit. With a 9.5 Ω resistor across it, the balance shifts to 64.8 cm. Find the internal resistance.

- r = R(l₁ − l₂)/l₂. …1m
- r = 9.5 × (76.3 − 64.8)/64.8 = 9.5 × 11.5/64.8. …1m
- r = **1.69 Ω**. …1m

---

### Q9. Meter bridge — unknown resistance (3m)
<!-- id: ch03-num-q9 -->

In a meter bridge, the unknown X is in the left gap and a standard Y = 12.5 Ω is in the right gap. The null point is at 39.5 cm from the left end. Find X.

- X/Y = l/(100 − l) ⇒ X = Y · l/(100 − l). …1m
- X = 12.5 × 39.5/(100 − 39.5) = 12.5 × 39.5/60.5. …1m
- X = **8.16 Ω**. …1m

---

### Q10. Kirchhoff's laws — two-loop network (5m)
<!-- id: ch03-num-q10 -->

In the circuit, a 2 V cell (negligible internal resistance) and a 4 V cell (negligible internal resistance) drive currents through three resistors. Find the branch currents for: outer branches 1 Ω each carrying I₁ and I₂, middle branch 1 Ω carrying I₁ + I₂, with the 4 V and 2 V sources in the two loops respectively.

(Standard balanced template — substitute your paper's exact values; method is what scores.)

- **Junction rule** at node: current in middle branch = I₁ + I₂. …1m
- **Loop 1 (left):** 4 = I₁(1) + (I₁ + I₂)(1) ⇒ 2I₁ + I₂ = 4. …1m
- **Loop 2 (right):** 2 = I₂(1) + (I₁ + I₂)(1) ⇒ I₁ + 2I₂ = 2. …1m
- Solve simultaneously: subtract ⇒ I₁ − I₂ = 2; with 2I₁ + I₂ = 4 ⇒ **I₁ = 2 A, I₂ = 0 A**, middle = **2 A**. …1m
- State method clearly (junction + two loops + solve) — examiners award the **setup** even if your numbers differ. …1m

**Diagram — two-loop circuit** (draw it):
- [ ] Two loops sharing a middle branch; junctions labelled
- [ ] EMF cells and each resistor labelled with value
- [ ] Assumed current directions I₁, I₂, (I₁+I₂) marked with arrows
- Earns: ~1m

---

### Q11. Equivalent resistance — combination network (3m)

Three resistors of 1 Ω, 2 Ω, 3 Ω are available. Show the values obtainable: (a) all series, (b) all parallel, (c) one in series with the parallel pair.

- (a) Series: 1 + 2 + 3 = **6 Ω**. …1m
- (b) Parallel: 1/R = 1/1 + 1/2 + 1/3 = 11/6 ⇒ R = **6/11 ≈ 0.55 Ω**. …1m
- (c) 1 Ω in series with (2 ∥ 3): (2×3)/(2+3) = 1.2 Ω, total = 1 + 1.2 = **2.2 Ω**. …1m

---

### Q12. Power dissipated and energy (2m)

A 4 Ω resistor carries a steady current of 3 A for 5 minutes. Find the power dissipated and the heat produced.

- P = I²R = 3² × 4 = **36 W**. …1m
- Heat H = P·t = 36 × (5×60) = 36 × 300 = **10 800 J** (= 10.8 kJ). …1m

---

### Q13. Effect of stretching on resistance (2m)

A wire of resistance 4 Ω is stretched until its length is doubled (volume constant). Find the new resistance.

- Volume constant ⇒ R ∝ l² ⇒ R' = R × (l'/l)² = 4 × 2² = 16. …1m
- New resistance = **16 Ω**. …1m

---

### Q14. Cells in series driving a load (3m)

Three identical cells, each EMF 1.5 V and internal resistance 0.5 Ω, are connected in series to a 4.5 Ω resistor. Find the current and the terminal voltage of the combination.

- Series: ε_eq = 3×1.5 = 4.5 V; r_eq = 3×0.5 = 1.5 Ω. …1m
- I = ε_eq/(R + r_eq) = 4.5/(4.5 + 1.5) = 4.5/6 = **0.75 A**. …1m
- Terminal voltage = IR = 0.75 × 4.5 = **3.375 V** (= ε_eq − I·r_eq = 4.5 − 0.75×1.5 = 3.375 V ✓). …1m

---

### Q15. Cells in parallel (2m)

Two identical cells, each EMF 2 V and internal resistance 1 Ω, are connected in parallel across a 0.5 Ω resistor. Find the current through the resistor.

- Parallel: ε_eq = 2 V; r_eq = r/2 = 0.5 Ω. …1m
- I = ε_eq/(R + r_eq) = 2/(0.5 + 0.5) = **2 A**. …1m
