import type { Place } from "@/lib/types";
import type { Dict } from "./en";

export const nl: Dict = {
  locale: "nl",
  siteName: "Le Mans Stays",
  tagline: "Overnachten tijdens de raceweekenden in Le Mans",

  nav: {
    events: "Raceweekenden",
    places: "Overnachten",
    guides: "Gidsen",
    listYourHome: "Verhuur uw woning",
  },

  common: {
    daysToGo: (d: number) => `Nog ${d} dagen`,
    datesTBC: "data onder voorbehoud",
    bookAhead: (m: number) =>
      `Accommodatie voor dit weekend is meestal ${m}+ maanden van tevoren uitverkocht. Hoe eerder u boekt, hoe dichterbij en goedkoper u slaapt.`,
    crowd: (c: string) => `${c} verwachte bezoekers`,
    minToCircuit: (min: number) => `${min} min naar het circuit`,
    walkToCircuit: "Circuit te voet bereikbaar",
    raceWeekTraffic: (min: number) => `${min} min tijdens de raceweek`,
    km: (km: number) => `${km} km van het circuit`,
    seeAvailability: "Bekijk beschikbaarheid",
    mapNote:
      "Prijzen en beschikbaarheid op de kaart worden live geladen bij onze boekingspartners. Boeken via de kaart steunt deze site, zonder extra kosten voor u.",
    faqHeading: "Veelgestelde vragen",
    ringNames: {
      1: "Te voet of per fiets naar het circuit",
      2: "Minder dan 30 minuten",
      3: "30 tot 60 minuten",
      4: "60 tot 90 minuten",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Makkelijk parkeren",
      medium: "Parkeren vraagt wat geduld",
      hard: "Parkeren is lastig, kom vroeg",
    },
    station: "Treinstation",
    tram: "Tram naar het circuit",
    nextEvents: "Volgende raceweekenden",
    exploreZones: "Overnachten, zone per zone",
    exploreTypes: "Kies uw stijl",
    guidesHeading: "Overlevingsgidsen",
    readGuide: "Lees de gids",
    viewZone: "Bekijk deze zone",
    viewEvent: "Plan uw verblijf",
    updated: "Bijgewerkt voor het seizoen 2027",
    backHome: "Home",
    languageName: "Nederlands",
  },

  eventNames: {
    lm24: { name: "24 uur van Le Mans", short: "Le Mans 24u" },
    motos: { name: "24 Heures Motos", short: "24u Motoren" },
    motogp: { name: "MotoGP van Frankrijk in Le Mans", short: "Le Mans MotoGP" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24 uur Trucks", short: "24u Trucks" },
  },

  home: {
    title: "Overnachten tijdens de raceweekenden in Le Mans | Hotels, camping, huizen",
    metaDescription:
      "Onafhankelijke accommodatiegids voor de raceweken in Le Mans: hotels, particuliere campings en vakantiehuizen rond het circuit, vergeleken op echte rijtijd. Boek vroeg, slaap dichtbij.",
    heroTitle: "Slaap vlak bij de actie",
    heroSub:
      "Elk groot raceweekend is Le Mans maanden van tevoren volgeboekt. Wij zetten hotels, vakantiehuizen en particuliere campings op de kaart, op echte rijtijd naar het circuit, zodat u de juiste uitvalsbasis boekt voordat die weg is.",
    ctaPrimary: "Vind een verblijf",
    ctaSecondary: "Bekijk de raceweekenden",
    zonesSub:
      "Van dorpen waar u naar het circuit loopt tot steden op een uur afstand met late beschikbaarheid: kies uw ring, check de echte rijtijden in de raceweek en boek wat past.",
    leadTitle: "Heeft u een woning bij Le Mans?",
    leadText:
      "Racefans zoeken huizen, kamers en kampeerplekken in april, mei, juni, juli en oktober. Bied uw woning aan en ontvang directe aanvragen.",
    leadCta: "Verhuur uw woning",
    seoTitle: "Het accommodatieprobleem, vroeg opgelost",
    seoText: [
      "Le Mans organiseert vijf grote raceweekenden per jaar, en de stad heeft lang niet genoeg bedden voor die drukte. Hotels zijn bijna een jaar van tevoren vol, prijzen verdrievoudigen en laatkomers moeten improviseren.",
      "Deze site doet één ding: laten zien waar u echt nog kunt slapen voor elk raceweekend, ring per ring rond het circuit, met eerlijke rijtijden voor het raceverkeer. Hotels, vakantiehuizen en particuliere campings, vergeleken op één kaart.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Overnachten tijdens de ${name} ${year}: hotels, camping en huizen`,
    metaDescription: (name: string, year: number) =>
      `Accommodatiegids voor de ${name} ${year}: hotels, particuliere campings en vakantiehuizen bij het circuit van Le Mans, vergeleken op echte rijtijd. Boek voordat alles vol is.`,
    heroKicker: "Raceweekend",
    bookingHeading: "Boek vóór de rest",
    mapHeading: (name: string) => `Live beschikbaarheid voor de ${name}`,
    mapSub:
      "De kaart staat vooraf ingesteld op de racedata. Zoom uit voor opties verder van het circuit: de prijzen dalen snel met de afstand.",
    zonesHeading: "Waar slaat u uw basiskamp op?",
    zonesSub: (name: string) =>
      `De juiste zone hangt af van wanneer u boekt. Voor de ${name} gaan de loopafstand-dorpen eerst, dan de stad, dan de plaatsen eromheen. Dit is het eerlijke beeld, ring per ring.`,
    typesHeading: "Hotel, huis of camping?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `Wanneer moet ik accommodatie boeken voor de ${name} ${year}?`,
        a: `Zo vroeg mogelijk. De dichtstbijzijnde hotels en huizen zijn meestal ${months}+ maanden voor de race weg. Boeken met gratis annulering zodra de data bekend zijn, is de standaardzet van de vaste bezoekers.`,
      },
      {
        q: `Kan ik op loopafstand van het circuit slapen?`,
        a: `Ja, maar het aanbod is klein: een handvol hotels, particuliere huizen in Arnage, Mulsanne en Ruaudin, en privé-kampeerplekken die opengaan voor de raceweek. Die gaan het eerst: boek maanden vooruit of kijk in de 30-minutenring.`,
      },
      {
        q: `Alles lijkt vol. Wat nu?`,
        a: `Vergroot de straal. Plaatsen op 30 tot 60 minuten (La Flèche, Alençon) en steden als Tours, Angers of Laval houden veel langer beschikbaarheid, tegen normale prijzen. Lees onze plan B-gids voor de volledige strategie.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Overnachten in ${name} voor de races in Le Mans: hotels en huizen`,
    metaDescription: (name: string, min: number) =>
      `Is ${name} een goede uitvalsbasis voor de raceweek in Le Mans? Echte rijtijden (${min} min normaal, meer in raceverkeer), parkeren, vervoer en live beschikbaarheid.`,
    heroKicker: "Zonegids",
    statsHeading: "De cijfers die ertoe doen",
    statDistance: "Afstand tot het circuit",
    statNormal: "Normale rijtijd",
    statRaceWeek: "Rijtijd raceweek",
    statWalk: "Te voet",
    mapHeading: (name: string) => `Slapen in ${name}`,
    eventsHeading: "Geschikt voor elk raceweekend",
    eventsSub:
      "Dezelfde basis, vijf raceweekenden per jaar. De druk verschilt: juni is extreem, april en oktober zijn milder.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} ligt pal tegen het circuit, op ${p.km} km van de hoofdingangen. Wie hier slaapt, kan de auto vergeten: te voet of per fiets naar binnen, na de nachtelijke stints terug, en nooit in de rij voor een parkeerplek. Dit is de meest gewilde ring rond de baan, met het kleinste aanbod: vooral particuliere huizen, kamers en een paar kampeerplekken voor de raceweek.`,
      2: (p: Place) =>
        `${p.name} zit in de gulden middenweg: ongeveer ${p.driveMin} minuten van het circuit op een normale dag, rond de ${p.raceWeekMin} in de raceweek. U vindt er echte hotels, supermarkten en restaurants, met een reële kans op beschikbaarheid als u enkele maanden vooruit boekt in plaats van een jaar.`,
      3: (p: Place) =>
        `${p.name} is het slimme compromis zodra de binnenste ringen vol zijn: ${p.driveMin} minuten naar het circuit, ongeveer ${p.raceWeekMin} in raceverkeer. De prijzen blijven hier ook in de raceweek bijna normaal, en wie vroeg vertrekt, is vóór de ochtend-warm-up op het circuit.`,
      4: (p: Place) =>
        `${p.name} is de vriend van de late boeker: een echte stad op zo'n ${p.driveMin} minuten van het circuit (reken op ${p.raceWeekMin} in de raceweek). Wanneer alles rond Le Mans weg of absurd geprijsd is, houdt ${p.name} normale hotels tegen normale tarieven, met restaurants en leven eromheen.`,
    },
    parkingNote: {
      easy: "Parkeren is hier eenvoudig, ook met aanhanger of camper.",
      medium:
        "Parkeren lukt, maar loopt vol in de raceweek. Kom vóór de avondspits op racedagen.",
      hard: "Parkeren is het zwakke punt. Slaapt u hier, kom dan vroeg of zonder auto.",
    },
    stationNote:
      "Er is een treinstation: u bereikt Le Mans en de circuitshuttles zonder te rijden.",
    tramNote:
      "De tram van Le Mans (richting Antarès) zet u op een paar minuten lopen van de circuitingangen af: een enorm voordeel op racedagen.",
  },

  typePage: {
    mapHeading: "Live beschikbaarheid",
    zonesHeading: "De beste zones hiervoor",
    camping: {
      title: "Camping voor de races in Le Mans: particuliere terreinen en plekken",
      metaDescription:
        "Particuliere campingopties voor de raceweek in Le Mans: onafhankelijke campings en raceweek-plekken rond het circuit, en hoe u er vroeg een vastlegt.",
      heroTitle: "Kamperen naast de baan",
      intro: [
        "Kamperen is de ziel van de raceweek in Le Mans. Rond het circuit openen particuliere campings en lokale grondeigenaren plekken voor de grote weekenden, van een simpel grasveld tot een plek met stroom en douches.",
        "Onafhankelijke plekken dicht bij de baan zijn beperkt en gaan naar wie het eerst vraagt. Ziet u er een op de kaart of in een advertentie, pak hem. Anders combineren de campings in de 30-minutenring ruimte met makkelijker rijden.",
      ],
      pitch:
        "Heeft u grond of kampeerplekken bij het circuit? Racefans zoeken precies dat.",
    },
    hotels: {
      title: "Hotels voor de races in Le Mans: waar vindt u nog kamers",
      metaDescription:
        "Hotels voor de raceweek in Le Mans: wat het eerst vol is, realistische alternatieven op rijtijd, en live kamerbeschikbaarheid rond het circuit.",
      heroTitle: "Een echt bed en een douche",
      intro: [
        "De hotelkamer is het schaarste goed van de raceweek. Le Mans heeft een bescheiden hotelaanbod voor een stad die 300 000 bezoekers ontvangt: kamers bij het circuit worden bijna een jaar vooruit gereserveerd.",
        "Het goede nieuws: prijzen en beschikbaarheid verbeteren flink met elke ring naar buiten. Tours, Angers, Laval en Alençon houden kamers tegen gezonde tarieven lang nadat Le Mans vol is, en de rit is prima als u het ochtendverkeer voor blijft.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Vakantiehuizen voor de races in Le Mans: huizen en kamers",
      metaDescription:
        "Vakantiehuizen voor de raceweek in Le Mans: complete huizen, gîtes en privékamers rond het circuit, de favoriete formule van groepen.",
      heroTitle: "Huur het huis van een local",
      intro: [
        "Een huis huren is dé klassieke zet voor groepen in Le Mans: rondom het circuit verhuren bewoners huizen, gîtes en kamers voor de raceweek. U krijgt een keuken, bedden voor het hele team en parkeerruimte, vaak dichter bij de baan dan welk hotel ook.",
        "De beste huizen worden jaar na jaar door dezelfde groepen geboekt: nieuwe advertenties en vroege aanvragen maken het verschil. Bekijk de kaart, en ziet u iets in de eerste twee ringen, wacht dan niet.",
      ],
      pitch:
        "Heeft u een huis in de buurt? Raceweek-huurders zijn de makkelijkste van het jaar.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} voor de ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} voor de ${eventName}: live beschikbaarheid rond het circuit van Le Mans, eerlijke rijtijden en de boekingsstrategie van vaste bezoekers.`,
    intro: {
      "lm24-camping": [
        "Kamperen en de 24 uur horen bij elkaar: een groot deel van het publiek beleeft de week zo, en plekken bij de baan zijn maanden van tevoren vergeven.",
        "Particuliere velden en onafhankelijke terreinen aan de zuidkant van het circuit (Arnage, Mulsanne, Ruaudin) zijn de topplekken. Boek zodra de reis vaststaat, en houd een plan B in de 30-minutenring achter de hand.",
      ],
      "lm24-hotels": [
        "Een hotelkamer voor de 24 uur is de moeilijkste boeking van het Franse autosportjaar. Alles in Le Mans zelf is ongeveer een jaar van tevoren weg, tegen stevige prijzen.",
        "De aanpak: leg op de dag dat u beslist een annuleerbare kamer verder weg vast, en upgrade als er dichterbij iets vrijkomt. Tours, Angers en Laval houden het langst realistische tarieven.",
      ],
      "motogp-camping": [
        "Het MotoGP-weekend trekt een van de grootste menigten van het seizoen, en een groot deel komt op de motor en kampeert. Plekken bij het circuit gaan snel, al is de druk een tikje lager dan bij de 24 uur.",
        "Kijk naar de eerste twee ringen op de kaart: dorpsplekken en kleine terreinen binnen 20 minuten zijn haalbaar als u enkele maanden vooruit boekt, en de rit op de motor verslaat elke autofile.",
      ],
      "motogp-hotels": [
        "Hotels voor het MotoGP-weekend lopen snel vol in Le Mans zelf, maar het is vriendelijker dan in juni: wie 6 tot 8 maanden vooruit boekt, slaapt nog binnen 30 minuten van de baan.",
        "Tip voor motorrijders: kies een hotel met privéparkeren voor de motoren. De plaatsen in de tweede en derde ring staan er vol mee, tegen tarieven die het centrum allang niet meer biedt.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Gidsen",
  },

  lead: {
    title: "Verhuur uw woning tijdens de races in Le Mans",
    metaDescription:
      "Verhuur uw huis, kamers of grond aan racefans tijdens de raceweekenden in Le Mans. Gratis aanmelding, direct contact met geverifieerde vraag.",
    heroTitle: "Uw woning is veel waard in de raceweek",
    heroSub:
      "Vijf keer per jaar zoeken honderdduizenden fans een bed bij het circuit. Huizen, kamers, gîtes en kampeerplekken rond Le Mans zijn in dagen verhuurd. Vertel ons wat u heeft, wij zetten het voor de juiste bezoekers.",
    benefits: [
      {
        t: "De vraag is er al",
        d: "Bezoekers uit het VK, Nederland, Duitsland en heel Frankrijk zoeken tot een jaar van tevoren.",
      },
      {
        t: "U houdt de regie",
        d: "U bepaalt uw data, uw prijs en uw regels. Wij sturen u de aanvragen, u kiest wie er boekt.",
      },
      {
        t: "Gratis aanmelden",
        d: "Een woning aanmelden kost niets. Wij controleren wat online gaat, zodat gasten vertrouwen wat ze zien.",
      },
    ],
    form: {
      name: "Uw naam",
      email: "E-mail",
      phone: "Telefoon (optioneel)",
      town: "Plaats",
      propertyType: "Wat biedt u aan?",
      types: {
        house: "Volledig huis",
        rooms: "Kamer(s)",
        pitch: "Kampeerplek / grond",
        other: "Anders",
      },
      capacity: "Voor hoeveel gasten?",
      events: "Welke raceweekenden? (meerdere keuzes mogelijk)",
      message: "Wat moeten we weten? (afstand tot het circuit, parkeren, ...)",
      gdpr: "Ik ga akkoord met contact over mijn aanvraag. Geen spam, geen doorverkoop van mijn gegevens.",
      submit: "Aanvraag versturen",
      sending: "Versturen...",
      success: "Aanvraag ontvangen. We komen binnen 48 uur bij u terug met de volgende stappen.",
      error: "Er ging iets mis. Probeer opnieuw of mail ons direct.",
    },
  },

  about: {
    title: "Over deze site",
    paragraphs: [
      "Le Mans Stays is een onafhankelijke accommodatiegids voor de grote raceweekenden in Le Mans. Wij zetten hotels, vakantiehuizen en particuliere campings rond het circuit op de kaart en vergelijken ze zoals bezoekers echt kiezen: op echte rijtijd op racedagen.",
      "Wij verdienen een commissie wanneer u via de kaarten op deze site boekt, zonder extra kosten voor u. Dat is het hele model: geen banners, geen gesponsorde rangschikkingen.",
      "Wij zijn niet verbonden aan of goedgekeurd door de Automobile Club de l'Ouest (ACO), Dorna Sports of de organisatoren van de genoemde evenementen. Namen van evenementen worden uitsluitend beschrijvend gebruikt. Wij verkopen geen tickets.",
    ],
  },

  contact: {
    title: "Contact",
    paragraphs: [
      "Een vraag, een correctie, een partneridee of een woning om aan te melden? Schrijf ons, we antwoorden snel.",
      "E-mail: hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Juridische informatie",
    paragraphs: [
      "Deze website is een onafhankelijke publicatie. De uitgeversgegevens worden vóór de publieke lancering aangevuld.",
      "Alle namen van evenementen, merken en handelsnamen op deze site behoren toe aan hun respectieve eigenaren en worden uitsluitend beschrijvend gebruikt. Deze site is niet verbonden aan de Automobile Club de l'Ouest (ACO) of Dorna Sports. Deze site verkoopt geen tickets.",
      "Boekingen via de kaarten op deze site worden verwerkt door onze boekingspartners onder hun eigen voorwaarden.",
    ],
  },

  privacy: {
    title: "Privacy",
    paragraphs: [
      "Wij verzamelen de gegevens uit het aanmeldformulier alleen om uw aanvraag te verwerken en verkopen ze nooit door.",
      "Onze boekingspartners kunnen cookies gebruiken om boekingen via de kaarten te registreren: zo wordt deze site gefinancierd. Er worden geen persoonsgegevens aan derden verkocht.",
      "Om uw rechten uit te oefenen, neem contact op via het adres op de contactpagina.",
    ],
  },

  footer: {
    events: "Raceweekenden",
    zones: "Zones",
    types: "Soorten verblijf",
    guides: "Gidsen",
    site: "Site",
    disclaimer:
      "Le Mans Stays is een onafhankelijke accommodatiegids. Wij zijn niet verbonden aan of goedgekeurd door de Automobile Club de l'Ouest (ACO), Dorna Sports of de organisatoren van de genoemde evenementen. Namen van evenementen worden uitsluitend beschrijvend gebruikt. Wij verkopen geen tickets.",
    affiliate:
      "Boekingen via deze site kunnen ons een commissie opleveren, zonder extra kosten voor u.",
  },
};
