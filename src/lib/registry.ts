import { EVENTS } from "@/data/events";
import { PLACES } from "@/data/places";
import {
  CROSS_PAGES,
  EVENT_ZONE_PAGES,
  GUIDES,
  STAY_TYPES,
} from "@/data/catalog";
import { LEAD_PAGES } from "@/data/leadpages";
import { CIRCUITS } from "@/data/circuits";
import {
  LOCALES,
  type Locale,
  type LocalizedSlug,
  type PageDef,
} from "./types";
import { SITE_URL } from "./seo";

const PLACE_PREFIX: LocalizedSlug = {
  en: "stay",
  fr: "hebergement",
  nl: "overnachten",
  de: "unterkunft",
  it: "alloggi",
  es: "alojamiento",
};

const prefixSlugs = (slugs: LocalizedSlug, prefix: LocalizedSlug): LocalizedSlug =>
  Object.fromEntries(
    LOCALES.map((l) => [l, `${prefix[l]}/${slugs[l]}`])
  ) as LocalizedSlug;

const same = (s: string): LocalizedSlug =>
  Object.fromEntries(LOCALES.map((l) => [l, s])) as LocalizedSlug;

/** Prefix a page's slugs with the Le Mans circuit segment, e.g. le-mans/... */
const lm = (slugs: LocalizedSlug): LocalizedSlug =>
  prefixSlugs(slugs, same("le-mans"));

export const PAGES: PageDef[] = [
  { key: "home", template: "globalhome", slugs: same("") },
  ...CIRCUITS.map((c): PageDef => ({
    key: `circuit:${c.key}`,
    // Le Mans keeps its bespoke "home" template; every other live circuit
    // renders from the generic circuit guide; the rest stay coming-soon.
    template:
      c.status !== "live"
        ? "circuitsoon"
        : c.key === "le-mans"
          ? "home"
          : "circuithub",
    slugs: same(c.slug),
    ref: c.key,
  })),
  ...EVENTS.map((e) => ({
    key: `event:${e.key}`,
    template: "event" as const,
    slugs: lm(e.slugs),
    ref: e.key,
  })),
  ...PLACES.map((p) => ({
    key: `place:${p.key}`,
    template: "place" as const,
    slugs: lm(prefixSlugs(p.slugs, PLACE_PREFIX)),
    ref: p.key,
  })),
  ...STAY_TYPES.map((t) => ({
    key: `type:${t.key}`,
    template: "type" as const,
    slugs: lm(t.slugs),
    ref: t.key,
  })),
  ...CROSS_PAGES.map((c) => ({
    key: `cross:${c.key}`,
    template: "cross" as const,
    slugs: lm(c.slugs),
    ref: c.key,
  })),
  ...EVENT_ZONE_PAGES.map((p) => ({
    key: `ez:${p.key}`,
    template: "eventzone" as const,
    slugs: lm(p.slugs),
    ref: p.key,
  })),
  ...LEAD_PAGES.map((p) => ({
    key: `money:${p.key}`,
    template: "money" as const,
    slugs: lm(p.slugs),
    ref: p.key,
  })),
  ...GUIDES.map((g) => ({
    key: `guide:${g.key}`,
    template: "guide" as const,
    slugs: lm(g.slugs),
    ref: g.key,
  })),
  {
    key: "quiz",
    template: "quiz",
    slugs: lm({
      en: "find-your-stay",
      fr: "trouver-mon-hebergement",
      nl: "vind-jouw-verblijf",
      de: "unterkunft-finden",
      it: "trova-il-tuo-alloggio",
      es: "encuentra-tu-alojamiento",
    }),
  },
  {
    key: "travel",
    template: "travel",
    slugs: lm({
      en: "getting-to-le-mans",
      fr: "venir-au-mans",
      nl: "reizen-naar-le-mans",
      de: "anreise-nach-le-mans",
      it: "come-arrivare-a-le-mans",
      es: "como-llegar-a-le-mans",
    }),
  },
  {
    key: "about",
    template: "about",
    slugs: {
      en: "about",
      fr: "a-propos",
      nl: "over-ons",
      de: "ueber-uns",
      it: "chi-siamo",
      es: "sobre-nosotros",
    },
  },
  {
    key: "contact",
    template: "contact",
    slugs: {
      en: "contact",
      fr: "contact",
      nl: "contact",
      de: "kontakt",
      it: "contatti",
      es: "contacto",
    },
  },
  {
    key: "legal",
    template: "legal",
    slugs: {
      en: "legal-notice",
      fr: "mentions-legales",
      nl: "juridische-informatie",
      de: "impressum",
      it: "note-legali",
      es: "aviso-legal",
    },
  },
  {
    key: "privacy",
    template: "privacy",
    slugs: {
      en: "privacy",
      fr: "confidentialite",
      nl: "privacy",
      de: "datenschutz",
      it: "privacy",
      es: "privacidad",
    },
  },
];

export const pageByKey = (key: string): PageDef | undefined =>
  PAGES.find((p) => p.key === key);

/** Templates whose content lives under the Le Mans circuit. */
const LM_SCOPED = new Set([
  "event",
  "place",
  "type",
  "cross",
  "eventzone",
  "money",
  "guide",
  "quiz",
  "travel",
]);

/**
 * Which circuit a page belongs to, or null for the global hub and the
 * site-wide static pages. Drives the circuit-aware header/footer chrome.
 */
export const circuitKeyForPage = (page: PageDef): string | null => {
  if (page.template === "home") return "le-mans";
  if (page.template === "circuithub" || page.template === "circuitsoon")
    return page.ref ?? null;
  if (LM_SCOPED.has(page.template)) return "le-mans";
  return null;
};

export const resolvePage = (
  locale: Locale,
  slugParts: string[]
): PageDef | undefined => {
  const joined = slugParts.join("/");
  return PAGES.find((p) => p.slugs[locale] === joined);
};

export const pathFor = (page: PageDef, locale: Locale): string => {
  const slug = page.slugs[locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
};

export const hrefFor = (key: string, locale: Locale): string => {
  const page = pageByKey(key);
  return page ? pathFor(page, locale) : `/${locale}`;
};

export const urlFor = (page: PageDef, locale: Locale): string =>
  `${SITE_URL}${pathFor(page, locale)}`;

export const languageAlternates = (page: PageDef): Record<string, string> => {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l] = urlFor(page, l);
  map["x-default"] = urlFor(page, "en");
  return map;
};

export const allStaticParams = (): { locale: string; slug?: string[] }[] => {
  const params: { locale: string; slug?: string[] }[] = [];
  for (const locale of LOCALES) {
    for (const page of PAGES) {
      const slug = page.slugs[locale];
      params.push(slug ? { locale, slug: slug.split("/") } : { locale, slug: [] });
    }
  }
  return params;
};
