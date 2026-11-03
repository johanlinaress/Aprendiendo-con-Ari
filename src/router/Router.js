class HashRouter {
  constructor() {
    this.routeChangeCallback = null;
    this.currentRoute = { name: 'inicio', path: '/inicio', params: {} };

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', () => this.handleHashChange());
    }
  }

  parseHash(rawHash) {
    let hash = (rawHash || '').trim();
    if (hash.startsWith('#')) {
      hash = hash.slice(1);
    }
    if (!hash || hash === '/') {
      return { name: 'inicio', path: '/inicio', params: {} };
    }
    if (!hash.startsWith('/')) {
      hash = '/' + hash;
    }

    const cleanPath = hash.split('?')[0].replace(/\/+$/, '') || '/inicio';

    if (cleanPath === '/inicio') {
      return { name: 'inicio', path: '/inicio', params: {} };
    }
    if (cleanPath === '/grado' || cleanPath === '/estudiante') {
      return { name: 'grado', path: cleanPath, params: {} };
    }
    if (cleanPath === '/materias') {
      return { name: 'materias', path: '/materias', params: {} };
    }
    if (cleanPath === '/matematicas') {
      return { name: 'niveles', path: '/matematicas', params: { subject: 'matematicas' } };
    }
    if (cleanPath === '/espanol') {
      return { name: 'niveles', path: '/espanol', params: { subject: 'espanol' } };
    }
    if (cleanPath === '/niveles') {
      return { name: 'niveles', path: '/niveles', params: { subject: 'todas' } };
    }
    if (cleanPath === '/practica') {
      return { name: 'practica', path: '/practica', params: {} };
    }
    if (cleanPath === '/progreso' || cleanPath === '/logros') {
      return { name: 'progreso', path: cleanPath, params: {} };
    }

    const levelMatch = cleanPath.match(/^\/nivel\/(\d+)$/);
    if (levelMatch) {
      return {
        name: 'nivel',
        path: cleanPath,
        params: { id: Number(levelMatch[1]) }
      };
    }

    return {
      name: 'notfound',
      path: cleanPath,
      params: {}
    };
  }

  onRouteChange(callback) {
    this.routeChangeCallback = callback;
  }

  init() {
    if (typeof window !== 'undefined' && (!window.location.hash || window.location.hash === '#')) {
      window.history.replaceState(null, '', '#/inicio');
    }
    this.handleHashChange();
  }

  handleHashChange() {
    const hash = typeof window !== 'undefined' ? window.location.hash : '#/inicio';
    this.currentRoute = this.parseHash(hash);
    if (this.routeChangeCallback) {
      this.routeChangeCallback(this.currentRoute);
    }
  }

  navigate(path) {
    const normalized = path.startsWith('#') ? path : `#${path.startsWith('/') ? path : '/' + path}`;
    if (typeof window !== 'undefined') {
      if (window.location.hash === normalized) {
        this.handleHashChange();
      } else {
        window.location.hash = normalized;
      }
    }
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}

export const Router = new HashRouter();
