/**
 * Camping / glamping content for the campsites filter pages. Kept unique per
 * circuit where it counts: `named` lists the real scraped campsites, and `faq`
 * is a camping-specific Q&A (glamping, motorhomes, how close, when they sell
 * out, cost) that targets the dominant camping/glamping search queries and
 * feeds FAQPage structured data.
 */
import type { Locale } from "@/lib/types";
import type { FaqItem } from "@/components/FaqBlock";

type CampingCopy = {
  heading: string;
  intro: (c: string) => string;
  booking: (c: string) => string;
  /** Sentence naming the real campsites (`list` is a pre-joined string). */
  named: (c: string, list: string) => string;
  /** Camping-specific FAQ. `closest`/`closestMin` describe the nearest site. */
  faq: (
    c: string,
    closest: string | undefined,
    closestMin: number | undefined,
    book: string
  ) => FaqItem[];
};

/** Localised "starting with X, about N minutes from the gates" clause. */
const near: Record<Locale, (name: string, min: number) => string> = {
  en: (n, m) => `, starting with ${n}, about ${m} minutes from the gates`,
  fr: (n, m) => `, à commencer par ${n}, à environ ${m} minutes des portes`,
  nl: (n, m) => `, te beginnen met ${n}, op zo'n ${m} minuten van de poorten`,
  de: (n, m) => `, angefangen bei ${n}, etwa ${m} Minuten von den Toren`,
  it: (n, m) => `, a partire da ${n}, a circa ${m} minuti dai cancelli`,
  es: (n, m) => `, empezando por ${n}, a unos ${m} minutos de las puertas`,
};

export const CAMPING_CONTENT: Record<Locale, CampingCopy> = {
  en: {
    heading: "Camping, glamping & motorhomes",
    intro: (c) =>
      `Camping is the closest and best-value way to do race week at ${c}. You'll find official trackside campsites, private farm fields that open just for the weekend, and increasingly glamping: pre-pitched bell tents, pods, cabins and lodges for anyone who wants a bed and a roof. Most sites also take motorhomes and campervans, with electric hook-ups at the larger ones.`,
    booking: (c) =>
      `The campsites and glamping that take online bookings appear on the live map above, with real-time availability and prices for your dates. Book through it and you're covered. Trackside pitches go first and many sell out months ahead, so reserve as soon as the dates are set, and widen to the nearby towns if the closest options are full.`,
    named: (c, list) =>
      `Campsites in and around ${c} include ${list}. The closest trackside pitches go first, so book as soon as your dates are set.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Is there glamping near ${c}?`, a: `Yes. Alongside bring-your-own-tent fields, you'll find glamping near ${c}: pre-pitched bell tents, pods, cabins and lodges with real beds. These comfortable options sell out first, so book as soon as your dates are set.` },
      { q: `Can I bring a motorhome or campervan to ${c}?`, a: `Yes. Most campsites around ${c} take motorhomes and campervans, and the larger sites have electric hook-ups. Hook-up pitches are limited and go early.` },
      { q: `How close are the campsites to ${c}?`, a: `The nearest sit right by the circuit${closest ? near.en(closest, closestMin ?? 0) : ""}. Trackside pitches are the most convenient and the first to sell out.` },
      { q: `When do ${c} campsites sell out?`, a: `The closest trackside pitches typically go ${book} ahead of race weekend. Reserve the moment your dates are set, and widen to nearby towns if the closest sites are full.` },
      { q: `Is camping cheaper than a hotel at ${c}?`, a: `Usually yes. Camping and glamping are the best-value way to do race week at ${c}, especially for groups, and they put you closest to the action.` },
    ],
  },
  fr: {
    heading: "Camping, glamping & camping-cars",
    intro: (c) =>
      `Le camping est la façon la plus proche et la plus économique de vivre la semaine de course à ${c}. On y trouve les campings officiels au bord de la piste, des terrains de particuliers qui n'ouvrent que pour le week-end, et de plus en plus de glamping : tentes meublées, pods, cabanes et lodges pour ceux qui veulent un vrai lit. La plupart des sites accueillent aussi les camping-cars et vans, avec branchements électriques sur les plus grands.`,
    booking: (c) =>
      `Les campings et le glamping réservables en ligne apparaissent sur la carte ci-dessus, avec disponibilités et prix en direct pour vos dates. Réservez via la carte et vous êtes couverts. Les emplacements au bord de la piste partent en premier et beaucoup affichent complet des mois à l'avance : réservez dès que les dates sont connues, et élargissez aux villes proches si le plus près est plein.`,
    named: (c, list) =>
      `Les campings de ${c} et alentour comprennent ${list}. Les emplacements au plus près de la piste partent en premier, réservez dès que vos dates sont fixées.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Y a-t-il du glamping près de ${c} ?`, a: `Oui. À côté des terrains où planter sa tente, on trouve du glamping près de ${c} : tentes meublées, pods, cabanes et lodges avec de vrais lits. Ces options confortables partent en premier, réservez dès que vos dates sont fixées.` },
      { q: `Puis-je venir en camping-car ou en van à ${c} ?`, a: `Oui. La plupart des campings autour de ${c} accueillent camping-cars et vans, et les plus grands ont des branchements électriques. Les emplacements avec électricité sont limités et partent tôt.` },
      { q: `À quelle distance sont les campings de ${c} ?`, a: `Les plus proches sont juste à côté du circuit${closest ? near.fr(closest, closestMin ?? 0) : ""}. Les emplacements au bord de la piste sont les plus pratiques et les premiers complets.` },
      { q: `Quand les campings de ${c} affichent-ils complet ?`, a: `Les emplacements les plus proches partent en général ${book} avant le week-end de course. Réservez dès que vos dates sont fixées, et élargissez aux villes proches si le plus près est complet.` },
      { q: `Le camping est-il moins cher qu'un hôtel à ${c} ?`, a: `En général oui. Le camping et le glamping sont la façon la plus économique de vivre la semaine de course à ${c}, surtout à plusieurs, et vous placent au plus près de l'action.` },
    ],
  },
  nl: {
    heading: "Camping, glamping & campers",
    intro: (c) =>
      `Kamperen is de dichtstbijzijnde en voordeligste manier om een raceweekend op ${c} te beleven. Je vindt er officiële campings langs de baan, particuliere weilanden die alleen voor het weekend opengaan, en steeds vaker glamping: opgezette tenten, pods, cabins en lodges voor wie een bed en een dak wil. De meeste terreinen nemen ook campers en kampeerbussen, met stroomaansluitingen op de grotere.`,
    booking: (c) =>
      `De campings en glamping die online boekingen aannemen, staan op de live kaart hierboven, met realtime beschikbaarheid en prijzen voor jouw data. Boek erdoorheen en je zit goed. Plekken langs de baan gaan het eerst en veel zijn maanden van tevoren vol, dus reserveer zodra de data vaststaan, en verbreed naar de nabije plaatsen als het dichtstbij vol is.`,
    named: (c, list) =>
      `Campings in en rond ${c} zijn onder meer ${list}. De dichtstbijzijnde plekken langs de baan gaan het eerst, dus boek zodra je data vaststaan.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Is er glamping bij ${c}?`, a: `Ja. Naast velden om je eigen tent op te zetten vind je glamping bij ${c}: opgezette tenten, pods, cabins en lodges met echte bedden. Deze comfortabele opties zijn het eerst uitverkocht, dus boek zodra je data vaststaan.` },
      { q: `Mag ik met een camper of kampeerbus naar ${c}?`, a: `Ja. De meeste campings rond ${c} nemen campers en kampeerbussen, en de grotere hebben stroomaansluitingen. Plekken met stroom zijn beperkt en gaan snel.` },
      { q: `Hoe dicht liggen de campings bij ${c}?`, a: `De dichtstbijzijnde liggen pal naast het circuit${closest ? near.nl(closest, closestMin ?? 0) : ""}. Plekken langs de baan zijn het handigst en het eerst vol.` },
      { q: `Wanneer zijn de campings bij ${c} vol?`, a: `De dichtstbijzijnde plekken langs de baan gaan meestal ${book} voor het raceweekend. Reserveer zodra je data vaststaan en wijk uit naar nabije plaatsen als het dichtstbij vol is.` },
      { q: `Is kamperen goedkoper dan een hotel bij ${c}?`, a: `Meestal wel. Kamperen en glamping zijn de voordeligste manier om het raceweekend bij ${c} te beleven, zeker voor groepen, en je zit er het dichtst op de actie.` },
    ],
  },
  de: {
    heading: "Camping, Glamping & Wohnmobile",
    intro: (c) =>
      `Camping ist die nächste und günstigste Art, ein Rennwochenende am ${c} zu erleben. Es gibt offizielle Campingplätze direkt an der Strecke, private Felder, die nur fürs Wochenende öffnen, und immer mehr Glamping: aufgebaute Zelte, Pods, Hütten und Lodges für alle, die ein Bett und ein Dach wollen. Die meisten Plätze nehmen auch Wohnmobile und Campervans, mit Stromanschluss an den größeren.`,
    booking: (c) =>
      `Die Plätze und das Glamping mit Online-Buchung erscheinen auf der Live-Karte oben, mit Echtzeit-Verfügbarkeit und Preisen für deine Daten. Buche darüber und du bist abgesichert. Plätze an der Strecke sind zuerst weg und viele Monate im Voraus ausgebucht, also reserviere, sobald die Termine feststehen, und weiche auf die nahen Orte aus, wenn die nächsten voll sind.`,
    named: (c, list) =>
      `Zu den Campingplätzen in und um ${c} gehören ${list}. Die streckennächsten Plätze sind zuerst weg, also buche, sobald deine Termine feststehen.`,
    faq: (c, closest, closestMin, book) => [
      { q: `Gibt es Glamping in der Nähe von ${c}?`, a: `Ja. Neben Zeltwiesen findest du Glamping in der Nähe von ${c}: aufgebaute Zelte, Pods, Hütten und Lodges mit echten Betten. Diese komfortablen Optionen sind zuerst ausgebucht, also buche, sobald deine Termine feststehen.` },
      { q: `Darf ich mit Wohnmobil oder Campervan nach ${c}?`, a: `Ja. Die meisten Campingplätze rund um ${c} nehmen Wohnmobile und Campervans, und die größeren haben Stromanschlüsse. Plätze mit Strom sind begrenzt und schnell weg.` },
      { q: `Wie nah sind die Campingplätze an ${c}?`, a: `Die nächsten liegen direkt an der Strecke${closest ? near.de(closest, closestMin ?? 0) : ""}. Plätze an der Strecke sind am praktischsten und zuerst ausgebucht.` },
      { q: `Wann sind die Campingplätze am ${c} ausgebucht?`, a: `Die streckennächsten Plätze sind meist ${book} vor dem Rennwochenende weg. Reserviere, sobald deine Termine feststehen, und weiche auf nahe Orte aus, wenn die nächsten voll sind.` },
      { q: `Ist Camping günstiger als ein Hotel am ${c}?`, a: `Meist ja. Camping und Glamping sind die günstigste Art, das Rennwochenende am ${c} zu erleben, vor allem für Gruppen, und du bist am nächsten am Geschehen.` },
    ],
  },
  it: {
    heading: "Campeggio, glamping & camper",
    intro: (c) =>
      `Il campeggio è il modo più vicino ed economico di vivere un weekend di gara a ${c}. Ci sono campeggi ufficiali a bordo pista, terreni privati che aprono solo per il weekend e sempre più glamping: tende già montate, pod, chalet e lodge per chi vuole un letto e un tetto. La maggior parte delle strutture accoglie anche camper e van, con allacci elettrici nelle più grandi.`,
    booking: (c) =>
      `I campeggi e il glamping prenotabili online compaiono sulla mappa live qui sopra, con disponibilità e prezzi in tempo reale per le tue date. Prenota tramite la mappa e sei coperto. Le piazzole a bordo pista vanno per prime e molte si esauriscono con mesi di anticipo, quindi prenota appena hai le date, e allarga ai paesi vicini se i più vicini sono pieni.`,
    named: (c, list) =>
      `Tra i campeggi a ${c} e dintorni ci sono ${list}. Le piazzole più vicine alla pista vanno per prime, quindi prenota appena hai le date.`,
    faq: (c, closest, closestMin, book) => [
      { q: `C'è il glamping vicino a ${c}?`, a: `Sì. Oltre ai campi dove piantare la tenda, trovi il glamping vicino a ${c}: tende già montate, pod, chalet e lodge con veri letti. Queste opzioni comode si esauriscono per prime, quindi prenota appena hai le date.` },
      { q: `Posso venire in camper o van a ${c}?`, a: `Sì. La maggior parte dei campeggi attorno a ${c} accoglie camper e van, e i più grandi hanno allacci elettrici. Le piazzole con corrente sono limitate e vanno via presto.` },
      { q: `Quanto sono vicini i campeggi a ${c}?`, a: `I più vicini sono proprio accanto al circuito${closest ? near.it(closest, closestMin ?? 0) : ""}. Le piazzole a bordo pista sono le più comode e le prime a esaurirsi.` },
      { q: `Quando si esauriscono i campeggi a ${c}?`, a: `Le piazzole più vicine alla pista di solito vanno via ${book} prima del weekend di gara. Prenota appena hai le date e allarga ai paesi vicini se i più vicini sono pieni.` },
      { q: `Il campeggio costa meno di un hotel a ${c}?`, a: `Di solito sì. Campeggio e glamping sono il modo più economico di vivere il weekend di gara a ${c}, soprattutto in gruppo, e ti mettono più vicino all'azione.` },
    ],
  },
  es: {
    heading: "Camping, glamping y autocaravanas",
    intro: (c) =>
      `El camping es la forma más cercana y económica de vivir un fin de semana de carrera en ${c}. Hay campings oficiales junto a la pista, terrenos privados que abren solo para el fin de semana y cada vez más glamping: tiendas ya montadas, cabañas, bungalós y lodges para quien quiere una cama y un techo. La mayoría admite también autocaravanas y furgonetas camper, con tomas eléctricas en los más grandes.`,
    booking: (c) =>
      `Los campings y el glamping que aceptan reservas online aparecen en el mapa en directo de arriba, con disponibilidad y precios en tiempo real para tus fechas. Reserva a través del mapa y quedas cubierto. Las parcelas junto a la pista se van primero y muchas se agotan con meses de antelación, así que reserva en cuanto tengas las fechas, y amplía a los pueblos cercanos si los más próximos están llenos.`,
    named: (c, list) =>
      `Entre los campings de ${c} y alrededores están ${list}. Las parcelas más cercanas a la pista se van primero, así que reserva en cuanto tengas las fechas.`,
    faq: (c, closest, closestMin, book) => [
      { q: `¿Hay glamping cerca de ${c}?`, a: `Sí. Además de las parcelas para tu propia tienda, hay glamping cerca de ${c}: tiendas ya montadas, cabañas, bungalós y lodges con camas de verdad. Estas opciones cómodas se agotan primero, así que reserva en cuanto tengas tus fechas.` },
      { q: `¿Puedo ir en autocaravana o furgoneta camper a ${c}?`, a: `Sí. La mayoría de los campings cerca de ${c} admiten autocaravanas y furgonetas camper, y los más grandes tienen tomas eléctricas. Las parcelas con electricidad son limitadas y se van pronto.` },
      { q: `¿A qué distancia están los campings de ${c}?`, a: `Los más cercanos están justo al lado del circuito${closest ? near.es(closest, closestMin ?? 0) : ""}. Las parcelas junto a la pista son las más cómodas y las primeras en agotarse.` },
      { q: `¿Cuándo se llenan los campings de ${c}?`, a: `Las parcelas más cercanas a la pista suelen agotarse ${book} antes del fin de semana de carrera. Reserva en cuanto tengas tus fechas y amplía a los pueblos cercanos si los más próximos están llenos.` },
      { q: `¿Es más barato acampar que un hotel en ${c}?`, a: `Normalmente sí. El camping y el glamping son la forma más económica de vivir el fin de semana de carrera en ${c}, sobre todo en grupo, y te ponen lo más cerca de la acción.` },
    ],
  },
};
