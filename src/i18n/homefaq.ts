import type { Locale } from "@/lib/types";
import type { FaqItem } from "@/components/FaqBlock";

/**
 * Broad, homepage-specific FAQ questions (events overview, where to stay,
 * budget, getting there) shown in addition to the generic practical FAQ, to
 * give the homepage a deep, citable Q&A block. All 6 locales.
 */
const HOME_FAQ: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: "Which races take place at the Le Mans circuit, and when?",
      a: "Five big weekends: the 24 Hours Motos in April, the French MotoGP in May, the 24 Hours of Le Mans in June, Le Mans Classic in July and the 24 Hours Trucks in autumn. Each fills local accommodation, the June 24 Hours by far the most.",
    },
    {
      q: "For the 24 Hours, is it better to stay at the circuit or in town?",
      a: "At the circuit (campsites, a few hotels) you walk to the gates but book earliest; the city centre has the most rooms, restaurants and the tram to the track. Our zone comparison weighs both on real numbers.",
    },
    {
      q: "How do I get to Le Mans from the UK or abroad?",
      a: "Most British fans take a ferry to Caen, Le Havre or St Malo and drive down (about 2h30 from Caen); others fly into Paris and take the one-hour TGV. Our getting-there page covers the routes and nearest airports.",
    },
    {
      q: "Le Mans or a nearby city like Tours or Angers?",
      a: "Stay in Le Mans to be close, but book early and pay more; Tours and Angers are about an hour out with thousands of rooms at normal prices, the classic move when the city sells out.",
    },
    {
      q: "Is camping worth it for the 24 Hours?",
      a: "For many it is the definitive way to do the race, cheapest and closest to the action, though basic and noisy. The campsites near and around the circuit book months ahead.",
    },
    {
      q: "What budget should I plan for accommodation?",
      a: "Prices spike near the circuit during race week and stay closer to normal the further out you base yourself. Budget chains and campsites are the value end; booking early with free cancellation locks in the best rate.",
    },
    {
      q: "Are the MotoGP and Le Mans Classic as hard to book as the 24 Hours?",
      a: "The MotoGP draws a huge crowd and books up fast too; Le Mans Classic and the Trucks are easier, with more choice and friendlier prices. All reward booking ahead.",
    },
  ],
  fr: [
    {
      q: "Quelles courses ont lieu au circuit du Mans, et quand ?",
      a: "Cinq grands week-ends : les 24 Heures Motos en avril, le Grand Prix de France moto en mai, les 24 Heures du Mans en juin, Le Mans Classic en juillet et les 24 Heures Camions à l'automne. Chacun remplit l'hébergement local, les 24 Heures de juin de loin le plus.",
    },
    {
      q: "Pour les 24 Heures, vaut-il mieux dormir au circuit ou en ville ?",
      a: "Au circuit (campings, quelques hôtels) on rejoint les entrées à pied mais on réserve le plus tôt ; le centre-ville a le plus de chambres, des restaurants et le tram vers la piste. Notre comparateur de zones arbitre les deux sur des chiffres réels.",
    },
    {
      q: "Comment venir au Mans depuis le Royaume-Uni ou l'étranger ?",
      a: "La plupart des Britanniques prennent un ferry vers Caen, Le Havre ou Saint-Malo puis descendent en voiture (environ 2h30 depuis Caen) ; d'autres atterrissent à Paris et prennent le TGV en une heure. Notre page « Comment venir » détaille les routes et aéroports.",
    },
    {
      q: "Le Mans ou une ville voisine comme Tours ou Angers ?",
      a: "Dormir au Mans pour être proche, mais réserver tôt et payer plus ; Tours et Angers sont à environ une heure avec des milliers de chambres à prix normaux, le réflexe classique quand la ville est complète.",
    },
    {
      q: "Le camping vaut-il le coup pour les 24 Heures ?",
      a: "Pour beaucoup, c'est LA façon de vivre la course, le moins cher et au plus près de l'action, mais sommaire et bruyant. Les campings autour du circuit partent des mois à l'avance.",
    },
    {
      q: "Quel budget prévoir pour l'hébergement ?",
      a: "Les prix flambent près du circuit en semaine de course et restent plus proches de la normale en s'éloignant. Chaînes économiques et campings sont l'entrée de gamme ; réserver tôt avec annulation gratuite bloque le meilleur tarif.",
    },
    {
      q: "Le MotoGP et Le Mans Classic, est-ce aussi dur à réserver que les 24 Heures ?",
      a: "Le MotoGP attire une foule énorme et se remplit vite aussi ; Le Mans Classic et les Camions sont plus faciles, avec plus de choix et des prix plus doux. Tous récompensent l'anticipation.",
    },
  ],
  nl: [
    {
      q: "Welke races vinden plaats op het circuit van Le Mans, en wanneer?",
      a: "Vijf grote weekenden: de 24 uur Motos in april, de Franse MotoGP in mei, de 24 uur van Le Mans in juni, Le Mans Classic in juli en de 24 uur Trucks in de herfst. Elk vult de lokale accommodatie, de 24 uur in juni veruit het meest.",
    },
    {
      q: "Voor de 24 uur: beter bij het circuit of in de stad slapen?",
      a: "Bij het circuit (campings, een paar hotels) loop je naar de poorten maar boek je het vroegst; het centrum heeft de meeste kamers, restaurants en de tram naar de baan. Onze zonevergelijking weegt beide op echte cijfers.",
    },
    {
      q: "Hoe reis ik naar Le Mans vanuit het VK of het buitenland?",
      a: "De meeste Britse fans nemen een ferry naar Caen, Le Havre of St Malo en rijden zuidwaarts (ongeveer 2u30 vanaf Caen); anderen vliegen naar Parijs en nemen de TGV van een uur. Onze reispagina behandelt de routes en luchthavens.",
    },
    {
      q: "Le Mans of een nabije stad als Tours of Angers?",
      a: "In Le Mans slapen om dichtbij te zijn, maar vroeg boeken en meer betalen; Tours en Angers liggen op zo'n uur met duizenden kamers tegen normale prijzen, de klassieke zet als de stad volraakt.",
    },
    {
      q: "Is kamperen de moeite waard voor de 24 uur?",
      a: "Voor velen is het dé manier om de race te beleven, het goedkoopst en het dichtst bij de actie, al is het basaal en lawaaierig. De campings rond het circuit gaan maanden vooruit.",
    },
    {
      q: "Welk budget moet ik voor accommodatie rekenen?",
      a: "Prijzen pieken bij het circuit tijdens de raceweek en blijven normaler hoe verder weg je zit. Budgetketens en campings zijn het voordelige eind; vroeg boeken met gratis annulering legt de beste prijs vast.",
    },
    {
      q: "Zijn de MotoGP en Le Mans Classic net zo lastig te boeken als de 24 uur?",
      a: "De MotoGP trekt een enorme menigte en loopt ook snel vol; Le Mans Classic en de Trucks zijn makkelijker, met meer keuze en vriendelijkere prijzen. Alle belonen vroeg boeken.",
    },
  ],
  de: [
    {
      q: "Welche Rennen finden auf der Strecke von Le Mans statt, und wann?",
      a: "Fünf große Wochenenden: die 24 Stunden Motos im April, der französische MotoGP im Mai, die 24 Stunden von Le Mans im Juni, Le Mans Classic im Juli und die 24 Stunden Trucks im Herbst. Jedes füllt die örtlichen Unterkünfte, die 24 Stunden im Juni mit Abstand am meisten.",
    },
    {
      q: "Für die 24 Stunden: besser an der Strecke oder in der Stadt?",
      a: "An der Strecke (Campingplätze, wenige Hotels) gehen Sie zu Fuß zu den Toren, buchen aber am frühesten; das Zentrum hat die meisten Zimmer, Restaurants und die Tram zur Strecke. Unser Zonenvergleich wägt beides nach echten Zahlen ab.",
    },
    {
      q: "Wie komme ich aus Großbritannien oder dem Ausland nach Le Mans?",
      a: "Die meisten britischen Fans nehmen eine Fähre nach Caen, Le Havre oder St Malo und fahren nach Süden (etwa 2,5 Std. ab Caen); andere fliegen nach Paris und nehmen den einstündigen TGV. Unsere Anreiseseite zeigt die Routen und Flughäfen.",
    },
    {
      q: "Le Mans oder eine Nachbarstadt wie Tours oder Angers?",
      a: "In Le Mans übernachten, um nah zu sein, aber früh buchen und mehr zahlen; Tours und Angers liegen etwa eine Stunde entfernt mit Tausenden Zimmern zu normalen Preisen, der klassische Zug, wenn die Stadt ausgebucht ist.",
    },
    {
      q: "Lohnt sich Camping für die 24 Stunden?",
      a: "Für viele ist es die ultimative Art, das Rennen zu erleben, am günstigsten und am nächsten am Geschehen, wenn auch einfach und laut. Die Campingplätze rund um die Strecke sind Monate im Voraus weg.",
    },
    {
      q: "Welches Budget sollte ich für die Unterkunft einplanen?",
      a: "Die Preise steigen nahe der Strecke in der Rennwoche stark und bleiben normaler, je weiter draußen Sie sind. Budgetketten und Campingplätze sind das günstige Ende; früh mit kostenloser Stornierung buchen sichert den besten Preis.",
    },
    {
      q: "Sind MotoGP und Le Mans Classic so schwer zu buchen wie die 24 Stunden?",
      a: "Der MotoGP zieht eine riesige Menge an und ist auch schnell ausgebucht; Le Mans Classic und die Trucks sind leichter, mit mehr Auswahl und freundlicheren Preisen. Alle belohnen frühes Buchen.",
    },
  ],
  it: [
    {
      q: "Quali gare si svolgono al circuito di Le Mans, e quando?",
      a: "Cinque grandi weekend: le 24 Ore Motos ad aprile, il MotoGP di Francia a maggio, la 24 Ore di Le Mans a giugno, Le Mans Classic a luglio e le 24 Ore Camion in autunno. Ognuno riempie gli alloggi locali, la 24 Ore di giugno di gran lunga di più.",
    },
    {
      q: "Per la 24 Ore, meglio dormire al circuito o in città?",
      a: "Al circuito (campeggi, pochi hotel) raggiungi i cancelli a piedi ma prenoti prima; il centro ha più camere, ristoranti e il tram per la pista. Il nostro confronto tra zone bilancia entrambi su numeri reali.",
    },
    {
      q: "Come arrivo a Le Mans dal Regno Unito o dall'estero?",
      a: "La maggior parte dei britannici prende un traghetto per Caen, Le Havre o St Malo e scende in auto (circa 2h30 da Caen); altri atterrano a Parigi e prendono il TGV di un'ora. La nostra pagina « come arrivare » copre le rotte e gli aeroporti.",
    },
    {
      q: "Le Mans o una città vicina come Tours o Angers?",
      a: "Dormire a Le Mans per essere vicini, ma prenotare presto e pagare di più; Tours e Angers sono a circa un'ora con migliaia di camere a prezzi normali, la mossa classica quando la città è esaurita.",
    },
    {
      q: "Vale la pena il campeggio per la 24 Ore?",
      a: "Per molti è IL modo di vivere la gara, il più economico e vicino all'azione, anche se essenziale e rumoroso. I campeggi intorno al circuito finiscono con mesi di anticipo.",
    },
    {
      q: "Che budget prevedere per l'alloggio?",
      a: "I prezzi schizzano vicino al circuito nella settimana di gara e restano più normali allontanandosi. Catene economiche e campeggi sono la fascia conveniente; prenotare presto con cancellazione gratuita blocca il prezzo migliore.",
    },
    {
      q: "MotoGP e Le Mans Classic sono difficili da prenotare come la 24 Ore?",
      a: "Il MotoGP attira una folla enorme e si riempie in fretta; Le Mans Classic e i Camion sono più facili, con più scelta e prezzi più amichevoli. Tutti premiano la prenotazione anticipata.",
    },
  ],
  es: [
    {
      q: "¿Qué carreras se disputan en el circuito de Le Mans, y cuándo?",
      a: "Cinco grandes fines de semana: las 24 Horas Motos en abril, el MotoGP de Francia en mayo, las 24 Horas de Le Mans en junio, Le Mans Classic en julio y las 24 Horas Camiones en otoño. Cada uno llena el alojamiento local, las 24 Horas de junio con diferencia el más.",
    },
    {
      q: "Para las 24 Horas, ¿mejor dormir en el circuito o en la ciudad?",
      a: "En el circuito (campings, algunos hoteles) llegas a las puertas a pie pero reservas lo más pronto; el centro tiene más habitaciones, restaurantes y el tranvía a la pista. Nuestra comparativa de zonas sopesa ambas con números reales.",
    },
    {
      q: "¿Cómo llego a Le Mans desde Reino Unido o el extranjero?",
      a: "La mayoría de los británicos toman un ferry a Caen, Le Havre o St Malo y bajan en coche (unas 2h30 desde Caen); otros aterrizan en París y toman el TGV de una hora. Nuestra página « cómo llegar » cubre las rutas y aeropuertos.",
    },
    {
      q: "¿Le Mans o una ciudad cercana como Tours o Angers?",
      a: "Dormir en Le Mans para estar cerca, pero reservar pronto y pagar más; Tours y Angers están a una hora con miles de habitaciones a precios normales, el recurso clásico cuando la ciudad se agota.",
    },
    {
      q: "¿Merece la pena el camping para las 24 Horas?",
      a: "Para muchos es LA forma de vivir la carrera, lo más barato y cerca de la acción, aunque básico y ruidoso. Los campings alrededor del circuito vuelan con meses de antelación.",
    },
    {
      q: "¿Qué presupuesto debo prever para el alojamiento?",
      a: "Los precios se disparan cerca del circuito en la semana de carrera y se mantienen más normales cuanto más lejos te alojas. Cadenas económicas y campings son la gama asequible; reservar pronto con cancelación gratuita fija el mejor precio.",
    },
    {
      q: "¿El MotoGP y Le Mans Classic son tan difíciles de reservar como las 24 Horas?",
      a: "El MotoGP atrae una multitud enorme y se llena rápido también; Le Mans Classic y los Camiones son más fáciles, con más oferta y precios más amables. Todos recompensan reservar con antelación.",
    },
  ],
};

export const homeFaq = (locale: Locale): FaqItem[] =>
  HOME_FAQ[locale] ?? HOME_FAQ.en;
