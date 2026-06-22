import Link from "next/link";
import type { ReactNode } from "react";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import { LOCALES, type Locale, type PageDef } from "@/lib/types";
import { hrefFor, pathFor, PAGES, circuitKeyForPage } from "@/lib/registry";
import { SITE } from "@/lib/seo";
import { CIRCUITS } from "@/data/circuits";
import { circuitData, circuitExtraEvents, eventSlug } from "@/data/circuit-data";
import { placeByKey } from "@/data/places";
import { GUIDE_CONTENT } from "@/data/guides";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

function LangSwitcher({ page, locale }: { page: PageDef; locale: Locale }) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 rounded-md border border-line bg-card px-2.5 py-1.5 font-display text-sm font-semibold uppercase tracking-wide">
        {locale}
        <span className="text-muted transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-line bg-card shadow-lg">
        {LOCALES.map((l) => (
          <a
            key={l}
            href={pathFor(page, l)}
            className={`block px-4 py-2 text-sm hover:bg-paper ${
              l === locale ? "font-semibold text-bleu" : ""
            }`}
          >
            {l.toUpperCase()}
          </a>
        ))}
      </div>
    </details>
  );
}

function Wordmark() {
  return (
    <span className="flex items-baseline gap-1.5">
      <span className="font-display text-xl font-bold uppercase italic tracking-tight text-bleu">
        RaceWeek
      </span>
      <span className="font-display text-xl font-bold uppercase tracking-tight">
        Stays
      </span>
      <span className="mb-0.5 inline-block h-2 w-2 rounded-full bg-amber" />
    </span>
  );
}

/** The circuit network dropdown — the spine of the multi-circuit site, on every page. */
function CircuitsMenu({
  locale,
  currentKey,
  label,
}: {
  locale: Locale;
  currentKey: string | null;
  label: string;
}) {
  const xt = x(locale);
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-bleu"
      >
        {label}
        <span className="text-[10px] text-muted">▾</span>
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[300px] overflow-hidden rounded-xl border border-line bg-card shadow-lg">
          <div className="h-1 bg-gradient-to-r from-bleu via-amber to-ink" />
          <div className="p-2">
            {CIRCUITS.map((c) => {
              const active = c.key === currentKey;
              const live = c.status === "live";
              return (
                <Link
                  key={c.key}
                  href={hrefFor(`circuit:${c.key}`, locale)}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-paper ${
                    active ? "bg-paper text-bleu" : ""
                  }`}
                >
                  <span className="text-base" aria-hidden>
                    {c.flag}
                  </span>
                  <span className="flex-1 font-medium">{c.name}</span>
                  <span
                    className={`rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                      live
                        ? "bg-grass/15 text-grass"
                        : "bg-line/60 text-muted"
                    }`}
                  >
                    {live ? xt.circuitNet.flagship : xt.circuitNet.soon}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

type RaceEntry = { key: string; flag: string; label: string; href: string };

/** All race weekends across the network — Le Mans' five plus each other
 *  circuit's headline race. Always present, so the menu stays consistent. */
function CoursesMenu({
  label,
  entries,
}: {
  label: string;
  entries: RaceEntry[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-bleu"
      >
        {label}
        <span className="text-[10px] text-muted">▾</span>
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="max-h-[70vh] min-w-[280px] overflow-auto rounded-xl border border-line bg-card shadow-lg">
          <div className="h-1 bg-gradient-to-r from-bleu via-amber to-ink" />
          <div className="p-2">
            {entries.map((e) => (
              <Link
                key={e.key}
                href={e.href}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-paper hover:text-bleu"
              >
                <span className="text-base" aria-hidden>
                  {e.flag}
                </span>
                <span className="flex-1 font-medium">{e.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** A dropdown that lists every destination (circuit), each linking to that
 *  circuit's version of a sub-page (getting there, guide…). Keeps the menu
 *  consistent and avoids jumping to Le Mans from the global hub. */
function DestinationsMenu({
  label,
  currentKey,
  hrefForCircuit,
}: {
  label: string;
  currentKey: string | null;
  hrefForCircuit: (key: string) => string;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-bleu"
      >
        {label}
        <span className="text-[10px] text-muted">▾</span>
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="max-h-[70vh] min-w-[260px] overflow-auto rounded-xl border border-line bg-card shadow-lg">
          <div className="h-1 bg-gradient-to-r from-bleu via-amber to-ink" />
          <div className="p-2">
            {CIRCUITS.map((c) => (
              <Link
                key={c.key}
                href={hrefForCircuit(c.key)}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 hover:bg-paper hover:text-bleu ${
                  c.key === currentKey ? "bg-paper text-bleu" : ""
                }`}
              >
                <span className="text-base" aria-hidden>
                  {c.flag}
                </span>
                <span className="flex-1 font-medium">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageShell({
  locale,
  dict,
  page,
  children,
  breadcrumbs,
}: {
  locale: Locale;
  dict: Dict;
  page: PageDef;
  children: ReactNode;
  breadcrumbs?: Crumb[];
}) {
  const xt = x(locale);
  const circuitKey = circuitKeyForPage(page);
  const isLeMans = circuitKey === "le-mans";

  // Le Mans is the only circuit with deep sub-pages today; its races, zones
  // and guides feed the menu and the footer's Le Mans section.
  const eventPages = PAGES.filter((p) => p.template === "event");
  const placePages = PAGES.filter((p) => p.template === "place");
  const typePages = PAGES.filter((p) => p.template === "type");
  const guidePages = PAGES.filter((p) => p.template === "guide");

  const eventLabel = (p: PageDef) =>
    dict.eventNames[p.ref as keyof typeof dict.eventNames]?.name ?? p.ref;

  // Courses menu: every race across the network — Le Mans' five first, then
  // each other circuit's headline race. Always shown, so the menu is stable.
  const raceEntries: RaceEntry[] = [];
  for (const c of CIRCUITS) {
    if (c.key === "le-mans") {
      for (const p of eventPages)
        raceEntries.push({
          key: p.key,
          flag: c.flag,
          label: eventLabel(p) ?? c.name,
          href: pathFor(p, locale),
        });
    } else {
      const data = circuitData(c.key);
      raceEntries.push({
        key: `circuit:${c.key}`,
        flag: c.flag,
        label: data ? data.event.name : c.events.split(" · ")[0].trim(),
        href: hrefFor(`circuit:${c.key}`, locale),
      });
      if (data) {
        for (const ev of circuitExtraEvents(data)) {
          raceEntries.push({
            key: `cevent:${c.key}:${eventSlug(ev)}`,
            flag: c.flag,
            label: ev.name,
            href: hrefFor(`cevent:${c.key}:${eventSlug(ev)}`, locale),
          });
        }
      }
    }
  }

  // "Find your stay": the Le Mans matchmaker quiz, or the current circuit's
  // own guide when you're on another circuit.
  // "Find your stay" → the matchmaker for the circuit you're on (Le Mans keeps
  // its bespoke quiz; the others get the generic finder). Hidden off-circuit.
  const ctaHref = circuitKey
    ? circuitKey === "le-mans"
      ? hrefFor("quiz", locale)
      : hrefFor(`cquiz:${circuitKey}`, locale)
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href={`/${locale}`} aria-label={dict.siteName}>
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            <CircuitsMenu
              locale={locale}
              currentKey={circuitKey}
              label={xt.navCircuits}
            />
            <CoursesMenu label={dict.nav.events} entries={raceEntries} />
            <DestinationsMenu
              label={xt.navTravel}
              currentKey={circuitKey}
              hrefForCircuit={(k) =>
                k === "le-mans"
                  ? hrefFor("travel", locale)
                  : hrefFor(`ctravel:${k}`, locale)
              }
            />
            <DestinationsMenu
              label={dict.common.guidesHeading}
              currentKey={circuitKey}
              hrefForCircuit={(k) =>
                k === "le-mans"
                  ? hrefFor("guides", locale)
                  : hrefFor(`cguide:${k}`, locale)
              }
            />
          </nav>
          <div className="flex items-center gap-2">
            {ctaHref && (
              <Link
                href={ctaHref}
                className="hidden rounded-md bg-amber px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-ink shadow-sm transition hover:brightness-95 sm:inline-block"
              >
                {xt.ctaFindStay}
              </Link>
            )}
            <LangSwitcher page={page} locale={locale} />
          </div>
        </div>
        {/* Mobile circuit switcher — jump to any circuit from anywhere. */}
        <div className="border-t border-line md:hidden">
          <div className="flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CIRCUITS.map((c) => {
              const active = c.key === circuitKey;
              return (
                <Link
                  key={c.key}
                  href={hrefFor(`circuit:${c.key}`, locale)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${
                    active
                      ? "border-bleu bg-bleu/10 text-bleu"
                      : "border-line bg-card text-ink"
                  }`}
                >
                  <span aria-hidden>{c.flag}</span>
                  {c.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <main className="flex-1">{children}</main>

      <footer className="mt-20 bg-ink text-white/80">
        <div className="h-1 bg-gradient-to-r from-bleu via-amber to-bleu" />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-8 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-5">
          {/* Circuits — global, every page */}
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              {xt.navCircuits}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {CIRCUITS.map((c) => (
                <li key={c.key}>
                  <Link
                    href={hrefFor(`circuit:${c.key}`, locale)}
                    className="flex items-center gap-2 hover:text-amber"
                  >
                    <span aria-hidden>{c.flag}</span>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Le Mans deep links — only on Le Mans pages, clearly labelled */}
          {isLeMans && (
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                Le Mans
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {eventPages.map((p) => (
                  <li key={p.key}>
                    <Link href={pathFor(p, locale)} className="hover:text-amber">
                      {eventLabel(p)}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                {dict.footer.types}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {typePages.map((p) => (
                  <li key={p.key}>
                    <Link href={pathFor(p, locale)} className="hover:text-amber">
                      {
                        dict.typePage[p.ref as "camping" | "hotels" | "rentals"]
                          .heroTitle
                      }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isLeMans && (
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                {dict.footer.zones}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {placePages.map((p) => {
                  const place = placeByKey(p.ref ?? "");
                  const label =
                    p.ref === "le-mans-city-centre"
                      ? "Le Mans"
                      : place?.name ?? p.ref;
                  return (
                    <li key={p.key}>
                      <Link
                        href={pathFor(p, locale)}
                        className="hover:text-amber"
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Guides + site — guides only when on Le Mans */}
          <div>
            {isLeMans && (
              <>
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {dict.footer.guides}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {guidePages.map((p) => (
                    <li key={p.key}>
                      <Link
                        href={pathFor(p, locale)}
                        className="hover:text-amber"
                      >
                        {GUIDE_CONTENT[p.ref ?? ""]?.[locale]?.title ??
                          p.slugs[locale].split("/")[1].split("-").join(" ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p
              className={`font-display text-sm font-bold uppercase tracking-[0.2em] text-white ${
                isLeMans ? "mt-6" : ""
              }`}
            >
              {dict.footer.site}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {isLeMans && (
                <>
                  <li>
                    <Link
                      href={hrefFor("quiz", locale)}
                      className="hover:text-amber"
                    >
                      {xt.ctaFindStay}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={hrefFor("travel", locale)}
                      className="hover:text-amber"
                    >
                      {xt.navTravel}
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link href={hrefFor("about", locale)} className="hover:text-amber">
                  {dict.about.title}
                </Link>
              </li>
              <li>
                <Link
                  href={hrefFor("contact", locale)}
                  className="hover:text-amber"
                >
                  {dict.contact.title}
                </Link>
              </li>
              <li>
                <Link href={hrefFor("legal", locale)} className="hover:text-amber">
                  {dict.legal.title}
                </Link>
              </li>
              <li>
                <Link
                  href={hrefFor("privacy", locale)}
                  className="hover:text-amber"
                >
                  {dict.privacy.title}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-xs leading-relaxed text-white/60">
            <Wordmark />
            <p className="mt-4">{dict.footer.disclaimer}</p>
            <p className="mt-3">{dict.footer.affiliate}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              © {SITE.year} {SITE.name}. {dict.footer.rights}
            </p>
            <p className="sm:text-right">{dict.footer.trademarks}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
