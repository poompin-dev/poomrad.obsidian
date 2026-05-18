---
{"dg-publish":true,"dg-path":"Rad/303_Physics/MRI/Artefacts/Off-resonance.md","permalink":"/rad/303-physics/mri/artefacts/off-resonance/","tags":["bSSFP"],"dg-note-properties":{"modality":["MRI"],"type":["physics"],"tags":["bSSFP"]}}
---

> [!info] Key points
> 
> - **Definition:** spins precessing at a frequency different from the expected Larmor frequency for that voxel
> - **Scales with B0** → off-resonance effects are [[30_Rad Knowledge/303_Physics/MRI/Misc/1.5T vs 3.0T MRI\|worse at 3T than 1.5T]] (chemical shift in Hz doubles)
> - **Four mechanisms:** B0 main field inhomogeneity, susceptibility, chemical shift (fat vs water), hardware
> - **Manifestations:** [[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|fat-sat]] failure, chemical shift artefact, [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|bSSFP banding]], EPI distortion/dropout
> - **Sequences most affected:** EPI >> [[30_Rad Knowledge/303_Physics/MRI/Sequences/bSSFP\|bSSFP]] > GRE > spin echo (SE refocuses static off-resonance)

---
## Concept
Frequency encoding and chemical-selective pulses assume each voxel precesses at a known frequency. When local Larmor frequency deviates from this, the scanner mislocalises signal, misapplies fat-sat pulses, or accumulates unwanted phase. Spin echo refocuses static off-resonance via the 180° pulse; GRE and EPI do not.

---
## Causes

**B0 main field inhomogeneity**
- Imperfect shimming, large FOV (peripheries worst), patient-induced field distortion (via motion)
- More pronounced at field edges and at 3T

**Local field inhomogeneity due to susceptibility differences**
- Air/tissue (sinuses, lung apices, bowel gas), bone/tissue, metal/tissue interfaces
- Metallic implants, surgical clips, dental work
- Haemorrhage products (deoxy-Hb, methaemoglobin, haemosiderin)

**Chemical shift between water and fat**
- Fat resonates ~3.5 ppm below water → **220 Hz at 1.5T, 440 Hz at 3T**
- Causing off-resonance for water-only acquisitions (in [[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Dixon (chemical-shift fat-water separation)\|dixon]])

**Hardware issues**
- RF coil imperfections, gradient non-linearity, eddy currents

---
## Effects

**[[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|Fat suppresion]] failure**
- **Spectral fat suppresion:** frequency-selective → patchy, incomplete, or failed fat sat in inhomogeneous regions (shoulder, ankle, neck, post-op, near metal)
- **[[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Dixon (chemical-shift fat-water separation)\|Dixon]]:** depends on accurate fat-water frequency separation → **water-fat swap** when off-resonance shifts a voxel across the spectral midpoint

 > **STIR:** inversion based on T1 → **off-resonance insensitive**, preferred in inhomogeneous regions

**Type 1 Chemical shift artefact**
-  bright/dark bands at fat-water interfaces (e.g., kidney-perinephric fat, vertebral endplates)
- Worse at low receive bandwidth and high B0

**[[30_Rad Knowledge/303_Physics/MRI/Artefacts/Banding artefact\|bSSFP banding]]**
- Phase accrual > 180° per TR → destructive interference → dark bands
- Worse with long TR, high B0, near susceptibility interfaces
- Mitigation: short TR, good shim, phase cycling (CISS/FIESTA-C)

**EPI**
- Long readout, low phase-encoding bandwidth → highly sensitive
- **Geometric distortion** along **phase-encoding direction** (stretching/compression)
- **Signal pile-up** where field gradient compresses voxels
- **Signal dropout** at air-tissue interfaces: frontal/temporal lobes, orbitofrontal cortex, brainstem near skull base, posterior fossa
- Major issue for DWI, fMRI BOLD, DTI

> Non-EPI DWI is preferred for post-operative cholesteatoma cases.

**Other**
- MR spectroscopy: line broadening, peak distortion
- Inflow/phase-contrast MRA: phase errors → flow quantification inaccuracy

---

> [!tip] Pearls
> - **Type 1 chemical shift artefact direction = frequency encoding.** EPI distortion direction = **phase encoding.**
> - **Spin echo refocuses static off-resonance** via the 180° pulse → relatively immune compared with GRE/EPI.
> - Off-resonance scales linearly with B0 → all of these artefacts are worse at 3T.
> - bSSFP banding ≠ susceptibility blooming. Banding is geometric/regular, blooming is focal at the susceptibility source.
