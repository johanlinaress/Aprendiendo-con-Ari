# DOCUMENTACIÓN TÉCNICA Y FUNCIONAL — PROYECTO: APRENDIENDO CON ARI

- **Versión:** 1.0
- **Tipo de proyecto:** Aplicación web educativa e interactiva
- **Público objetivo:** Estudiantes de tercero y cuarto de primaria (8 a 10 años)
- **Áreas de aprendizaje:** Matemáticas y Español
- **Idioma:** Español
- **Plataforma:** Web responsive (Mobile First: Teléfonos, Tablets y Computadores)
- **Entorno de desarrollo:** Google Antigravity
- **Frase institucional:** *¡Explora, aprende y diviértete!*

---

## 1. DESCRIPCIÓN GENERAL DEL PROYECTO

### 1.1. Nombre
**Aprendiendo con Ari.**

### 1.2. Descripción
Aprendiendo con Ari es una aplicación web educativa diseñada para fortalecer los conocimientos académicos de niños que cursan tercero y cuarto de primaria.

Su propósito es ofrecer un entorno digital atractivo, amigable, dinámico e interactivo donde los estudiantes puedan repasar diferentes contenidos de Matemáticas y Español mediante explicaciones, ejemplos, ejercicios, juegos, lecturas y evaluaciones.

La plataforma cuenta con un personaje llamado **Ari** (un búho morado con birrete de graduación, gafas redondas y libro verde), que funciona como guía y compañero virtual del estudiante. Ari está presente en las diferentes pantallas, ofrece instrucciones, explica actividades, felicita los logros y motiva al niño cuando comete errores.

La aplicación organiza los contenidos en materias, unidades y niveles progresivos (*Aprendo*, *Practico* y *Demuestro lo aprendido*). Los estudiantes superan actividades para desbloquear nuevos desafíos y avanzar en su proceso de aprendizaje.

### 1.3. Objetivo general
Desarrollar una aplicación web educativa e interactiva que permita a estudiantes de tercero y cuarto de primaria reforzar sus conocimientos en Matemáticas y Español a través de experiencias de aprendizaje progresivas, actividades lúdicas, contenidos didácticos y un sistema de recompensas.

### 1.4. Objetivos específicos
1. Facilitar el repaso de las operaciones matemáticas fundamentales (sumas, restas, multiplicaciones, divisiones y desafíos integrados).
2. Fortalecer los conocimientos gramaticales y lingüísticos (verbos, sujeto y predicado).
3. Desarrollar habilidades de comprensión lectora y análisis de textos expositivos interactivos.
4. Implementar actividades interactivas que favorezcan el aprendizaje activo (selección múltiple, completar espacios, arrastrar y soltar, verdadero o falso, relacionar y ordenar).
5. Motivar a los estudiantes mediante estrellas, medallas y celebraciones.
6. Adaptar la aplicación a computadores, tablets y teléfonos.
7. Proporcionar retroalimentación inmediata y positiva sobre las respuestas.
8. Permitir que cada estudiante avance progresivamente según su grado (`3° Grado` o `4° Grado`).
9. Ofrecer una experiencia educativa accesible y fácil de utilizar.
10. Registrar el progreso del estudiante en `LocalStorage` para continuar posteriormente.

---

## 2. IDENTIDAD VISUAL Y CONCEPTO CREATIVO

### 2.1. Personaje principal: Ari
Ari es la mascota y guía de toda la aplicación:
- Búho morado caricaturesco, amigable y expresivo con birrete académico, gafas redondas y libro verde.
- Estados expresivos consistentes:
  - Ari saludando (`happy`)
  - Ari explicando (`explaining`)
  - Ari pensando (`thinking`)
  - Ari celebrando (`celebrating`)
  - Ari sorprendido (`surprised`)
  - Ari felicitando (`excited`)
  - Ari animando al estudiante (`encouraging`)
  - Ari guiñando / señalando instrucciones (`wink`)

### 2.2. Paleta de colores
| Color | Código | Uso |
| :--- | :--- | :--- |
| Lila principal | `#A78BFA` | Identidad y elementos principales |
| Morado oscuro | `#7251B5` | Títulos y textos destacados |
| Menta / Verde | `#72DCC8` / `#22C55E` | Acciones positivas y Matemáticas |
| Amarillo | `#FFD166` | Estrellas y recompensas |
| Coral | `#FF9292` | Alertas amigables |
| Azul cielo | `#82C5F4` | Elementos informativos y escenario |
| Blanco | `#FFFFFF` | Fondos y tarjetas |
| Gris suave | `#F5F4FA` | Fondos secundarios |
| Texto oscuro | `#303044` | Lectura y contenido |

### 2.3. Tipografía
- **Fredoka** para títulos, encabezados y números destacados.
- **Nunito** / **Quicksand** para textos generales, lecturas e instrucciones.

---

## 3. ESTRUCTURA GENERAL DE NAVEGACIÓN

```text
INICIO (#/inicio)
  ↓
SELECCIÓN DEL GRADO Y PERFIL (#/grado, #/estudiante)
  ↓
MENÚ PRINCIPAL (#/materias)
  ↓
SELECCIÓN DE MATERIA (#/matematicas, #/espanol, #/niveles)
  ↓
EXPLICACIÓN DEL TEMA (Fase 1: Aprendo)
  ↓
LECTURA INTERACTIVA / ACTIVIDAD INTERACTIVA (Fase 2: Practico / Fase 3: Demuestro lo aprendido)
  ↓
RESULTADO, RETROALIMENTACIÓN Y RECOMPENSAS
  ↓
SIGUIENTE NIVEL
```

---

## 4. CONTENIDOS CURRICULARES POR MATERIA Y GRADO

### 4.1. Módulo de Matemáticas (`#/matematicas`)
- **Unidad 1: Sumas (`Nivel 1`)**
  - *3° Grado:* Concepto de suma, sumandos y total, sumas de 2 y 3 cifras (`245 + 132 = 377`), completar sumandos (`125 + ___ = 200`), problemas cotidianos y arrastrar números.
  - *4° Grado:* Sumas de 4 cifras, propiedades conmutativa y asociativa, cálculo mental y problemas de varios pasos.
- **Unidad 2: Restas (`Nivel 2`)**
  - *3° Grado:* Concepto de resta, minuendo, sustraendo y diferencia (`485 - 132 = 353`), restas prestando y problemas (`350 - 125 = 225`).
  - *4° Grado:* Restas de varias cifras, restas con ceros intermedios, relación inversa suma-resta y problemas de varios pasos.
- **Unidad 3: Multiplicaciones (`Nivel 3`)**
  - *3° Grado:* Suma repetida, grupos iguales (`4 grupos de 3 = 12`), tablas del 1 al 10 (`7 × 8 = 56`), multiplicación de 2 cifras por 1 cifra.
  - *4° Grado:* Tablas del 1 al 12, multiplicación de 2 y 3 cifras, propiedades de la multiplicación, problemas y desafío contrarreloj opcional.
- **Unidad 4: Divisiones (`Nivel 4`)**
  - *3° Grado:* Reparto equitativo (`12 estrellas entre 3 amigos = 4`), relación con la multiplicación, divisiones exactas (`48 ÷ 6 = 8`, `36 ÷ 4 = 9`).
  - *4° Grado:* Divisiones exactas e inexactas con identificación del residuo (`17 ÷ 5 = 3 y sobra 2`), comprobación y problemas de reparto.
- **Unidad 5: Desafío Matemático (`Nivel 5`)**
  - Evaluación integradora con problemas contextualizados de las cuatro operaciones (comprar frutas, repartir juguetes, contar animales, organizar grupos, calcular puntos).

### 4.2. Módulo de Español (`#/espanol`)
- **Unidad 1: Los Verbos (`Nivel 6`)**
  - *3° Grado:* Identificación de acciones, encontrar el verbo en oraciones («María juega en el parque»), tiempos verbales (ayer/pasado, hoy/presente, mañana/futuro), completar oraciones («El pájaro vuela por el cielo»).
  - *4° Grado:* Formas verbales, persona gramatical, número singular y plural, tiempos verbales en textos.
- **Unidad 2: El Sujeto (`Nivel 7`)**
  - *3° Grado:* Identificar quién realiza la acción («El perro corre por el jardín» → «El perro»; «Los niños juegan fútbol» → «Los niños»), ordenar palabras.
  - *4° Grado:* Núcleo del sujeto, sujeto simple y compuesto, sujeto expreso y tácito, concordancia.
- **Unidad 3: El Predicado (`Nivel 8`)**
  - *3° Grado:* Qué se dice del sujeto («La niña canta una canción» → «canta una canción»), completar predicados y dividir oración en sujeto y predicado.
  - *4° Grado:* Núcleo del predicado, predicado verbal, relación y concordancia entre sujeto y predicado.
- **Unidad 4: Comprensión Lectora (`Nivel 9`)**
  - Lecturas breves adaptadas por grado con identificación de personajes, idea principal, información explícita, secuencia de hechos e inferencias.
- **Unidad 5: Textos Expositivos Interactivos (`Nivel 10`)**
  - Portada ilustrada con botón «Comenzar a leer», lectura dividida en fragmentos navegables con palabras clave resaltadas, botón «🔊 Escuchar», pregunta de exploración intermedia, evaluación final y pantalla de resultados.
  - Temáticas: *El Sistema Solar*, *Los Animales Vertebrados e Invertebrados*, *El Ciclo del Agua*, *El Cuerpo Humano*, *Las Plantas y la Fotosíntesis*, *El Cuidado del Medio Ambiente*.

---

## 5. SISTEMA DE PROGRESIÓN, PUNTUACIÓN Y RECOMPENSAS

- **Umbral de aprobación y desbloqueo:** Mínimo **70%** de respuestas correctas para aprobar la evaluación de una unidad y desbloquear la siguiente.
- **Puntuación de Estrellas:**
  - Respuesta correcta: `+10` puntos.
  - Completar una actividad: `+20` puntos adicionales.
  - Completar una unidad: bonificación de `+30` puntos.
  - Superar una evaluación con `100%`: bonificación de `+20` puntos.
  - *No se entregan bonificaciones duplicadas al repetir una unidad ya completada.*
- **9 Medallas Oficiales:**
  1. *Primeros pasos*
  2. *Experto en sumas*
  3. *Maestro de las restas*
  4. *Rey de las multiplicaciones*
  5. *Experto en divisiones*
  6. *Explorador de palabras*
  7. *Lector curioso*
  8. *Campeón de la comprensión*
  9. *Superestudiante*

---

## 6. TELEMETRÍA, ANALÍTICA Y MONITOREO EN TIEMPO REAL

- **Plataforma:** Google Analytics 4 (GA4) y Google Tag Manager (`GTM-NWXWZF9D`).
- **Servicio:** `AnalyticsService.js`.
- **Métricas registradas:**
  - Usuarios concurrentes en tiempo real y tiempo medio de sesión.
  - Distribución geográfica interactiva (mapa mundial con países y ciudades).
  - Tipos de dispositivo de acceso (móviles, tablets y computadoras de escritorio).
  - Navegación de rutas SPA HashRouter (`#/inicio`, `#/materias`, `#/niveles`, `#/progreso`, `#/donaciones/nequi`, etc.).
  - Eventos de aprendizaje: `level_start` (nivel y materia), `level_complete` (tasa de acierto, estrellas y puntaje) y selección de grado escolar (`select_grade`).
- **Privacidad y resiliencia:** Arquitectura desacoplada, asíncrona y no invasiva, tolerante a adblockers y modo offline sin emitir errores en consola.
