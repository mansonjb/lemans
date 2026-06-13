import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import type { Locale, Place } from "@/lib/types";
import { hotelsByZone } from "@/data/hotels";
import { hrefFor } from "@/lib/registry";
import { SpeedHeading } from "./ui";

const parkingDot = (p: Place["parking"]) =>
  p === "easy" ? "●●●" : p === "medium" ? "●●○" : "●○○";

/**
 * Sortable-looking comparison table of every zone. Dense, factual and
 * link-rich, a strong target for AI Overviews and Perplexity-style answers.
 */
export function ZoneCompare({
  places,
  dict,
  locale,
  title,
}: {
  places: Place[];
  dict: Dict;
  locale: Locale;
  title?: string;
}) {
  const xt = x(locale);
  const rows = [...places].sort((a, b) => a.ring - b.ring || a.km - b.km);

  return (
    <section>
      <SpeedHeading>{title ?? xt.seo.compareTitle}</SpeedHeading>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        {xt.seo.compareSub}
      </p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-card shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-paper text-left">
              <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                {xt.seo.colZone}
              </th>
              <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                {xt.route.totalDistance}
              </th>
              <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                {xt.route.normalDrive}
              </th>
              <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide text-signal">
                {xt.route.raceWeekDrive}
              </th>
              <th
                className="px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-wide"
                title={dict.common.parking.easy}
              >
                P
              </th>
              <th className="px-4 py-3 font-display text-xs font-bold uppercase tracking-wide">
                {xt.seo.colTransport}
              </th>
              <th className="px-4 py-3 text-right font-display text-xs font-bold uppercase tracking-wide">
                {xt.seo.colStays}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const name = p.key === "le-mans-city-centre" ? "Le Mans" : p.name;
              const count = hotelsByZone(p.key).length;
              const transport = [
                p.station ? dict.common.station : null,
                p.tram ? dict.common.tram : null,
              ]
                .filter(Boolean)
                .join(" · ");
              return (
                <tr
                  key={p.key}
                  className="border-b border-line last:border-0 hover:bg-paper"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={hrefFor(`place:${p.key}`, locale)}
                      className="font-semibold text-bleu hover:underline"
                    >
                      {name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 tabular-nums text-muted">{p.km} km</td>
                  <td className="px-4 py-3 tabular-nums">
                    {p.ring === 1 ? xt.seo.walk : `${p.driveMin} min`}
                  </td>
                  <td className="px-4 py-3 font-semibold tabular-nums text-signal">
                    {p.ring === 1 ? xt.seo.walk : `${p.raceWeekMin} min`}
                  </td>
                  <td
                    className="px-4 py-3 text-center tracking-widest text-grass"
                    title={dict.common.parking[p.parking]}
                  >
                    {parkingDot(p.parking)}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-muted">
                    {transport || "—"}
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums font-semibold">
                    {count || "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
