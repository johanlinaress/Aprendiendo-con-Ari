/**
 * @fileoverview Lecturas Expositivas Interactivas para Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

export const EXPOSITIVE_READINGS_DATA = [
  {
    "id": "sistema_solar",
    "title": "El Sistema Solar",
    "illustration": "solar",
    "coverSummary": "Viaja por el espacio junto a Ari para descubrir el Sol, los ocho planetas y los cuerpos celestes que giran a su alrededor.",
    "fragments": [
      {
        "heading": "1. ¿Qué es el Sistema Solar?",
        "text": "El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas.",
        "keywords": [
          {
            "word": "Sistema Solar",
            "definition": "Conjunto de planetas y astros que giran alrededor del Sol."
          },
          {
            "word": "planetas",
            "definition": "Cuerpos celestes que orbitan alrededor de una estrella y no emiten luz propia."
          },
          {
            "word": "asteroides",
            "definition": "Rocas espaciales más pequeñas que un planeta que giran alrededor del Sol."
          }
        ]
      },
      {
        "heading": "2. Los planetas interiores y el planeta rojo",
        "text": "Los cuatro planetas más cercanos al Sol son rocosos: Mercurio, Venus, la Tierra y Marte. Marte es conocido como el planeta rojo por el óxido de hierro en su suelo.",
        "keywords": [
          {
            "word": "Tierra",
            "definition": "Nuestro planeta, el único conocido con océanos de agua líquida y vida."
          },
          {
            "word": "Marte",
            "definition": "Cuarto planeta del Sistema Solar, llamado el planeta rojo."
          }
        ]
      },
      {
        "heading": "3. Los gigantes gaseosos",
        "text": "Más lejos del Sol se encuentran los planetas gigantes: Júpiter, Saturno con sus brillantes anillos de hielo, Urano y Neptuno.",
        "keywords": [
          {
            "word": "Júpiter",
            "definition": "El planeta más grande de todo el Sistema Solar."
          },
          {
            "word": "Saturno",
            "definition": "Famoso por su gran sistema de anillos visibles desde telescopios."
          }
        ]
      }
    ],
    "explorationQuestion": {
      "prompt": "Pregunta de exploración: ¿Qué planeta es conocido como el planeta rojo?",
      "options": [
        "Marte",
        "Júpiter",
        "Mercurio",
        "Venus"
      ],
      "correctAnswer": "Marte",
      "feedback": "¡Muy bien! Marte tiene óxido de hierro en su superficie y por eso luce rojizo."
    }
  },
  {
    "id": "ciclo_agua",
    "title": "El Ciclo del Agua",
    "illustration": "water",
    "coverSummary": "Descubre cómo el agua viaja desde los océanos hasta las nubes y regresa a la Tierra en forma de lluvia.",
    "fragments": [
      {
        "heading": "1. Evaporación",
        "text": "El calor del Sol calienta el agua de los océanos, ríos y lagos, transformándola en vapor que sube lentamente hacia el cielo.",
        "keywords": [
          {
            "word": "Evaporación",
            "definition": "Paso del agua líquida a vapor gracias al calor del Sol."
          }
        ]
      },
      {
        "heading": "2. Condensación",
        "text": "Al subir a gran altura, el vapor de agua se enfría y forma millones de gotitas diminutas que crean las nubes.",
        "keywords": [
          {
            "word": "Condensación",
            "definition": "Cuando el vapor se enfría en lo alto y forma las nubes."
          }
        ]
      },
      {
        "heading": "3. Precipitación y retorno",
        "text": "Cuando las gotas en las nubes se vuelven pesadas, caen como lluvia, nieve o granizo y regresan por los ríos hasta el mar.",
        "keywords": [
          {
            "word": "Precipitación",
            "definition": "Caída del agua desde las nubes en forma de lluvia o nieve."
          }
        ]
      }
    ],
    "explorationQuestion": {
      "prompt": "Pregunta de exploración: ¿En qué etapa el vapor se enfría y forma las nubes?",
      "options": [
        "Condensación",
        "Evaporación",
        "Fusión",
        "Filtración"
      ],
      "correctAnswer": "Condensación",
      "feedback": "¡Exacto! En la condensación el vapor sube, se enfría y forma las nubes."
    }
  },
  {
    "id": "animales_vertebrados",
    "title": "Animales Vertebrados e Invertebrados",
    "illustration": "nature",
    "coverSummary": "Conoce cómo se clasifican los animales según tengan o no esqueleto interno con columna vertebral.",
    "fragments": [
      {
        "heading": "1. Los animales vertebrados",
        "text": "Los vertebrados tienen un esqueleto interno con columna vertebral. Se dividen en cinco grupos: mamíferos, aves, peces, reptiles y anfibios.",
        "keywords": [
          {
            "word": "vertebrados",
            "definition": "Animales que poseen huesos y columna vertebral interna."
          }
        ]
      },
      {
        "heading": "2. Los animales invertebrados",
        "text": "Los invertebrados no tienen huesos ni columna vertebral, como las abejas, las mariposas, los pulpos y las lombrices.",
        "keywords": [
          {
            "word": "invertebrados",
            "definition": "Animales sin columna vertebral ni esqueleto interno de huesos."
          }
        ]
      },
      {
        "heading": "3. Importancia en los ecosistemas",
        "text": "Tanto los delfines en el océano como las abejas polinizadoras en los jardines cumplen una misión vital para el equilibrio de la naturaleza.",
        "keywords": [
          {
            "word": "polinizadoras",
            "definition": "Que transportan polen de una flor a otra ayudando a crear frutos y semillas."
          }
        ]
      }
    ],
    "explorationQuestion": {
      "prompt": "Pregunta de exploración: ¿Cuál de estos animales es un INVERTEBRADO?",
      "options": [
        "La abeja",
        "El delfín",
        "El perro",
        "El águila"
      ],
      "correctAnswer": "La abeja",
      "feedback": "¡Correcto! La abeja es un insecto y no tiene columna vertebral."
    }
  },
  {
    "id": "cuerpo_humano",
    "title": "El Cuerpo Humano y las Plantas",
    "illustration": "book",
    "coverSummary": "Explora cómo funcionan nuestros órganos principales y cómo las plantas producen oxígeno mediante la fotosíntesis.",
    "fragments": [
      {
        "heading": "1. Sistemas del cuerpo humano",
        "text": "El corazón impulsa la sangre por todo el cuerpo, los pulmones toman el oxígeno del aire y el cerebro coordina nuestros pensamientos y movimientos.",
        "keywords": [
          {
            "word": "oxígeno",
            "definition": "Gas indispensable del aire que respiramos para vivir."
          }
        ]
      },
      {
        "heading": "2. Las plantas y la fotosíntesis",
        "text": "Las plantas fabrican su propio alimento usando agua, luz solar y dióxido de carbono. En este proceso llamado fotosíntesis liberan oxígeno.",
        "keywords": [
          {
            "word": "fotosíntesis",
            "definition": "Proceso con el que las plantas elaboran su alimento usando la luz del Sol."
          }
        ]
      },
      {
        "heading": "3. Cuidado del medio ambiente",
        "text": "Sembrar árboles, ahorrar agua y reciclar residuos protege los ecosistemas y mantiene limpio el aire que respiramos.",
        "keywords": [
          {
            "word": "ecosistemas",
            "definition": "Comunidades de seres vivos que interactúan con el medio donde habitan."
          }
        ]
      }
    ],
    "explorationQuestion": {
      "prompt": "Pregunta de exploración: ¿Cómo se llama el proceso con el que las plantas fabrican su alimento con luz solar?",
      "options": [
        "Fotosíntesis",
        "Digestión",
        "Evaporación",
        "Rotación"
      ],
      "correctAnswer": "Fotosíntesis",
      "feedback": "¡Brillante! Mediante la fotosíntesis las plantas transforman la luz solar en energía y liberan oxígeno."
    }
  }
];
