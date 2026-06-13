---
{"dg-publish":true,"dg-path":"Rad/303_Physics/MRI/Sequences/bSSFP.md","permalink":"/rad/303-physics/mri/sequences/b-ssfp/","tags":["bSSFP","CISS"],"dg-note-properties":{"aliases":["balanced steady-state free precession"],"type":["physics"],"modality":["MRI"],"tags":["bSSFP","CISS"]}}
---

> [!info] Key points
> - Gradient echo sequence with **balanced gradients on all 3 axes** → all transverse magnetisation refocused each TR
> - Contrast is **T2/T1 ratio** → bright fluid AND bright fat
> - Very short TR/TE, high flip angle (~40-70°), high SNR per unit time
> - **Vendor names:** TrueFISP (Siemens), FIESTA (GE), Balanced FFE (Philips)
> - Hallmark artefact: **[[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|off-resonance banding]]**, worse at [[30_Rad Knowledge/303_Physics/MRI/Misc/Physics consideration for 3.0T MRI\|higher magnetic field strength]] and long TR

---
## Physics
- Steady-state sequence: both longitudinal AND transverse magnetisation reach equilibrium
- All gradients (slice, phase, frequency) fully rephased within each TR → no net dephasing
- Signal ∝ **T2/T1** (not pure T2 or T1)
- Requires **very short TR** (typically < 5 ms) to keep [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Off-resonance\|off-resonance]] phase accrual < 180°
- Phase cycling (alternating RF pulses, 0°/180°) can be used to stabilise steady state
- Field inhomogeneity → phase accrual > 180° → [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|Banding artefact]]
	- Mitigate by shorten TR, improve shimming, frequency scouting, phase-cycling (CISS)

## Signal characteristics
- **Bright:** fluid, fat, blood (flowing or stationary), CSF
- **Intermediate:** muscle, solid organs
- **Flow-insensitive** → blood pool stays bright regardless of velocity (unlike GRE)
- High SNR-per-time efficiency: fastest sequence with usable soft-tissue contrast

---
## Clinical applications

### Cardiac
- **Workhorse for cine imaging** (SSFP cine): "white blood", sharp myocardium-blood interface
- Functional assessment: EF, wall motion, valve morphology
- Largely replaced spoiled GRE cine at 1.5 T

### Neuro
- **CISS / FIESTA-C** (constructive interference in steady state): dual-acquisition variant that removes banding by averaging two phase-cycled acquisitions
- High-resolution thin-slice imaging of CSF spaces
	- Cranial nerves, IAC, cisternal anatomy, endolymphatic hydrops, aqueductal stenosis

### Other
- Small bowel / MR enterography (bright lumen contrast)
- **Fetal MRI:** rapid single-shot imaging, motion-robust, bright amniotic fluid
- Non-contrast MRA (NATIVE-SPACE, TrueFISP angio)
- Cardiac shunt and great vessel imaging

---

> [!important] Pearls
> - bSSFP signal is correlated with **T2/T1**.
> - **CISS** = banding-suppressed bSSFP variant via phase cycling; remember it for IAC, cranial nerves, CSF leak.
> - Blood is bright on bSSFP regardless of flow → cannot use it to assess flow void (unlike spin echo sequences).
> - Fat is bright → do not mistake fat-containing lesion signal for fluid on a single bSSFP image.