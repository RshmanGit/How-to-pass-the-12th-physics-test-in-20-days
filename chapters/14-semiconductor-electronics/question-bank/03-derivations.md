# Chapter 14 — Semiconductor Electronics: Long Answer / Derivations (3-5 marks)

> The big-mark questions: V-I characteristics, half- and full-wave rectifiers, Zener regulation. These are diagram-heavy — the marks live in the labelled circuit + waveform. Each diagram below is a "what to draw" checklist (draw it; don't just describe).

---

### Q1. V-I characteristics of a p-n junction diode (5m)

**Type:** Long Answer · **Section C/D**

With a labelled circuit and graph, explain how the V-I characteristics of a junction diode are obtained in forward and reverse bias. Define knee voltage and dynamic resistance.

**Answer (mark-carrying steps):**

1. **Forward characteristic:** connect p to + and n to − through a rheostat; record I vs V. Current is negligible until the **knee (threshold) voltage** (~0.7 V Si, ~0.3 V Ge), then rises steeply (depletion layer narrows, barrier collapses). …1½m
2. **Reverse characteristic:** reverse the battery; only a tiny, nearly constant **reverse saturation current** I₀ (minority carriers) flows, independent of voltage, until **breakdown voltage**, where current rises sharply. …1½m
3. **Knee voltage:** the forward voltage at which the diode begins to conduct appreciably. **Dynamic (a.c.) resistance:** r_d = ΔV/ΔI, the slope of the forward curve at the operating point — very small in the steep region. …1m

**Diagram — V-I characteristic** (draw it):
- [ ] Axes: forward I (mA) up-right, reverse I (µA) down-left, V on horizontal
- [ ] Forward curve: flat then sharp rise after the knee; mark knee voltage (~0.7 V)
- [ ] Reverse curve: small constant I₀, then sharp breakdown
- [ ] Two separate measurement circuits (forward & reverse) with diode, battery, rheostat, mA/µA meters and voltmeter
- Earns: ~1m circuits + ~1m forward curve + ~1m reverse curve

---

### Q2. Half-wave rectifier (3m)

**Type:** Long Answer · **Section C**

Explain, with circuit and waveforms, how a single junction diode acts as a half-wave rectifier.

**Answer (mark-carrying steps):**
1. The a.c. signal is applied through a transformer; a single diode is in series with the load R_L. …
2. **Positive half-cycle:** diode is forward biased → conducts → current flows through R_L (output across R_L). …1m
3. **Negative half-cycle:** diode is reverse biased → does not conduct → no output. …
4. Output is therefore a pulsating d.c. present only during alternate (positive) half-cycles → **half-wave rectification**; output frequency = input frequency. …1m

**Diagram — half-wave rectifier** (draw it):
- [ ] Transformer (a.c. input on primary), single diode in series with load R_L
- [ ] Output taken across R_L
- [ ] Input waveform: full sine; output waveform: only positive half-cycles (gaps during negatives)
- Earns: ~1m circuit + ~1m waveforms

---

### Q3. Full-wave rectifier (centre-tapped) (5m)

**Type:** Long Answer · **Section C/D**

With a labelled circuit and input/output waveforms, explain how a full-wave rectifier using two diodes and a centre-tapped transformer works. How does its efficiency compare with the half-wave rectifier?

**Answer (mark-carrying steps):**
1. A centre-tapped secondary feeds two diodes D₁ and D₂; the load R_L is connected between the common diode output and the centre tap. …1m
2. **Positive half-cycle:** D₁ is forward biased (D₂ reverse) → D₁ conducts → current through R_L. …1m
3. **Negative half-cycle:** the secondary halves reverse polarity → D₂ is forward biased (D₁ reverse) → D₂ conducts → current through R_L **in the same direction**. …1m
4. So both half-cycles deliver output current in the same sense → unidirectional pulsating d.c.; output present throughout the cycle. **Output ripple frequency = 2 × input frequency.** …1m
5. **Efficiency:** full-wave uses both half-cycles, so its d.c. output and rectification efficiency are about double those of a half-wave rectifier, and the higher ripple frequency is easier to smooth with a filter. …1m

**Diagram — full-wave rectifier** (draw it; do not just describe):
- [ ] Centre-tapped transformer secondary with the centre tap to R_L
- [ ] Two diodes D₁, D₂ with correct polarity; load R_L labelled
- [ ] a.c. input source labelled
- [ ] Output waveform: **both** half-cycles positive (consecutive humps)
- Earns: ~1½m circuit + ~1½m waveform

> Bridge (4-diode) version is an acceptable alternative: 4 diodes in a bridge, a.c. in across one diagonal, R_L across the other; same both-half-cycles-positive output. Note conducting pairs: D₁D₃ on one half-cycle, D₂D₄ on the other.

---

### Q4. Why a capacitor filter smooths rectifier output (3m)

**Type:** Long Answer · **Section C**

Explain how a capacitor connected across the load reduces the ripple in a rectifier output. Why is a full-wave output easier to filter?

**Answer (mark-carrying steps):**
1. A capacitor C is connected in parallel with R_L. During each output pulse the capacitor **charges** to near the peak voltage. …1m
2. When the rectified voltage falls, the capacitor **discharges slowly through R_L** (time constant CR_L large), holding the output up between pulses → smaller ripple, more steady d.c. …1m
3. A full-wave output has pulses twice as often (2f), so the capacitor has less time to discharge between pulses → smaller ripple for the same C → easier to filter than half-wave. …1m

**Diagram — filter** (optional sketch):
- [ ] Rectifier output → capacitor C across load R_L
- [ ] Output waveform: rectified humps with the dips filled in (smoothed ripple)

---

### Q5. Law of mass action / carrier concentration after doping (3m)

**Type:** Long Answer · **Section C**

State the relation between electron and hole concentrations in a semiconductor at thermal equilibrium and use it to show how a donor dopant makes a material n-type. (Conceptual derivation.)

**Answer (mark-carrying steps):**
1. At thermal equilibrium the product of electron and hole densities is constant for a given material and temperature: **n_e · n_h = n_i²** (law of mass action), where n_i is the intrinsic carrier density. …1m
2. **Charge neutrality:** for a donor density N_D (each donating one electron), n_e ≈ N_D when N_D ≫ n_i. …1m
3. Then the minority (hole) density n_h = n_i² / n_e ≈ n_i² / N_D, which is very small. Since n_e ≫ n_h, conduction is by electrons → **n-type**. (For an acceptor density N_A, swap roles → p-type.) …1m

---

### Q6. Energy-band explanation of n-type and p-type (3m)

**Type:** Long Answer · **Section C**

Using energy-band diagrams, explain why doping with donor and acceptor impurities increases conductivity. Show the donor and acceptor levels.

**Answer (mark-carrying steps):**
1. **n-type (donor):** a pentavalent atom adds a **donor level just below the conduction band** (~0.01–0.05 eV gap). At room temperature the extra electrons are easily excited into the conduction band → many free electrons → high conductivity. …1½m
2. **p-type (acceptor):** a trivalent atom adds an **acceptor level just above the valence band**. Valence electrons readily jump up to it, leaving holes in the valence band → hole conduction → high conductivity. …1½m

**Diagram — band diagrams** (draw it):
- [ ] n-type: conduction band, valence band, donor level (dashed) just below CB
- [ ] p-type: conduction band, valence band, acceptor level (dashed) just above VB
- Earns: ~1m for correctly placed donor/acceptor levels

---

### Q7. Zener breakdown and the regulator V-I curve (3m)

**Type:** Long Answer · **Section C**

Explain Zener breakdown and sketch the V-I characteristic that makes the Zener diode suitable as a voltage regulator.

**Answer (mark-carrying steps):**
1. A Zener diode is **heavily doped**, so its depletion layer is very thin. A modest reverse voltage produces a very high field (~5 × 10⁶ V/m) that pulls electrons out of host atoms → sharp rise in reverse current at the **Zener voltage V_Z** (Zener breakdown). …1½m
2. In breakdown the voltage stays ≈ V_Z over a wide current range (the curve is nearly vertical). This constant voltage with varying current is exactly what a regulator needs. …1½m

**Diagram — Zener V-I characteristic** (draw it):
- [ ] Forward portion like a normal diode
- [ ] Reverse portion: small current then a sharp near-vertical drop at V_Z
- [ ] Mark V_Z on the reverse-voltage axis
- Earns: ~1m for a correct breakdown region with V_Z labelled
