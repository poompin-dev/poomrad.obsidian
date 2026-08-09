import { describe, expect, it } from "vitest";
import urlUtils from "./urlUtils.js";

const { canonicalizePermalink } = urlUtils;

describe("canonicalizePermalink", () => {
  it("removes the vault sort prefix from the top-level folder", () => {
    expect(canonicalizePermalink("/02-webpage/archives/all-notes/")).toBe(
      "/webpage/archives/all-notes/",
    );
    expect(canonicalizePermalink("/32-multisystem/neoplasm/lymphoma/")).toBe(
      "/multisystem/neoplasm/lymphoma/",
    );
  });

  it("uses British spelling for known folder segments", () => {
    expect(
      canonicalizePermalink(
        "/32-multisystem/neoplasm/hematologic-malignancy/lymphoma/",
      ),
    ).toBe("/multisystem/neoplasm/haematologic-malignancy/lymphoma/");
    expect(
      canonicalizePermalink(
        "/30-msk/soft-tissue/soft-tissue-tumor/sarcoma/fibrosarcoma/",
      ),
    ).toBe("/msk/soft-tissue/soft-tissue-tumour/sarcoma/fibrosarcoma/");
    expect(
      canonicalizePermalink(
        "/32-multisystem/neoplasm/solid-malignancy/germ-cell-tumors/teratoma/",
      ),
    ).toBe(
      "/multisystem/neoplasm/solid-malignancy/germ-cell-tumours/teratoma/",
    );
  });

  it("covers the currently empty American-spelled child folders", () => {
    expect(
      canonicalizePermalink(
        "/30-msk/soft-tissue/soft-tissue-tumor/benign/glomus-tumor/example/",
      ),
    ).toBe(
      "/msk/soft-tissue/soft-tissue-tumour/benign/glomus-tumour/example/",
    );
    expect(
      canonicalizePermalink(
        "/30-msk/soft-tissue/soft-tissue-tumor/benign/phosphaturic-mesenchymal-tumor/example/",
      ),
    ).toBe(
      "/msk/soft-tissue/soft-tissue-tumour/benign/phosphaturic-mesenchymal-tumour/example/",
    );
  });

  it("preserves already public routes and URL suffixes", () => {
    expect(canonicalizePermalink("/")).toBe("/");
    expect(canonicalizePermalink("/~random/")).toBe("/~random/");
    expect(canonicalizePermalink("/30-msk/bones/#overview")).toBe(
      "/msk/bones/#overview",
    );
  });
});
