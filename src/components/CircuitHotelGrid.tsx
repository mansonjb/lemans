import type { CircuitHotel } from "@/data/circuit-data";

interface GridLabels {
  kind: Record<"hotel" | "camping" | "rental", string>;
  seePrice: string;
  disclaimer: string;
  atCircuit: string;
  minLabel: (min: number) => string;
}

const KIND_TONE: Record<string, string> = {
  hotel: "bg-bleu/10 text-bleu",
  camping: "bg-grass/10 text-grass",
  rental: "bg-amber/15 text-[color:#9a6b00]",
};

const KIND_ICON: Record<string, string> = {
  hotel: "🏨",
  camping: "⛺",
  rental: "🏡",
};

/**
 * Booking.com search pre-filled with the establishment, its town and the race
 * dates. The global Stay22 "letmeallez" script rewrites these into affiliate
 * links on click, so no aid is needed here.
 */
function circuitBookingUrl(
  hotel: CircuitHotel,
  town: string,
  event: { checkin: string; checkout: string }
): string {
  const params = new URLSearchParams({
    ss: `${hotel.name}, ${town}`,
    group_adults: "2",
    group_children: "0",
    no_rooms: "1",
    checkin: event.checkin,
    checkout: event.checkout,
  });
  return `https://www.booking.com/searchresults.html?${params.toString()}`;
}

export function CircuitHotelGrid({
  hotels,
  zoneNames,
  event,
  labels,
}: {
  hotels: CircuitHotel[];
  zoneNames: Record<string, string>;
  event: { checkin: string; checkout: string };
  labels: GridLabels;
}) {
  if (!hotels.length) return null;
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {hotels.map((h) => {
          const town = zoneNames[h.zone] ?? "";
          return (
            <a
              key={h.slug}
              href={circuitBookingUrl(h, town, event)}
              target="_blank"
              rel="nofollow sponsored noopener"
              data-stay={h.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div className="relative h-28 w-full overflow-hidden bg-paper">
                {h.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={h.img}
                    alt={h.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-card to-paper text-3xl">
                    {KIND_ICON[h.kind]}
                  </div>
                )}
                <span
                  className={`absolute left-2 top-2 rounded-sm bg-white/90 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${KIND_TONE[h.kind]}`}
                >
                  {labels.kind[h.kind]}
                </span>
                {h.score != null && (
                  <span className="absolute right-2 top-2 rounded-sm bg-ink/85 px-1.5 py-0.5 text-[11px] font-bold tabular-nums text-white">
                    ★ {h.score.toFixed(1)}
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
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-2.5 text-[12px]">
                    <span className="font-semibold text-ink">
                      {h.driveMin === 0 ? (
                        <>📍 {labels.atCircuit}</>
                      ) : (
                        <>🚗 {labels.minLabel(h.driveMin)}</>
                      )}
                    </span>
                    {town && <span className="text-muted">{town}</span>}
                  </div>
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
