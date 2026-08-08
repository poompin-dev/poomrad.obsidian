---
{"dg-publish":true,"permalink":"/34-rad-physics/mri/fat-suppression/dixon-chemical-shift-fat-water-separation/","dg-note-properties":{"type":["physics"],"modality":["MRI"],"aliases":["Dixon"],"status":"working"}}
---

> [!info] Key points
> 
> - Chemical-shift based [[34_Rad_Physics/MRI/Fat suppression/Fat suppression (MRI techniques)\|fat suppression]] using in-phase (IP) and opposed-phase (OP) images.
> - Two-point Dixon: four co-registered image sets (IP, OP, water, fat) in one acquisition.
> - Multi-echo variants (IDEAL, mDIXON) correct B0 inhomogeneity and multi-peak fat spectrum.
> - More robust to B0 inhomogeneity than spectral fat saturation; favoured near metal, at air-tissue interfaces, and off-isocentre.
> - Enables quantitative fat fraction (PDFF) for liver and marrow.

---
## Principle
Exploits the **chemical shift** between water and fat protons (~3.5 ppm; ~220 Hz at 1.5 T, ~440 Hz at 3 T). At specific echo times, water and fat magnetisation vectors are aligned (in-phase) or anti-aligned (opposed-phase). Mathematical recombination of these echoes separates the two species.

Approximate TE values:
- 1.5 T: OP ~2.2 ms, IP ~4.4 ms
- 3 T: OP ~1.1 ms, IP ~2.3 ms

---
## Two-point (original) Dixon
Acquire IP and OP echoes (originally SE; modern implementations typically GRE):
- IP signal = W + F
- OP signal = W − F
- **Water-only** = (IP + OP) / 2
- **Fat-only** = (IP − OP) / 2
Yields four co-registered contrasts in a single acquisition.
### Limitations of two-point Dixon
Assumes a single water-fat phase difference with no extra phase from B0 inhomogeneity. In practice the OP image is not cleanly W − F, leading to:
- Shading artefact
- **Water-fat swaps** (labels reversed at regions of off-resonance)
- Noisy separation
- Single fat-peak assumption fails (fat has ≥6 spectral peaks)

---
## Multi-echo Dixon / IDEAL / mDIXON
Modern proprietary implementations (GE IDEAL, Philips mDIXON, Siemens DIXON-VIBE):
- Acquire **3 or more echoes** at asymmetric TEs
- **Explicit B0 field-map estimation**
- **Multi-peak fat spectral model** (6-peak triglyceride model)
- Iterative least-squares decomposition (the "IDEAL" of IDEAL)

Result: cleaner separation, fewer swaps, accurate **proton density fat fraction (PDFF)** quantification.

---
## Pros and cons of Dixon (and its modern variants)
### Advantages
- Robust to B0 inhomogeneity (multi-point methods)
- Works over large FOV and off-isocentre
- Useful near metal hardware and at air-tissue interfaces (brachial plexus, sinuses, lung bases)
- Four contrasts (IP, OP, water, fat) per acquisition
- Compatible with breath-hold abdominal imaging
- **Quantitative fat fraction** (PDFF)
### Disadvantages
- Longer acquisition than spectral fat sat
- SNR penalty
- Residual swaps if B0 very inhomogeneous
- T2* and noise can confound quantification

---
## Clinical applications
- **Liver PDFF**: NAFLD/MASLD, quantitative steatosis grading
- **Bone marrow fat fraction**: [[30_MSK/Bones/Bony lesions/Lytic lesions/Malignant/Multiple myeloma\|myeloma]], marrow replacement, benign vs malignant vertebral collapse
- **Adrenal adenoma**: signal drop on OP (microscopic fat); qualitative OP/IP comparison suffices
- Post-metal MSK imaging (arthroplasty, spinal hardware)
- C-spine, brachial plexus, skull base, post-operative neck
- Whole-body MRI (myeloma staging, metastatic survey)

---
## Practical pearls
- Water-fat swap: geographic signal reversal at field-inhomogeneity boundaries; verify against IP/OP pair
- **Indian-ink artefact** at fat-water interfaces on OP image is expected, not pathological
- In severe inhomogeneity (post-surgical, bulk metal) even multi-point Dixon may fail → fall back to **STIR** (B0-insensitive, but lower SNR and non-specific for any short-T1 species)

---

> [!tip] Exam pearls
> - Adrenal adenoma: signal-intensity index (SII) or adrenal-to-spleen ratio on IP/OP; microscopic fat = adenoma.
> - Dixon > SPAIR/CHESS near metal and off-isocentre. SPAIR is faster for uniform-field abdominal imaging.
> - PDFF >5-6% on multi-echo Dixon = accepted threshold for hepatic steatosis.

