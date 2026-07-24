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
import { madridHotels, madridZones } from "./circuits/madrid";
import { hungaroringHotels, hungaroringZones } from "./circuits/hungaroring";
import { imolaHotels, imolaZones } from "./circuits/imola";
import { assenHotels, assenZones } from "./circuits/assen";
import { mugelloHotels, mugelloZones } from "./circuits/mugello";
import { jerezHotels, jerezZones } from "./circuits/jerez";
import { misanoHotels, misanoZones } from "./circuits/misano";
import { sachsenringHotels, sachsenringZones } from "./circuits/sachsenring";
import { portimaoHotels, portimaoZones } from "./circuits/portimao";
import { aragonHotels, aragonZones } from "./circuits/aragon";
import { balatonHotels, balatonZones } from "./circuits/balaton";
import { suzukaHotels, suzukaZones } from "./circuits/suzuka";
import { cotaHotels, cotaZones } from "./circuits/cota";
import { interlagosHotels, interlagosZones } from "./circuits/interlagos";
import { singaporeHotels, singaporeZones } from "./circuits/singapore";
import { montrealHotels, montrealZones } from "./circuits/montreal";
import { mexicoHotels, mexicoZones } from "./circuits/mexico";
import { lasvegasHotels, lasvegasZones } from "./circuits/lasvegas";
import { abudhabiHotels, abudhabiZones } from "./circuits/abudhabi";
import { jeddahHotels, jeddahZones } from "./circuits/jeddah";
import { bahrainHotels, bahrainZones } from "./circuits/bahrain";
import { melbourneHotels, melbourneZones } from "./circuits/melbourne";
import { shanghaiHotels, shanghaiZones } from "./circuits/shanghai";
import { miamiHotels, miamiZones } from "./circuits/miami";
import { bakuHotels, bakuZones } from "./circuits/baku";
import { qatarHotels, qatarZones } from "./circuits/qatar";
import { phillipislandHotels, phillipislandZones } from "./circuits/phillipisland";
import { sepangHotels, sepangZones } from "./circuits/sepang";
import { mandalikaHotels, mandalikaZones } from "./circuits/mandalika";
import { buriramHotels, buriramZones } from "./circuits/buriram";
import { motegiHotels, motegiZones } from "./circuits/motegi";
import { indianapolisHotels, indianapolisZones } from "./circuits/indianapolis";
import { termasHotels, termasZones } from "./circuits/termas";
import { isleofmanHotels, isleofmanZones } from "./circuits/isleofman";
import { daytonaHotels, daytonaZones } from "./circuits/daytona";
import { bathurstHotels, bathurstZones } from "./circuits/bathurst";
import { longbeachHotels, longbeachZones } from "./circuits/longbeach";
import { kyalamiHotels, kyalamiZones } from "./circuits/kyalami";

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
  lat: number;
  lng: number;
  /** Local photo path, or "" when none was captured. */
  img: string;
}

export interface CircuitZone {
  key: string;
  name: string;
  driveMin: number;
  ring: number;
  count: number;
  /** Centroid of the zone's stays, for centring a map on the town. */
  lat: number;
  lng: number;
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

export interface CircuitTravel {
  /** Nearest useful airports, closest first. */
  airports: { code: string; name: string; driveMin: number }[];
  /** Nearby train stations (proper nouns, locale-neutral). */
  rail: string[];
  /** Motorway references, e.g. "A4 / A52". */
  roads: string;
}

export interface CircuitData {
  key: string;
  /** Headline event — drives the circuit hub and its zone pages. */
  event: CircuitEvent;
  /** Additional races at the same circuit, each with its own landing +
   *  event×zone pages (e.g. the 6 Hours of Spa, the Catalan MotoGP). */
  extraEvents?: CircuitEvent[];
  travel: CircuitTravel;
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
    travel: {
      airports: [
        { code: "LTN", name: "London Luton", driveMin: 45 },
        { code: "BHX", name: "Birmingham", driveMin: 50 },
        { code: "LHR", name: "London Heathrow", driveMin: 75 },
      ],
      rail: ["Milton Keynes Central", "Banbury", "Northampton"],
      roads: "A43 / M40 / M1",
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
    extraEvents: [
      {
        name: "6 Hours of Spa",
        checkin: "2026-05-07",
        checkout: "2026-05-10",
        window: "Early May",
        crowd: "60,000+",
        bookAhead: "3-6 months",
      },
      {
        name: "24 Hours of Spa",
        checkin: "2026-06-25",
        checkout: "2026-06-29",
        window: "Late June",
        crowd: "100,000+",
        bookAhead: "4-6 months",
      },
    ],
    travel: {
      airports: [
        { code: "LGG", name: "Liège", driveMin: 50 },
        { code: "CGN", name: "Cologne/Bonn", driveMin: 80 },
        { code: "BRU", name: "Brussels", driveMin: 90 },
      ],
      rail: ["Verviers-Central", "Liège-Guillemins"],
      roads: "A27 / E42",
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
    travel: {
      airports: [{ code: "AMS", name: "Amsterdam Schiphol", driveMin: 40 }],
      rail: ["Zandvoort aan Zee", "Haarlem"],
      roads: "A5 / A9 / N200",
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
    travel: {
      airports: [
        { code: "CGN", name: "Cologne/Bonn", driveMin: 60 },
        { code: "HHN", name: "Frankfurt-Hahn", driveMin: 70 },
        { code: "FRA", name: "Frankfurt", driveMin: 105 },
      ],
      rail: ["Koblenz", "Mayen Ost"],
      roads: "A1 / A48 / B258",
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
    travel: {
      airports: [
        { code: "LIN", name: "Milan Linate", driveMin: 30 },
        { code: "BGY", name: "Bergamo", driveMin: 45 },
        { code: "MXP", name: "Milan Malpensa", driveMin: 60 },
      ],
      rail: ["Monza", "Milano Centrale"],
      roads: "A4 / A52",
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
    extraEvents: [
      {
        name: "Austrian MotoGP",
        checkin: "2026-08-13",
        checkout: "2026-08-17",
        window: "Mid August",
        crowd: "200,000+",
        bookAhead: "6-9 months",
      },
    ],
    travel: {
      airports: [
        { code: "GRZ", name: "Graz", driveMin: 60 },
        { code: "KLU", name: "Klagenfurt", driveMin: 75 },
        { code: "VIE", name: "Vienna", driveMin: 120 },
      ],
      rail: ["Knittelfeld", "Zeltweg"],
      roads: "S36 / A9",
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
    travel: {
      airports: [{ code: "NCE", name: "Nice Côte d'Azur", driveMin: 30 }],
      rail: ["Monaco-Monte-Carlo", "Nice-Ville"],
      roads: "A8",
    },
    zones: monacoZones,
    hotels: monacoHotels,
  },
  barcelona: {
    key: "barcelona",
    event: {
      name: "Barcelona Grand Prix",
      checkin: "2026-06-11",
      checkout: "2026-06-15",
      window: "Mid June",
      crowd: "270,000+",
      bookAhead: "6-9 months",
    },
    extraEvents: [
      {
        name: "Catalan MotoGP",
        checkin: "2026-09-17",
        checkout: "2026-09-21",
        window: "Late September",
        crowd: "150,000+",
        bookAhead: "4-6 months",
      },
    ],
    travel: {
      airports: [
        { code: "BCN", name: "Barcelona El Prat", driveMin: 40 },
        { code: "GRO", name: "Girona", driveMin: 50 },
        { code: "REU", name: "Reus", driveMin: 90 },
      ],
      rail: ["Montmeló", "Granollers Centre"],
      roads: "AP-7 / C-17",
    },
    zones: barcelonaZones,
    hotels: barcelonaHotels,
  },
  madrid: {
    key: "madrid",
    event: {
      name: "Spanish Grand Prix",
      checkin: "2026-09-10",
      checkout: "2026-09-14",
      window: "Mid September",
      crowd: "110,000+/day",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "MAD", name: "Madrid-Barajas", driveMin: 10 }],
      rail: ["Feria de Madrid (Metro L8)", "Madrid Atocha"],
      roads: "A-2 / M-11 / M-40",
    },
    zones: madridZones,
    hotels: madridHotels,
  },
  hungaroring: {
    key: "hungaroring",
    event: {
      name: "Hungarian Grand Prix",
      checkin: "2026-07-30",
      checkout: "2026-08-03",
      window: "Late July",
      crowd: "300,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "BUD", name: "Budapest", driveMin: 30 }],
      rail: ["Budapest-Keleti", "Gödöllő"],
      roads: "M3 / M31",
    },
    zones: hungaroringZones,
    hotels: hungaroringHotels,
  },
  imola: {
    key: "imola",
    event: {
      name: "6 Hours of Imola",
      checkin: "2026-04-16",
      checkout: "2026-04-20",
      window: "April",
      crowd: "70,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "BLQ", name: "Bologna", driveMin: 40 },
        { code: "FLR", name: "Florence", driveMin: 90 },
      ],
      rail: ["Imola", "Bologna Centrale"],
      roads: "A14",
    },
    zones: imolaZones,
    hotels: imolaHotels,
  },
  assen: {
    key: "assen",
    event: {
      name: "Dutch TT",
      checkin: "2026-06-25",
      checkout: "2026-06-29",
      window: "Late June",
      crowd: "150,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "GRQ", name: "Groningen Eelde", driveMin: 25 },
        { code: "AMS", name: "Amsterdam Schiphol", driveMin: 120 },
      ],
      rail: ["Assen", "Groningen"],
      roads: "A28",
    },
    zones: assenZones,
    hotels: assenHotels,
  },
  mugello: {
    key: "mugello",
    event: {
      name: "Italian MotoGP",
      checkin: "2026-05-28",
      checkout: "2026-06-01",
      window: "Late May",
      crowd: "150,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "FLR", name: "Florence", driveMin: 60 },
        { code: "BLQ", name: "Bologna", driveMin: 75 },
        { code: "PSA", name: "Pisa", driveMin: 110 },
      ],
      rail: ["Firenze S.M.N.", "Borgo San Lorenzo"],
      roads: "A1 / SP551",
    },
    zones: mugelloZones,
    hotels: mugelloHotels,
  },
  jerez: {
    key: "jerez",
    event: {
      name: "Spanish MotoGP",
      checkin: "2026-04-30",
      checkout: "2026-05-04",
      window: "Late April",
      crowd: "160,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "XRY", name: "Jerez", driveMin: 15 },
        { code: "SVQ", name: "Seville", driveMin: 75 },
      ],
      rail: ["Jerez de la Frontera", "Cádiz"],
      roads: "A-4 / AP-4",
    },
    zones: jerezZones,
    hotels: jerezHotels,
  },
  misano: {
    key: "misano",
    event: {
      name: "San Marino MotoGP",
      checkin: "2026-09-10",
      checkout: "2026-09-14",
      window: "Early September",
      crowd: "160,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "RMI", name: "Rimini", driveMin: 15 },
        { code: "BLQ", name: "Bologna", driveMin: 90 },
        { code: "AOI", name: "Ancona", driveMin: 90 },
      ],
      rail: ["Riccione", "Rimini"],
      roads: "A14",
    },
    zones: misanoZones,
    hotels: misanoHotels,
  },
  sachsenring: {
    key: "sachsenring",
    event: {
      name: "German MotoGP",
      checkin: "2026-07-09",
      checkout: "2026-07-13",
      window: "Mid July",
      crowd: "230,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "DRS", name: "Dresden", driveMin: 75 },
        { code: "LEJ", name: "Leipzig/Halle", driveMin: 75 },
      ],
      rail: ["Chemnitz", "Hohenstein-Ernstthal"],
      roads: "A4 / A72",
    },
    zones: sachsenringZones,
    hotels: sachsenringHotels,
  },
  portimao: {
    key: "portimao",
    event: {
      name: "Portuguese MotoGP",
      checkin: "2026-11-05",
      checkout: "2026-11-09",
      window: "November",
      crowd: "80,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "FAO", name: "Faro", driveMin: 50 },
        { code: "LIS", name: "Lisbon", driveMin: 165 },
      ],
      rail: ["Portimão", "Faro"],
      roads: "A22",
    },
    zones: portimaoZones,
    hotels: portimaoHotels,
  },
  aragon: {
    key: "aragon",
    event: {
      name: "Aragon MotoGP",
      checkin: "2026-09-04",
      checkout: "2026-09-07",
      window: "September",
      crowd: "60,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "ZAZ", name: "Zaragoza", driveMin: 90 },
        { code: "REU", name: "Reus", driveMin: 120 },
        { code: "BCN", name: "Barcelona", driveMin: 180 },
      ],
      rail: ["Zaragoza-Delicias", "Caspe"],
      roads: "N-211 / A-23",
    },
    zones: aragonZones,
    hotels: aragonHotels,
  },
  balaton: {
    key: "balaton",
    event: {
      name: "Balaton MotoGP",
      checkin: "2026-08-20",
      checkout: "2026-08-24",
      window: "Late August",
      crowd: "New for 2026",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "BUD", name: "Budapest", driveMin: 75 },
        { code: "SOB", name: "Hévíz-Balaton", driveMin: 45 },
      ],
      rail: ["Balatonfőkajár", "Siófok"],
      roads: "M7",
    },
    zones: balatonZones,
    hotels: balatonHotels,
  },
  suzuka: {
    key: "suzuka",
    event: {
      name: "Japanese Grand Prix",
      checkin: "2027-04-08",
      checkout: "2027-04-12",
      window: "Early April",
      crowd: "260,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [
        { code: "NGO", name: "Nagoya Centrair", driveMin: 55 },
        { code: "KIX", name: "Kansai (Osaka)", driveMin: 110 },
      ],
      rail: ["Suzuka Circuit Ino", "Shiroko", "Nagoya"],
      roads: "E23 (Higashi-Meihan) / Suzuka IC",
    },
    zones: suzukaZones,
    hotels: suzukaHotels,
  },
  cota: {
    key: "cota",
    event: {
      name: "United States Grand Prix",
      checkin: "2026-10-22",
      checkout: "2026-10-26",
      window: "Late October",
      crowd: "400,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "AUS", name: "Austin-Bergstrom", driveMin: 20 }],
      rail: ["Austin Downtown (CapMetro)"],
      roads: "TX-130 / SH 71 / US-183",
    },
    zones: cotaZones,
    hotels: cotaHotels,
  },
  interlagos: {
    key: "interlagos",
    event: {
      name: "São Paulo Grand Prix",
      checkin: "2026-11-05",
      checkout: "2026-11-09",
      window: "Early November",
      crowd: "250,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [
        { code: "CGH", name: "São Paulo Congonhas", driveMin: 25 },
        { code: "GRU", name: "São Paulo Guarulhos", driveMin: 55 },
      ],
      rail: ["Autódromo (CPTM Line 9)", "Santo Amaro"],
      roads: "Marginal Pinheiros / Rod. dos Imigrantes",
    },
    zones: interlagosZones,
    hotels: interlagosHotels,
  },
  singapore: {
    key: "singapore",
    event: {
      name: "Singapore Grand Prix",
      checkin: "2026-10-01",
      checkout: "2026-10-05",
      window: "Early October",
      crowd: "270,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "SIN", name: "Singapore Changi", driveMin: 20 }],
      rail: ["Marina Bay (MRT)", "Esplanade (MRT)", "City Hall (MRT)"],
      roads: "ECP / Marina Boulevard",
    },
    zones: singaporeZones,
    hotels: singaporeHotels,
  },
  montreal: {
    key: "montreal",
    event: {
      name: "Canadian Grand Prix",
      checkin: "2027-06-10",
      checkout: "2027-06-14",
      window: "Mid June",
      crowd: "345,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "YUL", name: "Montréal-Trudeau", driveMin: 25 }],
      rail: ["Jean-Drapeau (Metro)", "Berri-UQAM", "Gare Centrale"],
      roads: "Pont de la Concorde / A-720",
    },
    zones: montrealZones,
    hotels: montrealHotels,
  },
  mexico: {
    key: "mexico",
    event: {
      name: "Mexico City Grand Prix",
      checkin: "2026-10-29",
      checkout: "2026-11-02",
      window: "Late October",
      crowd: "400,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "MEX", name: "Mexico City (Benito Juárez)", driveMin: 15 }],
      rail: ["Ciudad Deportiva (Metro L9)", "Velódromo (Metro L9)"],
      roads: "Viaducto Río de la Piedad / Circuito Interior",
    },
    zones: mexicoZones,
    hotels: mexicoHotels,
  },
  lasvegas: {
    key: "lasvegas",
    event: {
      name: "Las Vegas Grand Prix",
      checkin: "2026-11-19",
      checkout: "2026-11-23",
      window: "Late November",
      crowd: "300,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "LAS", name: "Harry Reid (Las Vegas)", driveMin: 10 }],
      rail: ["Las Vegas Monorail"],
      roads: "I-15 / Las Vegas Blvd (The Strip)",
    },
    zones: lasvegasZones,
    hotels: lasvegasHotels,
  },
  abudhabi: {
    key: "abudhabi",
    event: {
      name: "Abu Dhabi Grand Prix",
      checkin: "2026-12-03",
      checkout: "2026-12-07",
      window: "Early December",
      crowd: "190,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [
        { code: "AUH", name: "Abu Dhabi Zayed", driveMin: 15 },
        { code: "DXB", name: "Dubai", driveMin: 70 },
      ],
      rail: [],
      roads: "E10 (Yas Island) / Sheikh Khalifa Hwy",
    },
    zones: abudhabiZones,
    hotels: abudhabiHotels,
  },
  jeddah: {
    key: "jeddah",
    event: {
      name: "Saudi Arabian Grand Prix",
      checkin: "2027-03-18",
      checkout: "2027-03-22",
      window: "Mid March",
      crowd: "100,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "JED", name: "Jeddah (King Abdulaziz)", driveMin: 30 }],
      rail: ["Jeddah (Haramain HSR)"],
      roads: "Corniche Road / Prince Faisal bin Fahd Rd",
    },
    zones: jeddahZones,
    hotels: jeddahHotels,
  },
  bahrain: {
    key: "bahrain",
    event: {
      name: "Bahrain Grand Prix",
      checkin: "2027-03-04",
      checkout: "2027-03-08",
      window: "Early March",
      crowd: "100,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "BAH", name: "Bahrain International", driveMin: 35 }],
      rail: [],
      roads: "Zallaq Hwy / Sheikh Isa bin Salman Hwy",
    },
    zones: bahrainZones,
    hotels: bahrainHotels,
  },
  melbourne: {
    key: "melbourne",
    event: {
      name: "Australian Grand Prix",
      checkin: "2027-03-11",
      checkout: "2027-03-15",
      window: "Mid March",
      crowd: "450,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "MEL", name: "Melbourne Tullamarine", driveMin: 30 }],
      rail: ["Flinders Street", "Southern Cross"],
      roads: "M1 (West Gate Fwy) / Lakeside Drive",
    },
    zones: melbourneZones,
    hotels: melbourneHotels,
  },
  shanghai: {
    key: "shanghai",
    event: {
      name: "Chinese Grand Prix",
      checkin: "2027-04-15",
      checkout: "2027-04-19",
      window: "Mid April",
      crowd: "200,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [
        { code: "SHA", name: "Shanghai Hongqiao", driveMin: 30 },
        { code: "PVG", name: "Shanghai Pudong", driveMin: 75 },
      ],
      rail: ["Shanghai Circuit (Metro L11)", "Jiading Xincheng"],
      roads: "G1501 / S5 Hujia Expressway",
    },
    zones: shanghaiZones,
    hotels: shanghaiHotels,
  },
  miami: {
    key: "miami",
    event: {
      name: "Miami Grand Prix",
      checkin: "2027-05-06",
      checkout: "2027-05-10",
      window: "Early May",
      crowd: "270,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [
        { code: "MIA", name: "Miami International", driveMin: 25 },
        { code: "FLL", name: "Fort Lauderdale", driveMin: 25 },
      ],
      rail: ["Miami Gardens (Tri-Rail)", "Golden Glades"],
      roads: "I-95 / Florida's Turnpike",
    },
    zones: miamiZones,
    hotels: miamiHotels,
  },
  baku: {
    key: "baku",
    event: {
      name: "Azerbaijan Grand Prix",
      checkin: "2026-09-17",
      checkout: "2026-09-21",
      window: "Mid September",
      crowd: "100,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [{ code: "GYD", name: "Baku Heydar Aliyev", driveMin: 30 }],
      rail: ["Sahil (Metro)", "28 May (Metro)"],
      roads: "Neftchilar Avenue / H-1",
    },
    zones: bakuZones,
    hotels: bakuHotels,
  },
  qatar: {
    key: "qatar",
    event: {
      name: "Qatar Grand Prix",
      checkin: "2026-11-26",
      checkout: "2026-11-30",
      window: "Late November",
      crowd: "100,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "DOH", name: "Doha Hamad", driveMin: 40 }],
      rail: ["Lusail QNB (Metro Red Line)", "Legtaifiya"],
      roads: "Lusail Expressway / Al Khor Coastal Rd",
    },
    zones: qatarZones,
    hotels: qatarHotels,
  },
  phillipisland: {
    key: "phillipisland",
    event: {
      name: "Australian MotoGP",
      checkin: "2026-10-15",
      checkout: "2026-10-19",
      window: "Mid October",
      crowd: "90,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [{ code: "MEL", name: "Melbourne Tullamarine", driveMin: 140 }],
      rail: [],
      roads: "Bass Highway / Phillip Island Road",
    },
    zones: phillipislandZones,
    hotels: phillipislandHotels,
  },
  sepang: {
    key: "sepang",
    event: {
      name: "Malaysian MotoGP",
      checkin: "2026-10-29",
      checkout: "2026-11-02",
      window: "Late October",
      crowd: "160,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "KUL", name: "Kuala Lumpur (KLIA)", driveMin: 15 }],
      rail: ["Salak Tinggi (ERL)", "KL Sentral"],
      roads: "ELITE Highway / KLIA Expressway",
    },
    zones: sepangZones,
    hotels: sepangHotels,
  },
  mandalika: {
    key: "mandalika",
    event: {
      name: "Indonesian MotoGP",
      checkin: "2026-10-01",
      checkout: "2026-10-05",
      window: "Early October",
      crowd: "100,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "LOP", name: "Lombok International", driveMin: 20 }],
      rail: [],
      roads: "Bypass BIL-Mandalika / Kuta Lombok Road",
    },
    zones: mandalikaZones,
    hotels: mandalikaHotels,
  },
  buriram: {
    key: "buriram",
    event: {
      name: "Thai MotoGP",
      checkin: "2027-03-03",
      checkout: "2027-03-07",
      window: "Early March",
      crowd: "130,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [{ code: "BFV", name: "Buriram", driveMin: 30 }],
      rail: ["Buriram"],
      roads: "Highway 218 / Buriram Ring Road",
    },
    zones: buriramZones,
    hotels: buriramHotels,
  },
  motegi: {
    key: "motegi",
    event: {
      name: "Japanese MotoGP",
      checkin: "2026-10-01",
      checkout: "2026-10-05",
      window: "Early October",
      crowd: "90,000+",
      bookAhead: "4-6 months",
    },
    travel: {
      airports: [
        { code: "IBR", name: "Ibaraki", driveMin: 50 },
        { code: "NRT", name: "Tokyo Narita", driveMin: 95 },
      ],
      rail: ["Utsunomiya (Shinkansen)", "Mito"],
      roads: "Kitakanto Expressway / Route 123",
    },
    zones: motegiZones,
    hotels: motegiHotels,
  },
  indianapolis: {
    key: "indianapolis",
    event: {
      name: "Indianapolis 500",
      checkin: "2027-05-27",
      checkout: "2027-05-31",
      window: "Late May",
      crowd: "300,000+",
      bookAhead: "6-9 months",
    },
    travel: {
      airports: [{ code: "IND", name: "Indianapolis", driveMin: 20 }],
      rail: [],
      roads: "I-465 / I-65 / Crawfordsville Rd",
    },
    zones: indianapolisZones,
    hotels: indianapolisHotels,
  },
  termas: {
    key: "termas",
    event: {
      name: "Argentine MotoGP",
      checkin: "2027-03-17",
      checkout: "2027-03-21",
      window: "Mid March",
      crowd: "100,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "RHD", name: "Termas de Río Hondo", driveMin: 15 },
        { code: "SDE", name: "Santiago del Estero", driveMin: 65 },
      ],
      rail: [],
      roads: "RN9 / RP1",
    },
    zones: termasZones,
    hotels: termasHotels,
  },
  isleofman: {
    key: "isleofman",
    event: {
      name: "Isle of Man TT",
      checkin: "2027-05-29",
      checkout: "2027-06-06",
      window: "Late May",
      crowd: "45,000+",
      bookAhead: "12+ months",
    },
    travel: {
      airports: [{ code: "IOM", name: "Isle of Man (Ronaldsway)", driveMin: 15 }],
      rail: [],
      roads: "Ferry to Douglas / A18 Mountain Road",
    },
    zones: isleofmanZones,
    hotels: isleofmanHotels,
  },
  daytona: {
    key: "daytona",
    event: {
      name: "24 Hours of Daytona",
      checkin: "2027-01-28",
      checkout: "2027-02-01",
      window: "Late January",
      crowd: "50,000+",
      bookAhead: "3-6 months",
    },
    extraEvents: [
      {
        name: "Daytona 500",
        checkin: "2027-02-11",
        checkout: "2027-02-16",
        window: "Mid February",
        crowd: "100,000+",
        bookAhead: "6-9 months",
      },
    ],
    travel: {
      airports: [
        { code: "DAB", name: "Daytona Beach", driveMin: 10 },
        { code: "MCO", name: "Orlando", driveMin: 75 },
      ],
      rail: [],
      roads: "I-95 / I-4 / US-92 (International Speedway Blvd)",
    },
    zones: daytonaZones,
    hotels: daytonaHotels,
  },
  bathurst: {
    key: "bathurst",
    event: {
      name: "Bathurst 12 Hour",
      checkin: "2027-02-04",
      checkout: "2027-02-08",
      window: "Early February",
      crowd: "40,000+",
      bookAhead: "3-6 months",
    },
    extraEvents: [
      {
        name: "Bathurst 1000",
        checkin: "2027-10-07",
        checkout: "2027-10-11",
        window: "Early October",
        crowd: "200,000+",
        bookAhead: "6-9 months",
      },
    ],
    travel: {
      airports: [
        { code: "BHS", name: "Bathurst", driveMin: 10 },
        { code: "SYD", name: "Sydney", driveMin: 180 },
      ],
      rail: ["Bathurst"],
      roads: "Great Western Highway / Mitchell Highway",
    },
    zones: bathurstZones,
    hotels: bathurstHotels,
  },
  longbeach: {
    key: "longbeach",
    event: {
      name: "Long Beach Grand Prix",
      checkin: "2027-04-15",
      checkout: "2027-04-19",
      window: "Mid April",
      crowd: "180,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "LGB", name: "Long Beach", driveMin: 10 },
        { code: "SNA", name: "Santa Ana (Orange County)", driveMin: 30 },
        { code: "LAX", name: "Los Angeles", driveMin: 40 },
      ],
      rail: ["Downtown Long Beach (Metro A Line)"],
      roads: "I-710 / I-405 / Shoreline Drive",
    },
    zones: longbeachZones,
    hotels: longbeachHotels,
  },
  kyalami: {
    key: "kyalami",
    event: {
      name: "Kyalami 9 Hour",
      checkin: "2027-11-25",
      checkout: "2027-11-29",
      window: "Late November",
      crowd: "30,000+",
      bookAhead: "3-6 months",
    },
    travel: {
      airports: [
        { code: "JNB", name: "Johannesburg (O.R. Tambo)", driveMin: 35 },
        { code: "HLA", name: "Lanseria", driveMin: 25 },
      ],
      rail: ["Midrand (Gautrain)"],
      roads: "N1 / M71 (Allandale Road)",
    },
    zones: kyalamiZones,
    hotels: kyalamiHotels,
  },
};

export const circuitData = (key: string): CircuitData | undefined => DATA[key];

/** Circuit keys that render through the generic circuit guide template. */
export const hasCircuitData = (key: string): boolean => key in DATA;

export const circuitDataList = (): CircuitData[] => Object.values(DATA);

/**
 * Money / filter pages generated per circuit, as predicates over its stays.
 * A page is only created when enough stays match (see registry), so no thin
 * pages ship.
 */
export const CIRCUIT_FILTERS = [
  { key: "hotels", match: (h: CircuitHotel) => h.kind === "hotel" },
  { key: "campsites", match: (h: CircuitHotel) => h.kind === "camping" },
  { key: "walking-distance", match: (h: CircuitHotel) => h.ring === 1 },
  { key: "cheap", match: (h: CircuitHotel) => h.category === 1 },
  {
    key: "family",
    match: (h: CircuitHotel) => h.kind === "rental" || h.kind === "camping",
  },
  {
    key: "luxury",
    match: (h: CircuitHotel) => h.category === 3 && h.kind === "hotel",
  },
] as const;

export type CircuitFilterKey = (typeof CIRCUIT_FILTERS)[number]["key"];

export const circuitFilterHotels = (
  data: CircuitData,
  key: string
): CircuitHotel[] => {
  const f = CIRCUIT_FILTERS.find((x) => x.key === key);
  return f ? data.hotels.filter(f.match) : [];
};

/** Stays in a given zone, closest first (already sorted in the data). */
export const circuitZoneHotels = (
  data: CircuitData,
  zoneKey: string
): CircuitHotel[] => data.hotels.filter((h) => h.zone === zoneKey);

/** Real towns that get their own page (every zone but the no-city catch-all).
 *  Even a 1-stay town is worth a page: its Stay22 map shows all live local
 *  inventory, not just our scraped sample. */
export const circuitPageZones = (data: CircuitData): CircuitZone[] =>
  data.zones.filter((z) => z.key !== "circuit-area");

/** URL-safe slug for an event, derived from its name. */
export const eventSlug = (e: CircuitEvent): string =>
  e.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Extra races at a circuit (everything but the headline event). */
export const circuitExtraEvents = (data: CircuitData): CircuitEvent[] =>
  data.extraEvents ?? [];

/** Find an extra event by its slug. */
export const circuitEventBySlug = (
  data: CircuitData,
  slug: string
): CircuitEvent | undefined =>
  circuitExtraEvents(data).find((e) => eventSlug(e) === slug);
