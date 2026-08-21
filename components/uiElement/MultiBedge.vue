<script lang="ts" setup>
import HighLighter from "~/lib/HighLighter";
import { bedge } from "./CodeHeightlighter";

const tab = reactive({
  basic: "Preview",
  always: "Preview",
  default: "Preview",
  bordered: "Preview",
  withoutspace: "Preview",
  spacewithborder: "Preview",
  rightposition: "Preview",
  withicon: "Preview",
  headerbackground: "Preview",
  solidbackground: "Preview",
  activebackground: "Preview",
  headershadow: "Preview",
  roundedstylish: "Preview",
  gradient: "Preview",
  alertsocial: "Preview",
  messagealert: "Preview",
  withsolidcolor: "Preview",
  lefticonbig: "Preview",
});

onMounted(() => {
  document.querySelectorAll(".remove-btn").forEach((el) => {
    el.addEventListener("click", function (e: Event): void {
      let targer = e.target as HTMLElement;
      targer.parentElement?.parentElement?.parentElement?.remove();
    });
  });
});
</script>

<template>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'Preview' }" id="basic-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Badges Size</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.basic = 'Preview'" :class="{ ' !text-white bg-primary': tab.basic == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">Preview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.basic = 'html'" :class="{ ' !text-white bg-primary': tab.basic == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <!--tab-content-->
      <div class="tab-content" id="myTabContent">
        <Transition
          v-show="tab.basic == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="tailwind-badge">
              <span class="badge mr-1.1 mb-1.1 badge-xs text-primary bg-primarylight">Primary</span>
              <span class="badge mr-1.1 mb-1.1 badge-sm text-primary bg-primarylight">Primary</span>
              <span class="badge mr-1.1 mb-1.1 text-secondary bg-secondarylight">Secondary</span>
              <span class="badge mr-1.1 mb-1.1 badge-lg text-danger bg-dangerlight">Danger</span>
              <span class="badge mr-1.1 mb-1.1 badge-xl text-warning bg-warninglight">Warning</span>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.basic == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code1" />
        </Transition>
      </div>
      <!--/tab-content-->
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Badges Light</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.always = 'Preview'" :class="{ ' !text-white bg-primary': tab.always == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">Preview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.always = 'html'" :class="{ ' !text-white bg-primary': tab.always == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab.always-content">
        <Transition
          v-show="tab.always == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="tailwind-badge">
              <span class="badge mr-1.1 mb-1.1 text-primary bg-primarylight">Primary</span>
              <span class="badge mr-1.1 mb-1.1 text-secondary bg-secondarylight">Secondary</span>
              <span class="badge mr-1.1 mb-1.1 text-success bg-successlight">Success</span>
              <span class="badge mr-1.1 mb-1.1 text-danger bg-dangerlight">Danger</span>
              <span class="badge mr-1.1 mb-1.1 text-warning bg-warninglight">Warning</span>
              <span class="badge mr-1.1 mb-1.1 text-info bg-infolight">Info</span>
              <span class="badge mr-1.1 mb-1.1 text-dark bg-[#fdfdfe]">Light</span>
              <span class="badge mr-1.1 mb-1.1 text-dark bg-darklight">Dark</span>
            </div>
            <div class="tailwind-badge">
              <span class="badge mr-1.1 mb-1.1 text-primary bg-primarylight">1</span>
              <span class="badge mr-1.1 mb-1.1 text-secondary bg-secondarylight">2</span>
              <span class="badge mr-1.1 mb-1.1 text-success bg-successlight">3</span>
              <span class="badge mr-1.1 mb-1.1 text-danger bg-dangerlight">4</span>
              <span class="badge mr-1.1 mb-1.1 text-warning bg-warninglight">5</span>
              <span class="badge mr-1.1 mb-1.1 text-info bg-infolight">6</span>
              <span class="badge mr-1.1 mb-1.1 text-dark bg-[#fdfdfe]">7</span>
              <span class="badge mr-1.1 mb-1.1 text-dark bg-darklight">8</span>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.always == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code2" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Badges</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.default = 'Preview'" :class="{ ' !text-white bg-primary': tab.default == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">Preview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.default = 'html'" :class="{ ' !text-white bg-primary': tab.default == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.default == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="tailwind-badge">
              <span class="badge mr-1.1 mb-1.1 bg-primary text-white">Primary</span>
              <span class="badge mr-1.1 mb-1.1 bg-[#1F2025] text-white">Secondary</span>
              <span class="badge mr-1.1 mb-1.1 bg-success text-white">Success</span>
              <span class="badge mr-1.1 mb-1.1 bg-danger text-white">Danger</span>
              <span class="badge mr-1.1 mb-1.1 bg-warning text-white">Warning</span>
              <span class="badge mr-1.1 mb-1.1 bg-info text-white">Info</span>
              <span class="badge mr-1.1 mb-1.1 bg-light text-dark">Light</span>
              <span class="badge mr-1.1 mb-1.1 bg-dark text-white">Dark</span>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.default == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code3" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Pill Badge</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withoutspace = 'Preview'" :class="{ ' !text-white bg-primary': tab.withoutspace == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withoutspace = 'html'" :class="{ ' !text-white bg-primary': tab.withoutspace == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withoutspace == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="tailwind-badge">
              <span class="badge mr-1.1 mb-1.1 bg-primary text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-[#1F2025] text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-success text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-danger text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-warning text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-info text-white">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-light text-dark">Pill badge</span>
              <span class="badge mr-1.1 mb-1.1 bg-dark text-white">Pill badge</span>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code4" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Link Badge</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.spacewithborder = 'Preview'" :class="{ ' !text-white bg-primary': tab.spacewithborder == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.spacewithborder = 'html'" :class="{ ' !text-white bg-primary': tab.spacewithborder == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.spacewithborder == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="tailwind-badge">
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-primary text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-[#1F2025] text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-success text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-danger text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-warning text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-info text-white">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-light text-dark">Links</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 bg-dark text-white">Links</a>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.spacewithborder == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code5" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Rounded Badge</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.rightposition = 'Preview'" :class="{ ' !text-white bg-primary': tab.rightposition == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.rightposition = 'html'" :class="{ ' !text-white bg-primary': tab.rightposition == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.rightposition == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-5 p-4">
            <div class="tailwind-badge">
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-primary text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-[#1F2025] text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-success text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-danger text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-warning text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-info text-white">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-light text-dark">Rounded</a>
              <a href="javascript:void(0);" class="badge mr-1.1 mb-1.1 !rounded-full bg-dark text-white">Rounded</a>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.rightposition == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code6" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Solid Alt</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withicon = 'Preview'" :class="{ ' !text-white bg-primary': tab.withicon == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">Preview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withicon = 'html'" :class="{ ' !text-white bg-primary': tab.withicon == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withicon == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-primary-dark text-white bg-primary border border-primary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-secondary border border-transparent text-white bg-[#1F2025]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#003e33] border border-transparent bg-success text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#0f5983] border border-transparent bg-info text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Info!</strong> You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#8a5404] border border-transparent bg-warning text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#a21919] border border-transparent bg-danger text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#040404] border border-transparent bg-dark text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border-l-4 border-l-[#a2b2c9] border border-transparent text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withicon == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code7" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Dismissable with solid</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.headerbackground = 'Preview'" :class="{ ' !text-white bg-primary': tab.headerbackground == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.headerbackground = 'html'" :class="{ ' !text-white bg-primary': tab.headerbackground == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.headerbackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primary text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-[#1F2025] text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-success text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-info">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Info!</strong> You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warning text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-danger text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dark text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headerbackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code8" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert with Link</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.solidbackground = 'Preview'" :class="{ ' !text-white bg-primary': tab.solidbackground == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.solidbackground = 'html'" :class="{ ' !text-white bg-primary': tab.solidbackground == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.solidbackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative text-primary bg-primarylight border border-primarylight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>WOW! Eveything looks OK.</strong> <a href="javascript:void(0);" class="text-body">Please check this one as well</a>
            </div>

            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-secondarylight text-secondary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>WOW! Eveything looks OK.</strong> <a href="javascript:void(0);" class="text-body">Please check this one as well</a>
            </div>

            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-success bg-successlight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>WOW! Eveything looks OK.</strong> <a href="javascript:void(0);" class="text-body">Please check this one as well</a>
            </div>

            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-info bg-infolight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Hey! Take a quick look.</strong> <a href="javascript:void(0);" class="text-body">My birthday party</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-warning bg-warninglight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Warning!</strong> Why you did it to me! <a href="javascript:void(0);" class="text-body">Check this out</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-danger bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="text-body">Click here for details.</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-alertdark">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="text-body">Click here for details.</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="text-body">Click here for details.</a>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.solidbackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code9" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert with Link and solid color</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.activebackground = 'Preview'" :class="{ ' !text-white bg-primary': tab.activebackground == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.activebackground = 'html'" :class="{ ' !text-white bg-primary': tab.activebackground == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.activebackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primary text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              WOW! Eveything looks OK. <a href="javascript:void(0);" class="badge badge-sm bg-light text-primary ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-[#1F2025] text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              WOW! Eveything looks OK. <a href="javascript:void(0);" class="badge badge-sm bg-light text-dark ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-success text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              WOW! Eveything looks OK. <a href="javascript:void(0);" class="badge badge-sm bg-light text-success ml-1">upgrade</a>
            </div>

            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-info">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              Hey! Take a quick look. <a href="javascript:void(0);" class="badge badge-sm bg-light text-info ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warning text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Warning!</strong> Why you did it to me! <a href="javascript:void(0);" class="badge badge-sm bg-light text-warning ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-danger text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="badge badge-sm bg-light text-danger ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dark text-white">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="badge badge-sm bg-light text-dark ml-1">upgrade</a>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Something Went wrong <a href="javascript:void(0);" class="badge badge-sm bg-light text-dark ml-1">upgrade</a>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.activebackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code10" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Inline Notifications</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.headershadow = 'Preview'" :class="{ ' !text-white bg-primary': tab.headershadow == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.headershadow = 'html'" :class="{ ' !text-white bg-primary': tab.headershadow == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.headershadow == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="row">
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primarylight">
                  <p class="text-primary mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
                  <p class="mb-4 text-primary leading-normal">The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
                  <button class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-secondarylight">
                  <p class="text-secondary mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
                  <p class="mb-4 text-secondary leading-normal">The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
                  <button class="btn btn-sm btn bg-secondary hover:bg-secondaryhover hover:shadow-btnsecondary text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-successlight">
                  <p class="text-success mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
                  <p class="mb-4 text-success leading-normal">The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
                  <button class="btn btn-sm btn bg-success hover:bg-successhover hover:shadow-btnsuccess text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-infolight">
                  <p class="text-info mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
                  <p class="mb-4 text-info leading-normal">The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
                  <button class="btn btn-sm btn bg-info hover:bg-infohover hover:shadow-btninfo text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warninglight">
                  <p class="text-warning mb-2"><strong>Success!</strong> Vampires The Romantic Ideology Behind Them</p>
                  <p class="mb-4 text-warning leading-normal">The following article covers a topic that has recently moved to center stage-at lease it seems that way.</p>
                  <button class="btn btn-sm btn bg-warning hover:bg-warninghover hover:shadow-btnwarning text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526]">
                  <p class="text-danger mb-2"><strong>Danger! </strong> Religion And Science</p>
                  <p class="mb-4 text-danger leading-normal">What is the loop of Creation? How is there something from nothing? In spite of the fact..</p>
                  <button class="btn btn-sm btn bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-alertdark">
                  <p class="text-dark mb-2"><strong>Danger! </strong> Religion And Science</p>
                  <p class="mb-4 text-dark leading-normal">What is the loop of Creation? How is there something from nothing? In spite of the fact..</p>
                  <button class="btn btn-sm btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-light">
                  <p class="text-dark mb-2"><strong>Danger! </strong> Religion And Science</p>
                  <p class="mb-4 text-dark leading-normal">What is the loop of Creation? How is there something from nothing? In spite of the fact..</p>
                  <button class="btn btn-sm btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white">Confirm</button>
                  <button class="btn btn-sm text-primary !shadow-none">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headershadow == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code11" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert Icon Left</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.roundedstylish = 'Preview'" :class="{ ' !text-white bg-primary': tab.roundedstylish == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.roundedstylish = 'html'" :class="{ ' !text-white bg-primary': tab.roundedstylish == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.roundedstylish == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primary text-white">
              <span><i class="mdi mdi-account-search"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-[#1F2025] text-white">
              <span><i class="mdi mdi-bell"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-success text-white">
              <span><i class="mdi mdi-check"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-info text-white">
              <span><i class="mdi mdi-email"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              Info! You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warning text-white">
              <span><i class="mdi mdi-alert"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-danger text-white">
              <span><i class="mdi mdi-help"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dark text-white">
              <span><i class="mdi mdi-settings"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <span><i class="mdi mdi-cogs"></i></span>
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.roundedstylish == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code12" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert Outline</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.gradient = 'Preview'" :class="{ ' !text-white bg-primary': tab.gradient == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">Preview</button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.gradient = 'html'" :class="{ ' !text-white bg-primary': tab.gradient == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.gradient == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-primary text-primary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-secondary text-secondary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-success text-success">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              Success! Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-info text-info">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              Info! You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-warning text-warning">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-danger text-danger">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-dark text-dark">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-light text-dark">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.gradient == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code13" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert Social</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.alertsocial = 'Preview'" :class="{ ' !text-white bg-primary': tab.alertsocial == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.alertsocial = 'html'" :class="{ ' !text-white bg-primary': tab.alertsocial == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.alertsocial == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="row">
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-[#1877F2]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4.65xl mdi mdi-facebook"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Facebook</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-[#03A9F4]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4.65xl mdi mdi-twitter"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Twitter</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-[#1976D2]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4.65xl mdi mdi-linkedin"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Linkedin</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-[#D93F21]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4.65xl mdi mdi-google-plus"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Google Plus</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.alertsocial == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code14" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Message Alert</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.messagealert = 'Preview'" :class="{ ' !text-white bg-primary': tab.messagealert == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.messagealert = 'html'" :class="{ ' !text-white bg-primary': tab.messagealert == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.messagealert == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="row">
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative text-primary bg-primarylight border border-primarylight">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-primary">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-secondarylight text-secondary">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-secondary">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-success bg-successlight">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-success">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-info bg-infolight">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-info">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-warning bg-warninglight">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-warning">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-danger bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-danger">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-alertdark">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-dark">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-1">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-dark">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.messagealert == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code14" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Message Alert with Solid color</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withsolidcolor = 'Preview'" :class="{ ' !text-white bg-primary': tab.withsolidcolor == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withsolidcolor = 'html'" :class="{ ' !text-white bg-primary': tab.withsolidcolor == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withsolidcolor == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="row">
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primary text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-[#1F2025] text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-success text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-info">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warning text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-danger text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dark text-white">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-white">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-white">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
                  </button>
                  <div class="media">
                    <div class="media-body">
                      <h5 class="mt-1 mb-2 text-dark">Notifications</h5>
                      <p class="sm:text-2sm leading-normal text-dark">
                        Cras sit amet nibh libero, in gravida nulla. tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withsolidcolor == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code13" />
        </Transition>
      </div>
    </div>
  </div>

  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alert left icon big</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.lefticonbig = 'Preview'" :class="{ ' !text-white bg-primary': tab.lefticonbig == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.lefticonbig = 'html'" :class="{ ' !text-white bg-primary': tab.lefticonbig == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">Vue</button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.lefticonbig == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="row">
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-primary bg-primarylight left-icon-big">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4xl leading-none mdi mdi-email-alert"></i></span>
                    </div>
                    <div class="media-body">
                      <h6 class="mt-1 mb-2">Welcome to your account.</h6>
                      <p class="sm:text-2sm leading-normal text-primary">Please confirm your email address: email@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-warning bg-warninglight left-icon-big">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4xl leading-none mdi mdi-help-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2">Pending!</h5>
                      <p class="sm:text-2sm leading-normal text-warning">You message sending failed.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-success bg-successlight left-icon-big">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4xl leading-none mdi mdi-check-circle-outline"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2">Congratulations!</h5>
                      <p class="sm:text-2sm leading-normal text-success">You have successfully created a account.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/2 w-full">
                <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-danger bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526] left-icon-big">
                  <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                    <span><i class="fa-solid fa-xmark scale-150"></i></span>
                  </button>
                  <div class="flex items-start">
                    <div class="self-center mr-3.6 social-icon">
                      <span><i class="text-4xl leading-none mdi mdi-alert"></i></span>
                    </div>
                    <div class="media-body">
                      <h5 class="mt-1 mb-2">Loading failed!</h5>
                      <p class="sm:text-2sm leading-normal text-danger">Again upload your server</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.lefticonbig == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="bedge.code11" />
        </Transition>
      </div>
    </div>
  </div>
</template>
