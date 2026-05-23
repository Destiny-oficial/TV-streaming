// sw.js - Service Worker mínimo para activar la instalación nativa de la PWA
const CACHE_NAME = 'anime-streaming-v1';

self.addEventListener('install', (e) => {
  // Fuerza al Service Worker a activarse de inmediato
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Responde a las peticiones para que la app funcione correctamente
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});