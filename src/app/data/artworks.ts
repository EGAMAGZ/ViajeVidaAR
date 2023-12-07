type Dimensions = {
  width: number;
  height: number;
}

type Rotation = {
  x: number;
  y: number;
  z: number;
}

export interface Artwork {
  id: number;
  name: string;
  description: string;
  markerPath: string;
  modelPath: string;
  dimensions: Dimensions;
  rotation?: Rotation
}

export const chilhoodArtworks: Artwork[] = [
  {
    id: 1,
    name: "El niño azul",
    description: '"El niño azul" (1770) de Thomas Gainsborough: Esta pintura muestra a un niño vestido de azul con un sombrero de paja, rodeado de un paisaje campestre sereno. Es una representación icónica de la inocencia y la serenidad infantil.',
    markerPath: "",
    modelPath: "/assets/img/artworks/childhood/El_nino_azul.jpg",
    dimensions: {
      height: 3,
      width: 2
    },
  },
  {
    id: 2,
    name: "Las dos hermanas",
    description: '"Las dos hermanas" (1881) de Pierre-Auguste Renoir: Esta obra muestra a dos niñas, probablemente hermanas, en un jardín. El cuadro transmite una sensación de complicidad y afecto entre las dos hermanas, capturando la esencia de la relación entre hermanos en la infancia.',
    markerPath: "",
    modelPath: "/assets/img/artworks/childhood/Las_dos_hermanas.jpg",
    dimensions: {
      height: 2,
      width: 2
    },
  },
  {
    id: 3,
    name: "La leche materna",
    description: '"La leche materna" (1895) de Gustav Klimt: En esta pintura simbólica, Klimt muestra a una madre amamantando a su bebé. La obra refleja la conexión profunda y la intimidad entre madre e hijo, representando la maternidad en la etapa temprana de la vida.',
    markerPath: "",
    modelPath: "/assets/img/artworks/childhood/La_leche_materna.jpg",
    dimensions: {
      height: 2,
      width: 2
    },
  },
  {
    id: 4,
    name: "Niños en la playa",
    description: '"Niños en la playa" (1884) de Mary Cassatt: Cassatt era conocida por sus retratos de madres e hijos, y esta obra no es una excepción. Muestra a un grupo de niños jugando en la playa bajo la supervisión de una madre. Captura la alegría y la energía lúdica de la infancia.',
    markerPath: "",
    modelPath: "/assets/img/artworks/childhood/Ninos_en_la_playa.jpeg",
    dimensions: {
      height: 3,
      width: 2
    },
  },
  {
    id: 5,
    name: "El niño y su madre",
    description: '"El niño y su madre" (1940) de Pablo Picasso: Esta pintura abstracta muestra la figura estilizada de un niño junto a su madre. Picasso utilizó formas geométricas y colores vibrantes para representar la relación entre madre e hijo, evocando una sensación de ternura y protección.',
    markerPath: "",
    modelPath: "/assets/img/artworks/childhood/El_nino_y_su_madre.jpeg",
    dimensions: {
      height: 2,
      width: 2
    },
  }
];

export const adolescenceArtworks: Artwork[] = [
  {
    id: 6,
    name: "El beso",
    description: '"El beso" (1907-1908) de Gustav Klimt: Esta icónica obra muestra a una pareja joven abrazada y besándose. La pintura evoca el amor y la pasión de la adolescencia, y representa el despertar de la sexualidad y la exploración emocional propia de esa etapa.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adolescence/El_beso.jpg",
    dimensions: {
      height: 2,
      width: 2
    },
  },
  {
    id: 7,
    name: "Retrato de Dora Maar",
    description: '"Retrato de Dora Maar" (1937) de Pablo Picasso: Esta pintura muestra a Dora Maar, una de las musas de Picasso, quien fue retratada en varias etapas de su vida. En este retrato en particular, se captura a Dora Maar en su juventud, transmitiendo una sensación de misterio y introspección propias de la adolescencia.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adolescence/Retrato_de_Dora_Maar.jpg",
    dimensions: {
      height: 3,
      width: 2
    },
  },
  {
    id: 8,
    name: "Las señoritas de Avignon",
    description: '"Las señoritas de Avignon" (1907) de Pablo Picasso: Esta obra maestra del cubismo retrata a cinco figuras femeninas en un estilo abstracto y geométrico. Aunque no se representa explícitamente la adolescencia, esta pintura simboliza la ruptura con las convenciones tradicionales y la búsqueda de nuevas formas de expresión, características asociadas a la adolescencia y el período de transición.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adolescence/Las_senoritas_de_Avignon.jpg",
    dimensions: {
      height: 2,
      width: 3
    },
  },
  {
    id: 9,
    name: "Los amantes",
    description: '"Los amantes" (1928) de René Magritte: En esta pintura surrealista, se muestra a dos figuras jóvenes besándose con las cabezas envueltas en telas blancas. La obra evoca la intimidad y el misterio de los primeros amores y las emociones tumultuosas de la adolescencia.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adolescence/Los_amantes.jpg",
    dimensions: {
      height: 2,
      width: 2.5
    },
  }
];

export const adulthoodArtworks: Artwork[] = [
  {
    id: 10,
    name: "Retrato del papa Inocencio X",
    description: '"Retrato del papa Inocencio X" (1650) de Diego Velázquez: Esta pintura muestra al papa Inocencio X en una pose imponente y poderosa. Representa la figura de un líder adulto en una posición de autoridad y responsabilidad.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adulthood/Retrato_del_papa_Inocencio_X.jpg",
    dimensions: {
      height: 3,
      width: 2.5
    },
  },
  {
    id: 11,
    name: "Retrato de Madame X",
    description: '"Retrato de Madame X" (1884) de John Singer Sargent: Esta pintura retrata a una mujer elegante y segura de sí misma, conocida como Madame X. La obra representa la sofisticación y la belleza de la mujer adulta.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adulthood/Retrato_de_Madame_X.jpg",
    dimensions: {
      height: 4,
      width: 2
    },
  },
  {
    id: 12,
    name: "El sueño",
    description: '"El sueño" (1932) de Pablo Picasso: Esta pintura surrealista muestra una escena onírica con una mujer adulta durmiendo. Picasso emplea formas y colores audaces para representar la complejidad de los sueños y la psicología del individuo adulto.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adulthood/El_sueno.jpg",
    dimensions: {
      height: 2.5,
      width: 2
    },
  },
  {
    id: 13,
    name: "El matrimonio Arnolfini",
    description: '"El matrimonio Arnolfini" (1434) de Jan van Eyck: Esta pintura de la época del Renacimiento representa a una pareja casada, Giovanni Arnolfini y su esposa, en una habitación lujosa. La obra simboliza la vida adulta, el compromiso y las responsabilidades conyugales.',
    markerPath: "",
    modelPath: "/assets/img/artworks/adulthood/El_matrimonio_Arnolfini.jpg",
    dimensions: {
      height: 2.5,
      width: 2
    },
  }
];

export const oldAgeArtworks: Artwork[] = [
  {
    id: 14,
    name: "Los viejos músicos",
    description: '"Los viejos músicos" (1665) de Diego Velázquez: Esta pintura retrata a varios músicos ancianos que tocan diferentes instrumentos en un ambiente modesto. Velázquez captura las arrugas y la fragilidad física de los personajes, transmitiendo una sensación de dignidad y experiencia acumulada en la vejez.',
    markerPath: "",
    modelPath: "/assets/img/artworks/oldAge/Los_viejos_musicos.jpg",
    dimensions: {
      height: 2,
      width: 3.5
    },
  },
  {
    id: 15,
    name: "El anciano pescador",
    description: '"El anciano pescador" (1862) de Jozef Israëls: Esta pintura muestra a un pescador de avanzada edad sentado en la playa después de un largo día de trabajo. Israëls utiliza una paleta de colores suaves y detalles realistas para representar la fatiga y la sabiduría que se asocian con la vejez.',
    markerPath: "",
    modelPath: "/assets/img/artworks/oldAge/El_anciano_pescador.jpg",
    dimensions: {
      height: 2.2,
      width: 2
    },
  },
  {
    id: 16,
    name: "La lectura del testamento",
    description: '"La lectura del testamento" (1806) de Jean-Baptiste Greuze: Esta pintura representa a un anciano leyendo su testamento rodeado de sus familiares y herederos. Greuze muestra el drama y la tensión emocional relacionados con la distribución de la herencia y el final de la vida, explorando las relaciones familiares en la vejez.',
    markerPath: "",
    modelPath: "/assets/img/artworks/oldAge/La_lectura_del_testamento.jpg",
    dimensions: {
      height: 2,
      width: 2.5
    },
  },
  {
    id: 17,
    name: "Retrato del doctor Gachet",
    description: '"Retrato del doctor Gachet" (1890) de Vincent van Gogh: Esta icónica pintura retrata al médico del artista, el doctor Gachet, en su vejez. Van Gogh utiliza pinceladas expresivas y colores intensos para capturar la melancolía y la introspección asociadas con la vejez.',
    markerPath: "",
    modelPath: "/assets/img/artworks/oldAge/Retrato_del_doctor_Gachet.jpg",
    dimensions: {
      height: 2.2,
      width: 2
    },
  }
];

export const allArtworks: Artwork[] = [
  chilhoodArtworks,
  adolescenceArtworks,
  adulthoodArtworks,
  oldAgeArtworks
].flat()
