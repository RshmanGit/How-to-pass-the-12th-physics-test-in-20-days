# Chapter 14 — Semiconductor Electronics: Numericals (worked solutions)

> The repeatable number-crunchers: law of mass action after doping, energy-gap ↔ wavelength, the diode equation and dynamic resistance, conductivity ratio with temperature, and ideal-diode circuits. Each: formula → substitute → answer with units.

---

### Q1. Carrier concentration in doped germanium (3m)

**Type:** Numerical · **Section C** (NCERT 14.2 type)

Pure Ge has intrinsic carrier density n_i = 2.5 × 10¹⁹ m⁻³ at room temperature. It is doped with indium to a concentration of N_A = 4.5 × 10²² m⁻³. Find the electron and hole concentrations and state the type.

**Solution:**
- Indium is **trivalent (acceptor)** → holes are majority: n_h ≈ N_A = **4.5 × 10²² m⁻³**. …1m
- Law of mass action: n_e · n_h = n_i².
  n_e = n_i² / n_h = (2.5 × 10¹⁹)² / (4.5 × 10²²) = 6.25 × 10³⁸ / 4.5 × 10²². …1m
- **n_e = 1.39 × 10¹⁶ m⁻³.** Since n_h ≫ n_e → **p-type** semiconductor. …1m

---

### Q2. Silicon doped with arsenic and indium (3m)

**Type:** Numerical · **Section C** (NCERT 14.10 type)

Silicon (5 × 10²⁸ atoms m⁻³) is doped with arsenic 5 × 10²² m⁻³ and indium 5 × 10²⁰ m⁻³. Given n_i = 1.5 × 10¹⁶ m⁻³, find n_e and n_h and identify the type.

**Solution:**
- As is donor (+), In is acceptor (−); net donor density = 5 × 10²² − 5 × 10²⁰ = 4.95 × 10²².
- Majority electrons: n_e ≈ N_D − N_A = **4.95 × 10²² m⁻³** (≈ 5 × 10²²). …1½m
- Minority holes: n_h = n_i² / n_e = (1.5 × 10¹⁶)² / (4.95 × 10²²) = 2.25 × 10³² / 4.95 × 10²². …1m
- **n_h ≈ 4.55 × 10⁹ m⁻³.** Since n_e ≫ n_h → **n-type** semiconductor. …½m

---

### Q3. Can a 2.8 eV photodiode detect 6000 nm light? (3m)

**Type:** Numerical · **Section C** (NCERT 14.7 type)

A photodiode is fabricated from a semiconductor of band gap E_g = 2.8 eV. Can it detect light of wavelength 6000 nm?

**Solution:**
- Photon energy E = hc/λ. Use hc = 1.24 × 10⁻⁶ eV·m. …
- λ = 6000 nm = 6000 × 10⁻⁹ m = 6 × 10⁻⁶ m. …
- E = (1.24 × 10⁻⁶ eV·m) / (6 × 10⁻⁶ m) = **0.207 eV.** …1½m
- Since E = 0.207 eV **< E_g = 2.8 eV**, a photon cannot excite an electron across the gap → **the photodiode cannot detect this wavelength.** …1½m

---

### Q4. Energy gap from the longest detectable wavelength (2m)

**Type:** Numerical · **Section B**

What is the maximum wavelength of radiation that a photodiode of band gap E_g = 1.5 eV can detect?

**Solution:**
- Threshold: hc/λ_max = E_g → λ_max = hc / E_g. …
- λ_max = (1.24 × 10⁻⁶ eV·m) / (1.5 eV) = 8.27 × 10⁻⁷ m. …1m
- **λ_max ≈ 827 nm** (near infrared). Wavelengths longer than this carry too little energy to be detected. …1m

---

### Q5. Diode equation — forward current (3m)

**Type:** Numerical · **Section C**

A diode has reverse saturation current I₀ = 5 × 10⁻¹² A at T = 300 K. Find the current when it is forward biased at V = 0.6 V. (Take e/k_BT = 1/0.026 V⁻¹, i.e. k_BT/e ≈ 0.026 V.)

**Solution:**
- I = I₀ [ exp(eV/k_BT) − 1 ]. …
- eV/k_BT = 0.6 / 0.026 = 23.08; exp(23.08) ≈ 1.06 × 10¹⁰. …1m
- I = 5 × 10⁻¹² × (1.06 × 10¹⁰ − 1) ≈ 5 × 10⁻¹² × 1.06 × 10¹⁰. …1m
- **I ≈ 0.053 A ≈ 53 mA.** (The −1 is negligible in strong forward bias.) …1m

---

### Q6. Dynamic resistance of a diode (3m)

**Type:** Numerical · **Section C**

The forward current of a diode changes from 10 mA to 15 mA when the voltage across it changes from 0.70 V to 0.71 V. Find its dynamic resistance.

**Solution:**
- r_d = ΔV / ΔI. …1m
- ΔV = 0.71 − 0.70 = 0.01 V; ΔI = (15 − 10) mA = 5 × 10⁻³ A. …1m
- r_d = 0.01 / (5 × 10⁻³) = **2 Ω.** …1m

---

### Q7. Conductivity ratio at two temperatures (3m)

**Type:** Numerical · **Section C** (NCERT 14.9 type)

For a semiconductor with E_g = 1.2 eV, find the ratio of intrinsic conductivities at 600 K and 300 K. (Take k_B = 8.62 × 10⁻⁵ eV K⁻¹; assume σ ∝ n_i ∝ exp(−E_g/2k_BT).)

**Solution:**
- σ(T₂)/σ(T₁) = exp[ −E_g/2k_B · (1/T₂ − 1/T₁) ]. …1m
- Exponent = −(1.2)/(2 × 8.62 × 10⁻⁵) × (1/600 − 1/300)
  = −(1.2 / 1.724 × 10⁻⁴) × (−1.667 × 10⁻³)
  = −(6961) × (−1.667 × 10⁻³) = 11.6. …1m
- Ratio = e^(11.6) ≈ **1.09 × 10⁵.** Conductivity rises ~10⁵-fold from 300 K to 600 K. …1m

---

### Q8. Ideal diode in a circuit — is it conducting? (2m)

**Type:** Numerical · **Section B**

In a circuit an ideal diode is in series with a 200 Ω resistor and a 5 V battery, connected so the diode is **forward** biased. Find the current. Then state the current if the battery is reversed.

**Solution:**
- Ideal diode forward biased → acts as a closed switch (zero drop). I = V/R = 5/200. …1m
- **I = 0.025 A = 25 mA.** When the battery is reversed the ideal diode is reverse biased → open switch → **I = 0.** …1m

---

### Q9. Two-diode network with one diode off (3m)

**Type:** Numerical · **Section C** (Comptt. Delhi type)

In a circuit, a battery drives current through a parallel combination: branch 1 has an ideal diode in series with 1 Ω, branch 2 has an ideal diode (reverse biased) in series with 2 Ω. The applied voltage across the parallel section is 2 V. Find the current drawn from the source.

**Solution:**
- The diode in branch 2 is reverse biased → that branch carries **no current** (open). …1m
- Only branch 1 conducts; ideal diode → zero drop. I = V/R = 2 V / 1 Ω. …1m
- **I = 2 A.** (Total current = 2 A; the 2 Ω branch is dead.) …1m

> Method note: in ideal-diode circuits, first decide each diode's bias (forward = short, reverse = open), redraw, then apply Ohm's/Kirchhoff's laws.

---

### Q10. Output frequency of rectifiers (2m)

**Type:** Numerical · **Section B**

A 50 Hz a.c. supply is applied to (i) a half-wave rectifier and (ii) a full-wave rectifier. Find the fundamental frequency of the rectified output in each case.

**Solution:**
- **Half-wave:** one pulse per cycle → output frequency = input = **50 Hz.** …1m
- **Full-wave:** one pulse per half-cycle → output frequency = 2 × input = **100 Hz.** …1m

---

### Q11. Series resistor for a Zener regulator (3m)

**Type:** Numerical · **Section C**

A 6 V Zener regulator is fed from a 10 V unregulated supply. The load draws 20 mA and the Zener needs a minimum 5 mA to stay in breakdown. Find the value and power rating region of the series resistor R_s.

**Solution:**
- Voltage across R_s = V_in − V_Z = 10 − 6 = 4 V. …1m
- Current through R_s = I_load + I_Zener = 20 + 5 = 25 mA = 0.025 A. …1m
- R_s = 4 V / 0.025 A = **160 Ω.** Power in R_s = V²/R = 4²/160 = 0.1 W (choose ≥ ¼ W resistor). …1m
