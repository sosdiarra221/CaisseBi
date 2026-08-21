<script lang="ts" setup>
import profile from "~/assets/images/user1.jpg";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const tab = ref<string>("pills-1h");
</script>

<template>
  <div class="card sidebar-profile dz-scroll px-3">
    <div class="relative bg-transparent pb-[1.063rem] px-5 flex justify-between items-center pt-6">
      <div>
        <h4 class="text-xl font-bold">Latest Transactions</h4>
        <span>Last activity at 08 August 2024</span>
      </div>
      <div class="relative">
        <CustomeDropDown>
          <template #trigger>
            <a class="nav-link" href="javascript:void(0);" role="button">
              <div class="size-10 relative inline-block text-center leading-9 rounded-lg border border-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_243_2140)">
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      stroke="var(--primary)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M16.1663 12.4999C16.0554 12.7513 16.0223 13.0301 16.0713 13.3004C16.1204 13.5707 16.2492 13.8202 16.4413 14.0166L16.4913 14.0666C16.6463 14.2214 16.7692 14.4052 16.8531 14.6075C16.937 14.8098 16.9802 15.0267 16.9802 15.2458C16.9802 15.4648 16.937 15.6817 16.8531 15.884C16.7692 16.0863 16.6463 16.2701 16.4913 16.4249C16.3366 16.5799 16.1527 16.7028 15.9504 16.7867C15.7481 16.8706 15.5312 16.9137 15.3122 16.9137C15.0931 16.9137 14.8763 16.8706 14.6739 16.7867C14.4716 16.7028 14.2878 16.5799 14.133 16.4249L14.083 16.3749C13.8866 16.1828 13.6372 16.0539 13.3668 16.0049C13.0965 15.9559 12.8177 15.989 12.5663 16.0999C12.3199 16.2056 12.1097 16.381 11.9616 16.6045C11.8135 16.8281 11.7341 17.0901 11.733 17.3583V17.4999C11.733 17.9419 11.5574 18.3659 11.2449 18.6784C10.9323 18.991 10.5084 19.1666 10.0663 19.1666C9.62431 19.1666 9.20039 18.991 8.88783 18.6784C8.57527 18.3659 8.39967 17.9419 8.39967 17.4999V17.4249C8.39322 17.1491 8.30394 16.8816 8.14343 16.6572C7.98293 16.4328 7.75862 16.2618 7.49967 16.1666C7.24833 16.0557 6.96951 16.0226 6.69918 16.0716C6.42886 16.1206 6.17941 16.2495 5.98301 16.4416L5.93301 16.4916C5.77822 16.6465 5.59441 16.7695 5.39208 16.8534C5.18974 16.9372 4.97287 16.9804 4.75384 16.9804C4.53482 16.9804 4.31794 16.9372 4.11561 16.8534C3.91328 16.7695 3.72946 16.6465 3.57467 16.4916C3.41971 16.3368 3.29678 16.153 3.21291 15.9507C3.12903 15.7483 3.08586 15.5314 3.08586 15.3124C3.08586 15.0934 3.12903 14.8765 3.21291 14.6742C3.29678 14.4719 3.41971 14.288 3.57467 14.1333L3.62467 14.0833C3.81679 13.8869 3.94566 13.6374 3.99468 13.3671C4.04369 13.0967 4.0106 12.8179 3.89967 12.5666C3.79404 12.3201 3.61864 12.1099 3.39506 11.9618C3.17149 11.8138 2.9095 11.7343 2.64134 11.7333H2.49967C2.05765 11.7333 1.63372 11.5577 1.32116 11.2451C1.0086 10.9325 0.833008 10.5086 0.833008 10.0666C0.833008 9.62456 1.0086 9.20064 1.32116 8.88807C1.63372 8.57551 2.05765 8.39992 2.49967 8.39992H2.57467C2.8505 8.39347 3.11801 8.30418 3.34242 8.14368C3.56684 7.98317 3.73777 7.75886 3.83301 7.49992C3.94394 7.24857 3.97703 6.96976 3.92801 6.69943C3.879 6.4291 3.75012 6.17965 3.55801 5.98325L3.50801 5.93325C3.35305 5.77846 3.23012 5.59465 3.14624 5.39232C3.06237 5.18999 3.0192 4.97311 3.0192 4.75409C3.0192 4.53506 3.06237 4.31818 3.14624 4.11585C3.23012 3.91352 3.35305 3.72971 3.50801 3.57492C3.6628 3.41996 3.84661 3.29703 4.04894 3.21315C4.25127 3.12928 4.46815 3.08611 4.68717 3.08611C4.9062 3.08611 5.12308 3.12928 5.32541 3.21315C5.52774 3.29703 5.71155 3.41996 5.86634 3.57492L5.91634 3.62492C6.11274 3.81703 6.36219 3.94591 6.63252 3.99492C6.90285 4.04394 7.18166 4.01085 7.43301 3.89992H7.49967C7.74615 3.79428 7.95636 3.61888 8.10442 3.39531C8.25248 3.17173 8.33194 2.90974 8.33301 2.64159V2.49992C8.33301 2.05789 8.5086 1.63397 8.82116 1.32141C9.13372 1.00885 9.55765 0.833252 9.99967 0.833252C10.4417 0.833252 10.8656 1.00885 11.1782 1.32141C11.4907 1.63397 11.6663 2.05789 11.6663 2.49992V2.57492C11.6674 2.84307 11.7469 3.10506 11.8949 3.32864C12.043 3.55222 12.2532 3.72762 12.4997 3.83325C12.751 3.94418 13.0298 3.97727 13.3002 3.92826C13.5705 3.87924 13.8199 3.75037 14.0163 3.55825L14.0663 3.50825C14.2211 3.35329 14.4049 3.23036 14.6073 3.14649C14.8096 3.06261 15.0265 3.01944 15.2455 3.01944C15.4645 3.01944 15.6814 3.06261 15.8837 3.14649C16.0861 3.23036 16.2699 3.35329 16.4247 3.50825C16.5796 3.66304 16.7026 3.84685 16.7864 4.04918C16.8703 4.25152 16.9135 4.46839 16.9135 4.68742C16.9135 4.90644 16.8703 5.12332 16.7864 5.32565C16.7026 5.52798 16.5796 5.7118 16.4247 5.86659L16.3747 5.91659C16.1826 6.11298 16.0537 6.36243 16.0047 6.63276C15.9557 6.90309 15.9887 7.18191 16.0997 7.43325V7.49992C16.2053 7.74639 16.3807 7.9566 16.6043 8.10466C16.8279 8.25273 17.0899 8.33218 17.358 8.33325H17.4997C17.9417 8.33325 18.3656 8.50885 18.6782 8.82141C18.9907 9.13397 19.1663 9.55789 19.1663 9.99992C19.1663 10.4419 18.9907 10.8659 18.6782 11.1784C18.3656 11.491 17.9417 11.6666 17.4997 11.6666H17.4247C17.1565 11.6677 16.8945 11.7471 16.671 11.8952C16.4474 12.0432 16.272 12.2534 16.1663 12.4999Z"
                      stroke="var(--primary)"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_243_216855640">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </template>
          <template #menu>
            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-full min-w-40 mt-1 z-[2]">
              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
            </div>
          </template>
        </CustomeDropDown>
      </div>
    </div>
    <div class="sm:p-5 p-4 text-center">
      <div class="blance-profile relative z-1 size-29 m-auto">
        <div id="imagePreview" class="inline-block relative object-cover bg-cover bg-no-repeat bg-center rounded-full size-29" :style="`background-image: url(${profile})`"></div>
        <div class="absolute bottom-0 right-0 cursor-pointer rounded-full bg-primary size-7 leading-6">
          <div class="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
            <input type="file" class="absolute opacity-0 z-0 cursor-pointer size-full" id="imageUpload" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_239_653)">
                <path
                  d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_239_653">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <span class="font-medium">Available balance in USD</span>
        <h2 class="mb-2 font-bold">673,412.66</h2>
      </div>
    </div>
    <div class="pb-4 px-5 text-center">
      <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white me-2 btn-lg">
        <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M5.25 7.5L9 11.25L12.75 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 11.25V2.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        Deposit
      </a>
      <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white ms-2 btn-lg">
        <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.5 7.5V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.6756 16.2754 2.5 15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.6756 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V7.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M5.83301 11.6667L9.99967 7.50008L14.1663 11.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 7.5V17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        withdrawal
      </a>
    </div>
    <div class="relative bg-transparent pt-[1.063rem] px-5 flex justify-between items-center">
      <div>
        <h4 class="text-xl font-bold">Total Balance</h4>
        <span>Last activity at 02:00 PM</span>
      </div>
      <CustomeDropDown class="relative">
        <template #trigger>
          <a class="nav-link" href="javascript:void(0);" role="button">
            <div class="size-10 relative inline-block text-center leading-9 rounded-lg border border-border">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_243_2140)">
                  <path
                    d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                    stroke="var(--primary)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.1663 12.4999C16.0554 12.7513 16.0223 13.0301 16.0713 13.3004C16.1204 13.5707 16.2492 13.8202 16.4413 14.0166L16.4913 14.0666C16.6463 14.2214 16.7692 14.4052 16.8531 14.6075C16.937 14.8098 16.9802 15.0267 16.9802 15.2458C16.9802 15.4648 16.937 15.6817 16.8531 15.884C16.7692 16.0863 16.6463 16.2701 16.4913 16.4249C16.3366 16.5799 16.1527 16.7028 15.9504 16.7867C15.7481 16.8706 15.5312 16.9137 15.3122 16.9137C15.0931 16.9137 14.8763 16.8706 14.6739 16.7867C14.4716 16.7028 14.2878 16.5799 14.133 16.4249L14.083 16.3749C13.8866 16.1828 13.6372 16.0539 13.3668 16.0049C13.0965 15.9559 12.8177 15.989 12.5663 16.0999C12.3199 16.2056 12.1097 16.381 11.9616 16.6045C11.8135 16.8281 11.7341 17.0901 11.733 17.3583V17.4999C11.733 17.9419 11.5574 18.3659 11.2449 18.6784C10.9323 18.991 10.5084 19.1666 10.0663 19.1666C9.62431 19.1666 9.20039 18.991 8.88783 18.6784C8.57527 18.3659 8.39967 17.9419 8.39967 17.4999V17.4249C8.39322 17.1491 8.30394 16.8816 8.14343 16.6572C7.98293 16.4328 7.75862 16.2618 7.49967 16.1666C7.24833 16.0557 6.96951 16.0226 6.69918 16.0716C6.42886 16.1206 6.17941 16.2495 5.98301 16.4416L5.93301 16.4916C5.77822 16.6465 5.59441 16.7695 5.39208 16.8534C5.18974 16.9372 4.97287 16.9804 4.75384 16.9804C4.53482 16.9804 4.31794 16.9372 4.11561 16.8534C3.91328 16.7695 3.72946 16.6465 3.57467 16.4916C3.41971 16.3368 3.29678 16.153 3.21291 15.9507C3.12903 15.7483 3.08586 15.5314 3.08586 15.3124C3.08586 15.0934 3.12903 14.8765 3.21291 14.6742C3.29678 14.4719 3.41971 14.288 3.57467 14.1333L3.62467 14.0833C3.81679 13.8869 3.94566 13.6374 3.99468 13.3671C4.04369 13.0967 4.0106 12.8179 3.89967 12.5666C3.79404 12.3201 3.61864 12.1099 3.39506 11.9618C3.17149 11.8138 2.9095 11.7343 2.64134 11.7333H2.49967C2.05765 11.7333 1.63372 11.5577 1.32116 11.2451C1.0086 10.9325 0.833008 10.5086 0.833008 10.0666C0.833008 9.62456 1.0086 9.20064 1.32116 8.88807C1.63372 8.57551 2.05765 8.39992 2.49967 8.39992H2.57467C2.8505 8.39347 3.11801 8.30418 3.34242 8.14368C3.56684 7.98317 3.73777 7.75886 3.83301 7.49992C3.94394 7.24857 3.97703 6.96976 3.92801 6.69943C3.879 6.4291 3.75012 6.17965 3.55801 5.98325L3.50801 5.93325C3.35305 5.77846 3.23012 5.59465 3.14624 5.39232C3.06237 5.18999 3.0192 4.97311 3.0192 4.75409C3.0192 4.53506 3.06237 4.31818 3.14624 4.11585C3.23012 3.91352 3.35305 3.72971 3.50801 3.57492C3.6628 3.41996 3.84661 3.29703 4.04894 3.21315C4.25127 3.12928 4.46815 3.08611 4.68717 3.08611C4.9062 3.08611 5.12308 3.12928 5.32541 3.21315C5.52774 3.29703 5.71155 3.41996 5.86634 3.57492L5.91634 3.62492C6.11274 3.81703 6.36219 3.94591 6.63252 3.99492C6.90285 4.04394 7.18166 4.01085 7.43301 3.89992H7.49967C7.74615 3.79428 7.95636 3.61888 8.10442 3.39531C8.25248 3.17173 8.33194 2.90974 8.33301 2.64159V2.49992C8.33301 2.05789 8.5086 1.63397 8.82116 1.32141C9.13372 1.00885 9.55765 0.833252 9.99967 0.833252C10.4417 0.833252 10.8656 1.00885 11.1782 1.32141C11.4907 1.63397 11.6663 2.05789 11.6663 2.49992V2.57492C11.6674 2.84307 11.7469 3.10506 11.8949 3.32864C12.043 3.55222 12.2532 3.72762 12.4997 3.83325C12.751 3.94418 13.0298 3.97727 13.3002 3.92826C13.5705 3.87924 13.8199 3.75037 14.0163 3.55825L14.0663 3.50825C14.2211 3.35329 14.4049 3.23036 14.6073 3.14649C14.8096 3.06261 15.0265 3.01944 15.2455 3.01944C15.4645 3.01944 15.6814 3.06261 15.8837 3.14649C16.0861 3.23036 16.2699 3.35329 16.4247 3.50825C16.5796 3.66304 16.7026 3.84685 16.7864 4.04918C16.8703 4.25152 16.9135 4.46839 16.9135 4.68742C16.9135 4.90644 16.8703 5.12332 16.7864 5.32565C16.7026 5.52798 16.5796 5.7118 16.4247 5.86659L16.3747 5.91659C16.1826 6.11298 16.0537 6.36243 16.0047 6.63276C15.9557 6.90309 15.9887 7.18191 16.0997 7.43325V7.49992C16.2053 7.74639 16.3807 7.9566 16.6043 8.10466C16.8279 8.25273 17.0899 8.33218 17.358 8.33325H17.4997C17.9417 8.33325 18.3656 8.50885 18.6782 8.82141C18.9907 9.13397 19.1663 9.55789 19.1663 9.99992C19.1663 10.4419 18.9907 10.8659 18.6782 11.1784C18.3656 11.491 17.9417 11.6666 17.4997 11.6666H17.4247C17.1565 11.6677 16.8945 11.7471 16.671 11.8952C16.4474 12.0432 16.272 12.2534 16.1663 12.4999Z"
                    stroke="var(--primary)"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_243_216855640">
                    <rect width="20" height="20" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
        </template>
        <template #menu>
          <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-full min-w-40 mt-1 z-1">
            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
          </div>
        </template>
      </CustomeDropDown>
    </div>
    <div class="sm:p-5 p-4" x-data="{ tab: 'pills-1h' }">
      <div class="bg-light rounded-lg flex justify-between items-center py-2.5 px-6 mb-2.5">
        <div class="flex">
          <div class="text-center me-4">
            <p class="text-primary mb-0 text-base font-semibold">60</p>
            <span>Done</span>
          </div>
          <div class="text-center ms-4">
            <p class="mb-0 text-base font-semibold text-secondary">20</p>
            <span>In Progress</span>
          </div>
        </div>
        <div>
          <ul class="flex flex-wrap" id="pills-tab11" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="size-10 leading-10 text-center rounded-lg font-medium"
                @click.prevent="tab = 'pills-1h'"
                :class="{ ' bg-card text-primary shadow-nav': tab == 'pills-1h' }"
              >
                1H
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="size-10 leading-10 text-center rounded-lg font-medium"
                @click.prevent="tab = 'pills-1d'"
                :class="{ ' bg-card text-primary shadow-nav': tab == 'pills-1d' }"
              >
                1D
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="size-10 leading-10 text-center rounded-lg font-medium"
                @click.prevent="tab = 'pills-1m'"
                :class="{ ' bg-card text-primary shadow-nav': tab == 'pills-1m' }"
              >
                1M
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="size-10 leading-10 text-center rounded-lg font-medium"
                @click.prevent="tab = 'pills-1y'"
                :class="{ ' bg-card text-primary shadow-nav': tab == 'pills-1y' }"
              >
                1Y
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent1">
        <Transition
          class="tab-pane"
          v-show="tab == 'pills-1h'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="overflow-x-auto">
            <table class="table w-full text-center">
              <tbody>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $6,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bnp(bnb).svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">BNB <span class="text-body text-sm">(bnb)</span></h4>
                        <small>07:25:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $8,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $4,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $3,123</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-warninglight text-warning !border-0 uppercase">IN progress </span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,381</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Transition>
        <Transition
          class="tab-pane"
          v-show="tab == 'pills-1d'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <table class="table w-full text-center">
            <tbody>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $5,221</h5>
                </td>
                <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $6,321</h5>
                </td>
                <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/bnp(bnb).svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">BNB <span class="text-body text-sm">(bnb)</span></h4>
                      <small>07:25:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $8,531</h5>
                </td>
                <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $4,831</h5>
                </td>
                <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $4,153</h5>
                </td>
                <td class="text-right"><span class="badge bg-warninglight text-warning !border-0 uppercase">IN progress </span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $5,381</h5>
                </td>
                <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
              </tr>
              <tr>
                <td class="text-start">
                  <div class="flex items-center">
                    <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                    <div>
                      <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                      <small>06:24:45 AM</small>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>+ $6,321</h5>
                </td>
                <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
              </tr>
            </tbody>
          </table>
        </Transition>
        <Transition
          class="tab-pane"
          v-show="tab == 'pills-1m'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="overflow-x-auto">
            <table class="table w-full text-center">
              <tbody>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $6,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bnp(bnb).svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">BNB <span class="text-body text-sm">(bnb)</span></h4>
                        <small>07:25:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $8,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $4,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $3,123</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-warninglight text-warning !border-0 uppercase">IN progress </span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,381</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Transition>
        <Transition
          class="tab-pane"
          v-show="tab == 'pills-1y'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="overflow-x-auto">
            <table class="table w-full text-center">
              <tbody>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $6,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bnp(bnb).svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">BNB <span class="text-body text-sm">(bnb)</span></h4>
                        <small>07:25:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $8,221</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $4,321</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-successlight text-success !border-0 uppercase">Completed</span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/bitcoin.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Bitcoin <span class="text-body text-sm">(BTC)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $3,123</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-warninglight text-warning !border-0 uppercase">IN progress </span></td>
                </tr>
                <tr>
                  <td class="text-start">
                    <div class="flex items-center">
                      <img src="assets/images/svg/ethereum.svg" alt="" class="mr-1.1" />
                      <div>
                        <h4 class="text-base">Ethereum <span class="text-body text-sm">(ETH)</span></h4>
                        <small>06:24:45 AM</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>+ $5,381</h5>
                  </td>
                  <td class="text-right"><span class="badge bg-dangerlight text-danger !border-0 uppercase">Cancel</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
