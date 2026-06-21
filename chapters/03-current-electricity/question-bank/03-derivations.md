# Chapter 3: Current Electricity — Derivations & Long Answers (3–5m)

> The high-frequency board derivations. Each is laid out as the mark-carrying steps in order, with the final result boxed.

---

### Q1. Relation between current and drift velocity I = neAv_d (3m)

Derive the expression connecting current to drift velocity.

- **Setup:** Conductor of cross-section A, free-electron density n, each electron charge e, drift velocity v_d. …½m
- In time Δt, electrons travel a distance v_d·Δt, so the volume of electrons crossing a section = A·v_d·Δt. …½m
- Number of electrons in that volume = n·A·v_d·Δt; charge through section ΔQ = (n·A·v_d·Δt)·e. …1m
- Current I = ΔQ/Δt = n·A·v_d·e. …½m

$$\boxed{I = neAv_d}$$  …½m

---

### Q2. Drift velocity in terms of relaxation time (3m)

Derive v_d = (eE/m)τ for free electrons under a field E.

- **Principle:** field E exerts force F = −eE on each electron; acceleration a = −eE/m. …1m
- Between collisions an electron gains velocity a·t; after each collision its direction is randomised, so the average thermal velocity is zero. …½m
- Average time between collisions = relaxation time τ; so drift velocity = average of (a·t) over the electrons = a·τ. …1m

$$\boxed{v_d = \frac{eE}{m}\tau}$$  …½m

(The minus sign just states v_d is opposite to E.)

---

### Q3. Ohm's law from electron theory; expression for resistivity (5m)

Starting from drift velocity, derive V = IR and obtain ρ = m/(ne²τ).

- **Step 1 (drift):** v_d = (eE/m)τ. …1m
- **Step 2 (current):** I = neAv_d = neA·(eE/m)τ = (ne²Aτ/m)·E. …1m
- **Step 3 (field in terms of V):** for a wire of length l, E = V/l. Substitute:
  I = (ne²Aτ/m)·(V/l). …1m
- **Step 4 (rearrange to Ohm's law):**
  V = I · [ m l / (ne²τ A) ]. The bracket is a constant (fixed T, geometry, material), so **V ∝ I** ⇒ V = IR with
  R = m l /(ne²τA). …1m
- **Step 5 (resistivity):** comparing R = ρl/A gives

$$\boxed{\rho = \frac{m}{ne^{2}\tau}}, \qquad \sigma = \frac{1}{\rho} = \frac{ne^{2}\tau}{m}$$  …1m

This is Ohm's law and shows resistivity depends only on material constants (n, τ), not on the wire's size.

---

### Q4. Temperature dependence of resistance (3m)

Explain, using ρ = m/(ne²τ), why metallic resistance rises with temperature, and write R_T = R₀[1 + αΔT].

- For metals, n is essentially constant with temperature. …½m
- Heating increases the amplitude of lattice vibrations ⇒ more frequent electron–ion collisions ⇒ relaxation time **τ decreases**. …1m
- ρ = m/(ne²τ) ⇒ ρ increases as τ falls ⇒ resistance R = ρl/A **increases** with temperature. …1m
- Over a moderate range this is linear: **R_T = R₀[1 + α(T − T₀)]**, where α is the temperature coefficient of resistance. …½m

**Diagram — resistivity vs temperature** (draw it):
- [ ] Metal (conductor): ρ rising roughly linearly with T (positive slope)
- [ ] Semiconductor: ρ falling with T (negative slope) — for contrast
- [ ] Axes labelled ρ (y) and T (x)
- Earns: ~1m

---

### Q5. Cells in series — equivalent EMF and internal resistance (3m)

Derive the equivalent of n cells in series.

- Take two cells (ε₁, r₁) and (ε₂, r₂) joined in series so their EMFs aid. …½m
- Same current I flows through both; total potential across the combination
  V = (ε₁ − Ir₁) + (ε₂ − Ir₂) = (ε₁ + ε₂) − I(r₁ + r₂). …1m
- Compare with V = ε_eq − I·r_eq:
  ε_eq = ε₁ + ε₂, r_eq = r₁ + r₂. …1m
- For n identical cells (ε, r): **ε_eq = nε, r_eq = nr**, current I = nε/(R + nr). …½m

---

### Q6. Cells in parallel — equivalent EMF and internal resistance (3m)

Derive the equivalent of two cells in parallel.

- Two cells (ε₁, r₁), (ε₂, r₂) joined in parallel across terminals at voltage V; let currents be I₁, I₂ with I = I₁ + I₂. …½m
- For each cell V = εᵢ − Iᵢrᵢ ⇒ Iᵢ = (εᵢ − V)/rᵢ. …1m
- Sum: I = (ε₁/r₁ + ε₂/r₂) − V(1/r₁ + 1/r₂). Rearranging to V = ε_eq − I·r_eq gives:
  ε_eq = (ε₁r₂ + ε₂r₁)/(r₁ + r₂), 1/r_eq = 1/r₁ + 1/r₂. …1m
- For n identical cells (ε, r): **ε_eq = ε, r_eq = r/n**, current I = ε/(R + r/n). …½m

---

### Q7. Wheatstone bridge balance condition (P/Q = R/S) (5m)

Derive the balance condition using Kirchhoff's laws.

- **Setup:** Resistances P (A→B), Q (B→C), R (A→D), S (D→C); galvanometer G between B and D; cell across A–C. …1m
- **At balance** the galvanometer current I_g = 0, so B and D are at the same potential. …1m
- Current in arm P = current in arm Q = I₁ (no current diverts through G); current in arm R = current in arm S = I₂. …1m
- Apply loop rule to loop A–B–D: I₁P = I₂R (equal potential drops A→B and A→D). …½m
- Apply loop rule to loop B–C–D: I₁Q = I₂S (equal drops B→C and D→C). …½m
- Divide the two equations: I₁P/I₁Q = I₂R/I₂S ⇒

$$\boxed{\frac{P}{Q} = \frac{R}{S}}$$  …1m

**Diagram — Wheatstone bridge** (draw it):
- [ ] Four arms P, Q, R, S forming a diamond; junctions A, B, C, D
- [ ] Galvanometer G across B–D, cell + key across A–C
- [ ] Currents I₁ (through P, Q) and I₂ (through R, S) marked
- Earns: ~1m circuit

---

### Q8. Potentiometer — comparison of EMFs of two cells (3m)

Derive the working relation E₁/E₂ = l₁/l₂.

- **Principle:** potential drop along the uniform wire is proportional to length, V = kl (k = potential gradient). …½m
- Cell 1 (EMF E₁) is balanced at length l₁ ⇒ E₁ = k l₁. …1m
- Cell 2 (EMF E₂) is balanced at length l₂ ⇒ E₂ = k l₂. …1m
- Dividing (k cancels):

$$\boxed{\frac{E_1}{E_2} = \frac{l_1}{l_2}}$$  …½m

**Diagram — potentiometer (EMF comparison)** (draw it):
- [ ] Driver cell + rheostat + key in main circuit across wire AB
- [ ] Two cells via a two-way key to the galvanometer + jockey
- [ ] Balancing lengths l₁, l₂ marked from end A
- Earns: ~1m

---

### Q9. Potentiometer — internal resistance of a cell (5m)

Derive r = R(l₁ − l₂)/l₂.

- **Step 1:** With the cell on **open circuit** (key K to shunt open), balance length = l₁; this corresponds to the EMF: ε = k l₁. …1m
- **Step 2:** Connect a known resistance R across the cell and close its key, so the cell now drives current; the terminal voltage V is balanced at length l₂: V = k l₂. …1m
- **Step 3:** ε/V = l₁/l₂. …1m
- **Step 4:** For the cell delivering current through R, V = εR/(R + r) ⇒ ε/V = (R + r)/R = 1 + r/R. …1m
- **Step 5:** Equate: l₁/l₂ = 1 + r/R ⇒

$$\boxed{r = R\left(\frac{l_1 - l_2}{l_2}\right)}$$  …1m

**Diagram — potentiometer (internal resistance)** (draw it):
- [ ] Main circuit: driver cell, rheostat, key across wire AB
- [ ] Test cell with resistance box R and key across it, galvanometer + jockey
- [ ] Lengths l₁ (open) and l₂ (with R) marked
- Earns: ~1m

---

### Q10. Expression for terminal voltage and current of a cell (3m)

Derive V = ε − Ir and I = ε/(R + r) for a cell of EMF ε, internal resistance r, external load R.

- The EMF ε drives current I through external R and internal r in series. …½m
- By the loop rule: ε = I(R + r) ⇒ **I = ε/(R + r)**. …1m
- Terminal voltage = potential across external R: V = IR = εR/(R + r). …1m
- Equivalently V = ε − Ir (the EMF minus the internal drop). …½m
