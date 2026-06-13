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
import { eventYear } from "@/lib/seo";
import { x } from "@/i18n/extra";
import { PageShell } from "@/components/PageShell";
import { EventTemplate, HomeTemplate, PlaceTemplate } from "@/templates/core";
import {
  CrossTemplate,
  EventZoneTemplate,
  GuideTemplate,
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
    case "guide": {
      const g = GUIDE_CONTENT[page.ref!][locale];
      title = `${g.title} | ${dict.siteName}`;
      description = g.description;
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
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale: localeParam, slug } = await params;
  const hit = getPage(localeParam, slug);
  if (!hit) notFound();
  const { page, locale } = hit;
  const dict = t(locale);

  let body: ReactNode = null;
  switch (page.template) {
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
    case "guide":
      body = <GuideTemplate dict={dict} locale={locale} guideKey={page.ref!} />;
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
    <PageShell locale={locale} dict={dict} page={page}>
      {body}
    </PageShell>
  );
}
