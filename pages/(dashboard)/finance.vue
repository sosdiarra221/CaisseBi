<script lang="ts" setup>
import OverviewChart from "~/components/dashboard/OverviewChart.vue";
import TodoItem from "~/components/TodoItem.vue";
import bg from "@/assets/images/rainbow.gif";
import VueApexCharts from "vue3-apexcharts";
import FinanceTable from "~/components/FinanceTable.vue";

const AsyncComponent = defineAsyncComponent(
  () => import("~/components/finance/ChartData.vue")
);

useHead({
  bodyAttrs: {
    "data-nav-headerbg": "color_4",
    "data-headerbg": "color_4",
  },
});

const state = {
  series: [75],
  options: {
    chart: {
      type: "radialBar",
      offsetY: 0,
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -180,
        endAngle: 180,
        track: {
          background: "#F1EAFF",
          strokeWidth: "100%",
          margin: 3,
        },

        hollow: {
          margin: 20,
          size: "60%",
          background: "transparent",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: "24px",
            color: "#000000",
            fontWeight: 600,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 150,
          },
        },
      },
    ],
    grid: {
      padding: {
        top: -10,
      },
    },
    /* stroke: {
				  dashArray: 4,
				  colors:'#6EC51E'
				}, */
    fill: {
      type: "gradient",
      colors: "#7A849B",
      gradient: {
        shade: "black",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [64, 43, 64, 0.5],
      },
    },
    labels: ["Average Results"],
  },
};
</script>

<template>
  <div
    class="content-body bg-[#E7EAE1] dark:bg-d-bg"
    style="background: #e7eae1 !important"
  >
    <div class="container">
      <div class="grid grid-cols-12 gap-x-6">
        <div class="col-span-12">
          <div class="grid grid-cols-12 gap-x-6">
            <Suspense>
              <AsyncComponent />
              <template #fallback> loading... </template>
            </Suspense>
            <div class="xl:col-span-3 sm:col-span-6 col-span-12">
              <div
                class="card !bg-primary rainbow-box relative z-1 flex flex-col"
                :style="`background-image: url(${bg}); background-size: cover; background-blend-mode: luminosity`"
              >
                <div
                  class="flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap"
                >
                  <svg
                    width="30"
                    height="33"
                    viewBox="0 0 30 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.9757 0.803847C16.1193 -0.267949 13.8322 -0.267949 11.9757 0.803847L3 5.986C1.14359 7.05779 0 9.03856 0 11.1822V21.5464C0 23.69 1.14359 25.6708 3 26.7426L11.9757 31.9247C13.8322 32.9965 16.1193 32.9965 17.9757 31.9247L26.9515 26.7426C28.8079 25.6708 29.9515 23.69 29.9515 21.5464V11.1821C29.9515 9.03855 28.8079 7.05779 26.9515 5.986L17.9757 0.803847ZM16.4757 6.08629C15.5475 5.5504 14.4039 5.5504 13.4757 6.0863L6.8247 9.92627C5.8965 10.4622 5.3247 11.4526 5.3247 12.5243V20.2043C5.3247 21.2761 5.8965 22.2665 6.82471 22.8024L13.4757 26.6423C14.4039 27.1782 15.5475 27.1782 16.4757 26.6423L23.1268 22.8024C24.055 22.2665 24.6268 21.2761 24.6268 20.2043V12.5243C24.6268 11.4525 24.055 10.4622 23.1268 9.92627L16.4757 6.08629Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <div class="sm:p-5 p-4 !pt-0 flex-auto">
                  <div class="finance">
                    <h4
                      class="text-white max-xl:text-xl text-2xl mb-2 leading-normal"
                    >
                      Your Finances, safe and Secure
                    </h4>
                    <p class="text-white mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div class="flex pt-4">
                    <div class="avatar-list avatar-list-stacked">
                      <img
                        src="assets/images/contacts/pic555.jpg"
                        class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                        alt=""
                      />
                      <img
                        src="assets/images/contacts/pic666.jpg"
                        class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                        alt=""
                      />
                      <img
                        src="assets/images/contacts/pic777.jpg"
                        class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                        alt=""
                      />
                    </div>
                    <div class="ratting-data ml-5">
                      <h4 class="text-base text-white font-semibold">15k+</h4>
                      <span class="text-xs text-white">Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:col-span-3 sm:col-span-6 col-span-12">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="relative">
                    <div id="redial">
                      <ClientOnly>
                        <VueApexCharts
                          height="160px"
                          :series="state.series"
                          :options="state.options"
                        />
                      </ClientOnly>
                    </div>
                    <span
                      class="right-sign absolute -bottom-10 left-1/2 -translate-x-1/2 z-1"
                    >
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_3_700)">
                          <circle cx="46.5" cy="31.5" r="16.5" fill="#F8B940" />
                        </g>
                        <g clip-path="url(#clip0_3_700)">
                          <path
                            d="M52.738 25.3524C53.0957 24.9315 53.7268 24.8804 54.1476 25.2381C54.5684 25.5957 54.6196 26.2268 54.2619 26.6476L45.7619 36.6476C45.3986 37.0751 44.7549 37.1201 44.3356 36.7474L39.8356 32.7474C39.4228 32.3805 39.3857 31.7484 39.7526 31.3356C40.1195 30.9229 40.7516 30.8857 41.1643 31.2526L44.9002 34.5733L52.738 25.3524Z"
                            fill="#222B40"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_3_700"
                            x="0"
                            y="0"
                            width="93"
                            height="93"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="15" />
                            <feGaussianBlur stdDeviation="15" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_3_700"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_3_700"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="clip0_3_700">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(35 19)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div class="redia-date text-center mt-3.6">
                    <h4 class="text-xl font-semibold mb-2">My Progress</h4>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
                    <NuxtLink
                      to="/crm"
                      class="btn border-warning text-textdark bg-warning"
                      >More Details</NuxtLink
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:col-span-8 col-span-12">
              <OverviewChart />
            </div>
            <div class="xl:col-span-4 col-span-12">
              <div class="card overflow-hidden">
                <div
                  class="text-center flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap"
                >
                  <h4 class="heading">My To Do Items</h4>
                  <div>
                    <a href="javascript:void(0);" class="text-primary mr-2"
                      >View All</a
                    >
                    <a href="javascript:void(0);" class="text-secondary">
                      + Add To Do</a
                    >
                  </div>
                </div>
                <div class="card-body p-0">
                  <TodoItem />
                </div>
              </div>
            </div>
            <div class="col-span-12">
              <div class="card">
                <div class="card-body p-0">
                  <div class="overflow-x-auto active-projects shorting">
                    <div class="p-5">
                      <h4 class="heading">Active Projects</h4>
                    </div>
                    <ClientOnly>
                      <FinanceTable />
                    </ClientOnly>
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
