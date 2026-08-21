<script lang="ts" setup>
// @ts-ignore
import vueDropzone from "dropzone-vue3";
const dropzoneOptions = {
  url: "https://httpbin.org/post",
  maxFilesize: 0.5,
  headers: { "My-Awesome-Header": "header value" },
};
</script>

<template>
  <div class="content-body default-height">
    <div
      class="flex items-center justify-between relative z-1 flex-wrap py-2.5 px-5 bg-d-bg border-b border-border"
    >
      <h5 class="sm:text-xl text-2sm">Import</h5>
      <ul class="flex flex-wrap items-center">
        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li
          class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary"
        >
          <NuxtLink to="#">Import</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div
            class="border-l-[5px] border-warning bg-card relative text-ellipsis overflow-hidden py-3 pl-4 pr-12 shadow-default rounded-lg mb-12 max-sm:text-xxs"
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
                class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white"
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
              <button
                class="py-3.6 px-6.1 -ml-px border border-border border-b-0 -mb-px block bg-bodybg text-secondary rounded-se-lg"
              >
                Export/Import Settings
              </button>
            </li>
          </ul>
          <div class="row">
            <div class="xl:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <h4 class="heading mb-2">Export Settings</h4>
                  <p class="mb-4">
                    Download the current settings and prompts as a json file.
                  </p>
                  <ul class="setting-list">
                    <li class="mb-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.25 7.5L9 11.25L12.75 7.5"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 11.25V2.25"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        /></svg
                      ><NuxtLink to="#" class="text-primary ms-2"
                        >Export All Settings + Prompts</NuxtLink
                      >
                    </li>
                    <li>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.25 7.5L9 11.25L12.75 7.5"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 11.25V2.25"
                          stroke="#362465"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        /></svg
                      ><NuxtLink to="#" class="text-primary ms-2">
                        Export Prompts only</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <h4 class="heading mb-2">Import Settings</h4>
                  <p class="mb-4">
                    Upload a settings json file to import settings and/or
                    prompts.
                  </p>
                  <div class="dz-default mb-4">
                    <ClientOnly>
                      <vueDropzone
                        class="dropzone upload-img flex items-center justify-center border border-border rounded-lg min-h-0"
                        ref="myVueDropzone"
                        id="dropzone"
                        :options="dropzoneOptions"
                      />
                    </ClientOnly>
                    <small
                      ><strong class="text-secondary">Important:</strong> It's
                      highly recommended to backup your current settings before
                      importing new settings, so you can revert back if
                      needed.</small
                    >
                  </div>
                  <button
                    type="button"
                    class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                  >
                    Import Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dropzone .dz-image {
  border-radius: 10px;
  overflow: hidden;
}
.dropzone .dz-image img {
  width: 120px;
}
</style>
