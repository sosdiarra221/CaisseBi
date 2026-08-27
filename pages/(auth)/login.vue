<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const { fetch: refreshSession } = useUserSession();
const { t, locale, setLocale } = useI18n();

const NAVY = "#182B6B";

const username = ref("");
const pin = ref("");
const loading = ref(false);
const errorMessage = ref("");

function onPinInput() {
  pin.value = pin.value.replace(/\D/g, "").slice(0, 4);
}

// No account is logged in yet at this point, so there's no saved
// preference to read (plugins/locale.ts only kicks in post-login) — a
// manual toggle here is the only way an Arabic-speaking user gets to read
// the login screen in Arabic before they've even signed in.
function toggleLocale() {
  setLocale(locale.value === "ar" ? "fr" : "ar");
}

async function submit() {
  errorMessage.value = "";
  loading.value = true;
  try {
    const user = await $fetch("/api/auth/login", {
      method: "POST",
      body: { username: username.value, pin: pin.value },
    });
    await refreshSession();
    await navigateTo(user.role === "CASHIER" ? "/pos" : "/");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || t("login.genericError");
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4" style="background: #F5F7FB">
    <div class="w-full max-w-[440px]">
      <div class="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        <div class="mb-2 flex justify-end">
          <button
            type="button"
            class="rounded-full border border-border px-3 py-1 text-2xs font-semibold text-body hover:border-primary hover:text-primary"
            @click="toggleLocale"
          >
            {{ locale === "ar" ? "Français" : "العربية" }}
          </button>
        </div>
        <div class="mb-7 text-center">
          <img src="assets/images/logo-caissebi.png" alt="CaisseBi" class="mx-auto mb-5 h-14 w-auto object-contain" />
          <h3 class="mb-1.5 text-xl font-bold" :style="{ color: NAVY }">{{ t("login.title") }}</h3>
          <p class="text-2sm text-body">{{ t("login.subtitle") }}</p>
        </div>

        <form @submit.prevent="submit">
          <div v-if="errorMessage" class="mb-5 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </div>

          <div class="mb-5">
            <label class="mb-1.5 block text-2sm font-semibold" :style="{ color: NAVY }">
              {{ t("login.identifier") }}<span class="text-danger"> *</span>
            </label>
            <input
              v-model="username"
              type="text"
              autocomplete="username"
              required
              autofocus
              class="h-12 w-full rounded-lg border border-border bg-transparent px-3.5 text-base text-[#1a1a2e] duration-200 focus:border-[#F5A524] focus:outline-none"
            />
          </div>

          <div class="mb-6">
            <label class="mb-1.5 block text-2sm font-semibold" :style="{ color: NAVY }">
              {{ t("login.pin") }}<span class="text-danger"> *</span>
            </label>
            <input
              v-model="pin"
              type="text"
              inputmode="numeric"
              maxlength="4"
              pattern="\d{4}"
              placeholder="••••"
              required
              class="h-12 w-full rounded-lg border border-border bg-transparent px-3.5 text-center text-xl tracking-[0.5em] text-[#1a1a2e] duration-200 focus:border-[#F5A524] focus:outline-none"
              @input="onPinInput"
            />
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="flex h-12 w-full items-center justify-center rounded-lg text-base font-bold text-white transition-opacity disabled:opacity-60"
            :style="{ background: NAVY }"
          >
            {{ loading ? t("login.submitting") : t("login.submit") }}
          </button>
        </form>
      </div>

      <p class="mt-6 text-center text-2xs text-body">
        {{ t("login.tagline") }}
      </p>
    </div>
  </div>
</template>
