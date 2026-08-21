<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const { user, loggedIn, clear: clearSession } = useUserSession();
const toast = useToast();
const route = useRoute();
const { playTap, playSuccess, playRemove } = useClickSound();

const NAVY = "#182B6B";
const GOLD = "#F5A524";

// Rien à déverrouiller sans session active : on renvoie vers la connexion.
if (!loggedIn.value) {
  await navigateTo("/login");
}

const redirectTarget = computed(() => {
  const r = route.query.redirect;
  if (typeof r === "string" && r.startsWith("/")) return r;
  return user.value?.role === "CASHIER" ? "/pos" : "/";
});

// Where the "use my password instead" link (and the auto-fallback for a
// user who has no PIN set) sends the user — the existing password-based
// unlock screen, with the same redirect preserved.
const passwordFallbackUrl = computed(
  () => `/page-lock-screen?redirect=${encodeURIComponent(redirectTarget.value)}`
);

// Checked once on mount via a lightweight GET that reveals only whether a
// PIN is set (never the hash) — see server/api/auth/pin-status.get.ts. A
// user with no PIN configured can never succeed on this screen, so we route
// them straight to the password fallback instead of stranding them here.
const checking = ref(true);

const digits = ref<string[]>([]);
const errorMessage = ref("");
const loading = ref(false);
const locked = ref(false);
const shake = ref(false);

const pinDisplay = computed(() => [0, 1, 2, 3].map((i) => !!digits.value[i]));

onMounted(async () => {
  try {
    const { hasPin } = await $fetch("/api/auth/pin-status");
    if (!hasPin) {
      await navigateTo(passwordFallbackUrl.value);
      return;
    }
  } catch {
    // Status check failed (network hiccup) — don't strand the user behind a
    // spinner, just let them try the keypad; unlock-pin itself will tell us
    // clearly if there's really no PIN configured.
  } finally {
    checking.value = false;
  }
});

function triggerShake() {
  shake.value = true;
  setTimeout(() => (shake.value = false), 400);
}

function pressKey(key: string) {
  if (loading.value || locked.value) return;
  playTap();
  errorMessage.value = "";
  if (key === "C") {
    digits.value = [];
    return;
  }
  if (key === "back") {
    digits.value = digits.value.slice(0, -1);
    return;
  }
  if (digits.value.length >= 4) return;
  digits.value = [...digits.value, key];
  if (digits.value.length === 4) {
    submit();
  }
}

async function submit() {
  const pin = digits.value.join("");
  loading.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/auth/unlock-pin", {
      method: "POST",
      body: { pin },
    });
    playSuccess();
    toast.success("Session déverrouillée");
    await navigateTo(redirectTarget.value);
  } catch (e: any) {
    const statusCode = e?.statusCode || e?.response?.status;
    const message = e?.data?.statusMessage || "Code PIN incorrect";
    if (statusCode === 400) {
      // "Aucun code PIN configuré" — the status check on mount missed it
      // (e.g. race with an admin clearing the PIN) or failed silently above.
      await navigateTo(passwordFallbackUrl.value);
      return;
    }
    if (statusCode === 429) {
      locked.value = true;
      errorMessage.value = message;
      // Cooldown is short (a few seconds) — re-enable the keypad afterwards
      // rather than making the user reload the page.
      const seconds = Number(message.match(/(\d+)s/)?.[1] || 30);
      setTimeout(() => {
        locked.value = false;
        errorMessage.value = "";
      }, seconds * 1000);
    } else {
      errorMessage.value = message;
    }
    playRemove();
    triggerShake();
    digits.value = [];
  } finally {
    loading.value = false;
  }
}

async function logout() {
  try {
    await clearSession();
  } finally {
    await navigateTo("/login");
  }
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center p-4" style="background: #f5f7fb">
    <div class="w-full max-w-[400px]">
      <div class="rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        <div class="mb-6 text-center">
          <img src="assets/images/logo-caissebi.png" alt="CaisseBi" class="mx-auto mb-5 h-14 w-auto object-contain" />
          <span
            class="mb-3 inline-flex size-14 items-center justify-center rounded-full text-2xl text-white"
            :style="{ background: NAVY }"
          >
            <i class="fa fa-lock"></i>
          </span>
          <h3 class="mb-1.5 text-xl font-bold" :style="{ color: NAVY }">Session verrouillée</h3>
          <p class="text-2sm text-body">
            Bonjour <strong>{{ user?.name }}</strong
            >, entrez votre code PIN
          </p>
        </div>

        <div v-if="checking" class="flex justify-center py-10">
          <i class="fa fa-spinner fa-spin text-2xl" :style="{ color: NAVY }"></i>
        </div>

        <template v-else>
          <div
            v-if="errorMessage"
            class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-center text-sm text-danger"
          >
            {{ errorMessage }}
          </div>

          <div class="mb-6 flex justify-center gap-4" :class="{ 'animate-shake': shake }">
            <span
              v-for="(filled, i) in pinDisplay"
              :key="i"
              class="size-4 rounded-full border-2 duration-150"
              :style="
                filled
                  ? { background: NAVY, borderColor: NAVY }
                  : { background: 'transparent', borderColor: '#d0d5e0' }
              "
            ></span>
          </div>

          <div class="mx-auto grid max-w-[280px] grid-cols-3 gap-3" :class="{ 'pointer-events-none opacity-50': loading || locked }">
            <button
              v-for="key in ['1', '2', '3', '4', '5', '6', '7', '8', '9']"
              :key="key"
              type="button"
              class="h-16 rounded-2xl border border-border text-xl font-bold duration-150 active:scale-95"
              :style="{ color: NAVY }"
              @click="pressKey(key)"
            >
              {{ key }}
            </button>
            <button
              type="button"
              class="h-16 rounded-2xl bg-dangerlight text-base font-bold text-danger duration-150 active:scale-95"
              @click="pressKey('C')"
            >
              C
            </button>
            <button
              type="button"
              class="h-16 rounded-2xl border border-border text-xl font-bold duration-150 active:scale-95"
              :style="{ color: NAVY }"
              @click="pressKey('0')"
            >
              0
            </button>
            <button
              type="button"
              class="flex h-16 items-center justify-center rounded-2xl border border-border text-lg duration-150 active:scale-95"
              :style="{ color: NAVY }"
              @click="pressKey('back')"
            >
              <i class="fa fa-backspace"></i>
            </button>
          </div>

          <p v-if="locked" class="mt-4 text-center text-2xs text-danger">
            Le clavier est temporairement désactivé.
          </p>
        </template>

        <div class="mt-7 flex flex-col items-center gap-2 text-2sm">
          <NuxtLink :to="passwordFallbackUrl" class="font-semibold" :style="{ color: GOLD }">
            Utiliser mon mot de passe
          </NuxtLink>
          <a href="#" class="text-body" @click.prevent="logout">Se déconnecter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shake {
  10%,
  90% {
    transform: translateX(-2px);
  }
  20%,
  80% {
    transform: translateX(4px);
  }
  30%,
  50%,
  70% {
    transform: translateX(-8px);
  }
  40%,
  60% {
    transform: translateX(8px);
  }
}
.animate-shake {
  animation: shake 0.4s ease;
}
</style>
