# 🦉 Aprendiendo con Ari

**¡Explora, aprende y diviértete!**

## 🌐 ¡Pruébalo ahora en tu navegador!

👉 **[▶️ Jugar Aprendiendo con Ari en Vivo (GitHub Pages)](https://johanlinaress.github.io/Aprendiendo-con-Ari/)**  
🔗 Enlace directo: https://johanlinaress.github.io/Aprendiendo-con-Ari/

---

Plataforma educativa web interactiva diseñada para estudiantes de **3° y 4° de primaria**, enfocada en el refuerzo de **Matemáticas** y **Español** mediante lecciones progresivas (*Aprendo*, *Practico* y *Demuestro lo aprendido*), ejercicios interactivos, textos expositivos ilustrados, efectos de sonido, animaciones y recompensas gamificadas junto a **Ari**, el búho morado sabio.

---

## ✨ Características Principales

- **Personaje guía Ari (`AriMascot.js`):** Búho morado en SVG con birrete académico, gafas redondas y libro verde en 8 estados expresivos.
- **Selección de Grado (`3° Grado` y `4° Grado`):** Adapta el contenido, las explicaciones y la complejidad de los ejercicios al grado escolar del estudiante.
- **Módulo de Matemáticas (5 Unidades):**
  1. **Unidad 1: Sumas** (Sumandos, adiciones de 3 y 4 cifras, propiedad conmutativa y problemas cotidianos).
  2. **Unidad 2: Restas** (Minuendo, sustraendo, diferencia, restas con ceros intermedios y problemas).
  3. **Unidad 3: Multiplicaciones** (Suma repetida, grupos iguales, tablas de multiplicar y modo contrarreloj opcional sin penalización).
  4. **Unidad 4: Divisiones** (Reparto equitativo, cociente exacto e identificación del residuo).
  5. **Unidad 5: Desafío Matemático** (Problemas integradores de las cuatro operaciones).
- **Módulo de Español (5 Unidades):**
  1. **Unidad 1: Los Verbos** (Acciones, tiempos verbales pasado/presente/futuro, persona y número).
  2. **Unidad 2: El Sujeto** (Identificación del sujeto, núcleo del sujeto, sujeto simple/compuesto y tácito).
  3. **Unidad 3: El Predicado** (Reconocimiento del predicado, núcleo verbal y división de oraciones).
  4. **Unidad 4: Comprensión Lectora** (Personajes, idea principal, secuencia de hechos e inferencias).
  5. **Unidad 5: Textos Expositivos Interactivos** (Portada ilustrada, lectura por fragmentos navegables, palabras clave resaltadas con definición, botón `🔊 Escuchar`, pregunta de exploración intermedia y evaluación final sobre *El Sistema Solar*, *El Ciclo del Agua*, *Animales Vertebrados e Invertebrados* y *El Cuerpo Humano y las Plantas*).
- **6 Modalidades de Interacción:** Selección múltiple, completar espacios, arrastrar y soltar (con soporte táctil), verdadero o falso, relacionar conceptos y ordenar elementos.
- **Sistema de Gamificación y Persistencia (`LocalStorage`):** Estrellas, rachas, bloqueo/desbloqueo de unidades con umbral mínimo del `70%` y **9 medallas oficiales**.
- **Diseño 100% Responsive (Mobile First):** Verificado en teléfonos, tablets y computadores.

---

## 🚀 Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/johanlinaress/Aprendiendo-con-Ari.git
   cd Aprendiendo-con-Ari
   ```

2. Inicia el servidor local:
   ```bash
   npm start
   ```

3. Abre en tu navegador:
   ```text
   http://localhost:4173
   ```

---

## 🧪 Ejecutar la Auditoría Automatizada en Navegador

Para ejecutar la batería de **160 pruebas automatizadas** en Google Chrome (componentes, rutas, botones, ejercicios, puntuación, desbloqueo, `localStorage`, sonidos, animaciones y resoluciones responsive):

```bash
npm run audit
```
