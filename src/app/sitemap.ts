import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: siteConfig.url, lastModified: now, priority: 1.0 },
    { url: `${siteConfig.url}/blog`, lastModified: now, priority: 0.8 },
    {
      url: `${siteConfig.url}/calculators`,
      lastModified: now,
      priority: 0.7,
    },
  ];
}
