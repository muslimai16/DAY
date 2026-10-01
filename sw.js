const CACHE_NAME = 'salati-shell-v9';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './theme-init.js',
  './firebase-init.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/app-logo.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // لا نتدخل أبدًا في الطلبات الخارجية: مواقيت الصلاة (AlAdhan)، خرائط المساجد (Overpass/OSM)، ملفات الأذان.
  // هذه يجب أن تبقى مباشرة من الشبكة دائمًا لتبقى دقيقة ومحدّثة.
  if (url.origin !== self.location.origin || req.method !== 'GET') {
    return;
  }

  // استراتيجية "الكاش أولاً مع تحديث في الخلفية" لملفات التطبيق الأساسية فقط
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
