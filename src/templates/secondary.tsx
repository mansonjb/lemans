import Link from "next/link";
import type { Dict } from "@/i18n";
import type { CrossPage, Locale, StayType } from "@/lib/types";
import { EVENTS, eventByKey } from "@/data/events";
import { CROSS_PAGES } from "@/data/catalog";
import { hrefFor } from "@/lib/registry";
import { CIRCUIT, eventYear, formatDateRange } from "@/lib/seo";
import { Stay22Map } from "@/components/Stay22Map";
import { Countdown } from "@/components/Countdown";
import { FaqBlock } from "@/components/FaqBlock";
import { LeadForm } from "@/components/LeadForm";
import {
  AmberNote,
  Container,
  Kicker,
  Pitboard,
  SlantBadge,
  SpeedHeading,
} from "@/components/ui";
import { GUIDE_CONTENT } from "@/data/guides";
import { nextEvent, ZoneRings } from "./core";

const countdownTemplate = (dict: Dict) =>
  dict.common.daysToGo(-1).replace("-1", "%d");

const ringsForType = (typeKey: StayType["key"]): number[] =>
  typeKey === "hotels" ? [2, 3, 4] : [1, 2, 3];

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
          {content.pitch && (
            <div className="mt-8 max-w-2xl">
              <AmberNote>
                {content.pitch}{" "}
                <Link
                  href={hrefFor("lead", locale)}
                  className="font-semibold text-bleu underline"
                >
                  {dict.nav.listYourHome} →
                </Link>
              </AmberNote>
            </div>
          )}
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
  const intro = dict.crossPage.intro[cross.key] ?? [];

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
            items={dict.eventPage.faq(names.name, event.bookAheadMonths, year)}
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
            href={`/${locale}#map`}
            className="inline-block rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep"
          >
            {dict.home.ctaPrimary}
          </Link>
        </div>
      </article>
    </Container>
  );
}

export function LeadTemplate({ dict, locale }: { dict: Dict; locale: Locale }) {
  const eventOptions = EVENTS.map((e) => ({
    key: e.key,
    label: `${dict.eventNames[e.id].short} ${eventYear(e.start)}`,
  }));

  return (
    <>
      <section className="border-b border-line bg-ink text-white">
        <Container className="py-14 sm:py-20">
          <Kicker>{dict.nav.listYourHome}</Kicker>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase italic leading-[1.02] tracking-tight sm:text-6xl">
            {dict.lead.heroTitle}
          </h1>
          <div className="mt-5 h-[3px] w-40 rounded-full bg-gradient-to-r from-amber to-transparent" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {dict.lead.heroSub}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {dict.lead.benefits.map((b) => (
            <div
              key={b.t}
              className="rounded-2xl border border-line bg-card p-5 shadow-sm"
            >
              <h2 className="font-display text-lg font-semibold uppercase italic tracking-tight text-bleu">
                {b.t}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-line bg-card p-6 shadow-sm sm:p-10">
          <LeadForm
            labels={dict.lead.form}
            eventOptions={eventOptions}
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
