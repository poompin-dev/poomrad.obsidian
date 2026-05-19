---
{"dg-publish":true,"dg-path":"Rad/301_Systems/Chest/Mediastinum/Thymus chemical shift MRI.md","permalink":"/rad/301-systems/chest/mediastinum/thymus-chemical-shift-mri/","tags":["thymus"],"dg-note-properties":{"type":["measurement"],"system":["chest"],"modality":["MRI"],"tags":["thymus"]}}
---

## Rationale
- Normal/hyperplastic thymus has **microscopic fat mixed with water**, so it **loses signal on opposed-phase** GRE. 
- Most thymic tumours (e.g. [[30_Rad Knowledge/301_Systems/Chest/Mediastinum/Thymoma\|thymoma]]) have far less microscopic fat, so **little/no drop**.

---
## Technique
- Dual-echo **T1 GRE**: **in-phase (IP)** + **opposed-phase (OP)** on the **same slice**
- Use a **matching ROI**
	- Include **solid thymic tissue**
	- Avoid: vessels, cyst/necrosis, obvious macroscopic fat, edge artefact

## Calculation
### 1. Signal Intensity Index (SII) (most practical)

$$
\mathrm{SII}(\%)=\frac{\mathrm{SI}_{IP}-\mathrm{SI}_{OP}}{\mathrm{SI}_{IP}}\times 100
$$

Interpretation
- **Higher % drop** strongly favours **thymic hyperplasia/rebound**.
- In a large adult study, an SII cutoff around **8.9%** separated hyperplasia from tumours with very high accuracy.

> [!Example] Example
$\mathrm{SI}_{IP}=130,\ \mathrm{SI}_{OP}=77$
$$\mathrm{SII}(\%)=\frac{130-77}{130}\times100=40.8\%$$
I**nterpretation:** convincing for thymic tissue.
****

### 2. Chemical Shift Ratio (CSR) (muscle-normalised)
$$
\mathrm{CSR}=\frac{\left(\frac{\mathrm{tSI}_{OP}}{\mathrm{mSI}_{OP}}\right)}{\left(\frac{\mathrm{tSI}_{IP}}{\mathrm{mSI}_{IP}}\right)}
$$

t = thymus (or lesion), m = paraspinal muscle

Interpretation:
- **Lower CSR** suggests more signal drop (more microscopic fat) and supports hyperplasia.
- Caveat: CSR can be influenced by **age/body habitus** because muscle fat content varies, so SII is often more robust.

> [!warning]
> Do not be convinced by only the number. If the lesion is **nodular**, **growing**, very **FDG-avid**, or the patient has **new extra-thymic disease**, call it indeterminate even if there is some drop (mimics like **[[30_Rad Knowledge/301_Systems/Chest/Mediastinum/Thymolipoma\|thymolipoma]]** can also suppress on OP.)
