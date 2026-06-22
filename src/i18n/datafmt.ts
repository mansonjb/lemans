/**
 * Localise the free-text English fields stored in CircuitData / Circuit
 * (country, race window, "X months", crowd phrases, event names) so circuit
 * pages read naturally in every language. Numbers pass through untouched.
 */
import type { Locale } from "@/lib/types";

type L = Record<Locale, string>;

const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

/* ------------------------------- countries ------------------------------- */
const COUNTRIES: Record<string, L> = {
  France: { en: "France", fr: "France", nl: "Frankrijk", de: "Frankreich", it: "Francia", es: "Francia" },
  "United Kingdom": { en: "United Kingdom", fr: "Royaume-Uni", nl: "Verenigd Koninkrijk", de: "Vereinigtes Königreich", it: "Regno Unito", es: "Reino Unido" },
  Belgium: { en: "Belgium", fr: "Belgique", nl: "België", de: "Belgien", it: "Belgio", es: "Bélgica" },
  Netherlands: { en: "Netherlands", fr: "Pays-Bas", nl: "Nederland", de: "Niederlande", it: "Paesi Bassi", es: "Países Bajos" },
  Germany: { en: "Germany", fr: "Allemagne", nl: "Duitsland", de: "Deutschland", it: "Germania", es: "Alemania" },
  Italy: { en: "Italy", fr: "Italie", nl: "Italië", de: "Italien", it: "Italia", es: "Italia" },
  Austria: { en: "Austria", fr: "Autriche", nl: "Oostenrijk", de: "Österreich", it: "Austria", es: "Austria" },
  Monaco: { en: "Monaco", fr: "Monaco", nl: "Monaco", de: "Monaco", it: "Monaco", es: "Mónaco" },
  Spain: { en: "Spain", fr: "Espagne", nl: "Spanje", de: "Spanien", it: "Spagna", es: "España" },
  Hungary: { en: "Hungary", fr: "Hongrie", nl: "Hongarije", de: "Ungarn", it: "Ungheria", es: "Hungría" },
  Portugal: { en: "Portugal", fr: "Portugal", nl: "Portugal", de: "Portugal", it: "Portogallo", es: "Portugal" },
};

export const fmtCountry = (country: string, locale: Locale): string =>
  COUNTRIES[country]?.[locale] ?? country;

/* ------------------------------ race window ------------------------------ */
const MONTHS: Record<string, L> = {
  january: { en: "January", fr: "janvier", nl: "januari", de: "Januar", it: "gennaio", es: "enero" },
  february: { en: "February", fr: "février", nl: "februari", de: "Februar", it: "febbraio", es: "febrero" },
  march: { en: "March", fr: "mars", nl: "maart", de: "März", it: "marzo", es: "marzo" },
  april: { en: "April", fr: "avril", nl: "april", de: "April", it: "aprile", es: "abril" },
  may: { en: "May", fr: "mai", nl: "mei", de: "Mai", it: "maggio", es: "mayo" },
  june: { en: "June", fr: "juin", nl: "juni", de: "Juni", it: "giugno", es: "junio" },
  july: { en: "July", fr: "juillet", nl: "juli", de: "Juli", it: "luglio", es: "julio" },
  august: { en: "August", fr: "août", nl: "augustus", de: "August", it: "agosto", es: "agosto" },
  september: { en: "September", fr: "septembre", nl: "september", de: "September", it: "settembre", es: "septiembre" },
  october: { en: "October", fr: "octobre", nl: "oktober", de: "Oktober", it: "ottobre", es: "octubre" },
  november: { en: "November", fr: "novembre", nl: "november", de: "November", it: "novembre", es: "noviembre" },
  december: { en: "December", fr: "décembre", nl: "december", de: "Dezember", it: "dicembre", es: "diciembre" },
};
const POSITIONS: Record<string, L> = {
  early: { en: "Early", fr: "début", nl: "begin", de: "Anfang", it: "inizio", es: "principios de" },
  mid: { en: "Mid", fr: "mi", nl: "half", de: "Mitte", it: "metà", es: "mediados de" },
  late: { en: "Late", fr: "fin", nl: "eind", de: "Ende", it: "fine", es: "finales de" },
};

/** "Late August" → "Fin août" / "Ende August" / etc.; "April" → "Avril". */
export const fmtWindow = (window: string, locale: Locale): string => {
  const m = window.match(/^(Early|Mid|Late)\s+(.+)$/i);
  const monthKey = (m ? m[2] : window).trim().toLowerCase();
  const month = MONTHS[monthKey]?.[locale] ?? (m ? m[2] : window);
  if (!m) return cap(month);
  const pos = POSITIONS[m[1].toLowerCase()]?.[locale] ?? m[1];
  const joined =
    locale === "fr" && m[1].toLowerCase() === "mid"
      ? `mi-${month}`
      : `${pos} ${month}`;
  return cap(joined);
};

/* ------------------------------- book ahead ------------------------------ */
const MONTHS_WORD: L = { en: "months", fr: "mois", nl: "maanden", de: "Monate", it: "mesi", es: "meses" };

/** "9-12 months" → "9-12 mois" / "9-12 Monate" … (the range is kept). */
export const fmtBookAhead = (bookAhead: string, locale: Locale): string =>
  bookAhead.replace(/months?/i, MONTHS_WORD[locale]);

/* -------------------------------- crowd --------------------------------- */
const CROWD: Record<string, L> = {
  "New for 2026": { en: "New for 2026", fr: "Nouveau en 2026", nl: "Nieuw in 2026", de: "Neu 2026", it: "Novità 2026", es: "Nuevo en 2026" },
};
export const fmtCrowd = (crowd: string, locale: Locale): string =>
  CROWD[crowd]?.[locale] ?? crowd;

/* ------------------------------ event names ------------------------------ */
const EVENTS: Record<string, L> = {
  "British Grand Prix": { en: "British Grand Prix", fr: "Grand Prix de Grande-Bretagne", nl: "Grand Prix van Groot-Brittannië", de: "Großer Preis von Großbritannien", it: "Gran Premio di Gran Bretagna", es: "Gran Premio de Gran Bretaña" },
  "Belgian Grand Prix": { en: "Belgian Grand Prix", fr: "Grand Prix de Belgique", nl: "Grand Prix van België", de: "Großer Preis von Belgien", it: "Gran Premio del Belgio", es: "Gran Premio de Bélgica" },
  "Dutch Grand Prix": { en: "Dutch Grand Prix", fr: "Grand Prix des Pays-Bas", nl: "Grand Prix van Nederland", de: "Großer Preis der Niederlande", it: "Gran Premio d'Olanda", es: "Gran Premio de los Países Bajos" },
  "Nürburgring 24 Hours": { en: "Nürburgring 24 Hours", fr: "24 Heures du Nürburgring", nl: "24 uur van de Nürburgring", de: "24-Stunden-Rennen Nürburgring", it: "24 Ore del Nürburgring", es: "24 Horas de Nürburgring" },
  "Italian Grand Prix": { en: "Italian Grand Prix", fr: "Grand Prix d'Italie", nl: "Grand Prix van Italië", de: "Großer Preis von Italien", it: "Gran Premio d'Italia", es: "Gran Premio de Italia" },
  "Austrian Grand Prix": { en: "Austrian Grand Prix", fr: "Grand Prix d'Autriche", nl: "Grand Prix van Oostenrijk", de: "Großer Preis von Österreich", it: "Gran Premio d'Austria", es: "Gran Premio de Austria" },
  "Monaco Grand Prix": { en: "Monaco Grand Prix", fr: "Grand Prix de Monaco", nl: "Grand Prix van Monaco", de: "Großer Preis von Monaco", it: "Gran Premio di Monaco", es: "Gran Premio de Mónaco" },
  "Barcelona Grand Prix": { en: "Barcelona Grand Prix", fr: "Grand Prix de Barcelone", nl: "Grand Prix van Barcelona", de: "Großer Preis von Barcelona", it: "Gran Premio di Barcellona", es: "Gran Premio de Barcelona" },
  "Spanish Grand Prix": { en: "Spanish Grand Prix", fr: "Grand Prix d'Espagne", nl: "Grand Prix van Spanje", de: "Großer Preis von Spanien", it: "Gran Premio di Spagna", es: "Gran Premio de España" },
  "Hungarian Grand Prix": { en: "Hungarian Grand Prix", fr: "Grand Prix de Hongrie", nl: "Grand Prix van Hongarije", de: "Großer Preis von Ungarn", it: "Gran Premio d'Ungheria", es: "Gran Premio de Hungría" },
  "6 Hours of Imola": { en: "6 Hours of Imola", fr: "6 Heures d'Imola", nl: "6 uur van Imola", de: "6-Stunden-Rennen von Imola", it: "6 Ore di Imola", es: "6 Horas de Imola" },
  "6 Hours of Spa": { en: "6 Hours of Spa", fr: "6 Heures de Spa", nl: "6 uur van Spa", de: "6-Stunden-Rennen von Spa", it: "6 Ore di Spa", es: "6 Horas de Spa" },
  "24 Hours of Spa": { en: "24 Hours of Spa", fr: "24 Heures de Spa", nl: "24 uur van Spa", de: "24-Stunden-Rennen von Spa", it: "24 Ore di Spa", es: "24 Horas de Spa" },
  "Dutch TT": { en: "Dutch TT", fr: "Dutch TT", nl: "Dutch TT", de: "Dutch TT", it: "Dutch TT", es: "Dutch TT" },
  "Italian MotoGP": { en: "Italian MotoGP", fr: "MotoGP d'Italie", nl: "Italiaanse MotoGP", de: "MotoGP von Italien", it: "MotoGP d'Italia", es: "MotoGP de Italia" },
  "Spanish MotoGP": { en: "Spanish MotoGP", fr: "MotoGP d'Espagne", nl: "Spaanse MotoGP", de: "MotoGP von Spanien", it: "MotoGP di Spagna", es: "MotoGP de España" },
  "San Marino MotoGP": { en: "San Marino MotoGP", fr: "MotoGP de Saint-Marin", nl: "MotoGP van San Marino", de: "MotoGP von San Marino", it: "MotoGP di San Marino", es: "MotoGP de San Marino" },
  "German MotoGP": { en: "German MotoGP", fr: "MotoGP d'Allemagne", nl: "Duitse MotoGP", de: "MotoGP von Deutschland", it: "MotoGP di Germania", es: "MotoGP de Alemania" },
  "Portuguese MotoGP": { en: "Portuguese MotoGP", fr: "MotoGP du Portugal", nl: "Portugese MotoGP", de: "MotoGP von Portugal", it: "MotoGP del Portogallo", es: "MotoGP de Portugal" },
  "Aragon MotoGP": { en: "Aragon MotoGP", fr: "MotoGP d'Aragon", nl: "MotoGP van Aragón", de: "MotoGP von Aragón", it: "MotoGP d'Aragona", es: "MotoGP de Aragón" },
  "Balaton MotoGP": { en: "Balaton MotoGP", fr: "MotoGP de Balaton", nl: "MotoGP van Balaton", de: "MotoGP von Balaton", it: "MotoGP di Balaton", es: "MotoGP de Balatón" },
  "Austrian MotoGP": { en: "Austrian MotoGP", fr: "MotoGP d'Autriche", nl: "Oostenrijkse MotoGP", de: "MotoGP von Österreich", it: "MotoGP d'Austria", es: "MotoGP de Austria" },
  "Catalan MotoGP": { en: "Catalan MotoGP", fr: "MotoGP de Catalogne", nl: "Catalaanse MotoGP", de: "MotoGP von Katalonien", it: "MotoGP della Catalogna", es: "MotoGP de Cataluña" },
};
export const fmtEvent = (name: string, locale: Locale): string =>
  EVENTS[name]?.[locale] ?? name;

/** Localise a " · "-joined events string (used by the circuit network). */
export const fmtEvents = (events: string, locale: Locale): string =>
  events
    .split(" · ")
    .map((e) => fmtEvent(e.trim(), locale))
    .join(" · ");
