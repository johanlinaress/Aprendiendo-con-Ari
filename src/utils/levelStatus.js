/** Etiquetas y estilos únicos para el estado de cada unidad (usados en todas las vistas). */
export const LEVEL_STATUS_META = {
  completed: { label: '✅ Completado', className: 'status-completed' },
  'in-progress': { label: '⏳ En progreso', className: 'status-in-progress' },
  available: { label: '🟢 Disponible', className: 'status-available' },
  locked: { label: '🔒 Bloqueado', className: 'status-locked' }
};

export const SUBJECT_LABELS = {
  matematicas: 'Matemáticas',
  espanol: 'Español'
};

export function renderStarsHtml(stars, className = 'level-star') {
  return [1, 2, 3]
    .map((idx) => {
      const earned = idx <= stars;
      return `<span class="${className} ${earned ? 'star-on' : 'star-off'}">${earned ? '⭐' : '☆'}</span>`;
    })
    .join('');
}
