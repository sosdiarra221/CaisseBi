<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CategoryTable from "~/components/CategoryTable.vue";
</script>

<template>
  <div class="content-body">
    <CommonNav title="Category" name="Category Table" />

    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="card-title">Category List</h4>
              <NuxtLink
                to="/add-categary"
                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                >Add Category</NuxtLink
              >
            </div>
            <div class="sm:p-5 p-4">
              <ClientOnly>
                <CategoryTable />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
