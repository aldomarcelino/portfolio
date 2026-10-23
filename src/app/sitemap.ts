import type { MetadataRoute } from "next";
import { siteUrl, isIndexable } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  // One-page sections are fragments, not separate indexable pages.
  return siteUrl && isIndexable ? [{ url: siteUrl.href }] : [];
}
