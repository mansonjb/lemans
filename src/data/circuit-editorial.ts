/**
 * Rich, hand-curated editorial per circuit (×6 locales), paired with
 * data-driven helpers. The tables (top stays, camping, price tiers) derive
 * from the scraped data, so they are unique by construction and carry no
 * padding; the prose is written per circuit. Only circuits present in
 * EDITORIAL render the enriched block (pilot: valencia).
 */
import type { CircuitData, CircuitHotel } from "./circuit-data";
import type { Locale } from "@/lib/types";

export type EditorialContent = {
  lede: string;
  basesSub: string;
  bases: { name: string; drive: string; stays: string; body: string }[];
  duel: {
    nearLabel: string;
    nearSub: string;
    cityLabel: string;
    citySub: string;
    rows: { dim: string; near: string; city: string }[];
    pickNear: string;
    pickCity: string;
  };
  circuitCity: string[];
  sellsOut: string;
  faq: { q: string; a: string }[];
};

export type EditorialUI = {
  whereToBase: string;
  vsNote: string;
  pickNearIf: string;
  pickCityIf: string;
  topStays: string;
  topStaysNote: (n: number) => string;
  tStay: string;
  tBase: string;
  tDrive: string;
  tRating: string;
  camping: string;
  pay: string;
  payNote: (n: number) => string;
  tierBudget: string;
  tierMid: string;
  tierPremium: string;
  budgetDesc: string;
  midDesc: string;
  premiumDesc: string;
  circuitArea: string;
  faqHeading: string;
  min: string;
};

/** Highest-rated stays, best score first then closest. */
export const topStays = (d: CircuitData, n = 5): CircuitHotel[] =>
  d.hotels
    .filter((h) => h.score != null)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.driveMin - b.driveMin)
    .slice(0, n);

/** Camping / glamping / rural stays (by kind or name). */
export const campingStays = (d: CircuitData): CircuitHotel[] =>
  d.hotels.filter(
    (h) => h.kind === "camping" || /glamping|camping|caba[ñn]|bungalow|finca/i.test(h.name)
  );

/** Count of listed stays per price tier (1 budget, 2 mid, 3 premium). */
export const priceTiers = (d: CircuitData): Record<1 | 2 | 3, number> => {
  const t: Record<1 | 2 | 3, number> = { 1: 0, 2: 0, 3: 0 };
  for (const h of d.hotels) t[(h.category as 1 | 2 | 3) ?? 2]++;
  return t;
};

export const EDITORIAL_UI: Record<Locale, EditorialUI> = {
  en: {
    whereToBase: "Where to base yourself",
    vsNote: "The one call that shapes the whole weekend. The head-to-head.",
    pickNearIf: "Pick near if",
    pickCityIf: "Pick the city if",
    topStays: "Top-rated stays near the circuit",
    topStaysNote: (n) => `The best-reviewed of our ${n} listed stays, best first.`,
    tStay: "Stay", tBase: "Base", tDrive: "Drive", tRating: "Rating",
    camping: "Camping & glamping",
    pay: "What you'll pay",
    payNote: (n) => `Spread of our ${n} listed stays by price tier.`,
    tierBudget: "Budget", tierMid: "Mid", tierPremium: "Premium",
    budgetDesc: "Glampings and roadside hotels in the inner towns.",
    midDesc: "The bulk of the choice, inner towns and the city.",
    premiumDesc: "Mostly four-star stays in the city.",
    circuitArea: "The circuit & the area",
    faqHeading: "Common questions",
    min: "min",
  },
  fr: {
    whereToBase: "Où se baser",
    vsNote: "Le choix qui décide de tout le week-end. Le face-à-face.",
    pickNearIf: "À choisir près si",
    pickCityIf: "À choisir en ville si",
    topStays: "Les mieux notés près du circuit",
    topStaysNote: (n) => `Les mieux notés de nos ${n} hébergements, les meilleurs d'abord.`,
    tStay: "Hébergement", tBase: "Base", tDrive: "Trajet", tRating: "Note",
    camping: "Camping & glamping",
    pay: "Budget à prévoir",
    payNote: (n) => `Répartition de nos ${n} hébergements par palier de prix.`,
    tierBudget: "Éco", tierMid: "Milieu", tierPremium: "Premium",
    budgetDesc: "Glampings et hôtels de route dans les villages proches.",
    midDesc: "L'essentiel du choix, villages proches et ville.",
    premiumDesc: "Surtout du 4 étoiles en ville.",
    circuitArea: "Le circuit & la région",
    faqHeading: "Questions fréquentes",
    min: "min",
  },
  nl: {
    whereToBase: "Waar je je basis legt",
    vsNote: "De keuze die het hele weekend bepaalt. De directe vergelijking.",
    pickNearIf: "Kies dichtbij als",
    pickCityIf: "Kies de stad als",
    topStays: "Best beoordeeld bij het circuit",
    topStaysNote: (n) => `De best beoordeelde van onze ${n} verblijven, beste eerst.`,
    tStay: "Verblijf", tBase: "Basis", tDrive: "Rijtijd", tRating: "Score",
    camping: "Camping & glamping",
    pay: "Wat je betaalt",
    payNote: (n) => `Verdeling van onze ${n} verblijven per prijsklasse.`,
    tierBudget: "Budget", tierMid: "Midden", tierPremium: "Premium",
    budgetDesc: "Glampings en hotels langs de weg in de nabije dorpen.",
    midDesc: "Het grootste deel van het aanbod, dorpen en stad.",
    premiumDesc: "Vooral viersterren in de stad.",
    circuitArea: "Het circuit & de omgeving",
    faqHeading: "Veelgestelde vragen",
    min: "min",
  },
  de: {
    whereToBase: "Wo du dich einquartierst",
    vsNote: "Die Entscheidung, die das ganze Wochenende prägt. Das direkte Duell.",
    pickNearIf: "Nimm nah dran, wenn",
    pickCityIf: "Nimm die Stadt, wenn",
    topStays: "Am besten bewertet nahe der Strecke",
    topStaysNote: (n) => `Die bestbewerteten unserer ${n} Unterkünfte, beste zuerst.`,
    tStay: "Unterkunft", tBase: "Basis", tDrive: "Fahrt", tRating: "Bewertung",
    camping: "Camping & Glamping",
    pay: "Was es kostet",
    payNote: (n) => `Verteilung unserer ${n} Unterkünfte nach Preisklasse.`,
    tierBudget: "Günstig", tierMid: "Mittel", tierPremium: "Premium",
    budgetDesc: "Glampings und Hotels an der Straße in den nahen Orten.",
    midDesc: "Der Großteil der Auswahl, nahe Orte und Stadt.",
    premiumDesc: "Überwiegend Vier-Sterne in der Stadt.",
    circuitArea: "Die Strecke & die Umgebung",
    faqHeading: "Häufige Fragen",
    min: "Min",
  },
  it: {
    whereToBase: "Dove alloggiare",
    vsNote: "La scelta che decide tutto il weekend. Il testa a testa.",
    pickNearIf: "Scegli vicino se",
    pickCityIf: "Scegli la città se",
    topStays: "I meglio valutati vicino al circuito",
    topStaysNote: (n) => `I meglio recensiti dei nostri ${n} alloggi, i migliori prima.`,
    tStay: "Alloggio", tBase: "Base", tDrive: "Tragitto", tRating: "Voto",
    camping: "Campeggio & glamping",
    pay: "Quanto spenderai",
    payNote: (n) => `Distribuzione dei nostri ${n} alloggi per fascia di prezzo.`,
    tierBudget: "Economico", tierMid: "Media", tierPremium: "Premium",
    budgetDesc: "Glamping e hotel su strada nei paesi vicini.",
    midDesc: "Il grosso della scelta, paesi vicini e città.",
    premiumDesc: "Soprattutto quattro stelle in città.",
    circuitArea: "Il circuito & la zona",
    faqHeading: "Domande frequenti",
    min: "min",
  },
  es: {
    whereToBase: "Dónde alojarte",
    vsNote: "La decisión que marca todo el fin de semana. El cara a cara.",
    pickNearIf: "Elige cerca si",
    pickCityIf: "Elige la ciudad si",
    topStays: "Mejor valorados cerca del circuito",
    topStaysNote: (n) => `Los mejor valorados de nuestros ${n} alojamientos, primero los mejores.`,
    tStay: "Alojamiento", tBase: "Base", tDrive: "Trayecto", tRating: "Nota",
    camping: "Camping y glamping",
    pay: "Cuánto vas a pagar",
    payNote: (n) => `Reparto de nuestros ${n} alojamientos por nivel de precio.`,
    tierBudget: "Económico", tierMid: "Medio", tierPremium: "Premium",
    budgetDesc: "Glampings y hoteles de carretera en los pueblos cercanos.",
    midDesc: "El grueso de la oferta, pueblos cercanos y ciudad.",
    premiumDesc: "Sobre todo cuatro estrellas en la ciudad.",
    circuitArea: "El circuito y la zona",
    faqHeading: "Preguntas frecuentes",
    min: "min",
  },
};

export const EDITORIAL: Record<string, Record<Locale, EditorialContent>> = {
  valencia: {
    en: {
      lede: "The Valencian Grand Prix closes the MotoGP season at the Circuit Ricardo Tormo in Cheste. A full guide to where to stay, by zone, by budget, and by how early it sells out.",
      basesSub: "Valencia is the season finale, so the closest beds go a long way out. Four realistic bases, nearest first.",
      bases: [
        { name: "At the circuit · Cheste", drive: "3 min", stays: "1 listed stay", body: "On the edge of the track, but the town has a single hotel (Hotel Torrijos), gone a year ahead. Realistic only if you book the moment the date lands." },
        { name: "Closest with choice · Chiva", drive: "3–8 min", stays: "4 listed stays", body: "The smart near-but-available base: roadside hotels plus glamping (Las Cabañas del Bosque, rated 5). First to fill after Cheste." },
        { name: "The city · València", drive: "23 min", stays: "19 listed stays", body: "Where most fans base: full choice, old town, beach, nightlife, and the Cercanías C-3 train runs straight to Cheste, so you skip the A-3 on race day." },
        { name: "By the airport · Manises", drive: "14 min", stays: "7 listed stays", body: "Airport hotels (ibis Valencia Bonaire, Hotel M5 Aeropuerto) between VLC and the circuit. Handy for a fly-in weekend with a hire car." },
      ],
      duel: {
        nearLabel: "Near the track", nearSub: "Cheste & Chiva", cityLabel: "In the city", citySub: "València",
        rows: [
          { dim: "Distance", near: "3–8 min to the gates", city: "23 min, or the C-3 train" },
          { dim: "Choice", near: "5 listed stays", city: "19 listed stays" },
          { dim: "Transport", near: "Car essential", city: "Train, no race-day traffic" },
          { dim: "Food & nightlife", near: "Village, limited", city: "Old town, beach, paella" },
          { dim: "Price & range", near: "From €, few rooms", city: "€ to €€€, full range" },
          { dim: "Sells out", near: "9–12 months ahead", city: "Holds longest" },
        ],
        pickNear: "you want the shortest transfer and you book the moment the date lands.",
        pickCity: "you want choice and a city break, and let the train do the race-day run.",
      },
      circuitCity: [
        "The Ricardo Tormo is a short, stadium-style circuit: just over 4 km, tightly wound, with banking that lets a single grandstand see most of the lap. As the season finale it is often the title decider, and the home crowd makes it the loudest weekend on Spain's MotoGP calendar.",
        "Basing in València turns the weekend into a city break: the old town, the Turia gardens, the Malvarrosa beach and the home of paella are all 20 to 30 minutes from the gates, with the C-3 train doing the race-day run for you.",
      ],
      sellsOut: "As the season finale, Valencia draws the biggest crowd of Spain's MotoGP weekends. Cheste and Chiva go first, often 9–12 months out. València city holds availability longest thanks to its depth, but prices climb as the weekend nears. Book the inner-ring towns early; keep the city as your flexible fallback.",
      faq: [
        { q: "Can you reach the circuit by train?", a: "Yes. The Cercanías C-3 runs from València to Cheste, a short hop from the gates. Staying in the city and training in is the easiest way to skip race-day traffic." },
        { q: "Where do most fans stay?", a: "València city (19 of our listed stays), for the choice and the train link. The inner towns of Cheste and Chiva go to those who book earliest." },
        { q: "Is there camping or glamping?", a: "Yes. Las Cabañas del Bosque (Chiva, 6 min, rated 5), Finca Malata (Turís) and J&L Glamping (Collado) are the closest options." },
        { q: "How far is València airport?", a: "València (VLC) is about 20 minutes from the circuit, and sits between the city and Cheste, so an airport hotel is a fast fly-in base." },
        { q: "When does it sell out?", a: "The finale is the busiest Spanish round. The closest beds go 9 to 12 months ahead; the city holds availability longest but prices rise near the date." },
      ],
    },
    fr: {
      lede: "Le Grand Prix de Valence clôt la saison MotoGP au Circuit Ricardo Tormo de Cheste. Guide complet pour savoir où loger, par zone, par budget et selon la vitesse à laquelle tout se remplit.",
      basesSub: "Valence est la finale de la saison, donc les lits les plus proches partent très loin à l'avance. Quatre bases réalistes, de la plus proche à la plus éloignée.",
      bases: [
        { name: "Au circuit · Cheste", drive: "3 min", stays: "1 hébergement", body: "En bordure de piste, mais le village n'a qu'un seul hôtel (Hotel Torrijos), complet un an à l'avance. Réaliste seulement si tu réserves dès l'annonce de la date." },
        { name: "Le plus proche avec du choix · Chiva", drive: "3–8 min", stays: "4 hébergements", body: "La base maligne, proche mais disponible : hôtels de route et glamping (Las Cabañas del Bosque, noté 5). Se remplit juste après Cheste." },
        { name: "La ville · Valence", drive: "23 min", stays: "19 hébergements", body: "Là où loge la majorité : choix complet, vieille ville, plage, vie nocturne, et le train Cercanías C-3 va directement à Cheste, pour éviter l'A-3 le jour de la course." },
        { name: "Près de l'aéroport · Manises", drive: "14 min", stays: "7 hébergements", body: "Hôtels d'aéroport (ibis Valencia Bonaire, Hotel M5 Aeropuerto) entre VLC et le circuit. Pratique pour un week-end en avion avec voiture de location." },
      ],
      duel: {
        nearLabel: "Près du circuit", nearSub: "Cheste & Chiva", cityLabel: "En ville", citySub: "Valence",
        rows: [
          { dim: "Distance", near: "3–8 min des portes", city: "23 min, ou le train C-3" },
          { dim: "Choix", near: "5 hébergements", city: "19 hébergements" },
          { dim: "Transport", near: "Voiture indispensable", city: "Train, zéro bouchon le jour J" },
          { dim: "Restos & sorties", near: "Village, limité", city: "Vieille ville, plage, paella" },
          { dim: "Prix & gamme", near: "Dès €, peu de chambres", city: "De € à €€€, toute la gamme" },
          { dim: "Se remplit", near: "9–12 mois avant", city: "Tient le plus longtemps" },
        ],
        pickNear: "tu veux le trajet le plus court et tu réserves dès l'annonce de la date.",
        pickCity: "tu veux du choix et un city break, et laisser le train faire le trajet le jour de la course.",
      },
      circuitCity: [
        "Le Ricardo Tormo est un circuit court en cuvette : à peine plus de 4 km, très sinueux, avec des virages relevés qui laissent voir presque tout le tour depuis une seule tribune. En tant que finale, il décide souvent du titre, et le public local en fait le week-end le plus bruyant du calendrier MotoGP espagnol.",
        "Se baser à Valence transforme le week-end en city break : la vieille ville, les jardins du Turia, la plage de la Malvarrosa et le berceau de la paella sont tous à 20-30 minutes des portes, le train C-3 faisant le trajet pour toi le jour de la course.",
      ],
      sellsOut: "En tant que finale, Valence attire la plus grosse foule des week-ends MotoGP espagnols. Cheste et Chiva partent en premier, souvent 9-12 mois avant. Valence-ville tient la disponibilité le plus longtemps grâce à sa profondeur, mais les prix montent à l'approche. Réserve tôt les villages du premier anneau ; garde la ville en repli flexible.",
      faq: [
        { q: "Peut-on rejoindre le circuit en train ?", a: "Oui. Le Cercanías C-3 relie Valence à Cheste, à deux pas des portes. Loger en ville et prendre le train est le moyen le plus simple d'éviter les bouchons le jour de la course." },
        { q: "Où loge la majorité des fans ?", a: "À Valence-ville (19 de nos hébergements), pour le choix et la liaison en train. Les villages de Cheste et Chiva reviennent à ceux qui réservent le plus tôt." },
        { q: "Y a-t-il du camping ou du glamping ?", a: "Oui. Las Cabañas del Bosque (Chiva, 6 min, noté 5), Finca Malata (Turís) et J&L Glamping (Collado) sont les options les plus proches." },
        { q: "À quelle distance est l'aéroport de Valence ?", a: "Valence (VLC) est à environ 20 minutes du circuit, entre la ville et Cheste : un hôtel d'aéroport fait une base rapide en avion." },
        { q: "Quand est-ce complet ?", a: "La finale est la manche espagnole la plus courue. Les lits les plus proches partent 9 à 12 mois avant ; la ville tient la disponibilité le plus longtemps mais les prix montent à l'approche." },
      ],
    },
    nl: {
      lede: "De Grand Prix van Valencia sluit het MotoGP-seizoen af op het Circuit Ricardo Tormo in Cheste. Een complete gids over waar te verblijven, per zone, per budget en hoe snel alles volgeboekt raakt.",
      basesSub: "Valencia is de seizoensfinale, dus de dichtstbijzijnde bedden zijn ver van tevoren weg. Vier realistische uitvalsbases, dichtstbij eerst.",
      bases: [
        { name: "Aan het circuit · Cheste", drive: "3 min", stays: "1 verblijf", body: "Pal naast de baan, maar het dorp heeft één enkel hotel (Hotel Torrijos), een jaar van tevoren weg. Alleen realistisch als je boekt zodra de datum bekend is." },
        { name: "Dichtstbij met keuze · Chiva", drive: "3–8 min", stays: "4 verblijven", body: "De slimme basis, dichtbij maar beschikbaar: hotels langs de weg plus glamping (Las Cabañas del Bosque, score 5). Vult zich als eerste na Cheste." },
        { name: "De stad · Valencia", drive: "23 min", stays: "19 verblijven", body: "Waar de meeste fans zitten: volop keuze, oude stad, strand, uitgaansleven, en de Cercanías C-3-trein rijdt rechtstreeks naar Cheste, zodat je de A-3 op racedag mijdt." },
        { name: "Bij het vliegveld · Manises", drive: "14 min", stays: "7 verblijven", body: "Vliegveldhotels (ibis Valencia Bonaire, Hotel M5 Aeropuerto) tussen VLC en het circuit. Handig voor een vliegweekend met een huurauto." },
      ],
      duel: {
        nearLabel: "Bij het circuit", nearSub: "Cheste & Chiva", cityLabel: "In de stad", citySub: "Valencia",
        rows: [
          { dim: "Afstand", near: "3–8 min van de poorten", city: "23 min, of de C-3-trein" },
          { dim: "Keuze", near: "5 verblijven", city: "19 verblijven" },
          { dim: "Vervoer", near: "Auto nodig", city: "Trein, geen racedagverkeer" },
          { dim: "Eten & uitgaan", near: "Dorp, beperkt", city: "Oude stad, strand, paella" },
          { dim: "Prijs & bereik", near: "Vanaf €, weinig kamers", city: "€ tot €€€, volledig bereik" },
          { dim: "Volgeboekt", near: "9–12 maanden vooraf", city: "Houdt het langst stand" },
        ],
        pickNear: "je de kortste rit wilt en boekt zodra de datum bekend is.",
        pickCity: "je keuze en een stedentrip wilt, en de trein de racedagrit laat doen.",
      },
      circuitCity: [
        "Het Ricardo Tormo is een kort stadioncircuit: net iets meer dan 4 km, strak kronkelend, met kombochten waardoor je vanaf één tribune bijna de hele ronde ziet. Als seizoensfinale beslist het vaak de titel, en het thuispubliek maakt het tot het luidste weekend van de Spaanse MotoGP-kalender.",
        "Verblijven in Valencia maakt er een stedentrip van: de oude stad, de Turia-tuinen, het Malvarrosa-strand en de bakermat van de paella liggen allemaal 20 tot 30 minuten van de poorten, met de C-3-trein die op racedag het werk doet.",
      ],
      sellsOut: "Als seizoensfinale trekt Valencia het grootste publiek van de Spaanse MotoGP-weekends. Cheste en Chiva gaan als eerste, vaak 9-12 maanden van tevoren. De stad Valencia houdt dankzij haar omvang het langst beschikbaarheid, maar de prijzen stijgen naarmate het weekend nadert. Boek de dorpen in de binnenring vroeg; houd de stad als flexibele achtervang.",
      faq: [
        { q: "Kun je het circuit met de trein bereiken?", a: "Ja. De Cercanías C-3 rijdt van Valencia naar Cheste, vlak bij de poorten. In de stad verblijven en de trein nemen is de makkelijkste manier om racedagverkeer te vermijden." },
        { q: "Waar zitten de meeste fans?", a: "In de stad Valencia (19 van onze verblijven), vanwege de keuze en de treinverbinding. De dorpen Cheste en Chiva zijn voor wie het vroegst boekt." },
        { q: "Is er camping of glamping?", a: "Ja. Las Cabañas del Bosque (Chiva, 6 min, score 5), Finca Malata (Turís) en J&L Glamping (Collado) zijn de dichtstbijzijnde opties." },
        { q: "Hoe ver is de luchthaven van Valencia?", a: "Valencia (VLC) ligt op zo'n 20 minuten van het circuit, tussen de stad en Cheste, dus een vliegveldhotel is een snelle vliegbasis." },
        { q: "Wanneer is het volgeboekt?", a: "De finale is de drukste Spaanse race. De dichtstbijzijnde bedden gaan 9 tot 12 maanden vooraf; de stad houdt het langst beschikbaarheid maar de prijzen stijgen richting de datum." },
      ],
    },
    de: {
      lede: "Der Große Preis von Valencia beschließt die MotoGP-Saison auf dem Circuit Ricardo Tormo in Cheste. Ein kompletter Leitfaden, wo du übernachtest, nach Zone, nach Budget und danach, wie früh alles ausgebucht ist.",
      basesSub: "Valencia ist das Saisonfinale, daher sind die nächstgelegenen Betten lange im Voraus weg. Vier realistische Basislager, das nächste zuerst.",
      bases: [
        { name: "An der Strecke · Cheste", drive: "3 Min", stays: "1 Unterkunft", body: "Direkt am Kurs, aber der Ort hat nur ein einziges Hotel (Hotel Torrijos), ein Jahr im Voraus ausgebucht. Nur realistisch, wenn du sofort nach der Terminbekanntgabe buchst." },
        { name: "Am nächsten mit Auswahl · Chiva", drive: "3–8 Min", stays: "4 Unterkünfte", body: "Die clevere Basis, nah und doch verfügbar: Hotels an der Straße plus Glamping (Las Cabañas del Bosque, Bewertung 5). Füllt sich als Erstes nach Cheste." },
        { name: "Die Stadt · Valencia", drive: "23 Min", stays: "19 Unterkünfte", body: "Wo die meisten Fans wohnen: volle Auswahl, Altstadt, Strand, Nachtleben, und der Cercanías-C-3-Zug fährt direkt nach Cheste, so umgehst du am Renntag die A-3." },
        { name: "Am Flughafen · Manises", drive: "14 Min", stays: "7 Unterkünfte", body: "Flughafenhotels (ibis Valencia Bonaire, Hotel M5 Aeropuerto) zwischen VLC und der Strecke. Praktisch für ein Fly-in-Wochenende mit Mietwagen." },
      ],
      duel: {
        nearLabel: "An der Strecke", nearSub: "Cheste & Chiva", cityLabel: "In der Stadt", citySub: "Valencia",
        rows: [
          { dim: "Entfernung", near: "3–8 Min bis zu den Toren", city: "23 Min, oder der C-3-Zug" },
          { dim: "Auswahl", near: "5 Unterkünfte", city: "19 Unterkünfte" },
          { dim: "Anfahrt", near: "Auto nötig", city: "Zug, kein Renntag-Verkehr" },
          { dim: "Essen & Ausgehen", near: "Dorf, begrenzt", city: "Altstadt, Strand, Paella" },
          { dim: "Preis & Spektrum", near: "Ab €, wenige Zimmer", city: "€ bis €€€, volles Spektrum" },
          { dim: "Ausgebucht", near: "9–12 Monate vorher", city: "Hält am längsten" },
        ],
        pickNear: "du die kürzeste Anfahrt willst und sofort nach der Terminbekanntgabe buchst.",
        pickCity: "du Auswahl und einen Städtetrip willst und den Zug die Renntag-Fahrt machen lässt.",
      },
      circuitCity: [
        "Der Ricardo Tormo ist ein kurzer Stadionkurs: gut 4 km, eng gewunden, mit Steilkurven, sodass man von einer einzigen Tribüne fast die ganze Runde sieht. Als Saisonfinale entscheidet er oft den Titel, und das Heimpublikum macht es zum lautesten Wochenende im spanischen MotoGP-Kalender.",
        "In Valencia zu wohnen macht aus dem Wochenende einen Städtetrip: die Altstadt, die Turia-Gärten, der Malvarrosa-Strand und die Heimat der Paella liegen alle 20 bis 30 Minuten von den Toren entfernt, und der C-3-Zug übernimmt am Renntag die Fahrt.",
      ],
      sellsOut: "Als Saisonfinale zieht Valencia das größte Publikum der spanischen MotoGP-Wochenenden an. Cheste und Chiva sind zuerst weg, oft 9-12 Monate vorher. Die Stadt Valencia hält dank ihrer Größe am längsten Verfügbarkeit, doch die Preise steigen, je näher das Wochenende rückt. Buche die Orte im inneren Ring früh; halte die Stadt als flexible Rückfalloption.",
      faq: [
        { q: "Kommt man mit dem Zug zur Strecke?", a: "Ja. Der Cercanías C-3 fährt von Valencia nach Cheste, nur einen Katzensprung von den Toren. In der Stadt wohnen und den Zug nehmen ist der einfachste Weg, den Renntag-Verkehr zu umgehen." },
        { q: "Wo wohnen die meisten Fans?", a: "In der Stadt Valencia (19 unserer Unterkünfte), wegen der Auswahl und der Zugverbindung. Die Orte Cheste und Chiva gehen an die, die am frühesten buchen." },
        { q: "Gibt es Camping oder Glamping?", a: "Ja. Las Cabañas del Bosque (Chiva, 6 Min, Bewertung 5), Finca Malata (Turís) und J&L Glamping (Collado) sind die nächstgelegenen Optionen." },
        { q: "Wie weit ist der Flughafen Valencia?", a: "Valencia (VLC) ist rund 20 Minuten von der Strecke entfernt und liegt zwischen Stadt und Cheste, ein Flughafenhotel ist also eine schnelle Fly-in-Basis." },
        { q: "Wann ist alles ausgebucht?", a: "Das Finale ist der meistbesuchte spanische Lauf. Die nächstgelegenen Betten sind 9 bis 12 Monate vorher weg; die Stadt hält am längsten Verfügbarkeit, aber die Preise steigen zum Termin hin." },
      ],
    },
    it: {
      lede: "Il Gran Premio di Valencia chiude la stagione MotoGP al Circuit Ricardo Tormo di Cheste. Una guida completa su dove alloggiare, per zona, per budget e per quanto presto si riempie tutto.",
      basesSub: "Valencia è il finale di stagione, quindi i letti più vicini si esauriscono con molto anticipo. Quattro basi realistiche, dalla più vicina.",
      bases: [
        { name: "Al circuito · Cheste", drive: "3 min", stays: "1 alloggio", body: "A bordo pista, ma il paese ha un solo hotel (Hotel Torrijos), esaurito con un anno di anticipo. Realistico solo se prenoti appena esce la data." },
        { name: "Il più vicino con scelta · Chiva", drive: "3–8 min", stays: "4 alloggi", body: "La base furba, vicina ma disponibile: hotel su strada e glamping (Las Cabañas del Bosque, voto 5). Si riempie subito dopo Cheste." },
        { name: "La città · Valencia", drive: "23 min", stays: "19 alloggi", body: "Dove alloggia la maggior parte: scelta completa, centro storico, spiaggia, vita notturna, e il treno Cercanías C-3 va dritto a Cheste, così eviti la A-3 nel giorno di gara." },
        { name: "Vicino all'aeroporto · Manises", drive: "14 min", stays: "7 alloggi", body: "Hotel d'aeroporto (ibis Valencia Bonaire, Hotel M5 Aeropuerto) tra VLC e il circuito. Comodi per un weekend in aereo con auto a noleggio." },
      ],
      duel: {
        nearLabel: "Vicino al circuito", nearSub: "Cheste & Chiva", cityLabel: "In città", citySub: "Valencia",
        rows: [
          { dim: "Distanza", near: "3–8 min dai cancelli", city: "23 min, o il treno C-3" },
          { dim: "Scelta", near: "5 alloggi", city: "19 alloggi" },
          { dim: "Trasporti", near: "Auto indispensabile", city: "Treno, niente traffico in gara" },
          { dim: "Cibo & vita notturna", near: "Paese, limitato", city: "Centro storico, spiaggia, paella" },
          { dim: "Prezzo & gamma", near: "Da €, poche camere", city: "Da € a €€€, gamma completa" },
          { dim: "Si esaurisce", near: "9–12 mesi prima", city: "Regge più a lungo" },
        ],
        pickNear: "vuoi il tragitto più breve e prenoti appena esce la data.",
        pickCity: "vuoi scelta e un city break, e lasci che sia il treno a fare il tragitto in gara.",
      },
      circuitCity: [
        "Il Ricardo Tormo è un circuito corto da stadio: poco più di 4 km, stretto e tortuoso, con paraboliche che da una sola tribuna fanno vedere quasi tutto il giro. Essendo il finale di stagione decide spesso il titolo, e il pubblico di casa lo rende il weekend più rumoroso del calendario MotoGP spagnolo.",
        "Alloggiare a Valencia trasforma il weekend in un city break: il centro storico, i giardini del Turia, la spiaggia della Malvarrosa e la patria della paella sono tutti a 20-30 minuti dai cancelli, con il treno C-3 che nel giorno di gara fa il tragitto al posto tuo.",
      ],
      sellsOut: "Essendo il finale di stagione, Valencia richiama il pubblico più numeroso dei weekend MotoGP spagnoli. Cheste e Chiva si esauriscono per prime, spesso 9-12 mesi prima. La città di Valencia regge la disponibilità più a lungo grazie alla sua ampiezza, ma i prezzi salgono con l'avvicinarsi del weekend. Prenota presto i paesi del primo anello; tieni la città come riserva flessibile.",
      faq: [
        { q: "Si può raggiungere il circuito in treno?", a: "Sì. Il Cercanías C-3 collega Valencia a Cheste, a due passi dai cancelli. Alloggiare in città e prendere il treno è il modo più semplice per evitare il traffico in gara." },
        { q: "Dove alloggia la maggior parte dei tifosi?", a: "Nella città di Valencia (19 dei nostri alloggi), per la scelta e il collegamento in treno. I paesi di Cheste e Chiva vanno a chi prenota prima." },
        { q: "C'è campeggio o glamping?", a: "Sì. Las Cabañas del Bosque (Chiva, 6 min, voto 5), Finca Malata (Turís) e J&L Glamping (Collado) sono le opzioni più vicine." },
        { q: "Quanto dista l'aeroporto di Valencia?", a: "Valencia (VLC) è a circa 20 minuti dal circuito e si trova tra la città e Cheste, quindi un hotel d'aeroporto è una base rapida in aereo." },
        { q: "Quando si esaurisce?", a: "Il finale è la gara spagnola più affollata. I letti più vicini vanno 9-12 mesi prima; la città regge più a lungo ma i prezzi salgono verso la data." },
      ],
    },
    es: {
      lede: "El Gran Premio de Valencia cierra la temporada de MotoGP en el Circuit Ricardo Tormo de Cheste. Una guía completa de dónde alojarte, por zona, por presupuesto y según lo rápido que se agota.",
      basesSub: "Valencia es el final de temporada, así que las camas más cercanas se agotan con mucha antelación. Cuatro bases realistas, de la más cercana a la más lejana.",
      bases: [
        { name: "En el circuito · Cheste", drive: "3 min", stays: "1 alojamiento", body: "Junto a la pista, pero el pueblo tiene un único hotel (Hotel Torrijos), agotado con un año de antelación. Realista solo si reservas en cuanto se anuncia la fecha." },
        { name: "El más cercano con opciones · Chiva", drive: "3–8 min", stays: "4 alojamientos", body: "La base lista, cerca pero disponible: hoteles de carretera y glamping (Las Cabañas del Bosque, nota 5). Se llena justo después de Cheste." },
        { name: "La ciudad · València", drive: "23 min", stays: "19 alojamientos", body: "Donde se aloja la mayoría: oferta completa, casco antiguo, playa, vida nocturna, y el tren Cercanías C-3 llega directo a Cheste, así te ahorras la A-3 el día de carrera." },
        { name: "Junto al aeropuerto · Manises", drive: "14 min", stays: "7 alojamientos", body: "Hoteles de aeropuerto (ibis Valencia Bonaire, Hotel M5 Aeropuerto) entre VLC y el circuito. Prácticos para un fin de semana en avión con coche de alquiler." },
      ],
      duel: {
        nearLabel: "Cerca del circuito", nearSub: "Cheste y Chiva", cityLabel: "En la ciudad", citySub: "València",
        rows: [
          { dim: "Distancia", near: "3–8 min de las puertas", city: "23 min, o el tren C-3" },
          { dim: "Oferta", near: "5 alojamientos", city: "19 alojamientos" },
          { dim: "Transporte", near: "Coche imprescindible", city: "Tren, sin tráfico el día de carrera" },
          { dim: "Comer y salir", near: "Pueblo, limitado", city: "Casco antiguo, playa, paella" },
          { dim: "Precio y gama", near: "Desde €, pocas habitaciones", city: "De € a €€€, gama completa" },
          { dim: "Se agota", near: "9–12 meses antes", city: "Aguanta más tiempo" },
        ],
        pickNear: "quieres el trayecto más corto y reservas en cuanto se anuncia la fecha.",
        pickCity: "quieres opciones y una escapada urbana, y dejar que el tren haga el trayecto el día de carrera.",
      },
      circuitCity: [
        "El Ricardo Tormo es un circuito corto tipo estadio: poco más de 4 km, muy revirado, con peraltes que dejan ver casi toda la vuelta desde una sola grada. Como final de temporada suele decidir el título, y la afición local lo convierte en el fin de semana más ruidoso del calendario español de MotoGP.",
        "Alojarte en València convierte el fin de semana en una escapada urbana: el casco antiguo, los jardines del Turia, la playa de la Malvarrosa y la cuna de la paella están todos a 20-30 minutos de las puertas, con el tren C-3 haciendo el trayecto por ti el día de carrera.",
      ],
      sellsOut: "Como final de temporada, Valencia reúne al mayor público de los fines de semana de MotoGP en España. Cheste y Chiva se agotan primero, a menudo 9-12 meses antes. La ciudad de València mantiene disponibilidad más tiempo por su tamaño, pero los precios suben al acercarse la fecha. Reserva pronto los pueblos del primer anillo; deja la ciudad como alternativa flexible.",
      faq: [
        { q: "¿Se puede llegar al circuito en tren?", a: "Sí. El Cercanías C-3 une València con Cheste, a un paso de las puertas. Alojarte en la ciudad y tomar el tren es la forma más fácil de evitar el tráfico el día de carrera." },
        { q: "¿Dónde se aloja la mayoría?", a: "En la ciudad de València (19 de nuestros alojamientos), por la oferta y la conexión en tren. Los pueblos de Cheste y Chiva son para quienes reservan antes." },
        { q: "¿Hay camping o glamping?", a: "Sí. Las Cabañas del Bosque (Chiva, 6 min, nota 5), Finca Malata (Turís) y J&L Glamping (Collado) son las opciones más cercanas." },
        { q: "¿A qué distancia está el aeropuerto de València?", a: "València (VLC) está a unos 20 minutos del circuito, entre la ciudad y Cheste, así que un hotel de aeropuerto es una base rápida en avión." },
        { q: "¿Cuándo se agota?", a: "El final es la cita española más concurrida. Las camas más cercanas se van 9-12 meses antes; la ciudad aguanta más pero los precios suben al acercarse la fecha." },
      ],
    },
  },
};
