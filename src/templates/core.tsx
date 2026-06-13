import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import type { Locale, Place, RaceEvent } from "@/lib/types";
import { EVENTS } from "@/data/events";
import { PLACES, ringOf } from "@/data/places";
import { CROSS_PAGES } from "@/data/catalog";
import { HOTELS, hotelsByZone, hotelsForZonePadded, topPicks } from "@/data/hotels";
import { routeFor } from "@/data/routes";
import { hrefFor } from "@/lib/registry";
import { bookingAreaUrl } from "@/lib/booking";
import { CIRCUIT, eventYear, formatDateRange } from "@/lib/seo";
import { Stay22Map } from "@/components/Stay22Map";
import { Countdown } from "@/components/Countdown";
import { EventCard, GuideCard, PlaceCard } from "@/components/cards";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd } from "@/components/JsonLd";
import { AccommodationList, TrustStrip } from "@/components/AccommodationList";
import { RouteMap } from "@/components/RouteMap";
import { KeyFacts, type Fact } from "@/components/KeyFacts";
import { ZoneCompare } from "@/components/ZoneCompare";
import { LodgingListSchema, ZoneSchema } from "@/components/schema";
import {
  AmberNote,
  Container,
  Kicker,
  Pitboard,
  SlantBadge,
  SpeedHeading,
} from "@/components/ui";
import { GUIDE_CONTENT } from "@/data/guides";

export const nextEvent = (): RaceEvent =>
  [...EVENTS].sort((a, b) => a.start.localeCompare(b.start))[0];

const countdownTemplate = (dict: Dict) =>
  dict.common.daysToGo(-1).replace("-1", "%d");

export function ZoneRings({
  dict,
  locale,
  rings = [1, 2, 3, 4],
}: {
  dict: Dict;
  locale: Locale;
  rings?: number[];
}) {
  return (
    <div className="space-y-10">
      {rings.map((ring) => {
        const places = PLACES.filter((p) => p.ring === ring);
        if (!places.length) return null;
        return (
          <div key={ring}>
            <h3 className="flex items-center gap-3 font-display text-lg font-semibold uppercase tracking-wide text-muted">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-ink font-display text-sm text-white">
                {ring}
              </span>
              {dict.common.ringNames[ring as 1 | 2 | 3 | 4]}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {places.map((p) => (
                <PlaceCard key={p.key} place={p} dict={dict} locale={locale} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function AccommodationSection({
  dict,
  locale,
  hotels,
  event,
  areaUrl,
  adults,
}: {
  dict: Dict;
  locale: Locale;
  hotels: Parameters<typeof AccommodationList>[0]["hotels"];
  event?: Pick<RaceEvent, "checkin" | "checkout">;
  areaUrl?: string;
  adults?: number;
}) {
  const xt = x(locale);
  if (!hotels.length) return null;
  return (
    <div>
      <SpeedHeading>{xt.accommodation.heading}</SpeedHeading>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
        {xt.accommodation.sub}
      </p>
      <TrustStrip
        items={[
          { icon: "●", label: xt.seo.trust.livePrices },
          { icon: "✓", label: xt.seo.trust.freeCancel },
          { icon: "✓", label: xt.seo.trust.noFees },
        ]}
      />
      <div className="mt-6">
        <AccommodationList
          hotels={hotels}
          event={event}
          adults={adults}
          labels={{
            seePrice: xt.accommodation.seePrice,
            heading: xt.accommodation.heading,
            sub: xt.accommodation.sub,
            category: { 1: "€", 2: "€€", 3: "€€€" },
            kind: xt.accommodation.kind,
            disclaimer: xt.accommodation.disclaimer,
            walk: dict.common.walkToCircuit,
            minToCircuit: dict.common.minToCircuit,
          }}
        />
      </div>
      {areaUrl && (
        <a
          href={areaUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-4 inline-block rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
        >
          {xt.accommodation.seeAllArea} →
        </a>
      )}
      <LodgingListSchema
        hotels={hotels}
        event={event}
        name={xt.accommodation.heading}
      />
    </div>
  );
}

function QuizNudge({ dict, locale }: { dict: Dict; locale: Locale }) {
  const xt = x(locale);
  return (
    <div className="overflow-hidden rounded-3xl bg-ink text-white">
      <div className="h-1.5 bg-gradient-to-r from-amber via-bleu to-amber" />
      <div className="flex flex-col items-start gap-6 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase italic tracking-tight sm:text-4xl">
            {xt.homeQuiz.title}
          </h2>
          <p className="mt-3 max-w-xl text-white/75">{xt.homeQuiz.text}</p>
        </div>
        <Link
          href={hrefFor("quiz", locale)}
          className="shrink-0 rounded-lg bg-amber px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-ink transition hover:brightness-95"
        >
          {xt.homeQuiz.cta}
        </Link>
      </div>
    </div>
  );
}

export function HomeTemplate({ dict, locale }: { dict: Dict; locale: Locale }) {
  const next = nextEvent();
  const events = [...EVENTS].sort((a, b) => a.start.localeCompare(b.start));
  const guides = Object.entries(GUIDE_CONTENT);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-16 sm:py-24">
          <Kicker>{dict.tagline}</Kicker>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold uppercase italic leading-[0.95] tracking-tight sm:text-7xl">
            {dict.home.heroTitle}
          </h1>
          <div className="speedline mt-5 w-40" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {dict.home.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={hrefFor("quiz", locale)}
              className="rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep"
            >
              {x(locale).ctaFindStay}
            </Link>
            <a
              href="#events"
              className="rounded-lg border border-line bg-card px-6 py-3 font-display text-base font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
            >
              {dict.home.ctaSecondary}
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <div id="map" className="scroll-mt-24">
          <SpeedHeading>{dict.common.seeAvailability}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={dict.home.heroTitle}
              note={dict.common.mapNote}
              lat={CIRCUIT.lat}
              lng={CIRCUIT.lng}
              checkin={next.checkin}
              checkout={next.checkout}
              zoom={11}
              locale={locale}
            />
          </div>
        </div>

        <div id="events" className="mt-20 scroll-mt-24">
          <SpeedHeading>{dict.common.nextEvents}</SpeedHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.key} event={e} dict={dict} locale={locale} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <AccommodationSection
            dict={dict}
            locale={locale}
            hotels={topPicks(12)}
            event={next}
          />
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.common.exploreZones}</SpeedHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {dict.home.zonesSub}
          </p>
          <div className="mt-8">
            <ZoneRings dict={dict} locale={locale} />
          </div>
        </div>

        <div className="mt-20">
          <ZoneCompare places={PLACES} dict={dict} locale={locale} />
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.common.exploreTypes}</SpeedHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(["camping", "hotels", "rentals"] as const).map((t) => (
              <GuideCard
                key={t}
                href={hrefFor(`type:${t}`, locale)}
                title={dict.typePage[t].heroTitle}
                description={dict.typePage[t].intro[0]}
                dict={dict}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.common.guidesHeading}</SpeedHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {guides.map(([key, content]) => (
              <GuideCard
                key={key}
                href={hrefFor(`guide:${key}`, locale)}
                title={content[locale].title}
                description={content[locale].description}
                dict={dict}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <QuizNudge dict={dict} locale={locale} />
        </div>

        <div className="mt-20 max-w-3xl">
          <SpeedHeading>{dict.home.seoTitle}</SpeedHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            {dict.home.seoText.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export function EventTemplate({
  dict,
  locale,
  event,
}: {
  dict: Dict;
  locale: Locale;
  event: RaceEvent;
}) {
  const names = dict.eventNames[event.id];
  const year = eventYear(event.start);
  const crosses = CROSS_PAGES.filter((c) => c.eventId === event.id);
  const xt = x(locale);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{dict.eventPage.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {dict.eventPage.title(names.name, year)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">
              {formatDateRange(locale, event.start, event.end)}
            </SlantBadge>
            {!event.datesConfirmed && (
              <span className="text-sm text-muted">({dict.common.datesTBC})</span>
            )}
            <Countdown
              startISO={event.start}
              template={countdownTemplate(dict)}
            />
            <SlantBadge tone="amber">{dict.common.crowd(event.crowd)}</SlantBadge>
          </div>
          <div className="mt-8 max-w-2xl">
            <AmberNote>
              <strong className="font-display uppercase tracking-wide">
                {dict.eventPage.bookingHeading}.
              </strong>{" "}
              {dict.common.bookAhead(event.bookAheadMonths)}
            </AmberNote>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts
          title={xt.seo.keyFactsTitle}
          facts={[
            {
              label: names.short,
              value: formatDateRange(locale, event.start, event.end),
            },
            { label: xt.seo.factCrowd, value: event.crowd },
            {
              label: xt.seo.factBookAhead,
              value: `${event.bookAheadMonths}+ mo`,
              accent: true,
            },
            { label: xt.seo.factListedStays, value: `${HOTELS.length}+` },
          ]}
        />

        <div className="mt-14">
          <SpeedHeading>{dict.eventPage.mapHeading(names.name)}</SpeedHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {dict.eventPage.mapSub}
          </p>
          <div className="mt-6">
            <Stay22Map
              title={dict.eventPage.mapHeading(names.name)}
              note={dict.common.mapNote}
              lat={CIRCUIT.lat}
              lng={CIRCUIT.lng}
              checkin={event.checkin}
              checkout={event.checkout}
              zoom={11}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-20">
          <AccommodationSection
            dict={dict}
            locale={locale}
            hotels={topPicks(15)}
            event={event}
          />
        </div>

        <div className="mt-20">
          <ZoneCompare places={PLACES} dict={dict} locale={locale} />
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.eventPage.zonesHeading}</SpeedHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {dict.eventPage.zonesSub(names.name)}
          </p>
          <div className="mt-8">
            <ZoneRings dict={dict} locale={locale} />
          </div>
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.eventPage.typesHeading}</SpeedHeading>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(["camping", "hotels", "rentals"] as const).map((t) => {
              const cross = crosses.find((c) => c.typeKey === t);
              return (
                <GuideCard
                  key={t}
                  href={
                    cross
                      ? hrefFor(`cross:${cross.key}`, locale)
                      : hrefFor(`type:${t}`, locale)
                  }
                  title={dict.typePage[t].heroTitle}
                  description={dict.typePage[t].intro[0]}
                  dict={dict}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={xt.faq({
              eventName: names.name,
              months: event.bookAheadMonths,
              year,
            })}
          />
        </div>
      </Container>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: `${names.name} ${year}`,
          startDate: event.start,
          endDate: event.end,
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: CIRCUIT.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: CIRCUIT.locality,
              postalCode: CIRCUIT.postalCode,
              addressCountry: CIRCUIT.country,
            },
          },
        }}
      />
    </>
  );
}

export function PlaceTemplate({
  dict,
  locale,
  place,
}: {
  dict: Dict;
  locale: Locale;
  place: Place;
}) {
  const next = nextEvent();
  const events = [...EVENTS].sort((a, b) => a.start.localeCompare(b.start));
  const displayName = place.key === "le-mans-city-centre" ? "Le Mans" : place.name;
  const xt = x(locale);
  const route = routeFor(place.key);
  const hotels = hotelsForZonePadded(place.key, ringOf, 10);

  const facts: Fact[] = [
    { label: dict.placePage.statDistance, value: `${place.km} km` },
    {
      label: xt.route.normalDrive,
      value: place.ring === 1 ? xt.seo.walk : `${place.driveMin} min`,
    },
    {
      label: xt.route.raceWeekDrive,
      value: place.ring === 1 ? xt.seo.walk : `${place.raceWeekMin} min`,
      accent: true,
    },
    { label: xt.seo.factListedStays, value: `${hotelsByZone(place.key).length}` },
  ];
  const sameRing = PLACES.filter(
    (p) => p.ring === place.ring && p.key !== place.key
  );

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{dict.placePage.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {dict.placePage.title(displayName)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="bleu">
              {place.ring === 1
                ? dict.common.walkToCircuit
                : dict.common.minToCircuit(place.driveMin)}
            </SlantBadge>
            {place.station && <SlantBadge tone="ink">{dict.common.station}</SlantBadge>}
            {place.tram && <SlantBadge tone="grass">{dict.common.tram}</SlantBadge>}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        <div className="mt-10 max-w-3xl space-y-5 text-[15px] leading-relaxed">
          <p>{dict.placePage.introByRing[place.ring](place)}</p>
          <Pitboard>
            <ul className="space-y-2">
              <li>{dict.placePage.parkingNote[place.parking]}</li>
              {place.station && <li>{dict.placePage.stationNote}</li>}
              {place.tram && <li>{dict.placePage.tramNote}</li>}
            </ul>
          </Pitboard>
        </div>

        {route && place.ring > 1 && (
          <div className="mt-16">
            <SpeedHeading>{xt.route.heading}</SpeedHeading>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {xt.route.sub}
            </p>
            <div className="mt-6">
              <RouteMap
                place={place}
                route={route}
                labels={{
                  start: xt.route.start,
                  finish: xt.route.finish,
                  normalDrive: xt.route.normalDrive,
                  raceWeekDrive: xt.route.raceWeekDrive,
                  totalDistance: xt.route.totalDistance,
                }}
              />
            </div>
          </div>
        )}

        <div className="mt-16">
          <AccommodationSection
            dict={dict}
            locale={locale}
            hotels={hotels}
            event={next}
            areaUrl={bookingAreaUrl(place, next)}
          />
        </div>

        <div className="mt-16">
          <SpeedHeading>{dict.placePage.mapHeading(displayName)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={dict.placePage.mapHeading(displayName)}
              note={dict.common.mapNote}
              lat={place.lat}
              lng={place.lng}
              checkin={next.checkin}
              checkout={next.checkout}
              zoom={place.ring >= 3 ? 12 : 13}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.placePage.eventsHeading}</SpeedHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {dict.placePage.eventsSub}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.key} event={e} dict={dict} locale={locale} />
            ))}
          </div>
        </div>

        {sameRing.length > 0 && (
          <div className="mt-20">
            <ZoneCompare
              places={[place, ...sameRing]}
              dict={dict}
              locale={locale}
              title={xt.seo.nearbyHeading}
            />
          </div>
        )}

        <div className="mt-20">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={xt.faq({
              zoneName: displayName,
              driveMin: place.driveMin,
              raceWeekMin: place.raceWeekMin,
              ring: place.ring,
              months: next.bookAheadMonths,
            })}
          />
        </div>
      </Container>

      <ZoneSchema
        name={displayName}
        lat={place.lat}
        lng={place.lng}
        description={dict.placePage.metaDescription(displayName, place.driveMin)}
      />
    </>
  );
}
