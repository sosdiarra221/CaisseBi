<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import VueApexCharts from "vue3-apexcharts";
import EccomerceChart from "~/components/ecommerce/EccomerceChart.vue";
import TodoItem from "~/components/TodoItem.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
import SalesChart from "~/components/ecommerce/SalesChart.vue";
import EcommerceTable from "~/components/EcommerceTable.vue";

const windowWidth = ref<number>();

function widthHandler() {
  windowWidth.value = window.innerWidth;
  useHead({
    bodyAttrs: {
      class: "",
      "data-layout":
        windowWidth.value && windowWidth.value >= 775
          ? "horizontal"
          : "vertical",
      "data-nav-headerbg": "color_4",
      "data-headerbg": "color_4",
    },
  });
}
onMounted(() => {
  widthHandler();
  window.addEventListener("resize", widthHandler);
});
onUnmounted(() => {
  window.addEventListener("resize", widthHandler);
});

definePageMeta({
  layout: "nosidebar",
});

const state = {
  series: [
    {
      name: "Revenue",
      data: [31, 40, 28, 25, 40, 28, 31, 40, 28, 31, 40, 28],
    },
    {
      name: "Active Projects",
      data: [11, 32, 45, 38, 25, 20, 36, 45, 15, 11, 32, 45],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 300,

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "45%",
        borderRadius: 3,
      },
    },
    colors: ["#0074FF", "#77248B"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
      fontSize: "13px",
      labels: {
        colors: "#888888",
      },
      markers: {
        width: 10,
        height: 10,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: ["var(--primary)", "#1c2430"],
        radius: 30,
      },
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#EEF0F7",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: ["#1C2430"],
          fontSize: "13px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#1C2430",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      crosshairs: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        offsetX: -16,
        style: {
          colors: ["#1C2430"],
          fontSize: "15px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    fill: {
      opacity: 1,
      colors: ["var(--primary)", "#1C2430"],
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return "$ " + val + "";
        },
      },
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "1%",
              borderRadius: -1,
            },
          },
          chart: {
            height: 250,
          },
          series: [
            {
              name: "Projects",
              data: [31, 40, 28, 31, 40, 28, 31, 40],
            },
            {
              name: "Projects",
              data: [11, 32, 45, 31, 40, 28, 31, 40],
            },
          ],
        },
      },
    ],
  },
};

const state2 = {
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
    class="content-body content-body after:content-[''] after:absolute after:h-[410px] after:w-full after:bg-[#F7F7F7] dark:bg-d-bg after:left-0 after:top-0 after:-z-1"
  >
    <div class="container">
      <div class="grid grid-cols-12 gap-x-6">
        <EccomerceChart />
      </div>
      <div class="grid grid-cols-12 gap-x-6 max-2xl:mt-0 mt-12">
        <div class="xl:col-span-8 col-span-12">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="col-span-12">
              <div class="card overflow-hidden">
                <div
                  class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <div class="blance-media">
                    <h5 class="mb-0">Your Balance</h5>
                    <h4 class="mb-0">
                      $25,217k
                      <span class="badge badge-sm text-success bg-successlight"
                        >+2.7%</span
                      >
                    </h4>
                  </div>
                </div>
                <div>
                  <div id="chartBarRunning" class="!pt-0 sm:p-5 p-4">
                    <ClientOnly>
                      <VueApexCharts
                        height="300px"
                        :series="state.series"
                        :options="state.options"
                      />
                    </ClientOnly>
                  </div>
                  <div
                    class="ttl-project flex justify-around py-3.6 text-center border-t border-border overflow-hidden max-sm:hidden"
                  >
                    <div class="pr-data relative">
                      <h5>12,721</h5>
                      <span class="text-body">Number of Projects</span>
                    </div>
                    <div class="relative pr-data">
                      <h5 class="text-primary">721</h5>
                      <span class="text-body">Active Projects</span>
                    </div>
                    <div class="pr-data relative">
                      <h5>$2,50,523</h5>
                      <span class="text-body">Revenue</span>
                    </div>
                    <div class="pr-data after:hidden">
                      <h5 class="text-success">12,275h</h5>
                      <span class="text-body">Working Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-8 col-span-12">
              <div class="card">
                <div
                  class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h5>People Contact</h5>
                </div>
                <div class="sm:p-5 p-4">
                  <div class="grid grid-cols-12 gap-2">
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar1.jpg"
                          alt=""
                        />
                        <h6>Jordana Niclany</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar4.jpg"
                          alt=""
                        />
                        <h6>Jacob Jack</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid bg-purplelight"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar3.jpg"
                          alt=""
                        />
                        <h6>Sammy Nico</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid bg-cream-light"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar4.jpg"
                          alt=""
                        />
                        <h6>Gibs Gibsy</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar5.jpg"
                          alt=""
                        />
                        <h6>Sam Sammy</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                    <div class="lg:col-span-4 col-span-6">
                      <div
                        class="text-center border border-border border-dashed rounded-lg px-2 py-4 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight hover:border-solid"
                      >
                        <img
                          class="size-14 min-w-14 inline-block relative object-cover rounded-full mb-2"
                          src="assets/images/avatar/avatar6.jpg"
                          alt=""
                        />
                        <h6>Corey Core</h6>
                        <span class="text-xs">jordan@mail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 col-span-12">
              <div class="card">
                <div class="sm:p-5 p-4 flex-auto">
                  <div id="redial">
                    <ClientOnly>
                      <VueApexCharts
                        height="160px"
                        :series="state2.series"
                        :options="state2.options"
                      />
                    </ClientOnly>
                  </div>
                  <div class="redia-date text-center">
                    <h4>My Progress</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div class="py-4 px-5 text-center !pt-0">
                  <a
                    href=""
                    class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                    >More Details</a
                  >
                </div>
              </div>
            </div>
            <div class="col-span-12">
              <div class="card">
                <div
                  class="relative py-4.5 px-5 flex justify-between items-center flex-wrap gap-2 border-b border-border"
                >
                  <h4>Transaction Details</h4>
                  <div
                    class="flex items-center justify-between transaction flex-wrap"
                  >
                    <div
                      class="relative flex flex-wrap items-stretch justify-between search-area w-[200px]"
                    >
                      <span
                        class="input-group-text bg-light !p-0 !rounded-r-none !leading-[8px] border border-border border-r-0"
                      >
                        <a
                          href="javascript:void(0);"
                          class="py-[0.3rem] px-[0.85rem] bg-light rounded-s-lg"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="6.6665"
                              cy="6.66675"
                              r="4"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.6665 9.66675L12.6665 12.6667"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </span>
                      <input
                        type="text"
                        class="py-1.5 pr-3 pl-1 relative flex-auto w-[1%] h-7.5 rounded-e-lg bg-light border border-border border-l-0"
                        placeholder="Search"
                      />
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="!py-[0.3rem] !px-[0.85rem] bg-light ml-1 border border-border btn text-secondary max-sm:hidden"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66699 4.66699H13.3337"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.66699 8L9.33366 8"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.66699 11.333H4.00033"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Sort By
                    </a>
                    <a
                      href="javascript:void(0);"
                      class="!py-[0.3rem] !px-[0.85rem] bg-light ml-1 border border-border btn text-secondary max-sm:hidden"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1594 3.33301H4.84121C3.98686 3.33301 3.52595 4.33513 4.08196 4.9838L6.42625 7.71881C6.5816 7.90005 6.66699 8.13089 6.66699 8.3696V11.3816C6.66699 11.7604 6.881 12.1067 7.21978 12.2761L7.88645 12.6094C8.55135 12.9419 9.33366 12.4584 9.33366 11.715V8.3696C9.33366 8.13089 9.41905 7.90005 9.5744 7.71881L11.9187 4.9838C12.4747 4.33513 12.0138 3.33301 11.1594 3.33301Z"
                          stroke="#1C2430"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Filter
                    </a>
                  </div>
                </div>
                <div class="sm:p-5 p-4">
                  <div class="overflow-x-auto">
                    <ClientOnly>
                      <EcommerceTable />
                    </ClientOnly>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-4 col-span-12">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="col-span-12">
              <div class="card bg-[url('../images/sellpattern.png')] bg-bottom">
                <div class="relative pt-4.5 px-5 text-white">
                  <h4 class="text-white mb-0">Top Sellers</h4>
                  <span>Users from all channels</span>
                </div>
                <div class="sm:p-5 p-4">
                  <div
                    class="seller-slider relative after:absolute after:content-[''] after:bottom-0 after:-left-5 after:w-[260px] after:h-px after:bg-primary3"
                  >
                    <Swiper
                      :slides-per-view="2.5"
                      :space-between="20"
                      class="swiper mySwiper swiper-lr"
                    >
                      <SwiperSlide class="swiper-slide">
                        <div class="card">
                          <div class="sm:p-5 p-4 product">
                            <img
                              src="assets/images/swiper/shirt1.jpg"
                              class="mb-5"
                            />
                            <div class="product-imfo">
                              <div class="flex justify-between">
                                <span class="text-danger">up to 79% off</span>
                                <h6 class="font-semibold">$80</h6>
                              </div>
                              <div class="flex justify-between">
                                <h6 class="font-semibold">
                                  block tiered dress.
                                </h6>
                                <span><del>$95</del></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide">
                        <div class="card">
                          <div class="sm:p-5 p-4 product">
                            <img
                              src="assets/images/swiper/shirt1.jpg"
                              class="mb-5"
                            />
                            <div class="product-imfo">
                              <div class="flex justify-between">
                                <span class="text-danger">up to 79% off</span>
                                <h6 class="font-semibold">$80</h6>
                              </div>
                              <div class="flex justify-between">
                                <h6 class="font-semibold">
                                  block tiered dress.
                                </h6>
                                <span><del>$95</del></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide">
                        <div class="card">
                          <div class="sm:p-5 p-4 product">
                            <img
                              src="assets/images/swiper/shirt1.jpg"
                              class="mb-5"
                            />
                            <div class="product-imfo">
                              <div class="flex justify-between">
                                <span class="text-danger">up to 79% off</span>
                                <h6 class="font-semibold">$80</h6>
                              </div>
                              <div class="flex justify-between">
                                <h6 class="font-semibold">
                                  block tiered dress.
                                </h6>
                                <span><del>$95</del></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide class="swiper-slide">
                        <div class="card">
                          <div class="sm:p-5 p-4 product">
                            <img
                              src="assets/images/swiper/shirt1.jpg"
                              class="mb-5"
                            />
                            <div class="product-imfo">
                              <div class="flex justify-between">
                                <span class="text-danger">up to 79% off</span>
                                <h6 class="font-semibold">$80</h6>
                              </div>
                              <div class="flex justify-between">
                                <h6 class="font-semibold">
                                  block tiered dress.
                                </h6>
                                <span><del>$95</del></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div class="product-details mt-6">
                    <h4 class="mb-2 text-white">
                      Your Finances, safe and Secure
                    </h4>
                    <p class="mb-4 text-white">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div class="flex items-center">
                      <ul class="flex items-center">
                        <li class="inline-block relative">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar1.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar2.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar3.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar4.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar5.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <img
                            class="size-10 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 max-w-none rounded-full"
                            src="assets/images/avatar/avatar6.jpg"
                            alt=""
                          />
                        </li>
                        <li class="inline-block relative -ml-3.6">
                          <div
                            class="size-10 leading-10 text-center object-cover inline-block relative hover:z-1 duration-500 rounded-full bg-[#F9F9FB] text-black"
                          >
                            +4K
                          </div>
                        </li>
                      </ul>
                      <div class="ms-4">
                        <h4 class="text-white">15k+</h4>
                        <span class="text-white">Happy Clients</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:col-span-12 lg:col-span-6 col-span-12">
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
            <div class="xl:col-span-12 lg:col-span-6 col-span-12">
              <div class="card">
                <SalesChart title="Sales by traffic source" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
