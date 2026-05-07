import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        crawlDelay: 10,
      },
    ],
    sitemap: "https://www.synvexis.digital/sitemap.xml",
    host: "https://www.synvexis.digital/",
  };
}