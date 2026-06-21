# Chapter 14 — Semiconductor Electronics: Sections B/C (Short Answer, 2-3 marks)

> Conceptual questions that repeat in every board paper: intrinsic vs extrinsic, n vs p type, depletion region, biasing, special diodes. Answer in mark-carrying points, not paragraphs.

---

### Q1. Intrinsic vs extrinsic semiconductor (2m)

**Type:** Short Answer · **Section B**

Distinguish a pure (intrinsic) semiconductor from a doped (extrinsic) one on two counts: carrier concentration and conductivity.

**Answer (mark-carrying points):**
- **Intrinsic:** pure semiconductor; charge carriers (electrons & holes) are produced only by thermal breaking of bonds, so n_e = n_h = n_i. Conductivity is low and rises with temperature. …1m
- **Extrinsic:** doped with a trivalent/pentavalent impurity; one carrier type dominates (n_e ≫ n_h in n-type, n_h ≫ n_e in p-type). Conductivity is much higher even at room temperature and is controlled by doping level. …1m

---

### Q2. n-type vs p-type semiconductor (2m)

**Type:** Short Answer · **Section B**

Compare n-type and p-type semiconductors: dopant, majority/minority carriers, and the impurity energy level introduced.

**Answer:**

| Feature | n-type | p-type |
|---|---|---|
| Dopant | Pentavalent (P, As, Sb) — donor | Trivalent (B, Al, In) — acceptor |
| Majority carriers | Electrons | Holes |
| Minority carriers | Holes | Electrons |
| Impurity level | Donor level just **below** conduction band | Acceptor level just **above** valence band |

Both crystals remain electrically neutral. …(any 4 correct rows = 2m)

---

### Q3. Why does conductivity rise with temperature? (2m)

**Type:** Short Answer · **Section B**

Explain why the electrical conductivity of an intrinsic semiconductor increases as temperature rises, whereas that of a metal decreases.

**Answer:**
- **Semiconductor:** higher T breaks more covalent bonds → more electron-hole pairs → carrier density n_i rises *exponentially* (n_i ∝ e^(−E_g/2k_BT)). This swamps the mild fall in mobility, so σ increases. …1½m
- **Metal:** carrier density is fixed; higher T means more lattice vibrations → more scattering → lower mobility → σ decreases. …½m

---

### Q4. Formation of the depletion region (3m)

**Type:** Short Answer · **Section C**

Describe how the depletion region and barrier potential form when a p-n junction is created (no external bias).

**Answer:**
- At the junction, electrons diffuse from n→p and holes from p→n (concentration gradient). …1m
- Recombination near the junction removes mobile carriers, leaving **immobile positive donor ions on the n-side and negative acceptor ions on the p-side** — this charged, carrier-free layer is the **depletion region**. …1m
- These fixed ions set up an internal field (n→p) and a **barrier potential V_B** (~0.3 V Ge, ~0.7 V Si) that opposes further diffusion; equilibrium is reached when diffusion current = drift current. …1m

**Diagram — p-n junction at equilibrium** (draw it):
- [ ] p-region (holes) and n-region (electrons) with the junction line
- [ ] Depletion layer marked with − ions on p-side and + ions on n-side
- [ ] Internal field arrow pointing n → p; label barrier potential V_B
- Earns: ~1m for a correctly labelled depletion layer

---

### Q5. Effect of biasing on depletion width (2m)

**Type:** Short Answer · **Section B**

State how the depletion-region width and barrier height change under (i) forward bias and (ii) reverse bias.

**Answer:**
- **Forward bias** (p→+, n→−): applied field opposes the barrier field → barrier height **decreases** and depletion width **decreases** → large current flows. …1m
- **Reverse bias** (p→−, n→+): applied field aids the barrier field → barrier height **increases** and depletion width **increases** → only a tiny minority-carrier current flows. …1m

---

### Q6. Forward bias vs reverse bias (3m)

**Type:** Short Answer · **Section C**

Distinguish forward and reverse biasing of a junction diode on: connection, depletion width, current, and resistance. Include circuit symbols.

**Answer:**

| Feature | Forward bias | Reverse bias |
|---|---|---|
| Connection | p to +, n to − of battery | p to −, n to + |
| Depletion width | Decreases | Increases |
| Current | Large (mA), majority carriers | Tiny (µA/nA), minority carriers |
| Resistance | Low | Very high |

…2m for the table.

**Diagram — biasing circuits** (draw both):
- [ ] Forward: battery + to p-side, − to n-side, in series with a resistor
- [ ] Reverse: battery polarity reversed
- [ ] Diode symbol (triangle + bar) with p (anode) and n (cathode) marked
- Earns: ~1m for both circuits drawn with correct polarity

---

### Q7. Why minority-carrier (reverse) current saturates (2m)

**Type:** Short Answer · **Section B**

Explain why the reverse current of a diode is almost independent of the reverse voltage and why it is called the reverse *saturation* current.

**Answer:**
- Reverse current is carried by **minority carriers** (thermally generated). Their number is fixed by temperature, not by the applied voltage. …1m
- Even a small reverse voltage is enough to sweep essentially *all* the available minority carriers across the junction; increasing the voltage cannot increase a supply that is already exhausted → the current **saturates** at I₀. …1m

---

### Q8. Zener diode as a voltage regulator (3m)

**Type:** Short Answer · **Section C**

Explain how a Zener diode keeps the output voltage constant against changes in the input voltage.

**Answer:**
- The Zener is connected in **reverse bias** across the load, with a series resistor R_s; it operates in the sharp **breakdown region** where its voltage stays ≈ V_Z while current varies widely. …1m
- If input V_in rises, extra voltage drops across R_s and Zener current rises, but the load voltage stays clamped at V_Z. If V_in falls, Zener current falls but the load voltage is still V_Z. …1m
- Thus the load voltage is held constant at V_Z; R_s absorbs the variation. …1m

**Diagram — Zener regulator** (draw it):
- [ ] Unregulated d.c. input through series resistor R_s
- [ ] Zener diode in reverse bias (cathode to +) across the load R_L
- [ ] Output V_out = V_Z marked across the load
- Earns: ~1m for the regulator circuit

---

### Q9. Photodiode — working and why reverse-biased (3m)

**Type:** Short Answer · **Section C**

What is a photodiode? Explain its working and state why it is operated in reverse bias.

**Answer:**
- A **photodiode** is a p-n junction (with a transparent window) operated in **reverse bias** that converts light into an electrical signal. …1m
- Light of energy hν ≥ E_g absorbed near the junction generates extra electron-hole pairs; the junction field separates them, increasing the reverse current in proportion to light intensity. …1m
- **Why reverse bias:** the dark reverse current is very small, so the light-induced change is a large *fraction* of the total current and is easily measured. In forward bias the large majority-carrier current masks the photo-effect. …1m

---

### Q10. LED — working and advantages (3m)

**Type:** Short Answer · **Section C**

Explain the working of a light-emitting diode and state two advantages over a filament lamp.

**Answer:**
- An LED is a heavily doped p-n junction operated in **forward bias**; injected electrons and holes recombine near the junction, releasing energy as photons of hν ≈ E_g. …1m
- Colour depends on the band gap; for visible light E_g ≈ 1.8–3 eV (so Si/Ge, which emit in IR, are unsuitable). …1m
- **Advantages:** low operating voltage & power; fast switching; long life; no warm-up; nearly monochromatic light (any two). …1m

---

### Q11. Solar cell — principle and material criteria (3m)

**Type:** Short Answer · **Section C**

State the principle of a solar cell and the criteria a semiconductor must meet to be a good solar-cell material.

**Answer:**
- **Principle (photovoltaic effect):** an unbiased p-n junction; sunlight near the junction creates electron-hole pairs that the built-in field separates (electrons→n, holes→p), generating an emf across the cell. …1½m
- **Material criteria:** band gap ≈ **1.0–1.8 eV** (to absorb a large part of the solar spectrum), high optical absorption, good electrical conductivity, and availability/cost. Si and GaAs satisfy these. …1½m

---

### Q12. Energy-band diagrams for the three solid types (2m)

**Type:** Short Answer · **Section B**

Using energy bands, distinguish a conductor, a semiconductor and an insulator.

**Answer:**
- **Conductor:** conduction and valence bands **overlap** (or the conduction band is partly filled), E_g ≈ 0 → free electrons readily available. …
- **Insulator:** large gap, **E_g > 3 eV**; conduction band empty at room T → no conduction. …
- **Semiconductor:** small gap, **E_g ≈ 1 eV**; a few electrons are thermally excited to the conduction band → moderate conduction that increases with T. …(all three = 2m)

**Diagram — three band structures** (draw it):
- [ ] Conductor: overlapping VB and CB
- [ ] Semiconductor: small gap (~1 eV) with a few electrons in CB
- [ ] Insulator: large gap (>3 eV), CB empty
- Earns: ~1m if drawn instead of stated

---

### Q13. Hole — what it is and how it moves (2m)

**Type:** Short Answer · **Section B**

What is a "hole" in a semiconductor? Explain how hole conduction occurs.

**Answer:**
- A **hole** is the vacancy left in a covalent bond when an electron is excited out; it behaves as a mobile particle of **+e** charge. …1m
- A neighbouring bound electron jumps to fill the vacancy, shifting the hole in the opposite direction. So holes drift toward the negative terminal as if they were positive carriers — this is hole conduction. …1m

---

### Q14. Diode equation — meaning of terms (2m)

**Type:** Short Answer · **Section B**

Write the diode current equation and state what each symbol represents.

**Answer:**
- **I = I₀ [ exp(eV / k_B T) − 1 ]** …1m
- I = diode current; I₀ = reverse saturation current; V = applied voltage (+ forward, − reverse); e = electronic charge; k_B = Boltzmann constant; T = absolute temperature. For large reverse V the exponential → 0, so I → −I₀ (saturation). …1m
