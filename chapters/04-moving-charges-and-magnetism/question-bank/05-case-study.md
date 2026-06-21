# Chapter 4 — Moving Charges and Magnetism — Section D (Case-Based, 4m)

> Case-based questions: a short passage then 4 sub-parts (typically 1m each, sometimes a choose-2-of-3). Answers given in marking-scheme style.

---

### Q1. Case study — Moving-coil galvanometer and its conversion (4m)
<!-- id: ch04-cs-q1 -->

**Passage.** A moving-coil galvanometer has a coil of `N` turns and area `A` suspended in a *radial* magnetic field `B`. When current `I` passes, the deflecting torque is balanced by the restoring torque `kφ` of the suspension, giving `φ = (NAB/k)I`. A particular galvanometer has `G = 20 Ω` and gives full-scale deflection at `I_g = 5.0 mA`. It is to be used as both an ammeter and a voltmeter.

**(i) Why is the magnetic field made radial? (1m)**
- A radial field keeps the coil plane always parallel to `B`, so `θ = 90°` and `τ = NIAB` for every deflection. Hence `φ ∝ I`, giving a uniform (linear) scale.

**(ii) Define current sensitivity and write its expression. (1m)**
- Current sensitivity = deflection per unit current `= φ/I = NAB/k` (rad/A or div/A).

**(iii) To convert it into an ammeter of range 2.0 A, find the shunt. (1m)**
- `S = I_g G/(I − I_g) = (5.0 × 10⁻³ × 20)/(2.0 − 5.0 × 10⁻³) = 0.10/1.995`
- **`S ≈ 0.050 Ω`** in parallel.

**(iv) To convert it into a voltmeter of range 10 V, find the series resistance. (1m)**
- `R = V/I_g − G = 10/(5.0 × 10⁻³) − 20 = 2000 − 20 =` **`1980 Ω`** in series.

*(Alternative (iv): "Why doesn't increasing the number of turns increase voltage sensitivity?" — Because coil resistance `R` rises with `N`, so `φ/V = NAB/(kR)` stays roughly constant.)*

---

### Q2. Case study — Charged particle in a magnetic field (4m)
<!-- id: ch04-cs-q2 -->

**Passage.** A charged particle entering a uniform magnetic field experiences `F = q(v × B)`, always perpendicular to `v`. If `v ⊥ B`, the particle moves in a circle of radius `r = mv/(qB)` with period `T = 2πm/(qB)`, independent of speed. If `v` makes an angle `θ` with `B`, the path is a helix. A proton (`mₚ = 1.67 × 10⁻²⁷ kg`) enters a field `B = 0.50 T` with speed `2.0 × 10⁶ m/s` perpendicular to `B`.

**(i) Why does the magnetic force do no work on the particle? (1m)**
- `F ⊥ v` at every instant, so `F·v = 0`; work done = 0 and the kinetic energy (and speed) stays constant.

**(ii) Find the radius of the proton's circular path. (1m)**
- `r = mₚv/(qB) = (1.67 × 10⁻²⁷ × 2.0 × 10⁶)/(1.6 × 10⁻¹⁹ × 0.50)`
- **`r ≈ 4.2 × 10⁻² m`** (≈ 4.2 cm).

**(iii) Find the period of revolution. (1m)**
- `T = 2πmₚ/(qB) = (2π × 1.67 × 10⁻²⁷)/(1.6 × 10⁻¹⁹ × 0.50)`
- **`T ≈ 1.31 × 10⁻⁷ s`** (independent of speed).

**(iv) If instead `v` makes 60° with `B`, what is the shape of the path and which velocity component fixes the radius? (1m)**
- The path is a **helix**; the perpendicular component `v sin60°` fixes the radius (`r = mv sinθ/qB`), while `v cos60°` gives the uniform drift along `B` (the pitch).
