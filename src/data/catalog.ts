import type { CrossPage, GuideMeta, StayType } from "@/lib/types";

export const STAY_TYPES: StayType[] = [
  {
    key: "camping",
    slugs: {
      en: "camping",
      fr: "camping",
      nl: "camping",
      de: "camping",
      it: "campeggio",
      es: "camping",
    },
  },
  {
    key: "hotels",
    slugs: {
      en: "hotels",
      fr: "hotels",
      nl: "hotels",
      de: "hotels",
      it: "hotel",
      es: "hoteles",
    },
  },
  {
    key: "rentals",
    slugs: {
      en: "holiday-rentals",
      fr: "locations",
      nl: "vakantiehuizen",
      de: "ferienwohnungen",
      it: "case-vacanza",
      es: "alquileres",
    },
  },
];

export const CROSS_PAGES: CrossPage[] = [
  {
    key: "lm24-camping",
    eventId: "lm24",
    typeKey: "camping",
    slugs: {
      en: "le-mans-24-hours-camping",
      fr: "camping-24-heures-du-mans",
      nl: "camping-24-uur-van-le-mans",
      de: "camping-24-stunden-von-le-mans",
      it: "campeggio-24-ore-di-le-mans",
      es: "camping-24-horas-de-le-mans",
    },
  },
  {
    key: "lm24-hotels",
    eventId: "lm24",
    typeKey: "hotels",
    slugs: {
      en: "le-mans-24-hours-hotels",
      fr: "hotels-24-heures-du-mans",
      nl: "hotels-24-uur-van-le-mans",
      de: "hotels-24-stunden-von-le-mans",
      it: "hotel-24-ore-di-le-mans",
      es: "hoteles-24-horas-de-le-mans",
    },
  },
  {
    key: "motogp-camping",
    eventId: "motogp",
    typeKey: "camping",
    slugs: {
      en: "le-mans-motogp-camping",
      fr: "camping-grand-prix-de-france-moto",
      nl: "camping-le-mans-motogp",
      de: "camping-le-mans-motogp",
      it: "campeggio-le-mans-motogp",
      es: "camping-le-mans-motogp",
    },
  },
  {
    key: "motogp-hotels",
    eventId: "motogp",
    typeKey: "hotels",
    slugs: {
      en: "le-mans-motogp-hotels",
      fr: "hotels-grand-prix-de-france-moto",
      nl: "hotels-le-mans-motogp",
      de: "hotels-le-mans-motogp",
      it: "hotel-le-mans-motogp",
      es: "hoteles-le-mans-motogp",
    },
  },
];

export const GUIDES: GuideMeta[] = [
  {
    key: "everything-booked",
    slugs: {
      en: "guide/everything-is-booked",
      fr: "guide/tout-est-complet",
      nl: "guide/alles-volgeboekt",
      de: "guide/alles-ausgebucht",
      it: "guide/tutto-esaurito",
      es: "guide/todo-completo",
    },
  },
  {
    key: "when-to-book",
    slugs: {
      en: "guide/when-to-book",
      fr: "guide/quand-reserver",
      nl: "guide/wanneer-boeken",
      de: "guide/wann-buchen",
      it: "guide/quando-prenotare",
      es: "guide/cuando-reservar",
    },
  },
  {
    key: "getting-there",
    slugs: {
      en: "guide/getting-to-the-circuit",
      fr: "guide/acces-circuit",
      nl: "guide/route-naar-circuit",
      de: "guide/anfahrt-rennstrecke",
      it: "guide/arrivare-al-circuito",
      es: "guide/como-llegar-al-circuito",
    },
  },
];
