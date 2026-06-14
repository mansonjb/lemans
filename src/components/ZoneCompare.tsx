import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import type { Locale, Place } from "@/lib/types";
import { hotelsByZone, zoneImage } from "@/data/hotels";
import { zonePhotos } from "@/data/zone-images";
import { hrefFor } from "@/lib/registry";
import { SpeedHeading } from "./ui";

const RING_STYLE: Record<number, { badge: string; grad: string }> = {
  1: { badge: "bg-grass/10 text-grass", grad: "from-grass to-bleu" },
  2: { badge: "bg-bleu/10 text-bleu", grad: "from-bleu to-bleu-deep" },
  3: { badge: "bg-amber/15 text-[color:#9a6b00]", grad: "from-amber to-signal" },
  4: { badge: "bg-ink/10 text-ink", grad: "from-ink to-bleu-deep" },
};

function Chip({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: "muted" | "signal" | "grass" | "bleu";
}) {
  const tones = {
    muted: "bg-paper text-muted",
    signal: "bg-signal/10 text-signal",
    grass: "bg-grass/10 text-grass",
    bleu: "bg-bleu/10 text-bleu",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

/**
 * Visual zone picker: a photo, a plain-language proximity badge and clearly
 * labelled drive times + parking/transport for each base. Replaces the dense
 * data table so users grasp "where should I stay" at a glance.
 */
export function ZoneCompare({
  places,
  dict,
  locale,
  title,
}: {
  places: Place[];
  dict: Dict;
  locale: Locale;
  title?: string;
}) {
  const xt = x(locale);
  const rows = [...places].sort((a, b) => a.ring - b.ring || a.km - b.km);
  const zoneName = (p: Place) =>
    p.key === "le-mans-city-centre"
      ? "Le Mans"
      : p.key === "circuit-area"
        ? xt.seo.zoneCircuitArea
        : p.name;

  return (
    <section>
      <SpeedHeading>{title ?? xt.seo.compareTitle}</SpeedHeading>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        {xt.seo.compareSub}
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {rows.map((p) => {
          const img = zonePhotos(p.key)[0] ?? zoneImage(p.key);
          const count = hotelsByZone(p.key).length;
          const style = RING_STYLE[p.ring];
          return (
            <Link
              key={p.key}
              href={hrefFor(`place:${p.key}`, locale)}
              className="group flex overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div className="relative w-28 shrink-0 sm:w-32">
                {img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img}
                    alt={zoneName(p)}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${style.grad}`}
                  />
                )}
                <span className="absolute bottom-2 left-2 rounded-md bg-ink/85 px-2 py-0.5 font-display text-xs font-bold text-white tabular-nums">
                  {p.km} km
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold uppercase italic leading-none tracking-tight">
                      {zoneName(p)}
                    </h3>
                    <span
                      className={`mt-1.5 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ${style.badge}`}
                    >
                      {dict.common.ringNames[p.ring]}
                    </span>
                  </div>
                  <span className="shrink-0 text-right">
                    <span className="font-display text-xl font-bold italic tabular-nums text-bleu">
                      {count}
                    </span>
                    <span className="block text-[10px] uppercase tracking-wide text-muted">
                      {xt.seo.stays}
                    </span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.ring !== 1 && (
                    <>
                      <Chip>{dict.common.minToCircuit(p.driveMin)}</Chip>
                      <Chip tone="signal">
                        {dict.common.raceWeekTraffic(p.raceWeekMin)}
                      </Chip>
                    </>
                  )}
                  <Chip>{dict.common.parking[p.parking]}</Chip>
                  {p.station && <Chip tone="bleu">{dict.common.station}</Chip>}
                  {p.tram && <Chip tone="bleu">{dict.common.tram}</Chip>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
