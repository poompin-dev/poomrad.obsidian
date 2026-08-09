function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
  eleventyConfig.addFilter("hasMermaid", function(content) {
    const source = String(content || "");
    return /(?:^|\n)```mermaid\b/i.test(source) || /<pre\b[^>]*class=["'][^"']*\bmermaid\b/i.test(source);
  });

  eleventyConfig.addFilter("hasSyntaxHighlightedCode", function(content) {
    const source = String(content || "");
    return /(?:^|\n)```(?!base\b|mermaid\b|plantuml\b|transclusion\b|gist\b|ad-)[a-z0-9_-]+\s*(?:\n|$)/i.test(source) || /<code\b[^>]*class=["'][^"']*\blanguage-/i.test(source);
  });

  eleventyConfig.addFilter("hasBasesBlock", function(content) {
    const source = String(content || "");
    return /(?:^|\n)```base\b/i.test(source) || /class=["'][^"']*\bobsidian-bases-views\b/i.test(source);
  });

  eleventyConfig.addFilter("hasCallouts", function(content) {
    const source = String(content || "");
    return /\[![^\]]+\]/.test(source) || /(?:^|\n)```ad-/i.test(source) || /class=["'][^"']*\bcallout\b/i.test(source);
  });

  eleventyConfig.addFilter("excludeWebpageNotes", function(items) {
    return (items || []).filter((item) => {
      const inputPath = String(
        item?.inputPath || item?.page?.inputPath || item?.filePathStem || ""
      ).replace(/\\/g, "/");
      return !/(?:^|\/)02_Webpage(?:\/|$)/i.test(inputPath);
    });
  });

  eleventyConfig.addFilter("absoluteUrl", function(path, baseUrl) {
    const base = String(baseUrl || "").replace(/\/+$/, "");
    const pathname = `/${String(path || "").replace(/^\/+/, "")}`;
    return `${base}${pathname}`;
  });

  eleventyConfig.addFilter("seoDescription", function(content, title, siteName) {
    const entities = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
      "&nbsp;": " ",
    };
    const cleanedContent = String(content || "")
      .replace(/^---[\s\S]*?---\s*/, "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/\[![^\]]+\]\s*/g, "")
      .replace(/\[\[([^\]]+)\]\]/g, (_, link) => {
        const parts = link.split("|");
        const label = parts.length > 1 ? parts[parts.length - 1] : parts[0].split("/").pop();
        return label.replace(/\\\|/g, "|").split("#")[0];
      })
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&(amp|lt|gt|quot|#39|nbsp);/gi, (entity) => entities[entity.toLowerCase()] || " ")
      .replace(/^\s{0,3}#{1,6}\s+/gm, "")
      .replace(/^\s*(?:[-*+]\s+|>\s?)/gm, "")
      .replace(/^\s*\{[^}]+\}\s*$/gm, "")
      .replace(/[*_~`]+/g, "");

    const paragraphs = cleanedContent
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
      .filter((paragraph) => paragraph && paragraph !== "___" && paragraph !== "---");

    let text = "";
    for (const paragraph of paragraphs) {
      if (text.length >= 50 && /[.!?]$/.test(text)) break;
      text = `${text} ${paragraph}`.trim();
      if (text.length >= 160) break;
    }

    if (!text) {
      text = `Radiology revision notes on ${title || "this topic"} from ${siteName || "SFRad"}, a personal educational knowledge base.`;
    }

    if (text.length > 160) {
      text = `${text.slice(0, 157).replace(/\s+\S*$/, "")}...`;
    }
    return text;
  });

  eleventyConfig.addFilter("lastReviewedAt", function(reviewed, updated, noteProps, inputPath) {
    const sourcePath = String(inputPath || "").replace(/\\/g, "/");
    const isMedicalNote = /(?:^|\/)src\/site\/notes\/3[0-9]_[^/]+(?:\/|$)/i.test(sourcePath);
    if (!isMedicalNote) return "";
    return reviewed || noteProps?.reviewed || "";
  });

  eleventyConfig.addFilter("reviewDate", function(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "Asia/Bangkok",
    }).format(date);
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
