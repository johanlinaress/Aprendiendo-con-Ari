/**
 * @fileoverview Efecto visual festivo de Confetti y estrellas para celebraciones en Aprendiendo con Ari.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

const CONFETTI_COLORS = [
  '#facc15', // Dorado brillante
  '#a855f7', // Morado Ari
  '#ec4899', // Rosa fiesta
  '#38bdf8', // Celeste cielo
  '#22c55e', // Verde esmeralda
  '#fb923c', // Naranja cálido
  '#ffffff'  // Blanco destello
];

/**
 * Lanza una lluvia de confeti festivo y estrellas doradas en pantalla.
 *
 * @param {object} [options]
 * @param {number} [options.count=75] - Cantidad de papelillos y estrellas
 * @param {number} [options.duration=3200] - Duración en milisegundos
 */
export function fireConfetti(options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // Respeto estricto a accesibilidad y movimiento reducido
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const count = options.count || 80;
  const duration = options.duration || 3200;

  const canvas = document.createElement('canvas');
  canvas.id = 'ari-confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = (canvas.width = window.innerWidth * dpr);
  const height = (canvas.height = window.innerHeight * dpr);
  ctx.scale(dpr, dpr);

  const particles = [];
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight * 0.45;

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    particles.push({
      x: startX + (Math.random() - 0.5) * 120,
      y: startY + (Math.random() - 0.5) * 60,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4, // Impulso hacia arriba
      w: 8 + Math.random() * 8,
      h: 6 + Math.random() * 6,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.2,
      isStar: Math.random() < 0.25, // 25% de partículas son estrellas
      opacity: 1
    });
  }

  const startTime = performance.now();
  let animationId = null;

  function drawStar(c, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    c.beginPath();
    c.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      c.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      c.lineTo(x, y);
      rot += step;
    }
    c.lineTo(cx, cy - outerRadius);
    c.closePath();
    c.fillStyle = color;
    c.fill();
  }

  function frame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // Gravedad
      p.vx *= 0.985; // Fricción del aire
      p.rotation += p.rotationSpeed;
      p.opacity = Math.max(0, 1 - progress);

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      if (p.isStar) {
        drawStar(ctx, 0, 0, 5, p.w * 0.8, p.w * 0.38, p.color);
      } else {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }

      ctx.restore();
    }

    if (progress < 1) {
      animationId = requestAnimationFrame(frame);
    } else {
      cancelAnimationFrame(animationId);
      canvas.remove();
    }
  }

  animationId = requestAnimationFrame(frame);
}
