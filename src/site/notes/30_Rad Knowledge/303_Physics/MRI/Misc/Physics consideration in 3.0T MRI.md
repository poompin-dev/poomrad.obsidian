---
{"dg-publish":true,"dg-path":"Rad/303_Physics/MRI/Misc/Physics consideration in 3.0T MRI.md","permalink":"/rad/303-physics/mri/misc/physics-consideration-in-3-0-t-mri/","dg-note-properties":{"type":["physics"],"modality":["MRI"]}}
---


| Parameter                    | Behaviour with increasing B0                      | Practical consequence                                                                                                                                      |
| ---------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SNR                          | Scales approximately linearly with B0 (~2× at 3T) | SNR gain can be spend on resolution, speed, or thinner slices                                                                                              |
| SAR                          | Scales with B0² (~4× at 3T)                       | Tighter SAR limits; problematic for FSE/TSE with long echo trains, bSSFP, pregnancy                                                                        |
| T1 relaxation time           | Lengthens ~20 to 40%                              | Longer TR needed; better background suppression in TOF MRA; better ASL (label persists longer); Gd T1 relaxivity slightly reduced                          |
| T2 relaxation time           | Modest shortening                                 | Minor TE adjustments                                                                                                                                       |
| T2*                          | Significantly shorter                             | Benefits SWI, BOLD fMRI, R2* iron quantification, venography; penalty for GRE in lung and near bowel gas                                                   |
| Chemical shift               | Doubles (~220 Hz at 1.5T to ~440 Hz at 3T)        | More chemical shift artefact at low bandwidth, but better spectral fat saturation (wider fat–water gap) and better MRS resolution                          |
| Susceptibility effects       | Scale with B0                                     | Worse near metal, sinuses, skull base, bowel gas; but useful for SWI, BOLD, iron imaging. A tradeoff, not pure downside                                    |
| B0 homogeneity               | Harder to maintain                                | More shimming required; geometric distortion in EPI worsens (matters for DWI and fMRI)                                                                     |
| B1 / dielectric effect       | RF wavelength approaches body diameter at 3T      | Standing-wave artefact (central signal dropout) in large abdomens, ascites, pregnancy; mitigated by parallel transmit (dual-source RF) and dielectric pads |
| Parallel imaging performance | Higher SNR reserve                                | Tolerates higher acceleration factors; faster scans                                                                                                        |
| Gd contrast efficiency       | Higher T1 contrast per unit dose                  | Possibility of reducing Gd dose for equivalent enhancement                                                                                                 |
| Acoustic noise               | Increases with B0 and gradient performance        | Louder; consider in paeds, hearing-impaired, claustrophobic patients                                                                                       |

## See also
- [[30_Rad Knowledge/303_Physics/MRI/Misc/1.5T vs 3.0T MRI\|1.5T vs 3.0T MRI]]

> [!tip] Exam pearls
> - SNR ∝ B0 (linear), SAR ∝ B0² (quadratic)
> - T1 lengthening at 3T benefits TOF MRA and ASL
> - **Failed [[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|fat sat]] at 3T** → switch to [[30_Rad Knowledge/303_Physics/MRI/Fat suppression/Dixon (chemical-shift fat-water separation)\|Dixon (chemical-shift fat-water separation)]] or STIR rather than fighting the shim
> - **Dielectric artefact** = almost pathognomonic for 3T body imaging in large/pregnant/ascites patients → solution = multi-transmit RF (parallel transmit)