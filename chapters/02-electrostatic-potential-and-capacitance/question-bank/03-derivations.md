# Chapter 2 — Electrostatic Potential & Capacitance: Derivations / Long Answer

> 3–5 mark derivations. Each lists the mark-carrying steps in order: state the principle → set up the equation → key intermediate steps → boxed final result, with the typical mark split.

### Q1. Potential due to a point charge (3m)
Derive the expression for the electric potential at a point distance r from an isolated point charge q.

**Answer:**
- Principle: V = work done per unit charge bringing a test charge from infinity to the point. Field at distance x: E = (1/4πε₀) q/x². …1m
- Work to move test charge dx against field: dW = −E dx (sign because we move opposite to field for +q). Potential:
  V = −∫(∞→r) E dx = −∫(∞→r) (1/4πε₀)(q/x²) dx …1m
- Integrate: V = (1/4πε₀) q [1/x] from ∞ to r = (1/4πε₀)(q/r). …½m
- **Result: V = (1/4πε₀) · q/r = kq/r.** Scalar; positive for +q, negative for −q. …½m

### Q2. Potential due to an electric dipole (5m)
<!-- id: ch02-deriv-q2 -->
Derive the potential at a point due to a short dipole at distance r making angle θ with the dipole axis; deduce axial and equatorial cases.

**Answer:**
- Setup: dipole −q…+q separated by 2a, dipole moment p = q(2a). Point P at distance r, angle θ. Distances: r₁ (to +q) ≈ r − a cosθ, r₂ (to −q) ≈ r + a cosθ for r ≫ a. …1m
- Net potential: V = (kq)[1/r₁ − 1/r₂] = kq (r₂ − r₁)/(r₁r₂). …1m
- Substitute r₂ − r₁ = 2a cosθ and r₁r₂ ≈ r²: V = kq(2a cosθ)/r². …1m
- With p = q·2a:
  **V = (1/4πε₀) · (p cosθ)/r²** (general short dipole). …1m
- Special cases: …1m
  - Axial point (θ = 0): **V = (1/4πε₀) p/r²** (maximum, positive on +q side).
  - Equatorial point (θ = 90°): **V = 0** (the two charges are equidistant).
- Note: dipole V ∝ 1/r², which falls faster than the 1/r of a point charge.

### Q3. Potential energy of a dipole in a uniform external field (3m)
<!-- id: ch02-deriv-q3 -->
Derive the expression for the potential energy of an electric dipole placed at angle θ in a uniform field E.

**Answer:**
- Torque on dipole at angle θ: τ = pE sinθ. …½m
- Work done by external agent to rotate from θ₀ to θ (against the field): dW = τ dθ = pE sinθ dθ. …1m
- U = ∫(θ₀→θ) pE sinθ dθ = pE[−cosθ]; taking reference θ₀ = 90° (U = 0):
  **U = −pE cosθ = −p·E.** …1m
- Cases: minimum (stable) U = −pE at θ = 0; maximum (unstable) U = +pE at θ = 180°; U = 0 at θ = 90°. …½m

### Q4. Capacitance of a parallel-plate capacitor (with and without dielectric) (5m)
<!-- id: ch02-deriv-q4 -->
Derive C = ε₀A/d for a parallel-plate capacitor in vacuum, then extend to a medium of dielectric constant K.

**Answer:**
- Setup: two plates of area A, separation d, charge ±Q, surface charge density σ = Q/A. …½m
- Field between plates (using Gauss's law for a sheet between plates): E = σ/ε₀ = Q/(ε₀A). …1½m
- Potential difference: V = E·d = Qd/(ε₀A). …1m
- Capacitance: C = Q/V = Q ÷ [Qd/(ε₀A)]:
  **C = ε₀A/d** (vacuum). …1m
- With a dielectric (K) filling the gap, the net field is reduced to E/K, so V falls by K and:
  **C = Kε₀A/d** (medium). …1m

**Diagram — parallel-plate capacitor** (draw it):
- [ ] Two parallel plates, area A, separation d, marked +Q and −Q.
- [ ] Uniform field lines from + to − plate; label E and (if asked) dielectric slab K.
- Earns: ~1m for labelled geometry feeding the derivation.

### Q5. Energy stored in a charged capacitor (3m)
<!-- id: ch02-deriv-q5 -->
Derive the expression for the energy stored in a capacitor of capacitance C charged to a final charge Q (final voltage V).

> Syllabus note: the formal derivation was rationalised out of NCERT (formula required), but it is still asked in many board papers — included here for completeness.

**Answer:**
- At an intermediate charge q the potential is q/C; work to add charge dq: dW = (q/C) dq. …1m
- Total work = energy stored: U = ∫(0→Q) (q/C) dq = Q²/(2C). …1m
- Using Q = CV:
  **U = Q²/2C = ½CV² = ½QV.** …1m

### Q6. Energy density of an electric field (3m)
Derive the energy stored per unit volume (energy density) in the field of a parallel-plate capacitor and express it in terms of E.

**Answer:**
- Energy U = ½CV², with C = ε₀A/d and V = Ed: U = ½(ε₀A/d)(Ed)² = ½ε₀A d E². …1½m
- Volume between plates = A·d, so energy density u = U/(Ad):
  **u = ½ε₀E².** …1m
- For a dielectric medium: u = ½Kε₀E². It depends only on the field, confirming energy is stored *in the field itself*. …½m

### Q7. Equivalent capacitance — series and parallel combinations (5m)
<!-- id: ch02-deriv-q7 -->
Derive the equivalent capacitance for n capacitors connected (a) in series and (b) in parallel.

**Answer:**
**(a) Series** — same charge Q on each, voltages add: …2½m
- V = V₁ + V₂ + … + Vₙ and Vᵢ = Q/Cᵢ.
- Q/C_eq = Q/C₁ + Q/C₂ + … + Q/Cₙ ⇒
  **1/C_eq = 1/C₁ + 1/C₂ + … + 1/Cₙ.** (C_eq < smallest.)

**(b) Parallel** — same voltage V across each, charges add: …2½m
- Q = Q₁ + Q₂ + … + Qₙ and Qᵢ = CᵢV.
- C_eq·V = C₁V + C₂V + … + CₙV ⇒
  **C_eq = C₁ + C₂ + … + Cₙ.** (C_eq > largest.)

**Diagram — series & parallel** (draw it):
- [ ] Series: capacitors end-to-end in one line across the battery; mark same Q through all.
- [ ] Parallel: capacitors side-by-side between the same two nodes; mark same V across all.
- Earns: ~½m each correct circuit topology.
