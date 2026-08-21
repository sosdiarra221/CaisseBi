<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

const select = ref(true);
</script>

<template>
  <div class="xl:col-span-8 col-span-12">
    <div class="accordion" x-data="{selected:1}">
      <div class="mb-5">
        <div class="accordion-button p-3 relative bg-card border border-border shadow-default rounded-lg" id="headingOne" role="button" @click="select = !select" :class="{ active: select }">
          <span class="accordion-header-icon"></span>
          <span class="accordion-header-text font-semibold">Prompts</span>
          <span class="accordion-header-indicator"></span>
        </div>
        <Collapse :when="select">
          <div class="py-4 px-3">
            <div class="flex items-center mb-1">
              <h6>article-title:</h6>
              <span class="badge badge-sm text-danger bg-dangerlight ms-1">description</span>
              <span class="mx-1">,</span>
              <span class="badge badge-sm text-danger bg-dangerlight">section-headlines</span>
            </div>
            <div class="mb-6">
              <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea11" rows="3">
		Generate a title for an article that discusses the following topic:
		[[description]]
		The article will include the following sections:
		[[section-headlines]]

		Title:
												</textarea
              >
            </div>
            <div class="flex items-center mb-1">
              <h6>article-title:</h6>
              <span class="badge badge-sm text-danger bg-dangerlight ms-1">description</span>
              <span class="mx-1">,</span>
              <span class="badge badge-sm text-danger bg-dangerlight">section-headlines</span>
            </div>
            <div class="mb-6">
              <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea2" rows="3">
		Generate a title for an article that discusses the following topic:
		[[description]]
		The article will include the following sections:
		[[section-headlines]]

		Title:
												</textarea
              >
            </div>
            <div class="flex items-center mb-1">
              <h6>article-title:</h6>
              <span class="badge badge-sm text-danger bg-dangerlight ms-1">description</span>
              <span class="mx-1">,</span>
              <span class="badge badge-sm text-danger bg-dangerlight">section-headlines</span>
            </div>
            <div class="mb-6">
              <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea3" rows="3">
		Generate a title for an article that discusses the following topic:
		[[description]]
		The article will include the following sections:
		[[section-headlines]]

		Title:
												</textarea
              >
            </div>
            <div class="">
              <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea12" rows="3">
		Generate a title for an article that discusses the following topic:
		[[description]]
		The article will include the following sections:
		[[section-headlines]]

		Title:
												</textarea
              >
            </div>
          </div>
        </Collapse>
      </div>
    </div>
    <div class="card !h-auto">
      <div class="sm:p-5 p-4">
        <div class="overflow-x-auto ai-table">
          <table class="table w-full text-left">
            <thead>
              <tr>
                <th class="text-secondary border-b border-border">Type</th>
                <th class="text-secondary border-b border-border">Title</th>
                <th class="text-secondary border-b border-border text-right">Date created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-border">Landing Page</td>
                <td class="border-b border-border text-primary">This is a test title generation</td>
                <td class="border-b border-border text-right">July 10, 2024</td>
              </tr>
              <tr>
                <td class="border-b border-border">Landing Page</td>
                <td class="border-b border-border text-primary">This is a test title generation</td>
                <td class="border-b border-border text-right">July 10, 2024</td>
              </tr>
              <tr>
                <td class="border-b border-border">Landing Page</td>
                <td class="border-b border-border text-primary">This is a test title generation</td>
                <td class="border-b border-border text-right">July 10, 2024</td>
              </tr>

              <tr>
                <td class="border-b border-border">Landing Page</td>
                <td class="border-b border-border text-primary">This is a test title generation</td>
                <td class="border-b border-border text-right">July 10, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
