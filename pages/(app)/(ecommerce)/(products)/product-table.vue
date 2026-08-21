<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import ProductTable from "~/components/ProductTable.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Ecommerce" name="Product List" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Product List</h4>
              <NuxtLink
                to="/add-categary"
                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                >Add Product</NuxtLink
              >
            </div>
            <div class="sm:p-5 p-4">
              <div class="overflow-x-auto">
                <ClientOnly>
                  <ProductTable />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
