# 🦉 Aprendiendo con Ari

**¡Explora, aprende y diviértete con Ari el Búho Sabio!**

## 🌐 ¡Pruébalo ahora en tu navegador!

👉 **[▶️ Jugar Aprendiendo con Ari en Vivo (GitHub Pages)](https://johanlinaress.github.io/Aprendiendo-con-Ari/)**  
🔗 Enlace directo: `https://johanlinaress.github.io/Aprendiendo-con-Ari/`

---

Plataforma educativa web interactiva y gamificada diseñada para estudiantes de **3° y 4° de primaria**, enfocada en el refuerzo escolar de **Matemáticas** y **Español** mediante lecciones guiadas (*1. Aprendo*, *2. Practico* y *3. Demuestro lo aprendido*), textos expositivos ilustrados con palabras clave, efectos sonoros reales, música ambiental adaptativa, síntesis de voz y recompensas con **Ari**, el simpático búho sabio.

---

## ✨ Características Principales

### 🦉 1. Acompañamiento pedagógico de Ari (`AriMascot.js`)
- Mascota interactiva en SVG vectorial puro con birrete académico, gafas redondas y libro en 8 estados emocionales (saludo, pensamiento, celebración, aliento, concentración, etc.).
- Explicaciones guiadas paso a paso, pistas contextuales con sonido y botón de saludo interactivo con animación.

### 🎓 2. Currículo 100% Diferenciado para 3° y 4° Grado
- **Selector de Grado escolar (`#/grado`):** Adapta la complejidad, el vocabulario y las magnitudes numéricas según el grado seleccionado.
- **10 unidades completas con bancos dedicados:** Cada unidad cuenta con 5 preguntas exclusivas para 3° grado y 5 preguntas exclusivas para 4° grado (**cero enunciados repetidos** entre ambos grados).
- **Tratamiento lingüístico riguroso:** Normalización ortográfica que preserva intacta la letra `ñ` (`niño` ≠ `nino`) y tolera tildes, mayúsculas y espacios accidentales.

### ➕ 3. Módulo de Matemáticas (5 Unidades)
1. **Unidad 1: Sumas:** Adición de 3 y 4 cifras, sumandos, propiedad conmutativa y cálculo mental.
2. **Unidad 2: Restas:** Minuendo, sustraendo, diferencia, restas con ceros intermedios y situaciones cotidianas.
3. **Unidad 3: Multiplicaciones:** Suma repetida, grupos iguales, tablas del 1 al 12, propiedad distributiva y temporizador opcional sin penalización.
4. **Unidad 4: Divisiones:** Reparto en partes iguales, cociente exacto, dividendos de hasta tres cifras y división con residuo.
5. **Unidad 5: Desafío Matemático:** Problemas combinados de dos pasos y selección de la operación adecuada.

### 📖 4. Módulo de Español (5 Unidades)
1. **Unidad 1: Los Verbos:** Acciones, formas conjugadas, tiempos verbales (pasado, presente, futuro), número y persona gramatical.
2. **Unidad 2: El Sujeto:** Reconocimiento de quién realiza la acción, núcleo del sujeto, sujeto simple, compuesto y tácito.
3. **Unidad 3: El Predicado:** Estructura de la oración, predicado verbal, núcleo del predicado y complementos.
4. **Unidad 4: Comprensión Lectora:** Personajes, idea principal, orden secuencial de hechos e inferencias.
5. **Unidad 5: Textos Expositivos Interactivos:** Portada ilustrada, fragmentos de lectura interactivos, glosario con palabras clave resaltadas, botón de lectura en voz alta (`🔊 Escuchar`), preguntas de exploración intermedia y evaluación final (*El Sistema Solar*, *El Ciclo del Agua*, *Ecosistemas y Animales* y *La Fotosíntesis*).

### 🎮 5. 6 Modalidades de Interacción Lúdica
- **Selección múltiple:** Opciones en fichas matemáticas táctiles o botones de radio.
- **Completar espacios (Fill in the blank):** Entrada de texto o número con validación flexible.
- **Arrastrar y soltar (Drag and drop):** Totalmente accesible tanto con ratón como con pantallas táctiles.
- **Verdadero o Falso:** Análisis crítico y detección de errores.
- **Relacionar conceptos (Matching):** Conexión de pares conceptuales con retroalimentación visual.
- **Ordenar elementos (Ordering):** Clasificación cronológica y secuencias narrativas o numéricas.

### 🎵 6. Sistema de Audio y Música Adaptativa (`SoundService.js`)
- **Música ambiental de navegación:** *"Praia de Domingo"* (bucle alegre para Inicio, Materias, Grado, Niveles y Progreso).
- **Música de concentración en pruebas:** *"Clair de Lune"* (pista suave de piano durante actividades y ejercicios).
- **Efectos de sonido reales (archivos MP3 en `sounds/`):**
  - *Collect Points:* Campanada festiva al acertar respuestas.
  - *Level Passed:* Fanfarria de victoria al completar unidades con 3 estrellas.
  - Tonos sintetizados Web Audio API de respaldo para clics, errores, pistas y bloqueos.
- **Controles independientes en la barra superior:** Botones dedicados para silenciar o reactivar **Música** (`🎵`/`🔇`) y **Sonido** (`🔊`/`🔇`) en tiempo real.
- **Síntesis de voz integrada (Web Speech API):** Lectura en voz alta en español neutro con entonación infantil agradable.
- **Desbloqueo fluido de Autoplay:** Activación inmediata ante el primer gesto del usuario (`pointerdown`, `click`, etc.) y streaming con soporte `HTTP 206 Partial Content`.

### ♿ 7. Accesibilidad de Primer Nivel (WCAG 2.1 AA)
- **Navegación por teclado completa (WAI-ARIA):** Patrón *roving tabindex* (`0`/`-1`) y control con flechas (`←`, `→`, `↑`, `↓`), `Home` y `End` en pestañas (`role="tablist"`) y grupos de opciones (`role="radiogroup"`), con enlaces `aria-controls` / `role="tabpanel"`.
- **Foco visible de alto contraste:** Contorno dorado de 3px con anillo de realce para todos los elementos interactivos (`:focus-visible`).
- **Preferencia de movimiento reducido:** Compatible con `@media (prefers-reduced-motion: reduce)` para desactivar animaciones no esenciales.
- **Diseño Responsive Mobile-First:** Optimizado para pantallas pequeñas (`375x667`), tablets y monitores de escritorio.

### 🏆 8. Gamificación y Persistencia
- Puntuación acumulativa, estrellas de recompensa, multiplicador de racha de aciertos.
- **9 Medallas y logros desbloqueables:** *Primeros pasos*, *Experto en sumas*, *Maestro de las restas*, *Rey de las multiplicaciones*, *Experto en divisiones*, *Explorador de palabras*, *Lector curioso*, *Campeón de comprensión* y *Superestudiante*.
- Persistencia local automática en `localStorage` con recuperación de sesión activa si se recarga la página.

---

## 🛠️ Tecnologías Utilizadas

- **JavaScript Moderno (ES6+):** Arquitectura SPA basada en componentes limpios y desacoplados, sin frameworks externos pesados.
- **CSS3:** Sistema de variables de diseño, flexbox, grid, animaciones fluidas y consultas de medios responsive.
- **Web Audio API & HTML5 Audio:** Motor dual para efectos y música con sincronización tolerante a fallos.
- **Web Speech API:** Motor de lectura asistida por voz.
- **Node.js (Built-in HTTP Server):** Servidor local ligero de cero dependencias externas para desarrollo y pruebas.

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/johanlinaress/Aprendiendo-con-Ari.git
   cd Aprendiendo-con-Ari
   ```

2. **Iniciar el servidor local:**
   ```bash
   npm start
   ```

3. **Abrir en el navegador:**
   ```text
   http://localhost:4173
   ```

---

## 🧪 Auditoría Integral Automatizada (E2E)

El proyecto cuenta con una suite completa de auditoría automatizada en Google Chrome (`tests/audit.js`) que recorre toda la aplicación de extremo a extremo:

```bash
npm run audit
```

### Resultados de la auditoría actual (`tests/audit-report.json`):
- ✅ **163 pruebas aprobadas** (0 fallidas)
- 🖥️ **0 errores de consola JavaScript**
- 🌐 **0 errores de red (404/500)**
- 📱 **Capturas de pantalla responsive automatizadas** en móvil, tablet y escritorio en `tests/screenshots/`
- ⚡ **Rendimiento Lighthouse / PageSpeed:** 95+ en Móvil / 99 en Escritorio, 100 en Accesibilidad, 100 en Buenas Prácticas y 100 en SEO.

---

## 📁 Estructura del Proyecto

```text
Aprendiendo-con-Ari/
├── index.html                 # Página de entrada SPA con marcado semántico y metaetiquetas
├── server.js                  # Servidor HTTP local con soporte de streaming HTTP 206
├── package.json               # Configuración de scripts (start, audit)
├── README.md                  # Documentación oficial del proyecto
├── sounds/                    # Pistas de música y efectos sonoros en formato MP3
│   ├── home-music.mp3         # Música ambiental de inicio ("Praia de Domingo")
│   ├── activity-music.mp3     # Música de concentración ("Clair de Lune")
│   ├── collect-points.mp3     # Efecto sonoro de acierto / puntos
│   └── level-passed.mp3       # Efecto sonoro de victoria / nivel superado
├── src/
│   ├── main.js                # Punto de entrada, bootstrap, routing y ciclo de vida
│   ├── components/            # Vistas y componentes modulares
│   │   ├── AriMascot.js       # Mascota interactiva Ari (SVG + estados emocionales)
│   │   ├── Navbar.js          # Barra superior (racha, puntos, grado, toggles de audio)
│   │   ├── Footer.js          # Pie de página educativo y accesos rápidos
│   │   ├── HomeView.js        # Portada, tarjetas 3D de materias y bienvenida
│   │   ├── GradeSelectView.js # Selector interactivo de grado (3° y 4°)
│   │   ├── LevelsMapView.js   # Mapa de aventura con las 10 unidades
│   │   ├── ExerciseView.js    # Motor de ejercicios (Aprendo, Practico y Evaluación)
│   │   ├── PracticeView.js    # Modo de práctica libre y repaso
│   │   ├── ProgressView.js    # Panel de progreso, estadísticas y logros
│   │   ├── ConfirmModal.js    # Diálogo modal accesible para reinicio de progreso
│   │   ├── Illustrations.js   # Ilustraciones vectoriales (ciencias, astronomía, etc.)
│   │   └── NotFoundView.js    # Vista 404 lúdica con navegación de regreso
│   ├── data/
│   │   └── levelsData.js      # Banco curricular completo (3° y 4° grado), lecturas y medallas
│   ├── router/
│   │   └── Router.js          # Enrutador cliente basado en hash con paso de parámetros
│   ├── services/
│   │   ├── SoundService.js    # Motor de audio, música en bucle y síntesis de voz
│   │   └── StorageService.js  # Almacenamiento persistente, progreso y sesiones activas
│   ├── styles/
│   │   └── main.css           # Estilos globales, variables de color, foco visible y responsive
│   └── utils/
│       ├── a11yKeyboard.js    # Navegación por teclado roving tabindex para ARIA
│       └── levelStatus.js     # Utilidades de desbloqueo y estado de unidades
└── tests/
    ├── audit.js               # Batería de 163 pruebas E2E automatizadas en Chrome
    ├── audit-report.json      # Resultados detallados de la última auditoría
    └── screenshots/           # Capturas de evidencia en diferentes resoluciones
```

---

## 👨‍💻 Autor y Licencia

Desarrollado con dedicación para brindar a los niños de primaria una experiencia de aprendizaje alegre, accesible y motivadora.

- **Repositorio:** [github.com/johanlinaress/Aprendiendo-con-Ari](https://github.com/johanlinaress/Aprendiendo-con-Ari)
- **Licencia:** MIT
