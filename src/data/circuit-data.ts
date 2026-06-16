/**
 * Per-circuit content layer for the generic circuit guide template. The hotel
 * and zone arrays are AUTO-GENERATED from Apify scrapes (see
 * scripts/gen-circuit-ts.mjs); the event meta is editorial and lives here.
 *
 * Le Mans keeps its bespoke template + data (events/places/hotels modules);
 * every other live circuit renders from one of these bundles.
 */
import { silverstoneHotels, silverstoneZones } from "./circuits/silverstone";
import { spaHotels, spaZones } from "./circuits/spa";
import { zandvoortHotels, zandvoortZones } from "./circuits/zandvoort";
import { nurburgringHotels, nurburgringZones } from "./circuits/nurburgring";
import { monzaHotels, monzaZones } from "./circuits/monza";
import { spielbergHotels, spielbergZones } from "./circuits/spielberg";
import { monacoHotels, monacoZones } from "./circuits/monaco";
import { barcelonaHotels, barcelonaZones } from "./circuits/barcelona";

export interface CircuitHotel {
  name: string;
  slug: string;
  kind: "hotel" | "camping" | "rental";
  /** 1–3 price tier (€ / €€ / €€€). */
  category: number;
  /** Zone key (slugified town). */
  zone: string;
  /** Estimated minutes to the circuit on a normal day (0 = at the circuit). */
  driveMin: number;
  /** Distance ring: 1 ≤ ~13 min, 2 ≤ ~25 min, 3 beyond. */
  ring: number;
  score: number | null;
  lat: number;
  lng: number;
  /** Local photo path, or "" when none was captured. */
  img: string;
}

export interface CircuitZone {
  key: string;
  name: string;
  driveMin: number;
  ring: number;
  count: number;
  /** Centroid of the zone's stays, for centring a map on the town. */
  lat: number;
  lng: number;
}

export interface CircuitEvent {
  /** Headline event, e.g. "British Grand Prix". */
  name: string;
  /** Typical race-weekend stay window (pre-fills the Stay22 map + Booking). */
  checkin: string;
  checkout: string;
  /** Human label for the weekend, e.g. "Early July". */
  window: string;
  /** Weekend attendance, e.g. "480,000+". */
  crowd: string;
  /** How far ahead the closest stays sell out, e.g. "9–12 months". */
  bookAhead: string;
}

export interface CircuitTravel {
  /** Nearest useful airports, closest first. */
  airports: { code: string; name: string; driveMin: number }[];
  /** Nearby train stations (proper nouns, locale-neutral). */
  rail: string[];
  /** Motorway references, e.g. "A4 / A52". */
  roads: string;
}

export interface CircuitData {
  key: string;
  event: CircuitEvent;
  travel: CircuitTravel;
  zones: CircuitZone[];
  hotels: CircuitHotel[];
}

const DATA: Record<string, CircuitData> = {
  silverstone: {
    key: "silverstone",
    event: {
      name: "British Grand Prix",
      checkin: "2026-07-02",
      checkout: "2026-07-06",
      window: "Early July",
      crowd: "480,000+",
      bookAhead: "9-12 months",
    },
    travel: {
      airports: [
        { code: "LTN", name: "London Luton", driveMin: 45 },
        { code: "BHX", name: "Birmingham", driveMin: 50 },
        { code: "LHR", name: "London Heathrow", driveMin: 75 },
      ],
      rail: ["Milton Keynes Central", "Banbury", "Northampton"],
      roads: "A43 / M40 / M1",
    },
    zones: silverstoneZones,
    hotels: silverstoneHotels,
  },
  spa: {
    key: "spa",
    event: {
      name: "Belgian Grand Prix",
      checkin: "2026-07-23",
      checkout: "2026-07-27",
      window: "Late July",
      crowd: "380,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "LGG", name: "Liège", driveMin: 50 },
        { code: "CGN", name: "Cologne/Bonn", driveMin: 80 },
        { code: "BRU", name: "Brussels", driveMin: 90 },
      ],
      rail: ["Verviers-Central", "Liège-Guillemins"],
      roads: "A27 / E42",
    },
    zones: spaZones,
    hotels: spaHotels,
  },
  zandvoort: {
    key: "zandvoort",
    event: {
      name: "Dutch Grand Prix",
      checkin: "2026-08-20",
      checkout: "2026-08-24",
      window: "Late August",
      crowd: "305,000+",
      bookAhead: "9-12 months",
    },
    travel: {
      airports: [{ code: "AMS", name: "Amsterdam Schiphol", driveMin: 40 }],
      rail: ["Zandvoort aan Zee", "Haarlem"],
      roads: "A5 / A9 / N200",
    },
    zones: zandvoortZones,
    hotels: zandvoortHotels,
  },
  nurburgring: {
    key: "nurburgring",
    event: {
      name: "Nürburgring 24 Hours",
      checkin: "2026-06-04",
      checkout: "2026-06-08",
      window: "June",
      crowd: "230,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "CGN", name: "Cologne/Bonn", driveMin: 60 },
        { code: "HHN", name: "Frankfurt-Hahn", driveMin: 70 },
        { code: "FRA", name: "Frankfurt", driveMin: 105 },
      ],
      rail: ["Koblenz", "Mayen Ost"],
      roads: "A1 / A48 / B258",
    },
    zones: nurburgringZones,
    hotels: nurburgringHotels,
  },
  monza: {
    key: "monza",
    event: {
      name: "Italian Grand Prix",
      checkin: "2026-09-03",
      checkout: "2026-09-07",
      window: "Early September",
      crowd: "335,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "LIN", name: "Milan Linate", driveMin: 30 },
        { code: "BGY", name: "Bergamo", driveMin: 45 },
        { code: "MXP", name: "Milan Malpensa", driveMin: 60 },
      ],
      rail: ["Monza", "Milano Centrale"],
      roads: "A4 / A52",
    },
    zones: monzaZones,
    hotels: monzaHotels,
  },
  spielberg: {
    key: "spielberg",
    event: {
      name: "Austrian Grand Prix",
      checkin: "2026-06-25",
      checkout: "2026-06-29",
      window: "Late June",
      crowd: "300,000+",
      bookAhead: "9-12 months",
    },
    travel: {
      airports: [
        { code: "GRZ", name: "Graz", driveMin: 60 },
        { code: "KLU", name: "Klagenfurt", driveMin: 75 },
        { code: "VIE", name: "Vienna", driveMin: 120 },
      ],
      rail: ["Knittelfeld", "Zeltweg"],
      roads: "S36 / A9",
    },
    zones: spielbergZones,
    hotels: spielbergHotels,
  },
  monaco: {
    key: "monaco",
    event: {
      name: "Monaco Grand Prix",
      checkin: "2026-05-21",
      checkout: "2026-05-25",
      window: "Late May",
      crowd: "200,000+",
      bookAhead: "12+ months",
    },
    travel: {
      airports: [{ code: "NCE", name: "Nice Côte d'Azur", driveMin: 30 }],
      rail: ["Monaco-Monte-Carlo", "Nice-Ville"],
      roads: "A8",
    },
    zones: monacoZones,
    hotels: monacoHotels,
  },
  barcelona: {
    key: "barcelona",
    event: {
      name: "Spanish Grand Prix",
      checkin: "2026-06-11",
      checkout: "2026-06-15",
      window: "Early June",
      crowd: "270,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "BCN", name: "Barcelona El Prat", driveMin: 40 },
        { code: "GRO", name: "Girona", driveMin: 50 },
        { code: "REU", name: "Reus", driveMin: 90 },
      ],
      rail: ["Montmeló", "Granollers Centre"],
      roads: "AP-7 / C-17",
    },
    zones: barcelonaZones,
    hotels: barcelonaHotels,
  },
};

export const circuitData = (key: string): CircuitData | undefined => DATA[key];

/** Circuit keys that render through the generic circuit guide template. */
export const hasCircuitData = (key: string): boolean => key in DATA;

export const circuitDataList = (): CircuitData[] => Object.values(DATA);

/**
 * Money / filter pages generated per circuit, as predicates over its stays.
 * A page is only created when enough stays match (see registry), so no thin
 * pages ship.
 */
export const CIRCUIT_FILTERS = [
  { key: "hotels", match: (h: CircuitHotel) => h.kind === "hotel" },
  { key: "campsites", match: (h: CircuitHotel) => h.kind === "camping" },
  { key: "walking-distance", match: (h: CircuitHotel) => h.ring === 1 },
  { key: "cheap", match: (h: CircuitHotel) => h.category === 1 },
] as const;

export type CircuitFilterKey = (typeof CIRCUIT_FILTERS)[number]["key"];

export const circuitFilterHotels = (
  data: CircuitData,
  key: string
): CircuitHotel[] => {
  const f = CIRCUIT_FILTERS.find((x) => x.key === key);
  return f ? data.hotels.filter(f.match) : [];
};

/** Stays in a given zone, closest first (already sorted in the data). */
export const circuitZoneHotels = (
  data: CircuitData,
  zoneKey: string
): CircuitHotel[] => data.hotels.filter((h) => h.zone === zoneKey);

/** Zones substantial enough to warrant their own page (skips the catch-all). */
export const circuitPageZones = (data: CircuitData): CircuitZone[] =>
  data.zones.filter((z) => z.key !== "circuit-area" && z.count >= 2);
