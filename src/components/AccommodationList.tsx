import type { Hotel, RaceEvent } from "@/lib/types";
import { bookingUrl } from "@/lib/booking";
import { placeByKey } from "@/data/places";

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
          return (
            <a
              key={`${h.zone}-${h.name}`}
              href={bookingUrl(h, event, adults)}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="group flex flex-col justify-between rounded-xl border border-line bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-sm px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${KIND_TONE[h.kind]}`}
                  >
                    {labels.kind[h.kind]}
                  </span>
                  <span className="font-display text-sm font-semibold tabular-nums text-amber">
                    {"€".repeat(h.category)}
                    <span className="text-line">{"€".repeat(3 - h.category)}</span>
                  </span>
                  {drive && (
                    <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-paper px-2 py-0.5 text-[11px] font-semibold text-muted">
                      <span className="text-bleu">▸</span>
                      {drive}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-semibold leading-tight">{h.name}</h3>
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
