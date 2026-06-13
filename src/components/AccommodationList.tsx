import type { Hotel, RaceEvent } from "@/lib/types";
import { bookingUrl } from "@/lib/booking";
import { placeByKey } from "@/data/places";
import { hotelSlug } from "@/data/hotels";
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

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {hotels.map((h) => {
          const place = placeByKey(h.zone);
          const drive =
            place?.ring === 1
              ? labels.walk
              : place
                ? labels.minToCircuit(place.driveMin)
                : null;
          const slug = hotelSlug(h.name);
          return (
            <a
              key={`${h.zone}-${h.name}`}
              href={bookingUrl(h, event, adults)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div className="relative h-24 w-full overflow-hidden bg-paper">
                {hasHotelImage(slug) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={hotelImageSrc(slug)}
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
                {drive && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-ink/85 px-2 py-0.5 text-[11px] font-semibold text-white">
                    <span className="text-amber">▸</span>
                    {drive}
                  </span>
                )}
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
