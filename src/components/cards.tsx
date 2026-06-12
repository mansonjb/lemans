import Link from "next/link";
import type { Dict } from "@/i18n";
import type { Locale, Place, RaceEvent } from "@/lib/types";
import { hrefFor } from "@/lib/registry";
import { eventYear, formatDateRange } from "@/lib/seo";
import { SlantBadge } from "./ui";

const ACCENT_BAR: Record<string, string> = {
  blue: "bg-bleu",
  red: "bg-signal",
  amber: "bg-amber",
  green: "bg-grass",
};

export function EventCard({
  event,
  dict,
  locale,
}: {
  event: RaceEvent;
  dict: Dict;
  locale: Locale;
}) {
  const names = dict.eventNames[event.id];
  return (
    <Link
      href={hrefFor(`event:${event.key}`, locale)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`h-1.5 ${ACCENT_BAR[event.accent] ?? "bg-bleu"}`} />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {formatDateRange(locale, event.start, event.end)}
          {!event.datesConfirmed && ` (${dict.common.datesTBC})`}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold uppercase italic leading-tight tracking-tight">
          {names.name} {eventYear(event.start)}
        </h3>
        <p className="mt-2 text-sm text-muted">{dict.common.crowd(event.crowd)}</p>
        <p className="mt-auto pt-4 text-sm font-semibold text-bleu group-hover:underline">
          {dict.common.viewEvent} →
        </p>
      </div>
    </Link>
  );
}

export function PlaceCard({
  place,
  dict,
  locale,
}: {
  place: Place;
  dict: Dict;
  locale: Locale;
}) {
  return (
    <Link
      href={hrefFor(`place:${place.key}`, locale)}
      className="group flex flex-col rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold uppercase italic tracking-tight">
          {place.key === "le-mans-city-centre" ? "Le Mans" : place.name}
        </h3>
        <SlantBadge tone={place.ring <= 2 ? "bleu" : "ink"}>
          {place.ring === 1
            ? dict.common.walkToCircuit
            : dict.common.minToCircuit(place.driveMin)}
        </SlantBadge>
      </div>
      <p className="mt-2 text-sm text-muted">
        {place.ring > 1 && dict.common.raceWeekTraffic(place.raceWeekMin)}
        {place.ring === 1 && dict.common.km(place.km)}
      </p>
      <p className="mt-3 text-sm font-semibold text-bleu group-hover:underline">
        {dict.common.viewZone} →
      </p>
    </Link>
  );
}

export function GuideCard({
  href,
  title,
  description,
  dict,
}: {
  href: string;
  title: string;
  description: string;
  dict: Dict;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-line bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="font-display text-xl font-semibold uppercase italic leading-snug tracking-tight">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <p className="mt-3 text-sm font-semibold text-bleu group-hover:underline">
        {dict.common.readGuide} →
      </p>
    </Link>
  );
}
