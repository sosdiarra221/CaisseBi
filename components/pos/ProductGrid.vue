<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
import { categoryIcon } from "~/lib/productIcons";
import { productAvatar } from "~/lib/avatar";

defineProps<{
  products: {
    id: number;
    label: string;
    salePrice: number | string;
    stockable: boolean;
    quantity: number;
    image?: string | null;
    category?: { name: string } | null;
  }[];
  currency: string;
  viewMode: "grid" | "list";
}>();
const emit = defineEmits<{ select: [product: any] }>();

const { playAdd } = useClickSound();
const pulsing = ref<number | null>(null);

function handleSelect(product: any) {
  if (product.stockable && product.quantity <= 0) return;
  playAdd();
  pulsing.value = product.id;
  setTimeout(() => {
    if (pulsing.value === product.id) pulsing.value = null;
  }, 180);
  emit("select", product);
}
</script>

<template>
  <div v-if="viewMode === 'grid'" class="grid gap-3.5 p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
    <button
      v-for="product in products"
      :key="product.id"
      type="button"
      :disabled="product.stockable && product.quantity <= 0"
      class="group relative flex flex-col rounded-2xl border border-border bg-card p-3 text-left shadow-sm duration-150 hover:border-primary hover:shadow-md disabled:opacity-40 disabled:pointer-events-none"
      :class="pulsing === product.id ? 'scale-95' : 'scale-100'"
      @click="handleSelect(product)"
    >
      <span
        v-if="product.stockable"
        class="absolute right-2 top-2 z-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold"
        :class="product.quantity <= 5 ? 'bg-dangerlight text-danger' : 'bg-successlight text-success'"
      >
        {{ product.quantity }}
      </span>

      <div class="relative mb-2.5 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-bodybg">
        <img :src="product.image || productAvatar(product.label)" :alt="product.label" class="h-full w-full object-cover" />
        <span
          v-if="product.category?.name"
          class="absolute bottom-1 left-1 flex size-6 items-center justify-center rounded-full bg-card/90 text-sm shadow"
          >{{ categoryIcon(product.category?.name) }}</span
        >
      </div>

      <span class="mb-1 truncate font-semibold leading-tight">{{ product.label }}</span>

      <div class="mt-auto flex items-end justify-between">
        <span class="font-bold text-primary">{{ formatAmount(product.salePrice) }} <span class="text-2xs font-medium">{{ currency }}</span></span>
        <span
          class="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-white duration-150 group-active:scale-90"
        >
          <i class="fa fa-plus text-2xs"></i>
        </span>
      </div>
    </button>

    <p v-if="!products.length" class="col-span-full py-10 text-center text-body">Aucun produit trouvé.</p>
  </div>

  <div v-else class="flex flex-col gap-2 p-4">
    <button
      v-for="product in products"
      :key="product.id"
      type="button"
      :disabled="product.stockable && product.quantity <= 0"
      class="flex items-center gap-3 rounded-xl border border-border bg-card p-2.5 text-left duration-150 hover:border-primary disabled:opacity-40 disabled:pointer-events-none"
      :class="pulsing === product.id ? 'scale-[0.98]' : 'scale-100'"
      @click="handleSelect(product)"
    >
      <div class="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-bodybg">
        <img :src="product.image || productAvatar(product.label)" :alt="product.label" class="h-full w-full object-cover" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate font-semibold">{{ product.label }}</p>
        <p class="text-2xs text-body">{{ product.category?.name ?? "—" }}</p>
      </div>
      <span
        v-if="product.stockable"
        class="shrink-0 rounded-full px-2 py-0.5 text-2xs font-bold"
        :class="product.quantity <= 5 ? 'bg-dangerlight text-danger' : 'bg-successlight text-success'"
      >
        {{ product.quantity }}
      </span>
      <span class="shrink-0 font-bold text-primary">{{ formatAmount(product.salePrice) }} {{ currency }}</span>
      <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <i class="fa fa-plus text-2xs"></i>
      </span>
    </button>

    <p v-if="!products.length" class="py-10 text-center text-body">Aucun produit trouvé.</p>
  </div>
</template>
