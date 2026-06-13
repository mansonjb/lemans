interface Labels {
  heading: string;
  intro: string;
  airportsHeading: string;
  searchKiwi: string;
  searchSkyscanner: string;
  widgetPending: string;
  disclaimer: string;
}

/** Airports within reach of Le Mans, ordered by usefulness. */
const AIRPORTS = [
  { code: "CDG", city: "Paris CDG", note: "TGV 1h05 → Le Mans" },
  { code: "ORY", city: "Paris Orly", note: "~2h15 by road" },
  { code: "NTE", city: "Nantes", note: "~1h45 by road" },
  { code: "RNS", city: "Rennes", note: "~1h30 by road" },
  { code: "TUF", city: "Tours", note: "~1h by road" },
];

/**
 * Flight search block. The official Kiwi.com / Skyscanner partner widget
 * drops into the marked slot once the affiliate id is available; until then
 * the deep-link buttons below are fully functional and monetisable.
 */
export function FlightWidget({ labels }: { labels: Labels }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      <div className="h-1.5 bg-gradient-to-r from-bleu via-amber to-ink" />
      <div className="p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold uppercase italic tracking-tight">
          {labels.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
          {labels.intro}
        </p>

        {/* === Partner widget slot ===
            Paste the Kiwi.com (Tequila) or Skyscanner widget snippet here.
            Replace this placeholder block with the <script>/<iframe> embed. */}
        <div
          id="flight-widget-slot"
          className="mt-6 flex min-h-28 items-center justify-center rounded-xl border-2 border-dashed border-line bg-paper px-4 py-6 text-center text-sm text-muted"
        >
          {labels.widgetPending}
        </div>

        <p className="mt-8 font-display text-sm font-semibold uppercase tracking-wide text-muted">
          {labels.airportsHeading}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AIRPORTS.map((a) => (
            <div
              key={a.code}
              className="rounded-xl border border-line bg-paper p-4"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-sm bg-ink px-1.5 py-0.5 font-display text-xs font-bold tracking-wide text-white">
                  {a.code}
                </span>
                <span className="font-semibold">{a.city}</span>
              </div>
              <p className="mt-1 text-[13px] text-muted">{a.note}</p>
              <div className="mt-3 flex gap-2">
                <a
                  href={`https://www.kiwi.com/en/search/results/anywhere/${a.city.toLowerCase()}-france`}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="flex-1 rounded-lg bg-bleu px-2 py-1.5 text-center font-display text-xs font-bold uppercase tracking-wide text-white transition hover:bg-bleu-deep"
                >
                  {labels.searchKiwi}
                </a>
                <a
                  href={`https://www.skyscanner.net/transport/flights-to/${a.code.toLowerCase()}/`}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="flex-1 rounded-lg border border-line bg-card px-2 py-1.5 text-center font-display text-xs font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
                >
                  {labels.searchSkyscanner}
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          {labels.disclaimer}
        </p>
      </div>
    </div>
  );
}
