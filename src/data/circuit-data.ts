/**
 * Per-circuit content layer for the generic circuit guide template. The hotel
 * and zone arrays are AUTO-GENERATED from Apify scrapes (see
 * scripts/gen-circuit-ts.mjs); the event meta is editorial and lives here.
 *
 * Le Mans keeps its bespoke template + data (events/places/hotels modules);
 * every other live circuit renders from one of these bundles.
 */
import { silverstoneHotels, silverstoneZones } from "./circuits/silverstone";

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
};

export const circuitData = (key: string): CircuitData | undefined => DATA[key];

/** Circuit keys that render through the generic circuit guide template. */
export const hasCircuitData = (key: string): boolean => key in DATA;
