<script lang="ts" setup>
import img from "~/assets/images/svg/england.svg";
import img2 from "~/assets/images/svg/india.svg";
import img3 from "~/assets/images/svg/united-arab-emirates.svg";
import OptionSelect from "~/components/OptionSelect.vue";
import noUiSlider from "nouislider";

const slider = ref<any>(null);

onMounted(() => {
  noUiSlider.create(slider.value, {
    start: [20],
    behaviour: "snap",
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });
});
</script>

<template>
  <div class="content-body default-height">
    <div class="flex items-center justify-between relative z-1 flex-wrap py-2.5 px-5 bg-d-bg border-b border-border">
      <h5 class="sm:text-xl text-2sm">Settings</h5>
      <ul class="flex flex-wrap items-center">
        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary"><a href="javascript:void(0)">Settings</a></li>
      </ul>
    </div>
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="w-full">
          <div class="border-l-[5px] border-warning bg-card relative text-ellipsis overflow-hidden py-3 pl-4 pr-12 shadow-default rounded-lg mb-6 max-sm:text-xxs">
            This is a demo of AIKit plugin made for you to test the experience of using the plugin.
            <button type="button" class="btn-close !bg-none absolute right-0 top-1/2 -translate-y-1/2 !size-auto p-4 ms-auto max-sm:hidden">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_58_5949)">
                  <path
                    d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
                    stroke="#FF5B5B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M12.5 7.5L7.5 12.5" stroke="#FF5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7.5 7.5L12.5 12.5" stroke="#FF5B5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_58_5949">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <ul class="flex flex-wrap items-end border-b border-border -mx-7.5 max-3xl:-mx-4.5 max-sm:!-mx-3 px-7.5 max-3xl:px-6 max-sm:!px-3.6 mb-6 max-sm:text-xs" id="pills-tab">
            <li class="inline-block">
              <NuxtLink to="/aikit/auto-write" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-ss-lg">Auto Writer</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/scheduled" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Scheduler</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/repurpose" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Repurpose</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/rss" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">RSS</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/chatbot" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Chatbot</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/fine-tune-models" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Fine-tune Models</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/prompt" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">AI Menu Prompts</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/setting" class="py-3.6 px-6.1 -ml-px border border-border border-b-0 -mb-px block bg-bodybg text-secondary rounded-t-lg">Settings</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/import" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-se-lg">Export/Import Settings</NuxtLink >
            </li>
          </ul>
          <div class="card !h-auto">
            <div class="sm:p-5 p-4 border-0">
              <h4 class="heading mb-0">OpenAI Settings</h4>
              <p class="mb-4">Adjust the plugin to your needs by editing the settings here.</p>
              <div class="grid grid-cols-12 gap-x-6">
                <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label">OpenAI Key</label>
                    <input
                      type="email"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput1"
                      placeholder="this-is-a-secret-key"
                    />
                    <div id="emailHelp" class="mt-1 text-xs text-[#6f767ebf]">
                      For instructions on how to get an OpenAI key, please visit <a href="javascript:void(0);" class="text-primary"> https://getaikit.com/docs/getting-started</a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput2" class="form-label">Rapid API Key</label>
                    <input
                      type="email"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput2"
                      placeholder="this-is-rapid-api-key"
                    />
                    <div id="emailHelp-1" class="mt-1 text-xs text-[#6f767ebf]">
                      Enter your RapidAPI key for Subtitles for YouTube here. This API is used to read YouTube video subtitles to allow you to fetch.
                      <a href="javascript:void(0);" class="text-primary"
                        >Read More
                        <svg class="ms-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_65_2604)">
                            <path
                              d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                              stroke="var(--primary)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_65_2604">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <label class="form-label">Post category</label>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex items-center wide bg-transparent float-none image-select img-sm"
                      :options="[
                        { img: img, lable: 'England' },
                        { img: img2, lable: 'India' },
                        { img: img3, lable: 'UAE' },
                      ]"
                    />
                    <div id="emailHelp-2" class="mt-1 text-xs text-[#6f767ebf]">
                      The language of the text you want to generate.
                      <a href="javascript:void(0);" class="text-primary"
                        >Read More<svg
                          class="ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_65_2604)">
                            <path
                              d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                              stroke="var(--primary)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_65_2605">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <label class="form-label">OpenAI Preferred Model</label>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex items-center wide bg-transparent float-none image-select img-sm"
                      :options="[{ lable: 'gpt-3.5-turbo' }, { lable: 'gpt-4.5-turbo' }]"
                    />
                    <div id="emailHelp-3" class="mt-1 text-xs text-[#6f767ebf]">
                      The language of the text you want to generate.
                      <a href="javascript:void(0);" class="text-primary"
                        >Read More<svg
                          class="ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_65_2604)">
                            <path
                              d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                              stroke="var(--primary)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_65_2606">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput10" class="form-label">Prompt Stop Sequence</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlInput10" />
                    <div id="emailHelp-4" class="mt-1 text-xs text-[#6f767ebf]">
                      The language of the text you want to generate.
                      <a href="javascript:void(0);" class="text-primary"
                        >Read More<svg
                          class="ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_65_2604)">
                            <path
                              d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                              stroke="var(--primary)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_65_26010">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput11" class="form-label">Completion Stop Sequence</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlInput11" />
                    <div id="emailHelp-5" class="mt-1 text-xs text-[#6f767ebf]">
                      The language of the text you want to generate.
                      <a href="javascript:void(0);" class="text-primary"
                        >Read More<svg
                          class="ms-1"
                          data-bs-toggle="tooltip"
                          data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_65_2604)">
                            <path
                              d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                              stroke="var(--primary)"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_65_26011">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-6 col-span-12 self-center">
                  <h6>Multiplier</h6>
                  <p class="text-end mb-2">2.7x</p>
                  <div ref="slider" class="mb-5 ai-slider"></div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <label for="exampleFormControlInput1" class="form-label">Autocompleted Text Background Color</label>
                  <div class="flex items-center back-theme-ai">
                    <a href="javascript:void(0);" class="cross-svg size-5 border border-border rounded-full mr-2.5 inline-block text-center leading-4">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 6.5L6.5 13.5" stroke="#FF5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.5 6.5L13.5 13.5" stroke="#FF5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </a>
                    <div class="form-check inline-block relative me-2">
                      <input class="form-check-input bg-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <span></span>
                    </div>
                    <div class="form-check inline-block relative me-2">
                      <input class="form-check-input !bg-success" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                      <span></span>
                    </div>
                    <div class="form-check inline-block relative me-2">
                      <input class="form-check-input !bg-info" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                      <span></span>
                    </div>
                    <div class="form-check inline-block relative me-2">
                      <input class="form-check-input !bg-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                      <span></span>
                    </div>
                    <div class="form-check inline-block relative">
                      <input class="form-check-input !bg-warning" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                      <span></span>
                    </div>
                  </div>

                  <div id="emailHelp-6" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                    AIKit's builtin prompts are already.
                    <a href="javascript:void(0);" class="text-primary"
                      >Read More<svg
                        class="ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_65_2604)">
                          <path
                            d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                            stroke="var(--primary)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_65_26020">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <label for="exampleFormControlInput1" class="form-label">Default view</label>
                  <div class="border border-border rounded-lg p-2.5">
                    <div class="form-check mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label ml-1.1 mt-[3px] mb-0" for="flexCheckDefault"> Elementor supported? </label>
                    </div>
                  </div>
                  <div id="emailHelp-7" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                    The language of the text you want to generate.
                    <a href="javascript:void(0);" class="text-primary"
                      >Read More<svg
                        class="ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_65_2604)">
                          <path
                            d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                            stroke="var(--primary)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_65_26021">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <label for="exampleFormControlInput1" class="form-label">Default view</label>
                  <div class="border border-border rounded-lg p-2.5 bg-[#9F93C0]">
                    <div class="form-check mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-1" />
                      <label class="form-check-label ml-1.1 mt-[3px] text-white mb-0" for="flexCheckDefault-1"> Small (256x256) </label>
                    </div>
                  </div>
                  <div id="emailHelp-8" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                    When this is enabled, you will be able to use AIKit right.
                    <a href="javascript:void(0);" class="text-primary"
                      >Read More<svg
                        class="ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_65_2604)">
                          <path
                            d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                            stroke="var(--primary)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_65_26024">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12 self-end">
                  <div class="border border-border rounded-lg p-2.5 bg-[#9F93C0]">
                    <div class="form-check mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-2" />
                      <label class="form-check-label ml-1.1 mt-[3px] text-white mb-0" for="flexCheckDefault-2"> Medium (512x512) </label>
                    </div>
                  </div>
                  <div id="emailHelp-9" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                    When this is enabled, you will be able to use AIKit right.
                    <a href="javascript:void(0);" class="text-primary"
                      >Read More<svg
                        class="ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_65_2604)">
                          <path
                            d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                            stroke="var(--primary)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_65_26025">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12 self-end">
                  <div class="border border-border rounded-lg p-2.5">
                    <div class="form-check mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-3" />
                      <label class="form-check-label ml-1.1 mt-[3px] mb-0" for="flexCheckDefault-3"> Large (1024x1204) </label>
                    </div>
                  </div>
                  <div id="emailHelp-10" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                    When this is enabled, you will be able to use AIKit right.
                    <a href="javascript:void(0);" class="text-primary"
                      >Read More<svg
                        class="ms-1"
                        data-bs-toggle="tooltip"
                        data-bs-title="Enter your RapidAPI key for Subtitles for YouTube here."
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_65_2604)">
                          <path
                            d="M6.99984 12.8337C10.2215 12.8337 12.8332 10.222 12.8332 7.00033C12.8332 3.77866 10.2215 1.16699 6.99984 1.16699C3.77818 1.16699 1.1665 3.77866 1.1665 7.00033C1.1665 10.222 3.77818 12.8337 6.99984 12.8337Z"
                            stroke="var(--primary)"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M7 9.33333V7" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7 4.66699H7.00583" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_65_26026">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="xl:col-span-3 sm:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Image counts for each size</label>
                    <input
                      type="email"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="xl:col-span-6 col-span-12">
                  <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">Image generation styles</label>
                    <input
                      name="tagify"
                      class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent !h-auto"
                      value="Watercolor,Vector Art,Portrait,Pencil Drawing,Digital Painting,Abstract,Oil Painting,Cartoon,Black And White"
                    />
                    <div id="emailHelp-11" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                      System message help set the behaviour of the model. You can use it to ask the model to mimic a certain style or take a certain perspective for all text generations. For example,
                      if you set this to "Shakespeare' style", the mode will follow the style of Shakespeare in all text generations when possible. System message should work ONLY with GPT-4 and to a
                      lesser extent with gpt-3.5-turbo models.
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-6 col-span-12">
                  <label for="floatingTextarea">OpenAI System Message</label>
                  <div class="form-floating">
                    <textarea
                      class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <div id="emailHelp-12" class="mt-1 text-xs text-[#6f767ebf] mb-2">
                      System message help set the behaviour of the model. You can use it to ask the model to mimic a certain style or take a certain perspective for all text generations. For example,
                      if you set this to "Shakespeare' style", the mode will follow the style of Shakespeare in all text generations when possible. System message should work ONLY with GPT-4 and to a
                      lesser extent with gpt-3.5-turbo models.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
