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
  /** Local photo path, or "" when none was captured. */
  img: string;
}

export interface CircuitZone {
  key: string;
  name: string;
  driveMin: number;
  ring: number;
  count: number;
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

export interface CircuitData {
  key: string;
  event: CircuitEvent;
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
    zones: barcelonaZones,
    hotels: barcelonaHotels,
  },
};

export const circuitData = (key: string): CircuitData | undefined => DATA[key];

/** Circuit keys that render through the generic circuit guide template. */
export const hasCircuitData = (key: string): boolean => key in DATA;
