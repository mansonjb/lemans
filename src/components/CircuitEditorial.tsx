import { SpeedHeading } from "@/components/ui";
import type { Circuit } from "@/data/circuits";
import type { CircuitData } from "@/data/circuit-data";
import type { Locale } from "@/lib/types";
import {
  EDITORIAL,
  EDITORIAL_UI,
  topStays,
  campingStays,
  priceTiers,
} from "@/data/circuit-editorial";

/** Rich, data-grounded guide block. Renders only for circuits present in
 *  EDITORIAL. Tables derive from the scraped data; prose is per locale. */
export function CircuitEditorial({
  circuit,
  data,
  locale,
}: {
  circuit: Circuit;
  data: CircuitData;
  locale: Locale;
}) {
  const c = EDITORIAL[circuit.key]?.[locale] ?? EDITORIAL[circuit.key]?.en;
  if (!c) return null;
  const ui = EDITORIAL_UI[locale];
  const zoneName = Object.fromEntries(data.zones.map((z) => [z.key, z.name]));
  const tops = topStays(data);
  const camps = campingStays(data).slice(0, 3);
  const tiers = priceTiers(data);
  const tierMeta = [
    { k: 1 as const, e: "€", l: ui.tierBudget, d: ui.budgetDesc },
    { k: 2 as const, e: "€€", l: ui.tierMid, d: ui.midDesc },
    { k: 3 as const, e: "€€€", l: ui.tierPremium, d: ui.premiumDesc },
  ];

  return (
    <>
      <p className="mt-10 max-w-3xl text-[15px] leading-relaxed text-muted">
        {c.lede}
      </p>

      {/* Where to base */}
      <div className="mt-12">
        <SpeedHeading>{ui.whereToBase}</SpeedHeading>
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
          {ui.vsNote}
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
                {ui.pickNearIf}
              </span>
              {c.duel.pickNear}
            </div>
            <div className="p-4 text-[14px] text-muted">
              <span className="mb-1 block font-display font-bold uppercase italic text-bleu">
                {ui.pickCityIf}
              </span>
              {c.duel.pickCity}
            </div>
          </div>
        </div>
      </div>

      {/* Top-rated stays */}
      {tops.length > 0 && (
        <div className="mt-14">
          <SpeedHeading>{ui.topStays}</SpeedHeading>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            {ui.topStaysNote(data.hotels.length)}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-card">
            <table className="w-full border-collapse text-[14.5px]">
              <thead>
                <tr className="bg-paper">
                  <th className="border-b-2 border-ink px-4 py-3 text-left font-display uppercase italic">
                    {ui.tStay}
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-left font-display uppercase italic">
                    {ui.tBase}
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-right font-display uppercase italic">
                    {ui.tDrive}
                  </th>
                  <th className="border-b-2 border-ink px-4 py-3 text-right font-display uppercase italic">
                    {ui.tRating}
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
                      {h.driveMin} {ui.min}
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
          <SpeedHeading>{ui.camping}</SpeedHeading>
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
                    {h.driveMin} {ui.min}
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
        <SpeedHeading>{ui.pay}</SpeedHeading>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          {ui.payNote(data.hotels.length)}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {tierMeta.map((t) => (
            <div key={t.k} className="rounded-2xl border border-line bg-card p-5">
              <div className="font-display text-xl font-bold tracking-[2px] text-bleu">
                {t.e}
              </div>
              <div className="font-display text-2xl font-bold tabular-nums">
                {tiers[t.k]}
              </div>
              <div className="mt-1.5 text-[13px] text-muted">
                {t.l} — {t.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Circuit & area */}
      <div className="mt-14">
        <SpeedHeading>{ui.circuitArea}</SpeedHeading>
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
        <SpeedHeading>{ui.faqHeading}</SpeedHeading>
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
