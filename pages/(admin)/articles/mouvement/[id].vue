<script lang="ts" setup>
import { formatDateTime } from "~/lib/format";

definePageMeta({ layout: "home" });

const NAVY = "#182B6B";

const TYPE_LABELS: Record<string, string> = { IN: "Entrée de stock", OUT: "Sortie de stock" };

const route = useRoute();
const { data: company } = await useFetch("/api/company");
const { data: movement, pending, error } = await useFetch(`/api/articles/movements/${route.params.id}`);

function print() {
  window.print();
}
</script>

<template>
  <div class="content-body print:m-0 print:p-0">
    <div class="print:hidden">
      <CommonNav title="Articles" name="Mouvement d'articles" />
    </div>
    <div class="container print:!max-w-none print:!p-0">
      <div v-if="pending" class="py-10 text-center text-body">Chargement...</div>
      <div v-else-if="error || !movement" class="py-10 text-center text-danger">Mouvement introuvable.</div>

      <div v-else class="card !h-auto mx-auto max-w-2xl print:!m-0 print:!max-w-none print:border-0 print:!shadow-none">
        <!-- Document header: proforma-style — company identity, movement
             reference, then a bordered line-item table, like the printed
             sale receipt but as a full on-screen (and printable) document
             rather than a thermal ticket. -->
        <div class="flex flex-wrap items-start justify-between gap-4 border-b border-border p-6">
          <div>
            <p class="text-lg font-bold" :style="{ color: NAVY }">{{ company?.name }}</p>
            <p v-if="company?.address" class="text-2sm text-body">{{ company.address }}</p>
            <p v-if="company?.phone" class="text-2sm text-body">{{ company.phone }}</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-extrabold" :style="{ color: NAVY }">
              {{ TYPE_LABELS[movement.type] ?? movement.type }}
            </p>
            <p class="text-2sm text-body">N° {{ String(movement.number).padStart(6, "0") }}</p>
            <p class="text-2sm text-body">{{ formatDateTime(new Date(movement.createdAt)) }}</p>
          </div>
        </div>

        <div class="px-6 pt-4 text-2sm text-body">
          Enregistré par <strong>{{ movement.user?.name }}</strong>
        </div>

        <div class="p-6">
          <table class="w-full text-2sm" style="border-collapse: collapse">
            <thead>
              <tr class="border-b-2" :style="{ borderColor: NAVY }">
                <th class="py-2 text-left font-semibold" :style="{ color: NAVY }">Article</th>
                <th class="py-2 text-right font-semibold" :style="{ color: NAVY }">Quantité</th>
                <th class="py-2 text-right font-semibold" :style="{ color: NAVY }">Mesure</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in movement.lines" :key="line.id" class="border-b border-border">
                <td class="py-2.5">{{ line.article.designation }}</td>
                <td class="py-2.5 text-right font-semibold">{{ Number(line.quantity).toLocaleString("fr-FR") }}</td>
                <td class="py-2.5 text-right text-body">{{ line.article.unit }}</td>
              </tr>
            </tbody>
          </table>

          <p v-if="movement.observation" class="mt-5 rounded-lg bg-bodybg p-3 text-2sm">
            <span class="font-semibold">Observation : </span>{{ movement.observation }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 border-t border-border p-5 print:hidden">
          <NuxtLink to="/articles/mouvement" class="btn border border-border">
            <i class="fa fa-arrow-left mr-1.5"></i>Retour
          </NuxtLink>
          <NuxtLink :to="`/articles/mouvement/${movement.id}/edit`" class="btn border border-border">
            <i class="fa fa-pen mr-1.5"></i>Modifier
          </NuxtLink>
          <button type="button" class="btn ml-auto bg-primary text-white" @click="print">
            <i class="fa fa-print mr-1.5"></i>Imprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
