import type { Locale } from "@/lib/types";
import { MORE_ZONE, MORE_EVENT } from "./context.more";

/**
 * Unique, human-written contextual prose per zone and per event. Composed onto
 * zone, event and event x zone pages so each ranks on its own substance rather
 * than templated boilerplate. en/fr live here; nl/de/it/es are merged in from
 * context.more.ts.
 */
type Blurbs = Partial<Record<Locale, string[]>>;

export const ZONE_BLURB: Record<string, Blurbs> = {
  "circuit-area": {
    en: [
      "Staying inside or right beside the circuit means you walk or cycle to the gates and back, no parking, no shuttle, no traffic. It is mostly campsites and a couple of hotels, the rowdiest and most atmospheric base of all, and the first to fill.",
      "The trade-off is noise and basic comfort: this is for fans who want to be in the thick of it around the clock, not for a quiet night.",
    ],
    fr: [
      "Dormir dans ou juste à côté du circuit, c'est rejoindre les entrées à pied ou à vélo, sans parking, sans navette, sans bouchons. Ce sont surtout des campings et quelques hôtels, le camp de base le plus animé et le plus typé, et le premier complet.",
      "La contrepartie, c'est le bruit et un confort sommaire : c'est fait pour les fans qui veulent être au cœur de l'action 24h/24, pas pour une nuit tranquille.",
    ],
  },
  "le-mans-city-centre": {
    en: [
      "Le Mans city centre gives you the most rooms, the Plantagenet old town, restaurants and bars for the evening, and the T1 tram that runs to within a short walk of the circuit on race days. You can leave the car at the hotel and ride in.",
      "It is the most practical base for first-timers and anyone without a car: lively, well connected and varied in price.",
    ],
    fr: [
      "Le centre du Mans, c'est le plus de chambres, la cité Plantagenêt, des restaurants et des bars pour le soir, et le tram T1 qui dépose à quelques minutes à pied du circuit les jours de course. On laisse la voiture à l'hôtel et on vient en tram.",
      "C'est la base la plus pratique pour une première fois ou sans voiture : animée, bien reliée et à tous les prix.",
    ],
  },
  arnage: {
    en: [
      "Arnage is the village at the famous Arnage corner, on the southern edge of Le Mans. Most of the 'Le Mans Sud' chain hotels are actually here, two kilometres from the track, which makes it one of the most practical close-in bases.",
      "Expect easy access to the south gates and parking that stays manageable, with chain comfort rather than charm.",
    ],
    fr: [
      "Arnage, c'est le village du célèbre virage d'Arnage, à la lisière sud du Mans. La plupart des hôtels de chaîne « Le Mans Sud » sont en réalité ici, à deux kilomètres de la piste, ce qui en fait l'une des bases proches les plus pratiques.",
      "Accès facile aux entrées sud et stationnement qui reste gérable, dans un confort de chaîne plutôt que de charme.",
    ],
  },
  mulsanne: {
    en: [
      "Mulsanne sits on the legendary Hunaudières straight, where the prototypes hit their top speed in the small hours and the engines never really stop. A handful of hotels and rentals are right on the route, an experience as much as a place to sleep.",
      "Inventory is tiny and books months ahead; it suits fans who want the night atmosphere on their doorstep.",
    ],
    fr: [
      "Mulsanne est sur la mythique ligne droite des Hunaudières, là où les prototypes atteignent leur vitesse de pointe en pleine nuit et où les moteurs ne s'arrêtent jamais vraiment. Quelques hôtels et locations sont juste sur le tracé, une expérience autant qu'un lit.",
      "L'offre est minuscule et part des mois à l'avance ; c'est pour les fans qui veulent l'ambiance de nuit au pas de la porte.",
    ],
  },
  ruaudin: {
    en: [
      "Ruaudin is a quiet village just south of the circuit, near the Antarès arena and the south entrances. It has only a couple of places to stay, but parking is easy and you are minutes from the gates without the circuit-side noise.",
      "A calm, practical alternative for those who want to be close but sleep better.",
    ],
    fr: [
      "Ruaudin est un village tranquille juste au sud du circuit, près de la salle Antarès et des entrées sud. Il n'a que quelques hébergements, mais le stationnement y est facile et on est à quelques minutes des portes sans le bruit du bord de piste.",
      "Une alternative calme et pratique pour rester proche tout en dormant mieux.",
    ],
  },
  change: {
    en: [
      "Changé is a residential town on the eastern edge of Le Mans, with quick access to the ring road and the circuit. It is calm and green, a good-value base a short drive out when the centre is full.",
      "Limited but real inventory, easy parking, and a quieter night than the city.",
    ],
    fr: [
      "Changé est une commune résidentielle à l'est du Mans, avec un accès rapide à la rocade et au circuit. C'est calme et vert, une base au bon rapport qualité-prix à quelques minutes quand le centre est plein.",
      "Une offre limitée mais réelle, du stationnement facile et une nuit plus calme que la ville.",
    ],
  },
  ecommoy: {
    en: [
      "Écommoy is a small town about eighteen kilometres south on the D338, on the edge of the Bercé forest. It is camping, gîte and B&B country, the budget end of race week, with normal prices and a country feel.",
      "You will drive in, but you trade distance for calm and value.",
    ],
    fr: [
      "Écommoy est une petite ville à environ dix-huit kilomètres au sud par la D338, en lisière de la forêt de Bercé. C'est le pays des campings, gîtes et chambres d'hôtes, l'entrée de gamme de la semaine de course, à prix normaux et à la campagne.",
      "Il faudra venir en voiture, mais on échange la distance contre le calme et le prix.",
    ],
  },
  "la-fleche": {
    en: [
      "La Flèche is a pleasant Loir-side town about forty minutes south, known for its zoo and the Prytanée military academy. Far enough to keep normal prices and availability, close enough for a straightforward morning drive up the D338.",
      "A real town with shops and restaurants, a comfortable fallback when Le Mans is full.",
    ],
    fr: [
      "La Flèche est une jolie ville au bord du Loir à environ quarante minutes au sud, connue pour son zoo et le Prytanée militaire. Assez loin pour garder des prix et des disponibilités normaux, assez près pour une montée simple le matin par la D338.",
      "Une vraie ville avec commerces et restaurants, un repli confortable quand Le Mans est complet.",
    ],
  },
  alencon: {
    en: [
      "Alençon, the lace capital in the Orne, sits straight up the A28 from the circuit, around forty-five minutes, with a train link too. It is a classic fallback city: real hotels, normal prices and a clean motorway run in on race mornings.",
      "Good for those who want a proper town and don't mind the drive.",
    ],
    fr: [
      "Alençon, capitale de la dentelle dans l'Orne, est dans l'axe direct de l'A28 depuis le circuit, à environ quarante-cinq minutes, avec une liaison train. C'est une ville de repli classique : de vrais hôtels, des prix normaux et une montée autoroutière nette les matins de course.",
      "Idéal pour qui veut une vraie ville sans craindre la route.",
    ],
  },
  laval: {
    en: [
      "Laval, on the Mayenne, is about fifty minutes west via the A81, with an LGV station of its own. It is one of the cheaper fallback cities, a full set of chain hotels at normal rates when the inner rings are gone.",
      "Best for budget-minded groups happy to drive in.",
    ],
    fr: [
      "Laval, sur la Mayenne, est à environ cinquante minutes à l'ouest par l'A81, avec sa propre gare LGV. C'est l'une des villes de repli les moins chères, un éventail complet d'hôtels de chaîne à prix normaux quand les couronnes proches sont parties.",
      "Parfait pour les groupes au budget serré prêts à faire la route.",
    ],
  },
  tours: {
    en: [
      "Tours, in the heart of the Loire Valley and its châteaux, is the classic one-hour fallback, with thousands of rooms and a fast train to Le Mans. When the city sells out, this is where the rooms and the normal prices still are.",
      "You make the morning drive, but you get a real city for the rest of the weekend.",
    ],
    fr: [
      "Tours, au cœur de la Loire et de ses châteaux, est le repli classique à une heure, avec des milliers de chambres et un train rapide vers Le Mans. Quand la ville est complète, c'est là qu'il reste des chambres et des prix normaux.",
      "On fait la route le matin, mais on profite d'une vraie ville le reste du week-end.",
    ],
  },
  angers: {
    en: [
      "Angers, the capital of Anjou with its great château and Loire surroundings, is about an hour via the A11 and holds a large stock of hotels. Like Tours, it is a strong fallback when Le Mans fills, with city life and sane prices.",
      "A comfortable base for those treating race week as a Loire weekend too.",
    ],
    fr: [
      "Angers, capitale de l'Anjou avec son grand château et la Loire alentour, est à environ une heure par l'A11 et dispose d'un large parc hôtelier. Comme Tours, c'est un repli solide quand Le Mans se remplit, avec vie de ville et prix raisonnables.",
      "Une base confortable pour qui transforme aussi la semaine de course en week-end ligérien.",
    ],
  },
};

export const EVENT_BLURB: Record<string, Blurbs> = {
  lm24: {
    en: [
      "The 24 Hours of Le Mans is the big one: the round-the-clock endurance classic each June, drawing the largest crowds of the year and selling out the city's beds nine to twelve months ahead. If you only fix one weekend early, fix this one.",
      "Demand is so concentrated that where you sleep shapes the whole experience, from walk-in campsites to towns an hour out.",
    ],
    fr: [
      "Les 24 Heures du Mans, c'est l'événement phare : le classique de l'endurance jour et nuit chaque mois de juin, qui attire les plus grosses foules de l'année et remplit les lits de la ville neuf à douze mois à l'avance. Si vous ne bloquez qu'un week-end tôt, c'est celui-là.",
      "La demande est si concentrée que l'endroit où vous dormez façonne toute l'expérience, du camping au pied de la piste aux villes à une heure.",
    ],
  },
  motos: {
    en: [
      "The 24 Heures Motos open the season in April: round-the-clock bike endurance on the Bugatti circuit, a big crowd but a notch less crushing than June. Beds near the track still go early, but the region opens up sooner.",
      "A great first taste of a Le Mans 24-hour, with a passionate, friendly paddock atmosphere.",
    ],
    fr: [
      "Les 24 Heures Motos ouvrent la saison en avril : de l'endurance moto jour et nuit sur le circuit Bugatti, grosse affluence mais un cran moins écrasante qu'en juin. Les lits près de la piste partent quand même tôt, mais la région se libère plus vite.",
      "Un excellent premier 24 heures du Mans, avec une ambiance paddock passionnée et conviviale.",
    ],
  },
  motogp: {
    en: [
      "The French MotoGP at Le Mans, each May, is one of the biggest crowds on the entire calendar: bikers camp, the hotels fill, and the closest beds go months ahead. It is the season's second great Le Mans weekend after the 24 Hours.",
      "Book early and ride in past the traffic; the atmosphere is electric and unmistakably French.",
    ],
    fr: [
      "Le Grand Prix de France moto au Mans, chaque mois de mai, rassemble l'une des plus grosses foules de tout le calendrier : les motards campent, les hôtels se remplissent et les lits les plus proches partent des mois à l'avance. C'est le deuxième grand week-end manceau après les 24 Heures.",
      "Réservez tôt et venez à moto en doublant le trafic ; l'ambiance est électrique et résolument française.",
    ],
  },
  classic: {
    en: [
      "Le Mans Classic, now an annual July fixture, gathers historic racing cars and an affluent, enthusiast crowd. Competition for rooms is lower than the 24 Hours, and the window to book the good close-in places opens early, so regulars move fast.",
      "A quieter, more refined race week, but the best bases still fill.",
    ],
    fr: [
      "Le Mans Classic, désormais un rendez-vous annuel de juillet, réunit les voitures de course historiques et un public passionné et aisé. La concurrence sur les chambres est moindre qu'aux 24 Heures, et la fenêtre pour réserver les bonnes adresses proches ouvre tôt, alors les habitués sont rapides.",
      "Une semaine de course plus calme et plus raffinée, mais les meilleures bases se remplissent quand même.",
    ],
  },
  trucks: {
    en: [
      "The 24 Hours Trucks close the year in autumn with family-friendly truck racing and a festival feel. It is the easiest of the circuit's big weekends to book, with the widest choice and the friendliest prices.",
      "A good-value, relaxed introduction to race week at Le Mans.",
    ],
    fr: [
      "Les 24 Heures Camions clôturent l'année à l'automne avec des courses de camions familiales et une ambiance festival. C'est le plus facile à réserver des grands week-ends du circuit, avec le plus grand choix et les prix les plus doux.",
      "Une découverte décontractée et au bon prix de la semaine de course au Mans.",
    ],
  },
};

// Merge the nl/de/it/es blurbs into the en/fr maps above.
for (const [k, v] of Object.entries(MORE_ZONE)) {
  ZONE_BLURB[k] = { ...ZONE_BLURB[k], ...v };
}
for (const [k, v] of Object.entries(MORE_EVENT)) {
  EVENT_BLURB[k] = { ...EVENT_BLURB[k], ...v };
}

export const zoneBlurb = (key: string, locale: Locale): string[] =>
  ZONE_BLURB[key]?.[locale] ?? ZONE_BLURB[key]?.en ?? [];

export const eventBlurb = (id: string, locale: Locale): string[] =>
  EVENT_BLURB[id]?.[locale] ?? EVENT_BLURB[id]?.en ?? [];
