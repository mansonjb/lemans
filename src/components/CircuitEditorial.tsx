import { SpeedHeading } from "@/components/ui";
import type { Circuit } from "@/data/circuits";
import type { CircuitData } from "@/data/circuit-data";
import type { Locale } from "@/lib/types";
import {
  EDITORIAL,
  topStays,
  campingStays,
  priceTiers,
} from "@/data/circuit-editorial";

const TIERS = [
  [1, "€", "Budget", "Glampings and roadside hotels in the inner towns."],
  [2, "€€", "Mid", "The bulk of the choice, inner towns and the city."],
  [3, "€€€", "Premium", "Mostly four-star stays in the city."],
] as const;

/** Rich, data-grounded guide block. Renders only for circuits present in
 *  EDITORIAL (pilot: valencia). Tables derive from the scraped data. */
export function CircuitEditorial({
  circuit,
  data,
}: {
  circuit: Circuit;
  data: CircuitData;
  locale: Locale;
}) {
  const c = EDITORIAL[circuit.key];
  if (!c) return null;
  const zoneName = Object.fromEntries(data.zones.map((z) => [z.key, z.name]));
  const tops = topStays(data);
  const camps = campingStays(data).slice(0, 3);
  const tiers = priceTiers(data);

  return (
    <>
      <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-muted">
        {c.lede}
      </p>

      {/* Where to base */}
      <div className="mt-12">
        <SpeedHeading>Where to base yourself</SpeedHeading>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          {c.basesSub}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {c.bases.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-line bg-card p-5 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold uppercase italic tracking-tight">
                  {b.name}
                </h3>
                <span className="whitespace-nowrap font-display text-sm font-bold tabular-nums text-bleu">
                  {b.drive}
                </span>
              </div>
              <p className="mt-1 text-[13px] font-semibold text-bleu">{b.stays}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Duel */}
      <div className="mt-14">
        <SpeedHeading>
          {c.duel.nearLabel} vs {c.duel.cityLabel}
        </SpeedHeading>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          The one call that shapes the whole weekend. The head-to-head.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch border-b-2 border-ink bg-paper">
            <div className="p-4">
              <div className="font-display text-lg font-bold uppercase italic leading-tight">
                {c.duel.nearLabel}
              </div>
              <div className="text-[13px] text-muted">{c.duel.nearSub}</div>
            </div>
            <div className="flex -skew-x-[10deg] items-center bg-bleu px-4 font-display text-sm font-bold italic text-white">
              <span className="skew-x-[10deg]">VS</span>
            </div>
            <div className="p-4 text-right">
              <div className="font-display text-lg font-bold uppercase italic leading-tight">
                {c.duel.cityLabel}
              </div>
              <div className="text-[13px] text-muted">{c.duel.citySub}</div>
            </div>
          </div>
          {c.duel.rows.map((r) => (
            <div
              key={r.dim}
              className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-line last:border-b-0"
            >
              <div className="px-4 py-3 text-[14px]">{r.near}</div>
              <div className="whitespace-nowrap bg-paper px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-muted">
                {r.dim}
              </div>
              <div className="px-4 py-3 text-right text-[14px]">{r.city}</div>
            </div>
          ))}
          <div className="grid grid-cols-2 border-t-2 border-ink">
            <div className="border-r border-line p-4 text-[14px] text-muted">
              <span className="mb-1 block font-display font-bold uppercase italic text-bleu">
                Pick near if
              </span>
              {c.duel.pickNear}
            </div>
            <div className="p-4 text-[14px] text-muted">
              <span className="mb-1 block font-display font-bold uppercase italic text-bleu">
                Pick the city if
              </span>
              {c.duel.pickCity}
            </div>
          </div>
        </div>
      </div>

      {/* Top-rated stays */}
      {tops.length > 0 && (
        <div className="mt-14">
          <SpeedHeading>Top-rated stays near the circuit</SpeedHeading>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            The best-reviewed of our {data.hotels.length} listed stays, best first.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-card">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr className="bg-paper">
                  <th className="border-b-2 border-ink px-4 py-3 text-left font-display uppercase italic">
                    Stay
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-left font-display uppercase italic">
                    Base
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-right font-display uppercase italic">
                    Drive
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-right font-display uppercase italic">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {tops.map((h) => (
                  <tr key={h.slug} className="border-b border-line last:border-b-0">
                    <td className="px-4 py-3 font-semibold">{h.name}</td>
                    <td className="px-4 py-3 text-muted">
                      {zoneName[h.zone] ?? h.zone}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {h.driveMin} min
                    </td>
                    <td className="px-4 py-3 text-right font-bold tabular-nums text-amber">
                      ★ {h.score?.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Camping & glamping */}
      {camps.length > 0 && (
        <div className="mt-14">
          <SpeedHeading>Camping &amp; glamping</SpeedHeading>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {camps.map((h) => (
              <div
                key={h.slug}
                className="rounded-2xl border border-line bg-card p-5 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold uppercase italic tracking-tight">
                    {h.name}
                  </h3>
                  <span className="whitespace-nowrap font-display text-sm font-bold tabular-nums text-bleu">
                    {h.driveMin} min
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-semibold text-muted">
                  {zoneName[h.zone] ?? h.zone}
                  {h.score ? ` · ★ ${h.score.toFixed(1)}` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price tiers */}
      <div className="mt-14">
        <SpeedHeading>What you&apos;ll pay</SpeedHeading>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          Spread of our {data.hotels.length} listed stays by price tier.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {TIERS.map(([k, e, l, d]) => (
            <div key={k} className="rounded-2xl border border-line bg-card p-5">
              <div className="font-display text-xl font-bold tracking-[2px] text-bleu">
                {e}
              </div>
              <div className="font-display text-2xl font-bold tabular-nums">
                {tiers[k]}
              </div>
              <div className="mt-1.5 text-[13px] text-muted">
                {l} — {d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circuit & area */}
      <div className="mt-14">
        <SpeedHeading>The circuit &amp; the area</SpeedHeading>
        <div className="mt-5 max-w-3xl space-y-3 text-[15px] leading-relaxed text-muted">
          {c.circuitCity.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-amber/50 bg-amber-soft p-5 text-[15px] leading-relaxed">
          {c.sellsOut}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-14">
        <SpeedHeading>Common questions</SpeedHeading>
        <div className="mt-6 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card">
          {c.faq.map((f) => (
            <div key={f.q} className="p-5">
              <p className="font-display text-lg font-bold uppercase italic tracking-tight">
                {f.q}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-muted">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
