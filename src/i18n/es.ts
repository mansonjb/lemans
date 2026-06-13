import type { Place } from "@/lib/types";
import type { Dict } from "./en";

export const es: Dict = {
  locale: "es",
  siteName: "Le Mans Stays",
  tagline: "Dónde dormir en los fines de semana de carreras de Le Mans",

  nav: {
    events: "Fines de semana de carreras",
    places: "Dónde dormir",
    guides: "Guías",
    listYourHome: "Alquila tu casa",
  },

  common: {
    daysToGo: (d: number) => `Quedan ${d} días`,
    datesTBC: "fechas por confirmar",
    bookAhead: (m: number) =>
      `El alojamiento para este fin de semana suele agotarse con ${m}+ meses de antelación. Cuanto antes reserves, más cerca y más barato duermes.`,
    crowd: (c: string) => `${c} espectadores previstos`,
    minToCircuit: (min: number) => `${min} min del circuito`,
    walkToCircuit: "Circuito accesible a pie",
    raceWeekTraffic: (min: number) => `${min} min en semana de carrera`,
    km: (km: number) => `a ${km} km del circuito`,
    seeAvailability: "Ver disponibilidad",
    mapNote:
      "Los precios y la disponibilidad del mapa se cargan en directo desde nuestros socios de reserva. Reservar desde el mapa apoya esta web, sin coste extra para ti.",
    faqHeading: "Preguntas frecuentes",
    ringNames: {
      1: "Circuito a pie o en bici",
      2: "A menos de 30 minutos",
      3: "Entre 30 y 60 minutos",
      4: "Entre 60 y 90 minutos",
    } as Record<1 | 2 | 3 | 4, string>,
    parking: {
      easy: "Aparcamiento fácil",
      medium: "Aparcar requiere algo de paciencia",
      hard: "Aparcar es complicado, llega pronto",
    },
    station: "Estación de tren",
    tram: "Tranvía al circuito",
    nextEvents: "Próximos fines de semana de carreras",
    exploreZones: "Dónde dormir, zona a zona",
    exploreTypes: "Elige tu estilo",
    guidesHeading: "Guías de supervivencia",
    readGuide: "Leer la guía",
    viewZone: "Ver esta zona",
    viewEvent: "Planificar la estancia",
    updated: "Actualizado para la temporada 2027",
    backHome: "Inicio",
    languageName: "Español",
  },

  eventNames: {
    lm24: { name: "24 Horas de Le Mans", short: "Le Mans 24h" },
    motos: { name: "24 Heures Motos", short: "24h Motos" },
    motogp: { name: "MotoGP de Francia en Le Mans", short: "Le Mans MotoGP" },
    classic: { name: "Le Mans Classic", short: "Le Mans Classic" },
    trucks: { name: "24 Horas de Camiones", short: "24h Camiones" },
  },

  home: {
    title: "Dónde dormir en los fines de semana de carreras de Le Mans | Hoteles, camping, casas",
    metaDescription:
      "Guía independiente de alojamiento para las semanas de carrera en Le Mans: hoteles, campings privados y casas vacacionales alrededor del circuito, comparados por tiempo real de trayecto. Reserva pronto, duerme cerca.",
    heroTitle: "Duerme pegado a la acción",
    heroSub:
      "En cada gran fin de semana de carreras, Le Mans se llena con meses de antelación. Mapeamos hoteles, casas y campings privados por tiempo real de trayecto al circuito, para que reserves la base correcta antes de que vuele.",
    ctaPrimary: "Encontrar alojamiento",
    ctaSecondary: "Ver los fines de semana de carreras",
    zonesSub:
      "Desde pueblos desde los que se va andando al circuito hasta ciudades a una hora con disponibilidad tardía: elige tu anillo, comprueba los tiempos reales en semana de carrera y reserva lo que encaje.",
    leadTitle: "¿Tienes una casa cerca de Le Mans?",
    leadText:
      "Los aficionados buscan casas, habitaciones y parcelas cada abril, mayo, junio, julio y octubre. Publica tu propiedad y recibe solicitudes directas.",
    leadCta: "Alquila tu casa",
    seoTitle: "El problema del alojamiento, resuelto con antelación",
    seoText: [
      "Le Mans acoge cinco grandes fines de semana de carreras al año, y la ciudad no tiene ni de lejos camas suficientes para esas multitudes. Los hoteles se llenan casi un año antes, los precios se triplican y los rezagados improvisan.",
      "Esta web hace una sola cosa: enseñarte dónde queda sitio de verdad para cada fin de semana de carreras, anillo a anillo alrededor del circuito, con tiempos de trayecto honestos para el tráfico de carrera. Hoteles, casas y campings privados, comparados en un solo mapa.",
    ],
  },

  eventPage: {
    title: (name: string, year: number) =>
      `Dónde dormir para las ${name} ${year}: hoteles, camping, casas`,
    metaDescription: (name: string, year: number) =>
      `Guía de alojamiento para las ${name} ${year}: hoteles, campings privados y casas vacacionales junto al circuito de Le Mans, comparados por tiempo real de trayecto. Reserva antes de que se agote.`,
    heroKicker: "Fin de semana de carreras",
    bookingHeading: "Reserva antes que los demás",
    mapHeading: (name: string) => `Disponibilidad en directo para las ${name}`,
    mapSub:
      "El mapa viene preajustado a las fechas de carrera. Aleja el zoom para ver opciones más lejos del circuito: los precios caen rápido con la distancia.",
    zonesHeading: "Dónde montar el campamento base",
    zonesSub: (name: string) =>
      `La zona correcta depende de cuándo reserves. Para las ${name}, los pueblos a pie se agotan primero, luego la ciudad, luego los municipios de alrededor. Este es el panorama honesto, anillo a anillo.`,
    typesHeading: "¿Hotel, casa o camping?",
    faq: (name: string, months: number, year: number) => [
      {
        q: `¿Cuándo reservar alojamiento para las ${name} ${year}?`,
        a: `Lo antes posible. Los hoteles y casas más cercanos suelen agotarse ${months}+ meses antes de la carrera. Reservar con cancelación gratuita en cuanto se anuncian las fechas es el movimiento estándar de los habituales.`,
      },
      {
        q: `¿Se puede dormir a distancia a pie del circuito?`,
        a: `Sí, pero la oferta es pequeña: un puñado de hoteles, casas de particulares en Arnage, Mulsanne y Ruaudin, y parcelas privadas que abren para la semana de carrera. Vuelan primero: reserva con meses de antelación o amplía al anillo de 30 minutos.`,
      },
      {
        q: `Parece todo completo. ¿Y ahora?`,
        a: `Amplía el radio. Los pueblos a 30-60 minutos (La Flèche, Alençon) y ciudades como Tours, Angers o Laval mantienen disponibilidad mucho más tiempo, a precios normales. La estrategia completa está en nuestra guía del plan B.`,
      },
    ],
  },

  placePage: {
    title: (name: string) =>
      `Dormir en ${name} para las carreras de Le Mans: hoteles y casas`,
    metaDescription: (name: string, min: number) =>
      `¿Es ${name} una buena base para la semana de carrera en Le Mans? Tiempos reales (${min} min en condiciones normales, más con tráfico de carrera), aparcamiento, transporte y disponibilidad en directo.`,
    heroKicker: "Guía de zona",
    statsHeading: "Los números que importan",
    statDistance: "Distancia al circuito",
    statNormal: "Trayecto normal",
    statRaceWeek: "Trayecto en semana de carrera",
    statWalk: "A pie",
    mapHeading: (name: string) => `Dormir en ${name}`,
    eventsHeading: "Vale para todos los fines de semana de carreras",
    eventsSub:
      "La misma base, cinco fines de semana de carreras al año. La presión cambia: junio es extremo, abril y octubre son más amables.",
    introByRing: {
      1: (p: Place) =>
        `${p.name} está pegado al circuito, a ${p.km} km de las entradas principales. Durmiendo aquí te olvidas del coche: se entra a pie o en bici, se vuelve después de los relevos nocturnos y nunca haces cola por un aparcamiento. Es el anillo más buscado alrededor de la pista, con la oferta más pequeña: sobre todo casas de particulares, habitaciones y algunas parcelas que abren en semana de carrera.`,
      2: (p: Place) =>
        `${p.name} está en el punto dulce: unos ${p.driveMin} minutos del circuito un día normal, alrededor de ${p.raceWeekMin} en semana de carrera. Hay hoteles de verdad, supermercados y restaurantes, y opciones reales de disponibilidad si reservas con unos meses de antelación en vez de un año.`,
      3: (p: Place) =>
        `${p.name} es el compromiso inteligente cuando los anillos interiores se llenan: ${p.driveMin} minutos a la pista en condiciones normales, unos ${p.raceWeekMin} con tráfico de carrera. Los precios se mantienen casi normales incluso en semana de carrera, y saliendo temprano llegas al circuito antes del warm-up de la mañana.`,
      4: (p: Place) =>
        `${p.name} es la aliada de los que reservan tarde: una ciudad de verdad a unos ${p.driveMin} minutos del circuito (cuenta ${p.raceWeekMin} con tráfico de semana de carrera). Cuando todo lo cercano a Le Mans está agotado o a precios absurdos, ${p.name} conserva hoteles normales a tarifas normales, con restaurantes y vida alrededor.`,
    },
    parkingNote: {
      easy: "Aparcar aquí es sencillo, incluso con remolque o furgoneta.",
      medium:
        "Aparcar es viable pero se llena en semana de carrera. Los días de carrera, llega antes de la hora punta de la tarde.",
      hard: "El aparcamiento es el punto débil. Si duermes aquí, llega pronto o ven sin coche.",
    },
    stationNote:
      "Hay estación de tren: puedes llegar a Le Mans y a las lanzaderas del circuito sin conducir.",
    tramNote:
      "El tranvía de Le Mans (dirección Antarès) te deja a pocos minutos a pie de las entradas del circuito: una ventaja enorme los días de carrera.",
  },

  typePage: {
    mapHeading: "Disponibilidad en directo",
    zonesHeading: "Las mejores zonas para esto",
    camping: {
      title: "Camping para las carreras de Le Mans: terrenos privados y parcelas",
      metaDescription:
        "Opciones de camping privado para la semana de carrera en Le Mans: campings independientes y parcelas de semana de carrera alrededor del circuito, y cómo asegurar la tuya pronto.",
      heroTitle: "Acampa junto a la pista",
      intro: [
        "El camping es el alma de la semana de carrera en Le Mans. Alrededor del circuito, campings privados y propietarios locales abren parcelas para los grandes fines de semana, desde un simple campo de hierba hasta parcelas equipadas con luz y duchas.",
        "Las parcelas independientes cerca de la pista son limitadas y se las lleva quien pregunta primero. Si ves una en el mapa o en un anuncio, cógela. Si no, los campings del anillo de 30 minutos combinan espacio con trayectos más fáciles.",
      ],
      pitch:
        "¿Tienes terreno o parcelas cerca del circuito? Los aficionados buscan exactamente eso.",
    },
    hotels: {
      title: "Hoteles para las carreras de Le Mans: dónde encontrar habitación",
      metaDescription:
        "Hoteles para la semana de carrera en Le Mans: qué se agota primero, alternativas realistas por tiempo de trayecto y habitaciones disponibles alrededor del circuito en directo.",
      heroTitle: "Una cama de verdad y una ducha",
      intro: [
        "La habitación de hotel es el recurso más escaso de la semana de carrera. Le Mans tiene un parque hotelero modesto para una ciudad que recibe 300 000 visitantes: las habitaciones cerca del circuito se reservan casi un año antes.",
        "La buena noticia: precios y disponibilidad mejoran mucho con cada anillo hacia fuera. Tours, Angers, Laval y Alençon mantienen habitaciones a precios sensatos mucho después de que Le Mans esté lleno, y el trayecto va bien si sales antes del tráfico de la mañana.",
      ],
      pitch: "",
    },
    rentals: {
      title: "Casas vacacionales para las carreras de Le Mans: casas y habitaciones",
      metaDescription:
        "Alquileres vacacionales para la semana de carrera en Le Mans: casas enteras, gîtes y habitaciones privadas alrededor del circuito, la fórmula favorita de los grupos.",
      heroTitle: "Alquila la casa de un local",
      intro: [
        "Alquilar una casa es el movimiento clásico de los grupos en Le Mans: alrededor del circuito, los vecinos alquilan casas, gîtes y habitaciones para la semana de carrera. Tienes cocina, camas para todo el equipo y aparcamiento, a menudo más cerca de la pista que cualquier hotel.",
        "Las mejores casas se reservan año tras año por los mismos grupos: los anuncios nuevos y las solicitudes tempranas lo son todo. Mira el mapa, y si ves algo en los dos primeros anillos, no lo dejes escapar.",
      ],
      pitch:
        "¿Tienes una casa por la zona? Los inquilinos de semana de carrera son los más fáciles del año.",
    },
  },

  crossPage: {
    title: (typeTitle: string, eventName: string, year: number) =>
      `${typeTitle} para las ${eventName} ${year}`,
    metaDescription: (typeTitle: string, eventName: string) =>
      `${typeTitle} para las ${eventName}: disponibilidad en directo alrededor del circuito de Le Mans, tiempos de trayecto honestos y la estrategia de reserva de los habituales.`,
    intro: {
      "lm24-camping": [
        "El camping y las 24 Horas van de la mano: gran parte del público vive así la semana, y las parcelas cerca de la pista se asignan con meses de antelación.",
        "Los campos privados y terrenos independientes del lado sur del circuito (Arnage, Mulsanne, Ruaudin) son los mejores sitios. Reserva en cuanto el viaje esté decidido, y ten un plan B en el anillo de 30 minutos.",
      ],
      "lm24-hotels": [
        "La habitación de hotel para las 24 Horas es la reserva más difícil del año del motor en Francia. Todo lo que está en Le Mans vuela aproximadamente un año antes, a precios fuertes.",
        "El método: bloquea una habitación cancelable más lejos el día que decidas venir, y mejora si se libera algo más cerca. Tours, Angers y Laval mantienen tarifas realistas más tiempo.",
      ],
      "motogp-camping": [
        "El fin de semana de MotoGP atrae una de las mayores multitudes de la temporada, y gran parte llega en moto y acampa. Las parcelas cerca del circuito vuelan, aunque la presión está un escalón por debajo de las 24 Horas.",
        "Apunta a los dos primeros anillos del mapa: parcelas de pueblo y pequeños terrenos a menos de 20 minutos siguen siendo realistas reservando con unos meses, y el trayecto en moto gana a cualquier cola de coches.",
      ],
      "motogp-hotels": [
        "Los hoteles del fin de semana de MotoGP se llenan rápido en Le Mans, pero la situación es más amable que en junio: reservando con 6-8 meses aún se duerme a menos de 30 minutos de la pista.",
        "Consejo motero: elige un hotel con aparcamiento privado para las motos. Los pueblos del segundo y tercer anillo están llenos de ellos, a tarifas que el centro dejó de ofrecer hace meses.",
      ],
    } as Record<string, string[]>,
  },

  guides: {
    heading: "Guías",
  },

  lead: {
    title: "Alquila tu casa para las carreras de Le Mans",
    metaDescription:
      "Alquila tu casa, habitaciones o terreno a aficionados durante los fines de semana de carreras de Le Mans. Solicitud gratuita, contacto directo con demanda verificada.",
    heroTitle: "Tu casa vale mucho en semana de carrera",
    heroSub:
      "Cinco veces al año, cientos de miles de aficionados buscan cama cerca del circuito. Casas, habitaciones, gîtes y parcelas alrededor de Le Mans se alquilan en días. Cuéntanos qué tienes y lo ponemos delante de los visitantes adecuados.",
    benefits: [
      {
        t: "La demanda ya existe",
        d: "Visitantes del Reino Unido, Países Bajos, Alemania y toda Francia buscan hasta con un año de antelación.",
      },
      {
        t: "Tú tienes el control",
        d: "Tú fijas tus fechas, tu precio y tus reglas. Te enviamos las solicitudes y tú eliges quién reserva.",
      },
      {
        t: "Publicar es gratis",
        d: "Proponer una propiedad no cuesta nada. Revisamos lo que se publica para que los huéspedes confíen.",
      },
    ],
    form: {
      name: "Tu nombre",
      email: "Email",
      phone: "Teléfono (opcional)",
      town: "Municipio",
      propertyType: "¿Qué ofreces?",
      types: {
        house: "Casa entera",
        rooms: "Habitación(es)",
        pitch: "Parcela de camping / terreno",
        other: "Otro",
      },
      capacity: "¿Para cuántas personas?",
      events: "¿Qué fines de semana de carreras? (varias opciones posibles)",
      message: "¿Algo que debamos saber? (distancia al circuito, aparcamiento, ...)",
      gdpr: "Acepto ser contactado sobre mi solicitud. Sin spam, sin reventa de mis datos.",
      submit: "Enviar mi solicitud",
      sending: "Enviando...",
      success: "Solicitud recibida. Volvemos contigo en 48 horas con los siguientes pasos.",
      error: "Algo ha fallado. Inténtalo de nuevo o escríbenos directamente.",
    },
  },

  about: {
    title: "Sobre esta web",
    paragraphs: [
      "Le Mans Stays es una guía independiente de alojamiento para los grandes fines de semana de carreras de Le Mans. Mapeamos hoteles, casas vacacionales y campings privados alrededor del circuito y los comparamos como eligen de verdad los visitantes: por tiempo real de trayecto los días de carrera.",
      "Ganamos una comisión cuando reservas a través de los mapas de esta web, sin coste extra para ti. Ese es todo el modelo: sin banners, sin rankings patrocinados.",
      "No estamos afiliados, asociados ni respaldados por el Automobile Club de l'Ouest (ACO), Dorna Sports ni los organizadores de los eventos mencionados. Los nombres de los eventos se usan solo con fines descriptivos. No vendemos entradas.",
    ],
  },

  contact: {
    title: "Contacto",
    paragraphs: [
      "¿Una pregunta, una corrección, una idea de colaboración o una propiedad que proponer? Escríbenos, respondemos rápido.",
      "Email: hello@lemansstays.com",
    ],
  },

  legal: {
    title: "Aviso legal",
    paragraphs: [
      "Esta web es una publicación independiente, editada por el equipo de Le Mans Stays. Contacto: hello@lemansstays.com. Los datos completos del editor están disponibles a petición.",
      "Alojamiento web: este sitio está alojado por Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, EE. UU.",
      "Divulgación de afiliación: esta web contiene enlaces de afiliación. Podemos ganar una comisión cuando reservas a través de nuestros socios (incluidos Stay22 y Booking.com), sin coste extra para ti. Así se financia la web; no influye en la información que publicamos.",
      "Los nombres de eventos, marcas y enseñas citados en esta web pertenecen a sus respectivos propietarios y se usan solo con fines descriptivos, para indicar cuándo la demanda de alojamiento alcanza su punto máximo. Esta web es independiente y no está afiliada, respaldada ni patrocinada por el Automobile Club de l'Ouest (ACO), Dorna Sports ni ningún organizador. Esta web no vende entradas.",
      "Las reservas realizadas a través de los mapas y enlaces de esta web las procesan nuestros socios bajo sus propias condiciones. No somos el vendedor ni parte de tu contrato de reserva.",
    ],
  },

  privacy: {
    title: "Privacidad",
    paragraphs: [
      "Recogemos la información enviada a través del formulario solo para tramitar tu solicitud, y nunca la revendemos.",
      "Nuestros socios de reserva pueden usar cookies para registrar las reservas hechas desde los mapas: así se financia esta web. No se venden datos personales a terceros.",
      "Para ejercer tus derechos sobre tus datos, contáctanos en la dirección de la página de contacto.",
    ],
  },

  footer: {
    events: "Fines de semana de carreras",
    zones: "Zonas",
    types: "Tipos de alojamiento",
    guides: "Guías",
    site: "Web",
    disclaimer:
      "Le Mans Stays es una guía independiente de alojamiento. No estamos afiliados, asociados ni respaldados por el Automobile Club de l'Ouest (ACO), Dorna Sports ni los organizadores de los eventos mencionados. Los nombres de los eventos se usan solo con fines descriptivos. No vendemos entradas.",
    affiliate:
      "Las reservas realizadas a través de esta web pueden generarnos una comisión, sin coste extra para ti.",
    rights: "Todos los derechos reservados.",
    trademarks:
      "Todos los nombres de eventos y marcas pertenecen a sus respectivos propietarios.",
  },
};
