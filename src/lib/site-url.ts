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

export const siteUrl = getSiteUrl();
export const isPreview = process.env.VERCEL_ENV === "preview";
export const isIndexable = process.env.NODE_ENV === "production" && !isPreview;
