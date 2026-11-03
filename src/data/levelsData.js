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
      }
    ],
    questionsGrade4: [
      {
        id: 'q1_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: '¡Muy bien! En 4° grado sumamos cantidades de mayor magnitud.',
        prompt: '245 + 132 = ?',
        visual: '245 + 132 = ?',
        options: ['367', '377', '357', '387'],
        correctAnswer: '377',
        hint: 'Suma unidades (5+2=7), decenas (4+3=7) y centenas (2+1=3).',
        explanation: '¡Excelente! 245 + 132 es igual a 377.'
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
        ariTip: 'Relación entre suma y resta.',
        prompt: 'Ari tenía 350 caramelos y regaló 125. ¿Cuántos caramelos le quedan?',
        visual: '🍬 350 - 125 = ?',
        options: ['215', '225', '235', '245'],
        correctAnswer: '225',
        hint: '350 menos 125 es igual a 225.',
        explanation: '¡Muy bien! 350 - 125 = 225 caramelos.'
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
      }
    ],
    questionsGrade4: [
      {
        id: 'q3_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Tablas de multiplicar en 4° grado.',
        prompt: '7 × 8 = ?',
        visual: '7 × 8 = ?',
        options: ['54', '56', '48', '64'],
        correctAnswer: '56',
        hint: 'Recuerda que 7 × 8 = 56.',
        explanation: '¡Excelente! 7 × 8 = 56.'
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
      }
    ],
    questionsGrade4: [
      {
        id: 'q4m_4g_1',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad A: Reparto equitativo.',
        prompt: 'Ari tiene 12 estrellas y debe repartirlas entre 3 amigos. ¿Cuántas recibe cada uno?',
        visual: '⭐ 12 ÷ 3 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        hint: '12 dividido entre 3 es 4.',
        explanation: '¡Exacto! 12 ÷ 3 = 4 estrellas.'
      },
      {
        id: 'q4m_4g_2',
        type: 'math',
        interactionType: 'multiple_choice',
        ariTip: 'Actividad B: Selecciona el cociente exacto.',
        prompt: '48 ÷ 6 = ?',
        visual: '48 ÷ 6 = ?',
        options: ['7', '8', '9', '6'],
        correctAnswer: '8',
        hint: '6 × 8 = 48.',
        explanation: '¡Muy bien! 48 ÷ 6 = 8.'
      },
      {
        id: 'q4m_4g_3',
        type: 'math',
        interactionType: 'fill_blank',
        ariTip: 'Actividad C: Identifica el residuo en 17 ÷ 5.',
        prompt: 'En la división 17 ÷ 5 = 3, ¿cuál es el residuo que sobra?',
        visual: '17 ÷ 5 = 3 y sobra [ ? ]',
        inputPlaceholder: 'Escribe el residuo...',
        options: ['1', '2', '3', '0'],
        correctAnswer: '2',
        hint: '5 × 3 = 15, y para 17 sobran 2.',
        explanation: '¡Correcto! 17 ÷ 5 = 3 y sobra 2.'
      },
      {
        id: 'q4m_4g_4',
        type: 'math',
        interactionType: 'drag_drop',
        ariTip: 'Actividad D: Comprobación y reparto en 4° grado.',
        prompt: 'Un profesor tiene 36 lápices y quiere repartirlos entre 4 estudiantes. ¿Cuántos recibe cada estudiante?',
        visual: '✏️ 36 ÷ 4 = [ ___ ]',
        options: ['8', '9', '7', '10'],
        correctAnswer: '9',
        hint: '4 × 9 = 36.',
        explanation: '¡Genial! Cada estudiante recibe 9 lápices.'
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
        'En 4° grado muchos desafíos combinan dos operaciones seguidas. Identifica los datos, resuelve el primer paso y usa ese resultado para encontrar la respuesta final.',
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
      }
    ],
    questionsGrade4: [
      {
        id: 'q6_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad B: Encuentra el verbo conjugado',
        readingText:
          'En 4° grado identificamos las formas verbales conjugadas dentro de una oración: «María juega en el parque».',
        illustration: 'nature',
        prompt: 'En la oración «María juega en el parque», ¿cuál es el verbo conjugado?',
        visual: 'María [ juega ] en el parque.',
        options: ['juega', 'María', 'parque', 'en'],
        correctAnswer: 'juega',
        hint: 'Es la palabra que indica la acción en tiempo presente.',
        explanation: '¡Exacto! «juega» es la forma verbal en tercera persona del singular.'
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
        readingTitle: 'Actividad D: Concordancia verbal',
        readingText:
          'El verbo debe concordar en número con el sujeto de la oración.',
        illustration: 'nature',
        prompt: 'Completa la oración: «El pájaro ______ por el cielo.»',
        visual: '🐦 El pájaro [ ______ ] por el cielo.',
        options: ['vuela', 'vuelan', 'mesa', 'azul'],
        correctAnswer: 'vuela',
        hint: '«El pájaro» está en singular, así que el verbo también va en singular.',
        explanation: '¡Excelente! «El pájaro vuela por el cielo».'
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
      }
    ],
    questionsGrade4: [
      {
        id: 'q7_4g_1',
        type: 'reading',
        interactionType: 'multiple_choice',
        readingTitle: 'Actividad A: ¿Quién realiza la acción?',
        readingText:
          'Lee la oración: «El perro corre por el jardín».',
        illustration: 'nature',
        prompt: 'En la oración «El perro corre por el jardín», ¿cuál es el sujeto?',
        visual: '[ El perro ] corre por el jardín.',
        options: ['El perro', 'corre', 'por el jardín', 'jardín'],
        correctAnswer: 'El perro',
        hint: 'Pregunta ¿quién corre por el jardín?',
        explanation: '¡Exacto! «El perro» es el sujeto expreso simple.'
      },
      {
        id: 'q7_4g_2',
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
        explanation: '¡Muy bien! «Los niños» es el sujeto y su núcleo es «niños».'
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
      }
    ]
  },

  {
    id: 10,
    unitNumber: 5,
    subject: 'espanol',
    unitLabel: 'Español - Unidad 5: Textos Expositivos',
    title: 'Unidad 5: Textos Expositivos',
    subtitle: 'Español • Lecturas interactivas sobre ciencia y naturaleza',
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
      }
    ]
  }
];

export function getQuestionsForLevel(level, grade = '3') {
  if (!level) return [];
  if (String(grade) === '4' && Array.isArray(level.questionsGrade4) && level.questionsGrade4.length > 0) {
    return level.questionsGrade4;
  }
  return level.questions || [];
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
