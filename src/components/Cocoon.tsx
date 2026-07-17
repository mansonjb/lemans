import { Fragment } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/types";
import { circuitData } from "@/data/circuit-data";
import {
  relatedCircuits,
  sameSeriesCircuits,
  sameCountryCircuits,
  seriesOf,
  type Series,
} from "@/data/related";
import { fmtCountry, fmtEvent, fmtEvents, fmtWindow } from "@/i18n/datafmt";
import {
  RELATED_HEADING,
  RELATED_SUB,
  SERIES_BADGE,
  EXPLORE_SERIES,
  EXPLORE_COUNTRY,
} from "@/i18n/cocoon";
import { hrefFor } from "@/lib/registry";
import { SpeedHeading } from "./ui";

const SERIES_COLOR: Record<Series, { bar: string; badge: string }> = {
  f1: { bar: "bg-signal", badge: "bg-signal/10 text-signal" },
  motogp: { bar: "bg-amber", badge: "bg-amber/20 text-ink" },
  endurance: { bar: "bg-grass", badge: "bg-grass/10 text-grass" },
  indycar: { bar: "bg-bleu", badge: "bg-bleu/10 text-bleu" },
  roadracing: { bar: "bg-royal", badge: "bg-royal/10 text-royal" },
};

/** A single related-circuit summary line (headline event + window). */
function eventLine(key: string, events: string, locale: Locale): string {
  const d = circuitData(key);
  if (!d) return fmtEvents(events, locale);
  return `${fmtEvent(d.event.name, locale)} · ${fmtWindow(d.event.window, locale)}`;
}

/** Bottom-of-page bridge: colourful cards to the most similar circuits. */
export function RelatedCircuits({
  locale,
  circuitKey,
}: {
  locale: Locale;
  circuitKey: string;
}) {
  const related = relatedCircuits(circuitKey, 6);
  if (related.length === 0) return null;
  return (
    <div className="mt-14">
      <SpeedHeading>{RELATED_HEADING[locale]}</SpeedHeading>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
        {RELATED_SUB[locale]}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((c) => {
          const series = seriesOf(c.key) ?? "f1";
          const col = SERIES_COLOR[series];
          return (
            <Link
              key={c.key}
              href={hrefFor(`circuit:${c.key}`, locale)}
              className="group relative overflow-hidden rounded-2xl border border-line bg-card p-4 pl-5 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <span
                className={`absolute inset-y-0 left-0 w-1.5 ${col.bar}`}
                aria-hidden
              />
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl leading-none" aria-hidden>
                    {c.flag}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase italic leading-tight tracking-tight group-hover:text-bleu">
                      {c.name}
                    </h3>
                    <p className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">
                      {fmtCountry(c.country, locale)}
                    </p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${col.badge}`}
                >
                  {SERIES_BADGE[series]}
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-snug text-muted">
                {eventLine(c.key, c.events, locale)}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function InlineLinks({
  circuits,
  locale,
}: {
  circuits: { key: string; name: string }[];
  locale: Locale;
}) {
  return (
    <>
      {circuits.map((c, i) => (
        <Fragment key={c.key}>
          {i > 0 && ", "}
          <Link
            href={hrefFor(`circuit:${c.key}`, locale)}
            className="font-semibold text-bleu hover:underline"
          >
            {c.name}
          </Link>
        </Fragment>
      ))}
    </>
  );
}

/** In-content cross-links: same championship + same country. */
export function CocoonLinks({
  locale,
  circuitKey,
}: {
  locale: Locale;
  circuitKey: string;
}) {
  const series = seriesOf(circuitKey);
  const bySeries = sameSeriesCircuits(circuitKey, 4);
  const byCountry = sameCountryCircuits(circuitKey, 3);
  if (!series || (bySeries.length === 0 && byCountry.length === 0)) return null;
  return (
    <div className="mt-6 space-y-1.5 text-[15px] leading-relaxed text-muted">
      {bySeries.length > 0 && (
        <p>
          <span className="font-semibold text-ink">
            {EXPLORE_SERIES[locale][series]}
          </span>
          {": "}
          <InlineLinks circuits={bySeries} locale={locale} />.
        </p>
      )}
      {byCountry.length > 0 && (
        <p>
          <span className="font-semibold text-ink">{EXPLORE_COUNTRY[locale]}</span>
          {": "}
          <InlineLinks circuits={byCountry} locale={locale} />.
        </p>
      )}
    </div>
  );
}
