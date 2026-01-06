// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eebweb.dev";
  const now = new Date();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      alternates: {
        languages: {
          "en-CA": `${baseUrl}/en`,
          "fr-CA": `${baseUrl}/fr`,
        },
      },
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: now,
      alternates: {
        languages: {
          "en-CA": `${baseUrl}/en`,
          "fr-CA": `${baseUrl}/fr`,
        },
      },
    },
  ];
}
