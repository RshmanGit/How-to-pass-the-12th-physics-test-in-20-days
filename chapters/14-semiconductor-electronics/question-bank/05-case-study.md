# Chapter 14 — Semiconductor Electronics: Case-Based Questions (Section D, 4 marks)

> Section D case studies: a passage (you write nothing from it) followed by 4 sub-parts (typically 1+1+1+1 or 1+1+2). Two fully worked cases below cover the chapter's high-frequency case themes — rectification and special-purpose diodes.

---

### Q1. Junction diode and rectification (4m)
<!-- id: ch14-cs-q1 -->

**Type:** Case-Based · **Section D**

**Passage (in your own words):** A p-n junction diode conducts strongly only when forward biased and blocks current when reverse biased — it is a one-way valve for current. This property is used to convert alternating current into direct current. A single diode passes only the half-cycles in which it is forward biased (half-wave rectification), while a centre-tapped transformer with two diodes (or four diodes in a bridge) lets both half-cycles drive current through the load in the same direction (full-wave rectification).

**(i) During which half-cycle does the diode in a half-wave rectifier conduct, and what is the output during the other half-cycle? (1m)**
- It conducts during the half-cycle that makes it **forward biased** (the positive half-cycle). During the other (negative) half-cycle it is reverse biased and there is **no output.** …1m

**(ii) The a.c. mains is 50 Hz. State the output frequency for (a) half-wave and (b) full-wave rectification. (1m)**
- (a) Half-wave: **50 Hz** (one pulse per cycle).
- (b) Full-wave: **100 Hz** (one pulse per half-cycle). …1m

**(iii) Why is a full-wave rectifier preferred over a half-wave rectifier? (1m)**
- It uses **both** half-cycles, giving roughly **double the d.c. output and efficiency**, and its higher ripple frequency (100 Hz) is **easier to filter** to smooth d.c. …1m

**(iv) What single component is added across the load to reduce the ripple, and how does it work? (1m)**
- A **capacitor** (filter) in parallel with the load: it charges to the peak during each pulse and **discharges slowly through R_L** between pulses, holding the output up and reducing ripple. …1m

**Diagram cue (if asked to draw):** centre-tapped transformer + two diodes + R_L; output waveform with both humps positive (see derivations Q3).

---

### Q2. Special-purpose diodes (4m)
<!-- id: ch14-cs-q2 -->

**Type:** Case-Based · **Section D**

**Passage (in your own words):** A p-n junction can be engineered for special jobs. Heavily doped, it breaks down sharply at a fixed reverse voltage and holds that voltage steady — a **Zener diode** used for voltage regulation. With a transparent window and reverse bias, light creates extra carriers and changes the current — a **photodiode** light sensor. Forward biased with a suitable band gap, recombination emits light — a **light-emitting diode (LED)**. An illuminated junction with no external bias generates an emf — a **solar cell**.

**(i) In which bias is a Zener diode operated for voltage regulation, and what stays constant? (1m)**
- **Reverse bias**, in the **breakdown region**; the voltage across it stays nearly constant at **V_Z** while the current varies. …1m

**(ii) Why is a photodiode operated in reverse bias rather than forward bias? (1m)**
- The dark reverse current is very small, so light produces a **large fractional change** in current that is easily measured; in forward bias the big majority-carrier current would mask the photo-signal. …1m

**(iii) An LED is to emit visible light. What band-gap range must its material have, and why are Si and Ge unsuitable? (1m)**
- Band gap ≈ **1.8–3 eV** so that recombination photons (hν ≈ E_g) fall in the visible range. Si (1.1 eV) and Ge (0.7 eV) emit in the **infrared**, so they cannot give visible light. …1m

**(iv) State the energy conversion in a solar cell and one criterion for a good solar-cell material. (1m)**
- A solar cell converts **light (solar) energy into electrical energy** (photovoltaic effect). Good material needs band gap ≈ **1.0–1.8 eV** with high optical absorption (e.g. Si, GaAs). …1m

---

### Q3. Doping and carrier type (4m)

**Type:** Case-Based · **Section D**

**Passage (in your own words):** Pure silicon has equal numbers of electrons and holes and conducts poorly. Adding a tiny amount of a pentavalent impurity (donor) supplies extra electrons and makes the material n-type; a trivalent impurity (acceptor) supplies holes and makes it p-type. At equilibrium the carrier densities obey the law of mass action, n_e n_h = n_i², so increasing one type sharply reduces the other. The doped crystal stays electrically neutral.

**(i) Name the majority and minority carriers in an n-type semiconductor. (1m)**
- Majority: **electrons**; minority: **holes.** …1m

**(ii) A donor doping gives n_e = 5 × 10²² m⁻³ in silicon with n_i = 1.5 × 10¹⁶ m⁻³. Find the hole density. (1m)**
- n_h = n_i² / n_e = (1.5 × 10¹⁶)² / (5 × 10²²) = **4.5 × 10⁹ m⁻³.** …1m

**(iii) Is the doped crystal charged? Justify. (1m)**
- **No, it is electrically neutral.** Each donor atom is itself neutral; it leaves a fixed positive ion that exactly balances the mobile electron it donated. …1m

**(iv) Why does an extrinsic semiconductor conduct far better than an intrinsic one at room temperature? (1m)**
- Doping puts a donor/acceptor level very close to a band edge, so **many more free carriers** are available at room temperature than the few produced by thermal bond-breaking alone → much higher conductivity. …1m
