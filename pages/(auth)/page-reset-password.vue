<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const route = useRoute();
const toast = useToast();

const token = computed(() => String(route.query.token || ""));
const password = ref("");
const confirmPassword = ref("");
const hide = ref(false);
const loading = ref(false);
const errorMessage = ref("");

const mismatch = computed(
  () => confirmPassword.value.length > 0 && password.value !== confirmPassword.value
);

async function submit() {
  errorMessage.value = "";

  if (!token.value) {
    errorMessage.value = "Lien de réinitialisation invalide";
    return;
  }
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Les mots de passe ne correspondent pas";
    return;
  }

  loading.value = true;
  try {
    await $fetch("/api/auth/reset-password", {
      method: "POST",
      body: { token: token.value, password: password.value },
    });
    toast.success("Mot de passe réinitialisé avec succès");
    await navigateTo("/login");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Une erreur est survenue";
    toast.error(errorMessage.value);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex min-h-screen h-full">
    <div class="container-fluid h-full">
      <div class="row h-full">
        <div class="lg:w-1/2 mx-auto self-center">
          <div class="lg:p-13.5 sm:p-6 p-3.5 max-w-[600px] mx-auto">
            <div class="text-center">
              <img
                src="assets/images/logo-full.png"
                class="mb-4 sm:hidden mx-auto inline-block dark:invert"
                alt=""
              />
              <h3 class="mb-2">Réinitialiser le mot de passe</h3>
              <p class="sm:text-sm mb-4">
                Choisissez un nouveau mot de passe pour votre compte
              </p>
            </div>

            <div
              v-if="!token"
              class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm"
            >
              Lien de réinitialisation manquant ou invalide. Demandez un
              nouveau lien.
            </div>

            <form @submit.prevent="submit">
              <div
                v-if="errorMessage"
                class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm"
              >
                {{ errorMessage }}
              </div>
              <div class="mb-6 relative">
                <label class="mb-1"
                  >Nouveau mot de passe<span class="text-danger"> *</span></label
                >
                <input
                  v-model="password"
                  :type="`${!hide ? 'password' : 'text'}`"
                  required
                  minlength="6"
                  :disabled="!token"
                  class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent dz-password"
                />
                <span
                  :class="`show-pass eye absolute right-5 bottom-2.5 cursor-pointer ${
                    hide ? 'active' : ''
                  }`"
                  @click="hide = !hide"
                >
                  <i class="fa fa-eye-slash"></i>
                  <i class="fa fa-eye"></i>
                </span>
              </div>
              <div class="mb-6 relative">
                <label class="mb-1"
                  >Confirmer le mot de passe<span class="text-danger">
                    *</span
                  ></label
                >
                <input
                  v-model="confirmPassword"
                  :type="`${!hide ? 'password' : 'text'}`"
                  required
                  minlength="6"
                  :disabled="!token"
                  class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent dz-password"
                />
                <p v-if="mismatch" class="mt-1 text-xs text-danger">
                  Les mots de passe ne correspondent pas
                </p>
              </div>
              <div class="text-center mb-6 grid">
                <button
                  type="submit"
                  :disabled="loading || !token || mismatch"
                  class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full disabled:opacity-60"
                >
                  {{ loading ? "Réinitialisation..." : "Réinitialiser" }}
                </button>
              </div>
            </form>

            <p class="text-center sm:text-sm mb-4">
              <NuxtLink to="/login" class="text-primary"
                >Retour à la connexion</NuxtLink
              >
            </p>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="bg-card h-full max-lg:hidden">
            <div
              class="text-center lg:pl-17 sm:pl-13.5 pl-3.5 lg:pt-17 sm:pt-10 pt-3.5"
            >
              <NuxtLink to="/"
                ><img
                  src="assets/images/logo-full.png"
                  class="mb-4 inline-block dark:invert"
                  alt=""
              /></NuxtLink>
              <p
                class="text-xl text-secondary leading-normal mx-auto max-w-[500px]"
              >
                CaisseBi — la caisse simple, rapide et fiable pour votre
                commerce.
              </p>
            </div>
            <div class="sm:mt-20 mt-5 text-center">
              <img
                src="assets/images/login.png"
                alt=""
                class="lg:w-[74%] w-4/5 inline-block max-sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
