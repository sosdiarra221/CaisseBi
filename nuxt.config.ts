const APP_DESCRIPTION = "CaisseBi, la caisse enregistreuse et le point de vente pour votre commerce.";
const NAVY = "#182B6B";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils", "@vite-pwa/nuxt"],
  // css: ["~/assets/css/common.css", "~/assets/css/style.css"],
  runtimeConfig: {
    // Declaring the key (even empty) is what makes Nuxt pick up the
    // NUXT_PUBLIC_FIREBASE_VAPID_KEY env var and expose it to the client —
    // see lib/firebase-client.ts.
    public: {
      firebaseVapidKey: "",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa: {
    // Reflects new deploys immediately instead of waiting for the user to
    // manually refresh past a "new version available" prompt — appropriate
    // for a single-tenant POS install where the owner controls updates.
    registerType: "autoUpdate",
    // Dev-mode SW generation previously crashed ("buildNamedEvaluationVisitor
    // is not a function") because workbox-build's own @babel/preset-env
    // resolved to 7.29.7 while @babel/core deduped to an older 7.25.8 —
    // preset-env's plugins called internal @babel/core APIs that 7.25.8
    // doesn't have. Fixed via the root "overrides" field in package.json,
    // pinning @babel/core to ^7.29.7 so the whole tree resolves to one
    // consistent, tested version pair. Verified: npm run dev now generates a
    // dev service worker without the crash, and npm run build still produces
    // .output/public/sw.js with the same runtime-caching rules below.
    devOptions: { enabled: true, type: "module" },
    manifest: {
      name: "CaisseBi — La Caisse",
      short_name: "CaisseBi",
      description: APP_DESCRIPTION,
      theme_color: NAVY,
      // Navy, not white: this is a splash-screen background behind the CB
      // badge (see public/pwa-512x512.png), which is itself navy-on-navy
      // adjacent — a solid navy splash reads as a deliberate brand screen
      // instead of a flash of white before the app paints.
      background_color: NAVY,
      display: "standalone",
      start_url: "/",
      scope: "/",
      lang: "fr",
      icons: [
        { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
        {
          src: "/pwa-maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      // Default cap is 2 MiB; this template ships a 2.75 MB icon-font SVG
      // (materialdesignicons-webfont) that would otherwise be silently
      // dropped from precaching (logged as a build warning) and unavailable
      // offline until first fetched online.
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      navigateFallback: "/offline.html",
      // Never let a failed/offline navigation to an API route (or any API
      // call in general — see runtimeCaching below) silently resolve to the
      // offline HTML page instead of a real error.
      navigateFallbackDenylist: [/^\/api\//],
      globPatterns: ["**/*.{js,css,html,ico,svg,woff,woff2}"],
      runtimeCaching: [
        // Financial/POS data must never be served stale: sales, stock,
        // pricing, and session/auth responses all live under /api/** and are
        // deliberately excluded from any caching strategy.
        {
          urlPattern: /^\/api\//,
          handler: "NetworkOnly",
        },
        {
          urlPattern: ({ request }) => request.destination === "style" || request.destination === "script",
          handler: "StaleWhileRevalidate",
          options: { cacheName: "static-resources" },
        },
        {
          urlPattern: ({ request }) => request.destination === "worker",
          handler: "StaleWhileRevalidate",
          options: { cacheName: "static-workers" },
        },
        {
          urlPattern: ({ request }) => request.destination === "font",
          handler: "CacheFirst",
          options: {
            cacheName: "static-fonts",
            expiration: { maxEntries: 30, maxAgeSeconds: 60 * 24 * 60 * 60 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === "image",
          handler: "CacheFirst",
          options: {
            cacheName: "static-images",
            expiration: { maxEntries: 150, maxAgeSeconds: 30 * 24 * 60 * 60 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
    },
  },
});
