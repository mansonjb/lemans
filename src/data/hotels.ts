import type { Hotel } from "@/lib/types";
import { placeByKey } from "./places";

/**
 * Curated, real establishments verified via web research (chain sites, tourism
 * boards, booking platforms). Notes are short and factual, in English as the
 * canonical language. Cards link to a pre-filled Booking search that the
 * Stay22 letmeallez script monetises on click. Per-locale notes can be added
 * later; the live Stay22 map covers full availability beyond this shortlist.
 */
export const HOTELS: Hotel[] = [
  // --- Le Mans city centre ---
  { name: "Mercure Le Mans Centre", zone: "le-mans-city-centre", category: 3, kind: "hotel", note: "4-star chain hotel in a 19th-century building, 500 m from the old town" },
  { name: "Novotel Le Mans", zone: "le-mans-city-centre", category: 3, kind: "hotel", note: "Chain hotel by the Huisne river, minutes from the centre" },
  { name: "Best Western Premier Leprince Hotel Spa", zone: "le-mans-city-centre", category: 3, kind: "hotel", note: "Hotel with spa near the old town and wine bars" },
  { name: "ibis Styles Le Mans Centre Gare", zone: "le-mans-city-centre", category: 2, kind: "hotel", note: "Chain hotel facing the TGV station, breakfast included" },
  { name: "ibis Le Mans Centre Gare Nord", zone: "le-mans-city-centre", category: 2, kind: "hotel", note: "3-star chain hotel near the station" },
  { name: "Campanile Le Mans Centre Gare", zone: "le-mans-city-centre", category: 2, kind: "hotel", note: "Chain hotel next to Le Mans station" },
  { name: "The Originals City Hôtel Chantecler", zone: "le-mans-city-centre", category: 2, kind: "hotel", note: "Independent 40-room hotel between station and convention centre" },
  { name: "Hôtel Concordia Le Mans Centre Gare", zone: "le-mans-city-centre", category: 2, kind: "hotel", note: "Hotel in a 1906 building, 9 min walk from the station" },
  { name: "ibis budget Le Mans Centre", zone: "le-mans-city-centre", category: 1, kind: "hotel", note: "2-star budget hotel near the centre" },
  { name: "Première Classe Le Mans Centre", zone: "le-mans-city-centre", category: 1, kind: "hotel", note: "Budget chain hotel with secure parking" },

  // --- Circuit area ---
  { name: "Hôtel Le Circuit", zone: "circuit-area", category: 2, kind: "hotel", note: "74-room hotel south of Le Mans, right by the circuit" },
  { name: "H24 Hotel", zone: "circuit-area", category: 2, kind: "hotel", note: "Hotel in south Le Mans close to the circuit" },
  { name: "ibis Le Mans Est Pontlieue", zone: "circuit-area", category: 2, kind: "hotel", note: "3-star chain hotel with terraces, between centre and circuit" },
  { name: "Kyriad Le Mans Est", zone: "circuit-area", category: 2, kind: "hotel", note: "3-star chain hotel with restaurant and parking" },
  { name: "Camping Houx Annexe", zone: "circuit-area", category: 1, kind: "camping", note: "Campsite inside the circuit, near the Antarès tram stop" },
  { name: "Camping Beauséjour", zone: "circuit-area", category: 1, kind: "camping", note: "Campsite in the heart of the circuit, towards the Porsche Curves" },
  { name: "Camping Maison Blanche", zone: "circuit-area", category: 1, kind: "camping", note: "Circuit campsite with bike and motorhome pitches" },
  { name: "Camping Tertre Rouge", zone: "circuit-area", category: 1, kind: "camping", note: "Campsite overlooking the Bugatti circuit and the Chapelle bend" },

  // --- Arnage ---
  { name: "Best Western Auberge de la Foresterie", zone: "arnage", category: 3, kind: "hotel", note: "3-star hotel with landscaped garden and pool, 4.3 km from the centre" },
  { name: "Brit Hotel Le Cottage Le Mans Sud", zone: "arnage", category: 2, kind: "hotel", note: "3-star hotel-restaurant 2 km from the circuit, 66 rooms" },
  { name: "Campanile Le Mans Sud - Arnage", zone: "arnage", category: 2, kind: "hotel", note: "Chain hotel with restaurant, 51 rooms, close to the circuit" },
  { name: "Hôtel Inn Design Le Mans", zone: "arnage", category: 2, kind: "hotel", note: "39-room hotel-restaurant, 5 min from the Sarthe circuit" },
  { name: "B&B Hôtel Le Mans Sud", zone: "arnage", category: 1, kind: "hotel", note: "2-star budget hotel with free parking, under 10 min from the circuit" },

  // --- Mulsanne ---
  { name: "Hôtel Arbor Mulsanne", zone: "mulsanne", category: 2, kind: "hotel", note: "3-star hotel on the Hunaudières straight with heated outdoor pool" },
  { name: "ibis Styles Le Mans Sud Mulsanne", zone: "mulsanne", category: 2, kind: "hotel", note: "Chain hotel along the circuit, 100 m from Mulsanne corner" },
  { name: "Aux Portes du Circuit", zone: "mulsanne", category: 2, kind: "rental", note: "Rental with outdoor pool and garden in Mulsanne" },
  { name: "Au pied du Circuit des 24H", zone: "mulsanne", category: 1, kind: "rental", note: "Rental with free WiFi and garden, rue des Salamandres" },

  // --- Ruaudin ---
  { name: "Ashley Hôtel Le Mans Sud", zone: "ruaudin", category: 2, kind: "hotel", note: "Art-deco style hotel, 5 min from Antarès" },
  { name: "The Originals Le Mans Sud", zone: "ruaudin", category: 1, kind: "hotel", note: "Hotel 6 km from the circuit, free WiFi and private parking" },

  // --- Changé ---
  { name: "Domaine de la Blanchardière", zone: "change", category: 2, kind: "hotel", note: "20-room hotel-restaurant at the edge of Le Mans, 10 min from the station" },
  { name: "Château du Domaine de la Coudraie", zone: "change", category: 3, kind: "rental", note: "Château rental with grounds in Changé" },

  // --- Écommoy ---
  { name: "Camping Municipal Les Vaugeons", zone: "ecommoy", category: 1, kind: "camping", note: "2-star municipal campsite, 50 pitches, ~15 km from the circuit" },
  { name: "Gîte du Moulin du Breil", zone: "ecommoy", category: 2, kind: "rental", note: "Gîte in Écommoy, around 14 km from the circuit" },
  { name: "Chambres d'hôtes Equihome", zone: "ecommoy", category: 2, kind: "rental", note: "B&B 500 m from Écommoy centre, near the Bercé forest" },
  { name: "Le Caravane Vintage", zone: "ecommoy", category: 1, kind: "rental", note: "Quirky stay in Écommoy, around 17 km from the circuit" },

  // --- La Flèche ---
  { name: "Camping La Route d'Or", zone: "la-fleche", category: 2, kind: "camping", note: "4-star municipal campsite by the Loir with pool, near the zoo" },
  { name: "Logis Hôtel Le Vert Galant", zone: "la-fleche", category: 2, kind: "hotel", note: "Logis hotel in La Flèche town centre" },
  { name: "Hôtel Relais du Loir", zone: "la-fleche", category: 2, kind: "hotel", note: "Family hotel on promenade du Maréchal Foch in La Flèche" },
  { name: "Hôtel Le Gentleman", zone: "la-fleche", category: 2, kind: "hotel", note: "Hotel in La Flèche" },

  // --- Alençon ---
  { name: "Mercure Alençon", zone: "alencon", category: 3, kind: "hotel", note: "55-room chain hotel 5 min from the centre, near the A28 exit" },
  { name: "ibis Alençon", zone: "alencon", category: 2, kind: "hotel", note: "52-room chain hotel in the centre, 10 min from the station" },
  { name: "Campanile Nature Alençon", zone: "alencon", category: 2, kind: "hotel", note: "42-room chain hotel-restaurant with direct A28 access" },
  { name: "B&B Hôtel Alençon Nord", zone: "alencon", category: 1, kind: "hotel", note: "60-room budget chain hotel 2 km from the centre" },
  { name: "Hôtel des Ducs", zone: "alencon", category: 2, kind: "hotel", note: "Independent 28-room hotel facing Alençon station" },
  { name: "Camping de Guéramé", zone: "alencon", category: 1, kind: "camping", note: "Municipal campsite by the Sarthe, at the edge of the centre" },

  // --- Laval ---
  { name: "Kyriad Laval", zone: "laval", category: 2, kind: "hotel", note: "3-star chain hotel in central Laval, 5 min from the centre" },
  { name: "ibis Styles Laval Centre Gare", zone: "laval", category: 2, kind: "hotel", note: "50-room chain hotel in the centre, 5 min from the LGV station" },
  { name: "ibis budget Laval", zone: "laval", category: 1, kind: "hotel", note: "69-room budget chain hotel near the A81" },
  { name: "Campanile Laval Nord", zone: "laval", category: 2, kind: "hotel", note: "Chain hotel with free parking and fitness room" },
  { name: "B&B Hôtel Laval Ouest", zone: "laval", category: 1, kind: "hotel", note: "66-room budget chain hotel in west Laval" },

  // --- Tours ---
  { name: "Mercure Tours Centre Gare et Congrès", zone: "tours", category: 3, kind: "hotel", note: "4-star chain hotel in the centre, 5 min from the station" },
  { name: "Novotel Tours Centre Gare", zone: "tours", category: 3, kind: "hotel", note: "Chain hotel near the station and convention centre" },
  { name: "ibis Styles Tours Sud", zone: "tours", category: 2, kind: "hotel", note: "127-room chain hotel with outdoor pool, south Tours" },
  { name: "ibis budget Tours Centre Gare", zone: "tours", category: 1, kind: "hotel", note: "Budget chain hotel near Tours station" },
  { name: "Kyriad Tours Sud Ballan-Miré", zone: "tours", category: 2, kind: "hotel", note: "3-star chain hotel with pool, south of Tours" },
  { name: "Campanile Tours Nord", zone: "tours", category: 2, kind: "hotel", note: "Chain hotel with parking, north Tours" },
  { name: "Best Western Central Hôtel Tours", zone: "tours", category: 3, kind: "hotel", note: "Chain hotel with parking in central Tours" },
  { name: "B&B Hôtel Tours Nord 2", zone: "tours", category: 1, kind: "hotel", note: "2-star budget chain hotel in north Tours" },

  // --- Angers ---
  { name: "Mercure Angers Centre Gare", zone: "angers", category: 3, kind: "hotel", note: "4-star chain hotel in central Angers" },
  { name: "Novotel Angers Centre Gare", zone: "angers", category: 3, kind: "hotel", note: "Chain hotel ~11 min walk from the château of Angers" },
  { name: "ibis Angers Centre Château", zone: "angers", category: 2, kind: "hotel", note: "3-star chain hotel by the Maine, central Angers" },
  { name: "ibis budget Angers Parc des Expositions", zone: "angers", category: 1, kind: "hotel", note: "Budget chain hotel near the expo park, A87/A11 access" },
  { name: "Best Western Plus Hôtel d'Anjou", zone: "angers", category: 3, kind: "hotel", note: "4-star chain hotel on boulevard Foch, central Angers" },
  { name: "Campanile Angers Ouest Beaucouzé", zone: "angers", category: 2, kind: "hotel", note: "3-star chain hotel in the Beaucouzé district" },
  { name: "Première Classe Angers Beaucouzé", zone: "angers", category: 1, kind: "hotel", note: "Budget chain hotel in Beaucouzé, west Angers" },
  { name: "Kyriad Angers", zone: "angers", category: 2, kind: "hotel", note: "3-star chain hotel in Angers" },
];

/** Stable id/slug for a hotel, used for its photo filename. Names are unique. */
export const hotelSlug = (name: string): string =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const hotelsByZone = (zone: string): Hotel[] =>
  HOTELS.filter((h) => h.zone === zone);

const noteHas = (h: Hotel, re: RegExp) => re.test(h.note);

/** First room count mentioned in the note, e.g. "55-room" / "66 rooms". */
const roomsFromNote = (h: Hotel): number => {
  const m = h.note.match(/(\d+)[\s-]room/i);
  return m ? Number(m[1]) : 0;
};

/** Attribute predicates for filter / money pages, derived from real data. */
export const HOTEL_FILTERS = {
  budget: (h: Hotel) => h.kind === "hotel" && h.category === 1,
  upscale: (h: Hotel) => h.category === 3,
  pool: (h: Hotel) => noteHas(h, /pool|spa/i),
  // Note signal blended with the zone's parking rating for a credible set.
  parking: (h: Hotel) =>
    noteHas(h, /parking/i) || placeByKey(h.zone)?.parking === "easy",
  byStation: (h: Hotel) => noteHas(h, /station/i),
  restaurant: (h: Hotel) => noteHas(h, /restaurant/i),
  camping: (h: Hotel) => h.kind === "camping",
  rental: (h: Hotel) => h.kind === "rental",
  // Big hotels (50+ rooms) plus group-friendly rentals and campsites.
  groups: (h: Hotel) => roomsFromNote(h) >= 50 || h.kind !== "hotel",
} satisfies Record<string, (h: Hotel) => boolean>;

/** Hotels for a zone, padded with nearby same-or-adjacent ring zones to reach
 *  a minimum count for a richer list. Keeps the zone's own first. */
export const hotelsForZonePadded = (
  zone: string,
  ringOf: (z: string) => number | undefined,
  min = 10
): Hotel[] => {
  const own = hotelsByZone(zone);
  if (own.length >= min) return own;
  const ring = ringOf(zone);
  const extra = HOTELS.filter(
    (h) => h.zone !== zone && ringOf(h.zone) === ring
  );
  return [...own, ...extra].slice(0, Math.max(min, own.length));
};

/** A spread of top picks across all zones for event hub pages. */
export const topPicks = (limit = 15): Hotel[] => {
  const byCat = [...HOTELS].sort((a, b) => b.category - a.category);
  const seen = new Set<string>();
  const out: Hotel[] = [];
  // round-robin across zones for variety
  for (const cat of [3, 2, 1] as const) {
    for (const h of byCat.filter((x) => x.category === cat)) {
      if (out.length >= limit) break;
      const z = h.zone;
      const count = out.filter((x) => x.zone === z).length;
      if (count < 2 && !seen.has(h.name)) {
        seen.add(h.name);
        out.push(h);
      }
    }
  }
  return out.slice(0, limit);
};
