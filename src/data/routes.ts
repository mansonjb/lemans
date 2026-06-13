import type { ZoneRoute } from "@/lib/types";

/**
 * Driving legs from each zone to the circuit main entrance, used by the
 * RouteMap visual. Roads are the real approach roads; km are approximate.
 */
export const ROUTES: ZoneRoute[] = [
  { placeKey: "circuit-area", steps: [{ via: "On site", km: 0 }] },
  {
    placeKey: "arnage",
    steps: [
      { via: "D338", km: 2 },
      { via: "Circuit entrance", km: 2 },
    ],
  },
  {
    placeKey: "mulsanne",
    steps: [
      { via: "D338", km: 3 },
      { via: "Circuit entrance", km: 2 },
    ],
  },
  {
    placeKey: "ruaudin",
    steps: [
      { via: "D147", km: 3 },
      { via: "Circuit entrance", km: 2 },
    ],
  },
  {
    placeKey: "le-mans-city-centre",
    steps: [
      { via: "Av. Georges Durand", km: 4 },
      { via: "Rocade sud", km: 3 },
    ],
  },
  {
    placeKey: "change",
    steps: [
      { via: "D324", km: 5 },
      { via: "Rocade sud", km: 3 },
    ],
  },
  {
    placeKey: "ecommoy",
    steps: [
      { via: "D338", km: 14 },
      { via: "Circuit entrance", km: 4 },
    ],
  },
  {
    placeKey: "la-fleche",
    steps: [
      { via: "D306", km: 30 },
      { via: "D338", km: 8 },
      { via: "Circuit entrance", km: 4 },
    ],
  },
  {
    placeKey: "alencon",
    steps: [
      { via: "A28", km: 44 },
      { via: "Rocade", km: 8 },
    ],
  },
  {
    placeKey: "laval",
    steps: [
      { via: "A81", km: 60 },
      { via: "A11 / Rocade", km: 15 },
    ],
  },
  {
    placeKey: "tours",
    steps: [
      { via: "A28", km: 80 },
      { via: "Rocade sud", km: 15 },
    ],
  },
  {
    placeKey: "angers",
    steps: [
      { via: "A11", km: 82 },
      { via: "Rocade sud", km: 15 },
    ],
  },
];

export const routeFor = (placeKey: string): ZoneRoute | undefined =>
  ROUTES.find((r) => r.placeKey === placeKey);
