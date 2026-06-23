import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import {
  fmtCountry,
  fmtWindow,
  fmtBookAhead,
  fmtCrowd,
  fmtEvent,
  fmtEvents,
} from "@/i18n/datafmt";
import { circuitContext, ABOUT_HEADING } from "@/i18n/circuit-context";
import { homeFaq } from "@/i18n/homefaq";
import type { Locale } from "@/lib/types";
import type { Circuit } from "@/data/circuits";
import type { CircuitData, CircuitEvent } from "@/data/circuit-data";
import {
  circuitFilterHotels,
  circuitPageZones,
  circuitExtraEvents,
  eventSlug,
  CIRCUIT_FILTERS,
} from "@/data/circuit-data";
import { hrefFor } from "@/lib/registry";
import { Container, Kicker, SlantBadge, SpeedHeading } from "@/components/ui";
import { CircuitNetwork } from "@/components/CircuitNetwork";
import { CircuitHotelGrid } from "@/components/CircuitHotelGrid";
import { KeyFacts, type Fact } from "@/components/KeyFacts";
import { Stay22Map } from "@/components/Stay22Map";
import { FaqBlock } from "@/components/FaqBlock";

/** The global hub: brand promise + circuit network + broad FAQ. */
export function GlobalHomeTemplate({
  dict,
  locale,
}: {
  dict: Dict;
  locale: Locale;
}) {
  const xt = x(locale);
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-16 sm:py-24">
          <Kicker>{dict.siteName}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-bold uppercase italic leading-[0.95] tracking-tight sm:text-7xl">
            {xt.hub.heroTitle}
          </h1>
          <div className="speedline mt-5 w-40" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {xt.hub.heroSub}
          </p>
          <div className="mt-8">
            <Link
              href={hrefFor("circuit:le-mans", locale)}
              className="rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep"
            >
              {xt.hub.exploreLeMans}
            </Link>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <CircuitNetwork locale={locale} />

        <div className="mt-20">
          <FaqBlock heading={dict.common.faqHeading} items={homeFaq(locale)} />
        </div>
      </Container>
    </>
  );
}

/** A coming-soon circuit landing: still useful and monetised via a live map. */
export function CircuitSoonTemplate({
  dict,
  locale,
  circuit,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
}) {
  const xt = x(locale);
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{xt.circuitNet.soon}</Kicker>
          <h1 className="mt-3 flex flex-wrap items-center gap-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            <span className="text-3xl sm:text-5xl" aria-hidden>
              {circuit.flag}
            </span>
            {xt.hub.soonTitle(circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">{fmtCountry(circuit.country, locale)}</SlantBadge>
            <SlantBadge tone="amber">{fmtEvents(circuit.events, locale)}</SlantBadge>
          </div>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {xt.hub.soonIntro(circuit.name)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <SpeedHeading>{xt.hub.soonMap(circuit.name)}</SpeedHeading>
        <div className="mt-6">
          <Stay22Map
            title={xt.hub.soonMap(circuit.name)}
            note={dict.common.mapNote}
            lat={circuit.lat}
            lng={circuit.lng}
            zoom={11}
            locale={locale}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hrefFor("circuit:le-mans", locale)}
            className="rounded-lg bg-bleu px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-bleu-deep"
          >
            {xt.hub.exploreLeMans} →
          </Link>
          <Link
            href={`/${locale}`}
            className="rounded-lg border border-line bg-card px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
          >
            {xt.circuitNet.heading} →
          </Link>
        </div>
      </Container>
    </>
  );
}

/** A fully live circuit guide rendered from a generic CircuitData bundle.
 *  With an `event` override + `eventScoped`, the same template renders a
 *  secondary-race landing page (its dates, its name in the titles). */
export function CircuitGuideTemplate({
  dict,
  locale,
  circuit,
  data,
  event: eventProp,
  eventScoped = false,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
  data: CircuitData;
  event?: CircuitEvent;
  eventScoped?: boolean;
}) {
  const xt = x(locale);
  const g = xt.circuitGuide;
  const event = eventProp ?? data.event;
  const scopedSlug = eventScoped ? eventSlug(event) : null;
  const zoneNames = Object.fromEntries(data.zones.map((z) => [z.key, z.name]));
  const closest = data.zones[0];
  const closestLabel =
    closest.driveMin === 0 ? g.atCircuit : g.minLabel(closest.driveMin);
  const town = closest?.name ?? circuit.name;
  const zoneHref = (zKey: string) =>
    scopedSlug
      ? hrefFor(`czoneev:${circuit.key}:${scopedSlug}:${zKey}`, locale)
      : hrefFor(`czone:${circuit.key}:${zKey}`, locale);
  const extra = circuitExtraEvents(data);
  const evName = fmtEvent(event.name, locale);
  const evWindow = fmtWindow(event.window, locale);
  const evBook = fmtBookAhead(event.bookAhead, locale);
  const evCrowd = fmtCrowd(event.crowd, locale);
  const country = fmtCountry(circuit.country, locale);

  const facts: Fact[] = [
    { label: xt.seo.factListedStays, value: String(data.hotels.length), accent: true },
    { label: g.factClosest, value: closestLabel },
    { label: g.factWindow, value: evWindow },
    { label: g.factCrowd, value: evCrowd },
    { label: g.factBook, value: evBook },
  ];

  const faqItems = g.faq(circuit.name, evName, town, evBook);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{eventScoped ? evName : g.kicker}</Kicker>
          <h1 className="mt-3 flex flex-wrap items-center gap-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            <span className="text-3xl sm:text-5xl" aria-hidden>
              {circuit.flag}
            </span>
            {eventScoped
              ? xt.circuitPages.eventTitle(circuit.name, evName)
              : g.staysHeading(circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">{country}</SlantBadge>
            <SlantBadge tone="amber">{evName}</SlantBadge>
          </div>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {g.intro(circuit.name, evName)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        {!eventScoped && circuitContext(circuit.key, locale) && (
          <div className="mt-10 max-w-3xl">
            <SpeedHeading>{ABOUT_HEADING[locale]}</SpeedHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {circuitContext(circuit.key, locale)}
            </p>
          </div>
        )}

        {!eventScoped && extra.length > 0 && (
          <div className="mt-10">
            <SpeedHeading>{xt.circuitPages.otherEvents(circuit.name)}</SpeedHeading>
            <div className="mt-6 flex flex-wrap gap-2">
              {extra.map((e) => (
                <Link
                  key={e.name}
                  href={hrefFor(`cevent:${circuit.key}:${eventSlug(e)}`, locale)}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
                >
                  {fmtEvent(e.name, locale)}
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-bleu">
                    {fmtWindow(e.window, locale)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12">
          <SpeedHeading>{g.zonesHeading}</SpeedHeading>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            {g.zonesSub(circuit.name)}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.zones.map((z) => {
              const hasPage = z.key !== "circuit-area";
              const inner = (
                <>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold uppercase italic tracking-tight">
                      {z.name}
                    </h3>
                    <span className="font-display text-sm font-bold tabular-nums text-bleu">
                      {z.driveMin === 0 ? g.atCircuit : g.minLabel(z.driveMin)}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-muted">
                    {g.staysCount(z.count)}
                  </p>
                </>
              );
              return hasPage ? (
                <Link
                  key={z.key}
                  href={zoneHref(z.key)}
                  className="rounded-xl border border-line bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={z.key}
                  className="rounded-xl border border-line bg-card p-4 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{g.staysHeading(circuit.name)}</SpeedHeading>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            {g.staysSub}
          </p>
          <div className="mt-6">
            <CircuitHotelGrid
              hotels={data.hotels}
              zoneNames={zoneNames}
              event={event}
              labels={{
                kind: xt.accommodation.kind,
                seePrice: xt.accommodation.seePrice,
                disclaimer: xt.accommodation.disclaimer,
                atCircuit: g.atCircuit,
                minLabel: g.minLabel,
              }}
            />
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{g.mapHeading(circuit.name)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={g.mapHeading(circuit.name)}
              note={dict.common.mapNote}
              lat={circuit.lat}
              lng={circuit.lng}
              checkin={event.checkin}
              checkout={event.checkout}
              zoom={11}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{xt.seo.popularSearches}</SpeedHeading>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={hrefFor(`ctravel:${circuit.key}`, locale)}
              className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
            >
              {xt.circuitPages.travelKicker}
            </Link>
            <Link
              href={hrefFor(`cguide:${circuit.key}`, locale)}
              className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
            >
              {xt.circuitPages.guideKicker}
            </Link>
            <Link
              href={hrefFor(`ccost:${circuit.key}`, locale)}
              className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
            >
              {xt.circuitPages.costKicker}
            </Link>
            <Link
              href={hrefFor(`cquiz:${circuit.key}`, locale)}
              className="inline-flex items-center rounded-full border border-bleu bg-bleu/5 px-4 py-2 text-sm font-semibold text-bleu transition hover:bg-bleu/10"
            >
              {xt.ctaFindStay}
            </Link>
            {CIRCUIT_FILTERS.filter(
              (f) => circuitFilterHotels(data, f.key).length >= 3
            ).map((f) => (
              <Link
                key={f.key}
                href={hrefFor(`cfilter:${circuit.key}:${f.key}`, locale)}
                className="inline-flex items-center rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
              >
                {xt.circuitPages.filterTitle[f.key](circuit.name)}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <FaqBlock heading={dict.common.faqHeading} items={faqItems} />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href={hrefFor("circuit:le-mans", locale)}
            className="rounded-lg bg-bleu px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-bleu-deep"
          >
            {xt.hub.exploreLeMans} →
          </Link>
          <Link
            href={`/${locale}`}
            className="rounded-lg border border-line bg-card px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
          >
            {xt.circuitNet.heading} →
          </Link>
        </div>
      </Container>
    </>
  );
}
