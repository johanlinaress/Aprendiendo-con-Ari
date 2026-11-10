/**
 * @fileoverview Service Worker de Aprendiendo con Ari para soporte PWA y modo sin conexión.
 * @author Johan Linares (Johan Sttive Linares Barragán)
 * @copyright 2026 Johan Linares. Todos los derechos reservados.
 * @license Propiedad Intelectual Protegida. Prohibida su copia o plagio.
 */

const CACHE_NAME = 'ari-educa-cache-v6';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './src/styles/main.css',
  './src/main.js',
  './src/router/Router.js',
  './src/data/levelsData.js',
  './src/services/StorageService.js',
  './src/services/SoundService.js',
  './src/services/AnalyticsService.js',
  './src/services/SupabaseService.js',
  './src/components/Navbar.js',
  './src/components/Footer.js',
  './src/components/HomeView.js',
  './src/components/GradeSelectView.js',
  './src/components/LevelsMapView.js',
  './src/components/ExerciseView.js',
  './src/components/PracticeView.js',
  './src/components/ProgressView.js',
  './src/components/DonationsView.js',
  './src/components/DonorsPodium.js',
  './src/components/AriMascot.js',
  './src/components/Illustrations.js',
  './src/components/LevelCompleteModal.js',
  './src/components/LegalNoticeModal.js',
  './src/components/Breadcrumbs.js',
  './src/utils/confetti.js',
  './src/utils/levelStatus.js',
  './src/utils/escapeHtml.js',
  './src/utils/a11yKeyboard.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/nequi-qr.jpg',
  './assets/nequi-qr-square.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        // Fallo suave de pre-caché si algún asset no está disponible de inmediato
        console.warn('[ServiceWorker] Pre-cache parcial:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Ignorar analíticas y llamadas externas
  if (
    url.hostname.includes('googletagmanager') ||
    url.hostname.includes('google-analytics') ||
    url.hostname.includes('fonts.googleapis') ||
    url.hostname.includes('fonts.gstatic')
  ) {
    return;
  }

  // Estrategia Network-First con fallback a Caché para recursos del juego
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
