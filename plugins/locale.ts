// Keeps the active UI language in sync with the logged-in account's saved
// preference (User.locale), instead of leaving it to @nuxtjs/i18n's own
// browser-language/cookie detection — this is a per-account setting the
// user explicitly picked (see Header2.vue's switcher), so it should follow
// them the moment their session loads, on any device.
export default defineNuxtPlugin((nuxtApp) => {
  const { user } = useUserSession();
  // useI18n() requires a component setup context — a plugin isn't one, so
  // the i18n instance is read off the Nuxt app instead (the same object
  // @nuxtjs/i18n injects as $i18n everywhere else). Typed as unknown by
  // @nuxtjs/i18n v9's own augmentation, hence the cast — it's still the
  // real runtime instance.
  const i18n = nuxtApp.$i18n as { locale: { value: string }; setLocale: (l: "fr" | "ar") => Promise<void> | void };

  watch(
    () => user.value?.locale,
    (next) => {
      if (next && (next === "fr" || next === "ar") && next !== i18n.locale.value) {
        i18n.setLocale(next);
      }
    },
    { immediate: true }
  );
});
