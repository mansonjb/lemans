import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import type { Locale } from "@/lib/types";
import type { Circuit } from "@/data/circuits";
import type { CircuitData, CircuitZone, CircuitEvent } from "@/data/circuit-data";
import {
  circuitZoneHotels,
  circuitFilterHotels,
  circuitPageZones,
  eventSlug,
} from "@/data/circuit-data";
import { hrefFor } from "@/lib/registry";
import { Container, Kicker, SlantBadge, SpeedHeading } from "@/components/ui";
import { KeyFacts, type Fact } from "@/components/KeyFacts";
import { CircuitHotelGrid } from "@/components/CircuitHotelGrid";
import { Stay22Map } from "@/components/Stay22Map";
import { FaqBlock } from "@/components/FaqBlock";

const gridLabels = (locale: Locale) => {
  const xt = x(locale);
  return {
    kind: xt.accommodation.kind,
    seePrice: xt.accommodation.seePrice,
    disclaimer: xt.accommodation.disclaimer,
    atCircuit: xt.circuitGuide.atCircuit,
    minLabel: xt.circuitGuide.minLabel,
  };
};

const zoneNameMap = (data: CircuitData): Record<string, string> =>
  Object.fromEntries(data.zones.map((z) => [z.key, z.name]));

function NetworkCtas({
  locale,
  circuit,
}: {
  locale: Locale;
  circuit: Circuit;
}) {
  const xt = x(locale);
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      <Link
        href={hrefFor(`circuit:${circuit.key}`, locale)}
        className="rounded-lg bg-bleu px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-bleu-deep"
      >
        {xt.circuitGuide.staysHeading(circuit.name)} →
      </Link>
      <Link
        href={`/${locale}`}
        className="rounded-lg border border-line bg-card px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
      >
        {xt.circuitNet.heading} →
      </Link>
    </div>
  );
}

/* ---------------------------- GETTING THERE ---------------------------- */
export function CircuitTravelTemplate({
  dict,
  locale,
  circuit,
  data,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
  data: CircuitData;
}) {
  const xt = x(locale);
  const p = xt.circuitPages;
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{p.travelKicker}</Kicker>
          <h1 className="mt-3 flex flex-wrap items-center gap-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            <span className="text-3xl sm:text-5xl" aria-hidden>
              {circuit.flag}
            </span>
            {p.travelTitle(circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {p.travelIntro(circuit.name, data.event.name)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* By plane */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold uppercase italic tracking-tight">
              ✈️ {p.byPlane}
            </h2>
            <p className="mt-1 text-[13px] text-muted">{p.planeNote(circuit.name)}</p>
            <ul className="mt-4 space-y-3">
              {data.travel.airports.map((a) => (
                <li key={a.code} className="flex items-center justify-between gap-3">
                  <span>
                    <span className="font-display text-sm font-bold text-bleu">
                      {a.code}
                    </span>{" "}
                    {a.name}
                    <span className="block text-[12px] text-muted">
                      {p.minByCar(a.driveMin)}
                    </span>
                  </span>
                  <a
                    href={`https://www.skyscanner.net/transport/flights-to/${a.code.toLowerCase()}/`}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="shrink-0 rounded-md bg-ink px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-white transition hover:bg-bleu"
                  >
                    {p.searchFlights}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* By train */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold uppercase italic tracking-tight">
              🚆 {p.byTrain}
            </h2>
            <p className="mt-1 text-[13px] text-muted">{p.trainNote}</p>
            <ul className="mt-4 space-y-2 text-[15px]">
              {data.travel.rail.map((r) => (
                <li key={r} className="flex items-center gap-2">
                  <span className="font-display text-base italic text-bleu">›</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          {/* By car */}
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold uppercase italic tracking-tight">
              🚗 {p.byCar}
            </h2>
            <p className="mt-1 text-[13px] text-muted">{p.carNote}</p>
            <p className="mt-4 font-display text-2xl font-bold italic tabular-nums text-ink">
              {data.travel.roads}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              {p.carBody(circuit.name)}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{p.mapHere(circuit.name)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={p.mapHere(circuit.name)}
              note={dict.common.mapNote}
              lat={circuit.lat}
              lng={circuit.lng}
              checkin={data.event.checkin}
              checkout={data.event.checkout}
              zoom={11}
              locale={locale}
            />
          </div>
        </div>

        <NetworkCtas locale={locale} circuit={circuit} />
      </Container>
    </>
  );
}

/* ---------------------------- RACE-WEEK GUIDE ---------------------------- */
export function CircuitGuideArticleTemplate({
  dict,
  locale,
  circuit,
  data,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
  data: CircuitData;
}) {
  const xt = x(locale);
  const p = xt.circuitPages;
  const g = xt.circuitGuide;
  const topZones = circuitPageZones(data).slice(0, 5);
  const town = data.zones[0]?.name ?? circuit.name;

  const facts: Fact[] = [
    { label: g.factBook, value: data.event.bookAhead, accent: true },
    { label: g.factWindow, value: data.event.window },
    { label: g.factCrowd, value: data.event.crowd },
    { label: xt.seo.factListedStays, value: String(data.hotels.length) },
  ];

  const sections: { h: string; body: string }[] = [
    { h: p.whenToBook, body: p.whenToBookBody(data.event.name, data.event.bookAhead) },
    { h: p.whereToBase, body: p.whereToBaseBody(circuit.name, town) },
    { h: p.campingH, body: p.campingBody(circuit.name) },
    { h: p.gettingAround, body: p.gettingAroundBody(circuit.name, data.travel.roads) },
  ];

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{p.guideKicker}</Kicker>
          <h1 className="mt-3 flex flex-wrap items-center gap-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            <span className="text-3xl sm:text-5xl" aria-hidden>
              {circuit.flag}
            </span>
            {p.guideTitle(circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {p.guideIntro(circuit.name, data.event.name)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <section key={s.h}>
              <SpeedHeading>{s.h}</SpeedHeading>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-muted">
                {s.body}
              </p>
              {s.h === p.whereToBase && topZones.length > 0 && (
                <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {topZones.map((z) => (
                    <li key={z.key}>
                      <Link
                        href={hrefFor(`czone:${circuit.key}:${z.key}`, locale)}
                        className="flex items-center justify-between gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm transition hover:border-bleu hover:text-bleu"
                      >
                        <span className="font-semibold">{z.name}</span>
                        <span className="font-display text-xs font-bold tabular-nums text-bleu">
                          {z.driveMin === 0 ? g.atCircuit : g.minLabel(z.driveMin)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={g.faq(circuit.name, data.event.name, town, data.event.bookAhead)}
          />
        </div>

        <NetworkCtas locale={locale} circuit={circuit} />
      </Container>
    </>
  );
}

/* ------------------------------- ZONE PAGE ------------------------------- */
export function CircuitZoneTemplate({
  dict,
  locale,
  circuit,
  data,
  zone,
  event: eventProp,
  eventScoped = false,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
  data: CircuitData;
  zone: CircuitZone;
  event?: CircuitEvent;
  eventScoped?: boolean;
}) {
  const xt = x(locale);
  const p = xt.circuitPages;
  const g = xt.circuitGuide;
  const event = eventProp ?? data.event;
  const scopedSlug = eventScoped ? eventSlug(event) : null;
  const hotels = circuitZoneHotels(data, zone.key);
  const others = circuitPageZones(data).filter((z) => z.key !== zone.key);
  const driveLabel = zone.driveMin === 0 ? g.atCircuit : g.minLabel(zone.driveMin);
  const otherZoneHref = (zKey: string) =>
    scopedSlug
      ? hrefFor(`czoneev:${circuit.key}:${scopedSlug}:${zKey}`, locale)
      : hrefFor(`czone:${circuit.key}:${zKey}`, locale);

  const facts: Fact[] = [
    { label: xt.seo.factListedStays, value: String(hotels.length), accent: true },
    { label: g.factClosest, value: driveLabel },
    { label: g.factWindow, value: event.window },
    { label: g.factBook, value: event.bookAhead },
  ];

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{p.zoneKicker(circuit.name)}</Kicker>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {eventScoped
              ? p.zoneEventTitle(zone.name, event.name)
              : p.zoneTitle(zone.name, circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">{driveLabel}</SlantBadge>
            <SlantBadge tone="amber">{event.name}</SlantBadge>
          </div>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {p.zoneIntro(zone.name, circuit.name, event.name, zone.driveMin)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        <div className="mt-12">
          <SpeedHeading>{p.zoneStaysH(zone.name)}</SpeedHeading>
          <div className="mt-6">
            <CircuitHotelGrid
              hotels={hotels}
              zoneNames={zoneNameMap(data)}
              event={event}
              labels={gridLabels(locale)}
            />
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{p.zoneMapH(zone.name)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={p.zoneMapH(zone.name)}
              note={dict.common.mapNote}
              lat={zone.lat}
              lng={zone.lng}
              checkin={event.checkin}
              checkout={event.checkout}
              zoom={13}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-14">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={g.faq(circuit.name, event.name, zone.name, event.bookAhead)}
          />
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <SpeedHeading>{p.otherZones(circuit.name)}</SpeedHeading>
            <ul className="mt-6 flex flex-wrap gap-2">
              {others.map((z) => (
                <li key={z.key}>
                  <Link
                    href={otherZoneHref(z.key)}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
                  >
                    {z.name}
                    <span className="font-display text-xs font-bold tabular-nums text-bleu">
                      {z.driveMin === 0 ? g.atCircuit : g.minLabel(z.driveMin)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <NetworkCtas locale={locale} circuit={circuit} />
      </Container>
    </>
  );
}

/* ------------------------------ FILTER PAGE ------------------------------ */
export function CircuitFilterTemplate({
  dict,
  locale,
  circuit,
  data,
  filterKey,
}: {
  dict: Dict;
  locale: Locale;
  circuit: Circuit;
  data: CircuitData;
  filterKey: string;
}) {
  const xt = x(locale);
  const p = xt.circuitPages;
  const g = xt.circuitGuide;
  const hotels = circuitFilterHotels(data, filterKey);
  const fk = filterKey as keyof typeof p.filterTitle;
  const town = data.zones[0]?.name ?? circuit.name;

  const facts: Fact[] = [
    { label: xt.seo.factListedStays, value: String(hotels.length), accent: true },
    { label: g.factWindow, value: data.event.window },
    { label: g.factCrowd, value: data.event.crowd },
    { label: g.factBook, value: data.event.bookAhead },
  ];

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{p.filterKicker}</Kicker>
          <h1 className="mt-3 flex flex-wrap items-center gap-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            <span className="text-3xl sm:text-5xl" aria-hidden>
              {circuit.flag}
            </span>
            {p.filterTitle[fk](circuit.name)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-muted">
            {p.filterIntro[fk](circuit.name, data.event.name)}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        <div className="mt-12">
          <SpeedHeading>{p.filterTitle[fk](circuit.name)}</SpeedHeading>
          <div className="mt-6">
            <CircuitHotelGrid
              hotels={hotels}
              zoneNames={zoneNameMap(data)}
              event={data.event}
              labels={gridLabels(locale)}
            />
          </div>
        </div>

        <div className="mt-14">
          <SpeedHeading>{xt.circuitGuide.mapHeading(circuit.name)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={xt.circuitGuide.mapHeading(circuit.name)}
              note={dict.common.mapNote}
              lat={circuit.lat}
              lng={circuit.lng}
              checkin={data.event.checkin}
              checkout={data.event.checkout}
              zoom={11}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-14">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={g.faq(circuit.name, data.event.name, town, data.event.bookAhead)}
          />
        </div>

        <NetworkCtas locale={locale} circuit={circuit} />
      </Container>
    </>
  );
}
