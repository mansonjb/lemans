/**
 * Labels for the internal-linking "cocoon": the related-circuits bridge cards
 * and the in-content cross-links (same championship / same country).
 */
import type { Locale } from "@/lib/types";
import type { Series } from "@/data/related";

type L = Record<Locale, string>;

export const RELATED_HEADING: L = {
  en: "Similar race weekends",
  fr: "Week-ends de course similaires",
  nl: "Vergelijkbare raceweekenden",
  de: "Ähnliche Rennwochenenden",
  it: "Weekend di gara simili",
  es: "Fines de semana de carrera similares",
};

export const RELATED_SUB: L = {
  en: "Other circuits with a similar feel, championship or part of the world.",
  fr: "D'autres circuits au caractère, au championnat ou à la région proches.",
  nl: "Andere circuits met eenzelfde sfeer, kampioenschap of regio.",
  de: "Andere Strecken mit ähnlichem Charakter, Championat oder Weltregion.",
  it: "Altri circuiti per carattere, campionato o area del mondo.",
  es: "Otros circuitos de carácter, campeonato o zona del mundo parecidos.",
};

/** Championship badge (international terms, same in every language). */
export const SERIES_BADGE: Record<Series, string> = {
  f1: "F1",
  motogp: "MotoGP",
  endurance: "Endurance",
  indycar: "IndyCar",
};

/** In-content lead-in before the same-championship links (no trailing colon). */
export const EXPLORE_SERIES: Record<Locale, Record<Series, string>> = {
  en: { f1: "More Formula 1 race weekends", motogp: "More MotoGP rounds", endurance: "More endurance classics", indycar: "More IndyCar race weekends" },
  fr: { f1: "Plus de week-ends de Formule 1", motogp: "Plus de manches MotoGP", endurance: "Plus de classiques d'endurance", indycar: "Plus de week-ends d'IndyCar" },
  nl: { f1: "Meer Formule 1-weekenden", motogp: "Meer MotoGP-races", endurance: "Meer endurance-klassiekers", indycar: "Meer IndyCar-weekenden" },
  de: { f1: "Mehr Formel-1-Rennwochenenden", motogp: "Mehr MotoGP-Rennen", endurance: "Mehr Langstrecken-Klassiker", indycar: "Mehr IndyCar-Rennwochenenden" },
  it: { f1: "Altri weekend di Formula 1", motogp: "Altre gare MotoGP", endurance: "Altri classici endurance", indycar: "Altri weekend di IndyCar" },
  es: { f1: "Más fines de semana de Fórmula 1", motogp: "Más citas de MotoGP", endurance: "Más clásicos de resistencia", indycar: "Más fines de semana de IndyCar" },
};

/** In-content lead-in before the same-country links (no trailing colon). */
export const EXPLORE_COUNTRY: L = {
  en: "More in the same country",
  fr: "Dans le même pays",
  nl: "In hetzelfde land",
  de: "Im selben Land",
  it: "Nello stesso paese",
  es: "En el mismo país",
};
