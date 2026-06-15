import type { Place } from "@/lib/types";

export const en = {
  locale: "en",
  siteName: "RaceWeekStays",
  tagline: "Where to stay for race week at Le Mans",

  nav: {
    events: "Race weekends",
    places: "Where to stay",
    guides: "Guides",
    listYourHome: "List your home",
  },

  common: {
    daysToGo: (d: number) => `${d} days to go`,
    datesTBC: "dates to be confirmed",
    bookAhead: (m: number) =>
      `Accommodation for this weekend typically sells out ${m}+ months ahead. The earlier you book, the closer and cheaper you stay.`,
    crowd: (c: string) => `${c} spectators expected`,
    minToCircuit: (min: number) => `${min} min to the circuit`,
    walkToCircuit: "Walk to the circuit",
    raceWeekTraffic: (min: number) => `${min} min during race week`,
    km: (km: number) => `${km} km from the track`,
    seeAvailability: "See live availability",
    mapNote:
      "Map prices and availability are loaded live from our booking partners. Booking through the map supports this site at no extra cost to you.",
    faqHeading: "Frequently asked questions",
    ringNames: {
      1: "Walk or cycle to the track",
      2: "Under 30 minutes away",
      3: "30 to 60 minutes away",
      4: "60 to 90 minutes away",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Easy parking",
      medium: "Parking takes patience",
      hard: "Parking is tight, arrive early",
    },
    station: "Train station",
    tram: "Tram to the circuit",
    nextEvents: "Next race weekends",
    exploreZones: "Where to stay, zone by zone",
    exploreTypes: "Pick your style",
    guidesHeading: "Survival guides",
    readGuide: "Read the guide",
    viewZone: "View this zone",
    viewEvent: "Plan your stay",
    updated: "Updated for the 2027 season",
    backHome: "Home",
    languageName: "English",
  },

  eventNames: {
    lm24: { name: "24 Hours of Le Mans", short: "Le Mans 24h" },
    motos: { name: "24 Heures Motos", short: "24h Motos" },
    motogp: { name: "French MotoGP at Le Mans", short: "Le Mans MotoGP" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24 Hours Trucks", short: "24h Trucks" },
  },

  home: {
    title: "Where to stay for Le Mans race weekends | Hotels, camping and rentals",
    metaDescription:
      "Independent accommodation guide for race week at Le Mans: hotels, private camping and holiday rentals around the circuit, compared by real drive time. Book early, stay close.",
    heroTitle: "Sleep close to the action",
    heroSub:
      "Every race weekend at Le Mans, the city books out months ahead. We map hotels, holiday rentals and private camping by real drive time to the circuit, so you book the right base before it is gone.",
    ctaPrimary: "Find a place to stay",
    ctaSecondary: "Browse race weekends",
    zonesSub:
      "From villages where you can walk to the track to cities an hour away with late availability: pick your ring, check real race week drive times, book what fits.",
    leadTitle: "Own a home near Le Mans?",
    leadText:
      "Race fans are looking for houses, rooms and pitches every April, May, June, July and October. List your property and get direct requests.",
    leadCta: "List your home",
    seoTitle: "The accommodation problem, solved early",
    seoText: [
      "Le Mans hosts five major race weekends a year, and the city has nowhere near enough beds for the crowds they draw. Hotels in town fill up the best part of a year in advance, prices triple, and latecomers end up improvising.",
      "This site does one thing: it shows you where you can actually stay for each race weekend, ring by ring around the circuit, with honest drive times for race week traffic. Hotels, holiday rentals and private camping, compared on one map.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Where to stay for the ${name} ${year}: hotels, camping and rentals`,
    metaDescription: (name: string, year: number) =>
      `Accommodation guide for the ${name} ${year}: hotels, private camping and holiday rentals near the Le Mans circuit, compared by real drive time. Book before it sells out.`,
    heroKicker: "Race weekend",
    bookingHeading: "Book before everyone else",
    mapHeading: (name: string) => `Live availability for the ${name}`,
    mapSub:
      "The map is pre-set to the race dates. Zoom out to see options further from the track, prices drop fast with distance.",
    zonesHeading: "Where to base yourself",
    zonesSub: (name: string) =>
      `The right zone depends on when you book. For the ${name}, walkable villages go first, then the city, then the towns around. Here is the honest picture, ring by ring.`,
    typesHeading: "Hotels, rentals or camping?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `When should I book accommodation for the ${name} ${year}?`,
        a: `As early as you can. The closest hotels and rentals are usually gone ${months}+ months before the race. Booking with free cancellation as soon as dates are announced is the standard move for regulars.`,
      },
      {
        q: `Can I stay within walking distance of the circuit?`,
        a: `Yes, but inventory is small: a handful of hotels, private rentals in Arnage, Mulsanne and Ruaudin, and private pitches that open for race week. These go first, so book months ahead or widen to the 30-minute ring.`,
      },
      {
        q: `Everything looks full. What now?`,
        a: `Widen the radius. Towns 30 to 60 minutes out (La Flèche, Alençon) and cities like Tours, Angers or Laval keep availability much later, at normal prices. Check our plan B guide for the full strategy.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Staying in ${name} for Le Mans race weekends: hotels and rentals`,
    metaDescription: (name: string, min: number) =>
      `Is ${name} a good base for race week at Le Mans? Real drive times (${min} min normally, more in race traffic), parking, transport and live accommodation availability.`,
    heroKicker: "Zone guide",
    statsHeading: "The numbers that matter",
    statDistance: "Distance to circuit",
    statNormal: "Normal drive",
    statRaceWeek: "Race week drive",
    statWalk: "On foot",
    mapHeading: (name: string) => `Stay in ${name}`,
    eventsHeading: "Works for every race weekend",
    eventsSub:
      "Same base, five race weekends a year. Availability pressure differs: June is extreme, April and October are kinder.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} sits right against the circuit, ${p.km} km from the main entrances. Stay here and you can forget the car entirely: walk or cycle in, walk back after the night stints, and never queue for a parking spot. This is the most wanted ring around the track, with the smallest inventory, mostly private rentals, rooms and a few pitches that open for race week.`,
      2: (p: Place) =>
        `${p.name} is in the sweet spot: about ${p.driveMin} minutes from the circuit on a normal day, around ${p.raceWeekMin} during race week. You get real hotels, supermarkets and restaurants, plus a realistic shot at availability if you book a few months out rather than a year.`,
      3: (p: Place) =>
        `${p.name} is the smart compromise once the inner rings fill up: ${p.driveMin} minutes to the track normally, about ${p.raceWeekMin} in race traffic. Prices stay close to normal here even on race week, and you will still be at the circuit before the morning warm-up if you leave early.`,
      4: (p: Place) =>
        `${p.name} is the late booker's friend: a real city about ${p.driveMin} minutes from the circuit (count ${p.raceWeekMin} in race week traffic). When everything near Le Mans is gone or priced absurdly, ${p.name} keeps normal hotels at normal rates, with restaurants and life around them.`,
    },
    parkingNote: {
      easy: "Parking is straightforward here, including with a trailer or a van.",
      medium:
        "Parking is doable but fills during race week. Arrive before the evening rush on race days.",
      hard: "Parking is the weak point. If you stay here, arrive early or come without a car.",
    },
    stationNote:
      "There is a train station, so you can reach Le Mans and the circuit shuttle services without driving.",
    tramNote:
      "The Le Mans tram (Antarès direction) drops you a short walk from the circuit entrances, a huge advantage on race days.",
  },

  typePage: {
    mapHeading: "Live availability",
    zonesHeading: "Best zones for this",
    camping: {
      title: "Camping for Le Mans race weekends: private sites and pitches",
      metaDescription:
        "Private camping options for race week at Le Mans: independent campsites and race week pitches around the circuit, plus how to lock one early.",
      heroTitle: "Camp by the track",
      intro: [
        "Camping is the soul of race week at Le Mans. Around the circuit, private campsites and local landowners open pitches for the big weekends, from simple grass fields to serviced plots with power and showers.",
        "Independent pitches close to the track are limited and go to whoever asks first. If you find one on the map or through a listing, take it. Otherwise, the campsites in the 30-minute ring combine space with easier driving.",
      ],
      pitch:
        "Have land or pitches near the circuit? Race fans are looking for exactly that.",
    },
    hotels: {
      title: "Hotels for Le Mans race weekends: where to find rooms",
      metaDescription:
        "Hotels for race week at Le Mans: what books out first, realistic alternatives by drive time, and live room availability around the circuit.",
      heroTitle: "A real bed and a shower",
      intro: [
        "Hotel rooms are the scarcest resource of race week. Le Mans itself has a modest hotel stock for a city that hosts 300 000 visitors, so rooms near the circuit are reserved the best part of a year ahead.",
        "The good news: hotel prices and availability improve dramatically with every ring you move outwards. Tours, Angers, Laval and Alençon keep rooms at sane rates long after Le Mans is full, and the drive is fine if you beat the morning traffic.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Holiday rentals for Le Mans race weekends: houses and rooms",
      metaDescription:
        "Holiday rentals for race week at Le Mans: entire houses, gîtes and private rooms around the circuit, the locals' favourite way to host race fans.",
      heroTitle: "Rent a local's house",
      intro: [
        "Renting a house is the classic Le Mans move for groups: locals all around the circuit rent out homes, gîtes and spare rooms for race week. You get a kitchen, beds for the whole crew and parking, often closer to the track than any hotel.",
        "The best houses are rebooked year after year by the same groups, so new listings and early requests are everything. Check the map, and if you see something close in the first two rings, do not sleep on it.",
      ],
      pitch: "Own a house nearby? Race week tenants are the easiest of the year.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} for the ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} for the ${eventName}: live availability around the Le Mans circuit, honest drive times and booking strategy from race week regulars.`,
    intro: {
      "lm24-camping": [
        "Camping and the 24 Hours go together: it is how a large share of the crowd lives the week, and pitches anywhere near the track are claimed months ahead.",
        "Private fields and independent sites around the southern side of the circuit (Arnage, Mulsanne, Ruaudin) are the prime spots. Book the moment you commit to the trip, and have a 30-minute-ring fallback ready.",
      ],
      "lm24-hotels": [
        "Hotel rooms for the 24 Hours are the single hardest booking of the French motorsport year. Anything in Le Mans goes roughly a year out, at strong prices.",
        "The play: book a free-cancellation room far out the day you decide to come, then upgrade closer if something opens. Tours, Angers and Laval keep realistic rates the longest.",
      ],
      "motogp-camping": [
        "The French MotoGP weekend draws one of the biggest crowds of the season, and a huge share of it rides in and camps. Pitches near the circuit go fast, though the pressure is a notch below the 24 Hours.",
        "Look at the first two rings on the map: village pitches and small sites within 20 minutes are realistic if you book a few months out, and the ride in beats sitting in car traffic.",
      ],
      "motogp-hotels": [
        "Hotels for the MotoGP weekend fill quickly in Le Mans itself, but the situation is friendlier than in June: book around 6 to 8 months ahead and you can still sleep within 30 minutes of the track.",
        "Riders' tip: pick a hotel with private parking for the bikes. The towns of the second and third ring are full of them, at rates the city centre stopped offering months earlier.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Guides",
  },

  lead: {
    title: "List your home for Le Mans race weekends",
    metaDescription:
      "Rent your house, rooms or land to race fans during Le Mans race weekends. Free listing request, direct contact with verified demand.",
    heroTitle: "Your home is worth a lot on race week",
    heroSub:
      "Five times a year, hundreds of thousands of fans need a bed near the circuit. Houses, rooms, gîtes and pitches around Le Mans rent out in days. Tell us what you have, we put it in front of the right visitors.",
    benefits: [
      {
        t: "Demand is already there",
        d: "Visitors from the UK, the Netherlands, Germany and all of France look for race week stays up to a year ahead.",
      },
      {
        t: "You stay in control",
        d: "You set your dates, your price and your rules. We send you the requests, you choose who books.",
      },
      {
        t: "Free to list",
        d: "Listing a property costs nothing. We curate what goes live so guests trust what they see.",
      },
    ],
    form: {
      name: "Your name",
      email: "Email",
      phone: "Phone (optional)",
      town: "Town / village",
      propertyType: "What are you offering?",
      types: {
        house: "Entire house",
        rooms: "Private room(s)",
        pitch: "Camping pitch / land",
        other: "Other",
      },
      capacity: "How many guests?",
      events: "Which race weekends? (select all that apply)",
      message: "Anything we should know? (distance to track, parking, ...)",
      gdpr: "I agree to be contacted about my listing request. No spam, no resale of my details.",
      submit: "Send my listing request",
      sending: "Sending...",
      success:
        "Request received. We will come back to you within 48 hours with the next steps.",
      error: "Something went wrong. Please try again or email us directly.",
    },
  },

  about: {
    title: "About this site",
    paragraphs: [
      "RaceWeekStays is an independent accommodation guide for the big race weekends at Le Mans. We map hotels, holiday rentals and private camping around the circuit and compare them the way visitors actually choose: by real drive time on race days.",
      "We earn a commission when you book through the maps on this site, at no extra cost to you. That is the whole business model: no banner ads, no sponsored rankings.",
      "We are not affiliated with, endorsed by or connected to the Automobile Club de l'Ouest (ACO), Dorna Sports, or the organisers of any event mentioned on this site. Event names are used for descriptive purposes only, to tell you when accommodation demand peaks. We do not sell tickets.",
    ],
  },

  contact: {
    title: "Contact",
    paragraphs: [
      "A question, a correction, a partnership idea, or a property to list? Write to us and we will answer quickly.",
      "Email: hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Legal notice",
    paragraphs: [
      "This website is an independent publication, published by the RaceWeekStays team. Contact: hello@lemansstays.com. Full publisher company details are available on request.",
      "Hosting: this site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
      "Affiliate disclosure: this site contains affiliate links. We may earn a commission when you book through our partners (including Stay22 and Booking.com), at no extra cost to you. This is how the site is funded; it does not influence the information we publish.",
      "All event names, trademarks and brands quoted on this site belong to their respective owners and are used for descriptive purposes only, to indicate when accommodation demand peaks. This site is independent and is not affiliated with, endorsed by or sponsored by the Automobile Club de l'Ouest (ACO), Dorna Sports or any event organiser. This site does not sell tickets.",
      "Accommodation bookings made through the maps and links on this site are processed by our booking partners under their own terms and conditions. We are not the seller and are not party to your booking contract.",
    ],
  },

  privacy: {
    title: "Privacy",
    paragraphs: [
      "We collect the information you submit through the listing form only to process your request, and we never resell it.",
      "Our booking partners may use cookies to track bookings made through the maps, which is how this site is funded. No personal data is sold to third parties.",
      "To exercise your data rights, contact us at the address on the contact page.",
    ],
  },

  footer: {
    events: "Race weekends",
    zones: "Zones",
    types: "Stay types",
    guides: "Guides",
    site: "Site",
    disclaimer:
      "RaceWeekStays is an independent accommodation guide. We are not affiliated with or endorsed by the Automobile Club de l'Ouest (ACO), Dorna Sports, or the organisers of the events mentioned. Event names are used for descriptive purposes only. We do not sell tickets.",
    affiliate:
      "Bookings made through this site may earn us a commission, at no extra cost to you.",
    rights: "All rights reserved.",
    trademarks:
      "All event names and trademarks belong to their respective owners.",
  },
};

export type Dict = typeof en;
