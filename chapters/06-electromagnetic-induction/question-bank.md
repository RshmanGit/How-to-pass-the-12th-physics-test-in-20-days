# Chapter 6 — Electromagnetic Induction: Question Bank

> CBSE Class 12 Physics (2025-26 syllabus). Approx weightage: 4 marks (this chapter usually
> shares a unit/section with Ch.7 Alternating Current). Answers are written as the
> **mark-earning steps** of the CBSE marking scheme, not as essays.
>
> Note on scope: transformers, AC power factor, LCR/resonance and rms calculations belong to
> **Chapter 7 (Alternating Current)** and are deliberately excluded here. This file covers only
> Electromagnetic Induction.

Constants used: μ₀ = 4π × 10⁻⁷ T·m·A⁻¹.

---

## MCQ & Assertion-Reason

### Q1. Lenz's law and current direction (1m)

A bar magnet is pushed with its **N-pole** towards a coil connected to a galvanometer. The
direction of the induced current in the coil (as seen by the approaching magnet) is:

(a) anticlockwise so the near face becomes a N-pole
(b) clockwise so the near face becomes a S-pole
(c) zero, because the magnet is outside the coil
(d) reverses continuously

**Answer: (a).** By Lenz's law the induced current opposes the approach, so the coil's near face
must become a **N-pole** to repel the incoming N-pole → current flows **anticlockwise as seen from
the magnet** (right-hand rule), i.e. clockwise when viewed from the coil's far side. The key
scoring idea: **near face repels the approaching pole.** (1m)

---

### Q2. Flux, EMF and rate of change (1m)

The magnetic flux through a coil is Φ = 5t² + 3t + 2 (Wb, t in s). The magnitude of the induced
EMF at t = 2 s is:

(a) 13 V  (b) 23 V  (c) 43 V  (d) 25 V

**Answer: (b) 23 V.**
ε = −dΦ/dt = −(10t + 3). At t = 2 s, |ε| = 10(2) + 3 = **23 V**. (1m)

---

### Q3. SI unit and dimensions of self-inductance (1m)

One henry is equivalent to:

(a) 1 Wb·A⁻¹  (b) 1 V·s·A⁻¹  (c) 1 Ω·s  (d) all of these

**Answer: (d) all of these.** From ε = −L(dI/dt), L = ε/(dI/dt) → V·s·A⁻¹. Also L = Φ/I →
Wb·A⁻¹. Since V/A = Ω, V·s·A⁻¹ = Ω·s. All three are valid. (1m)

---

### Q4. Eddy currents — where they are wanted vs unwanted (1m)

Eddy currents are deliberately used (made useful) in:

(a) the core of a transformer  (b) electromagnetic braking of trains
(c) the windings of a motor  (d) ordinary connecting wires

**Answer: (b) electromagnetic braking.** In transformer cores eddy currents are a *loss* and are
minimised by lamination; in (b) they are *used* to dissipate kinetic energy as heat and stop the
train smoothly. (1m)

---

### Q5. Assertion-Reason — inductance is geometry-dependent (1m)

**Assertion (A):** The self-inductance of a solenoid increases when an iron core is inserted.
**Reason (R):** Self-inductance depends only on the current flowing through the solenoid.

(a) Both A and R true, R is the correct explanation of A
(b) Both A and R true, R is NOT the correct explanation
(c) A true, R false
(d) A false, R true

**Answer: (c).** A is true (L = μ₀μ_r n²Al rises with μ_r > 1 for iron). R is false —
self-inductance depends on **geometry and the medium**, NOT on the current. (1m)

---

### Q6. Assertion-Reason — Lenz's law and energy (1m)

**Assertion (A):** When a magnet is moved towards a coil, work has to be done against the
induced current.
**Reason (R):** Lenz's law is a consequence of conservation of energy.

(a) Both true, R correct explanation of A
(b) Both true, R not the correct explanation
(c) A true, R false
(d) A false, R true

**Answer: (a).** The induced current opposes the motion (Lenz), so an external agent must do
work; that work appears as electrical energy. This opposition is *required* by energy
conservation — so R correctly explains A. (1m)

---

## Short Answer (2-3m)

### Q7. State Faraday's laws of electromagnetic induction (2m)

**Restated:** State the two laws Faraday gave for induced EMF.

- **First law (1m):** Whenever the magnetic flux linked with a closed circuit changes, an EMF is
  induced in it; it lasts only as long as the flux is changing.
- **Second law (1m):** The magnitude of the induced EMF equals the rate of change of magnetic
  flux linkage:
  ε = −N (dΦ/dt)
  For N turns, the flux linkage is NΦ. The minus sign (Lenz's law) shows the EMF opposes the
  change producing it. (½m for the sign/Lenz mention)

---

### Q8. Lenz's law and conservation of energy (2-3m)
<!-- id: ch06-q8 -->

**Restated:** State Lenz's law and explain how it follows from energy conservation.

- **Statement (1m):** The direction of the induced current is always such that it **opposes the
  change** in flux that produces it.
- **Energy argument (1-2m):** The induced current opposes the motion of the magnet → an external
  agent must do **work against this opposing force**. This mechanical work is converted into
  electrical energy (and then heat in the resistance). If the induced current *aided* the motion
  instead, the magnet would accelerate on its own and produce energy from nothing — violating
  conservation of energy. Hence Lenz's law is a direct statement of energy conservation. (boxed
  conclusion: induced EMF ⇒ work done = electrical energy generated)

---

### Q9. Distinguish self-inductance and mutual inductance (2m)

**Restated:** Define self-inductance and mutual inductance and give their defining equations.

| | Self-inductance L | Mutual inductance M |
|---|---|---|
| Cause | flux linkage of a coil due to **its own** current | flux linkage of one coil due to current in a **neighbouring** coil |
| Defining eqn | NΦ = LI, ε = −L(dI/dt) | N₂Φ₂ = MI₁, ε₂ = −M(dI₁/dt) |
| Unit | henry (H) | henry (H) |

- L is the EMF induced in a coil per unit rate of change of its **own** current. (1m)
- M is the EMF induced in coil 2 per unit rate of change of current in coil 1. (1m)

---

### Q10. Eddy currents and four applications (2-3m)
<!-- id: ch06-q10 -->

**Restated:** What are eddy currents? State how they are minimised, and list applications.

- **Definition (1m):** Eddy currents are circulating (loop) currents induced in the **body of a
  conductor** when the magnetic flux through it changes. They flow in closed loops in planes
  perpendicular to the field.
- **Minimising (½m):** Use **laminated** cores (thin sheets separated by insulating varnish) and
  slotted cores → increases resistance → reduces eddy-current Joule heating loss.
- **Applications (1-1½m, any three-four):**
  - [ ] Electromagnetic braking (trains, treadmills)
  - [ ] Induction furnace (melting metals by eddy-current heating)
  - [ ] Electromagnetic damping in moving-coil galvanometers / dead-beat instruments
  - [ ] Speedometers / energy meters (induction-type)

---

### Q11. EMF in a coil from a B–t graph (3m)

**Restated:** A coil of N turns and area A is in a field B that varies with time as given. Find
the induced EMF in each interval.

- **Law (1m):** ε = −N·A·(dB/dt) (flux Φ = BA, area fixed).
- **Method (1m):** dB/dt = slope of the B–t graph in each segment.
- **Result (1m):** ε is **constant** where the graph is a straight line of constant slope, and
  ε = **0** in any flat (constant-B) region. Magnitude = N·A·|slope|, with units volts. Reverse
  the sign when the slope reverses.

> Diagram cue: if asked, sketch the ε–t graph as a *step* function (rectangular pulses) — each
> step height = N·A·|slope| of the corresponding B–t segment.

---

### Q12. Two scenarios giving the same induced EMF (2m)

**Restated:** Show that an EMF is induced whether (i) the magnet moves and the coil is fixed, or
(ii) the coil moves and the magnet is fixed — what matters is relative motion.

- Both cases change the flux Φ = B·A·cosθ linked with the coil. (1m)
- ε = −dΦ/dt depends only on the **relative rate of change of flux**, not on which object moves.
  Hence both produce the same induced EMF for the same relative velocity. (1m)

---

## Derivations & Long Answer

### Q13. Motional EMF of a rod moving in a magnetic field (3m)
<!-- id: ch06-q13 -->

**Restated:** Derive the EMF induced across a straight conductor of length *l* moving with
velocity *v* perpendicular to a uniform field *B*. Derive it both by the flux method and the
Lorentz-force method.

**Setup:** A rod PQ of length *l* slides on a U-shaped rail in a uniform field B (into the page),
moving with speed *v* perpendicular to its length. (½m for figure)

**Method 1 — flux rule (1m):**
- Area enclosed at time t: A = l·x, where x increases as the rod moves.
- Φ = B·l·x
- ε = −dΦ/dt = −B·l·(dx/dt) = **−B·l·v**, so |ε| = B·l·v.

**Method 2 — Lorentz force (1m):**
- Each free electron experiences force F = q·v×B → magnitude qvB along the rod.
- This accumulates charge until the electric field E balances it: qE = qvB ⇒ E = vB.
- EMF = E·l = **B·l·v**. ✅

**Boxed result:** ε = B·l·v (½m). If the rod has resistance R, current I = Blv/R and the force
needed to keep it moving is F = BIl = B²l²v/R.

**Diagram — motional EMF (draw it):**
- [ ] U-shaped rail + sliding rod PQ
- [ ] Field B shown into the page (×)
- [ ] Velocity v arrow ⟂ to rod
- [ ] Polarity (+/−) marked at the two ends of the rod
- Earns: ~½m figure + ~½m labels

---

### Q14. EMF of a rod rotating about one end (3m)
<!-- id: ch06-q14 -->

**Restated:** A conducting rod of length *l* rotates with angular speed *ω* about one end, in a
uniform field *B* perpendicular to the plane of rotation. Derive the induced EMF.

- A small element at distance *r* moves with speed v = ωr. Its motional EMF: dε = B·v·dr = B·ω·r·dr. (1m)
- Integrate from 0 to l:
  ε = ∫₀ˡ Bωr dr = Bω·(l²/2) (1m)
- **Boxed result:** ε = ½ B ω l². Equivalently, in terms of frequency f, ε = ½ B (2πf) l² = Bπf l². (1m)

> A rod rotating about its **centre**: the two halves develop equal and opposite EMFs that cancel,
> so net EMF between the ends = 0 (good trap to mention).

---

### Q15. Self-inductance of a long solenoid (3m)
<!-- id: ch06-q15 -->

**Restated:** Derive the self-inductance of a long air-cored solenoid of length *l*, area of
cross-section *A*, and total turns *N* (n = N/l turns per unit length).

- **Field inside (½m):** B = μ₀ n I.
- **Flux linkage (1m):** total turns = N = nl; each turn links Φ = BA = μ₀nIA, so
  NΦ = (nl)(μ₀nIA) = μ₀ n² A l · I.
- **Define L (½m):** NΦ = LI ⇒
- **Boxed result (1m):** L = μ₀ n² A l = μ₀ N² A / l. With a core of relative permeability μ_r,
  L = μ₀ μ_r n² A l.

> Note: L depends only on geometry (n, A, l) and the medium — never on the current.

---

### Q16. Mutual inductance of two coaxial solenoids (3-5m)
<!-- id: ch06-q16 -->

**Restated:** Derive the mutual inductance of two long coaxial solenoids, the inner one (S₁) of
N₁ turns and the outer (S₂) of N₂ turns, both of length *l* and the inner area *A*.

- Pass current I₂ through the outer solenoid S₂: field inside it B₂ = μ₀ n₂ I₂ = μ₀ (N₂/l) I₂. (1m)
- This B₂ threads the inner solenoid S₁. Flux through one turn of S₁ = B₂·A; total linkage of S₁:
  N₁Φ₁ = N₁ · μ₀ (N₂/l) I₂ · A. (1m)
- By definition N₁Φ₁ = M I₂ ⇒
- **Boxed result:** M = μ₀ N₁ N₂ A / l = μ₀ n₁ n₂ A l. (1m)
- **Reciprocity (1m):** computing with current in S₁ instead gives the same M, i.e. M₁₂ = M₂₁ = M.
- With an iron core of permeability μ_r: M = μ₀ μ_r N₁ N₂ A / l, so a core greatly increases M. (1m)

---

### Q17. Energy stored in an inductor, U = ½LI² (3m)
<!-- id: ch06-q17 -->

**Restated:** Show that the energy stored in an inductor carrying steady current I is ½LI², and
write the magnetic energy density.

- Back EMF while current grows: ε = L(dI/dt). Work done by source against it in time dt:
  dW = ε·I·dt = L·I·dI. (1m)
- Total work to build current from 0 to I:
  W = ∫₀ᴵ L I dI = ½ L I². (1m)
- **Boxed result:** U = ½ L I². This energy is stored in the magnetic field. (½m)
- **Energy density (½m):** using L = μ₀n²Al and B = μ₀nI, u = U/(volume) = **B²/(2μ₀)** J·m⁻³.

---

### Q18. AC generator — principle and EMF expression (5m)
<!-- id: ch06-q18 -->

**Restated:** With a labelled diagram, explain the principle of an AC generator and derive the
expression for the instantaneous EMF.

- **Principle (1m):** Electromagnetic induction — when a coil rotates in a magnetic field, the
  flux through it changes continuously, inducing an alternating EMF.
- **Construction (1m):** A rectangular coil of N turns, area A, mounted on an axle between the
  poles of a magnet (field B); the coil ends connect to two **slip rings** + brushes that feed
  the external circuit. (mention armature, field magnet, slip rings, brushes)
- **Derivation (2m):**
  - At time t the coil normal makes angle θ = ωt with B, so flux Φ = N·B·A·cos(ωt).
  - ε = −dΦ/dt = −NBA·d/dt[cos ωt] = **NBAω·sin(ωt)**.
- **Result (1m):** ε = ε₀ sin(ωt) with peak EMF **ε₀ = NBAω**. The EMF is maximum when the coil
  plane is **parallel** to B (θ = 90°, flux changing fastest) and zero when the plane is
  **perpendicular** to B.

**Diagram — AC generator (draw it):**
- [ ] Rectangular coil between N and S poles, field B labelled
- [ ] Two slip rings + two brushes (output terminals)
- [ ] Rotation direction (ω) and external load R
- [ ] Optional: output ε–t graph (a sine wave)
- Earns: ~1m construction figure + ~1m correct labels

---

## Numericals

### Q19. Rectangular loop leaving a magnetic field (3m) — NCERT
<!-- id: ch06-q19 -->

**Restated:** A rectangular loop 8 cm × 2 cm is pulled out of a uniform field B = 0.3 T at
v = 1 cm·s⁻¹. Find the induced EMF and the time for which it lasts when motion is (a) along the
long side, (b) along the short side.

- Formula: ε = B·l·v (l = length of the edge cutting field lines).
- **(a) Long edge l = 8 cm = 0.08 m, v = 0.01 m·s⁻¹:**
  ε = 0.3 × 0.08 × 0.01 = **2.4 × 10⁻⁴ V**; lasts t = 0.02 m / 0.01 m·s⁻¹ = **2 s**. (1½m)
- **(b) Short edge l = 2 cm = 0.02 m:**
  ε = 0.3 × 0.02 × 0.01 = **0.6 × 10⁻⁴ V**; lasts t = 0.08 / 0.01 = **8 s**. (1½m)

---

### Q20. EMF of a rod rotating at 400 rad/s (2m) — NCERT
<!-- id: ch06-q20 -->

**Restated:** A 1 m long metallic rod rotates at ω = 400 rad·s⁻¹ about one end, normal to a field
B = 0.5 T. Find the induced EMF between the centre and the ring.

- Formula: ε = ½ B ω l².
- ε = ½ × 0.5 × 400 × (1)² = **100 V**. (2m)

---

### Q21. Solenoid + small search loop (2-3m) — NCERT

**Restated:** A solenoid with n = 1500 turns·m⁻¹ carries a current that changes from 2 A to 4 A
in 0.1 s. A small loop of area 2 cm² is placed inside, axis parallel to the solenoid. Find the
induced EMF in the loop.

- Field of solenoid: B = μ₀ n I.
- Rate of change: dB/dt = μ₀ n (dI/dt) = (4π×10⁻⁷)(1500)(2/0.1) = μ₀×1500×20.
- ε = A·dB/dt = (2×10⁻⁴)(4π×10⁻⁷)(1500)(20)
  = **7.54 × 10⁻⁶ V** (≈ 7.5 µV). (3m)

---

### Q22. Jet plane wing EMF (2-3m) — NCERT
<!-- id: ch06-q22 -->

**Restated:** A jet flies at 1800 km·h⁻¹; wingspan 25 m. Earth's field = 5 × 10⁻⁴ T, dip 30°.
Find the EMF developed between the wing tips.

- Convert speed: v = 1800 × (5/18) = 500 m·s⁻¹.
- Only the **vertical** component cuts the horizontal wings: B_V = B·sin δ = 5×10⁻⁴ × sin 30° = 2.5×10⁻⁴ T.
- ε = B_V · l · v = (2.5×10⁻⁴)(25)(500) = **3.125 V**. (3m)

---

### Q23. Rotating circular coil — peak EMF, current, power (3m) — NCERT
<!-- id: ch06-q23 -->

**Restated:** A circular coil of radius 8 cm, N = 20 turns, rotates at ω = 50 rad·s⁻¹ about a
vertical diameter in a horizontal field B = 3.0 × 10⁻² T. Coil resistance R = 10 Ω. Find the peak
EMF, peak current, and average power dissipated.

- Area A = πr² = π(0.08)² = 2.01 × 10⁻² m².
- Peak EMF: ε₀ = NBAω = 20 × (3.0×10⁻²) × (2.01×10⁻²) × 50 = **0.603 V**. (1m)
- Peak current: I₀ = ε₀/R = 0.603/10 = **0.0603 A**. (1m)
- Average power: P = ε₀ I₀ / 2 = (0.603 × 0.0603)/2 = **0.018 W**. (1m)
  (The power comes from the external rotating agent — energy is conserved.)

---

### Q24. Self-inductance from induced EMF (2m)

**Restated:** A coil develops an EMF of 10 mV when the current through it changes at 2 A·s⁻¹.
Find its self-inductance.

- Formula: ε = L (dI/dt) ⇒ L = ε / (dI/dt).
- L = (10 × 10⁻³) / 2 = **5 × 10⁻³ H = 5 mH**. (2m)

---

### Q25. Flux change from mutual inductance (2m)

**Restated:** Two coils have mutual inductance M = 1.5 H. The current in the primary changes from
0 to 20 A in 0.5 s. Find (a) the change of flux linkage in the secondary and (b) the EMF induced
in the secondary.

- (a) Flux linkage change: N₂Φ₂ = M·I = 1.5 × 20 = **30 Wb**. (1m)
- (b) EMF: ε₂ = M (dI/dt) = 1.5 × (20/0.5) = **60 V**. (1m)

---

## Case-Study

### Q26. Case study — eddy-current electromagnetic braking (4m)
<!-- id: ch06-q26 -->

**Passage:** Modern electric trains and some roller-coasters use **electromagnetic braking**
instead of (or with) friction brakes. A metal disc/rail attached to the moving system passes
through the field of strong electromagnets. As it moves, the changing flux induces **eddy
currents** in the metal; by Lenz's law these currents oppose the motion, producing a retarding
force that converts kinetic energy into heat. The braking force grows with speed and vanishes at
rest, giving smooth, contact-free deceleration with no brake-pad wear.

**Q26.1 (1m)** What are eddy currents?
→ Circulating currents induced in the **bulk of a conductor** due to a changing magnetic flux
through it.

**Q26.2 (1m)** Which law fixes the *direction* of these currents, and what is the result?
→ **Lenz's law** — the eddy currents oppose the relative motion, so they retard the moving
conductor (braking). (Energy conservation underlies this.)

**Q26.3 (1m)** Why does the braking force fall to zero when the train stops?
→ At rest there is **no change of flux** (dΦ/dt = 0), so no EMF, no eddy current, hence no force.
The braking force is proportional to speed.

**Q26.4 (1m)** Where is this same eddy-current effect a **drawback**, and how is it reduced?
→ In transformer/motor **cores**, eddy currents waste energy as heat; reduced by using
**laminated** cores (thin insulated sheets) that raise resistance and cut the current loops.
