import Link from "next/link";
import type { Dict } from "@/i18n";
import { x } from "@/i18n/extra";
import { homeFaq } from "@/i18n/homefaq";
import type { Locale } from "@/lib/types";
import type { Circuit } from "@/data/circuits";
import { hrefFor } from "@/lib/registry";
import { Container, Kicker, SlantBadge, SpeedHeading } from "@/components/ui";
import { CircuitNetwork } from "@/components/CircuitNetwork";
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
            <SlantBadge tone="ink">{circuit.country}</SlantBadge>
            <SlantBadge tone="amber">{circuit.events}</SlantBadge>
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
