import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { t } from "@/i18n";
import { LOCALES, type Locale } from "@/lib/types";
import {
  allStaticParams,
  languageAlternates,
  pathFor,
  resolvePage,
  urlFor,
} from "@/lib/registry";
import { eventByKey } from "@/data/events";
import { placeByKey } from "@/data/places";
import { CROSS_PAGES, crossByKey, eventZoneByKey } from "@/data/catalog";
import { GUIDE_CONTENT } from "@/data/guides";
import { leadContent } from "@/i18n/leadpages";
import { leadByKey } from "@/data/leadpages";
import { circuitByKey } from "@/data/circuits";
import { eventYear } from "@/lib/seo";
import { x } from "@/i18n/extra";
import { PageShell } from "@/components/PageShell";
import type { Crumb } from "@/components/Breadcrumbs";
import type { PageDef } from "@/lib/types";
import { hrefFor } from "@/lib/registry";
import { EventTemplate, HomeTemplate, PlaceTemplate } from "@/templates/core";
import {
  GlobalHomeTemplate,
  CircuitSoonTemplate,
  CircuitGuideTemplate,
} from "@/templates/hub";
import { circuitData } from "@/data/circuit-data";
import {
  CircuitTravelTemplate,
  CircuitGuideArticleTemplate,
  CircuitZoneTemplate,
  CircuitFilterTemplate,
} from "@/templates/circuit-pages";
import { MoneyTemplate } from "@/templates/money";
import {
  CrossTemplate,
  EventZoneTemplate,
  GuideTemplate,
  GuidesIndexTemplate,
  QuizTemplate,
  StaticTemplate,
  TravelTemplate,
  TypeTemplate,
} from "@/templates/secondary";

export const dynamicParams = false;

export function generateStaticParams() {
  return allStaticParams();
}

type Props = { params: Promise<{ locale: string; slug?: string[] }> };

function getPage(localeParam: string, slug?: string[]) {
  if (!LOCALES.includes(localeParam as Locale)) return null;
  const locale = localeParam as Locale;
  const page = resolvePage(locale, slug ?? []);
  return page ? { page, locale } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const hit = getPage(localeParam, slug);
  if (!hit) return {};
  const { page, locale } = hit;
  const dict = t(locale);

  let title = dict.home.title;
  let description = dict.home.metaDescription;

  switch (page.template) {
    case "globalhome": {
      title = `${x(locale).hub.heroTitle} | ${dict.siteName}`;
      description = x(locale).hub.heroSub;
      break;
    }
    case "circuitsoon": {
      const c = circuitByKey(page.ref!)!;
      title = `${x(locale).hub.soonTitle(c.name)} | ${dict.siteName}`;
      description = x(locale).hub.soonIntro(c.name);
      break;
    }
    case "circuithub": {
      const c = circuitByKey(page.ref!)!;
      const d = circuitData(c.key)!;
      title = `${x(locale).circuitGuide.staysHeading(c.name)} | ${dict.siteName}`;
      description = x(locale).circuitGuide.intro(c.name, d.event.name);
      break;
    }
    case "circuittravel": {
      const c = circuitByKey(page.ref!)!;
      const d = circuitData(c.key)!;
      title = `${x(locale).circuitPages.travelTitle(c.name)} | ${dict.siteName}`;
      description = x(locale).circuitPages.travelIntro(c.name, d.event.name);
      break;
    }
    case "circuitguide": {
      const c = circuitByKey(page.ref!)!;
      const d = circuitData(c.key)!;
      title = `${x(locale).circuitPages.guideTitle(c.name)} | ${dict.siteName}`;
      description = x(locale).circuitPages.guideIntro(c.name, d.event.name);
      break;
    }
    case "circuitzone": {
      const [ck, zk] = page.ref!.split(":");
      const c = circuitByKey(ck)!;
      const d = circuitData(ck)!;
      const z = d.zones.find((zz) => zz.key === zk)!;
      title = `${x(locale).circuitPages.zoneTitle(z.name, c.name)} | ${dict.siteName}`;
      description = x(locale).circuitPages.zoneIntro(z.name, c.name, d.event.name, z.driveMin);
      break;
    }
    case "circuitfilter": {
      const [ck, fk] = page.ref!.split(":");
      const c = circuitByKey(ck)!;
      const d = circuitData(ck)!;
      const k = fk as "hotels" | "campsites" | "walking-distance" | "cheap";
      title = `${x(locale).circuitPages.filterTitle[k](c.name)} | ${dict.siteName}`;
      description = x(locale).circuitPages.filterIntro[k](c.name, d.event.name);
      break;
    }
    case "event": {
      const e = eventByKey(page.ref!)!;
      const name = dict.eventNames[e.id].name;
      title = dict.eventPage.title(name, eventYear(e.start));
      description = dict.eventPage.metaDescription(name, eventYear(e.start));
      break;
    }
    case "place": {
      const p = placeByKey(page.ref!)!;
      const name = p.key === "le-mans-city-centre" ? "Le Mans" : p.name;
      title = dict.placePage.title(name);
      description = dict.placePage.metaDescription(name, p.driveMin);
      break;
    }
    case "type": {
      const c = dict.typePage[page.ref as "camping" | "hotels" | "rentals"];
      title = c.title;
      description = c.metaDescription;
      break;
    }
    case "cross": {
      const cr = CROSS_PAGES.find((c) => c.key === page.ref)!;
      const e = eventByKey(cr.eventId)!;
      const name = dict.eventNames[e.id].name;
      const tc = dict.typePage[cr.typeKey];
      title = dict.crossPage.title(tc.heroTitle, name, eventYear(e.start));
      description = dict.crossPage.metaDescription(tc.heroTitle, name);
      break;
    }
    case "eventzone": {
      const ez = eventZoneByKey(page.ref!)!;
      const e = eventByKey(ez.eventId)!;
      const p = placeByKey(ez.placeKey)!;
      const name = dict.eventNames[e.id].name;
      const zone = p.key === "le-mans-city-centre" ? "Le Mans" : p.name;
      title = `${x(locale).eventZone.title(name, zone, eventYear(e.start))} | ${dict.siteName}`;
      description = x(locale).eventZone.metaDescription(name, zone, p.driveMin);
      break;
    }
    case "money": {
      const c = leadContent(page.ref!, locale)!;
      title = `${c.title} | ${dict.siteName}`;
      description = c.metaDescription;
      break;
    }
    case "guide": {
      const g = GUIDE_CONTENT[page.ref!][locale];
      title = `${g.title} | ${dict.siteName}`;
      description = g.description;
      break;
    }
    case "guideindex": {
      title = `${dict.common.guidesHeading} · Le Mans | ${dict.siteName}`;
      description = GUIDE_CONTENT["everything-booked"][locale].description;
      break;
    }
    case "quiz": {
      title = `${x(locale).quiz.title} | ${dict.siteName}`;
      description = x(locale).quiz.metaDescription;
      break;
    }
    case "travel": {
      title = `${x(locale).travel.title} | ${dict.siteName}`;
      description = x(locale).travel.metaDescription;
      break;
    }
    case "about":
    case "contact":
    case "legal":
    case "privacy": {
      title = `${dict[page.template].title} | ${dict.siteName}`;
      description = dict[page.template].paragraphs[0];
      break;
    }
  }

  const headline = title.split(" | ")[0];
  const ogImage = `/api/og?title=${encodeURIComponent(headline)}&kicker=${encodeURIComponent(dict.tagline)}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathFor(page, locale),
      languages: languageAlternates(page),
    },
    openGraph: {
      title,
      description,
      url: urlFor(page, locale),
      siteName: dict.siteName,
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: headline }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function buildCrumbs(
  page: PageDef,
  locale: Locale,
  dict: ReturnType<typeof t>
): Crumb[] {
  const crumbs: Crumb[] = [
    { name: dict.common.backHome, href: `/${locale}` },
  ];
  const here = pathFor(page, locale);
  const lmScoped = new Set([
    "event",
    "place",
    "type",
    "cross",
    "eventzone",
    "money",
    "guide",
    "guideindex",
    "quiz",
    "travel",
  ]);
  if (lmScoped.has(page.template)) {
    crumbs.push({ name: "Le Mans", href: hrefFor("circuit:le-mans", locale) });
  }
  const circuitSub = new Set([
    "circuittravel",
    "circuitguide",
    "circuitzone",
    "circuitfilter",
  ]);
  if (circuitSub.has(page.template)) {
    const ck = page.ref!.split(":")[0];
    const c = circuitByKey(ck);
    if (c) crumbs.push({ name: c.name, href: hrefFor(`circuit:${ck}`, locale) });
  }
  switch (page.template) {
    case "home":
    case "circuitsoon":
    case "circuithub":
      crumbs.push({ name: circuitByKey(page.ref!)?.name ?? page.ref!, href: here });
      break;
    case "circuittravel":
      crumbs.push({ name: x(locale).circuitPages.travelKicker, href: here });
      break;
    case "circuitguide":
      crumbs.push({ name: x(locale).circuitPages.guideKicker, href: here });
      break;
    case "circuitzone": {
      const [ck, zk] = page.ref!.split(":");
      const z = circuitData(ck)!.zones.find((zz) => zz.key === zk)!;
      crumbs.push({ name: z.name, href: here });
      break;
    }
    case "circuitfilter": {
      const [ck, fk] = page.ref!.split(":");
      const k = fk as "hotels" | "campsites" | "walking-distance" | "cheap";
      crumbs.push({
        name: x(locale).circuitPages.filterTitle[k](circuitByKey(ck)!.name),
        href: here,
      });
      break;
    }
    case "event":
      crumbs.push({
        name: dict.eventNames[eventByKey(page.ref!)!.id].name,
        href: here,
      });
      break;
    case "place": {
      const p = placeByKey(page.ref!)!;
      crumbs.push({
        name: p.key === "le-mans-city-centre" ? "Le Mans" : p.name,
        href: here,
      });
      break;
    }
    case "type":
      crumbs.push({
        name: dict.typePage[page.ref as "camping" | "hotels" | "rentals"]
          .heroTitle,
        href: here,
      });
      break;
    case "cross": {
      const cr = crossByKey(page.ref!)!;
      const e = eventByKey(cr.eventId)!;
      crumbs.push({
        name: dict.eventNames[e.id].name,
        href: hrefFor(`event:${e.key}`, locale),
      });
      crumbs.push({ name: dict.typePage[cr.typeKey].heroTitle, href: here });
      break;
    }
    case "eventzone": {
      const ez = eventZoneByKey(page.ref!)!;
      const e = eventByKey(ez.eventId)!;
      const p = placeByKey(ez.placeKey)!;
      crumbs.push({
        name: dict.eventNames[e.id].name,
        href: hrefFor(`event:${e.key}`, locale),
      });
      crumbs.push({
        name: p.key === "le-mans-city-centre" ? "Le Mans" : p.name,
        href: here,
      });
      break;
    }
    case "money": {
      const lp = leadByKey(page.ref!)!;
      const e = eventByKey(lp.eventKey)!;
      crumbs.push({
        name: dict.eventNames[e.id].name,
        href: hrefFor(`event:${e.key}`, locale),
      });
      crumbs.push({
        name: leadContent(page.ref!, locale)?.h1 ?? page.ref!,
        href: here,
      });
      break;
    }
    case "guide":
      crumbs.push({ name: GUIDE_CONTENT[page.ref!][locale].title, href: here });
      break;
    case "guideindex":
      crumbs.push({ name: dict.common.guidesHeading, href: here });
      break;
    case "quiz":
      crumbs.push({ name: x(locale).quiz.title, href: here });
      break;
    case "travel":
      crumbs.push({ name: x(locale).travel.title, href: here });
      break;
    case "about":
    case "contact":
    case "legal":
    case "privacy":
      crumbs.push({ name: dict[page.template].title, href: here });
      break;
  }
  return crumbs;
}

export default async function Page({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const hit = getPage(localeParam, slug);
  if (!hit) notFound();
  const { page, locale } = hit;
  const dict = t(locale);
  const crumbs = buildCrumbs(page, locale, dict);

  let body: ReactNode = null;
  switch (page.template) {
    case "globalhome":
      body = <GlobalHomeTemplate dict={dict} locale={locale} />;
      break;
    case "circuitsoon":
      body = (
        <CircuitSoonTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(page.ref!)!}
        />
      );
      break;
    case "circuithub":
      body = (
        <CircuitGuideTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(page.ref!)!}
          data={circuitData(page.ref!)!}
        />
      );
      break;
    case "circuittravel":
      body = (
        <CircuitTravelTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(page.ref!)!}
          data={circuitData(page.ref!)!}
        />
      );
      break;
    case "circuitguide":
      body = (
        <CircuitGuideArticleTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(page.ref!)!}
          data={circuitData(page.ref!)!}
        />
      );
      break;
    case "circuitzone": {
      const [ck, zk] = page.ref!.split(":");
      const d = circuitData(ck)!;
      body = (
        <CircuitZoneTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(ck)!}
          data={d}
          zone={d.zones.find((z) => z.key === zk)!}
        />
      );
      break;
    }
    case "circuitfilter": {
      const [ck, fk] = page.ref!.split(":");
      body = (
        <CircuitFilterTemplate
          dict={dict}
          locale={locale}
          circuit={circuitByKey(ck)!}
          data={circuitData(ck)!}
          filterKey={fk}
        />
      );
      break;
    }
    case "home":
      body = <HomeTemplate dict={dict} locale={locale} />;
      break;
    case "event":
      body = (
        <EventTemplate dict={dict} locale={locale} event={eventByKey(page.ref!)!} />
      );
      break;
    case "place":
      body = (
        <PlaceTemplate dict={dict} locale={locale} place={placeByKey(page.ref!)!} />
      );
      break;
    case "type":
      body = (
        <TypeTemplate
          dict={dict}
          locale={locale}
          typeKey={page.ref as "camping" | "hotels" | "rentals"}
        />
      );
      break;
    case "cross":
      body = (
        <CrossTemplate
          dict={dict}
          locale={locale}
          cross={crossByKey(page.ref!)!}
        />
      );
      break;
    case "eventzone":
      body = (
        <EventZoneTemplate
          dict={dict}
          locale={locale}
          page={eventZoneByKey(page.ref!)!}
        />
      );
      break;
    case "money":
      body = (
        <MoneyTemplate dict={dict} locale={locale} page={leadByKey(page.ref!)!} />
      );
      break;
    case "guide":
      body = <GuideTemplate dict={dict} locale={locale} guideKey={page.ref!} />;
      break;
    case "guideindex":
      body = <GuidesIndexTemplate dict={dict} locale={locale} />;
      break;
    case "quiz":
      body = <QuizTemplate dict={dict} locale={locale} />;
      break;
    case "travel":
      body = <TravelTemplate dict={dict} locale={locale} />;
      break;
    default:
      body = (
        <StaticTemplate
          dict={dict}
          section={page.template as "about" | "contact" | "legal" | "privacy"}
        />
      );
  }

  return (
    <PageShell locale={locale} dict={dict} page={page} breadcrumbs={crumbs}>
      {body}
    </PageShell>
  );
}
