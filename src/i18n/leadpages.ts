import type { Locale } from "@/lib/types";

export interface LeadContent {
  title: string;
  metaDescription: string;
  kicker: string;
  h1: string;
  intro: string[];
  /** Optional extra section heading + paragraphs (e.g. ferry routes, cost). */
  section?: { heading: string; paragraphs: string[]; list?: string[] };
}

type L = Record<Locale, LeadContent>;

const nearCircuit: L = {
  en: {
    title: "Hotels near the Le Mans circuit: walk-to-the-track stays",
    metaDescription:
      "Hotels and stays within walking or cycling distance of the Le Mans circuit. Compare the closest options by real drive time and book before they sell out.",
    kicker: "Closest to the action",
    h1: "Hotels near the Le Mans circuit",
    intro: [
      "The places right against the circuit, in Arnage, Mulsanne, Ruaudin and the circuit area itself, let you forget the car: walk or cycle to the gates and back after the night stints, and never queue for a parking spot.",
      "This is the most wanted ring of all, with the smallest inventory, so it goes first. Below are the closest real stays, with live prices and availability for the race dates.",
    ],
  },
  fr: {
    title: "Hôtels près du circuit du Mans : à pied de la piste",
    metaDescription:
      "Hôtels et hébergements à distance à pied ou à vélo du circuit du Mans. Comparez les options les plus proches au temps de trajet réel et réservez avant que tout parte.",
    kicker: "Au plus près de l'action",
    h1: "Hôtels près du circuit du Mans",
    intro: [
      "Les hébergements collés au circuit, à Arnage, Mulsanne, Ruaudin et autour de la piste, vous font oublier la voiture : on rejoint les entrées à pied ou à vélo, on rentre après les relais de nuit, et on ne fait jamais la queue pour se garer.",
      "C'est la couronne la plus demandée, avec l'offre la plus réduite : elle part en premier. Voici les hébergements réels les plus proches, avec prix et disponibilités en direct aux dates de course.",
    ],
  },
  nl: {
    title: "Hotels bij circuit Le Mans: op loopafstand van de baan",
    metaDescription:
      "Hotels en verblijven op loop- of fietsafstand van het circuit van Le Mans. Vergelijk de dichtstbijzijnde opties op echte rijtijd en boek voordat ze vol zijn.",
    kicker: "Het dichtst bij de actie",
    h1: "Hotels bij het circuit van Le Mans",
    intro: [
      "De verblijven pal tegen het circuit, in Arnage, Mulsanne, Ruaudin en het circuitgebied zelf, laten u de auto vergeten: te voet of per fiets naar de poorten en terug na de nachtelijke stints, nooit in de rij voor een plek.",
      "Dit is de meest gewilde ring, met het kleinste aanbod, dus die gaat eerst. Hieronder de dichtstbijzijnde echte verblijven, met live prijzen en beschikbaarheid voor de racedata.",
    ],
  },
  de: {
    title: "Hotels nahe der Rennstrecke Le Mans: zu Fuß zur Strecke",
    metaDescription:
      "Hotels und Unterkünfte in Geh- oder Radnähe zur Strecke von Le Mans. Vergleichen Sie die nächsten Optionen nach echter Fahrzeit und buchen Sie früh.",
    kicker: "Am nächsten am Geschehen",
    h1: "Hotels nahe der Rennstrecke von Le Mans",
    intro: [
      "Die Unterkünfte direkt an der Strecke, in Arnage, Mulsanne, Ruaudin und am Streckengelände selbst, lassen Sie das Auto vergessen: zu Fuß oder mit dem Rad zu den Toren und nach den Nachtstints zurück, nie in der Parkschlange.",
      "Es ist der begehrteste Ring mit dem kleinsten Angebot, also zuerst weg. Unten die nächsten echten Unterkünfte, mit Live-Preisen und Verfügbarkeit zu den Rennterminen.",
    ],
  },
  it: {
    title: "Hotel vicino al circuito di Le Mans: a piedi dalla pista",
    metaDescription:
      "Hotel e alloggi a distanza a piedi o in bici dal circuito di Le Mans. Confronta le opzioni più vicine per tempo di guida reale e prenota prima che finiscano.",
    kicker: "Il più vicino all'azione",
    h1: "Hotel vicino al circuito di Le Mans",
    intro: [
      "Gli alloggi attaccati al circuito, ad Arnage, Mulsanne, Ruaudin e nell'area del circuito, ti fanno dimenticare l'auto: a piedi o in bici ai cancelli e ritorno dopo gli stint notturni, senza mai fare la coda per un posto.",
      "È l'anello più richiesto, con l'offerta più piccola: finisce per primo. Sotto gli alloggi reali più vicini, con prezzi e disponibilità in tempo reale alle date di gara.",
    ],
  },
  es: {
    title: "Hoteles cerca del circuito de Le Mans: a pie de la pista",
    metaDescription:
      "Hoteles y alojamientos a distancia a pie o en bici del circuito de Le Mans. Compara las opciones más cercanas por tiempo real de trayecto y reserva pronto.",
    kicker: "Lo más cerca de la acción",
    h1: "Hoteles cerca del circuito de Le Mans",
    intro: [
      "Los alojamientos pegados al circuito, en Arnage, Mulsanne, Ruaudin y la propia zona del circuito, te hacen olvidar el coche: a pie o en bici a las puertas y de vuelta tras los relevos nocturnos, sin colas por aparcar.",
      "Es el anillo más buscado, con la oferta más pequeña: vuela primero. Debajo, los alojamientos reales más cercanos, con precios y disponibilidad en directo para las fechas de carrera.",
    ],
  },
};

const cheap: L = {
  en: {
    title: "Cheap hotels for the 24 Hours of Le Mans: budget stays",
    metaDescription:
      "The cheapest hotels for the 24 Hours of Le Mans, budget chains and 2-star stays near the circuit and across the region. Compare live prices for the race dates.",
    kicker: "Best value",
    h1: "Cheap hotels for the 24 Hours of Le Mans",
    intro: [
      "Race week is expensive near the track, but budget chains and simple 2-star hotels keep rates sane, especially once you widen the radius. Booking early with free cancellation locks in the lowest prices.",
      "Below are the budget-friendly stays we track around Le Mans, with live prices for your dates. The further out you base yourself, the more your money buys.",
    ],
  },
  fr: {
    title: "Hôtels pas chers pour les 24 Heures du Mans",
    metaDescription:
      "Les hôtels les moins chers pour les 24 Heures du Mans : chaînes économiques et 2 étoiles près du circuit et dans la région. Comparez les prix en direct aux dates de course.",
    kicker: "Le meilleur rapport qualité-prix",
    h1: "Hôtels pas chers pour les 24 Heures du Mans",
    intro: [
      "La semaine de course est chère près de la piste, mais les chaînes économiques et les 2 étoiles gardent des tarifs raisonnables, surtout en élargissant le rayon. Réserver tôt avec annulation gratuite bloque les meilleurs prix.",
      "Voici les hébergements économiques que nous suivons autour du Mans, avec prix en direct à vos dates. Plus vous vous installez loin, plus votre budget en achète.",
    ],
  },
  nl: {
    title: "Goedkope hotels voor de 24 uur van Le Mans",
    metaDescription:
      "De goedkoopste hotels voor de 24 uur van Le Mans: budgetketens en 2-sterrenverblijven bij het circuit en in de regio. Vergelijk live prijzen voor de racedata.",
    kicker: "Beste prijs",
    h1: "Goedkope hotels voor de 24 uur van Le Mans",
    intro: [
      "De raceweek is duur bij de baan, maar budgetketens en eenvoudige 2-sterrenhotels houden de tarieven redelijk, zeker als je de straal vergroot. Vroeg boeken met gratis annulering legt de laagste prijzen vast.",
      "Hieronder de voordelige verblijven die we rond Le Mans volgen, met live prijzen voor jouw data. Hoe verder weg, hoe meer je voor je geld krijgt.",
    ],
  },
  de: {
    title: "Günstige Hotels für die 24 Stunden von Le Mans",
    metaDescription:
      "Die günstigsten Hotels für die 24 Stunden von Le Mans: Budgetketten und 2-Sterne-Häuser nahe der Strecke und in der Region. Live-Preise zu den Rennterminen vergleichen.",
    kicker: "Bestes Preis-Leistungs-Verhältnis",
    h1: "Günstige Hotels für die 24 Stunden von Le Mans",
    intro: [
      "Die Rennwoche ist nahe der Strecke teuer, aber Budgetketten und einfache 2-Sterne-Hotels halten die Preise vernünftig, vor allem wenn Sie den Radius vergrößern. Früh mit kostenloser Stornierung buchen sichert die niedrigsten Preise.",
      "Unten die preiswerten Unterkünfte, die wir rund um Le Mans verfolgen, mit Live-Preisen zu Ihren Daten. Je weiter draußen, desto mehr bekommen Sie fürs Geld.",
    ],
  },
  it: {
    title: "Hotel economici per la 24 Ore di Le Mans",
    metaDescription:
      "Gli hotel più economici per la 24 Ore di Le Mans: catene low cost e 2 stelle vicino al circuito e in regione. Confronta i prezzi in tempo reale alle date di gara.",
    kicker: "Miglior rapporto qualità-prezzo",
    h1: "Hotel economici per la 24 Ore di Le Mans",
    intro: [
      "La settimana di gara è cara vicino alla pista, ma le catene low cost e i 2 stelle mantengono tariffe ragionevoli, soprattutto allargando il raggio. Prenotare presto con cancellazione gratuita blocca i prezzi più bassi.",
      "Sotto gli alloggi economici che seguiamo intorno a Le Mans, con prezzi in tempo reale alle tue date. Più ti sistemi lontano, più rende il budget.",
    ],
  },
  es: {
    title: "Hoteles baratos para las 24 Horas de Le Mans",
    metaDescription:
      "Los hoteles más baratos para las 24 Horas de Le Mans: cadenas económicas y 2 estrellas cerca del circuito y por la región. Compara precios en directo para las fechas.",
    kicker: "La mejor relación calidad-precio",
    h1: "Hoteles baratos para las 24 Horas de Le Mans",
    intro: [
      "La semana de carrera es cara cerca de la pista, pero las cadenas económicas y los 2 estrellas mantienen precios sensatos, sobre todo al ampliar el radio. Reservar pronto con cancelación gratuita fija los precios más bajos.",
      "Debajo, los alojamientos económicos que seguimos alrededor de Le Mans, con precios en directo para tus fechas. Cuanto más lejos te alojes, más cunde tu presupuesto.",
    ],
  },
};

const parking: L = {
  en: {
    title: "Le Mans hotels with parking for race week",
    metaDescription:
      "Hotels with easy or free parking for the 24 Hours of Le Mans, so you skip the race-week parking chaos. Compare stays with parking by drive time and live price.",
    kicker: "Park stress-free",
    h1: "Le Mans hotels with parking",
    intro: [
      "If you arrive by car, van or with a trailer, parking is the make-or-break detail of race week. The stays below either offer their own parking or sit in zones where parking stays easy even on race days.",
      "Park once, leave the car, and ride the tram or a short drive to the gates. Compare live prices for the race dates below.",
    ],
  },
  fr: {
    title: "Hôtels avec parking au Mans pour la semaine de course",
    metaDescription:
      "Hôtels avec parking facile ou gratuit pour les 24 Heures du Mans, pour éviter le chaos du stationnement. Comparez les hébergements avec parking au temps de trajet et au prix en direct.",
    kicker: "Se garer sans stress",
    h1: "Hôtels avec parking au Mans",
    intro: [
      "Si vous venez en voiture, en van ou avec une remorque, le stationnement est LE détail décisif de la semaine de course. Les hébergements ci-dessous offrent leur propre parking ou se trouvent dans des zones où se garer reste facile même les jours de course.",
      "On se gare une fois, on laisse la voiture, et on rejoint les entrées en tram ou en quelques minutes. Comparez les prix en direct aux dates de course ci-dessous.",
    ],
  },
  nl: {
    title: "Hotels met parkeren in Le Mans voor de raceweek",
    metaDescription:
      "Hotels met makkelijk of gratis parkeren voor de 24 uur van Le Mans, zo vermijd je de parkeerchaos. Vergelijk verblijven met parkeren op rijtijd en live prijs.",
    kicker: "Parkeer zonder stress",
    h1: "Hotels met parkeren in Le Mans",
    intro: [
      "Wie met de auto, bus of aanhanger komt, weet: parkeren is het beslissende detail van de raceweek. De verblijven hieronder bieden eigen parkeerruimte of liggen in zones waar parkeren ook op racedagen makkelijk blijft.",
      "Eén keer parkeren, auto laten staan, en met de tram of een korte rit naar de poorten. Vergelijk live prijzen voor de racedata hieronder.",
    ],
  },
  de: {
    title: "Hotels mit Parkplatz in Le Mans für die Rennwoche",
    metaDescription:
      "Hotels mit einfachem oder kostenlosem Parkplatz für die 24 Stunden von Le Mans, um das Parkchaos zu umgehen. Unterkünfte mit Parkplatz nach Fahrzeit und Live-Preis vergleichen.",
    kicker: "Stressfrei parken",
    h1: "Hotels mit Parkplatz in Le Mans",
    intro: [
      "Wer mit Auto, Van oder Anhänger anreist, weiß: Parken ist das entscheidende Detail der Rennwoche. Die Unterkünfte unten bieten eigene Parkplätze oder liegen in Zonen, wo Parken auch an Renntagen einfach bleibt.",
      "Einmal parken, das Auto stehen lassen und per Tram oder kurzer Fahrt zu den Toren. Vergleichen Sie unten die Live-Preise zu den Rennterminen.",
    ],
  },
  it: {
    title: "Hotel con parcheggio a Le Mans per la settimana di gara",
    metaDescription:
      "Hotel con parcheggio facile o gratuito per la 24 Ore di Le Mans, per evitare il caos del parcheggio. Confronta gli alloggi con parcheggio per tempo di guida e prezzo live.",
    kicker: "Parcheggia senza stress",
    h1: "Hotel con parcheggio a Le Mans",
    intro: [
      "Se arrivi in auto, furgone o con un rimorchio, il parcheggio è il dettaglio decisivo della settimana di gara. Gli alloggi qui sotto offrono parcheggio proprio o si trovano in zone dove parcheggiare resta facile anche nei giorni di gara.",
      "Parcheggi una volta, lasci l'auto e raggiungi i cancelli in tram o con un breve tragitto. Confronta i prezzi in tempo reale alle date di gara qui sotto.",
    ],
  },
  es: {
    title: "Hoteles con parking en Le Mans para la semana de carrera",
    metaDescription:
      "Hoteles con aparcamiento fácil o gratuito para las 24 Horas de Le Mans, para evitar el caos del aparcamiento. Compara alojamientos con parking por trayecto y precio en directo.",
    kicker: "Aparca sin estrés",
    h1: "Hoteles con parking en Le Mans",
    intro: [
      "Si llegas en coche, furgoneta o con remolque, el aparcamiento es el detalle decisivo de la semana de carrera. Los alojamientos de abajo ofrecen su propio parking o están en zonas donde aparcar sigue siendo fácil incluso los días de carrera.",
      "Aparcas una vez, dejas el coche y llegas a las puertas en tranvía o con un trayecto corto. Compara los precios en directo para las fechas de carrera abajo.",
    ],
  },
};

const station: L = {
  en: {
    title: "Hotels near Le Mans station: arrive by TGV, skip the car",
    metaDescription:
      "Hotels near Le Mans train station for race week: arrive by TGV from Paris in an hour, then tram to the circuit. Compare station-side stays and live prices.",
    kicker: "Arrive by train",
    h1: "Hotels near Le Mans station",
    intro: [
      "Le Mans is a one-hour TGV from Paris, and the tram runs from the station towards the circuit. Staying near the station means no car, no parking, and a short ride to the gates on race days.",
      "Below are the station-side stays we track, with live prices for the race dates. Ideal if you are coming by train or flying into Paris.",
    ],
  },
  fr: {
    title: "Hôtels près de la gare du Mans : venez en TGV",
    metaDescription:
      "Hôtels près de la gare du Mans pour la semaine de course : TGV depuis Paris en une heure, puis tram vers le circuit. Comparez les hébergements côté gare et les prix en direct.",
    kicker: "Venez en train",
    h1: "Hôtels près de la gare du Mans",
    intro: [
      "Le Mans est à une heure de TGV de Paris, et le tram relie la gare au circuit. Dormir près de la gare, c'est zéro voiture, zéro parking, et un court trajet vers les entrées les jours de course.",
      "Voici les hébergements côté gare que nous suivons, avec prix en direct aux dates de course. Idéal si vous venez en train ou atterrissez à Paris.",
    ],
  },
  nl: {
    title: "Hotels bij station Le Mans: kom met de TGV",
    metaDescription:
      "Hotels bij het treinstation van Le Mans voor de raceweek: met de TGV in een uur vanuit Parijs, dan de tram naar het circuit. Vergelijk verblijven bij het station en live prijzen.",
    kicker: "Kom met de trein",
    h1: "Hotels bij het station van Le Mans",
    intro: [
      "Le Mans ligt op een uur TGV van Parijs, en de tram rijdt van het station richting circuit. Bij het station slapen betekent geen auto, geen parkeren en een korte rit naar de poorten op racedagen.",
      "Hieronder de verblijven bij het station die we volgen, met live prijzen voor de racedata. Ideaal als je met de trein komt of in Parijs landt.",
    ],
  },
  de: {
    title: "Hotels nahe Bahnhof Le Mans: Anreise per TGV",
    metaDescription:
      "Hotels nahe dem Bahnhof Le Mans für die Rennwoche: per TGV in einer Stunde aus Paris, dann Tram zur Strecke. Bahnhofsnahe Unterkünfte und Live-Preise vergleichen.",
    kicker: "Anreise per Zug",
    h1: "Hotels nahe dem Bahnhof Le Mans",
    intro: [
      "Le Mans ist eine TGV-Stunde von Paris entfernt, und die Tram fährt vom Bahnhof Richtung Strecke. Am Bahnhof zu übernachten heißt: kein Auto, kein Parken und eine kurze Fahrt zu den Toren an Renntagen.",
      "Unten die bahnhofsnahen Unterkünfte, die wir verfolgen, mit Live-Preisen zu den Rennterminen. Ideal bei Anreise per Zug oder Flug nach Paris.",
    ],
  },
  it: {
    title: "Hotel vicino alla stazione di Le Mans: arriva in TGV",
    metaDescription:
      "Hotel vicino alla stazione di Le Mans per la settimana di gara: TGV da Parigi in un'ora, poi tram verso il circuito. Confronta gli alloggi vicino alla stazione e i prezzi live.",
    kicker: "Arriva in treno",
    h1: "Hotel vicino alla stazione di Le Mans",
    intro: [
      "Le Mans è a un'ora di TGV da Parigi, e il tram collega la stazione al circuito. Dormire vicino alla stazione significa niente auto, niente parcheggio e un breve tragitto ai cancelli nei giorni di gara.",
      "Sotto gli alloggi vicino alla stazione che seguiamo, con prezzi in tempo reale alle date di gara. Ideale se arrivi in treno o atterri a Parigi.",
    ],
  },
  es: {
    title: "Hoteles cerca de la estación de Le Mans: llega en TGV",
    metaDescription:
      "Hoteles cerca de la estación de Le Mans para la semana de carrera: TGV desde París en una hora y tranvía al circuito. Compara alojamientos junto a la estación y precios en directo.",
    kicker: "Llega en tren",
    h1: "Hoteles cerca de la estación de Le Mans",
    intro: [
      "Le Mans está a una hora de TGV de París, y el tranvía une la estación con el circuito. Dormir cerca de la estación significa sin coche, sin aparcamiento y un trayecto corto a las puertas los días de carrera.",
      "Debajo, los alojamientos junto a la estación que seguimos, con precios en directo para las fechas de carrera. Ideal si vienes en tren o aterrizas en París.",
    ],
  },
};

const groups: L = {
  en: {
    title: "Group accommodation for the 24 Hours of Le Mans",
    metaDescription:
      "Stays for groups at the 24 Hours of Le Mans: big hotels, rental houses and group-friendly campsites that keep your party together. Compare live prices for the race dates.",
    kicker: "Keep the crew together",
    h1: "Group accommodation for the 24 Hours of Le Mans",
    intro: [
      "Coming with a group means you want beds for everyone, parking and a base you don't have to split. Larger hotels, whole-house rentals and group-friendly campsites are the answer.",
      "Below are the bigger and group-ready stays we track around Le Mans, with live prices for your dates. Book early, the best group options go first.",
    ],
  },
  fr: {
    title: "Hébergement groupe pour les 24 Heures du Mans",
    metaDescription:
      "Hébergements pour groupes aux 24 Heures du Mans : grands hôtels, maisons en location et campings adaptés aux groupes. Comparez les prix en direct aux dates de course.",
    kicker: "Toute l'équipe ensemble",
    h1: "Hébergement groupe pour les 24 Heures du Mans",
    intro: [
      "Venir en groupe, c'est vouloir des lits pour tous, un parking et un camp de base qu'on n'a pas à diviser. Grands hôtels, maisons entières et campings adaptés aux groupes sont la solution.",
      "Voici les hébergements les plus grands et les plus adaptés aux groupes autour du Mans, avec prix en direct à vos dates. Réservez tôt, les meilleures options groupe partent en premier.",
    ],
  },
  nl: {
    title: "Groepsaccommodatie voor de 24 uur van Le Mans",
    metaDescription:
      "Verblijven voor groepen bij de 24 uur van Le Mans: grote hotels, huurhuizen en groepsvriendelijke campings die je gezelschap bij elkaar houden. Vergelijk live prijzen.",
    kicker: "Houd de groep bij elkaar",
    h1: "Groepsaccommodatie voor de 24 uur van Le Mans",
    intro: [
      "Met een groep komen betekent bedden voor iedereen, parkeerruimte en een basis die je niet hoeft op te splitsen. Grotere hotels, hele huurhuizen en groepsvriendelijke campings zijn het antwoord.",
      "Hieronder de grotere en groepsklare verblijven die we rond Le Mans volgen, met live prijzen voor jouw data. Boek vroeg, de beste groepsopties gaan eerst.",
    ],
  },
  de: {
    title: "Gruppenunterkunft für die 24 Stunden von Le Mans",
    metaDescription:
      "Unterkünfte für Gruppen bei den 24 Stunden von Le Mans: große Hotels, Ferienhäuser und gruppenfreundliche Campingplätze, die Ihre Gruppe zusammenhalten. Live-Preise vergleichen.",
    kicker: "Die Truppe zusammenhalten",
    h1: "Gruppenunterkunft für die 24 Stunden von Le Mans",
    intro: [
      "Mit einer Gruppe anzureisen heißt: Betten für alle, Parkplatz und eine Basis, die man nicht aufteilen muss. Größere Hotels, ganze Ferienhäuser und gruppenfreundliche Campingplätze sind die Antwort.",
      "Unten die größeren und gruppentauglichen Unterkünfte, die wir rund um Le Mans verfolgen, mit Live-Preisen zu Ihren Daten. Früh buchen, die besten Gruppenoptionen gehen zuerst.",
    ],
  },
  it: {
    title: "Alloggi per gruppi per la 24 Ore di Le Mans",
    metaDescription:
      "Alloggi per gruppi alla 24 Ore di Le Mans: grandi hotel, case in affitto e campeggi adatti ai gruppi che tengono insieme la comitiva. Confronta i prezzi in tempo reale.",
    kicker: "Tutto il gruppo insieme",
    h1: "Alloggi per gruppi per la 24 Ore di Le Mans",
    intro: [
      "Venire in gruppo significa volere letti per tutti, parcheggio e una base da non dover dividere. Hotel più grandi, case intere e campeggi adatti ai gruppi sono la soluzione.",
      "Sotto gli alloggi più grandi e pronti per i gruppi che seguiamo intorno a Le Mans, con prezzi in tempo reale alle tue date. Prenota presto, le migliori opzioni gruppo finiscono prima.",
    ],
  },
  es: {
    title: "Alojamiento para grupos en las 24 Horas de Le Mans",
    metaDescription:
      "Alojamientos para grupos en las 24 Horas de Le Mans: hoteles grandes, casas de alquiler y campings para grupos que mantienen unida a la cuadrilla. Compara precios en directo.",
    kicker: "Mantén a la cuadrilla unida",
    h1: "Alojamiento para grupos en las 24 Horas de Le Mans",
    intro: [
      "Venir en grupo significa querer camas para todos, aparcamiento y una base que no haya que dividir. Hoteles más grandes, casas enteras y campings para grupos son la respuesta.",
      "Debajo, los alojamientos más grandes y preparados para grupos que seguimos alrededor de Le Mans, con precios en directo para tus fechas. Reserva pronto, las mejores opciones de grupo vuelan.",
    ],
  },
};

const circuitVsCentre: L = {
  en: {
    title: "Stay at the circuit or in Le Mans city centre?",
    metaDescription:
      "Circuit area or Le Mans city centre for the 24 Hours? Compare the two on drive time, parking, tram access and stays, then book the base that fits your race.",
    kicker: "The big decision",
    h1: "Stay at the circuit or in Le Mans city centre?",
    intro: [
      "It is the question every first-timer asks: sleep right at the track, or in town? The circuit area puts you on the doorstep but with tight parking and small inventory; the city centre offers more rooms, restaurants and the tram to the gates.",
      "Below we compare both on real numbers, then list stays in each so you can book the base that fits how you want to do the race.",
    ],
  },
  fr: {
    title: "Dormir au circuit ou au Mans centre-ville ?",
    metaDescription:
      "Autour du circuit ou au Mans centre pour les 24 Heures ? On compare les deux : temps de trajet, parking, tram et hébergements. Réservez le camp de base qui colle à votre course.",
    kicker: "Le grand choix",
    h1: "Dormir au circuit ou au Mans centre-ville ?",
    intro: [
      "C'est la question de tout primo-arrivant : dormir collé à la piste, ou en ville ? Autour du circuit, on est sur le pas de la porte mais avec un parking tendu et peu d'offre ; le centre-ville offre plus de chambres, des restaurants et le tram vers les entrées.",
      "Ci-dessous, on compare les deux sur des chiffres réels, puis on liste les hébergements de chaque zone pour réserver le camp de base qui colle à votre façon de vivre la course.",
    ],
  },
  nl: {
    title: "Slapen bij het circuit of in het centrum van Le Mans?",
    metaDescription:
      "Circuitgebied of het centrum van Le Mans voor de 24 uur? Vergelijk beide op rijtijd, parkeren, tram en verblijven, en boek de basis die bij jouw race past.",
    kicker: "De grote keuze",
    h1: "Bij het circuit of in het centrum van Le Mans slapen?",
    intro: [
      "Het is de vraag van elke nieuwkomer: pal bij de baan slapen, of in de stad? Het circuitgebied zet je op de drempel maar met krap parkeren en weinig aanbod; het centrum biedt meer kamers, restaurants en de tram naar de poorten.",
      "Hieronder vergelijken we beide op echte cijfers en sommen we de verblijven per zone op, zodat je de basis boekt die past bij hoe jij de race wilt beleven.",
    ],
  },
  de: {
    title: "An der Strecke oder im Zentrum von Le Mans übernachten?",
    metaDescription:
      "Streckengelände oder Zentrum von Le Mans für die 24 Stunden? Vergleichen Sie beide nach Fahrzeit, Parken, Tram und Unterkünften und buchen Sie die passende Basis.",
    kicker: "Die große Entscheidung",
    h1: "An der Strecke oder im Zentrum von Le Mans?",
    intro: [
      "Es ist die Frage jedes Neulings: direkt an der Strecke schlafen oder in der Stadt? Das Streckengelände setzt Sie auf die Schwelle, aber mit knappem Parken und kleinem Angebot; das Zentrum bietet mehr Zimmer, Restaurants und die Tram zu den Toren.",
      "Unten vergleichen wir beide nach echten Zahlen und listen die Unterkünfte je Zone, damit Sie die Basis buchen, die zu Ihrem Rennen passt.",
    ],
  },
  it: {
    title: "Dormire al circuito o nel centro di Le Mans?",
    metaDescription:
      "Area del circuito o centro di Le Mans per la 24 Ore? Confronta le due su tempo di guida, parcheggio, tram e alloggi, e prenota la base giusta per la tua gara.",
    kicker: "La grande scelta",
    h1: "Dormire al circuito o nel centro di Le Mans?",
    intro: [
      "È la domanda di ogni esordiente: dormire attaccati alla pista o in città? L'area del circuito ti mette sull'uscio ma con parcheggio stretto e poca offerta; il centro offre più camere, ristoranti e il tram ai cancelli.",
      "Sotto confrontiamo le due su numeri reali e elenchiamo gli alloggi di ciascuna, così prenoti la base adatta a come vuoi vivere la gara.",
    ],
  },
  es: {
    title: "¿Dormir en el circuito o en el centro de Le Mans?",
    metaDescription:
      "¿Zona del circuito o centro de Le Mans para las 24 Horas? Compara ambas por trayecto, aparcamiento, tranvía y alojamientos, y reserva la base que encaje con tu carrera.",
    kicker: "La gran decisión",
    h1: "¿Dormir en el circuito o en el centro de Le Mans?",
    intro: [
      "Es la pregunta de todo novato: ¿dormir pegado a la pista o en la ciudad? La zona del circuito te pone en la puerta pero con aparcamiento ajustado y poca oferta; el centro ofrece más habitaciones, restaurantes y el tranvía a las puertas.",
      "Debajo comparamos ambas con números reales y listamos los alojamientos de cada una, para que reserves la base que encaje con cómo quieres vivir la carrera.",
    ],
  },
};

const centreVsTours: L = {
  en: {
    title: "Le Mans or Tours for the 24 Hours? Where to stay",
    metaDescription:
      "Le Mans city centre or Tours for the 24 Hours? Stay close and pricey, or in a real city an hour out at normal rates. Compare drive time, stays and live prices.",
    kicker: "Close vs cheap",
    h1: "Le Mans or Tours for the 24 Hours?",
    intro: [
      "When Le Mans fills up, Tours is the classic fallback: a real city about an hour from the circuit, with thousands of rooms at normal rates and a train link. The trade-off is the morning drive.",
      "Below we compare both bases on drive time and inventory, and list stays in each, so you can weigh staying close against staying cheap.",
    ],
  },
  fr: {
    title: "Le Mans ou Tours pour les 24 Heures ? Où dormir",
    metaDescription:
      "Le Mans centre ou Tours pour les 24 Heures ? Près et cher, ou une vraie ville à une heure à prix normal. Comparez temps de trajet, hébergements et prix en direct.",
    kicker: "Proche ou pas cher",
    h1: "Le Mans ou Tours pour les 24 Heures ?",
    intro: [
      "Quand Le Mans est plein, Tours est le repli classique : une vraie ville à environ une heure du circuit, avec des milliers de chambres à prix normal et une liaison train. La contrepartie, c'est le trajet du matin.",
      "Ci-dessous, on compare les deux camps de base sur le temps de trajet et l'offre, et on liste les hébergements de chaque ville pour arbitrer entre rester près et rester pas cher.",
    ],
  },
  nl: {
    title: "Le Mans of Tours voor de 24 uur? Waar overnachten",
    metaDescription:
      "Centrum van Le Mans of Tours voor de 24 uur? Dichtbij en duur, of een echte stad op een uur tegen normale tarieven. Vergelijk rijtijd, verblijven en live prijzen.",
    kicker: "Dichtbij of goedkoop",
    h1: "Le Mans of Tours voor de 24 uur?",
    intro: [
      "Als Le Mans vol is, is Tours de klassieke uitwijk: een echte stad op zo'n uur van het circuit, met duizenden kamers tegen normale tarieven en een treinverbinding. De keerzijde is de ochtendrit.",
      "Hieronder vergelijken we beide bases op rijtijd en aanbod en sommen we de verblijven per stad op, zodat je dichtbij blijven kunt afwegen tegen goedkoop blijven.",
    ],
  },
  de: {
    title: "Le Mans oder Tours für die 24 Stunden? Wo übernachten",
    metaDescription:
      "Zentrum von Le Mans oder Tours für die 24 Stunden? Nah und teuer oder eine echte Stadt eine Stunde entfernt zu normalen Preisen. Fahrzeit, Unterkünfte und Live-Preise vergleichen.",
    kicker: "Nah oder günstig",
    h1: "Le Mans oder Tours für die 24 Stunden?",
    intro: [
      "Wenn Le Mans voll ist, ist Tours der klassische Ausweich: eine echte Stadt rund eine Stunde von der Strecke, mit Tausenden Zimmern zu normalen Preisen und Bahnanbindung. Der Preis dafür ist die Morgenfahrt.",
      "Unten vergleichen wir beide Basen nach Fahrzeit und Angebot und listen die Unterkünfte je Stadt, damit Sie nah bleiben gegen günstig bleiben abwägen können.",
    ],
  },
  it: {
    title: "Le Mans o Tours per la 24 Ore? Dove dormire",
    metaDescription:
      "Centro di Le Mans o Tours per la 24 Ore? Vicino e caro, o una vera città a un'ora a prezzi normali. Confronta tempo di guida, alloggi e prezzi in tempo reale.",
    kicker: "Vicino o economico",
    h1: "Le Mans o Tours per la 24 Ore?",
    intro: [
      "Quando Le Mans è pieno, Tours è il ripiego classico: una vera città a circa un'ora dal circuito, con migliaia di camere a prezzi normali e un collegamento ferroviario. Il prezzo da pagare è il tragitto del mattino.",
      "Sotto confrontiamo le due basi su tempo di guida e offerta ed elenchiamo gli alloggi di ciascuna città, così bilanci stare vicino contro stare economico.",
    ],
  },
  es: {
    title: "¿Le Mans o Tours para las 24 Horas? Dónde dormir",
    metaDescription:
      "¿Centro de Le Mans o Tours para las 24 Horas? Cerca y caro, o una ciudad de verdad a una hora a precios normales. Compara trayecto, alojamientos y precios en directo.",
    kicker: "Cerca o barato",
    h1: "¿Le Mans o Tours para las 24 Horas?",
    intro: [
      "Cuando Le Mans se llena, Tours es el recurso clásico: una ciudad de verdad a una hora del circuito, con miles de habitaciones a precios normales y conexión de tren. La contrapartida es el trayecto de la mañana.",
      "Debajo comparamos ambas bases por trayecto y oferta y listamos los alojamientos de cada ciudad, para que sopeses quedarte cerca frente a quedarte barato.",
    ],
  },
};

const fromUk: L = {
  en: {
    title: "Le Mans 24 Hours from the UK: ferry routes & where to stay",
    metaDescription:
      "Getting to the 24 Hours of Le Mans from the UK: ferry and tunnel routes, the drive down, and where to stay once you arrive. Compare stays and live prices.",
    kicker: "From the UK",
    h1: "Le Mans 24 Hours from the UK",
    intro: [
      "The British are the biggest overseas crowd at Le Mans, and most come by ferry or tunnel and drive down. The right crossing depends on where you start and whether you want to break the journey.",
      "Below: the main routes, then where to stay once you arrive, with live prices for the race dates around the circuit.",
    ],
    section: {
      heading: "Ferry and tunnel routes to Le Mans",
      paragraphs: [
        "From the south of England the shortest drive on the French side is via the western ferries; the Dover-Calais tunnel is faster to board but a longer drive down. Pick the one that puts you on the road you prefer.",
      ],
      list: [
        "Portsmouth → Caen or Le Havre: shortest drive to Le Mans (~2h30 from Caen), the regulars' favourite.",
        "Portsmouth → St Malo: scenic, slightly longer drive (~2h30-3h).",
        "Dover → Calais (ferry or tunnel): cheapest crossing, but ~4h30 drive south to Le Mans.",
        "Newhaven → Dieppe: handy from the south-east, ~3h30 drive.",
      ],
    },
  },
  fr: {
    title: "Les 24 Heures du Mans depuis le Royaume-Uni : ferry et hébergement",
    metaDescription:
      "Aller aux 24 Heures du Mans depuis le Royaume-Uni : traversées ferry et tunnel, la route, et où dormir une fois arrivé. Comparez les hébergements et les prix en direct.",
    kicker: "Depuis le Royaume-Uni",
    h1: "Les 24 Heures du Mans depuis le Royaume-Uni",
    intro: [
      "Les Britanniques sont le premier contingent étranger au Mans, et la plupart viennent en ferry ou par le tunnel puis descendent en voiture. La bonne traversée dépend de votre point de départ et de votre envie de couper le trajet.",
      "Ci-dessous : les principales routes, puis où dormir une fois arrivé, avec prix en direct aux dates de course autour du circuit.",
    ],
    section: {
      heading: "Traversées ferry et tunnel vers Le Mans",
      paragraphs: [
        "Depuis le sud de l'Angleterre, la route la plus courte côté français passe par les ferries de l'ouest ; le tunnel Douvres-Calais embarque plus vite mais descend plus longtemps. Choisissez celle qui vous met sur la route que vous préférez.",
      ],
      list: [
        "Portsmouth → Caen ou Le Havre : route la plus courte vers Le Mans (~2h30 depuis Caen), la préférée des habitués.",
        "Portsmouth → Saint-Malo : plus pittoresque, route un peu plus longue (~2h30-3h).",
        "Douvres → Calais (ferry ou tunnel) : traversée la moins chère, mais ~4h30 de route vers Le Mans.",
        "Newhaven → Dieppe : pratique depuis le sud-est, ~3h30 de route.",
      ],
    },
  },
  nl: {
    title: "De 24 uur van Le Mans vanuit het VK: ferry en overnachten",
    metaDescription:
      "Naar de 24 uur van Le Mans vanuit het VK: ferry- en tunnelroutes, de rit naar het zuiden en waar te overnachten. Vergelijk verblijven en live prijzen.",
    kicker: "Vanuit het VK",
    h1: "De 24 uur van Le Mans vanuit het VK",
    intro: [
      "De Britten zijn de grootste buitenlandse menigte in Le Mans, en de meesten komen met de ferry of tunnel en rijden naar het zuiden. De juiste oversteek hangt af van je startpunt en of je de reis wilt opdelen.",
      "Hieronder: de belangrijkste routes, daarna waar te overnachten na aankomst, met live prijzen voor de racedata rond het circuit.",
    ],
    section: {
      heading: "Ferry- en tunnelroutes naar Le Mans",
      paragraphs: [
        "Vanuit het zuiden van Engeland is de kortste rit aan Franse kant via de westelijke ferry's; de tunnel Dover-Calais boardt sneller maar rijdt langer. Kies de route die je op de gewenste weg zet.",
      ],
      list: [
        "Portsmouth → Caen of Le Havre: kortste rit naar Le Mans (~2u30 vanaf Caen), favoriet van de vaste bezoekers.",
        "Portsmouth → St Malo: schilderachtig, iets langere rit (~2u30-3u).",
        "Dover → Calais (ferry of tunnel): goedkoopste oversteek, maar ~4u30 rijden naar het zuiden.",
        "Newhaven → Dieppe: handig vanuit het zuidoosten, ~3u30 rijden.",
      ],
    },
  },
  de: {
    title: "Die 24 Stunden von Le Mans aus Großbritannien: Fähre & Unterkunft",
    metaDescription:
      "Anreise zu den 24 Stunden von Le Mans aus Großbritannien: Fähr- und Tunnelrouten, die Fahrt und wo man übernachtet. Unterkünfte und Live-Preise vergleichen.",
    kicker: "Aus Großbritannien",
    h1: "Die 24 Stunden von Le Mans aus Großbritannien",
    intro: [
      "Die Briten sind die größte ausländische Menge in Le Mans, und die meisten kommen per Fähre oder Tunnel und fahren nach Süden. Die richtige Überfahrt hängt vom Startpunkt ab und davon, ob Sie die Reise teilen wollen.",
      "Unten: die Hauptrouten, dann wo man nach der Ankunft übernachtet, mit Live-Preisen zu den Rennterminen rund um die Strecke.",
    ],
    section: {
      heading: "Fähr- und Tunnelrouten nach Le Mans",
      paragraphs: [
        "Aus Südengland ist die kürzeste Fahrt auf französischer Seite über die westlichen Fähren; der Tunnel Dover-Calais ist schneller an Bord, aber längere Fahrt nach Süden. Wählen Sie die Route, die Sie auf die bevorzugte Straße bringt.",
      ],
      list: [
        "Portsmouth → Caen oder Le Havre: kürzeste Fahrt nach Le Mans (~2,5 h ab Caen), Favorit der Stammgäste.",
        "Portsmouth → St Malo: landschaftlich schön, etwas längere Fahrt (~2,5-3 h).",
        "Dover → Calais (Fähre oder Tunnel): günstigste Überfahrt, aber ~4,5 h Fahrt nach Süden.",
        "Newhaven → Dieppe: praktisch aus dem Südosten, ~3,5 h Fahrt.",
      ],
    },
  },
  it: {
    title: "La 24 Ore di Le Mans dal Regno Unito: traghetti e alloggi",
    metaDescription:
      "Arrivare alla 24 Ore di Le Mans dal Regno Unito: rotte traghetto e tunnel, il viaggio in auto e dove dormire all'arrivo. Confronta alloggi e prezzi in tempo reale.",
    kicker: "Dal Regno Unito",
    h1: "La 24 Ore di Le Mans dal Regno Unito",
    intro: [
      "I britannici sono la più grande folla straniera a Le Mans, e la maggior parte arriva in traghetto o tunnel e scende in auto. La traversata giusta dipende da dove parti e se vuoi spezzare il viaggio.",
      "Sotto: le rotte principali, poi dove dormire all'arrivo, con prezzi in tempo reale alle date di gara intorno al circuito.",
    ],
    section: {
      heading: "Rotte traghetto e tunnel verso Le Mans",
      paragraphs: [
        "Dal sud dell'Inghilterra il tragitto più corto sul lato francese passa per i traghetti occidentali; il tunnel Dover-Calais imbarca prima ma scende più a lungo. Scegli la rotta che ti mette sulla strada che preferisci.",
      ],
      list: [
        "Portsmouth → Caen o Le Havre: tragitto più corto verso Le Mans (~2h30 da Caen), il preferito degli habitué.",
        "Portsmouth → St Malo: panoramico, tragitto un po' più lungo (~2h30-3h).",
        "Dover → Calais (traghetto o tunnel): traversata più economica, ma ~4h30 di guida a sud.",
        "Newhaven → Dieppe: comodo dal sud-est, ~3h30 di guida.",
      ],
    },
  },
  es: {
    title: "Las 24 Horas de Le Mans desde Reino Unido: ferry y alojamiento",
    metaDescription:
      "Llegar a las 24 Horas de Le Mans desde Reino Unido: rutas de ferry y túnel, el viaje en coche y dónde alojarse al llegar. Compara alojamientos y precios en directo.",
    kicker: "Desde Reino Unido",
    h1: "Las 24 Horas de Le Mans desde Reino Unido",
    intro: [
      "Los británicos son la mayor multitud extranjera en Le Mans, y la mayoría llega en ferry o túnel y baja en coche. La travesía adecuada depende de tu punto de partida y de si quieres partir el viaje.",
      "Debajo: las rutas principales y dónde alojarse al llegar, con precios en directo para las fechas de carrera alrededor del circuito.",
    ],
    section: {
      heading: "Rutas de ferry y túnel a Le Mans",
      paragraphs: [
        "Desde el sur de Inglaterra, el trayecto más corto en el lado francés es por los ferries del oeste; el túnel Dover-Calais embarca antes pero baja más tiempo. Elige la que te ponga en la carretera que prefieres.",
      ],
      list: [
        "Portsmouth → Caen o Le Havre: trayecto más corto a Le Mans (~2h30 desde Caen), el favorito de los habituales.",
        "Portsmouth → St Malo: pintoresco, trayecto algo más largo (~2h30-3h).",
        "Dover → Calais (ferry o túnel): travesía más barata, pero ~4h30 de coche al sur.",
        "Newhaven → Dieppe: práctico desde el sureste, ~3h30 de coche.",
      ],
    },
  },
};

const lastMinute: L = {
  en: {
    title: "Last-minute 24 Hours of Le Mans accommodation",
    metaDescription:
      "Le Mans sold out? Last-minute accommodation in the towns and cities 30 to 90 minutes out that keep rooms when the circuit is full. Compare live availability now.",
    kicker: "Plan B that works",
    h1: "Last-minute 24 Hours of Le Mans accommodation",
    intro: [
      "When everything near the circuit is gone, the region is not. Towns and cities 30 to 90 minutes out, La Flèche, Alençon, Laval, Tours and Angers, keep rooms much later, at normal prices.",
      "Below are the outer bases with the best late availability, with live prices for the race dates. Widen the radius and you will still sleep well.",
    ],
  },
  fr: {
    title: "Hébergement de dernière minute pour les 24 Heures du Mans",
    metaDescription:
      "Le Mans complet ? Hébergement de dernière minute dans les villes à 30-90 minutes qui gardent des chambres quand le circuit est plein. Comparez les disponibilités en direct.",
    kicker: "Le plan B qui marche",
    h1: "Hébergement de dernière minute pour les 24 Heures du Mans",
    intro: [
      "Quand tout est parti près du circuit, la région ne l'est pas. Les villes à 30-90 minutes, La Flèche, Alençon, Laval, Tours et Angers, gardent des chambres bien plus tard, à prix normal.",
      "Voici les camps de base extérieurs avec les meilleures disponibilités tardives, avec prix en direct aux dates de course. Élargissez le rayon et vous dormirez quand même bien.",
    ],
  },
  nl: {
    title: "Last-minute accommodatie voor de 24 uur van Le Mans",
    metaDescription:
      "Le Mans volgeboekt? Last-minute accommodatie in de plaatsen op 30 tot 90 minuten die kamers houden als het circuit vol is. Vergelijk nu de live beschikbaarheid.",
    kicker: "Plan B dat werkt",
    h1: "Last-minute accommodatie voor de 24 uur van Le Mans",
    intro: [
      "Als alles bij het circuit weg is, is de regio dat niet. Plaatsen op 30 tot 90 minuten, La Flèche, Alençon, Laval, Tours en Angers, houden veel langer kamers, tegen normale prijzen.",
      "Hieronder de buitenste bases met de beste late beschikbaarheid, met live prijzen voor de racedata. Vergroot de straal en je slaapt toch goed.",
    ],
  },
  de: {
    title: "Last-Minute-Unterkunft für die 24 Stunden von Le Mans",
    metaDescription:
      "Le Mans ausgebucht? Last-Minute-Unterkunft in den Orten 30 bis 90 Minuten entfernt, die Zimmer halten, wenn die Strecke voll ist. Live-Verfügbarkeit jetzt vergleichen.",
    kicker: "Plan B, der funktioniert",
    h1: "Last-Minute-Unterkunft für die 24 Stunden von Le Mans",
    intro: [
      "Wenn an der Strecke alles weg ist, ist es die Region nicht. Orte 30 bis 90 Minuten entfernt, La Flèche, Alençon, Laval, Tours und Angers, halten Zimmer viel länger, zu normalen Preisen.",
      "Unten die äußeren Basen mit der besten späten Verfügbarkeit, mit Live-Preisen zu den Rennterminen. Vergrößern Sie den Radius und Sie schlafen trotzdem gut.",
    ],
  },
  it: {
    title: "Alloggi last minute per la 24 Ore di Le Mans",
    metaDescription:
      "Le Mans esaurito? Alloggi last minute nelle città a 30-90 minuti che mantengono camere quando il circuito è pieno. Confronta ora la disponibilità in tempo reale.",
    kicker: "Il piano B che funziona",
    h1: "Alloggi last minute per la 24 Ore di Le Mans",
    intro: [
      "Quando tutto vicino al circuito è finito, la regione no. Le città a 30-90 minuti, La Flèche, Alençon, Laval, Tours e Angers, mantengono camere molto più a lungo, a prezzi normali.",
      "Sotto le basi esterne con la migliore disponibilità tardiva, con prezzi in tempo reale alle date di gara. Allarga il raggio e dormirai comunque bene.",
    ],
  },
  es: {
    title: "Alojamiento de última hora para las 24 Horas de Le Mans",
    metaDescription:
      "¿Le Mans agotado? Alojamiento de última hora en los pueblos y ciudades a 30-90 minutos que conservan habitaciones cuando el circuito está lleno. Compara la disponibilidad en directo.",
    kicker: "El plan B que funciona",
    h1: "Alojamiento de última hora para las 24 Horas de Le Mans",
    intro: [
      "Cuando todo lo cercano al circuito se agota, la región no. Las ciudades a 30-90 minutos, La Flèche, Alençon, Laval, Tours y Angers, conservan habitaciones mucho más tiempo, a precios normales.",
      "Debajo, las bases exteriores con la mejor disponibilidad tardía, con precios en directo para las fechas de carrera. Amplía el radio y dormirás bien igualmente.",
    ],
  },
};

const motogp: L = {
  en: {
    title: "Le Mans MotoGP: where to stay for the French GP",
    metaDescription:
      "Where to stay for the French MotoGP at Le Mans: hotels, camping and rentals near the circuit, compared by real drive time. Book early for the May race weekend.",
    kicker: "French Grand Prix",
    h1: "Le Mans MotoGP: where to stay",
    intro: [
      "The French MotoGP is the season's second big Le Mans weekend, drawing one of the largest crowds on the calendar. Riders camp, fans fill the hotels, and the closest beds go months ahead.",
      "Below are the best-placed stays for the MotoGP weekend, with live prices set to the race dates. Book early, then ride in past the traffic.",
    ],
  },
  fr: {
    title: "Le Mans MotoGP : où dormir pour le Grand Prix de France",
    metaDescription:
      "Où dormir pour le Grand Prix de France moto au Mans : hôtels, campings et locations près du circuit, comparés au temps de trajet réel. Réservez tôt pour le week-end de mai.",
    kicker: "Grand Prix de France",
    h1: "Le Mans MotoGP : où dormir",
    intro: [
      "Le Grand Prix de France moto est le deuxième grand week-end du Mans de la saison, avec l'une des plus grosses foules du calendrier. Les motards campent, les fans remplissent les hôtels, et les lits les plus proches partent des mois à l'avance.",
      "Voici les hébergements les mieux placés pour le week-end MotoGP, avec prix en direct réglés sur les dates de course. Réservez tôt, puis venez à moto en doublant le trafic.",
    ],
  },
  nl: {
    title: "Le Mans MotoGP: waar overnachten voor de Franse GP",
    metaDescription:
      "Waar overnachten voor de Franse MotoGP in Le Mans: hotels, camping en huizen bij het circuit, vergeleken op echte rijtijd. Boek vroeg voor het raceweekend in mei.",
    kicker: "Grand Prix van Frankrijk",
    h1: "Le Mans MotoGP: waar overnachten",
    intro: [
      "De Franse MotoGP is het tweede grote Le Mans-weekend van het seizoen, met een van de grootste menigtes van de kalender. Rijders kamperen, fans vullen de hotels, en de dichtstbijzijnde bedden gaan maanden vooruit.",
      "Hieronder de best gelegen verblijven voor het MotoGP-weekend, met live prijzen op de racedata. Boek vroeg en rijd langs de file naar binnen.",
    ],
  },
  de: {
    title: "Le Mans MotoGP: Unterkunft für den Großen Preis von Frankreich",
    metaDescription:
      "Wo übernachten beim MotoGP von Frankreich in Le Mans: Hotels, Camping und Ferienunterkünfte nahe der Strecke, nach echter Fahrzeit. Früh buchen für das Mai-Wochenende.",
    kicker: "Großer Preis von Frankreich",
    h1: "Le Mans MotoGP: Unterkunft",
    intro: [
      "Der MotoGP von Frankreich ist das zweite große Le-Mans-Wochenende der Saison, mit einer der größten Mengen im Kalender. Fahrer campen, Fans füllen die Hotels, und die nächsten Betten gehen Monate im Voraus.",
      "Unten die bestgelegenen Unterkünfte fürs MotoGP-Wochenende, mit Live-Preisen zu den Rennterminen. Früh buchen und dann auf dem Motorrad am Verkehr vorbei.",
    ],
  },
  it: {
    title: "Le Mans MotoGP: dove dormire per il GP di Francia",
    metaDescription:
      "Dove dormire per il MotoGP di Francia a Le Mans: hotel, campeggi e case vicino al circuito, confrontati per tempo di guida reale. Prenota presto per il weekend di maggio.",
    kicker: "Gran Premio di Francia",
    h1: "Le Mans MotoGP: dove dormire",
    intro: [
      "Il MotoGP di Francia è il secondo grande weekend di Le Mans della stagione, con una delle folle più numerose del calendario. I piloti campeggiano, i fan riempiono gli hotel, e i letti più vicini finiscono con mesi di anticipo.",
      "Sotto gli alloggi meglio posizionati per il weekend MotoGP, con prezzi in tempo reale sulle date di gara. Prenota presto, poi arriva in moto superando il traffico.",
    ],
  },
  es: {
    title: "Le Mans MotoGP: dónde dormir para el GP de Francia",
    metaDescription:
      "Dónde dormir para el MotoGP de Francia en Le Mans: hoteles, campings y casas cerca del circuito, comparados por tiempo real de trayecto. Reserva pronto para el fin de semana de mayo.",
    kicker: "Gran Premio de Francia",
    h1: "Le Mans MotoGP: dónde dormir",
    intro: [
      "El MotoGP de Francia es el segundo gran fin de semana de Le Mans de la temporada, con una de las mayores multitudes del calendario. Los pilotos acampan, los aficionados llenan los hoteles, y las camas más cercanas vuelan con meses de antelación.",
      "Debajo, los alojamientos mejor situados para el fin de semana de MotoGP, con precios en directo en las fechas de carrera. Reserva pronto y luego llega en moto adelantando el tráfico.",
    ],
  },
};

/** Localised content per lead page key. */
export const LEAD_CONTENT: Record<string, Record<Locale, LeadContent>> = {
  "near-circuit": nearCircuit,
  cheap,
  parking,
  station,
  groups,
  "circuit-vs-centre": circuitVsCentre,
  "centre-vs-tours": centreVsTours,
  "from-uk": fromUk,
  "last-minute": lastMinute,
  "motogp-stay": motogp,
};

export const leadContent = (
  key: string,
  locale: Locale
): LeadContent | undefined => LEAD_CONTENT[key]?.[locale];
