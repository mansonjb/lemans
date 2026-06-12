import type { Place } from "@/lib/types";
import type { Dict } from "./en";

export const de: Dict = {
  locale: "de",
  siteName: "Le Mans Stays",
  tagline: "Übernachten an den Rennwochenenden in Le Mans",

  nav: {
    events: "Rennwochenenden",
    places: "Unterkünfte",
    guides: "Guides",
    listYourHome: "Unterkunft vermieten",
  },

  common: {
    daysToGo: (d: number) => `Noch ${d} Tage`,
    datesTBC: "Termine unter Vorbehalt",
    bookAhead: (m: number) =>
      `Unterkünfte für dieses Wochenende sind in der Regel ${m}+ Monate im Voraus ausgebucht. Je früher Sie buchen, desto näher und günstiger schlafen Sie.`,
    crowd: (c: string) => `${c} erwartete Besucher`,
    minToCircuit: (min: number) => `${min} Min. zur Strecke`,
    walkToCircuit: "Strecke zu Fuß erreichbar",
    raceWeekTraffic: (min: number) => `${min} Min. in der Rennwoche`,
    km: (km: number) => `${km} km von der Strecke`,
    seeAvailability: "Verfügbarkeit ansehen",
    mapNote:
      "Preise und Verfügbarkeiten auf der Karte werden live von unseren Buchungspartnern geladen. Eine Buchung über die Karte unterstützt diese Seite, ohne Mehrkosten für Sie.",
    faqHeading: "Häufige Fragen",
    ringNames: {
      1: "Zu Fuß oder mit dem Rad zur Strecke",
      2: "Unter 30 Minuten entfernt",
      3: "30 bis 60 Minuten entfernt",
      4: "60 bis 90 Minuten entfernt",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Einfaches Parken",
      medium: "Parken braucht etwas Geduld",
      hard: "Parken ist schwierig, früh anreisen",
    },
    station: "Bahnhof",
    tram: "Straßenbahn zur Strecke",
    nextEvents: "Nächste Rennwochenenden",
    exploreZones: "Unterkünfte, Zone für Zone",
    exploreTypes: "Wählen Sie Ihren Stil",
    guidesHeading: "Survival-Guides",
    readGuide: "Guide lesen",
    viewZone: "Zone ansehen",
    viewEvent: "Aufenthalt planen",
    updated: "Aktualisiert für die Saison 2027",
    backHome: "Start",
    languageName: "Deutsch",
  },

  eventNames: {
    lm24: { name: "24 Stunden von Le Mans", short: "Le Mans 24h" },
    motos: { name: "24 Heures Motos", short: "24h Motos" },
    motogp: { name: "MotoGP von Frankreich in Le Mans", short: "Le Mans MotoGP" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24-Stunden-Rennen der Trucks", short: "24h Trucks" },
  },

  home: {
    title: "Übernachten bei den Rennwochenenden in Le Mans | Hotels, Camping, Ferienhäuser",
    metaDescription:
      "Unabhängiger Unterkunftsführer für die Rennwochen in Le Mans: Hotels, private Campingplätze und Ferienhäuser rund um die Strecke, verglichen nach echter Fahrzeit. Früh buchen, nah schlafen.",
    heroTitle: "Schlafen Sie nah am Geschehen",
    heroSub:
      "An jedem großen Rennwochenende ist Le Mans Monate im Voraus ausgebucht. Wir kartieren Hotels, Ferienhäuser und private Campingplätze nach echter Fahrzeit zur Strecke, damit Sie das richtige Basislager buchen, bevor es weg ist.",
    ctaPrimary: "Unterkunft finden",
    ctaSecondary: "Rennwochenenden ansehen",
    zonesSub:
      "Von Dörfern, aus denen man zu Fuß zur Strecke geht, bis zu Städten eine Stunde entfernt mit später Verfügbarkeit: Ring wählen, echte Fahrzeiten in der Rennwoche prüfen, passend buchen.",
    leadTitle: "Sie haben eine Unterkunft bei Le Mans?",
    leadText:
      "Rennfans suchen Häuser, Zimmer und Stellplätze im April, Mai, Juni, Juli und Oktober. Bieten Sie Ihre Unterkunft an und erhalten Sie direkte Anfragen.",
    leadCta: "Unterkunft vermieten",
    seoTitle: "Das Unterkunftsproblem, früh gelöst",
    seoText: [
      "Le Mans richtet fünf große Rennwochenenden pro Jahr aus, und die Stadt hat bei weitem nicht genug Betten für diese Menschenmengen. Hotels sind fast ein Jahr im Voraus voll, die Preise verdreifachen sich, und wer spät dran ist, improvisiert.",
      "Diese Seite macht genau eines: Sie zeigt, wo für jedes Rennwochenende wirklich noch Platz ist, Ring für Ring um die Strecke, mit ehrlichen Fahrzeiten für den Rennverkehr. Hotels, Ferienhäuser und private Campingplätze, verglichen auf einer Karte.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Übernachten bei den ${name} ${year}: Hotels, Camping, Ferienhäuser`,
    metaDescription: (name: string, year: number) =>
      `Unterkunftsführer für die ${name} ${year}: Hotels, private Campingplätze und Ferienhäuser an der Strecke von Le Mans, verglichen nach echter Fahrzeit. Buchen Sie, bevor alles weg ist.`,
    heroKicker: "Rennwochenende",
    bookingHeading: "Buchen Sie vor den anderen",
    mapHeading: (name: string) => `Live-Verfügbarkeit für die ${name}`,
    mapSub:
      "Die Karte ist auf die Renntermine voreingestellt. Zoomen Sie heraus für Optionen weiter weg von der Strecke: Die Preise fallen mit der Entfernung schnell.",
    zonesHeading: "Wo Sie Ihr Basislager aufschlagen",
    zonesSub: (name: string) =>
      `Die richtige Zone hängt davon ab, wann Sie buchen. Bei den ${name} gehen die fußläufigen Dörfer zuerst, dann die Stadt, dann die Orte im Umland. Hier das ehrliche Bild, Ring für Ring.`,
    typesHeading: "Hotel, Ferienhaus oder Camping?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `Wann sollte ich eine Unterkunft für die ${name} ${year} buchen?`,
        a: `So früh wie möglich. Die nächstgelegenen Hotels und Häuser sind meist ${months}+ Monate vor dem Rennen vergeben. Mit kostenloser Stornierung zu buchen, sobald die Termine feststehen, ist der Standardzug der Stammgäste.`,
      },
      {
        q: `Kann ich in Fußnähe zur Strecke übernachten?`,
        a: `Ja, aber das Angebot ist klein: eine Handvoll Hotels, private Unterkünfte in Arnage, Mulsanne und Ruaudin sowie private Stellplätze, die zur Rennwoche öffnen. Sie sind zuerst weg: Monate im Voraus buchen oder auf den 30-Minuten-Ring ausweichen.`,
      },
      {
        q: `Alles scheint ausgebucht. Was jetzt?`,
        a: `Radius vergrößern. Orte 30 bis 60 Minuten entfernt (La Flèche, Alençon) und Städte wie Tours, Angers oder Laval haben deutlich länger Verfügbarkeit, zu normalen Preisen. Unser Plan-B-Guide erklärt die komplette Strategie.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Übernachten in ${name} für die Rennen in Le Mans: Hotels und Ferienhäuser`,
    metaDescription: (name: string, min: number) =>
      `Ist ${name} ein gutes Basislager für die Rennwoche in Le Mans? Echte Fahrzeiten (${min} Min. normal, mehr im Rennverkehr), Parken, Verkehrsanbindung und Live-Verfügbarkeit.`,
    heroKicker: "Zonen-Guide",
    statsHeading: "Die Zahlen, die zählen",
    statDistance: "Entfernung zur Strecke",
    statNormal: "Normale Fahrzeit",
    statRaceWeek: "Fahrzeit Rennwoche",
    statWalk: "Zu Fuß",
    mapHeading: (name: string) => `Übernachten in ${name}`,
    eventsHeading: "Passt zu jedem Rennwochenende",
    eventsSub:
      "Dasselbe Basislager, fünf Rennwochenenden pro Jahr. Der Druck unterscheidet sich: Juni ist extrem, April und Oktober sind entspannter.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} liegt direkt an der Strecke, ${p.km} km von den Haupteingängen. Wer hier schläft, kann das Auto vergessen: zu Fuß oder mit dem Rad hinein, nach den Nachtstints zurück, nie in der Parkplatzschlange. Es ist der begehrteste Ring rund um den Kurs, mit dem kleinsten Angebot: vor allem private Unterkünfte, Zimmer und einige Stellplätze zur Rennwoche.`,
      2: (p: Place) =>
        `${p.name} liegt im Sweet Spot: rund ${p.driveMin} Minuten zur Strecke an normalen Tagen, etwa ${p.raceWeekMin} in der Rennwoche. Es gibt echte Hotels, Supermärkte und Restaurants, und realistische Chancen auf Verfügbarkeit, wenn Sie einige Monate im Voraus buchen statt ein Jahr.`,
      3: (p: Place) =>
        `${p.name} ist der kluge Kompromiss, sobald die inneren Ringe voll sind: ${p.driveMin} Minuten zur Strecke, etwa ${p.raceWeekMin} im Rennverkehr. Die Preise bleiben hier auch in der Rennwoche fast normal, und wer früh losfährt, ist vor dem Warm-up am Morgen an der Strecke.`,
      4: (p: Place) =>
        `${p.name} ist der Freund der Spätbucher: eine richtige Stadt, etwa ${p.driveMin} Minuten von der Strecke (rechnen Sie mit ${p.raceWeekMin} im Rennwochenverkehr). Wenn rund um Le Mans alles weg oder absurd teuer ist, behält ${p.name} normale Hotels zu normalen Preisen, mit Restaurants und Leben drumherum.`,
    },
    parkingNote: {
      easy: "Parken ist hier unkompliziert, auch mit Anhänger oder Van.",
      medium:
        "Parken klappt, wird aber in der Rennwoche eng. An Renntagen vor dem Abendverkehr ankommen.",
      hard: "Parken ist der Schwachpunkt. Wer hier übernachtet, sollte früh oder ohne Auto kommen.",
    },
    stationNote:
      "Es gibt einen Bahnhof: Le Mans und die Streckenshuttles sind ohne Auto erreichbar.",
    tramNote:
      "Die Straßenbahn von Le Mans (Richtung Antarès) hält wenige Gehminuten von den Streckeneingängen: ein riesiger Vorteil an Renntagen.",
  },

  typePage: {
    mapHeading: "Live-Verfügbarkeit",
    zonesHeading: "Die besten Zonen dafür",
    camping: {
      title: "Camping bei den Rennen in Le Mans: private Plätze und Stellplätze",
      metaDescription:
        "Private Campingmöglichkeiten für die Rennwoche in Le Mans: unabhängige Campingplätze und Rennwochen-Stellplätze rund um die Strecke, und wie Sie früh einen sichern.",
      heroTitle: "Campen an der Strecke",
      intro: [
        "Camping ist die Seele der Rennwoche in Le Mans. Rund um die Strecke öffnen private Campingplätze und lokale Grundbesitzer Stellplätze für die großen Wochenenden, vom einfachen Wiesenfeld bis zur Parzelle mit Strom und Duschen.",
        "Unabhängige Stellplätze nahe der Strecke sind begrenzt und gehen an die Schnellsten. Wenn Sie einen auf der Karte oder in einem Inserat sehen, greifen Sie zu. Andernfalls verbinden die Plätze im 30-Minuten-Ring Platz mit entspannterer Anfahrt.",
      ],
      pitch:
        "Sie haben Land oder Stellplätze nahe der Strecke? Rennfans suchen genau das.",
    },
    hotels: {
      title: "Hotels bei den Rennen in Le Mans: wo es noch Zimmer gibt",
      metaDescription:
        "Hotels für die Rennwoche in Le Mans: was zuerst ausgebucht ist, realistische Alternativen nach Fahrzeit und Live-Zimmerverfügbarkeit rund um die Strecke.",
      heroTitle: "Ein richtiges Bett und eine Dusche",
      intro: [
        "Das Hotelzimmer ist das knappste Gut der Rennwoche. Le Mans hat für eine Stadt mit 300 000 Besuchern einen bescheidenen Hotelbestand: Zimmer nahe der Strecke werden fast ein Jahr im Voraus reserviert.",
        "Die gute Nachricht: Preise und Verfügbarkeit verbessern sich mit jedem Ring nach außen deutlich. Tours, Angers, Laval und Alençon halten Zimmer zu vernünftigen Preisen, lange nachdem Le Mans voll ist, und die Fahrt ist gut machbar, wenn man vor dem Morgenverkehr startet.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Ferienhäuser bei den Rennen in Le Mans: Häuser und Zimmer",
      metaDescription:
        "Ferienunterkünfte für die Rennwoche in Le Mans: ganze Häuser, Gîtes und Privatzimmer rund um die Strecke, die Lieblingsformel der Gruppen.",
      heroTitle: "Mieten Sie das Haus eines Einheimischen",
      intro: [
        "Ein Haus zu mieten ist der Klassiker für Gruppen in Le Mans: Rund um die Strecke vermieten Einheimische Häuser, Gîtes und Zimmer für die Rennwoche. Sie bekommen Küche, Betten für das ganze Team und Parkplätze, oft näher an der Strecke als jedes Hotel.",
        "Die besten Häuser werden Jahr für Jahr von denselben Gruppen gebucht: Neue Inserate und frühe Anfragen machen den Unterschied. Schauen Sie auf die Karte, und wenn Sie etwas in den ersten zwei Ringen sehen, zögern Sie nicht.",
      ],
      pitch:
        "Sie besitzen ein Haus in der Nähe? Rennwochen-Mieter sind die unkompliziertesten des Jahres.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} für die ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} für die ${eventName}: Live-Verfügbarkeit rund um die Strecke von Le Mans, ehrliche Fahrzeiten und die Buchungsstrategie der Stammgäste.`,
    intro: {
      "lm24-camping": [
        "Camping und die 24 Stunden gehören zusammen: Ein großer Teil des Publikums erlebt die Woche so, und Stellplätze nahe der Strecke sind Monate im Voraus vergeben.",
        "Private Felder und unabhängige Plätze an der Südseite der Strecke (Arnage, Mulsanne, Ruaudin) sind die besten Spots. Buchen Sie, sobald die Reise feststeht, und halten Sie einen Plan B im 30-Minuten-Ring bereit.",
      ],
      "lm24-hotels": [
        "Das Hotelzimmer zu den 24 Stunden ist die schwierigste Buchung des französischen Motorsportjahres. Alles in Le Mans selbst ist rund ein Jahr vorher weg, zu hohen Preisen.",
        "Die Methode: Am Tag der Entscheidung ein stornierbares Zimmer weiter draußen sichern, später upgraden, wenn näher etwas frei wird. Tours, Angers und Laval halten am längsten realistische Preise.",
      ],
      "motogp-camping": [
        "Das MotoGP-Wochenende zieht eine der größten Mengen der Saison an, und ein großer Teil reist mit dem Motorrad an und campt. Stellplätze nahe der Strecke gehen schnell, der Druck liegt aber eine Stufe unter den 24 Stunden.",
        "Schauen Sie auf die ersten zwei Ringe der Karte: Dorfstellplätze und kleine Plätze unter 20 Minuten sind realistisch, wenn Sie einige Monate vorausbuchen, und die Anfahrt auf dem Motorrad schlägt jeden Autostau.",
      ],
      "motogp-hotels": [
        "Hotels zum MotoGP-Wochenende füllen sich in Le Mans schnell, aber die Lage ist freundlicher als im Juni: Wer 6 bis 8 Monate vorausbucht, schläft noch unter 30 Minuten von der Strecke.",
        "Tipp für Motorradfahrer: ein Hotel mit privatem Parkplatz für die Maschinen wählen. Die Orte im zweiten und dritten Ring sind voll davon, zu Preisen, die das Stadtzentrum längst nicht mehr bietet.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Guides",
  },

  lead: {
    title: "Vermieten Sie Ihre Unterkunft bei den Rennen in Le Mans",
    metaDescription:
      "Vermieten Sie Ihr Haus, Ihre Zimmer oder Ihr Grundstück an Rennfans während der Rennwochenenden in Le Mans. Kostenlose Anfrage, direkter Kontakt zu geprüfter Nachfrage.",
    heroTitle: "Ihre Unterkunft ist in der Rennwoche viel wert",
    heroSub:
      "Fünfmal im Jahr suchen Hunderttausende Fans ein Bett nahe der Strecke. Häuser, Zimmer, Gîtes und Stellplätze rund um Le Mans sind in Tagen vermietet. Sagen Sie uns, was Sie haben, wir zeigen es den richtigen Besuchern.",
    benefits: [
      {
        t: "Die Nachfrage ist schon da",
        d: "Besucher aus Großbritannien, den Niederlanden, Deutschland und ganz Frankreich suchen bis zu ein Jahr im Voraus.",
      },
      {
        t: "Sie behalten die Kontrolle",
        d: "Sie bestimmen Ihre Termine, Ihren Preis und Ihre Regeln. Wir leiten Ihnen die Anfragen zu, Sie wählen aus.",
      },
      {
        t: "Kostenlos inserieren",
        d: "Eine Unterkunft anzubieten kostet nichts. Wir prüfen, was online geht, damit Gäste dem Angebot vertrauen.",
      },
    ],
    form: {
      name: "Ihr Name",
      email: "E-Mail",
      phone: "Telefon (optional)",
      town: "Ort",
      propertyType: "Was bieten Sie an?",
      types: {
        house: "Ganzes Haus",
        rooms: "Zimmer",
        pitch: "Stellplatz / Grundstück",
        other: "Sonstiges",
      },
      capacity: "Für wie viele Gäste?",
      events: "Welche Rennwochenenden? (Mehrfachauswahl möglich)",
      message: "Was sollten wir wissen? (Entfernung zur Strecke, Parken, ...)",
      gdpr: "Ich bin einverstanden, zu meiner Anfrage kontaktiert zu werden. Kein Spam, kein Weiterverkauf meiner Daten.",
      submit: "Anfrage senden",
      sending: "Wird gesendet...",
      success:
        "Anfrage erhalten. Wir melden uns innerhalb von 48 Stunden mit den nächsten Schritten.",
      error: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder direkt mailen.",
    },
  },

  about: {
    title: "Über diese Seite",
    paragraphs: [
      "Le Mans Stays ist ein unabhängiger Unterkunftsführer für die großen Rennwochenenden in Le Mans. Wir kartieren Hotels, Ferienhäuser und private Campingplätze rund um die Strecke und vergleichen sie so, wie Besucher wirklich entscheiden: nach echter Fahrzeit an Renntagen.",
      "Wir verdienen eine Provision, wenn Sie über die Karten dieser Seite buchen, ohne Mehrkosten für Sie. Das ist das ganze Modell: keine Banner, keine gesponserten Rankings.",
      "Wir sind weder verbunden mit noch unterstützt durch den Automobile Club de l'Ouest (ACO), Dorna Sports oder die Veranstalter der genannten Events. Eventnamen werden ausschließlich beschreibend verwendet. Wir verkaufen keine Tickets.",
    ],
  },

  contact: {
    title: "Kontakt",
    paragraphs: [
      "Eine Frage, eine Korrektur, eine Partnerschaftsidee oder eine Unterkunft anzubieten? Schreiben Sie uns, wir antworten schnell.",
      "E-Mail: hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Impressum",
    paragraphs: [
      "Diese Website ist eine unabhängige Publikation. Die Angaben zum Herausgeber werden vor dem öffentlichen Start vervollständigt.",
      "Alle auf dieser Seite genannten Eventnamen, Marken und Zeichen gehören ihren jeweiligen Inhabern und werden ausschließlich beschreibend verwendet. Diese Seite ist nicht mit dem Automobile Club de l'Ouest (ACO) oder Dorna Sports verbunden. Diese Seite verkauft keine Tickets.",
      "Unterkunftsbuchungen über die Karten dieser Seite werden von unseren Buchungspartnern zu deren eigenen Bedingungen abgewickelt.",
    ],
  },

  privacy: {
    title: "Datenschutz",
    paragraphs: [
      "Wir erheben die über das Formular übermittelten Daten nur zur Bearbeitung Ihrer Anfrage und verkaufen sie niemals weiter.",
      "Unsere Buchungspartner können Cookies verwenden, um Buchungen über die Karten zuzuordnen: So finanziert sich diese Seite. Es werden keine personenbezogenen Daten an Dritte verkauft.",
      "Zur Ausübung Ihrer Datenrechte kontaktieren Sie uns über die Adresse auf der Kontaktseite.",
    ],
  },

  footer: {
    events: "Rennwochenenden",
    zones: "Zonen",
    types: "Unterkunftsarten",
    guides: "Guides",
    site: "Seite",
    disclaimer:
      "Le Mans Stays ist ein unabhängiger Unterkunftsführer. Wir sind weder verbunden mit noch unterstützt durch den Automobile Club de l'Ouest (ACO), Dorna Sports oder die Veranstalter der genannten Events. Eventnamen werden ausschließlich beschreibend verwendet. Wir verkaufen keine Tickets.",
    affiliate:
      "Buchungen über diese Seite können uns eine Provision einbringen, ohne Mehrkosten für Sie.",
  },
};
