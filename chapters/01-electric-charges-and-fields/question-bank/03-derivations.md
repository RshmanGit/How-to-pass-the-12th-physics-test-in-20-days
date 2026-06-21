# Chapter 1 — Electric Charges and Fields: Derivations & Long Answers (3-5m)

> The high-yield derivations for this chapter. Each is laid out as the ordered, mark-carrying steps an examiner ticks. Boxed results are the lines that must appear.

---

### Q1. Electric field on the axial line of a dipole (3m)
<!-- id: ch01-deriv-q1 -->

**Setup (½m):** Dipole = charges −q at A and +q at B, separation 2a, centre O, dipole moment p = q·2a directed −q → +q. Take a point P on the axis at distance r from O, on the side of +q.

**Field from each charge (1m):**
- From +q (distance r − a, points away, toward P):
  E₊ = (1/4πε₀)·q/(r−a)²
- From −q (distance r + a, points toward the charge, away from P):
  E₋ = (1/4πε₀)·q/(r+a)²

**Resultant (½m):** Both along the axis, opposite directions; E₊ > E₋, so
E_axial = (q/4πε₀)·[1/(r−a)² − 1/(r+a)²] = (q/4πε₀)·[ (4ar)/(r²−a²)² ]

**Substitute p = 2aq (½m):**
E_axial = (1/4πε₀)·(2pr)/(r²−a²)²

**Short-dipole limit r ≫ a (½m):**

> **E_axial = (1/4πε₀)·(2p/r³)**, directed along p (i.e. parallel to the dipole moment).

**Diagram (draw it):** dipole −q—O—+q on a line, point P on the axis beyond +q, arrows for E₊ and E₋ at P.

---

### Q2. Electric field on the equatorial line of a dipole (3m)
<!-- id: ch01-deriv-q2 -->

**Setup (½m):** Point P on the perpendicular bisector at distance r from centre O; each charge is at distance √(r²+a²) from P.

**Field magnitudes (1m):**
E₊ = E₋ = (1/4πε₀)·q/(r²+a²)

**Resolve components (1m):**
- The components perpendicular to the axis cancel.
- The components along the axis (antiparallel to p) add: each contributes E·cosθ with cosθ = a/√(r²+a²).
- E_eq = 2·(1/4πε₀)·[q/(r²+a²)]·[a/√(r²+a²)] = (1/4πε₀)·(2aq)/(r²+a²)^{3/2}

**Substitute p = 2aq (½m):**
E_eq = (1/4πε₀)·p/(r²+a²)^{3/2}

**Short-dipole limit r ≫ a (½m):**

> **E_equatorial = (1/4πε₀)·(p/r³)**, directed **antiparallel** to p.

Note: E_axial = 2 × E_equatorial at equal r. (Useful 1-mark comparison.)

**Diagram (draw it):** dipole on x-axis, P on y-axis, E₊ and E₋ drawn with their components; show the axial components adding.

---

### Q3. Torque on a dipole in a uniform field; expression for τ (3m)
<!-- id: ch01-deriv-q3 -->

**Forces (1m):** In a uniform field E, charge +q feels +qE and −q feels −qE — equal, opposite, parallel forces forming a couple. Net force = 0.

**Moment of the couple (1m):** Magnitude of each force = qE; perpendicular distance between their lines of action = 2a sinθ (θ = angle between p and E).
τ = (force) × (perpendicular distance) = qE × 2a sinθ = (q·2a)·E sinθ

**Result (½m):**

> **τ = pE sinθ**, and in vector form **τ = p × E**.

**Special cases (½m):** τ_max = pE at θ = 90°; τ = 0 at θ = 0° (stable) and θ = 180° (unstable).

**Diagram (draw it):** dipole at angle θ to E; mark +qE and −qE forces and the perpendicular arm 2a sinθ.

---

### Q4. Potential energy of a dipole in a uniform field; work to rotate it (3m)
<!-- id: ch01-deriv-q4 -->

**Work to rotate (1m):** Work done by external agent in rotating the dipole through dθ against the torque = τ dθ = pE sinθ dθ.

**Integrate (1m):** Bringing the dipole from θ₁ to θ₂:
W = ∫_{θ₁}^{θ₂} pE sinθ dθ = pE(cosθ₁ − cosθ₂)

**Potential energy (½m):** Taking U = 0 at θ = 90° (θ₁ = 90°):

> **U(θ) = −pE cosθ = −p·E**

**Useful results (½m):**
- Rotating from stable (0°) to unstable (180°): W = pE(cos0° − cos180°) = **2pE**.
- U_min = −pE (θ = 0°, stable); U_max = +pE (θ = 180°, unstable).

---

### Q5. Gauss's law — field due to an infinitely long straight line charge (5m)
<!-- id: ch01-deriv-q5 -->

**State Gauss's law (½m):** ∮ E·dS = q_enclosed/ε₀.

**Choose Gaussian surface (1m):** By symmetry the field is radial and depends only on perpendicular distance r. Take a coaxial cylinder of radius r and length l around the wire (linear charge density λ).

**Flux contributions (1m):**
- Curved surface: E is parallel to dS (radial) → flux = E·(2πr l).
- Two flat end-caps: E is perpendicular to their area vectors → flux = 0.

**Apply Gauss's law (1m):** Charge enclosed = λl.
E·(2πr l) = λl/ε₀

**Solve (1m):**

> **E = λ/(2πε₀ r)**, i.e. E ∝ 1/r, directed radially (outward for +λ).

**Vector form (½m):** **E** = [λ/(2πε₀ r)] r̂.

**Diagram (draw it):** long wire, coaxial cylinder of radius r and length l, radial E arrows on the curved surface.

---

### Q6. Gauss's law — field due to an infinite charged plane sheet (5m)
<!-- id: ch01-deriv-q6 -->

**State Gauss's law (½m):** ∮ E·dS = q_enclosed/ε₀.

**Symmetry & Gaussian surface (1m):** Field is uniform, normal to the sheet, and equal on both sides. Choose a cylindrical pillbox of cross-sectional area A piercing the sheet, with its two flat faces parallel to the sheet (one on each side).

**Flux (1½m):**
- Curved surface: E parallel to it → flux = 0.
- Each flat cap: E parallel to area vector → flux = E·A each; total = 2EA.

**Apply Gauss's law (1m):** Charge enclosed = σA (σ = surface charge density).
2EA = σA/ε₀

**Solve (1m):**

> **E = σ/(2ε₀)**, independent of the distance from the sheet (uniform field).

Direction: away from the sheet for +σ, toward it for −σ. (For a charged conductor's surface, E = σ/ε₀ since the field exists on one side only.)

**Diagram (draw it):** plane sheet, pillbox crossing it, E arrows pointing outward through both flat faces.

---

### Q7. Gauss's law — field due to a uniformly charged thin spherical shell (5m)
<!-- id: ch01-deriv-q7 -->

**Setup (½m):** Shell of radius R, total charge Q, uniformly distributed. By symmetry, E is radial and depends only on distance r from the centre. Use a concentric spherical Gaussian surface of radius r.

**Case 1 — Outside (r > R) (1½m):**
- ∮ E·dS = E·(4πr²); charge enclosed = Q.
- E·4πr² = Q/ε₀

> **E_out = (1/4πε₀)·Q/r²** — same as if all the charge were a point charge at the centre.

**Case 2 — On the surface (r = R) (½m):**
> **E_surface = (1/4πε₀)·Q/R² = σ/ε₀** (σ = Q/4πR²).

**Case 3 — Inside (r < R) (1½m):**
- Charge enclosed by a Gaussian surface inside the shell = 0.
- E·4πr² = 0

> **E_inside = 0.**

**E-vs-r graph (1m) — draw it:**
- [ ] E = 0 for r < R (flat along the axis)
- [ ] Sharp jump up to E = σ/ε₀ at r = R (maximum)
- [ ] E ∝ 1/r² decreasing curve for r > R
- [ ] Axes labelled E (y) and r (x), with r = R marked

---

### Q8. Coulomb's law in vector form and the superposition principle (3m)
<!-- id: ch01-deriv-q8 -->

**Coulomb's law, vector form (1½m):** For charges q₁ (at r₁) and q₂ (at r₂),
**F**₁₂ = (1/4πε₀)·(q₁q₂/r₁₂²)·r̂₁₂
where r₁₂ = |r₁ − r₂| and r̂₁₂ points from q₂ to q₁. The sign of the product q₁q₂ automatically gives repulsion (+) or attraction (−). (Also: **F**₂₁ = −**F**₁₂, Newton's third law.)

**Superposition principle (1½m):** The force on a charge due to many charges is the vector sum of the forces due to each, computed independently:
**F**₁ = (q₁/4πε₀)·Σ_{i≠1} (q_i/r₁ᵢ²)·r̂₁ᵢ
Pairwise forces are not modified by the presence of the other charges.

---

### Q9. Derive E of a uniformly charged shell using the E-r relation, and explain why the field is discontinuous at r = R (3m)

- From Q7: E_inside = 0, E_outside = Q/4πε₀r², E_surface = σ/ε₀. (1½m)
- At r = R the field jumps from 0 (inside) to σ/ε₀ (just outside). (½m)
- This discontinuity equals σ/ε₀ and is a general result: the normal component of E is discontinuous across any charged surface by σ/ε₀, because the surface charge is a sheet of charge. (1m)
