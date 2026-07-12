/**
 * Unique, data-driven content for the "Hotels near {circuit}" filter pages
 * (the pages that target the high-demand "hotels near {circuit}" queries):
 * a line naming the real closest hotels + a hotels-specific FAQ (closest,
 * walking distance, cheapest, when to book) that also feeds FAQPage schema.
 */
import type { Locale } from "@/lib/types";
import type { FaqItem } from "@/components/FaqBlock";

type HotelsCopy = {
  named: (c: string, list: string) => string;
  faq: (
    c: string,
    closest: string | undefined,
    closestMin: number | undefined,
    book: string
  ) => FaqItem[];
};

const near: Record<Locale, (name: string, min: number) => string> = {
  en: (n, m) => `, starting with ${n}, about ${m} minutes away`,
  fr: (n, m) => `, à commencer par ${n}, à environ ${m} minutes`,
  nl: (n, m) => `, te beginnen met ${n}, op zo'n ${m} minuten`,
  de: (n, m) => `, angefangen bei ${n}, etwa ${m} Minuten entfernt`,
  it: (n, m) => `, a partire da ${n}, a circa ${m} minuti`,
  es: (n, m) => `, empezando por ${n}, a unos ${m} minutos`,
};

export const HOTELS_CONTENT: Record<Locale, HotelsCopy> = {
  en: {
    named: (c, list) =>
      `Hotels near ${c} include ${list}, closest first. Open any on the map above for live prices and free cancellation.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Which hotels are closest to ${c}?`, a: `The closest hotels are within a few minutes of the circuit${closest ? near.en(closest, closestMin ?? 0) : ""}. They sell out first for race weekend, so book as soon as your dates are set.` },
      { q: `Are there hotels within walking distance of ${c}?`, a: `A few stays are within walking distance or a short shuttle of ${c}, but they are rare and go first. The nearby towns add plenty more hotels within a short drive.` },
      { q: `What's the cheapest way to stay near ${c}?`, a: `Guest houses, budget hotels and campsites in the surrounding towns offer the best value near ${c}. Book early with free cancellation and widen your search a few kilometres out for the best prices.` },
      { q: `When should I book a hotel for ${c}?`, a: `As early as you can. Hotels near ${c} typically sell out ${book} ahead and prices climb as the weekend nears, so reserve with free cancellation the moment dates are confirmed.` },
    ],
  },
  fr: {
    named: (c, list) =>
      `Les hôtels près de ${c} comprennent ${list}, les plus proches d'abord. Ouvrez-en un sur la carte ci-dessus pour les prix en direct et l'annulation gratuite.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Quels hôtels sont les plus proches de ${c} ?`, a: `Les hôtels les plus proches sont à quelques minutes du circuit${closest ? near.fr(closest, closestMin ?? 0) : ""}. Ils partent en premier pour le week-end de course, réservez dès que vos dates sont fixées.` },
      { q: `Y a-t-il des hôtels à distance de marche de ${c} ?`, a: `Quelques hébergements sont à distance de marche ou d'une courte navette de ${c}, mais ils sont rares et partent en premier. Les villes proches ajoutent bien plus d'hôtels à quelques minutes en voiture.` },
      { q: `Quelle est la façon la moins chère de dormir près de ${c} ?`, a: `Les chambres d'hôtes, hôtels économiques et campings des villes alentour offrent le meilleur rapport qualité-prix près de ${c}. Réservez tôt avec annulation gratuite et élargissez de quelques kilomètres pour les meilleurs prix.` },
      { q: `Quand réserver un hôtel pour ${c} ?`, a: `Le plus tôt possible. Les hôtels près de ${c} affichent en général complet ${book} à l'avance et les prix montent à l'approche du week-end : réservez avec annulation gratuite dès que les dates sont connues.` },
    ],
  },
  nl: {
    named: (c, list) =>
      `Hotels bij ${c} zijn onder meer ${list}, dichtstbij eerst. Open er een op de kaart hierboven voor live prijzen en gratis annulering.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Welke hotels liggen het dichtst bij ${c}?`, a: `De dichtstbijzijnde hotels liggen op een paar minuten van het circuit${closest ? near.nl(closest, closestMin ?? 0) : ""}. Ze zijn het eerst uitverkocht voor het raceweekend, dus boek zodra je data vaststaan.` },
      { q: `Zijn er hotels op loopafstand van ${c}?`, a: `Een paar accommodaties liggen op loopafstand of een korte shuttle van ${c}, maar ze zijn zeldzaam en gaan het eerst. De nabije plaatsen bieden veel meer hotels op korte rijafstand.` },
      { q: `Wat is de goedkoopste manier om bij ${c} te overnachten?`, a: `Pensions, budgethotels en campings in de omliggende plaatsen bieden de beste prijs bij ${c}. Boek vroeg met gratis annulering en verbreed je zoektocht een paar kilometer voor de beste prijzen.` },
      { q: `Wanneer moet ik een hotel voor ${c} boeken?`, a: `Zo vroeg mogelijk. Hotels bij ${c} zijn meestal ${book} van tevoren vol en de prijzen stijgen richting het weekend, dus reserveer met gratis annulering zodra de data vaststaan.` },
    ],
  },
  de: {
    named: (c, list) =>
      `Zu den Hotels nahe ${c} gehören ${list}, die nächsten zuerst. Öffne eines auf der Karte oben für Live-Preise und kostenlose Stornierung.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Welche Hotels sind am nächsten an ${c}?`, a: `Die nächsten Hotels liegen wenige Minuten von der Strecke${closest ? near.de(closest, closestMin ?? 0) : ""}. Sie sind fürs Rennwochenende zuerst ausgebucht, also buche, sobald deine Termine feststehen.` },
      { q: `Gibt es Hotels in Gehweite von ${c}?`, a: `Ein paar Unterkünfte liegen in Gehweite oder einer kurzen Shuttle-Fahrt von ${c}, sie sind aber selten und zuerst weg. Die nahen Orte bieten viele weitere Hotels in kurzer Fahrtzeit.` },
      { q: `Was ist die günstigste Art, nahe ${c} zu übernachten?`, a: `Pensionen, Budget-Hotels und Campingplätze in den umliegenden Orten bieten das beste Preis-Leistungs-Verhältnis nahe ${c}. Buche früh mit kostenloser Stornierung und weite die Suche ein paar Kilometer aus.` },
      { q: `Wann sollte ich ein Hotel für ${c} buchen?`, a: `So früh wie möglich. Hotels nahe ${c} sind meist ${book} im Voraus ausgebucht und die Preise steigen zum Wochenende, also reserviere mit kostenloser Stornierung, sobald die Termine feststehen.` },
    ],
  },
  it: {
    named: (c, list) =>
      `Tra gli hotel vicino a ${c} ci sono ${list}, i più vicini per primi. Aprine uno sulla mappa qui sopra per prezzi in tempo reale e cancellazione gratuita.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Quali hotel sono più vicini a ${c}?`, a: `Gli hotel più vicini sono a pochi minuti dal circuito${closest ? near.it(closest, closestMin ?? 0) : ""}. Si esauriscono per primi per il weekend di gara, quindi prenota appena hai le date.` },
      { q: `Ci sono hotel a distanza a piedi da ${c}?`, a: `Alcune strutture sono a distanza a piedi o a una breve navetta da ${c}, ma sono rare e vanno per prime. I paesi vicini aggiungono molti altri hotel a pochi minuti d'auto.` },
      { q: `Qual è il modo più economico per dormire vicino a ${c}?`, a: `Pensioni, hotel economici e campeggi dei paesi circostanti offrono il miglior rapporto qualità-prezzo vicino a ${c}. Prenota presto con cancellazione gratuita e allarga la ricerca di qualche chilometro.` },
      { q: `Quando prenotare un hotel per ${c}?`, a: `Il prima possibile. Gli hotel vicino a ${c} di solito si esauriscono ${book} prima e i prezzi salgono verso il weekend, quindi prenota con cancellazione gratuita appena hai le date.` },
    ],
  },
  es: {
    named: (c, list) =>
      `Entre los hoteles cerca de ${c} están ${list}, los más cercanos primero. Abre cualquiera en el mapa de arriba para ver precios en directo y cancelación gratis.`,
    faq: (c, closest, closestMin, book) => [
      { q: `¿Qué hoteles están más cerca de ${c}?`, a: `Los hoteles más cercanos están a pocos minutos del circuito${closest ? near.es(closest, closestMin ?? 0) : ""}. Se agotan primero para el fin de semana de carrera, así que reserva en cuanto tengas tus fechas.` },
      { q: `¿Hay hoteles a distancia a pie de ${c}?`, a: `Algunos alojamientos están a distancia a pie o a un corto traslado de ${c}, pero son escasos y se van primero. Los pueblos cercanos añaden muchos más hoteles a pocos minutos en coche.` },
      { q: `¿Cuál es la forma más barata de alojarse cerca de ${c}?`, a: `Las casas de huéspedes, los hoteles económicos y los campings de los pueblos de alrededor ofrecen la mejor relación calidad-precio cerca de ${c}. Reserva pronto con cancelación gratis y amplía la búsqueda unos kilómetros.` },
      { q: `¿Cuándo debo reservar un hotel para ${c}?`, a: `Cuanto antes. Los hoteles cerca de ${c} suelen agotarse ${book} antes y los precios suben al acercarse el fin de semana, así que reserva con cancelación gratis en cuanto tengas las fechas.` },
    ],
  },
};
