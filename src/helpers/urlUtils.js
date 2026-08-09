const PUBLIC_SEGMENT_RENAMES = new Map([
  ["hematologic-malignancy", "haematologic-malignancy"],
  ["soft-tissue-tumor", "soft-tissue-tumour"],
  ["germ-cell-tumors", "germ-cell-tumours"],
  ["glomus-tumor", "glomus-tumour"],
  ["phosphaturic-mesenchymal-tumor", "phosphaturic-mesenchymal-tumour"],
]);

const NUMBERED_FOLDER_PREFIX = /^\d{2}-(?=[a-z0-9])/i;

function canonicalizePermalink(permalink) {
  if (typeof permalink !== "string" || permalink.length === 0) {
    return permalink;
  }

  const [, pathname, suffix = ""] = permalink.match(/^([^?#]*)([?#].*)?$/) || [];
  if (!pathname || pathname === "/") {
    return permalink;
  }

  const hasLeadingSlash = pathname.startsWith("/");
  const hasTrailingSlash = pathname.endsWith("/");
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    segments[0] = segments[0].replace(NUMBERED_FOLDER_PREFIX, "");
  }

  const canonicalPath = segments
    .map((segment) => PUBLIC_SEGMENT_RENAMES.get(segment) || segment)
    .join("/");

  return `${hasLeadingSlash ? "/" : ""}${canonicalPath}${hasTrailingSlash ? "/" : ""}${suffix}`;
}

module.exports = { canonicalizePermalink };
