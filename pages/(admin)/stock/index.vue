<script lang="ts" setup>
definePageMeta({ layout: "home" });

const route = useRoute();
// Lets the dashboard's low-stock alert link straight into the filtered view
// (?filter=low) instead of dropping the admin on the unfiltered list.
const filter = ref<"all" | "low">(route.query.filter === "low" ? "low" : "all");
const { data: products } = await useFetch("/api/products");

const filtered = computed(() => {
  const list = (products.value ?? []).filter((p: any) => p.stockable);
  if (filter.value === "low") return list.filter((p: any) => p.quantity <= p.alertThreshold);
  return list;
});
</script>

<template>
  <div class="content-body">
    <CommonNav title="Stock" name="Stock" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">État du stock</h4>
          <div class="flex gap-2">
            <NuxtLink to="/stock/mouvement" class="btn bg-primarylight text-primary btn-sm">
              Mouvement de stock
            </NuxtLink>
            <NuxtLink to="/stock/inventaire" class="btn bg-primary text-white btn-sm">
              Inventaire
            </NuxtLink>
          </div>
        </div>
        <div class="p-5">
          <div class="mb-4 flex gap-2">
            <button
              type="button"
              class="btn btn-sm"
              :class="filter === 'all' ? 'bg-primary text-white' : 'bg-primarylight text-primary'"
              @click="filter = 'all'"
            >
              Tous
            </button>
            <button
              type="button"
              class="btn btn-sm"
              :class="filter === 'low' ? 'bg-primary text-white' : 'bg-primarylight text-primary'"
              @click="filter = 'low'"
            >
              Faible
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-border">
                  <th class="pb-3 font-medium">Produit</th>
                  <th class="pb-3 font-medium">Stock</th>
                  <th class="pb-3 font-medium">Seuil</th>
                  <th class="pb-3 font-medium">État</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in filtered" :key="p.id" class="border-b border-border">
                  <td class="py-3">{{ p.label }}</td>
                  <td class="py-3">{{ p.quantity }}</td>
                  <td class="py-3">{{ p.alertThreshold }}</td>
                  <td class="py-3">
                    <span v-if="p.quantity <= p.alertThreshold" class="text-danger font-semibold">⚠ Faible</span>
                    <span v-else class="text-success">Normal</span>
                  </td>
                </tr>
                <tr v-if="!filtered.length">
                  <td colspan="4" class="py-6 text-center text-body">Aucun produit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
