
<script lang="ts" setup>
// The ".client.vue" suffix is what matters here: it stops Nuxt from ever
// rendering/mounting this component during SSR. DataTables.net expects a
// real browser DOM to measure and lay out columns against — running it on
// the server (against Nitro's fake/zero-width SSR DOM) produced both the
// "DataTable.use is not a function" 500s (module state getting stepped on
// across concurrent SSR requests on the same long-lived Node process) and
// tables rendering at the wrong, cramped width once hydrated. Every admin
// list page should render its table through this component instead of
// importing datatables.net-vue3 directly.
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";

DataTable.use(DataTablesCore);

defineProps<{
  id: string;
  data?: any[];
  columns?: any[];
  options?: any;
}>();
</script>

<template>
  <DataTable :id="id" class="display table !mb-6 text-left" :data="data ?? []" :columns="columns" :options="options">
    <slot />
  </DataTable>
</template>
