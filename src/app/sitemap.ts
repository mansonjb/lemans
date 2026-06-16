import type { MetadataRoute } from "next";
import { languageAlternates, PAGES, urlFor } from "@/lib/registry";

const PRIORITY: Record<string, number> = {
  globalhome: 1,
  home: 0.9,
  circuithub: 0.9,
  circuitsoon: 0.6,
  event: 0.9,
  quiz: 0.8,
  travel: 0.8,
  place: 0.8,
  type: 0.7,
  cross: 0.65,
  eventzone: 0.6,
  guide: 0.6,
};

const CHANGEFREQ: Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]> = {
  home: "daily",
  circuithub: "daily",
  event: "weekly",
  eventzone: "weekly",
  cross: "weekly",
  about: "yearly",
  contact: "yearly",
  legal: "yearly",
  privacy: "yearly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  return PAGES.map((page) => ({
    url: urlFor(page, "en"),
    lastModified,
    changeFrequency: CHANGEFREQ[page.template] ?? "monthly",
    priority: PRIORITY[page.template] ?? 0.5,
    alternates: { languages: languageAlternates(page) },
  }));
}
