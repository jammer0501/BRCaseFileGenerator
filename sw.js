// BUMP CACHE_VERSION when shipping content or code changes.
const CACHE_VERSION = 'v5';
const SHELL_CACHE   = `br-case-files-${CACHE_VERSION}`;
const RUNTIME_CACHE = `br-case-files-runtime-${CACHE_VERSION}`;

const SHELL_URLS = [
  'index.html',
  'app.js',
  'js/generator.js',
  'js/random.js',
  'js/tables/npcs.js',
  'js/tables/locations.js',
  'js/tables/assignments.js',
  'js/tables/clues.js',
  'js/tables/supplementary.js',
  'manifest.webmanifest',
  'styles/base.css',
  'styles/blade-runner.css',
  'assets/icon.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(SHELL_CACHE);
    cache.put(request, response.clone());
  }
  return response;
}

async function googleFontsFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(googleFontsFirst(event.request));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(event.request));
  }
});
