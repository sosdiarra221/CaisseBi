<script lang="ts" setup>
definePageMeta({ layout: "home" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const { data: company, refresh } = await useFetch("/api/company");

const form = reactive({
  name: "",
  commercialName: "",
  address: "",
  phone: "",
  email: "",
  website: "",
  taxId: "",
  currency: "FCFA",
  receiptFormat: "80mm" as "58mm" | "80mm" | "A5",
  receiptHeader: "",
  receiptFooter: "",
  openTime: "",
  closeTime: "",
});

watchEffect(() => {
  if (!company.value) return;
  Object.assign(form, {
    name: company.value.name ?? "",
    commercialName: company.value.commercialName ?? "",
    address: company.value.address ?? "",
    phone: company.value.phone ?? "",
    email: company.value.email ?? "",
    website: company.value.website ?? "",
    taxId: company.value.taxId ?? "",
    currency: company.value.currency ?? "FCFA",
    receiptFormat: company.value.receiptFormat ?? "80mm",
    receiptHeader: company.value.receiptHeader ?? "",
    receiptFooter: company.value.receiptFooter ?? "",
    openTime: company.value.openTime ?? "",
    closeTime: company.value.closeTime ?? "",
  });
});

const toast = useToast();
const saving = ref(false);
const errorMessage = ref("");

const push = usePushNotifications();
async function enablePush() {
  const ok = await push.subscribe();
  if (ok) toast.success("Notifications activées.");
  else if (push.error.value) toast.error(push.error.value);
  else if (push.permission.value === "denied") {
    toast.error("Notifications bloquées — autorisez-les dans les réglages du navigateur.");
  }
}

async function save() {
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/company", { method: "PATCH", body: form });
    toast.success("Paramètres enregistrés.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Paramètres" name="Entreprise" />
    <div class="container">
      <div class="mx-auto max-w-6xl">
        <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">{{ errorMessage }}</p>

        <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
          <!-- Informations générales -->
          <div class="card !h-auto">
            <div class="p-5">
              <div class="mb-4 flex items-center gap-3">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full text-white" :style="{ background: NAVY }">
                  <i class="fa fa-building"></i>
                </span>
                <div>
                  <h5 class="text-sm font-semibold uppercase text-body">Informations générales</h5>
                  <p class="text-2xs text-body/70">Identité de l'entreprise</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label class="mb-1">Nom de l'entreprise</label>
                  <input v-model="form.name" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div class="col-span-2">
                  <label class="mb-1">Nom commercial</label>
                  <input v-model="form.commercialName" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div>
                  <label class="mb-1">Identifiant fiscal / NINEA</label>
                  <input v-model="form.taxId" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div>
                  <label class="mb-1">Devise</label>
                  <select v-model="form.currency" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
                    <option value="FCFA">FCFA</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Coordonnées -->
          <div class="card !h-auto">
            <div class="p-5">
              <div class="mb-4 flex items-center gap-3">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full text-white" :style="{ background: NAVY }">
                  <i class="fa fa-address-card"></i>
                </span>
                <div>
                  <h5 class="text-sm font-semibold uppercase text-body">Coordonnées</h5>
                  <p class="text-2xs text-body/70">Adresse et moyens de contact</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label class="mb-1">Adresse</label>
                  <input v-model="form.address" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div>
                  <label class="mb-1">Téléphone</label>
                  <input v-model="form.phone" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div>
                  <label class="mb-1">Email</label>
                  <input v-model="form.email" type="email" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div class="col-span-2">
                  <label class="mb-1">Site web</label>
                  <input v-model="form.website" type="text" placeholder="www.example.com" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
              </div>
            </div>
          </div>

          <!-- Horaires d'ouverture -->
          <div class="card !h-auto">
            <div class="p-5">
              <div class="mb-4 flex items-center gap-3">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full" :style="{ background: GOLD, color: NAVY }">
                  <i class="fa fa-clock"></i>
                </span>
                <div>
                  <h5 class="text-sm font-semibold uppercase text-body">Horaires d'ouverture</h5>
                  <p class="text-2xs text-body/70">Journée commerciale</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="mb-1">Heure d'ouverture</label>
                  <input v-model="form.openTime" type="time" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div>
                  <label class="mb-1">Heure de fermeture</label>
                  <input v-model="form.closeTime" type="time" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <p class="col-span-2 text-2xs text-body/70">
                  <i class="fa fa-circle-info mr-1"></i>
                  Utilisé pour définir la journée commerciale dans les rapports (ex: un restaurant ouvert de 7h à 2h du matin). Laissez vide pour garder un découpage classique minuit-minuit.
                </p>
              </div>
            </div>
          </div>

          <!-- Ticket de caisse -->
          <div class="card !h-auto">
            <div class="p-5">
              <div class="mb-4 flex items-center gap-3">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full text-white" :style="{ background: NAVY }">
                  <i class="fa fa-receipt"></i>
                </span>
                <div>
                  <h5 class="text-sm font-semibold uppercase text-body">Ticket de caisse</h5>
                  <p class="text-2xs text-body/70">Format et messages imprimés</p>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2">
                  <label class="mb-1">Format</label>
                  <select v-model="form.receiptFormat" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
                    <option value="58mm">58 mm</option>
                    <option value="80mm">80 / 88 mm</option>
                    <option value="A5">A5</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <label class="mb-1">Message d'en-tête</label>
                  <input v-model="form.receiptHeader" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
                <div class="col-span-2">
                  <label class="mb-1">Message de pied de ticket</label>
                  <input v-model="form.receiptFooter" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications push -->
          <div class="card !h-auto">
            <div class="p-5">
              <div class="mb-4 flex items-center gap-3">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-full text-white" :style="{ background: NAVY }">
                  <i class="fa fa-bell"></i>
                </span>
                <div>
                  <h5 class="text-sm font-semibold uppercase text-body">Notifications</h5>
                  <p class="text-2xs text-body/70">Alertes en temps réel sur cet appareil</p>
                </div>
              </div>

              <p class="mb-4 text-2sm text-body">
                Recevez une notification pour : stock faible, nouvelle vente, licence bientôt expirée, écart de caisse à la fermeture.
              </p>

              <div v-if="!push.isSupported" class="rounded-lg bg-bodybg px-3 py-2 text-2sm text-body">
                Non supporté sur ce navigateur/appareil.
              </div>
              <div v-else-if="push.permission.value === 'granted'" class="flex items-center gap-2 rounded-lg bg-successlight px-3 py-2 text-2sm font-semibold text-success">
                <i class="fa fa-check-circle"></i> Notifications activées sur cet appareil
              </div>
              <div v-else-if="push.permission.value === 'denied'" class="rounded-lg bg-dangerlight px-3 py-2 text-2sm text-danger">
                Bloquées par le navigateur — autorisez les notifications pour ce site dans ses réglages, puis rechargez la page.
              </div>
              <button
                v-else
                type="button"
                class="btn bg-primary text-white"
                :disabled="push.loading.value"
                @click="enablePush"
              >
                <i class="fa fa-bell mr-2"></i>{{ push.loading.value ? "Activation..." : "Activer les notifications" }}
              </button>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button type="button" class="btn bg-primary text-white" :disabled="saving" @click="save">
            <i class="fa fa-check mr-2"></i>Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
