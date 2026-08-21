<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const { fetch: refreshSession } = useUserSession();

const NAVY = "#182B6B";

const email = ref("admin@caissebi.com");
const password = ref("");
const hide = ref(false);
const loading = ref(false);
const errorMessage = ref("");

async function submit() {
  errorMessage.value = "";
  loading.value = true;
  try {
    const user = await $fetch("/api/auth/login", {
      method: "POST",
      body: { email: email.value, password: password.value },
    });
    await refreshSession();
    await navigateTo(user.role === "CASHIER" ? "/pos" : "/");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Connexion impossible";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4" style="background: #F5F7FB">
    <div class="w-full max-w-[440px]">
      <div class="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        <div class="mb-7 text-center">
          <img src="assets/images/logo-caissebi.png" alt="CaisseBi" class="mx-auto mb-5 h-14 w-auto object-contain" />
          <h3 class="mb-1.5 text-xl font-bold" :style="{ color: NAVY }">Connexion</h3>
          <p class="text-2sm text-body">Connectez-vous pour accéder à votre caisse</p>
        </div>

        <form @submit.prevent="submit">
          <div v-if="errorMessage" class="mb-5 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </div>

          <div class="mb-5">
            <label class="mb-1.5 block text-2sm font-semibold" :style="{ color: NAVY }">
              Email<span class="text-danger"> *</span>
            </label>
            <input
              v-model="email"
              type="email"
              required
              class="h-12 w-full rounded-lg border border-border bg-transparent px-3.5 text-base text-[#1a1a2e] duration-200 focus:border-[#F5A524] focus:outline-none"
            />
          </div>

          <div class="mb-6 relative">
            <label class="mb-1.5 block text-2sm font-semibold" :style="{ color: NAVY }">
              Mot de passe<span class="text-danger"> *</span>
            </label>
            <input
              v-model="password"
              :type="!hide ? 'password' : 'text'"
              required
              class="h-12 w-full rounded-lg border border-border bg-transparent px-3.5 pr-11 text-base text-[#1a1a2e] duration-200 focus:border-[#F5A524] focus:outline-none"
            />
            <span
              class="absolute right-3.5 top-[2.55rem] cursor-pointer text-body"
              @click="hide = !hide"
            >
              <i class="fa" :class="hide ? 'fa-eye' : 'fa-eye-slash'"></i>
            </span>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="flex h-12 w-full items-center justify-center rounded-lg text-base font-bold text-white transition-opacity disabled:opacity-60"
            :style="{ background: NAVY }"
          >
            {{ loading ? "Connexion..." : "Se connecter" }}
          </button>
        </form>
      </div>

      <p class="mt-6 text-center text-2xs text-body">
        CaisseBi — la caisse simple, rapide et fiable pour votre commerce.
      </p>
    </div>
  </div>
</template>
