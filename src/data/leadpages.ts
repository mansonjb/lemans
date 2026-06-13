import type { Hotel, LocalizedSlug } from "@/lib/types";
import { HOTELS, HOTEL_FILTERS } from "./hotels";
import { ringOf } from "./places";

export type LeadVariant = "filter" | "duel" | "cost" | "origin";

export interface LeadPage {
  key: string;
  slugs: LocalizedSlug;
  /** Default event for map dates + countdown. */
  eventKey: string;
  variant: LeadVariant;
  /** Hotel attribute filter (filter/cost variants). */
  filterKey?: keyof typeof HOTEL_FILTERS;
  /** Keep only zones up to this ring (proximity pages). */
  ringMax?: number;
  /** Restrict to / feature these zones (duel = exactly two). */
  zoneKeys?: string[];
  /** Map centre place key; defaults to the circuit. */
  focus?: string;
}

/** Resolve the hotel list for a lead page by composing its filters. */
export function leadHotels(page: LeadPage): Hotel[] {
  let list = HOTELS;
  if (page.filterKey) list = list.filter(HOTEL_FILTERS[page.filterKey]);
  if (page.ringMax)
    list = list.filter((h) => (ringOf(h.zone) ?? 9) <= page.ringMax!);
  if (page.zoneKeys?.length)
    list = list.filter((h) => page.zoneKeys!.includes(h.zone));
  return list;
}

/** The published money pages, selected from the keyword + feasibility audit. */
export const LEAD_PAGES: LeadPage[] = [
  {
    key: "near-circuit",
    eventKey: "lm24",
    variant: "filter",
    ringMax: 1,
    slugs: {
      en: "hotels-near-le-mans-circuit",
      fr: "hotels-pres-du-circuit-du-mans",
      nl: "hotels-bij-circuit-le-mans",
      de: "hotels-nahe-rennstrecke-le-mans",
      it: "hotel-vicino-al-circuito-di-le-mans",
      es: "hoteles-cerca-del-circuito-de-le-mans",
    },
  },
  {
    key: "cheap",
    eventKey: "lm24",
    variant: "filter",
    filterKey: "budget",
    slugs: {
      en: "cheap-hotels-le-mans-24-hours",
      fr: "hotels-pas-chers-24-heures-du-mans",
      nl: "goedkope-hotels-24-uur-van-le-mans",
      de: "guenstige-hotels-24-stunden-le-mans",
      it: "hotel-economici-24-ore-di-le-mans",
      es: "hoteles-baratos-24-horas-de-le-mans",
    },
  },
  {
    key: "parking",
    eventKey: "lm24",
    variant: "filter",
    filterKey: "parking",
    slugs: {
      en: "le-mans-hotels-with-parking",
      fr: "hotels-avec-parking-le-mans",
      nl: "hotels-met-parkeren-le-mans",
      de: "hotels-mit-parkplatz-le-mans",
      it: "hotel-con-parcheggio-le-mans",
      es: "hoteles-con-parking-le-mans",
    },
  },
  {
    key: "station",
    eventKey: "lm24",
    variant: "filter",
    filterKey: "byStation",
    slugs: {
      en: "hotels-near-le-mans-station",
      fr: "hotels-pres-gare-du-mans",
      nl: "hotels-bij-station-le-mans",
      de: "hotels-nahe-bahnhof-le-mans",
      it: "hotel-vicino-stazione-le-mans",
      es: "hoteles-cerca-estacion-le-mans",
    },
  },
  {
    key: "groups",
    eventKey: "lm24",
    variant: "filter",
    filterKey: "groups",
    slugs: {
      en: "le-mans-24-hours-group-accommodation",
      fr: "hebergement-groupe-24-heures-du-mans",
      nl: "groepsaccommodatie-24-uur-le-mans",
      de: "gruppenunterkunft-24-stunden-le-mans",
      it: "alloggi-gruppi-24-ore-le-mans",
      es: "alojamiento-grupos-24-horas-le-mans",
    },
  },
  {
    key: "circuit-vs-centre",
    eventKey: "lm24",
    variant: "duel",
    zoneKeys: ["circuit-area", "le-mans-city-centre"],
    slugs: {
      en: "stay-at-circuit-or-le-mans-centre",
      fr: "dormir-au-circuit-ou-au-mans-centre",
      nl: "circuit-of-le-mans-centrum",
      de: "rennstrecke-oder-le-mans-zentrum",
      it: "circuito-o-le-mans-centro",
      es: "circuito-o-le-mans-centro",
    },
  },
  {
    key: "centre-vs-tours",
    eventKey: "lm24",
    variant: "duel",
    zoneKeys: ["le-mans-city-centre", "tours"],
    slugs: {
      en: "le-mans-or-tours-for-the-24-hours",
      fr: "le-mans-ou-tours-pour-les-24-heures",
      nl: "le-mans-of-tours-24-uur",
      de: "le-mans-oder-tours-24-stunden",
      it: "le-mans-o-tours-24-ore",
      es: "le-mans-o-tours-24-horas",
    },
  },
  {
    key: "from-uk",
    eventKey: "lm24",
    variant: "origin",
    slugs: {
      en: "le-mans-24-hours-from-the-uk",
      fr: "aller-aux-24-heures-du-mans-depuis-le-royaume-uni",
      nl: "naar-le-mans-24-uur-vanuit-het-vk",
      de: "nach-le-mans-24-stunden-aus-grossbritannien",
      it: "a-le-mans-24-ore-dal-regno-unito",
      es: "a-le-mans-24-horas-desde-reino-unido",
    },
  },
  {
    key: "last-minute",
    eventKey: "lm24",
    variant: "filter",
    zoneKeys: ["la-fleche", "alencon", "laval", "tours", "angers"],
    slugs: {
      en: "le-mans-24-hours-last-minute-accommodation",
      fr: "hebergement-derniere-minute-24-heures-du-mans",
      nl: "last-minute-accommodatie-24-uur-le-mans",
      de: "last-minute-unterkunft-24-stunden-le-mans",
      it: "alloggi-last-minute-24-ore-le-mans",
      es: "alojamiento-ultima-hora-24-horas-le-mans",
    },
  },
  {
    key: "motogp-stay",
    eventKey: "motogp",
    variant: "filter",
    ringMax: 3,
    slugs: {
      en: "le-mans-motogp-where-to-stay",
      fr: "ou-dormir-grand-prix-de-france-moto",
      nl: "le-mans-motogp-overnachten",
      de: "le-mans-motogp-unterkunft",
      it: "le-mans-motogp-dove-dormire",
      es: "le-mans-motogp-donde-dormir",
    },
  },
];

export const leadByKey = (key: string): LeadPage | undefined =>
  LEAD_PAGES.find((p) => p.key === key);
