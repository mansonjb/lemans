/**
 * Semantic-cocoon engine: scores how alike two circuits are (championship,
 * region, character) so a hub can bridge to the most similar race weekends.
 * Powers the "related circuits" cards and the in-content cross-links.
 */
import { CIRCUITS, type Circuit } from "./circuits";

export type Series = "f1" | "motogp" | "endurance" | "indycar";

type Meta = { series: Series; region: string; tags: string[] };

/** Headline championship + a loose region bucket + character tags per circuit. */
const META: Record<string, Meta> = {
  "le-mans": { series: "endurance", region: "france", tags: ["classic"] },
  silverstone: { series: "f1", region: "uk", tags: ["classic", "highspeed"] },
  spa: { series: "f1", region: "benelux", tags: ["classic", "highspeed"] },
  zandvoort: { series: "f1", region: "benelux", tags: ["seaside", "classic"] },
  nurburgring: { series: "endurance", region: "germany", tags: ["classic", "alpine"] },
  monza: { series: "f1", region: "italy", tags: ["classic", "highspeed"] },
  spielberg: { series: "f1", region: "alps", tags: ["alpine", "modern"] },
  monaco: { series: "f1", region: "riviera", tags: ["street", "seaside", "party"] },
  barcelona: { series: "f1", region: "iberia", tags: ["classic"] },
  madrid: { series: "f1", region: "iberia", tags: ["street", "modern"] },
  hungaroring: { series: "f1", region: "cee", tags: ["classic"] },
  imola: { series: "endurance", region: "italy", tags: ["classic", "highspeed"] },
  assen: { series: "motogp", region: "benelux", tags: ["classic"] },
  mugello: { series: "motogp", region: "italy", tags: ["classic", "highspeed", "alpine"] },
  jerez: { series: "motogp", region: "iberia", tags: ["classic"] },
  misano: { series: "motogp", region: "italy", tags: ["seaside"] },
  sachsenring: { series: "motogp", region: "germany", tags: ["classic"] },
  portimao: { series: "motogp", region: "iberia", tags: ["modern", "seaside"] },
  aragon: { series: "motogp", region: "iberia", tags: ["modern"] },
  balaton: { series: "motogp", region: "cee", tags: ["modern"] },
  suzuka: { series: "f1", region: "japan", tags: ["classic", "highspeed"] },
  cota: { series: "f1", region: "north-america", tags: ["modern"] },
  interlagos: { series: "f1", region: "south-america", tags: ["classic"] },
  singapore: { series: "f1", region: "sea", tags: ["street", "night", "party"] },
  montreal: { series: "f1", region: "north-america", tags: ["classic", "party"] },
  mexico: { series: "f1", region: "north-america", tags: ["modern"] },
  lasvegas: { series: "f1", region: "north-america", tags: ["street", "night", "highspeed", "party"] },
  abudhabi: { series: "f1", region: "gulf", tags: ["modern", "night", "seaside", "desert"] },
  jeddah: { series: "f1", region: "gulf", tags: ["street", "night", "highspeed", "seaside", "desert"] },
  bahrain: { series: "f1", region: "gulf", tags: ["modern", "night", "desert"] },
  melbourne: { series: "f1", region: "oceania", tags: ["street", "party"] },
  shanghai: { series: "f1", region: "china", tags: ["modern"] },
  miami: { series: "f1", region: "north-america", tags: ["street", "modern", "party", "seaside"] },
  baku: { series: "f1", region: "caucasus", tags: ["street", "highspeed"] },
  qatar: { series: "f1", region: "gulf", tags: ["modern", "night", "desert"] },
  phillipisland: { series: "motogp", region: "oceania", tags: ["classic", "seaside"] },
  sepang: { series: "motogp", region: "sea", tags: ["modern"] },
  mandalika: { series: "motogp", region: "sea", tags: ["street", "seaside", "modern"] },
  buriram: { series: "motogp", region: "sea", tags: ["modern"] },
  motegi: { series: "motogp", region: "japan", tags: ["classic"] },
  indianapolis: { series: "indycar", region: "north-america", tags: ["highspeed", "classic"] },
  termas: { series: "motogp", region: "south-america", tags: ["modern"] },
};

export const seriesOf = (key: string): Series | undefined => META[key]?.series;

const byKey = (key: string): Circuit | undefined =>
  CIRCUITS.find((c) => c.key === key);

const score = (a: Meta, b: Meta): number => {
  let s = 0;
  if (a.series === b.series) s += 3;
  if (a.region === b.region) s += 3;
  s += 2 * a.tags.filter((t) => b.tags.includes(t)).length;
  return s;
};

/** The N most similar circuits, best first (excludes the circuit itself).
 *  A same-country bonus keeps geographic neighbours (and lone-series circuits
 *  like Indianapolis) surfacing across the network, not just same-series ones. */
export const relatedCircuits = (key: string, n = 6): Circuit[] => {
  const me = META[key];
  const self = byKey(key);
  if (!me || !self) return [];
  return CIRCUITS.filter((c) => c.key !== key && META[c.key])
    .map((c) => ({
      c,
      s: score(me, META[c.key]) + (c.country === self.country ? 2 : 0),
    }))
    .sort((x, y) => y.s - x.s || x.c.name.localeCompare(y.c.name))
    .slice(0, n)
    .map((x) => x.c);
};

/** Other circuits in the SAME championship, best-matched first (for prose links). */
export const sameSeriesCircuits = (key: string, n = 4): Circuit[] => {
  const me = META[key];
  if (!me) return [];
  return relatedCircuits(key, 50)
    .filter((c) => META[c.key].series === me.series)
    .slice(0, n);
};

/** Other circuits in the SAME country (for prose links). */
export const sameCountryCircuits = (key: string, n = 3): Circuit[] => {
  const me = byKey(key);
  if (!me) return [];
  return CIRCUITS.filter(
    (c) => c.key !== key && c.country === me.country && META[c.key]
  ).slice(0, n);
};
