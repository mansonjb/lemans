import type { GuideContent, Locale } from "@/lib/types";

export const gettingThere: Record<Locale, GuideContent> = {
  en: {
    title: "Getting to the circuit: car, tram, train and bike",
    description:
      "How to actually reach the Le Mans circuit on race days: realistic driving and parking advice, the tram trick, trains from nearby cities and the bike option.",
    intro: [
      "Where you sleep decides how you travel. The circuit sits on the southern edge of Le Mans, wedged between the D338 and the A11/A28 motorways, and on race days every approach slows down. Here is how each option really plays out.",
    ],
    sections: [
      {
        heading: "By car: timing beats route",
        paragraphs: [
          "From the south (Tours, Écommoy) you arrive via the D338 or A28; from the west (Laval, Angers) via the A11 then the southern ring road; from the north (Alençon) via the A28. Whichever way, the last kilometres are the slow part: on big race days, count 30 to 60 extra minutes for the final approach after mid-morning.",
          "The regulars' rule: gates side, be parked before 8.30am or after the start. Public car parks around the circuit fill in order of distance, and leaving right after the finish is the slowest hour of the week. Either leave before the end, or have a relaxed meal and leave an hour later.",
        ],
      },
      {
        heading: "The tram trick from the city centre",
        paragraphs: [
          "If you stay in Le Mans city centre, skip the car entirely: the T1 tram runs from the centre towards Antarès, a short walk from the circuit entrances. On race days it runs reinforced services. It turns the centre into one of the most practical bases of all, no parking stress, and you can get back to a real bed after the night stints.",
        ],
      },
      {
        heading: "By train, plus the bike option",
        paragraphs: [
          "Le Mans station is on the TGV line from Paris (under an hour) and has regional links from Tours, Angers, Laval and Alençon. From the station, the tram takes over. This is why bases in those cities work so well late in the game: one person can drive the gear, everyone else rides the train.",
          "Finally, the local secret: a bicycle. From Arnage, Mulsanne, Ruaudin or the southern districts, you ride to the gates in 10 to 20 minutes, past all the queues. Many rentals in the first ring keep a few bikes for guests, ask before you book.",
        ],
      },
    ],
  },
  fr: {
    title: "Rejoindre le circuit : voiture, tram, train et vélo",
    description:
      "Comment rejoindre vraiment le circuit du Mans les jours de course : conseils réalistes de route et de stationnement, l'astuce du tramway, les trains depuis les villes voisines et l'option vélo.",
    intro: [
      "L'endroit où vous dormez décide de votre façon de venir. Le circuit est au sud du Mans, entre la D338 et les autoroutes A11/A28, et les jours de course tous les accès ralentissent. Voici comment chaque option se passe vraiment.",
    ],
    sections: [
      {
        heading: "En voiture : l'horaire compte plus que l'itinéraire",
        paragraphs: [
          "Depuis le sud (Tours, Écommoy), on arrive par la D338 ou l'A28 ; depuis l'ouest (Laval, Angers) par l'A11 puis la rocade sud ; depuis le nord (Alençon) par l'A28. Dans tous les cas, ce sont les derniers kilomètres qui coincent : les grands jours de course, comptez 30 à 60 minutes de plus pour l'approche finale après le milieu de matinée.",
          "La règle des habitués : garé avant 8 h 30, ou après le départ. Les parkings publics autour du circuit se remplissent par ordre de distance, et repartir juste après l'arrivée est l'heure la plus lente de la semaine. Partez avant la fin, ou prenez un vrai repas et repartez une heure plus tard.",
        ],
      },
      {
        heading: "L'astuce du tramway depuis le centre-ville",
        paragraphs: [
          "Si vous dormez au Mans centre, oubliez la voiture : le tram T1 relie le centre à Antarès, à quelques minutes à pied des entrées du circuit, avec un service renforcé les jours de course. Ça fait du centre-ville l'un des camps de base les plus pratiques : zéro stress de parking, et on retrouve un vrai lit après les relais de nuit.",
        ],
      },
      {
        heading: "En train, et l'option vélo",
        paragraphs: [
          "La gare du Mans est sur la ligne TGV depuis Paris (moins d'une heure) et reliée en TER à Tours, Angers, Laval et Alençon. Depuis la gare, le tram prend le relais. C'est pour ça que les camps de base dans ces villes marchent si bien en réservation tardive : une personne conduit le matériel, les autres prennent le train.",
          "Enfin, le secret local : le vélo. Depuis Arnage, Mulsanne, Ruaudin ou les quartiers sud, on rejoint les entrées en 10 à 20 minutes, en doublant toutes les files. Beaucoup de locations de la première couronne gardent quelques vélos pour les invités : demandez avant de réserver.",
        ],
      },
    ],
  },
  nl: {
    title: "Naar het circuit: auto, tram, trein en fiets",
    description:
      "Hoe u op racedagen echt bij het circuit van Le Mans komt: realistisch rij- en parkeeradvies, de tramtruc, treinen vanuit nabije steden en de fietsoptie.",
    intro: [
      "Waar u slaapt, bepaalt hoe u reist. Het circuit ligt aan de zuidrand van Le Mans, tussen de D338 en de snelwegen A11/A28, en op racedagen loopt elke toegang vast. Zo pakt elke optie echt uit.",
    ],
    sections: [
      {
        heading: "Met de auto: timing wint van route",
        paragraphs: [
          "Vanuit het zuiden (Tours, Écommoy) komt u via de D338 of A28; vanuit het westen (Laval, Angers) via de A11 en de zuidelijke ringweg; vanuit het noorden (Alençon) via de A28. Hoe dan ook zijn de laatste kilometers het trage stuk: op grote racedagen rekent u na de ochtend op 30 tot 60 minuten extra voor de eindaanloop.",
          "De regel van de vaste bezoekers: geparkeerd vóór 8.30 uur, of pas na de start. De openbare parkeerterreinen rond het circuit vullen op volgorde van afstand, en direct na de finish wegrijden is het traagste uur van de week. Vertrek vóór het einde, of eet rustig en vertrek een uur later.",
        ],
      },
      {
        heading: "De tramtruc vanuit het centrum",
        paragraphs: [
          "Slaapt u in het centrum van Le Mans, vergeet dan de auto: tram T1 rijdt van het centrum richting Antarès, op een paar minuten lopen van de circuitingangen, met extra diensten op racedagen. Dat maakt het centrum een van de praktischste bases: geen parkeerstress, en na de nachtelijke stints wacht een echt bed.",
        ],
      },
      {
        heading: "Met de trein, plus de fietsoptie",
        paragraphs: [
          "Station Le Mans ligt aan de TGV-lijn vanuit Parijs (minder dan een uur) en heeft regionale verbindingen met Tours, Angers, Laval en Alençon. Vanaf het station neemt de tram het over. Daarom werken bases in die steden zo goed voor late boekers: één persoon rijdt met de spullen, de rest pakt de trein.",
          "Tot slot het lokale geheim: de fiets. Vanuit Arnage, Mulsanne, Ruaudin of de zuidelijke wijken fietst u in 10 tot 20 minuten naar de poorten, langs alle files. Veel huizen in de eerste ring hebben fietsen voor gasten: vraag ernaar vóór u boekt.",
        ],
      },
    ],
  },
  de: {
    title: "Zur Strecke kommen: Auto, Tram, Zug und Fahrrad",
    description:
      "Wie man die Strecke von Le Mans an Renntagen wirklich erreicht: realistische Fahr- und Parktipps, der Tram-Trick, Züge aus den Nachbarstädten und die Fahrradoption.",
    intro: [
      "Wo Sie schlafen, entscheidet, wie Sie anreisen. Die Strecke liegt am Südrand von Le Mans, zwischen der D338 und den Autobahnen A11/A28, und an Renntagen wird jede Zufahrt langsam. So laufen die Optionen wirklich.",
    ],
    sections: [
      {
        heading: "Mit dem Auto: Timing schlägt Route",
        paragraphs: [
          "Aus dem Süden (Tours, Écommoy) kommt man über die D338 oder A28; aus dem Westen (Laval, Angers) über die A11 und die Südumgehung; aus dem Norden (Alençon) über die A28. In jedem Fall sind die letzten Kilometer der langsame Teil: An großen Renntagen rechnen Sie ab dem Vormittag mit 30 bis 60 Minuten extra für die Schlussanfahrt.",
          "Die Regel der Stammgäste: vor 8.30 Uhr geparkt, oder erst nach dem Start. Die öffentlichen Parkplätze rund um die Strecke füllen sich nach Entfernung, und direkt nach dem Zieleinlauf loszufahren ist die langsamste Stunde der Woche. Entweder vor dem Ende fahren, oder in Ruhe essen und eine Stunde später los.",
        ],
      },
      {
        heading: "Der Tram-Trick aus dem Stadtzentrum",
        paragraphs: [
          "Wer im Zentrum von Le Mans übernachtet, lässt das Auto stehen: Die Tram T1 fährt vom Zentrum Richtung Antarès, wenige Gehminuten von den Streckeneingängen, an Renntagen mit verstärktem Takt. Das macht das Zentrum zu einer der praktischsten Basen überhaupt: kein Parkstress, und nach den Nachtstints wartet ein echtes Bett.",
        ],
      },
      {
        heading: "Mit dem Zug, plus die Fahrradoption",
        paragraphs: [
          "Der Bahnhof Le Mans liegt an der TGV-Strecke von Paris (unter einer Stunde) und ist regional mit Tours, Angers, Laval und Alençon verbunden. Ab dem Bahnhof übernimmt die Tram. Genau deshalb funktionieren Basen in diesen Städten bei späten Buchungen so gut: Einer fährt das Gepäck, der Rest nimmt den Zug.",
          "Zum Schluss das lokale Geheimnis: das Fahrrad. Von Arnage, Mulsanne, Ruaudin oder den Südvierteln radelt man in 10 bis 20 Minuten an allen Schlangen vorbei zu den Toren. Viele Unterkünfte im ersten Ring halten Räder für Gäste bereit: vor der Buchung fragen.",
        ],
      },
    ],
  },
  it: {
    title: "Arrivare al circuito: auto, tram, treno e bici",
    description:
      "Come raggiungere davvero il circuito di Le Mans nei giorni di gara: consigli realistici su guida e parcheggio, il trucco del tram, i treni dalle città vicine e l'opzione bici.",
    intro: [
      "Dove dormi decide come ti muovi. Il circuito è sul bordo sud di Le Mans, tra la D338 e le autostrade A11/A28, e nei giorni di gara ogni accesso rallenta. Ecco come va davvero ciascuna opzione.",
    ],
    sections: [
      {
        heading: "In auto: l'orario batte il percorso",
        paragraphs: [
          "Da sud (Tours, Écommoy) si arriva dalla D338 o dall'A28; da ovest (Laval, Angers) dall'A11 e poi dalla tangenziale sud; da nord (Alençon) dall'A28. In ogni caso, sono gli ultimi chilometri a bloccarsi: nei grandi giorni di gara, conta 30-60 minuti in più per l'avvicinamento finale dopo metà mattina.",
          "La regola degli habitué: parcheggiati prima delle 8.30, o dopo la partenza. I parcheggi pubblici intorno al circuito si riempiono in ordine di distanza, e ripartire subito dopo l'arrivo è l'ora più lenta della settimana. Parti prima della fine, oppure mangia con calma e riparti un'ora dopo.",
        ],
      },
      {
        heading: "Il trucco del tram dal centro",
        paragraphs: [
          "Se dormi nel centro di Le Mans, dimentica l'auto: il tram T1 collega il centro ad Antarès, a pochi minuti a piedi dagli ingressi del circuito, con corse rinforzate nei giorni di gara. Questo rende il centro una delle basi più pratiche in assoluto: zero stress da parcheggio, e dopo gli stint notturni ti aspetta un letto vero.",
        ],
      },
      {
        heading: "In treno, più l'opzione bici",
        paragraphs: [
          "La stazione di Le Mans è sulla linea TGV da Parigi (meno di un'ora) e collegata con regionali a Tours, Angers, Laval e Alençon. Dalla stazione, il tram fa il resto. Ecco perché le basi in quelle città funzionano così bene per chi prenota tardi: uno guida con l'attrezzatura, gli altri prendono il treno.",
          "Infine, il segreto locale: la bicicletta. Da Arnage, Mulsanne, Ruaudin o dai quartieri sud, si arriva ai cancelli in 10-20 minuti, superando tutte le code. Molte case del primo anello tengono qualche bici per gli ospiti: chiedi prima di prenotare.",
        ],
      },
    ],
  },
  es: {
    title: "Llegar al circuito: coche, tranvía, tren y bici",
    description:
      "Cómo llegar de verdad al circuito de Le Mans los días de carrera: consejos realistas de conducción y aparcamiento, el truco del tranvía, trenes desde ciudades cercanas y la opción bici.",
    intro: [
      "Dónde duermes decide cómo te mueves. El circuito está en el borde sur de Le Mans, entre la D338 y las autopistas A11/A28, y los días de carrera todos los accesos se ralentizan. Así funciona de verdad cada opción.",
    ],
    sections: [
      {
        heading: "En coche: el horario gana a la ruta",
        paragraphs: [
          "Desde el sur (Tours, Écommoy) se llega por la D338 o la A28; desde el oeste (Laval, Angers) por la A11 y la ronda sur; desde el norte (Alençon) por la A28. En todos los casos, los últimos kilómetros son la parte lenta: en los grandes días de carrera, cuenta de 30 a 60 minutos extra para la aproximación final a partir de media mañana.",
          "La regla de los habituales: aparcado antes de las 8.30, o después de la salida. Los aparcamientos públicos alrededor del circuito se llenan por orden de distancia, y salir justo después de la meta es la hora más lenta de la semana. Sal antes del final, o come tranquilo y sal una hora más tarde.",
        ],
      },
      {
        heading: "El truco del tranvía desde el centro",
        paragraphs: [
          "Si duermes en el centro de Le Mans, olvida el coche: el tranvía T1 va del centro hacia Antarès, a pocos minutos a pie de las entradas del circuito, con servicio reforzado los días de carrera. Eso convierte el centro en una de las bases más prácticas: cero estrés de aparcamiento, y tras los relevos nocturnos te espera una cama de verdad.",
        ],
      },
      {
        heading: "En tren, más la opción bici",
        paragraphs: [
          "La estación de Le Mans está en la línea TGV desde París (menos de una hora) y conectada con regionales a Tours, Angers, Laval y Alençon. Desde la estación, el tranvía hace el resto. Por eso las bases en esas ciudades funcionan tan bien para reservas tardías: uno conduce con el material y los demás van en tren.",
          "Por último, el secreto local: la bicicleta. Desde Arnage, Mulsanne, Ruaudin o los barrios del sur, llegas a las puertas en 10-20 minutos, adelantando todas las colas. Muchas casas del primer anillo guardan bicis para los huéspedes: pregunta antes de reservar.",
        ],
      },
    ],
  },
};
