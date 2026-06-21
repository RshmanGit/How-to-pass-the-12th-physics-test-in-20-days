# Chapter 2 — Electrostatic Potential & Capacitance: Numericals

> Worked numerical problems (mostly 2–3m). Each: formula → substitution → answer with units. Constants: k = 1/4πε₀ = 9×10⁹ N·m²/C², ε₀ = 8.85×10⁻¹² C²/N·m².

### Q1. Energy stored in a 12 pF capacitor (2m)
A 12 pF capacitor is connected to a 50 V battery. Find the electrostatic energy stored.

**Solution:**
- U = ½CV² …½m
- = ½ × (12×10⁻¹²) × (50)² …1m
- = ½ × 12×10⁻¹² × 2500
- **U = 1.5×10⁻⁸ J.** …½m

### Q2. Three 9 pF capacitors in series across 120 V (3m)
Three capacitors each 9 pF are connected in series to a 120 V supply. Find (a) the equivalent capacitance and (b) the p.d. across each.

**Solution:**
- (a) Series: 1/C_eq = 1/9 + 1/9 + 1/9 = 3/9 ⇒ **C_eq = 3 pF.** …1½m
- (b) Same charge: Q = C_eq V = 3×10⁻¹² × 120 = 3.6×10⁻¹⁰ C. …1m
- V across each = Q/Cᵢ = 3.6×10⁻¹⁰ / 9×10⁻¹² = **40 V** (so 40+40+40 = 120 V ✓). …½m

### Q3. Parallel-plate capacitor: halve d, insert dielectric K = 6 (2m)
A parallel-plate capacitor of 8 pF (air) has its plate separation halved and the gap filled with a dielectric of K = 6. Find the new capacitance.

**Solution:**
- Original C₀ = ε₀A/d = 8 pF. New C = Kε₀A/(d/2) = 2K·(ε₀A/d) = 2K·C₀. …1m
- = 2 × 6 × 8 pF …½m
- **C = 96 pF.** …½m

### Q4. Point of zero potential between two charges (3m)
Charges 5×10⁻⁸ C and −3×10⁻⁸ C are 16 cm apart. Find the point(s) on the line joining them where the potential is zero (take infinity as zero).

**Solution:**
- Let zero-potential point be at distance x (cm) from +5×10⁻⁸ C, so distance from −3×10⁻⁸ C is (16 − x).
- V = 0 ⇒ k(5×10⁻⁸)/x = k(3×10⁻⁸)/(16 − x). …1m
- 5(16 − x) = 3x ⇒ 80 − 5x = 3x ⇒ 8x = 80 ⇒ **x = 10 cm** (between the charges). …1m
- Outside (beyond the −ve charge), 5/(16 + y) = 3/y ⇒ 5y = 48 + 3y ⇒ y = 24 cm from −ve charge, i.e. **40 cm from the +ve charge.** …1m

### Q5. PE of the hydrogen atom (electron–proton) (2m)
In a hydrogen atom the electron and proton are 0.53 Å apart. Find the electrostatic potential energy in eV.

**Solution:**
- U = k q₁q₂/r = (9×10⁹)(−1.6×10⁻¹⁹)(+1.6×10⁻¹⁹)/(0.53×10⁻¹⁰) …1m
- = −(9×10⁹)(2.56×10⁻³⁸)/(0.53×10⁻¹⁰) = −4.35×10⁻¹⁸ J.
- Convert: ÷1.6×10⁻¹⁹ J/eV ⇒ **U ≈ −27.2 eV.** …1m
- (Negative ⇒ bound system; energy must be supplied to separate them.)

### Q6. Plate area for a 50 pF capacitor with dielectric (3m)
A parallel-plate capacitor of 50 pF is to withstand 1 kV. The dielectric has K = 3 and dielectric strength 10⁷ V/m (use a safety factor so field ≈ 10% of strength, i.e. operate at 10⁶ V/m). Find the minimum plate area.

**Solution:**
- Operating field ≈ 10% of 10⁷ = 10⁶ V/m; for V = 1000 V the spacing d = V/E = 1000/10⁶ = 10⁻³ m. …1m
- C = Kε₀A/d ⇒ A = Cd/(Kε₀) = (50×10⁻¹² × 10⁻³)/(3 × 8.85×10⁻¹²). …1½m
- = (5×10⁻¹⁴)/(2.655×10⁻¹¹) ≈ 1.9×10⁻³ m² = **≈ 19 cm².** …½m

### Q7. Potential at the centre of a charged hexagon (2m)
Six identical charges of 5 µC are placed at the vertices of a regular hexagon of side 10 cm. Find the potential at the centre.

**Solution:**
- For a regular hexagon, the distance from centre to each vertex = side = 0.10 m. …½m
- Potential is scalar ⇒ V = 6 × kq/r = 6 × (9×10⁹)(5×10⁻⁶)/0.10. …1m
- = 6 × 4.5×10⁵ = **2.7×10⁶ V.** …½m

### Q8. Energy change when dielectric is inserted (battery disconnected) (3m)
A capacitor C = 4 µF is charged to 200 V and then disconnected. A dielectric K = 5 is inserted. Find Q, the new voltage, and the new stored energy.

**Solution:**
- Initial: Q = CV = 4×10⁻⁶ × 200 = 8×10⁻⁴ C (Q is fixed after disconnecting). …1m
- New C′ = KC = 20 µF ⇒ new V′ = Q/C′ = 8×10⁻⁴/20×10⁻⁶ = **40 V.** …1m
- New energy U′ = Q²/2C′ = (8×10⁻⁴)²/(2×20×10⁻⁶) = 6.4×10⁻⁷/4×10⁻⁵ = **1.6×10⁻² J.** …1m
- (Initial U = ½×4×10⁻⁶×200² = 8×10⁻² J; energy dropped by factor K = 5, as expected.)

### Q9. Capacitor network — series-parallel reduction (3m)
Three capacitors: C₁ = 2 µF and C₂ = 3 µF in parallel, this combination in series with C₃ = 4 µF, across a 100 V battery. Find the equivalent capacitance and total charge.

**Solution:**
- Parallel: C₁₂ = 2 + 3 = 5 µF. …1m
- Series with C₃: 1/C_eq = 1/5 + 1/4 = 9/20 ⇒ C_eq = 20/9 ≈ **2.22 µF.** …1m
- Q = C_eq V = 2.22×10⁻⁶ × 100 ≈ **2.22×10⁻⁴ C.** …1m

### Q10. Work done moving a charge in a field of two charges (2m)
Two charges 2 µC and −2 µC are placed 6 cm apart (a dipole). Find the work done in moving a 1 µC charge from one equatorial point to another equatorial point (both equidistant from the dipole).

**Solution:**
- Potential on the equatorial line of a dipole is zero at every point ⇒ V_A = V_B = 0. …1m
- W = q(V_A − V_B) = 1×10⁻⁶ × 0 = **0 J.** …1m

### Q11. Common potential when two capacitors share charge (3m)
A 6 µF capacitor charged to 100 V is connected in parallel with an uncharged 4 µF capacitor. Find the common potential and the energy lost.

**Solution:**
- Charge conserved: Q = 6×10⁻⁶ × 100 = 6×10⁻⁴ C. …½m
- Common V = Q/(C₁+C₂) = 6×10⁻⁴/(10×10⁻⁶) = **60 V.** …1m
- Energy lost ΔU = ½ · C₁C₂/(C₁+C₂) · (V₁−V₂)² = ½ × (24×10⁻¹²/10×10⁻⁶) × (100)² …1m
- = ½ × 2.4×10⁻⁶ × 10⁴ = **1.2×10⁻² J lost** (as heat in the wires). …½m

### Q12. Electric field from a potential function (2m)
The potential in a region varies as V = 5x² + 3 (volts, x in metres). Find the electric field at x = 2 m.

**Solution:**
- E = −dV/dx = −d(5x² + 3)/dx = −10x. …1m
- At x = 2 m: E = −10×2 = **−20 V/m** (i.e. 20 V/m in the −x direction). …1m
