// In serviceWorker.js, we need to define a callback for the install event and choose what to cache. Inside the callback, we have to open a cache, cache the files, and get confirmation that assets are cached. serviceWorker.js 
let CACHE_NAME = 'my-portfolio-cache-v1';

// '/static/js/vendors~main.chunk.js',
// '/static/js/main.chunk.js',
const urlsToCache = [
    '/static/js/bundle.js',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/static/media/contact.5fc379cb.png',
    '/static/media/CalibreRegular.84b1f95c.otf',
    '/static/media/home-banner.f793c366.svg',
    '/',
    '/contact',
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    // In order to activate the new service worker, you have to close all pages, which are controlled by the old service worker. If we want to avoid that, we can skip the waiting phase by adding self.skipWaiting() in the install event listener.
    self.skipWaiting();
});

// We also want to inform service workers what to do with the cached files. This will be done with the fetch event.
self.addEventListener('fetch', function (event) {
    event.respondWith(
        //Serving files from the cache- Network falling back to the cache
        // fetch(event.request).catch(function () {
        //     return caches.match(event.request);
        // })
        caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});


//Serving files from the cache- Cache falling back to the network
// caches.match(event.request)
//         .then(function (response) {
//             if (response) {
//                 return response;
//             }
//             return fetch(event.request);
//         })

{/* <script>
if ('serviceWorker' in navigator) {
window.addEventListener('load', function() {
navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
// Registration was successful
console.log('ServiceWorker registration successful with scope: ', registration.scope);
}, function(err) {
// registration failed :(
console.log('ServiceWorker registration failed: ', err);
});
});
}
</script>  */}