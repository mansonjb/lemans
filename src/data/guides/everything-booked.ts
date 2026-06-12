import type { GuideContent } from "@/lib/types";
import type { Locale } from "@/lib/types";

export const everythingBooked: Record<Locale, GuideContent> = {
  en: {
    title: "Everything is booked: the plan B that actually works",
    description:
      "Le Mans looks full for race week? It almost never truly is. The ring-by-ring strategy to still sleep well, at a sane price.",
    intro: [
      "Every year, thousands of fans type the same panicked search a few weeks before the race: everything around Le Mans looks sold out. Here is the truth from people who do this every year: the city sells out, the region does not. You just need to search in the right order.",
    ],
    sections: [
      {
        heading: "Widen ring by ring, not at random",
        paragraphs: [
          "Availability around Le Mans behaves like ripples: the walkable villages go first, then the city, then each ring outwards. So search methodically: 30 minutes, then 45, then 60, then 90. Every extra 15 minutes of driving unlocks a new layer of hotels and rentals at prices that drop fast.",
        ],
        list: [
          "0-30 min: Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Long shots late, but cancellations do appear.",
          "30-60 min: La Flèche, Alençon, Sablé, Sillé-le-Guillaume. The realistic late-booking sweet spot.",
          "60-90 min: Tours, Angers, Laval, Chartres. Real cities, normal prices, almost always rooms left.",
        ],
      },
      {
        heading: "The cities that save your weekend",
        paragraphs: [
          "Tours, Angers and Laval are the classic rescues: thousands of hotel rooms each, restaurants open late, and a straightforward morning drive if you leave before 7am. Laval has a direct train to Le Mans, and Tours connects too, so one driver can even drop the group and skip circuit parking entirely.",
        ],
      },
      {
        heading: "Hunt cancellations like a regular",
        paragraphs: [
          "Most race week bookings are made with free cancellation, and a real wave of rooms is released between 30 and 7 days out, when plans fall through. Check the map daily in that window, especially mornings. Set a price alert if your platform offers one, and be ready to book within minutes: a freed room near the circuit lives for about an hour.",
          "Last lever: private rentals and rooms listed late by locals who decide at the last moment to rent. New listings appear right up to race week, which is exactly why this site exists.",
        ],
      },
    ],
  },
  fr: {
    title: "Tout est complet : le plan B qui marche vraiment",
    description:
      "Le Mans affiche complet pour la semaine de course ? Ce n'est presque jamais vrai. La stratégie couronne par couronne pour bien dormir quand même, à prix sain.",
    intro: [
      "Chaque année, des milliers de passionnés tapent la même recherche paniquée à quelques semaines de la course : tout semble complet autour du Mans. Voici la vérité des habitués : la ville affiche complet, pas la région. Il faut juste chercher dans le bon ordre.",
    ],
    sections: [
      {
        heading: "Élargissez couronne par couronne, pas au hasard",
        paragraphs: [
          "Les disponibilités autour du Mans se comportent comme des ondes : les villages accessibles à pied partent d'abord, puis la ville, puis chaque couronne vers l'extérieur. Cherchez donc méthodiquement : 30 minutes, puis 45, puis 60, puis 90. Chaque quart d'heure de route supplémentaire débloque une nouvelle nappe d'hôtels et de locations à prix dégressifs.",
        ],
        list: [
          "0-30 min : Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Difficile tard, mais des annulations apparaissent.",
          "30-60 min : La Flèche, Alençon, Sablé, Sillé-le-Guillaume. Le bon compromis des réservations tardives.",
          "60-90 min : Tours, Angers, Laval, Chartres. De vraies villes, des prix normaux, presque toujours des chambres.",
        ],
      },
      {
        heading: "Les villes qui sauvent votre week-end",
        paragraphs: [
          "Tours, Angers et Laval sont les sauvetages classiques : des milliers de chambres chacune, des restaurants ouverts tard, et un trajet matinal simple en partant avant 7 h. Laval a un train direct pour Le Mans, Tours aussi : un conducteur peut même déposer le groupe et éviter complètement le parking du circuit.",
        ],
      },
      {
        heading: "Chassez les annulations comme un habitué",
        paragraphs: [
          "La plupart des réservations de semaine de course sont prises avec annulation gratuite, et une vraie vague de chambres se libère entre J-30 et J-7, quand des plans tombent à l'eau. Vérifiez la carte chaque jour dans cette fenêtre, surtout le matin. Activez une alerte de prix si votre plateforme le propose, et soyez prêt à réserver en quelques minutes : une chambre libérée près du circuit vit environ une heure.",
          "Dernier levier : les locations et chambres mises en ligne tard par des locaux qui se décident au dernier moment. De nouvelles annonces apparaissent jusqu'à la semaine de course : c'est exactement la raison d'être de ce site.",
        ],
      },
    ],
  },
  nl: {
    title: "Alles is volgeboekt: het plan B dat echt werkt",
    description:
      "Le Mans lijkt vol voor de raceweek? Dat is bijna nooit echt zo. De ring-voor-ring-strategie om toch goed te slapen, voor een gezonde prijs.",
    intro: [
      "Elk jaar typen duizenden fans een paar weken voor de race dezelfde paniekzoekopdracht: alles rond Le Mans lijkt uitverkocht. De waarheid van de vaste bezoekers: de stad is vol, de regio niet. U moet alleen in de juiste volgorde zoeken.",
    ],
    sections: [
      {
        heading: "Vergroot ring voor ring, niet willekeurig",
        paragraphs: [
          "Beschikbaarheid rond Le Mans gedraagt zich als golven: de loopafstand-dorpen gaan eerst, dan de stad, dan elke ring naar buiten. Zoek dus methodisch: 30 minuten, dan 45, dan 60, dan 90. Elk extra kwartier rijden ontgrendelt een nieuwe laag hotels en huizen, met snel dalende prijzen.",
        ],
        list: [
          "0-30 min: Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Laat lastig, maar annuleringen duiken op.",
          "30-60 min: La Flèche, Alençon, Sablé, Sillé-le-Guillaume. De realistische sweet spot voor late boekers.",
          "60-90 min: Tours, Angers, Laval, Chartres. Echte steden, normale prijzen, bijna altijd kamers over.",
        ],
      },
      {
        heading: "De steden die uw weekend redden",
        paragraphs: [
          "Tours, Angers en Laval zijn de klassieke reddingen: elk duizenden hotelkamers, restaurants die laat open zijn, en een vlotte ochtendrit als u voor 7 uur vertrekt. Laval heeft een directe trein naar Le Mans, Tours ook: één chauffeur kan de groep zelfs afzetten en het circuitparkeren helemaal overslaan.",
        ],
      },
      {
        heading: "Jaag op annuleringen als een vaste gast",
        paragraphs: [
          "De meeste raceweek-boekingen worden met gratis annulering gemaakt, en tussen 30 en 7 dagen voor de race komt een echte golf kamers vrij wanneer plannen sneuvelen. Check de kaart dagelijks in dat venster, vooral 's ochtends. Zet een prijsalert aan als uw platform dat heeft, en wees klaar om binnen minuten te boeken: een vrijgekomen kamer bij het circuit leeft ongeveer een uur.",
          "Laatste hefboom: huizen en kamers die laat online komen van locals die op het laatste moment besluiten te verhuren. Nieuwe advertenties verschijnen tot in de raceweek: precies daarom bestaat deze site.",
        ],
      },
    ],
  },
  de: {
    title: "Alles ausgebucht: der Plan B, der wirklich funktioniert",
    description:
      "Le Mans scheint zur Rennwoche voll? Das stimmt fast nie wirklich. Die Ring-für-Ring-Strategie, um trotzdem gut zu schlafen, zu vernünftigen Preisen.",
    intro: [
      "Jedes Jahr tippen Tausende Fans wenige Wochen vor dem Rennen dieselbe panische Suche: Rund um Le Mans scheint alles ausverkauft. Die Wahrheit der Stammgäste: Die Stadt ist voll, die Region nicht. Man muss nur in der richtigen Reihenfolge suchen.",
    ],
    sections: [
      {
        heading: "Ring für Ring erweitern, nicht aufs Geratewohl",
        paragraphs: [
          "Die Verfügbarkeit rund um Le Mans verhält sich wie Wellen: Zuerst gehen die fußläufigen Dörfer, dann die Stadt, dann jeder Ring nach außen. Suchen Sie also methodisch: 30 Minuten, dann 45, dann 60, dann 90. Jede Viertelstunde mehr Fahrt erschließt eine neue Schicht Hotels und Unterkünfte, mit schnell fallenden Preisen.",
        ],
        list: [
          "0-30 Min.: Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Spät schwierig, aber Stornierungen tauchen auf.",
          "30-60 Min.: La Flèche, Alençon, Sablé, Sillé-le-Guillaume. Der realistische Sweet Spot für Spätbucher.",
          "60-90 Min.: Tours, Angers, Laval, Chartres. Echte Städte, normale Preise, fast immer freie Zimmer.",
        ],
      },
      {
        heading: "Die Städte, die Ihr Wochenende retten",
        paragraphs: [
          "Tours, Angers und Laval sind die klassischen Retter: jeweils Tausende Hotelzimmer, Restaurants mit langen Öffnungszeiten und eine unkomplizierte Morgenfahrt, wenn man vor 7 Uhr startet. Laval hat eine direkte Bahnverbindung nach Le Mans, Tours ebenfalls: Ein Fahrer kann die Gruppe sogar absetzen und das Streckenparken komplett vermeiden.",
        ],
      },
      {
        heading: "Stornierungen jagen wie ein Profi",
        paragraphs: [
          "Die meisten Rennwochen-Buchungen werden mit kostenloser Stornierung getätigt, und zwischen 30 und 7 Tagen vor dem Rennen wird eine echte Welle von Zimmern frei, wenn Pläne platzen. Prüfen Sie die Karte in diesem Fenster täglich, am besten morgens. Aktivieren Sie einen Preisalarm, falls verfügbar, und seien Sie bereit, in Minuten zu buchen: Ein frei gewordenes Zimmer nahe der Strecke lebt etwa eine Stunde.",
          "Letzter Hebel: private Unterkünfte, die spät von Einheimischen eingestellt werden, die sich kurzfristig zum Vermieten entschließen. Neue Inserate erscheinen bis in die Rennwoche hinein: genau dafür gibt es diese Seite.",
        ],
      },
    ],
  },
  it: {
    title: "Tutto esaurito: il piano B che funziona davvero",
    description:
      "Le Mans sembra al completo per la settimana di gara? Non è quasi mai vero. La strategia anello per anello per dormire bene comunque, a un prezzo sano.",
    intro: [
      "Ogni anno, migliaia di appassionati digitano la stessa ricerca in preda al panico a poche settimane dalla gara: tutto intorno a Le Mans sembra esaurito. La verità degli habitué: la città è piena, la regione no. Bisogna solo cercare nell'ordine giusto.",
    ],
    sections: [
      {
        heading: "Allarga anello per anello, non a caso",
        paragraphs: [
          "La disponibilità intorno a Le Mans si comporta come onde: prima finiscono i paesi raggiungibili a piedi, poi la città, poi ogni anello verso l'esterno. Cerca quindi con metodo: 30 minuti, poi 45, poi 60, poi 90. Ogni quarto d'ora di guida in più sblocca un nuovo strato di hotel e case, con prezzi che calano in fretta.",
        ],
        list: [
          "0-30 min: Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Difficile tardi, ma le cancellazioni spuntano.",
          "30-60 min: La Flèche, Alençon, Sablé, Sillé-le-Guillaume. Il punto giusto per chi prenota tardi.",
          "60-90 min: Tours, Angers, Laval, Chartres. Vere città, prezzi normali, quasi sempre camere libere.",
        ],
      },
      {
        heading: "Le città che salvano il weekend",
        paragraphs: [
          "Tours, Angers e Laval sono i salvataggi classici: migliaia di camere ciascuna, ristoranti aperti fino a tardi e un viaggio mattutino semplice partendo prima delle 7. Laval ha un treno diretto per Le Mans, anche Tours: un autista può perfino lasciare il gruppo ed evitare del tutto il parcheggio del circuito.",
        ],
      },
      {
        heading: "Caccia alle cancellazioni come un habitué",
        paragraphs: [
          "La maggior parte delle prenotazioni della settimana di gara è fatta con cancellazione gratuita, e una vera ondata di camere si libera tra 30 e 7 giorni prima, quando i piani saltano. Controlla la mappa ogni giorno in quella finestra, soprattutto al mattino. Attiva un avviso di prezzo se la piattaforma lo offre, e sii pronto a prenotare in pochi minuti: una camera liberata vicino al circuito vive circa un'ora.",
          "Ultima leva: case e camere pubblicate tardi da residenti che decidono all'ultimo di affittare. Nuovi annunci compaiono fino alla settimana di gara: è esattamente la ragione d'essere di questo sito.",
        ],
      },
    ],
  },
  es: {
    title: "Todo está completo: el plan B que funciona de verdad",
    description:
      "¿Le Mans parece lleno para la semana de carrera? Casi nunca es verdad. La estrategia anillo a anillo para dormir bien igualmente, a un precio sano.",
    intro: [
      "Cada año, miles de aficionados teclean la misma búsqueda en pánico a pocas semanas de la carrera: todo alrededor de Le Mans parece agotado. La verdad de los habituales: la ciudad se llena, la región no. Solo hay que buscar en el orden correcto.",
    ],
    sections: [
      {
        heading: "Amplía anillo a anillo, no al azar",
        paragraphs: [
          "La disponibilidad alrededor de Le Mans se comporta como ondas: primero vuelan los pueblos a pie, luego la ciudad, luego cada anillo hacia fuera. Busca con método: 30 minutos, luego 45, luego 60, luego 90. Cada cuarto de hora extra de coche desbloquea una nueva capa de hoteles y casas con precios que bajan rápido.",
        ],
        list: [
          "0-30 min: Arnage, Mulsanne, Ruaudin, Changé, Écommoy. Difícil tarde, pero aparecen cancelaciones.",
          "30-60 min: La Flèche, Alençon, Sablé, Sillé-le-Guillaume. El punto dulce realista para reservas tardías.",
          "60-90 min: Tours, Angers, Laval, Chartres. Ciudades de verdad, precios normales, casi siempre quedan habitaciones.",
        ],
      },
      {
        heading: "Las ciudades que salvan tu fin de semana",
        paragraphs: [
          "Tours, Angers y Laval son los rescates clásicos: miles de habitaciones cada una, restaurantes abiertos hasta tarde y un trayecto matinal sencillo saliendo antes de las 7. Laval tiene tren directo a Le Mans, Tours también: un conductor puede incluso dejar al grupo y saltarse por completo el aparcamiento del circuito.",
        ],
      },
      {
        heading: "Caza cancelaciones como un habitual",
        paragraphs: [
          "La mayoría de las reservas de semana de carrera se hacen con cancelación gratuita, y entre 30 y 7 días antes se libera una ola real de habitaciones cuando los planes se caen. Mira el mapa a diario en esa ventana, sobre todo por la mañana. Activa una alerta de precio si tu plataforma la ofrece, y prepárate para reservar en minutos: una habitación liberada cerca del circuito vive más o menos una hora.",
          "Última palanca: casas y habitaciones publicadas tarde por vecinos que deciden alquilar en el último momento. Aparecen anuncios nuevos hasta la misma semana de carrera: exactamente para eso existe esta web.",
        ],
      },
    ],
  },
};
