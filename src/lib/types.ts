export const LOCALES = ["en", "fr", "nl", "de", "it", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export type LocalizedSlug = Record<Locale, string>;

export interface RaceEvent {
  key: string;
  /** Short internal id used in cross pages */
  id: "lm24" | "motos" | "motogp" | "classic" | "trucks";
  slugs: LocalizedSlug;
  /** Next edition dates (ISO). Used for countdowns and Stay22 prefill. */
  start: string;
  end: string;
  /** Recommended stay window for Stay22 prefill (arrive before, leave after). */
  checkin: string;
  checkout: string;
  datesConfirmed: boolean;
  /** Typical crowd size, displayed as social proof. */
  crowd: string;
  /** How many months ahead accommodation realistically sells out. */
  bookAheadMonths: number;
  accent: string;
}

export interface Place {
  key: string;
  name: string;
  slugs: LocalizedSlug;
  lat: number;
  lng: number;
  /** 1 = walkable, 2 = under 30 min, 3 = 30-60 min, 4 = 60-90 min */
  ring: 1 | 2 | 3 | 4;
  km: number;
  driveMin: number;
  raceWeekMin: number;
  parking: "easy" | "medium" | "hard";
  station: boolean;
  tram: boolean;
  kind: "city" | "town" | "village" | "area";
}

export interface StayType {
  key: "camping" | "hotels" | "rentals";
  slugs: LocalizedSlug;
}

export interface CrossPage {
  key: string;
  eventId: RaceEvent["id"];
  typeKey: StayType["key"];
  slugs: LocalizedSlug;
}

export interface EventZonePage {
  key: string;
  eventId: RaceEvent["id"];
  placeKey: string;
  slugs: LocalizedSlug;
}

export interface Hotel {
  name: string;
  zone: string;
  /** 1 = budget, 2 = mid-range, 3 = upscale */
  category: 1 | 2 | 3;
  kind: "hotel" | "camping" | "rental";
  /** Short factual note, English. */
  note: string;
}

/** A leg of the drive from a zone to the circuit, for the route visual. */
export interface RouteStep {
  /** Road or landmark label, e.g. "D338" or "Rocade sud". */
  via: string;
  km: number;
}

export interface ZoneRoute {
  placeKey: string;
  steps: RouteStep[];
}

export interface GuideMeta {
  key: string;
  slugs: LocalizedSlug;
}

export type TemplateKind =
  | "globalhome"
  | "circuitsoon"
  | "circuithub"
  | "circuittravel"
  | "circuitguide"
  | "circuitzone"
  | "circuitfilter"
  | "home"
  | "event"
  | "place"
  | "type"
  | "cross"
  | "eventzone"
  | "money"
  | "guide"
  | "travel"
  | "quiz"
  | "about"
  | "contact"
  | "legal"
  | "privacy";

export interface PageDef {
  key: string;
  template: TemplateKind;
  slugs: LocalizedSlug;
  /** Reference into the matching data collection (event key, place key, ...) */
  ref?: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface GuideContent {
  title: string;
  description: string;
  intro: string[];
  sections: GuideSection[];
}
