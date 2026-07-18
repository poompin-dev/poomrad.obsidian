---
{"dg-publish":true,"dg-path":"Rad/303_Physics/MRI/Artefacts/Banding artefact.md","permalink":"/rad/303-physics/mri/artefacts/banding-artefact/","tags":["CMR","artefact","bSSFP"],"dg-note-properties":{"aliases":["Banding artifact","bSSFP dark bands","bSSFP banding"],"type":["physics"],"modality":["MRI"],"tags":["CMR","artefact","bSSFP"]}}
---

> [!info] Key points
> - Dark bands characteristic of **[[30_Rad Knowledge/303_Physics/MRI/Sequences/bSSFP\|bSSFP]]** sequences from [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Off-resonance effect\|Off-resonance effect]] phase accumulation
> - **Band spacing ≈ 1/TR** in the off-resonance frequency domain - shorter TR widens the passband
> - Worse at **3 T** due to greater B0 inhomogeneity and chemical shift
> - **Diagnostic test:** bands shift with centre frequency adjustment - confirms artefact, not pathology
> - Mitigation: shorten TR, shim, phase cycling (multi-acquisition SSFP), frequency scouting
 
---
## Physics & mechanism
- bSSFP requires the transverse magnetisation to refocus completely between RF pulses (zero net gradient area per TR)
- Off-resonant spins accumulate a phase offset Δφ = 2π·Δf·TR per TR → When |Δφ| approaches π, signal cancels destructively → **null band** #voodoo
- The signal profile is therefore periodic in off-resonance frequency, with period **1/TR**
- Shorter TR → wider passband → bands pushed further out of clinically relevant frequency range

see also: causes of [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Off-resonance effect#Causes\|off-resonance]]

---
## Imaging appearance
- Parallel or curved **dark bands** traversing the field of view
- Often arc around susceptibility sources (e.g., curving over the heart near the diaphragm or lung)
- Bands **shift position with centre frequency adjustment** - pathognomonic for off-resonance origin
- Absent or minimal on spin-echo and spoiled gradient-echo sequences (rules out lesion)
- Multiplanar bSSFP acquisitions may show additional hypointense lines at plane intersections (**crossover saturation**)

> [!tip] Diagnostic clue
> Bands move when centre frequency is adjusted, or disappear on a spoiled GRE repeat → off-resonance banding, not pathology.
 
## Differentials

| Mimic                           | Distinguishing feature                                          |
| ------------------------------- | --------------------------------------------------------------- |
| Myocardial infarct / fibrosis   | Persists on LGE and other sequences; matches coronary territory |
| Cardiac thrombus                | Persists across sequences; T1/T2 signal characteristics         |
| Pericardial effusion            | T2 bright, present on cine and SE sequences                     |
| Susceptibility artefact (metal) | Bloom/distortion, not periodic banding                          |
| [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Truncation artefact\|Truncation artefact]] | Parallel to high-contrast interface; spacing depends on matrix  |
 
---
## Artefact reduction strategies
- **Shorten TR** - widen passband (the most effective strategy)
- **Improve shimming** - local volume shim over region of interest (cardiac shim box, liver shim)
- **Frequency scouting** - quick low-resolution acquisitions at varying centre frequencies; operator picks the frequency placing bands outside the ROI
- **Phase cycling / multi-acquisition SSFP** - aka #CISS for neurorad
- At 3T: water-selective binomial excitation or [[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|fat suppression]] reduces fat-water beat contribution to [[30_Rad Knowledge/303_Physics/MRI/Artefacts/Off-resonance effect\|Off-resonance effect]]
---
 
> [!success] Practical pearls
> Banding near the diaphragm or great vessels mistaken for myocardial scar, thrombus, or perfusion defect on cardiac bSSFP cine → always cross-check with another sequence or shift the centre frequency.
 
> [!tip] Exam pearls
> - **Band period = 1/TR** in Hz
> - Banding is a hallmark of **balanced** SSFP - not seen in spoiled GRE or SE
> - 1.5T: usually mild and tolerable. 3 T: often limiting without phase cycling
> - Banding worsens late in long scans (patient motion → shim drift)
 