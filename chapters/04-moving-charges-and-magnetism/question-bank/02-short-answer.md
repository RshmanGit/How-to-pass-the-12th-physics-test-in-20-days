# Chapter 4 — Moving Charges and Magnetism — Sections B/C (Short Answer, 2–3m)

> Conceptual 2- and 3-mark questions written as mark-earning steps. Cyclotron / velocity selector / toroid excluded (not in 2025-26 syllabus).

---

### Q1. State the Biot–Savart law (2m)

Write the Biot–Savart law in vector form and give the magnitude.

**Answer:**
- The magnetic field `dB` due to a current element `I dl` at a point with position vector `r` from the element is (…1m):
  `dB = (μ₀/4π) · I (dl × r̂)/r²` = `(μ₀/4π) · I (dl × r)/r³`.
- Magnitude: `dB = (μ₀/4π) · (I dl sinθ)/r²`, where `θ` is the angle between `dl` and `r` (…½m).
- Direction: perpendicular to the plane containing `dl` and `r` (given by `dl × r`); `μ₀/4π = 10⁻⁷ T·m/A` (…½m).

---

### Q2. Magnetic field at the centre of a circular coil (2m)

A circular coil of `N` turns and radius `R` carries current `I`. Find the field at its centre.

**Answer:**
- For an element at the centre, `dl ⊥ r`, so `θ = 90°` and `r = R` for all elements (…½m).
- `B = (μ₀/4π) ∮ (I dl)/R² = (μ₀ I)/(4πR²) ∮ dl = (μ₀ I)/(4πR²)(2πR)` (…1m).
- For `N` turns: `B = μ₀NI/(2R)`, directed along the axis (right-hand thumb rule) (…½m).

---

### Q3. Force on a charge in combined E and B fields (2m)

Write the total (Lorentz) force on a charge `q` moving with velocity `v` in fields `E` and `B`, and state when the net force is zero.

**Answer:**
- Lorentz force: `F = q(E + v × B)` (electric part `qE` + magnetic part `q(v × B)`) (…1m).
- Net force is zero when `qE = −q(v × B)`, i.e. the electric and magnetic forces balance; for `E ⊥ B ⊥ v` this happens at speed `v = E/B` (…1m).

---

### Q4. Path of a charged particle entering a magnetic field (2m)

Describe the trajectory of a charged particle entering a uniform magnetic field (i) perpendicular to `B`, (ii) at an angle `θ` to `B`.

**Answer:**
- (i) Perpendicular: the force `qvB` is centripetal and constant in magnitude ⇒ **uniform circular** motion of radius `r = mv/(qB)` (…1m).
- (ii) At angle `θ`: component `v cosθ` along `B` is unchanged (straight drift) and `v sinθ` perpendicular gives circular motion ⇒ the resultant path is a **helix** with radius `r = mv sinθ/(qB)` and pitch `p = (v cosθ)(2πm/qB)` (…1m).

---

### Q5. Two parallel wires — nature of the force (2m)

State whether two long parallel wires carrying currents in (i) the same and (ii) opposite directions attract or repel, and write `F/L`.

**Answer:**
- `F/L = μ₀I₁I₂/(2πd)` (…1m).
- (i) Same direction ⇒ **attract**; (ii) opposite direction ⇒ **repel** (…1m).

---

### Q6. Definition of the ampere (2m)

Define one ampere using the force between parallel conductors.

**Answer:**
- One ampere is that steady current which, flowing in each of two infinitely long, straight, parallel conductors of negligible cross-section placed 1 metre apart in vacuum, produces a force of `2 × 10⁻⁷ N` per metre of length on each conductor (…1½m).
- Check: `F/L = μ₀(1)(1)/(2π·1) = 2 × 10⁻⁷ N/m` (…½m).

---

### Q7. Torque on a current loop — expression and vector form (2m)

Write the torque on a planar current loop in a uniform field and define magnetic moment.

**Answer:**
- Magnetic moment `m = NIA` (vector along the normal, given by the right-hand rule) (…1m).
- Torque `τ = m × B`, magnitude `τ = NIAB sinθ`, where `θ` is the angle between the normal to the loop and `B` (…1m).

---

### Q8. Moving-coil galvanometer — principle (3m)

State the principle and working of a moving-coil galvanometer.

**Answer:**
- **Principle:** A current-carrying coil placed in a magnetic field experiences a torque `τ = NIAB` (…1m).
- A radial field keeps the coil plane always parallel to `B`, so deflecting torque `= NIAB` for any deflection (…1m).
- The coil rotates until the deflecting torque balances the restoring torque of the spring: `NIAB = kφ ⇒ φ = (NAB/k) I`, so the deflection `φ ∝ I` and the scale is linear (…1m).

---

### Q9. Current sensitivity vs voltage sensitivity (3m)
<!-- id: ch04-sa-q9 -->

Define current and voltage sensitivity of a galvanometer. Show that increasing the number of turns does not necessarily increase voltage sensitivity.

**Answer:**
- Current sensitivity `= φ/I = NAB/k` (deflection per unit current) (…1m).
- Voltage sensitivity `= φ/V = φ/(IR) = NAB/(kR)` (deflection per unit voltage), where `R` is the coil resistance (…1m).
- Doubling `N` doubles current sensitivity, but the coil resistance `R` also roughly doubles (more wire). So `NAB/(kR)` stays about the same — voltage sensitivity is *not* necessarily increased (…1m).

---

### Q10. Conversion of galvanometer to ammeter (3m)
<!-- id: ch04-sa-q10 -->

How is a galvanometer (resistance `G`, full-scale current `I_g`) converted into an ammeter of range `I`? Find the shunt and the net resistance.

**Answer:**
- Connect a small resistance `S` (shunt) in **parallel** with the galvanometer (…½m).
- The excess current `(I − I_g)` passes through `S`; equal voltage across both: `I_g G = (I − I_g) S` (…1m).
- `S = I_g G / (I − I_g)` (…1m).
- Net resistance of the ammeter `= GS/(G+S)`, which is very small (…½m).

---

### Q11. Conversion of galvanometer to voltmeter (3m)
<!-- id: ch04-sa-q11 -->

How is a galvanometer converted into a voltmeter of range `V`? Find the series resistance.

**Answer:**
- Connect a large resistance `R` in **series** with the galvanometer (…½m).
- At full-scale, the current `I_g` flows through `(R + G)` for the full voltage `V`: `V = I_g(R + G)` (…1m).
- `R = V/I_g − G` (…1m).
- Net resistance `= R + G` is very large, so the voltmeter draws negligible current and does not disturb the circuit (…½m).

---

### Q12. Why same KE but different radii (2m)

A proton and an alpha particle, accelerated through the same potential difference, enter a magnetic field perpendicularly. Compare their radii.

**Answer:**
- After acceleration through `V`: `qV = ½mv² ⇒ mv = √(2mqV)`; radius `r = mv/(qB) = √(2mV/q)/B`, so `r ∝ √(m/q)` (…1m).
- For α (`m = 4mₚ`, `q = 2e`) vs proton (`mₚ`, `e`): `r_α/r_p = √[(4/2)/(1/1)] = √2`. So `r_α = √2 · r_p` (…1m).

---

### Q13. Magnetic field lines of a solenoid vs bar magnet (2m)

Compare the magnetic field of a current-carrying solenoid with that of a bar magnet.

**Answer:**
- A solenoid carrying current behaves like a bar magnet: field lines emerge from one end (N pole) and enter the other (S pole); the field is strong and nearly uniform inside (…1m).
- **Diagram — solenoid field lines** (draw it):
  - [ ] Solenoid as a series of loops; closely spaced parallel lines *inside* pointing along the axis
  - [ ] Lines emerging from the N-pole end, looping outside to the S-pole end
  - [ ] Mark N and S ends consistent with the current direction (right-hand rule)
  - Earns: ~1m for correct interior uniformity + pole labelling.

---

### Q14. Force on a current-carrying conductor (2m)

Write the force on a straight conductor of length `L` carrying current `I` in field `B`, and state when it is maximum/zero.

**Answer:**
- `F = I(L × B)`, magnitude `F = BIL sinθ`, where `θ` is the angle between the conductor and `B` (…1m).
- Maximum `F = BIL` when `θ = 90°` (conductor ⊥ field); zero when `θ = 0°` (conductor ∥ field) (…1m).
