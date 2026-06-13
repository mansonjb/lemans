import Link from "next/link";
import type { ReactNode } from "react";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import { LOCALES, type Locale, type PageDef } from "@/lib/types";
import { hrefFor, pathFor, PAGES } from "@/lib/registry";
import { placeByKey } from "@/data/places";
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
        Le Mans
      </span>
      <span className="font-display text-xl font-bold uppercase tracking-tight">
        Stays
      </span>
      <span className="mb-0.5 inline-block h-2 w-2 rounded-full bg-amber" />
    </span>
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
  const navLinks = [
    { href: hrefFor("event:lm24", locale), label: dict.eventNames.lm24.short },
    {
      href: hrefFor("event:motogp", locale),
      label: dict.eventNames.motogp.short,
    },
  ];

  const eventPages = PAGES.filter((p) => p.template === "event");
  const placePages = PAGES.filter((p) => p.template === "place");
  const typePages = PAGES.filter((p) => p.template === "type");
  const guidePages = PAGES.filter((p) => p.template === "guide");

  const eventLabel = (p: PageDef) =>
    dict.eventNames[p.ref as keyof typeof dict.eventNames]?.name ?? p.ref;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href={`/${locale}`} aria-label={dict.siteName}>
            <Wordmark />
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            <Link href={navLinks[0].href} className="hover:text-bleu">
              {navLinks[0].label}
            </Link>
            <Link href={navLinks[1].href} className="hover:text-bleu">
              {navLinks[1].label}
            </Link>
            <Link href={hrefFor("travel", locale)} className="hover:text-bleu">
              {x(locale).navTravel}
            </Link>
            <Link
              href={hrefFor("guide:everything-booked", locale)}
              className="hover:text-bleu"
            >
              {dict.common.guidesHeading}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href={hrefFor("quiz", locale)}
              className="hidden rounded-md bg-amber px-3 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-ink shadow-sm transition hover:brightness-95 sm:inline-block"
            >
              {x(locale).ctaFindStay}
            </Link>
            <LangSwitcher page={page} locale={locale} />
          </div>
        </div>
      </header>

      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <main className="flex-1">{children}</main>

      <footer className="mt-20 bg-ink text-white/80">
        <div className="h-1 bg-gradient-to-r from-bleu via-amber to-bleu" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              {dict.footer.events}
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
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              {dict.footer.zones}
            </p>
            <ul className="mt-4 columns-2 space-y-2 text-sm md:columns-1 lg:columns-2">
              {placePages.map((p) => {
                const place = placeByKey(p.ref ?? "");
                const label =
                  p.ref === "le-mans-city-centre"
                    ? "Le Mans"
                    : place?.name ?? p.ref;
                return (
                  <li key={p.key}>
                    <Link href={pathFor(p, locale)} className="hover:text-amber">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              {dict.footer.guides}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {guidePages.map((p) => (
                <li key={p.key}>
                  <Link href={pathFor(p, locale)} className="hover:text-amber">
                    {p.slugs[locale].split("/")[1].split("-").join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              {dict.footer.site}
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={hrefFor("quiz", locale)} className="hover:text-amber">
                  {x(locale).ctaFindStay}
                </Link>
              </li>
              <li>
                <Link href={hrefFor("travel", locale)} className="hover:text-amber">
                  {x(locale).navTravel}
                </Link>
              </li>
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
      </footer>
    </div>
  );
}
