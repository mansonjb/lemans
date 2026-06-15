import type { Place } from "@/lib/types";
import type { Dict } from "./en";

export const fr: Dict = {
  locale: "fr",
  siteName: "RaceWeekStays",
  tagline: "Où dormir pendant les week-ends de course au Mans",

  nav: {
    events: "Week-ends de course",
    places: "Où dormir",
    guides: "Guides",
    listYourHome: "Louer votre logement",
  },

  common: {
    daysToGo: (d: number) => `J-${d}`,
    datesTBC: "dates à confirmer",
    bookAhead: (m: number) =>
      `L'hébergement pour ce week-end part en général ${m} mois ou plus à l'avance. Plus vous réservez tôt, plus vous dormez près du circuit, et moins cher.`,
    crowd: (c: string) => `${c} spectateurs attendus`,
    minToCircuit: (min: number) => `${min} min du circuit`,
    walkToCircuit: "Circuit accessible à pied",
    raceWeekTraffic: (min: number) => `${min} min en semaine de course`,
    km: (km: number) => `à ${km} km du circuit`,
    seeAvailability: "Voir les disponibilités",
    mapNote:
      "Les prix et disponibilités de la carte sont chargés en direct chez nos partenaires de réservation. Réserver via la carte soutient ce site, sans surcoût pour vous.",
    faqHeading: "Questions fréquentes",
    ringNames: {
      1: "Circuit à pied ou à vélo",
      2: "À moins de 30 minutes",
      3: "Entre 30 et 60 minutes",
      4: "Entre 60 et 90 minutes",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Stationnement facile",
      medium: "Stationnement correct, avec un peu de patience",
      hard: "Stationnement difficile, arrivez tôt",
    },
    station: "Gare SNCF",
    tram: "Tramway vers le circuit",
    nextEvents: "Prochains week-ends de course",
    exploreZones: "Où dormir, zone par zone",
    exploreTypes: "Choisissez votre style",
    guidesHeading: "Guides de survie",
    readGuide: "Lire le guide",
    viewZone: "Voir cette zone",
    viewEvent: "Préparer son séjour",
    updated: "À jour pour la saison 2027",
    backHome: "Accueil",
    languageName: "Français",
  },

  eventNames: {
    lm24: { name: "24 Heures du Mans", short: "24 Heures" },
    motos: { name: "24 Heures Motos", short: "24h Motos" },
    motogp: { name: "Grand Prix de France moto au Mans", short: "GP de France moto" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24 Heures Camions", short: "24h Camions" },
  },

  home: {
    title: "Où dormir pour les week-ends de course au Mans | Hôtels, campings, locations",
    metaDescription:
      "Guide indépendant de l'hébergement pendant les semaines de course au Mans : hôtels, campings privés et locations autour du circuit, comparés au temps de trajet réel. Réservez tôt, dormez près.",
    heroTitle: "Dormez au plus près de la course",
    heroSub:
      "À chaque grand week-end de course, Le Mans affiche complet des mois à l'avance. Nous cartographions hôtels, locations et campings privés selon le temps de trajet réel vers le circuit, pour réserver le bon camp de base avant qu'il ne parte.",
    ctaPrimary: "Trouver un hébergement",
    ctaSecondary: "Voir les week-ends de course",
    zonesSub:
      "Des villages où l'on rejoint le circuit à pied jusqu'aux villes à une heure qui gardent des disponibilités tardives : choisissez votre couronne, vérifiez les temps de trajet en semaine de course, réservez ce qui colle.",
    leadTitle: "Vous avez un logement près du Mans ?",
    leadText:
      "Des passionnés cherchent des maisons, des chambres et des emplacements chaque année en avril, mai, juin, juillet et octobre. Proposez votre bien et recevez des demandes directes.",
    leadCta: "Louer votre logement",
    seoTitle: "Le problème de l'hébergement, réglé en avance",
    seoText: [
      "Le Mans accueille cinq grands week-ends de course par an, et la ville n'a pas assez de lits pour les foules qu'ils attirent. Les hôtels partent presque un an à l'avance, les prix triplent, et les retardataires improvisent.",
      "Ce site fait une seule chose : vous montrer où il reste vraiment de la place pour chaque week-end de course, couronne par couronne autour du circuit, avec des temps de trajet honnêtes pour la semaine de course. Hôtels, locations et campings privés, comparés sur une seule carte.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Où dormir pour les ${name} ${year} : hôtels, campings, locations`,
    metaDescription: (name: string, year: number) =>
      `Guide hébergement pour les ${name} ${year} : hôtels, campings privés et locations près du circuit du Mans, comparés au temps de trajet réel. Réservez avant que tout parte.`,
    heroKicker: "Week-end de course",
    bookingHeading: "Réservez avant les autres",
    mapHeading: (name: string) => `Disponibilités en direct pour les ${name}`,
    mapSub:
      "La carte est préréglée sur les dates de course. Dézoomez pour voir les options plus loin du circuit : les prix baissent vite avec la distance.",
    zonesHeading: "Où poser votre camp de base",
    zonesSub: (name: string) =>
      `La bonne zone dépend du moment où vous réservez. Pour les ${name}, les villages accessibles à pied partent en premier, puis la ville, puis les communes autour. Voici la situation honnête, couronne par couronne.`,
    typesHeading: "Hôtel, location ou camping ?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `Quand réserver son hébergement pour les ${name} ${year} ?`,
        a: `Le plus tôt possible. Les hôtels et locations les plus proches partent en général ${months} mois ou plus avant la course. Réserver avec annulation gratuite dès l'annonce des dates, c'est le réflexe des habitués.`,
      },
      {
        q: `Peut-on dormir à distance à pied du circuit ?`,
        a: `Oui, mais l'offre est limitée : quelques hôtels, des locations de particuliers à Arnage, Mulsanne et Ruaudin, et des emplacements privés ouverts pour la semaine de course. Ils partent en premier : réservez des mois à l'avance ou élargissez à la couronne des 30 minutes.`,
      },
      {
        q: `Tout semble complet. On fait quoi ?`,
        a: `Élargissez le rayon. Les villes à 30-60 minutes (La Flèche, Alençon) et les grandes villes comme Tours, Angers ou Laval gardent des disponibilités bien plus longtemps, à prix normal. Consultez notre guide plan B pour la stratégie complète.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Dormir à ${name} pour les courses au Mans : hôtels et locations`,
    metaDescription: (name: string, min: number) =>
      `${name}, bon camp de base pour les semaines de course au Mans ? Temps de trajet réels (${min} min en temps normal, plus en période de course), stationnement, transports et disponibilités en direct.`,
    heroKicker: "Guide de zone",
    statsHeading: "Les chiffres qui comptent",
    statDistance: "Distance au circuit",
    statNormal: "Trajet normal",
    statRaceWeek: "Trajet semaine de course",
    statWalk: "À pied",
    mapHeading: (name: string) => `Dormir à ${name}`,
    eventsHeading: "Valable pour tous les week-ends de course",
    eventsSub:
      "Un même camp de base, cinq week-ends de course par an. La pression diffère : juin est extrême, avril et octobre sont plus cléments.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} touche le circuit, à ${p.km} km des entrées principales. En dormant ici, vous oubliez la voiture : on rejoint le circuit à pied ou à vélo, on rentre après les relais de nuit, et on ne fait jamais la queue pour un parking. C'est la couronne la plus demandée, avec l'offre la plus réduite : surtout des locations de particuliers, des chambres et quelques emplacements ouverts pour la semaine de course.`,
      2: (p: Place) =>
        `${p.name} est dans le bon compromis : environ ${p.driveMin} minutes du circuit en temps normal, autour de ${p.raceWeekMin} en semaine de course. Vous y trouvez de vrais hôtels, des supermarchés et des restaurants, avec une vraie chance de disponibilité si vous réservez quelques mois à l'avance plutôt qu'un an.`,
      3: (p: Place) =>
        `${p.name} est le compromis malin quand les couronnes intérieures sont pleines : ${p.driveMin} minutes du circuit en temps normal, environ ${p.raceWeekMin} avec le trafic de course. Les prix restent proches de la normale même en semaine de course, et vous serez au circuit avant le warm-up du matin en partant tôt.`,
      4: (p: Place) =>
        `${p.name} est l'alliée des réservations tardives : une vraie ville à environ ${p.driveMin} minutes du circuit (comptez ${p.raceWeekMin} en trafic de semaine de course). Quand tout est parti ou hors de prix autour du Mans, ${p.name} garde des hôtels normaux à prix normaux, avec des restaurants et de la vie autour.`,
    },
    parkingNote: {
      easy: "Le stationnement est simple ici, y compris avec une remorque ou un van.",
      medium:
        "Le stationnement est jouable mais se remplit en semaine de course. Arrivez avant la pointe du soir les jours de course.",
      hard: "Le stationnement est le point faible. Si vous dormez ici, arrivez tôt ou venez sans voiture.",
    },
    stationNote:
      "Il y a une gare : vous pouvez rejoindre Le Mans et les navettes du circuit sans conduire.",
    tramNote:
      "Le tramway du Mans (direction Antarès) vous dépose à quelques minutes à pied des entrées du circuit : un avantage énorme les jours de course.",
  },

  typePage: {
    mapHeading: "Disponibilités en direct",
    zonesHeading: "Les meilleures zones pour ça",
    camping: {
      title: "Camping pour les courses au Mans : sites privés et emplacements",
      metaDescription:
        "Les options de camping privé pour les semaines de course au Mans : campings indépendants et emplacements ouverts pour la course autour du circuit, et comment bloquer le vôtre tôt.",
      heroTitle: "Campez au bord de la piste",
      intro: [
        "Le camping, c'est l'âme de la semaine de course au Mans. Autour du circuit, des campings privés et des propriétaires locaux ouvrent des emplacements pour les grands week-ends, du simple champ en herbe à la parcelle équipée avec électricité et douches.",
        "Les emplacements indépendants proches de la piste sont limités et vont aux premiers qui demandent. Si vous en repérez un sur la carte ou via une annonce, prenez-le. Sinon, les campings de la couronne des 30 minutes combinent espace et trajets plus simples.",
      ],
      pitch:
        "Vous avez un terrain ou des emplacements près du circuit ? Des passionnés cherchent exactement ça.",
    },
    hotels: {
      title: "Hôtels pour les courses au Mans : où trouver une chambre",
      metaDescription:
        "Les hôtels pour les semaines de course au Mans : ce qui part en premier, les alternatives réalistes par temps de trajet, et les chambres disponibles autour du circuit en direct.",
      heroTitle: "Un vrai lit et une douche",
      intro: [
        "La chambre d'hôtel est la ressource la plus rare de la semaine de course. Le Mans a un parc hôtelier modeste pour une ville qui accueille 300 000 visiteurs : les chambres proches du circuit se réservent presque un an à l'avance.",
        "La bonne nouvelle : prix et disponibilités s'améliorent nettement à chaque couronne vers l'extérieur. Tours, Angers, Laval et Alençon gardent des chambres à tarif raisonnable longtemps après que Le Mans affiche complet, et le trajet passe bien en partant avant le trafic du matin.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Locations pour les courses au Mans : maisons et chambres",
      metaDescription:
        "Locations pour les semaines de course au Mans : maisons entières, gîtes et chambres chez l'habitant autour du circuit, la formule préférée des groupes.",
      heroTitle: "Louez la maison d'un local",
      intro: [
        "Louer une maison, c'est le réflexe classique des groupes au Mans : tout autour du circuit, des habitants louent maisons, gîtes et chambres pour la semaine de course. Vous avez une cuisine, des lits pour toute l'équipe et un parking, souvent plus près de la piste que n'importe quel hôtel.",
        "Les meilleures maisons sont rebookées d'année en année par les mêmes groupes : les nouvelles annonces et les demandes précoces font toute la différence. Regardez la carte, et si vous voyez quelque chose dans les deux premières couronnes, ne laissez pas passer.",
      ],
      pitch:
        "Vous avez une maison dans le coin ? Les locataires de semaine de course sont les plus simples de l'année.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} pour les ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} pour les ${eventName} : disponibilités en direct autour du circuit du Mans, temps de trajet honnêtes et stratégie de réservation d'habitués.`,
    intro: {
      "lm24-camping": [
        "Le camping et les 24 Heures, c'est une évidence : une grande partie du public vit la semaine comme ça, et les emplacements proches de la piste sont réclamés des mois à l'avance.",
        "Les champs privés et sites indépendants côté sud du circuit (Arnage, Mulsanne, Ruaudin) sont les spots les plus recherchés. Réservez dès que le voyage est décidé, et gardez un plan B dans la couronne des 30 minutes.",
      ],
      "lm24-hotels": [
        "La chambre d'hôtel pour les 24 Heures est la réservation la plus difficile de l'année en sport mécanique français. Tout ce qui est au Mans part environ un an à l'avance, à prix soutenus.",
        "La méthode : bloquez une chambre annulable loin du circuit le jour où vous décidez de venir, puis améliorez si une option plus proche se libère. Tours, Angers et Laval gardent des tarifs réalistes le plus longtemps.",
      ],
      "motogp-camping": [
        "Le week-end du Grand Prix de France moto attire l'une des plus grosses foules de la saison, et une grande partie vient à moto et campe. Les emplacements proches du circuit partent vite, avec une pression un cran sous celle des 24 Heures.",
        "Visez les deux premières couronnes sur la carte : emplacements de village et petits sites à moins de 20 minutes restent réalistes en réservant quelques mois à l'avance, et le trajet à moto évite les files de voitures.",
      ],
      "motogp-hotels": [
        "Les hôtels du week-end MotoGP se remplissent vite au Mans même, mais la situation est plus souple qu'en juin : en réservant 6 à 8 mois à l'avance, on dort encore à moins de 30 minutes du circuit.",
        "Le conseil motard : choisissez un hôtel avec parking privé pour les machines. Les villes de deuxième et troisième couronne en sont pleines, à des tarifs que le centre-ville ne propose plus depuis des mois.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Guides",
  },

  lead: {
    title: "Louez votre logement pour les courses au Mans",
    metaDescription:
      "Louez votre maison, vos chambres ou votre terrain aux passionnés pendant les week-ends de course au Mans. Demande gratuite, contact direct avec une demande vérifiée.",
    heroTitle: "Votre logement vaut cher en semaine de course",
    heroSub:
      "Cinq fois par an, des centaines de milliers de passionnés cherchent un lit près du circuit. Maisons, chambres, gîtes et emplacements autour du Mans se louent en quelques jours. Dites-nous ce que vous avez, nous le mettons devant les bons visiteurs.",
    benefits: [
      {
        t: "La demande est déjà là",
        d: "Des visiteurs du Royaume-Uni, des Pays-Bas, d'Allemagne et de toute la France cherchent jusqu'à un an à l'avance.",
      },
      {
        t: "Vous gardez la main",
        d: "Vous fixez vos dates, votre prix et vos règles. Nous vous transmettons les demandes, vous choisissez qui réserve.",
      },
      {
        t: "Annonce gratuite",
        d: "Proposer un bien ne coûte rien. Nous validons ce qui est publié pour que les visiteurs aient confiance.",
      },
    ],
    form: {
      name: "Votre nom",
      email: "Email",
      phone: "Téléphone (facultatif)",
      town: "Commune",
      propertyType: "Que proposez-vous ?",
      types: {
        house: "Maison entière",
        rooms: "Chambre(s)",
        pitch: "Emplacement camping / terrain",
        other: "Autre",
      },
      capacity: "Combien de personnes ?",
      events: "Quels week-ends de course ? (plusieurs choix possibles)",
      message: "À savoir ? (distance au circuit, parking, ...)",
      gdpr: "J'accepte d'être contacté au sujet de ma demande d'annonce. Pas de spam, pas de revente de mes coordonnées.",
      submit: "Envoyer ma demande",
      sending: "Envoi...",
      success:
        "Demande bien reçue. Nous revenons vers vous sous 48 h avec les prochaines étapes.",
      error: "Un problème est survenu. Réessayez ou écrivez-nous directement.",
    },
  },

  about: {
    title: "À propos de ce site",
    paragraphs: [
      "RaceWeekStays est un guide indépendant de l'hébergement pour les grands week-ends de course au Mans. Nous cartographions hôtels, locations et campings privés autour du circuit et nous les comparons comme les visiteurs choisissent vraiment : au temps de trajet réel les jours de course.",
      "Nous touchons une commission quand vous réservez via les cartes de ce site, sans surcoût pour vous. C'est tout le modèle : pas de bannières, pas de classements sponsorisés.",
      "Nous ne sommes ni affiliés, ni associés à l'Automobile Club de l'Ouest (ACO), à Dorna Sports ou aux organisateurs des événements mentionnés sur ce site. Les noms d'événements sont utilisés uniquement à titre descriptif, pour indiquer quand la demande d'hébergement atteint ses pics. Nous ne vendons pas de billets.",
    ],
  },

  contact: {
    title: "Contact",
    paragraphs: [
      "Une question, une correction, une idée de partenariat ou un bien à proposer ? Écrivez-nous, nous répondons vite.",
      "Email : hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Mentions légales",
    paragraphs: [
      "Ce site est une publication indépendante, éditée par l'équipe RaceWeekStays. Contact : hello@lemansstays.com. Les informations complètes de l'éditeur sont disponibles sur demande.",
      "Hébergement : ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.",
      "Divulgation d'affiliation : ce site contient des liens affiliés. Nous pouvons percevoir une commission lorsque vous réservez via nos partenaires (notamment Stay22 et Booking.com), sans surcoût pour vous. C'est ainsi que le site est financé ; cela n'influence pas les informations publiées.",
      "Les noms d'événements, marques et enseignes cités sur ce site appartiennent à leurs propriétaires respectifs et sont utilisés uniquement à titre descriptif, pour indiquer les pics de demande d'hébergement. Ce site est indépendant et n'est ni affilié, ni approuvé, ni sponsorisé par l'Automobile Club de l'Ouest (ACO), Dorna Sports ou un quelconque organisateur. Ce site ne vend pas de billets.",
      "Les réservations effectuées via les cartes et liens de ce site sont traitées par nos partenaires selon leurs propres conditions. Nous ne sommes pas le vendeur et ne sommes pas partie à votre contrat de réservation.",
    ],
  },

  privacy: {
    title: "Confidentialité",
    paragraphs: [
      "Nous collectons les informations transmises via le formulaire d'annonce uniquement pour traiter votre demande, et nous ne les revendons jamais.",
      "Nos partenaires de réservation peuvent utiliser des cookies pour suivre les réservations effectuées via les cartes : c'est ainsi que ce site est financé. Aucune donnée personnelle n'est vendue à des tiers.",
      "Pour exercer vos droits sur vos données, contactez-nous à l'adresse indiquée sur la page contact.",
    ],
  },

  footer: {
    events: "Week-ends de course",
    zones: "Zones",
    types: "Types d'hébergement",
    guides: "Guides",
    site: "Site",
    disclaimer:
      "RaceWeekStays est un guide indépendant d'hébergement. Nous ne sommes ni affiliés, ni associés à l'Automobile Club de l'Ouest (ACO), à Dorna Sports ou aux organisateurs des événements mentionnés. Les noms d'événements sont utilisés uniquement à titre descriptif. Nous ne vendons pas de billets.",
    affiliate:
      "Les réservations effectuées via ce site peuvent nous rapporter une commission, sans surcoût pour vous.",
    rights: "Tous droits réservés.",
    trademarks:
      "Tous les noms d'événements et marques appartiennent à leurs propriétaires respectifs.",
  },
};
