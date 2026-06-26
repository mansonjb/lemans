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
