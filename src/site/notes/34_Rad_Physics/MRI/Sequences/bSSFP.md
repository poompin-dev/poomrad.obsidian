---
{"dg-publish":true,"dg-path":"Rad_Physics/MRI/Sequences/bSSFP.md","permalink":"/rad-physics/mri/sequences/b-ssfp/","updated":"2026-07-31T23:16:46.000+07:00","dg-note-properties":{"type":["physics"],"modality":["MRI"],"aliases":["balanced steady-state free precession"],"status":"working"}}
---

> [!info] Key points
> - bSSFP produces predominantly **T2/T1-weighted contrast** → fluid, fat and blood are often bright.
> - It has very high **signal-to-noise ratio (SNR) efficiency** and permits rapid acquisition → particularly suitable for cine imaging.
> - **Vendor names:** TrueFISP (Siemens), FIESTA (GE), balanced FFE/bFFE (Philips) and True SSFP (Canon).
> - Hallmark limitation: off-resonance **[[34_Rad_Physics/MRI/Artefacts/Banding artefact\|Banding artefact]]**, aggravated by longer TR and higher field strength.

---
## Name

| Vendors    | Siemens  | GE     | Philips           | Canon     |
| ---------- | -------- | ------ | ----------------- | --------- |
| Trade name | TrueFISP | FIESTA | Balanced FFE/bFFE | True SSFP |

All these = Balanced steady-state free precession (bSSFP). A type of coherent steady state gradient-echo sequence.
___
## Physics
- **bSSFP** uses balanced gradients on all 3 axes to balance gradient-induced dephasing which normally occurs in gradient sequences.
- The residual transverse magnetisation is preserved and contributes to subsequent echoes, establishing a **steady-state**.
	- The signal amplitude is greatest near **echo time (TE) ≈ TR/2**.
- Local magnetic field inhomogeneity causes different protons to accumulate different phases (off-resonance). Certain phase offsets (odd multiple of π) cause destructive interference → [[34_Rad_Physics/MRI/Artefacts/Banding artefact\|Banding artefact]].
	- Banding artefact worsens with longer TR and [[34_Rad_Physics/MRI/Misc/1.5T vs 3.0T MRI\|higher field strengths]] because [[34_Rad_Physics/MRI/Artefacts/Off-resonance effect\|Off-resonance effect]] are greater. Therefore, TR is usually kept short.
- Therefore, imaging quality depends strongly on...
	- Good B0 shimming → reduce field inhomogeneity
	- Good gradient performance → permits short TR
- The high steady-state transverse magnetisation and short TR make bSSFP one of the most **signal-to-noise ratio (SNR)-efficient** rapid sequences.
### Signal characteristics
According to the math; given TR << T1, at the optimal flip angle:

$$
\mathrm{Signal}∝ \sqrt{\mathrm{T2}/\mathrm{T1}}
$$
 
 Most solid tissues have relatively low T2/T1 ratios and therefore show lower signal, whereas fluid, fat and blood are typically bright.

This is particularly useful in CMR because the sequence is relatively **flow-insensitive** to laminar flow → blood remains bright whether it is stationary or flowing.
However, accelerated or turbulent flow may nevertheless cause focal signal loss.

---
## Clinical applications

### Cardiac imaging
- **Workhorse for cine imaging**: "white blood technique"
	- Sharp myocardium-blood interface: well suited for anatomical assessment
	- Functional assessment: ejection fraction (EF), and regional wall motion
- Has largely replaced spoiled GRE cine particularly at 1.5T.
### Neuroimaging
- Constructive interference in steady state (**CISS**) and FIESTA-C combine two phase-cycled bSSFP acquisitions. Because the banding artefacts occur at different locations, combining the acquisitions reduces banding.
- Used for high-resolution thin-slice imaging of CSF spaces, including the cranial nerves, IACs, cisterns and inner-ear fluid spaces.
### Fetal imaging
Single-shot fast spin echo (**SSFSE**) is the principal workhorse for routine fetal MRI. bSSFP provides complementary rapid imaging of fetal thoracoabdominal and cardiovascular anatomy.
### Other applications
- MR enterography
- NATIVE TrueFISP
  an inversion-prepared, inflow-based non-contrast MRA technique using a bSSFP readout

---

> [!warning]
> - Fat is usually bright in bSSFP → do not mistake fat-containing lesion signal for fluid/blood. Always confirm nature of the lesion with other image sequences.

## External link
- https://mriquestions.com/true-fispfiesta.html
- https://radiopaedia.org/articles/steady-state-free-precession-mri