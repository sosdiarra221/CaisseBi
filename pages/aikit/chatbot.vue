<script lang="ts" setup>
import img from "~/assets/images/svg/england.svg";
import img2 from "~/assets/images/svg/india.svg";
import img3 from "~/assets/images/svg/united-arab-emirates.svg";
import { ColorPicker } from "vue3-colorpicker";
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
      <h5 class="sm:text-xl text-2sm">Chatbot</h5>
      <ul class="flex flex-wrap items-center">
        <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary"><a href="javascript:void(0)">Chatbot</a></li>
      </ul>
    </div>
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="border-l-[5px] border-warning bg-card relative text-ellipsis overflow-hidden py-3 pl-4 pr-12 shadow-default rounded-lg mb-12 max-sm:text-xxs">
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
            AIKit Chatbot allows you to create a chatbot that can be used on your website. You, or your users can use it to answer questions and provide support about your products or services.
          </p>
          <ul class="flex flex-wrap items-end border-b border-border -mx-7.5 max-3xl:-mx-4.5 max-sm:!-mx-3 px-7.5 max-3xl:px-6 max-sm:!px-3.6 mb-6 max-sm:text-xs" id="pills-tab">
            <li class="inline-block">
              <NuxtLink to="/aikit/auto-write" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-ss-lg">Auto Writer</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/scheduled" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Scheduler</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/repurpose" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Repurpose</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/rss" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">RSS</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/chatbot" class="py-3.6 px-6.1 -ml-px border border-border border-b-0 -mb-px block bg-bodybg text-secondary rounded-t-lg">Chatbot</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/fine-tune-models" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Fine-tune Models</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/prompt" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">AI Menu Prompts</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/setting" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white">Settings</NuxtLink>
            </li>
            <li class="inline-block">
              <NuxtLink to="/aikit/import" class="py-2.5 px-6.1 -ml-px border border-border -mb-px block bg-card text-primary dark:text-white rounded-se-lg">Export/Import Settings</NuxtLink>
            </li>
          </ul>
          <div class="card !h-auto">
            <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="heading mb-0">Auto Writer</h4>
              <OptionSelect
                class-name="  nice-select normal-select mr-5 image-select img-sm !text-textdark after:!text-textdark"
                :options="[
                  { img: img, lable: 'England' },
                  { img: img2, lable: 'India' },
                  { img: img3, lable: 'UAE' },
                ]"
              />
            </div>
            <div class="sm:p-5 p-4 pt-4">
              <div class="grid grid-cols-12 gap-x-6">
                <div class="xl:col-span-2 col-span-12">
                  <p class="mb-2">Choose content type:</p>
                  <div class="block" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
                    <label class="btn btn-outline-primary border border-primary text-primary btn-sm" for="btnradio1">Yes</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
                    <label class="btn btn-outline-primary border border-primary text-primary btn-sm ms-2" for="btnradio2">No</label>
                  </div>
                </div>
                <div class="xl:col-span-3 col-span-12">
                  <p class="mb-2">Default view:</p>
                  <div class="block" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" checked />
                    <label class="btn btn-outline-primary border border-primary text-primary btn-sm" for="btnradio3">Collapsed</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" />
                    <label class="btn btn-outline-primary border border-primary text-primary btn-sm ms-2" for="btnradio4">Expanded</label>
                  </div>
                </div>
                <div class="xl:col-span-7 col-span-12"></div>
                <div class="xl:col-span-4 col-span-12">
                  <label class="form-label">Chatbot model</label>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent !float-none"
                      :options="[{ lable: 'gpt-3.5-turbo' }, { lable: 'gpt-3.6-turbo' }]"
                    />
                    <div id="emailHelp" class="mt-1 text-xs text-[#6f767ebf]">For best results, please use chat models like gpt-3.5-turbo or gpt-4.</div>
                  </div>
                </div>
                <div class="xl:col-span-4 col-span-12">
                  <label class="form-label">Show Chatbot on</label>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent !float-none"
                      :options="[{ lable: 'Frontend Only' }, { lable: 'Backend Only' }]"
                    />
                  </div>
                </div>
                <div class="xl:col-span-4 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label">Max response tokens</label>
                    <input
                      type="number"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput1"
                      placeholder="150"
                    />
                  </div>
                </div>
                <div class="xl:col-span-6 col-span-12">
                  <div class="mb-4">
                    <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea1" rows="3">
Prompt stop sequence
										  </textarea
                    >
                    <div id="emailHelp-1" class="mt-1 text-xs text-[#6f767ebf]">
                      Please set this only if you are using a fine-tuned model. Leave empty if you are using any of the built-in models. Completion stop sequence is used to mark the stop of the
                      completion.
                    </div>
                  </div>
                </div>
                <div class="xl:col-span-6 col-span-12">
                  <div class="mb-4">
                    <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea2" rows="3">
Completion stop sequence
										  </textarea
                    >
                    <div id="emailHelp-2" class="mt-1 text-xs text-[#6f767ebf]">
                      Please set this only if you are using a fine-tuned model. Leave empty if you are using any of the built-in models. Completion stop sequence is used to mark the stop of the
                      completion.
                    </div>
                  </div>
                </div>
                <div class="col-span-12">
                  <div class="mb-4">
                    <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea3" rows="5">
Chatbot Context
										  </textarea
                    >
                    <div id="emailHelp-3" class="mt-1 text-xs text-[#6f767ebf]">
                      You can use this field to set the behaviour of the chatbot. For example, use something like "You are a helpful assistant." or "Answer in the style of Shakespeare."
                    </div>
                  </div>
                  <label class="form-label">Show Chatbot only for user role</label>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent !float-none"
                      :options="[{ lable: 'All' }, { lable: 'One' }]"
                    />
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="ml-1.1 mt-[3px] font-normal" for="flexCheckDefault"> Page content aware? </label>
                  </div>
                  <div id="emailHelp-4" class="mt-1 text-xs text-[#6f767ebf]">
                    If enabled, the chatbot will be able to use the content of the current page to generate better responses. Important: it will increase your API costs!
                  </div>
                </div>
              </div>
            </div>
            <div class="py-4 px-5 border-t border-border">
              <h4 class="heading mb-4">Create Repurpose Job</h4>
              <div class="grid grid-cols-12 gap-x-6">
                <div class="xl:col-span-4 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput4" class="form-label">Title</label>
                    <input
                      type="text"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput4"
                      placeholder="Chat with us"
                    />
                  </div>
                </div>
                <div class="xl:col-span-4 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput2" class="form-label">Input text placeholder</label>
                    <input
                      type="text"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput2"
                      placeholder="Input text placeholder"
                    />
                  </div>
                </div>
                <div class="xl:col-span-4 col-span-12">
                  <div class="mb-4">
                    <label for="exampleFormControlInput3" class="form-label">Start Message</label>
                    <input
                      type="text"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      id="exampleFormControlInput3"
                      placeholder="Hi there! How can I help you?"
                    />
                  </div>
                </div>
                <div class="xl:col-span-12 col-span-12 mt-4">
                  <div class="check-ai mb-3">
                    <h4 class="heading mb-2">Width (px)</h4>
                    <div ref="slider" class="ai-slider"></div>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">Main Color</p>
                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#0d99ff" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">Title Color</p>

                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#2c2c2c" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">AI Message Bubble Color</p>
                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#495A69" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">AI Message Text Color</p>
                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#9084B1" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">User Message Bubble Color</p>

                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#9084B1" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="xl:col-span-2 sm:col-span-4 col-span-12">
                  <div class="example style-1 max-xl:mb-2.5">
                    <p class="mb-1">User Message Text Color</p>
                    <ClientOnly>
                      <color-picker class="complex-colorpicker form-control" pureColor="#0d99ff" />
                    </ClientOnly>
                  </div>
                </div>
              </div>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white float-end mt-4">Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content-body.default-height .container .vc-color-wrap {
  width: 45px;
  height: 45px !important;
  border-radius: 0.375rem !important;
}
</style>
