import type { MetadataRoute } from "next";
import { languageAlternates, PAGES, urlFor } from "@/lib/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: urlFor(page, "en"),
    changeFrequency: "weekly" as const,
    priority:
      page.template === "home" ? 1 : page.template === "event" ? 0.9 : 0.7,
    alternates: { languages: languageAlternates(page) },
  }));
}
