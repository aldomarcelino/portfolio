export const developerToolsUrl =
  "https://al1-developer-tools.aldomarcelino.workers.dev/";

// A focused selection from Ramupod's config/tools.ts.
export const featuredTools = [
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate, and minify JSON in a click.",
  },
  {
    slug: "diff-viewer",
    name: "Diff Viewer",
    description: "Compare text and JSON. See exactly what changed.",
  },
  {
    slug: "curl-to-code",
    name: "cURL to Code",
    description: "Turn cURL requests into ready-to-use code.",
  },
  {
    slug: "fake-data-generator",
    name: "Fake Data & Mock Generator",
    description: "Generate mock data as JSON, CSV, SQL, or TypeScript.",
  },
  {
    slug: "qa-bug-report",
    name: "QA Bug Capture & Handoff",
    description: "Capture request evidence and export a clear bug report.",
  },
] as const;
