import { MetadataRoute } from "next";
import { portfolioConfig } from "@/lib/portfolioConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioConfig.site.url}/sitemap.xml`,
  };
}