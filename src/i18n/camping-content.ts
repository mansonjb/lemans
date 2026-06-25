/**
 * Extra editorial depth for the camping / glamping filter pages: a short,
 * keyword-rich section on the kinds of camping near a circuit and how to book
 * it. Generic per locale, the circuit name is interpolated.
 */
import type { Locale } from "@/lib/types";

export const CAMPING_CONTENT: Record<
  Locale,
  { heading: string; intro: (c: string) => string; booking: (c: string) => string }
> = {
  en: {
    heading: "Camping, glamping & motorhomes",
    intro: (c) =>
      `Camping is the closest and best-value way to do race week at ${c}. You'll find official trackside campsites, private farm fields that open just for the weekend, and increasingly glamping — pre-pitched bell tents, pods, cabins and lodges for anyone who wants a bed and a roof. Most sites also take motorhomes and campervans, with electric hook-ups at the larger ones.`,
    booking: (c) =>
      `The campsites and glamping that take online bookings appear on the live map above, with real-time availability and prices for your dates — book through it and you're covered. Trackside pitches go first and many sell out months ahead, so reserve as soon as the dates are set, and widen to the nearby towns if the closest options are full.`,
  },
  fr: {
    heading: "Camping, glamping & camping-cars",
    intro: (c) =>
      `Le camping est la façon la plus proche et la plus économique de vivre la semaine de course à ${c}. On y trouve les campings officiels au bord de la piste, des terrains de particuliers qui n'ouvrent que pour le week-end, et de plus en plus de glamping — tentes meublées, pods, cabanes et lodges pour ceux qui veulent un vrai lit. La plupart des sites accueillent aussi les camping-cars et vans, avec branchements électriques sur les plus grands.`,
    booking: (c) =>
      `Les campings et le glamping réservables en ligne apparaissent sur la carte ci-dessus, avec disponibilités et prix en direct pour vos dates — réservez via la carte et vous êtes couverts. Les emplacements au bord de la piste partent en premier et beaucoup affichent complet des mois à l'avance : réservez dès que les dates sont connues, et élargissez aux villes proches si le plus près est plein.`,
  },
  nl: {
    heading: "Camping, glamping & campers",
    intro: (c) =>
      `Kamperen is de dichtstbijzijnde en voordeligste manier om een raceweekend op ${c} te beleven. Je vindt er officiële campings langs de baan, particuliere weilanden die alleen voor het weekend opengaan, en steeds vaker glamping — opgezette tenten, pods, cabins en lodges voor wie een bed en een dak wil. De meeste terreinen nemen ook campers en kampeerbussen, met stroomaansluitingen op de grotere.`,
    booking: (c) =>
      `De campings en glamping die online boekingen aannemen, staan op de live kaart hierboven, met realtime beschikbaarheid en prijzen voor jouw data — boek erdoorheen en je zit goed. Plekken langs de baan gaan het eerst en veel zijn maanden van tevoren vol, dus reserveer zodra de data vaststaan, en verbreed naar de nabije plaatsen als het dichtstbij vol is.`,
  },
  de: {
    heading: "Camping, Glamping & Wohnmobile",
    intro: (c) =>
      `Camping ist die nächste und günstigste Art, ein Rennwochenende am ${c} zu erleben. Es gibt offizielle Campingplätze direkt an der Strecke, private Felder, die nur fürs Wochenende öffnen, und immer mehr Glamping — aufgebaute Zelte, Pods, Hütten und Lodges für alle, die ein Bett und ein Dach wollen. Die meisten Plätze nehmen auch Wohnmobile und Campervans, mit Stromanschluss an den größeren.`,
    booking: (c) =>
      `Die Plätze und das Glamping mit Online-Buchung erscheinen auf der Live-Karte oben, mit Echtzeit-Verfügbarkeit und Preisen für deine Daten — buche darüber und du bist abgesichert. Plätze an der Strecke sind zuerst weg und viele Monate im Voraus ausgebucht, also reserviere, sobald die Termine feststehen, und weiche auf die nahen Orte aus, wenn die nächsten voll sind.`,
  },
  it: {
    heading: "Campeggio, glamping & camper",
    intro: (c) =>
      `Il campeggio è il modo più vicino ed economico di vivere un weekend di gara a ${c}. Ci sono campeggi ufficiali a bordo pista, terreni privati che aprono solo per il weekend e sempre più glamping — tende già montate, pod, chalet e lodge per chi vuole un letto e un tetto. La maggior parte delle strutture accoglie anche camper e van, con allacci elettrici nelle più grandi.`,
    booking: (c) =>
      `I campeggi e il glamping prenotabili online compaiono sulla mappa live qui sopra, con disponibilità e prezzi in tempo reale per le tue date — prenota tramite la mappa e sei coperto. Le piazzole a bordo pista vanno per prime e molte si esauriscono con mesi di anticipo, quindi prenota appena hai le date, e allarga ai paesi vicini se i più vicini sono pieni.`,
  },
  es: {
    heading: "Camping, glamping y autocaravanas",
    intro: (c) =>
      `El camping es la forma más cercana y económica de vivir un fin de semana de carrera en ${c}. Hay campings oficiales junto a la pista, terrenos privados que abren solo para el fin de semana y cada vez más glamping — tiendas ya montadas, cabañas, bungalós y lodges para quien quiere una cama y un techo. La mayoría admite también autocaravanas y furgonetas camper, con tomas eléctricas en los más grandes.`,
    booking: (c) =>
      `Los campings y el glamping que aceptan reservas online aparecen en el mapa en directo de arriba, con disponibilidad y precios en tiempo real para tus fechas — reserva a través del mapa y quedas cubierto. Las parcelas junto a la pista se van primero y muchas se agotan con meses de antelación, así que reserva en cuanto tengas las fechas, y amplía a los pueblos cercanos si los más próximos están llenos.`,
  },
};
