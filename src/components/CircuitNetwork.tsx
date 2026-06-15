import { x } from "@/i18n/extra";
import type { Locale } from "@/lib/types";
import { CIRCUITS } from "@/data/circuits";
import { SpeedHeading } from "./ui";

/**
 * The global circuit network on the homepage: the live flagship plus the
 * first-wave circuits being built out. Establishes the multi-circuit brand.
 */
export function CircuitNetwork({ locale }: { locale: Locale }) {
  const t = x(locale).circuitNet;
  return (
    <section>
      <SpeedHeading>{t.heading}</SpeedHeading>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        {t.sub}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CIRCUITS.map((c) => {
          const live = c.status === "live";
          return (
            <div
              key={c.key}
              className={`flex flex-col rounded-xl border bg-card p-4 shadow-sm transition ${
                live
                  ? "border-bleu/40 ring-1 ring-bleu/10"
                  : "border-line opacity-90"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl leading-none" aria-hidden>
                    {c.flag}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold uppercase italic leading-none tracking-tight">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                      {c.country}
                    </p>
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                    live
                      ? "bg-grass/10 text-grass"
                      : "bg-paper text-muted"
                  }`}
                >
                  {live ? t.flagship : t.soon}
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-snug text-muted">
                {c.events}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
