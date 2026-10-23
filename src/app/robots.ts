import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawlers must be able to read page-level noindex on development/preview builds.
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl && isIndexable
      ? { sitemap: new URL("/sitemap.xml", siteUrl).href }
      : {}),
  };
}
