<script lang="ts" setup>
import AikitContentLeft from "~/components/aikit/AikitContentLeft.vue";
import AikitContentRight from "~/components/aikit/AikitContentRight.vue";
import RepurposeTable from "~/components/aikit/RepurposeTable.vue";

const tab = ref<string>("create-tab");
</script>

<template>
  <div class="content-body default-height">
    <div
      class="flex items-center justify-between relative z-1 flex-wrap py-2.5 px-5 bg-d-bg border-b border-border"
    >
      <h5 class="sm:text-xl text-2sm">Repurpose</h5>
      <ul class="flex flex-wrap items-center">
        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li
          class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary"
        >
          <a href="javascript:void(0)">Repurpose</a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div
            class="border-l-[5px] border-warning bg-card relative text-ellipsis overflow-hidden py-3 pl-4 pr-12 shadow-default rounded-lg mb-6 max-sm:text-xxs"
          >
            This is a demo of AIKit plugin made for you to test the experience
            of using the plugin.
            <button
              type="button"
              class="btn-close !bg-none absolute right-0 top-1/2 -translate-y-1/2 !size-auto p-4 ms-auto max-sm:hidden"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_58_5949)">
                  <path
                    d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 7.5L7.5 12.5"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 7.5L12.5 12.5"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_58_5949">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <p class="mb-4 sm:text-sm">
            AIKit Auto Writer is a tool helps you write drafts quickly, but
            please review and edit before publishing for best results. This is
            not a substitute for human editing, but a drafting aid. Happy
            writing!
          </p>
          <ul
            class="flex flex-wrap items-end border-b border-border -mx-7.5 max-3xl:-mx-4.5 max-sm:!-mx-3 px-7.5 max-3xl:px-6 max-sm:!px-3.6 mb-6 max-sm:text-xs"
            id="pills-tab"
          >
            <li class="inline-block">
              <NuxtLink
                to="/aikit/auto-write"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-ss-lg"
                >Auto Writer</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/scheduled"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >Scheduler</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/repurpose"
                class="py-3.6 px-6.1 -ml-px border border-border border-b-0 -mb-px block bg-bodybg text-secondary rounded-t-lg"
                >Repurpose</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/rss"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >RSS</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/chatbot"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >Chatbot</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/fine-tune-models"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >Fine-tune Models</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/prompt"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >AI Menu Prompts</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/setting"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
                >Settings</NuxtLink
              >
            </li>
            <li class="inline-block">
              <NuxtLink
                to="/aikit/import"
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-se-lg"
                >Export/Import Settings</NuxtLink
              >
            </li>
          </ul>
          <div x-data="{ tab: 'create-tab' }">
            <div class="card !h-auto">
              <div class="ai-tabs-1 sm:px-5 px-4 py-2">
                <ul class="nav nav-tabs flex flex-wrap relative items-end">
                  <li>
                    <button
                      class="text-body block relative py-2 px-4 after:content-[''] after:absolute after:h-1.1 after:w-full after:-bottom-2 after:left-0 after:rounded-t-lg"
                      @click.prevent="tab = 'create-tab'"
                      :class="{ ' after:bg-primary': tab == 'create-tab' }"
                      type="button"
                      role="tab"
                    >
                      Create Fine-tune Job
                    </button>
                  </li>
                  <li>
                    <button
                      class="text-body block relative py-2 px-4 after:content-[''] after:absolute after:h-1.1 after:w-full after:-bottom-2 after:left-0 after:rounded-t-lg"
                      @click.prevent="tab = 'jobs-tab'"
                      :class="{ ' after:bg-primary': tab == 'jobs-tab' }"
                      type="button"
                      role="tab"
                    >
                      Jobs<span class="badge !rounded-full bg-light ms-2"
                        >5</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content" id="myTabContent">
              <Transition
                v-show="tab == 'create-tab'"
                enter-active-class="transition-all duration-500 easy-in-out"
                enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
              >
                <div class="grid grid-cols-12 gap-x-6">
                  <AikitContentLeft />
                  <AikitContentRight />
                </div>
              </Transition>
              <Transition
                v-show="tab == 'jobs-tab'"
                enter-active-class="transition-all duration-500 easy-in-out"
                enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
              >
                <div class="card !h-auto overflow-hidden">
                  <div class="sm:p-5 p-4">
                    <div class="overflow-x-auto active-projects style-1">
                      <ClientOnly>
                        <RepurposeTable />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
