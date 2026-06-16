import type { Locale } from "@/lib/types";
import type { FaqItem } from "@/components/FaqBlock";
import type { QuizLabels } from "@/components/Quiz";

export interface FaqCtx {
  eventName?: string;
  zoneName?: string;
  driveMin?: number;
  raceWeekMin?: number;
  months?: number;
  year?: number;
  ring?: number;
}

export interface ExtraDict {
  ctaFindStay: string;
  navTravel: string;
  navCircuits: string;
  homeQuiz: { title: string; text: string; cta: string };
  faq: (c: FaqCtx) => FaqItem[];
  accommodation: {
    heading: string;
    sub: string;
    seePrice: string;
    seeAllArea: string;
    disclaimer: string;
    kind: Record<"hotel" | "camping" | "rental", string>;
  };
  route: {
    heading: string;
    sub: string;
    start: string;
    finish: string;
    normalDrive: string;
    raceWeekDrive: string;
    totalDistance: string;
  };
  quiz: {
    heroKicker: string;
    title: string;
    metaDescription: string;
    intro: string;
    labels: QuizLabels;
  };
  travel: {
    heroKicker: string;
    title: string;
    metaDescription: string;
    intro: string[];
    sections: { heading: string; paragraphs: string[] }[];
    flight: {
      heading: string;
      intro: string;
      airportsHeading: string;
      searchKiwi: string;
      searchSkyscanner: string;
      widgetPending: string;
      disclaimer: string;
    };
  };
  eventZone: {
    heroKicker: string;
    title: (event: string, zone: string, year: number) => string;
    metaDescription: (event: string, zone: string, min: number) => string;
    intro: (
      event: string,
      zone: string,
      driveMin: number,
      raceWeekMin: number,
      ring: number
    ) => string[];
    routeHeading: (zone: string) => string;
    hotelsHeading: (zone: string) => string;
    mapHeading: (zone: string) => string;
  };
  seo: {
    keyFactsTitle: string;
    factBookAhead: string;
    factListedStays: string;
    factDistance: string;
    factCrowd: string;
    compareTitle: string;
    compareSub: string;
    colZone: string;
    colTransport: string;
    colStays: string;
    walk: string;
    yes: string;
    nearbyHeading: string;
    popularSearches: string;
    zoneCircuitArea: string;
    stays: string;
    transport: { toCircuit: string; car: string; train: string; tram: string; walk: string };
    goodToKnow: string;
    aboutZone: (zone: string) => string;
    aboutEvent: (event: string) => string;
    trust: { livePrices: string; freeCancel: string; noFees: string };
  };
  circuitNet: { heading: string; sub: string; soon: string; flagship: string };
  hub: {
    heroTitle: string;
    heroSub: string;
    soonTitle: (c: string) => string;
    soonIntro: (c: string) => string;
    soonMap: (c: string) => string;
    exploreLeMans: string;
  };
  /** Generic live circuit guide (every circuit except bespoke Le Mans). */
  circuitGuide: {
    kicker: string;
    intro: (circuit: string, event: string) => string;
    factClosest: string;
    factCrowd: string;
    factWindow: string;
    factBook: string;
    staysHeading: (circuit: string) => string;
    staysSub: string;
    zonesHeading: string;
    zonesSub: (circuit: string) => string;
    atCircuit: string;
    minLabel: (min: number) => string;
    staysCount: (n: number) => string;
    mapHeading: (circuit: string) => string;
    faq: (circuit: string, event: string, town: string, bookAhead: string) => FaqItem[];
  };
  /** Per-circuit sub-pages: getting there, race-week guide, zones, filters. */
  circuitPages: {
    travelKicker: string;
    travelTitle: (circuit: string) => string;
    travelIntro: (circuit: string, event: string) => string;
    byPlane: string;
    byTrain: string;
    byCar: string;
    planeNote: (circuit: string) => string;
    trainNote: string;
    carNote: string;
    carBody: (circuit: string) => string;
    minByCar: (min: number) => string;
    searchFlights: string;
    mapHere: (circuit: string) => string;
    guideKicker: string;
    guideTitle: (circuit: string) => string;
    guideIntro: (circuit: string, event: string) => string;
    whenToBook: string;
    whereToBase: string;
    campingH: string;
    gettingAround: string;
    whenToBookBody: (event: string, bookAhead: string) => string;
    whereToBaseBody: (circuit: string, town: string) => string;
    campingBody: (circuit: string) => string;
    gettingAroundBody: (circuit: string, roads: string) => string;
    zoneKicker: (circuit: string) => string;
    zoneTitle: (zone: string, circuit: string) => string;
    zoneIntro: (
      zone: string,
      circuit: string,
      event: string,
      driveMin: number
    ) => string;
    zoneStaysH: (zone: string) => string;
    zoneMapH: (zone: string) => string;
    otherZones: (circuit: string) => string;
    filterKicker: string;
    filterTitle: Record<
      "hotels" | "campsites" | "walking-distance" | "cheap",
      (circuit: string) => string
    >;
    filterIntro: Record<
      "hotels" | "campsites" | "walking-distance" | "cheap",
      (circuit: string, event: string) => string
    >;
  };
}

/* ----------------------------- ENGLISH ----------------------------- */
const enX: ExtraDict = {
  ctaFindStay: "Find your stay",
  navTravel: "Getting there",
  navCircuits: "Circuits",
  homeQuiz: {
    title: "Not sure where to base yourself?",
    text: "Answer five quick questions and we'll point you to the right zones, the best-matched stays and a live map for your race weekend.",
    cta: "Find your stay",
  },
  faq: (c) => {
    const ev = c.eventName ?? "this race weekend";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `When should I book accommodation for ${ev}${yr}?`,
        a: `As early as you can. The closest hotels and rentals usually go ${m}+ months ahead. Booking with free cancellation the moment dates are set is the standard move for regulars.`,
      },
      {
        q: "How far ahead does Le Mans sell out?",
        a: "The city itself books out roughly 9 to 12 months before the June race, and a few months before the other weekends. The surrounding region stays open far longer.",
      },
      c.zoneName
        ? {
            q: `How long is the drive from ${c.zoneName} to the circuit on race days?`,
            a: `Around ${c.driveMin} minutes on a normal day, closer to ${c.raceWeekMin} minutes in race-week traffic. Leave before the morning rush and you beat most of it.`,
          }
        : {
            q: "Can I stay within walking distance of the circuit?",
            a: "Yes, but inventory is tiny: a handful of hotels, private rentals in Arnage, Mulsanne and Ruaudin, and pitches that open for the weekend. Book months ahead or widen to the 30-minute ring.",
          },
      {
        q: "What is the cheapest area to stay?",
        a: "Prices drop with every ring outwards. Towns 30 to 60 minutes away and cities like Tours, Angers, Laval and Alençon keep normal rates long after the inner ring has tripled.",
      },
      {
        q: "Is it better to camp, book a hotel or rent a house?",
        a: "Camping is closest to the action and cheapest; hotels are scarcest and book first; renting a house wins for groups who want a kitchen, beds for everyone and parking. Our quiz matches you to one.",
      },
      {
        q: "Can I reach the circuit without a car?",
        a: "Yes. From the city centre the T1 tram runs to within a short walk of the gates, with reinforced service on race days. Laval, Tours, Angers and Alençon have trains to Le Mans station, where the tram takes over.",
      },
      {
        q: "Everything looks fully booked. What now?",
        a: "Widen the radius ring by ring and hunt cancellations: a real wave of free-cancellation rooms is released between 30 and 7 days out. Our plan B guide has the full strategy.",
      },
      {
        q: "Should I book with free cancellation?",
        a: "Always, if you can. It costs nothing, locks in today's price, and lets you upgrade to something closer if it frees up later. Most race-week bookings are made this way.",
      },
      {
        q: "Are prices higher during the race weekend?",
        a: "Yes, sharply in the inner rings, where rooms can double or triple. The further out you base yourself, the closer prices stay to normal, which is exactly why the drive-time view matters.",
      },
      {
        q: "How do the maps and listings on this site work?",
        a: "The map and the listed stays load live prices from our booking partners. Booking through them supports this site at no extra cost to you. We are an independent guide and do not sell tickets.",
      },
      c.eventName
        ? {
            q: `How many people attend ${c.eventName}?`,
            a: "The biggest weekends draw enormous crowds, which is why beds near the circuit vanish so early. The figures are the reason booking ahead matters so much.",
          }
        : {
            q: "Is parking included where I stay?",
            a: "It varies by zone. Villages near the track and towns further out usually offer easy or free parking; the city centre is tighter. Each zone page flags the parking situation.",
          },
      {
        q: "Can I book for next year right after the race?",
        a: "Yes, and it is the single best trick. Owners post next year's dates in the days after the event, while everything is still open. Book in that window and the whole problem disappears.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "Top stays in this area",
    sub: "A hand-picked selection of real hotels, campsites and rentals. Tap any to see live prices and availability for your dates.",
    seePrice: "Check dates & price",
    seeAllArea: "See all stays in this area",
    disclaimer:
      "A curated selection of real establishments. Live prices and availability open at our booking partner; bookings support this site at no extra cost to you.",
    kind: { hotel: "Hotel", camping: "Camping", rental: "Rental" },
  },
  route: {
    heading: "Your route to the circuit",
    sub: "The real approach roads, distance and honest drive times, normal days versus race week.",
    start: "Your base",
    finish: "Circuit",
    normalDrive: "Normal drive",
    raceWeekDrive: "Race week",
    totalDistance: "Distance",
  },
  quiz: {
    heroKicker: "Stay finder",
    title: "Find your Le Mans stay in 5 questions",
    metaDescription:
      "Answer five quick questions about your race weekend, distance, group size, stay type and budget. Get matched to the right zones, real stays and a live availability map.",
    intro:
      "Tell us how you like to do race week and we'll point you to the zones that fit, the best-matched stays and a live map set to your dates.",
    labels: {
      start: "Start",
      step: "Question",
      of: "of",
      back: "Back",
      next: "Next",
      seeResults: "See results",
      restart: "Start over",
      q: {
        event: "Which race weekend are you coming for?",
        distance: "How close to the circuit do you want to be?",
        people: "How many of you are travelling?",
        type: "What kind of place do you want?",
        budget: "What's your budget per night?",
      },
      distanceOpts: {
        walk: "Walking distance",
        min30: "Under 30 minutes",
        min60: "Under an hour",
        any: "Whatever's the best deal",
      },
      peopleOpts: {
        couple: "1 to 2",
        small: "3 to 4",
        family: "5 to 7",
        group: "8 or more",
      },
      typeOpts: {
        hotel: "A hotel",
        rental: "A house or rental",
        camping: "Camping",
        any: "No preference",
      },
      budgetOpts: {
        budget: "Budget",
        mid: "Mid-range",
        up: "Upscale",
        any: "Flexible",
      },
      result: {
        title: "Here's your race-week plan",
        zonesHeading: "Best zones for you",
        hotelsHeading: "Stays that match",
        mapHeading: "Live availability on the map",
        mapNote:
          "Pre-set to your race dates. Booking through the map supports this independent guide at no extra cost to you.",
        viewZone: "View zone",
        seePrice: "See price",
        none: "No exact match, widen your distance or budget.",
        kind: { hotel: "Hotel", camping: "Camping", rental: "Rental" },
      },
    },
  },
  travel: {
    heroKicker: "Getting there",
    title: "Getting to Le Mans and the circuit",
    metaDescription:
      "How to reach Le Mans and the circuit for race week: flights to nearby airports, TGV trains, driving routes, the tram trick and parking advice.",
    intro: [
      "Le Mans sits at the centre of a fast transport network: a one-hour TGV from Paris, motorways from every direction, and five airports within reach. How you get here shapes where it makes sense to stay.",
      "Below: flights and the nearest airports, then trains, driving and the local tram trick that turns the city centre into one of the smartest bases of all.",
    ],
    sections: [
      {
        heading: "By train",
        paragraphs: [
          "Le Mans station is on the TGV line from Paris (just over an hour) and has regional trains from Tours, Angers, Laval and Alençon. From the station, the T1 tram runs towards the circuit, so a group can leave the car at the accommodation and ride in.",
        ],
      },
      {
        heading: "By car and the tram trick",
        paragraphs: [
          "The circuit sits on the southern edge of town between the D338 and the A11/A28 motorways. On race days the last few kilometres are the slow part, so timing beats route: be parked before mid-morning or arrive after the start.",
          "If you stay in the city centre, skip the car entirely. The T1 tram (Antarès direction) drops you a short walk from the gates with reinforced service on race days, which is why the centre is one of the most practical bases of all.",
        ],
      },
    ],
    flight: {
      heading: "Find a flight",
      intro:
        "The nearest airports to Le Mans, with the fastest onward connection to the circuit. Compare fares below; our partner flight widget loads here once live.",
      airportsHeading: "Nearest airports",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "Live flight search widget loads here. Meanwhile, compare fares with the airport links below.",
      disclaimer:
        "Flight links open at our travel partners. Searches may earn us a commission at no extra cost to you.",
    },
  },
  eventZone: {
    heroKicker: "Race weekend · zone",
    title: (event, zone, year) => `Staying in ${zone} for ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `Is ${zone} a good base for ${event}? Real drive times (${min} min normally, more in race traffic), the route to the circuit, top stays and live availability.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} sits right against the circuit, so for ${event} you can forget the car: walk or cycle to the gates and back after the night stints. It is the most wanted ring of all, with the smallest inventory, so book early.`
        : `${zone} is about ${driveMin} minutes from the circuit on a normal day, around ${raceWeekMin} during ${event} race-week traffic. ${
            ring >= 4
              ? "It is the late-booker's friend: a real town with normal prices when the inner rings are gone."
              : "A practical balance of distance, availability and price."
          }`,
      `Below you'll find the route to the circuit, a hand-picked selection of real stays in and around ${zone}, and a live map pre-set to the ${event} dates so you can book before it fills.`,
    ],
    routeHeading: (zone) => `From ${zone} to the circuit`,
    hotelsHeading: (zone) => `Top stays in ${zone}`,
    mapHeading: (zone) => `Live availability in ${zone}`,
  },
  seo: {
    keyFactsTitle: "Key facts",
    factBookAhead: "Book ahead",
    factListedStays: "Listed stays",
    factDistance: "To circuit",
    factCrowd: "Crowd",
    compareTitle: "Compare every zone at a glance",
    compareSub:
      "Real drive times to the circuit, race-week traffic, parking and transport for each base, so you can weigh distance against availability.",
    colZone: "Zone",
    colTransport: "Train / tram",
    colStays: "Stays",
    walk: "Walk",
    yes: "Yes",
    nearbyHeading: "Compare nearby zones",
    popularSearches: "Popular searches",
    zoneCircuitArea: "Around the circuit",
    stays: "stays",
    transport: { toCircuit: "To the circuit", car: "Car", train: "Train", tram: "Tram", walk: "On foot" },
    goodToKnow: "Good to know",
    aboutZone: (z) => `Staying in ${z}`,
    aboutEvent: (e) => `About ${e}`,
    trust: {
      livePrices: "Live prices from booking partners",
      freeCancel: "Free cancellation often available",
      noFees: "No booking fee from us",
    },
  },
  circuitNet: {
    heading: "Our circuit network",
    sub: "We map race-week accommodation circuit by circuit. Le Mans is live; the rest of the first wave is on the way.",
    soon: "Coming soon",
    flagship: "Live now",
  },
  hub: {
    heroTitle: "Where to stay for race week, circuit by circuit",
    heroSub:
      "Race weekends sell out the towns around the track months ahead. We map hotels, camping and rentals by real drive time at the world's great circuits, so you book the right base before it's gone.",
    soonTitle: (c) => `Where to stay for race week at ${c}`,
    soonIntro: (c) =>
      `We're building the full ${c} accommodation guide: hotels, camping and rentals ranked by drive time to the circuit. It is coming soon. Meanwhile, the live map below shows real availability around the track.`,
    soonMap: (c) => `Live availability around ${c}`,
    exploreLeMans: "See our live Le Mans guide",
  },
  circuitGuide: {
    kicker: "Race-week base camp",
    intro: (circuit, event) =>
      `Where to stay for the ${event} at ${circuit}: every hotel, campsite and rental near the circuit, closest first, with live prices for the race weekend. We check the locations by hand so you book the right base, not just the first result.`,
    factClosest: "Closest stay",
    factCrowd: "Race-week crowd",
    factWindow: "When",
    factBook: "Book ahead",
    staysHeading: (circuit) => `Where to stay near ${circuit}`,
    staysSub:
      "Hand-checked hotels, campsites and rentals, sorted by distance to the circuit. Open any card for live availability and pricing on your dates.",
    zonesHeading: "Best areas to stay",
    zonesSub: (circuit) =>
      `The towns and villages around ${circuit}, from on-site campsites to comfortable hotels a short drive away.`,
    atCircuit: "At the circuit",
    minLabel: (min) => `${min} min`,
    staysCount: (n) => (n === 1 ? "1 stay" : `${n} stays`),
    mapHeading: (circuit) => `Live availability around ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `When should I book accommodation for the ${event}?`,
        a: `As early as you can. The closest hotels and campsites around ${circuit} typically sell out ${bookAhead} ahead. Booking with free cancellation the moment dates are confirmed is the safe move.`,
      },
      {
        q: `Where is the best place to stay for the ${event}?`,
        a: `The closest stays are in ${town} and the villages right by the circuit. For more choice and better prices, the surrounding towns within about 30 minutes are the sweet spot. The map above shows live availability across all of them.`,
      },
      {
        q: `Can I camp at ${circuit}?`,
        a: "Yes. Official and private campsites open for the race weekend right next to the circuit. They are the closest option and the first to go, so book early.",
      },
      {
        q: `How far in advance do stays near ${circuit} sell out?`,
        a: `On-site and walking-distance options usually go ${bookAhead} before the ${event}. The wider ring of towns stays open much longer, so widen your search if the closest places are full.`,
      },
      {
        q: "Are the prices on this page live?",
        a: "Yes. Every stay links to live availability and pricing for your dates, and the map updates in real time. We may earn a commission if you book, at no extra cost to you.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Getting there",
    travelTitle: (c) => `Getting to ${c}`,
    travelIntro: (c, e) =>
      `How to reach ${c} for the ${e}: the closest airports, the nearest train stations and the main roads in, plus a live map of where to stay once you arrive.`,
    byPlane: "By plane",
    byTrain: "By train",
    byCar: "By car",
    planeNote: (c) => `Closest airports to ${c}, nearest first.`,
    trainNote: "Nearest stations, then a taxi or shuttle for the last stretch.",
    carNote: "Main roads in — expect heavy race-day traffic near the gates.",
    carBody: (c) =>
      `Driving is the simplest way to reach ${c} and the surrounding towns. Leave early on race mornings and book a stay with parking or a short hop to the circuit.`,
    minByCar: (m) => `${m} min by car`,
    searchFlights: "Search flights",
    mapHere: (c) => `Where to stay around ${c}`,
    guideKicker: "Race-week guide",
    guideTitle: (c) => `${c} race-week guide`,
    guideIntro: (c, e) =>
      `Everything you need to plan a stay for the ${e} at ${c}: when to book, the best areas to base yourself, camping and how to get around on race days.`,
    whenToBook: "When to book",
    whereToBase: "Where to base yourself",
    campingH: "Camping",
    gettingAround: "Getting around",
    whenToBookBody: (e, b) =>
      `The closest stays for the ${e} sell out ${b} ahead. Book with free cancellation as soon as the dates are confirmed, then refine closer to the weekend.`,
    whereToBaseBody: (c, t) =>
      `The handiest bases are right by the circuit and in ${t}. For more choice and better prices, widen to the towns within about 30 minutes — they fill up later and still link back to the circuit easily.`,
    campingBody: (c) =>
      `Official and private campsites open around ${c} for the race weekend. They are the closest, cheapest option and the first to sell out, so book ahead and bring everything you need.`,
    gettingAroundBody: (c, r) =>
      `Most fans drive: the main roads in are ${r}, and traffic peaks right before and after sessions. Leave early, share lifts where you can, and check for park-and-ride or shuttle options.`,
    zoneKicker: (c) => `Near ${c}`,
    zoneTitle: (z, c) => `Where to stay in ${z} for ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} is ${m === 0 ? "right at the circuit" : `about ${m} minutes from ${c}`} — a practical base for the ${e}. Here are its stays with live prices, plus a map of what's available on your dates.`,
    zoneStaysH: (z) => `Stays in ${z}`,
    zoneMapH: (z) => `Live availability in ${z}`,
    otherZones: (c) => `Other areas near ${c}`,
    filterKicker: "Filtered stays",
    filterTitle: {
      hotels: (c) => `Hotels near ${c}`,
      campsites: (c) => `Campsites near ${c}`,
      "walking-distance": (c) => `Closest stays to ${c}`,
      cheap: (c) => `Cheap stays near ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Hotels near ${c} for the ${e}, closest first, with live prices for the race weekend. From simple roadside stops to comfortable bases a short drive from the gates.`,
      campsites: (c, e) =>
        `Campsites near ${c} for the ${e}: the closest, best-value way to stay trackside. They sell out first, so book early.`,
      "walking-distance": (c, e) =>
        `The closest stays to ${c} for the ${e} — walking distance or a few minutes by car. Tiny inventory that goes fast, so book the moment dates are set.`,
      cheap: (c, e) =>
        `The best-value stays near ${c} for the ${e}. Budget hotels, guest houses and campsites, closest first, with live prices.`,
    },
  },
};

/* ----------------------------- FRENCH ----------------------------- */
const frX: ExtraDict = {
  ctaFindStay: "Trouver mon hébergement",
  navTravel: "Comment venir",
  navCircuits: "Circuits",
  homeQuiz: {
    title: "Vous ne savez pas où poser votre camp ?",
    text: "Répondez à cinq questions rapides : on vous oriente vers les bonnes zones, les hébergements les plus adaptés et une carte en direct pour votre week-end de course.",
    cta: "Trouver mon hébergement",
  },
  faq: (c) => {
    const ev = c.eventName ?? "ce week-end de course";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `Quand réserver son hébergement pour ${ev}${yr} ?`,
        a: `Le plus tôt possible. Les hôtels et locations les plus proches partent en général ${m} mois ou plus à l'avance. Réserver avec annulation gratuite dès l'annonce des dates, c'est le réflexe des habitués.`,
      },
      {
        q: "Combien de temps à l'avance Le Mans affiche-t-il complet ?",
        a: "La ville elle-même se remplit environ 9 à 12 mois avant la course de juin, et quelques mois avant les autres week-ends. La région autour reste ouverte bien plus longtemps.",
      },
      c.zoneName
        ? {
            q: `Combien de temps de trajet entre ${c.zoneName} et le circuit les jours de course ?`,
            a: `Environ ${c.driveMin} minutes en temps normal, plutôt ${c.raceWeekMin} minutes avec le trafic de semaine de course. En partant avant la pointe du matin, on évite l'essentiel.`,
          }
        : {
            q: "Peut-on dormir à distance à pied du circuit ?",
            a: "Oui, mais l'offre est minuscule : quelques hôtels, des locations de particuliers à Arnage, Mulsanne et Ruaudin, et des emplacements ouverts pour le week-end. Réservez des mois à l'avance ou élargissez à la couronne des 30 minutes.",
          },
      {
        q: "Quelle est la zone la moins chère ?",
        a: "Les prix baissent à chaque couronne vers l'extérieur. Les villes à 30-60 minutes et les grandes villes comme Tours, Angers, Laval et Alençon gardent des tarifs normaux longtemps après que la couronne intérieure a triplé.",
      },
      {
        q: "Camping, hôtel ou location : que choisir ?",
        a: "Le camping est au plus près de l'action et le moins cher ; les hôtels sont les plus rares et partent en premier ; la location de maison gagne pour les groupes qui veulent une cuisine, des lits pour tous et un parking. Notre quiz vous oriente.",
      },
      {
        q: "Peut-on rejoindre le circuit sans voiture ?",
        a: "Oui. Depuis le centre-ville, le tram T1 vous dépose à quelques minutes à pied des entrées, avec un service renforcé les jours de course. Laval, Tours, Angers et Alençon ont des trains vers la gare du Mans, où le tram prend le relais.",
      },
      {
        q: "Tout semble complet. On fait quoi ?",
        a: "Élargissez le rayon couronne par couronne et chassez les annulations : une vraie vague de chambres annulables se libère entre J-30 et J-7. Notre guide plan B détaille toute la stratégie.",
      },
      {
        q: "Faut-il réserver avec annulation gratuite ?",
        a: "Toujours, si possible. Ça ne coûte rien, ça bloque le prix du jour et ça permet d'améliorer pour quelque chose de plus proche si ça se libère. La plupart des réservations de semaine de course se font ainsi.",
      },
      {
        q: "Les prix sont-ils plus élevés pendant le week-end de course ?",
        a: "Oui, fortement dans les couronnes intérieures, où les chambres peuvent doubler ou tripler. Plus on s'installe loin, plus les prix restent proches de la normale : c'est tout l'intérêt de raisonner en temps de trajet.",
      },
      {
        q: "Comment fonctionnent les cartes et les listes de ce site ?",
        a: "La carte et les hébergements listés chargent les prix en direct chez nos partenaires de réservation. Réserver via eux soutient ce site, sans surcoût pour vous. Nous sommes un guide indépendant et ne vendons pas de billets.",
      },
      c.eventName
        ? {
            q: `Combien de spectateurs pour ${c.eventName} ?`,
            a: "Les plus gros week-ends attirent des foules immenses : c'est pourquoi les lits proches du circuit disparaissent si tôt. Ces chiffres expliquent à eux seuls l'intérêt de réserver en avance.",
          }
        : {
            q: "Le stationnement est-il inclus là où je dors ?",
            a: "Ça dépend de la zone. Les villages proches de la piste et les villes plus éloignées offrent en général un stationnement facile ou gratuit ; le centre-ville est plus tendu. Chaque page de zone indique la situation.",
          },
      {
        q: "Peut-on réserver pour l'année suivante juste après la course ?",
        a: "Oui, et c'est le meilleur réflexe. Les propriétaires publient les dates de l'année suivante dans les jours qui suivent l'événement, quand tout est encore ouvert. Réservez dans cette fenêtre et le problème disparaît.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "Les meilleurs hébergements de la zone",
    sub: "Une sélection d'hôtels, campings et locations réels. Cliquez pour voir les prix et disponibilités en direct à vos dates.",
    seePrice: "Voir dispo & prix",
    seeAllArea: "Voir tous les hébergements de la zone",
    disclaimer:
      "Une sélection d'établissements réels. Les prix et disponibilités en direct s'ouvrent chez notre partenaire ; les réservations soutiennent ce site, sans surcoût pour vous.",
    kind: { hotel: "Hôtel", camping: "Camping", rental: "Location" },
  },
  route: {
    heading: "Votre itinéraire vers le circuit",
    sub: "Les vraies routes d'accès, la distance et des temps de trajet honnêtes : temps normal contre semaine de course.",
    start: "Votre base",
    finish: "Circuit",
    normalDrive: "Trajet normal",
    raceWeekDrive: "Semaine de course",
    totalDistance: "Distance",
  },
  quiz: {
    heroKicker: "Trouveur d'hébergement",
    title: "Trouvez votre hébergement au Mans en 5 questions",
    metaDescription:
      "Répondez à cinq questions sur votre week-end de course, la distance, le nombre de personnes, le type d'hébergement et le budget. On vous oriente vers les bonnes zones, des hébergements réels et une carte en direct.",
    intro:
      "Dites-nous comment vous aimez vivre la semaine de course : on vous oriente vers les zones qui collent, les hébergements les plus adaptés et une carte en direct réglée sur vos dates.",
    labels: {
      start: "Commencer",
      step: "Question",
      of: "sur",
      back: "Retour",
      next: "Suivant",
      seeResults: "Voir les résultats",
      restart: "Recommencer",
      q: {
        event: "Pour quel week-end de course venez-vous ?",
        distance: "À quelle distance du circuit voulez-vous être ?",
        people: "Combien êtes-vous ?",
        type: "Quel type d'hébergement voulez-vous ?",
        budget: "Quel budget par nuit ?",
      },
      distanceOpts: {
        walk: "À distance à pied",
        min30: "Moins de 30 minutes",
        min60: "Moins d'une heure",
        any: "Le meilleur rapport qualité-prix",
      },
      peopleOpts: {
        couple: "1 à 2",
        small: "3 à 4",
        family: "5 à 7",
        group: "8 ou plus",
      },
      typeOpts: {
        hotel: "Un hôtel",
        rental: "Une maison ou location",
        camping: "Camping",
        any: "Peu importe",
      },
      budgetOpts: {
        budget: "Économique",
        mid: "Milieu de gamme",
        up: "Supérieur",
        any: "Flexible",
      },
      result: {
        title: "Voici votre plan de semaine de course",
        zonesHeading: "Les meilleures zones pour vous",
        hotelsHeading: "Les hébergements qui correspondent",
        mapHeading: "Disponibilités en direct sur la carte",
        mapNote:
          "Préréglée sur vos dates de course. Réserver via la carte soutient ce guide indépendant, sans surcoût pour vous.",
        viewZone: "Voir la zone",
        seePrice: "Voir le prix",
        none: "Pas de correspondance exacte : élargissez la distance ou le budget.",
        kind: { hotel: "Hôtel", camping: "Camping", rental: "Location" },
      },
    },
  },
  travel: {
    heroKicker: "Comment venir",
    title: "Venir au Mans et rejoindre le circuit",
    metaDescription:
      "Comment rejoindre Le Mans et le circuit pour la semaine de course : vols vers les aéroports proches, TGV, itinéraires en voiture, l'astuce du tram et le stationnement.",
    intro: [
      "Le Mans est au centre d'un réseau rapide : TGV depuis Paris en une heure, autoroutes dans toutes les directions, et cinq aéroports à portée. Votre façon de venir détermine où il est malin de dormir.",
      "Ci-dessous : les vols et les aéroports les plus proches, puis le train, la voiture et l'astuce du tram qui fait du centre-ville l'un des camps de base les plus malins.",
    ],
    sections: [
      {
        heading: "En train",
        paragraphs: [
          "La gare du Mans est sur la ligne TGV depuis Paris (un peu plus d'une heure) et reliée en TER à Tours, Angers, Laval et Alençon. Depuis la gare, le tram T1 file vers le circuit : un groupe peut laisser la voiture à l'hébergement et venir en tram.",
        ],
      },
      {
        heading: "En voiture et l'astuce du tram",
        paragraphs: [
          "Le circuit est au sud de la ville entre la D338 et les autoroutes A11/A28. Les jours de course, ce sont les derniers kilomètres qui coincent : l'horaire compte plus que l'itinéraire. Garé avant le milieu de matinée, ou arrivée après le départ.",
          "Si vous dormez au centre-ville, oubliez la voiture. Le tram T1 (direction Antarès) vous dépose à quelques minutes à pied des entrées, avec un service renforcé les jours de course : c'est pourquoi le centre est l'un des camps de base les plus pratiques.",
        ],
      },
    ],
    flight: {
      heading: "Trouver un vol",
      intro:
        "Les aéroports les plus proches du Mans, avec la correspondance la plus rapide vers le circuit. Comparez les tarifs ci-dessous ; notre widget de vols partenaire s'affichera ici une fois en place.",
      airportsHeading: "Aéroports les plus proches",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "Le widget de recherche de vols en direct s'affichera ici. En attendant, comparez les tarifs avec les liens des aéroports ci-dessous.",
      disclaimer:
        "Les liens de vol s'ouvrent chez nos partenaires voyage. Les recherches peuvent nous rapporter une commission, sans surcoût pour vous.",
    },
  },
  eventZone: {
    heroKicker: "Week-end de course · zone",
    title: (event, zone, year) => `Dormir à ${zone} pour ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `${zone} est-il une bonne base pour ${event} ? Temps de trajet réels (${min} min en temps normal, plus en période de course), l'itinéraire vers le circuit, les meilleurs hébergements et les disponibilités en direct.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} touche le circuit : pour ${event}, vous pouvez oublier la voiture, on rejoint les entrées à pied ou à vélo et on rentre après les relais de nuit. C'est la couronne la plus demandée, avec l'offre la plus réduite : réservez tôt.`
        : `${zone} est à environ ${driveMin} minutes du circuit en temps normal, autour de ${raceWeekMin} avec le trafic de ${event}. ${
            ring >= 4
              ? "C'est l'alliée des réservations tardives : une vraie ville à prix normaux quand les couronnes intérieures sont parties."
              : "Un bon équilibre entre distance, disponibilité et prix."
          }`,
      `Ci-dessous : l'itinéraire vers le circuit, une sélection d'hébergements réels à ${zone} et autour, et une carte en direct préréglée sur les dates de ${event} pour réserver avant que tout parte.`,
    ],
    routeHeading: (zone) => `De ${zone} au circuit`,
    hotelsHeading: (zone) => `Les meilleurs hébergements à ${zone}`,
    mapHeading: (zone) => `Disponibilités en direct à ${zone}`,
  },
  seo: {
    keyFactsTitle: "L'essentiel",
    factBookAhead: "Réserver",
    factListedStays: "Hébergements listés",
    factDistance: "Du circuit",
    factCrowd: "Affluence",
    compareTitle: "Comparez toutes les zones d'un coup d'œil",
    compareSub:
      "Temps de trajet réels vers le circuit, trafic de semaine de course, stationnement et transports pour chaque base, pour arbitrer entre distance et disponibilité.",
    colZone: "Zone",
    colTransport: "Train / tram",
    colStays: "Hébergements",
    walk: "À pied",
    yes: "Oui",
    nearbyHeading: "Comparer les zones voisines",
    popularSearches: "Recherches populaires",
    zoneCircuitArea: "Autour du circuit",
    stays: "hébergements",
    transport: { toCircuit: "Vers le circuit", car: "Voiture", train: "Train", tram: "Tram", walk: "À pied" },
    goodToKnow: "Bon à savoir",
    aboutZone: (z) => `Dormir à ${z}`,
    aboutEvent: (e) => `${e} en bref`,
    trust: {
      livePrices: "Prix en direct chez nos partenaires",
      freeCancel: "Annulation gratuite souvent disponible",
      noFees: "Aucun frais de réservation de notre part",
    },
  },
  circuitNet: {
    heading: "Notre réseau de circuits",
    sub: "On cartographie l'hébergement de semaine de course, circuit par circuit. Le Mans est en ligne ; le reste de la première vague arrive.",
    soon: "Bientôt",
    flagship: "En ligne",
  },
  hub: {
    heroTitle: "Où dormir pendant la semaine de course, circuit par circuit",
    heroSub:
      "Les week-ends de course remplissent les villes autour de la piste des mois à l'avance. On cartographie hôtels, campings et locations au temps de trajet réel sur les grands circuits du monde, pour réserver le bon camp de base avant qu'il ne parte.",
    soonTitle: (c) => `Où dormir pendant la semaine de course à ${c}`,
    soonIntro: (c) =>
      `On construit le guide complet d'hébergement de ${c} : hôtels, campings et locations classés au temps de trajet vers le circuit. Ça arrive bientôt. En attendant, la carte en direct ci-dessous montre les disponibilités réelles autour de la piste.`,
    soonMap: (c) => `Disponibilités en direct autour de ${c}`,
    exploreLeMans: "Voir notre guide Le Mans en ligne",
  },
  circuitGuide: {
    kicker: "Votre camp de base course",
    intro: (circuit, event) =>
      `Où dormir pour le ${event} à ${circuit} : tous les hôtels, campings et locations près du circuit, du plus proche au plus loin, avec les prix en direct pour le week-end de course. On vérifie chaque emplacement à la main pour que vous réserviez la bonne base, pas juste le premier résultat.`,
    factClosest: "Le plus proche",
    factCrowd: "Affluence",
    factWindow: "Période",
    factBook: "Réserver tôt",
    staysHeading: (circuit) => `Où dormir près de ${circuit}`,
    staysSub:
      "Hôtels, campings et locations vérifiés un par un, classés par distance au circuit. Ouvrez une carte pour voir les disponibilités et les prix en direct pour vos dates.",
    zonesHeading: "Les meilleures zones",
    zonesSub: (circuit) =>
      `Les villes et villages autour de ${circuit}, des campings sur place aux hôtels confortables à quelques minutes en voiture.`,
    atCircuit: "Au circuit",
    minLabel: (min) => `${min} min`,
    staysCount: (n) => (n === 1 ? "1 hébergement" : `${n} hébergements`),
    mapHeading: (circuit) => `Disponibilités en direct autour de ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `Quand réserver son hébergement pour le ${event} ?`,
        a: `Le plus tôt possible. Les hôtels et campings les plus proches de ${circuit} affichent souvent complet ${bookAhead} à l'avance. Réserver avec annulation gratuite dès que les dates sont connues reste la meilleure approche.`,
      },
      {
        q: `Où vaut-il mieux dormir pour le ${event} ?`,
        a: `Les hébergements les plus proches sont à ${town} et dans les villages au bord du circuit. Pour plus de choix et de meilleurs prix, les villes alentour à une trentaine de minutes sont le bon compromis. La carte ci-dessus montre les disponibilités en direct partout.`,
      },
      {
        q: `Peut-on camper à ${circuit} ?`,
        a: "Oui. Des campings officiels et privés ouvrent pour le week-end de course juste à côté du circuit. C'est l'option la plus proche et la première à partir, alors réservez tôt.",
      },
      {
        q: `Combien de temps à l'avance les hébergements près de ${circuit} sont-ils complets ?`,
        a: `Les options sur place et accessibles à pied partent en général ${bookAhead} avant le ${event}. La couronne de villes plus large reste disponible bien plus longtemps : élargissez la recherche si le plus proche est complet.`,
      },
      {
        q: "Les prix affichés sur cette page sont-ils en direct ?",
        a: "Oui. Chaque hébergement renvoie aux disponibilités et aux prix en direct pour vos dates, et la carte se met à jour en temps réel. Nous pouvons toucher une commission si vous réservez, sans surcoût pour vous.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Accès",
    travelTitle: (c) => `Comment venir à ${c}`,
    travelIntro: (c, e) =>
      `Comment rejoindre ${c} pour le ${e} : les aéroports les plus proches, les gares les plus pratiques et les grands axes routiers, plus une carte en direct des hébergements une fois sur place.`,
    byPlane: "En avion",
    byTrain: "En train",
    byCar: "En voiture",
    planeNote: (c) =>
      `Aéroports les plus proches de ${c}, du plus près au plus loin.`,
    trainNote:
      "Gares les plus proches, puis taxi ou navette pour le dernier kilomètre.",
    carNote: "Grands axes d'accès — trafic dense les jours de course près des entrées.",
    carBody: (c) =>
      `La voiture reste le moyen le plus simple de rejoindre ${c} et les villes alentour. Partez tôt les matins de course et réservez un hébergement avec parking ou à quelques minutes du circuit.`,
    minByCar: (m) => `${m} min en voiture`,
    searchFlights: "Chercher un vol",
    mapHere: (c) => `Où dormir autour de ${c}`,
    guideKicker: "Guide week-end de course",
    guideTitle: (c) => `Guide week-end de course : ${c}`,
    guideIntro: (c, e) =>
      `Tout pour préparer un séjour au ${e} à ${c} : quand réserver, les meilleures zones où se baser, le camping et comment circuler les jours de course.`,
    whenToBook: "Quand réserver",
    whereToBase: "Où se baser",
    campingH: "Camping",
    gettingAround: "Se déplacer",
    whenToBookBody: (e, b) =>
      `Les hébergements les plus proches pour le ${e} affichent complet ${b} à l'avance. Réservez avec annulation gratuite dès que les dates sont connues, puis affinez à l'approche du week-end.`,
    whereToBaseBody: (c, t) =>
      `Les bases les plus pratiques sont au bord du circuit et à ${t}. Pour plus de choix et de meilleurs prix, élargissez aux villes à une trentaine de minutes : elles se remplissent plus tard et restent bien reliées au circuit.`,
    campingBody: (c) =>
      `Des campings officiels et privés ouvrent autour de ${c} pour le week-end de course. C'est l'option la plus proche et la moins chère, la première à partir : réservez tôt et venez équipé.`,
    gettingAroundBody: (c, r) =>
      `La plupart des fans viennent en voiture : les grands axes sont ${r}, et le trafic culmine juste avant et après les séances. Partez tôt, covoiturez si possible et repérez les parkings-relais ou navettes.`,
    zoneKicker: (c) => `Près de ${c}`,
    zoneTitle: (z, c) => `Où dormir à ${z} pour ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} est ${m === 0 ? "juste au circuit" : `à environ ${m} minutes de ${c}`} — une base pratique pour le ${e}. Voici ses hébergements avec les prix en direct, plus une carte des disponibilités à vos dates.`,
    zoneStaysH: (z) => `Hébergements à ${z}`,
    zoneMapH: (z) => `Disponibilités en direct à ${z}`,
    otherZones: (c) => `Autres zones près de ${c}`,
    filterKicker: "Hébergements filtrés",
    filterTitle: {
      hotels: (c) => `Hôtels près de ${c}`,
      campsites: (c) => `Campings près de ${c}`,
      "walking-distance": (c) => `Hébergements les plus proches de ${c}`,
      cheap: (c) => `Hébergements pas chers près de ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Les hôtels près de ${c} pour le ${e}, du plus proche au plus loin, avec les prix en direct. Du simple arrêt en bord de route à la base confortable à quelques minutes des entrées.`,
      campsites: (c, e) =>
        `Les campings près de ${c} pour le ${e} : la façon la plus proche et la plus économique de dormir au bord de la piste. Ils partent en premier, réservez tôt.`,
      "walking-distance": (c, e) =>
        `Les hébergements les plus proches de ${c} pour le ${e} — à pied ou à quelques minutes en voiture. Très peu de stock qui part vite : réservez dès les dates connues.`,
      cheap: (c, e) =>
        `Les hébergements au meilleur rapport qualité-prix près de ${c} pour le ${e}. Hôtels économiques, chambres d'hôtes et campings, du plus proche au plus loin, prix en direct.`,
    },
  },
};

/* ----------------------------- DUTCH ----------------------------- */
const nlX: ExtraDict = {
  ctaFindStay: "Vind jouw verblijf",
  navTravel: "Route ernaartoe",
  navCircuits: "Circuits",
  homeQuiz: {
    title: "Weet je niet waar je je moet baseren?",
    text: "Beantwoord vijf korte vragen en we wijzen je de juiste zones, de best passende verblijven en een live kaart voor jouw raceweekend.",
    cta: "Vind jouw verblijf",
  },
  faq: (c) => {
    const ev = c.eventName ?? "dit raceweekend";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `Wanneer moet ik accommodatie boeken voor ${ev}${yr}?`,
        a: `Zo vroeg mogelijk. De dichtstbijzijnde hotels en huizen gaan meestal ${m}+ maanden vooraf. Boeken met gratis annulering zodra de data vaststaan is de standaardzet van vaste bezoekers.`,
      },
      {
        q: "Hoe ver van tevoren is Le Mans volgeboekt?",
        a: "De stad zelf is ongeveer 9 tot 12 maanden voor de junirace vol, en enkele maanden voor de andere weekenden. De omliggende regio blijft veel langer open.",
      },
      c.zoneName
        ? {
            q: `Hoe lang is de rit van ${c.zoneName} naar het circuit op racedagen?`,
            a: `Ongeveer ${c.driveMin} minuten op een normale dag, eerder ${c.raceWeekMin} minuten in raceweekverkeer. Vertrek voor de ochtendspits en u bent het grootste deel voor.`,
          }
        : {
            q: "Kan ik op loopafstand van het circuit slapen?",
            a: "Ja, maar het aanbod is klein: een handvol hotels, particuliere huizen in Arnage, Mulsanne en Ruaudin, en plekken die voor het weekend opengaan. Boek maanden vooruit of kijk in de 30-minutenring.",
          },
      {
        q: "Wat is de goedkoopste zone?",
        a: "Prijzen dalen met elke ring naar buiten. Plaatsen op 30 tot 60 minuten en steden als Tours, Angers, Laval en Alençon houden normale tarieven lang nadat de binnenring is verdrievoudigd.",
      },
      {
        q: "Kamperen, hotel of huis huren: wat is beter?",
        a: "Kamperen is het dichtst bij de actie en het goedkoopst; hotels zijn het schaarst en gaan eerst; een huis huren wint voor groepen die een keuken, bedden voor iedereen en parkeerruimte willen. Onze quiz matcht je.",
      },
      {
        q: "Kan ik het circuit zonder auto bereiken?",
        a: "Ja. Vanuit het centrum rijdt de T1-tram tot op loopafstand van de poorten, met extra diensten op racedagen. Laval, Tours, Angers en Alençon hebben treinen naar station Le Mans, waar de tram het overneemt.",
      },
      {
        q: "Alles lijkt volgeboekt. Wat nu?",
        a: "Vergroot de straal ring voor ring en jaag op annuleringen: tussen 30 en 7 dagen vooraf komt een echte golf annuleerbare kamers vrij. Onze plan B-gids heeft de volledige strategie.",
      },
      {
        q: "Moet ik met gratis annulering boeken?",
        a: "Altijd, als het kan. Het kost niets, legt de prijs van vandaag vast en laat je upgraden naar iets dichterbij als dat vrijkomt. De meeste raceweek-boekingen gaan zo.",
      },
      {
        q: "Zijn de prijzen hoger tijdens het raceweekend?",
        a: "Ja, sterk in de binnenste ringen, waar kamers kunnen verdubbelen of verdrievoudigen. Hoe verder weg je zit, hoe normaler de prijzen blijven, precies waarom de rijtijd telt.",
      },
      {
        q: "Hoe werken de kaarten en lijsten op deze site?",
        a: "De kaart en de getoonde verblijven laden live prijzen van onze boekingspartners. Boeken via hen steunt deze site zonder extra kosten. We zijn een onafhankelijke gids en verkopen geen tickets.",
      },
      c.eventName
        ? {
            q: `Hoeveel bezoekers trekt ${c.eventName}?`,
            a: "De grootste weekenden trekken enorme drukte, daarom verdwijnen bedden bij het circuit zo vroeg. Die cijfers zijn de reden dat vroeg boeken zo belangrijk is.",
          }
        : {
            q: "Is parkeren inbegrepen waar ik slaap?",
            a: "Dat verschilt per zone. Dorpen bij de baan en plaatsen verderop bieden meestal makkelijk of gratis parkeren; het centrum is krapper. Elke zonepagina vermeldt de parkeersituatie.",
          },
      {
        q: "Kan ik meteen na de race voor volgend jaar boeken?",
        a: "Ja, en het is de beste truc. Eigenaren plaatsen de data van volgend jaar in de dagen na het evenement, als alles nog open is. Boek in dat venster en het hele probleem verdwijnt.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "Topverblijven in deze zone",
    sub: "Een geselecteerd aanbod van echte hotels, campings en huizen. Klik voor live prijzen en beschikbaarheid op jouw data.",
    seePrice: "Datums & prijs",
    seeAllArea: "Bekijk alle verblijven in deze zone",
    disclaimer:
      "Een geselecteerd aanbod van echte accommodaties. Live prijzen en beschikbaarheid openen bij onze boekingspartner; boekingen steunen deze site zonder extra kosten.",
    kind: { hotel: "Hotel", camping: "Camping", rental: "Huis" },
  },
  route: {
    heading: "Jouw route naar het circuit",
    sub: "De echte aanrijroutes, afstand en eerlijke rijtijden: normale dagen versus raceweek.",
    start: "Jouw basis",
    finish: "Circuit",
    normalDrive: "Normale rit",
    raceWeekDrive: "Raceweek",
    totalDistance: "Afstand",
  },
  quiz: {
    heroKicker: "Verblijfzoeker",
    title: "Vind jouw Le Mans-verblijf in 5 vragen",
    metaDescription:
      "Beantwoord vijf korte vragen over je raceweekend, afstand, groepsgrootte, type verblijf en budget. Word gematcht aan de juiste zones, echte verblijven en een live beschikbaarheidskaart.",
    intro:
      "Vertel ons hoe je de raceweek beleeft en we wijzen je de passende zones, de best passende verblijven en een live kaart op jouw data.",
    labels: {
      start: "Start",
      step: "Vraag",
      of: "van",
      back: "Terug",
      next: "Volgende",
      seeResults: "Bekijk resultaten",
      restart: "Opnieuw",
      q: {
        event: "Voor welk raceweekend kom je?",
        distance: "Hoe dicht bij het circuit wil je zijn?",
        people: "Met hoeveel reizen jullie?",
        type: "Wat voor plek wil je?",
        budget: "Wat is je budget per nacht?",
      },
      distanceOpts: {
        walk: "Loopafstand",
        min30: "Minder dan 30 minuten",
        min60: "Minder dan een uur",
        any: "Wat de beste deal is",
      },
      peopleOpts: { couple: "1 tot 2", small: "3 tot 4", family: "5 tot 7", group: "8 of meer" },
      typeOpts: {
        hotel: "Een hotel",
        rental: "Een huis of woning",
        camping: "Camping",
        any: "Geen voorkeur",
      },
      budgetOpts: { budget: "Budget", mid: "Middenklasse", up: "Luxe", any: "Flexibel" },
      result: {
        title: "Dit is jouw raceweekplan",
        zonesHeading: "Beste zones voor jou",
        hotelsHeading: "Verblijven die passen",
        mapHeading: "Live beschikbaarheid op de kaart",
        mapNote:
          "Vooraf ingesteld op jouw racedata. Boeken via de kaart steunt deze onafhankelijke gids zonder extra kosten.",
        viewZone: "Bekijk zone",
        seePrice: "Bekijk prijs",
        none: "Geen exacte match, vergroot je afstand of budget.",
        kind: { hotel: "Hotel", camping: "Camping", rental: "Huis" },
      },
    },
  },
  travel: {
    heroKicker: "Route ernaartoe",
    title: "Naar Le Mans en het circuit reizen",
    metaDescription:
      "Hoe bereik je Le Mans en het circuit voor de raceweek: vluchten naar nabije luchthavens, TGV-treinen, autoroutes, de tramtruc en parkeeradvies.",
    intro: [
      "Le Mans ligt centraal in een snel netwerk: een uur TGV vanuit Parijs, snelwegen uit elke richting en vijf luchthavens binnen bereik. Hoe je hier komt, bepaalt waar het slim is om te slapen.",
      "Hieronder: vluchten en de dichtstbijzijnde luchthavens, dan treinen, auto en de lokale tramtruc die het centrum een van de slimste bases maakt.",
    ],
    sections: [
      {
        heading: "Met de trein",
        paragraphs: [
          "Station Le Mans ligt aan de TGV-lijn vanuit Parijs (iets meer dan een uur) en heeft regionale treinen vanuit Tours, Angers, Laval en Alençon. Vanaf het station rijdt de T1-tram richting circuit, zodat een groep de auto bij de accommodatie kan laten.",
        ],
      },
      {
        heading: "Met de auto en de tramtruc",
        paragraphs: [
          "Het circuit ligt aan de zuidrand van de stad tussen de D338 en de snelwegen A11/A28. Op racedagen zijn de laatste kilometers het trage stuk, dus timing wint van route: geparkeerd voor het midden van de ochtend of na de start aankomen.",
          "Slaap je in het centrum, laat de auto dan staan. De T1-tram (richting Antarès) zet je op loopafstand van de poorten af met extra diensten op racedagen, daarom is het centrum een van de praktischste bases.",
        ],
      },
    ],
    flight: {
      heading: "Vind een vlucht",
      intro:
        "De dichtstbijzijnde luchthavens bij Le Mans, met de snelste aansluiting naar het circuit. Vergelijk hieronder de tarieven; onze partner-vluchtwidget verschijnt hier zodra live.",
      airportsHeading: "Dichtstbijzijnde luchthavens",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "De live vluchtzoeker verschijnt hier. Vergelijk intussen tarieven via de luchthavenlinks hieronder.",
      disclaimer:
        "Vluchtlinks openen bij onze reispartners. Zoekopdrachten kunnen ons een commissie opleveren zonder extra kosten.",
    },
  },
  eventZone: {
    heroKicker: "Raceweekend · zone",
    title: (event, zone, year) => `Overnachten in ${zone} voor ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `Is ${zone} een goede basis voor ${event}? Echte rijtijden (${min} min normaal, meer in raceverkeer), de route naar het circuit, topverblijven en live beschikbaarheid.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} ligt pal tegen het circuit, dus voor ${event} kun je de auto vergeten: te voet of per fiets naar de poorten en terug na de nachtelijke stints. Het is de meest gewilde ring, met het kleinste aanbod, dus boek vroeg.`
        : `${zone} ligt op zo'n ${driveMin} minuten van het circuit op een normale dag, rond de ${raceWeekMin} in het raceweekverkeer van ${event}. ${
            ring >= 4
              ? "De vriend van de late boeker: een echte stad met normale prijzen wanneer de binnenringen weg zijn."
              : "Een praktische balans tussen afstand, beschikbaarheid en prijs."
          }`,
      `Hieronder vind je de route naar het circuit, een geselecteerd aanbod van echte verblijven in en rond ${zone}, en een live kaart ingesteld op de data van ${event} zodat je kunt boeken voordat het vol is.`,
    ],
    routeHeading: (zone) => `Van ${zone} naar het circuit`,
    hotelsHeading: (zone) => `Topverblijven in ${zone}`,
    mapHeading: (zone) => `Live beschikbaarheid in ${zone}`,
  },
  seo: {
    keyFactsTitle: "Kort samengevat",
    factBookAhead: "Vooraf boeken",
    factListedStays: "Vermelde verblijven",
    factDistance: "Tot circuit",
    factCrowd: "Drukte",
    compareTitle: "Vergelijk elke zone in één oogopslag",
    compareSub:
      "Echte rijtijden naar het circuit, raceweekverkeer, parkeren en vervoer per basis, zodat je afstand tegen beschikbaarheid afweegt.",
    colZone: "Zone",
    colTransport: "Trein / tram",
    colStays: "Verblijven",
    walk: "Te voet",
    yes: "Ja",
    nearbyHeading: "Vergelijk nabije zones",
    popularSearches: "Populaire zoekopdrachten",
    zoneCircuitArea: "Rond het circuit",
    stays: "verblijven",
    transport: { toCircuit: "Naar het circuit", car: "Auto", train: "Trein", tram: "Tram", walk: "Te voet" },
    goodToKnow: "Goed om te weten",
    aboutZone: (z) => `Overnachten in ${z}`,
    aboutEvent: (e) => `Over ${e}`,
    trust: {
      livePrices: "Live prijzen van boekingspartners",
      freeCancel: "Gratis annulering vaak mogelijk",
      noFees: "Geen boekingskosten van ons",
    },
  },
  circuitNet: {
    heading: "Ons circuitnetwerk",
    sub: "We brengen raceweek-accommodatie in kaart, circuit voor circuit. Le Mans is live; de rest van de eerste golf komt eraan.",
    soon: "Binnenkort",
    flagship: "Nu live",
  },
  hub: {
    heroTitle: "Waar overnachten tijdens de raceweek, circuit voor circuit",
    heroSub:
      "Raceweekenden boeken de plaatsen rond de baan maanden vooruit vol. We brengen hotels, camping en huizen in kaart op echte rijtijd bij de grote circuits ter wereld, zodat je de juiste basis boekt voordat die weg is.",
    soonTitle: (c) => `Waar overnachten tijdens de raceweek bij ${c}`,
    soonIntro: (c) =>
      `We bouwen de volledige accommodatiegids voor ${c}: hotels, camping en huizen op rijtijd naar het circuit. Het komt binnenkort. Intussen toont de live kaart hieronder de echte beschikbaarheid rond de baan.`,
    soonMap: (c) => `Live beschikbaarheid rond ${c}`,
    exploreLeMans: "Bekijk onze live Le Mans-gids",
  },
  circuitGuide: {
    kicker: "Uitvalsbasis voor de raceweek",
    intro: (circuit, event) =>
      `Waar overnachten voor de ${event} op ${circuit}: alle hotels, campings en huurwoningen bij het circuit, dichtstbijzijnde eerst, met live prijzen voor het raceweekend. We controleren elke locatie met de hand, zodat je de juiste uitvalsbasis boekt en niet zomaar het eerste resultaat.`,
    factClosest: "Dichtstbij",
    factCrowd: "Bezoekers",
    factWindow: "Wanneer",
    factBook: "Op tijd boeken",
    staysHeading: (circuit) => `Waar overnachten bij ${circuit}`,
    staysSub:
      "Met de hand gecontroleerde hotels, campings en huurwoningen, gesorteerd op afstand tot het circuit. Open een kaart voor live beschikbaarheid en prijzen voor jouw data.",
    zonesHeading: "Beste gebieden om te overnachten",
    zonesSub: (circuit) =>
      `De steden en dorpen rond ${circuit}, van campings op het terrein tot comfortabele hotels op een paar minuten rijden.`,
    atCircuit: "Op het circuit",
    minLabel: (min) => `${min} min`,
    staysCount: (n) => (n === 1 ? "1 verblijf" : `${n} verblijven`),
    mapHeading: (circuit) => `Live beschikbaarheid rond ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `Wanneer moet ik accommodatie boeken voor de ${event}?`,
        a: `Zo vroeg mogelijk. De dichtstbijzijnde hotels en campings rond ${circuit} zijn vaak ${bookAhead} van tevoren volgeboekt. Boeken met gratis annulering zodra de data bekend zijn, is de veiligste keuze.`,
      },
      {
        q: `Waar kun je het best overnachten voor de ${event}?`,
        a: `De dichtstbijzijnde verblijven liggen in ${town} en de dorpen pal naast het circuit. Voor meer keuze en betere prijzen zijn de omliggende steden binnen zo'n 30 minuten ideaal. De kaart hierboven toont overal de live beschikbaarheid.`,
      },
      {
        q: `Kun je kamperen bij ${circuit}?`,
        a: "Ja. Officiële en particuliere campings openen voor het raceweekend vlak naast het circuit. Het is de dichtstbijzijnde optie en het eerst vol, dus boek op tijd.",
      },
      {
        q: `Hoe lang van tevoren zijn verblijven bij ${circuit} volgeboekt?`,
        a: `Opties op het terrein en op loopafstand gaan meestal ${bookAhead} voor de ${event} weg. De bredere ring van steden blijft veel langer beschikbaar: verbreed je zoekopdracht als het dichtstbijzijnde vol is.`,
      },
      {
        q: "Zijn de prijzen op deze pagina live?",
        a: "Ja. Elk verblijf linkt naar live beschikbaarheid en prijzen voor jouw data, en de kaart werkt in realtime bij. We ontvangen mogelijk een commissie als je boekt, zonder extra kosten voor jou.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Bereikbaarheid",
    travelTitle: (c) => `Reizen naar ${c}`,
    travelIntro: (c, e) =>
      `Hoe je ${c} bereikt voor de ${e}: de dichtstbijzijnde luchthavens, de handigste treinstations en de belangrijkste wegen, plus een live kaart van overnachtingen zodra je er bent.`,
    byPlane: "Met het vliegtuig",
    byTrain: "Met de trein",
    byCar: "Met de auto",
    planeNote: (c) => `Dichtstbijzijnde luchthavens bij ${c}, dichtstbij eerst.`,
    trainNote:
      "Dichtstbijzijnde stations, daarna een taxi of shuttle voor het laatste stuk.",
    carNote: "Belangrijkste aanrijroutes — reken op druk verkeer op racedagen bij de poorten.",
    carBody: (c) =>
      `Met de auto is het veruit het makkelijkst om ${c} en de omliggende plaatsen te bereiken. Vertrek vroeg op racedagen en boek een verblijf met parkeerplaats of op een paar minuten van het circuit.`,
    minByCar: (m) => `${m} min met de auto`,
    searchFlights: "Vluchten zoeken",
    mapHere: (c) => `Waar overnachten rond ${c}`,
    guideKicker: "Raceweek-gids",
    guideTitle: (c) => `Raceweek-gids ${c}`,
    guideIntro: (c, e) =>
      `Alles om een verblijf voor de ${e} op ${c} te plannen: wanneer boeken, de beste gebieden om te overnachten, kamperen en hoe je je op racedagen verplaatst.`,
    whenToBook: "Wanneer boeken",
    whereToBase: "Waar overnachten",
    campingH: "Kamperen",
    gettingAround: "Verplaatsen",
    whenToBookBody: (e, b) =>
      `De dichtstbijzijnde verblijven voor de ${e} zijn ${b} van tevoren volgeboekt. Boek met gratis annulering zodra de data bekend zijn en verfijn dichter bij het weekend.`,
    whereToBaseBody: (c, t) =>
      `De handigste uitvalsbases liggen pal bij het circuit en in ${t}. Voor meer keuze en betere prijzen verbreed je naar de plaatsen binnen zo'n 30 minuten: die lopen later vol en blijven goed verbonden met het circuit.`,
    campingBody: (c) =>
      `Officiële en particuliere campings openen rond ${c} voor het raceweekend. Het is de dichtstbijzijnde, goedkoopste optie en het eerst vol, dus boek op tijd en neem alles mee.`,
    gettingAroundBody: (c, r) =>
      `De meeste fans rijden: de belangrijkste wegen zijn ${r}, en het verkeer piekt vlak voor en na de sessies. Vertrek vroeg, rijd samen waar het kan en let op P+R of shuttles.`,
    zoneKicker: (c) => `Bij ${c}`,
    zoneTitle: (z, c) => `Waar overnachten in ${z} voor ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} ligt ${m === 0 ? "pal bij het circuit" : `op zo'n ${m} minuten van ${c}`} — een praktische uitvalsbasis voor de ${e}. Hier de verblijven met live prijzen, plus een kaart van wat beschikbaar is op jouw data.`,
    zoneStaysH: (z) => `Verblijven in ${z}`,
    zoneMapH: (z) => `Live beschikbaarheid in ${z}`,
    otherZones: (c) => `Andere gebieden bij ${c}`,
    filterKicker: "Gefilterde verblijven",
    filterTitle: {
      hotels: (c) => `Hotels bij ${c}`,
      campsites: (c) => `Campings bij ${c}`,
      "walking-distance": (c) => `Dichtstbijzijnde verblijven bij ${c}`,
      cheap: (c) => `Goedkope verblijven bij ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Hotels bij ${c} voor de ${e}, dichtstbij eerst, met live prijzen voor het raceweekend. Van eenvoudige stops langs de weg tot comfortabele bases op een paar minuten van de poorten.`,
      campsites: (c, e) =>
        `Campings bij ${c} voor de ${e}: de dichtstbijzijnde, voordeligste manier om langs de baan te overnachten. Ze zijn het eerst vol, dus boek vroeg.`,
      "walking-distance": (c, e) =>
        `De dichtstbijzijnde verblijven bij ${c} voor de ${e} — op loopafstand of een paar minuten rijden. Weinig aanbod dat snel weg is, dus boek zodra de data vaststaan.`,
      cheap: (c, e) =>
        `De voordeligste verblijven bij ${c} voor de ${e}. Budgethotels, pensions en campings, dichtstbij eerst, met live prijzen.`,
    },
  },
};

/* ----------------------------- GERMAN ----------------------------- */
const deX: ExtraDict = {
  ctaFindStay: "Unterkunft finden",
  navTravel: "Anreise",
  navCircuits: "Strecken",
  homeQuiz: {
    title: "Unsicher, wo Sie sich einquartieren sollen?",
    text: "Beantworten Sie fünf kurze Fragen und wir zeigen Ihnen die passenden Zonen, die am besten passenden Unterkünfte und eine Live-Karte für Ihr Rennwochenende.",
    cta: "Unterkunft finden",
  },
  faq: (c) => {
    const ev = c.eventName ?? "dieses Rennwochenende";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `Wann sollte ich eine Unterkunft für ${ev}${yr} buchen?`,
        a: `So früh wie möglich. Die nächstgelegenen Hotels und Unterkünfte sind meist ${m}+ Monate vorher weg. Mit kostenloser Stornierung zu buchen, sobald die Termine feststehen, ist der Standardzug der Stammgäste.`,
      },
      {
        q: "Wie früh ist Le Mans ausgebucht?",
        a: "Die Stadt selbst ist rund 9 bis 12 Monate vor dem Juni-Rennen voll, und einige Monate vor den anderen Wochenenden. Die umliegende Region bleibt deutlich länger offen.",
      },
      c.zoneName
        ? {
            q: `Wie lange dauert die Fahrt von ${c.zoneName} zur Strecke an Renntagen?`,
            a: `Etwa ${c.driveMin} Minuten an einem normalen Tag, eher ${c.raceWeekMin} Minuten im Rennwochenverkehr. Wer vor dem Morgenverkehr startet, umgeht das meiste.`,
          }
        : {
            q: "Kann ich in Fußnähe zur Strecke übernachten?",
            a: "Ja, aber das Angebot ist winzig: eine Handvoll Hotels, private Unterkünfte in Arnage, Mulsanne und Ruaudin sowie Stellplätze, die fürs Wochenende öffnen. Monate vorher buchen oder auf den 30-Minuten-Ring ausweichen.",
          },
      {
        q: "Welche Zone ist am günstigsten?",
        a: "Die Preise fallen mit jedem Ring nach außen. Orte 30 bis 60 Minuten entfernt und Städte wie Tours, Angers, Laval und Alençon halten normale Preise, lange nachdem sich der innere Ring verdreifacht hat.",
      },
      {
        q: "Campen, Hotel oder Haus mieten: Was ist besser?",
        a: "Camping ist am nächsten am Geschehen und am günstigsten; Hotels sind am knappsten und zuerst weg; ein Haus zu mieten gewinnt für Gruppen, die Küche, Betten für alle und Parkplatz wollen. Unser Quiz ordnet Sie zu.",
      },
      {
        q: "Komme ich ohne Auto zur Strecke?",
        a: "Ja. Vom Zentrum fährt die Tram T1 bis in Fußnähe der Tore, an Renntagen verstärkt. Laval, Tours, Angers und Alençon haben Züge zum Bahnhof Le Mans, wo die Tram übernimmt.",
      },
      {
        q: "Alles scheint ausgebucht. Was nun?",
        a: "Radius Ring für Ring vergrößern und Stornierungen jagen: Zwischen 30 und 7 Tagen vorher wird eine echte Welle stornierbarer Zimmer frei. Unser Plan-B-Guide hat die komplette Strategie.",
      },
      {
        q: "Sollte ich mit kostenloser Stornierung buchen?",
        a: "Immer, wenn möglich. Es kostet nichts, sichert den heutigen Preis und erlaubt ein Upgrade auf etwas Näheres, falls frei wird. Die meisten Rennwochen-Buchungen laufen so.",
      },
      {
        q: "Sind die Preise am Rennwochenende höher?",
        a: "Ja, stark in den inneren Ringen, wo sich Zimmer verdoppeln oder verdreifachen können. Je weiter draußen, desto näher bleiben die Preise an der Norm, genau deshalb zählt die Fahrzeit.",
      },
      {
        q: "Wie funktionieren die Karten und Listen auf dieser Seite?",
        a: "Die Karte und die gelisteten Unterkünfte laden Live-Preise unserer Buchungspartner. Buchungen darüber unterstützen diese Seite ohne Mehrkosten. Wir sind ein unabhängiger Guide und verkaufen keine Tickets.",
      },
      c.eventName
        ? {
            q: `Wie viele Besucher zieht ${c.eventName} an?`,
            a: "Die größten Wochenenden ziehen riesige Mengen an, weshalb Betten nahe der Strecke so früh verschwinden. Diese Zahlen sind der Grund, warum frühes Buchen so wichtig ist.",
          }
        : {
            q: "Ist Parken inklusive, wo ich übernachte?",
            a: "Das variiert je Zone. Dörfer nahe der Strecke und weiter entfernte Orte bieten meist einfaches oder kostenloses Parken; das Zentrum ist enger. Jede Zonenseite weist die Parksituation aus.",
          },
      {
        q: "Kann ich direkt nach dem Rennen fürs nächste Jahr buchen?",
        a: "Ja, und das ist der beste Trick. Eigentümer stellen die Termine fürs nächste Jahr in den Tagen nach dem Event ein, wenn alles noch offen ist. In diesem Fenster buchen, und das Problem verschwindet.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "Top-Unterkünfte in dieser Zone",
    sub: "Eine handverlesene Auswahl echter Hotels, Campingplätze und Ferienunterkünfte. Tippen Sie für Live-Preise und Verfügbarkeit zu Ihren Daten.",
    seePrice: "Termine & Preis",
    seeAllArea: "Alle Unterkünfte dieser Zone ansehen",
    disclaimer:
      "Eine kuratierte Auswahl echter Häuser. Live-Preise und Verfügbarkeit öffnen bei unserem Buchungspartner; Buchungen unterstützen diese Seite ohne Mehrkosten.",
    kind: { hotel: "Hotel", camping: "Camping", rental: "Ferienhaus" },
  },
  route: {
    heading: "Ihre Route zur Strecke",
    sub: "Die echten Anfahrtsstraßen, Entfernung und ehrliche Fahrzeiten: normale Tage gegen Rennwoche.",
    start: "Ihre Basis",
    finish: "Strecke",
    normalDrive: "Normale Fahrt",
    raceWeekDrive: "Rennwoche",
    totalDistance: "Entfernung",
  },
  quiz: {
    heroKicker: "Unterkunftsfinder",
    title: "Finden Sie Ihre Le-Mans-Unterkunft in 5 Fragen",
    metaDescription:
      "Beantworten Sie fünf kurze Fragen zu Rennwochenende, Entfernung, Gruppengröße, Unterkunftsart und Budget. Werden Sie den passenden Zonen, echten Unterkünften und einer Live-Karte zugeordnet.",
    intro:
      "Sagen Sie uns, wie Sie die Rennwoche erleben, und wir zeigen Ihnen die passenden Zonen, die am besten passenden Unterkünfte und eine Live-Karte zu Ihren Daten.",
    labels: {
      start: "Start",
      step: "Frage",
      of: "von",
      back: "Zurück",
      next: "Weiter",
      seeResults: "Ergebnisse ansehen",
      restart: "Neu starten",
      q: {
        event: "Für welches Rennwochenende kommen Sie?",
        distance: "Wie nah an der Strecke wollen Sie sein?",
        people: "Wie viele reisen Sie?",
        type: "Welche Art von Unterkunft möchten Sie?",
        budget: "Wie hoch ist Ihr Budget pro Nacht?",
      },
      distanceOpts: {
        walk: "Fußläufig",
        min30: "Unter 30 Minuten",
        min60: "Unter einer Stunde",
        any: "Das beste Angebot",
      },
      peopleOpts: { couple: "1 bis 2", small: "3 bis 4", family: "5 bis 7", group: "8 oder mehr" },
      typeOpts: {
        hotel: "Ein Hotel",
        rental: "Ein Haus oder Ferienwohnung",
        camping: "Camping",
        any: "Keine Präferenz",
      },
      budgetOpts: { budget: "Günstig", mid: "Mittelklasse", up: "Gehoben", any: "Flexibel" },
      result: {
        title: "Hier ist Ihr Rennwochen-Plan",
        zonesHeading: "Beste Zonen für Sie",
        hotelsHeading: "Passende Unterkünfte",
        mapHeading: "Live-Verfügbarkeit auf der Karte",
        mapNote:
          "Voreingestellt auf Ihre Renntermine. Buchungen über die Karte unterstützen diesen unabhängigen Guide ohne Mehrkosten.",
        viewZone: "Zone ansehen",
        seePrice: "Preis ansehen",
        none: "Keine exakte Übereinstimmung, erweitern Sie Entfernung oder Budget.",
        kind: { hotel: "Hotel", camping: "Camping", rental: "Ferienhaus" },
      },
    },
  },
  travel: {
    heroKicker: "Anreise",
    title: "Anreise nach Le Mans und zur Strecke",
    metaDescription:
      "So erreichen Sie Le Mans und die Strecke zur Rennwoche: Flüge zu nahen Flughäfen, TGV-Züge, Fahrtrouten, der Tram-Trick und Parktipps.",
    intro: [
      "Le Mans liegt im Zentrum eines schnellen Netzes: eine Stunde TGV von Paris, Autobahnen aus allen Richtungen und fünf Flughäfen in Reichweite. Wie Sie anreisen, bestimmt, wo es sinnvoll ist zu schlafen.",
      "Unten: Flüge und die nächsten Flughäfen, dann Züge, Auto und der lokale Tram-Trick, der das Zentrum zu einer der klügsten Basen macht.",
    ],
    sections: [
      {
        heading: "Mit dem Zug",
        paragraphs: [
          "Der Bahnhof Le Mans liegt an der TGV-Strecke von Paris (gut eine Stunde) und hat Regionalzüge aus Tours, Angers, Laval und Alençon. Ab dem Bahnhof fährt die Tram T1 Richtung Strecke, sodass eine Gruppe das Auto an der Unterkunft lassen kann.",
        ],
      },
      {
        heading: "Mit dem Auto und der Tram-Trick",
        paragraphs: [
          "Die Strecke liegt am Südrand der Stadt zwischen der D338 und den Autobahnen A11/A28. An Renntagen sind die letzten Kilometer der langsame Teil, also schlägt Timing die Route: vor dem späten Vormittag geparkt oder erst nach dem Start ankommen.",
          "Wer im Zentrum übernachtet, lässt das Auto stehen. Die Tram T1 (Richtung Antarès) setzt Sie in Fußnähe der Tore ab, an Renntagen verstärkt, weshalb das Zentrum eine der praktischsten Basen ist.",
        ],
      },
    ],
    flight: {
      heading: "Flug finden",
      intro:
        "Die nächsten Flughäfen zu Le Mans mit der schnellsten Weiterverbindung zur Strecke. Vergleichen Sie unten die Preise; unser Partner-Flugwidget erscheint hier, sobald live.",
      airportsHeading: "Nächste Flughäfen",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "Die Live-Flugsuche erscheint hier. Vergleichen Sie inzwischen Preise über die Flughafenlinks unten.",
      disclaimer:
        "Fluglinks öffnen bei unseren Reisepartnern. Suchen können uns eine Provision einbringen, ohne Mehrkosten für Sie.",
    },
  },
  eventZone: {
    heroKicker: "Rennwochenende · Zone",
    title: (event, zone, year) => `Übernachten in ${zone} für ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `Ist ${zone} eine gute Basis für ${event}? Echte Fahrzeiten (${min} Min. normal, mehr im Rennverkehr), die Route zur Strecke, Top-Unterkünfte und Live-Verfügbarkeit.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} liegt direkt an der Strecke, für ${event} können Sie das Auto vergessen: zu Fuß oder mit dem Rad zu den Toren und nach den Nachtstints zurück. Es ist der begehrteste Ring mit dem kleinsten Angebot, also früh buchen.`
        : `${zone} liegt etwa ${driveMin} Minuten von der Strecke an einem normalen Tag, rund ${raceWeekMin} im Rennwochenverkehr von ${event}. ${
            ring >= 4
              ? "Der Freund der Spätbucher: eine echte Stadt mit normalen Preisen, wenn die inneren Ringe weg sind."
              : "Eine praktische Balance aus Entfernung, Verfügbarkeit und Preis."
          }`,
      `Unten finden Sie die Route zur Strecke, eine handverlesene Auswahl echter Unterkünfte in und um ${zone} und eine Live-Karte, voreingestellt auf die Termine von ${event}, damit Sie buchen können, bevor es voll ist.`,
    ],
    routeHeading: (zone) => `Von ${zone} zur Strecke`,
    hotelsHeading: (zone) => `Top-Unterkünfte in ${zone}`,
    mapHeading: (zone) => `Live-Verfügbarkeit in ${zone}`,
  },
  seo: {
    keyFactsTitle: "Auf einen Blick",
    factBookAhead: "Vorausbuchen",
    factListedStays: "Gelistete Unterkünfte",
    factDistance: "Zur Strecke",
    factCrowd: "Besucher",
    compareTitle: "Alle Zonen auf einen Blick vergleichen",
    compareSub:
      "Echte Fahrzeiten zur Strecke, Rennwochenverkehr, Parken und Verkehrsanbindung je Basis, um Entfernung gegen Verfügbarkeit abzuwägen.",
    colZone: "Zone",
    colTransport: "Zug / Tram",
    colStays: "Unterkünfte",
    walk: "Zu Fuß",
    yes: "Ja",
    nearbyHeading: "Nahe Zonen vergleichen",
    popularSearches: "Beliebte Suchen",
    zoneCircuitArea: "Rund um die Strecke",
    stays: "Unterkünfte",
    transport: { toCircuit: "Zur Strecke", car: "Auto", train: "Zug", tram: "Tram", walk: "Zu Fuß" },
    goodToKnow: "Gut zu wissen",
    aboutZone: (z) => `Übernachten in ${z}`,
    aboutEvent: (e) => `${e} im Überblick`,
    trust: {
      livePrices: "Live-Preise von Buchungspartnern",
      freeCancel: "Kostenlose Stornierung oft möglich",
      noFees: "Keine Buchungsgebühr von uns",
    },
  },
  circuitNet: {
    heading: "Unser Streckennetz",
    sub: "Wir kartieren Rennwochen-Unterkünfte Strecke für Strecke. Le Mans ist live; der Rest der ersten Welle folgt.",
    soon: "Bald",
    flagship: "Jetzt live",
  },
  hub: {
    heroTitle: "Wo übernachten zur Rennwoche, Strecke für Strecke",
    heroSub:
      "Rennwochenenden buchen die Orte rund um die Strecke Monate im Voraus aus. Wir kartieren Hotels, Camping und Ferienunterkünfte nach echter Fahrzeit an den großen Strecken der Welt, damit Sie die richtige Basis buchen, bevor sie weg ist.",
    soonTitle: (c) => `Wo übernachten zur Rennwoche am ${c}`,
    soonIntro: (c) =>
      `Wir bauen den vollständigen Unterkunftsguide für ${c}: Hotels, Camping und Ferienunterkünfte nach Fahrzeit zur Strecke. Er kommt bald. In der Zwischenzeit zeigt die Live-Karte unten die echte Verfügbarkeit rund um die Strecke.`,
    soonMap: (c) => `Live-Verfügbarkeit rund um ${c}`,
    exploreLeMans: "Unseren Live-Guide für Le Mans ansehen",
  },
  circuitGuide: {
    kicker: "Basislager fürs Rennwochenende",
    intro: (circuit, event) =>
      `Wo übernachten zum ${event} am ${circuit}: alle Hotels, Campingplätze und Ferienwohnungen nahe der Strecke, die nächsten zuerst, mit Live-Preisen fürs Rennwochenende. Wir prüfen jede Lage von Hand, damit du die richtige Basis buchst und nicht einfach das erste Ergebnis.`,
    factClosest: "Am nächsten",
    factCrowd: "Besucher",
    factWindow: "Wann",
    factBook: "Früh buchen",
    staysHeading: (circuit) => `Wo übernachten nahe ${circuit}`,
    staysSub:
      "Von Hand geprüfte Hotels, Campingplätze und Ferienwohnungen, sortiert nach Entfernung zur Strecke. Öffne eine Karte für Live-Verfügbarkeit und Preise für deine Daten.",
    zonesHeading: "Beste Gegenden zum Übernachten",
    zonesSub: (circuit) =>
      `Die Städte und Dörfer rund um ${circuit}, von Campingplätzen direkt an der Strecke bis zu komfortablen Hotels wenige Minuten entfernt.`,
    atCircuit: "An der Strecke",
    minLabel: (min) => `${min} Min.`,
    staysCount: (n) => (n === 1 ? "1 Unterkunft" : `${n} Unterkünfte`),
    mapHeading: (circuit) => `Live-Verfügbarkeit rund um ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `Wann sollte ich die Unterkunft für das ${event} buchen?`,
        a: `So früh wie möglich. Die nächstgelegenen Hotels und Campingplätze rund um ${circuit} sind oft ${bookAhead} im Voraus ausgebucht. Mit kostenloser Stornierung zu buchen, sobald die Termine feststehen, ist der sichere Weg.`,
      },
      {
        q: `Wo übernachtet man am besten zum ${event}?`,
        a: `Die nächsten Unterkünfte liegen in ${town} und den Dörfern direkt an der Strecke. Für mehr Auswahl und bessere Preise sind die umliegenden Orte in rund 30 Minuten ideal. Die Karte oben zeigt überall die Live-Verfügbarkeit.`,
      },
      {
        q: `Kann man am ${circuit} campen?`,
        a: "Ja. Offizielle und private Campingplätze öffnen zum Rennwochenende direkt neben der Strecke. Sie sind die nächste Option und zuerst ausgebucht, also früh reservieren.",
      },
      {
        q: `Wie lange im Voraus sind Unterkünfte nahe ${circuit} ausgebucht?`,
        a: `Optionen an der Strecke und in Gehweite sind meist ${bookAhead} vor dem ${event} weg. Der weitere Ring an Orten bleibt deutlich länger verfügbar: erweitere die Suche, wenn die nächsten ausgebucht sind.`,
      },
      {
        q: "Sind die Preise auf dieser Seite live?",
        a: "Ja. Jede Unterkunft verlinkt auf Live-Verfügbarkeit und Preise für deine Daten, und die Karte aktualisiert sich in Echtzeit. Wir erhalten möglicherweise eine Provision, wenn du buchst, ohne Mehrkosten für dich.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Anreise",
    travelTitle: (c) => `Anreise zum ${c}`,
    travelIntro: (c, e) =>
      `Wie du zum ${c} für das ${e} kommst: die nächsten Flughäfen, die nächstgelegenen Bahnhöfe und die wichtigsten Straßen, plus eine Live-Karte der Unterkünfte vor Ort.`,
    byPlane: "Mit dem Flugzeug",
    byTrain: "Mit der Bahn",
    byCar: "Mit dem Auto",
    planeNote: (c) => `Nächste Flughäfen zum ${c}, die nächsten zuerst.`,
    trainNote: "Nächste Bahnhöfe, danach Taxi oder Shuttle für das letzte Stück.",
    carNote: "Hauptzufahrten — an Renntagen dichter Verkehr nahe den Toren.",
    carBody: (c) =>
      `Mit dem Auto erreichst du ${c} und die umliegenden Orte am einfachsten. Fahre an Renntagen früh los und buche eine Unterkunft mit Parkplatz oder wenige Minuten von der Strecke.`,
    minByCar: (m) => `${m} Min. mit dem Auto`,
    searchFlights: "Flüge suchen",
    mapHere: (c) => `Wo übernachten rund um ${c}`,
    guideKicker: "Rennwochenende-Guide",
    guideTitle: (c) => `Rennwochenende-Guide ${c}`,
    guideIntro: (c, e) =>
      `Alles für die Planung eines Aufenthalts zum ${e} am ${c}: wann buchen, die besten Gegenden zum Übernachten, Camping und wie du dich an Renntagen bewegst.`,
    whenToBook: "Wann buchen",
    whereToBase: "Wo übernachten",
    campingH: "Camping",
    gettingAround: "Vor Ort unterwegs",
    whenToBookBody: (e, b) =>
      `Die nächstgelegenen Unterkünfte für das ${e} sind ${b} im Voraus ausgebucht. Buche mit kostenloser Stornierung, sobald die Termine feststehen, und passe näher am Wochenende an.`,
    whereToBaseBody: (c, t) =>
      `Die praktischsten Standorte liegen direkt an der Strecke und in ${t}. Für mehr Auswahl und bessere Preise erweitere auf die Orte in rund 30 Minuten: Sie füllen sich später und bleiben gut an die Strecke angebunden.`,
    campingBody: (c) =>
      `Offizielle und private Campingplätze öffnen rund um ${c} zum Rennwochenende. Sie sind die nächste, günstigste Option und zuerst ausgebucht, also früh buchen und alles mitbringen.`,
    gettingAroundBody: (c, r) =>
      `Die meisten Fans fahren mit dem Auto: Die Hauptstraßen sind ${r}, der Verkehr ist kurz vor und nach den Sessions am dichtesten. Fahre früh los, bilde Fahrgemeinschaften und achte auf Park-and-ride oder Shuttles.`,
    zoneKicker: (c) => `Nahe ${c}`,
    zoneTitle: (z, c) => `Wo übernachten in ${z} für ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} liegt ${m === 0 ? "direkt an der Strecke" : `etwa ${m} Minuten von ${c}`} — eine praktische Basis für das ${e}. Hier die Unterkünfte mit Live-Preisen, plus eine Karte der Verfügbarkeit für deine Daten.`,
    zoneStaysH: (z) => `Unterkünfte in ${z}`,
    zoneMapH: (z) => `Live-Verfügbarkeit in ${z}`,
    otherZones: (c) => `Weitere Gegenden nahe ${c}`,
    filterKicker: "Gefilterte Unterkünfte",
    filterTitle: {
      hotels: (c) => `Hotels nahe ${c}`,
      campsites: (c) => `Campingplätze nahe ${c}`,
      "walking-distance": (c) => `Nächste Unterkünfte zum ${c}`,
      cheap: (c) => `Günstige Unterkünfte nahe ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Hotels nahe ${c} für das ${e}, die nächsten zuerst, mit Live-Preisen fürs Rennwochenende. Von einfachen Stopps an der Straße bis zu komfortablen Basen wenige Minuten von den Toren.`,
      campsites: (c, e) =>
        `Campingplätze nahe ${c} für das ${e}: die nächste, günstigste Art, an der Strecke zu übernachten. Sie sind zuerst ausgebucht, also früh buchen.`,
      "walking-distance": (c, e) =>
        `Die nächstgelegenen Unterkünfte zum ${c} für das ${e} — zu Fuß oder wenige Minuten mit dem Auto. Wenig Angebot, das schnell weg ist, also buche, sobald die Termine stehen.`,
      cheap: (c, e) =>
        `Die preiswertesten Unterkünfte nahe ${c} für das ${e}. Budgethotels, Pensionen und Campingplätze, die nächsten zuerst, mit Live-Preisen.`,
    },
  },
};

/* ----------------------------- ITALIAN ----------------------------- */
const itX: ExtraDict = {
  ctaFindStay: "Trova il tuo alloggio",
  navTravel: "Come arrivare",
  navCircuits: "Circuiti",
  homeQuiz: {
    title: "Non sai dove sistemarti?",
    text: "Rispondi a cinque domande veloci e ti indichiamo le zone giuste, gli alloggi più adatti e una mappa in tempo reale per il tuo weekend di gara.",
    cta: "Trova il tuo alloggio",
  },
  faq: (c) => {
    const ev = c.eventName ?? "questo weekend di gara";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `Quando prenotare l'alloggio per ${ev}${yr}?`,
        a: `Il prima possibile. Gli hotel e le case più vicine spariscono di solito ${m}+ mesi prima. Prenotare con cancellazione gratuita appena escono le date è la mossa standard degli habitué.`,
      },
      {
        q: "Con quanto anticipo Le Mans si esaurisce?",
        a: "La città stessa si riempie circa 9-12 mesi prima della gara di giugno, e qualche mese prima degli altri weekend. La regione intorno resta aperta molto più a lungo.",
      },
      c.zoneName
        ? {
            q: `Quanto dura il tragitto da ${c.zoneName} al circuito nei giorni di gara?`,
            a: `Circa ${c.driveMin} minuti in un giorno normale, piuttosto ${c.raceWeekMin} minuti nel traffico della settimana di gara. Partendo prima dell'ora di punta del mattino eviti gran parte del traffico.`,
          }
        : {
            q: "Si può dormire a distanza a piedi dal circuito?",
            a: "Sì, ma l'offerta è minima: pochi hotel, case di privati ad Arnage, Mulsanne e Ruaudin, e piazzole che aprono per il weekend. Prenota con mesi di anticipo o allargati all'anello dei 30 minuti.",
          },
      {
        q: "Qual è la zona più economica?",
        a: "I prezzi calano a ogni anello verso l'esterno. I paesi a 30-60 minuti e città come Tours, Angers, Laval e Alençon mantengono tariffe normali molto dopo che l'anello interno è triplicato.",
      },
      {
        q: "Meglio campeggio, hotel o casa in affitto?",
        a: "Il campeggio è il più vicino all'azione e il più economico; gli hotel sono i più scarsi e finiscono per primi; affittare una casa vince per i gruppi che vogliono cucina, letti per tutti e parcheggio. Il nostro quiz ti orienta.",
      },
      {
        q: "Posso raggiungere il circuito senza auto?",
        a: "Sì. Dal centro il tram T1 arriva a pochi passi dai cancelli, con corse rinforzate nei giorni di gara. Laval, Tours, Angers e Alençon hanno treni per la stazione di Le Mans, dove il tram fa il resto.",
      },
      {
        q: "Sembra tutto esaurito. E adesso?",
        a: "Allarga il raggio anello per anello e dai la caccia alle cancellazioni: tra 30 e 7 giorni prima si libera una vera ondata di camere cancellabili. La nostra guida piano B ha la strategia completa.",
      },
      {
        q: "Conviene prenotare con cancellazione gratuita?",
        a: "Sempre, se possibile. Non costa nulla, blocca il prezzo di oggi e permette di migliorare con qualcosa di più vicino se si libera. La maggior parte delle prenotazioni della settimana di gara si fa così.",
      },
      {
        q: "I prezzi sono più alti durante il weekend di gara?",
        a: "Sì, molto negli anelli interni, dove le camere possono raddoppiare o triplicare. Più ti sistemi lontano, più i prezzi restano vicini al normale: ecco perché conta il tempo di guida.",
      },
      {
        q: "Come funzionano le mappe e gli elenchi di questo sito?",
        a: "La mappa e gli alloggi elencati caricano i prezzi in tempo reale dai nostri partner di prenotazione. Prenotare tramite loro sostiene questo sito senza costi extra. Siamo una guida indipendente e non vendiamo biglietti.",
      },
      c.eventName
        ? {
            q: `Quanti spettatori attira ${c.eventName}?`,
            a: "I weekend più grandi richiamano folle enormi: per questo i letti vicino al circuito spariscono così presto. Quei numeri sono il motivo per cui prenotare in anticipo conta tanto.",
          }
        : {
            q: "Il parcheggio è incluso dove dormo?",
            a: "Dipende dalla zona. I paesi vicino alla pista e le città più lontane offrono di solito parcheggio facile o gratuito; il centro è più stretto. Ogni pagina di zona segnala la situazione parcheggio.",
          },
      {
        q: "Posso prenotare per l'anno dopo subito dopo la gara?",
        a: "Sì, ed è il trucco migliore. I proprietari pubblicano le date dell'anno successivo nei giorni dopo l'evento, quando tutto è ancora aperto. Prenota in quella finestra e il problema sparisce.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "I migliori alloggi della zona",
    sub: "Una selezione di hotel, campeggi e case reali. Tocca per vedere prezzi e disponibilità in tempo reale alle tue date.",
    seePrice: "Date & prezzo",
    seeAllArea: "Vedi tutti gli alloggi della zona",
    disclaimer:
      "Una selezione di strutture reali. Prezzi e disponibilità in tempo reale si aprono presso il nostro partner; le prenotazioni sostengono questo sito senza costi extra.",
    kind: { hotel: "Hotel", camping: "Campeggio", rental: "Casa" },
  },
  route: {
    heading: "Il tuo itinerario verso il circuito",
    sub: "Le vere strade di accesso, la distanza e tempi di guida onesti: giorni normali contro settimana di gara.",
    start: "La tua base",
    finish: "Circuito",
    normalDrive: "Guida normale",
    raceWeekDrive: "Settimana di gara",
    totalDistance: "Distanza",
  },
  quiz: {
    heroKicker: "Trova alloggio",
    title: "Trova il tuo alloggio a Le Mans in 5 domande",
    metaDescription:
      "Rispondi a cinque domande veloci su weekend di gara, distanza, dimensione del gruppo, tipo di alloggio e budget. Ottieni le zone giuste, alloggi reali e una mappa di disponibilità in tempo reale.",
    intro:
      "Dicci come vivi la settimana di gara e ti indichiamo le zone adatte, gli alloggi più in linea e una mappa in tempo reale impostata sulle tue date.",
    labels: {
      start: "Inizia",
      step: "Domanda",
      of: "di",
      back: "Indietro",
      next: "Avanti",
      seeResults: "Vedi i risultati",
      restart: "Ricomincia",
      q: {
        event: "Per quale weekend di gara vieni?",
        distance: "Quanto vicino al circuito vuoi stare?",
        people: "In quanti viaggiate?",
        type: "Che tipo di sistemazione vuoi?",
        budget: "Qual è il tuo budget a notte?",
      },
      distanceOpts: {
        walk: "A piedi",
        min30: "Meno di 30 minuti",
        min60: "Meno di un'ora",
        any: "L'offerta migliore",
      },
      peopleOpts: { couple: "1 o 2", small: "3 o 4", family: "5 a 7", group: "8 o più" },
      typeOpts: {
        hotel: "Un hotel",
        rental: "Una casa o appartamento",
        camping: "Campeggio",
        any: "Nessuna preferenza",
      },
      budgetOpts: { budget: "Economico", mid: "Medio", up: "Alto", any: "Flessibile" },
      result: {
        title: "Ecco il tuo piano per la settimana di gara",
        zonesHeading: "Le zone migliori per te",
        hotelsHeading: "Alloggi che corrispondono",
        mapHeading: "Disponibilità in tempo reale sulla mappa",
        mapNote:
          "Preimpostata sulle tue date di gara. Prenotare dalla mappa sostiene questa guida indipendente senza costi extra.",
        viewZone: "Vedi zona",
        seePrice: "Vedi prezzo",
        none: "Nessuna corrispondenza esatta, allarga distanza o budget.",
        kind: { hotel: "Hotel", camping: "Campeggio", rental: "Casa" },
      },
    },
  },
  travel: {
    heroKicker: "Come arrivare",
    title: "Arrivare a Le Mans e al circuito",
    metaDescription:
      "Come raggiungere Le Mans e il circuito per la settimana di gara: voli verso gli aeroporti vicini, treni TGV, percorsi in auto, il trucco del tram e consigli sul parcheggio.",
    intro: [
      "Le Mans è al centro di una rete veloce: un'ora di TGV da Parigi, autostrade da ogni direzione e cinque aeroporti a portata. Come arrivi determina dove conviene dormire.",
      "Sotto: voli e aeroporti più vicini, poi treni, auto e il trucco locale del tram che rende il centro una delle basi più intelligenti.",
    ],
    sections: [
      {
        heading: "In treno",
        paragraphs: [
          "La stazione di Le Mans è sulla linea TGV da Parigi (poco più di un'ora) e ha treni regionali da Tours, Angers, Laval e Alençon. Dalla stazione, il tram T1 va verso il circuito, così un gruppo può lasciare l'auto all'alloggio.",
        ],
      },
      {
        heading: "In auto e il trucco del tram",
        paragraphs: [
          "Il circuito è sul bordo sud della città tra la D338 e le autostrade A11/A28. Nei giorni di gara gli ultimi chilometri sono la parte lenta, quindi l'orario batte il percorso: parcheggiati prima di metà mattina o arriva dopo la partenza.",
          "Se dormi in centro, lascia perdere l'auto. Il tram T1 (direzione Antarès) ti lascia a pochi minuti a piedi dai cancelli, con corse rinforzate nei giorni di gara: per questo il centro è una delle basi più pratiche.",
        ],
      },
    ],
    flight: {
      heading: "Trova un volo",
      intro:
        "Gli aeroporti più vicini a Le Mans, con la coincidenza più rapida verso il circuito. Confronta le tariffe qui sotto; il nostro widget voli partner apparirà qui una volta attivo.",
      airportsHeading: "Aeroporti più vicini",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "Il widget di ricerca voli in tempo reale apparirà qui. Intanto confronta le tariffe con i link agli aeroporti qui sotto.",
      disclaimer:
        "I link dei voli si aprono presso i nostri partner di viaggio. Le ricerche possono farci guadagnare una commissione senza costi extra.",
    },
  },
  eventZone: {
    heroKicker: "Weekend di gara · zona",
    title: (event, zone, year) => `Dormire a ${zone} per ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `${zone} è una buona base per ${event}? Tempi di guida reali (${min} min normalmente, di più nel traffico di gara), il percorso al circuito, i migliori alloggi e disponibilità in tempo reale.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} è attaccata al circuito, quindi per ${event} puoi dimenticare l'auto: a piedi o in bici ai cancelli e ritorno dopo gli stint notturni. È l'anello più richiesto, con l'offerta più piccola: prenota presto.`
        : `${zone} è a circa ${driveMin} minuti dal circuito in un giorno normale, intorno a ${raceWeekMin} nel traffico della settimana di ${event}. ${
            ring >= 4
              ? "L'alleata di chi prenota tardi: una vera città con prezzi normali quando gli anelli interni sono esauriti."
              : "Un equilibrio pratico tra distanza, disponibilità e prezzo."
          }`,
      `Sotto trovi il percorso verso il circuito, una selezione di alloggi reali a ${zone} e dintorni, e una mappa in tempo reale impostata sulle date di ${event} per prenotare prima che si riempia.`,
    ],
    routeHeading: (zone) => `Da ${zone} al circuito`,
    hotelsHeading: (zone) => `I migliori alloggi a ${zone}`,
    mapHeading: (zone) => `Disponibilità in tempo reale a ${zone}`,
  },
  seo: {
    keyFactsTitle: "In breve",
    factBookAhead: "Prenotare",
    factListedStays: "Alloggi elencati",
    factDistance: "Dal circuito",
    factCrowd: "Affluenza",
    compareTitle: "Confronta tutte le zone a colpo d'occhio",
    compareSub:
      "Tempi di guida reali verso il circuito, traffico della settimana di gara, parcheggio e trasporti per ogni base, per bilanciare distanza e disponibilità.",
    colZone: "Zona",
    colTransport: "Treno / tram",
    colStays: "Alloggi",
    walk: "A piedi",
    yes: "Sì",
    nearbyHeading: "Confronta le zone vicine",
    popularSearches: "Ricerche popolari",
    zoneCircuitArea: "Intorno al circuito",
    stays: "alloggi",
    transport: { toCircuit: "Verso il circuito", car: "Auto", train: "Treno", tram: "Tram", walk: "A piedi" },
    goodToKnow: "Da sapere",
    aboutZone: (z) => `Dormire a ${z}`,
    aboutEvent: (e) => `${e} in breve`,
    trust: {
      livePrices: "Prezzi in tempo reale dai partner",
      freeCancel: "Cancellazione gratuita spesso disponibile",
      noFees: "Nessuna commissione di prenotazione da parte nostra",
    },
  },
  circuitNet: {
    heading: "La nostra rete di circuiti",
    sub: "Mappiamo gli alloggi della settimana di gara, circuito per circuito. Le Mans è online; il resto della prima ondata è in arrivo.",
    soon: "Presto",
    flagship: "Online",
  },
  hub: {
    heroTitle: "Dove dormire durante la settimana di gara, circuito per circuito",
    heroSub:
      "I weekend di gara esauriscono le città intorno alla pista con mesi di anticipo. Mappiamo hotel, campeggi e case per tempo di guida reale nei grandi circuiti del mondo, così prenoti la base giusta prima che finisca.",
    soonTitle: (c) => `Dove dormire durante la settimana di gara a ${c}`,
    soonIntro: (c) =>
      `Stiamo costruendo la guida completa agli alloggi di ${c}: hotel, campeggi e case ordinati per tempo di guida verso il circuito. Arriva presto. Intanto la mappa live qui sotto mostra la disponibilità reale intorno alla pista.`,
    soonMap: (c) => `Disponibilità in tempo reale intorno a ${c}`,
    exploreLeMans: "Vedi la nostra guida live di Le Mans",
  },
  circuitGuide: {
    kicker: "Base per il weekend di gara",
    intro: (circuit, event) =>
      `Dove dormire per il ${event} a ${circuit}: tutti gli hotel, i campeggi e le case vacanza vicino al circuito, dal più vicino al più lontano, con prezzi in tempo reale per il weekend di gara. Controlliamo ogni posizione a mano, così prenoti la base giusta e non solo il primo risultato.`,
    factClosest: "Più vicino",
    factCrowd: "Spettatori",
    factWindow: "Quando",
    factBook: "Prenota presto",
    staysHeading: (circuit) => `Dove dormire vicino a ${circuit}`,
    staysSub:
      "Hotel, campeggi e case vacanza verificati a mano, ordinati per distanza dal circuito. Apri una scheda per disponibilità e prezzi in tempo reale per le tue date.",
    zonesHeading: "Le zone migliori",
    zonesSub: (circuit) =>
      `Le città e i paesi intorno a ${circuit}, dai campeggi sul posto agli hotel comodi a pochi minuti d'auto.`,
    atCircuit: "Al circuito",
    minLabel: (min) => `${min} min`,
    staysCount: (n) => (n === 1 ? "1 alloggio" : `${n} alloggi`),
    mapHeading: (circuit) => `Disponibilità in tempo reale intorno a ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `Quando prenotare l'alloggio per il ${event}?`,
        a: `Il prima possibile. Gli hotel e i campeggi più vicini a ${circuit} si esauriscono spesso ${bookAhead} prima. Prenotare con cancellazione gratuita appena escono le date è la mossa più sicura.`,
      },
      {
        q: `Dove conviene dormire per il ${event}?`,
        a: `Gli alloggi più vicini sono a ${town} e nei paesi a ridosso del circuito. Per più scelta e prezzi migliori, le città circostanti entro circa 30 minuti sono il compromesso ideale. La mappa qui sopra mostra la disponibilità in tempo reale ovunque.`,
      },
      {
        q: `Si può campeggiare a ${circuit}?`,
        a: "Sì. Campeggi ufficiali e privati aprono per il weekend di gara proprio accanto al circuito. Sono l'opzione più vicina e le prime a esaurirsi, quindi prenota per tempo.",
      },
      {
        q: `Con quanto anticipo si esauriscono gli alloggi vicino a ${circuit}?`,
        a: `Le opzioni sul posto e a piedi se ne vanno di solito ${bookAhead} prima del ${event}. La fascia più ampia di città resta disponibile molto più a lungo: allarga la ricerca se i più vicini sono pieni.`,
      },
      {
        q: "I prezzi su questa pagina sono in tempo reale?",
        a: "Sì. Ogni alloggio rimanda a disponibilità e prezzi in tempo reale per le tue date, e la mappa si aggiorna in diretta. Potremmo ricevere una commissione se prenoti, senza costi aggiuntivi per te.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Come arrivare",
    travelTitle: (c) => `Come arrivare a ${c}`,
    travelIntro: (c, e) =>
      `Come raggiungere ${c} per il ${e}: gli aeroporti più vicini, le stazioni ferroviarie più comode e le principali vie d'accesso, più una mappa in tempo reale degli alloggi una volta arrivati.`,
    byPlane: "In aereo",
    byTrain: "In treno",
    byCar: "In auto",
    planeNote: (c) => `Aeroporti più vicini a ${c}, dal più vicino.`,
    trainNote: "Stazioni più vicine, poi taxi o navetta per l'ultimo tratto.",
    carNote: "Principali vie d'accesso — traffico intenso nei giorni di gara vicino agli ingressi.",
    carBody: (c) =>
      `L'auto è il modo più semplice per raggiungere ${c} e i paesi vicini. Parti presto nei giorni di gara e prenota un alloggio con parcheggio o a pochi minuti dal circuito.`,
    minByCar: (m) => `${m} min in auto`,
    searchFlights: "Cerca voli",
    mapHere: (c) => `Dove dormire intorno a ${c}`,
    guideKicker: "Guida al weekend di gara",
    guideTitle: (c) => `Guida al weekend di gara: ${c}`,
    guideIntro: (c, e) =>
      `Tutto per organizzare un soggiorno per il ${e} a ${c}: quando prenotare, le zone migliori dove alloggiare, il campeggio e come muoversi nei giorni di gara.`,
    whenToBook: "Quando prenotare",
    whereToBase: "Dove alloggiare",
    campingH: "Campeggio",
    gettingAround: "Spostarsi",
    whenToBookBody: (e, b) =>
      `Gli alloggi più vicini per il ${e} si esauriscono ${b} prima. Prenota con cancellazione gratuita appena escono le date, poi affina avvicinandoti al weekend.`,
    whereToBaseBody: (c, t) =>
      `Le basi più comode sono a ridosso del circuito e a ${t}. Per più scelta e prezzi migliori, allarga ai paesi entro circa 30 minuti: si riempiono più tardi e restano ben collegati al circuito.`,
    campingBody: (c) =>
      `Campeggi ufficiali e privati aprono intorno a ${c} per il weekend di gara. Sono l'opzione più vicina ed economica e le prime a esaurirsi, quindi prenota per tempo e porta tutto il necessario.`,
    gettingAroundBody: (c, r) =>
      `La maggior parte dei fan arriva in auto: le strade principali sono ${r} e il traffico è al massimo subito prima e dopo le sessioni. Parti presto, condividi i passaggi e cerca parcheggi scambiatori o navette.`,
    zoneKicker: (c) => `Vicino a ${c}`,
    zoneTitle: (z, c) => `Dove dormire a ${z} per ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} è ${m === 0 ? "proprio al circuito" : `a circa ${m} minuti da ${c}`} — una base pratica per il ${e}. Ecco i suoi alloggi con prezzi in tempo reale, più una mappa della disponibilità per le tue date.`,
    zoneStaysH: (z) => `Alloggi a ${z}`,
    zoneMapH: (z) => `Disponibilità in tempo reale a ${z}`,
    otherZones: (c) => `Altre zone vicino a ${c}`,
    filterKicker: "Alloggi filtrati",
    filterTitle: {
      hotels: (c) => `Hotel vicino a ${c}`,
      campsites: (c) => `Campeggi vicino a ${c}`,
      "walking-distance": (c) => `Alloggi più vicini a ${c}`,
      cheap: (c) => `Alloggi economici vicino a ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Hotel vicino a ${c} per il ${e}, dal più vicino, con prezzi in tempo reale per il weekend di gara. Da semplici soste lungo la strada a basi comode a pochi minuti dagli ingressi.`,
      campsites: (c, e) =>
        `Campeggi vicino a ${c} per il ${e}: il modo più vicino ed economico di dormire a bordo pista. Si esauriscono per primi, quindi prenota presto.`,
      "walking-distance": (c, e) =>
        `Gli alloggi più vicini a ${c} per il ${e} — a piedi o a pochi minuti in auto. Poca disponibilità che va via in fretta, quindi prenota appena escono le date.`,
      cheap: (c, e) =>
        `Gli alloggi col miglior rapporto qualità-prezzo vicino a ${c} per il ${e}. Hotel economici, pensioni e campeggi, dal più vicino, con prezzi in tempo reale.`,
    },
  },
};

/* ----------------------------- SPANISH ----------------------------- */
const esX: ExtraDict = {
  ctaFindStay: "Encuentra tu alojamiento",
  navTravel: "Cómo llegar",
  navCircuits: "Circuitos",
  homeQuiz: {
    title: "¿No sabes dónde alojarte?",
    text: "Responde cinco preguntas rápidas y te señalamos las zonas adecuadas, los alojamientos que mejor encajan y un mapa en directo para tu fin de semana de carreras.",
    cta: "Encuentra tu alojamiento",
  },
  faq: (c) => {
    const ev = c.eventName ?? "este fin de semana de carreras";
    const yr = c.year ? ` ${c.year}` : "";
    const m = c.months ?? 6;
    const items: FaqItem[] = [
      {
        q: `¿Cuándo reservar alojamiento para ${ev}${yr}?`,
        a: `Lo antes posible. Los hoteles y casas más cercanos suelen agotarse ${m}+ meses antes. Reservar con cancelación gratuita en cuanto salen las fechas es el movimiento estándar de los habituales.`,
      },
      {
        q: "¿Con cuánta antelación se llena Le Mans?",
        a: "La ciudad se llena unos 9 a 12 meses antes de la carrera de junio, y unos meses antes de los demás fines de semana. La región de alrededor sigue abierta mucho más tiempo.",
      },
      c.zoneName
        ? {
            q: `¿Cuánto dura el trayecto de ${c.zoneName} al circuito los días de carrera?`,
            a: `Unos ${c.driveMin} minutos en un día normal, más bien ${c.raceWeekMin} minutos con el tráfico de la semana de carrera. Saliendo antes de la hora punta de la mañana evitas la mayor parte.`,
          }
        : {
            q: "¿Se puede dormir a distancia a pie del circuito?",
            a: "Sí, pero la oferta es mínima: unos pocos hoteles, casas de particulares en Arnage, Mulsanne y Ruaudin, y parcelas que abren para el fin de semana. Reserva con meses de antelación o amplía al anillo de 30 minutos.",
          },
      {
        q: "¿Cuál es la zona más barata?",
        a: "Los precios bajan con cada anillo hacia fuera. Los pueblos a 30-60 minutos y ciudades como Tours, Angers, Laval y Alençon mantienen tarifas normales mucho después de que el anillo interior se haya triplicado.",
      },
      {
        q: "¿Mejor camping, hotel o casa de alquiler?",
        a: "El camping es lo más cercano a la acción y lo más barato; los hoteles son los más escasos y vuelan primero; alquilar una casa gana para grupos que quieren cocina, camas para todos y aparcamiento. Nuestro test te orienta.",
      },
      {
        q: "¿Puedo llegar al circuito sin coche?",
        a: "Sí. Desde el centro, el tranvía T1 llega a poca distancia a pie de las puertas, con servicio reforzado los días de carrera. Laval, Tours, Angers y Alençon tienen trenes a la estación de Le Mans, donde el tranvía toma el relevo.",
      },
      {
        q: "Parece todo agotado. ¿Y ahora?",
        a: "Amplía el radio anillo a anillo y caza cancelaciones: entre 30 y 7 días antes se libera una ola real de habitaciones cancelables. Nuestra guía del plan B tiene la estrategia completa.",
      },
      {
        q: "¿Conviene reservar con cancelación gratuita?",
        a: "Siempre que puedas. No cuesta nada, fija el precio de hoy y permite mejorar a algo más cercano si se libera. La mayoría de las reservas de semana de carrera se hacen así.",
      },
      {
        q: "¿Los precios son más altos durante el fin de semana de carreras?",
        a: "Sí, mucho en los anillos interiores, donde las habitaciones pueden duplicarse o triplicarse. Cuanto más lejos te alojes, más normales se mantienen los precios: por eso importa el tiempo de trayecto.",
      },
      {
        q: "¿Cómo funcionan los mapas y listados de esta web?",
        a: "El mapa y los alojamientos listados cargan precios en directo de nuestros socios de reserva. Reservar a través de ellos apoya esta web sin coste extra. Somos una guía independiente y no vendemos entradas.",
      },
      c.eventName
        ? {
            q: `¿Cuántos espectadores atrae ${c.eventName}?`,
            a: "Los fines de semana más grandes atraen multitudes enormes: por eso las camas cerca del circuito desaparecen tan pronto. Esas cifras son la razón de que reservar con antelación importe tanto.",
          }
        : {
            q: "¿El aparcamiento está incluido donde duermo?",
            a: "Depende de la zona. Los pueblos cerca de la pista y las ciudades más lejanas suelen ofrecer aparcamiento fácil o gratuito; el centro es más ajustado. Cada página de zona indica la situación del aparcamiento.",
          },
      {
        q: "¿Puedo reservar para el año siguiente justo después de la carrera?",
        a: "Sí, y es el mejor truco. Los propietarios publican las fechas del año siguiente en los días posteriores al evento, cuando todo sigue abierto. Reserva en esa ventana y el problema desaparece.",
      },
    ];
    return items;
  },
  accommodation: {
    heading: "Mejores alojamientos de la zona",
    sub: "Una selección de hoteles, campings y casas reales. Toca para ver precios y disponibilidad en directo para tus fechas.",
    seePrice: "Fechas y precio",
    seeAllArea: "Ver todos los alojamientos de la zona",
    disclaimer:
      "Una selección de establecimientos reales. Los precios y la disponibilidad en directo se abren en nuestro socio de reserva; las reservas apoyan esta web sin coste extra.",
    kind: { hotel: "Hotel", camping: "Camping", rental: "Casa" },
  },
  route: {
    heading: "Tu ruta al circuito",
    sub: "Las carreteras reales de acceso, la distancia y tiempos de trayecto honestos: días normales frente a semana de carrera.",
    start: "Tu base",
    finish: "Circuito",
    normalDrive: "Trayecto normal",
    raceWeekDrive: "Semana de carrera",
    totalDistance: "Distancia",
  },
  quiz: {
    heroKicker: "Buscador de alojamiento",
    title: "Encuentra tu alojamiento en Le Mans en 5 preguntas",
    metaDescription:
      "Responde cinco preguntas rápidas sobre tu fin de semana de carreras, distancia, tamaño del grupo, tipo de alojamiento y presupuesto. Obtén las zonas adecuadas, alojamientos reales y un mapa de disponibilidad en directo.",
    intro:
      "Dinos cómo vives la semana de carrera y te señalamos las zonas que encajan, los alojamientos más afines y un mapa en directo ajustado a tus fechas.",
    labels: {
      start: "Empezar",
      step: "Pregunta",
      of: "de",
      back: "Atrás",
      next: "Siguiente",
      seeResults: "Ver resultados",
      restart: "Empezar de nuevo",
      q: {
        event: "¿A qué fin de semana de carreras vienes?",
        distance: "¿Cómo de cerca del circuito quieres estar?",
        people: "¿Cuántos viajáis?",
        type: "¿Qué tipo de alojamiento quieres?",
        budget: "¿Cuál es tu presupuesto por noche?",
      },
      distanceOpts: {
        walk: "A pie",
        min30: "Menos de 30 minutos",
        min60: "Menos de una hora",
        any: "La mejor oferta",
      },
      peopleOpts: { couple: "1 a 2", small: "3 a 4", family: "5 a 7", group: "8 o más" },
      typeOpts: {
        hotel: "Un hotel",
        rental: "Una casa o apartamento",
        camping: "Camping",
        any: "Sin preferencia",
      },
      budgetOpts: { budget: "Económico", mid: "Medio", up: "Alto", any: "Flexible" },
      result: {
        title: "Este es tu plan de semana de carrera",
        zonesHeading: "Las mejores zonas para ti",
        hotelsHeading: "Alojamientos que encajan",
        mapHeading: "Disponibilidad en directo en el mapa",
        mapNote:
          "Preajustado a tus fechas de carrera. Reservar desde el mapa apoya esta guía independiente sin coste extra.",
        viewZone: "Ver zona",
        seePrice: "Ver precio",
        none: "Sin coincidencia exacta, amplía la distancia o el presupuesto.",
        kind: { hotel: "Hotel", camping: "Camping", rental: "Casa" },
      },
    },
  },
  travel: {
    heroKicker: "Cómo llegar",
    title: "Cómo llegar a Le Mans y al circuito",
    metaDescription:
      "Cómo llegar a Le Mans y al circuito para la semana de carrera: vuelos a aeropuertos cercanos, trenes TGV, rutas en coche, el truco del tranvía y consejos de aparcamiento.",
    intro: [
      "Le Mans está en el centro de una red rápida: una hora de TGV desde París, autopistas en todas direcciones y cinco aeropuertos a tiro. Cómo llegas determina dónde tiene sentido dormir.",
      "Abajo: vuelos y los aeropuertos más cercanos, luego trenes, coche y el truco local del tranvía que convierte el centro en una de las bases más inteligentes.",
    ],
    sections: [
      {
        heading: "En tren",
        paragraphs: [
          "La estación de Le Mans está en la línea TGV desde París (poco más de una hora) y tiene trenes regionales desde Tours, Angers, Laval y Alençon. Desde la estación, el tranvía T1 va hacia el circuito, así que un grupo puede dejar el coche en el alojamiento.",
        ],
      },
      {
        heading: "En coche y el truco del tranvía",
        paragraphs: [
          "El circuito está en el borde sur de la ciudad entre la D338 y las autopistas A11/A28. Los días de carrera los últimos kilómetros son la parte lenta, así que el horario gana a la ruta: aparcado antes de media mañana o llega después de la salida.",
          "Si duermes en el centro, olvida el coche. El tranvía T1 (dirección Antarès) te deja a pocos minutos a pie de las puertas, con servicio reforzado los días de carrera: por eso el centro es una de las bases más prácticas.",
        ],
      },
    ],
    flight: {
      heading: "Encontrar un vuelo",
      intro:
        "Los aeropuertos más cercanos a Le Mans, con la conexión más rápida al circuito. Compara tarifas abajo; nuestro widget de vuelos asociado aparecerá aquí una vez activo.",
      airportsHeading: "Aeropuertos más cercanos",
      searchKiwi: "Kiwi",
      searchSkyscanner: "Skyscanner",
      widgetPending:
        "El buscador de vuelos en directo aparecerá aquí. Mientras tanto, compara tarifas con los enlaces de aeropuertos de abajo.",
      disclaimer:
        "Los enlaces de vuelos se abren en nuestros socios de viaje. Las búsquedas pueden generarnos una comisión sin coste extra para ti.",
    },
  },
  eventZone: {
    heroKicker: "Fin de semana de carreras · zona",
    title: (event, zone, year) => `Dormir en ${zone} para ${event} ${year}`,
    metaDescription: (event, zone, min) =>
      `¿Es ${zone} una buena base para ${event}? Tiempos de trayecto reales (${min} min normalmente, más con tráfico de carrera), la ruta al circuito, los mejores alojamientos y disponibilidad en directo.`,
    intro: (event, zone, driveMin, raceWeekMin, ring) => [
      ring === 1
        ? `${zone} está pegado al circuito, así que para ${event} puedes olvidar el coche: a pie o en bici a las puertas y de vuelta tras los relevos nocturnos. Es el anillo más buscado, con la oferta más pequeña: reserva pronto.`
        : `${zone} está a unos ${driveMin} minutos del circuito en un día normal, alrededor de ${raceWeekMin} con el tráfico de la semana de ${event}. ${
            ring >= 4
              ? "La aliada de quien reserva tarde: una ciudad de verdad con precios normales cuando los anillos interiores se han agotado."
              : "Un equilibrio práctico entre distancia, disponibilidad y precio."
          }`,
      `Abajo encontrarás la ruta al circuito, una selección de alojamientos reales en ${zone} y alrededores, y un mapa en directo ajustado a las fechas de ${event} para reservar antes de que se llene.`,
    ],
    routeHeading: (zone) => `De ${zone} al circuito`,
    hotelsHeading: (zone) => `Mejores alojamientos en ${zone}`,
    mapHeading: (zone) => `Disponibilidad en directo en ${zone}`,
  },
  seo: {
    keyFactsTitle: "En breve",
    factBookAhead: "Reservar",
    factListedStays: "Alojamientos listados",
    factDistance: "Al circuito",
    factCrowd: "Afluencia",
    compareTitle: "Compara todas las zonas de un vistazo",
    compareSub:
      "Tiempos de trayecto reales al circuito, tráfico de semana de carrera, aparcamiento y transporte por base, para sopesar distancia y disponibilidad.",
    colZone: "Zona",
    colTransport: "Tren / tranvía",
    colStays: "Alojamientos",
    walk: "A pie",
    yes: "Sí",
    nearbyHeading: "Comparar zonas cercanas",
    popularSearches: "Búsquedas populares",
    zoneCircuitArea: "Alrededor del circuito",
    stays: "alojamientos",
    transport: { toCircuit: "Al circuito", car: "Coche", train: "Tren", tram: "Tranvía", walk: "A pie" },
    goodToKnow: "Conviene saber",
    aboutZone: (z) => `Dormir en ${z}`,
    aboutEvent: (e) => `${e} en breve`,
    trust: {
      livePrices: "Precios en directo de los socios",
      freeCancel: "Cancelación gratuita a menudo disponible",
      noFees: "Sin gastos de reserva por nuestra parte",
    },
  },
  circuitNet: {
    heading: "Nuestra red de circuitos",
    sub: "Mapeamos el alojamiento de la semana de carrera, circuito a circuito. Le Mans está en línea; el resto de la primera oleada llega pronto.",
    soon: "Próximamente",
    flagship: "En línea",
  },
  hub: {
    heroTitle: "Dónde dormir durante la semana de carrera, circuito a circuito",
    heroSub:
      "Los fines de semana de carrera agotan los pueblos alrededor de la pista con meses de antelación. Mapeamos hoteles, campings y casas por tiempo real de trayecto en los grandes circuitos del mundo, para que reserves la base adecuada antes de que se agote.",
    soonTitle: (c) => `Dónde dormir durante la semana de carrera en ${c}`,
    soonIntro: (c) =>
      `Estamos construyendo la guía completa de alojamiento de ${c}: hoteles, campings y casas ordenados por tiempo de trayecto al circuito. Llega pronto. Mientras tanto, el mapa en directo de abajo muestra la disponibilidad real alrededor de la pista.`,
    soonMap: (c) => `Disponibilidad en directo alrededor de ${c}`,
    exploreLeMans: "Ver nuestra guía de Le Mans en directo",
  },
  circuitGuide: {
    kicker: "Base para el fin de semana de carrera",
    intro: (circuit, event) =>
      `Dónde alojarse para el ${event} en ${circuit}: todos los hoteles, campings y alquileres cerca del circuito, del más cercano al más lejano, con precios en directo para el fin de semana de carrera. Revisamos cada ubicación a mano para que reserves la base correcta y no solo el primer resultado.`,
    factClosest: "Más cercano",
    factCrowd: "Asistencia",
    factWindow: "Cuándo",
    factBook: "Reserva pronto",
    staysHeading: (circuit) => `Dónde alojarse cerca de ${circuit}`,
    staysSub:
      "Hoteles, campings y alquileres verificados a mano, ordenados por distancia al circuito. Abre una tarjeta para ver disponibilidad y precios en directo para tus fechas.",
    zonesHeading: "Las mejores zonas",
    zonesSub: (circuit) =>
      `Las ciudades y pueblos alrededor de ${circuit}, desde campings en el recinto hasta hoteles cómodos a unos minutos en coche.`,
    atCircuit: "En el circuito",
    minLabel: (min) => `${min} min`,
    staysCount: (n) => (n === 1 ? "1 alojamiento" : `${n} alojamientos`),
    mapHeading: (circuit) => `Disponibilidad en directo alrededor de ${circuit}`,
    faq: (circuit, event, town, bookAhead) => [
      {
        q: `¿Cuándo conviene reservar alojamiento para el ${event}?`,
        a: `Cuanto antes. Los hoteles y campings más cercanos a ${circuit} suelen agotarse ${bookAhead} antes. Reservar con cancelación gratuita en cuanto se confirman las fechas es lo más seguro.`,
      },
      {
        q: `¿Dónde es mejor alojarse para el ${event}?`,
        a: `Los alojamientos más cercanos están en ${town} y en los pueblos pegados al circuito. Para más opciones y mejores precios, las ciudades de alrededor a unos 30 minutos son el punto justo. El mapa de arriba muestra la disponibilidad en directo en todas ellas.`,
      },
      {
        q: `¿Se puede acampar en ${circuit}?`,
        a: "Sí. Campings oficiales y privados abren para el fin de semana de carrera justo al lado del circuito. Son la opción más cercana y las primeras en llenarse, así que reserva pronto.",
      },
      {
        q: `¿Con cuánta antelación se agotan los alojamientos cerca de ${circuit}?`,
        a: `Las opciones en el recinto y a pie suelen irse ${bookAhead} antes del ${event}. El anillo más amplio de ciudades sigue disponible mucho más tiempo: amplía la búsqueda si los más cercanos están llenos.`,
      },
      {
        q: "¿Los precios de esta página son en directo?",
        a: "Sí. Cada alojamiento enlaza con disponibilidad y precios en directo para tus fechas, y el mapa se actualiza en tiempo real. Podemos recibir una comisión si reservas, sin coste adicional para ti.",
      },
    ],
  },
  circuitPages: {
    travelKicker: "Cómo llegar",
    travelTitle: (c) => `Cómo llegar a ${c}`,
    travelIntro: (c, e) =>
      `Cómo llegar a ${c} para el ${e}: los aeropuertos más cercanos, las estaciones de tren más prácticas y las principales vías de acceso, más un mapa en directo de los alojamientos una vez allí.`,
    byPlane: "En avión",
    byTrain: "En tren",
    byCar: "En coche",
    planeNote: (c) => `Aeropuertos más cercanos a ${c}, del más cercano.`,
    trainNote: "Estaciones más cercanas, luego taxi o lanzadera para el último tramo.",
    carNote: "Principales accesos — tráfico denso los días de carrera cerca de las entradas.",
    carBody: (c) =>
      `El coche es la forma más sencilla de llegar a ${c} y a los pueblos de alrededor. Sal temprano los días de carrera y reserva un alojamiento con parking o a unos minutos del circuito.`,
    minByCar: (m) => `${m} min en coche`,
    searchFlights: "Buscar vuelos",
    mapHere: (c) => `Dónde alojarse alrededor de ${c}`,
    guideKicker: "Guía del fin de semana de carrera",
    guideTitle: (c) => `Guía del fin de semana: ${c}`,
    guideIntro: (c, e) =>
      `Todo para planear una estancia para el ${e} en ${c}: cuándo reservar, las mejores zonas donde alojarse, el camping y cómo moverse los días de carrera.`,
    whenToBook: "Cuándo reservar",
    whereToBase: "Dónde alojarse",
    campingH: "Camping",
    gettingAround: "Cómo moverse",
    whenToBookBody: (e, b) =>
      `Los alojamientos más cercanos para el ${e} se agotan ${b} antes. Reserva con cancelación gratuita en cuanto se confirmen las fechas y ajusta al acercarse el fin de semana.`,
    whereToBaseBody: (c, t) =>
      `Las bases más prácticas están pegadas al circuito y en ${t}. Para más opciones y mejores precios, amplía a los pueblos a unos 30 minutos: se llenan más tarde y siguen bien conectados con el circuito.`,
    campingBody: (c) =>
      `Campings oficiales y privados abren alrededor de ${c} para el fin de semana de carrera. Son la opción más cercana y económica y las primeras en agotarse, así que reserva pronto y lleva todo lo necesario.`,
    gettingAroundBody: (c, r) =>
      `La mayoría de los aficionados va en coche: las vías principales son ${r} y el tráfico es máximo justo antes y después de las sesiones. Sal temprano, comparte coche cuando puedas y busca aparcamientos disuasorios o lanzaderas.`,
    zoneKicker: (c) => `Cerca de ${c}`,
    zoneTitle: (z, c) => `Dónde alojarse en ${z} para ${c}`,
    zoneIntro: (z, c, e, m) =>
      `${z} está ${m === 0 ? "junto al circuito" : `a unos ${m} minutos de ${c}`} — una base práctica para el ${e}. Estos son sus alojamientos con precios en directo, más un mapa de la disponibilidad para tus fechas.`,
    zoneStaysH: (z) => `Alojamientos en ${z}`,
    zoneMapH: (z) => `Disponibilidad en directo en ${z}`,
    otherZones: (c) => `Otras zonas cerca de ${c}`,
    filterKicker: "Alojamientos filtrados",
    filterTitle: {
      hotels: (c) => `Hoteles cerca de ${c}`,
      campsites: (c) => `Campings cerca de ${c}`,
      "walking-distance": (c) => `Alojamientos más cercanos a ${c}`,
      cheap: (c) => `Alojamientos baratos cerca de ${c}`,
    },
    filterIntro: {
      hotels: (c, e) =>
        `Hoteles cerca de ${c} para el ${e}, del más cercano, con precios en directo para el fin de semana de carrera. Desde simples paradas de carretera hasta bases cómodas a unos minutos de las entradas.`,
      campsites: (c, e) =>
        `Campings cerca de ${c} para el ${e}: la forma más cercana y económica de dormir junto a la pista. Se agotan primero, así que reserva pronto.`,
      "walking-distance": (c, e) =>
        `Los alojamientos más cercanos a ${c} para el ${e} — a pie o a unos minutos en coche. Poca disponibilidad que vuela, así que reserva en cuanto haya fechas.`,
      cheap: (c, e) =>
        `Los alojamientos con mejor relación calidad-precio cerca de ${c} para el ${e}. Hoteles económicos, pensiones y campings, del más cercano, con precios en directo.`,
    },
  },
};

export const EXTRA: Record<Locale, ExtraDict> = {
  en: enX,
  fr: frX,
  nl: nlX,
  de: deX,
  it: itX,
  es: esX,
};

export const x = (locale: Locale): ExtraDict => EXTRA[locale] ?? enX;
