import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import { leadContent } from "@/i18n/leadpages";
import type { Locale } from "@/lib/types";
import { eventByKey } from "@/data/events";
import { PLACES, placeByKey, ringOf } from "@/data/places";
import { hotelsForZonePadded } from "@/data/hotels";
import { type LeadPage, leadHotels } from "@/data/leadpages";
import { routeFor } from "@/data/routes";
import { hrefFor } from "@/lib/registry";
import { bookingAreaUrl } from "@/lib/booking";
import { CIRCUIT, eventYear, formatDateRange } from "@/lib/seo";
import { Stay22Map } from "@/components/Stay22Map";
import { Countdown } from "@/components/Countdown";
import { FaqBlock } from "@/components/FaqBlock";
import { FlightWidget } from "@/components/FlightWidget";
import { RouteMap } from "@/components/RouteMap";
import { ZoneCompare } from "@/components/ZoneCompare";
import { KeyFacts, type Fact } from "@/components/KeyFacts";
import { Container, Kicker, SlantBadge, SpeedHeading } from "@/components/ui";
import { AccommodationSection } from "./core";

const countdownTemplate = (dict: Dict) =>
  dict.common.daysToGo(-1).replace("-1", "%d");

export function MoneyTemplate({
  dict,
  locale,
  page,
}: {
  dict: Dict;
  locale: Locale;
  page: LeadPage;
}) {
  const content = leadContent(page.key, locale);
  const event = eventByKey(page.eventKey);
  if (!content || !event) return null;
  const xt = x(locale);
  const year = eventYear(event.start);
  const names = dict.eventNames[event.id];

  const focusPlace = page.focus ? placeByKey(page.focus) : undefined;
  const lat = focusPlace?.lat ?? CIRCUIT.lat;
  const lng = focusPlace?.lng ?? CIRCUIT.lng;

  let hotels = leadHotels(page);
  // For thin filters, pad with the same zones' inventory to keep a rich list.
  if (hotels.length < 8 && page.zoneKeys?.length) {
    hotels = page.zoneKeys.flatMap((z) => hotelsForZonePadded(z, ringOf, 6));
  }
  hotels = hotels.slice(0, 15);

  const compareZones =
    page.zoneKeys?.length
      ? PLACES.filter((p) => page.zoneKeys!.includes(p.key))
      : page.ringMax
        ? PLACES.filter((p) => p.ring <= page.ringMax!)
        : PLACES;

  const duelRoutes =
    page.variant === "duel"
      ? compareZones
          .map((p) => ({ p, r: routeFor(p.key) }))
          .filter((x) => x.r && x.p.ring > 1)
      : [];

  const facts: Fact[] = [
    { label: names.short, value: formatDateRange(locale, event.start, event.end) },
    { label: xt.seo.factCrowd, value: event.crowd },
    {
      label: xt.seo.factBookAhead,
      value: `${event.bookAheadMonths}+ mo`,
      accent: true,
    },
    { label: xt.seo.factListedStays, value: `${hotels.length}` },
  ];

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-card to-paper">
        <Container className="py-14 sm:py-20">
          <Kicker>{content.kicker}</Kicker>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {content.h1}
          </h1>
          <div className="speedline mt-5 w-40" />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SlantBadge tone="ink">
              {formatDateRange(locale, event.start, event.end)}
            </SlantBadge>
            <Countdown startISO={event.start} template={countdownTemplate(dict)} />
          </div>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted">
            {content.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <KeyFacts title={xt.seo.keyFactsTitle} facts={facts} />

        <div className="mt-14">
          <SpeedHeading>{xt.eventZone.mapHeading(names.short)}</SpeedHeading>
          <div className="mt-6">
            <Stay22Map
              title={content.h1}
              note={dict.common.mapNote}
              lat={lat}
              lng={lng}
              checkin={event.checkin}
              checkout={event.checkout}
              zoom={page.focus ? 13 : page.ringMax && page.ringMax <= 2 ? 12 : 11}
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
            areaUrl={
              focusPlace ? bookingAreaUrl(focusPlace, event) : undefined
            }
          />
        </div>

        {page.variant === "origin" && (
          <div className="mt-16">
            <FlightWidget labels={xt.travel.flight} />
          </div>
        )}

        {duelRoutes.length > 0 && (
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {duelRoutes.map(({ p, r }) => (
              <div key={p.key}>
                <SpeedHeading>{xt.eventZone.routeHeading(p.name)}</SpeedHeading>
                <div className="mt-4">
                  <RouteMap
                    place={p}
                    route={r!}
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
            ))}
          </div>
        )}

        {content.section && (
          <div className="mt-16 max-w-3xl">
            <SpeedHeading>{content.section.heading}</SpeedHeading>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
              {content.section.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {content.section.list && (
              <ul className="mt-5 space-y-2 rounded-2xl border border-line bg-card p-5 text-[15px] shadow-sm">
                {content.section.list.map((li) => (
                  <li key={li.slice(0, 24)} className="flex gap-2">
                    <span className="text-bleu">▸</span>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-16">
          <ZoneCompare
            places={compareZones}
            dict={dict}
            locale={locale}
            title={
              page.variant === "duel" ? xt.seo.nearbyHeading : undefined
            }
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          <Link
            href={hrefFor(`event:${event.key}`, locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {names.name} {year} →
          </Link>
          <Link
            href={hrefFor("quiz", locale)}
            className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold transition hover:border-bleu hover:text-bleu"
          >
            {xt.ctaFindStay} →
          </Link>
        </div>

        <div className="mt-20">
          <FaqBlock
            heading={dict.common.faqHeading}
            items={xt.faq({
              eventName: names.name,
              months: event.bookAheadMonths,
              year,
              zoneName: focusPlace
                ? focusPlace.key === "le-mans-city-centre"
                  ? "Le Mans"
                  : focusPlace.name
                : undefined,
              driveMin: focusPlace?.driveMin,
              raceWeekMin: focusPlace?.raceWeekMin,
              ring: focusPlace?.ring,
            })}
          />
        </div>
      </Container>
    </>
  );
}
