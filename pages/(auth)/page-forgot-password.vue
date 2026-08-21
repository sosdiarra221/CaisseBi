<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const toast = useToast();

const email = ref("");
const loading = ref(false);
const errorMessage = ref("");
const submitted = ref(false);

async function submit() {
  errorMessage.value = "";
  loading.value = true;
  try {
    await $fetch("/api/auth/forgot-password", {
      method: "POST",
      body: { email: email.value },
    });
    toast.success("Demande envoyée");
    submitted.value = true;
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Une erreur est survenue";
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
              <h3 class="mb-2">Mot de passe oublié</h3>
              <p class="sm:text-sm mb-4">
                Saisissez votre email pour générer un lien de réinitialisation
              </p>
            </div>

            <form @submit.prevent="submit">
              <div
                v-if="errorMessage"
                class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm"
              >
                {{ errorMessage }}
              </div>
              <div class="mb-6">
                <label class="mb-1"
                  >Email<span class="text-danger"> *</span></label
                >
                <input
                  v-model="email"
                  type="email"
                  required
                  class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                />
              </div>
              <div class="text-center mb-6 grid">
                <button
                  type="submit"
                  :disabled="loading"
                  class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full disabled:opacity-60"
                >
                  {{ loading ? "Génération..." : "Générer le lien" }}
                </button>
              </div>
            </form>

            <div
              v-if="submitted"
              class="mb-6 rounded-lg border border-border bg-bodybg p-4"
            >
              <p class="text-sm font-semibold mb-1">
                <i class="fa fa-info-circle text-primary"></i>
                Vérifiez votre boîte email
              </p>
              <p class="text-2xs text-body mb-0">
                Si un compte existe pour cet email, un lien de
                réinitialisation vient de vous être envoyé. Il est valable 1
                heure et à usage unique.
              </p>
            </div>

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
