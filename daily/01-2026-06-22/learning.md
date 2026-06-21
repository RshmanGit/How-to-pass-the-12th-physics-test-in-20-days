---
date: 2026-06-22
dayIndex: 1
title: "From Coulomb's law to the electric field"
chapters: ["Ch 1"]
---

# You've already started Coulomb's law — today we turn *force* into *field* 💪

You did the hard first step. Today is a gentle bridge: lock in Coulomb's law, meet the
**electric field of a dipole**, and get comfortable with **flux + Gauss's law** (we'll
prove the big Gauss derivations over the next few days). Six short items, ~15 marks.

> **How to use this page:** each item shows the **exam question** first, then the exact
> **answer to write, broken into numbered steps**. Memorise it step by step — each step is
> a mark. Read the reference once if a step doesn't click, and practise drawing each diagram
> (the listed labels are where the marks are).

**Your references for the whole chapter (free):**
- **Learnohub — Electric Charges & Fields** (Roshni Mukherjee; videos + every NCERT solution): <https://www.learnohub.com/ncert-solution/class-12/physics/electric-charges-and-fields/62873d8a53790e1ac4208a64>
- **Physics Wallah — one-shot revision** (full chapter in one video): <https://www.youtube.com/watch?v=9nU2YZ2HVPA>
- **Khan Academy — electric charge, field & potential** (best for *intuition* on field/flux/Gauss): <https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage>

---

## 1. Coulomb's law: vector form + superposition

> **Q (3 marks).** State Coulomb's law in vector form, and explain the superposition principle of electrostatic forces.

**✍️ Answer to write — step by step:**

**Step 1 — Coulomb's law, vector form** *(1½m)*
For point charges $q_1$ (at $\vec{r}_1$) and $q_2$ (at $\vec{r}_2$):

$$\vec{F}_{12} = \frac{1}{4\pi\varepsilon_0}\frac{q_1 q_2}{r_{12}^{2}}\,\hat{r}_{12}$$

$\hat{r}_{12}$ points from $q_2$ to $q_1$; the sign of $q_1 q_2$ gives repulsion ($+$) or attraction ($-$). Also $\vec{F}_{21}=-\vec{F}_{12}$ (Newton's third law).

**Step 2 — Superposition principle** *(1½m)*
The net force on a charge is the **vector sum** of the forces from every other charge, each computed independently:

$$\vec{F}_1 = \frac{q_1}{4\pi\varepsilon_0}\sum_{i\neq 1}\frac{q_i}{r_{1i}^{2}}\,\hat{r}_{1i}$$

Each pairwise force is unaffected by the presence of the others.

**Formula:** $\vec{F}_{12} = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1 q_2}{r_{12}^{2}}\,\hat{r}_{12}$ &nbsp;·&nbsp; **Draw:** none (mark $\hat{r}_{12}$ from $q_2 \to q_1$ if asked).

**Learn it (go deeper):** Learnohub → "Coulomb's law" video, or Khan Academy → Coulomb's law. *(Revision — you've started this.)*

---

## 2. Electric field on the axial line of a dipole

> **Q (3 marks).** Derive an expression for the electric field at a point on the **axial line** of an electric dipole. Hence write the field for a short dipole ($r \gg a$).

**✍️ Answer to write — step by step:**

**Step 1 — Setup** *(½m)*
Dipole: $-q$ at A, $+q$ at B, separation $2a$, centre O, dipole moment $p=q\cdot 2a$ (direction $-q \to +q$). Take point P on the axis, distance $r$ from O, on the $+q$ side.

**Step 2 — Field from each charge** *(1m)*

$$E_{+}=\frac{1}{4\pi\varepsilon_0}\frac{q}{(r-a)^2}\ (\text{toward P}),\qquad E_{-}=\frac{1}{4\pi\varepsilon_0}\frac{q}{(r+a)^2}\ (\text{away from P})$$

**Step 3 — Resultant** *(½m)*
Both lie along the axis in opposite directions, and $E_{+}>E_{-}$:

$$E_{axial}=\frac{q}{4\pi\varepsilon_0}\left[\frac{1}{(r-a)^2}-\frac{1}{(r+a)^2}\right]=\frac{q}{4\pi\varepsilon_0}\frac{4ar}{(r^2-a^2)^2}$$

**Step 4 — Substitute $p=2aq$** *(½m)*

$$E_{axial}=\frac{1}{4\pi\varepsilon_0}\frac{2pr}{(r^2-a^2)^2}$$

**Step 5 — Short-dipole limit $r\gg a$** *(½m)*

$$\boxed{E_{axial}=\frac{1}{4\pi\varepsilon_0}\frac{2p}{r^{3}}}\qquad(\text{directed along }\vec{p})$$

**Formula:** $E_{axial}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^{3}}=\dfrac{2kp}{r^3}$ (axial $=2\times$ equatorial). &nbsp;·&nbsp; **Draw:** dipole $-q$—O—$+q$ on a line; P on the axis beyond $+q$; arrows for $E_{+}$ and $E_{-}$ at P.

**Learn it (go deeper):** Learnohub → "Electric dipole / field of a dipole" video. This is the *one new derivation* today — go slow.

---

## 3. State Gauss's law

> **Q (2 marks).** State Gauss's law in electrostatics.

**✍️ Answer to write — step by step:**

**Step 1 — Statement** *(1½m)*
The net electric flux through any **closed** surface equals $1/\varepsilon_0$ times the **total charge enclosed** by that surface.

**Step 2 — Formula** *(½m)*

$$\oint \vec{E}\cdot d\vec{S}=\frac{q_{enclosed}}{\varepsilon_0}$$

Only the *enclosed* charge contributes; charges outside the surface give zero net flux.

**Formula:** $\oint \vec{E}\cdot d\vec{S}=\dfrac{q_{enclosed}}{\varepsilon_0}$ &nbsp;·&nbsp; **Draw:** none.

**Learn it (go deeper):** Learnohub → "Gauss's law" video. Khan Academy → Gauss's law for intuition.

---

## 4. Net flux through a surface enclosing a dipole

> **Q (2 marks).** What is the net electric flux through a closed surface enclosing an electric dipole? Justify your answer.

**✍️ Answer to write — step by step:**

**Step 1 — Enclosed charge** *(1m)*
A dipole is $+q$ and $-q$ together, so the total charge enclosed is $+q+(-q)=0$.

**Step 2 — Apply Gauss's law** *(½m)*

$$\phi=\frac{q_{enclosed}}{\varepsilon_0}=0$$

**Step 3 — Interpret** *(½m)*
The number of field lines entering the surface equals the number leaving → **net flux = 0**.

**Formula:** $\phi=\dfrac{q_{enclosed}}{\varepsilon_0}=0$ &nbsp;·&nbsp; **Draw:** none (optional: a loop around a $+q,-q$ pair with equal lines in and out).

**Learn it (go deeper):** Same Gauss's-law reference as item 3 (this is a direct application).

---

## 5. Numerical — force between two point charges (NCERT 1.1)

> **Q (2 marks).** Two small charged spheres carry charges $2\times10^{-7}\,$C and $3\times10^{-7}\,$C and are placed $30\,$cm apart in air. Find the electrostatic force between them.

**✍️ Answer to write — step by step:**

**Step 1 — Formula**

$$F=\frac{k\,q_1 q_2}{r^2}\qquad k=\frac{1}{4\pi\varepsilon_0}=9\times10^{9}\ \text{N m}^2\text{C}^{-2}$$

**Step 2 — Substitute**

$$F=\frac{(9\times10^{9})(2\times10^{-7})(3\times10^{-7})}{(0.30)^2}=\frac{(9\times10^{9})(6\times10^{-14})}{0.09}$$

**Step 3 — Answer**

$$\boxed{F=6\times10^{-3}\ \text{N}}\qquad(\text{repulsive — both charges positive})$$

**Formula:** $F=\dfrac{k\,q_1 q_2}{r^2}$ &nbsp;·&nbsp; **Draw:** none.

**Learn it (go deeper):** Learnohub → NCERT solution Q 1.1 (worked).

---

## 6. Numerical — flux through a square (NCERT 1.15)

> **Q (3 marks).** A uniform field $\vec{E}=3\times10^{3}\,\hat{i}\ \text{N C}^{-1}$ passes through a square of side $10\,$cm. Find the electric flux when **(a)** its plane is parallel to the $y$–$z$ plane, and **(b)** its normal makes a $60^\circ$ angle with the $x$-axis.

**✍️ Answer to write — step by step:**

**Step 1 — Area**

$$A=(0.10)^2=1\times10^{-2}\ \text{m}^2$$

**Step 2 — Case (a): plane $\parallel$ $y$–$z$, so normal $\parallel \vec{E}$, $\theta=0^\circ$**

$$\phi=EA\cos0^\circ=(3\times10^{3})(1\times10^{-2})(1)=\boxed{30\ \text{N m}^2\text{C}^{-1}}$$

**Step 3 — Case (b): normal at $60^\circ$ to $\vec{E}$**

$$\phi=EA\cos60^\circ=(3\times10^{3})(1\times10^{-2})(0.5)=\boxed{15\ \text{N m}^2\text{C}^{-1}}$$

**Formula:** $\phi=\vec{E}\cdot\vec{A}=EA\cos\theta$ ($\theta$ = angle between $\vec{E}$ and the **normal**). &nbsp;·&nbsp; **Draw:** none.

**Learn it (go deeper):** Learnohub → NCERT solution Q 1.15 (worked). Ties straight into items 3–4.

---

### Quick self-check before the test
- Coulomb: can you write the **vector** form (with $\hat{r}_{12}$) *and* state superposition?
- Dipole axial: can you reach $\boxed{E=\tfrac{1}{4\pi\varepsilon_0}\tfrac{2p}{r^3}}$ from scratch, with the diagram?
- Gauss: the one line $\oint \vec{E}\cdot d\vec{S}=q_{enc}/\varepsilon_0$, and why a dipole gives zero flux.
- Numericals: $F=kq_1q_2/r^2$ and $\phi=EA\cos\theta$ — plug in carefully, keep units.
