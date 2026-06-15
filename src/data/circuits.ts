/**
 * The circuit network. Le Mans is the live flagship; the rest of the first
 * wave is being built out. As each circuit ships its full data (zones, hotels,
 * photos, content), flip its status to "live" and wire its routes.
 */
export interface Circuit {
  key: string;
  name: string;
  /** URL segment, e.g. /en/silverstone/... */
  slug: string;
  country: string;
  /** Emoji flag for quick visual scanning. */
  flag: string;
  lat: number;
  lng: number;
  /** Headline event(s) held at the circuit. */
  events: string;
  status: "live" | "soon";
}

export const CIRCUITS: Circuit[] = [
  {
    key: "le-mans",
    name: "Le Mans",
    slug: "le-mans",
    country: "France",
    flag: "🇫🇷",
    lat: 47.956,
    lng: 0.2074,
    events: "24 Hours of Le Mans · French MotoGP · Le Mans Classic",
    status: "live",
  },
  {
    key: "silverstone",
    name: "Silverstone",
    slug: "silverstone",
    country: "United Kingdom",
    flag: "🇬🇧",
    lat: 52.0786,
    lng: -1.0169,
    events: "British Grand Prix",
    status: "soon",
  },
  {
    key: "spa",
    name: "Spa-Francorchamps",
    slug: "spa-francorchamps",
    country: "Belgium",
    flag: "🇧🇪",
    lat: 50.4372,
    lng: 5.9714,
    events: "Belgian Grand Prix · 6 Hours of Spa",
    status: "soon",
  },
  {
    key: "zandvoort",
    name: "Zandvoort",
    slug: "zandvoort",
    country: "Netherlands",
    flag: "🇳🇱",
    lat: 52.3888,
    lng: 4.5409,
    events: "Dutch Grand Prix",
    status: "soon",
  },
  {
    key: "nurburgring",
    name: "Nürburgring",
    slug: "nurburgring",
    country: "Germany",
    flag: "🇩🇪",
    lat: 50.3356,
    lng: 6.9475,
    events: "Nürburgring 24 Hours",
    status: "soon",
  },
  {
    key: "monza",
    name: "Monza",
    slug: "monza",
    country: "Italy",
    flag: "🇮🇹",
    lat: 45.6156,
    lng: 9.2811,
    events: "Italian Grand Prix",
    status: "soon",
  },
  {
    key: "spielberg",
    name: "Red Bull Ring",
    slug: "spielberg",
    country: "Austria",
    flag: "🇦🇹",
    lat: 47.2197,
    lng: 14.7647,
    events: "Austrian Grand Prix · MotoGP",
    status: "soon",
  },
  {
    key: "monaco",
    name: "Monaco",
    slug: "monaco",
    country: "Monaco",
    flag: "🇲🇨",
    lat: 43.7347,
    lng: 7.4206,
    events: "Monaco Grand Prix",
    status: "soon",
  },
  {
    key: "barcelona",
    name: "Barcelona-Catalunya",
    slug: "barcelona",
    country: "Spain",
    flag: "🇪🇸",
    lat: 41.57,
    lng: 2.2611,
    events: "Spanish Grand Prix · MotoGP",
    status: "soon",
  },
];

export const liveCircuits = (): Circuit[] =>
  CIRCUITS.filter((c) => c.status === "live");
export const circuitByKey = (key: string): Circuit | undefined =>
  CIRCUITS.find((c) => c.key === key);
