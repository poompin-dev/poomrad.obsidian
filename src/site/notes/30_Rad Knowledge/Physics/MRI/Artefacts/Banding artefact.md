---
{"dg-publish":true,"dg-path":"Rad/Physics/MRI/Artefacts/Banding artefact.md","permalink":"/rad/physics/mri/artefacts/banding-artefact/","tags":["MRI","artefact","bssfp","off-resonance","steady-state","inhomogeneity"]}
---

## Overview
- Characteristic dark bands seen predominantly in balanced steady-state free precession (bSSFP) sequences (e.g., TrueFISP, FIESTA, balanced FFE)
- Caused by off-resonance effects leading to phase accumulation and signal nulls
- Frequency of bands related to repetition time (TR): band spacing ≈ 1/TR
- More pronounced at higher field strengths (3 T and above) due to increased susceptibility and off-resonance
- Can significantly degrade image quality in cardiac, abdominal, and musculoskeletal applications

## Causes
- Magnetic field (B0) inhomogeneity:
	- Susceptibility effects at air-tissue interfaces (sinuses, lungs, bowel)
	- Metal implants or surgical clips
	- Poor shimming
- Longer TR increases off-resonance sensitivity
- Local field variations cause destructive phase interference at specific frequencies

## Key radiological manifestations
- Parallel or curved dark bands across the field of view
- Bands shift position with changes in RF excitation frequency (centre frequency adjustment)
- Signal voids periodic in off-resonance frequency domain
- Typically absent or minimal in spin-echo or standard gradient-echo sequences
- In multiplanar bSSFP: additional hypointense bands at plane intersections (saturation crossover)

> [!tip] Diagnostic clue
> Bands that move when centre frequency is adjusted → confirms off-resonance banding rather than pathology or other artefacts.

## Reduction strategies
- Shorten TR (widens passband, increases band spacing)
- Improve shimming (local and global)
- Phase cycling/multiple acquisitions with different RF phase increments → combine images (complex sum, maximum intensity, elliptical signal model)
- Frequency scouting: acquire quick low-resolution scans at different centre frequencies and select optimal
- Use non-bSSFP alternatives (e.g., spoiled GRE) when banding unacceptable
- At 3 T: binomial water-selective excitation or fat-sat pulses can help indirectly

## Differential diagnosis (other band-like artefacts)

| Artefact                           | Key differentiators                                      |
|------------------------------------|----------------------------------------------------------|
| Chemical shift (type 2/black boundary) | Thin dark/bright rims at fat-water interfaces only, frequency-encoding direction |
| Zipper/RF interference             | Narrow herringbone or zipper pattern, often central, history of external RF leak |
| Susceptibility (severe)            | Blooming distortion around metal/air, not periodic bands |
| Truncation/Gibbs ringing           | Parallel bright/dark lines at high-contrast edges, not field-wide |
| Motion (flow-related)              | Ghosting in phase direction, clinical context of pulsation |

> [!warning] Common pitfall
> Severe banding near air-tissue interfaces (e.g., diaphragm, bowel) mistaken for pathology → always check if bands shift with frequency adjustment or persist across sequences.

## Pearls
- Banding worsens near end of scan if patient moves (shimming degrades)
- In cardiac cine: optimal frequency often found by scouting or time-resolved adjustment
- Modern scanners offer automated banding removal (multi-acquisition composite algorithms)
- At 1.5 T usually mild; at 3 T often limiting without mitigation
- Report should note if banding compromises diagnostic confidence and suggest sequence optimisation

> [!note] Reporting tip
> State "dark banding artefact consistent with off-resonance effects in bSSFP sequence; consider frequency adjustment or alternative sequencing if clinically indicated."
