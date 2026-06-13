import type {
  CrossPage,
  EventZonePage,
  GuideMeta,
  LocalizedSlug,
  StayType,
} from "@/lib/types";
import { LOCALES } from "@/lib/types";
import { EVENTS } from "./events";
import { PLACES } from "./places";

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

const combineSlug = (
  a: LocalizedSlug,
  b: LocalizedSlug
): LocalizedSlug =>
  Object.fromEntries(
    LOCALES.map((l) => [l, `${a[l]}-${b[l]}`])
  ) as LocalizedSlug;

/** type x event, e.g. "camping-24-heures-du-mans". All 15 combinations. */
export const CROSS_PAGES: CrossPage[] = EVENTS.flatMap((event) =>
  STAY_TYPES.map((type) => ({
    key: `${event.key}-${type.key}`,
    eventId: event.id,
    typeKey: type.key,
    slugs: combineSlug(type.slugs, event.slugs),
  }))
);

export const crossByKey = (key: string): CrossPage | undefined =>
  CROSS_PAGES.find((c) => c.key === key);

/** event x zone long-tail, nested under the event, e.g.
 *  "24-heures-du-mans/arnage". One per event x place. */
export const EVENT_ZONE_PAGES: EventZonePage[] = EVENTS.flatMap((event) =>
  PLACES.map((place) => ({
    key: `${event.key}--${place.key}`,
    eventId: event.id,
    placeKey: place.key,
    slugs: Object.fromEntries(
      LOCALES.map((l) => [l, `${event.slugs[l]}/${place.slugs[l]}`])
    ) as LocalizedSlug,
  }))
);

export const eventZoneByKey = (key: string): EventZonePage | undefined =>
  EVENT_ZONE_PAGES.find((p) => p.key === key);

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
