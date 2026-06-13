import type { Place } from "@/lib/types";
import type { Dict } from "./en";

export const it: Dict = {
  locale: "it",
  siteName: "Le Mans Stays",
  tagline: "Dove dormire per i weekend di gara a Le Mans",

  nav: {
    events: "Weekend di gara",
    places: "Dove dormire",
    guides: "Guide",
    listYourHome: "Affitta la tua casa",
  },

  common: {
    daysToGo: (d: number) => `Mancano ${d} giorni`,
    datesTBC: "date da confermare",
    bookAhead: (m: number) =>
      `Gli alloggi per questo weekend si esauriscono di solito con ${m}+ mesi di anticipo. Prima prenoti, più vicino e più economico dormi.`,
    crowd: (c: string) => `${c} spettatori attesi`,
    minToCircuit: (min: number) => `${min} min dal circuito`,
    walkToCircuit: "Circuito raggiungibile a piedi",
    raceWeekTraffic: (min: number) => `${min} min durante la settimana di gara`,
    km: (km: number) => `a ${km} km dal circuito`,
    seeAvailability: "Vedi disponibilità",
    mapNote:
      "Prezzi e disponibilità della mappa sono caricati in tempo reale dai nostri partner di prenotazione. Prenotare dalla mappa sostiene questo sito, senza costi extra per te.",
    faqHeading: "Domande frequenti",
    ringNames: {
      1: "Circuito a piedi o in bici",
      2: "A meno di 30 minuti",
      3: "Tra 30 e 60 minuti",
      4: "Tra 60 e 90 minuti",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Parcheggio facile",
      medium: "Parcheggio con un po' di pazienza",
      hard: "Parcheggio difficile, arriva presto",
    },
    station: "Stazione ferroviaria",
    tram: "Tram per il circuito",
    nextEvents: "Prossimi weekend di gara",
    exploreZones: "Dove dormire, zona per zona",
    exploreTypes: "Scegli il tuo stile",
    guidesHeading: "Guide di sopravvivenza",
    readGuide: "Leggi la guida",
    viewZone: "Vedi questa zona",
    viewEvent: "Organizza il soggiorno",
    updated: "Aggiornato per la stagione 2027",
    backHome: "Home",
    languageName: "Italiano",
  },

  eventNames: {
    lm24: { name: "24 Ore di Le Mans", short: "Le Mans 24h" },
    motos: { name: "24 Heures Motos", short: "24h Moto" },
    motogp: { name: "MotoGP di Francia a Le Mans", short: "Le Mans MotoGP" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24 Ore dei Camion", short: "24h Camion" },
  },

  home: {
    title: "Dove dormire per i weekend di gara a Le Mans | Hotel, campeggi, case",
    metaDescription:
      "Guida indipendente agli alloggi per le settimane di gara a Le Mans: hotel, campeggi privati e case vacanza intorno al circuito, confrontati sui tempi di guida reali. Prenota presto, dormi vicino.",
    heroTitle: "Dormi a due passi dalla pista",
    heroSub:
      "A ogni grande weekend di gara, Le Mans è al completo con mesi di anticipo. Mappiamo hotel, case vacanza e campeggi privati in base al tempo di guida reale verso il circuito, così prenoti la base giusta prima che sparisca.",
    ctaPrimary: "Trova un alloggio",
    ctaSecondary: "Vedi i weekend di gara",
    zonesSub:
      "Dai paesi da cui si raggiunge il circuito a piedi alle città a un'ora con disponibilità tardiva: scegli il tuo anello, controlla i tempi reali della settimana di gara, prenota quello che torna.",
    leadTitle: "Hai una casa vicino a Le Mans?",
    leadText:
      "Gli appassionati cercano case, camere e piazzole ogni anno ad aprile, maggio, giugno, luglio e ottobre. Proponi la tua proprietà e ricevi richieste dirette.",
    leadCta: "Affitta la tua casa",
    seoTitle: "Il problema dell'alloggio, risolto in anticipo",
    seoText: [
      "Le Mans ospita cinque grandi weekend di gara all'anno e la città non ha abbastanza letti per quelle folle. Gli hotel si riempiono quasi un anno prima, i prezzi triplicano e i ritardatari improvvisano.",
      "Questo sito fa una cosa sola: ti mostra dove c'è davvero ancora posto per ogni weekend di gara, anello per anello intorno al circuito, con tempi di guida onesti per il traffico di gara. Hotel, case vacanza e campeggi privati, confrontati su una sola mappa.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Dove dormire per la ${name} ${year}: hotel, campeggi, case`,
    metaDescription: (name: string, year: number) =>
      `Guida agli alloggi per la ${name} ${year}: hotel, campeggi privati e case vacanza vicino al circuito di Le Mans, confrontati sui tempi di guida reali. Prenota prima che finisca tutto.`,
    heroKicker: "Weekend di gara",
    bookingHeading: "Prenota prima degli altri",
    mapHeading: (name: string) => `Disponibilità in tempo reale per la ${name}`,
    mapSub:
      "La mappa è preimpostata sulle date di gara. Allontana lo zoom per vedere opzioni più lontane dal circuito: i prezzi calano in fretta con la distanza.",
    zonesHeading: "Dove piazzare il campo base",
    zonesSub: (name: string) =>
      `La zona giusta dipende da quando prenoti. Per la ${name} i paesi raggiungibili a piedi finiscono per primi, poi la città, poi i comuni intorno. Ecco il quadro onesto, anello per anello.`,
    typesHeading: "Hotel, casa o campeggio?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `Quando conviene prenotare l'alloggio per la ${name} ${year}?`,
        a: `Il prima possibile. Gli hotel e le case più vicine spariscono di solito ${months}+ mesi prima della gara. Prenotare con cancellazione gratuita appena escono le date è la mossa standard degli habitué.`,
      },
      {
        q: `Si può dormire a distanza a piedi dal circuito?`,
        a: `Sì, ma l'offerta è ridotta: pochi hotel, case di privati ad Arnage, Mulsanne e Ruaudin, e piazzole private aperte per la settimana di gara. Finiscono per prime: prenota con mesi di anticipo o allargati all'anello dei 30 minuti.`,
      },
      {
        q: `Sembra tutto al completo. E adesso?`,
        a: `Allarga il raggio. I paesi a 30-60 minuti (La Flèche, Alençon) e città come Tours, Angers o Laval mantengono disponibilità molto più a lungo, a prezzi normali. La strategia completa è nella nostra guida piano B.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Dormire a ${name} per le gare di Le Mans: hotel e case`,
    metaDescription: (name: string, min: number) =>
      `${name} è una buona base per la settimana di gara a Le Mans? Tempi di guida reali (${min} min in condizioni normali, di più nel traffico di gara), parcheggio, trasporti e disponibilità in tempo reale.`,
    heroKicker: "Guida di zona",
    statsHeading: "I numeri che contano",
    statDistance: "Distanza dal circuito",
    statNormal: "Guida normale",
    statRaceWeek: "Guida settimana di gara",
    statWalk: "A piedi",
    mapHeading: (name: string) => `Dormire a ${name}`,
    eventsHeading: "Vale per ogni weekend di gara",
    eventsSub:
      "La stessa base, cinque weekend di gara all'anno. La pressione cambia: giugno è estremo, aprile e ottobre sono più tranquilli.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} è attaccata al circuito, a ${p.km} km dagli ingressi principali. Dormendo qui dimentichi l'auto: si entra a piedi o in bici, si torna dopo gli stint notturni e non si fa mai coda per un parcheggio. È l'anello più richiesto attorno alla pista, con l'offerta più piccola: soprattutto case di privati, camere e qualche piazzola aperta per la settimana di gara.`,
      2: (p: Place) =>
        `${p.name} è nel punto giusto: circa ${p.driveMin} minuti dal circuito in un giorno normale, intorno a ${p.raceWeekMin} nella settimana di gara. Trovi veri hotel, supermercati e ristoranti, con una possibilità concreta di disponibilità se prenoti con qualche mese di anticipo invece di un anno.`,
      3: (p: Place) =>
        `${p.name} è il compromesso intelligente quando gli anelli interni sono pieni: ${p.driveMin} minuti dalla pista in condizioni normali, circa ${p.raceWeekMin} nel traffico di gara. I prezzi restano quasi normali anche nella settimana di gara, e partendo presto sarai al circuito prima del warm-up del mattino.`,
      4: (p: Place) =>
        `${p.name} è l'alleata di chi prenota tardi: una vera città a circa ${p.driveMin} minuti dal circuito (conta ${p.raceWeekMin} nel traffico della settimana di gara). Quando intorno a Le Mans è tutto finito o a prezzi assurdi, ${p.name} mantiene hotel normali a tariffe normali, con ristoranti e vita intorno.`,
    },
    parkingNote: {
      easy: "Parcheggiare qui è semplice, anche con rimorchio o furgone.",
      medium:
        "Parcheggiare si può, ma si riempie nella settimana di gara. Nei giorni di gara arriva prima dell'ora di punta serale.",
      hard: "Il parcheggio è il punto debole. Se dormi qui, arriva presto o vieni senza auto.",
    },
    stationNote:
      "C'è una stazione ferroviaria: raggiungi Le Mans e le navette del circuito senza guidare.",
    tramNote:
      "Il tram di Le Mans (direzione Antarès) ti lascia a pochi minuti a piedi dagli ingressi del circuito: un vantaggio enorme nei giorni di gara.",
  },

  typePage: {
    mapHeading: "Disponibilità in tempo reale",
    zonesHeading: "Le zone migliori per questo",
    camping: {
      title: "Campeggio per le gare di Le Mans: terreni privati e piazzole",
      metaDescription:
        "Le opzioni di campeggio privato per la settimana di gara a Le Mans: campeggi indipendenti e piazzole aperte per la gara intorno al circuito, e come bloccarne una in anticipo.",
      heroTitle: "Campeggia a bordo pista",
      intro: [
        "Il campeggio è l'anima della settimana di gara a Le Mans. Intorno al circuito, campeggi privati e proprietari locali aprono piazzole per i grandi weekend, dal semplice campo in erba alla piazzola attrezzata con corrente e docce.",
        "Le piazzole indipendenti vicine alla pista sono poche e vanno a chi chiede per primo. Se ne vedi una sulla mappa o in un annuncio, prendila. Altrimenti i campeggi dell'anello dei 30 minuti uniscono spazio e spostamenti più semplici.",
      ],
      pitch:
        "Hai un terreno o delle piazzole vicino al circuito? Gli appassionati cercano esattamente questo.",
    },
    hotels: {
      title: "Hotel per le gare di Le Mans: dove trovare una camera",
      metaDescription:
        "Gli hotel per la settimana di gara a Le Mans: cosa finisce per primo, le alternative realistiche per tempo di guida e le camere disponibili intorno al circuito in tempo reale.",
      heroTitle: "Un vero letto e una doccia",
      intro: [
        "La camera d'hotel è la risorsa più scarsa della settimana di gara. Le Mans ha un parco alberghiero modesto per una città che accoglie 300 000 visitatori: le camere vicino al circuito si prenotano quasi un anno prima.",
        "La buona notizia: prezzi e disponibilità migliorano nettamente a ogni anello verso l'esterno. Tours, Angers, Laval e Alençon mantengono camere a tariffe ragionevoli molto dopo che Le Mans è al completo, e il viaggio fila se parti prima del traffico del mattino.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Case vacanza per le gare di Le Mans: case e camere",
      metaDescription:
        "Case vacanza per la settimana di gara a Le Mans: case intere, gîte e camere private intorno al circuito, la formula preferita dei gruppi.",
      heroTitle: "Affitta la casa di un local",
      intro: [
        "Affittare una casa è la mossa classica dei gruppi a Le Mans: tutto intorno al circuito, i residenti affittano case, gîte e camere per la settimana di gara. Hai una cucina, letti per tutta la squadra e parcheggio, spesso più vicino alla pista di qualsiasi hotel.",
        "Le case migliori vengono riprenotate anno dopo anno dagli stessi gruppi: i nuovi annunci e le richieste precoci fanno la differenza. Guarda la mappa, e se vedi qualcosa nei primi due anelli, non lasciartelo scappare.",
      ],
      pitch:
        "Hai una casa in zona? Gli inquilini della settimana di gara sono i più semplici dell'anno.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} per la ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} per la ${eventName}: disponibilità in tempo reale intorno al circuito di Le Mans, tempi di guida onesti e la strategia di prenotazione degli habitué.`,
    intro: {
      "lm24-camping": [
        "Campeggio e 24 Ore vanno insieme: gran parte del pubblico vive così la settimana, e le piazzole vicino alla pista sono assegnate con mesi di anticipo.",
        "I campi privati e i terreni indipendenti sul lato sud del circuito (Arnage, Mulsanne, Ruaudin) sono i posti più ambiti. Prenota appena il viaggio è deciso, e tieni un piano B nell'anello dei 30 minuti.",
      ],
      "lm24-hotels": [
        "La camera d'hotel per la 24 Ore è la prenotazione più difficile dell'anno motoristico francese. Tutto ciò che è a Le Mans sparisce circa un anno prima, a prezzi sostenuti.",
        "Il metodo: blocca una camera cancellabile più lontana il giorno in cui decidi di venire, poi migliora se si libera qualcosa di più vicino. Tours, Angers e Laval mantengono tariffe realistiche più a lungo.",
      ],
      "motogp-camping": [
        "Il weekend della MotoGP attira una delle folle più grandi della stagione, e gran parte arriva in moto e campeggia. Le piazzole vicino al circuito vanno via in fretta, con una pressione un gradino sotto la 24 Ore.",
        "Punta ai primi due anelli sulla mappa: piazzole di paese e piccoli terreni entro 20 minuti restano realistici prenotando qualche mese prima, e il tragitto in moto batte qualsiasi coda di auto.",
      ],
      "motogp-hotels": [
        "Gli hotel del weekend MotoGP si riempiono in fretta a Le Mans, ma la situazione è più morbida che a giugno: prenotando 6-8 mesi prima si dorme ancora a meno di 30 minuti dalla pista.",
        "Consiglio da motociclisti: scegli un hotel con parcheggio privato per le moto. I paesi del secondo e terzo anello ne sono pieni, a tariffe che il centro non offre più da mesi.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Guide",
  },

  lead: {
    title: "Affitta la tua casa per le gare di Le Mans",
    metaDescription:
      "Affitta la tua casa, le tue camere o il tuo terreno agli appassionati durante i weekend di gara a Le Mans. Richiesta gratuita, contatto diretto con una domanda verificata.",
    heroTitle: "La tua casa vale molto nella settimana di gara",
    heroSub:
      "Cinque volte all'anno, centinaia di migliaia di appassionati cercano un letto vicino al circuito. Case, camere, gîte e piazzole intorno a Le Mans si affittano in pochi giorni. Dicci cosa hai, lo mettiamo davanti ai visitatori giusti.",
    benefits: [
      {
        t: "La domanda c'è già",
        d: "Visitatori dal Regno Unito, dai Paesi Bassi, dalla Germania e da tutta la Francia cercano fino a un anno prima.",
      },
      {
        t: "Decidi tu",
        d: "Fissi le tue date, il tuo prezzo e le tue regole. Ti giriamo le richieste, scegli tu chi prenota.",
      },
      {
        t: "Annuncio gratuito",
        d: "Proporre una proprietà non costa nulla. Verifichiamo ciò che va online perché gli ospiti si fidino.",
      },
    ],
    form: {
      name: "Il tuo nome",
      email: "Email",
      phone: "Telefono (facoltativo)",
      town: "Comune",
      propertyType: "Cosa proponi?",
      types: {
        house: "Casa intera",
        rooms: "Camera/e",
        pitch: "Piazzola / terreno",
        other: "Altro",
      },
      capacity: "Per quante persone?",
      events: "Quali weekend di gara? (più scelte possibili)",
      message: "Da sapere? (distanza dal circuito, parcheggio, ...)",
      gdpr: "Accetto di essere contattato per la mia richiesta. Niente spam, nessuna rivendita dei miei dati.",
      submit: "Invia la richiesta",
      sending: "Invio...",
      success: "Richiesta ricevuta. Ti ricontattiamo entro 48 ore con i prossimi passi.",
      error: "Qualcosa è andato storto. Riprova o scrivici direttamente.",
    },
  },

  about: {
    title: "Chi siamo",
    paragraphs: [
      "Le Mans Stays è una guida indipendente agli alloggi per i grandi weekend di gara a Le Mans. Mappiamo hotel, case vacanza e campeggi privati intorno al circuito e li confrontiamo come scelgono davvero i visitatori: sul tempo di guida reale nei giorni di gara.",
      "Guadagniamo una commissione quando prenoti dalle mappe di questo sito, senza costi extra per te. Tutto qui il modello: niente banner, niente classifiche sponsorizzate.",
      "Non siamo affiliati, associati o approvati dall'Automobile Club de l'Ouest (ACO), da Dorna Sports o dagli organizzatori degli eventi citati. I nomi degli eventi sono usati solo a scopo descrittivo. Non vendiamo biglietti.",
    ],
  },

  contact: {
    title: "Contatti",
    paragraphs: [
      "Una domanda, una correzione, un'idea di collaborazione o una proprietà da proporre? Scrivici, rispondiamo in fretta.",
      "Email: hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Note legali",
    paragraphs: [
      "Questo sito è una pubblicazione indipendente, edita dal team di Le Mans Stays. Contatto: hello@lemansstays.com. I dati completi dell'editore sono disponibili su richiesta.",
      "Hosting: questo sito è ospitato da Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
      "Informativa di affiliazione: questo sito contiene link di affiliazione. Possiamo ricevere una commissione quando prenoti tramite i nostri partner (tra cui Stay22 e Booking.com), senza costi extra per te. È così che il sito si finanzia; non influenza le informazioni pubblicate.",
      "I nomi di eventi, marchi e insegne citati su questo sito appartengono ai rispettivi proprietari e sono usati solo a scopo descrittivo, per indicare quando la domanda di alloggi raggiunge il picco. Questo sito è indipendente e non è affiliato, approvato o sponsorizzato dall'Automobile Club de l'Ouest (ACO), da Dorna Sports o da alcun organizzatore. Questo sito non vende biglietti.",
      "Le prenotazioni effettuate tramite le mappe e i link di questo sito sono gestite dai nostri partner alle loro condizioni. Non siamo il venditore e non siamo parte del tuo contratto di prenotazione.",
    ],
  },

  privacy: {
    title: "Privacy",
    paragraphs: [
      "Raccogliamo le informazioni inviate tramite il modulo solo per gestire la tua richiesta e non le rivendiamo mai.",
      "I nostri partner di prenotazione possono usare cookie per tracciare le prenotazioni effettuate dalle mappe: è così che il sito si finanzia. Nessun dato personale viene venduto a terzi.",
      "Per esercitare i tuoi diritti sui dati, contattaci all'indirizzo nella pagina contatti.",
    ],
  },

  footer: {
    events: "Weekend di gara",
    zones: "Zone",
    types: "Tipi di alloggio",
    guides: "Guide",
    site: "Sito",
    disclaimer:
      "Le Mans Stays è una guida indipendente agli alloggi. Non siamo affiliati, associati o approvati dall'Automobile Club de l'Ouest (ACO), da Dorna Sports o dagli organizzatori degli eventi citati. I nomi degli eventi sono usati solo a scopo descrittivo. Non vendiamo biglietti.",
    affiliate:
      "Le prenotazioni effettuate tramite questo sito possono fruttarci una commissione, senza costi extra per te.",
    rights: "Tutti i diritti riservati.",
    trademarks:
      "Tutti i nomi degli eventi e i marchi appartengono ai rispettivi proprietari.",
  },
};
