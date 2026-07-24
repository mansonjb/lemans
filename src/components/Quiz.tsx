"use client";

import { useMemo, useState } from "react";
import { stay22MapUrl } from "@/lib/stay22";
import { HotelThumb } from "./HotelThumb";

export interface QuizEvent {
  key: string;
  id: string;
  name: string;
  checkin: string;
  checkout: string;
  lat: number;
  lng: number;
}
export interface QuizZone {
  key: string;
  name: string;
  ring: 1 | 2 | 3 | 4;
  driveMin: number;
  raceWeekMin: number;
  lat: number;
  lng: number;
  href: string;
}
export interface QuizHotel {
  name: string;
  zone: string;
  category: 1 | 2 | 3;
  kind: "hotel" | "camping" | "rental";
  note: string;
  url: string;
  img?: string;
}

export interface QuizLabels {
  start: string;
  step: string;
  of: string;
  back: string;
  next: string;
  seeResults: string;
  restart: string;
  q: {
    event: string;
    distance: string;
    people: string;
    type: string;
    budget: string;
  };
  distanceOpts: { walk: string; min30: string; min60: string; any: string };
  peopleOpts: { couple: string; small: string; family: string; group: string };
  typeOpts: { hotel: string; rental: string; camping: string; any: string };
  budgetOpts: { budget: string; mid: string; up: string; any: string };
  result: {
    title: string;
    zonesHeading: string;
    hotelsHeading: string;
    mapHeading: string;
    mapNote: string;
    viewZone: string;
    seePrice: string;
    none: string;
    kind: Record<"hotel" | "camping" | "rental", string>;
  };
}

type Answers = {
  event: string | null;
  distance: "walk" | "min30" | "min60" | "any" | null;
  people: "couple" | "small" | "family" | "group" | null;
  type: "hotel" | "rental" | "camping" | "any" | null;
  budget: "budget" | "mid" | "up" | "any" | null;
};

const RING_MAX: Record<string, number> = { walk: 1, min30: 2, min60: 3, any: 4 };
const BUDGET_CAT: Record<string, number> = { budget: 1, mid: 2, up: 3, any: 0 };
const PEOPLE_ADULTS: Record<string, number> = {
  couple: 2,
  small: 4,
  family: 5,
  group: 8,
};

export function Quiz({
  events,
  zones,
  hotels,
  labels,
  locale,
}: {
  events: QuizEvent[];
  zones: QuizZone[];
  hotels: QuizHotel[];
  labels: QuizLabels;
  locale: string;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    event: null,
    distance: null,
    people: null,
    type: null,
    budget: null,
  });
  const [done, setDone] = useState(false);

  const steps: {
    key: keyof Answers;
    title: string;
    options: { value: string; label: string }[];
  }[] = [
    {
      key: "event",
      title: labels.q.event,
      options: events.map((e) => ({ value: e.key, label: e.name })),
    },
    {
      key: "distance",
      title: labels.q.distance,
      options: [
        { value: "walk", label: labels.distanceOpts.walk },
        { value: "min30", label: labels.distanceOpts.min30 },
        { value: "min60", label: labels.distanceOpts.min60 },
        { value: "any", label: labels.distanceOpts.any },
      ],
    },
    {
      key: "people",
      title: labels.q.people,
      options: [
        { value: "couple", label: labels.peopleOpts.couple },
        { value: "small", label: labels.peopleOpts.small },
        { value: "family", label: labels.peopleOpts.family },
        { value: "group", label: labels.peopleOpts.group },
      ],
    },
    {
      key: "type",
      title: labels.q.type,
      options: [
        { value: "hotel", label: labels.typeOpts.hotel },
        { value: "rental", label: labels.typeOpts.rental },
        { value: "camping", label: labels.typeOpts.camping },
        { value: "any", label: labels.typeOpts.any },
      ],
    },
    {
      key: "budget",
      title: labels.q.budget,
      options: [
        { value: "budget", label: labels.budgetOpts.budget },
        { value: "mid", label: labels.budgetOpts.mid },
        { value: "up", label: labels.budgetOpts.up },
        { value: "any", label: labels.budgetOpts.any },
      ],
    },
  ];

  const pick = (key: keyof Answers, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  };

  const result = useMemo(() => {
    if (!done) return null;
    const event = events.find((e) => e.key === answers.event) ?? events[0];
    const ringMax = RING_MAX[answers.distance ?? "any"];
    const cat = BUDGET_CAT[answers.budget ?? "any"];
    const adults = PEOPLE_ADULTS[answers.people ?? "couple"];

    const matchedZones = zones
      .filter((z) => z.ring <= ringMax)
      .sort((a, b) => a.ring - b.ring || a.raceWeekMin - b.raceWeekMin);

    const zoneKeys = new Set(matchedZones.map((z) => z.key));
    let matchedHotels = hotels.filter((h) => zoneKeys.has(h.zone));
    if (answers.type && answers.type !== "any")
      matchedHotels = matchedHotels.filter((h) => h.kind === answers.type);
    if (cat > 0)
      matchedHotels = matchedHotels.filter((h) => Math.abs(h.category - cat) <= 1);

    matchedHotels = matchedHotels
      .sort((a, b) => (cat ? Math.abs(a.category - cat) - Math.abs(b.category - cat) : 0))
      .slice(0, 12)
      .map((h) => ({
        ...h,
        url: `${h.url}&checkin=${event.checkin}&checkout=${event.checkout}&group_adults=${adults}&no_rooms=1`,
      }));

    // Centre the map on the innermost matched zone for a tighter view.
    const focus = matchedZones[0] ?? { lat: event.lat, lng: event.lng };
    const mapUrl = stay22MapUrl({
      lat: focus.lat,
      lng: focus.lng,
      checkin: event.checkin,
      checkout: event.checkout,
      zoom: ringMax <= 2 ? 12 : 10,
      locale,
    });

    return { event, matchedZones: matchedZones.slice(0, 6), matchedHotels, mapUrl, adults };
  }, [done, answers, events, zones, hotels, locale]);

  if (done && result) {
    return (
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold uppercase italic tracking-tight sm:text-3xl">
            {labels.result.title}
          </h2>
          <button
            onClick={() => {
              setDone(false);
              setStep(0);
              setAnswers({
                event: null,
                distance: null,
                people: null,
                type: null,
                budget: null,
              });
            }}
            className="text-sm font-semibold text-bleu hover:underline"
          >
            ↺ {labels.restart}
          </button>
        </div>

        <h3 className="mt-8 font-display text-lg font-semibold uppercase tracking-wide text-muted">
          {labels.result.zonesHeading}
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {result.matchedZones.map((z, i) => (
            <a
              key={z.key}
              href={z.href}
              className="group rounded-xl border border-line bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-bleu font-display text-xs font-bold text-white tabular-nums">
                  {i + 1}
                </span>
                <h4 className="font-display text-lg font-semibold uppercase italic tracking-tight">
                  {z.name}
                </h4>
              </div>
              <p className="mt-2 text-sm text-muted">
                {z.ring === 1
                  ? labels.distanceOpts.walk
                  : `${z.raceWeekMin} min`}
              </p>
              <p className="mt-2 text-sm font-semibold text-bleu group-hover:underline">
                {labels.result.viewZone} →
              </p>
            </a>
          ))}
        </div>

        {result.matchedHotels.length > 0 && (
          <>
            <h3 className="mt-10 font-display text-lg font-semibold uppercase tracking-wide text-muted">
              {labels.result.hotelsHeading}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {result.matchedHotels.map((h) => (
                <a
                  key={`${h.zone}-${h.name}`}
                  href={h.url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  data-stay={h.name}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-bleu hover:shadow-md"
                >
                  {h.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={h.img}
                      alt={h.name}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                  ) : (
                    <HotelThumb
                      hotel={h}
                      className="h-14 w-14 shrink-0 rounded-lg"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      {labels.result.kind[h.kind]} · {"€".repeat(h.category)}
                    </span>
                    <h4 className="truncate font-semibold leading-tight">
                      {h.name}
                    </h4>
                    <p className="truncate text-[13px] text-muted">{h.note}</p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-ink px-3 py-2 font-display text-xs font-bold uppercase tracking-wide text-white transition group-hover:bg-bleu">
                    {labels.result.seePrice}
                  </span>
                </a>
              ))}
            </div>
          </>
        )}

        <h3 className="mt-10 font-display text-lg font-semibold uppercase tracking-wide text-muted">
          {labels.result.mapHeading}
        </h3>
        <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
          <iframe
            src={result.mapUrl}
            title={labels.result.mapHeading}
            loading="lazy"
            className="h-[460px] w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {labels.result.mapNote}
        </p>
      </div>
    );
  }

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div>
      <div className="flex items-center justify-between text-sm font-medium text-muted">
        <span>
          {labels.step} {step + 1} {labels.of} {steps.length}
        </span>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="font-semibold text-bleu hover:underline"
          >
            ← {labels.back}
          </button>
        )}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-bleu transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h2 className="mt-8 font-display text-2xl font-bold uppercase italic leading-tight tracking-tight sm:text-3xl">
        {current.title}
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {current.options.map((opt) => {
          const active = answers[current.key] === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => pick(current.key, opt.value)}
              className={`rounded-xl border-2 px-5 py-4 text-left font-semibold transition ${
                active
                  ? "border-bleu bg-bleu/5 text-bleu"
                  : "border-line bg-card hover:border-bleu/50 hover:bg-paper"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
