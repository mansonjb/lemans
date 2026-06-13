import type { Hotel, RaceEvent } from "@/lib/types";
import { bookingUrl } from "@/lib/booking";

interface Labels {
  seePrice: string;
  /** "%s" replaced by the count */
  heading: string;
  sub: string;
  category: Record<1 | 2 | 3, string>;
  kind: Record<"hotel" | "camping" | "rental", string>;
  disclaimer: string;
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
        {hotels.map((h) => (
          <a
            key={`${h.zone}-${h.name}`}
            href={bookingUrl(h, event, adults)}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-sm px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                    KIND_TONE[h.kind]
                  }`}
                >
                  {labels.kind[h.kind]}
                </span>
                <span className="font-display text-sm font-semibold tabular-nums text-amber">
                  {"€".repeat(h.category)}
                  <span className="text-line">{"€".repeat(3 - h.category)}</span>
                </span>
              </div>
              <h3 className="mt-1.5 truncate font-semibold leading-tight">
                {h.name}
              </h3>
              <p className="mt-0.5 truncate text-[13px] text-muted">{h.note}</p>
            </div>
            <span className="shrink-0 rounded-lg bg-ink px-3 py-2 text-center font-display text-xs font-bold uppercase leading-tight tracking-wide text-white transition group-hover:bg-bleu">
              {labels.seePrice}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted">
        {labels.disclaimer}
      </p>
    </div>
  );
}
