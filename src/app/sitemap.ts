import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getDetailSlugs } from "@/lib/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = siteConfig.url;

  const teamSlugs = getDetailSlugs();

  return [
    { url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    {
      url: `${url}/loan-originators`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${url}/real-estate-agents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${url}/brokerx-program`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${url}/apply`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${url}/calculators`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/our-team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...teamSlugs.map((slug) => ({
      url: `${url}/our-team/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${url}/join/loan-officers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/join/real-estate-agents`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${url}/licenses`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
