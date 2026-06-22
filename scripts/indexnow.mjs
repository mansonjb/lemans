/**
 * Ping IndexNow (Bing, Yandex, Seznam, Naver…) with every site URL for
 * instant crawling. Reads the live sitemap, extracts all localized URLs
 * (incl. hreflang alternates) and bulk-POSTs them in one request.
 *
 * The key file must already be live at https://<host>/<key>.txt (deploy
 * first), otherwise IndexNow returns 403.
 *
 *   node scripts/indexnow.mjs
 */
const KEY = "3d82871a2b01447889e30ea68734d52b";
const HOST = "raceweekstays.com";
const ORIGIN = `https://${HOST}`;

const xml = await fetch(`${ORIGIN}/sitemap.xml`).then((r) => r.text());

const urls = new Set();
for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1].trim());
for (const m of xml.matchAll(/<xhtml:link[^>]*href="([^"]+)"/g))
  urls.add(m[1].trim());

const urlList = [...urls].filter((u) => u.startsWith(ORIGIN));
console.log(`Found ${urlList.length} URLs in the sitemap.`);

const keyOk = await fetch(`${ORIGIN}/${KEY}.txt`).then((r) => r.ok);
if (!keyOk) {
  console.error(`✗ Key file not reachable at ${ORIGIN}/${KEY}.txt — deploy it first.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow → ${res.status} ${res.statusText}`);
// 200 OK / 202 Accepted = success. 403 = key invalid. 422 = URLs not on host.
const body = await res.text();
if (body.trim()) console.log(body.slice(0, 800));
console.log(
  res.ok ? `✓ Submitted ${urlList.length} URLs.` : "✗ Submission failed."
);
