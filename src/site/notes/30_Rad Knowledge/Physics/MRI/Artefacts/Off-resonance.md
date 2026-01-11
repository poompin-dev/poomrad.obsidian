---
{"dg-publish":true,"dg-path":"Rad/Physics/MRI/Artefacts/Off-resonance.md","permalink":"/rad/physics/mri/artefacts/off-resonance/"}
---

Off-resonance = spins precess at a slightly "wrong" frequency because of local B0 inhomogeneity

In [[30_Rad Knowledge/Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|fat suppression]] context = "wrong fat frequency" → errors/artefacts

Certain readouts (EPI) are very sensitive to B0 inhomogeneity, so off-resonance artefacts are more pronounced.
## Causes
- B0 magnet inhomogeneity, poor shimming → more pronounced in large FOV
- Local B0 inhomogeneity due to susceptibility differences along interfaces between tissues/air/bone/metal
- Local hardware imperfection (e.g., coil)
## Effects
- Fat suppression
	- CHESS → patchy (incomplete) fat suppression
	- [[30_Rad Knowledge/Physics/MRI/Fat suppression/Dixon\|Dixon]] → water-fat swap, weird ugly artefacts
- [[30_Rad Knowledge/Physics/MRI/Artefacts/Banding artefact\|Banding artefact]]
- Geometric distortion/Signal pile-up in EPI
