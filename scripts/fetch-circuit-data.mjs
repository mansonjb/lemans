/**
 * Builds a circuit's accommodation dataset from the Apify Google Places
 * crawler (compass/crawler-google-places): discovers hotels / campsites /
 * guest houses near a circuit, categorises them, computes distance + a
 * drive-time estimate from the circuit, downloads one photo each, and writes a
 * JSON manifest for review. ~$0.0015/place, so a whole circuit is a few cents.
 *
 *   node scripts/fetch-circuit-data.mjs <circuitKey>
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CIRCUITS = {
  silverstone: { name: "Silverstone Circuit", lat: 52.0786, lng: -1.0169 },
  spa: { name: "Spa-Francorchamps circuit", lat: 50.4372, lng: 5.9714 },
  zandvoort: { name: "Circuit Zandvoort", lat: 52.3888, lng: 4.5409 },
  nurburgring: { name: "Nürburgring", lat: 50.3356, lng: 6.9475 },
  monza: { name: "Autodromo Nazionale Monza", lat: 45.6156, lng: 9.2811 },
  spielberg: { name: "Red Bull Ring Spielberg", lat: 47.2197, lng: 14.7647 },
  monaco: { name: "Circuit de Monaco", lat: 43.7347, lng: 7.4206 },
  barcelona: { name: "Circuit de Barcelona-Catalunya", lat: 41.57, lng: 2.2611 },
  madrid: { name: "IFEMA Madrid", lat: 40.4657, lng: -3.616 },
  hungaroring: { name: "Hungaroring", lat: 47.5789, lng: 19.2486 },
  imola: { name: "Autodromo Imola", lat: 44.3439, lng: 11.7167 },
  assen: { name: "TT Circuit Assen", lat: 52.9592, lng: 6.5236 },
  mugello: { name: "Mugello Circuit", lat: 43.9975, lng: 11.3719 },
  jerez: { name: "Circuito de Jerez", lat: 36.7083, lng: -6.0344 },
  misano: { name: "Misano World Circuit", lat: 43.9614, lng: 12.6839 },
  sachsenring: { name: "Sachsenring", lat: 50.7917, lng: 12.6883 },
  portimao: { name: "Autodromo Internacional do Algarve", lat: 37.227, lng: -8.6267 },
  aragon: { name: "MotorLand Aragon", lat: 41.0817, lng: -0.205 },
  balaton: { name: "Balaton Park Circuit", lat: 47.0417, lng: 18.1389 },
  suzuka: {
    name: "Suzuka Circuit",
    lat: 34.8431,
    lng: 136.5407,
    queries: [
      "hotels near Suzuka Circuit",
      "hotels in Suzuka, Mie",
      "hotels in Shiroko Suzuka",
      "hotels in Yokkaichi",
      "business hotels in Tsu Mie",
    ],
  },
  cota: { name: "Circuit of the Americas", lat: 30.1328, lng: -97.6411 },
  interlagos: { name: "Autodromo Jose Carlos Pace Interlagos", lat: -23.7036, lng: -46.6997 },
  singapore: {
    name: "Marina Bay Street Circuit",
    lat: 1.2914,
    lng: 103.864,
    queries: [
      "hotels near Marina Bay Street Circuit Singapore",
      "hotels in Marina Bay Singapore",
      "hotels near Suntec City Singapore",
      "hotels in Bugis Singapore",
      "hotels in Chinatown Singapore",
    ],
  },
  montreal: {
    name: "Circuit Gilles Villeneuve",
    lat: 45.5,
    lng: -73.5228,
    queries: [
      "hotels near Circuit Gilles Villeneuve Montreal",
      "hotels in downtown Montreal",
      "hotels in Old Montreal",
      "hotels near Parc Jean-Drapeau Montreal",
      "hotels near Palais des congres Montreal",
    ],
  },
  mexico: {
    name: "Autodromo Hermanos Rodriguez",
    lat: 19.4042,
    lng: -99.0907,
    queries: [
      "hotels near Autodromo Hermanos Rodriguez Mexico City",
      "hotels in Roma Norte Mexico City",
      "hotels in Condesa Mexico City",
      "hotels near Mexico City airport",
      "hotels in Centro Historico Mexico City",
    ],
  },
  lasvegas: {
    name: "Las Vegas Strip Circuit",
    lat: 36.11,
    lng: -115.166,
    queries: [
      "hotels on the Las Vegas Strip",
      "resorts Las Vegas Strip",
      "hotels near Las Vegas Convention Center",
      "hotels near Harry Reid International Airport",
      "hotels in downtown Las Vegas",
    ],
  },
  abudhabi: {
    name: "Yas Marina Circuit",
    lat: 24.4672,
    lng: 54.6031,
    queries: [
      "hotels on Yas Island Abu Dhabi",
      "hotels near Yas Marina Circuit",
      "hotels in Abu Dhabi",
      "hotels near Yas Mall Abu Dhabi",
      "hotels near Abu Dhabi airport",
    ],
  },
  jeddah: {
    name: "Jeddah Corniche Circuit",
    lat: 21.6319,
    lng: 39.1044,
    queries: [
      "hotels near Jeddah Corniche",
      "hotels in Jeddah",
      "hotels near Jeddah Corniche Circuit",
      "hotels on Jeddah waterfront",
      "hotels near King Abdulaziz Airport Jeddah",
    ],
  },
  bahrain: {
    name: "Bahrain International Circuit Sakhir",
    lat: 26.0325,
    lng: 50.5106,
    queries: [
      "hotels near Bahrain International Circuit",
      "hotels in Manama Bahrain",
      "hotels in Zallaq Bahrain",
      "hotels near Sakhir Bahrain",
      "resorts Bahrain",
    ],
  },
  melbourne: {
    name: "Albert Park Circuit Melbourne",
    lat: -37.8497,
    lng: 144.968,
    queries: [
      "hotels near Albert Park Melbourne",
      "hotels in Melbourne CBD",
      "hotels in St Kilda Melbourne",
      "hotels in Southbank Melbourne",
      "hotels near Melbourne city centre",
    ],
  },
  shanghai: {
    name: "Shanghai International Circuit",
    lat: 31.3389,
    lng: 121.22,
    queries: [
      "hotels near Shanghai International Circuit",
      "hotels in Jiading Shanghai",
      "hotels in Anting Shanghai",
      "hotels in Shanghai",
      "hotels near Shanghai Hongqiao",
    ],
  },
  miami: {
    name: "Miami International Autodrome Hard Rock Stadium",
    lat: 25.958,
    lng: -80.2389,
    queries: [
      "hotels near Hard Rock Stadium Miami Gardens",
      "hotels in Miami Gardens",
      "hotels in Aventura Florida",
      "hotels in downtown Miami",
      "hotels near Miami airport",
    ],
  },
  baku: {
    name: "Baku City Circuit",
    lat: 40.3725,
    lng: 49.8533,
    queries: [
      "hotels near Baku Boulevard",
      "hotels in Baku old city",
      "hotels in central Baku",
      "hotels near Baku City Circuit",
      "hotels near Heydar Aliyev Airport Baku",
    ],
  },
  qatar: {
    name: "Lusail International Circuit",
    lat: 25.49,
    lng: 51.4542,
    queries: [
      "hotels in Lusail Qatar",
      "hotels in Doha West Bay",
      "hotels near Lusail Stadium",
      "hotels in The Pearl Qatar",
      "hotels in Doha",
    ],
  },
  phillipisland: {
    name: "Phillip Island Grand Prix Circuit",
    lat: -38.499,
    lng: 145.231,
    queries: [
      "hotels in Cowes Phillip Island",
      "accommodation Phillip Island",
      "hotels in San Remo Victoria",
      "hotels near Phillip Island Grand Prix Circuit",
      "motels Phillip Island Victoria",
    ],
  },
  sepang: {
    name: "Sepang International Circuit",
    lat: 2.7608,
    lng: 101.7382,
    queries: [
      "hotels near Sepang International Circuit",
      "hotels near KLIA airport",
      "hotels in Sepang Malaysia",
      "hotels in Cyberjaya",
      "hotels in Putrajaya",
    ],
  },
  mandalika: {
    name: "Pertamina Mandalika Circuit Lombok",
    lat: -8.8975,
    lng: 116.301,
    queries: [
      "hotels in Kuta Lombok",
      "hotels near Mandalika Circuit",
      "resorts Mandalika Lombok",
      "hotels near Lombok airport",
      "hotels in Kuta Mandalika",
    ],
  },
};

const key = process.argv[2];
const circuit = CIRCUITS[key];
if (!circuit) {
  console.error(`Unknown circuit "${key}". Options: ${Object.keys(CIRCUITS).join(", ")}`);
  process.exit(1);
}

async function loadToken() {
  if (process.env.APIFY_TOKEN) return process.env.APIFY_TOKEN;
  const env = await readFile(path.join(ROOT, ".env.local"), "utf-8");
  const m = env.match(/APIFY_TOKEN=(.+)/);
  if (!m) throw new Error("No APIFY_TOKEN in .env.local");
  return m[1].trim();
}

const slugify = (s) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const toRad = (d) => (d * Math.PI) / 180;
function km(aLat, aLng, bLat, bLng) {
  const R = 6371;
  const dLat = toRad(bLat - aLat), dLng = toRad(bLng - aLng);
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)));
}

function kindOf(cat) {
  const c = (cat || "").toLowerCase();
  if (/camp|caravan|holiday park/.test(c)) return "camping";
  if (/bed & breakfast|guest house|guesthouse|cottage|vacation|holiday home|lodge|inn$|b&b/.test(c))
    return "rental";
  if (/hotel|resort|motel|inn|hostel/.test(c)) return "hotel";
  return null;
}

function tierFromStars(stars, score) {
  if (stars >= 4) return 3;
  if (stars <= 2 && stars > 0) return 1;
  if (score && score >= 4.5) return 3;
  if (score && score < 3.8) return 1;
  return 2;
}

async function runActor(token) {
  const input = {
    searchStringsArray: circuit.queries ?? [
      `hotels near ${circuit.name}`,
      `campsites near ${circuit.name}`,
      `guest houses near ${circuit.name}`,
    ],
    maxCrawledPlacesPerSearch: 25,
    language: "en",
    maxImages: 1,
    skipClosedPlaces: true,
  };
  console.log(`  scraping Apify for ${key} …`);
  const res = await fetch(
    `https://api.apify.com/v2/acts/compass~crawler-google-places/run-sync-get-dataset-items?token=${token}`,
    { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(input) }
  );
  if (!res.ok) throw new Error(`Apify HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

async function downloadPhoto(url, outPath) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`img ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  await sharp(buf)
    .resize(800, 500, { fit: "cover", position: "centre" })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(outPath);
}

const token = await loadToken();
const raw = await runActor(token);
console.log(`  ${raw.length} raw places`);

const OUT_IMG = path.join(ROOT, "public", "images", "circuits", key);
await mkdir(OUT_IMG, { recursive: true });

const seen = new Set();
const out = [];
for (const p of raw) {
  const kind = kindOf(p.categoryName);
  if (!kind) continue;
  const loc = p.location;
  if (!p.title || !loc?.lat) continue;
  const slug = slugify(p.title);
  if (seen.has(slug)) continue;
  seen.add(slug);
  const distKm = km(circuit.lat, circuit.lng, loc.lat, loc.lng);
  if (distKm > 90) continue; // drop far outliers / mismatched results
  const driveMin = distKm <= 1.4 ? 0 : Math.max(3, Math.round(distKm * 1.15));
  const ring = driveMin === 0 ? 1 : driveMin <= 15 ? 1 : driveMin <= 30 ? 2 : driveMin <= 60 ? 3 : 4;
  let photo = false;
  const img = (p.imageUrls || [])[0] || p.imageUrl;
  if (img) {
    try {
      if (!existsSync(path.join(OUT_IMG, `${slug}.jpg`)))
        await downloadPhoto(img, path.join(OUT_IMG, `${slug}.jpg`));
      photo = true;
    } catch {}
    await sleep(60);
  }
  out.push({
    name: p.title,
    slug,
    kind,
    category: tierFromStars(p.hotelStars || 0, p.totalScore || 0),
    city: p.city || null,
    lat: loc.lat,
    lng: loc.lng,
    distKm,
    driveMin,
    ring,
    score: p.totalScore || null,
    stars: p.hotelStars || null,
    photo,
  });
}

out.sort((a, b) => a.distKm - b.distKm);
const manifest = path.join(__dirname, `_circuit-${key}.json`);
await writeFile(manifest, JSON.stringify(out, null, 2));

const byKind = out.reduce((m, h) => ((m[h.kind] = (m[h.kind] || 0) + 1), m), {});
const cities = [...new Set(out.map((h) => h.city).filter(Boolean))];
console.log(`\n${"─".repeat(50)}`);
console.log(`✅ ${out.length} establishments  ${JSON.stringify(byKind)}`);
console.log(`📸 photos: ${out.filter((h) => h.photo).length}/${out.length}`);
console.log(`📍 zones (cities): ${cities.length} → ${cities.slice(0, 12).join(", ")}`);
console.log(`💾 ${manifest}`);
console.log(`💰 ~${(raw.length * 0.0015).toFixed(3)} $ Apify (${raw.length} places scraped)`);
