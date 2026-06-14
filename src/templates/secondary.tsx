import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import type {
  CrossPage,
  EventZonePage,
  Locale,
  StayType,
} from "@/lib/types";
import { EVENTS, eventByKey } from "@/data/events";
import { PLACES, placeByKey, ringOf } from "@/data/places";
import { CROSS_PAGES } from "@/data/catalog";
import {
  HOTELS,
  hotelsByZone,
  hotelsForZonePadded,
  hotelSlug,
  zoneImage,
} from "@/data/hotels";
import { hasHotelImage, hotelImageSrc } from "@/data/hotel-images";
import { routeFor } from "@/data/routes";
import { hrefFor } from "@/lib/registry";
import { bookingAreaUrl, bookingBaseUrl } from "@/lib/booking";
import { CIRCUIT, eventYear, formatDateRange } from "@/lib/seo";
import { Stay22Map } from "@/components/Stay22Map";
import { Countdown } from "@/components/Countdown";
import { FaqBlock } from "@/components/FaqBlock";
import { FlightWidget } from "@/components/FlightWidget";
import { RouteMap } from "@/components/RouteMap";
import { KeyFacts, type Fact } from "@/components/KeyFacts";
import { Quiz, type QuizEvent, type QuizHotel, type QuizZone } from "@/components/Quiz";
import {
  AmberNote,
  Container,
  Kicker,
  Pitboard,
  SlantBadge,
  SpeedHeading,
} from "@/components/ui";
import { GUIDE_CONTENT } from "@/data/guides";
import { AccommodationSection, nextEvent, ZoneRings } from "./core";

const countdownTemplate = (dict: Dict) =>
  dict.common.daysToGo(-1).replace("-1", "%d");

const ringsForType = (typeKey: StayType["key"]): number[] =>
  typeKey === "hotels" ? [2, 3, 4] : [1, 2, 3];

const KIND_OF: Record<StayType["key"], "hotel" | "camping" | "rental"> = {
  hotels: "hotel",
  camping: "camping",
  rentals: "rental",
};

export function TypeTemplate({
  dict,
  locale,
  typeKey,
}: {
  dict: Dict;
  locale: Locale;
  typeKey: StayType["key"];
}) {
  const content = dict.typePage[typeKey];
  const next = nextEvent();
  const crosses = CROSS_PAGES.filter((c) => c.typeKey === typeKey);
  const hotels = HOTELS.filter((h) => h.kind === KIND_OF[typeKey]).slice(0, 14);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{dict.common.exploreTypes}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {content.heroTitle}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            {content.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <SpeedHeading>{dict.typePage.mapHeading}</SpeedHeading>
        <div className="mt-6">
          <Stay22Map
            title={content.heroTitle}
            note={dict.common.mapNote}
            lat={CIRCUIT.lat}
            lng={CIRCUIT.lng}
            checkin={next.checkin}
            checkout={next.checkout}
            zoom={11}
            locale={locale}
          />
        </div>

        {hotels.length > 0 && (
          <div className="mt-16">
            <AccommodationSection
              dict={dict}
              locale={locale}
              hotels={hotels}
              event={next}
            />
          </div>
        )}

        {crosses.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {crosses.map((c) => {
              const ev = eventByKey(c.eventId);
              if (!ev) return null;
              return (
                <Link
                  key={c.key}
                  href={hrefFor(`cross:${c.key}`, locale)}
                  className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
                >
                  {content.heroTitle} · {dict.eventNames[ev.id].short}{" "}
                  {eventYear(ev.start)} →
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-20">
          <SpeedHeading>{dict.typePage.zonesHeading}</SpeedHeading>
          <div className="mt-8">
            <ZoneRings dict={dict} locale={locale} rings={ringsForType(typeKey)} />
          </div>
        </div>
      </Container>
    </>
  );
}

export function CrossTemplate({
  dict,
  locale,
  cross,
}: {
  dict: Dict;
  locale: Locale;
  cross: CrossPage;
}) {
  const event = eventByKey(cross.eventId);
  if (!event) return null;
  const names = dict.eventNames[event.id];
  const year = eventYear(event.start);
  const typeContent = dict.typePage[cross.typeKey];
  // Some event x type combos have no bespoke intro yet; fall back to the
  // localised type description so no page ships thin/empty.
  const bespoke = dict.crossPage.intro[cross.key];
  const intro = bespoke && bespoke.length ? bespoke : typeContent.intro;
  const xt = x(locale);
  const hotels = HOTELS.filter((h) => h.kind === KIND_OF[cross.typeKey]).slice(
    0,
    14
  );

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{dict.eventPage.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {dict.crossPage.title(typeContent.heroTitle, names.name, year)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">
              {formatDateRange(locale, event.start, event.end)}
            </SlantBadge>
            {!event.datesConfirmed && (
              <span className="text-sm text-muted">({dict.common.datesTBC})</span>
            )}
            <Countdown startISO={event.start} template={countdownTemplate(dict)} />
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            {intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 max-w-2xl">
            <AmberNote>{dict.common.bookAhead(event.bookAheadMonths)}</AmberNote>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <SpeedHeading>{dict.eventPage.mapHeading(names.name)}</SpeedHeading>
        <div className="mt-6">
          <Stay22Map
            title={dict.crossPage.title(typeContent.heroTitle, names.name, year)}
            note={dict.common.mapNote}
            lat={CIRCUIT.lat}
            lng={CIRCUIT.lng}
            checkin={event.checkin}
            checkout={event.checkout}
            zoom={11}
            locale={locale}
          />
        </div>

        {hotels.length > 0 && (
          <div className="mt-16">
            <AccommodationSection
              dict={dict}
              locale={locale}
              hotels={hotels}
              event={event}
            />
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hrefFor(`event:${event.key}`, locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {names.name} {year} →
          </Link>
          <Link
            href={hrefFor(`type:${cross.typeKey}`, locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {typeContent.heroTitle} →
          </Link>
        </div>

        <div className="mt-20">
          <SpeedHeading>{dict.eventPage.zonesHeading}</SpeedHeading>
          <div className="mt-8">
            <ZoneRings
              dict={dict}
              locale={locale}
              rings={ringsForType(cross.typeKey)}
            />
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
    </>
  );
}

export function EventZoneTemplate({
  dict,
  locale,
  page,
}: {
  dict: Dict;
  locale: Locale;
  page: EventZonePage;
}) {
  const event = eventByKey(page.eventId);
  const place = placeByKey(page.placeKey);
  if (!event || !place) return null;
  const names = dict.eventNames[event.id];
  const year = eventYear(event.start);
  const displayName =
    place.key === "le-mans-city-centre" ? "Le Mans" : place.name;
  const xt = x(locale);
  const route = routeFor(place.key);
  const hotels = hotelsForZonePadded(place.key, ringOf, 10);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{xt.eventZone.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {xt.eventZone.title(names.name, displayName, year)}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">
              {formatDateRange(locale, event.start, event.end)}
            </SlantBadge>
            <SlantBadge tone="bleu">
              {place.ring === 1
                ? dict.common.walkToCircuit
                : dict.common.minToCircuit(place.driveMin)}
            </SlantBadge>
            <Countdown startISO={event.start} template={countdownTemplate(dict)} />
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            {xt.eventZone
              .intro(names.name, displayName, place.driveMin, place.raceWeekMin, place.ring)
              .map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts
          title={xt.seo.keyFactsTitle}
          facts={
            [
              { label: names.short, value: formatDateRange(locale, event.start, event.end) },
              { label: xt.seo.factDistance, value: `${place.km} km` },
              {
                label: xt.route.raceWeekDrive,
                value: place.ring === 1 ? xt.seo.walk : `${place.raceWeekMin} min`,
                accent: true,
              },
              {
                label: xt.seo.factListedStays,
                value: `${hotelsByZone(place.key).length || hotels.length}`,
              },
            ] as Fact[]
          }
        />

        <div className="mt-14" />
        {route && place.ring > 1 && (
          <div>
            <SpeedHeading>{xt.eventZone.routeHeading(displayName)}</SpeedHeading>
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

        <div className={route && place.ring > 1 ? "mt-16" : ""}>
          <SpeedHeading>{xt.eventZone.mapHeading(displayName)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={xt.eventZone.mapHeading(displayName)}
              note={dict.common.mapNote}
              lat={place.lat}
              lng={place.lng}
              checkin={event.checkin}
              checkout={event.checkout}
              zoom={place.ring >= 3 ? 12 : 13}
              locale={locale}
            />
          </div>
        </div>

        <div className="mt-16">
          <AccommodationSection
            dict={dict}
            locale={locale}
            hotels={hotels}
            event={event}
            areaUrl={bookingAreaUrl(place, event)}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={hrefFor(`event:${event.key}`, locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {names.name} {year} →
          </Link>
          <Link
            href={hrefFor(`place:${place.key}`, locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {displayName} →
          </Link>
        </div>

        <div className="mt-20">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={xt.faq({
              eventName: names.name,
              zoneName: displayName,
              driveMin: place.driveMin,
              raceWeekMin: place.raceWeekMin,
              ring: place.ring,
              months: event.bookAheadMonths,
              year,
            })}
          />
        </div>
      </Container>
    </>
  );
}

export function GuideTemplate({
  dict,
  locale,
  guideKey,
}: {
  dict: Dict;
  locale: Locale;
  guideKey: string;
}) {
  const content = GUIDE_CONTENT[guideKey][locale];

  return (
    <Container className="py-14 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Kicker>{dict.guides.heading}</Kicker>
        <h1 className="mt-3 font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-5xl">
          {content.title}
        </h1>
        <div className="speedline mt-5 w-40" />
        <p className="mt-4 text-sm text-muted">{dict.common.updated}</p>
        <div className="mt-8 space-y-4 text-lg leading-relaxed">
          {content.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {content.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-display text-2xl font-semibold uppercase italic tracking-tight sm:text-3xl">
              {s.heading}
            </h2>
            <div className="speedline mt-2 w-16" />
            <div className="mt-5 space-y-4 text-[16px] leading-relaxed">
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {s.list && (
              <div className="mt-5">
                <Pitboard>
                  <ul className="list-disc space-y-2 pl-4">
                    {s.list.map((li) => (
                      <li key={li.slice(0, 24)}>{li}</li>
                    ))}
                  </ul>
                </Pitboard>
              </div>
            )}
          </section>
        ))}
        <div className="mt-12">
          <Link
            href={hrefFor("quiz", locale)}
            className="inline-block rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep"
          >
            {x(locale).ctaFindStay}
          </Link>
        </div>
      </article>
    </Container>
  );
}

export function TravelTemplate({ dict, locale }: { dict: Dict; locale: Locale }) {
  const xt = x(locale);
  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{xt.travel.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {xt.travel.title}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            {xt.travel.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <FlightWidget labels={xt.travel.flight} />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {xt.travel.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-semibold uppercase italic tracking-tight">
                {s.heading}
              </h2>
              <div className="speedline mt-2 w-16" />
              <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href={hrefFor("guide:getting-there", locale)}
            className="inline-block rounded-lg border border-line bg-card px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide transition hover:border-bleu hover:text-bleu"
          >
            {GUIDE_CONTENT["getting-there"][locale].title} →
          </Link>
        </div>
      </Container>
    </>
  );
}

export function QuizTemplate({ dict, locale }: { dict: Dict; locale: Locale }) {
  const xt = x(locale);

  const events: QuizEvent[] = [...EVENTS]
    .sort((a, b) => a.start.localeCompare(b.start))
    .map((e) => ({
      key: e.key,
      id: e.id,
      name: `${dict.eventNames[e.id].name} ${eventYear(e.start)}`,
      checkin: e.checkin,
      checkout: e.checkout,
      lat: CIRCUIT.lat,
      lng: CIRCUIT.lng,
    }));

  const zones: QuizZone[] = PLACES.map((p) => ({
    key: p.key,
    name: p.key === "le-mans-city-centre" ? "Le Mans" : p.name,
    ring: p.ring,
    driveMin: p.driveMin,
    raceWeekMin: p.raceWeekMin,
    lat: p.lat,
    lng: p.lng,
    href: hrefFor(`place:${p.key}`, locale),
  }));

  const hotels: QuizHotel[] = HOTELS.map((h) => {
    const slug = hotelSlug(h.name);
    return {
      name: h.name,
      zone: h.zone,
      category: h.category,
      kind: h.kind,
      note: h.note,
      url: bookingBaseUrl(h),
      img: hasHotelImage(slug)
        ? hotelImageSrc(slug)
        : zoneImage(h.zone) ?? undefined,
    };
  });

  return (
    <>
      <section className="border-b border-line bg-ink text-white">
        <Container className="py-14 sm:py-20">
          <Kicker>{xt.quiz.heroKicker}</Kicker>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {xt.quiz.title}
          </h1>
          <div className="mt-5 h-[3px] w-40 rounded-full bg-gradient-to-r from-amber to-transparent" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {xt.quiz.intro}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-card p-6 shadow-sm sm:p-10">
          <Quiz
            events={events}
            zones={zones}
            hotels={hotels}
            labels={xt.quiz.labels}
            locale={locale}
          />
        </div>
      </Container>
    </>
  );
}

export function StaticTemplate({
  dict,
  section,
}: {
  dict: Dict;
  section: "about" | "contact" | "legal" | "privacy";
}) {
  const content = dict[section];
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold uppercase italic tracking-tight sm:text-5xl">
          {content.title}
        </h1>
        <div className="speedline mt-5 w-40" />
        <div className="mt-8 space-y-4 text-[16px] leading-relaxed text-muted">
          {content.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Container>
  );
}
