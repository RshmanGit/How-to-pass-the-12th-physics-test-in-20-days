# Chapter 9 — Ray Optics: Derivations & Long Answers (3-5 marks)

> The high-yield derivations and ray diagrams. Each answer lists the mark-carrying steps in order, with a diagram checklist where a drawing scores marks.

---

### Q1. Mirror formula for a concave mirror (5m)

**Type:** Derivation · **Section C/D**

Derive the relation 1/f = 1/v + 1/u for a concave mirror, stating the assumptions made.

**Answer (mark-carrying steps):**

**Diagram — concave mirror ray diagram** (draw it):
- [ ] Principal axis with pole P, focus F, centre of curvature C
- [ ] Object AB (height h) beyond C, on the axis at B
- [ ] Ray 1: parallel to axis → reflects through F
- [ ] Ray 2: through C → retraces; (or ray through F → reflects parallel)
- [ ] Real inverted image A'B' between C and F
- Earns: ~1m for a correct, labelled diagram

Steps:
1. **Set-up:** Consider object AB and its real image A'B'. Triangles A'B'P and ABP are similar (both right-angled, common angle at P with reflection):
   A'B'/AB = PB'/PB. …(1m)
2. **Second similar pair:** Triangles A'B'F and the pole-normal MPF (M at pole, ray parallel to axis) are similar:
   A'B'/AB = FB'/PF (taking PM ≈ AB for a small aperture). …(1m)
3. **Combine:** Equate the two ratios → PB'/PB = FB'/PF = (PB' − PF)/PF. …(1m)
4. **Apply sign convention** (all distances from P, measured against incident light are negative):
   PB = −u, PB' = −v, PF = −f. Substituting:
   (−v)/(−u) = (−v − (−f))/(−f) → v/u = (v − f)/f.
   Cross-multiply and divide by uvf to get:
5. **Result:** ▮ 1/f = 1/v + 1/u ▮ …(1m)

**Assumptions:** small aperture (paraxial rays) and object close to the principal axis.

---

### Q2. Refraction at a single spherical surface (5m)

**Type:** Derivation · **Section D**

Derive the relation n₂/v − n₁/u = (n₂ − n₁)/R for refraction at a convex spherical surface separating two media (object in the rarer medium n₁).

**Answer (mark-carrying steps):**

**Diagram — spherical refracting surface** (draw it):
- [ ] Curved surface with pole P, centre of curvature C, radius R
- [ ] Media labelled n₁ (left, rarer) and n₂ (right, denser)
- [ ] Object O on axis; ray hitting surface at point N; normal CN
- [ ] Refracted ray meeting axis at real image I; angles i, r marked
- Earns: ~1m for the labelled diagram

Steps:
1. **Snell's law (small angles):** n₁ i = n₂ r. …(1m)
2. **Exterior-angle geometry:** Using small-angle approximation (tan θ ≈ θ ≈ h/distance) for the angles α, β, γ at O, I, C:
   i = α + γ and γ = r + β  ⇒  r = γ − β. …(1m)
3. **Substitute into Snell:** n₁(α + γ) = n₂(γ − β)
   ⇒ n₁α + n₂β = (n₂ − n₁)γ. …(1m)
4. **Express angles by the perpendicular height h = NM:**
   α = h/PO, β = h/PI, γ = h/PC. Putting these in and cancelling h:
   n₁/PO + n₂/PI = (n₂ − n₁)/PC. …(1m)
5. **Sign convention** (PO = −u, PI = +v, PC = +R):
   ▮ n₂/v − n₁/u = (n₂ − n₁)/R ▮ …(1m)

---

### Q3. Lens-maker's formula (5m)

**Type:** Derivation · **Section D**

Derive the lens-maker's formula 1/f = (n − 1)(1/R₁ − 1/R₂) for a thin double-convex lens, and hence define focal length.

**Answer (mark-carrying steps):**

**Diagram — thin lens, two surfaces** (draw it):
- [ ] Thin double-convex lens with surfaces of radii R₁ and R₂
- [ ] Object O; intermediate image I₁ from surface 1; final image I from surface 2
- [ ] Refractive index n (lens) in air (n₁ = 1)
- Earns: ~1m for the labelled diagram

Steps:
1. **Refraction at first surface** (air → glass, radius R₁), image I₁ at distance v₁:
   n/v₁ − 1/u = (n − 1)/R₁. …(1m)
2. **Refraction at second surface** (glass → air, radius R₂); I₁ acts as the object:
   1/v − n/v₁ = (1 − n)/R₂. …(1m)
3. **Add the two equations** (the n/v₁ terms cancel):
   1/v − 1/u = (n − 1)(1/R₁ − 1/R₂). …(1m)
4. **Define focal length:** for an object at infinity (u → ∞), v = f:
   1/f = (n − 1)(1/R₁ − 1/R₂). …(1m)
5. **Result + definition:** ▮ 1/f = (n − 1)(1/R₁ − 1/R₂) ▮ where f is the distance at which a beam parallel to the axis converges (or appears to diverge). …(1m)

(Combining steps 3 and 4 also gives the thin-lens formula 1/v − 1/u = 1/f.)

---

### Q4. Refractive index of a prism, n = sin[(A+Dm)/2] / sin(A/2) (5m)

**Type:** Derivation · **Section D**

Trace a ray through a triangular prism and derive the expression for refractive index in terms of the angle of prism A and the angle of minimum deviation Dm.

**Answer (mark-carrying steps):**

**Diagram — refraction through a prism** (draw it):
- [ ] Triangular prism, apex angle A at top
- [ ] Incident ray, refractions at both faces, emergent ray
- [ ] Angles labelled: i (incidence), r₁, r₂ (inside), e (emergence), δ (deviation)
- Earns: ~1m for the labelled ray diagram

Steps:
1. **Deviation at the two faces:** total deviation δ = (i − r₁) + (e − r₂). …(½m)
2. **Geometry of the prism:** in the quadrilateral, r₁ + r₂ = A. …(½m)
   Hence δ = i + e − A. …(½m)
3. **Minimum deviation condition:** at δ = Dm the path is symmetric, so i = e and r₁ = r₂ = r. …(1m)
4. **Apply the relations at minimum deviation:**
   r₁ + r₂ = A ⇒ 2r = A ⇒ r = A/2;
   δ = i + e − A ⇒ Dm = 2i − A ⇒ i = (A + Dm)/2. …(1m)
5. **Snell's law at the first face** (n = sin i / sin r):
   ▮ n = sin[(A + Dm)/2] / sin(A/2) ▮ …(1½m)

---

### Q5. Compound microscope — ray diagram and magnifying power (5m)

**Type:** Derivation / Long Answer · **Section D**

Draw a labelled ray diagram of a compound microscope (image at the near point) and derive its magnifying power.

**Answer (mark-carrying steps):**

**Diagram — compound microscope** (draw it):
- [ ] Two converging lenses: objective (short f_o) and eyepiece (short f_e)
- [ ] Object just beyond F_o; objective forms a real, inverted, magnified image inside the focal length of the eyepiece
- [ ] Eyepiece forms a final virtual, magnified, inverted image at the near point D
- [ ] Tube length L marked between the two foci
- Earns: ~2m for the correct, fully labelled diagram

Steps:
1. **Objective magnification:** m_o = L/f_o, where L is the tube length (image distance for the objective). …(1m)
2. **Eyepiece (acts as a simple microscope, image at D):** m_e = 1 + D/f_e (near-point adjustment). …(1m)
3. **Total magnifying power** = product:
   ▮ M = m_o × m_e = (L/f_o)(1 + D/f_e) ▮ …(1m)
   (For the final image at infinity, m_e = D/f_e, so M = (L/f_o)(D/f_e).)

---

### Q6. Astronomical telescope — ray diagram and magnifying power (5m)

**Type:** Derivation / Long Answer · **Section D**

Draw the ray diagram of an astronomical (refracting) telescope in normal adjustment and derive its magnifying power, also writing the length of the telescope.

**Answer (mark-carrying steps):**

**Diagram — astronomical telescope (normal adjustment)** (draw it):
- [ ] Large-aperture, long-focus objective; short-focus eyepiece
- [ ] Parallel rays from a distant object form a real inverted image at the common focus (F_o = F_e)
- [ ] Final image at infinity; α = angle subtended by object, β = angle by image
- Earns: ~2m for the correct, labelled diagram

Steps:
1. **Definition of magnifying power:** M = β/α = (angle subtended by final image at eye)/(angle subtended by object at objective). …(1m)
2. **From the intermediate image of height h at the common focus:**
   α ≈ h/f_o (angle at objective), β ≈ h/f_e (angle at eyepiece). …(1m)
3. **Result (normal adjustment, image at infinity):**
   ▮ M = β/α = f_o/f_e ▮ …(1m)
4. **Length of telescope:** L = f_o + f_e (distance between the two lenses). …(½m, bonus)
   (For final image at near point: M = (f_o/f_e)(1 + f_e/D).)

---

### Q7. Total internal reflection and critical angle relation (3m)

**Type:** Derivation · **Section C**

Define critical angle and derive the relation between the refractive index of a denser medium and its critical angle with respect to air.

**Answer (mark-carrying steps):**
1. **Definition:** The critical angle C is the angle of incidence in the denser medium for which the angle of refraction in the rarer medium is 90°. …(1m)
2. **Apply Snell's law** at the denser-rarer (medium → air) boundary, i = C, r = 90°:
   n sin C = 1 × sin 90° = 1. …(1m)
3. **Result:** ▮ n = 1/sin C ▮ ; equivalently sin C = 1/n. For i > C, no refraction is possible and total internal reflection occurs. …(1m)

---

### Q8. Equivalent focal length of two thin lenses in contact (3m)

**Type:** Derivation · **Section C**

Two thin lenses of focal lengths f₁ and f₂ are placed in contact. Derive the equivalent focal length F and hence the law of addition of powers.

**Answer (mark-carrying steps):**
1. **First lens** forms image I₁ of object O: 1/v₁ − 1/u = 1/f₁. …(½m)
2. **Second lens** (in contact) uses I₁ as object, forms final image I at v:
   1/v − 1/v₁ = 1/f₂. …(½m)
3. **Add the two equations** (1/v₁ cancels):
   1/v − 1/u = 1/f₁ + 1/f₂. …(1m)
4. **Identify with 1/v − 1/u = 1/F:**
   ▮ 1/F = 1/f₁ + 1/f₂ ▮, and in terms of power P = P₁ + P₂. …(1m)
