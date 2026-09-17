// Service Worker — permite que o app funcione offline depois de já ter
// sido aberto pelo menos uma vez com internet.
//
// Estratégia: "network-first, cache-fallback".
// - Com internet: sempre busca a versão mais nova (site, manifest.json,
//   dados do rebanho) e guarda uma cópia atualizada no cache.
// - Sem internet: usa a última cópia boa que conseguiu guardar.
//
// Isso não substitui a sincronização de dados que o app já faz sozinho —
// só garante que o app abre e mostra a última base conhecida mesmo sem sinal.

var CACHE_NAME = 'consulta-rebanho-shell-v1';

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).then(function (response) {
      var copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) {
        cache.put(event.request, copy);
      });
      return response;
    }).catch(function () {
      return caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        // Sem cache específico dessa URL: se for navegação de página,
        // tenta devolver o index.html guardado como último recurso.
        if (event.request.mode === 'navigate') {
          return caches.match('./');
        }
        return Response.error();
      });
    })
  );
});
