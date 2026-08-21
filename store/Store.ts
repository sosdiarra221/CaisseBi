const chatbox = ref<boolean>(false);
const accordionToggle = ref<boolean>(false);
const profileSidebar = ref<boolean>(true);
const sidebarPosition = ref<string>("full");
// Also drives the `.menu-toggle` class (see layouts/home.vue and app.vue),
// which the template's own CSS (sidebar-full.css) already uses to collapse
// .deznav/.header/.content-body to an icon-only rail across every page.
const toggleMenu = ref<boolean>(false);
const toggleEmailSideMenu = ref<boolean>(false);

// Live viewport width, kept in sync by app.vue's single resize listener —
// components read this instead of adding their own `resize` listeners.
// Defaults to a desktop-sized value so SSR/first paint doesn't briefly
// render the mobile drawer layout before hydration measures the real width.
const viewportWidth = ref<number>(1280);

// Mobile off-canvas drawer open/close state — deliberately separate from
// `toggleMenu` (which means "collapsed to icon rail" on desktop). Below the
// mobile-nav breakpoint the sidebar is always rendered at full width as an
// overlay drawer, and this flag alone controls whether it's slid in or out.
const mobileNavOpen = ref<boolean>(false);

export const Store = {
  chatbox,
  accordionToggle,
  profileSidebar,
  sidebarPosition,
  toggleMenu,
  toggleEmailSideMenu,
  viewportWidth,
  mobileNavOpen,
};
