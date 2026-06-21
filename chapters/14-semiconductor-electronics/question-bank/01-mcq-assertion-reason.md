# Chapter 14 — Semiconductor Electronics: Section A (MCQ + Assertion-Reason, 1 mark each)

> One-mark objective drill. Band gaps, doping, p-n junction biasing, V-I curves, rectifiers and special diodes — the quick-win marks that open Section A.

---

### Q1. Energy gap ordering (1m)

**Type:** MCQ · **Section A**

Arrange conductor, insulator and semiconductor in order of **increasing** energy gap (E_g) between the valence and conduction bands.

- (a) insulator < semiconductor < conductor
- (b) conductor < semiconductor < insulator
- (c) semiconductor < conductor < insulator
- (d) conductor < insulator < semiconductor

**Answer:** (b).
Conductor: bands overlap, E_g ≈ 0. Semiconductor: small gap, E_g ≈ 1 eV (Si 1.1 eV, Ge 0.7 eV). Insulator: large gap, E_g > 3 eV. So conductor < semiconductor < insulator.

---

### Q2. Intrinsic semiconductor carrier count (1m)

**Type:** MCQ · **Section A**

In a pure (intrinsic) semiconductor at room temperature, the number density of electrons (n_e) and holes (n_h) satisfies:

- (a) n_e > n_h
- (b) n_e < n_h
- (c) n_e = n_h
- (d) n_e = 0

**Answer:** (c) n_e = n_h.
In an intrinsic semiconductor every conduction electron leaves behind one hole, so n_e = n_h = n_i. Doping breaks this equality.

---

### Q3. Effect of doping on conductivity (1m)

**Type:** MCQ · **Section A**

Adding a small amount of pentavalent impurity to pure silicon causes its conductivity to:

- (a) decrease, because impurities scatter electrons
- (b) increase greatly, because of extra free electrons
- (c) stay the same
- (d) become zero

**Answer:** (b).
A pentavalent (donor) atom contributes one loosely bound extra electron to the conduction band, sharply increasing the free-electron density and hence conductivity (n-type).

---

### Q4. Majority carriers in p-type (1m)

**Type:** MCQ · **Section A**

In a p-type semiconductor the majority carriers and the dopant valency are:

- (a) electrons; pentavalent
- (b) holes; trivalent
- (c) holes; pentavalent
- (d) electrons; trivalent

**Answer:** (b) holes; trivalent.
A trivalent (acceptor) impurity, e.g. B, Al, In, creates holes which become the majority carriers; electrons are minority carriers.

---

### Q5. Net charge on a doped semiconductor (1m)

**Type:** MCQ · **Section A**

An n-type semiconductor crystal as a whole is:

- (a) negatively charged
- (b) positively charged
- (c) electrically neutral
- (d) charged only when biased

**Answer:** (c) electrically neutral.
Each donor atom is itself neutral; it merely donates a mobile electron while becoming a fixed positive ion. The total positive and negative charge balances, so the crystal stays neutral.

---

### Q6. What forms the depletion region (1m)

**Type:** MCQ · **Section A**

The depletion region of an unbiased p-n junction contains:

- (a) only free electrons
- (b) only holes
- (c) immobile ions and (almost) no free charge carriers
- (d) a high concentration of mobile carriers

**Answer:** (c).
Diffusion and recombination near the junction leave behind immobile negative acceptor ions (p-side) and positive donor ions (n-side); the region is depleted of mobile carriers.

---

### Q7. Direction of the barrier field (1m)

**Type:** MCQ · **Section A**

In the depletion region of a p-n junction, the internal electric field points from:

- (a) p-side to n-side
- (b) n-side to p-side
- (c) outward from the junction on both sides
- (d) there is no field

**Answer:** (b) n-side to p-side.
The uncovered positive donor ions sit on the n-side and negative acceptor ions on the p-side, so the field (and the barrier potential) points from n to p, opposing further diffusion.

---

### Q8. Forward bias and depletion width (1m)

**Type:** MCQ · **Section A**

When a p-n junction diode is forward biased, the width of the depletion region and the barrier potential:

- (a) both increase
- (b) both decrease
- (c) width increases, barrier decreases
- (d) width decreases, barrier increases

**Answer:** (b) both decrease.
Forward bias (p to +, n to −) opposes the barrier field, reducing the barrier height and narrowing the depletion layer, so current rises sharply past the knee voltage.

---

### Q9. Reverse-bias current (1m)

**Type:** MCQ · **Section A**

In reverse bias, a small current still flows through a diode. It is due to:

- (a) majority carriers
- (b) minority carriers
- (c) breakdown of the crystal
- (d) heating of the resistor

**Answer:** (b) minority carriers.
Reverse bias drives minority carriers across the junction, giving a tiny, almost voltage-independent reverse saturation current (order µA in Ge, nA in Si).

---

### Q10. Knee / threshold voltage (1m)

**Type:** MCQ · **Section A**

The approximate threshold (knee) voltage in forward bias is about 0.7 V for silicon and 0.3 V for germanium because:

- (a) Si has a smaller energy gap
- (b) Ge has a smaller energy gap
- (c) Si has more free electrons
- (d) Ge conducts only in reverse bias

**Answer:** (b) Ge has a smaller energy gap.
A smaller band gap (Ge 0.7 eV vs Si 1.1 eV) needs less forward voltage to start appreciable conduction, so Ge's knee is lower.

---

### Q11. Dynamic resistance of a diode (1m)

**Type:** MCQ · **Section A**

The dynamic (a.c.) resistance of a diode at an operating point is given by:

- (a) V/I
- (b) ΔV/ΔI
- (c) I/V
- (d) ΔI/ΔV

**Answer:** (b) ΔV/ΔI.
Dynamic resistance r_d = ΔV/ΔI is the slope of the V-I curve at the operating point; in the steep forward region it is very small (a few ohms).

---

### Q12. Output frequency of a full-wave rectifier (1m)

**Type:** MCQ · **Section A**

If the a.c. input to a **full-wave** rectifier has frequency 50 Hz, the ripple frequency of the output is:

- (a) 25 Hz
- (b) 50 Hz
- (c) 100 Hz
- (d) 0 Hz

**Answer:** (c) 100 Hz.
A full-wave rectifier delivers one output pulse per half-cycle, so the output frequency is twice the input: 2 × 50 = 100 Hz. (A half-wave rectifier would give 50 Hz.)

---

### Q13. Zener diode operating region (1m)

**Type:** MCQ · **Section A**

A Zener diode used as a voltage regulator is operated in:

- (a) forward bias below the knee
- (b) forward bias above the knee
- (c) reverse bias in the breakdown region
- (d) reverse bias below breakdown

**Answer:** (c).
In the reverse breakdown region the voltage across the Zener stays nearly constant (= V_Z) while current varies widely, which is exactly what voltage regulation needs.

---

### Q14. Photodiode bias (1m)

**Type:** MCQ · **Section A**

A photodiode used to detect light is operated in reverse bias because:

- (a) it conducts heavily only in reverse bias
- (b) the fractional change in reverse current with illumination is large and easily measured
- (c) forward bias destroys the diode
- (d) light cannot enter in forward bias

**Answer:** (b).
In reverse bias the dark current is tiny; light-generated carriers produce a clear, large *fractional* change in current, making intensity measurement easy. (Forward current is dominated by the large majority-carrier current and masks the photo-effect.)

---

### Q15. LED band-gap requirement (1m)

**Type:** MCQ · **Section A**

For an LED to emit light in the visible range, its semiconductor band gap should be:

- (a) less than 0.5 eV
- (b) about 1.8 eV to 3 eV
- (c) more than 5 eV
- (d) exactly 1.1 eV

**Answer:** (b) about 1.8 eV to 3 eV.
Visible photons span ~1.8 eV (red) to ~3 eV (violet); the band gap must lie in this range so that recombination releases visible-light photons (hν ≈ E_g). Si/Ge (small gap) emit in the IR and are unsuitable.

---

### Q16. Solar cell operation (1m)

**Type:** MCQ · **Section A**

A solar cell generates an emf because:

- (a) it is forward biased by sunlight
- (b) light creates electron-hole pairs near the junction that are separated by the built-in field
- (c) sunlight heats the junction
- (d) photons push current through an external battery

**Answer:** (b).
Photons absorbed near the depletion region create electron-hole pairs; the junction field sweeps electrons to the n-side and holes to the p-side, producing a photo-voltage with no external bias applied.

---

### Q17. Assertion-Reason — n-type neutrality (1m)

**Type:** Assertion-Reason · **Section A**

**Assertion (A):** An n-type semiconductor is electrically neutral.
**Reason (R):** The number of conduction electrons in an n-type semiconductor equals the number of holes.

Options: (a) Both A and R true, R correct explanation of A. (b) Both true, R not the correct explanation. (c) A true, R false. (d) A false, R true.

**Answer:** (c) A true, R false.
The crystal is neutral because each donor leaves a fixed positive ion balancing the donated electron — not because n_e = n_h. In n-type, n_e ≫ n_h, so R is false.

---

### Q18. Assertion-Reason — diode in reverse bias (1m)

**Type:** Assertion-Reason · **Section A**

**Assertion (A):** A p-n junction diode does not conduct appreciably in reverse bias.
**Reason (R):** In reverse bias the depletion region widens and the barrier potential increases, opposing majority-carrier flow.

Options as in Q17.

**Answer:** (a) Both true, R is the correct explanation.
Reverse bias widens the depletion layer and raises the barrier, blocking majority carriers; only a tiny minority-carrier saturation current flows. R correctly explains A.

---

### Q19. Assertion-Reason — Zener breakdown (1m)

**Type:** Assertion-Reason · **Section A**

**Assertion (A):** A Zener diode is heavily doped on both sides.
**Reason (R):** Heavy doping makes the depletion region very thin, so breakdown occurs at a low, sharp reverse voltage.

Options as in Q17.

**Answer:** (a) Both true, R is the correct explanation.
Heavy doping produces a narrow depletion layer; a small reverse voltage then gives a very high field (~5 × 10⁶ V/m) causing sharp Zener breakdown at a well-defined V_Z. R explains A.

---

### Q20. Assertion-Reason — LED material (1m)

**Type:** Assertion-Reason · **Section A**

**Assertion (A):** Silicon and germanium are not used to make LEDs that emit visible light.
**Reason (R):** Si and Ge have band gaps too small to emit visible photons on recombination.

Options as in Q17.

**Answer:** (a) Both true, R is the correct explanation.
Si (1.1 eV) and Ge (0.7 eV) release photons in the infrared, not the visible band; visible LEDs use larger-gap compounds (e.g. GaAsP, GaP). R correctly explains A.

---

### Q21. Assertion-Reason — full-wave ripple (1m)

**Type:** Assertion-Reason · **Section A**

**Assertion (A):** A full-wave rectifier is more efficient than a half-wave rectifier.
**Reason (R):** A full-wave rectifier uses both half-cycles of the a.c. input, so its output ripple frequency is twice the input frequency.

Options as in Q17.

**Answer:** (a) Both true, R is the correct explanation.
Using both half-cycles delivers output current throughout the cycle (higher d.c. output, higher ripple frequency = easier to filter), so it is more efficient. R explains A.
