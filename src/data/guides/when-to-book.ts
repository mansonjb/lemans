import type { GuideContent, Locale } from "@/lib/types";

export const whenToBook: Record<Locale, GuideContent> = {
  en: {
    title: "When to book for Le Mans: the regular's calendar",
    description:
      "The exact booking timeline regulars follow for race weekends at Le Mans, from a year out to last-minute cancellation hunting.",
    intro: [
      "Accommodation around Le Mans does not sell out all at once: it empties in a predictable order, ring by ring, month by month. Once you know the timeline, you can decide late and still sleep well. Here it is, the way regulars actually play it.",
    ],
    sections: [
      {
        heading: "The timeline that matters",
        paragraphs: [
          "Two rules before the calendar. One: always book with free cancellation, it costs nothing and turns every decision into a reversible one. Two: the biggest race weekend (June) moves about three months earlier than the others at every step.",
        ],
        list: [
          "12 to 9 months out: the walkable ring and the best houses go. Groups rebook the same houses every year, new inventory is rare.",
          "9 to 6 months out: hotels in Le Mans city fill, prices step up. The 30-minute ring is still open.",
          "6 to 3 months out: the 30-minute ring tightens, the 60-minute towns start filling for June.",
          "Under 3 months: think Tours, Angers, Laval, Alençon, plus cancellation hunting closer in.",
          "Final month: a real wave of free-cancellation rooms is released between day 30 and day 7. Check daily.",
        ],
      },
      {
        heading: "April, May, July, October: gentler curves",
        paragraphs: [
          "The motorcycle and truck weekends follow the same order but on a softer curve: what takes 10 months for June takes 5 or 6 for them. A solid plan made 4 months ahead usually lands a base within 30 minutes of the circuit.",
        ],
      },
      {
        heading: "Book the next edition on your way home",
        paragraphs: [
          "The single best trick: regulars book next year's stay the week after this year's race, when owners post their dates and everything is still open. If you know you are coming back, act in that window and the whole problem disappears.",
        ],
      },
    ],
  },
  fr: {
    title: "Quand réserver pour Le Mans : le calendrier de l'habitué",
    description:
      "La chronologie exacte que suivent les habitués pour réserver leur hébergement de semaine de course au Mans, d'un an avant jusqu'à la chasse aux annulations.",
    intro: [
      "L'hébergement autour du Mans ne part pas d'un coup : il se vide dans un ordre prévisible, couronne par couronne, mois par mois. Une fois la chronologie en tête, on peut décider tard et quand même bien dormir. La voici, telle que les habitués la jouent vraiment.",
    ],
    sections: [
      {
        heading: "La chronologie qui compte",
        paragraphs: [
          "Deux règles avant le calendrier. Un : réservez toujours avec annulation gratuite, ça ne coûte rien et ça rend chaque décision réversible. Deux : le plus gros week-end (juin) avance d'environ trois mois sur les autres à chaque étape.",
        ],
        list: [
          "12 à 9 mois avant : la couronne à pied et les meilleures maisons partent. Les groupes rebookent les mêmes maisons chaque année, l'offre nouvelle est rare.",
          "9 à 6 mois avant : les hôtels du Mans se remplissent, les prix montent d'un cran. La couronne des 30 minutes reste ouverte.",
          "6 à 3 mois avant : la couronne des 30 minutes se tend, les villes à 60 minutes commencent à se remplir pour juin.",
          "Moins de 3 mois : pensez Tours, Angers, Laval, Alençon, plus la chasse aux annulations plus près.",
          "Dernier mois : une vraie vague de chambres annulables se libère entre J-30 et J-7. Vérifiez chaque jour.",
        ],
      },
      {
        heading: "Avril, mai, juillet, octobre : des courbes plus douces",
        paragraphs: [
          "Les week-ends moto et camions suivent le même ordre mais sur une courbe plus douce : ce qui prend 10 mois pour juin en prend 5 ou 6 pour eux. Un plan solide monté 4 mois avant décroche en général un camp de base à moins de 30 minutes du circuit.",
        ],
      },
      {
        heading: "Réservez l'édition suivante sur le chemin du retour",
        paragraphs: [
          "Le meilleur réflexe : les habitués réservent le séjour de l'année suivante la semaine qui suit la course, quand les propriétaires publient leurs dates et que tout est encore ouvert. Si vous savez que vous revenez, agissez dans cette fenêtre et le problème disparaît.",
        ],
      },
    ],
  },
  nl: {
    title: "Wanneer boeken voor Le Mans: de kalender van de vaste bezoeker",
    description:
      "De exacte boekingstijdlijn die vaste bezoekers volgen voor de raceweekenden in Le Mans, van een jaar vooruit tot last-minute annuleringsjacht.",
    intro: [
      "Accommodatie rond Le Mans raakt niet in één keer vol: het loopt leeg in een voorspelbare volgorde, ring per ring, maand per maand. Wie de tijdlijn kent, kan laat beslissen en toch goed slapen. Hier is hij, zoals vaste bezoekers het echt spelen.",
    ],
    sections: [
      {
        heading: "De tijdlijn die telt",
        paragraphs: [
          "Twee regels vooraf. Eén: boek altijd met gratis annulering, het kost niets en maakt elke beslissing omkeerbaar. Twee: het grootste raceweekend (juni) loopt bij elke stap zo'n drie maanden voor op de rest.",
        ],
        list: [
          "12 tot 9 maanden vooraf: de loopafstand-ring en de beste huizen gaan weg. Groepen herboeken jaar na jaar dezelfde huizen.",
          "9 tot 6 maanden: de hotels in Le Mans lopen vol, prijzen gaan een stap omhoog. De 30-minutenring is nog open.",
          "6 tot 3 maanden: de 30-minutenring wordt krap, de steden op 60 minuten beginnen te vullen voor juni.",
          "Minder dan 3 maanden: denk aan Tours, Angers, Laval, Alençon, plus annuleringsjacht dichterbij.",
          "Laatste maand: tussen dag 30 en dag 7 komt een echte golf annuleerbare kamers vrij. Dagelijks checken.",
        ],
      },
      {
        heading: "April, mei, juli, oktober: vriendelijkere curves",
        paragraphs: [
          "De motor- en truckweekenden volgen dezelfde volgorde maar op een zachtere curve: wat voor juni 10 maanden duurt, duurt voor hen 5 of 6. Een solide plan 4 maanden vooraf levert meestal een basis binnen 30 minuten van het circuit op.",
        ],
      },
      {
        heading: "Boek de volgende editie op de terugweg",
        paragraphs: [
          "De beste truc: vaste bezoekers boeken het verblijf van volgend jaar in de week na de race, wanneer eigenaren hun data publiceren en alles nog open is. Weet u dat u terugkomt, handel dan in dat venster en het hele probleem verdwijnt.",
        ],
      },
    ],
  },
  de: {
    title: "Wann für Le Mans buchen: der Kalender der Stammgäste",
    description:
      "Der genaue Buchungsfahrplan, dem Stammgäste für die Rennwochenenden in Le Mans folgen, von einem Jahr im Voraus bis zur Last-Minute-Stornojagd.",
    intro: [
      "Die Unterkünfte rund um Le Mans sind nicht auf einen Schlag weg: Sie leeren sich in vorhersehbarer Reihenfolge, Ring für Ring, Monat für Monat. Wer den Fahrplan kennt, kann spät entscheiden und trotzdem gut schlafen. Hier ist er, so wie Stammgäste ihn wirklich spielen.",
    ],
    sections: [
      {
        heading: "Der Fahrplan, der zählt",
        paragraphs: [
          "Zwei Regeln vorab. Erstens: immer mit kostenloser Stornierung buchen, es kostet nichts und macht jede Entscheidung umkehrbar. Zweitens: Das größte Rennwochenende (Juni) ist bei jedem Schritt etwa drei Monate früher dran als die anderen.",
        ],
        list: [
          "12 bis 9 Monate vorher: Der fußläufige Ring und die besten Häuser gehen weg. Gruppen buchen Jahr für Jahr dieselben Häuser.",
          "9 bis 6 Monate: Die Hotels in Le Mans füllen sich, die Preise steigen eine Stufe. Der 30-Minuten-Ring ist noch offen.",
          "6 bis 3 Monate: Der 30-Minuten-Ring wird eng, die Städte bei 60 Minuten füllen sich für Juni.",
          "Unter 3 Monate: Tours, Angers, Laval, Alençon, dazu Stornojagd näher an der Strecke.",
          "Letzter Monat: Zwischen Tag 30 und Tag 7 wird eine echte Welle stornierbarer Zimmer frei. Täglich prüfen.",
        ],
      },
      {
        heading: "April, Mai, Juli, Oktober: sanftere Kurven",
        paragraphs: [
          "Die Motorrad- und Truck-Wochenenden folgen derselben Reihenfolge, aber auf einer weicheren Kurve: Was für Juni 10 Monate dauert, dauert bei ihnen 5 oder 6. Ein solider Plan 4 Monate im Voraus bringt meist ein Basislager unter 30 Minuten von der Strecke.",
        ],
      },
      {
        heading: "Die nächste Ausgabe auf dem Heimweg buchen",
        paragraphs: [
          "Der beste Trick: Stammgäste buchen den Aufenthalt fürs nächste Jahr in der Woche nach dem Rennen, wenn Eigentümer ihre Termine einstellen und alles noch offen ist. Wer weiß, dass er wiederkommt, handelt in diesem Fenster, und das ganze Problem verschwindet.",
        ],
      },
    ],
  },
  it: {
    title: "Quando prenotare per Le Mans: il calendario dell'habitué",
    description:
      "La cronologia esatta che gli habitué seguono per prenotare l'alloggio dei weekend di gara a Le Mans, da un anno prima alla caccia alle cancellazioni.",
    intro: [
      "Gli alloggi intorno a Le Mans non finiscono tutti in una volta: si svuotano in un ordine prevedibile, anello per anello, mese per mese. Conoscendo la cronologia, puoi decidere tardi e dormire comunque bene. Eccola, come la giocano davvero gli habitué.",
    ],
    sections: [
      {
        heading: "La cronologia che conta",
        paragraphs: [
          "Due regole prima del calendario. Uno: prenota sempre con cancellazione gratuita, non costa nulla e rende ogni decisione reversibile. Due: il weekend più grande (giugno) anticipa di circa tre mesi gli altri a ogni passaggio.",
        ],
        list: [
          "Da 12 a 9 mesi prima: l'anello a piedi e le case migliori spariscono. I gruppi riprenotano le stesse case ogni anno.",
          "Da 9 a 6 mesi: gli hotel di Le Mans si riempiono, i prezzi salgono di un gradino. L'anello dei 30 minuti è ancora aperto.",
          "Da 6 a 3 mesi: l'anello dei 30 minuti si stringe, le città a 60 minuti iniziano a riempirsi per giugno.",
          "Meno di 3 mesi: pensa a Tours, Angers, Laval, Alençon, più la caccia alle cancellazioni più vicino.",
          "Ultimo mese: tra il giorno 30 e il giorno 7 si libera una vera ondata di camere cancellabili. Controlla ogni giorno.",
        ],
      },
      {
        heading: "Aprile, maggio, luglio, ottobre: curve più dolci",
        paragraphs: [
          "I weekend delle moto e dei camion seguono lo stesso ordine ma su una curva più morbida: ciò che per giugno richiede 10 mesi, per loro ne richiede 5 o 6. Un piano solido fatto 4 mesi prima di solito porta una base entro 30 minuti dal circuito.",
        ],
      },
      {
        heading: "Prenota l'edizione successiva sulla via del ritorno",
        paragraphs: [
          "Il trucco migliore: gli habitué prenotano il soggiorno dell'anno dopo nella settimana successiva alla gara, quando i proprietari pubblicano le date e tutto è ancora aperto. Se sai che tornerai, agisci in quella finestra e il problema sparisce.",
        ],
      },
    ],
  },
  es: {
    title: "Cuándo reservar para Le Mans: el calendario del habitual",
    description:
      "La cronología exacta que siguen los habituales para reservar alojamiento en los fines de semana de carreras de Le Mans, desde un año antes hasta la caza de cancelaciones.",
    intro: [
      "El alojamiento alrededor de Le Mans no se agota de golpe: se vacía en un orden predecible, anillo a anillo, mes a mes. Conociendo la cronología, puedes decidir tarde y aun así dormir bien. Aquí está, tal y como la juegan los habituales.",
    ],
    sections: [
      {
        heading: "La cronología que importa",
        paragraphs: [
          "Dos reglas antes del calendario. Una: reserva siempre con cancelación gratuita, no cuesta nada y hace reversible cada decisión. Dos: el fin de semana más grande (junio) va unos tres meses por delante de los demás en cada paso.",
        ],
        list: [
          "De 12 a 9 meses antes: el anillo a pie y las mejores casas vuelan. Los grupos repiten las mismas casas cada año.",
          "De 9 a 6 meses: los hoteles de Le Mans se llenan, los precios suben un escalón. El anillo de 30 minutos sigue abierto.",
          "De 6 a 3 meses: el anillo de 30 minutos se tensa, las ciudades a 60 minutos empiezan a llenarse para junio.",
          "Menos de 3 meses: piensa en Tours, Angers, Laval, Alençon, más la caza de cancelaciones más cerca.",
          "Último mes: entre el día 30 y el día 7 se libera una ola real de habitaciones cancelables. Mira a diario.",
        ],
      },
      {
        heading: "Abril, mayo, julio, octubre: curvas más suaves",
        paragraphs: [
          "Los fines de semana de motos y camiones siguen el mismo orden pero con una curva más suave: lo que para junio tarda 10 meses, para ellos tarda 5 o 6. Un plan sólido hecho 4 meses antes suele conseguir base a menos de 30 minutos del circuito.",
        ],
      },
      {
        heading: "Reserva la próxima edición de camino a casa",
        paragraphs: [
          "El mejor truco: los habituales reservan la estancia del año siguiente la semana después de la carrera, cuando los propietarios publican sus fechas y todo sigue abierto. Si sabes que vuelves, actúa en esa ventana y el problema desaparece.",
        ],
      },
    ],
  },
};
