<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const { clear: clearSession } = useUserSession();

async function logout() {
  try {
    await clearSession();
  } finally {
    await navigateTo("/login");
  }
}
</script>

<template>
  <div class="flex min-h-screen h-full items-center justify-center p-4">
    <div class="w-full max-w-lg rounded-2xl bg-card p-8 text-center shadow-lg">
      <span
        class="mb-4 inline-flex size-16 items-center justify-center rounded-full text-2xl"
        :style="{ background: 'rgba(245,165,36,0.15)', color: GOLD }"
      >
        <i class="fa fa-shield-halved"></i>
      </span>
      <h3 class="mb-2">Accès suspendu</h3>
      <p class="mb-1 text-body">
        La licence de cette application n'est plus active. L'accès est temporairement suspendu.
      </p>
      <p class="mb-6 text-body">
        Seul l'administrateur du compte peut réactiver la licence pour restaurer l'accès.
      </p>

      <div class="mb-6 rounded-xl p-5 text-left text-white" :style="{ background: NAVY }">
        <p class="mb-3 font-bold" :style="{ color: GOLD }">
          <i class="fa fa-building mr-1.5"></i>Pene Corporation — éditeur de logiciel
        </p>
        <p class="mb-1.5 flex items-center gap-2">
          <i class="fa fa-phone shrink-0" :style="{ color: GOLD }"></i>
          <span>Téléphone : <strong>+221 78 179 17 90</strong></span>
        </p>
        <p class="flex items-center gap-2">
          <i class="fa fa-envelope shrink-0" :style="{ color: GOLD }"></i>
          <span>Email : <strong>contact@gorapene.com</strong></span>
        </p>
      </div>

      <p class="mb-6 text-xs text-body/70">Une conception de Gora Pene</p>

      <button type="button" class="btn border border-border !inline-block" @click="logout">
        Se déconnecter
      </button>
    </div>
  </div>
</template>
