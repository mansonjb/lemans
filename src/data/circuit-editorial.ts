/**
 * Rich, hand-curated editorial per circuit, paired with data-driven helpers.
 * The prose is written per circuit (i18n on rollout); the tables (top stays,
 * camping, price tiers) derive from the scraped data, so they are unique by
 * construction and carry no padding. Only circuits present in EDITORIAL render
 * the enriched block (pilot: valencia).
 */
import type { CircuitData, CircuitHotel } from "./circuit-data";

export type EditorialContent = {
  lede: string;
  basesSub: string;
  bases: { name: string; drive: string; stays: string; body: string }[];
  duel: {
    nearLabel: string;
    nearSub: string;
    cityLabel: string;
    citySub: string;
    rows: { dim: string; near: string; city: string }[];
    pickNear: string;
    pickCity: string;
  };
  circuitCity: string[];
  sellsOut: string;
  faq: { q: string; a: string }[];
};

/** Highest-rated stays, best score first then closest. */
export const topStays = (d: CircuitData, n = 5): CircuitHotel[] =>
  d.hotels
    .filter((h) => h.score != null)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.driveMin - b.driveMin)
    .slice(0, n);

/** Camping / glamping / rural stays (by kind or name). */
export const campingStays = (d: CircuitData): CircuitHotel[] =>
  d.hotels.filter(
    (h) => h.kind === "camping" || /glamping|camping|caba[ñn]|bungalow|finca/i.test(h.name)
  );

/** Count of listed stays per price tier (1 budget, 2 mid, 3 premium). */
export const priceTiers = (d: CircuitData): Record<1 | 2 | 3, number> => {
  const t: Record<1 | 2 | 3, number> = { 1: 0, 2: 0, 3: 0 };
  for (const h of d.hotels) t[(h.category as 1 | 2 | 3) ?? 2]++;
  return t;
};

export const EDITORIAL: Record<string, EditorialContent> = {
  valencia: {
    lede: "The Valencian Grand Prix closes the MotoGP season at the Circuit Ricardo Tormo in Cheste. A full guide to where to stay, by zone, by budget, and by how early it sells out.",
    basesSub:
      "Valencia is the season finale, so the closest beds go a long way out. Four realistic bases, nearest first.",
    bases: [
      { name: "At the circuit · Cheste", drive: "3 min", stays: "1 listed stay", body: "On the edge of the track, but the town has a single hotel (Hotel Torrijos), gone a year ahead. Realistic only if you book the moment the date lands." },
      { name: "Closest with choice · Chiva", drive: "3–8 min", stays: "4 listed stays", body: "The smart near-but-available base: roadside hotels plus glamping (Las Cabañas del Bosque, rated 5). First to fill after Cheste." },
      { name: "The city · València", drive: "23 min", stays: "19 listed stays", body: "Where most fans base: full choice, old town, beach, nightlife, and the Cercanías C-3 train runs straight to Cheste, so you skip the A-3 on race day." },
      { name: "By the airport · Manises", drive: "14 min", stays: "7 listed stays", body: "Airport hotels (ibis Valencia Bonaire, Hotel M5 Aeropuerto) between VLC and the circuit. Handy for a fly-in weekend with a hire car." },
    ],
    duel: {
      nearLabel: "Near the track",
      nearSub: "Cheste & Chiva",
      cityLabel: "In the city",
      citySub: "València",
      rows: [
        { dim: "Distance", near: "3–8 min to the gates", city: "23 min, or the C-3 train" },
        { dim: "Choice", near: "5 listed stays", city: "19 listed stays" },
        { dim: "Transport", near: "Car essential", city: "Train, no race-day traffic" },
        { dim: "Food & nightlife", near: "Village, limited", city: "Old town, beach, paella" },
        { dim: "Price & range", near: "From €, few rooms", city: "€ to €€€, full range" },
        { dim: "Sells out", near: "9–12 months ahead", city: "Holds longest" },
      ],
      pickNear: "you want the shortest transfer and you book the moment the date lands.",
      pickCity: "you want choice and a city break, and let the train do the race-day run.",
    },
    circuitCity: [
      "The Ricardo Tormo is a short, stadium-style circuit: just over 4 km, tightly wound, with banking that lets a single grandstand see most of the lap. As the season finale it is often the title decider, and the home crowd makes it the loudest weekend on Spain's MotoGP calendar.",
      "Basing in València turns the weekend into a city break: the old town, the Turia gardens, the Malvarrosa beach and the home of paella are all 20 to 30 minutes from the gates, with the C-3 train doing the race-day run for you.",
    ],
    sellsOut:
      "As the season finale, Valencia draws the biggest crowd of Spain's MotoGP weekends. Cheste and Chiva go first, often 9–12 months out. València city holds availability longest thanks to its depth, but prices climb as the weekend nears. Book the inner-ring towns early; keep the city as your flexible fallback.",
    faq: [
      { q: "Can you reach the circuit by train?", a: "Yes. The Cercanías C-3 runs from València to Cheste, a short hop from the gates. Staying in the city and training in is the easiest way to skip race-day traffic." },
      { q: "Where do most fans stay?", a: "València city (19 of our listed stays), for the choice and the train link. The inner towns of Cheste and Chiva go to those who book earliest." },
      { q: "Is there camping or glamping?", a: "Yes. Las Cabañas del Bosque (Chiva, 6 min, rated 5), Finca Malata (Turís) and J&L Glamping (Collado) are the closest options." },
      { q: "How far is València airport?", a: "València (VLC) is about 20 minutes from the circuit, and sits between the city and Cheste, so an airport hotel is a fast fly-in base." },
      { q: "When does it sell out?", a: "The finale is the busiest Spanish round. The closest beds go 9 to 12 months ahead; the city holds availability longest but prices rise near the date." },
    ],
  },
};
