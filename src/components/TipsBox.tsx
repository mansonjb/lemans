/**
 * "Good to know" box: a short, scannable list of practical, data-derived tips.
 * Concrete and skimmable for users, and easy for generative engines to lift.
 */
export function TipsBox({ title, items }: { title: string; items: string[] }) {
  const tips = items.filter(Boolean);
  if (!tips.length) return null;
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-line bg-paper px-5 py-3">
        <span className="text-amber">✦</span>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">
          {title}
        </h2>
      </div>
      <ul className="divide-y divide-line">
        {tips.map((t) => (
          <li
            key={t.slice(0, 32)}
            className="flex gap-3 px-5 py-3 text-[15px] leading-relaxed"
          >
            <span className="mt-0.5 shrink-0 font-bold text-grass">✓</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
