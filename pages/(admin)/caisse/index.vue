<script lang="ts" setup>
import { formatAmount, formatDateTime } from "~/lib/format";
definePageMeta({ layout: "home" });

const { user } = useUserSession();
const { data: current } = await useFetch("/api/cash-sessions/current");
const { data: detail } = await useFetch(
  () => (current.value ? `/api/cash-sessions/${current.value.id}` : null)
);
const { data: history } = await useFetch("/api/cash-sessions");
const { data: company } = await useFetch("/api/company");
</script>

<template>
  <div class="content-body">
    <CommonNav title="Caisse" name="Caisse" />
    <div class="container">
      <div class="card !h-auto mb-6">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Session en cours</h4>
          <div class="flex flex-wrap gap-2">
            <NuxtLink
              :to="current ? `/caisse/journal?sessionId=${current.id}` : '/caisse/journal'"
              class="btn border border-border btn-sm"
            >
              <i class="fa fa-book mr-1.5"></i>Journal de caisse
            </NuxtLink>
            <NuxtLink v-if="user?.role !== 'CASHIER'" to="/comptabilite" class="btn border border-border btn-sm">
              <i class="fa fa-scale-balanced mr-1.5"></i>Rapport comptable
            </NuxtLink>
            <NuxtLink v-if="!current" to="/caisse/ouverture" class="btn bg-primary text-white btn-sm">
              Ouvrir la caisse
            </NuxtLink>
            <NuxtLink v-else-if="user?.role !== 'CASHIER'" to="/caisse/fermeture" class="btn bg-danger text-white btn-sm">
              Fermer la caisse
            </NuxtLink>
          </div>
        </div>
        <div class="p-5">
          <p v-if="!current" class="text-body">Aucune caisse ouverte actuellement.</p>
          <div v-else>
            <p>Caisse : <strong>{{ current.cashRegister?.name }}</strong></p>
            <p>Caissier : <strong>{{ current.user?.name }}</strong></p>
            <p>Ouverture : {{ formatDateTime(current.openedAt) }}</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div>
                <p class="text-body text-sm">Fond initial</p>
                <p class="font-semibold">{{ formatAmount(current.startingFloat) }} {{ company?.currency }}</p>
              </div>
              <div>
                <p class="text-body text-sm">Ventes</p>
                <p class="font-semibold">{{ formatAmount(detail?.salesTotal ?? 0) }} {{ company?.currency }}</p>
              </div>
              <div>
                <p class="text-body text-sm">Espèces</p>
                <p class="font-semibold">{{ formatAmount(detail?.paymentTotals?.CASH ?? 0) }}</p>
              </div>
              <div>
                <p class="text-body text-sm">Carte / Mobile</p>
                <p class="font-semibold">
                  {{
                    (detail?.paymentTotals?.CARD ?? 0) +
                    (detail?.paymentTotals?.WAVE ?? 0) +
                    (detail?.paymentTotals?.ORANGE_MONEY ?? 0)
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card !h-auto">
        <div class="border-b border-border py-4 px-5">
          <h4 class="text-base">Journal de caisse</h4>
        </div>
        <div class="p-5 overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-border">
                <th class="pb-3 font-medium">Caisse</th>
                <th class="pb-3 font-medium">Caissier</th>
                <th class="pb-3 font-medium">Ouverture</th>
                <th class="pb-3 font-medium">Fermeture</th>
                <th class="pb-3 font-medium">Écart</th>
                <th class="pb-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="s in history" :key="s.id" class="border-b border-border">
                <td class="py-3">{{ s.cashRegister.name }}</td>
                <td class="py-3">{{ s.user.name }}</td>
                <td class="py-3">{{ formatDateTime(s.openedAt) }}</td>
                <td class="py-3">{{ s.closedAt ? formatDateTime(s.closedAt) : "—" }}</td>
                <td class="py-3">{{ s.gap !== null ? formatAmount(s.gap) : "—" }}</td>
                <td class="py-3">
                  <span :class="s.status === 'OPEN' ? 'text-success' : 'text-body'">
                    {{ s.status === "OPEN" ? "Ouverte" : "Fermée" }}
                  </span>
                </td>
              </tr>
              <tr v-if="!history?.length">
                <td colspan="6" class="py-6 text-center text-body">Aucune session.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
