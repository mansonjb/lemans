import Link from "next/link";
import type { Dict } from "@/i18n";
import type { Locale, Place, RaceEvent } from "@/lib/types";
import { EVENTS } from "@/data/events";
import { PLACES } from "@/data/places";
import { CROSS_PAGES } from "@/data/catalog";
import { hrefFor } from "@/lib/registry";
import { CIRCUIT, eventYear, formatDateRange } from "@/lib/seo";
import { Stay22Map } from "@/components/Stay22Map";
import { Countdown } from "@/components/Countdown";
import { EventCard, GuideCard, PlaceCard } from "@/components/cards";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd } from "@/components/JsonLd";
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

/** "%d days to go" template extracted from the dict function. */
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
            <a
              href="#map"
              className="rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep"
            >
              {dict.home.ctaPrimary}
            </a>
            <a
              href="#events"
              className="rounded-lg border border-line bg-card px-6 py-3 font-display text-base font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
            >
              {dict.home.ctaSecondary}
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-14" >
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
          <SpeedHeading>{dict.common.exploreZones}</SpeedHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            {dict.home.zonesSub}
          </p>
          <div className="mt-8">
            <ZoneRings dict={dict} locale={locale} />
          </div>
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

        <div className="mt-20 overflow-hidden rounded-3xl bg-ink text-white">
          <div className="h-1.5 bg-gradient-to-r from-amber via-bleu to-amber" />
          <div className="flex flex-col items-start gap-6 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase italic tracking-tight sm:text-4xl">
                {dict.home.leadTitle}
              </h2>
              <p className="mt-3 max-w-xl text-white/75">{dict.home.leadText}</p>
            </div>
            <Link
              href={hrefFor("lead", locale)}
              className="shrink-0 rounded-lg bg-amber px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-ink transition hover:brightness-95"
            >
              {dict.home.leadCta}
            </Link>
          </div>
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
            items={dict.eventPage.faq(names.name, event.bookAheadMonths, year)}
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

  const stats: { label: string; value: string }[] = [
    { label: dict.placePage.statDistance, value: `${place.km} km` },
    place.ring === 1
      ? { label: dict.placePage.statWalk, value: "✓" }
      : { label: dict.placePage.statNormal, value: `${place.driveMin} min` },
    {
      label: dict.placePage.statRaceWeek,
      value: place.ring === 1 ? "✓" : `${place.raceWeekMin} min`,
    },
    {
      label: dict.common.parking[place.parking].split(",")[0],
      value: place.parking === "easy" ? "✓✓" : place.parking === "medium" ? "✓" : "!",
    },
  ];

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
        <SpeedHeading>{dict.placePage.statsHeading}</SpeedHeading>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-card p-5 shadow-sm"
            >
              <p className="font-display text-3xl font-bold italic tabular-nums text-bleu">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>

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
      </Container>
    </>
  );
}
