/** Only an explicitly configured production origin may become a canonical URL. */
export function getSiteUrl(value = process.env.SITE_URL): URL | undefined {
  if (!value?.trim()) return undefined;
  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error(
      "SITE_URL must be an absolute URL, such as your final HTTPS domain.",
    );
  }
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  ) {
    throw new Error(
      "SITE_URL must be a plain HTTP(S) origin without credentials, a path, query, or fragment.",
    );
  }
  return new URL(url.origin);
}

// Vercel supplies the stable production hostname, never a per-build preview URL.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = getSiteUrl(
  process.env.SITE_URL?.trim() || (productionHost ? `https://${productionHost}` : undefined),
);
export const isPreview = Boolean(process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production");
export const isIndexable = process.env.NODE_ENV === "production" && !isPreview;
