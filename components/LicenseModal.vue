<script lang="ts" setup>
import { formatDate } from "~/lib/format";

defineProps<{ show: boolean }>();
const emit = defineEmits<{ close: [] }>();

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const { user } = useUserSession();
const toast = useToast();
const { data: license, refresh: refreshLicense, pending } = useLicenseStatus();

const isOwner = computed(() => user.value?.role === "OWNER");

const copied = ref(false);
async function copyKey(key: string) {
  try {
    await navigator.clipboard.writeText(key);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch {
    // Clipboard API unavailable (e.g. insecure context) — the key is
    // already selectable/visible in the box, so this is a soft failure.
  }
}

// --- Activate -----------------------------------------------------------
const activateKey = ref("");
const activating = ref(false);

async function activate() {
  if (!activateKey.value.trim()) return;
  activating.value = true;
  try {
    await $fetch("/api/license/activate", {
      method: "POST",
      body: { key: activateKey.value.trim() },
    });
    toast.success("Licence activée. 30 jours d'accès démarrent maintenant.");
    activateKey.value = "";
    await refreshLicense();
  } catch (e: any) {
    toast.error(e?.data?.statusMessage || "Clé de licence invalide");
  } finally {
    activating.value = false;
  }
}

function close() {
  emit("close");
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
    @click.self="close"
  >
    <Transition
      appear
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div class="w-full max-w-lg rounded-xl bg-card p-6 my-8">
        <div class="mb-4 flex items-center justify-between">
          <h4 class="text-base">Statut de la licence</h4>
          <button type="button" class="text-body hover:text-danger" @click="close">
            <i class="fa fa-times"></i>
          </button>
        </div>

        <!-- Current status -->
        <div class="mb-5 rounded-xl p-4 text-white" :style="{ background: NAVY }">
          <div class="flex items-center gap-3">
            <span
              class="flex size-10 shrink-0 items-center justify-center rounded-full"
              :style="{ background: 'rgba(245,165,36,0.2)', color: GOLD }"
            >
              <i class="fa fa-shield-halved"></i>
            </span>
            <div class="min-w-0">
              <template v-if="pending">
                <p class="font-bold">Vérification...</p>
              </template>
              <template v-else-if="license?.active">
                <p class="font-bold">{{ license.daysRemaining }} jour{{ license.daysRemaining === 1 ? "" : "s" }} restant{{ license.daysRemaining === 1 ? "" : "s" }}</p>
                <p class="text-2xs text-white/70">Expire le {{ license.expiresAt ? formatDate(license.expiresAt) : "—" }}</p>
              </template>
              <template v-else>
                <p class="font-bold text-danger">Licence expirée</p>
                <p class="text-2xs text-white/70">Aucune licence active pour le moment</p>
              </template>
            </div>
          </div>
        </div>

        <!-- OWNER controls -->
        <template v-if="isOwner">
          <div v-if="license?.generatedUnactivatedKey" class="mb-5 rounded-lg border border-border p-3">
            <p class="mb-2 text-2xs text-body">
              Clé reçue de l'éditeur, en attente d'activation :
            </p>
            <div class="flex items-center gap-2">
              <code class="flex-1 truncate rounded-lg bg-primarylight px-3 py-2 text-2sm font-bold text-primary">
                {{ license.generatedUnactivatedKey }}
              </code>
              <button
                type="button"
                class="shrink-0 rounded-lg border border-border px-3 py-2 text-2sm hover:text-primary"
                @click="copyKey(license.generatedUnactivatedKey || '')"
              >
                <i class="fa" :class="copied ? 'fa-check' : 'fa-copy'"></i>
              </button>
            </div>
          </div>

          <div class="mb-5">
            <h5 class="mb-2 text-2sm font-bold">Activer une licence</h5>
            <p class="mb-3 text-2xs text-body">
              Collez une clé générée pour l'activer et démarrer (ou renouveler) les 30 jours d'accès.
            </p>
            <div class="flex gap-2">
              <input
                v-model="activateKey"
                type="text"
                placeholder="CAISSEBI-XXXX-XXXX-XXXX-XXXX"
                class="h-11 flex-1 rounded-lg border border-border bg-transparent px-3 uppercase focus:border-primary"
                @keyup.enter="activate"
              />
              <button
                type="button"
                class="h-11 shrink-0 rounded-lg bg-primary px-4 text-2sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="activating || !activateKey.trim()"
                @click="activate"
              >
                {{ activating ? "Activation..." : "Activer" }}
              </button>
            </div>
          </div>
        </template>

        <!-- Non-OWNER: contact block when there's no active license -->
        <template v-else-if="!pending && !license?.active">
          <div class="mb-5 rounded-xl border border-border p-4">
            <p class="mb-3 text-2sm">
              Seul l'administrateur peut réactiver la licence. Contactez l'éditeur du logiciel :
            </p>
            <p class="mb-1.5 font-bold" :style="{ color: NAVY }">
              <i class="fa fa-building mr-1.5"></i>Pene Corporation — éditeur de logiciel
            </p>
            <p class="mb-1 text-2sm">
              <i class="fa fa-phone mr-1.5" :style="{ color: GOLD }"></i>Téléphone : <strong>+221 78 179 17 90</strong>
            </p>
            <p class="text-2sm">
              <i class="fa fa-envelope mr-1.5" :style="{ color: GOLD }"></i>Email : <strong>contact@gorapene.com</strong>
            </p>
          </div>
        </template>

        <div class="border-t border-border pt-3 text-center text-2xs text-body/70">
          Édité par Pene Corporation — Une conception de Gora Pene
        </div>
      </div>
    </Transition>
  </div>
</template>
