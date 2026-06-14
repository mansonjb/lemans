import type { Locale } from "@/lib/types";

/** nl/de/it/es contextual blurbs, merged into ZONE_BLURB / EVENT_BLURB. */
type B = Partial<Record<Locale, string[]>>;

export const MORE_ZONE: Record<string, B> = {
  "circuit-area": {
    nl: [
      "In of pal naast het circuit slapen betekent te voet of per fiets naar de poorten, geen parkeren, geen pendel, geen file. Het zijn vooral campings en een paar hotels, de levendigste en meest sfeervolle basis, en de eerste die volraakt.",
      "De keerzijde is lawaai en eenvoudig comfort: dit is voor fans die er dag en nacht middenin willen zitten, niet voor een rustige nacht.",
    ],
    de: [
      "Im oder direkt am Circuit zu übernachten heißt, zu Fuß oder mit dem Rad zu den Toren zu gehen, kein Parken, kein Shuttle, kein Stau. Es sind vor allem Campingplätze und ein paar Hotels, die lebhafteste und stimmungsvollste Basis und die erste, die voll ist.",
      "Der Preis dafür sind Lärm und einfacher Komfort: für Fans, die rund um die Uhr mittendrin sein wollen, nicht für eine ruhige Nacht.",
    ],
    it: [
      "Dormire dentro o accanto al circuito significa raggiungere i cancelli a piedi o in bici, senza parcheggio, senza navetta, senza traffico. Sono soprattutto campeggi e qualche hotel, la base più vivace e d'atmosfera, e la prima a riempirsi.",
      "Il prezzo da pagare è rumore e comfort essenziale: è per i fan che vogliono stare nel cuore dell'azione giorno e notte, non per una notte tranquilla.",
    ],
    es: [
      "Dormir dentro o junto al circuito significa llegar a las puertas a pie o en bici, sin aparcamiento, sin lanzadera, sin tráfico. Son sobre todo campings y un par de hoteles, la base más animada y con más ambiente, y la primera en llenarse.",
      "El precio es ruido y comodidad básica: es para aficionados que quieren estar en plena acción las 24 horas, no para una noche tranquila.",
    ],
  },
  "le-mans-city-centre": {
    nl: [
      "Het centrum van Le Mans biedt de meeste kamers, de Plantagenet-oude stad, restaurants en bars voor de avond, en de T1-tram die je op racedagen tot op loopafstand van het circuit brengt. Je laat de auto bij het hotel en gaat met de tram.",
      "Het is de praktischste basis voor nieuwkomers en wie geen auto heeft: levendig, goed verbonden en in alle prijsklassen.",
    ],
    de: [
      "Das Zentrum von Le Mans bietet die meisten Zimmer, die Plantagenet-Altstadt, Restaurants und Bars für den Abend und die Tram T1, die Sie an Renntagen bis in Gehnähe der Strecke bringt. Sie lassen das Auto am Hotel und fahren mit der Tram.",
      "Die praktischste Basis für Neulinge und alle ohne Auto: lebendig, gut angebunden und in allen Preisklassen.",
    ],
    it: [
      "Il centro di Le Mans offre più camere, la città vecchia dei Plantageneti, ristoranti e bar per la sera, e il tram T1 che nei giorni di gara ti porta a pochi passi dal circuito. Lasci l'auto in hotel e arrivi in tram.",
      "È la base più pratica per chi è alla prima volta o senza auto: vivace, ben collegata e a tutti i prezzi.",
    ],
    es: [
      "El centro de Le Mans ofrece más habitaciones, el casco antiguo Plantagenet, restaurantes y bares para la noche, y el tranvía T1 que los días de carrera te deja a poca distancia a pie del circuito. Dejas el coche en el hotel y vas en tranvía.",
      "Es la base más práctica para primerizos y para quien no tiene coche: animada, bien conectada y a todos los precios.",
    ],
  },
  arnage: {
    nl: [
      "Arnage is het dorp bij de beroemde bocht van Arnage, aan de zuidrand van Le Mans. De meeste 'Le Mans Sud'-ketenhotels staan hier eigenlijk, twee kilometer van de baan, wat het een van de praktischste nabije bases maakt.",
      "Reken op makkelijke toegang tot de zuidpoorten en parkeren dat behapbaar blijft, met ketencomfort meer dan charme.",
    ],
    de: [
      "Arnage ist das Dorf an der berühmten Arnage-Kurve am Südrand von Le Mans. Die meisten „Le Mans Sud“-Kettenhotels liegen tatsächlich hier, zwei Kilometer von der Strecke, was es zu einer der praktischsten nahen Basen macht.",
      "Einfacher Zugang zu den Südtoren und Parken, das machbar bleibt, mit Kettenkomfort statt Charme.",
    ],
    it: [
      "Arnage è il paese della famosa curva di Arnage, al margine sud di Le Mans. La maggior parte degli hotel di catena 'Le Mans Sud' è in realtà qui, a due chilometri dalla pista, il che ne fa una delle basi vicine più pratiche.",
      "Accesso facile ai cancelli sud e parcheggio che resta gestibile, con comfort di catena più che fascino.",
    ],
    es: [
      "Arnage es el pueblo de la famosa curva de Arnage, al borde sur de Le Mans. La mayoría de los hoteles de cadena 'Le Mans Sud' están en realidad aquí, a dos kilómetros de la pista, lo que la hace una de las bases cercanas más prácticas.",
      "Acceso fácil a las puertas sur y aparcamiento que sigue siendo manejable, con confort de cadena más que encanto.",
    ],
  },
  mulsanne: {
    nl: [
      "Mulsanne ligt aan het legendarische rechte stuk van de Hunaudières, waar de prototypes 's nachts hun topsnelheid halen en de motoren nooit echt stoppen. Een handvol hotels en huizen staan pal aan het tracé, een belevenis evenzeer als een slaapplek.",
      "Het aanbod is minuscuul en gaat maanden vooruit; het past bij fans die de nachtsfeer voor de deur willen.",
    ],
    de: [
      "Mulsanne liegt an der legendären Hunaudières-Geraden, wo die Prototypen nachts ihre Höchstgeschwindigkeit erreichen und die Motoren nie wirklich verstummen. Eine Handvoll Hotels und Ferienhäuser liegen direkt an der Strecke, Erlebnis und Schlafplatz zugleich.",
      "Das Angebot ist winzig und Monate im Voraus weg; etwas für Fans, die die Nachtstimmung vor der Tür wollen.",
    ],
    it: [
      "Mulsanne è sul leggendario rettilineo delle Hunaudières, dove i prototipi raggiungono la velocità massima nel cuore della notte e i motori non si fermano mai davvero. Pochi hotel e case sono proprio sul tracciato, un'esperienza oltre che un letto.",
      "L'offerta è minima e finisce con mesi di anticipo; è per i fan che vogliono l'atmosfera notturna sulla porta di casa.",
    ],
    es: [
      "Mulsanne está en la legendaria recta de las Hunaudières, donde los prototipos alcanzan su velocidad máxima de madrugada y los motores nunca paran del todo. Un puñado de hoteles y casas están justo en el trazado, una experiencia tanto como un sitio para dormir.",
      "La oferta es mínima y vuela con meses de antelación; es para aficionados que quieren el ambiente nocturno en la puerta.",
    ],
  },
  ruaudin: {
    nl: [
      "Ruaudin is een rustig dorp net ten zuiden van het circuit, bij de Antarès-hal en de zuidingangen. Het heeft maar een paar verblijven, maar parkeren is makkelijk en je zit op minuten van de poorten zonder het baanlawaai.",
      "Een kalm, praktisch alternatief voor wie dichtbij wil zijn maar beter wil slapen.",
    ],
    de: [
      "Ruaudin ist ein ruhiges Dorf knapp südlich der Strecke, nahe der Antarès-Halle und den Südeingängen. Es hat nur wenige Unterkünfte, aber Parken ist einfach und man ist Minuten von den Toren entfernt, ohne den Streckenlärm.",
      "Eine ruhige, praktische Alternative für alle, die nah sein, aber besser schlafen wollen.",
    ],
    it: [
      "Ruaudin è un paese tranquillo appena a sud del circuito, vicino all'arena Antarès e agli ingressi sud. Ha solo un paio di alloggi, ma il parcheggio è facile e si è a pochi minuti dai cancelli senza il rumore della pista.",
      "Un'alternativa calma e pratica per chi vuole stare vicino ma dormire meglio.",
    ],
    es: [
      "Ruaudin es un pueblo tranquilo justo al sur del circuito, cerca del recinto Antarès y las entradas sur. Tiene solo un par de alojamientos, pero aparcar es fácil y estás a minutos de las puertas sin el ruido de la pista.",
      "Una alternativa tranquila y práctica para quien quiere estar cerca pero dormir mejor.",
    ],
  },
  change: {
    nl: [
      "Changé is een woonplaats aan de oostrand van Le Mans, met snelle toegang tot de ringweg en het circuit. Rustig en groen, een voordelige basis op een korte rit als het centrum vol is.",
      "Beperkt maar reëel aanbod, makkelijk parkeren en een rustigere nacht dan in de stad.",
    ],
    de: [
      "Changé ist eine Wohnstadt am Ostrand von Le Mans, mit schnellem Zugang zum Ring und zur Strecke. Ruhig und grün, eine preiswerte Basis eine kurze Fahrt entfernt, wenn das Zentrum voll ist.",
      "Begrenztes, aber echtes Angebot, einfaches Parken und eine ruhigere Nacht als in der Stadt.",
    ],
    it: [
      "Changé è una cittadina residenziale al margine est di Le Mans, con accesso rapido alla tangenziale e al circuito. Calma e verde, una base conveniente a pochi minuti quando il centro è pieno.",
      "Offerta limitata ma reale, parcheggio facile e una notte più tranquilla della città.",
    ],
    es: [
      "Changé es una localidad residencial al borde este de Le Mans, con acceso rápido a la ronda y al circuito. Tranquila y verde, una base con buena relación calidad-precio a pocos minutos cuando el centro está lleno.",
      "Oferta limitada pero real, aparcamiento fácil y una noche más tranquila que la ciudad.",
    ],
  },
  ecommoy: {
    nl: [
      "Écommoy is een klein stadje zo'n achttien kilometer zuidelijk aan de D338, aan de rand van het bos van Bercé. Het is camping-, gîte- en B&B-land, het budgetuiteinde van de raceweek, met normale prijzen en een landelijk gevoel.",
      "Je komt met de auto, maar je ruilt afstand voor rust en prijs.",
    ],
    de: [
      "Écommoy ist eine Kleinstadt etwa achtzehn Kilometer südlich an der D338, am Rand des Bercé-Waldes. Camping-, Gîte- und Pensionsland, das günstige Ende der Rennwoche, mit normalen Preisen und Landidylle.",
      "Sie fahren mit dem Auto, tauschen aber Entfernung gegen Ruhe und Preis.",
    ],
    it: [
      "Écommoy è una cittadina a circa diciotto chilometri a sud sulla D338, ai margini della foresta di Bercé. È terra di campeggi, gîte e B&B, la fascia economica della settimana di gara, a prezzi normali e con un'aria di campagna.",
      "Arrivi in auto, ma scambi la distanza con calma e prezzo.",
    ],
    es: [
      "Écommoy es un pueblo a unos dieciocho kilómetros al sur por la D338, al borde del bosque de Bercé. Es tierra de campings, gîtes y casas rurales, la gama económica de la semana de carrera, con precios normales y aire de campo.",
      "Llegarás en coche, pero cambias distancia por calma y precio.",
    ],
  },
  "la-fleche": {
    nl: [
      "La Flèche is een aangename stad aan de Loir zo'n veertig minuten zuidelijk, bekend om haar dierentuin en de militaire academie Prytanée. Ver genoeg voor normale prijzen en beschikbaarheid, dichtbij genoeg voor een eenvoudige ochtendrit over de D338.",
      "Een echte stad met winkels en restaurants, een comfortabele uitwijk als Le Mans vol is.",
    ],
    de: [
      "La Flèche ist eine angenehme Stadt am Loir, etwa vierzig Minuten südlich, bekannt für ihren Zoo und die Militärakademie Prytanée. Weit genug für normale Preise und Verfügbarkeit, nah genug für eine einfache Morgenfahrt über die D338.",
      "Eine echte Stadt mit Geschäften und Restaurants, ein bequemer Ausweich, wenn Le Mans voll ist.",
    ],
    it: [
      "La Flèche è una piacevole cittadina sul Loir a circa quaranta minuti a sud, nota per lo zoo e l'accademia militare Prytanée. Abbastanza lontana da mantenere prezzi e disponibilità normali, abbastanza vicina per una semplice salita mattutina sulla D338.",
      "Una vera cittadina con negozi e ristoranti, un ripiego comodo quando Le Mans è pieno.",
    ],
    es: [
      "La Flèche es una agradable ciudad a orillas del Loir a unos cuarenta minutos al sur, conocida por su zoo y la academia militar Prytanée. Lo bastante lejos para mantener precios y disponibilidad normales, lo bastante cerca para una subida sencilla por la mañana por la D338.",
      "Una ciudad de verdad con tiendas y restaurantes, un recurso cómodo cuando Le Mans está lleno.",
    ],
  },
  alencon: {
    nl: [
      "Alençon, de kanthoofdstad in de Orne, ligt recht omhoog langs de A28 vanaf het circuit, zo'n vijfenveertig minuten, met ook een treinverbinding. Een klassieke uitwijkstad: echte hotels, normale prijzen en een vlotte snelwegrit op racemorgens.",
      "Goed voor wie een echte stad wil en de rit niet erg vindt.",
    ],
    de: [
      "Alençon, die Spitzenhauptstadt im Orne, liegt gerade die A28 hinauf von der Strecke, etwa fünfundvierzig Minuten, mit Bahnanbindung. Eine klassische Ausweichstadt: echte Hotels, normale Preise und eine saubere Autobahnfahrt an Rennmorgen.",
      "Gut für alle, die eine richtige Stadt wollen und die Fahrt nicht scheuen.",
    ],
    it: [
      "Alençon, capitale del merletto nell'Orne, è dritta lungo la A28 dal circuito, a circa quarantacinque minuti, con anche un collegamento ferroviario. Una città di ripiego classica: hotel veri, prezzi normali e una salita autostradale pulita nelle mattine di gara.",
      "Ottima per chi vuole una vera città e non teme il tragitto.",
    ],
    es: [
      "Alençon, capital del encaje en el Orne, está en línea recta por la A28 desde el circuito, a unos cuarenta y cinco minutos, con conexión de tren. Una ciudad de recurso clásica: hoteles de verdad, precios normales y una subida limpia por autopista las mañanas de carrera.",
      "Buena para quien quiere una ciudad de verdad y no le importa el trayecto.",
    ],
  },
  laval: {
    nl: [
      "Laval, aan de Mayenne, ligt zo'n vijftig minuten westelijk via de A81, met een eigen LGV-station. Het is een van de goedkopere uitwijksteden, een volledig aanbod ketenhotels tegen normale tarieven als de nabije ringen weg zijn.",
      "Het best voor budgetbewuste groepen die graag de rit maken.",
    ],
    de: [
      "Laval an der Mayenne liegt etwa fünfzig Minuten westlich über die A81, mit eigenem LGV-Bahnhof. Eine der günstigeren Ausweichstädte, ein komplettes Angebot an Kettenhotels zu normalen Preisen, wenn die nahen Ringe weg sind.",
      "Am besten für preisbewusste Gruppen, die gern fahren.",
    ],
    it: [
      "Laval, sulla Mayenne, è a circa cinquanta minuti a ovest sulla A81, con una propria stazione LGV. È una delle città di ripiego più economiche, una gamma completa di hotel di catena a prezzi normali quando gli anelli vicini sono esauriti.",
      "Ideale per gruppi attenti al budget disposti a guidare.",
    ],
    es: [
      "Laval, a orillas del Mayenne, está a unos cincuenta minutos al oeste por la A81, con su propia estación LGV. Es una de las ciudades de recurso más baratas, una gama completa de hoteles de cadena a precios normales cuando los anillos cercanos se agotan.",
      "Lo mejor para grupos con presupuesto ajustado dispuestos a conducir.",
    ],
  },
  tours: {
    nl: [
      "Tours, in het hart van de Loirevallei en haar kastelen, is de klassieke uitwijk op een uur, met duizenden kamers en een snelle trein naar Le Mans. Als de stad volraakt, zijn hier nog kamers en normale prijzen.",
      "Je maakt de ochtendrit, maar je hebt een echte stad voor de rest van het weekend.",
    ],
    de: [
      "Tours, im Herzen des Loiretals und seiner Schlösser, ist der klassische Ausweich in einer Stunde, mit Tausenden Zimmern und einem schnellen Zug nach Le Mans. Wenn die Stadt ausgebucht ist, gibt es hier noch Zimmer und normale Preise.",
      "Sie machen die Morgenfahrt, bekommen aber eine echte Stadt für den Rest des Wochenendes.",
    ],
    it: [
      "Tours, nel cuore della valle della Loira e dei suoi castelli, è il ripiego classico a un'ora, con migliaia di camere e un treno veloce per Le Mans. Quando la città è esaurita, è qui che restano camere e prezzi normali.",
      "Fai il tragitto mattutino, ma hai una vera città per il resto del weekend.",
    ],
    es: [
      "Tours, en el corazón del valle del Loira y sus castillos, es el recurso clásico a una hora, con miles de habitaciones y un tren rápido a Le Mans. Cuando la ciudad se agota, aquí siguen quedando habitaciones y precios normales.",
      "Haces el trayecto por la mañana, pero tienes una ciudad de verdad el resto del fin de semana.",
    ],
  },
  angers: {
    nl: [
      "Angers, de hoofdstad van Anjou met haar grote kasteel en Loire-omgeving, ligt zo'n uur weg via de A11 en heeft een grote hotelvoorraad. Net als Tours een sterke uitwijk als Le Mans volraakt, met stadsleven en redelijke prijzen.",
      "Een comfortabele basis voor wie de raceweek ook als Loire-weekend ziet.",
    ],
    de: [
      "Angers, die Hauptstadt des Anjou mit ihrem großen Schloss und der Loire-Umgebung, liegt etwa eine Stunde über die A11 entfernt und hat einen großen Hotelbestand. Wie Tours ein starker Ausweich, wenn Le Mans voll ist, mit Stadtleben und vernünftigen Preisen.",
      "Eine bequeme Basis für alle, die die Rennwoche auch als Loire-Wochenende sehen.",
    ],
    it: [
      "Angers, capitale dell'Anjou con il suo grande castello e i dintorni della Loira, è a circa un'ora sulla A11 e ha un'ampia offerta alberghiera. Come Tours, un ripiego solido quando Le Mans si riempie, con vita di città e prezzi ragionevoli.",
      "Una base comoda per chi vive la settimana di gara anche come weekend sulla Loira.",
    ],
    es: [
      "Angers, capital de Anjou con su gran castillo y los alrededores del Loira, está a una hora por la A11 y tiene una gran oferta hotelera. Como Tours, un recurso sólido cuando Le Mans se llena, con vida urbana y precios razonables.",
      "Una base cómoda para quien vive la semana de carrera también como un fin de semana en el Loira.",
    ],
  },
};

export const MORE_EVENT: Record<string, B> = {
  lm24: {
    nl: [
      "De 24 uur van Le Mans is dé grote: de klassieker van het uithoudingsvermogen rond de klok, elke juni, met de grootste menigtes van het jaar en de bedden van de stad die negen tot twaalf maanden vooruit volraken. Als je maar één weekend vroeg vastlegt, is het dit.",
      "De vraag is zo geconcentreerd dat waar je slaapt de hele beleving bepaalt, van campings op loopafstand tot steden op een uur.",
    ],
    de: [
      "Die 24 Stunden von Le Mans sind das große Ereignis: der Endurance-Klassiker rund um die Uhr, jeden Juni, mit den größten Mengen des Jahres und Betten in der Stadt, die neun bis zwölf Monate im Voraus weg sind. Wenn Sie nur ein Wochenende früh festlegen, dann dieses.",
      "Die Nachfrage ist so konzentriert, dass der Schlafplatz das ganze Erlebnis prägt, von Campingplätzen in Gehnähe bis zu Städten eine Stunde entfernt.",
    ],
    it: [
      "La 24 Ore di Le Mans è l'evento clou: il classico dell'endurance giorno e notte ogni giugno, con le folle più grandi dell'anno e i letti della città esauriti con nove-dodici mesi di anticipo. Se fissi presto un solo weekend, è questo.",
      "La domanda è così concentrata che dove dormi plasma tutta l'esperienza, dai campeggi raggiungibili a piedi alle città a un'ora.",
    ],
    es: [
      "Las 24 Horas de Le Mans son el gran evento: el clásico de la resistencia las 24 horas cada junio, con las mayores multitudes del año y las camas de la ciudad agotadas con nueve a doce meses de antelación. Si solo fijas un fin de semana pronto, que sea este.",
      "La demanda está tan concentrada que dónde duermes define toda la experiencia, desde campings a pie hasta ciudades a una hora.",
    ],
  },
  motos: {
    nl: [
      "De 24 Heures Motos openen het seizoen in april: motoruithoudingsvermogen rond de klok op het Bugatti-circuit, een grote menigte maar een tikje minder verpletterend dan juni. Bedden bij de baan gaan toch vroeg, maar de regio komt sneller vrij.",
      "Een mooie eerste kennismaking met een Le Mans 24-uurs, met een gepassioneerde, vriendelijke paddocksfeer.",
    ],
    de: [
      "Die 24 Heures Motos eröffnen die Saison im April: Motorrad-Langstrecke rund um die Uhr auf dem Bugatti-Kurs, große Menge, aber eine Spur weniger erdrückend als im Juni. Betten an der Strecke gehen trotzdem früh, doch die Region öffnet sich schneller.",
      "Ein toller erster Vorgeschmack auf ein Le-Mans-24-Stunden, mit leidenschaftlicher, freundlicher Fahrerlager-Stimmung.",
    ],
    it: [
      "Le 24 Heures Motos aprono la stagione in aprile: endurance moto giorno e notte sul circuito Bugatti, grande folla ma un po' meno opprimente di giugno. I letti vicino alla pista vanno comunque presto, ma la regione si libera prima.",
      "Un ottimo primo assaggio di una 24 ore di Le Mans, con un'atmosfera di paddock appassionata e cordiale.",
    ],
    es: [
      "Las 24 Heures Motos abren la temporada en abril: resistencia de motos las 24 horas en el circuito Bugatti, gran multitud pero un punto menos abrumadora que junio. Las camas cerca de la pista vuelan igual, pero la región se libera antes.",
      "Una gran primera toma de contacto con unas 24 horas de Le Mans, con un ambiente de paddock apasionado y cercano.",
    ],
  },
  motogp: {
    nl: [
      "De Franse MotoGP in Le Mans, elke mei, is een van de grootste menigtes van de hele kalender: motorrijders kamperen, de hotels lopen vol en de dichtstbijzijnde bedden gaan maanden vooruit. Het is het tweede grote Le Mans-weekend na de 24 uur.",
      "Boek vroeg en rijd de file voorbij; de sfeer is elektrisch en onmiskenbaar Frans.",
    ],
    de: [
      "Der französische MotoGP in Le Mans, jeden Mai, gehört zu den größten Mengen des ganzen Kalenders: Motorradfahrer campen, die Hotels füllen sich und die nächsten Betten gehen Monate im Voraus. Es ist das zweite große Le-Mans-Wochenende nach den 24 Stunden.",
      "Früh buchen und am Verkehr vorbeifahren; die Stimmung ist elektrisierend und unverkennbar französisch.",
    ],
    it: [
      "Il MotoGP di Francia a Le Mans, ogni maggio, è una delle folle più grandi di tutto il calendario: i motociclisti campeggiano, gli hotel si riempiono e i letti più vicini vanno via con mesi di anticipo. È il secondo grande weekend manceau dopo la 24 Ore.",
      "Prenota presto e supera il traffico in moto; l'atmosfera è elettrica e inconfondibilmente francese.",
    ],
    es: [
      "El MotoGP de Francia en Le Mans, cada mayo, reúne una de las mayores multitudes de todo el calendario: los moteros acampan, los hoteles se llenan y las camas más cercanas vuelan con meses de antelación. Es el segundo gran fin de semana de Le Mans tras las 24 Horas.",
      "Reserva pronto y adelanta el tráfico en moto; el ambiente es eléctrico e inconfundiblemente francés.",
    ],
  },
  classic: {
    nl: [
      "Le Mans Classic, nu een jaarlijkse afspraak in juli, brengt historische racewagens en een welvarend, enthousiast publiek samen. De concurrentie om kamers is lager dan bij de 24 uur, en het venster om de goede nabije adressen te boeken opent vroeg, dus vaste bezoekers zijn snel.",
      "Een rustigere, verfijndere raceweek, maar de beste bases lopen toch vol.",
    ],
    de: [
      "Le Mans Classic, inzwischen ein jährlicher Juli-Termin, versammelt historische Rennwagen und ein wohlhabendes, begeistertes Publikum. Der Wettbewerb um Zimmer ist geringer als bei den 24 Stunden, und das Fenster für die guten nahen Adressen öffnet früh, also sind Stammgäste schnell.",
      "Eine ruhigere, feinere Rennwoche, aber die besten Basen füllen sich trotzdem.",
    ],
    it: [
      "Le Mans Classic, ora un appuntamento annuale di luglio, riunisce auto da corsa storiche e un pubblico facoltoso e appassionato. La concorrenza per le camere è minore della 24 Ore, e la finestra per prenotare i buoni indirizzi vicini apre presto, così gli habitué sono rapidi.",
      "Una settimana di gara più tranquilla e raffinata, ma le basi migliori si riempiono comunque.",
    ],
    es: [
      "Le Mans Classic, ahora una cita anual en julio, reúne coches de carreras históricos y un público acomodado y entusiasta. La competencia por las habitaciones es menor que en las 24 Horas, y la ventana para reservar las buenas direcciones cercanas abre pronto, así que los habituales van rápido.",
      "Una semana de carrera más tranquila y refinada, pero las mejores bases se llenan igual.",
    ],
  },
  trucks: {
    nl: [
      "De 24 Hours Trucks sluiten het jaar af in de herfst met gezinsvriendelijke truckraces en een festivalgevoel. Het is het makkelijkst te boeken van de grote weekenden van het circuit, met de ruimste keuze en de vriendelijkste prijzen.",
      "Een voordelige, ontspannen kennismaking met de raceweek in Le Mans.",
    ],
    de: [
      "Die 24 Hours Trucks beschließen das Jahr im Herbst mit familienfreundlichem Truck-Racing und Festivalstimmung. Sie sind das am leichtesten zu buchende der großen Wochenenden der Strecke, mit der größten Auswahl und den freundlichsten Preisen.",
      "Eine preiswerte, entspannte Einführung in die Rennwoche von Le Mans.",
    ],
    it: [
      "Le 24 Hours Trucks chiudono l'anno in autunno con gare di camion per famiglie e un'aria da festival. È il più facile da prenotare dei grandi weekend del circuito, con la scelta più ampia e i prezzi più amichevoli.",
      "Un'introduzione conveniente e rilassata alla settimana di gara di Le Mans.",
    ],
    es: [
      "Las 24 Hours Trucks cierran el año en otoño con carreras de camiones para toda la familia y aire de festival. Es el más fácil de reservar de los grandes fines de semana del circuito, con la mayor oferta y los precios más amables.",
      "Una introducción económica y relajada a la semana de carrera en Le Mans.",
    ],
  },
};
