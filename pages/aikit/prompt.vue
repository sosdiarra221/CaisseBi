<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

import noUiSlider from "nouislider";
const show = reactive({
  open1: true,
  open2: false,
  open3: false,
  open4: false,
});
const slider0 = ref<any>(null);
const slider1 = ref<any>(null);
const slider2 = ref<any>(null);
const slider3 = ref<any>(null);
const model = ref<boolean>(false);

onMounted(() => {
  noUiSlider.create(slider0.value, {
    start: [20],
    behaviour: "snap",
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });
  noUiSlider.create(slider1.value, {
    start: [20],
    behaviour: "snap",
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });
  noUiSlider.create(slider2.value, {
    start: [20],
    behaviour: "snap",
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });
  noUiSlider.create(slider3.value, {
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
      <h5 class="sm:text-xl text-2sm">Prompt</h5>
      <ul class="flex flex-wrap items-center">
        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary"><a href="javascript:void(0)">Prompt</a></li>
      </ul>
    </div>
    <div class="container">
      <!-- row -->
      <div class="row" id="accordion-six">
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
          <p class="mb-4 sm:text-sm">
            Here you can edit or add new prompts that would appear in the "AI" dropdown menu. You can also reorder the prompts by dragging and dropping them in the order you wish. There are lots of
            online resources that could help and give you tips & trick on how to best edit prompts. Simply search YouTube/Google for "Prompt engineering" to gain more knowledge on the topic. Add
            PromptReset Prompts
          </p>
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
              <NuxtLink to="/aikit/prompt" class="py-3.6 px-6.1 -ml-px border border-border border-b-0 -mb-px block bg-bodybg text-secondary rounded-t-lg">AI Menu Prompts</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/setting" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Settings</NuxtLink >
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/import" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-se-lg">Export/Import Settings</NuxtLink >
            </li>
          </ul>
          <div class="flex items-center justify-between mb-4 flex-wrap">
            <span x-data="{ open: false }">
              <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm mb-2">Save Settings</a>{{ " " }}
              <a href="javascript:void(0);" class="btn bg-secondary hover:shadow-btnsecondary text-white btn-sm mb-2" @click="model = true">Add Prompt</a>

              <!-- Modal -->
              <Transition
                v-cloak
                v-show="model"
                enter-active-class="transition ease-in duration-800"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition ease-in duration-500"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto">
                  <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center" @click.away="model = false">
                    <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                      <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                        <h1 class="text-base" id="exampleModalLabel">Add Prompts</h1>
                        <button type="button" class="btn-close p-2 text-xs dark:invert" @click="model = false"></button>
                      </div>
                      <div class="relative p-7.5">
                        <div class="row">
                          <div class="w-full">
                            <div class="mb-4">
                              <label for="searchPrompts" class="form-label">Search Prompts</label>
                              <input
                                type="text"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                id="searchPrompts"
                                placeholder="prompts"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                        <button @click="model = false" type="button" class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white">
                          Close
                        </button>
                        <button @click="model = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </span>
            <a href="javascript:void(0);" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn-sm mb-2">Reset Prompts</a>
          </div>
          <div class="accordion" x-data="{selected:1}">
            <div class="accordion-item ai-header-alert p-0 border-0">
              <div class="accordion-header p-3 relative bg-card border border-border shadow-default rounded-lg mb-5" @click="show.open1 = !show.open1" id="accord-6One">
                <span>
                  <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10H3" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 6H3" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 14H3" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 18H3" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span class="accordion-header-text p-0">Write a paragraph on this</span>
                <span class="absolute top-1/2 right-3 -translate-y-1/2 remove-prompt"
                  ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <clipPath id="clip0_58_59410">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <Collapse :when="show.open1">
                <div class="accordion-body-text p-0">
                  <div class="card !h-auto">
                    <div class="sm:p-5 p-4">
                      <div class="grid grid-cols-12 gap-x-6">
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label ml-1.1 mt-[3px] font-normal" for="flexCheckDefault"> Requires text selection </label>
                          </div>
                          <div id="emailHelp" class="text-[#6f767ebf] text-xs mt-1">
                            Choose this option if you want to enforce text selection in the text editor. Most of the time you will want to leave this option selected. Deselect it only if you are
                            adding a prompt that doesn't require input from author, like if you want OpenAI to generate text about random topic for example.
                          </div>
                        </div>
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="mb-4 sm:mt-0 mt-4">
                            <label for="exampleFormControlInput1" class="form-label me-2">Default view:</label>
                            <div class="flex items-center flex-wrap">
                              <input
                                type="number"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/4 duration-500 focus:border-primary bg-transparent"
                                id="exampleFormControlInput1"
                                placeholder="10"
                              />
                              <div id="emailHelp-1" class="text-[#6f767ebf] text-xs mt-1 ms-ml-4 ms-0">
                                Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:col-span-8 col-span-12 col-xxl-8">
                          <div class="mt-4">
                            <h4 class="heading mb-2">Number of words to generate</h4>
                            <div class="md:flex block items-center">
                              <div class="check-ai">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Fixed number of words</h6>
                                    <div class="mb-4">
                                      <label for="exampleFormControlInput2" class="!block">Number of words</label>
                                      <input
                                        type="number"
                                        class="py-1.5 px-3 h-11 border border-border rounded-lg !w-1/2 duration-500 focus:border-primary bg-d-bg"
                                        id="exampleFormControlInput2"
                                        placeholder=""
                                      />
                                      <div id="emailHelp1" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div class="check-ai md:ms-4 ms-0 md:mt-0 mt-4">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Relative to length of text selected</h6>
                                    <div class="mb-2">
                                      <ul class="flex justify-between mb-4">
                                        <li>Multiplier</li>
                                        <li>2.7x</li>
                                      </ul>
                                      <div ref="slider0" class="!mb-12 ai-slider"></div>
                                      <div id="emailHelp-2" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:col-span-6 col-span-12 col-xxl-4"></div>
                      </div>
                    </div>
                    <div class="py-4 px-5 border-t border-border">
                      <h6 class="mb-2">Prompts</h6>
                      <ul class="flex flex-wrap">
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">English</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Deutsch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Français</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Español</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Italiano</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Dutch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Polski</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Русский</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">日本語中文</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português </a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Brasileiro</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Türkçe</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Română</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Tiếng</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">العربية</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Việt</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">हिन्दी</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Bahasa</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">한국어</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Български</a></li>
                      </ul>
                      <div class="my-4">
                        <label for="exampleInputEmail1" class="form-label">Menu Title</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                          id="exampleInputEmail1"
                          placeholder="Skriv et afsnit om dette"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp-3" class="text-[#6f767ebf] text-xs mt-1">This is title that will appear in the AI menu for this prompt.</div>
                      </div>
                      <div class="mb-4">
                        <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea1" rows="4">
		
		Skriv en paragraf om dette emne:
		
				[[text]]
		
				----
				Skriv paragraf:
												  </textarea
                        >
                        <div id="emailHelp-4" class="text-[#6f767ebf] text-xs mt-1">
                          If this prompt requires text selection, the phrase will be replaced by the selected <span class="badge badge-sm text-danger bg-dangerlight">text</span> before doing the
                          request. Make sure to include it in your prompt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion-item ai-header-alert p-0 relative border-0">
              <div class="accordion-header p-3 relative bg-card border border-border shadow-default rounded-lg mb-5" @click="show.open2 = !show.open2" id="accord-6two">
                <span>
                  <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="accordion-header-text p-0">Continue this text</span>
                <span class="absolute top-1/2 right-3 -translate-y-1/2 remove-prompt"
                  ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <clipPath id="clip0_58_59411">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <Collapse :when="show.open2">
                <div class="accordion-body-text p-0">
                  <div class="card !h-auto">
                    <div class="sm:p-5 p-4">
                      <div class="grid grid-cols-12 gap-x-6">
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label class="form-check-label ml-1.1 mt-[3px] font-normal" for="flexCheckDefault1"> Requires text selection </label>
                          </div>
                          <div id="emailHelp-5" class="text-[#6f767ebf] text-xs mt-1">
                            Choose this option if you want to enforce text selection in the text editor. Most of the time you will want to leave this option selected. Deselect it only if you are
                            adding a prompt that doesn't require input from author, like if you want OpenAI to generate text about random topic for example.
                          </div>
                        </div>
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="mb-4 sm:mt-0 mt-4">
                            <label for="exampleFormControlInput11" class="form-label me-2">Default view:</label>
                            <span class="flex items-center flex-wrap">
                              <input
                                type="number"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/4 duration-500 focus:border-primary bg-transparent"
                                id="exampleFormControlInput11"
                                placeholder="10"
                              />
                              <span>Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.</span>
                            </span>
                          </div>
                        </div>
                        <div class="xl:col-span-8 col-span-12 col-xxl-8">
                          <div class="mt-4">
                            <h4 class="heading mb-2">Number of words to generate</h4>
                            <div class="md:flex block items-center">
                              <div class="check-ai">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Fixed number of words</h6>
                                    <div class="mb-4">
                                      <label for="exampleFormControlInput12" class="!block">Number of words</label>
                                      <input
                                        type="number"
                                        class="py-1.5 px-3 h-11 border border-border rounded-lg !w-1/2 duration-500 focus:border-primary bg-d-bg"
                                        id="exampleFormControlInput12"
                                        placeholder=""
                                      />
                                      <div id="emailHelp3" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div class="check-ai md:ms-4 ms-0 md:mt-0 mt-4">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Relative to length of text selected</h6>
                                    <div class="mb-2">
                                      <ul class="flex justify-between mb-4">
                                        <li>Multiplier</li>
                                        <li>2.7x</li>
                                      </ul>
                                      <div ref="slider1" class="!mb-12 ai-slider"></div>
                                      <div id="emailHelp-11" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:col-span-6 col-span-12 col-xxl-4"></div>
                      </div>
                    </div>
                    <div class="py-4 px-5 border-t border-border">
                      <h6 class="mb-2">Prompts</h6>
                      <ul class="flex flex-wrap">
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">English</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Deutsch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Français</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Español</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Italiano</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Dutch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Polski</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Русский</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">日本語中文</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português </a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Brasileiro</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Türkçe</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Română</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Tiếng</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">العربية</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Việt</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">हिन्दी</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Bahasa</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">한국어</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Български</a></li>
                      </ul>
                      <div class="my-4">
                        <label for="exampleInputEmail2" class="form-label">Menu Title</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                          id="exampleInputEmail2"
                          placeholder="Skriv et afsnit om dette"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp-8" class="text-[#6f767ebf] text-xs mt-1">This is title that will appear in the AI menu for this prompt.</div>
                      </div>
                      <div class="mb-4">
                        <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea2" rows="4">
		
		Skriv en paragraf om dette emne:
		
				[[text]]
		
				----
				Skriv paragraf:
												  </textarea
                        >
                        <div id="emailHelp-12" class="text-[#6f767ebf] text-xs mt-1">
                          If this prompt requires text selection, the phrase will be replaced by the selected <span class="badge badge-sm text-danger bg-dangerlight">text</span> before doing the
                          request. Make sure to include it in your prompt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div class="accordion" x-data="{selected:null}">
            <div class="accordion-item ai-header-alert p-0 relative border-0">
              <div class="accordion-header p-3 relative bg-card border border-border shadow-default rounded-lg mb-5" @click="show.open3 = !show.open3" id="accord-6three" role="button">
                <svg class="me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_58_6049)">
                    <path
                      d="M11.999 2.8125C11.6107 2.8125 11.2959 3.12731 11.2959 3.51562C11.2959 3.90394 11.6107 4.21875 11.999 4.21875C14.3256 4.21875 16.2185 6.11128 16.2185 8.4375C16.2185 8.82581 16.5333 9.14062 16.9216 9.14062C17.3099 9.14062 17.6247 8.82581 17.6247 8.4375C17.6247 5.33588 15.1011 2.8125 11.999 2.8125Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M10.1871 0.189329C7.01041 0.853126 4.43463 3.40425 3.75686 6.6007C3.18456 9.29986 3.8898 12.0097 5.69172 14.0354C6.57255 15.0255 7.07767 16.3326 7.07767 17.625V19.0312C7.07767 19.9668 7.69019 20.7617 8.53516 21.037C8.81303 22.6788 10.238 23.9999 11.9995 23.9999C13.7606 23.9999 15.186 22.6792 15.4639 21.037C16.3089 20.7617 16.9214 19.9668 16.9214 19.0312V17.6249C16.9214 16.33 17.4282 15.0387 18.3484 13.9889C19.6953 12.4523 20.437 10.4807 20.437 8.43745C20.437 3.11409 15.5644 -0.934077 10.1871 0.189329ZM11.9995 22.5937C11.0957 22.5937 10.3032 21.9718 10.0106 21.1359H13.9885C13.6959 21.9718 12.9034 22.5937 11.9995 22.5937ZM15.5152 19.0312C15.5152 19.4189 15.1998 19.7343 14.812 19.7343H9.18705C8.79935 19.7343 8.48392 19.4189 8.48392 19.0312V18.3281H15.5152V19.0312ZM17.2909 13.062C16.3103 14.1808 15.7069 15.5298 15.5538 16.9218H8.44539C8.29249 15.5291 7.69071 14.1668 6.74252 13.1008C5.24074 11.4125 4.65391 9.14963 5.13255 6.89241C5.69125 4.25738 7.83813 2.11683 10.4748 1.56591C14.9759 0.625266 19.0308 4.00552 19.0308 8.43745C19.0308 10.1396 18.4129 11.7819 17.2909 13.062Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M2.10938 8.4375H0.703125C0.314812 8.4375 0 8.75231 0 9.14062C0 9.52894 0.314812 9.84375 0.703125 9.84375H2.10938C2.49769 9.84375 2.8125 9.52894 2.8125 9.14062C2.8125 8.75231 2.49769 8.4375 2.10938 8.4375Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M2.40072 4.92101L1.40636 3.92665C1.13181 3.65205 0.686594 3.65205 0.412 3.92665C0.137406 4.20124 0.137406 4.64641 0.412 4.92101L1.40636 5.91537C1.68091 6.18996 2.12612 6.19001 2.40072 5.91537C2.67531 5.64077 2.67531 5.1956 2.40072 4.92101Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M2.40072 12.3641C2.12612 12.0896 1.68091 12.0896 1.40636 12.3641L0.412 13.3585C0.137406 13.6331 0.137406 14.0783 0.412 14.3529C0.686547 14.6275 1.13177 14.6275 1.40636 14.3529L2.40072 13.3585C2.67531 13.0839 2.67531 12.6387 2.40072 12.3641Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M23.2969 8.4375H21.8906C21.5023 8.4375 21.1875 8.75231 21.1875 9.14062C21.1875 9.52894 21.5023 9.84375 21.8906 9.84375H23.2969C23.6852 9.84375 24 9.52894 24 9.14062C24 8.75231 23.6852 8.4375 23.2969 8.4375Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M23.5882 3.92665C23.3137 3.65205 22.8685 3.65205 22.5939 3.92665L21.5995 4.92101C21.3249 5.1956 21.3249 5.64077 21.5995 5.91537C21.874 6.18991 22.3193 6.18996 22.5939 5.91537L23.5882 4.92101C23.8628 4.64641 23.8628 4.20124 23.5882 3.92665Z"
                      fill="var(--primary)"
                    />
                    <path
                      d="M23.5882 13.3585L22.5939 12.3641C22.3193 12.0896 21.8741 12.0896 21.5995 12.3641C21.3249 12.6387 21.3249 13.0839 21.5995 13.3585L22.5939 14.3529C22.8684 14.6274 23.3136 14.6275 23.5882 14.3529C23.8628 14.0783 23.8628 13.6331 23.5882 13.3585Z"
                      fill="var(--primary)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_6049">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="accordion-header-text p-0">Generate ideas on this</span>
                <span class="absolute top-1/2 right-3 -translate-y-1/2 remove-prompt">
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
                      <clipPath id="clip0_58_594112">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <Collapse :when="show.open3">
                <div class="accordion-body-text p-0">
                  <div class="card !h-auto">
                    <div class="sm:p-5 p-4">
                      <div class="grid grid-cols-12 gap-x-6">
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24" />
                            <label class="form-check-label ml-1.1 mt-[3px] font-normal" for="flexCheckDefault24"> Requires text selection </label>
                          </div>
                          <div id="emailHelp-13" class="text-[#6f767ebf] text-xs mt-1">
                            Choose this option if you want to enforce text selection in the text editor. Most of the time you will want to leave this option selected. Deselect it only if you are
                            adding a prompt that doesn't require input from author, like if you want OpenAI to generate text about random topic for example.
                          </div>
                        </div>
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="mb-4 sm:mt-0 mt-4">
                            <label for="exampleFormControlInput31" class="form-label me-2">Default view:</label>
                            <span class="flex items-center flex-wrap">
                              <input
                                type="number"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/4 duration-500 focus:border-primary bg-transparent"
                                id="exampleFormControlInput31"
                                placeholder="10"
                              />
                              <span>Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.</span>
                            </span>
                          </div>
                        </div>
                        <div class="xl:col-span-8 col-span-12 col-xxl-8">
                          <div class="mt-4">
                            <h4 class="heading mb-2">Number of words to generate</h4>
                            <div class="md:flex block items-center">
                              <div class="check-ai">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault100" checked />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Fixed number of words</h6>
                                    <div class="mb-4">
                                      <label for="exampleFormControlInput22" class="!block">Number of words</label>
                                      <input type="number" class="form-control w-50" id="exampleFormControlInput22" placeholder="" />
                                      <div id="emailHelp5" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div class="check-ai md:ms-4 ms-0 md:mt-0 mt-4">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault23" />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Relative to length of text selected</h6>
                                    <div class="mb-2">
                                      <ul class="flex justify-between mb-4">
                                        <li>Multiplier</li>
                                        <li>2.7x</li>
                                      </ul>
                                      <div ref="slider2" class="!mb-12 ai-slider"></div>
                                      <div id="emailHelp-6" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:col-span-6 col-span-12 col-xxl-4"></div>
                      </div>
                    </div>
                    <div class="py-4 px-5 border-t border-border">
                      <h6 class="mb-2">Prompts</h6>
                      <ul class="flex flex-wrap">
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">English</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Deutsch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Français</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Español</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Italiano</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Dutch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Polski</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Русский</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">日本語中文</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português </a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Brasileiro</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Türkçe</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Română</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Tiếng</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">العربية</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Việt</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">हिन्दी</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Bahasa</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">한국어</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Български</a></li>
                      </ul>
                      <div class="my-4">
                        <label for="exampleInputEmail14" class="form-label">Menu Title</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                          id="exampleInputEmail14"
                          placeholder="Skriv et afsnit om dette"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp-14" class="text-[#6f767ebf] text-xs mt-1">This is title that will appear in the AI menu for this prompt.</div>
                      </div>
                      <div class="mb-4">
                        <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea3" rows="4">
		
		Skriv en paragraf om dette emne:
		
				[[text]]
		
				----
				Skriv paragraf:
												  </textarea
                        >
                        <div id="emailHelp-15" class="text-[#6f767ebf] text-xs mt-1">
                          If this prompt requires text selection, the phrase will be replaced by the selected <span class="badge badge-sm text-danger bg-dangerlight">text</span> before doing the
                          request. Make sure to include it in your prompt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div class="accordion" x-data="{selected:null}">
            <div class="accordion-item ai-header-alert p-0 relative border-0">
              <div class="accordion-header p-3 relative bg-card border border-border shadow-default rounded-lg mb-5" @click="show.open4 = !show.open4" id="accord-6four" role="button">
                <svg class="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="var(--primary)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M14 2V8H20" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 13H8" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 17H8" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 9H9H8" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="accordion-header-text p-0">Write an article about this</span>
                <span class="absolute top-1/2 right-3 -translate-y-1/2 remove-prompt"
                  ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <clipPath id="clip0_58_59420">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <Collapse :when="show.open4">
                <div class="accordion-body-text p-0">
                  <div class="card !h-auto">
                    <div class="sm:p-5 p-4">
                      <div class="grid grid-cols-12 gap-x-6">
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault31" />
                            <label class="form-check-label ml-1.1 mt-[3px] font-normal" for="flexCheckDefault31"> Requires text selection </label>
                          </div>
                          <div id="emailHelp-24" class="text-[#6f767ebf] text-xs mt-1">
                            Choose this option if you want to enforce text selection in the text editor. Most of the time you will want to leave this option selected. Deselect it only if you are
                            adding a prompt that doesn't require input from author, like if you want OpenAI to generate text about random topic for example.
                          </div>
                        </div>
                        <div class="xl:col-span-6 sm:col-span-6 col-span-12">
                          <div class="mb-4 sm:mt-0 mt-4">
                            <label for="exampleFormControlInput1" class="form-label me-2">Default view:</label>
                            <span class="flex items-center flex-wrap">
                              <input
                                type="number"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/4 duration-500 focus:border-primary bg-transparent"
                                id="exampleFormControlInput25"
                                placeholder="10"
                              />
                              <span>Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.</span>
                            </span>
                          </div>
                        </div>
                        <div class="xl:col-span-8 col-span-12 col-xxl-8">
                          <div class="mt-4">
                            <h4 class="heading mb-2">Number of words to generate</h4>
                            <div class="md:flex block items-center">
                              <div class="check-ai">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault101" checked />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Fixed number of words</h6>
                                    <div class="mb-4">
                                      <label for="exampleFormControlInput23" class="!block">Number of words</label>
                                      <input
                                        type="number"
                                        class="py-1.5 px-3 h-11 border border-border rounded-lg !w-1/2 duration-500 focus:border-primary bg-d-bg"
                                        id="exampleFormControlInput23"
                                        placeholder=""
                                      />
                                      <div id="emailHelp8" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <div class="check-ai md:ms-4 ms-0 md:mt-0 mt-4">
                                <div class="form-check relative !p-0">
                                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault32" />
                                  <form class="form-check-label ml-1.1 mt-[3px] font-normal">
                                    <h6 class="pl-6 mb-2">Relative to length of text selected</h6>
                                    <div class="mb-2">
                                      <ul class="flex justify-between mb-4">
                                        <li>Multiplier</li>
                                        <li>2.7x</li>
                                      </ul>
                                      <div ref="slider3" class="!mb-12 ai-slider"></div>
                                      <div id="emailHelp9" class="font-medium leading-normal text-[#6f767ebf] text-xs mt-1">
                                        Choose this option if you want to generate a fixed number of words, regardless of how long the selected text is. This is helpful for certain types of prompts,
                                        like generating a paragraph on a certain topic for example.
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:col-span-6 col-span-12 col-xxl-4"></div>
                      </div>
                    </div>
                    <div class="py-4 px-5 border-t border-border">
                      <h6 class="mb-2">Prompts</h6>
                      <ul class="flex flex-wrap">
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">English</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Deutsch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Français</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Español</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Italiano</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Dutch</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Polski</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Русский</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">日本語中文</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Português </a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Brasileiro</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Türkçe</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Română</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Tiếng</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">العربية</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Việt</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">हिन्दी</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Bahasa</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">한국어</a></li>
                        <li><a href="javascript:void(0);" class="btn btn-sm mr-1.1 border border-primary text-primary hover:bg-primaryhover hover:text-white mb-1">Български</a></li>
                      </ul>
                      <div class="my-4">
                        <label for="exampleInputEmail1" class="form-label">Menu Title</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                          id="exampleInputEmail15"
                          placeholder="Skriv et afsnit om dette"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp-16" class="text-[#6f767ebf] text-xs mt-1">This is title that will appear in the AI menu for this prompt.</div>
                      </div>

                      <div class="mb-4">
                        <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea4" rows="4">
		
		Skriv en paragraf om dette emne:
		
				[[text]]
		
				----
				Skriv paragraf:
												  </textarea
                        >
                        <div id="emailHelp-21" class="text-[#6f767ebf] text-xs mt-1">
                          If this prompt requires text selection, the phrase will be replaced by the selected <span class="badge badge-sm text-danger bg-dangerlight">text</span> before doing the
                          request. Make sure to include it in your prompt.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
