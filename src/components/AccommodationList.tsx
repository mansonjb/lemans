import type { Hotel, RaceEvent } from "@/lib/types";
import { bookingUrl } from "@/lib/booking";
import { placeByKey } from "@/data/places";
import { hotelSlug, zoneImage } from "@/data/hotels";
import { hasHotelImage, hotelImageSrc } from "@/data/hotel-images";
import { HotelThumb } from "./HotelThumb";

interface Labels {
  seePrice: string;
  heading: string;
  sub: string;
  category: Record<1 | 2 | 3, string>;
  kind: Record<"hotel" | "camping" | "rental", string>;
  disclaimer: string;
  walk: string;
  minToCircuit: (min: number) => string;
  transport: {
    toCircuit: string;
    car: string;
    train: string;
    tram: string;
    walk: string;
  };
}

function TransportRow({
  ring,
  driveMin,
  station,
  tram,
  t,
}: {
  ring: number;
  driveMin: number;
  station: boolean;
  tram: boolean;
  t: Labels["transport"];
}) {
  return (
    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-2.5 text-[12px]">
      <span className="font-semibold text-ink">
        {ring === 1 ? (
          <>🚶 {t.walk}</>
        ) : (
          <>
            🚗 {t.car} · {driveMin} min
          </>
        )}
      </span>
      {station && <span className="text-muted">🚆 {t.train}</span>}
      {tram && <span className="text-muted">🚊 {t.tram}</span>}
    </div>
  );
}

const KIND_TONE: Record<string, string> = {
  hotel: "bg-bleu/10 text-bleu",
  camping: "bg-grass/10 text-grass",
  rental: "bg-amber/15 text-[color:#9a6b00]",
};

export function AccommodationList({
  hotels,
  event,
  labels,
  adults = 2,
}: {
  hotels: Hotel[];
  event?: Pick<RaceEvent, "checkin" | "checkout">;
  labels: Labels;
  adults?: number;
}) {
  if (!hotels.length) return null;

  // A fallback (zone) photo must not repeat a photo a real owner already shows
  // on this page, nor be reused twice. Such cards get the illustrated thumb.
  const ownSrcs = new Set(
    hotels
      .filter((h) => hasHotelImage(hotelSlug(h.name)))
      .map((h) => hotelImageSrc(hotelSlug(h.name)))
  );
  const usedFallback = new Set<string>();

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {hotels.map((h) => {
          const place = placeByKey(h.zone);
          const slug = hotelSlug(h.name);
          let img: string | null = null;
          if (hasHotelImage(slug)) {
            img = hotelImageSrc(slug);
          } else {
            const z = zoneImage(h.zone);
            if (z && !ownSrcs.has(z) && !usedFallback.has(z)) {
              img = z;
              usedFallback.add(z);
            }
          }
          return (
            <a
              key={`${h.zone}-${h.name}`}
              href={bookingUrl(h, event, adults)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div className="relative h-24 w-full overflow-hidden bg-paper">
                {img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={img}
                    alt={h.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <HotelThumb hotel={h} className="h-full w-full object-cover" />
                )}
                <span
                  className={`absolute left-2 top-2 rounded-sm bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${KIND_TONE[h.kind]}`}
                >
                  {labels.kind[h.kind]}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <span className="font-display text-sm font-semibold tabular-nums text-amber">
                    {"€".repeat(h.category)}
                    <span className="text-line">{"€".repeat(3 - h.category)}</span>
                  </span>
                  <h3 className="mt-1 font-semibold leading-tight">{h.name}</h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-muted">
                    {h.note}
                  </p>
                  {place && (
                    <TransportRow
                      ring={place.ring}
                      driveMin={place.driveMin}
                      station={!!place.station}
                      tram={!!place.tram}
                      t={labels.transport}
                    />
                  )}
                </div>
                <span className="mt-3 inline-flex items-center justify-center gap-1 rounded-lg bg-ink px-3 py-2 font-display text-xs font-bold uppercase tracking-wide text-white transition group-hover:bg-bleu">
                  {labels.seePrice}
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </a>
          );
        })}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">{labels.disclaimer}</p>
    </div>
  );
}

export function TrustStrip({
  items,
}: {
  items: { icon: string; label: string }[];
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
      {items.map((it) => (
        <span
          key={it.label}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted"
        >
          <span className="text-grass">{it.icon}</span>
          {it.label}
        </span>
      ))}
    </div>
  );
}
