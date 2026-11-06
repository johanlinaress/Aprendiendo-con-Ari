/**
 * Tabla declarativa de rutas.
 * - name:    vista que se renderiza.
 * - section: pestaña de la barra de navegación que debe quedar activa.
 * - title:   título del documento (pestaña del navegador).
 */
const STATIC_ROUTES = {
  '/inicio': { name: 'inicio', section: 'inicio', title: 'Inicio' },
  '/grado': { name: 'grado', section: 'inicio', title: 'Elige tu grado' },
  '/estudiante': { name: 'grado', section: 'inicio', title: 'Elige tu grado' },
  '/materias': { name: 'materias', section: 'materias', title: 'Materias' },
  '/niveles': { name: 'niveles', section: 'niveles', title: 'Mapa de niveles', params: { subject: 'todas' } },
  '/matematicas': { name: 'niveles', section: 'niveles', title: 'Matemáticas', params: { subject: 'matematicas' } },
  '/espanol': { name: 'niveles', section: 'niveles', title: 'Español', params: { subject: 'espanol' } },
  '/practica': { name: 'practica', section: 'practica', title: 'Práctica libre' },
  '/progreso': { name: 'progreso', section: 'progreso', title: 'Mi progreso', params: { focus: 'resumen' } },
  '/logros': { name: 'progreso', section: 'progreso', title: 'Mis logros', params: { focus: 'logros' } },
  '/donaciones': { name: 'donaciones', section: 'donaciones', title: 'Donaciones y Apoyo', params: { method: 'hub' } },
  '/apoyar': { name: 'donaciones', section: 'donaciones', title: 'Donaciones y Apoyo', params: { method: 'hub' } },
  '/donaciones/podio': { name: 'donaciones', section: 'donaciones', title: 'Podio de Donadores', params: { method: 'podio' } },
  '/podio': { name: 'donaciones', section: 'donaciones', title: 'Podio de Donadores', params: { method: 'podio' } },
  '/donaciones/nequi': { name: 'donaciones', section: 'donaciones', title: 'Donar con Nequi / Bre-B', params: { method: 'nequi' } },
  '/donaciones/arq': { name: 'donaciones', section: 'donaciones', title: 'Donar con ARQ', params: { method: 'arq' } },
  '/donaciones/paypal': { name: 'donaciones', section: 'donaciones', title: 'Donar con PayPal', params: { method: 'paypal' } }
};

export const DEFAULT_PATH = '/inicio';

class HashRouter {
  constructor() {
    this.routeChangeCallback = null;
    this.currentRoute = this.parseHash(`#${DEFAULT_PATH}`);

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => this.handleHashChange());
    }
  }

  parseHash(rawHash) {
    let hash = (rawHash || '').trim();
    if (hash.startsWith('#')) hash = hash.slice(1);
    if (!hash || hash === '/') hash = DEFAULT_PATH;
    if (!hash.startsWith('/')) hash = `/${hash}`;

    const cleanPath = hash.split('?')[0].replace(/\/+$/, '') || DEFAULT_PATH;

    const staticRoute = STATIC_ROUTES[cleanPath];
    if (staticRoute) {
      return {
        name: staticRoute.name,
        section: staticRoute.section,
        title: staticRoute.title,
        path: cleanPath,
        params: { ...(staticRoute.params || {}) }
      };
    }

    const levelMatch = cleanPath.match(/^\/nivel\/(\d+)$/);
    if (levelMatch) {
      return {
        name: 'nivel',
        section: 'niveles',
        title: `Nivel ${levelMatch[1]}`,
        path: cleanPath,
        params: { id: Number(levelMatch[1]) }
      };
    }

    return { name: 'notfound', section: null, title: 'Ruta no encontrada', path: cleanPath, params: {} };
  }

  onRouteChange(callback) {
    this.routeChangeCallback = callback;
  }

  init() {
    if (typeof window !== 'undefined' && (!window.location.hash || window.location.hash === '#')) {
      window.history.replaceState(null, '', `#${DEFAULT_PATH}`);
    }
    this.handleHashChange();
  }

  handleHashChange() {
    const hash = typeof window !== 'undefined' ? window.location.hash : `#${DEFAULT_PATH}`;
    this.currentRoute = this.parseHash(hash);
    if (this.routeChangeCallback) {
      this.routeChangeCallback(this.currentRoute);
    }
  }

  navigate(path) {
    const normalized = path.startsWith('#') ? path : `#${path.startsWith('/') ? path : '/' + path}`;
    if (typeof window === 'undefined') return;
    if (window.location.hash === normalized) {
      // Misma ruta: forzamos el renderizado para que el botón siempre responda.
      this.handleHashChange();
    } else {
      window.location.hash = normalized;
    }
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}

export const Router = new HashRouter();
