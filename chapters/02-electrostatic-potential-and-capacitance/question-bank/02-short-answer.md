# Chapter 2 — Electrostatic Potential & Capacitance: Short Answer (Sections B/C)

> 2–3 mark conceptual questions. Answers are the mark-earning points: state the law/definition, give the formula, explain the effect. Diagram checklists included where a sketch scores marks.

### Q1. Define electric potential and potential difference (2m)
Define electric potential at a point and the potential difference between two points; give units.

**Answer:**
- Electric potential at a point = work done per unit positive charge in bringing it from infinity to that point, against the field. V = W/q₀. …1m
- Potential difference V_A − V_B = work done per unit charge moving it from B to A: V_A − V_B = W_BA/q₀. …½m
- SI unit: volt (V) = joule/coulomb; it is a scalar. …½m

### Q2. What is an equipotential surface? State its properties (2m)
Define an equipotential surface and list its key properties.

**Answer:**
- Definition: a surface on which the electric potential has the same value at every point (V = const). …1m
- Properties (any two): …1m
  - No work is done in moving a charge over an equipotential surface (W = qΔV = 0).
  - The electric field is always perpendicular to the equipotential surface.
  - Two equipotential surfaces never intersect (a point can't have two potentials).
  - Closely spaced surfaces ⇒ strong field; widely spaced ⇒ weak field.

**Diagram — equipotential surfaces** (draw it; do not just describe):
- [ ] For a point charge: concentric circles (spheres) with radial field lines crossing them at 90°.
- [ ] For a uniform field: equally spaced parallel straight lines ⟂ to the field lines.
- Earns: ~½m correct shape + ~½m field lines perpendicular and labelled.

### Q3. Derive/justify E = −dV/dr and explain the negative sign (2m)
Show the relation between electric field and potential gradient, and explain the sign.

**Answer:**
- Work to move charge q a small distance dr against field: dW = −qE·dr; also dW = q dV. …1m
- Equating: q dV = −qE dr ⇒ **E = −dV/dr**. …½m
- Negative sign: the field points in the direction of *decreasing* potential, so E is the negative of the potential gradient. Unit check: V/m = N/C. …½m

### Q4. Potential energy of a system of two point charges (2m)
Write the expression for the electrostatic PE of two point charges and state its physical meaning.

**Answer:**
- U = (1/4πε₀)(q₁q₂ / r₁₂) = k q₁q₂ / r. …1m
- Meaning: work done in assembling the two charges from infinity to separation r. …½m
- Sign: U > 0 for like charges (repulsion, energy must be supplied); U < 0 for unlike charges (attraction, energy released). …½m

### Q5. Why is E zero but V non-zero inside a charged conductor? (2m)
Explain why the electric field inside a charged conductor is zero while the potential is not.

**Answer:**
- In electrostatic equilibrium free charges reside on the surface, so net field inside E = 0. …1m
- Since E = −dV/dr = 0 inside, V cannot change ⇒ V is constant throughout the conductor and equals its surface value (kQ/R for a sphere). …1m
- Zero field does not mean zero potential — a region can be at constant non-zero potential.

### Q6. Define capacitance; on what factors does a parallel-plate capacitor depend? (2m)
Define capacitance and list the factors controlling a parallel-plate capacitor.

**Answer:**
- Capacitance C = Q/V (charge stored per unit potential difference); unit farad. …1m
- For a parallel-plate capacitor C = Kε₀A/d, so it depends on: …1m
  - Plate area A (C ∝ A),
  - Plate separation d (C ∝ 1/d),
  - Dielectric constant K of the medium (C ∝ K).
- It does NOT depend on the charge or voltage applied.

### Q7. Effect of dielectric — battery connected vs disconnected (3m)
A dielectric slab (constant K) is inserted into a charged parallel-plate capacitor. Compare the changes when (i) the battery stays connected and (ii) the battery is disconnected first.

**Answer:** In both cases C → KC. …½m

| Quantity | Battery CONNECTED (V const) | Battery DISCONNECTED (Q const) |
|---|---|---|
| Capacitance C | increases to KC | increases to KC |
| Charge Q | increases to KQ₀ | unchanged |
| Voltage V | unchanged | decreases to V₀/K |
| Field E | unchanged (E = V/d) | decreases to E₀/K |
| Energy U | increases to KU₀ | decreases to U₀/K |

- Connected case (V fixed): U = ½CV² ⇒ U rises by K. …1¼m
- Disconnected case (Q fixed): U = Q²/2C ⇒ U falls by K. …1¼m
- This "battery connected or not" distinction is the single most-tested trap in this chapter.

### Q8. Distinguish conductors, insulators and dielectrics (2m)
State the difference between a conductor, an insulator and a dielectric in an external field.

**Answer:**
- Conductor: has free charges; inside it E = 0 in equilibrium, charges move to the surface. …¾m
- Insulator: no free charges; charges are bound and cannot move freely. …¾m
- Dielectric: an insulator that polarises in an external field — bound charges shift slightly, producing an internal field opposing the applied field (this raises capacitance). …½m

### Q9. Two charges: where is the potential zero? (2m)
For charges +q and −q separated by distance d, describe the locus of points where the net potential is zero versus where the net field is zero.

**Answer:**
- Net V = 0: at all points equidistant (in potential terms) where kq/r₁ = kq/r₂; for ±q this is the perpendicular-bisector plane (and points satisfying r₁ = r₂). …1m
- Net E = 0: cannot be zero anywhere on the line between +q and −q (fields add there); it differs from the V = 0 locus. …½m
- Key point: V can be zero where E is not, and vice-versa — they are independent conditions. …½m

### Q10. Energy stored in a capacitor — three forms and energy density (2m)
Write the energy stored in a charged capacitor and the energy density of the field.

**Answer:**
- U = ½CV² = ½QV = Q²/2C (all equivalent). …1m
- Energy density (energy per unit volume of field region) u = ½ε₀E². …½m
- The energy is stored in the electric field between the plates; for a medium of constant K, u = ½Kε₀E². …½m

### Q11. Polarisation of a dielectric — qualitative (2m)
Explain what happens to a non-polar dielectric placed in an external electric field, and how it affects the capacitor.

**Answer:**
- The external field induces dipole moments (positive and negative charge centres separate) — the dielectric becomes polarised. …1m
- Bound surface charges appear, creating an internal field E_p opposite to the applied field E₀; net field E = E₀ − E_p = E₀/K is reduced. …½m
- Lower V = Ed at the same Q means C = Q/V increases by factor K. …½m

### Q12. Sharing of charge between two capacitors / common potential (3m)
Two capacitors C₁ (charged to V₁) and C₂ (charged to V₂) are connected in parallel. Find the common potential and comment on the energy.

**Answer:**
- Charge is conserved: total Q = C₁V₁ + C₂V₂. …1m
- Common potential V = (C₁V₁ + C₂V₂)/(C₁ + C₂). …1m
- Energy after < energy before; the difference ΔU = ½ · C₁C₂/(C₁+C₂) · (V₁ − V₂)² is lost as heat/EM radiation in the connecting wires. …1m
