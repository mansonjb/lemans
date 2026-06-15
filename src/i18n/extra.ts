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
}

/* ----------------------------- ENGLISH ----------------------------- */
const enX: ExtraDict = {
  ctaFindStay: "Find your stay",
  navTravel: "Getting there",
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
};

/* ----------------------------- FRENCH ----------------------------- */
const frX: ExtraDict = {
  ctaFindStay: "Trouver mon hébergement",
  navTravel: "Comment venir",
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
};

/* ----------------------------- DUTCH ----------------------------- */
const nlX: ExtraDict = {
  ctaFindStay: "Vind jouw verblijf",
  navTravel: "Route ernaartoe",
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
};

/* ----------------------------- GERMAN ----------------------------- */
const deX: ExtraDict = {
  ctaFindStay: "Unterkunft finden",
  navTravel: "Anreise",
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
};

/* ----------------------------- ITALIAN ----------------------------- */
const itX: ExtraDict = {
  ctaFindStay: "Trova il tuo alloggio",
  navTravel: "Come arrivare",
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
};

/* ----------------------------- SPANISH ----------------------------- */
const esX: ExtraDict = {
  ctaFindStay: "Encuentra tu alojamiento",
  navTravel: "Cómo llegar",
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
