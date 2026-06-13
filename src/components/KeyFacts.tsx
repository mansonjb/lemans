export interface Fact {
  label: string;
  value: string;
  accent?: boolean;
}

/**
 * Answer-box style fact grid. Scannable for users and highly extractable for
 * generative engines (concise label/value pairs of concrete data).
 */
export function KeyFacts({ title, facts }: { title: string; facts: Fact[] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-5 py-3">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber" />
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">
          {title}
        </h2>
      </div>
      <dl className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="px-5 py-4">
            <dt className="text-[11px] uppercase tracking-wide text-muted">
              {f.label}
            </dt>
            <dd
              className={`mt-1 font-display text-xl font-bold italic tabular-nums ${
                f.accent ? "text-signal" : "text-ink"
              }`}
            >
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
