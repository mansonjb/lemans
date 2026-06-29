/**
 * Cross-links to our sister travel sites (same owner), shown on a circuit hub
 * where the circuit's city/region is also a destination on that site. These are
 * editorial, dofollow backlinks: each one points at the matching destination
 * page on a sister site, with a short localised line about what that site does.
 *
 * Keyed by CIRCUIT KEY (circuit.key, e.g. "lasvegas"/"abudhabi"/"phillipisland"),
 * not the URL slug.
 */
import type { Locale } from "@/lib/types";

type L = Record<Locale, string>;
type SiteKey = "pets" | "honeymoon" | "screen" | "snow";

/** A place label: one string when it reads the same in every language, or a
 *  per-locale map for names that genuinely translate (Tuscany -> Toscane ...). */
type Place = string | L;
const placeOf = (p: Place, l: Locale): string =>
  typeof p === "string" ? p : p[l] ?? p.en;

const SITE: Record<
  SiteKey,
  { name: string; url: (slug: string) => string; blurb: Record<Locale, (p: string) => string> }
> = {
  pets: {
    name: "HotelsWithPets",
    url: (s) => `https://www.hotelswithpets.com/en/destinations/${s}`,
    blurb: {
      en: (p) => `${p}: pet-friendly hotels, for travelling with your dog.`,
      fr: (p) => `${p} : des hôtels qui acceptent les animaux, pour voyager avec votre chien.`,
      nl: (p) => `${p}: hondvriendelijke hotels, voor wie met de hond reist.`,
      de: (p) => `${p}: hundefreundliche Hotels, für Reisen mit Hund.`,
      it: (p) => `${p}: hotel che accettano animali, per viaggiare con il cane.`,
      es: (p) => `${p}: hoteles que admiten mascotas, para viajar con tu perro.`,
    },
  },
  honeymoon: {
    name: "MyHoneymoonHotel",
    url: (s) => `https://myhoneymoonhotel.com/destinations/${s}`,
    blurb: {
      en: (p) => `${p}: the most romantic hotels for your honeymoon.`,
      fr: (p) => `${p} : les hôtels les plus romantiques pour votre lune de miel.`,
      nl: (p) => `${p}: de meest romantische hotels voor je huwelijksreis.`,
      de: (p) => `${p}: die romantischsten Hotels für die Flitterwochen.`,
      it: (p) => `${p}: gli hotel più romantici per la luna di miele.`,
      es: (p) => `${p}: los hoteles más románticos para tu luna de miel.`,
    },
  },
  screen: {
    name: "ScreenToTrip",
    url: (s) => `https://screentotrip.com/destinations/${s}`,
    blurb: {
      en: (p) => `${p} on screen: the film and TV locations you can visit.`,
      fr: (p) => `${p} à l'écran : les lieux de tournage ciné et séries à visiter.`,
      nl: (p) => `${p} op het scherm: de film- en tv-locaties om te bezoeken.`,
      de: (p) => `${p} im Film: die Drehorte aus Film und Fernsehen zum Besuchen.`,
      it: (p) => `${p} sullo schermo: i set di film e serie da visitare.`,
      es: (p) => `${p} en pantalla: los escenarios de cine y series que puedes visitar.`,
    },
  },
  snow: {
    name: "BestSnowHotels",
    url: (s) => `https://www.bestsnowhotels.com/en/destinations/${s}`,
    blurb: {
      en: (p) => `${p}: the best ski hotels on the slopes nearby.`,
      fr: (p) => `${p} : les meilleurs hôtels au ski, skis aux pieds, tout près.`,
      nl: (p) => `${p}: de beste skihotels aan de piste in de buurt.`,
      de: (p) => `${p}: die besten Skihotels an der Piste in der Nähe.`,
      it: (p) => `${p}: i migliori hotel sulla neve, vicino alle piste.`,
      es: (p) => `${p}: los mejores hoteles de esquí a pie de pista, muy cerca.`,
    },
  },
};

/* place names that translate */
const TUSCANY: L = { en: "Tuscany", fr: "Toscane", nl: "Toscane", de: "Toskana", it: "Toscana", es: "Toscana" };
const LAKE_COMO: L = { en: "Lake Como", fr: "Lac de Côme", nl: "Comomeer", de: "Comer See", it: "Lago di Como", es: "Lago de Como" };
const SEVILLE: L = { en: "Seville", fr: "Séville", nl: "Sevilla", de: "Sevilla", it: "Siviglia", es: "Sevilla" };
const MILAN: L = { en: "Milan", fr: "Milan", nl: "Milaan", de: "Mailand", it: "Milano", es: "Milán" };
const FLORENCE: L = { en: "Florence", fr: "Florence", nl: "Florence", de: "Florenz", it: "Firenze", es: "Florencia" };
const JAPAN: L = { en: "Japan", fr: "Japon", nl: "Japan", de: "Japan", it: "Giappone", es: "Japón" };
const BRAZIL: L = { en: "Brazil", fr: "Brésil", nl: "Brazilië", de: "Brasilien", it: "Brasile", es: "Brasil" };
const AUSTRALIA: L = { en: "Australia", fr: "Australie", nl: "Australië", de: "Australien", it: "Australia", es: "Australia" };
const MEXICO: L = { en: "Mexico", fr: "Mexique", nl: "Mexico", de: "Mexiko", it: "Messico", es: "México" };

type NetLink = { site: SiteKey; slug: string; place: Place };

const NETWORK: Record<string, NetLink[]> = {
  silverstone: [
    { site: "screen", slug: "oxford", place: "Oxford" },
    { site: "honeymoon", slug: "cotswolds", place: "The Cotswolds" },
  ],
  zandvoort: [{ site: "pets", slug: "amsterdam", place: "Amsterdam" }],
  monza: [
    { site: "screen", slug: "lake-como", place: LAKE_COMO },
    { site: "honeymoon", slug: "lake-como", place: LAKE_COMO },
    { site: "pets", slug: "milan", place: MILAN },
  ],
  spielberg: [
    { site: "snow", slug: "schladming", place: "Schladming" },
    { site: "pets", slug: "graz", place: "Graz" },
  ],
  monaco: [
    { site: "pets", slug: "menton", place: "Menton" },
    { site: "honeymoon", slug: "cote-dazur", place: "The Côte d'Azur" },
  ],
  barcelona: [{ site: "pets", slug: "barcelona", place: "Barcelona" }],
  madrid: [
    { site: "pets", slug: "madrid", place: "Madrid" },
    { site: "screen", slug: "madrid", place: "Madrid" },
  ],
  hungaroring: [{ site: "pets", slug: "budapest", place: "Budapest" }],
  imola: [{ site: "pets", slug: "bologna", place: "Bologna" }],
  assen: [{ site: "pets", slug: "groningen", place: "Groningen" }],
  mugello: [
    { site: "screen", slug: "tuscany", place: TUSCANY },
    { site: "honeymoon", slug: "tuscany", place: TUSCANY },
    { site: "pets", slug: "florence", place: FLORENCE },
  ],
  jerez: [
    { site: "pets", slug: "cadiz", place: "Cádiz" },
    { site: "screen", slug: "seville", place: SEVILLE },
  ],
  misano: [{ site: "pets", slug: "rimini", place: "Rimini" }],
  sachsenring: [{ site: "pets", slug: "dresden", place: "Dresden" }],
  portimao: [
    { site: "pets", slug: "portimao", place: "Portimão" },
    { site: "honeymoon", slug: "algarve", place: "The Algarve" },
  ],
  suzuka: [{ site: "honeymoon", slug: "japan", place: JAPAN }],
  interlagos: [{ site: "honeymoon", slug: "brazil", place: BRAZIL }],
  singapore: [
    { site: "screen", slug: "singapore", place: "Singapore" },
    { site: "honeymoon", slug: "singapore", place: "Singapore" },
  ],
  montreal: [{ site: "honeymoon", slug: "quebec", place: "Québec" }],
  mexico: [
    { site: "screen", slug: "mexico-city", place: "Mexico City" },
    { site: "honeymoon", slug: "mexico", place: MEXICO },
  ],
  lasvegas: [{ site: "screen", slug: "las-vegas", place: "Las Vegas" }],
  abudhabi: [
    { site: "screen", slug: "abu-dhabi", place: "Abu Dhabi" },
    { site: "pets", slug: "abu-dhabi", place: "Abu Dhabi" },
    { site: "honeymoon", slug: "uae", place: "Abu Dhabi" },
  ],
  melbourne: [{ site: "honeymoon", slug: "australia", place: AUSTRALIA }],
  miami: [{ site: "pets", slug: "miami", place: "Miami" }],
  phillipisland: [{ site: "honeymoon", slug: "australia", place: AUSTRALIA }],
  mandalika: [{ site: "honeymoon", slug: "bali", place: "Bali & Lombok" }],
};

export const NETWORK_HEADING: L = {
  en: "More for your trip",
  fr: "Pour le reste de votre voyage",
  nl: "Meer voor je reis",
  de: "Mehr für Ihre Reise",
  it: "Altro per il vostro viaggio",
  es: "Más para tu viaje",
};

export const NETWORK_SUB: L = {
  en: "Sister sites from our travel network, for the same destination.",
  fr: "Nos sites partenaires du même réseau, sur la même destination.",
  nl: "Zustersites uit ons reisnetwerk, voor dezelfde bestemming.",
  de: "Partnerseiten aus unserem Reisenetzwerk, für dasselbe Reiseziel.",
  it: "Siti del nostro stesso network di viaggio, sulla stessa destinazione.",
  es: "Sitios hermanos de nuestra red de viajes, para el mismo destino.",
};

export type ResolvedNetLink = { name: string; url: string; blurb: string };

export const networkLinks = (circuitKey: string, locale: Locale): ResolvedNetLink[] =>
  (NETWORK[circuitKey] ?? []).map((l) => {
    const site = SITE[l.site];
    return {
      name: site.name,
      url: site.url(l.slug),
      blurb: site.blurb[locale](placeOf(l.place, locale)),
    };
  });
