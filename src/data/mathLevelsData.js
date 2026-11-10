/**
 * @fileoverview Unidades y Banco de Preguntas de Matemáticas (3° y 4° Primaria) - Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

export const MATH_LEVELS_DATA = [
  {
    "id": 1,
    "unitNumber": 1,
    "subject": "matematicas",
    "unitLabel": "Matemáticas - Unidad 1: Sumas",
    "title": "Unidad 1: Sumas",
    "subtitle": "Matemáticas • Adición y problemas cotidianos",
    "category": "matematicas",
    "icon": "➕",
    "badgeColor": "#22c55e",
    "requiredLevel": null,
    "minPassPercent": 70,
    "starsReward": 20,
    "description": "Comprende la adición, identifica los sumandos y resuelve sumas con números naturales junto a Ari.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Cómo funcionan las sumas?",
      "summary3": "Sumar es juntar o reunir dos o más cantidades para obtener un total. Los números que sumamos se llaman SUMANDOS y el resultado se llama SUMA o TOTAL. Siempre empezamos sumando las unidades, luego las decenas y finalmente las centenas.",
      "summary4": "En cuarto grado sumamos cantidades de cuatro o más cifras y aplicamos las propiedades de la adición: la propiedad CONMUTATIVA (el orden de los sumandos no cambia el total) y la propiedad ASOCIATIVA (podemos agrupar sumandos de distintas formas).",
      "steps3": [
        "1️⃣ Alinea los números por unidades (U), decenas (D) y centenas (C).",
        "2️⃣ Suma columna por columna de derecha a izquierda. Si una columna suma 10 o más, lleva una decena a la siguiente columna.",
        "3️⃣ Ejemplo de Ari: 245 + 132 → Unidades: 5 + 2 = 7 | Decenas: 4 + 3 = 7 | Centenas: 2 + 1 = 3 → Total = 377."
      ],
      "steps4": [
        "1️⃣ Sumamos cantidades de cuatro cifras alineando Unidades, Decenas, Centenas y Unidades de Mil (UM).",
        "2️⃣ Propiedad Conmutativa: 1.450 + 2.300 = 2.300 + 1.450 (el orden no altera el total: 3.750).",
        "3️⃣ Propiedad Asociativa: (1.200 + 800) + 450 = 2.000 + 450 = 2.450 libros."
      ],
      "exampleVisual3": "245 + 132 = 377",
      "exampleVisual4": "1.450 + 2.300 = 2.300 + 1.450 = 3.750  |  (1.200 + 800) + 450 = 2.450",
      "steps": [
        "1️⃣ Alinea los números por unidades (U), decenas (D), centenas (C) y unidades de mil (UM).",
        "2️⃣ Suma columna por columna de derecha a izquierda. Si una columna suma 10 o más, lleva una decena a la siguiente columna.",
        "3️⃣ Ejemplo visual: 245 + 132 → Unidades: 5 + 2 = 7 | Decenas: 4 + 3 = 7 | Centenas: 2 + 1 = 3 → Total = 377."
      ],
      "exampleVisual": "245 + 132 = 377"
    },
    "questions": [
      {
        "id": "q1_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "¡Muy bien! Las sumas nos ayudan a juntar cantidades.",
        "prompt": "245 + 132 = ?",
        "visual": "245 + 132 = ?",
        "options": [
          "367",
          "377",
          "357",
          "387"
        ],
        "correctAnswer": "377",
        "hint": "Suma unidades (5+2=7), decenas (4+3=7) y centenas (2+1=3).",
        "explanation": "¡Excelente! 245 + 132 es igual a 377."
      },
      {
        "id": "q1_2",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Actividad B: Completa la operación escribiendo o eligiendo el sumando faltante.",
        "prompt": "125 + ___ = 200",
        "visual": "125 + [ ? ] = 200",
        "inputPlaceholder": "Escribe el número...",
        "options": [
          "75",
          "65",
          "85",
          "25"
        ],
        "correctAnswer": "75",
        "hint": "¿Cuánto le falta a 125 para llegar a 200? Calcula 200 - 125.",
        "explanation": "¡Correcto! 125 + 75 = 200."
      },
      {
        "id": "q1_3",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad C: Resuelve el problema cotidiano de Ari.",
        "prompt": "Ari tiene 125 estrellas y consigue 75 adicionales. ¿Cuántas estrellas tiene ahora?",
        "visual": "⭐ 125 + 75 = ?",
        "options": [
          "190",
          "200",
          "210",
          "185"
        ],
        "correctAnswer": "200",
        "hint": "Suma 5 + 5 = 10 (llevas 1 decena), 2 + 7 + 1 = 10 y 1 + 1 = 2.",
        "explanation": "¡Genial! 125 estrellas + 75 estrellas = 200 estrellas en total."
      },
      {
        "id": "q1_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Actividad D: Arrastra o toca la ficha con el resultado correcto para completar la suma.",
        "prompt": "315 + 142 = ___",
        "visual": "315 + 142 = [ ___ ]",
        "options": [
          "447",
          "457",
          "467",
          "437"
        ],
        "correctAnswer": "457",
        "hint": "Suma 5+2=7 en las unidades, 1+4=5 en las decenas y 3+1=4 en las centenas.",
        "explanation": "¡Muy bien! Al colocar la ficha 457 completamos 315 + 142 = 457."
      },
      {
        "id": "q1_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "¡Última suma de la unidad! Verifica los sumandos con cuidado.",
        "prompt": "512 + 326 = ?",
        "visual": "512 + 326 = ?",
        "options": [
          "828",
          "838",
          "848",
          "738"
        ],
        "correctAnswer": "838",
        "hint": "2+6=8, 1+2=3 y 5+3=8.",
        "explanation": "¡Perfecto! 512 + 326 = 838."
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
    "questionsGrade4": [
      {
        "id": "q1_4g_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "¡Muy bien! En 4° grado sumamos cantidades de cuatro cifras.",
        "prompt": "1.345 + 2.432 = ?",
        "visual": "1.345 + 2.432 = ?",
        "options": [
          "3.677",
          "3.777",
          "3.877",
          "3.577"
        ],
        "correctAnswer": "3.777",
        "hint": "Suma unidades (5+2=7), decenas (4+3=7), centenas (3+4=7) y unidades de mil (1+2=3).",
        "explanation": "¡Excelente! 1.345 + 2.432 es igual a 3.777."
      },
      {
        "id": "q1_4g_2",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Cálculo mental en 4° grado: completa el sumando que falta.",
        "prompt": "1.250 + ___ = 2.000",
        "visual": "1.250 + [ ? ] = 2.000",
        "inputPlaceholder": "Escribe el número...",
        "options": [
          "750",
          "650",
          "850",
          "550"
        ],
        "correctAnswer": "750",
        "hint": "A 1.250 súmale 750 para completar las 2 unidades de mil (2.000).",
        "explanation": "¡Correcto! 1.250 + 750 = 2.000."
      },
      {
        "id": "q1_4g_3",
        "type": "math",
        "interactionType": "true_false",
        "ariTip": "Propiedad conmutativa de la suma en 4° grado.",
        "prompt": "¿Es verdadero o falso que 1.450 + 2.300 da el mismo resultado que 2.300 + 1.450?",
        "visual": "1.450 + 2.300 = 2.300 + 1.450",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Recuerda la propiedad conmutativa: el orden de los sumandos no altera el total.",
        "explanation": "¡Exacto! Por la propiedad conmutativa, ambas sumas dan 3.750."
      },
      {
        "id": "q1_4g_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Arrastra o selecciona el total de esta suma de cuatro cifras.",
        "prompt": "2.340 + 1.520 = ___",
        "visual": "2.340 + 1.520 = [ ___ ]",
        "options": [
          "3.760",
          "3.860",
          "3.960",
          "3.660"
        ],
        "correctAnswer": "3.860",
        "hint": "Suma 340 + 520 = 860 y 2.000 + 1.000 = 3.000.",
        "explanation": "¡Genial! 2.340 + 1.520 = 3.860."
      },
      {
        "id": "q1_4g_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Problema de varios pasos para 4° grado.",
        "prompt": "Una biblioteca tenía 1.200 libros, recibió 450 el lunes y 350 el martes. ¿Cuántos libros tiene en total?",
        "visual": "📚 1.200 + 450 + 350 = ?",
        "options": [
          "1.900",
          "2.000",
          "2.100",
          "1.850"
        ],
        "correctAnswer": "2.000",
        "hint": "Agrupa primero 450 + 350 = 800, y luego suma 1.200 + 800.",
        "explanation": "¡Perfecto! 450 + 350 = 800, y 1.200 + 800 = 2.000 libros."
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
    "id": 2,
    "unitNumber": 2,
    "subject": "matematicas",
    "unitLabel": "Matemáticas - Unidad 2: Restas",
    "title": "Unidad 2: Restas",
    "subtitle": "Matemáticas • Minuendo, sustraendo y diferencia",
    "category": "matematicas",
    "icon": "➖",
    "badgeColor": "#16a34a",
    "requiredLevel": 1,
    "minPassPercent": 70,
    "starsReward": 20,
    "description": "Desarrolla la capacidad de resolver restas y comprender la diferencia entre cantidades.",
    "lesson": {
      "title": "Aprendo con Ari: La Resta y sus Términos",
      "summary3": "Restar es quitar una cantidad de otra o encontrar la diferencia entre dos números. El número mayor del que quitamos se llama MINUENDO, la cantidad que quitamos se llama SUSTRAENDO y el resultado es la DIFERENCIA.",
      "summary4": "En 4° grado resolvemos restas con ceros intermedios desagrupando centenas y unidades de mil, y comprobamos la resta usando su operación inversa: DIFERENCIA + SUSTRAENDO = MINUENDO.",
      "steps3": [
        "1️⃣ Coloca el minuendo arriba y el sustraendo debajo alineando unidades, decenas y centenas.",
        "2️⃣ Si la cifra de arriba es menor que la de abajo, pide prestada 1 decena a la columna de la izquierda.",
        "3️⃣ Ejemplo de Ari: 350 caramelos - 125 caramelos = 225 caramelos."
      ],
      "steps4": [
        "1️⃣ Desagrupación con ceros intermedios: 2.000 - 650 = 1.350 pidiendo prestado a la unidad de mil.",
        "2️⃣ Comprobación inversa: Suma la DIFERENCIA más el SUSTRAENDO para verificar el MINUENDO (1.350 + 650 = 2.000).",
        "3️⃣ Problemas de dos pasos: 3.450 cuadernos producidos menos 1.225 repartidos = 2.225 en bodega."
      ],
      "exampleVisual3": "350 - 125 = 225",
      "exampleVisual4": "4.500 - 1.250 = 3.250  |  Comprobación: 3.250 + 1.250 = 4.500",
      "steps": [
        "1️⃣ Coloca el minuendo arriba y el sustraendo debajo alineando unidades, decenas y centenas.",
        "2️⃣ Si la cifra de arriba es menor que la de abajo, pide prestada 1 decena a la columna de la izquierda.",
        "3️⃣ Ejemplo de Ari: 350 caramelos - 125 caramelos = 225 caramelos."
      ],
      "exampleVisual": "350 - 125 = 225"
    },
    "questions": [
      {
        "id": "q2_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Restar nos permite saber cuántos elementos quedan.",
        "prompt": "485 - 132 = ?",
        "visual": "485 - 132 = ?",
        "options": [
          "343",
          "353",
          "363",
          "333"
        ],
        "correctAnswer": "353",
        "hint": "Resta unidades (5-2=3), decenas (8-3=5) y centenas (4-1=3).",
        "explanation": "¡Exacto! 485 - 132 = 353."
      },
      {
        "id": "q2_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Resuelve la situación cotidiana de los caramelos de Ari.",
        "prompt": "Ari tenía 350 caramelos y regaló 125. ¿Cuántos caramelos le quedan?",
        "visual": "🍬 350 - 125 = ?",
        "options": [
          "215",
          "225",
          "235",
          "245"
        ],
        "correctAnswer": "225",
        "hint": "50 menos 25 es 25, y 300 menos 100 es 200.",
        "explanation": "¡Muy bien! 350 - 125 = 225 caramelos."
      },
      {
        "id": "q2_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Completa el número faltante (sustraendo) en la resta.",
        "prompt": "596 - ___ = 355",
        "visual": "596 - [ ? ] = 355",
        "inputPlaceholder": "Escribe el número...",
        "options": [
          "231",
          "241",
          "251",
          "141"
        ],
        "correctAnswer": "241",
        "hint": "Resta 596 - 355: 6-5=1, 9-5=4 y 5-3=2.",
        "explanation": "¡Correcto! 596 - 241 = 355."
      },
      {
        "id": "q2_4",
        "type": "math",
        "interactionType": "true_false",
        "ariTip": "Identifica si esta operación tiene o no un error.",
        "prompt": "Observa la operación: 850 - 320 = 530. ¿El resultado es correcto (Verdadero) o tiene un error (Falso)?",
        "visual": "850 - 320 = 530",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Comprueba sumando 530 + 320: ¿da 850?",
        "explanation": "¡Genial! Es Verdadero porque 850 - 320 = 530."
      },
      {
        "id": "q2_5",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Arrastra o selecciona la diferencia correcta.",
        "prompt": "768 - 415 = ___",
        "visual": "768 - 415 = [ ___ ]",
        "options": [
          "343",
          "353",
          "363",
          "253"
        ],
        "correctAnswer": "353",
        "hint": "8-5=3, 6-1=5 y 7-4=3.",
        "explanation": "¡Increíble! 768 - 415 = 353."
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
    "questionsGrade4": [
      {
        "id": "q2_4g_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "En 4° grado practicamos restas con ceros intermedios.",
        "prompt": "2.000 - 650 = ?",
        "visual": "2.000 - 650 = ?",
        "options": [
          "1.250",
          "1.350",
          "1.450",
          "1.150"
        ],
        "correctAnswer": "1.350",
        "hint": "Piensa cuánto le falta a 650 para llegar a 2.000 (650 + 350 = 1.000; más 1.000 = 1.350).",
        "explanation": "¡Exacto! 2.000 - 650 = 1.350."
      },
      {
        "id": "q2_4g_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Problema de resta con números de cuatro cifras en 4° grado.",
        "prompt": "Una fábrica produjo 3.450 cuadernos y distribuyó 1.225 a las escuelas. ¿Cuántos cuadernos quedaron en bodega?",
        "visual": "📓 3.450 - 1.225 = ?",
        "options": [
          "2.125",
          "2.225",
          "2.325",
          "2.215"
        ],
        "correctAnswer": "2.225",
        "hint": "50 menos 25 es 25, y 3.400 menos 1.200 es 2.200.",
        "explanation": "¡Muy bien! 3.450 - 1.225 = 2.225 cuadernos."
      },
      {
        "id": "q2_4g_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Usa la relación entre suma y resta para hallar el sustraendo.",
        "prompt": "4.500 - ___ = 3.100",
        "visual": "4.500 - [ ? ] = 3.100",
        "inputPlaceholder": "Escribe el número...",
        "options": [
          "1300",
          "1400",
          "1500",
          "1200"
        ],
        "correctAnswer": "1400",
        "hint": "Resta 4.500 menos 3.100.",
        "explanation": "¡Correcto! 4.500 - 1.400 = 3.100."
      },
      {
        "id": "q2_4g_4",
        "type": "math",
        "interactionType": "true_false",
        "ariTip": "Detecta errores en operaciones.",
        "prompt": "Si en una resta el minuendo es 1.000 y el sustraendo es 450, ¿es Verdadero o Falso que la diferencia es 550?",
        "visual": "1.000 - 450 = 550",
        "options": [
          "Verdadero",
          "Falso"
        ],
        "correctAnswer": "Verdadero",
        "hint": "Suma 550 + 450 para comprobar si obtienes el minuendo (1.000).",
        "explanation": "¡Así es! 550 + 450 = 1.000, por lo tanto es Verdadero."
      },
      {
        "id": "q2_4g_5",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Problema de varios pasos para 4° grado.",
        "prompt": "Un teatro tiene 1.500 asientos. Se vendieron 800 entradas ayer y 350 hoy. ¿Cuántos asientos quedan libres?",
        "visual": "1.500 - (800 + 350) = [ ___ ]",
        "options": [
          "250",
          "350",
          "450",
          "300"
        ],
        "correctAnswer": "350",
        "hint": "800 + 350 = 1.150 entradas vendidas. Ahora calcula 1.500 - 1.150.",
        "explanation": "¡Excelente! Quedan 350 asientos disponibles."
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
    "id": 3,
    "unitNumber": 3,
    "subject": "matematicas",
    "unitLabel": "Matemáticas - Unidad 3: Multiplicaciones",
    "title": "Unidad 3: Multiplicaciones",
    "subtitle": "Matemáticas • Suma repetida, grupos iguales y tablas",
    "category": "matematicas",
    "icon": "✖️",
    "badgeColor": "#15803d",
    "requiredLevel": 2,
    "minPassPercent": 70,
    "starsReward": 25,
    "hasOptionalTimer": true,
    "description": "Comprende la multiplicación como suma repetida y domina las tablas de multiplicar con Ari.",
    "lesson": {
      "title": "Aprendo con Ari: Multiplicar es Sumar Grupos Iguales",
      "summary3": "Multiplicar es una forma rápida de sumar el mismo número varias veces. Por ejemplo, 4 grupos con 3 elementos cada uno es 3 + 3 + 3 + 3 = 12, que se escribe 4 × 3 = 12.",
      "summary4": "En 4° grado dominamos las tablas del 1 al 12, multiplicamos números de dos y tres cifras y aplicamos la propiedad distributiva (por ejemplo: 15 × 6 = (10 × 6) + (5 × 6) = 60 + 30 = 90).",
      "steps3": [
        "1️⃣ Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.",
        "2️⃣ Observa los grupos iguales: 4 cajas con 3 estrellas = 4 × 3 = 12 estrellas.",
        "3️⃣ Puedes activar el reloj opcional si quieres practicar tu agilidad mental sin ninguna penalización."
      ],
      "steps4": [
        "1️⃣ Propiedad Distributiva: Multiplicar 14 × 6 = (10 × 6) + (4 × 6) = 60 + 24 = 84.",
        "2️⃣ Tablas extendidas hasta el 12: Domina 12 × 9 = 108 y 125 × 4 = 500.",
        "3️⃣ Multiplicación por dos cifras: 15 × 12 = 180 y situaciones escolares (8 salones × 25 pupitres = 200)."
      ],
      "exampleVisual3": "4 grupos × 3 = 12  |  7 × 8 = 56",
      "exampleVisual4": "14 × 6 = (10×6) + (4×6) = 84  |  12 × 9 = 108  |  15 × 12 = 180",
      "steps": [
        "1️⃣ Los números que se multiplican se llaman FACTORES y el resultado se llama PRODUCTO.",
        "2️⃣ Observa los grupos iguales: 4 cajas con 3 estrellas = 4 × 3 = 12 estrellas.",
        "3️⃣ Puedes activar el reloj opcional si quieres practicar tu agilidad mental sin ninguna penalización."
      ],
      "exampleVisual": "4 grupos × 3 = 12  |  7 × 8 = 56"
    },
    "questions": [
      {
        "id": "q3_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad A: Encuentra el resultado en la tabla del 7 y del 8.",
        "prompt": "7 × 8 = ?",
        "visual": "7 × 8 = ?",
        "options": [
          "54",
          "56",
          "48",
          "64"
        ],
        "correctAnswer": "56",
        "hint": "7 × 7 es 49; súmale 7 más: 49 + 7 = 56.",
        "explanation": "¡Excelente! 7 multiplicado por 8 es 56."
      },
      {
        "id": "q3_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad B: Representación visual de grupos iguales.",
        "prompt": "Observa 4 grupos con 3 estrellas cada uno: (⭐⭐⭐) (⭐⭐⭐) (⭐⭐⭐) (⭐⭐⭐). ¿Cuántos elementos hay en total?",
        "visual": "4 grupos × 3 ⭐ = ?",
        "options": [
          "10",
          "12",
          "14",
          "9"
        ],
        "correctAnswer": "12",
        "hint": "Suma 3 + 3 + 3 + 3 o multiplica 4 × 3.",
        "explanation": "¡Correcto! 4 grupos de 3 elementos suman 12 elementos en total."
      },
      {
        "id": "q3_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Actividad C: Completa la tabla de multiplicar incompleta.",
        "prompt": "6 × ___ = 42",
        "visual": "6 × [ ? ] = 42",
        "inputPlaceholder": "Factor faltante...",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correctAnswer": "7",
        "hint": "Recuerda la tabla del 6: 6×5=30, 6×6=36, 6×7=42.",
        "explanation": "¡Así es! 6 × 7 = 42."
      },
      {
        "id": "q3_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Multiplica dos cifras por una cifra y arrastra el producto.",
        "prompt": "12 × 4 = ___",
        "visual": "12 × 4 = [ ___ ]",
        "options": [
          "44",
          "48",
          "36",
          "52"
        ],
        "correctAnswer": "48",
        "hint": "Multiplica 4 × 2 = 8 en las unidades y 4 × 1 = 4 en las decenas.",
        "explanation": "¡Muy bien! 12 × 4 = 48."
      },
      {
        "id": "q3_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad D: Desafío final de multiplicación.",
        "prompt": "25 × 3 = ?",
        "visual": "25 × 3 = ?",
        "options": [
          "65",
          "75",
          "85",
          "70"
        ],
        "correctAnswer": "75",
        "hint": "25 + 25 son 50, más 25 son 75.",
        "explanation": "¡Fantástico! 25 × 3 = 75."
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
    "questionsGrade4": [
      {
        "id": "q3_4g_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad A: Multiplicación aplicando la propiedad distributiva en 4° grado.",
        "prompt": "14 × 6 = ?",
        "visual": "14 × 6 = ?",
        "options": [
          "74",
          "84",
          "64",
          "94"
        ],
        "correctAnswer": "84",
        "hint": "Multiplica 10 × 6 = 60 y 4 × 6 = 24. Luego suma 60 + 24.",
        "explanation": "¡Excelente! 14 × 6 = 84."
      },
      {
        "id": "q3_4g_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Tablas del 1 al 12 para 4° grado.",
        "prompt": "12 × 9 = ?",
        "visual": "12 × 9 = ?",
        "options": [
          "98",
          "108",
          "118",
          "96"
        ],
        "correctAnswer": "108",
        "hint": "10 × 9 = 90 y 2 × 9 = 18. Suma 90 + 18.",
        "explanation": "¡Correcto! 12 × 9 = 108."
      },
      {
        "id": "q3_4g_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Multiplicación de tres cifras por una cifra.",
        "prompt": "125 × 4 = ___",
        "visual": "125 × 4 = [ ? ]",
        "inputPlaceholder": "Escribe el producto...",
        "options": [
          "400",
          "500",
          "600",
          "450"
        ],
        "correctAnswer": "500",
        "hint": "100 × 4 = 400 y 25 × 4 = 100. Suma 400 + 100.",
        "explanation": "¡Muy bien! 125 × 4 = 500."
      },
      {
        "id": "q3_4g_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Multiplicación por dos cifras en 4° grado.",
        "prompt": "15 × 12 = ___",
        "visual": "15 × 12 = [ ___ ]",
        "options": [
          "160",
          "180",
          "170",
          "190"
        ],
        "correctAnswer": "180",
        "hint": "15 × 10 = 150 y 15 × 2 = 30. Suma 150 + 30.",
        "explanation": "¡Genial! 15 × 12 = 180."
      },
      {
        "id": "q3_4g_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Problema cotidiano con multiplicación.",
        "prompt": "En un colegio hay 8 salones y en cada salón hay 25 pupitres. ¿Cuántos pupitres hay en total?",
        "visual": "🏫 8 × 25 = ?",
        "options": [
          "180",
          "200",
          "220",
          "160"
        ],
        "correctAnswer": "200",
        "hint": "4 × 25 = 100, así que 8 × 25 es el doble de 100.",
        "explanation": "¡Brillante! 8 × 25 = 200 pupitres."
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
    "id": 4,
    "unitNumber": 4,
    "subject": "matematicas",
    "unitLabel": "Matemáticas - Unidad 4: Divisiones",
    "title": "Unidad 4: Divisiones",
    "subtitle": "Matemáticas • Reparto equitativo, cociente y residuo",
    "category": "matematicas",
    "icon": "➗",
    "badgeColor": "#0d9488",
    "requiredLevel": 3,
    "minPassPercent": 70,
    "starsReward": 25,
    "description": "Comprende la división como reparto en partes iguales y su relación con la multiplicación.",
    "lesson": {
      "title": "Aprendo con Ari: Dividir es Repartir en Partes Iguales",
      "summary3": "Dividir consiste en repartir una cantidad en grupos iguales. Por ejemplo, si Ari reparte 12 estrellas entre 3 amigos, cada uno recibe 4 estrellas porque 12 ÷ 3 = 4.",
      "summary4": "En 4° grado identificamos el DIVIDENDO, el DIVISOR, el COCIENTE y el RESIDUO. Cuando una división no es exacta, sobra un residuo menor que el divisor (por ejemplo: 17 ÷ 5 = 3 y sobra 2, porque 5 × 3 + 2 = 17).",
      "steps3": [
        "1️⃣ Pregúntate: ¿qué número multiplicado por el divisor se acerca o iguala al dividendo?",
        "2️⃣ División exacta: 48 ÷ 6 = 8 (porque 6 × 8 = 48 y el residuo es 0).",
        "3️⃣ División con residuo: 17 ÷ 5 = 3 y sobra 2 (porque 5 × 3 = 15 y 17 - 15 = 2)."
      ],
      "steps4": [
        "1️⃣ División exacta mayor: 96 estudiantes en 8 grupos = 12 por equipo (8 × 12 = 96).",
        "2️⃣ Comprobación y residuo: En 29 ÷ 6 = 4 y sobra 5 (porque 6 × 4 + 5 = 29 y 5 < 6).",
        "3️⃣ Fórmula de comprobación: Dividendo = (Divisor × Cociente) + Residuo."
      ],
      "exampleVisual3": "12 ÷ 3 = 4  |  17 ÷ 5 = 3 (residuo 2)",
      "exampleVisual4": "96 ÷ 8 = 12  |  (6 × 7) + 3 = 45  |  144 ÷ 12 = 12",
      "steps": [
        "1️⃣ Pregúntate: ¿qué número multiplicado por el divisor se acerca o iguala al dividendo?",
        "2️⃣ División exacta: 48 ÷ 6 = 8 (porque 6 × 8 = 48 y el residuo es 0).",
        "3️⃣ División con residuo: 17 ÷ 5 = 3 y sobra 2 (porque 5 × 3 = 15 y 17 - 15 = 2)."
      ],
      "exampleVisual": "12 ÷ 3 = 4  |  17 ÷ 5 = 3 (residuo 2)"
    },
    "questions": [
      {
        "id": "q4m_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad A: Reparte los elementos en partes iguales.",
        "prompt": "Ari tiene 12 estrellas y debe repartirlas entre 3 amigos. ¿Cuántas recibe cada uno?",
        "visual": "⭐ 12 ÷ 3 = ?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctAnswer": "4",
        "hint": "¿Qué número multiplicado por 3 da 12?",
        "explanation": "¡Exacto! 12 ÷ 3 = 4 estrellas para cada amigo."
      },
      {
        "id": "q4m_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad B: Selecciona el resultado de la división.",
        "prompt": "48 ÷ 6 = ?",
        "visual": "48 ÷ 6 = ?",
        "options": [
          "7",
          "8",
          "9",
          "6"
        ],
        "correctAnswer": "8",
        "hint": "Recuerda la tabla del 6: 6 × 8 = 48.",
        "explanation": "¡Muy bien! 48 dividido entre 6 es 8."
      },
      {
        "id": "q4m_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Actividad C: Identifica el residuo de la división.",
        "prompt": "En la división 17 ÷ 5 = 3, ¿cuánto sobra (cuál es el residuo)?",
        "visual": "17 ÷ 5 = 3 y sobra [ ? ]",
        "inputPlaceholder": "Escribe el residuo...",
        "options": [
          "1",
          "2",
          "3",
          "0"
        ],
        "correctAnswer": "2",
        "hint": "Multiplica 5 × 3 = 15. ¿Cuánto falta de 15 para llegar a 17?",
        "explanation": "¡Correcto! 5 × 3 = 15, y 17 - 15 = 2. Sobra 2."
      },
      {
        "id": "q4m_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Actividad D: Resuelve el problema de reparto escolar.",
        "prompt": "Un profesor tiene 36 lápices y quiere repartirlos entre 4 estudiantes. ¿Cuántos recibe cada estudiante?",
        "visual": "✏️ 36 ÷ 4 = [ ___ ]",
        "options": [
          "8",
          "9",
          "7",
          "10"
        ],
        "correctAnswer": "9",
        "hint": "Busca en la tabla del 4 qué número da 36 (4 × 9 = 36).",
        "explanation": "¡Excelente! 36 ÷ 4 = 9 lápices para cada estudiante."
      },
      {
        "id": "q4m_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Relación entre multiplicación y división.",
        "prompt": "72 ÷ 8 = ?",
        "visual": "72 ÷ 8 = ?",
        "options": [
          "8",
          "9",
          "7",
          "6"
        ],
        "correctAnswer": "9",
        "hint": "Recuerda que 8 × 9 = 72.",
        "explanation": "¡Fantástico! 72 ÷ 8 = 9."
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
    "questionsGrade4": [
      {
        "id": "q4m_4g_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad A: Reparto equitativo con cantidades mayores en 4° grado.",
        "prompt": "En un campamento de ciencias hay 96 estudiantes organizados en 8 equipos iguales. ¿Cuántos estudiantes hay en cada equipo?",
        "visual": "⛺ 96 ÷ 8 = ?",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctAnswer": "12",
        "hint": "Piensa qué número multiplicado por 8 da 96 (8 × 12 = 96).",
        "explanation": "¡Exacto! 96 ÷ 8 = 12 estudiantes por equipo."
      },
      {
        "id": "q4m_4g_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Actividad B: Selecciona el cociente exacto de tres cifras.",
        "prompt": "144 ÷ 12 = ?",
        "visual": "144 ÷ 12 = ?",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctAnswer": "12",
        "hint": "Recuerda la tabla del 12: 12 × 12 = 144.",
        "explanation": "¡Muy bien! 144 ÷ 12 = 12."
      },
      {
        "id": "q4m_4g_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Actividad C: Identifica el residuo en una división inexacta de 4° grado.",
        "prompt": "En la división 29 ÷ 6 = 4, ¿cuál es el residuo que sobra?",
        "visual": "29 ÷ 6 = 4 y sobra [ ? ]",
        "inputPlaceholder": "Escribe el residuo...",
        "options": [
          "3",
          "4",
          "5",
          "2"
        ],
        "correctAnswer": "5",
        "hint": "6 × 4 = 24, y para llegar a 29 sobran 5.",
        "explanation": "¡Correcto! 29 ÷ 6 = 4 y sobra 5."
      },
      {
        "id": "q4m_4g_4",
        "type": "math",
        "interactionType": "drag_drop",
        "ariTip": "Actividad D: Reparto escolar en 4° grado.",
        "prompt": "La biblioteca escolar repartió 84 libros de cuentos en partes iguales entre 7 salones. ¿Cuántos libros recibió cada salón?",
        "visual": "📚 84 ÷ 7 = [ ___ ]",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctAnswer": "12",
        "hint": "7 × 10 = 70 y 7 × 2 = 14; por tanto, 7 × 12 = 84.",
        "explanation": "¡Genial! Cada salón recibió 12 libros."
      },
      {
        "id": "q4m_4g_5",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Comprobación de una división con residuo.",
        "prompt": "Si en una división el divisor es 6, el cociente es 7 y el residuo es 3, ¿cuál es el dividendo?",
        "visual": "(6 × 7) + 3 = ?",
        "options": [
          "42",
          "45",
          "48",
          "39"
        ],
        "correctAnswer": "45",
        "hint": "Multiplica divisor por cociente (6 × 7 = 42) y suma el residuo (+ 3).",
        "explanation": "¡Brillante! (6 × 7) + 3 = 42 + 3 = 45."
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
    "id": 5,
    "unitNumber": 5,
    "subject": "matematicas",
    "unitLabel": "Matemáticas - Unidad 5: Desafío Matemático",
    "title": "Unidad 5: Desafío Matemático",
    "subtitle": "Matemáticas • Problemas integradores de las 4 operaciones",
    "category": "matematicas",
    "icon": "🏆",
    "badgeColor": "#059669",
    "requiredLevel": 4,
    "minPassPercent": 70,
    "starsReward": 30,
    "description": "Combina sumas, restas, multiplicaciones y divisiones para resolver situaciones escolares y cotidianas.",
    "lesson": {
      "title": "Aprendo con Ari: ¿Qué Operación Debo Usar?",
      "summary3": "Para resolver un problema matemático, primero leemos con atención qué nos preguntan: si juntamos cantidades usamos SUMA (+), si quitamos o comparamos usamos RESTA (-), si repetimos grupos iguales usamos MULTIPLICACIÓN (×) y si repartimos en partes iguales usamos DIVISIÓN (÷).",
      "summary4": "En 4° grado muchos desafíos combinan dos operaciones seguidas con jerarquía y paréntesis. Identifica los datos, resuelve el primer paso entre paréntesis y usa ese resultado para encontrar la respuesta final.",
      "steps3": [
        "1️⃣ Juntar o agregar colecciones ➔ SUMA (+).",
        "2️⃣ Quitar, gastar o hallar cuánto falta ➔ RESTA (-).",
        "3️⃣ Varios grupos con la misma cantidad ➔ MULTIPLICACIÓN (×) | Repartir en partes iguales ➔ DIVISIÓN (÷)."
      ],
      "steps4": [
        "1️⃣ Paréntesis y orden: Resuelve primero la operación dentro del paréntesis.",
        "2️⃣ Problema de dos pasos: (6 cajas × 25 libros) + 50 donados = 150 + 50 = 200 libros.",
        "3️⃣ Operaciones combinadas: (140 - 20) ÷ 6 = 120 ÷ 6 = 20 galletas por caja."
      ],
      "exampleVisual3": "➕  ➖  ✖️  ➗",
      "exampleVisual4": "(6 × 25) + 50 = 200 libros  |  (140 - 20) ÷ 6 = 20 galletas",
      "steps": [
        "1️⃣ Juntar o agregar colecciones ➔ SUMA (+).",
        "2️⃣ Quitar, gastar o hallar cuánto falta ➔ RESTA (-).",
        "3️⃣ Varios grupos con la misma cantidad ➔ MULTIPLICACIÓN (×) | Repartir en partes iguales ➔ DIVISIÓN (÷)."
      ],
      "exampleVisual": "➕  ➖  ✖️  ➗"
    },
    "questions": [
      {
        "id": "q5m_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Situación 1: Comprar frutas en la tienda escolar.",
        "prompt": "Ana compró 135 manzanas y 165 naranjas para la feria escolar. ¿Cuántas frutas compró en total?",
        "visual": "🍎 135 + 🍊 165 = ?",
        "options": [
          "290",
          "300",
          "310",
          "280"
        ],
        "correctAnswer": "300",
        "hint": "Para reunir ambas cantidades debes sumar 135 + 165.",
        "explanation": "¡Excelente! Usamos una suma: 135 + 165 = 300 frutas."
      },
      {
        "id": "q5m_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Situación 2: Repartir juguetes en partes iguales.",
        "prompt": "Se quieren repartir 40 juguetes en partes iguales dentro de 5 cajas. ¿Cuántos juguetes van en cada caja?",
        "visual": "🧸 40 ÷ 5 = ?",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correctAnswer": "8",
        "hint": "Repartir en partes iguales es dividir: 40 ÷ 5.",
        "explanation": "¡Correcto! 40 ÷ 5 = 8 juguetes por caja."
      },
      {
        "id": "q5m_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Situación 3: Organizar grupos de animales en la granja.",
        "prompt": "En una granja hay 6 corrales y en cada corral hay 9 ovejas. ¿Cuántas ovejas hay en total?",
        "visual": "🐑 6 × 9 = [ ? ]",
        "inputPlaceholder": "Total de ovejas...",
        "options": [
          "45",
          "54",
          "63",
          "48"
        ],
        "correctAnswer": "54",
        "hint": "Son 6 grupos iguales de 9 ovejas: multiplica 6 × 9.",
        "explanation": "¡Muy bien! 6 × 9 = 54 ovejas en total."
      },
      {
        "id": "q5m_4",
        "type": "math",
        "interactionType": "ordering",
        "ariTip": "Ordena estos resultados matemáticos de MENOR a MAYOR.",
        "prompt": "Ordena los siguientes números de menor a mayor: 450, 120, 310, 280",
        "visual": "Menor ➔ Mayor",
        "itemsToOrder": [
          "450",
          "120",
          "310",
          "280"
        ],
        "options": [
          "120 - 280 - 310 - 450",
          "120 - 310 - 280 - 450",
          "450 - 310 - 280 - 120",
          "280 - 120 - 310 - 450"
        ],
        "correctAnswer": "120 - 280 - 310 - 450",
        "hint": "Empieza por el que tiene 1 centena (120) y termina por el de 4 centenas (450).",
        "explanation": "¡Perfecto! El orden ascendente es 120 - 280 - 310 - 450."
      },
      {
        "id": "q5m_5",
        "type": "math",
        "interactionType": "matching",
        "ariTip": "Relaciona cada situación con la operación matemática que la resuelve.",
        "prompt": "¿Cuál combinación relaciona correctamente cada situación con su operación?",
        "visual": "Reunir ➔ (+) | Quitar ➔ (-) | Repartir ➔ (÷)",
        "pairs": [
          {
            "left": "Reunir colecciones",
            "right": "Suma (+)"
          },
          {
            "left": "Quitar elementos",
            "right": "Resta (-)"
          },
          {
            "left": "Repartir en partes iguales",
            "right": "División (÷)"
          }
        ],
        "options": [
          "Reunir: Suma (+) | Quitar: Resta (-) | Repartir: División (÷)",
          "Reunir: Resta (-) | Quitar: Suma (+) | Repartir: Multiplicación (×)",
          "Reunir: División (÷) | Quitar: Suma (+) | Repartir: Resta (-)",
          "Reunir: Multiplicación (×) | Quitar: División (÷) | Repartir: Suma (+)"
        ],
        "correctAnswer": "Reunir: Suma (+) | Quitar: Resta (-) | Repartir: División (÷)",
        "hint": "Reunir es sumar (+), quitar es restar (-) y repartir equitativamente es dividir (÷).",
        "explanation": "¡Felicidades! Identificaste perfectamente cuándo usar cada operación."
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
    "questionsGrade4": [
      {
        "id": "q5m_4g_1",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Desafío 1 (4° grado): Problema combinado de multiplicación y suma.",
        "prompt": "El colegio compró 6 cajas con 25 libros cada una y además recibió una donación de 50 libros. ¿Cuántos libros nuevos hay en total?",
        "visual": "📚 (6 × 25) + 50 = ?",
        "options": [
          "180",
          "200",
          "220",
          "190"
        ],
        "correctAnswer": "200",
        "hint": "Primero multiplica 6 × 25 = 150 y luego suma los 50 libros donados.",
        "explanation": "¡Excelente! 6 × 25 = 150, y 150 + 50 = 200 libros en total."
      },
      {
        "id": "q5m_4g_2",
        "type": "math",
        "interactionType": "multiple_choice",
        "ariTip": "Desafío 2 (4° grado): Resta y división en dos pasos.",
        "prompt": "En una panadería hornearon 140 galletas, apartaron 20 para degustación y empacaron el resto en 6 cajas iguales. ¿Cuántas galletas van en cada caja?",
        "visual": "🍪 (140 - 20) ÷ 6 = ?",
        "options": [
          "18",
          "20",
          "22",
          "15"
        ],
        "correctAnswer": "20",
        "hint": "Primero resta 140 - 20 = 120 galletas, y luego divide 120 ÷ 6.",
        "explanation": "¡Correcto! 140 - 20 = 120, y 120 ÷ 6 = 20 galletas por caja."
      },
      {
        "id": "q5m_4g_3",
        "type": "math",
        "interactionType": "fill_blank",
        "ariTip": "Desafío 3 (4° grado): Presupuesto escolar.",
        "prompt": "Un club de ciencias tenía 2.500 puntos, ganó 850 en un concurso y canjeó 1.350 por un microscopio. ¿Cuántos puntos le quedan?",
        "visual": "🔬 (2.500 + 850) - 1.350 = [ ? ]",
        "inputPlaceholder": "Puntos restantes...",
        "options": [
          "1900",
          "2000",
          "2100",
          "1850"
        ],
        "correctAnswer": "2000",
        "hint": "Suma 2.500 + 850 = 3.350, y luego resta 3.350 - 1.350.",
        "explanation": "¡Muy bien! 2.500 + 850 = 3.350, y 3.350 - 1.350 = 2.000 puntos."
      },
      {
        "id": "q5m_4g_4",
        "type": "math",
        "interactionType": "ordering",
        "ariTip": "Ordena estas cantidades de cuatro cifras de MENOR a MAYOR.",
        "prompt": "Ordena los puntajes del torneo matemático de menor a mayor: 3.450, 1.890, 4.120, 2.750",
        "visual": "Menor ➔ Mayor (4 cifras)",
        "itemsToOrder": [
          "3.450",
          "1.890",
          "4.120",
          "2.750"
        ],
        "options": [
          "1.890 - 2.750 - 3.450 - 4.120",
          "1.890 - 3.450 - 2.750 - 4.120",
          "4.120 - 3.450 - 2.750 - 1.890",
          "2.750 - 1.890 - 3.450 - 4.120"
        ],
        "correctAnswer": "1.890 - 2.750 - 3.450 - 4.120",
        "hint": "Compara las unidades de mil: 1.890 (1 mil), 2.750 (2 mil), 3.450 (3 mil) y 4.120 (4 mil).",
        "explanation": "¡Perfecto! El orden ascendente es 1.890 - 2.750 - 3.450 - 4.120."
      },
      {
        "id": "q5m_4g_5",
        "type": "math",
        "interactionType": "matching",
        "ariTip": "Relaciona cada expresión combinada con su resultado.",
        "prompt": "En 4° grado resolvemos primero los paréntesis. ¿Cuál opción relaciona cada expresión con su resultado?",
        "visual": "(12 × 3) + 4 | (50 - 10) ÷ 5 | 100 - (8 × 5)",
        "pairs": [
          {
            "left": "(12 × 3) + 4",
            "right": "40"
          },
          {
            "left": "(50 - 10) ÷ 5",
            "right": "8"
          },
          {
            "left": "100 - (8 × 5)",
            "right": "60"
          }
        ],
        "options": [
          "(12×3)+4 = 40 | (50-10)÷5 = 8 | 100-(8×5) = 60",
          "(12×3)+4 = 60 | (50-10)÷5 = 40 | 100-(8×5) = 8",
          "(12×3)+4 = 8 | (50-10)÷5 = 60 | 100-(8×5) = 40",
          "(12×3)+4 = 48 | (50-10)÷5 = 10 | 100-(8×5) = 50"
        ],
        "correctAnswer": "(12×3)+4 = 40 | (50-10)÷5 = 8 | 100-(8×5) = 60",
        "hint": "36 + 4 = 40; 40 ÷ 5 = 8; y 100 - 40 = 60.",
        "explanation": "¡Felicidades! Resolviste las tres expresiones combinadas de 4° grado."
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
  }
];
