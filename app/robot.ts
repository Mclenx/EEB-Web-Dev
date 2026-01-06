// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // If you ever add admin/drafts later, disallow them here
      // disallow: ["/admin", "/drafts"],
    },
    sitemap: "https://eebweb.dev/sitemap.xml",
  };
}
