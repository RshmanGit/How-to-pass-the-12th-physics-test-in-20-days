# Chapter 4 — Moving Charges and Magnetism — Derivations / Long Answers (3–5m)

> The mark-carrying derivations. Each is written as ordered steps with the typical mark split and a "what to draw" checklist where a figure scores marks. Cyclotron is NOT in the 2025-26 syllabus and is excluded.

---

### Q1. Field on the axis of a circular current loop (5m)
<!-- id: ch04-deriv-q1 -->

Using the Biot–Savart law, derive the expression for the magnetic field at a point on the axis of a circular loop of radius `R` carrying current `I`, at distance `x` from the centre. Hence find the field at the centre.

**Answer:**

**Step 1 — Biot–Savart for an element (…1m).**
For a current element `I dl`, the field at the axial point P is
`dB = (μ₀/4π) · (I dl × r)/r³`, with `r² = R² + x²`.
Since `dl ⊥ r`, magnitude `dB = (μ₀/4π) · (I dl)/(R² + x²)`.

**Step 2 — Resolve components (…1½m).**
Each `dB` is perpendicular to `r`. Resolve into:
- axial component `dB cosα` (along the axis),
- perpendicular component `dB sinα` (perpendicular to axis).
By symmetry, for the diametrically opposite element the perpendicular components cancel. Only axial components survive:
`B = ∮ dB cosα`, where `cosα = R/√(R² + x²)`.

**Step 3 — Integrate (…1½m).**
`B = (μ₀ I)/(4π(R²+x²)) · R/√(R²+x²) · ∮ dl`, and `∮ dl = 2πR`:
`B = (μ₀ I)/(4π) · (R · 2πR)/(R²+x²)^{3/2}`.

**Step 4 — Result (…1m).**
For `N` turns:
> **`B = μ₀ N I R² / [2 (R² + x²)^{3/2}]`**, directed along the axis.

**Step 5 — At the centre** (`x = 0`): **`B = μ₀ N I / (2R)`**.

**Diagram — axial field of a loop** (draw it):
- [ ] Circular loop of radius `R`, current direction marked
- [ ] Axial point P at distance `x`; line `r` from element to P with `r = √(R²+x²)`
- [ ] One element `I dl` with its `dB` shown perpendicular to `r`, resolved into axial + perpendicular components
- [ ] Angle `α` between `r` and the axis
- Earns: ~1m for a correctly labelled figure with component resolution.

---

### Q2. Ampere's circuital law and field of a long straight wire (5m)
<!-- id: ch04-deriv-q2 -->

State Ampere's circuital law and use it to derive the magnetic field at distance `r` from a long straight wire carrying current `I`.

**Answer:**

**Step 1 — Statement (…1m).**
Ampere's law: the line integral of the magnetic field around any closed loop equals `μ₀` times the net current enclosed:
`∮ B · dl = μ₀ I_enc`.

**Step 2 — Choice of Amperian loop (…1½m).**
By symmetry, `B` is constant in magnitude on a circle of radius `r` centred on the wire and is everywhere tangential to it. Take this circle as the Amperian loop, so `B ∥ dl` at every point.

**Step 3 — Evaluate (…1½m).**
`∮ B · dl = B ∮ dl = B(2πr)`. The current enclosed is `I`. Therefore `B(2πr) = μ₀ I`.

**Step 4 — Result (…1m).**
> **`B = μ₀ I / (2πr)`**, with field lines forming concentric circles around the wire (right-hand thumb rule).

**Diagram — straight wire field** (draw it):
- [ ] Straight wire with current `I` (arrow)
- [ ] Concentric circular field lines, with direction by right-hand rule
- [ ] Amperian circle of radius `r`, with `B` tangential and `dl` element marked
- Earns: ~1m.

---

### Q3. Magnetic field of a long solenoid using Ampere's law (3m)
<!-- id: ch04-deriv-q3 -->

Derive the expression for the field inside a long solenoid (`n` turns per unit length, current `I`).

**Answer:**

**Step 1 — Setup (…1m).**
The field inside a long solenoid is uniform and along the axis; outside it is ≈ 0. Take a rectangular Amperian loop `abcd` of length `L` along the axis, with side `ab` inside and `cd` far outside.

**Step 2 — Line integral (…1m).**
`∮ B · dl = B·L (along ab) + 0 (cd, outside) + 0 (bc, da, since B ⊥ dl)`.
Current enclosed = `(nL)·I` (number of turns × current).
So `B·L = μ₀ (nL) I`.

**Step 3 — Result (…1m).**
> **`B = μ₀ n I`** inside the solenoid (uniform, independent of position).

**Diagram — solenoid Amperian loop** (draw it):
- [ ] Long solenoid with turns and current direction
- [ ] Rectangular loop `abcd`: side `ab` inside (length `L`), `cd` outside
- [ ] Uniform interior field lines; ≈ 0 outside
- Earns: ~1m.

---

### Q4. Radius of circular motion of a charge in a magnetic field (3m)
<!-- id: ch04-deriv-q4 -->

A charged particle `q`, mass `m` enters a uniform field `B` perpendicular to `v`. Derive the radius and time period of its circular path.

**Answer:**

**Step 1 — Force is centripetal (…1m).**
Magnetic force `F = qvB` acts perpendicular to `v`, providing the centripetal force; speed (hence KE) is constant.

**Step 2 — Radius (…1m).**
`qvB = mv²/r ⇒` **`r = mv/(qB)`**.

**Step 3 — Period and frequency (…1m).**
`T = 2πr/v = 2πm/(qB)`; frequency `f = qB/(2πm)`. Both are **independent of `v` and `r`**.

---

### Q5. Force per unit length between two parallel currents (3m)
<!-- id: ch04-deriv-q5 -->

Derive the force per unit length between two long parallel wires separated by `d`, carrying currents `I₁` and `I₂`. Hence define the ampere.

**Answer:**

**Step 1 — Field of wire 1 at wire 2 (…1m).**
`B₁ = μ₀ I₁/(2πd)`, perpendicular to wire 2.

**Step 2 — Force on wire 2 (…1m).**
Force on length `L` of wire 2: `F = B₁ I₂ L = μ₀ I₁ I₂ L/(2πd)`.
So **`F/L = μ₀ I₁ I₂/(2πd)`**.

**Step 3 — Nature + ampere (…1m).**
Same-direction currents attract, opposite repel. For `I₁ = I₂ = 1 A`, `d = 1 m`: `F/L = 2 × 10⁻⁷ N/m`, which defines **one ampere**.

**Diagram — parallel wires** (draw it):
- [ ] Two parallel wires, separation `d`, currents `I₁`, `I₂` marked
- [ ] Field `B₁` of wire 1 at the location of wire 2 (into/out of page)
- [ ] Force arrows showing attraction (same direction) or repulsion (opposite)
- Earns: ~1m.

---

### Q6. Torque on a current loop in a uniform field (5m)
<!-- id: ch04-deriv-q6 -->

Derive the expression for the torque on a rectangular current loop placed in a uniform magnetic field. Define magnetic dipole moment.

**Answer:**

**Step 1 — Setup (…1m).**
Rectangular loop, sides `a` (along which force acts) and `b`, `N` turns, current `I`, in uniform field `B`. Let the normal to the coil make angle `θ` with `B`.

**Step 2 — Forces on the sides (…1½m).**
The two sides of length `a` (perpendicular to `B`) carry equal and opposite forces `F = BIa` each, separated by perpendicular distance `b sinθ`. The forces on the other pair (the sides of length `b`) act along the same line and cancel (no torque).

**Step 3 — Torque (…1½m).**
The two forces form a couple:
`τ = F × (perpendicular distance) = (BIa)(b sinθ) = BI(ab) sinθ = BIA sinθ`.
For `N` turns: `τ = NIAB sinθ`.

**Step 4 — Vector form + magnetic moment (…1m).**
Define magnetic dipole moment `m = NIA` (along the normal). Then
> **`τ = m × B`**, magnitude **`τ = NIAB sinθ`** (max `NIAB` when plane ∥ B; zero when plane ⊥ B).

**Diagram — torque on a loop** (draw it):
- [ ] Rectangular coil in field `B` (uniform horizontal lines)
- [ ] Current direction around the loop; normal `n̂` at angle `θ` to `B`
- [ ] Force `F = BIa` on each of the two effective sides, forming a couple
- Earns: ~1m.

---

### Q7. Moving-coil galvanometer — full derivation with diagram (5m)
<!-- id: ch04-deriv-q7 -->

With a labelled diagram, describe the construction, principle, and theory of a moving-coil galvanometer. Why is a radial field used and why a soft-iron core?

**Answer:**

**Step 1 — Construction (…1m).**
A rectangular coil of `N` turns wound on a non-magnetic frame, suspended (or pivoted) between the poles of a permanent magnet shaped to give a radial field, with a soft-iron cylindrical core inside the coil and a hairspring providing restoring torque.

**Step 2 — Principle (…1m).**
A current-carrying coil in a magnetic field experiences a deflecting torque `τ = NIAB`.

**Step 3 — Radial field (…1m).**
The concave pole-pieces + soft-iron core make the field **radial**, so the coil plane is always parallel to `B`. Hence `θ = 90°` always and `τ = NIAB` (independent of deflection).

**Step 4 — Balance and result (…1½m).**
At steady deflection `φ`, deflecting torque = restoring torque of the spring:
`NIAB = kφ ⇒` **`φ = (NAB/k) I`**, i.e. `φ ∝ I` (linear scale).

**Step 5 — Soft-iron core (…½m).**
The core makes the field stronger and strictly radial, increasing sensitivity and ensuring linearity.

**Diagram — moving-coil galvanometer** (draw it):
- [ ] Permanent magnet with concave (cylindrical) pole-pieces giving a radial field
- [ ] Rectangular coil of N turns on a soft-iron cylindrical core
- [ ] Suspension/hairspring (restoring torque) and pointer/scale
- [ ] Field lines shown radial (pointing toward the core)
- Earns: ~1m for a correctly labelled diagram.
