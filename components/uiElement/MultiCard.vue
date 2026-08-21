<script lang="ts" setup>
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
    <div class="card dz-card" x-data="{ tab: 'Preview' }" id="basic-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Basic Alerts</h4>
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
      <div class="tab-pane fade" id="myTabContent">
        <Transition
          v-show="tab.basic == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="card-body pt-0">
            <p class="card-text">
              He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff <br />
              sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
            </p>
          </div>
        </Transition>
        <Transition
          v-show="tab.basic == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
      <!--/tab-content-->
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Solid color alerts</h4>
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
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-primary text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
              <strong>Welcome!</strong> Message has been sent.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-[#1F2025] text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
              </svg>
              <strong>Done!</strong> Your profile photo updated.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>

            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-success text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <strong>Success!</strong> Message has been sent.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-white bg-info">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <strong>Info!</strong> You have got 5 new email.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-warning text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <strong>Warning!</strong> Something went wrong. Please check.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-danger text-white">
              <svg viewBox="0 0 24 24" width="24 " height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              <strong>Error!</strong> Message sending failed.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-dark text-white">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              <strong>Error!</strong> You successfully read this important alert message.
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              <strong>Error!</strong> You successfully read this message..
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150 text-white"></i></span>
              </button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.always == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Square alerts</h4>
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
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-primary text-white"><strong>Welcome!</strong> Message has been sent.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-[#1F2025] text-white"><strong>Done!</strong> Your profile photo updated.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-success solid text-white"><strong>Success!</strong> Message has been sent.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-info text-white"><strong>Info!</strong> You have got 5 new email.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-warning text-white"><strong>Warning!</strong> Something went wrong. Please check.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-danger text-white"><strong>Error!</strong> Message sending failed.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent bg-dark text-white"><strong>Error!</strong> You successfully read this important alert message.</div>
            <div class="pr-12 pl-4 py-3 mb-4 relative border border-transparent text-dark bg-[#F3F5F8]"><strong>Error!</strong> You successfully read this message..</div>
          </div>
        </Transition>
        <Transition
          v-show="tab.default == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Rounded alerts</h4>
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
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-primary text-white"><strong>Welcome!</strong> Message has been sent.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-[#1F2025] text-white"><strong>Done!</strong> Your profile photo updated.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-success solid text-white"><strong>Success!</strong> Message has been sent.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-info text-white"><strong>Info!</strong> You have got 5 new email.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-warning text-white"><strong>Warning!</strong> Something went wrong. Please check.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-danger text-white"><strong>Error!</strong> Message sending failed.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent bg-dark text-white"><strong>Error!</strong> You successfully read this important alert message.</div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-full relative border border-transparent text-dark bg-[#F3F5F8]"><strong>Error!</strong> You successfully read this message..</div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Dismissable Alerts</h4>
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
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative text-primary bg-primarylight border border-primarylight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent bg-secondarylight text-secondary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-success bg-successlight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-info bg-infolight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Info!</strong> You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-warning bg-warninglight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-danger bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-alertdark">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.spacewithborder == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Alerts alt</h4>
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
          <div class="sm:p-7.5 p-4">
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative text-primary bg-primarylight border border-transparent border-l-4 border-l-primary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-secondary bg-secondarylight text-secondary">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-success text-success bg-successlight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Success!</strong> Message has been sent.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-info text-info bg-infolight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Info!</strong> You have got 5 new email.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-warning text-warning bg-warninglight">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Warning!</strong> Something went wrong. Please check.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-danger text-danger bg-dangerlight dark:bg-[#e5555526] dark:border-[#e5555526]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-dark dark:border-l-[#b1b1b159] text-dark bg-alertdark">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
            <div class="pr-12 pl-4 py-3 mb-4 rounded-lg relative border border-transparent border-l-4 border-l-[#b9b9b9] text-dark bg-[#F3F5F8]">
              <button type="button" class="remove-btn text-dark absolute right-0 py-5 px-4 -top-1.1 opacity-50 z-[2]">
                <span><i class="fa-solid fa-xmark scale-150"></i></span>
              </button>
              <strong>Error!</strong> Message Sending failed.
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.rightposition == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
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
          <div class="p-7.5 bg-black"></div>
        </Transition>
      </div>
    </div>
  </div>
</template>
