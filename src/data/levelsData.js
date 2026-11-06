/**
 * @fileoverview Banco Curricular, Preguntas y Contenidos Pedagógicos para Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

export const GRADES_DATA = [
  {
    id: '3',
    label: '3° Grado',
    shortLabel: '3°',
    theme: 'blue',
    description: 'Sumas y restas de 3 cifras, tablas del 1 al 10, repartos exactos, verbos, sujeto, predicado y lecturas.'
  },
  {
    id: '4',
    label: '4° Grado',
    shortLabel: '4°',
    theme: 'pink',
    description: 'Operaciones de mayor magnitud, propiedades, divisiones con residuo, núcleo del sujeto/predicado y textos expositivos.'
  }
];

export const SUBJECTS_DATA = [
  {
    id: 'matematicas',
    title: 'Matemáticas',
    heroTitle: '¡Vamos a aprender Matemáticas!',
    subtitle: 'Sumas, restas, multiplicaciones, divisiones y desafíos',
    color: '#22c55e',
    firstLevelId: 1
  },
  {
    id: 'espanol',
    title: 'Español',
    heroTitle: '¡Descubramos el mundo de las palabras!',
    subtitle: 'Verbos, sujeto, predicado, comprensión y textos expositivos',
    color: '#9333ea',
    firstLevelId: 6
  }
];

export const EXPOSITIVE_READINGS_DATA = [
  {
    id: 'sistema_solar',
    title: 'El Sistema Solar',
    illustration: 'solar',
    coverSummary:
      'Viaja por el espacio junto a Ari para descubrir el Sol, los ocho planetas y los cuerpos celestes que giran a su alrededor.',
    fragments: [
      {
        heading: '1. ¿Qué es el Sistema Solar?',
        text: 'El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas.',
        keywords: [
          { word: 'Sistema Solar', definition: 'Conjunto de planetas y astros que giran alrededor del Sol.' },
          { word: 'planetas', definition: 'Cuerpos celestes que orbitan alrededor de una estrella y no emiten luz propia.' },
          { word: 'asteroides', definition: 'Rocas espaciales más pequeñas que un planeta que giran alrededor del Sol.' }
        ]
      },
      {
        heading: '2. Los planetas interiores y el planeta rojo',
        text: 'Los cuatro planetas más cercanos al Sol son rocosos: Mercurio, Venus, la Tierra y Marte. Marte es conocido como el planeta rojo por el óxido de hierro en su suelo.',
        keywords: [
          { word: 'Tierra', definition: 'Nuestro planeta, el único conocido con océanos de agua líquida y vida.' },
          { word: 'Marte', definition: 'Cuarto planeta del Sistema Solar, llamado el planeta rojo.' }
        ]
      },
      {
        heading: '3. Los gigantes gaseosos',
        text: 'Más lejos del Sol se encuentran los planetas gigantes: Júpiter, Saturno con sus brillantes anillos de hielo, Urano y Neptuno.',
        keywords: [
          { word: 'Júpiter', definition: 'El planeta más grande de todo el Sistema Solar.' },
          { word: 'Saturno', definition: 'Famoso por su gran sistema de anillos visibles desde telescopios.' }
        ]
      }
    ],
    explorationQuestion: {
      prompt: 'Pregunta de exploración: ¿Qué planeta es conocido como el planeta rojo?',
      options: ['Marte', 'Júpiter', 'Mercurio', 'Venus'],
      correctAnswer: 'Marte',
      feedback: '¡Muy bien! Marte tiene óxido de hierro en su superficie y por eso luce rojizo.'
    }
  },
  {
    id: 'ciclo_agua',
    title: 'El Ciclo del Agua',
    illustration: 'water',
    coverSummary:
      'Descubre cómo el agua viaja desde los océanos hasta las nubes y regresa a la Tierra en forma de lluvia.',
    fragments: [
      {
        heading: '1. Evaporación',
        text: 'El calor del Sol calienta el agua de los océanos, ríos y lagos, transformándola en vapor que sube lentamente hacia el cielo.',
        keywords: [
          { word: 'Evaporación', definition: 'Paso del agua líquida a vapor gracias al calor del Sol.' }
        ]
      },
      {
        heading: '2. Condensación',
        text: 'Al subir a gran altura, el vapor de agua se enfría y forma millones de gotitas diminutas que crean las nubes.',
        keywords: [
          { word: 'Condensación', definition: 'Cuando el vapor se enfría en lo alto y forma las nubes.' }
        ]
      },
      {
        heading: '3. Precipitación y retorno',
        text: 'Cuando las gotas en las nubes se vuelven pesadas, caen como lluvia, nieve o granizo y regresan por los ríos hasta el mar.',
        keywords: [
          { word: 'Precipitación', definition: 'Caída del agua desde las nubes en forma de lluvia o nieve.' }
        ]
      }
    ],
    explorationQuestion: {
      prompt: 'Pregunta de exploración: ¿En qué etapa el vapor se enfría y forma las nubes?',
      options: ['Condensación', 'Evaporación', 'Fusión', 'Filtración'],
      correctAnswer: 'Condensación',
      feedback: '¡Exacto! En la condensación el vapor sube, se enfría y forma las nubes.'
    }
  },
  {
    id: 'animales_vertebrados',
    title: 'Animales Vertebrados e Invertebrados',
    illustration: 'nature',
    coverSummary:
      'Conoce cómo se clasifican los animales según tengan o no esqueleto interno con columna vertebral.',
    fragments: [
      {
        heading: '1. Los animales vertebrados',
        text: 'Los vertebrados tienen un esqueleto interno con columna vertebral. Se dividen en cinco grupos: mamíferos, aves, peces, reptiles y anfibios.',
        keywords: [
          { word: 'vertebrados', definition: 'Animales que poseen huesos y columna vertebral interna.' }
        ]
      },
      {
        heading: '2. Los animales invertebrados',
        text: 'Los invertebrados no tienen huesos ni columna vertebral, como las abejas, las mariposas, los pulpos y las lombrices.',
        keywords: [
          { word: 'invertebrados', definition: 'Animales sin columna vertebral ni esqueleto interno de huesos.' }
        ]
      },
      {
        heading: '3. Importancia en los ecosistemas',
        text: 'Tanto los delfines en el océano como las abejas polinizadoras en los jardines cumplen una misión vital para el equilibrio de la naturaleza.',
        keywords: [
          { word: 'polinizadoras', definition: 'Que transportan polen de una flor a otra ayudando a crear frutos y semillas.' }
        ]
      }
    ],
    explorationQuestion: {
      prompt: 'Pregunta de exploración: ¿Cuál de estos animales es un INVERTEBRADO?',
      options: ['La abeja', 'El delfín', 'El perro', 'El águila'],
      correctAnswer: 'La abeja',
      feedback: '¡Correcto! La abeja es un insecto y no tiene columna vertebral.'
    }
  },
  {
    id: 'cuerpo_humano',
    title: 'El Cuerpo Humano y las Plantas',
    illustration: 'book',
    coverSummary:
      'Explora cómo funcionan nuestros órganos principales y cómo las plantas producen oxígeno mediante la fotosíntesis.',
    fragments: [
      {
        heading: '1. Sistemas del cuerpo humano',
        text: 'El corazón impulsa la sangre por todo el cuerpo, los pulmones toman el oxígeno del aire y el cerebro coordina nuestros pensamientos y movimientos.',
        keywords: [
          { word: 'oxígeno', definition: 'Gas indispensable del aire que respiramos para vivir.' }
        ]
      },
      {
        heading: '2. Las plantas y la fotosíntesis',
        text: 'Las plantas fabrican su propio alimento usando agua, luz solar y dióxido de carbono. En este proceso llamado fotosíntesis liberan oxígeno.',
        keywords: [
          { word: 'fotosíntesis', definition: 'Proceso con el que las plantas elaboran su alimento usando la luz del Sol.' }
        ]
      },
      {
        heading: '3. Cuidado del medio ambiente',
        text: 'Sembrar árboles, ahorrar agua y reciclar residuos protege los ecosistemas y mantiene limpio el aire que respiramos.',
        keywords: [
          { word: 'ecosistemas', definition: 'Comunidades de seres vivos que interactúan con el medio donde habitan.' }
        ]
      }
    ],
    explorationQuestion: {
      prompt: 'Pregunta de exploración: ¿Cómo se llama el proceso con el que las plantas fabrican su alimento con luz solar?',
      options: ['Fotosíntesis', 'Digestión', 'Evaporación', 'Rotación'],
      correctAnswer: 'Fotosíntesis',
      feedback: '¡Brillante! Mediante la fotosíntesis las plantas transforman la luz solar en energía y liberan oxígeno.'
    }
  }
];

export const LEVELS_DATA = [
  /* =====================================================================
   * MÓDULO DE MATEMÁTICAS (UNIDADES 1 A 5)
   * ===================================================================== */
  {
    id: 1,
    unitNumber: 1,
    subject: 'matematicas',
    unitLabel: 'Matemáticas - Unidad 1: Sumas',
    title: 'Unidad 1: Sumas',
    subtitle: 'Matemáticas • Adición y problemas cotidianos',
    category: 'matematicas',
    icon: '➕',
    badgeColor: '#22c55e',
    requiredLevel: null,
    minPassPercent: 70,
    starsReward: 20,
    description: 'Comprende la adición, identifica los sumandos y resuelve sumas con números naturales junto a Ari.',
    lesson: {
      title: 'Aprendo con Ari: ¿Cómo funcionan las sumas?',
      summary3:
        'Sumar es juntar o reunir dos o más cantidades para obtener un total. Los números que sumamos se llaman SUMANDOS y el resultado se llama SUMA o TOTAL. Siempre empezamos sumando las unidades, luego las decenas y finalmente las centenas.',
      summary4:
        'En cuarto grado sumamos cantidades de cuatro o más cifras y aplicamos las propiedades de la adición: la propiedad CONMUTATIVA (el orden de los sumandos no cambia el total) y la propiedad ASOCIATIVA (podemos agrupar sumandos de distintas formas).',
      steps3: [
        '1️⃣ Alinea los números por unidades (U), decenas (D) y centenas (C).',
        '2️⃣ Suma columna por columna de derecha a izquierda. Si una columna suma 10 o más, lleva una decena a la siguiente columna.',
        '3️⃣ Ejemplo de Ari: 245 + 132 → Unidades: 5 + 2 = 7 | Decenas: 4 + 3 = 7 | Centenas: 2 + 1 = 3 → Total = 377.'
      ],
      steps4: [
        '1️⃣ Sumamos cantidades de cuatro cifras alineando Unidades, Decenas, Centenas y Unidades de Mil (UM).',
        '2️⃣ Propiedad Conmutativa: 1.450 + 2.300 = 2.300 + 1.450 (el orden no altera el total: 3.750).',
        '3️⃣ Propiedad Asociativa: (1.200 + 800) + 450 = 2.000 + 450 = 2.450 libros.'
      ],
      exampleVisual3: '245 + 132 = 377',
      exampleVisual4: '1.450 + 2.300 = 2.300 + 1.450 = 3.750  |  (1.200 + 800) + 450 = 2.450',
      steps: [
        '1️⃣ Alinea los números por unidades (U), decenas (D), centenas (C) y unidades de mil (UM).',
        '2️⃣ Suma columna por columna de derecha a izquierda. Si una columna suma 10 o más, lleva una decena a la siguiente columna.',
        '3️⃣ Ejemplo visual: 245 + 132 → Unidades: 5 + 2 = 7 | Decenas: 4 + 3 = 7 | Centenas: 2 + 1 = 3 → Total = 377.'
      ],
      exampleVisual: '245 + 132 = 377'
    },
    questions: [
      {
        id: 'q1_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: '¡Muy bien! Las sumas nos ayudan a juntar cantidades.',
        prompt: '245 + 132 = ?',
        visual: '245 + 132 = ?',
        options: ['367', '377', '357', '387'],
        correctAnswer: '377',
        hint: 'Suma unidades (5+2=7), decenas (4+3=7) y centenas (2+1=3).',
        explanation: '¡Excelente! 245 + 132 es igual a 377.'
      },
      {
        id: 'q1_2',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Actividad B: Completa la operación escribiendo o eligiendo el sumando faltante.',
        prompt: '125 + ___ = 200',
        visual: '125 + [ ? ] = 200',
        inputPlaceholder: 'Escribe el número...',
        options: ['75', '65', '85', '25'],
        correctAnswer: '75',
        hint: '¿Cuánto le falta a 125 para llegar a 200? Calcula 200 - 125.',
        explanation: '¡Correcto! 125 + 75 = 200.'
      },
      {
        id: 'q1_3',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad C: Resuelve el problema cotidiano de Ari.',
        prompt: 'Ari tiene 125 estrellas y consigue 75 adicionales. ¿Cuántas estrellas tiene ahora?',
        visual: '⭐ 125 + 75 = ?',
        options: ['190', '200', '210', '185'],
        correctAnswer: '200',
        hint: 'Suma 5 + 5 = 10 (llevas 1 decena), 2 + 7 + 1 = 10 y 1 + 1 = 2.',
        explanation: '¡Genial! 125 estrellas + 75 estrellas = 200 estrellas en total.'
      },
      {
        id: 'q1_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Actividad D: Arrastra o toca la ficha con el resultado correcto para completar la suma.',
        prompt: '315 + 142 = ___',
        visual: '315 + 142 = [ ___ ]',
        options: ['447', '457', '467', '437'],
        correctAnswer: '457',
        hint: 'Suma 5+2=7 en las unidades, 1+4=5 en las decenas y 3+1=4 en las centenas.',
        explanation: '¡Muy bien! Al colocar la ficha 457 completamos 315 + 142 = 457.'
      },
      {
        id: 'q1_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: '¡Última suma de la unidad! Verifica los sumandos con cuidado.',
        prompt: '512 + 326 = ?',
        visual: '512 + 326 = ?',
        options: ['828', '838', '848', '738'],
        correctAnswer: '838',
        hint: '2+6=8, 1+2=3 y 5+3=8.',
        explanation: '¡Perfecto! 512 + 326 = 838.'
      },
{
            "id": "q1_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Completa la suma escribiendo o seleccionando el número que falta.",
            "prompt": "340 + ___ = 500",
            "visual": "340 + [ ? ] = 500",
            "inputPlaceholder": "Escribe el número...",
            "options": [
                  "140",
                  "160",
                  "150",
                  "170"
            ],
            "correctAnswer": "160",
            "hint": "Para encontrar el sumando faltante, calcula 500 - 340.",
            "explanation": "¡Excelente! 340 + 160 = 500."
      },
      {
            "id": "q1_7",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Coloca la ficha con la suma correcta.",
            "prompt": "425 + 234 = ___",
            "visual": "425 + 234 = [ ___ ]",
            "options": [
                  "649",
                  "659",
                  "669",
                  "639"
            ],
            "correctAnswer": "659",
            "hint": "Suma unidades 5+4=9, decenas 2+3=5 y centenas 4+2=6.",
            "explanation": "¡Muy bien! 425 + 234 = 659."
      },
      {
            "id": "q1_8",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Lee la situación con atención y halla el total.",
            "prompt": "Sofía tiene 140 canicas y su hermano le regala 85 más. ¿Cuántas canicas tiene en total?",
            "visual": "⚪ 140 + 85 = ?",
            "options": [
                  "215",
                  "225",
                  "235",
                  "205"
            ],
            "correctAnswer": "225",
            "hint": "Suma 140 + 85 = 225.",
            "explanation": "¡Correcto! 140 + 85 = 225 canicas."
      },
      {
            "id": "q1_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Suma centenas y decenas completas.",
            "prompt": "180 + 220 = ?",
            "visual": "180 + 220 = ?",
            "options": [
                  "390",
                  "400",
                  "410",
                  "420"
            ],
            "correctAnswer": "400",
            "hint": "80 + 20 suman 100. Luego 100 + 200 + 100 = 400.",
            "explanation": "¡Brillante! 180 + 220 = 400."
      },
      {
            "id": "q1_10",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Resuelve la suma de tres cifras.",
            "prompt": "312 + 165 = ___",
            "visual": "312 + 165 = [ ___ ]",
            "options": [
                  "467",
                  "477",
                  "487",
                  "457"
            ],
            "correctAnswer": "477",
            "hint": "2+5=7, 1+6=7 y 3+1=4.",
            "explanation": "¡Perfecto! 312 + 165 = 477."
      }
    ],
    questionsGrade4: [
      {
        id: 'q1_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: '¡Muy bien! En 4° grado sumamos cantidades de cuatro cifras.',
        prompt: '1.345 + 2.432 = ?',
        visual: '1.345 + 2.432 = ?',
        options: ['3.677', '3.777', '3.877', '3.577'],
        correctAnswer: '3.777',
        hint: 'Suma unidades (5+2=7), decenas (4+3=7), centenas (3+4=7) y unidades de mil (1+2=3).',
        explanation: '¡Excelente! 1.345 + 2.432 es igual a 3.777.'
      },
      {
        id: 'q1_4g_2',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Cálculo mental en 4° grado: completa el sumando que falta.',
        prompt: '1.250 + ___ = 2.000',
        visual: '1.250 + [ ? ] = 2.000',
        inputPlaceholder: 'Escribe el número...',
        options: ['750', '650', '850', '550'],
        correctAnswer: '750',
        hint: 'A 1.250 súmale 750 para completar las 2 unidades de mil (2.000).',
        explanation: '¡Correcto! 1.250 + 750 = 2.000.'
      },
      {
        id: 'q1_4g_3',
        type: 'math',
        interactionType: 'true_false',
        ariTip: 'Propiedad conmutativa de la suma en 4° grado.',
        prompt: '¿Es verdadero o falso que 1.450 + 2.300 da el mismo resultado que 2.300 + 1.450?',
        visual: '1.450 + 2.300 = 2.300 + 1.450',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Recuerda la propiedad conmutativa: el orden de los sumandos no altera el total.',
        explanation: '¡Exacto! Por la propiedad conmutativa, ambas sumas dan 3.750.'
      },
      {
        id: 'q1_4g_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Arrastra o selecciona el total de esta suma de cuatro cifras.',
        prompt: '2.340 + 1.520 = ___',
        visual: '2.340 + 1.520 = [ ___ ]',
        options: ['3.760', '3.860', '3.960', '3.660'],
        correctAnswer: '3.860',
        hint: 'Suma 340 + 520 = 860 y 2.000 + 1.000 = 3.000.',
        explanation: '¡Genial! 2.340 + 1.520 = 3.860.'
      },
      {
        id: 'q1_4g_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Problema de varios pasos para 4° grado.',
        prompt: 'Una biblioteca tenía 1.200 libros, recibió 450 el lunes y 350 el martes. ¿Cuántos libros tiene en total?',
        visual: '📚 1.200 + 450 + 350 = ?',
        options: ['1.900', '2.000', '2.100', '1.850'],
        correctAnswer: '2.000',
        hint: 'Agrupa primero 450 + 350 = 800, y luego suma 1.200 + 800.',
        explanation: '¡Perfecto! 450 + 350 = 800, y 1.200 + 800 = 2.000 libros.'
      },
{
            "id": "q1_4g_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Completa la suma de cuatro cifras.",
            "prompt": "4.200 + ___ = 7.500",
            "visual": "4.200 + [ ? ] = 7.500",
            "inputPlaceholder": "Escribe la cifra...",
            "options": [
                  "3.200",
                  "3.300",
                  "3.400",
                  "3.100"
            ],
            "correctAnswer": "3.300",
            "hint": "Resta 7.500 - 4.200 para hallar el número faltante.",
            "explanation": "¡Genial! 4.200 + 3.300 = 7.500."
      },
      {
            "id": "q1_4g_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Resuelve el problema de la biblioteca escolar.",
            "prompt": "En una biblioteca hay 2.450 libros infantiles y 3.820 de ciencias. ¿Cuántos libros hay en total?",
            "visual": "📖 2.450 + 3.820 = ?",
            "options": [
                  "6.170",
                  "6.270",
                  "6.370",
                  "6.070"
            ],
            "correctAnswer": "6.270",
            "hint": "Suma 2.450 + 3.820 = 6.270.",
            "explanation": "¡Excelente! En total hay 6.270 libros."
      },
      {
            "id": "q1_4g_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Coloca la ficha con la suma correcta de cuatro cifras.",
            "prompt": "6.350 + 2.430 = ___",
            "visual": "6.350 + 2.430 = [ ___ ]",
            "options": [
                  "8.680",
                  "8.780",
                  "8.880",
                  "8.580"
            ],
            "correctAnswer": "8.780",
            "hint": "Suma 6.000+2.000=8.000, 300+400=700 y 50+30=80.",
            "explanation": "¡Muy bien! 6.350 + 2.430 = 8.780."
      },
      {
            "id": "q1_4g_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Identifica la propiedad fundamental de la adición.",
            "prompt": "¿Qué propiedad de la suma indica que 2.500 + 1.800 = 1.800 + 2.500?",
            "visual": "2.500 + 1.800 = 1.800 + 2.500",
            "options": [
                  "Propiedad conmutativa",
                  "Propiedad asociativa",
                  "Propiedad distributiva",
                  "Elemento neutro"
            ],
            "correctAnswer": "Propiedad conmutativa",
            "hint": "El orden de los sumandos no altera la suma total.",
            "explanation": "¡Exacto! La propiedad conmutativa establece que el orden de los sumandos no cambia el resultado."
      },
      {
            "id": "q1_4g_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Suma con reagrupación en las decenas.",
            "prompt": "5.640 + 3.190 = ?",
            "visual": "5.640 + 3.190 = ?",
            "options": [
                  "8.730",
                  "8.830",
                  "8.930",
                  "8.630"
            ],
            "correctAnswer": "8.830",
            "hint": "40 + 90 = 130 (llevas 1 centena), 6 + 1 + 1 = 8 y 5 + 3 = 8.",
            "explanation": "¡Fantástico! 5.640 + 3.190 = 8.830."
      }
    ]
  },

  {
    id: 2,
    unitNumber: 2,
    subject: 'matematicas',
    unitLabel: 'Matemáticas - Unidad 2: Restas',
    title: 'Unidad 2: Restas',
    subtitle: 'Matemáticas • Minuendo, sustraendo y diferencia',
    category: 'matematicas',
    icon: '➖',
    badgeColor: '#16a34a',
    requiredLevel: 1,
    minPassPercent: 70,
    starsReward: 20,
    description: 'Desarrolla la capacidad de resolver restas y comprender la diferencia entre cantidades.',
    lesson: {
      title: 'Aprendo con Ari: La Resta y sus Términos',
      summary3:
        'Restar es quitar una cantidad de otra o encontrar la diferencia entre dos números. El número mayor del que quitamos se llama MINUENDO, la cantidad que quitamos se llama SUSTRAENDO y el resultado es la DIFERENCIA.',
      summary4:
        'En 4° grado resolvemos restas con ceros intermedios desagrupando centenas y unidades de mil, y comprobamos la resta usando su operación inversa: DIFERENCIA + SUSTRAENDO = MINUENDO.',
      steps3: [
        '1️⃣ Coloca el minuendo arriba y el sustraendo debajo alineando unidades, decenas y centenas.',
        '2️⃣ Si la cifra de arriba es menor que la de abajo, pide prestada 1 decena a la columna de la izquierda.',
        '3️⃣ Ejemplo de Ari: 350 caramelos - 125 caramelos = 225 caramelos.'
      ],
      steps4: [
        '1️⃣ Desagrupación con ceros intermedios: 2.000 - 650 = 1.350 pidiendo prestado a la unidad de mil.',
        '2️⃣ Comprobación inversa: Suma la DIFERENCIA más el SUSTRAENDO para verificar el MINUENDO (1.350 + 650 = 2.000).',
        '3️⃣ Problemas de dos pasos: 3.450 cuadernos producidos menos 1.225 repartidos = 2.225 en bodega.'
      ],
      exampleVisual3: '350 - 125 = 225',
      exampleVisual4: '4.500 - 1.250 = 3.250  |  Comprobación: 3.250 + 1.250 = 4.500',
      steps: [
        '1️⃣ Coloca el minuendo arriba y el sustraendo debajo alineando unidades, decenas y centenas.',
        '2️⃣ Si la cifra de arriba es menor que la de abajo, pide prestada 1 decena a la columna de la izquierda.',
        '3️⃣ Ejemplo de Ari: 350 caramelos - 125 caramelos = 225 caramelos.'
      ],
      exampleVisual: '350 - 125 = 225'
    },
    questions: [
      {
        id: 'q2_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Restar nos permite saber cuántos elementos quedan.',
        prompt: '485 - 132 = ?',
        visual: '485 - 132 = ?',
        options: ['343', '353', '363', '333'],
        correctAnswer: '353',
        hint: 'Resta unidades (5-2=3), decenas (8-3=5) y centenas (4-1=3).',
        explanation: '¡Exacto! 485 - 132 = 353.'
      },
      {
        id: 'q2_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Resuelve la situación cotidiana de los caramelos de Ari.',
        prompt: 'Ari tenía 350 caramelos y regaló 125. ¿Cuántos caramelos le quedan?',
        visual: '🍬 350 - 125 = ?',
        options: ['215', '225', '235', '245'],
        correctAnswer: '225',
        hint: '50 menos 25 es 25, y 300 menos 100 es 200.',
        explanation: '¡Muy bien! 350 - 125 = 225 caramelos.'
      },
      {
        id: 'q2_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Completa el número faltante (sustraendo) en la resta.',
        prompt: '596 - ___ = 355',
        visual: '596 - [ ? ] = 355',
        inputPlaceholder: 'Escribe el número...',
        options: ['231', '241', '251', '141'],
        correctAnswer: '241',
        hint: 'Resta 596 - 355: 6-5=1, 9-5=4 y 5-3=2.',
        explanation: '¡Correcto! 596 - 241 = 355.'
      },
      {
        id: 'q2_4',
        type: 'math',
        interactionType: 'true_false',
        ariTip: 'Identifica si esta operación tiene o no un error.',
        prompt: 'Observa la operación: 850 - 320 = 530. ¿El resultado es correcto (Verdadero) o tiene un error (Falso)?',
        visual: '850 - 320 = 530',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Comprueba sumando 530 + 320: ¿da 850?',
        explanation: '¡Genial! Es Verdadero porque 850 - 320 = 530.'
      },
      {
        id: 'q2_5',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Arrastra o selecciona la diferencia correcta.',
        prompt: '768 - 415 = ___',
        visual: '768 - 415 = [ ___ ]',
        options: ['343', '353', '363', '253'],
        correctAnswer: '353',
        hint: '8-5=3, 6-1=5 y 7-4=3.',
        explanation: '¡Increíble! 768 - 415 = 353.'
      },
{
            "id": "q2_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Completa la resta escribiendo el sustraendo que falta.",
            "prompt": "300 - ___ = 140",
            "visual": "300 - [ ? ] = 140",
            "inputPlaceholder": "Escribe el número...",
            "options": [
                  "150",
                  "160",
                  "170",
                  "140"
            ],
            "correctAnswer": "160",
            "hint": "Calcula 300 - 140 = 160.",
            "explanation": "¡Correcto! 300 - 160 = 140."
      },
      {
            "id": "q2_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Resta las cantidades del huerto escolar.",
            "prompt": "En un árbol había 180 manzanas y los recolectores bajaron 65. ¿Cuántas manzanas quedaron?",
            "visual": "🍎 180 - 65 = ?",
            "options": [
                  "105",
                  "115",
                  "125",
                  "135"
            ],
            "correctAnswer": "115",
            "hint": "180 - 60 = 120, menos 5 = 115.",
            "explanation": "¡Muy bien! Quedaron 115 manzanas en el árbol."
      },
      {
            "id": "q2_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Arrastra la ficha con la diferencia correcta.",
            "prompt": "450 - 120 = ___",
            "visual": "450 - 120 = [ ___ ]",
            "options": [
                  "320",
                  "330",
                  "340",
                  "310"
            ],
            "correctAnswer": "330",
            "hint": "Resta centenas (4-1=3) y decenas (5-2=3).",
            "explanation": "¡Excelente! 450 - 120 = 330."
      },
      {
            "id": "q2_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Resta con reagrupación en las decenas.",
            "prompt": "520 - 250 = ?",
            "visual": "520 - 250 = ?",
            "options": [
                  "260",
                  "270",
                  "280",
                  "250"
            ],
            "correctAnswer": "270",
            "hint": "52 decenas menos 25 decenas = 27 decenas (270).",
            "explanation": "¡Genial! 520 - 250 = 270."
      },
      {
            "id": "q2_10",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Resuelve la resta de tres cifras.",
            "prompt": "385 - 142 = ___",
            "visual": "385 - 142 = [ ___ ]",
            "options": [
                  "233",
                  "243",
                  "253",
                  "223"
            ],
            "correctAnswer": "243",
            "hint": "5-2=3, 8-4=4 y 3-1=2.",
            "explanation": "¡Perfecto! 385 - 142 = 243."
      }
    ],
    questionsGrade4: [
      {
        id: 'q2_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'En 4° grado practicamos restas con ceros intermedios.',
        prompt: '2.000 - 650 = ?',
        visual: '2.000 - 650 = ?',
        options: ['1.250', '1.350', '1.450', '1.150'],
        correctAnswer: '1.350',
        hint: 'Piensa cuánto le falta a 650 para llegar a 2.000 (650 + 350 = 1.000; más 1.000 = 1.350).',
        explanation: '¡Exacto! 2.000 - 650 = 1.350.'
      },
      {
        id: 'q2_4g_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Problema de resta con números de cuatro cifras en 4° grado.',
        prompt: 'Una fábrica produjo 3.450 cuadernos y distribuyó 1.225 a las escuelas. ¿Cuántos cuadernos quedaron en bodega?',
        visual: '📓 3.450 - 1.225 = ?',
        options: ['2.125', '2.225', '2.325', '2.215'],
        correctAnswer: '2.225',
        hint: '50 menos 25 es 25, y 3.400 menos 1.200 es 2.200.',
        explanation: '¡Muy bien! 3.450 - 1.225 = 2.225 cuadernos.'
      },
      {
        id: 'q2_4g_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Usa la relación entre suma y resta para hallar el sustraendo.',
        prompt: '4.500 - ___ = 3.100',
        visual: '4.500 - [ ? ] = 3.100',
        inputPlaceholder: 'Escribe el número...',
        options: ['1300', '1400', '1500', '1200'],
        correctAnswer: '1400',
        hint: 'Resta 4.500 menos 3.100.',
        explanation: '¡Correcto! 4.500 - 1.400 = 3.100.'
      },
      {
        id: 'q2_4g_4',
        type: 'math',
        interactionType: 'true_false',
        ariTip: 'Detecta errores en operaciones.',
        prompt: 'Si en una resta el minuendo es 1.000 y el sustraendo es 450, ¿es Verdadero o Falso que la diferencia es 550?',
        visual: '1.000 - 450 = 550',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Suma 550 + 450 para comprobar si obtienes el minuendo (1.000).',
        explanation: '¡Así es! 550 + 450 = 1.000, por lo tanto es Verdadero.'
      },
      {
        id: 'q2_4g_5',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Problema de varios pasos para 4° grado.',
        prompt: 'Un teatro tiene 1.500 asientos. Se vendieron 800 entradas ayer y 350 hoy. ¿Cuántos asientos quedan libres?',
        visual: '1.500 - (800 + 350) = [ ___ ]',
        options: ['250', '350', '450', '300'],
        correctAnswer: '350',
        hint: '800 + 350 = 1.150 entradas vendidas. Ahora calcula 1.500 - 1.150.',
        explanation: '¡Excelente! Quedan 350 asientos disponibles.'
      },
{
            "id": "q2_4g_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Halla la cantidad que se restó de ocho mil.",
            "prompt": "8.000 - ___ = 4.350",
            "visual": "8.000 - [ ? ] = 4.350",
            "inputPlaceholder": "Escribe el número...",
            "options": [
                  "3.550",
                  "3.650",
                  "3.750",
                  "3.450"
            ],
            "correctAnswer": "3.650",
            "hint": "8.000 - 4.350 = 3.650.",
            "explanation": "¡Exacto! 8.000 - 3.650 = 4.350."
      },
      {
            "id": "q2_4g_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula la carga restante del camión.",
            "prompt": "Un camión transportaba 6.400 kg de frutas y descargó 2.850 kg en el mercado. ¿Cuántos kilogramos le quedan?",
            "visual": "🚛 6.400 kg - 2.850 kg = ?",
            "options": [
                  "3.450 kg",
                  "3.550 kg",
                  "3.650 kg",
                  "3.350 kg"
            ],
            "correctAnswer": "3.550 kg",
            "hint": "6.400 - 2.850 = 3.550.",
            "explanation": "¡Muy bien! Le quedan 3.550 kg de fruta."
      },
      {
            "id": "q2_4g_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Resta cuatro cifras desagrupando en las decenas.",
            "prompt": "7.520 - 3.190 = ___",
            "visual": "7.520 - 3.190 = [ ___ ]",
            "options": [
                  "4.230",
                  "4.330",
                  "4.430",
                  "4.130"
            ],
            "correctAnswer": "4.330",
            "hint": "12 decenas - 9 decenas = 3 decenas. 4 centenas - 1 centena = 3. 7 mil - 3 mil = 4 mil.",
            "explanation": "¡Brillante! 7.520 - 3.190 = 4.330."
      },
      {
            "id": "q2_4g_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Comprueba una sustracción mediante su operación inversa.",
            "prompt": "¿Cómo se comprueba que 5.400 - 2.150 = 3.250 es correcto?",
            "visual": "5.400 - 2.150 = 3.250",
            "options": [
                  "Sumando 3.250 + 2.150 = 5.400",
                  "Restando 3.250 - 2.150 = 1.100",
                  "Multiplicando 3.250 x 2",
                  "Dividiendo 5.400 entre 2"
            ],
            "correctAnswer": "Sumando 3.250 + 2.150 = 5.400",
            "hint": "Diferencia + Sustraendo = Minuendo.",
            "explanation": "¡Excelente! Sumando la diferencia con el sustraendo se comprueba que la resta es correcta."
      },
      {
            "id": "q2_4g_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Resta cifras con reagrupación en centenas y millares.",
            "prompt": "9.600 - 4.750 = ?",
            "visual": "9.600 - 4.750 = ?",
            "options": [
                  "4.750",
                  "4.850",
                  "4.950",
                  "4.650"
            ],
            "correctAnswer": "4.850",
            "hint": "9.600 - 4.750 = 4.850.",
            "explanation": "¡Fantástico! 9.600 - 4.750 = 4.850."
      }
    ]
  },

  {
    id: 3,
    unitNumber: 3,
    subject: 'matematicas',
    unitLabel: 'Matemáticas - Unidad 3: Multiplicaciones',
    title: 'Unidad 3: Multiplicaciones',
    subtitle: 'Matemáticas • Suma repetida, grupos iguales y tablas',
    category: 'matematicas',
    icon: '✖️',
    badgeColor: '#15803d',
    requiredLevel: 2,
    minPassPercent: 70,
    starsReward: 25,
    hasOptionalTimer: true,
    description: 'Comprende la multiplicación como suma repetida y domina las tablas de multiplicar con Ari.',
    lesson: {
      title: 'Aprendo con Ari: Multiplicar es Sumar Grupos Iguales',
      summary3:
        'Multiplicar es una forma rápida de sumar el mismo número varias veces. Por ejemplo, 4 grupos con 3 elementos cada uno es 3 + 3 + 3 + 3 = 12, que se escribe 4 × 3 = 12.',
      summary4:
        'En 4° grado dominamos las tablas del 1 al 12, multiplicamos números de dos y tres cifras y aplicamos la propiedad distributiva (por ejemplo: 15 × 6 = (10 × 6) + (5 × 6) = 60 + 30 = 90).',
      steps3: [
        '1️⃣ Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.',
        '2️⃣ Observa los grupos iguales: 4 cajas con 3 estrellas = 4 × 3 = 12 estrellas.',
        '3️⃣ Puedes activar el reloj opcional si quieres practicar tu agilidad mental sin ninguna penalización.'
      ],
      steps4: [
        '1️⃣ Propiedad Distributiva: Multiplicar 14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = 84.',
        '2️⃣ Tablas extendidas hasta el 12: Domina 12 × 9 = 108 y 125 × 4 = 500.',
        '3️⃣ Multiplicación por dos cifras: 15 × 12 = 180 y situaciones escolares (8 salones × 25 pupitres = 200).'
      ],
      exampleVisual3: '4 grupos × 3 = 12  |  7 × 8 = 56',
      exampleVisual4: '14 × 6 = (10×6) + (4×6) = 84  |  12 × 9 = 108  |  15 × 12 = 180',
      steps: [
        '1️⃣ Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.',
        '2️⃣ Observa los grupos iguales: 4 cajas con 3 estrellas = 4 × 3 = 12 estrellas.',
        '3️⃣ Puedes activar el reloj opcional si quieres practicar tu agilidad mental sin ninguna penalización.'
      ],
      exampleVisual: '4 grupos × 3 = 12  |  7 × 8 = 56'
    },
    questions: [
      {
        id: 'q3_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Encuentra el resultado en la tabla del 7 y del 8.',
        prompt: '7 × 8 = ?',
        visual: '7 × 8 = ?',
        options: ['54', '56', '48', '64'],
        correctAnswer: '56',
        hint: '7 × 7 es 49; súmale 7 más: 49 + 7 = 56.',
        explanation: '¡Excelente! 7 multiplicado por 8 es 56.'
      },
      {
        id: 'q3_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad B: Representación visual de grupos iguales.',
        prompt: 'Observa 4 grupos con 3 estrellas cada uno: (⭐⭐⭐) (⭐⭐⭐) (⭐⭐⭐) (⭐⭐⭐). ¿Cuántos elementos hay en total?',
        visual: '4 grupos × 3 ⭐ = ?',
        options: ['10', '12', '14', '9'],
        correctAnswer: '12',
        hint: 'Suma 3 + 3 + 3 + 3 o multiplica 4 × 3.',
        explanation: '¡Correcto! 4 grupos de 3 elementos suman 12 elementos en total.'
      },
      {
        id: 'q3_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Actividad C: Completa la tabla de multiplicar incompleta.',
        prompt: '6 × ___ = 42',
        visual: '6 × [ ? ] = 42',
        inputPlaceholder: 'Factor faltante...',
        options: ['6', '7', '8', '9'],
        correctAnswer: '7',
        hint: 'Recuerda la tabla del 6: 6×5=30, 6×6=36, 6×7=42.',
        explanation: '¡Así es! 6 × 7 = 42.'
      },
      {
        id: 'q3_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Multiplica dos cifras por una cifra y arrastra el producto.',
        prompt: '12 × 4 = ___',
        visual: '12 × 4 = [ ___ ]',
        options: ['44', '48', '36', '52'],
        correctAnswer: '48',
        hint: 'Multiplica 4 × 2 = 8 en las unidades y 4 × 1 = 4 en las decenas.',
        explanation: '¡Muy bien! 12 × 4 = 48.'
      },
      {
        id: 'q3_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad D: Desafío final de multiplicación.',
        prompt: '25 × 3 = ?',
        visual: '25 × 3 = ?',
        options: ['65', '75', '85', '70'],
        correctAnswer: '75',
        hint: '25 + 25 son 50, más 25 son 75.',
        explanation: '¡Fantástico! 25 × 3 = 75.'
      },
{
            "id": "q3_6",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula con la tabla del 6 y del 7.",
            "prompt": "6 x 7 = ?",
            "visual": "6 x 7 = ?",
            "options": [
                  "36",
                  "42",
                  "48",
                  "40"
            ],
            "correctAnswer": "42",
            "hint": "6 veces 7 es igual a 42.",
            "explanation": "¡Correcto! 6 x 7 = 42."
      },
      {
            "id": "q3_7",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Encuentra el factor faltante en la tabla del 8.",
            "prompt": "8 x ___ = 32",
            "visual": "8 x [ ? ] = 32",
            "inputPlaceholder": "Escribe el factor...",
            "options": [
                  "3",
                  "4",
                  "5",
                  "6"
            ],
            "correctAnswer": "4",
            "hint": "Divide 32 entre 8 = 4.",
            "explanation": "¡Muy bien! 8 x 4 = 32."
      },
      {
            "id": "q3_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Coloca el producto en la tabla del 9.",
            "prompt": "9 x 4 = ___",
            "visual": "9 x 4 = [ ___ ]",
            "options": [
                  "32",
                  "36",
                  "40",
                  "45"
            ],
            "correctAnswer": "36",
            "hint": "9 x 4 = 36.",
            "explanation": "¡Excelente! 9 x 4 = 36."
      },
      {
            "id": "q3_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Multiplica la cantidad de corrales por las aves.",
            "prompt": "En una granja hay 5 corrales con 8 gallinas en cada uno. ¿Cuántas gallinas hay en total?",
            "visual": "🐔 5 corrales x 8 gallinas = ?",
            "options": [
                  "35 gallinas",
                  "40 gallinas",
                  "45 gallinas",
                  "48 gallinas"
            ],
            "correctAnswer": "40 gallinas",
            "hint": "5 x 8 = 40.",
            "explanation": "¡Genial! 5 x 8 = 40 gallinas."
      },
      {
            "id": "q3_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula el cuadrado del número 7.",
            "prompt": "7 x 7 = ?",
            "visual": "7 x 7 = ?",
            "options": [
                  "42",
                  "49",
                  "56",
                  "48"
            ],
            "correctAnswer": "49",
            "hint": "7 veces 7 es igual a 49.",
            "explanation": "¡Perfecto! 7 x 7 = 49."
      }
    ],
    questionsGrade4: [
      {
        id: 'q3_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Multiplicación aplicando la propiedad distributiva en 4° grado.',
        prompt: '14 × 6 = ?',
        visual: '14 × 6 = ?',
        options: ['74', '84', '64', '94'],
        correctAnswer: '84',
        hint: 'Multiplica 10 × 6 = 60 y 4 × 6 = 24. Luego suma 60 + 24.',
        explanation: '¡Excelente! 14 × 6 = 84.'
      },
      {
        id: 'q3_4g_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Tablas del 1 al 12 para 4° grado.',
        prompt: '12 × 9 = ?',
        visual: '12 × 9 = ?',
        options: ['98', '108', '118', '96'],
        correctAnswer: '108',
        hint: '10 × 9 = 90 y 2 × 9 = 18. Suma 90 + 18.',
        explanation: '¡Correcto! 12 × 9 = 108.'
      },
      {
        id: 'q3_4g_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Multiplicación de tres cifras por una cifra.',
        prompt: '125 × 4 = ___',
        visual: '125 × 4 = [ ? ]',
        inputPlaceholder: 'Escribe el producto...',
        options: ['400', '500', '600', '450'],
        correctAnswer: '500',
        hint: '100 × 4 = 400 y 25 × 4 = 100. Suma 400 + 100.',
        explanation: '¡Muy bien! 125 × 4 = 500.'
      },
      {
        id: 'q3_4g_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Multiplicación por dos cifras en 4° grado.',
        prompt: '15 × 12 = ___',
        visual: '15 × 12 = [ ___ ]',
        options: ['160', '180', '170', '190'],
        correctAnswer: '180',
        hint: '15 × 10 = 150 y 15 × 2 = 30. Suma 150 + 30.',
        explanation: '¡Genial! 15 × 12 = 180.'
      },
      {
        id: 'q3_4g_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Problema cotidiano con multiplicación.',
        prompt: 'En un colegio hay 8 salones y en cada salón hay 25 pupitres. ¿Cuántos pupitres hay en total?',
        visual: '🏫 8 × 25 = ?',
        options: ['180', '200', '220', '160'],
        correctAnswer: '200',
        hint: '4 × 25 = 100, así que 8 × 25 es el doble de 100.',
        explanation: '¡Brillante! 8 × 25 = 200 pupitres.'
      },
{
            "id": "q3_4g_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Multiplica por una decena completa.",
            "prompt": "45 x 20 = ___",
            "visual": "45 x 20 = [ ? ]",
            "inputPlaceholder": "Escribe el producto...",
            "options": [
                  "800",
                  "900",
                  "950",
                  "850"
            ],
            "correctAnswer": "900",
            "hint": "45 x 2 = 90, agrega el 0 al final = 900.",
            "explanation": "¡Exacto! 45 x 20 = 900."
      },
      {
            "id": "q3_4g_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Multiplica dos cifras por dos cifras.",
            "prompt": "Una caja contiene 25 paquetes con 16 marcadores cada uno. ¿Cuántos marcadores hay en total?",
            "visual": "📦 25 paquetes x 16 marcadores = ?",
            "options": [
                  "350 marcadores",
                  "400 marcadores",
                  "420 marcadores",
                  "450 marcadores"
            ],
            "correctAnswer": "400 marcadores",
            "hint": "25 x 16 = 400.",
            "explanation": "¡Muy bien! Hay 400 marcadores en total."
      },
      {
            "id": "q3_4g_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Descompón 18 x 12 para hallar el producto.",
            "prompt": "18 x 12 = ___",
            "visual": "18 x 12 = [ ___ ]",
            "options": [
                  "206",
                  "216",
                  "226",
                  "196"
            ],
            "correctAnswer": "216",
            "hint": "18 x 10 = 180, 18 x 2 = 36. 180 + 36 = 216.",
            "explanation": "¡Brillante! 18 x 12 = 216."
      },
      {
            "id": "q3_4g_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Aplica la propiedad distributiva de la multiplicación.",
            "prompt": "Aplica la propiedad distributiva: 14 x (10 + 2) = ?",
            "visual": "14 x (10 + 2) = (14 x 10) + (14 x 2)",
            "options": [
                  "140 + 28 = 168",
                  "140 + 2 = 142",
                  "14 + 20 = 34",
                  "140 x 2 = 280"
            ],
            "correctAnswer": "140 + 28 = 168",
            "hint": "Multiplica 14 x 10 y luego 14 x 2, después suma los resultados.",
            "explanation": "¡Excelente! 14 x 10 = 140 y 14 x 2 = 28; 140 + 28 = 168."
      },
      {
            "id": "q3_4g_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Multiplica centenas por un solo dígito.",
            "prompt": "125 x 8 = ?",
            "visual": "125 x 8 = ?",
            "options": [
                  "900",
                  "1.000",
                  "1.100",
                  "950"
            ],
            "correctAnswer": "1.000",
            "hint": "125 x 4 = 500, luego el doble de 500 es 1.000.",
            "explanation": "¡Fantástico! 125 x 8 = 1.000."
      }
    ]
  },

  {
    id: 4,
    unitNumber: 4,
    subject: 'matematicas',
    unitLabel: 'Matemáticas - Unidad 4: Divisiones',
    title: 'Unidad 4: Divisiones',
    subtitle: 'Matemáticas • Reparto equitativo, cociente y residuo',
    category: 'matematicas',
    icon: '➗',
    badgeColor: '#0d9488',
    requiredLevel: 3,
    minPassPercent: 70,
    starsReward: 25,
    description: 'Comprende la división como reparto en partes iguales y su relación con la multiplicación.',
    lesson: {
      title: 'Aprendo con Ari: Dividir es Repartir en Partes Iguales',
      summary3:
        'Dividir consiste en repartir una cantidad en grupos iguales. Por ejemplo, si Ari reparte 12 estrellas entre 3 amigos, cada uno recibe 4 estrellas porque 12 ÷ 3 = 4.',
      summary4:
        'En 4° grado identificamos el DIVIDENDO, el DIVISOR, el COCIENTE y el RESIDUO. Cuando una división no es exacta, sobra un residuo menor que el divisor (por ejemplo: 17 ÷ 5 = 3 y sobra 2, porque 5 × 3 + 2 = 17).',
      steps3: [
        '1️⃣ Pregúntate: ¿qué número multiplicado por el divisor se acerca o iguala al dividendo?',
        '2️⃣ División exacta: 48 ÷ 6 = 8 (porque 6 × 8 = 48 y el residuo es 0).',
        '3️⃣ División con residuo: 17 ÷ 5 = 3 y sobra 2 (porque 5 × 3 = 15 y 17 - 15 = 2).'
      ],
      steps4: [
        '1️⃣ División exacta mayor: 96 estudiantes en 8 grupos = 12 por equipo (8 × 12 = 96).',
        '2️⃣ Comprobación y residuo: En 29 ÷ 6 = 4 y sobra 5 (porque 6 × 4 + 5 = 29 y 5 < 6).',
        '3️⃣ Fórmula de comprobación: Dividendo = (Divisor × Cociente) + Residuo.'
      ],
      exampleVisual3: '12 ÷ 3 = 4  |  17 ÷ 5 = 3 (residuo 2)',
      exampleVisual4: '96 ÷ 8 = 12  |  (6 × 7) + 3 = 45  |  144 ÷ 12 = 12',
      steps: [
        '1️⃣ Pregúntate: ¿qué número multiplicado por el divisor se acerca o iguala al dividendo?',
        '2️⃣ División exacta: 48 ÷ 6 = 8 (porque 6 × 8 = 48 y el residuo es 0).',
        '3️⃣ División con residuo: 17 ÷ 5 = 3 y sobra 2 (porque 5 × 3 = 15 y 17 - 15 = 2).'
      ],
      exampleVisual: '12 ÷ 3 = 4  |  17 ÷ 5 = 3 (residuo 2)'
    },
    questions: [
      {
        id: 'q4m_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Reparte los elementos en partes iguales.',
        prompt: 'Ari tiene 12 estrellas y debe repartirlas entre 3 amigos. ¿Cuántas recibe cada uno?',
        visual: '⭐ 12 ÷ 3 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        hint: '¿Qué número multiplicado por 3 da 12?',
        explanation: '¡Exacto! 12 ÷ 3 = 4 estrellas para cada amigo.'
      },
      {
        id: 'q4m_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad B: Selecciona el resultado de la división.',
        prompt: '48 ÷ 6 = ?',
        visual: '48 ÷ 6 = ?',
        options: ['7', '8', '9', '6'],
        correctAnswer: '8',
        hint: 'Recuerda la tabla del 6: 6 × 8 = 48.',
        explanation: '¡Muy bien! 48 dividido entre 6 es 8.'
      },
      {
        id: 'q4m_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Actividad C: Identifica el residuo de la división.',
        prompt: 'En la división 17 ÷ 5 = 3, ¿cuánto sobra (cuál es el residuo)?',
        visual: '17 ÷ 5 = 3 y sobra [ ? ]',
        inputPlaceholder: 'Escribe el residuo...',
        options: ['1', '2', '3', '0'],
        correctAnswer: '2',
        hint: 'Multiplica 5 × 3 = 15. ¿Cuánto falta de 15 para llegar a 17?',
        explanation: '¡Correcto! 5 × 3 = 15, y 17 - 15 = 2. Sobra 2.'
      },
      {
        id: 'q4m_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Actividad D: Resuelve el problema de reparto escolar.',
        prompt: 'Un profesor tiene 36 lápices y quiere repartirlos entre 4 estudiantes. ¿Cuántos recibe cada estudiante?',
        visual: '✏️ 36 ÷ 4 = [ ___ ]',
        options: ['8', '9', '7', '10'],
        correctAnswer: '9',
        hint: 'Busca en la tabla del 4 qué número da 36 (4 × 9 = 36).',
        explanation: '¡Excelente! 36 ÷ 4 = 9 lápices para cada estudiante.'
      },
      {
        id: 'q4m_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Relación entre multiplicación y división.',
        prompt: '72 ÷ 8 = ?',
        visual: '72 ÷ 8 = ?',
        options: ['8', '9', '7', '6'],
        correctAnswer: '9',
        hint: 'Recuerda que 8 × 9 = 72.',
        explanation: '¡Fantástico! 72 ÷ 8 = 9.'
      },
{
            "id": "q4m_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Divide en partes iguales.",
            "prompt": "36 ÷ 4 = ___",
            "visual": "36 ÷ 4 = [ ? ]",
            "inputPlaceholder": "Escribe el cociente...",
            "options": [
                  "7",
                  "8",
                  "9",
                  "6"
            ],
            "correctAnswer": "9",
            "hint": "¿Qué número multiplicado por 4 da 36? 4 x 9 = 36.",
            "explanation": "¡Muy bien! 36 ÷ 4 = 9."
      },
      {
            "id": "q4m_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Reparto equitativo entre estudiantes.",
            "prompt": "Un profesor reparte 45 fichas entre 9 estudiantes en partes iguales. ¿Cuántas fichas recibe cada uno?",
            "visual": "🎲 45 fichas ÷ 9 niños = ?",
            "options": [
                  "4",
                  "5",
                  "6",
                  "7"
            ],
            "correctAnswer": "5",
            "hint": "45 ÷ 9 = 5.",
            "explanation": "¡Correcto! Cada estudiante recibe 5 fichas."
      },
      {
            "id": "q4m_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Coloca el cociente de la división.",
            "prompt": "48 ÷ 6 = ___",
            "visual": "48 ÷ 6 = [ ___ ]",
            "options": [
                  "6",
                  "7",
                  "8",
                  "9"
            ],
            "correctAnswer": "8",
            "hint": "6 x 8 = 48.",
            "explanation": "¡Excelente! 48 ÷ 6 = 8."
      },
      {
            "id": "q4m_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Divide usando la tabla del 7.",
            "prompt": "63 ÷ 7 = ?",
            "visual": "63 ÷ 7 = ?",
            "options": [
                  "7",
                  "8",
                  "9",
                  "10"
            ],
            "correctAnswer": "9",
            "hint": "7 x 9 = 63.",
            "explanation": "¡Genial! 63 ÷ 7 = 9."
      },
      {
            "id": "q4m_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Reparte 32 entre 8.",
            "prompt": "32 ÷ 8 = ?",
            "visual": "32 ÷ 8 = ?",
            "options": [
                  "3",
                  "4",
                  "5",
                  "6"
            ],
            "correctAnswer": "4",
            "hint": "8 x 4 = 32.",
            "explanation": "¡Perfecto! 32 ÷ 8 = 4."
      }
    ],
    questionsGrade4: [
      {
        id: 'q4m_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Reparto equitativo con cantidades mayores en 4° grado.',
        prompt: 'En un campamento de ciencias hay 96 estudiantes organizados en 8 equipos iguales. ¿Cuántos estudiantes hay en cada equipo?',
        visual: '⛺ 96 ÷ 8 = ?',
        options: ['11', '12', '13', '14'],
        correctAnswer: '12',
        hint: 'Piensa qué número multiplicado por 8 da 96 (8 × 12 = 96).',
        explanation: '¡Exacto! 96 ÷ 8 = 12 estudiantes por equipo.'
      },
      {
        id: 'q4m_4g_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad B: Selecciona el cociente exacto de tres cifras.',
        prompt: '144 ÷ 12 = ?',
        visual: '144 ÷ 12 = ?',
        options: ['11', '12', '13', '14'],
        correctAnswer: '12',
        hint: 'Recuerda la tabla del 12: 12 × 12 = 144.',
        explanation: '¡Muy bien! 144 ÷ 12 = 12.'
      },
      {
        id: 'q4m_4g_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Actividad C: Identifica el residuo en una división inexacta de 4° grado.',
        prompt: 'En la división 29 ÷ 6 = 4, ¿cuál es el residuo que sobra?',
        visual: '29 ÷ 6 = 4 y sobra [ ? ]',
        inputPlaceholder: 'Escribe el residuo...',
        options: ['3', '4', '5', '2'],
        correctAnswer: '5',
        hint: '6 × 4 = 24, y para llegar a 29 sobran 5.',
        explanation: '¡Correcto! 29 ÷ 6 = 4 y sobra 5.'
      },
      {
        id: 'q4m_4g_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Actividad D: Reparto escolar en 4° grado.',
        prompt: 'La biblioteca escolar repartió 84 libros de cuentos en partes iguales entre 7 salones. ¿Cuántos libros recibió cada salón?',
        visual: '📚 84 ÷ 7 = [ ___ ]',
        options: ['11', '12', '13', '14'],
        correctAnswer: '12',
        hint: '7 × 10 = 70 y 7 × 2 = 14; por tanto, 7 × 12 = 84.',
        explanation: '¡Genial! Cada salón recibió 12 libros.'
      },
      {
        id: 'q4m_4g_5',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Comprobación de una división con residuo.',
        prompt: 'Si en una división el divisor es 6, el cociente es 7 y el residuo es 3, ¿cuál es el dividendo?',
        visual: '(6 × 7) + 3 = ?',
        options: ['42', '45', '48', '39'],
        correctAnswer: '45',
        hint: 'Multiplica divisor por cociente (6 × 7 = 42) y suma el residuo (+ 3).',
        explanation: '¡Brillante! (6 × 7) + 3 = 42 + 3 = 45.'
      },
{
            "id": "q4m_4g_6",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Divide tres cifras entre una cifra.",
            "prompt": "325 ÷ 5 = ___",
            "visual": "325 ÷ 5 = [ ? ]",
            "inputPlaceholder": "Escribe el resultado...",
            "options": [
                  "55",
                  "65",
                  "75",
                  "60"
            ],
            "correctAnswer": "65",
            "hint": "300 ÷ 5 = 60, 25 ÷ 5 = 5. 60 + 5 = 65.",
            "explanation": "¡Exacto! 325 ÷ 5 = 65."
      },
      {
            "id": "q4m_4g_7",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Identifica el cociente y el residuo en la división inexacta.",
            "prompt": "Si dividimos 87 entre 4, ¿cuál es el cociente y el residuo?",
            "visual": "87 ÷ 4 ➔ Cociente: ? | Residuo: ?",
            "options": [
                  "Cociente 21 y residuo 3",
                  "Cociente 22 y residuo 1",
                  "Cociente 20 y residuo 7",
                  "Cociente 21 y residuo 1"
            ],
            "correctAnswer": "Cociente 21 y residuo 3",
            "hint": "4 x 21 = 84, para llegar a 87 sobran 3.",
            "explanation": "¡Muy bien! 4 x 21 + 3 = 87."
      },
      {
            "id": "q4m_4g_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Divide entre dos cifras.",
            "prompt": "450 ÷ 15 = ___",
            "visual": "450 ÷ 15 = [ ___ ]",
            "options": [
                  "25",
                  "30",
                  "35",
                  "20"
            ],
            "correctAnswer": "30",
            "hint": "15 x 3 = 45, por tanto 15 x 30 = 450.",
            "explanation": "¡Brillante! 450 ÷ 15 = 30."
      },
      {
            "id": "q4m_4g_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula cuántos paquetes o cajas se completan.",
            "prompt": "Se desean empacar 720 galletas en cajas de 12 unidades. ¿Cuántas cajas se completan?",
            "visual": "🍪 720 galletas ÷ 12 = ?",
            "options": [
                  "50 cajas",
                  "60 cajas",
                  "70 cajas",
                  "55 cajas"
            ],
            "correctAnswer": "60 cajas",
            "hint": "72 ÷ 12 = 6, agregando el cero obtenemos 60 cajas.",
            "explanation": "¡Excelente! Se completan 60 cajas."
      },
      {
            "id": "q4m_4g_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Comprueba una división con residuo.",
            "prompt": "¿Cuál es la fórmula para comprobar una división?",
            "visual": "D = (d x c) + r",
            "options": [
                  "Dividendo = (Divisor x Cociente) + Residuo",
                  "Dividendo = Divisor + Cociente + Residuo",
                  "Dividendo = Divisor x Residuo",
                  "Dividendo = Cociente ÷ Divisor"
            ],
            "correctAnswer": "Dividendo = (Divisor x Cociente) + Residuo",
            "hint": "Multiplica el divisor por el cociente y suma el residuo.",
            "explanation": "¡Fantástico! Al multiplicar el divisor por el cociente y sumar el residuo obtenemos el dividendo."
      }
    ]
  },

  {
    id: 5,
    unitNumber: 5,
    subject: 'matematicas',
    unitLabel: 'Matemáticas - Unidad 5: Desafío Matemático',
    title: 'Unidad 5: Desafío Matemático',
    subtitle: 'Matemáticas • Problemas integradores de las 4 operaciones',
    category: 'matematicas',
    icon: '🏆',
    badgeColor: '#059669',
    requiredLevel: 4,
    minPassPercent: 70,
    starsReward: 30,
    description: 'Combina sumas, restas, multiplicaciones y divisiones para resolver situaciones escolares y cotidianas.',
    lesson: {
      title: 'Aprendo con Ari: ¿Qué Operación Debo Usar?',
      summary3:
        'Para resolver un problema matemático, primero leemos con atención qué nos preguntan: si juntamos cantidades usamos SUMA (+), si quitamos o comparamos usamos RESTA (-), si repetimos grupos iguales usamos MULTIPLICACIÓN (×) y si repartimos en partes iguales usamos DIVISIÓN (÷).',
      summary4:
        'En 4° grado muchos desafíos combinan dos operaciones seguidas con jerarquía y paréntesis. Identifica los datos, resuelve el primer paso entre paréntesis y usa ese resultado para encontrar la respuesta final.',
      steps3: [
        '1️⃣ Juntar o agregar colecciones ➔ SUMA (+).',
        '2️⃣ Quitar, gastar o hallar cuánto falta ➔ RESTA (-).',
        '3️⃣ Varios grupos con la misma cantidad ➔ MULTIPLICACIÓN (×) | Repartir en partes iguales ➔ DIVISIÓN (÷).'
      ],
      steps4: [
        '1️⃣ Paréntesis y orden: Resuelve primero la operación dentro del paréntesis.',
        '2️⃣ Problema de dos pasos: (6 cajas × 25 libros) + 50 donados = 150 + 50 = 200 libros.',
        '3️⃣ Operaciones combinadas: (140 - 20) ÷ 6 = 120 ÷ 6 = 20 galletas por caja.'
      ],
      exampleVisual3: '➕  ➖  ✖️  ➗',
      exampleVisual4: '(6 × 25) + 50 = 200 libros  |  (140 - 20) ÷ 6 = 20 galletas',
      steps: [
        '1️⃣ Juntar o agregar colecciones ➔ SUMA (+).',
        '2️⃣ Quitar, gastar o hallar cuánto falta ➔ RESTA (-).',
        '3️⃣ Varios grupos con la misma cantidad ➔ MULTIPLICACIÓN (×) | Repartir en partes iguales ➔ DIVISIÓN (÷).'
      ],
      exampleVisual: '➕  ➖  ✖️  ➗'
    },
    questions: [
      {
        id: 'q5m_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Situación 1: Comprar frutas en la tienda escolar.',
        prompt: 'Ana compró 135 manzanas y 165 naranjas para la feria escolar. ¿Cuántas frutas compró en total?',
        visual: '🍎 135 + 🍊 165 = ?',
        options: ['290', '300', '310', '280'],
        correctAnswer: '300',
        hint: 'Para reunir ambas cantidades debes sumar 135 + 165.',
        explanation: '¡Excelente! Usamos una suma: 135 + 165 = 300 frutas.'
      },
      {
        id: 'q5m_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Situación 2: Repartir juguetes en partes iguales.',
        prompt: 'Se quieren repartir 40 juguetes en partes iguales dentro de 5 cajas. ¿Cuántos juguetes van en cada caja?',
        visual: '🧸 40 ÷ 5 = ?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '8',
        hint: 'Repartir en partes iguales es dividir: 40 ÷ 5.',
        explanation: '¡Correcto! 40 ÷ 5 = 8 juguetes por caja.'
      },
      {
        id: 'q5m_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Situación 3: Organizar grupos de animales en la granja.',
        prompt: 'En una granja hay 6 corrales y en cada corral hay 9 ovejas. ¿Cuántas ovejas hay en total?',
        visual: '🐑 6 × 9 = [ ? ]',
        inputPlaceholder: 'Total de ovejas...',
        options: ['45', '54', '63', '48'],
        correctAnswer: '54',
        hint: 'Son 6 grupos iguales de 9 ovejas: multiplica 6 × 9.',
        explanation: '¡Muy bien! 6 × 9 = 54 ovejas en total.'
      },
      {
        id: 'q5m_4',
        type: 'math',
        interactionType: 'ordering',
        ariTip: 'Ordena estos resultados matemáticos de MENOR a MAYOR.',
        prompt: 'Ordena los siguientes números de menor a mayor: 450, 120, 310, 280',
        visual: 'Menor ➔ Mayor',
        itemsToOrder: ['450', '120', '310', '280'],
        options: [
          '120 - 280 - 310 - 450',
          '120 - 310 - 280 - 450',
          '450 - 310 - 280 - 120',
          '280 - 120 - 310 - 450'
        ],
        correctAnswer: '120 - 280 - 310 - 450',
        hint: 'Empieza por el que tiene 1 centena (120) y termina por el de 4 centenas (450).',
        explanation: '¡Perfecto! El orden ascendente es 120 - 280 - 310 - 450.'
      },
      {
        id: 'q5m_5',
        type: 'math',
        interactionType: 'matching',
        ariTip: 'Relaciona cada situación con la operación matemática que la resuelve.',
        prompt: '¿Cuál combinación relaciona correctamente cada situación con su operación?',
        visual: 'Reunir ➔ (+) | Quitar ➔ (-) | Repartir ➔ (÷)',
        pairs: [
          { left: 'Reunir colecciones', right: 'Suma (+)' },
          { left: 'Quitar elementos', right: 'Resta (-)' },
          { left: 'Repartir en partes iguales', right: 'División (÷)' }
        ],
        options: [
          'Reunir: Suma (+) | Quitar: Resta (-) | Repartir: División (÷)',
          'Reunir: Resta (-) | Quitar: Suma (+) | Repartir: Multiplicación (×)',
          'Reunir: División (÷) | Quitar: Suma (+) | Repartir: Resta (-)',
          'Reunir: Multiplicación (×) | Quitar: División (÷) | Repartir: Suma (+)'
        ],
        correctAnswer: 'Reunir: Suma (+) | Quitar: Resta (-) | Repartir: División (÷)',
        hint: 'Reunir es sumar (+), quitar es restar (-) y repartir equitativamente es dividir (÷).',
        explanation: '¡Felicidades! Identificaste perfectamente cuándo usar cada operación.'
      },
{
            "id": "q5m_6",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Resuelve el problema de la compra escolar.",
            "prompt": "Mateo compra 3 libretas a $80 cada una y paga con un billete de $500. ¿Cuánto le sobra?",
            "visual": "💵 $500 - (3 x $80) = ?",
            "options": [
                  "$240",
                  "$260",
                  "$280",
                  "$250"
            ],
            "correctAnswer": "$260",
            "hint": "3 x 80 = 240. 500 - 240 = 260.",
            "explanation": "¡Correcto! 3 x $80 = $240; $500 - $240 = $260."
      },
      {
            "id": "q5m_7",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Calcula los metros totales recorridos.",
            "prompt": "En una carrera se recorren 4 vueltas de 150 metros cada una. ¿Cuántos metros se recorren en total?",
            "visual": "🏃 4 vueltas x 150 m = [ ? ]",
            "inputPlaceholder": "Escribe los metros...",
            "options": [
                  "500 metros",
                  "600 metros",
                  "650 metros",
                  "550 metros"
            ],
            "correctAnswer": "600 metros",
            "hint": "4 x 150 = 600.",
            "explanation": "¡Muy bien! 4 x 150 = 600 metros."
      },
      {
            "id": "q5m_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Suma la producción y resta las ventas.",
            "prompt": "Un panadero horneó 120 panes en la mañana y 80 en la tarde. Si vendió 150, ¿cuántos le quedan? ___",
            "visual": "🥖 (120 + 80) - 150 = [ ___ ]",
            "options": [
                  "40",
                  "50",
                  "60",
                  "70"
            ],
            "correctAnswer": "50",
            "hint": "120 + 80 = 200 panes. 200 - 150 = 50.",
            "explanation": "¡Excelente! Le quedan 50 panes."
      },
      {
            "id": "q5m_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula cuántas sillas faltan para todos los niños.",
            "prompt": "En un salón hay 6 mesas con 4 sillas cada una. Si llegan 30 niños, ¿cuántas sillas faltan?",
            "visual": "🪑 30 niños - (6 x 4 sillas) = ?",
            "options": [
                  "4 sillas",
                  "6 sillas",
                  "8 sillas",
                  "5 sillas"
            ],
            "correctAnswer": "6 sillas",
            "hint": "6 x 4 = 24 sillas. Faltan 30 - 24 = 6 sillas.",
            "explanation": "¡Genial! 6 x 4 = 24; faltan 30 - 24 = 6 sillas."
      },
      {
            "id": "q5m_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Ahorro semanal y gasto.",
            "prompt": "Lucía ahorró $50 cada semana durante 6 semanas. Si gastó $120 en un libro, ¿cuánto dinero le queda?",
            "visual": "💰 (6 x $50) - $120 = ?",
            "options": [
                  "$160",
                  "$180",
                  "$200",
                  "$150"
            ],
            "correctAnswer": "$180",
            "hint": "6 x 50 = 300. 300 - 120 = 180.",
            "explanation": "¡Perfecto! Ahorró $300 y le quedaron $180."
      }
    ],
    questionsGrade4: [
      {
        id: 'q5m_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Desafío 1 (4° grado): Problema combinado de multiplicación y suma.',
        prompt: 'El colegio compró 6 cajas con 25 libros cada una y además recibió una donación de 50 libros. ¿Cuántos libros nuevos hay en total?',
        visual: '📚 (6 × 25) + 50 = ?',
        options: ['180', '200', '220', '190'],
        correctAnswer: '200',
        hint: 'Primero multiplica 6 × 25 = 150 y luego suma los 50 libros donados.',
        explanation: '¡Excelente! 6 × 25 = 150, y 150 + 50 = 200 libros en total.'
      },
      {
        id: 'q5m_4g_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Desafío 2 (4° grado): Resta y división en dos pasos.',
        prompt: 'En una panadería hornearon 140 galletas, apartaron 20 para degustación y empacaron el resto en 6 cajas iguales. ¿Cuántas galletas van en cada caja?',
        visual: '🍪 (140 - 20) ÷ 6 = ?',
        options: ['18', '20', '22', '15'],
        correctAnswer: '20',
        hint: 'Primero resta 140 - 20 = 120 galletas, y luego divide 120 ÷ 6.',
        explanation: '¡Correcto! 140 - 20 = 120, y 120 ÷ 6 = 20 galletas por caja.'
      },
      {
        id: 'q5m_4g_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Desafío 3 (4° grado): Presupuesto escolar.',
        prompt: 'Un club de ciencias tenía 2.500 puntos, ganó 850 en un concurso y canjeó 1.350 por un microscopio. ¿Cuántos puntos le quedan?',
        visual: '🔬 (2.500 + 850) - 1.350 = [ ? ]',
        inputPlaceholder: 'Puntos restantes...',
        options: ['1900', '2000', '2100', '1850'],
        correctAnswer: '2000',
        hint: 'Suma 2.500 + 850 = 3.350, y luego resta 3.350 - 1.350.',
        explanation: '¡Muy bien! 2.500 + 850 = 3.350, y 3.350 - 1.350 = 2.000 puntos.'
      },
      {
        id: 'q5m_4g_4',
        type: 'math',
        interactionType: 'ordering',
        ariTip: 'Ordena estas cantidades de cuatro cifras de MENOR a MAYOR.',
        prompt: 'Ordena los puntajes del torneo matemático de menor a mayor: 3.450, 1.890, 4.120, 2.750',
        visual: 'Menor ➔ Mayor (4 cifras)',
        itemsToOrder: ['3.450', '1.890', '4.120', '2.750'],
        options: [
          '1.890 - 2.750 - 3.450 - 4.120',
          '1.890 - 3.450 - 2.750 - 4.120',
          '4.120 - 3.450 - 2.750 - 1.890',
          '2.750 - 1.890 - 3.450 - 4.120'
        ],
        correctAnswer: '1.890 - 2.750 - 3.450 - 4.120',
        hint: 'Compara las unidades de mil: 1.890 (1 mil), 2.750 (2 mil), 3.450 (3 mil) y 4.120 (4 mil).',
        explanation: '¡Perfecto! El orden ascendente es 1.890 - 2.750 - 3.450 - 4.120.'
      },
      {
        id: 'q5m_4g_5',
        type: 'math',
        interactionType: 'matching',
        ariTip: 'Relaciona cada expresión combinada con su resultado.',
        prompt: 'En 4° grado resolvemos primero los paréntesis. ¿Cuál opción relaciona cada expresión con su resultado?',
        visual: '(12 × 3) + 4 | (50 - 10) ÷ 5 | 100 - (8 × 5)',
        pairs: [
          { left: '(12 × 3) + 4', right: '40' },
          { left: '(50 - 10) ÷ 5', right: '8' },
          { left: '100 - (8 × 5)', right: '60' }
        ],
        options: [
          '(12×3)+4 = 40 | (50-10)÷5 = 8 | 100-(8×5) = 60',
          '(12×3)+4 = 60 | (50-10)÷5 = 40 | 100-(8×5) = 8',
          '(12×3)+4 = 8 | (50-10)÷5 = 60 | 100-(8×5) = 40',
          '(12×3)+4 = 48 | (50-10)÷5 = 10 | 100-(8×5) = 50'
        ],
        correctAnswer: '(12×3)+4 = 40 | (50-10)÷5 = 8 | 100-(8×5) = 60',
        hint: '36 + 4 = 40; 40 ÷ 5 = 8; y 100 - 40 = 60.',
        explanation: '¡Felicidades! Resolviste las tres expresiones combinadas de 4° grado.'
      },
{
            "id": "q5m_4g_6",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Presupuesto escolar de dos eventos.",
            "prompt": "Una escuela recaudó $4.500 en una rifa y $3.800 en una kermesse. Si gastaron $5.200 en material deportivo, ¿cuánto dinero sobró?",
            "visual": "🏫 ($4.500 + $3.800) - $5.200 = ?",
            "options": [
                  "$2.900",
                  "$3.100",
                  "$3.300",
                  "$3.000"
            ],
            "correctAnswer": "$3.100",
            "hint": "4.500 + 3.800 = 8.300. 8.300 - 5.200 = 3.100.",
            "explanation": "¡Exacto! Recaudaron $8.300 y sobraron $3.100."
      },
      {
            "id": "q5m_4g_7",
            "type": "math",
            "interactionType": "fill_blank",
            "ariTip": "Calcula el perímetro de la figura rectangular.",
            "prompt": "Un terreno rectangular mide 25 metros de largo y 12 metros de ancho. ¿Cuál es su perímetro?",
            "visual": "📐 Perímetro = 2 x (25 m + 12 m) = [ ? ]",
            "inputPlaceholder": "Escribe el perímetro...",
            "options": [
                  "64 metros",
                  "74 metros",
                  "84 metros",
                  "70 metros"
            ],
            "correctAnswer": "74 metros",
            "hint": "Perímetro = 2 x (25 + 12) = 2 x 37 = 74 metros.",
            "explanation": "¡Muy bien! El perímetro es de 74 metros."
      },
      {
            "id": "q5m_4g_8",
            "type": "math",
            "interactionType": "drag_drop",
            "ariTip": "Multiplica los viajes diarios por los días de la semana.",
            "prompt": "Un microbús hace 6 viajes al día transportando 35 pasajeros en cada viaje. ¿Cuántos pasajeros transporta en 5 días? ___",
            "visual": "🚌 6 viajes x 35 pasajeros x 5 días = [ ___ ]",
            "options": [
                  "950 pasajeros",
                  "1.050 pasajeros",
                  "1.150 pasajeros",
                  "1.000 pasajeros"
            ],
            "correctAnswer": "1.050 pasajeros",
            "hint": "6 x 35 = 210 pasajeros al día; 210 x 5 = 1.050.",
            "explanation": "¡Brillante! Transporta 1.050 pasajeros en 5 días."
      },
      {
            "id": "q5m_4g_9",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Calcula el costo combinado de los artículos.",
            "prompt": "Se compran 15 calculadoras a $120 cada una y 8 mochilas a $250 cada una. ¿Cuál es el costo total?",
            "visual": "🎒 (15 x $120) + (8 x $250) = ?",
            "options": [
                  "$3.600",
                  "$3.800",
                  "$4.000",
                  "$3.500"
            ],
            "correctAnswer": "$3.800",
            "hint": "Calculadoras: 15 x 120 = 1.800. Mochilas: 8 x 250 = 2.000. Total = 3.800.",
            "explanation": "¡Excelente! 1.800 + 2.000 = $3.800."
      },
      {
            "id": "q5m_4g_10",
            "type": "math",
            "interactionType": "multiple_choice",
            "ariTip": "Halla el promedio de tres recorridos.",
            "prompt": "Un ciclista recorre 140 km el primer día, 160 km el segundo y 180 km el tercero. ¿Cuál es el promedio diario?",
            "visual": "🚴 (140 + 160 + 180) ÷ 3 = ?",
            "options": [
                  "150 km",
                  "160 km",
                  "170 km",
                  "165 km"
            ],
            "correctAnswer": "160 km",
            "hint": "Suma 140 + 160 + 180 = 480 km. 480 ÷ 3 = 160 km.",
            "explanation": "¡Fantástico! 480 ÷ 3 = 160 km diarios."
      }
    ]
  },

  /* =====================================================================
   * MÓDULO DE ESPAÑOL (UNIDADES 1 A 5 -> IDs 6 A 10)
   * ===================================================================== */
  {
    id: 6,
    unitNumber: 1,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 1: Los Verbos',
    title: 'Unidad 1: Los Verbos',
    subtitle: 'Español • Acciones y tiempos verbales (Pasado, Presente y Futuro)',
    category: 'espanol',
    icon: '🏃',
    badgeColor: '#9333ea',
    requiredLevel: null,
    minPassPercent: 70,
    starsReward: 20,
    description: 'Identifica los verbos en las oraciones y comprende cómo expresan acciones en pasado, presente y futuro.',
    lesson: {
      title: 'Aprendo con Ari: ¿Qué son los Verbos?',
      summary3:
        'Los VERBOS son las palabras que indican acciones (correr, leer, jugar, volar) o estados. Según el momento en que ocurre la acción, el verbo puede estar en PASADO (ayer), PRESENTE (hoy) o FUTURO (mañana).',
      summary4:
        'En 4° grado además del tiempo verbal identificamos la PERSONA GRAMATICAL (primera: yo/nosotros, segunda: tú/ustedes, tercera: él/ella/ellos) y el NÚMERO (singular cuando es uno solo y plural cuando son varios).',
      steps3: [
        '1️⃣ Pregúntate: ¿qué acción hace el personaje? (Ej.: «María juega en el parque» ➔ acción: juega).',
        '2️⃣ Ayer (Pasado): cantó, corrió | Hoy (Presente): canta, corre | Mañana (Futuro): cantará, correrá.',
        '3️⃣ Observa la terminación del verbo para saber si la acción ya ocurrió o sucederá después.'
      ],
      steps4: [
        '1️⃣ Persona y número: «Nosotros estudiamos» (1ª persona del plural) vs «Ella estudia» (3ª persona del singular).',
        '2️⃣ Concordancia: Un sujeto plural exige un verbo en plural («Las águilas reales vuelan»).',
        '3️⃣ Tiempos conjugados: Ayer investigaron (pasado), hoy investigan (presente), mañana investigarán (futuro).'
      ],
      exampleVisual3: 'María [ juega ] en el parque.',
      exampleVisual4: 'Nosotros [ estudiamos ] ciencias  |  Las águilas [ vuelan ] sobre la montaña',
      steps: [
        '1️⃣ Pregúntate: ¿qué acción hace el personaje? (Ej.: «María juega en el parque» ➔ acción: juega).',
        '2️⃣ Ayer (Pasado): cantó, corrió | Hoy (Presente): canta, corre | Mañana (Futuro): cantará, correrá.',
        '3️⃣ En 4° grado revisa que el verbo concuerde en número (singular o plural) con quien realiza la acción.'
      ],
      exampleVisual: 'María [ juega ] en el parque.'
    },
    questions: [
      {
        id: 'q6_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: Identifica la acción',
        readingText:
          'Observa las acciones de los personajes: un niño corriendo, una niña leyendo un cuento y un perro durmiendo.',
        illustration: 'book',
        prompt: 'Si vemos a una niña con un libro abierto aprendiendo una historia, ¿cuál es el verbo que indica su acción?',
        visual: '👧📖 Acción del personaje',
        options: ['Leer', 'Mesa', 'Rápido', 'Cuaderno'],
        correctAnswer: 'Leer',
        hint: 'Busca la palabra que representa una acción y no un objeto.',
        explanation: '¡Exacto! «Leer» es el verbo porque expresa la acción que realiza la niña.'
      },
      {
        id: 'q6_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad B: Encuentra el verbo',
        readingText:
          'En cada oración hay una palabra que nos dice qué acción ocurre. Lee con atención: «María juega en el parque».',
        illustration: 'nature',
        prompt: 'En la oración «María juega en el parque», ¿cuál palabra es el verbo?',
        visual: 'María [ juega ] en el parque.',
        options: ['juega', 'María', 'parque', 'el'],
        correctAnswer: 'juega',
        hint: '¿Qué acción está haciendo María en el parque?',
        explanation: '¡Muy bien! «juega» es el verbo de la oración.'
      },
      {
        id: 'q6_3',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Actividad C: Clasifica los verbos según el tiempo',
        readingText:
          'Los verbos cambian según cuándo ocurre la acción: Ayer (pasado), Hoy (presente) o Mañana (futuro).',
        illustration: 'book',
        prompt: 'Clasifica los verbos según el tiempo verbal correcto (Ayer, Hoy y Mañana):',
        visual: 'Ayer ➔ Pasado | Hoy ➔ Presente | Mañana ➔ Futuro',
        options: [
          'Ayer: estudió | Hoy: estudia | Mañana: estudiará',
          'Ayer: estudiará | Hoy: estudió | Mañana: estudia',
          'Ayer: estudia | Hoy: estudiará | Mañana: estudió',
          'Ayer: estudiar | Hoy: estudió | Mañana: estudia'
        ],
        correctAnswer: 'Ayer: estudió | Hoy: estudia | Mañana: estudiará',
        hint: 'Ayer ya pasó («estudió»), Hoy ocurre ahora («estudia») y Mañana ocurrirá después («estudiará»).',
        explanation: '¡Correcto! Ayer estudió (pasado), hoy estudia (presente) y mañana estudiará (futuro).'
      },
      {
        id: 'q6_4',
        type: 'reading',
        interactionType: 'drag_drop',
        readingTitle: 'Actividad D: Completa la oración',
        readingText:
          'Para que una oración tenga sentido, necesitamos un verbo que indique la acción del sujeto.',
        illustration: 'nature',
        prompt: 'Completa la oración arrastrando o eligiendo el verbo correcto: «El pájaro ______ por el cielo.»',
        visual: '🐦 El pájaro [ ______ ] por el cielo.',
        options: ['vuela', 'mesa', 'azul', 'árbol'],
        correctAnswer: 'vuela',
        hint: '¿Qué acción hace el pájaro en el cielo?',
        explanation: '¡Excelente! «El pájaro vuela por el cielo» tiene sentido completo gracias al verbo «vuela».'
      },
      {
        id: 'q6_5',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'El tiempo futuro',
        readingText:
          'Cuando una acción sucederá mañana o la próxima semana, escribimos el verbo en tiempo futuro.',
        illustration: 'book',
        prompt: '¿En qué tiempo verbal está el verbo «viajaremos» en «Mañana viajaremos al planetario»?',
        visual: '🚀 Mañana [ viajaremos ]',
        inputPlaceholder: 'Escribe: pasado, presente o futuro',
        options: ['Futuro', 'Pasado', 'Presente', 'Infinitivo'],
        correctAnswer: 'Futuro',
        hint: 'La palabra «Mañana» nos indica algo que ocurrirá después.',
        explanation: '¡Perfecto! «Viajaremos» está en tiempo futuro.'
      },
{
            "id": "q6_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "La melodía en el aula",
            "readingText": "En el salón de música, todos participan con alegría.",
            "illustration": "book",
            "prompt": "En la oración «Los niños cantan una hermosa melodía», ¿cuál palabra es el verbo?",
            "visual": "🎶 Los niños [ cantan ] una melodía.",
            "options": [
                  "niños",
                  "cantan",
                  "hermosa",
                  "melodía"
            ],
            "correctAnswer": "cantan",
            "hint": "¿Qué acción realizan los niños?",
            "explanation": "¡Exacto! «cantan» es el verbo porque expresa la acción."
      },
      {
            "id": "q6_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "El tiempo pasado",
            "readingText": "Las acciones que ocurrieron ayer se expresan en tiempo pasado.",
            "illustration": "book",
            "prompt": "¿Cuál es el verbo en tiempo pasado de la acción comer para \"él\"?",
            "visual": "🍽️ Ayer él [ ? ] una manzana.",
            "inputPlaceholder": "Escribe el verbo...",
            "options": [
                  "come",
                  "comió",
                  "comerá",
                  "comiendo"
            ],
            "correctAnswer": "comió",
            "hint": "Acción que ya ocurrió ayer: él comió.",
            "explanation": "¡Muy bien! «comió» es el verbo en tiempo pasado."
      },
      {
            "id": "q6_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "El tiempo futuro",
            "readingText": "Cuando una acción ocurrirá mañana o el fin de semana, usamos el futuro.",
            "illustration": "nature",
            "prompt": "Completa con el verbo en futuro: «Nosotros ______ en la piscina el próximo sábado.»",
            "visual": "🏊 Nosotros [ ______ ] en la piscina.",
            "options": [
                  "nadamos",
                  "nadaremos",
                  "nadaron",
                  "nadando"
            ],
            "correctAnswer": "nadaremos",
            "hint": "Acción futura para nosotros: nadaremos.",
            "explanation": "¡Excelente! «nadaremos» expresa una acción en el futuro."
      },
      {
            "id": "q6_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Verbos vs Objetos",
            "readingText": "Los verbos son acciones, mientras que los sustantivos son cosas, animales o lugares.",
            "illustration": "book",
            "prompt": "¿Cuál de las siguientes palabras NO es un verbo?",
            "visual": "🔍 Identifica el sustantivo",
            "options": [
                  "Correr",
                  "Bailar",
                  "Ventana",
                  "Escribir"
            ],
            "correctAnswer": "Ventana",
            "hint": "«Ventana» es un objeto o cosa, no una acción.",
            "explanation": "¡Genial! «Ventana» es un sustantivo, no un verbo."
      },
      {
            "id": "q6_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Reconociendo el tiempo verbal",
            "readingText": "El tiempo verbal nos dice si la acción es en pasado, presente o futuro.",
            "illustration": "nature",
            "prompt": "En la oración «Ayer dibujé un arcoíris», el verbo «dibujé» está en tiempo:",
            "visual": "🌈 Ayer [ dibujé ] un arcoíris.",
            "options": [
                  "Presente",
                  "Pasado",
                  "Futuro",
                  "Condicional"
            ],
            "correctAnswer": "Pasado",
            "hint": "«Ayer» nos indica que la acción ya finalizó.",
            "explanation": "¡Perfecto! «dibujé» indica una acción pasada."
      }
    ],
    questionsGrade4: [
      {
        id: 'q6_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: El verbo conjugado en 4° grado',
        readingText:
          'En 4° grado identificamos las formas verbales conjugadas dentro de una oración científica: «Los biólogos observan las mariposas monarca».',
        illustration: 'nature',
        prompt: 'En la oración «Los biólogos observan las mariposas monarca», ¿cuál es el verbo conjugado?',
        visual: 'Los biólogos [ observan ] las mariposas.',
        options: ['observan', 'biólogos', 'mariposas', 'monarca'],
        correctAnswer: 'observan',
        hint: 'Es la palabra que indica la acción que realizan los biólogos en tiempo presente.',
        explanation: '¡Exacto! «observan» es la forma verbal conjugada en tercera persona del plural.'
      },
      {
        id: 'q6_4g_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Persona y número del verbo',
        readingText:
          'Los verbos tienen número singular (una sola persona) o plural (varias personas). Por ejemplo: «Nosotros estudiamos ciencias».',
        illustration: 'book',
        prompt: 'En la oración «Nosotros estudiamos ciencias», ¿en qué persona y número está el verbo «estudiamos»?',
        visual: '👦👧 Nosotros [ estudiamos ]',
        options: [
          'Primera persona del plural',
          'Tercera persona del singular',
          'Segunda persona del singular',
          'Tercera persona del plural'
        ],
        correctAnswer: 'Primera persona del plural',
        hint: '«Nosotros» incluye a quien habla y a otras personas más (plural).',
        explanation: '¡Muy bien! «Nosotros estudiamos» está en primera persona del plural.'
      },
      {
        id: 'q6_4g_3',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Actividad C: Tiempos verbales',
        readingText:
          'Relaciona cada adverbio de tiempo con la forma verbal conjugada que le corresponde.',
        illustration: 'book',
        prompt: 'Selecciona la clasificación correcta según el tiempo verbal (Ayer, Hoy, Mañana):',
        visual: 'Ayer (Pasado) | Hoy (Presente) | Mañana (Futuro)',
        options: [
          'Ayer: investigaron | Hoy: investigan | Mañana: investigarán',
          'Ayer: investigan | Hoy: investigaron | Mañana: investigarán',
          'Ayer: investigarán | Hoy: investigan | Mañana: investigaron',
          'Ayer: investigar | Hoy: investigó | Mañana: investigan'
        ],
        correctAnswer: 'Ayer: investigaron | Hoy: investigan | Mañana: investigarán',
        hint: 'Pasado: investigaron, Presente: investigan, Futuro: investigarán.',
        explanation: '¡Correcto! Has clasificado los tres tiempos verbales con precisión.'
      },
      {
        id: 'q6_4g_4',
        type: 'reading',
        interactionType: 'drag_drop',
        readingTitle: 'Actividad D: Concordancia de número y persona',
        readingText:
          'El verbo debe concordar en número plural con un sujeto plural.',
        illustration: 'nature',
        prompt: 'Completa la oración con concordancia en 4° grado: «Las águilas reales ______ sobre las montañas andinas.»',
        visual: '🦅 Las águilas reales [ ______ ] sobre las montañas.',
        options: ['vuelan', 'vuela', 'voló', 'montaña'],
        correctAnswer: 'vuelan',
        hint: '«Las águilas reales» está en plural, así que el verbo también debe ir en plural («vuelan»).',
        explanation: '¡Excelente! «Las águilas reales vuelan sobre las montañas andinas».'
      },
      {
        id: 'q6_4g_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Número gramatical',
        readingText:
          'Observa la oración: «Los astronautas exploraron el espacio».',
        illustration: 'solar',
        prompt: '¿Es Verdadero o Falso que el verbo «exploraron» está en número PLURAL y tiempo PASADO?',
        visual: '👨‍🚀 «Los astronautas exploraron el espacio»',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Se refiere a varios astronautas (plural) y a una acción que ya ocurrió (pasado).',
        explanation: '¡Brillante! «Exploraron» está en tercera persona del plural y en pasado.'
      },
{
            "id": "q6_4g_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Tiempos compuestos",
            "readingText": "Los tiempos compuestos se forman con el verbo auxiliar haber y el participio.",
            "illustration": "book",
            "prompt": "En la oración «Los científicos han descubierto un nuevo mineral», ¿cuál es el verbo compuesto?",
            "visual": "🔬 Los científicos [ han descubierto ] un mineral.",
            "options": [
                  "científicos",
                  "han descubierto",
                  "nuevo",
                  "mineral"
            ],
            "correctAnswer": "han descubierto",
            "hint": "Está formado por el auxiliar «han» más el participio «descubierto».",
            "explanation": "¡Exacto! «han descubierto» es un tiempo compuesto (pretérito perfecto compuesto)."
      },
      {
            "id": "q6_4g_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Formas no personales: el gerundio",
            "readingText": "El gerundio termina en -ando o -iendo y señala una acción en desarrollo.",
            "illustration": "book",
            "prompt": "El gerundio del verbo «escribir» es:",
            "visual": "✍️ Verbo escribir en gerundio: [ ? ]",
            "inputPlaceholder": "Escribe el gerundio...",
            "options": [
                  "escrito",
                  "escribiendo",
                  "escribir",
                  "escribirá"
            ],
            "correctAnswer": "escribiendo",
            "hint": "Los gerundios terminan en -ando o -iendo.",
            "explanation": "¡Muy bien! «escribiendo» es el gerundio del verbo escribir."
      },
      {
            "id": "q6_4g_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Formas no personales: el infinitivo",
            "readingText": "El infinitivo es el nombre del verbo y termina en -ar, -er o -ir.",
            "illustration": "book",
            "prompt": "Completa con el verbo en infinitivo: «Nos gusta ______ en la biblioteca.»",
            "visual": "📚 Nos gusta [ ______ ] en la biblioteca.",
            "options": [
                  "investigado",
                  "investigando",
                  "investigar",
                  "investigó"
            ],
            "correctAnswer": "investigar",
            "hint": "El infinitivo termina en -ar, -er o -ir.",
            "explanation": "¡Brillante! «investigar» es la forma infinitiva del verbo."
      },
      {
            "id": "q6_4g_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "El futuro compuesto",
            "readingText": "El futuro compuesto indica una acción que habrá finalizado antes de un momento futuro.",
            "illustration": "solar",
            "prompt": "En «Nosotros habremos llegado antes del mediodía», ¿en qué tiempo compuesto está el verbo?",
            "visual": "⏰ Nosotros [ habremos llegado ]",
            "options": [
                  "Pretérito perfecto",
                  "Futuro compuesto",
                  "Pretérito pluscuamperfecto",
                  "Presente"
            ],
            "correctAnswer": "Futuro compuesto",
            "hint": "El auxiliar «habremos» expresa futuro compuesto.",
            "explanation": "¡Excelente! «habremos llegado» está en futuro compuesto del indicativo."
      },
      {
            "id": "q6_4g_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Participios irregulares",
            "readingText": "Algunos verbos tienen participios irregulares que no terminan en -ado ni en -ido.",
            "illustration": "book",
            "prompt": "¿Cuál es el participio del verbo «romper»?",
            "visual": "💔 Participio de romper: ?",
            "options": [
                  "rompido",
                  "roto",
                  "rompiendo",
                  "romper"
            ],
            "correctAnswer": "roto",
            "hint": "Decimos «el jarrón está roto», no «rompido».",
            "explanation": "¡Fantástico! «roto» es el participio irregular de romper."
      }
    ]
  },

  {
    id: 7,
    unitNumber: 2,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 2: El Sujeto',
    title: 'Unidad 2: El Sujeto',
    subtitle: 'Español • ¿Quién realiza la acción en la oración?',
    category: 'espanol',
    icon: '🐕',
    badgeColor: '#7e22ce',
    requiredLevel: 6,
    minPassPercent: 70,
    starsReward: 20,
    description: 'Identifica quién realiza la acción o de quién se habla en una oración.',
    lesson: {
      title: 'Aprendo con Ari: ¿Cómo encontrar el Sujeto?',
      summary3:
        'El SUJETO es la persona, animal o cosa de quien se habla en la oración o quien realiza la acción. Para encontrarlo, le preguntamos al verbo: ¿QUIÉN? o ¿QUIÉNES? Por ejemplo, en «El perro corre por el jardín», ¿quién corre? ➔ «El perro».',
      summary4:
        'En 4° grado distinguimos el NÚCLEO DEL SUJETO (el sustantivo o pronombre principal), el sujeto SIMPLE (un solo núcleo, ej. «Juan») y COMPUESTO (dos o más núcleos, ej. «Juan y Ana»), así como el sujeto EXPRESO (aparece escrito) y TÁCITO (se sobreentiende por el verbo).',
      steps3: [
        '1️⃣ Ubica primero el verbo de la oración (ej. «corre» o «juegan»).',
        '2️⃣ Pregunta ¿Quién corre? o ¿Quiénes juegan? La respuesta es el SUJETO.',
        '3️⃣ Ejemplo: «Los niños juegan fútbol» ➔ ¿Quiénes juegan? ➔ Sujeto: «Los niños».'
      ],
      steps4: [
        '1️⃣ Núcleo del sujeto: Sustantivo principal (ej. «telescopio» en «[El telescopio espacial] capturó imágenes»).',
        '2️⃣ Sujeto compuesto: Dos núcleos realizando la acción (ej. «[Ari y Juanito] leen un libro»).',
        '3️⃣ Sujeto tácito: Sobreentendido por el verbo (ej. «(Nosotros) Ganamos tres estrellas»).'
      ],
      exampleVisual3: '[ El perro ] corre por el jardín.',
      exampleVisual4: '[ Ari y Juanito ] (Compuesto)  |  (Nosotros) Ganamos tres estrellas (Tácito)',
      steps: [
        '1️⃣ Ubica primero el verbo de la oración (ej. «corre» o «juegan»).',
        '2️⃣ Pregunta ¿Quién corre? o ¿Quiénes juegan? La respuesta es el SUJETO.',
        '3️⃣ Ejemplo: «Los niños juegan fútbol» ➔ ¿Quiénes juegan? ➔ Sujeto: «Los niños».'
      ],
      exampleVisual: '[ El perro ] corre por el jardín.'
    },
    questions: [
      {
        id: 'q7_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: ¿Quién realiza la acción?',
        readingText:
          'Lee la siguiente oración con atención: «El perro corre por el jardín».',
        illustration: 'nature',
        prompt: 'En la oración «El perro corre por el jardín», ¿quién corre (cuál es el sujeto)?',
        visual: '[ El perro ] corre por el jardín.',
        options: ['El perro', 'corre', 'por el jardín', 'jardín'],
        correctAnswer: 'El perro',
        hint: 'Hazle la pregunta al verbo: ¿Quién corre por el jardín?',
        explanation: '¡Exacto! «El perro» realiza la acción de correr, por eso es el sujeto.'
      },
      {
        id: 'q7_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad B: Selecciona el sujeto',
        readingText:
          'Analiza la oración: «Los niños juegan fútbol».',
        illustration: 'book',
        prompt: 'Selecciona el sujeto de la oración «Los niños juegan fútbol»:',
        visual: '[ Los niños ] juegan fútbol.',
        options: ['Los niños', 'Juegan', 'Fútbol', 'juegan fútbol'],
        correctAnswer: 'Los niños',
        hint: '¿Quiénes juegan fútbol?',
        explanation: '¡Muy bien! «Los niños» es el sujeto de la oración.'
      },
      {
        id: 'q7_3',
        type: 'reading',
        interactionType: 'ordering',
        readingTitle: 'Actividad C: Ordena la oración colocando el sujeto al inicio',
        readingText:
          'Al ordenar las palabras de una oración colocamos primero el sujeto y luego lo que hace.',
        illustration: 'nature',
        prompt: 'Ordena las palabras para formar correctamente la oración:',
        visual: 'las flores / La abeja / visita',
        itemsToOrder: ['las flores.', 'La abeja', 'visita'],
        options: [
          'La abeja visita las flores.',
          'visita La abeja las flores.',
          'las flores. visita La abeja',
          'La abeja las flores. visita'
        ],
        correctAnswer: 'La abeja visita las flores.',
        hint: 'Empieza por el sujeto «La abeja», sigue con el verbo «visita» y termina con «las flores.».',
        explanation: '¡Correcto! «La abeja visita las flores.» tiene el sujeto «La abeja» bien ubicado.'
      },
      {
        id: 'q7_4',
        type: 'reading',
        interactionType: 'drag_drop',
        readingTitle: 'Completa con el sujeto adecuado',
        readingText:
          'El sujeto debe concordar con el verbo de la oración.',
        illustration: 'solar',
        prompt: 'Arrastra o selecciona el sujeto que completa la oración: «________ ilumina los planetas del Sistema Solar.»',
        visual: '[ ________ ] ilumina los planetas.',
        options: ['El Sol', 'Correr', 'Rápidamente', 'Ayer'],
        correctAnswer: 'El Sol',
        hint: '¿Qué astro ilumina los planetas del Sistema Solar?',
        explanation: '¡Genial! «El Sol» es el sujeto que realiza la acción de iluminar.'
      },
      {
        id: 'q7_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Reconocimiento del sujeto',
        readingText:
          'En la oración «Mi maestra explica las sumas con alegría», la persona de quien hablamos es «Mi maestra».',
        illustration: 'book',
        prompt: '¿Es Verdadero o Falso que «Mi maestra» es el sujeto de la oración?',
        visual: '[ Mi maestra ] explica las sumas con alegría.',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: '¿Quién explica las sumas con alegría? Mi maestra.',
        explanation: '¡Así es! «Mi maestra» es quien realiza la acción, por lo tanto es el sujeto.'
      },
{
            "id": "q7_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "La clase de ciencias",
            "readingText": "En el colegio, cada integrante tiene una tarea especial.",
            "illustration": "book",
            "prompt": "En la oración «La maestra explica la lección con paciencia», ¿quién es el sujeto?",
            "visual": "👩‍🏫 [ La maestra ] explica la lección.",
            "options": [
                  "La maestra",
                  "explica",
                  "la lección",
                  "con paciencia"
            ],
            "correctAnswer": "La maestra",
            "hint": "Pregunta: ¿Quién explica la lección?",
            "explanation": "¡Exacto! «La maestra» es el sujeto que realiza la acción."
      },
      {
            "id": "q7_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Núcleo del sujeto",
            "readingText": "El núcleo del sujeto es el sustantivo más importante.",
            "illustration": "nature",
            "prompt": "En «El gato blanco duerme en el tejado», el núcleo del sujeto es:",
            "visual": "🐱 El [ ? ] blanco",
            "inputPlaceholder": "Escribe el núcleo...",
            "options": [
                  "El",
                  "gato",
                  "blanco",
                  "duerme"
            ],
            "correctAnswer": "gato",
            "hint": "El núcleo es la palabra central del sujeto (gato).",
            "explanation": "¡Muy bien! «gato» es el núcleo del sujeto."
      },
      {
            "id": "q7_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Concordancia en plural",
            "readingText": "El sujeto y el verbo deben coincidir en número (singular o plural).",
            "illustration": "nature",
            "prompt": "Arrastra el sujeto que concuerda: «______ vuelan hacia el sur en invierno.»",
            "visual": "🕊️ [ ______ ] vuelan hacia el sur.",
            "options": [
                  "El árbol",
                  "Las golondrinas",
                  "El viento",
                  "La montaña"
            ],
            "correctAnswer": "Las golondrinas",
            "hint": "Debe concordar en plural con «vuelan».",
            "explanation": "¡Excelente! «Las golondrinas» concuerda en plural con «vuelan»."
      },
      {
            "id": "q7_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Sujeto al final de la oración",
            "readingText": "El sujeto puede aparecer al principio, en medio o al final de la oración.",
            "illustration": "nature",
            "prompt": "En la oración «Caminaron por el bosque los exploradores», ¿cuál es el sujeto?",
            "visual": "🌲 Caminaron por el bosque [ los exploradores ].",
            "options": [
                  "Caminaron",
                  "por el bosque",
                  "los exploradores",
                  "el bosque"
            ],
            "correctAnswer": "los exploradores",
            "hint": "Pregunta: ¿Quiénes caminaron por el bosque?",
            "explanation": "¡Genial! «los exploradores» es el sujeto, aunque esté al final."
      },
      {
            "id": "q7_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Identifica el sujeto completo",
            "readingText": "El sujeto incluye el núcleo y sus palabras acompañantes.",
            "illustration": "trophy",
            "prompt": "¿Cuál es el sujeto en «Mi hermano menor ganó una medalla de oro»?",
            "visual": "🥇 [ Mi hermano menor ] ganó una medalla.",
            "options": [
                  "Mi hermano menor",
                  "ganó",
                  "una medalla",
                  "de oro"
            ],
            "correctAnswer": "Mi hermano menor",
            "hint": "¿Quién ganó la medalla de oro?",
            "explanation": "¡Perfecto! «Mi hermano menor» es el sujeto completo."
      }
    ],
    questionsGrade4: [
      {
        id: 'q7_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: Sujeto expreso con modificadores (4° grado)',
        readingText:
          'Lee la oración: «El telescopio espacial capturó imágenes de una galaxia lejana».',
        illustration: 'solar',
        prompt: 'En la oración «El telescopio espacial capturó imágenes de una galaxia lejana», ¿cuál es el sujeto expreso?',
        visual: '[ El telescopio espacial ] capturó imágenes.',
        options: ['El telescopio espacial', 'capturó imágenes', 'una galaxia lejana', 'capturó'],
        correctAnswer: 'El telescopio espacial',
        hint: 'Pregunta ¿qué capturó imágenes de una galaxia lejana?',
        explanation: '¡Exacto! «El telescopio espacial» es el sujeto expreso de la oración.'
      },
      {
        id: 'q7_4g_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad B: Sujeto al final de la oración',
        readingText:
          'En 4° grado descubrimos que el sujeto también puede aparecer después del verbo: «Por el bosque caminaban los exploradores curiosos».',
        illustration: 'nature',
        prompt: 'Selecciona el sujeto de la oración «Por el bosque caminaban los exploradores curiosos»:',
        visual: 'Por el bosque caminaban [ los exploradores curiosos ].',
        options: ['los exploradores curiosos', 'Por el bosque', 'caminaban', 'el bosque'],
        correctAnswer: 'los exploradores curiosos',
        hint: 'Hazle la pregunta al verbo: ¿Quiénes caminaban por el bosque?',
        explanation: '¡Muy bien! Aunque está al final, «los exploradores curiosos» es el sujeto.'
      },
      {
        id: 'q7_4g_3',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'Núcleo del sujeto en 4° grado',
        readingText:
          'El núcleo del sujeto es el sustantivo principal del que hablamos. Por ejemplo, en «Los delfines inteligentes nadan en el mar», el sustantivo principal es «delfines».',
        illustration: 'ocean',
        prompt: 'En el sujeto «Los delfines inteligentes», ¿cuál es la palabra que funciona como NÚCLEO del sujeto?',
        visual: 'Los [ delfines ] inteligentes',
        inputPlaceholder: 'Escribe el sustantivo núcleo...',
        options: ['delfines', 'Los', 'inteligentes', 'nadan'],
        correctAnswer: 'delfines',
        hint: 'Es el sustantivo que nombra a los animales marinos.',
        explanation: '¡Correcto! El sustantivo «delfines» es el núcleo del sujeto.'
      },
      {
        id: 'q7_4g_4',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Sujeto simple y sujeto compuesto',
        readingText:
          'Un sujeto es compuesto cuando tiene dos o más núcleos, como en «Ari y Juanito leen un libro de ciencias».',
        illustration: 'book',
        prompt: '¿Qué tipo de sujeto tiene la oración «Ari y Juanito leen un libro de ciencias»?',
        visual: '[ Ari y Juanito ] leen un libro.',
        options: ['Sujeto compuesto', 'Sujeto tácito', 'Sujeto simple', 'Sin sujeto'],
        correctAnswer: 'Sujeto compuesto',
        hint: 'Observa que menciona a dos personajes: Ari y Juanito.',
        explanation: '¡Excelente! Como tiene dos núcleos («Ari» y «Juanito»), es un sujeto compuesto.'
      },
      {
        id: 'q7_4g_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Sujeto tácito',
        readingText:
          'En la oración «Ganamos tres estrellas en matemáticas», el sujeto no está escrito pero sabemos por el verbo que somos «Nosotros».',
        illustration: 'book',
        prompt: '¿Es Verdadero o Falso que cuando el sujeto no está escrito pero se sobreentiende se llama SUJETO TÁCITO?',
        visual: '(Nosotros) Ganamos tres estrellas.',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'El sujeto expreso aparece escrito y el sujeto tácito se deduce de la terminación del verbo.',
        explanation: '¡Brillante! Se llama sujeto tácito (en este caso, «Nosotros»).'
      },
{
            "id": "q7_4g_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "El sujeto tácito u omitido",
            "readingText": "Cuando el sujeto no está escrito pero se deduce por la terminación del verbo, se llama sujeto tácito.",
            "illustration": "nature",
            "prompt": "En «Caminamos bajo la lluvia durante toda la tarde», el sujeto es:",
            "visual": "🌧️ [ (Nosotros) ] Caminamos bajo la lluvia.",
            "options": [
                  "Sujeto tácito u omitido (Nosotros)",
                  "La lluvia",
                  "La tarde",
                  "Sujeto compuesto"
            ],
            "correctAnswer": "Sujeto tácito u omitido (Nosotros)",
            "hint": "El verbo «caminamos» nos indica la persona \"nosotros\".",
            "explanation": "¡Exacto! El sujeto está tácito u omitido (Nosotros)."
      },
      {
            "id": "q7_4g_7",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Modificador indirecto del sujeto",
            "readingText": "El modificador indirecto se une al núcleo mediante una preposición (de, con, para).",
            "illustration": "solar",
            "prompt": "En «La brillante estrella del norte guía a los marineros», ¿cuál es el modificador indirecto?",
            "visual": "⭐ La brillante estrella [ del norte ]",
            "options": [
                  "La",
                  "brillante",
                  "del norte",
                  "marineros"
            ],
            "correctAnswer": "del norte",
            "hint": "Lleva la preposición \"de\" (del = de + el).",
            "explanation": "¡Muy bien! «del norte» es el modificador indirecto del sujeto."
      },
      {
            "id": "q7_4g_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Sujetos compuestos",
            "readingText": "Un sujeto compuesto tiene dos o más núcleos coordinados por una conjunción.",
            "illustration": "book",
            "prompt": "Identifica el sujeto compuesto: «______ prepararon una obra de teatro maravillosa.»",
            "visual": "🎭 [ ______ ] prepararon una obra.",
            "options": [
                  "El profesor",
                  "Mateo y Valentina",
                  "La actriz principal",
                  "El público"
            ],
            "correctAnswer": "Mateo y Valentina",
            "hint": "Tiene dos núcleos: Mateo y Valentina.",
            "explanation": "¡Brillante! «Mateo y Valentina» es un sujeto compuesto."
      },
      {
            "id": "q7_4g_9",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Deducción del sujeto tácito",
            "readingText": "La desinencia verbal revela el pronombre correspondiente.",
            "illustration": "book",
            "prompt": "En «Estudiaron con gran entusiasmo para el examen», el sujeto tácito es:",
            "visual": "📖 [ ? ] Estudiaron con entusiasmo.",
            "inputPlaceholder": "Escribe el pronombre...",
            "options": [
                  "Nosotros",
                  "Tú",
                  "Ellos o Ellas",
                  "Yo"
            ],
            "correctAnswer": "Ellos o Ellas",
            "hint": "La terminación -aron corresponde a ellos o ellas.",
            "explanation": "¡Excelente! El sujeto tácito es «Ellos» o «Ellas»."
      },
      {
            "id": "q7_4g_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "La aposición en el sujeto",
            "readingText": "La aposición es una aclaración que nombra al núcleo de otra forma y va entre comas.",
            "illustration": "nature",
            "prompt": "En «París, la capital de Francia, atrae a miles de turistas», la frase entre comas es una:",
            "visual": "🗼 París, [ la capital de Francia ], atrae...",
            "options": [
                  "Aposición",
                  "Modificador directo",
                  "Núcleo del sujeto",
                  "Predicado"
            ],
            "correctAnswer": "Aposición",
            "hint": "Explica quién es París y va entre comas.",
            "explanation": "¡Fantástico! «la capital de Francia» es una aposición que aclara al núcleo París."
      }
    ]
  },

  {
    id: 8,
    unitNumber: 3,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 3: El Predicado',
    title: 'Unidad 3: El Predicado',
    subtitle: 'Español • ¿Qué se dice del sujeto en la oración?',
    category: 'espanol',
    icon: '🎤',
    badgeColor: '#6b21a8',
    requiredLevel: 7,
    minPassPercent: 70,
    starsReward: 25,
    description: 'Identifica qué se dice del sujeto, reconoce el verbo dentro del predicado y construye oraciones completas.',
    lesson: {
      title: 'Aprendo con Ari: ¿Qué es el Predicado?',
      summary3:
        'El PREDICADO es todo lo que se dice del sujeto en una oración, es decir, la acción que realiza. Siempre incluye al verbo. Por ejemplo, en «La niña canta una canción», el sujeto es «La niña» y el predicado es «canta una canción».',
      summary4:
        'En 4° grado identificamos el NÚCLEO DEL PREDICADO, que siempre es el verbo conjugado. En «La niña canta una canción», el predicado verbal es «canta una canción» y su núcleo es «canta».',
      steps3: [
        '1️⃣ Separa primero el sujeto de la oración (¿Quién realiza la acción?).',
        '2️⃣ Todo el resto de la oración, empezando por el verbo, forma el PREDICADO.',
        '3️⃣ Ejemplo: Sujeto: «La niña» | Predicado: «canta una canción» (Núcleo: «canta»).'
      ],
      steps4: [
        '1️⃣ Núcleo del predicado: El verbo conjugado de la oración (ej. «construyeron» en «Los científicos [construyeron un satélite]»).',
        '2️⃣ Complemento circunstancial: Información sobre dónde, cómo o cuándo ocurre la acción («en el océano»).',
        '3️⃣ Predicado compuesto: Dos acciones realizadas por el mismo sujeto (ej. «Ari [lee el problema y explica la pista]»).'
      ],
      exampleVisual3: 'La niña [ canta una canción ].',
      exampleVisual4: 'Los científicos [ construyeron un satélite ] (Núcleo: construyeron)',
      steps: [
        '1️⃣ Separa primero el sujeto de la oración (¿Quién realiza la acción?).',
        '2️⃣ Todo el resto de la oración, empezando por el verbo, forma el PREDICADO.',
        '3️⃣ Ejemplo: Sujeto: «La niña» | Predicado: «canta una canción» (Núcleo: «canta»).'
      ],
      exampleVisual: 'La niña [ canta una canción ].'
    },
    questions: [
      {
        id: 'q8_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: Identifica el predicado',
        readingText:
          'Lee la oración del ejemplo: «La niña canta una canción». Ya sabemos que el sujeto es «La niña».',
        illustration: 'book',
        prompt: 'En la oración «La niña canta una canción», ¿cuál es el predicado?',
        visual: 'La niña [ canta una canción ].',
        options: ['canta una canción', 'La niña', 'La', 'niña canta'],
        correctAnswer: 'canta una canción',
        hint: '¿Qué se dice que hace la niña?',
        explanation: '¡Exacto! «canta una canción» es el predicado porque expresa lo que hace el sujeto.'
      },
      {
        id: 'q8_2',
        type: 'reading',
        interactionType: 'drag_drop',
        readingTitle: 'Actividad B: Completa la oración con un predicado',
        readingText:
          'Todo predicado necesita un verbo que exprese lo que hace el sujeto.',
        illustration: 'nature',
        prompt: 'Completa la oración «El gato ________» eligiendo el predicado adecuado:',
        visual: '🐱 El gato [ ________ ].',
        options: ['duerme en el sofá', 'amarillo y pequeño', 'el jardín grande', 'un cuaderno azul'],
        correctAnswer: 'duerme en el sofá',
        hint: 'Elige la opción que comienza con un verbo de acción («duerme»).',
        explanation: '¡Muy bien! «duerme en el sofá» tiene verbo y funciona como predicado.'
      },
      {
        id: 'q8_3',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Actividad C: Divide la oración en Sujeto y Predicado',
        readingText:
          'Observa la oración: «El búho Ari enseña con alegría». Vamos a separar sus dos partes.',
        illustration: 'book',
        prompt: 'Selecciona la división correcta entre Sujeto y Predicado para «El búho Ari enseña con alegría»:',
        visual: '[ Sujeto ] + [ Predicado ]',
        options: [
          'Sujeto: El búho Ari | Predicado: enseña con alegría',
          'Sujeto: enseña con alegría | Predicado: El búho Ari',
          'Sujeto: El búho | Predicado: Ari enseña con alegría',
          'Sujeto: El búho Ari enseña | Predicado: con alegría'
        ],
        correctAnswer: 'Sujeto: El búho Ari | Predicado: enseña con alegría',
        hint: '¿Quién enseña? «El búho Ari» (Sujeto). ¿Qué hace? «enseña con alegría» (Predicado).',
        explanation: '¡Correcto! Sujeto: «El búho Ari» y Predicado: «enseña con alegría».'
      },
      {
        id: 'q8_4',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'El verbo dentro del predicado',
        readingText:
          'La palabra más importante del predicado es el verbo.',
        illustration: 'nature',
        prompt: 'En el predicado «corren por la pradera verde», ¿cuál palabra es el verbo (núcleo del predicado)?',
        visual: '[ corren ] por la pradera verde',
        inputPlaceholder: 'Escribe el verbo...',
        options: ['corren', 'pradera', 'verde', 'por'],
        correctAnswer: 'corren',
        hint: 'Busca la palabra que indica la acción de desplazarse rápido.',
        explanation: '¡Perfecto! «corren» es el verbo y núcleo del predicado.'
      },
      {
        id: 'q8_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Diferenciación entre sujeto y predicado',
        readingText:
          'Analiza la oración: «Las abejas fabrican miel en la colmena».',
        illustration: 'nature',
        prompt: '¿Es Verdadero o Falso que en «Las abejas fabrican miel en la colmena» el predicado es «fabrican miel en la colmena»?',
        visual: 'Las abejas [ fabrican miel en la colmena ].',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: '«Las abejas» es el sujeto y todo lo que hacen («fabrican miel en la colmena») es el predicado.',
        explanation: '¡Excelente! Es Verdadero: «fabrican miel en la colmena» es el predicado.'
      },
{
            "id": "q8_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "El canto de las aves",
            "readingText": "El predicado expresa lo que el sujeto hace o cómo está.",
            "illustration": "nature",
            "prompt": "En la oración «Los pájaros cantan al amanecer», ¿cuál es el predicado?",
            "visual": "🐦 Los pájaros [ cantan al amanecer ].",
            "options": [
                  "Los pájaros",
                  "cantan al amanecer",
                  "al amanecer",
                  "pájaros"
            ],
            "correctAnswer": "cantan al amanecer",
            "hint": "Todo lo que se dice del sujeto a partir del verbo.",
            "explanation": "¡Exacto! «cantan al amanecer» es el predicado."
      },
      {
            "id": "q8_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Núcleo del predicado",
            "readingText": "El núcleo del predicado es siempre un verbo conjugado.",
            "illustration": "book",
            "prompt": "En «El cartero entregó una carta urgente», el núcleo del predicado es:",
            "visual": "✉️ El cartero [ ? ] una carta.",
            "inputPlaceholder": "Escribe el verbo núcleo...",
            "options": [
                  "El cartero",
                  "entregó",
                  "carta",
                  "urgente"
            ],
            "correctAnswer": "entregó",
            "hint": "El núcleo del predicado es el verbo conjugado.",
            "explanation": "¡Muy bien! «entregó» es el núcleo del predicado."
      },
      {
            "id": "q8_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Completa con el predicado",
            "readingText": "Un predicado completo contiene la acción y sus circunstancias.",
            "illustration": "nature",
            "prompt": "Completa con el predicado correcto: «El río caudaloso ______»",
            "visual": "🌊 El río caudaloso [ ______ ]",
            "options": [
                  "es azul",
                  "desemboca en el océano",
                  "las aguas",
                  "peces nadando"
            ],
            "correctAnswer": "desemboca en el océano",
            "hint": "Contiene un verbo conjugado: desemboca.",
            "explanation": "¡Excelente! «desemboca en el océano» completa la acción del río."
      },
      {
            "id": "q8_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Reconociendo el predicado",
            "readingText": "Separa la oración en quién lo hace (sujeto) y qué hace (predicado).",
            "illustration": "book",
            "prompt": "¿Cuál es el predicado en «Daniel horneó deliciosas galletas de avena»?",
            "visual": "🍪 Daniel [ horneó deliciosas galletas de avena ].",
            "options": [
                  "Daniel",
                  "horneó deliciosas galletas de avena",
                  "deliciosas galletas",
                  "galletas de avena"
            ],
            "correctAnswer": "horneó deliciosas galletas de avena",
            "hint": "¿Qué hizo Daniel?",
            "explanation": "¡Genial! «horneó deliciosas galletas de avena» es el predicado completo."
      },
      {
            "id": "q8_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Verbo como corazón del predicado",
            "readingText": "Sin verbo no hay predicado.",
            "illustration": "solar",
            "prompt": "En la oración «El sol ilumina todo el valle», el núcleo del predicado es:",
            "visual": "☀️ El sol [ ilumina ] todo el valle.",
            "options": [
                  "sol",
                  "ilumina",
                  "todo",
                  "valle"
            ],
            "correctAnswer": "ilumina",
            "hint": "Busca el verbo conjugado.",
            "explanation": "¡Perfecto! «ilumina» es el núcleo del predicado."
      }
    ],
    questionsGrade4: [
      {
        id: 'q8_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: Núcleo del predicado verbal (4° grado)',
        readingText:
          'En 4° grado analizamos el predicado verbal y su núcleo. Lee la oración: «Los científicos construyeron un satélite meteorológico».',
        illustration: 'solar',
        prompt: 'En el predicado «construyeron un satélite meteorológico», ¿cuál es el NÚCLEO del predicado?',
        visual: 'Los científicos [ construyeron ] un satélite meteorológico.',
        options: ['construyeron', 'satélite', 'meteorológico', 'un satélite'],
        correctAnswer: 'construyeron',
        hint: 'El núcleo del predicado verbal es siempre el verbo conjugado.',
        explanation: '¡Exacto! El verbo conjugado «construyeron» es el núcleo del predicado.'
      },
      {
        id: 'q8_4g_2',
        type: 'reading',
        interactionType: 'drag_drop',
        readingTitle: 'Actividad B: Predicado con complemento circunstancial',
        readingText:
          'El predicado puede incluir información sobre el lugar o el modo en que ocurre la acción.',
        illustration: 'ocean',
        prompt: 'Completa la oración «Las tortugas marinas ________» con el predicado verbal adecuado:',
        visual: '🐢 Las tortugas marinas [ ________ ].',
        options: [
          'navegan grandes distancias por el océano',
          'caparazón duro y verde',
          'las playas de arena tibia',
          'muy lentas y silenciosas'
        ],
        correctAnswer: 'navegan grandes distancias por el océano',
        hint: 'Elige la opción que contiene un verbo conjugado en plural («navegan»).',
        explanation: '¡Muy bien! «navegan grandes distancias por el océano» tiene como núcleo el verbo «navegan».'
      },
      {
        id: 'q8_4g_3',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Actividad C: Análisis de Sujeto, Predicado y Núcleo',
        readingText:
          'Analiza la oración: «La orquesta juvenil interpretó una melodía alegre».',
        illustration: 'book',
        prompt: 'Identifica correctamente el Sujeto, el Predicado y el Núcleo del predicado:',
        visual: '[ Sujeto ] + [ Predicado (Núcleo) ]',
        options: [
          'Sujeto: La orquesta juvenil | Predicado: interpretó una melodía alegre | Núcleo: interpretó',
          'Sujeto: interpretó una melodía | Predicado: La orquesta juvenil | Núcleo: orquesta',
          'Sujeto: La orquesta | Predicado: juvenil interpretó una melodía | Núcleo: melodía',
          'Sujeto: La orquesta juvenil | Predicado: una melodía alegre | Núcleo: alegre'
        ],
        correctAnswer: 'Sujeto: La orquesta juvenil | Predicado: interpretó una melodía alegre | Núcleo: interpretó',
        hint: '¿Quién interpretó? «La orquesta juvenil». ¿Qué hizo? «interpretó una melodía alegre» (verbo: «interpretó»).',
        explanation: '¡Correcto! Has identificado el sujeto, el predicado y su núcleo verbal.'
      },
      {
        id: 'q8_4g_4',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'Núcleo verbal en 4° grado',
        readingText:
          'En la oración «Los estudiantes de cuarto grado sembraron árboles nativos en el patio», el predicado es «sembraron árboles nativos en el patio».',
        illustration: 'nature',
        prompt: 'Escribe la palabra que funciona como núcleo del predicado en «sembraron árboles nativos en el patio»:',
        visual: '[ sembraron ] árboles nativos en el patio',
        inputPlaceholder: 'Escribe el verbo núcleo...',
        options: ['sembraron', 'árboles', 'nativos', 'patio'],
        correctAnswer: 'sembraron',
        hint: 'Es el verbo en tiempo pasado que indica la acción realizada.',
        explanation: '¡Perfecto! «sembraron» es el verbo conjugado y núcleo del predicado.'
      },
      {
        id: 'q8_4g_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Predicado compuesto en 4° grado',
        readingText:
          'Cuando un sujeto realiza dos acciones con dos verbos, como en «Ari lee el problema y explica la pista», el predicado tiene dos núcleos verbales («lee» y «explica»).',
        illustration: 'book',
        prompt: '¿Es Verdadero o Falso que en «Ari lee el problema y explica la pista» el predicado tiene dos verbos como núcleos?',
        visual: 'Ari [ lee el problema y explica la pista ].',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Observa las dos acciones que realiza Ari: «lee» y «explica».',
        explanation: '¡Excelente! Es un predicado verbal compuesto porque tiene dos núcleos («lee» y «explica»).'
      },
{
            "id": "q8_4g_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Objeto Directo (OD)",
            "readingText": "El objeto directo recibe la acción directa del verbo transitivo.",
            "illustration": "nature",
            "prompt": "En «La arqueóloga halló un fósil antiguo en la cueva», ¿cuál es el Objeto Directo?",
            "visual": "🦴 La arqueóloga halló [ un fósil antiguo ]",
            "options": [
                  "La arqueóloga",
                  "un fósil antiguo",
                  "en la cueva",
                  "halló"
            ],
            "correctAnswer": "un fósil antiguo",
            "hint": "Pregunta: ¿Qué halló la arqueóloga? Un fósil antiguo.",
            "explanation": "¡Exacto! «un fósil antiguo» es el objeto directo (se puede sustituir por \"lo halló\")."
      },
      {
            "id": "q8_4g_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Objeto Indirecto (OI)",
            "readingText": "El objeto indirecto indica el destinatario o beneficiario de la acción.",
            "illustration": "book",
            "prompt": "En «El cartero entregó el paquete a la vecina», el Objeto Indirecto es:",
            "visual": "📦 Entregó el paquete [ ? ]",
            "inputPlaceholder": "Escribe a quién...",
            "options": [
                  "El cartero",
                  "el paquete",
                  "a la vecina",
                  "entregó"
            ],
            "correctAnswer": "a la vecina",
            "hint": "Pregunta: ¿A quién entregó el paquete?",
            "explanation": "¡Muy bien! «a la vecina» es el objeto indirecto (se puede sustituir por \"le entregó\")."
      },
      {
            "id": "q8_4g_8",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Predicado nominal y verbal",
            "readingText": "Los verbos ser, estar y parecer forman predicados nominales con un atributo.",
            "illustration": "solar",
            "prompt": "¿Qué tipo de predicado tiene la oración «El cielo está despejado y azul»?",
            "visual": "🌤️ El cielo [ está despejado y azul ]",
            "options": [
                  "Predicado nominal (con verbo copulativo ser o estar)",
                  "Predicado verbal",
                  "Predicado tácito",
                  "Predicado adverbial"
            ],
            "correctAnswer": "Predicado nominal (con verbo copulativo ser o estar)",
            "hint": "El verbo «está» es copulativo y une el sujeto con sus atributos.",
            "explanation": "¡Brillante! Es un predicado nominal porque usa el verbo copulativo estar."
      },
      {
            "id": "q8_4g_9",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Complemento circunstancial de lugar",
            "readingText": "Responde a la pregunta ¿Dónde se realiza la acción?",
            "illustration": "nature",
            "prompt": "En «Los atletas entrenaron arduamente en el estadio», la frase «en el estadio» funciona como:",
            "visual": "🏟️ entrenaron [ en el estadio ]",
            "options": [
                  "Complemento circunstancial de lugar",
                  "Objeto directo",
                  "Objeto indirecto",
                  "Atributo"
            ],
            "correctAnswer": "Complemento circunstancial de lugar",
            "hint": "Indica el lugar donde entrenaron.",
            "explanation": "¡Excelente! «en el estadio» es un complemento circunstancial de lugar."
      },
      {
            "id": "q8_4g_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Complemento circunstancial de modo",
            "readingText": "Responde a la pregunta ¿Cómo se realiza la acción?",
            "illustration": "book",
            "prompt": "En «La música sonaba suavemente durante la velada», la palabra «suavemente» es un complemento circunstancial de:",
            "visual": "🎻 sonaba [ suavemente ]",
            "options": [
                  "Tiempo",
                  "Lugar",
                  "Modo",
                  "Causa"
            ],
            "correctAnswer": "Modo",
            "hint": "Indica la manera o modo como sonaba la música.",
            "explanation": "¡Fantástico! «suavemente» expresa el modo en que se realizaba la acción."
      }
    ]
  },

  {
    id: 9,
    unitNumber: 4,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 4: Comprensión Lectora',
    title: 'Unidad 4: Comprensión Lectora',
    subtitle: 'Español • Personajes, idea principal, secuencias e inferencias',
    category: 'espanol',
    icon: '📚',
    badgeColor: '#581c87',
    requiredLevel: 8,
    minPassPercent: 70,
    starsReward: 25,
    description: 'Lee historias breves, identifica personajes, reconoce la idea principal, ordena secuencias y realiza inferencias.',
    lesson: {
      title: 'Aprendo con Ari: Secretos de un Gran Lector',
      summary3:
        'Comprender lo que leemos significa imaginar la historia, reconocer a los PERSONAJES, descubrir la IDEA PRINCIPAL (de qué trata el texto) y recordar en qué ORDEN sucedieron los hechos (inicio, nudo y desenlace).',
      summary4:
        'En 4° grado también hacemos INFERENCIAS: descubrimos pistas dentro del texto para deducir información que el autor sugiere (por ejemplo, si un personaje lleva paraguas y botas de agua, inferimos que está lloviendo).',
      steps3: [
        '1️⃣ Lee el texto con calma o presiona «🔊 Escuchar» para seguir la lectura en voz alta.',
        '2️⃣ Identifica quiénes participan (personajes) y dónde ocurre la historia.',
        '3️⃣ Fíjate en el orden de los acontecimientos: qué pasó primero, qué pasó después y cómo terminó.'
      ],
      steps4: [
        '1️⃣ Inferencia lectora: Relaciona las pistas con lo que sabes (ej. reloj solar sin sol no marca la hora).',
        '2️⃣ Propósito y causas: Descubre por qué los personajes actúan (ej. guiar al barco pesquero).',
        '3️⃣ Causa y efecto: Identifica cómo un hecho produce otro (ej. polinización de abejas ➔ frutos y semillas).'
      ],
      exampleVisual3: 'Inicio ➔ Desarrollo ➔ Final',
      exampleVisual4: 'Pistas: Nubes grises + Botas + Paraguas ➔ Inferencia: Lluvia inminente',
      steps: [
        '1️⃣ Lee el texto con calma o presiona «🔊 Escuchar» para seguir la lectura en voz alta.',
        '2️⃣ Identifica quiénes participan (personajes) y dónde ocurre la historia.',
        '3️⃣ Fíjate en el orden de los acontecimientos: qué pasó primero, qué pasó después y cómo terminó.'
      ],
      exampleVisual: 'Inicio ➔ Desarrollo ➔ Final'
    },
    questions: [
      {
        id: 'q9_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'La Linterna de Lucas',
        readingText:
          'Una noche de campamento, el pequeño Lucas y su hermana Valeria escucharon un suave ulular entre los pinos. Al encender su linterna, descubrieron a un simpático búho morado que buscaba sus gafas redondas caídas sobre las hojas.',
        illustration: 'nature',
        prompt: 'Identificar personajes: ¿Quiénes son los dos hermanos protagonistas de la lectura?',
        visual: '🏕️ Personajes del cuento',
        options: ['Lucas y Valeria', 'Pedro y Sofía', 'Mateo y Camila', 'Tomás y Elena'],
        correctAnswer: 'Lucas y Valeria',
        hint: 'Lee la primera oración del cuento.',
        explanation: '¡Muy bien! Los dos hermanos que estaban de campamento son Lucas y Valeria.'
      },
      {
        id: 'q9_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'La Linterna de Lucas',
        readingText:
          'Lucas y Valeria ayudaron al búho a recoger sus gafas de entre las hojas secas. Muy agradecido, el búho les enseñó a reconocer la estrella polar en el cielo nocturno para que siempre supieran orientarse.',
        illustration: 'solar',
        prompt: 'Idea principal: ¿Cuál es la idea principal de este fragmento?',
        visual: '🦉🌟 Amistad y aprendizaje',
        options: [
          'Los niños ayudaron al búho y él les enseñó a ubicar la estrella polar',
          'Los niños perdieron su tienda de campaña en la nieve',
          'El búho se fue a dormir sin encontrar sus gafas',
          'Lucas compró una bicicleta nueva en la ciudad'
        ],
        correctAnswer: 'Los niños ayudaron al búho y él les enseñó a ubicar la estrella polar',
        hint: 'Resume lo que hicieron los niños por el búho y cómo les agradeció él.',
        explanation: '¡Exacto! Esa opción resume la idea principal del relato.'
      },
      {
        id: 'q9_3',
        type: 'reading',
        interactionType: 'ordering',
        readingTitle: 'El Jardín de Girasoles',
        readingText:
          'Primero, Sofía preparó la tierra húmeda en una maceta. Después, sembró tres semillas de girasol y las regó cada mañana. Finalmente, brotaron hermosas flores amarillas que miraban hacia el Sol.',
        illustration: 'nature',
        prompt: 'Identificar secuencias: ¿En qué orden ocurrieron los hechos de la historia?',
        visual: '1° Tierra ➔ 2° Semillas ➔ 3° Flores',
        itemsToOrder: [
          'Brotaron flores amarillas',
          'Preparó la tierra en la maceta',
          'Sembró las semillas y las regó'
        ],
        options: [
          '1° Preparó la tierra | 2° Sembró las semillas | 3° Brotaron flores amarillas',
          '1° Brotaron flores amarillas | 2° Preparó la tierra | 3° Sembró las semillas',
          '1° Sembró las semillas | 2° Brotaron flores amarillas | 3° Preparó la tierra',
          '1° Preparó la tierra | 2° Brotaron flores amarillas | 3° Sembró las semillas'
        ],
        correctAnswer: '1° Preparó la tierra | 2° Sembró las semillas | 3° Brotaron flores amarillas',
        hint: 'Fíjate en los conectores «Primero», «Después» y «Finalmente».',
        explanation: '¡Correcto! Primero preparó la tierra, después sembró las semillas y finalmente brotaron las flores.'
      },
      {
        id: 'q9_4',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Un Día de Lluvia',
        readingText:
          'Antes de salir hacia la escuela, Martín miró por la ventana las nubes grises, se puso sus botas impermeables amarillas y abrió su paraguas en la puerta.',
        illustration: 'water',
        prompt: 'Inferir información: Aunque el texto no lo dice con esas palabras, ¿qué podemos inferir que estaba ocurriendo afuera?',
        visual: '🌧️☂️ Pistas del texto',
        options: [
          'Estaba lloviendo o a punto de llover',
          'Hacía un calor intenso de verano sin nubes',
          'Era medianoche y todos dormían',
          'Estaba dentro de un submarino en el mar'
        ],
        correctAnswer: 'Estaba lloviendo o a punto de llover',
        hint: 'Observa las pistas: nubes grises, botas impermeables y paraguas abierto.',
        explanation: '¡Excelente inferencia! Las nubes grises, las botas y el paraguas indican lluvia.'
      },
      {
        id: 'q9_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Los Delfines Exploradores',
        readingText:
          'Los delfines son mamíferos marinos muy inteligentes que viven en grupos llamados manadas y se comunican mediante silbidos y chasquidos bajo el agua.',
        illustration: 'ocean',
        prompt: 'Información explícita: ¿Es Verdadero o Falso que los delfines viven en grupos y se comunican mediante sonidos bajo el agua?',
        visual: '🐬 Comunicación marina',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Revisa el texto: menciona que viven en grupos y usan silbidos bajo el agua.',
        explanation: '¡Brillante! Es Verdadero según la información explícita de la lectura.'
      },
{
            "id": "q9_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "El Secreto del Río",
            "readingText": "Los animales del bosque se reunían al atardecer para escuchar el rumor del agua y compartir historias sobre las montañas lejanas.",
            "illustration": "nature",
            "prompt": "Según el texto, ¿en qué momento del día se reunían los animales?",
            "visual": "🌅 Animales junto al río",
            "options": [
                  "Al amanecer",
                  "Al atardecer",
                  "A medianoche",
                  "Al mediodía"
            ],
            "correctAnswer": "Al atardecer",
            "hint": "El texto indica: «se reunían al atardecer».",
            "explanation": "¡Exacto! El relato dice expresamente que se reunían al atardecer."
      },
      {
            "id": "q9_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "La brújula de Lucas",
            "readingText": "Lucas guardaba en su bolsillo una pequeña brújula dorada que le regaló su abuelo antes de iniciar el viaje.",
            "illustration": "nature",
            "prompt": "¿De qué color era la brújula de Lucas según la lectura?",
            "visual": "🧭 Brújula [ ? ] de Lucas",
            "inputPlaceholder": "Escribe el color...",
            "options": [
                  "plateada",
                  "dorada",
                  "azul",
                  "verde"
            ],
            "correctAnswer": "dorada",
            "hint": "El texto dice: «una pequeña brújula dorada».",
            "explanation": "¡Muy bien! La brújula era dorada."
      },
      {
            "id": "q9_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "El hogar del búho Ari",
            "readingText": "En lo más alto del bosque, un búho sabio observaba todo desde las ramas protectoras de un viejo árbol centenario.",
            "illustration": "nature",
            "prompt": "Completa la frase: «El búho Ari vivía en lo alto de un viejo ______»",
            "visual": "🦉 El búho Ari en un viejo [ ______ ]",
            "options": [
                  "pino",
                  "roble",
                  "sauce",
                  "eucalipto"
            ],
            "correctAnswer": "roble",
            "hint": "El árbol protector del bosque es el roble.",
            "explanation": "¡Excelente! Ari habita en la cima del viejo roble."
      },
      {
            "id": "q9_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Inferencia de emociones",
            "readingText": "Antes de subir al escenario, Camila sentía mariposas en el estómago y sus manos temblaban un poquito de alegría.",
            "illustration": "book",
            "prompt": "A partir del texto, podemos deducir que Camila estaba:",
            "visual": "🎭 Emociones del personaje",
            "options": [
                  "Enojada",
                  "Emocionada y un poco nerviosa",
                  "Aburrida",
                  "Dormida"
            ],
            "correctAnswer": "Emocionada y un poco nerviosa",
            "hint": "Sentir mariposas y temblor leve suele acompañar a la emoción y los nervios.",
            "explanation": "¡Genial! El texto describe los síntomas típicos de la emoción antes de una presentación."
      },
      {
            "id": "q9_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "El mensaje de la fábula",
            "readingText": "Al final de la historia, la liebre aprendió que la constancia y el esfuerzo valen más que la rapidez sin disciplina.",
            "illustration": "book",
            "prompt": "¿Cuál es la enseñanza o moraleja principal de esta historia?",
            "visual": "🐢 Constancia frente a la vanidad",
            "options": [
                  "El esfuerzo y la constancia nos llevan al éxito",
                  "Es mejor correr muy rápido y dormir",
                  "No vale la pena competir",
                  "Los animales no aprenden lecciones"
            ],
            "correctAnswer": "El esfuerzo y la constancia nos llevan al éxito",
            "hint": "La constancia permite alcanzar las metas sin rendirse.",
            "explanation": "¡Perfecto! La moraleja resalta el valor del esfuerzo constante."
      }
    ],
    questionsGrade4: [
      {
        id: 'q9_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'El Faro de Isla Niebla (4° grado)',
        readingText:
          'Durante una tormenta de otoño, la joven guardiana Helena y su abuelo Simón subieron los cien escalones del antiguo faro para limpiar el espejo principal y guiar a un barco pesquero hacia el puerto seguro.',
        illustration: 'ocean',
        prompt: 'Identificar personajes y propósito: ¿Por qué subieron Helena y su abuelo Simón hasta la cima del faro?',
        visual: '🗼⛵ Misión en el faro',
        options: [
          'Para limpiar el espejo del faro y guiar al barco pesquero hacia el puerto',
          'Para pescar cangrejos desde la ventana más alta',
          'Para esconderse de los marineros del puerto',
          'Para pintar las paredes exteriores bajo la lluvia'
        ],
        correctAnswer: 'Para limpiar el espejo del faro y guiar al barco pesquero hacia el puerto',
        hint: 'Revisa qué hicieron en la cima del faro y a quién querían ayudar.',
        explanation: '¡Muy bien! Subieron para que la luz del faro guiara al barco pesquero en medio de la tormenta.'
      },
      {
        id: 'q9_4g_2',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'El Reloj Solar del Abuelo',
        readingText:
          'En el patio de la escuela antigua había un reloj de piedra que no tenía agujas ni baterías. Solo funcionaba cuando el cielo estaba despejado, proyectando la sombra de una varilla metálica sobre los números grabados.',
        illustration: 'solar',
        prompt: 'Inferir información (4° grado): ¿Por qué el reloj de piedra no podía marcar la hora durante una noche nublada?',
        visual: '☀️🕰️ Inferencia lectora',
        options: [
          'Porque necesitaba la luz del Sol para proyectar la sombra sobre los números',
          'Porque alguien le había quitado las baterías eléctricas',
          'Porque las agujas de plástico se derretían con el frío',
          'Porque los números se borraban cada noche'
        ],
        correctAnswer: 'Porque necesitaba la luz del Sol para proyectar la sombra sobre los números',
        hint: 'Piensa qué produce la sombra de la varilla metálica cuando el cielo está despejado.',
        explanation: '¡Excelente inferencia! Un reloj solar depende de la luz del Sol para proyectar sombra.'
      },
      {
        id: 'q9_4g_3',
        type: 'reading',
        interactionType: 'ordering',
        readingTitle: 'El Experimento del Volcán Escolar',
        readingText:
          'Para la feria científica, Camila primero moldeó un cono de arcilla sobre una tabla. Luego colocó bicarbonato y colorante rojo en el cráter. Por último, agregó vinagre y observó cómo salía espuma brillante.',
        illustration: 'book',
        prompt: 'Secuencia narrativa en 4° grado: Ordena los tres pasos que realizó Camila en su experimento:',
        visual: '1° Arcilla ➔ 2° Bicarbonato ➔ 3° Espuma con vinagre',
        itemsToOrder: [
          'Agregó vinagre y salió espuma',
          'Moldeó el cono de arcilla',
          'Colocó bicarbonato y colorante rojo'
        ],
        options: [
          '1° Moldeó el cono de arcilla | 2° Colocó bicarbonato y colorante | 3° Agregó vinagre y salió espuma',
          '1° Agregó vinagre y salió espuma | 2° Moldeó el cono de arcilla | 3° Colocó bicarbonato y colorante',
          '1° Colocó bicarbonato y colorante | 2° Agregó vinagre y salió espuma | 3° Moldeó el cono de arcilla',
          '1° Moldeó el cono de arcilla | 2° Agregó vinagre y salió espuma | 3° Colocó bicarbonato y colorante'
        ],
        correctAnswer: '1° Moldeó el cono de arcilla | 2° Colocó bicarbonato y colorante | 3° Agregó vinagre y salió espuma',
        hint: 'Sigue los conectores temporales: «primero», «luego» y «por último».',
        explanation: '¡Correcto! Ese es el orden cronológico exacto del experimento.'
      },
      {
        id: 'q9_4g_4',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'El Bosque de Niebla',
        readingText:
          'Los bosques de niebla de alta montaña atrapan el agua de las nubes en sus musgos y la liberan poco a poco hacia los ríos que abastecen a los pueblos cercanos.',
        illustration: 'nature',
        prompt: 'Idea principal (4° grado): ¿Cuál es la idea principal del párrafo anterior?',
        visual: '🌲💧 Importancia del bosque de niebla',
        options: [
          'Los bosques de niebla capturan agua de las nubes y alimentan los ríos de los pueblos',
          'En las montañas altas nunca existen nubes ni musgos',
          'Los ríos nacen únicamente en medio del desierto',
          'Los musgos impiden que el agua llegue a los ríos'
        ],
        correctAnswer: 'Los bosques de niebla capturan agua de las nubes y alimentan los ríos de los pueblos',
        hint: 'Identifica la función ecológica principal que cumple el bosque de niebla.',
        explanation: '¡Exacto! Esa oración sintetiza la idea central del texto.'
      },
      {
        id: 'q9_4g_5',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Causa y Efecto en la Lectura',
        readingText:
          'Como las abejas transportan el polen de una flor a otra mientras buscan néctar, muchas plantas pueden producir frutos y semillas.',
        illustration: 'nature',
        prompt: 'Relación causa-efecto: ¿Es Verdadero o Falso que el transporte de polen por las abejas permite que muchas plantas produzcan frutos y semillas?',
        visual: '🐝🌸 Polinización y frutos',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Observa el conector de causa «Como...» al inicio de la oración.',
        explanation: '¡Brillante! La polinización de las abejas es la causa de que muchas plantas den frutos.'
      },
{
            "id": "q9_4g_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Ecosistemas de manglar",
            "readingText": "Los manglares protegen las costas tropicales porque sus intrincadas raíces retienen los sedimentos y disipan la fuerza del oleaje durante tormentas severas.",
            "illustration": "nature",
            "prompt": "¿Cuál es la idea principal del párrafo sobre los manglares?",
            "visual": "🌊 Función protectora de los manglares",
            "options": [
                  "Los manglares son peligrosos",
                  "Los manglares protegen las costas reteniendo sedimentos y reduciendo el oleaje",
                  "Las olas destruyen todos los árboles",
                  "Los sedimentos no sirven"
            ],
            "correctAnswer": "Los manglares protegen las costas reteniendo sedimentos y reduciendo el oleaje",
            "hint": "Sintetiza la función protectora explicada en el texto.",
            "explanation": "¡Exacto! El texto destaca su función de defensa costera."
      },
      {
            "id": "q9_4g_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Inferencia meteorológica",
            "readingText": "El cielo se tornó plomizo, un viento gélido sopló desde la cordillera y las aves buscaron refugio en sus nidos.",
            "illustration": "nature",
            "prompt": "A partir de las pistas del texto, inferimos que se aproxima una:",
            "visual": "☁️ Cielo plomizo ➔ [ ? ]",
            "inputPlaceholder": "Escribe el fenómeno...",
            "options": [
                  "ola de calor",
                  "tormenta",
                  "sequía",
                  "primavera"
            ],
            "correctAnswer": "tormenta",
            "hint": "Cielo oscuro, viento frío y aves buscando nido anuncian tormenta.",
            "explanation": "¡Muy bien! Las evidencias sensoriales indican la llegada de una tormenta."
      },
      {
            "id": "q9_4g_8",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Relación causa y efecto",
            "readingText": "Debido a la ausencia prolongada de precipitaciones en la cuenca, el nivel del embalse se redujo a la mitad.",
            "illustration": "nature",
            "prompt": "Identifica la relación de causa y efecto en el texto:",
            "visual": "📉 Sequía ➔ Disminución del embalse",
            "options": [
                  "Causa: ausencia de precipitaciones | Efecto: reducción del embalse",
                  "Causa: reducción del embalse | Efecto: ausencia de lluvias",
                  "Causa: el calor del verano | Efecto: aumento de agua",
                  "Causa: el embalse | Efecto: las nubes"
            ],
            "correctAnswer": "Causa: ausencia de precipitaciones | Efecto: reducción del embalse",
            "hint": "El conector «Debido a» introduce la causa directa.",
            "explanation": "¡Brillante! La falta de lluvia (causa) provocó la baja del embalse (efecto)."
      },
      {
            "id": "q9_4g_9",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Vocabulario en contexto",
            "readingText": "La bióloga examinó minuciosamente las alas de la mariposa bajo el microscopio electrónico.",
            "illustration": "nature",
            "prompt": "En el contexto de la lectura, la palabra «minuciosamente» significa:",
            "visual": "🔬 examinó [ minuciosamente ]",
            "options": [
                  "con gran detalle y cuidado",
                  "a toda prisa sin mirar",
                  "con miedo",
                  "de manera descuidada"
            ],
            "correctAnswer": "con gran detalle y cuidado",
            "hint": "Mirar con microscopio requiere máxima atención a los detalles.",
            "explanation": "¡Excelente! Minuciosamente significa con profundo detalle y detenimiento."
      },
      {
            "id": "q9_4g_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Hechos versus opiniones",
            "readingText": "La temperatura media del planeta ha subido 1,1 °C desde la era preindustrial, lo cual algunos consideran el reto más urgente de nuestro siglo.",
            "illustration": "solar",
            "prompt": "¿Cuál de las siguientes afirmaciones es un HECHO comprobable y no una opinión?",
            "visual": "📊 Datos objetivos vs juicios personales",
            "options": [
                  "La temperatura media del planeta ha subido 1,1 °C",
                  "La ciencia es la materia más divertida de todas",
                  "Todos los científicos son personas amables",
                  "El calor del verano es el mejor clima posible"
            ],
            "correctAnswer": "La temperatura media del planeta ha subido 1,1 °C",
            "hint": "Un hecho se puede verificar con mediciones e instrumentos científicos.",
            "explanation": "¡Fantástico! La subida de 1,1 °C es un dato empírico y verificable."
      }
    ]
  },

  {
    id: 10,
    unitNumber: 5,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 5: Textos Expositivos',
    title: 'Unidad 5: Textos Expositivos',
    subtitle: 'Español • Lecturas interactivas sobre ciencia y naturaleza (Lectura libre abierta)',
    category: 'espanol',
    icon: '📖',
    badgeColor: '#9333ea',
    requiredLevel: null,
    minPassPercent: 70,
    starsReward: 30,
    isInteractiveExpositiveUnit: true,
    description: 'Explora textos informativos con portada ilustrada, fragmentos navegables, palabras resaltadas, audio y evaluación.',
    lesson: {
      title: 'Aprendo con Ari: ¿Qué es un Texto Expositivo?',
      summary3:
        'Un TEXTO EXPOSITIVO es una lectura que nos explica información real y verdadera sobre temas de la ciencia, el universo, los animales, el cuerpo humano o la naturaleza.',
      summary4:
        'En 4° grado analizamos la estructura de los textos expositivos: TÍTULO (indica el tema), INTRODUCCIÓN (presenta de qué trata), DESARROLLO (explica datos y conceptos clave) y CONCLUSIÓN.',
      steps3: [
        '1️⃣ Explora la portada ilustrada y presiona «📖 Comenzar a leer» para recorrer los fragmentos interactivos.',
        '2️⃣ Toca las palabras resaltadas para ver su significado y responde la pregunta de exploración.',
        '3️⃣ Al finalizar la lectura, demuestra tu comprensión en las 5 actividades.'
      ],
      steps4: [
        '1️⃣ Estructura: Introducción (presenta el tema), Desarrollo (explica datos) y Conclusión (resume ideas).',
        '2️⃣ Rigor científico: Información verídica y objetiva (ej. 4 planetas rocosos y 4 gigantes gaseosos).',
        '3️⃣ Comprensión de conceptos: Procesos naturales como la fotosíntesis (liberación de oxígeno) o cadenas tróficas.'
      ],
      exampleVisual3: '☀️🪐 El Sistema Solar • 🌊 Ciclo del Agua • 🐝 Animales',
      exampleVisual4: 'Introducción ➔ Desarrollo con datos ➔ Conclusión objetiva | Fotosíntesis y Ecosistemas',
      steps: [
        '1️⃣ Explora la portada ilustrada y presiona «📖 Comenzar a leer» para recorrer los fragmentos interactivos.',
        '2️⃣ Toca las palabras resaltadas para ver su significado y responde la pregunta de exploración.',
        '3️⃣ Al finalizar la lectura, demuestra tu comprensión en las 5 actividades.'
      ],
      exampleVisual: '☀️🪐 El Sistema Solar • 🌊 Ciclo del Agua • 🐝 Animales'
    },
    questions: [
      {
        id: 'q10_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'El Sistema Solar',
        readingText:
          'El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas.',
        illustration: 'solar',
        prompt: '¿Cuál es el tema del texto?',
        visual: '☀️🪐🌍 El Sistema Solar',
        options: ['Los planetas', 'Los animales', 'Las plantas', 'Los deportes'],
        correctAnswer: 'Los planetas',
        hint: 'El texto explica cómo está formado el Sistema Solar y sus ocho planetas.',
        explanation: '¡Excelente! El texto trata sobre el Sistema Solar y los planetas.'
      },
      {
        id: 'q10_2',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'El Sistema Solar',
        readingText:
          'El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas. Marte es conocido como el planeta rojo.',
        illustration: 'solar',
        prompt: '¿Es Verdadero o Falso que el Sistema Solar tiene ocho planetas que giran alrededor del Sol?',
        visual: '🪐 8 Planetas alrededor del Sol',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Lee la primera oración del texto expositivo.',
        explanation: '¡Correcto! El Sistema Solar está formado por el Sol y ocho planetas.'
      },
      {
        id: 'q10_3',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'El Ciclo del Agua',
        readingText:
          'El calor del Sol evapora el agua de los océanos y ríos. El vapor sube al cielo, forma las nubes y luego cae como lluvia.',
        illustration: 'water',
        prompt: 'Completa la palabra clave: El calor del ______ evapora el agua de los océanos y ríos.',
        visual: '☀️ El calor del [ ______ ] evapora el agua.',
        inputPlaceholder: 'Escribe la palabra...',
        options: ['Sol', 'viento', 'hielo', 'bosque'],
        correctAnswer: 'Sol',
        hint: 'Es la estrella que nos da luz y calor cada día.',
        explanation: '¡Muy bien! El calor del Sol calienta y evapora el agua.'
      },
      {
        id: 'q10_4',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Animales, Plantas y Medio Ambiente',
        readingText:
          'Las abejas recolectan néctar de las flores, las plantas realizan la fotosíntesis con la luz solar y los delfines son mamíferos marinos vertebrados.',
        illustration: 'nature',
        prompt: 'Relaciona cada concepto del texto expositivo con su definición correcta:',
        visual: '🐝 Abejas | 🌱 Plantas | 🐬 Delfines',
        options: [
          'Abejas: polinizan flores | Plantas: hacen fotosíntesis | Delfines: mamíferos marinos',
          'Abejas: mamíferos marinos | Plantas: polinizan flores | Delfines: hacen fotosíntesis',
          'Abejas: hacen fotosíntesis | Plantas: mamíferos marinos | Delfines: polinizan flores',
          'Abejas: viven en el mar | Plantas: no usan luz solar | Delfines: son insectos'
        ],
        correctAnswer: 'Abejas: polinizan flores | Plantas: hacen fotosíntesis | Delfines: mamíferos marinos',
        hint: 'Las abejas visitan las flores, las plantas hacen fotosíntesis y los delfines viven en el mar.',
        explanation: '¡Exacto! Relacionaste correctamente los tres conceptos científicos.'
      },
      {
        id: 'q10_5',
        type: 'reading',
        interactionType: 'ordering',
        readingTitle: 'Etapas del Ciclo del Agua',
        readingText:
          'En la naturaleza el agua sigue un orden: 1° Evaporación con el calor del Sol, 2° Condensación al formar las nubes y 3° Precipitación cuando cae como lluvia.',
        illustration: 'water',
        prompt: 'Ordena los acontecimientos del ciclo del agua del primero al último:',
        visual: '☀️ Evaporación ➔ ☁️ Condensación ➔ 🌧️ Precipitación',
        itemsToOrder: ['3° Precipitación', '1° Evaporación', '2° Condensación'],
        options: [
          '1° Evaporación - 2° Condensación - 3° Precipitación',
          '1° Precipitación - 2° Evaporación - 3° Condensación',
          '1° Condensación - 2° Precipitación - 3° Evaporación',
          '1° Evaporación - 2° Precipitación - 3° Condensación'
        ],
        correctAnswer: '1° Evaporación - 2° Condensación - 3° Precipitación',
        hint: 'Primero el agua sube como vapor (Evaporación), luego forma nubes (Condensación) y al final llueve (Precipitación).',
        explanation: '¡Brillante! El orden del ciclo del agua es Evaporación, Condensación y Precipitación.'
      },
{
            "id": "q10_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Información científica",
            "readingText": "Las abejas melíferas transportan polen en unas estructuras llamadas corbículas situadas en sus patas traseras.",
            "illustration": "nature",
            "prompt": "¿Por qué este fragmento pertenece a un texto expositivo?",
            "visual": "🐝 Datos sobre las abejas",
            "options": [
                  "Porque brinda información real y datos científicos objetivos",
                  "Porque cuenta una historia fantástica inventada",
                  "Porque es un poema con rima y estrofas",
                  "Porque expresa los sentimientos de la abeja"
            ],
            "correctAnswer": "Porque brinda información real y datos científicos objetivos",
            "hint": "Los textos expositivos explican la realidad con datos verdaderos.",
            "explanation": "¡Exacto! Comunica información real, comprobable y objetiva."
      },
      {
            "id": "q10_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "Partes del texto expositivo",
            "readingText": "La estructura clásica de un texto explicativo comprende introducción, desarrollo y conclusión.",
            "illustration": "book",
            "prompt": "¿Cómo se llama la sección final donde se resumen las ideas clave del tema?",
            "visual": "📑 Estructura: Introducción ➔ Desarrollo ➔ [ ? ]",
            "inputPlaceholder": "Escribe la parte final...",
            "options": [
                  "título",
                  "conclusión",
                  "introducción",
                  "glosario"
            ],
            "correctAnswer": "conclusión",
            "hint": "Es el cierre o desenlace explicativo: la conclusión.",
            "explanation": "¡Muy bien! La conclusión sintetiza y cierra el tema."
      },
      {
            "id": "q10_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Conectores de orden",
            "readingText": "Para explicar etapas sucesivas de un proceso, usamos conectores de orden.",
            "illustration": "nature",
            "prompt": "Completa la secuencia: «______ el agua líquida se calienta con el sol; luego se evapora hacia el cielo.»",
            "visual": "💧 [ ______ ] el agua se calienta; luego...",
            "options": [
                  "Primero",
                  "Pero",
                  "Aunque",
                  "Sin embargo"
            ],
            "correctAnswer": "Primero",
            "hint": "Indica el comienzo de una secuencia temporal.",
            "explanation": "¡Excelente! «Primero» marca el inicio del proceso de evaporación."
      },
      {
            "id": "q10_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Propósito comunicativo",
            "readingText": "Los textos expositivos se publican en enciclopedias, manuales y revistas científicas.",
            "illustration": "book",
            "prompt": "¿Cuál es el objetivo principal de los textos expositivos?",
            "visual": "📚 Función informativa",
            "options": [
                  "Informar y explicar un tema con claridad",
                  "Hacer reír con chistes graciosos",
                  "Convencer de comprar un videojuego",
                  "Cantar canciones con rima"
            ],
            "correctAnswer": "Informar y explicar un tema con claridad",
            "hint": "Su misión es transmitir conocimientos de manera comprensible.",
            "explanation": "¡Genial! Su propósito primordial es informar y enseñar."
      },
      {
            "id": "q10_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Uso de subtítulos",
            "readingText": "En un libro sobre volcanes encontramos subtítulos como «Tipos de lava» y «Zonas activas».",
            "illustration": "solar",
            "prompt": "¿Para qué se utilizan los subtítulos en un texto expositivo?",
            "visual": "🌋 Subtítulos organizadores",
            "options": [
                  "Para organizar la información en temas específicos y facilitar la lectura",
                  "Para cambiar el título del libro por completo",
                  "Para dibujar adornos sin importancia",
                  "Para firmar el autor de la página"
            ],
            "correctAnswer": "Para organizar la información en temas específicos y facilitar la lectura",
            "hint": "Guían al lector dividiendo el contenido en secciones claras.",
            "explanation": "¡Perfecto! Los subtítulos ordenan el texto y ayudan a encontrar información rápida."
      }
    ],
    questionsGrade4: [
      {
        id: 'q10_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Estructura del Texto Expositivo (4° grado)',
        readingText:
          'El Sistema Solar está formado por una estrella central llamada Sol y ocho planetas que giran en órbitas elípticas a su alrededor: cuatro rocosos interiores y cuatro gigantes exteriores.',
        illustration: 'solar',
        prompt: 'Según el texto expositivo de 4° grado, ¿cómo se clasifican los ocho planetas del Sistema Solar?',
        visual: '☀️🪐 4 Rocosos + 4 Gigantes',
        options: [
          'En cuatro planetas rocosos interiores y cuatro gigantes exteriores',
          'En ocho estrellas calientes que emiten luz propia',
          'En cometas de hielo que no giran alrededor del Sol',
          'En dos planetas pequeños y seis satélites artificiales'
        ],
        correctAnswer: 'En cuatro planetas rocosos interiores y cuatro gigantes exteriores',
        hint: 'Revisa la última parte del fragmento sobre la clasificación de los planetas.',
        explanation: '¡Excelente! Los ocho planetas se dividen en cuatro rocosos interiores y cuatro gigantes exteriores.'
      },
      {
        id: 'q10_4g_2',
        type: 'reading',
        interactionType: 'true_false',
        readingTitle: 'Propósito del Texto Expositivo',
        readingText:
          'Los textos expositivos utilizan un lenguaje claro y objetivo para explicar hechos científicos reales, sin inventar personajes fantásticos.',
        illustration: 'book',
        prompt: '¿Es Verdadero o Falso que la función principal de un texto expositivo es informar y explicar un tema real de forma objetiva?',
        visual: '📖 Información científica y objetiva',
        options: ['Verdadero', 'Falso'],
        correctAnswer: 'Verdadero',
        hint: 'Los textos expositivos explican datos reales de ciencia, historia o naturaleza.',
        explanation: '¡Correcto! Su propósito es explicar información verídica con claridad.'
      },
      {
        id: 'q10_4g_3',
        type: 'reading',
        interactionType: 'fill_blank',
        readingTitle: 'La Fotosíntesis en las Plantas',
        readingText:
          'Mediante el proceso de la fotosíntesis, las hojas de las plantas absorben dióxido de carbono y luz solar para producir su alimento y liberar oxígeno al aire.',
        illustration: 'nature',
        prompt: 'Completa el término científico: Gracias a la fotosíntesis, las plantas liberan ______ al aire que respiramos.',
        visual: '🌱 Luz solar ➔ Fotosíntesis ➔ [ ______ ]',
        inputPlaceholder: 'Escribe el gas vital...',
        options: ['oxígeno', 'humo', 'petróleo', 'carbón'],
        correctAnswer: 'oxígeno',
        hint: 'Es el gas indispensable que producen las plantas y que necesitamos para respirar.',
        explanation: '¡Muy bien! Las plantas liberan oxígeno durante la fotosíntesis.'
      },
      {
        id: 'q10_4g_4',
        type: 'reading',
        interactionType: 'matching',
        readingTitle: 'Partes de un Texto Expositivo (4° grado)',
        readingText:
          'Un texto expositivo bien organizado tiene tres partes: Introducción (presenta el tema), Desarrollo (explica datos y ejemplos) y Conclusión (resume las ideas principales).',
        illustration: 'book',
        prompt: 'Relaciona cada parte de la estructura del texto expositivo con su función:',
        visual: 'Introducción ➔ Desarrollo ➔ Conclusión',
        options: [
          'Introducción: presenta el tema | Desarrollo: explica datos | Conclusión: resume ideas',
          'Introducción: resume ideas | Desarrollo: presenta el tema | Conclusión: explica datos',
          'Introducción: explica datos | Desarrollo: resume ideas | Conclusión: presenta el tema',
          'Introducción: cuenta un chiste | Desarrollo: inventa magia | Conclusión: oculta el tema'
        ],
        correctAnswer: 'Introducción: presenta el tema | Desarrollo: explica datos | Conclusión: resume ideas',
        hint: 'Al inicio se presenta el tema, en el medio se desarrolla y al final se concluye.',
        explanation: '¡Exacto! Dominas la estructura de los textos expositivos de 4° grado.'
      },
      {
        id: 'q10_4g_5',
        type: 'reading',
        interactionType: 'ordering',
        readingTitle: 'Cadena Alimentaria en el Ecosistema',
        readingText:
          'En un ecosistema natural la energía pasa en orden: 1° Productores (plantas que fabrican su alimento), 2° Consumidores herbívoros (animales que comen plantas) y 3° Descomponedores (hongos que reciclan nutrientes).',
        illustration: 'nature',
        prompt: 'Ordena los niveles de la cadena alimentaria explicados en el texto expositivo:',
        visual: '🌱 Productores ➔ 🦌 Herbívoros ➔ 🍄 Descomponedores',
        itemsToOrder: ['3° Descomponedores', '1° Productores', '2° Consumidores herbívoros'],
        options: [
          '1° Productores - 2° Consumidores herbívoros - 3° Descomponedores',
          '1° Descomponedores - 2° Productores - 3° Consumidores herbívoros',
          '1° Consumidores herbívoros - 2° Descomponedores - 3° Productores',
          '1° Productores - 2° Descomponedores - 3° Consumidores herbívoros'
        ],
        correctAnswer: '1° Productores - 2° Consumidores herbívoros - 3° Descomponedores',
        hint: 'Comienza por las plantas (Productores), sigue con los herbívoros y termina con los descomponedores.',
        explanation: '¡Brillante! Ese es el orden de la energía en el ecosistema.'
      },
      {
            "id": "q10_4g_6",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Conectores de causa",
            "readingText": "Los conectores causales explican el motivo o razón por el cual sucede un fenómeno.",
            "illustration": "book",
            "prompt": "¿Cuál de los siguientes es un conector de causa?",
            "visual": "🔗 Conectores causales",
            "options": [
                  "ya que",
                  "por lo tanto",
                  "en primer lugar",
                  "finalmente"
            ],
            "correctAnswer": "ya que",
            "hint": "Explica el porqué: porque, ya que, puesto que.",
            "explanation": "¡Exacto! «ya que» es un conector de causa."
      },
      {
            "id": "q10_4g_7",
            "type": "reading",
            "interactionType": "fill_blank",
            "readingTitle": "La introducción formal",
            "readingText": "La primera sección de un artículo expositivo presenta el tema, los objetivos y la importancia del estudio.",
            "illustration": "book",
            "prompt": "¿Cómo se llama la sección que presenta y delimita el tema al lector?",
            "visual": "📖 Sección inicial: [ ? ]",
            "inputPlaceholder": "Escribe el nombre de la sección...",
            "options": [
                  "introducción",
                  "conclusión",
                  "bibliografía",
                  "anexo"
            ],
            "correctAnswer": "introducción",
            "hint": "Es la parte introductoria: introducción.",
            "explanation": "¡Muy bien! La introducción presenta y contextualiza el tema."
      },
      {
            "id": "q10_4g_8",
            "type": "reading",
            "interactionType": "drag_drop",
            "readingTitle": "Recursos visuales de apoyo",
            "readingText": "Las infografías, esquemas y tablas sintetizan datos complejos.",
            "illustration": "solar",
            "prompt": "En un informe climático, una gráfica con la evolución de la temperatura funciona como:",
            "visual": "📈 Gráfica de temperaturas ➔ [ ______ ]",
            "options": [
                  "Recurso visual de apoyo explicativo",
                  "Distractor sin utilidad",
                  "Cuento de ficción",
                  "Opinión personal del autor"
            ],
            "correctAnswer": "Recurso visual de apoyo explicativo",
            "hint": "Complementa visualmente los datos explicados en el texto.",
            "explanation": "¡Brillante! Apoya y hace comprensible la información numérica."
      },
      {
            "id": "q10_4g_9",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Registro y lenguaje formal",
            "readingText": "Los textos expositivos se caracterizan por el rigor léxico y la precisión terminológica.",
            "illustration": "book",
            "prompt": "¿Qué rasgo lingüístico predomina en los textos expositivos formales?",
            "visual": "🔬 Rasgos lingüísticos expositivos",
            "options": [
                  "Uso de verbos en tercera persona y vocabulario técnico preciso",
                  "Uso de exageraciones y frases poéticas con rima",
                  "Uso de preguntas confusas sin responder",
                  "Uso de diálogos entre personajes imaginarios"
            ],
            "correctAnswer": "Uso de verbos en tercera persona y vocabulario técnico preciso",
            "hint": "Predomina la objetividad, la tercera persona y la exactitud conceptual.",
            "explanation": "¡Excelente! El rigor técnico y la tercera persona aseguran neutralidad y claridad."
      },
      {
            "id": "q10_4g_10",
            "type": "reading",
            "interactionType": "multiple_choice",
            "readingTitle": "Conectores de consecuencia",
            "readingText": "Los conectores consecutivos expresan el efecto derivado de una acción previa.",
            "illustration": "solar",
            "prompt": "En «El vapor se condensó; por consiguiente, se formaron gotas de lluvia», el conector expresa:",
            "visual": "💧 Condensación ➔ [ por consiguiente ] ➔ Lluvia",
            "options": [
                  "Consecuencia",
                  "Causa",
                  "Oposición",
                  "Condición"
            ],
            "correctAnswer": "Consecuencia",
            "hint": "«Por consiguiente» introduce el efecto o resultado.",
            "explanation": "¡Fantástico! «por consiguiente» expresa la consecuencia de la condensación."
      }
    ]
  }
];

export function getQuestionsForLevel(level, grade = '3', options = {}) {
  if (!level) return [];
  const pool =
    String(grade) === '4' && Array.isArray(level.questionsGrade4) && level.questionsGrade4.length > 0
      ? level.questionsGrade4
      : level.questions || [];

  if (options.count || options.shuffle) {
    const count = Number(options.count) || 5;
    const excludeIds = Array.isArray(options.excludeIds) ? options.excludeIds : [];

    // Separar en preguntas no vistas en el último intento (fresh) y ya vistas (seen)
    const fresh = pool.filter((q) => !excludeIds.includes(q.id));
    const seen = pool.filter((q) => excludeIds.includes(q.id));

    const shuffleArray = (arr) => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const shuffledFresh = shuffleArray(fresh);
    const shuffledSeen = shuffleArray(seen);

    // Priorizar preguntas no vistas en la sesión anterior para evitar repetición
    const picked = [...shuffledFresh, ...shuffledSeen].slice(0, count);

    return picked.map((q) => {
      if (
        !Array.isArray(q.options) ||
        q.interactionType === 'ordering' ||
        q.interactionType === 'matching' ||
        q.interactionType === 'true_false'
      ) {
        return { ...q };
      }
      return {
        ...q,
        options: shuffleArray(q.options)
      };
    });
  }

  return pool;
}

export const CATEGORIES = [
  { id: 'todas', label: 'Todas las Materias', icon: '🌟', color: '#7251B5' },
  { id: 'matematicas', label: 'Matemáticas (5 Unidades)', icon: '➕', color: '#22c55e' },
  { id: 'espanol', label: 'Español (5 Unidades)', icon: '📖', color: '#9333ea' }
];

export const ACHIEVEMENTS_DATA = [
  {
    id: 'primeros_pasos',
    title: 'Primeros pasos',
    subtitle: 'Medalla Explorador',
    description: 'Completa tu primera unidad en Aprendiendo con Ari.',
    icon: '🏅'
  },
  {
    id: 'experto_sumas',
    title: 'Experto en sumas',
    subtitle: 'Matemáticas • Unidad 1',
    description: 'Supera la Unidad 1 de Matemáticas: Sumas.',
    icon: '➕'
  },
  {
    id: 'maestro_restas',
    title: 'Maestro de las restas',
    subtitle: 'Matemáticas • Unidad 2',
    description: 'Supera la Unidad 2 de Matemáticas: Restas.',
    icon: '➖'
  },
  {
    id: 'rey_multiplicaciones',
    title: 'Rey de las multiplicaciones',
    subtitle: 'Matemáticas • Unidad 3',
    description: 'Supera la Unidad 3 de Matemáticas: Multiplicaciones.',
    icon: '✖️'
  },
  {
    id: 'experto_divisiones',
    title: 'Experto en divisiones',
    subtitle: 'Matemáticas • Unidad 4',
    description: 'Supera la Unidad 4 de Matemáticas: Divisiones.',
    icon: '➗'
  },
  {
    id: 'explorador_palabras',
    title: 'Explorador de palabras',
    subtitle: 'Español • Gramática',
    description: 'Supera una unidad de Verbos, Sujeto o Predicado en Español.',
    icon: '🔤'
  },
  {
    id: 'lector_curioso',
    title: 'Lector curioso',
    subtitle: 'Español • Textos Expositivos',
    description: 'Completa la unidad de Textos Expositivos Interactivos.',
    icon: '📖'
  },
  {
    id: 'campeon_comprension',
    title: 'Campeón de la comprensión',
    subtitle: 'Español • Lectura',
    description: 'Supera Comprensión Lectora o consigue 3 estrellas (100%) en Español.',
    icon: '🌟'
  },
  {
    id: 'superestudiante',
    title: 'Superestudiante',
    subtitle: 'Graduado de Ari',
    description: 'Completa todas las unidades de Matemáticas y Español.',
    icon: '🎓'
  }
];
