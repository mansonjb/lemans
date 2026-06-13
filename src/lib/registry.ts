import { EVENTS } from "@/data/events";
import { PLACES } from "@/data/places";
import {
  CROSS_PAGES,
  EVENT_ZONE_PAGES,
  GUIDES,
  STAY_TYPES,
} from "@/data/catalog";
import { LEAD_PAGES } from "@/data/leadpages";
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

export const PAGES: PageDef[] = [
  { key: "home", template: "home", slugs: same("") },
  ...EVENTS.map((e) => ({
    key: `event:${e.key}`,
    template: "event" as const,
    slugs: e.slugs,
    ref: e.key,
  })),
  ...PLACES.map((p) => ({
    key: `place:${p.key}`,
    template: "place" as const,
    slugs: prefixSlugs(p.slugs, PLACE_PREFIX),
    ref: p.key,
  })),
  ...STAY_TYPES.map((t) => ({
    key: `type:${t.key}`,
    template: "type" as const,
    slugs: t.slugs,
    ref: t.key,
  })),
  ...CROSS_PAGES.map((c) => ({
    key: `cross:${c.key}`,
    template: "cross" as const,
    slugs: c.slugs,
    ref: c.key,
  })),
  ...EVENT_ZONE_PAGES.map((p) => ({
    key: `ez:${p.key}`,
    template: "eventzone" as const,
    slugs: p.slugs,
    ref: p.key,
  })),
  ...LEAD_PAGES.map((p) => ({
    key: `money:${p.key}`,
    template: "money" as const,
    slugs: p.slugs,
    ref: p.key,
  })),
  ...GUIDES.map((g) => ({
    key: `guide:${g.key}`,
    template: "guide" as const,
    slugs: g.slugs,
    ref: g.key,
  })),
  {
    key: "quiz",
    template: "quiz",
    slugs: {
      en: "find-your-stay",
      fr: "trouver-mon-hebergement",
      nl: "vind-jouw-verblijf",
      de: "unterkunft-finden",
      it: "trova-il-tuo-alloggio",
      es: "encuentra-tu-alojamiento",
    },
  },
  {
    key: "travel",
    template: "travel",
    slugs: {
      en: "getting-to-le-mans",
      fr: "venir-au-mans",
      nl: "reizen-naar-le-mans",
      de: "anreise-nach-le-mans",
      it: "come-arrivare-a-le-mans",
      es: "como-llegar-a-le-mans",
    },
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
