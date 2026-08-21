<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const { user, loggedIn, clear: clearSession } = useUserSession();
const toast = useToast();
const route = useRoute();

// Rien à déverrouiller sans session active : on renvoie vers la connexion.
if (!loggedIn.value) {
  await navigateTo("/login");
}

const password = ref("");
const hide = ref(false);
const loading = ref(false);
const errorMessage = ref("");

const redirectTarget = computed(() => {
  const r = route.query.redirect;
  if (typeof r === "string" && r.startsWith("/")) return r;
  return user.value?.role === "CASHIER" ? "/pos" : "/";
});

async function submit() {
  errorMessage.value = "";
  loading.value = true;
  try {
    await $fetch("/api/auth/unlock", {
      method: "POST",
      body: { password: password.value },
    });
    toast.success("Session déverrouillée");
    await navigateTo(redirectTarget.value);
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Mot de passe incorrect";
  } finally {
    loading.value = false;
    password.value = "";
  }
}

async function logout() {
  try {
    await clearSession();
  } finally {
    // Always leave the protected screen, even if the API call itself failed
    // (network hiccup) — the user's intent to log out must never be silently
    // dropped.
    await navigateTo("/login");
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
              <span
                class="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-primarylight text-primary text-2xl"
              >
                <i class="fa fa-lock"></i>
              </span>
              <h3 class="mb-2">Session verrouillée</h3>
              <p class="sm:text-sm mb-4">
                Bonjour <strong>{{ user?.name }}</strong
                >, saisissez votre mot de passe pour continuer
              </p>
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
                  >Mot de passe<span class="text-danger"> *</span></label
                >
                <input
                  v-model="password"
                  :type="`${!hide ? 'password' : 'text'}`"
                  required
                  autofocus
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
              <div class="text-center mb-6 grid">
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full disabled:opacity-60"
                >
                  {{ loading ? "Déverrouillage..." : "Déverrouiller" }}
                </button>
              </div>
            </form>
            <p class="text-center sm:text-sm mb-4">
              Ce n'est pas vous ?
              <a href="#" class="text-primary" @click.prevent="logout"
                >Se déconnecter</a
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
