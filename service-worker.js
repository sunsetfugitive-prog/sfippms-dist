// Copyright © 2026 Hannibal Cabrera Arnaiz / Sunset Fugitive.
// This file is part of the Sunset Fugitive Law of Space™ v3 protocol stack.
// Licensed under the MSC‑1 / MIT Hybrid License; see the root LICENSE.md for full terms.
// service-worker.js
// Minimal PWA service worker for offline support

self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    // Passthrough for now; cache strategies can be added later
    // For WASM and dynamic content, passthrough is safest
});

console.log('Service Worker registered');
