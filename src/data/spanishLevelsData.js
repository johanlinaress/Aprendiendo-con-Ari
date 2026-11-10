/**
 * @fileoverview Unidades y Banco de Preguntas de Español (3° y 4° Primaria) - Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

export const SPANISH_LEVELS_DATA = [
  {
    "id": 6,
    "unitNumber": 1,
    "subject": "espanol",
    "unitLabel": "Español - Unidad 1: Los Verbos",
    "title": "Unidad 1: Los Verbos",
    "subtitle": "Español • Acciones y tiempos verbales (Pasado, Presente y Futuro)",
    "category": "espanol",
    "icon": "🏃",
    "badgeColor": "#9333ea",
    "requiredLevel": null,
    "minPassPercent": 70,
    "starsReward": 20,
    "description": "Identifica los verbos en las oraciones y comprende cómo expresan acciones en pasado, presente y futuro.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Qué son los Verbos?",
      "summary3": "Los VERBOS son las palabras que indican acciones (correr, leer, jugar, volar) o estados. Según el momento en que ocurre la acción, el verbo puede estar en PASADO (ayer), PRESENTE (hoy) o FUTURO (mañana).",
      "summary4": "En 4° grado además del tiempo verbal identificamos la PERSONA GRAMATICAL (primera: yo/nosotros, segunda: tú/ustedes, tercera: él/ella/ellos) y el NÚMERO (singular cuando es uno solo y plural cuando son varios).",
      "steps3": [
        "1️⃣ Pregúntate: ¿qué acción hace el personaje? (Ej.: «María juega en el parque» ➔ acción: juega).",
        "2️⃣ Ayer (Pasado): cantó, corrió | Hoy (Presente): canta, corre | Mañana (Futuro): cantará, correrá.",
        "3️⃣ Observa la terminación del verbo para saber si la acción ya ocurrió o sucederá después."
      ],
      "steps4": [
        "1️⃣ Persona y número: «Nosotros estudiamos» (1ª persona del plural) vs «Ella estudia» (3ª persona del singular).",
        "2️⃣ Concordancia: Un sujeto plural exige un verbo en plural («Las águilas reales vuelan»).",
        "3️⃣ Tiempos conjugados: Ayer investigaron (pasado), hoy investigan (presente), mañana investigarán (futuro)."
      ],
      "exampleVisual3": "María [ juega ] en el parque.",
      "exampleVisual4": "Nosotros [ estudiamos ] ciencias  |  Las águilas [ vuelan ] sobre la montaña",
      "steps": [
        "1️⃣ Pregúntate: ¿qué acción hace el personaje? (Ej.: «María juega en el parque» ➔ acción: juega).",
        "2️⃣ Ayer (Pasado): cantó, corrió | Hoy (Presente): canta, corre | Mañana (Futuro): cantará, correrá.",
        "3️⃣ En 4° grado revisa que el verbo concuerde en número (singular o plural) con quien realiza la acción."
      ],
      "exampleVisual": "María [ juega ] en el parque."
    },
    "questions": [
      {
        "id": "q6_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: Identifica la acción",
        "readingText": "Observa las acciones de los personajes: un niño corriendo, una niña leyendo un cuento y un perro durmiendo.",
        "illustration": "book",
        "prompt": "Si vemos a una niña con un libro abierto aprendiendo una historia, ¿cuál es el verbo que indica su acción?",
        "visual": "👧📖 Acción del personaje",
        "options": [
          "Leer",
          "Mesa",
          "Rápido",
          "Cuaderno"
        ],
        "correctAnswer": "Leer",
        "hint": "Busca la palabra que representa una acción y no un objeto.",
        "explanation": "¡Exacto! «Leer» es el verbo porque expresa la acción que realiza la niña."
      },
      {
        "id": "q6_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad B: Encuentra el verbo",
        "readingText": "En cada oración hay una palabra que nos dice qué acción ocurre. Lee con atención: «María juega en el parque».",
        "illustration": "nature",
        "prompt": "En la oración «María juega en el parque», ¿cuál palabra es el verbo?",
        "visual": "María [ juega ] en el parque.",
        "options": [
          "juega",
          "María",
          "parque",
          "el"
        ],
        "correctAnswer": "juega",
        "hint": "¿Qué acción está haciendo María en el parque?",
        "explanation": "¡Muy bien! «juega» es el verbo de la oración."
      },
      {
        "id": "q6_3",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Actividad C: Clasifica los verbos según el tiempo",
        "readingText": "Los verbos cambian según cuándo ocurre la acción: Ayer (pasado), Hoy (presente) o Mañana (futuro).",
        "illustration": "book",
        "prompt": "Clasifica los verbos según el tiempo verbal correcto (Ayer, Hoy y Mañana):",
        "visual": "Ayer ➔ Pasado | Hoy ➔ Presente | Mañana ➔ Futuro",
        "options": [
          "Ayer: estudió | Hoy: estudia | Mañana: estudiará",
          "Ayer: estudiará | Hoy: estudió | Mañana: estudia",
          "Ayer: estudia | Hoy: estudiará | Mañana: estudió",
          "Ayer: estudiar | Hoy: estudió | Mañana: estudia"
        ],
        "correctAnswer": "Ayer: estudió | Hoy: estudia | Mañana: estudiará",
        "hint": "Ayer ya pasó («estudió»), Hoy ocurre ahora («estudia») y Mañana ocurrirá después («estudiará»).",
        "explanation": "¡Correcto! Ayer estudió (pasado), hoy estudia (presente) y mañana estudiará (futuro)."
      },
      {
        "id": "q6_4",
        "type": "reading",
        "interactionType": "drag_drop",
        "readingTitle": "Actividad D: Completa la oración",
        "readingText": "Para que una oración tenga sentido, necesitamos un verbo que indique la acción del sujeto.",
        "illustration": "nature",
        "prompt": "Completa la oración arrastrando o eligiendo el verbo correcto: «El pájaro ______ por el cielo.»",
        "visual": "🐦 El pájaro [ ______ ] por el cielo.",
        "options": [
          "vuela",
          "mesa",
          "azul",
          "árbol"
        ],
        "correctAnswer": "vuela",
        "hint": "¿Qué acción hace el pájaro en el cielo?",
        "explanation": "¡Excelente! «El pájaro vuela por el cielo» tiene sentido completo gracias al verbo «vuela»."
      },
      {
        "id": "q6_5",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "El tiempo futuro",
        "readingText": "Cuando una acción sucederá mañana o la próxima semana, escribimos el verbo en tiempo futuro.",
        "illustration": "book",
        "prompt": "¿En qué tiempo verbal está el verbo «viajaremos» en «Mañana viajaremos al planetario»?",
        "visual": "🚀 Mañana [ viajaremos ]",
        "inputPlaceholder": "Escribe: pasado, presente o futuro",
        "options": [
          "Futuro",
          "Pasado",
          "Presente",
          "Infinitivo"
        ],
        "correctAnswer": "Futuro",
        "hint": "La palabra «Mañana» nos indica algo que ocurrirá después.",
        "explanation": "¡Perfecto! «Viajaremos» está en tiempo futuro."
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
    "questionsGrade4": [
      {
        "id": "q6_4g_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: El verbo conjugado en 4° grado",
        "readingText": "En 4° grado identificamos las formas verbales conjugadas dentro de una oración científica: «Los biólogos observan las mariposas monarca».",
        "illustration": "nature",
        "prompt": "En la oración «Los biólogos observan las mariposas monarca», ¿cuál es el verbo conjugado?",
        "visual": "Los biólogos [ observan ] las mariposas.",
        "options": [
          "observan",
          "biólogos",
          "mariposas",
          "monarca"
        ],
        "correctAnswer": "observan",
        "hint": "Es la palabra que indica la acción que realizan los biólogos en tiempo presente.",
        "explanation": "¡Exacto! «observan» es la forma verbal conjugada en tercera persona del plural."
      },
      {
        "id": "q6_4g_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Persona y número del verbo",
        "readingText": "Los verbos tienen número singular (una sola persona) o plural (varias personas). Por ejemplo: «Nosotros estudiamos ciencias».",
        "illustration": "book",
        "prompt": "En la oración «Nosotros estudiamos ciencias», ¿en qué persona y número está el verbo «estudiamos»?",
        "visual": "👦👧 Nosotros [ estudiamos ]",
        "options": [
          "Primera persona del plural",
          "Tercera persona del singular",
          "Segunda persona del singular",
          "Tercera persona del plural"
        ],
        "correctAnswer": "Primera persona del plural",
        "hint": "«Nosotros» incluye a quien habla y a otras personas más (plural).",
        "explanation": "¡Muy bien! «Nosotros estudiamos» está en primera persona del plural."
      },
      {
        "id": "q6_4g_3",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Actividad C: Tiempos verbales",
        "readingText": "Relaciona cada adverbio de tiempo con la forma verbal conjugada que le corresponde.",
        "illustration": "book",
        "prompt": "Selecciona la clasificación correcta según el tiempo verbal (Ayer, Hoy, Mañana):",
        "visual": "Ayer (Pasado) | Hoy (Presente) | Mañana (Futuro)",
        "options": [
          "Ayer: investigaron | Hoy: investigan | Mañana: investigarán",
          "Ayer: investigan | Hoy: investigaron | Mañana: investigarán",
          "Ayer: investigarán | Hoy: investigan | Mañana: investigaron",
          "Ayer: investigar | Hoy: investigó | Mañana: investigan"
        ],
        "correctAnswer": "Ayer: investigaron | Hoy: investigan | Mañana: investigarán",
        "hint": "Pasado: investigaron, Presente: investigan, Futuro: investigarán.",
        "explanation": "¡Correcto! Has clasificado los tres tiempos verbales con precisión."
      },
      {
        "id": "q6_4g_4",
        "type": "reading",
        "interactionType": "drag_drop",
        "readingTitle": "Actividad D: Concordancia de número y persona",
        "readingText": "El verbo debe concordar en número plural con un sujeto plural.",
        "illustration": "nature",
        "prompt": "Completa la oración con concordancia en 4° grado: «Las águilas reales ______ sobre las montañas andinas.»",
        "visual": "🦅 Las águilas reales [ ______ ] sobre las montañas.",
        "options": [
          "vuelan",
          "vuela",
          "voló",
          "montaña"
        ],
        "correctAnswer": "vuelan",
        "hint": "«Las águilas reales» está en plural, así que el verbo también debe ir en plural («vuelan»).",
        "explanation": "¡Excelente! «Las águilas reales vuelan sobre las montañas andinas»."
      },
      {
        "id": "q6_4g_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Número gramatical",
        "readingText": "Observa la oración: «Los astronautas exploraron el espacio».",
        "illustration": "solar",
        "prompt": "¿Es Verdadero o Falso que el verbo «exploraron» está en número PLURAL y tiempo PASADO?",
        "visual": "👨‍🚀 «Los astronautas exploraron el espacio»",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Se refiere a varios astronautas (plural) y a una acción que ya ocurrió (pasado).",
        "explanation": "¡Brillante! «Exploraron» está en tercera persona del plural y en pasado."
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
    "id": 7,
    "unitNumber": 2,
    "subject": "espanol",
    "unitLabel": "Español - Unidad 2: El Sujeto",
    "title": "Unidad 2: El Sujeto",
    "subtitle": "Español • ¿Quién realiza la acción en la oración?",
    "category": "espanol",
    "icon": "🐕",
    "badgeColor": "#7e22ce",
    "requiredLevel": 6,
    "minPassPercent": 70,
    "starsReward": 20,
    "description": "Identifica quién realiza la acción o de quién se habla en una oración.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Cómo encontrar el Sujeto?",
      "summary3": "El SUJETO es la persona, animal o cosa de quien se habla en la oración o quien realiza la acción. Para encontrarlo, le preguntamos al verbo: ¿QUIÉN? o ¿QUIÉNES? Por ejemplo, en «El perro corre por el jardín», ¿quién corre? ➔ «El perro».",
      "summary4": "En 4° grado distinguimos el NÚCLEO DEL SUJETO (el sustantivo o pronombre principal), el sujeto SIMPLE (un solo núcleo, ej. «Juan») y COMPUESTO (dos o más núcleos, ej. «Juan y Ana»), así como el sujeto EXPRESO (aparece escrito) y TÁCITO (se sobreentiende por el verbo).",
      "steps3": [
        "1️⃣ Ubica primero el verbo de la oración (ej. «corre» o «juegan»).",
        "2️⃣ Pregunta ¿Quién corre? o ¿Quiénes juegan? La respuesta es el SUJETO.",
        "3️⃣ Ejemplo: «Los niños juegan fútbol» ➔ ¿Quiénes juegan? ➔ Sujeto: «Los niños»."
      ],
      "steps4": [
        "1️⃣ Núcleo del sujeto: Sustantivo principal (ej. «telescopio» en «[El telescopio espacial] capturó imágenes»).",
        "2️⃣ Sujeto compuesto: Dos núcleos realizando la acción (ej. «[Ari y Juanito] leen un libro»).",
        "3️⃣ Sujeto tácito: Sobreentendido por el verbo (ej. «(Nosotros) Ganamos tres estrellas»)."
      ],
      "exampleVisual3": "[ El perro ] corre por el jardín.",
      "exampleVisual4": "[ Ari y Juanito ] (Compuesto)  |  (Nosotros) Ganamos tres estrellas (Tácito)",
      "steps": [
        "1️⃣ Ubica primero el verbo de la oración (ej. «corre» o «juegan»).",
        "2️⃣ Pregunta ¿Quién corre? o ¿Quiénes juegan? La respuesta es el SUJETO.",
        "3️⃣ Ejemplo: «Los niños juegan fútbol» ➔ ¿Quiénes juegan? ➔ Sujeto: «Los niños»."
      ],
      "exampleVisual": "[ El perro ] corre por el jardín."
    },
    "questions": [
      {
        "id": "q7_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: ¿Quién realiza la acción?",
        "readingText": "Lee la siguiente oración con atención: «El perro corre por el jardín».",
        "illustration": "nature",
        "prompt": "En la oración «El perro corre por el jardín», ¿quién corre (cuál es el sujeto)?",
        "visual": "[ El perro ] corre por el jardín.",
        "options": [
          "El perro",
          "corre",
          "por el jardín",
          "jardín"
        ],
        "correctAnswer": "El perro",
        "hint": "Hazle la pregunta al verbo: ¿Quién corre por el jardín?",
        "explanation": "¡Exacto! «El perro» realiza la acción de correr, por eso es el sujeto."
      },
      {
        "id": "q7_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad B: Selecciona el sujeto",
        "readingText": "Analiza la oración: «Los niños juegan fútbol».",
        "illustration": "book",
        "prompt": "Selecciona el sujeto de la oración «Los niños juegan fútbol»:",
        "visual": "[ Los niños ] juegan fútbol.",
        "options": [
          "Los niños",
          "Juegan",
          "Fútbol",
          "juegan fútbol"
        ],
        "correctAnswer": "Los niños",
        "hint": "¿Quiénes juegan fútbol?",
        "explanation": "¡Muy bien! «Los niños» es el sujeto de la oración."
      },
      {
        "id": "q7_3",
        "type": "reading",
        "interactionType": "ordering",
        "readingTitle": "Actividad C: Ordena la oración colocando el sujeto al inicio",
        "readingText": "Al ordenar las palabras de una oración colocamos primero el sujeto y luego lo que hace.",
        "illustration": "nature",
        "prompt": "Ordena las palabras para formar correctamente la oración:",
        "visual": "las flores / La abeja / visita",
        "itemsToOrder": [
          "las flores.",
          "La abeja",
          "visita"
        ],
        "options": [
          "La abeja visita las flores.",
          "visita La abeja las flores.",
          "las flores. visita La abeja",
          "La abeja las flores. visita"
        ],
        "correctAnswer": "La abeja visita las flores.",
        "hint": "Empieza por el sujeto «La abeja», sigue con el verbo «visita» y termina con «las flores.».",
        "explanation": "¡Correcto! «La abeja visita las flores.» tiene el sujeto «La abeja» bien ubicado."
      },
      {
        "id": "q7_4",
        "type": "reading",
        "interactionType": "drag_drop",
        "readingTitle": "Completa con el sujeto adecuado",
        "readingText": "El sujeto debe concordar con el verbo de la oración.",
        "illustration": "solar",
        "prompt": "Arrastra o selecciona el sujeto que completa la oración: «________ ilumina los planetas del Sistema Solar.»",
        "visual": "[ ________ ] ilumina los planetas.",
        "options": [
          "El Sol",
          "Correr",
          "Rápidamente",
          "Ayer"
        ],
        "correctAnswer": "El Sol",
        "hint": "¿Qué astro ilumina los planetas del Sistema Solar?",
        "explanation": "¡Genial! «El Sol» es el sujeto que realiza la acción de iluminar."
      },
      {
        "id": "q7_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Reconocimiento del sujeto",
        "readingText": "En la oración «Mi maestra explica las sumas con alegría», la persona de quien hablamos es «Mi maestra».",
        "illustration": "book",
        "prompt": "¿Es Verdadero o Falso que «Mi maestra» es el sujeto de la oración?",
        "visual": "[ Mi maestra ] explica las sumas con alegría.",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "¿Quién explica las sumas con alegría? Mi maestra.",
        "explanation": "¡Así es! «Mi maestra» es quien realiza la acción, por lo tanto es el sujeto."
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
    "questionsGrade4": [
      {
        "id": "q7_4g_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: Sujeto expreso con modificadores (4° grado)",
        "readingText": "Lee la oración: «El telescopio espacial capturó imágenes de una galaxia lejana».",
        "illustration": "solar",
        "prompt": "En la oración «El telescopio espacial capturó imágenes de una galaxia lejana», ¿cuál es el sujeto expreso?",
        "visual": "[ El telescopio espacial ] capturó imágenes.",
        "options": [
          "El telescopio espacial",
          "capturó imágenes",
          "una galaxia lejana",
          "capturó"
        ],
        "correctAnswer": "El telescopio espacial",
        "hint": "Pregunta ¿qué capturó imágenes de una galaxia lejana?",
        "explanation": "¡Exacto! «El telescopio espacial» es el sujeto expreso de la oración."
      },
      {
        "id": "q7_4g_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad B: Sujeto al final de la oración",
        "readingText": "En 4° grado descubrimos que el sujeto también puede aparecer después del verbo: «Por el bosque caminaban los exploradores curiosos».",
        "illustration": "nature",
        "prompt": "Selecciona el sujeto de la oración «Por el bosque caminaban los exploradores curiosos»:",
        "visual": "Por el bosque caminaban [ los exploradores curiosos ].",
        "options": [
          "los exploradores curiosos",
          "Por el bosque",
          "caminaban",
          "el bosque"
        ],
        "correctAnswer": "los exploradores curiosos",
        "hint": "Hazle la pregunta al verbo: ¿Quiénes caminaban por el bosque?",
        "explanation": "¡Muy bien! Aunque está al final, «los exploradores curiosos» es el sujeto."
      },
      {
        "id": "q7_4g_3",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "Núcleo del sujeto en 4° grado",
        "readingText": "El núcleo del sujeto es el sustantivo principal del que hablamos. Por ejemplo, en «Los delfines inteligentes nadan en el mar», el sustantivo principal es «delfines».",
        "illustration": "ocean",
        "prompt": "En el sujeto «Los delfines inteligentes», ¿cuál es la palabra que funciona como NÚCLEO del sujeto?",
        "visual": "Los [ delfines ] inteligentes",
        "inputPlaceholder": "Escribe el sustantivo núcleo...",
        "options": [
          "delfines",
          "Los",
          "inteligentes",
          "nadan"
        ],
        "correctAnswer": "delfines",
        "hint": "Es el sustantivo que nombra a los animales marinos.",
        "explanation": "¡Correcto! El sustantivo «delfines» es el núcleo del sujeto."
      },
      {
        "id": "q7_4g_4",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Sujeto simple y sujeto compuesto",
        "readingText": "Un sujeto es compuesto cuando tiene dos o más núcleos, como en «Ari y Juanito leen un libro de ciencias».",
        "illustration": "book",
        "prompt": "¿Qué tipo de sujeto tiene la oración «Ari y Juanito leen un libro de ciencias»?",
        "visual": "[ Ari y Juanito ] leen un libro.",
        "options": [
          "Sujeto compuesto",
          "Sujeto tácito",
          "Sujeto simple",
          "Sin sujeto"
        ],
        "correctAnswer": "Sujeto compuesto",
        "hint": "Observa que menciona a dos personajes: Ari y Juanito.",
        "explanation": "¡Excelente! Como tiene dos núcleos («Ari» y «Juanito»), es un sujeto compuesto."
      },
      {
        "id": "q7_4g_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Sujeto tácito",
        "readingText": "En la oración «Ganamos tres estrellas en matemáticas», el sujeto no está escrito pero sabemos por el verbo que somos «Nosotros».",
        "illustration": "book",
        "prompt": "¿Es Verdadero o Falso que cuando el sujeto no está escrito pero se sobreentiende se llama SUJETO TÁCITO?",
        "visual": "(Nosotros) Ganamos tres estrellas.",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "El sujeto expreso aparece escrito y el sujeto tácito se deduce de la terminación del verbo.",
        "explanation": "¡Brillante! Se llama sujeto tácito (en este caso, «Nosotros»)."
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
    "id": 8,
    "unitNumber": 3,
    "subject": "espanol",
    "unitLabel": "Español - Unidad 3: El Predicado",
    "title": "Unidad 3: El Predicado",
    "subtitle": "Español • ¿Qué se dice del sujeto en la oración?",
    "category": "espanol",
    "icon": "🎤",
    "badgeColor": "#6b21a8",
    "requiredLevel": 7,
    "minPassPercent": 70,
    "starsReward": 25,
    "description": "Identifica qué se dice del sujeto, reconoce el verbo dentro del predicado y construye oraciones completas.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Qué es el Predicado?",
      "summary3": "El PREDICADO es todo lo que se dice del sujeto en una oración, es decir, la acción que realiza. Siempre incluye al verbo. Por ejemplo, en «La niña canta una canción», el sujeto es «La niña» y el predicado es «canta una canción».",
      "summary4": "En 4° grado identificamos el NÚCLEO DEL PREDICADO, que siempre es el verbo conjugado. En «La niña canta una canción», el predicado verbal es «canta una canción» y su núcleo es «canta».",
      "steps3": [
        "1️⃣ Separa primero el sujeto de la oración (¿Quién realiza la acción?).",
        "2️⃣ Todo el resto de la oración, empezando por el verbo, forma el PREDICADO.",
        "3️⃣ Ejemplo: Sujeto: «La niña» | Predicado: «canta una canción» (Núcleo: «canta»)."
      ],
      "steps4": [
        "1️⃣ Núcleo del predicado: El verbo conjugado de la oración (ej. «construyeron» en «Los científicos [construyeron un satélite]»).",
        "2️⃣ Complemento circunstancial: Información sobre dónde, cómo o cuándo ocurre la acción («en el océano»).",
        "3️⃣ Predicado compuesto: Dos acciones realizadas por el mismo sujeto (ej. «Ari [lee el problema y explica la pista]»)."
      ],
      "exampleVisual3": "La niña [ canta una canción ].",
      "exampleVisual4": "Los científicos [ construyeron un satélite ] (Núcleo: construyeron)",
      "steps": [
        "1️⃣ Separa primero el sujeto de la oración (¿Quién realiza la acción?).",
        "2️⃣ Todo el resto de la oración, empezando por el verbo, forma el PREDICADO.",
        "3️⃣ Ejemplo: Sujeto: «La niña» | Predicado: «canta una canción» (Núcleo: «canta»)."
      ],
      "exampleVisual": "La niña [ canta una canción ]."
    },
    "questions": [
      {
        "id": "q8_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: Identifica el predicado",
        "readingText": "Lee la oración del ejemplo: «La niña canta una canción». Ya sabemos que el sujeto es «La niña».",
        "illustration": "book",
        "prompt": "En la oración «La niña canta una canción», ¿cuál es el predicado?",
        "visual": "La niña [ canta una canción ].",
        "options": [
          "canta una canción",
          "La niña",
          "La",
          "niña canta"
        ],
        "correctAnswer": "canta una canción",
        "hint": "¿Qué se dice que hace la niña?",
        "explanation": "¡Exacto! «canta una canción» es el predicado porque expresa lo que hace el sujeto."
      },
      {
        "id": "q8_2",
        "type": "reading",
        "interactionType": "drag_drop",
        "readingTitle": "Actividad B: Completa la oración con un predicado",
        "readingText": "Todo predicado necesita un verbo que exprese lo que hace el sujeto.",
        "illustration": "nature",
        "prompt": "Completa la oración «El gato ________» eligiendo el predicado adecuado:",
        "visual": "🐱 El gato [ ________ ].",
        "options": [
          "duerme en el sofá",
          "amarillo y pequeño",
          "el jardín grande",
          "un cuaderno azul"
        ],
        "correctAnswer": "duerme en el sofá",
        "hint": "Elige la opción que comienza con un verbo de acción («duerme»).",
        "explanation": "¡Muy bien! «duerme en el sofá» tiene verbo y funciona como predicado."
      },
      {
        "id": "q8_3",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Actividad C: Divide la oración en Sujeto y Predicado",
        "readingText": "Observa la oración: «El búho Ari enseña con alegría». Vamos a separar sus dos partes.",
        "illustration": "book",
        "prompt": "Selecciona la división correcta entre Sujeto y Predicado para «El búho Ari enseña con alegría»:",
        "visual": "[ Sujeto ] + [ Predicado ]",
        "options": [
          "Sujeto: El búho Ari | Predicado: enseña con alegría",
          "Sujeto: enseña con alegría | Predicado: El búho Ari",
          "Sujeto: El búho | Predicado: Ari enseña con alegría",
          "Sujeto: El búho Ari enseña | Predicado: con alegría"
        ],
        "correctAnswer": "Sujeto: El búho Ari | Predicado: enseña con alegría",
        "hint": "¿Quién enseña? «El búho Ari» (Sujeto). ¿Qué hace? «enseña con alegría» (Predicado).",
        "explanation": "¡Correcto! Sujeto: «El búho Ari» y Predicado: «enseña con alegría»."
      },
      {
        "id": "q8_4",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "El verbo dentro del predicado",
        "readingText": "La palabra más importante del predicado es el verbo.",
        "illustration": "nature",
        "prompt": "En el predicado «corren por la pradera verde», ¿cuál palabra es el verbo (núcleo del predicado)?",
        "visual": "[ corren ] por la pradera verde",
        "inputPlaceholder": "Escribe el verbo...",
        "options": [
          "corren",
          "pradera",
          "verde",
          "por"
        ],
        "correctAnswer": "corren",
        "hint": "Busca la palabra que indica la acción de desplazarse rápido.",
        "explanation": "¡Perfecto! «corren» es el verbo y núcleo del predicado."
      },
      {
        "id": "q8_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Diferenciación entre sujeto y predicado",
        "readingText": "Analiza la oración: «Las abejas fabrican miel en la colmena».",
        "illustration": "nature",
        "prompt": "¿Es Verdadero o Falso que en «Las abejas fabrican miel en la colmena» el predicado es «fabrican miel en la colmena»?",
        "visual": "Las abejas [ fabrican miel en la colmena ].",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "«Las abejas» es el sujeto y todo lo que hacen («fabrican miel en la colmena») es el predicado.",
        "explanation": "¡Excelente! Es Verdadero: «fabrican miel en la colmena» es el predicado."
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
    "questionsGrade4": [
      {
        "id": "q8_4g_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Actividad A: Núcleo del predicado verbal (4° grado)",
        "readingText": "En 4° grado analizamos el predicado verbal y su núcleo. Lee la oración: «Los científicos construyeron un satélite meteorológico».",
        "illustration": "solar",
        "prompt": "En el predicado «construyeron un satélite meteorológico», ¿cuál es el NÚCLEO del predicado?",
        "visual": "Los científicos [ construyeron ] un satélite meteorológico.",
        "options": [
          "construyeron",
          "satélite",
          "meteorológico",
          "un satélite"
        ],
        "correctAnswer": "construyeron",
        "hint": "El núcleo del predicado verbal es siempre el verbo conjugado.",
        "explanation": "¡Exacto! El verbo conjugado «construyeron» es el núcleo del predicado."
      },
      {
        "id": "q8_4g_2",
        "type": "reading",
        "interactionType": "drag_drop",
        "readingTitle": "Actividad B: Predicado con complemento circunstancial",
        "readingText": "El predicado puede incluir información sobre el lugar o el modo en que ocurre la acción.",
        "illustration": "ocean",
        "prompt": "Completa la oración «Las tortugas marinas ________» con el predicado verbal adecuado:",
        "visual": "🐢 Las tortugas marinas [ ________ ].",
        "options": [
          "navegan grandes distancias por el océano",
          "caparazón duro y verde",
          "las playas de arena tibia",
          "muy lentas y silenciosas"
        ],
        "correctAnswer": "navegan grandes distancias por el océano",
        "hint": "Elige la opción que contiene un verbo conjugado en plural («navegan»).",
        "explanation": "¡Muy bien! «navegan grandes distancias por el océano» tiene como núcleo el verbo «navegan»."
      },
      {
        "id": "q8_4g_3",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Actividad C: Análisis de Sujeto, Predicado y Núcleo",
        "readingText": "Analiza la oración: «La orquesta juvenil interpretó una melodía alegre».",
        "illustration": "book",
        "prompt": "Identifica correctamente el Sujeto, el Predicado y el Núcleo del predicado:",
        "visual": "[ Sujeto ] + [ Predicado (Núcleo) ]",
        "options": [
          "Sujeto: La orquesta juvenil | Predicado: interpretó una melodía alegre | Núcleo: interpretó",
          "Sujeto: interpretó una melodía | Predicado: La orquesta juvenil | Núcleo: orquesta",
          "Sujeto: La orquesta | Predicado: juvenil interpretó una melodía | Núcleo: melodía",
          "Sujeto: La orquesta juvenil | Predicado: una melodía alegre | Núcleo: alegre"
        ],
        "correctAnswer": "Sujeto: La orquesta juvenil | Predicado: interpretó una melodía alegre | Núcleo: interpretó",
        "hint": "¿Quién interpretó? «La orquesta juvenil». ¿Qué hizo? «interpretó una melodía alegre» (verbo: «interpretó»).",
        "explanation": "¡Correcto! Has identificado el sujeto, el predicado y su núcleo verbal."
      },
      {
        "id": "q8_4g_4",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "Núcleo verbal en 4° grado",
        "readingText": "En la oración «Los estudiantes de cuarto grado sembraron árboles nativos en el patio», el predicado es «sembraron árboles nativos en el patio».",
        "illustration": "nature",
        "prompt": "Escribe la palabra que funciona como núcleo del predicado en «sembraron árboles nativos en el patio»:",
        "visual": "[ sembraron ] árboles nativos en el patio",
        "inputPlaceholder": "Escribe el verbo núcleo...",
        "options": [
          "sembraron",
          "árboles",
          "nativos",
          "patio"
        ],
        "correctAnswer": "sembraron",
        "hint": "Es el verbo en tiempo pasado que indica la acción realizada.",
        "explanation": "¡Perfecto! «sembraron» es el verbo conjugado y núcleo del predicado."
      },
      {
        "id": "q8_4g_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Predicado compuesto en 4° grado",
        "readingText": "Cuando un sujeto realiza dos acciones con dos verbos, como en «Ari lee el problema y explica la pista», el predicado tiene dos núcleos verbales («lee» y «explica»).",
        "illustration": "book",
        "prompt": "¿Es Verdadero o Falso que en «Ari lee el problema y explica la pista» el predicado tiene dos verbos como núcleos?",
        "visual": "Ari [ lee el problema y explica la pista ].",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Observa las dos acciones que realiza Ari: «lee» y «explica».",
        "explanation": "¡Excelente! Es un predicado verbal compuesto porque tiene dos núcleos («lee» y «explica»)."
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
    "id": 9,
    "unitNumber": 4,
    "subject": "espanol",
    "unitLabel": "Español - Unidad 4: Comprensión Lectora",
    "title": "Unidad 4: Comprensión Lectora",
    "subtitle": "Español • Personajes, idea principal, secuencias e inferencias",
    "category": "espanol",
    "icon": "📚",
    "badgeColor": "#581c87",
    "requiredLevel": 8,
    "minPassPercent": 70,
    "starsReward": 25,
    "description": "Lee historias breves, identifica personajes, reconoce la idea principal, ordena secuencias y realiza inferencias.",
    "lesson": {
      "title": "Aprendo con Ari: Secretos de un Gran Lector",
      "summary3": "Comprender lo que leemos significa imaginar la historia, reconocer a los PERSONAJES, descubrir la IDEA PRINCIPAL (de qué trata el texto) y recordar en qué ORDEN sucedieron los hechos (inicio, nudo y desenlace).",
      "summary4": "En 4° grado también hacemos INFERENCIAS: descubrimos pistas dentro del texto para deducir información que el autor sugiere (por ejemplo, si un personaje lleva paraguas y botas de agua, inferimos que está lloviendo).",
      "steps3": [
        "1️⃣ Lee el texto con calma o presiona «🔊 Escuchar» para seguir la lectura en voz alta.",
        "2️⃣ Identifica quiénes participan (personajes) y dónde ocurre la historia.",
        "3️⃣ Fíjate en el orden de los acontecimientos: qué pasó primero, qué pasó después y cómo terminó."
      ],
      "steps4": [
        "1️⃣ Inferencia lectora: Relaciona las pistas con lo que sabes (ej. reloj solar sin sol no marca la hora).",
        "2️⃣ Propósito y causas: Descubre por qué los personajes actúan (ej. guiar al barco pesquero).",
        "3️⃣ Causa y efecto: Identifica cómo un hecho produce otro (ej. polinización de abejas ➔ frutos y semillas)."
      ],
      "exampleVisual3": "Inicio ➔ Desarrollo ➔ Final",
      "exampleVisual4": "Pistas: Nubes grises + Botas + Paraguas ➔ Inferencia: Lluvia inminente",
      "steps": [
        "1️⃣ Lee el texto con calma o presiona «🔊 Escuchar» para seguir la lectura en voz alta.",
        "2️⃣ Identifica quiénes participan (personajes) y dónde ocurre la historia.",
        "3️⃣ Fíjate en el orden de los acontecimientos: qué pasó primero, qué pasó después y cómo terminó."
      ],
      "exampleVisual": "Inicio ➔ Desarrollo ➔ Final"
    },
    "questions": [
      {
        "id": "q9_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "La Linterna de Lucas",
        "readingText": "Una noche de campamento, el pequeño Lucas y su hermana Valeria escucharon un suave ulular entre los pinos. Al encender su linterna, descubrieron a un simpático búho morado que buscaba sus gafas redondas caídas sobre las hojas.",
        "illustration": "nature",
        "prompt": "Identificar personajes: ¿Quiénes son los dos hermanos protagonistas de la lectura?",
        "visual": "🏕️ Personajes del cuento",
        "options": [
          "Lucas y Valeria",
          "Pedro y Sofía",
          "Mateo y Camila",
          "Tomás y Elena"
        ],
        "correctAnswer": "Lucas y Valeria",
        "hint": "Lee la primera oración del cuento.",
        "explanation": "¡Muy bien! Los dos hermanos que estaban de campamento son Lucas y Valeria."
      },
      {
        "id": "q9_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "La Linterna de Lucas",
        "readingText": "Lucas y Valeria ayudaron al búho a recoger sus gafas de entre las hojas secas. Muy agradecido, el búho les enseñó a reconocer la estrella polar en el cielo nocturno para que siempre supieran orientarse.",
        "illustration": "solar",
        "prompt": "Idea principal: ¿Cuál es la idea principal de este fragmento?",
        "visual": "🦉🌟 Amistad y aprendizaje",
        "options": [
          "Los niños ayudaron al búho y él les enseñó a ubicar la estrella polar",
          "Los niños perdieron su tienda de campaña en la nieve",
          "El búho se fue a dormir sin encontrar sus gafas",
          "Lucas compró una bicicleta nueva en la ciudad"
        ],
        "correctAnswer": "Los niños ayudaron al búho y él les enseñó a ubicar la estrella polar",
        "hint": "Resume lo que hicieron los niños por el búho y cómo les agradeció él.",
        "explanation": "¡Exacto! Esa opción resume la idea principal del relato."
      },
      {
        "id": "q9_3",
        "type": "reading",
        "interactionType": "ordering",
        "readingTitle": "El Jardín de Girasoles",
        "readingText": "Primero, Sofía preparó la tierra húmeda en una maceta. Después, sembró tres semillas de girasol y las regó cada mañana. Finalmente, brotaron hermosas flores amarillas que miraban hacia el Sol.",
        "illustration": "nature",
        "prompt": "Identificar secuencias: ¿En qué orden ocurrieron los hechos de la historia?",
        "visual": "1° Tierra ➔ 2° Semillas ➔ 3° Flores",
        "itemsToOrder": [
          "Brotaron flores amarillas",
          "Preparó la tierra en la maceta",
          "Sembró las semillas y las regó"
        ],
        "options": [
          "1° Preparó la tierra | 2° Sembró las semillas | 3° Brotaron flores amarillas",
          "1° Brotaron flores amarillas | 2° Preparó la tierra | 3° Sembró las semillas",
          "1° Sembró las semillas | 2° Brotaron flores amarillas | 3° Preparó la tierra",
          "1° Preparó la tierra | 2° Brotaron flores amarillas | 3° Sembró las semillas"
        ],
        "correctAnswer": "1° Preparó la tierra | 2° Sembró las semillas | 3° Brotaron flores amarillas",
        "hint": "Fíjate en los conectores «Primero», «Después» y «Finalmente».",
        "explanation": "¡Correcto! Primero preparó la tierra, después sembró las semillas y finalmente brotaron las flores."
      },
      {
        "id": "q9_4",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Un Día de Lluvia",
        "readingText": "Antes de salir hacia la escuela, Martín miró por la ventana las nubes grises, se puso sus botas impermeables amarillas y abrió su paraguas en la puerta.",
        "illustration": "water",
        "prompt": "Inferir información: Aunque el texto no lo dice con esas palabras, ¿qué podemos inferir que estaba ocurriendo afuera?",
        "visual": "🌧️☂️ Pistas del texto",
        "options": [
          "Estaba lloviendo o a punto de llover",
          "Hacía un calor intenso de verano sin nubes",
          "Era medianoche y todos dormían",
          "Estaba dentro de un submarino en el mar"
        ],
        "correctAnswer": "Estaba lloviendo o a punto de llover",
        "hint": "Observa las pistas: nubes grises, botas impermeables y paraguas abierto.",
        "explanation": "¡Excelente inferencia! Las nubes grises, las botas y el paraguas indican lluvia."
      },
      {
        "id": "q9_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Los Delfines Exploradores",
        "readingText": "Los delfines son mamíferos marinos muy inteligentes que viven en grupos llamados manadas y se comunican mediante silbidos y chasquidos bajo el agua.",
        "illustration": "ocean",
        "prompt": "Información explícita: ¿Es Verdadero o Falso que los delfines viven en grupos y se comunican mediante sonidos bajo el agua?",
        "visual": "🐬 Comunicación marina",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Revisa el texto: menciona que viven en grupos y usan silbidos bajo el agua.",
        "explanation": "¡Brillante! Es Verdadero según la información explícita de la lectura."
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
    "questionsGrade4": [
      {
        "id": "q9_4g_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "El Faro de Isla Niebla (4° grado)",
        "readingText": "Durante una tormenta de otoño, la joven guardiana Helena y su abuelo Simón subieron los cien escalones del antiguo faro para limpiar el espejo principal y guiar a un barco pesquero hacia el puerto seguro.",
        "illustration": "ocean",
        "prompt": "Identificar personajes y propósito: ¿Por qué subieron Helena y su abuelo Simón hasta la cima del faro?",
        "visual": "🗼⛵ Misión en el faro",
        "options": [
          "Para limpiar el espejo del faro y guiar al barco pesquero hacia el puerto",
          "Para pescar cangrejos desde la ventana más alta",
          "Para esconderse de los marineros del puerto",
          "Para pintar las paredes exteriores bajo la lluvia"
        ],
        "correctAnswer": "Para limpiar el espejo del faro y guiar al barco pesquero hacia el puerto",
        "hint": "Revisa qué hicieron en la cima del faro y a quién querían ayudar.",
        "explanation": "¡Muy bien! Subieron para que la luz del faro guiara al barco pesquero en medio de la tormenta."
      },
      {
        "id": "q9_4g_2",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "El Reloj Solar del Abuelo",
        "readingText": "En el patio de la escuela antigua había un reloj de piedra que no tenía agujas ni baterías. Solo funcionaba cuando el cielo estaba despejado, proyectando la sombra de una varilla metálica sobre los números grabados.",
        "illustration": "solar",
        "prompt": "Inferir información (4° grado): ¿Por qué el reloj de piedra no podía marcar la hora durante una noche nublada?",
        "visual": "☀️🕰️ Inferencia lectora",
        "options": [
          "Porque necesitaba la luz del Sol para proyectar la sombra sobre los números",
          "Porque alguien le había quitado las baterías eléctricas",
          "Porque las agujas de plástico se derretían con el frío",
          "Porque los números se borraban cada noche"
        ],
        "correctAnswer": "Porque necesitaba la luz del Sol para proyectar la sombra sobre los números",
        "hint": "Piensa qué produce la sombra de la varilla metálica cuando el cielo está despejado.",
        "explanation": "¡Excelente inferencia! Un reloj solar depende de la luz del Sol para proyectar sombra."
      },
      {
        "id": "q9_4g_3",
        "type": "reading",
        "interactionType": "ordering",
        "readingTitle": "El Experimento del Volcán Escolar",
        "readingText": "Para la feria científica, Camila primero moldeó un cono de arcilla sobre una tabla. Luego colocó bicarbonato y colorante rojo en el cráter. Por último, agregó vinagre y observó cómo salía espuma brillante.",
        "illustration": "book",
        "prompt": "Secuencia narrativa en 4° grado: Ordena los tres pasos que realizó Camila en su experimento:",
        "visual": "1° Arcilla ➔ 2° Bicarbonato ➔ 3° Espuma con vinagre",
        "itemsToOrder": [
          "Agregó vinagre y salió espuma",
          "Moldeó el cono de arcilla",
          "Colocó bicarbonato y colorante rojo"
        ],
        "options": [
          "1° Moldeó el cono de arcilla | 2° Colocó bicarbonato y colorante | 3° Agregó vinagre y salió espuma",
          "1° Agregó vinagre y salió espuma | 2° Moldeó el cono de arcilla | 3° Colocó bicarbonato y colorante",
          "1° Colocó bicarbonato y colorante | 2° Agregó vinagre y salió espuma | 3° Moldeó el cono de arcilla",
          "1° Moldeó el cono de arcilla | 2° Agregó vinagre y salió espuma | 3° Colocó bicarbonato y colorante"
        ],
        "correctAnswer": "1° Moldeó el cono de arcilla | 2° Colocó bicarbonato y colorante | 3° Agregó vinagre y salió espuma",
        "hint": "Sigue los conectores temporales: «primero», «luego» y «por último».",
        "explanation": "¡Correcto! Ese es el orden cronológico exacto del experimento."
      },
      {
        "id": "q9_4g_4",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "El Bosque de Niebla",
        "readingText": "Los bosques de niebla de alta montaña atrapan el agua de las nubes en sus musgos y la liberan poco a poco hacia los ríos que abastecen a los pueblos cercanos.",
        "illustration": "nature",
        "prompt": "Idea principal (4° grado): ¿Cuál es la idea principal del párrafo anterior?",
        "visual": "🌲💧 Importancia del bosque de niebla",
        "options": [
          "Los bosques de niebla capturan agua de las nubes y alimentan los ríos de los pueblos",
          "En las montañas altas nunca existen nubes ni musgos",
          "Los ríos nacen únicamente en medio del desierto",
          "Los musgos impiden que el agua llegue a los ríos"
        ],
        "correctAnswer": "Los bosques de niebla capturan agua de las nubes y alimentan los ríos de los pueblos",
        "hint": "Identifica la función ecológica principal que cumple el bosque de niebla.",
        "explanation": "¡Exacto! Esa oración sintetiza la idea central del texto."
      },
      {
        "id": "q9_4g_5",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Causa y Efecto en la Lectura",
        "readingText": "Como las abejas transportan el polen de una flor a otra mientras buscan néctar, muchas plantas pueden producir frutos y semillas.",
        "illustration": "nature",
        "prompt": "Relación causa-efecto: ¿Es Verdadero o Falso que el transporte de polen por las abejas permite que muchas plantas produzcan frutos y semillas?",
        "visual": "🐝🌸 Polinización y frutos",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Observa el conector de causa «Como...» al inicio de la oración.",
        "explanation": "¡Brillante! La polinización de las abejas es la causa de que muchas plantas den frutos."
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
    "id": 10,
    "unitNumber": 5,
    "subject": "espanol",
    "unitLabel": "Español - Unidad 5: Textos Expositivos",
    "title": "Unidad 5: Textos Expositivos",
    "subtitle": "Español • Lecturas interactivas sobre ciencia y naturaleza (Lectura libre abierta)",
    "category": "espanol",
    "icon": "📖",
    "badgeColor": "#9333ea",
    "requiredLevel": null,
    "minPassPercent": 70,
    "starsReward": 30,
    "isInteractiveExpositiveUnit": true,
    "description": "Explora textos informativos con portada ilustrada, fragmentos navegables, palabras resaltadas, audio y evaluación.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Qué es un Texto Expositivo?",
      "summary3": "Un TEXTO EXPOSITIVO es una lectura que nos explica información real y verdadera sobre temas de la ciencia, el universo, los animales, el cuerpo humano o la naturaleza.",
      "summary4": "En 4° grado analizamos la estructura de los textos expositivos: TÍTULO (indica el tema), INTRODUCCIÓN (presenta de qué trata), DESARROLLO (explica datos y conceptos clave) y CONCLUSIÓN.",
      "steps3": [
        "1️⃣ Explora la portada ilustrada y presiona «📖 Comenzar a leer» para recorrer los fragmentos interactivos.",
        "2️⃣ Toca las palabras resaltadas para ver su significado y responde la pregunta de exploración.",
        "3️⃣ Al finalizar la lectura, demuestra tu comprensión en las 5 actividades."
      ],
      "steps4": [
        "1️⃣ Estructura: Introducción (presenta el tema), Desarrollo (explica datos) y Conclusión (resume ideas).",
        "2️⃣ Rigor científico: Información verídica y objetiva (ej. 4 planetas rocosos y 4 gigantes gaseosos).",
        "3️⃣ Comprensión de conceptos: Procesos naturales como la fotosíntesis (liberación de oxígeno) o cadenas tróficas."
      ],
      "exampleVisual3": "☀️🪐 El Sistema Solar • 🌊 Ciclo del Agua • 🐝 Animales",
      "exampleVisual4": "Introducción ➔ Desarrollo con datos ➔ Conclusión objetiva | Fotosíntesis y Ecosistemas",
      "steps": [
        "1️⃣ Explora la portada ilustrada y presiona «📖 Comenzar a leer» para recorrer los fragmentos interactivos.",
        "2️⃣ Toca las palabras resaltadas para ver su significado y responde la pregunta de exploración.",
        "3️⃣ Al finalizar la lectura, demuestra tu comprensión en las 5 actividades."
      ],
      "exampleVisual": "☀️🪐 El Sistema Solar • 🌊 Ciclo del Agua • 🐝 Animales"
    },
    "questions": [
      {
        "id": "q10_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "El Sistema Solar",
        "readingText": "El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas.",
        "illustration": "solar",
        "prompt": "¿Cuál es el tema del texto?",
        "visual": "☀️🪐🌍 El Sistema Solar",
        "options": [
          "Los planetas",
          "Los animales",
          "Las plantas",
          "Los deportes"
        ],
        "correctAnswer": "Los planetas",
        "hint": "El texto explica cómo está formado el Sistema Solar y sus ocho planetas.",
        "explanation": "¡Excelente! El texto trata sobre el Sistema Solar y los planetas."
      },
      {
        "id": "q10_2",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "El Sistema Solar",
        "readingText": "El Sistema Solar está formado por el Sol, ocho planetas y otros cuerpos celestes como asteroides y cometas. Marte es conocido como el planeta rojo.",
        "illustration": "solar",
        "prompt": "¿Es Verdadero o Falso que el Sistema Solar tiene ocho planetas que giran alrededor del Sol?",
        "visual": "🪐 8 Planetas alrededor del Sol",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Lee la primera oración del texto expositivo.",
        "explanation": "¡Correcto! El Sistema Solar está formado por el Sol y ocho planetas."
      },
      {
        "id": "q10_3",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "El Ciclo del Agua",
        "readingText": "El calor del Sol evapora el agua de los océanos y ríos. El vapor sube al cielo, forma las nubes y luego cae como lluvia.",
        "illustration": "water",
        "prompt": "Completa la palabra clave: El calor del ______ evapora el agua de los océanos y ríos.",
        "visual": "☀️ El calor del [ ______ ] evapora el agua.",
        "inputPlaceholder": "Escribe la palabra...",
        "options": [
          "Sol",
          "viento",
          "hielo",
          "bosque"
        ],
        "correctAnswer": "Sol",
        "hint": "Es la estrella que nos da luz y calor cada día.",
        "explanation": "¡Muy bien! El calor del Sol calienta y evapora el agua."
      },
      {
        "id": "q10_4",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Animales, Plantas y Medio Ambiente",
        "readingText": "Las abejas recolectan néctar de las flores, las plantas realizan la fotosíntesis con la luz solar y los delfines son mamíferos marinos vertebrados.",
        "illustration": "nature",
        "prompt": "Relaciona cada concepto del texto expositivo con su definición correcta:",
        "visual": "🐝 Abejas | 🌱 Plantas | 🐬 Delfines",
        "options": [
          "Abejas: polinizan flores | Plantas: hacen fotosíntesis | Delfines: mamíferos marinos",
          "Abejas: mamíferos marinos | Plantas: polinizan flores | Delfines: hacen fotosíntesis",
          "Abejas: hacen fotosíntesis | Plantas: mamíferos marinos | Delfines: polinizan flores",
          "Abejas: viven en el mar | Plantas: no usan luz solar | Delfines: son insectos"
        ],
        "correctAnswer": "Abejas: polinizan flores | Plantas: hacen fotosíntesis | Delfines: mamíferos marinos",
        "hint": "Las abejas visitan las flores, las plantas hacen fotosíntesis y los delfines viven en el mar.",
        "explanation": "¡Exacto! Relacionaste correctamente los tres conceptos científicos."
      },
      {
        "id": "q10_5",
        "type": "reading",
        "interactionType": "ordering",
        "readingTitle": "Etapas del Ciclo del Agua",
        "readingText": "En la naturaleza el agua sigue un orden: 1° Evaporación con el calor del Sol, 2° Condensación al formar las nubes y 3° Precipitación cuando cae como lluvia.",
        "illustration": "water",
        "prompt": "Ordena los acontecimientos del ciclo del agua del primero al último:",
        "visual": "☀️ Evaporación ➔ ☁️ Condensación ➔ 🌧️ Precipitación",
        "itemsToOrder": [
          "3° Precipitación",
          "1° Evaporación",
          "2° Condensación"
        ],
        "options": [
          "1° Evaporación - 2° Condensación - 3° Precipitación",
          "1° Precipitación - 2° Evaporación - 3° Condensación",
          "1° Condensación - 2° Precipitación - 3° Evaporación",
          "1° Evaporación - 2° Precipitación - 3° Condensación"
        ],
        "correctAnswer": "1° Evaporación - 2° Condensación - 3° Precipitación",
        "hint": "Primero el agua sube como vapor (Evaporación), luego forma nubes (Condensación) y al final llueve (Precipitación).",
        "explanation": "¡Brillante! El orden del ciclo del agua es Evaporación, Condensación y Precipitación."
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
    "questionsGrade4": [
      {
        "id": "q10_4g_1",
        "type": "reading",
        "interactionType": "multiple_choice",
        "readingTitle": "Estructura del Texto Expositivo (4° grado)",
        "readingText": "El Sistema Solar está formado por una estrella central llamada Sol y ocho planetas que giran en órbitas elípticas a su alrededor: cuatro rocosos interiores y cuatro gigantes exteriores.",
        "illustration": "solar",
        "prompt": "Según el texto expositivo de 4° grado, ¿cómo se clasifican los ocho planetas del Sistema Solar?",
        "visual": "☀️🪐 4 Rocosos + 4 Gigantes",
        "options": [
          "En cuatro planetas rocosos interiores y cuatro gigantes exteriores",
          "En ocho estrellas calientes que emiten luz propia",
          "En cometas de hielo que no giran alrededor del Sol",
          "En dos planetas pequeños y seis satélites artificiales"
        ],
        "correctAnswer": "En cuatro planetas rocosos interiores y cuatro gigantes exteriores",
        "hint": "Revisa la última parte del fragmento sobre la clasificación de los planetas.",
        "explanation": "¡Excelente! Los ocho planetas se dividen en cuatro rocosos interiores y cuatro gigantes exteriores."
      },
      {
        "id": "q10_4g_2",
        "type": "reading",
        "interactionType": "true_false",
        "readingTitle": "Propósito del Texto Expositivo",
        "readingText": "Los textos expositivos utilizan un lenguaje claro y objetivo para explicar hechos científicos reales, sin inventar personajes fantásticos.",
        "illustration": "book",
        "prompt": "¿Es Verdadero o Falso que la función principal de un texto expositivo es informar y explicar un tema real de forma objetiva?",
        "visual": "📖 Información científica y objetiva",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Los textos expositivos explican datos reales de ciencia, historia o naturaleza.",
        "explanation": "¡Correcto! Su propósito es explicar información verídica con claridad."
      },
      {
        "id": "q10_4g_3",
        "type": "reading",
        "interactionType": "fill_blank",
        "readingTitle": "La Fotosíntesis en las Plantas",
        "readingText": "Mediante el proceso de la fotosíntesis, las hojas de las plantas absorben dióxido de carbono y luz solar para producir su alimento y liberar oxígeno al aire.",
        "illustration": "nature",
        "prompt": "Completa el término científico: Gracias a la fotosíntesis, las plantas liberan ______ al aire que respiramos.",
        "visual": "🌱 Luz solar ➔ Fotosíntesis ➔ [ ______ ]",
        "inputPlaceholder": "Escribe el gas vital...",
        "options": [
          "oxígeno",
          "humo",
          "petróleo",
          "carbón"
        ],
        "correctAnswer": "oxígeno",
        "hint": "Es el gas indispensable que producen las plantas y que necesitamos para respirar.",
        "explanation": "¡Muy bien! Las plantas liberan oxígeno durante la fotosíntesis."
      },
      {
        "id": "q10_4g_4",
        "type": "reading",
        "interactionType": "matching",
        "readingTitle": "Partes de un Texto Expositivo (4° grado)",
        "readingText": "Un texto expositivo bien organizado tiene tres partes: Introducción (presenta el tema), Desarrollo (explica datos y ejemplos) y Conclusión (resume las ideas principales).",
        "illustration": "book",
        "prompt": "Relaciona cada parte de la estructura del texto expositivo con su función:",
        "visual": "Introducción ➔ Desarrollo ➔ Conclusión",
        "options": [
          "Introducción: presenta el tema | Desarrollo: explica datos | Conclusión: resume ideas",
          "Introducción: resume ideas | Desarrollo: presenta el tema | Conclusión: explica datos",
          "Introducción: explica datos | Desarrollo: resume ideas | Conclusión: presenta el tema",
          "Introducción: cuenta un chiste | Desarrollo: inventa magia | Conclusión: oculta el tema"
        ],
        "correctAnswer": "Introducción: presenta el tema | Desarrollo: explica datos | Conclusión: resume ideas",
        "hint": "Al inicio se presenta el tema, en el medio se desarrolla y al final se concluye.",
        "explanation": "¡Exacto! Dominas la estructura de los textos expositivos de 4° grado."
      },
      {
        "id": "q10_4g_5",
        "type": "reading",
        "interactionType": "ordering",
        "readingTitle": "Cadena Alimentaria en el Ecosistema",
        "readingText": "En un ecosistema natural la energía pasa en orden: 1° Productores (plantas que fabrican su alimento), 2° Consumidores herbívoros (animales que comen plantas) y 3° Descomponedores (hongos que reciclan nutrientes).",
        "illustration": "nature",
        "prompt": "Ordena los niveles de la cadena alimentaria explicados en el texto expositivo:",
        "visual": "🌱 Productores ➔ 🦌 Herbívoros ➔ 🍄 Descomponedores",
        "itemsToOrder": [
          "3° Descomponedores",
          "1° Productores",
          "2° Consumidores herbívoros"
        ],
        "options": [
          "1° Productores - 2° Consumidores herbívoros - 3° Descomponedores",
          "1° Descomponedores - 2° Productores - 3° Consumidores herbívoros",
          "1° Consumidores herbívoros - 2° Descomponedores - 3° Productores",
          "1° Productores - 2° Descomponedores - 3° Consumidores herbívoros"
        ],
        "correctAnswer": "1° Productores - 2° Consumidores herbívoros - 3° Descomponedores",
        "hint": "Comienza por las plantas (Productores), sigue con los herbívoros y termina con los descomponedores.",
        "explanation": "¡Brillante! Ese es el orden de la energía en el ecosistema."
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
