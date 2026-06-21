# Chapter 8 — Electromagnetic Waves — Question Bank

> CBSE Class 12 Physics (2025-26). Weightage ~4 marks. Answers written in CBSE marking-scheme
> style: **statement -> formula -> substitution -> result with units**. Constants used:
> `c = 3 x 10^8 m/s`, `mu0 = 4 pi x 10^-7 T m/A`, `e0 = 8.85 x 10^-12 C^2 N^-1 m^-2`.

---

## MCQ & Assertion-Reason

### Q1. Speed of EM waves in vacuum (1m)

**Type: MCQ.** The speed of an electromagnetic wave in free space is given by which expression?

(a) `mu0 e0`  (b) `1/(mu0 e0)`  (c) `1/sqrt(mu0 e0)`  (d) `sqrt(mu0 e0)`

**Answer:** (c) `c = 1/sqrt(mu0 e0)`.
- Substituting: `c = 1/sqrt(4 pi x 10^-7 x 8.85 x 10^-12) = 3 x 10^8 m/s`. ...1m

### Q2. Nature of EM waves (1m)

**Type: MCQ.** In an electromagnetic wave travelling along the +x direction, the electric field
`E` is along +y. The magnetic field `B` oscillates along:

(a) +x  (b) +y  (c) +z  (d) -y

**Answer:** (c) +z.
- `E`, `B`, and direction of propagation form a right-handed set: `E x B` points along propagation (+x). With `E` along +y, `B` must be along +z. ...1m

### Q3. Which band has the highest frequency (1m)

**Type: MCQ.** Arrange in order of **increasing** frequency: X-rays, microwaves, visible light, radio waves.

(a) radio < microwaves < visible < X-rays
(b) X-rays < visible < microwaves < radio
(c) microwaves < radio < visible < X-rays
(d) visible < radio < microwaves < X-rays

**Answer:** (a). Increasing frequency = decreasing wavelength: radio < microwave < IR < visible < UV < X-ray < gamma. ...1m

### Q4. Displacement current location (1m)

**Type: MCQ.** During the charging of a parallel-plate capacitor, the displacement current exists:

(a) in the connecting wires only  (b) in the region between the plates only
(c) both in the wires and between the plates  (d) nowhere

**Answer:** (b) in the region between the plates only — where the electric flux is changing.
The conduction current flows in the wires; the displacement current `Id = e0 (d(phiE)/dt)`
in the gap exactly equals it, keeping the total current continuous. ...1m

### Q5. Ratio of field amplitudes (1m)

**Type: MCQ.** For an EM wave in vacuum, the ratio of the amplitudes `E0/B0` equals:

(a) `mu0 e0`  (b) `c`  (c) `1/c`  (d) `c^2`

**Answer:** (b) `c`. The instantaneous fields satisfy `E = cB`, hence `E0/B0 = c = 3 x 10^8 m/s`. ...1m

### Q6. Assertion-Reason — energy split (1m)

**Type: Assertion-Reason.**
**Assertion (A):** In an electromagnetic wave the energy is shared equally between the electric
and magnetic fields.
**Reason (R):** The energy density of the electric field equals that of the magnetic field at
every instant in a plane EM wave.

(a) Both A and R true, R is the correct explanation of A
(b) Both A and R true, R is NOT the correct explanation of A
(c) A true, R false
(d) A false, R true

**Answer:** (a).
- Electric energy density `u_E = (1/2) e0 E^2`; magnetic `u_B = B^2/(2 mu0)`. ...0.5m
- Using `E = cB` and `c^2 = 1/(mu0 e0)` gives `u_E = u_B`, so the energy is shared equally — R correctly explains A. ...0.5m

### Q7. Assertion-Reason — displacement current need (1m)

**Type: Assertion-Reason.**
**Assertion (A):** Maxwell modified Ampere's circuital law by adding the displacement current term.
**Reason (R):** The original Ampere's law gave inconsistent results for a surface passing between
the plates of a charging capacitor.

(a) Both true, R correct explanation  (b) Both true, R not correct explanation
(c) A true, R false  (d) A false, R true

**Answer:** (a). For a charging capacitor, a flat surface (pierced by the wire) gives current `I`,
but a bulging surface passing through the gap (no conduction current) gives 0 — a contradiction.
Maxwell's displacement current removes this inconsistency, so R correctly explains A. ...1m

### Q8. Assertion-Reason — radiation pressure (1m)

**Type: Assertion-Reason.**
**Assertion (A):** Electromagnetic waves exert pressure on a surface they fall on.
**Reason (R):** Electromagnetic waves carry momentum.

(a) Both true, R correct explanation  (b) Both true, R not correct explanation
(c) A true, R false  (d) A false, R true

**Answer:** (a). Since EM waves transport momentum `p = U/c`, the rate of momentum delivery to a
surface produces a force, hence radiation pressure. R correctly explains A. ...1m

---

## Short Answer (2-3m)

### Q9. Displacement current and its need (2m)
<!-- id: ch08-q9 -->

**Q (own words):** Define displacement current. Why did Maxwell find it necessary to introduce it?

**Marking-scheme answer:**
- **Definition:** Displacement current is the current arising from a time-varying electric field
  (changing electric flux), given by `Id = e0 (d(phiE)/dt)`. ...1m
- **Need:** Ampere's circuital law `(closed integral of B.dl = mu0 I)` failed for a charging
  capacitor — choosing a surface between the plates gives no conduction current though `B`
  exists there. Maxwell added `Id` so that the total current (conduction + displacement) is
  continuous, making the law consistent for all surfaces. ...1m
- **Modified law:** `closed integral of B.dl = mu0 (I_c + Id) = mu0 (I_c + e0 d(phiE)/dt)`.

### Q10. Four properties of EM waves (2-3m)
<!-- id: ch08-q10 -->

**Q (own words):** State any four key properties of electromagnetic waves.

**Marking-scheme answer (any four, 0.5m each):**
- They are **transverse**: `E` and `B` oscillate perpendicular to each other and to the
  direction of propagation. ...0.5m
- They travel in vacuum at `c = 1/sqrt(mu0 e0) = 3 x 10^8 m/s`, independent of frequency. ...0.5m
- `E` and `B` are **in phase**, with `E0/B0 = c` (i.e. `E = cB` at every instant). ...0.5m
- They carry **energy and momentum**, hence exert radiation pressure. ...0.5m
- They need **no material medium**; they are produced by accelerating charges. ...0.5m
- They are **uncharged** — undeflected by electric or magnetic fields. ...0.5m

### Q11. Why is EM wave called transverse (2m)

**Q (own words):** On what basis is an electromagnetic wave classified as a transverse wave?
Draw a sketch of the field orientation.

**Marking-scheme answer:**
- In a plane EM wave the electric field `E` and magnetic field `B` are mutually perpendicular and
  **both lie in a plane perpendicular to the direction of propagation** `(E x B || c)`. ...1m
- Since the oscillating quantities are perpendicular (not parallel) to propagation, the wave is
  transverse. ...1m

**Diagram - plane EM wave orientation** (draw it):
- [ ] Wave travelling along x-axis (arrow marked direction of propagation, c)
- [ ] Sinusoidal `E` oscillating in x-y plane (along y), labelled `E` / `Ey`
- [ ] Sinusoidal `B` oscillating in x-z plane (along z), labelled `B` / `Bz`, in phase with E
- Earns: ~1m for perpendicular E and B; ~1m for showing both perpendicular to propagation

### Q12. EM spectrum order and one use each (3m)
<!-- id: ch08-q12 -->

**Q (own words):** Write the electromagnetic spectrum in order of increasing frequency and give
one use of each band.

**Marking-scheme answer (order + uses, ~0.5m per correct band):**

| Band | Increasing freq order | One use |
|------|----------------------|---------|
| Radio waves | lowest freq | Radio/TV broadcasting, cellular communication |
| Microwaves | | RADAR, microwave ovens, satellite links |
| Infrared (IR) | | Remote controls, thermal imaging, physiotherapy |
| Visible light | | Vision, photography, optical communication |
| Ultraviolet (UV) | | Sterilisation, LASIK surgery, detecting forgery |
| X-rays | | Medical imaging, detecting fractures, security scans |
| Gamma rays | highest freq | Cancer treatment (radiotherapy), nuclear medicine |

Full order earns ~1.5m; correct uses ~1.5m.

### Q13. Identify the band from frequency/wavelength (2m)

**Q (own words):** Name the EM radiation used for (i) water purification / detecting invisible
writing, (ii) studying crystal structure / medical diagnosis of bone fractures. Give their
approximate wavelength ranges.

**Marking-scheme answer:**
- (i) **Ultraviolet (UV) rays** — wavelength `~4 x 10^-7 m down to 6 x 10^-10 m` (often quoted
  `10^-7` to `10^-9 m`). ...1m
- (ii) **X-rays** — wavelength `~10^-8 m to 10^-13 m` (often quoted around `10^-10 m`). ...1m

### Q14. Energy density of an EM wave (2-3m)
<!-- id: ch08-q14 -->

**Q (own words):** Write the expression for the total energy density of an EM wave and show that
the electric and magnetic contributions are equal.

**Marking-scheme answer:**
- Electric energy density `u_E = (1/2) e0 E^2`; magnetic energy density `u_B = B^2/(2 mu0)`. ...1m
- Using `E = cB` and `c^2 = 1/(mu0 e0)`:
  `u_E = (1/2) e0 (cB)^2 = (1/2) e0 c^2 B^2 = (1/2) e0 (1/(mu0 e0)) B^2 = B^2/(2 mu0) = u_B`. ...1m
- Hence `u_E = u_B`, and total `u = u_E + u_B = e0 E^2 = B^2/mu0`. Average over a cycle:
  `u_avg = (1/2) e0 E0^2 = B0^2/(2 mu0)`. ...1m

### Q15. Radiation pressure and momentum (2m)
<!-- id: ch08-q15 -->

**Q (own words):** EM waves carry momentum. Write the momentum delivered for energy `U` and hence
the radiation pressure on a perfectly absorbing surface.

**Marking-scheme answer:**
- Momentum carried for energy `U`: `p = U/c`. ...1m
- For a **totally absorbing** surface, pressure `= intensity / c = I/c`; for a **perfectly
  reflecting** surface the momentum reverses, so pressure `= 2I/c`. ...1m
- (Solar radiation pressure is tiny, of order `~10^-6` Pa, which is why it is normally ignored.)

---

## Derivations & Long Answer

### Q16. Modified Ampere's law (Ampere-Maxwell) — derive Id for a capacitor (3m)
<!-- id: ch08-q16 -->

**Q (own words):** Show that, for a charging parallel-plate capacitor, the displacement current
between the plates equals the conduction current in the wire, and state the modified Ampere's law.

**Marking-scheme answer (mark-carrying steps):**
- **Set-up:** Charge on capacitor `q`, plate area `A`, field between plates
  `E = q/(e0 A)` (uniform, neglecting fringing). ...0.5m
- Electric flux through the gap: `phiE = E A = q/e0`. ...0.5m
- Displacement current: `Id = e0 (d phiE/dt) = e0 . (1/e0)(dq/dt) = dq/dt = I_c`. ...1m
- Hence `Id = I_c` — the displacement current between the plates equals the conduction current
  in the wire, restoring continuity of current. ...0.5m
- **Modified law (boxed):** `closed integral of B.dl = mu0 (I_c + e0 d(phiE)/dt)`. ...0.5m

### Q17. Show c = 1 / sqrt(mu0 e0) and E0 = c B0 (3m)
<!-- id: ch08-q17 -->

**Q (own words):** State how Maxwell's equations predict EM waves and obtain the speed of light
and the relation between field amplitudes.

**Marking-scheme answer:**
- A changing `E` field produces a `B` field (Ampere-Maxwell) and a changing `B` field produces an
  `E` field (Faraday); together they sustain a self-propagating wave. ...1m
- Maxwell's equations yield wave equations whose speed is
  `c = 1/sqrt(mu0 e0)`. ...1m
- Substituting `mu0 = 4 pi x 10^-7`, `e0 = 8.85 x 10^-12`:
  `c = 1/sqrt(4 pi x 10^-7 x 8.85 x 10^-12) = 3 x 10^8 m/s`, matching the measured speed of light
  — establishing light as an EM wave. The amplitudes satisfy `E0 = c B0`. ...1m
- (In a medium: `v = 1/sqrt(mu e) = c/n`.)

### Q18. Properties + diagram of a plane progressive EM wave (3m)

**Q (own words):** Write the equations of a plane EM wave travelling along +x and explain the
physical meaning of each symbol; sketch the wave.

**Marking-scheme answer:**
- `Ey = E0 sin(kx - wt)`, `Bz = B0 sin(kx - wt)`. ...1m
- Here `k = 2 pi/lambda` (propagation constant), `w = 2 pi f` (angular frequency),
  `c = w/k = f lambda`, and `E0 = c B0`. ...1m
- `E` and `B` are in phase, mutually perpendicular, and perpendicular to +x (transverse). ...1m

**Diagram - plane progressive EM wave** (draw it):
- [ ] x-axis = propagation direction (mark c)
- [ ] `Ey` sine curve in x-y plane (label E0)
- [ ] `Bz` sine curve in x-z plane (label B0), **in phase** with E
- [ ] Both curves cross zero and peak together
- Earns: ~1m correct in-phase perpendicular sketch with labels

---

## Numericals

### Q19. Find frequency, wavelength and B0 from given E0 (3m)

**Q (own words):** A plane EM wave in vacuum has electric field amplitude `E0 = 30 V/m` and
angular frequency `w = 2 x 10^11 rad/s`. Find (a) the magnetic field amplitude `B0`, (b) the
frequency `f`, and (c) the wavelength `lambda`.

**Marking-scheme answer:**
- (a) `B0 = E0/c = 30 / (3 x 10^8) = 1.0 x 10^-7 T = 100 nT`. ...1m
- (b) `f = w/(2 pi) = (2 x 10^11)/(2 pi) = 3.18 x 10^10 Hz`. ...1m
- (c) `lambda = c/f = (3 x 10^8)/(3.18 x 10^10) = 9.4 x 10^-3 m approx 9.4 mm`
  (equivalently `lambda = 2 pi c/w`). ...1m

### Q20. Read off parameters from a given wave equation (3m)
<!-- id: ch08-q20 -->

**Q (own words):** The magnetic field of an EM wave is
`By = (8 x 10^-6) sin(2 x 10^11 t + 300 pi x) T`. Find (a) the wavelength, (b) the frequency,
(c) the electric field amplitude `E0`, and the direction of propagation.

**Marking-scheme answer:**
- Compare with `B = B0 sin(wt + kx)`: `w = 2 x 10^11 rad/s`, `k = 300 pi rad/m`.
- (a) `lambda = 2 pi/k = 2 pi/(300 pi) = 6.67 x 10^-3 m approx 6.7 mm`. ...1m
- (b) `f = w/(2 pi) = (2 x 10^11)/(2 pi) = 3.18 x 10^10 Hz approx 3.2 x 10^10 Hz`. ...1m
- (c) `E0 = c B0 = (3 x 10^8)(8 x 10^-6) = 2.4 x 10^3 V/m = 2400 V/m`. ...0.5m
- The `(wt + kx)` sign means the wave travels along the **-x direction**. ...0.5m

### Q21. Displacement current from rate of change of voltage (3m)
<!-- id: ch08-q21 -->

**Q (own words):** A parallel-plate capacitor of capacitance `100 pF` is connected to a source
whose voltage changes at `dV/dt = 10^6 V/s`. Find the displacement current between the plates.

**Marking-scheme answer:**
- Displacement current equals the conduction current: `Id = I_c = C (dV/dt)`. ...1m
- Substitute: `Id = (100 x 10^-12)(10^6) = 1.0 x 10^-4 A = 0.1 mA`. ...2m

### Q22. Average energy density and intensity (3m)

**Q (own words):** A plane EM wave in vacuum has peak electric field `E0 = 48 V/m`. Find
(a) the average energy density and (b) the average intensity. `(e0 = 8.85 x 10^-12)`.

**Marking-scheme answer:**
- (a) `u_avg = (1/2) e0 E0^2 = (1/2)(8.85 x 10^-12)(48)^2 = 1.02 x 10^-8 J/m^3`. ...1.5m
- (b) Intensity `I = u_avg . c = (1.02 x 10^-8)(3 x 10^8) = 3.06 W/m^2 approx 3.1 W/m^2`. ...1.5m

### Q23. Magnetic field amplitude from a light bulb / source (2m)

**Q (own words):** The peak electric field of light from a source at a point is `E0 = 6.0 V/m`.
Find the peak magnetic field `B0` and the average energy density.

**Marking-scheme answer:**
- `B0 = E0/c = 6.0/(3 x 10^8) = 2.0 x 10^-8 T = 20 nT`. ...1m
- `u_avg = (1/2) e0 E0^2 = (1/2)(8.85 x 10^-12)(6.0)^2 = 1.6 x 10^-10 J/m^3`. ...1m

---

## Case-Study

### Q24. Case study — Maxwell's displacement current and the EM spectrum (4m)
<!-- id: ch08-q24 -->

**Passage (own words):** Ampere's circuital law in its original form failed for a charging
capacitor, where no conduction current flows between the plates yet a magnetic field is observed.
Maxwell resolved this by introducing a displacement current `Id = e0 (d phiE/dt)` driven by the
changing electric field. This symmetry between changing electric and magnetic fields led Maxwell
to predict self-sustaining electromagnetic waves travelling at `c = 1/sqrt(mu0 e0)`, which span a
broad spectrum from radio waves to gamma rays.

**Q (a) (1m):** Write the modified Ampere-Maxwell circuital law.
- **Answer:** `closed integral of B.dl = mu0 (I_c + e0 d(phiE)/dt)`. ...1m

**Q (b) (1m):** During capacitor charging, where does the displacement current flow and what is
its value relative to the conduction current?
- **Answer:** In the region between the plates (changing flux); it equals the conduction current,
  `Id = I_c`. ...1m

**Q (c) (1m):** Which band of the EM spectrum has the highest frequency, and name one use.
- **Answer:** Gamma rays; used in cancer radiotherapy / nuclear medicine. ...1m

**Q (d) (1m):** Calculate `c` from `mu0 = 4 pi x 10^-7` and `e0 = 8.85 x 10^-12`.
- **Answer:** `c = 1/sqrt(4 pi x 10^-7 x 8.85 x 10^-12) = 3 x 10^8 m/s`. ...1m
