<script setup lang="ts">
import "vue3-form-wizard/dist/style.css";
import "~/assets/icons/material-design-iconic-font/css/materialdesignicons.min.css";
import "vue3-toastify/dist/index.css";
import "vue3-colorpicker/style.css";
import "flatpickr/dist/flatpickr.css";
import "swiper/css";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import "vue3-carousel/dist/carousel.css";
import "~/assets/icons/fontawesome/css/all.min.css";
import "~/assets/icons/line-awesome/css/line-awesome.min.css";
import "~/assets/icons/themify-icons/css/themify-icons.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "nouislider/dist/nouislider.css";
import "~/assets/css/tailwind.css";
import "~/assets/css/common.css";
import "~/assets/css/style.css";
import ChatBox from "./components/ChatBox.vue";
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Sidebar from "./components/Sidebar.vue";
import { Store } from "./store/Store";

const { sidebarPosition, toggleMenu, viewportWidth, mobileNavOpen } = Store;
const route = useRoute();

// Below this width the sidebar renders as an off-canvas overlay drawer
// instead of pushing page content over (see components/Sidebar.vue and
// components/Header2.vue). Matches Tailwind's custom `lg` breakpoint
// (tailwind.config.js) so it lines up with the rest of the app's
// `max-lg:`/`lg:` responsive behavior.
const MOBILE_NAV_BREAKPOINT = 992;
const isMobileNav = computed(() => viewportWidth.value < MOBILE_NAV_BREAKPOINT);

function ResizeHandler() {
  viewportWidth.value = window.innerWidth;
  if (window.innerWidth <= 775) {
    sidebarPosition.value = "overlay";
  } else {
    if (window.innerWidth >= 1024) {
      sidebarPosition.value = "full";
    } else {
      sidebarPosition.value = "mini";
    }
  }

  useHead({
    bodyAttrs: {
      "data-sidebar-style": sidebarPosition.value,
    },
  });
}
onMounted(() => {
  ResizeHandler();
  window.addEventListener("resize", ResizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", ResizeHandler);
});

// `.content-body` (each admin page's own top-level wrapper — see e.g.
// pages/(admin)/produits/index.vue) is offset from the sidebar via a plain
// CSS rule (`margin-left: 17.4rem` in assets/css/style.css) rather than a
// per-page inline style. That CSS file's `[data-sidebar-style] .content-body`
// override rules are unreliable here for the same double-injected-stylesheet
// reason documented in Sidebar.vue, so — exactly like Sidebar.vue/Header2.vue
// already do for their own width/padding — the margin is instead forced via
// a runtime inline style, which always wins the cascade regardless of
// specificity or duplication. Re-applied whenever the collapse state,
// viewport, or route (a fresh `.content-body` element per page) changes.
function syncContentBodyLayout() {
  if (typeof document === "undefined") return;
  document.querySelectorAll<HTMLElement>(".content-body").forEach((el) => {
    el.style.marginLeft = isMobileNav.value ? "0" : toggleMenu.value ? "5rem" : "17.4rem";
  });
}
watch([toggleMenu, isMobileNav, () => route.fullPath], () => nextTick(syncContentBodyLayout), {
  flush: "post",
});
onMounted(syncContentBodyLayout);

// Auto-close the mobile drawer on navigation so the next page isn't hidden
// behind it.
watch(
  () => route.fullPath,
  () => {
    if (isMobileNav.value) mobileNavOpen.value = false;
  }
);

useHead({
  title: "CaisseBi — La Caisse",
  bodyAttrs: {
    class: "selection:bg-primary selection:text-white",
    "data-typography": "poppins",
    "data-theme-version": "light",
    "data-layout": "vertical",
    "data-nav-headerbg": "color_1",
    "data-headerbg": "color_1",
    "data-sidebarbg": "color_1",
    "data-sidebar-position": "fixed",
    "data-header-position": "fixed",
    "data-container": "wide",
    "data-primary": "color_1",
    "data-secondary": "color_1",
  },
  link: [
    { href: "https://fonts.googleapis.com", rel: "stylesheet" },
    { href: "https://fonts.gstatic.com", rel: "stylesheet" },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      rel: "stylesheet",
    },
    {
      href: "https://unpkg.com/vue-multiselect/dist/vue-multiselect.min.css",
      rel: "stylesheet",
    },
    // iOS Safari doesn't read the web manifest's `icons` for "Add to Home
    // Screen" — it needs its own apple-touch-icon link (see the
    // apple-mobile-web-app-* meta tags below for the rest of the iOS PWA
    // story). 180x180 is Apple's current recommended size; iOS scales it
    // down for older devices itself.
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  meta: [
    // Marks the site as installable/full-screen-capable on iOS Safari.
    { name: "apple-mobile-web-app-capable", content: "yes" },
    // Also set the non-prefixed standard equivalent for modern browsers
    // (Android Chrome, etc.) that honor it alongside the manifest.
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-title", content: "CaisseBi" },
    // "black-translucent" (drawing page content under the status bar) would
    // read as the obvious pick for a navy-branded app, but every real header
    // in this app — Header2.vue's admin header, the POS top bar — renders on
    // a *white* background (only the sidebar rail is navy, and that's on the
    // left edge, not under the status bar). Translucent status-bar text is
    // white, which would be unreadable against those white headers, so
    // "default" (opaque, dark status-bar text) is the one that's actually
    // legible against this app's real screens.
    // Note: no manual `theme-color` meta tag here — @vite-pwa/nuxt already
    // injects one from manifest.theme_color (nuxt.config.ts), so adding one
    // here would just duplicate it.
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
  ],
});

useSeoMeta({
  title: "CaisseBi — La Caisse",
  ogTitle: "CaisseBi — La Caisse",
  description: "CaisseBi, la caisse enregistreuse et le point de vente pour votre commerce.",
  ogDescription: "CaisseBi, la caisse enregistreuse et le point de vente pour votre commerce.",
  twitterCard: "summary_large_image",
  keywords: "CaisseBi, caisse enregistreuse, point de vente, POS, gestion de stock, ventes",
  formatDetection: "telephone=no",
  xUaCompatible: "IE=edge",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, minimal-ui, viewport-fit=cover",
});
</script>

<template>
  <div
    id="main-wrapper"
    :class="`wallet-open show ${toggleMenu ? 'menu-toggle' : ''}`"
  >
    <!-- @vite-pwa/nuxt registers <link rel="manifest"> via this component
         rather than injecting it automatically — without it the manifest
         file is served but never linked, so the app wouldn't be seen as
         installable. -->
    <VitePwaManifest />
    <ChatBox />
    <NuxtLayout>
      <Nav />
      <Header />
      <Sidebar />
      <NuxtPage />
      <div class="footer">
        <div class="copyright">
          <p>
            Copyright © Une conception de PeneCorporate
            <span class="current-year"
              >&nbsp; {{ new Date().getFullYear() }}</span
            >
          </p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
