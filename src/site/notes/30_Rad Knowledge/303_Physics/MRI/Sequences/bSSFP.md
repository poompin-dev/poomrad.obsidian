---
{"dg-publish":true,"dg-path":"Rad/303_Physics/MRI/Sequences/bSSFP.md","permalink":"/rad/303-physics/mri/sequences/b-ssfp/","tags":["bSSFP","CISS","CMR"],"dg-note-properties":{"aliases":["balanced steady-state free precession"],"type":["physics"],"modality":["MRI"],"tags":["bSSFP","CISS","CMR"]}}
---

> [!info] Key points
> - Balanced gradient-echo steady-state sequence with high SNR efficiency
> - Contrast is correlated with **T2/T1 ratio** → bright fluid aka "white blood" technique → CMR cine workhorse
> - High SNR per unit time → suitable for fast acquisition and cine imaging
> - **Vendor names:** TrueFISP (Siemens), FIESTA (GE), Balanced FFE (Philips)
> - Hallmark artefact: **[[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|off-resonance banding]]**, worse at [[30_Rad Knowledge/303_Physics/MRI/Misc/Physics consideration for 3.0T MRI\|higher magnetic field strength]] and longer TR

---
## Physics
- Balanced steady-state free precession (**bSSFP**) uses balanced gradients on all 3 axes, so **gradient-induced dephasing is rewound each repetition time (TR)** and residual transverse magnetisation is preserved/refocused near **echo time (TE) ≈ TR/2**.
- Signal ∝ **T2/T1** (not pure T2 or T1)
- [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|Banding artefact]] occurs when off-resonance phase accrual per TR approaches an odd multiple of 180°; worse with longer TR and higher field strength because [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Off-resonance\|off-resonance]] effects are larger.

## Signal characteristics
- **Bright:** fluid, fat, blood (flowing or stationary), CSF
- **Intermediate:** muscle, solid organs
- Relatively **flow-insensitive / flow-compensated** → blood pool usually remains bright, especially in cardiac cine
	- However, very turbulent flow can still cause signal loss or flow artefact.
- One of the most **SNR** efficient rapid sequences.

---
## Clinical applications

### Cardiac
- **Workhorse for cine imaging** (SSFP cine): "white blood", sharp myocardium-blood interface
- Functional assessment: EF, wall motion, valve morphology
- Largely replaced spoiled GRE cine in 1.5T system
### Neuro
- Constructive interference in steady state (**CISS**) / FIESTA-C combines two phase-cycled bSSFP acquisitions, shifting the banding pattern between acquisitions and reducing banding artefact.
- High-resolution thin-slice imaging of CSF spaces
	- Cranial nerves, IAC, cisternal anatomy, inner ear fluid-space anatomy
### Other
- Small bowel / MR enterography (bright lumen contrast)
- Fetal MRI: useful rapid sequence, especially for fetal cardiovascular/dynamic imaging and some body applications; routine fetal anatomical imaging more commonly relies on single-shot T2 fast spin echo/HASTE.
- Non-contrast MRA: NATIVE TrueFISP is bSSFP-based
- Cardiac shunt and great vessel imaging

---

> [!important] Pearls
> - Fat is usually bright in bSFFP → do not mistake fat-containing lesion signal for fluid/blood on a single bSSFP image.

## External link
- https://mriquestions.com/true-fispfiesta.html
- https://radiopaedia.org/articles/steady-state-free-precession-mri-2?utm_source=chatgpt.com