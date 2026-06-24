# Nephrology — Numericals

> Muggable, mark-carrying calculation blocks: **formula → substitution → worked value with units →
> one-line interpretation**. Arithmetic and clinical plausibility verified at authoring; **recompute on any
> variant** before mugging. **Verify against current edition + Mitsu's sign-off.**

---

### Q1. Estimating GFR — Cockcroft-Gault / CKD-EPI (5m)
<!-- id: sys04-num-q1 -->

**Restated:** State the formulae used to estimate renal function and work through an example.

- **Formula — Cockcroft-Gault creatinine clearance (2m):**

  $$\text{CrCl (mL/min)} = \dfrac{(140 - \text{age}) \times \text{weight (kg)}}{72 \times \text{S}_{Cr}\,(\text{mg/dL})} \times (0.85 \text{ if female})$$

  Estimates **creatinine clearance**; widely used for **drug dosing**. (Note: it estimates raw mL/min, not
  body-surface-area-indexed GFR.) (2m)

- **CKD-EPI (1m):** the **CKD-EPI creatinine equation** estimates **eGFR (mL/min/1.73 m²)** from serum
  creatinine, age and sex (the 2021 version **removes the race coefficient**) and is the equation used to
  **stage CKD** (G1–G5, see `03-criteria.md`). It is more accurate than Cockcroft-Gault at higher GFR. (1m)

- **Worked example (1½m):** male, **age 60 y, weight 70 kg, serum creatinine 1.2 mg/dL.**
  - Numerator: $(140 - 60) \times 70 = 80 \times 70 = 5600$. (½m)
  - Denominator: $72 \times 1.2 = 86.4$. (½m)
  - $\text{CrCl} = 5600 / 86.4 = \mathbf{64.8\ mL/min}$ (male → no 0.85 factor). (½m)

- **Interpretation (½m):** ~65 mL/min is **mildly reduced** (consistent with **CKD stage G2**); dose
  renally-cleared drugs accordingly and confirm chronicity (≥ 3 months) before labelling CKD. (½m)

**What to tabulate:** [ ] **Cockcroft-Gault formula with the female 0.85 factor** — ~1m

**Learn it:** Harrison's — *Chronic Kidney Disease* (GFR estimation). · Davidson's — *Investigation of renal
function*. [verify current edition — CKD-EPI was re-derived in 2021]

---

### Q2. Fractional excretion of sodium (FENa) (5m)
<!-- id: sys04-num-q2 -->

**Restated:** State the FENa formula, work an example, and explain its use in AKI.

- **Formula (2m):**

  $$\text{FE}_{Na}\,(\%) = \dfrac{\text{U}_{Na} \times \text{P}_{Cr}}{\text{P}_{Na} \times \text{U}_{Cr}} \times 100$$

  where U = urine and P = plasma concentrations of sodium (Na) and creatinine (Cr). It measures the fraction
  of filtered sodium that is excreted — an index of tubular sodium handling. (2m)

- **Worked example (1½m):** oliguric patient — **U_Na = 10 mmol/L, P_Na = 140 mmol/L, U_Cr = 50 mg/dL,
  P_Cr = 4.0 mg/dL.**
  - Numerator: $10 \times 4.0 = 40$. (½m)
  - Denominator: $140 \times 50 = 7000$. (½m)
  - $\text{FE}_{Na} = (40 / 7000) \times 100 = \mathbf{0.57\%}$. (½m)

- **Interpretation (1m):** **FENa < 1%** → avid sodium retention = **pre-renal AKI** (intact tubules
  responding to hypoperfusion). **FENa > 2%** → **acute tubular necrosis** (tubules cannot conserve Na⁺).
  Here 0.57% is **pre-renal**. (1m)

- **Caveat (½m):** FENa is unreliable after **diuretics** (use **FE-urea < 35%** for pre-renal instead) and
  in CKD; interpret with the clinical volume assessment. (½m)

**What to tabulate:** [ ] **FENa cut-offs** (< 1% pre-renal vs > 2% ATN) — ~1m

**Learn it:** Harrison's — *Acute Kidney Injury* (urinary indices). · Davidson's — *Acute kidney injury*.
[verify current edition]

---
