<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import Charts from "~/components/index3/Charts.vue";
import Table from "~/components/index3/Table.vue";
import OptionSelect from "~/components/OptionSelect.vue";

const tab = ref("");
const open = reactive({ show1: false, show2: false });

const state = {
  series: [
    {
      name: "Income",
      data: [96, 90],
      // radius: 12,
    },
    {
      name: "Income",
      data: [70, 80],
      // radius: 12,
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 150,

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
        endingShape: "rounded",
        borderRadius: 8,
      },
    },
    states: {
      hover: {
        filter: "none",
      },
    },
    colors: ["#01BD9B", "#E6F9F5"],
    dataLabels: {
      enabled: true,
      offsetY: -25,
      formatter: function (val: string, opts: string) {
        return val + "%";
      },
      style: {
        fontSize: "12px",
        fontWeight: "500",
        colors: ["#000"],
      },
    },
    markers: {
      shape: "circle",
    },

    legend: {
      show: false,
      fontSize: "12px",
      labels: {
        colors: "#000000",
      },
      markers: {
        width: 18,
        height: 18,
        strokeWidth: 50,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
      },
    },
    stroke: {
      show: true,
      width: 10,
      curve: "smooth",
      lineCap: "round",
      colors: ["transparent"],
    },
    grid: {
      show: true,
      strokeDashArray: 50,
      borderColor: "rgba(0, 0, 0, 0.10)",
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
      categories: ["JAN", "FEB"],
      labels: {
        show: false,
        style: {
          colors: "#A5AAB4",
          fontSize: "12px",
          fontWeight: "400",
          fontFamily: "poppins",
          cssClass: "apexcharts-xaxis-label",
        },
      },
      crosshairs: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        offsetX: -12,
        style: {
          colors: "#6F767E",
          fontSize: "12px",
          fontFamily: "poppins",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  },
};

const state2 = {
  series: [25, 33, 29, 16],
  options: {
    chart: {
      type: "donut",
      height: 180,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    colors: ["#B4EDFF", "#7BDFFF", "#FFFFFF", "#018DB9"],
    legend: {
      position: "bottom",
      show: false,
    },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 150,
          },
        },
      },
    ],
    yaxis: {
      labels: {
        offsetY: -30,
      },
    },
  },
};

const chartWidth = ref<number>();

onMounted(() => {
  let width = document.querySelector("#earningChart")?.clientWidth;
  chartWidth.value = Number(width) + 30;
});
const state3 = {
  series: [
    {
      name: "Net Profit",
      data: [667, 400, 380, 500, 600, 510, 610, 520, 400, 600, 510, 610, 610],
      /* radius: 30,	 */
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 250,
      width: chartWidth,
      toolbar: {
        show: false,
      },
      offsetX: -20,
      zoom: {
        enabled: false,
      },
      /* sparkline: {
						enabled: true
					} */
    },

    colors: ["#38BDE7"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
      colors: ["#38BDE7"],
    },
    grid: {
      show: true,
      borderColor: "#eee",
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
    yaxis: {
      show: true,
      tickAmount: 6,
      min: 0,
      max: 800,
      labels: {
        offsetX: 0,
        colors: ["#6F767E"],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May ",
        "Jun",
        "Jul",
        "Aug",
        "Sep ",
        "Oct",
        "Nov",
        "Dec",
      ],
      overwriteCategories: undefined,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        offsetX: 5,
        style: {
          fontSize: "12px",
          colors: ["#6F767E"],
        },
      },
    },
    fill: {
      opacity: 0.5,
      colors: "#38BDE7",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0.6,
            color: "#38BDE7",
            opacity: 0.2,
          },
          {
            offset: 0.6,
            color: "#38BDE7",
            opacity: 0.15,
          },
          {
            offset: 100,
            color: "white",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + "k";
        },
      },
    },
  },
};

const state4 = {
  series: [
    {
      name: "New Clients",
      data: [20, 40, 30, 50, 30, 20],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        //enabled: true
      },
      offsetX: -10,
    },

    plotOptions: {
      bar: {
        columnWidth: "28%",
        endingShape: "rounded",
        startingShape: "rounded",
        borderRadius: 5,

        /* colors: {
							backgroundBarColors: ['#111111', '#111111', '#111111', '#111111','#111111','#111111'],
							backgroundBarOpacity: 1,
							backgroundBarRadius: 5,
						}, */
      },
      distributed: true,
    },

    colors: ["#216FED"],
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        //gradientToColors: ['#FFEABA'],
        //inverseColors: true,
        //opacityFrom: 1,
        //opacityTo: 0,
        //stops: [0, 100]
        colorStops: [
          {
            offset: 0,
            color: "#FFEABA",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#111111",
            opacity: 1,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
      colors: ["#000"],
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 1,
      },
    },
    stroke: {
      show: true,
      lineCap: "rounded",
    },
    xaxis: {
      categories: ["06", "07", "08", "09", "10", "11"],
      labels: {
        show: false,
        style: {
          colors: "#FFEABA",
          fontSize: "13px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      crosshairs: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      opposite: true,
      labels: {
        style: {
          colors: "#808080",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: 100,
        },
        offsetX: -15,
        formatter: function (y: number) {
          return y.toFixed() + "k";
        },
      },
    },
    tooltip: {
      x: {
        show: true,
      },
    },
    responsive: [
      {
        breakpoint: 375,
        options: {
          xaxis: {
            categories: ["06", "07", "08", "09", "10", "11"],
          },
          chart: {
            height: 250,
          },
          series: [
            {
              name: "New Clients",
              data: [300, 250, 600, 600, 400, 450],
            },
          ],
        },
      },
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 250,
          },
          series: [
            {
              name: "New Clients",
              data: [300, 250, 600, 600, 400, 450, 310, 470, 480],
            },
          ],
          xaxis: {
            categories: ["06", "07", "08", "09", "10", "11", "12", "13", "14"],
          },
        },
      },
    ],
  },
};

definePageMeta({
  layout: "nosidebar",
});
</script>

<template>
  <div class="content-body">
    <div class="container">
      <div class="grid grid-cols-12 gap-x-6">
        <div class="xl:col-span-6 col-span-12">
          <div class="card">
            <div class="sm:p-5 p-4 card-info relative overflow-hidden">
              <div class="ml-2.5 mt-2.5">
                <h2 class="mb-2">
                  <svg
                    class="animate-wave inline-block origin-[70%_70%]"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_35_284)">
                      <path
                        d="M23.5221 7.76686L24.5458 16.9522C24.7728 18.9896 25.6862 20.8893 27.1359 22.3389C27.7487 22.9517 27.9089 23.8932 27.5192 24.6674C25.7517 28.1784 23.1221 30.7967 19.599 32.49C18.9383 32.8076 18.1529 32.7483 17.5487 32.3332C10.3864 27.4119 10.1512 24.7037 3.91813 18.6315C3.36108 18.0745 3.19057 17.1997 3.58725 16.5191C3.92065 15.947 4.50196 15.643 5.08836 15.643C5.52994 15.643 5.97662 15.8124 6.31033 16.1461L3.47618 13.312C2.81901 12.6548 2.71118 11.5817 3.32219 10.8783C3.98335 10.1393 5.13188 10.0901 5.83798 10.7962L7.16775 12.126C6.49515 11.4534 6.49002 10.3597 7.16261 9.68715C7.8319 9.01786 8.93496 9.01557 9.60655 9.68715L11.1879 11.2685C10.5153 10.5959 10.5153 9.50746 11.1879 8.83487C11.8857 8.13704 12.9763 8.17928 13.6267 8.82973L20.3578 15.5608L19.9933 10.5959C19.9111 9.49718 20.327 8.47546 21.0509 7.7515C21.3671 7.43535 21.7434 7.17652 22.1615 6.99326C22.7625 6.72989 23.4494 7.11475 23.5221 7.76686Z"
                        fill="#FFBC74"
                      />
                      <g opacity="0.06">
                        <path
                          d="M27.5188 24.6667C25.7534 28.1779 23.125 30.7998 19.6008 32.4932C18.4709 33.0302 17.6833 32.4603 16.7696 31.7871C20.0846 30.2506 22.6411 27.851 24.4719 24.6144C24.9055 23.8306 24.767 22.8905 24.1973 22.2671C22.8177 20.7502 21.9938 18.8083 21.863 16.7617L21.2746 7.54904C21.5361 7.32671 21.8369 7.13712 22.1638 6.99324C22.7654 6.73173 23.4519 7.11747 23.5238 7.76481L24.5438 16.9513C24.7727 18.9913 25.6881 20.8875 27.133 22.339C27.751 22.9569 27.9165 23.8894 27.5188 24.6667Z"
                          fill="black"
                        />
                      </g>
                      <path
                        d="M25.1954 16.8796L24.1719 7.69451C24.0508 6.60732 22.9064 5.95358 21.8991 6.39448C20.2247 7.12883 19.206 8.83755 19.3411 10.6438L19.5771 13.8553L14.0893 8.3675C13.1808 7.45906 11.6761 7.42173 10.7252 8.37261C10.4545 8.64366 10.2626 8.96484 10.1506 9.30613L10.0688 9.2244C9.17236 8.32855 7.59489 8.32951 6.70032 9.22472C6.43054 9.49449 6.23388 9.81791 6.12054 10.171C5.17808 9.40127 3.66414 9.51461 2.82864 10.4494C2.01038 11.3915 2.09179 12.8522 3.01381 13.7742L4.34609 15.1068C3.79856 15.2862 3.3286 15.6639 3.02243 16.19C2.48671 17.1092 2.66486 18.3032 3.46205 19.0998C5.85363 21.4297 7.37268 23.2837 8.71326 24.9196C10.8622 27.5423 12.7181 29.8075 17.1785 32.8721C17.9962 33.4336 19.0326 33.488 19.8823 33.0793C23.5008 31.3402 26.2665 28.609 28.1036 24.9611C28.6198 23.9347 28.4168 22.695 27.5982 21.8767C26.2586 20.5371 25.4052 18.7623 25.1954 16.8796ZM26.9354 24.3733C25.2315 27.7572 22.6682 30.2896 19.3159 31.9005C18.8734 32.1141 18.3227 32.0717 17.9191 31.7942C13.612 28.8347 11.8963 26.7413 9.72468 24.0908C8.36272 22.4284 6.81877 20.5444 4.38058 18.1688C4.01502 17.8036 3.91893 17.2484 4.15231 16.8484C4.53343 16.1938 5.37084 16.132 5.8479 16.6083C5.8479 16.6083 5.84858 16.6086 5.84885 16.6089L10.3201 21.0805C10.5755 21.3359 10.9893 21.3359 11.2447 21.0805C11.5001 20.8251 11.5001 20.4113 11.2447 20.1559C11.1599 20.0711 5.1706 14.0818 3.93839 12.8496C3.50707 12.418 3.45184 11.7261 3.80941 11.3143C4.20816 10.8696 4.95651 10.8392 5.3757 11.2584L12.7589 18.6416C13.0143 18.897 13.4281 18.8971 13.6835 18.6416C13.9389 18.3862 13.9389 17.9725 13.6835 17.7171L7.63 11.6636L7.62744 11.661C7.21136 11.2423 7.2091 10.5651 7.62489 10.1493C8.0262 9.74832 8.7423 9.74832 9.14425 10.1493C10.9274 11.9332 12.3374 13.3425 15.1978 16.2028C15.4532 16.4582 15.8669 16.4582 16.1223 16.2028C16.3777 15.9474 16.3777 15.5336 16.1223 15.2782L11.6511 10.8073C11.6508 10.807 11.6507 10.8066 11.6504 10.8064C11.2344 10.3904 11.2344 9.71321 11.6501 9.29721C12.0588 8.88855 12.7679 8.89558 13.1644 9.2921L19.5986 15.7263C18.9326 17.6918 18.6656 21.3437 21.7694 23.4938C22.0683 23.7003 22.4747 23.6234 22.6793 23.3284C22.8849 23.0315 22.8108 22.6244 22.5139 22.4185C19.0867 20.0445 21.0311 15.7979 21.0099 15.5129L20.6453 10.5471C20.5508 9.28319 21.2679 8.09904 22.4239 7.59236C22.6001 7.51605 22.8456 7.60129 22.8725 7.83946L23.896 17.0246C24.1383 19.201 25.1248 21.2526 26.6736 22.8016C27.0925 23.2202 27.1975 23.852 26.9354 24.3733Z"
                        fill="#293C66"
                      />
                      <path
                        d="M24.4375 0.653839C24.0764 0.653839 23.7837 0.946599 23.7837 1.30769C23.7837 1.66877 24.0764 1.96153 24.4375 1.96153C28.5394 1.96153 31.8763 5.29813 31.8763 9.39935C31.8763 9.76044 32.169 10.0532 32.5301 10.0532C32.8912 10.0532 33.184 9.76044 33.184 9.39935C33.184 4.57692 29.2603 0.653839 24.4375 0.653839Z"
                        fill="#293C66"
                      />
                      <path
                        d="M9.56155 31.7131C5.46032 31.7131 2.12372 28.3765 2.12372 24.2753C2.12372 23.9142 1.83097 23.6215 1.46988 23.6215C1.10879 23.6215 0.816032 23.9142 0.816032 24.2753C0.816032 29.0977 4.73911 33.0208 9.56155 33.0208C9.92263 33.0208 10.2154 32.7281 10.2154 32.367C10.2154 32.0059 9.92263 31.7131 9.56155 31.7131Z"
                        fill="#293C66"
                      />
                      <path
                        d="M23.7916 4.03993C23.4306 4.03993 23.1378 4.33269 23.1378 4.69378C23.1378 5.05487 23.4306 5.34763 23.7916 5.34763C26.3821 5.34763 28.4896 7.45506 28.4896 10.0455C28.4896 10.4066 28.7823 10.6994 29.1434 10.6994C29.5045 10.6994 29.7973 10.4066 29.7973 10.0455C29.7973 6.73417 27.103 4.03993 23.7916 4.03993Z"
                        fill="#293C66"
                      />
                      <path
                        d="M10.2077 28.3271C7.61756 28.3271 5.51044 26.2196 5.51044 23.6294C5.51044 23.2684 5.21768 22.9756 4.8566 22.9756C4.49551 22.9756 4.20275 23.2684 4.20275 23.6294C4.20275 26.9408 6.89668 29.6347 10.2077 29.6347C10.5688 29.6347 10.8616 29.342 10.8616 28.9809C10.8616 28.6198 10.5688 28.3271 10.2077 28.3271Z"
                        fill="#293C66"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_284">
                        <rect width="34" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Hi Hanuman!
                </h2>
                <span class="mb-2.5 block">it’s good to see you again.</span>
                <h6 class="mb-[33px] text-primary">
                  Clock your daily task & Schedules
                </h6>
                <a
                  href="javascript:void(0);"
                  class="btn bg-light"
                  @click="open.show1 = true"
                  ><svg
                    class="me-1"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.40761 14.1966H10.7174V10.7382H14.1966V9.42844H10.7174V5.80344H9.40761V9.42844H5.80344V10.7382H9.40761V14.1966ZM10.0062 18.4579C8.83676 18.4579 7.73925 18.2365 6.71371 17.7938C5.68817 17.351 4.79123 16.7454 4.0229 15.9771C3.25456 15.2088 2.64901 14.3115 2.20625 13.2854C1.7635 12.2593 1.54213 11.1609 1.54213 9.99027C1.54213 8.81962 1.7635 7.72101 2.20625 6.69444C2.64901 5.66785 3.2543 4.77378 4.02211 4.01221C4.78992 3.25065 5.68702 2.64775 6.71338 2.2035C7.73975 1.75925 8.8384 1.53712 10.0093 1.53712C11.1802 1.53712 12.2792 1.75913 13.3062 2.20313C14.3331 2.64711 15.2273 3.24967 15.9886 4.01079C16.7499 4.77192 17.3526 5.66694 17.7967 6.69585C18.2408 7.72479 18.4629 8.82432 18.4629 9.99446C18.4629 11.1644 18.2408 12.2621 17.7965 13.2876C17.3523 14.3131 16.7493 15.2085 15.9878 15.9739C15.2262 16.7393 14.3313 17.3446 13.3029 17.7899C12.2746 18.2352 11.1757 18.4579 10.0062 18.4579ZM10.0104 17.0385C11.9624 17.0385 13.6218 16.3527 14.9885 14.9812C16.3552 13.6096 17.0385 11.9458 17.0385 9.98958C17.0385 8.0376 16.3565 6.37825 14.9924 5.01154C13.6283 3.64485 11.9633 2.9615 9.9975 2.9615C8.05079 2.9615 6.39145 3.64355 5.01948 5.00765C3.64749 6.37174 2.9615 8.0367 2.9615 10.0025C2.9615 11.9492 3.64728 13.6086 5.01883 14.9805C6.39039 16.3525 8.05425 17.0385 10.0104 17.0385Z"
                      fill="#6F767E"
                    />
                  </svg>
                  Add Task</a
                >
              </div>
              <img
                src="assets/images/pic1.png"
                class="absolute -right-2 light-pic"
                alt=""
              />
              <img
                src="assets/images/pic2.png"
                class="absolute -right-2 dark-pic"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 col-span-12">
          <div class="card">
            <div
              class="relative py-4.5 px-5 flex justify-between items-center flex-wrap statistics"
            >
              <h4 class="text-base">Income Statistics</h4>
              <span
                class="badge bg-successlight text-success !py-1.1 rounded-lg"
                >+10%</span
              >
            </div>
            <div class="sm:p-5 p-4 !pb-0 custome-tooltip">
              <div id="chartBar" class="chartBar mt-[-21px]">
                <ClientOnly>
                  <VueApexCharts
                    height="150px"
                    :series="state.series"
                    :options="state.options"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 col-span-12 custom-responsive">
          <div class="card">
            <div
              class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap team-payment"
            >
              <h4 class="text-base">Team <br />Payments</h4>
              <div
                class="size-10 relative inline-block text-center leading-[2.5] border border-border rounded-lg duration-300 hover:bg-primary group"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover:fill-white duration-300"
                    d="M12.5 22.5C13.6 22.5 14.5 21.6 14.5 20.5H10.5C10.5 21.6 11.39 22.5 12.5 22.5ZM18.5 16.5V11.5C18.5 8.43 16.86 5.86 14 5.18V4.5C14 3.67 13.33 3 12.5 3C11.67 3 11 3.67 11 4.5V5.18C8.13 5.86 6.5 8.42 6.5 11.5V16.5L4.5 18.5V19.5H20.5V18.5L18.5 16.5Z"
                    fill="var(--secondary)"
                  />
                </svg>
              </div>
            </div>
            <div class="sm:p-5 p-4 !pt-4">
              <span class="flex">
                <svg
                  class="me-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1903 13.875C10.6801 13.875 10.25 13.6989 9.90003 13.3466C9.55003 12.9943 9.37503 12.563 9.37503 12.0528C9.37503 11.5426 9.55117 11.1125 9.90346 10.7625C10.2557 10.4125 10.687 10.2375 11.1972 10.2375C11.7074 10.2375 12.1375 10.4136 12.4875 10.7659C12.8375 11.1182 13.0125 11.5495 13.0125 12.0597C13.0125 12.5699 12.8364 13 12.4841 13.35C12.1318 13.7 11.7006 13.875 11.1903 13.875ZM3.41538 16.6121C3.07039 16.6121 2.77123 16.4854 2.51791 16.2321C2.2646 15.9788 2.13794 15.6796 2.13794 15.3347V3.79035C2.13794 3.44414 2.2646 3.14393 2.51791 2.88973C2.77123 2.63552 3.07039 2.50842 3.41538 2.50842H4.59378V1.38342H5.88875V2.50842H12.1113V1.38342H13.4063V2.50842H14.5847C14.9309 2.50842 15.2311 2.63552 15.4853 2.88973C15.7395 3.14393 15.8666 3.44414 15.8666 3.79035V15.3347C15.8666 15.6796 15.7395 15.9788 15.4853 16.2321C15.2311 16.4854 14.9309 16.6121 14.5847 16.6121H3.41538ZM3.41538 15.3347H14.5847V7.3125H3.41538V15.3347ZM3.41538 6.1875H14.5847V3.79035H3.41538V6.1875Z"
                    fill="var(--primary)"
                  />
                </svg>
                14 July Approval
              </span>
              <div class="mt-14.5 flex">
                <img
                  src="assets/images/pic1.jpg"
                  class="size-10 -me-2.5 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 rounded-full"
                  alt=""
                />
                <img
                  src="assets/images/pic2.jpg"
                  class="size-10 -me-2.5 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 rounded-full"
                  alt=""
                />
                <img
                  src="assets/images/pic3.jpg"
                  class="size-10 -me-2.5 object-cover inline-block relative hover:z-1 duration-500 border-2 border-white dark:border-white/20 rounded-full"
                  alt=""
                />
                <span
                  class="size-10 -me-2.5 leading-10 text-center object-cover inline-block relative hover:z-1 duration-500 rounded-full bg-[#F9F9FB] text-black"
                  >14+</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 sm:col-span-6 col-span-12">
          <div class="card !bg-info">
            <div
              class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <div>
                <h4 class="card-title text-white">Refferals</h4>
                <span class="text-white opacity-60"
                  >Last 30 days Refferals</span
                >
              </div>
            </div>
            <div class="sm:p-5 p-4 !pb-0">
              <div id="pieChart1">
                <ClientOnly>
                  <VueApexCharts
                    height="180px"
                    :series="state2.series"
                    :options="state2.options"
                  />
                </ClientOnly>
              </div>
              <div
                class="absolute top-6.1 left-[22px] pointer-events-none max-2xl:hidden"
              >
                <div
                  class="flex items-center justify-between w-[216px] max-xl:w-[184px] mb-20"
                >
                  <h5 class="text-2xs">25%</h5>
                  <h5 class="text-2xs">29%</h5>
                </div>
                <div
                  class="flex items-center justify-between w-[216px] max-xl:w-[184px]"
                >
                  <h5 class="text-2xs">33%</h5>
                  <h5 class="text-2xs">13%</h5>
                </div>
              </div>
            </div>
            <div class="px-5 pb-4">
              <div class="flex justify-between mb-2">
                <div class="text-white">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="4" fill="#7BDFFF" />
                  </svg>
                  By Email
                </div>
                <div class="text-white">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="4" fill="#FFFFFF" />
                  </svg>
                  By Phone
                </div>
              </div>
              <div class="flex justify-between">
                <div class="text-white">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="4" fill="#B4EDFF" />
                  </svg>
                  On Site
                </div>
                <div class="text-white">
                  <svg
                    class="me-2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="4" fill="#018DB9" />
                  </svg>
                  By Agent
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-6 md:col-span-6 col-span-12">
          <div class="card overflow-hidden">
            <div
              class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Revenue Updates</h4>
              <OptionSelect
                class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                :options="[
                  { lable: 'Yearly' },
                  { lable: 'Weekly' },
                  { lable: 'Monthly' },
                ]"
              />
            </div>
            <div class="sm:px-5 px-4 custome-tooltip">
              <div id="earningChart">
                <ClientOnly>
                  <VueApexCharts
                    height="250px"
                    :series="state3.series"
                    :options="state3.options"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
        <div
          class="xl:col-span-3 md:col-span-6 col-span-12 max-xl:order-1 max-md:!order-none"
        >
          <div class="card !bg-[#FFDEDE]">
            <div class="sm:p-5 p-4">
              <div class="mt-5" x-data="{ open: false }">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_274)">
                    <path
                      d="M30.9248 52.8329C29.687 56.6186 28.0605 60.088 26.0652 63.1859C25.391 64.3039 23.6096 64.2626 22.9934 63.1096L20.0641 58.03L12.6016 60.5568C10.9849 61.1637 9.50084 59.0947 10.595 57.7588C12.9579 54.6657 14.7746 51.3664 16.0222 47.9083C18.3628 49.4258 21.2141 49.8959 23.9398 49.5098C25.8289 51.4278 28.2781 52.5866 30.9248 52.8329Z"
                      fill="black"
                    />
                    <path
                      d="M53.4374 59.9004C52.9762 60.5442 52.1484 60.8106 51.3983 60.5568L43.9358 58.03L41.0066 63.1096C40.3904 64.2629 38.609 64.3036 37.9348 63.1859C35.9394 60.0879 34.3129 56.6186 33.0752 52.8329C35.7219 52.5866 38.1711 51.4276 40.0614 49.5098C42.7855 49.896 45.6381 49.4254 47.9778 47.9083C49.2256 51.3665 51.0421 54.6657 53.4049 57.7588C53.8863 58.3877 53.9001 59.2566 53.4374 59.9004Z"
                      fill="black"
                    />
                    <path
                      d="M32 13.3773C25.8451 13.3773 20.838 18.3969 20.838 24.5668C20.838 30.7366 25.8451 35.7562 32 35.7562C38.1548 35.7562 43.162 30.7366 43.162 24.5668C43.162 18.3969 38.1548 13.3773 32 13.3773ZM37.9435 22.9328L32.0387 28.85C31.3391 29.5774 30.0824 29.58 29.3833 28.85L26.0564 25.5169C25.3251 24.7831 25.3263 23.5953 26.0589 22.8639C26.7898 22.1302 27.9884 22.1389 28.7106 22.8664L30.711 24.8705L32 23.579L35.2893 20.2833C36.0109 19.5446 37.2337 19.5586 37.941 20.2808C38.6736 21.0124 38.6749 22.2001 37.9435 22.9328ZM32 13.3773C25.8451 13.3773 20.838 18.3969 20.838 24.5668C20.838 30.7366 25.8451 35.7562 32 35.7562C38.1548 35.7562 43.162 30.7366 43.162 24.5668C43.162 18.3969 38.1548 13.3773 32 13.3773ZM37.9435 22.9328L32.0387 28.85C31.3391 29.5774 30.0824 29.58 29.3833 28.85L26.0564 25.5169C25.3251 24.7831 25.3263 23.5953 26.0589 22.8639C26.7898 22.1302 27.9884 22.1389 28.7106 22.8664L30.711 24.8705L32 23.579L35.2893 20.2833C36.0109 19.5446 37.2337 19.5586 37.941 20.2808C38.6736 21.0124 38.6749 22.2001 37.9435 22.9328ZM54.844 22.8027C55.7816 20.9874 55.9504 18.9158 55.3191 16.9717C54.6878 15.0301 53.3363 13.456 51.5147 12.5398C50.407 11.9835 49.6344 10.9183 49.4481 9.68929C49.1418 7.66643 48.0616 5.8899 46.4076 4.68841C44.7573 3.48942 42.7407 3.01191 40.7291 3.34438C39.5189 3.54444 38.26 3.14182 37.3897 2.25668C35.9557 0.801366 34.0416 0 32 0C29.9584 0 28.0443 0.801366 26.6104 2.25668C25.7402 3.13932 24.4925 3.54569 23.271 3.34438C21.2594 3.01178 19.2428 3.48942 17.5925 4.68841C15.9385 5.8899 14.8583 7.66643 14.552 9.68929C14.3657 10.9183 13.5931 11.9835 12.4854 12.5398C10.6638 13.4562 9.31227 15.0301 8.68096 16.9717C8.04964 18.9158 8.21844 20.9874 9.1561 22.804C9.72615 23.9079 9.72615 25.2257 9.1561 26.3308C8.21844 28.1461 8.04964 30.2177 8.68096 32.1618C9.31227 34.1034 10.6638 35.6775 12.4854 36.5938C13.5931 37.15 14.3657 38.2152 14.552 39.4442C14.8583 41.4671 15.9385 43.2436 17.5925 44.4451C19.2428 45.6441 21.2594 46.1216 23.271 45.7891C24.4925 45.5878 25.7401 45.9942 26.6104 46.8768C28.0444 48.3322 29.9584 49.1335 32 49.1335C34.0416 49.1335 35.9557 48.3322 37.3897 46.8768C38.2599 45.9942 39.5076 45.5878 40.7291 45.7891C42.7407 46.1217 44.7573 45.6441 46.4076 44.4451C48.0616 43.2436 49.1418 41.4671 49.4481 39.4442C49.6344 38.2152 50.407 37.15 51.5147 36.5938C53.3363 35.6773 54.6878 34.1034 55.3191 32.1618C55.9504 30.2177 55.7816 28.1461 54.844 26.3295C54.2738 25.2256 54.2738 23.9079 54.844 22.8027ZM32 39.5069C23.7772 39.5069 17.0874 32.8045 17.0874 24.5668C17.0874 16.329 23.7772 9.62664 32 9.62664C40.2227 9.62664 46.9126 16.329 46.9126 24.5668C46.9126 32.8045 40.2227 39.5069 32 39.5069ZM32 13.3773C25.8451 13.3773 20.838 18.3969 20.838 24.5668C20.838 30.7366 25.8451 35.7562 32 35.7562C38.1548 35.7562 43.162 30.7366 43.162 24.5668C43.162 18.3969 38.1548 13.3773 32 13.3773ZM37.9435 22.9328L32.0387 28.85C31.3391 29.5774 30.0824 29.58 29.3833 28.85L26.0564 25.5169C25.3251 24.7831 25.3263 23.5953 26.0589 22.8639C26.7898 22.1302 27.9884 22.1389 28.7106 22.8664L30.711 24.8705L35.2892 20.2835C36.0108 19.5448 37.2335 19.5588 37.9409 20.281C38.6736 21.0124 38.6749 22.2001 37.9435 22.9328Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_274">
                      <rect width="64" height="64" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 class="mt-4 mb-2 text-lg w-[200px] dark:!text-black">
                  Upgrade your Account to premium
                </h3>
                <span class="font-medium">To get premium feature</span>

                <button
                  type="button"
                  class="btn bg-secondary text-white mt-12"
                  @click="open.show2 = true"
                >
                  Upgrade Now
                </button>
                <Transition
                  v-cloak
                  v-show="open.show2"
                  enter-active-class="transition ease-in duration-800"
                  enter-from-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition ease-in duration-500"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <div
                    class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                  >
                    <div
                      class="modal-dialog modal-dialog-center !max-w-[1140px] modal-xl rounded-lg bg-card"
                      @click.away="open.show2 = false"
                    >
                      <div
                        class="modal-content mx-2.5 flex flex-col relative rounded-md bg-card w-full pointer-events-auto"
                      >
                        <div
                          class="modal-header flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2]"
                        >
                          <button
                            type="button"
                            class="btn-close p-4 text-xs"
                            @click="open.show2 = false"
                          ></button>
                        </div>
                        <div
                          class="modal-body relative p-7.5 pt-0"
                          x-data="{ tab: 'pills-year' }"
                        >
                          <div class="text-center">
                            <h2>
                              Choose the plans that’s perfect for your business.
                            </h2>
                            <p class="mb-4">
                              Donec ligula ligula, porta at urna non, faucibus
                              congue urna. Nullam nulla purus, facilisis vitae
                              odio ac, tempus aliquet dolor.
                            </p>
                          </div>
                          <div class="flex justify-center mb-5">
                            <ul
                              class="nav nav-pills flex flex-wrap"
                              id="pills-tab2"
                              role="tablist"
                            >
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link mx-1 rounded-lg py-2.5 px-3.6 text-2xs text-primary duration-500"
                                  :class="{
                                    'bg-primary text-white':
                                      tab == 'pills-year',
                                  }"
                                  @click.prevent="tab = 'pills-year'"
                                  href="javascript:void(0);"
                                >
                                  Yearly
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link mx-1 rounded-lg py-2.5 px-3.6 text-2xs text-primary duration-500"
                                  :class="{
                                    'bg-primary text-white':
                                      tab == 'pills-month',
                                  }"
                                  @click.prevent="tab = 'pills-month'"
                                  href="javascript:void(0);"
                                >
                                  Monthly
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div class="row">
                            <div
                              class="tab-content-area"
                              id="pills-tabContent1"
                            >
                              <div
                                x-show="tab == 'pills-year'"
                                x-transition:enter="transition-all duration-500 easy-in-out"
                                x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                              >
                                <div class="row">
                                  <div class="xl:w-1/3 lg:w-1/2">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Standard</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $12
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Year</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="xl:w-1/3 lg:w-1/2">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Premium</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $25
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Year</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Basic customer support
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Featured ads
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="xl:w-1/3">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Business</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $200
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Year</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Basic customer support
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Featured ads
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Special ads badge
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Call to Action in Every Ads
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                x-show="tab == 'pills-month'"
                                x-transition:enter="transition-all duration-500 easy-in-out"
                                x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                              >
                                <div class="row">
                                  <div class="xl:w-1/3 lg:w-1/2">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Standard</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $08
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Month</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="xl:w-1/3 lg:w-1/2">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Premium</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $20
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Month</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Basic customer support
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Featured ads
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="xl:w-1/3">
                                    <div
                                      class="card upgrad-plan min-h-[530px] group duration-500 hover:shadow-[0px_12px_56px_0px_#061c3d1f]"
                                    >
                                      <div class="sm:p-5 p-4 flex-auto">
                                        <div class="text-center">
                                          <span
                                            class="inline-block font-medium leading-normal rounded-lg text-xs py-1.1 px-3 bg-infolight text-info"
                                            >Business</span
                                          >
                                          <div
                                            class="flex items-baseline justify-center m-prise border-b border-border mb-5 py-3"
                                          >
                                            <h4
                                              class="text-3xl font-bold text-primary dark:text-white"
                                            >
                                              $50
                                            </h4>
                                            <span class="text-2xs"
                                              >/Per Month</span
                                            >
                                          </div>
                                          <ul class="prise-list">
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              User Dashboard
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Post 3 Ads per week
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Multiple images & videos
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Basic customer support
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Featured ads
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Special ads badge
                                            </li>
                                            <li class="text-start p-2.5">
                                              <svg
                                                class="mr-2"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  width="24"
                                                  height="24"
                                                  rx="12"
                                                  fill="#F0F5FF"
                                                />
                                                <path
                                                  d="M16.8125 8.93774L10.6875 15.0625L7.625 12.0002"
                                                  stroke="#0B63E5"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                              Call to Action in Every Ads
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="text-center py-4 px-7.5">
                                        <a
                                          href="javascript:void(0);"
                                          class="btn border-primarylight text-primary bg-primarylight group-hover:text-white group-hover:bg-primary w-full block"
                                          >Choose plans<i
                                            class="fa-solid fa-arrow-right ml-2"
                                          ></i
                                        ></a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border"
                        >
                          <button
                            @click="open.show2 = false"
                            type="button"
                            class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                          >
                            Close
                          </button>
                          <button
                            @click="open.show2 = false"
                            type="button"
                            class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
        <Charts />
        <div class="xl:col-span-9 col-span-12">
          <div class="card">
            <div
              class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Invoice List</h4>
              <div>
                <span class="text-xs font-semibold">SHORT BY</span>
                <OptionSelect
                  class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                  :options="[
                    { lable: 'Yearly' },
                    { lable: 'Weekly' },
                    { lable: 'Monthly' },
                  ]"
                />
              </div>
            </div>
            <div class="sm:px-5 px-4">
              <ClientOnly>
                <Table />
              </ClientOnly>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 md:col-span-6 col-span-12">
          <div class="card !bg-secondary dark:!bg-d-bg !h-auto">
            <div
              class="relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <div>
                <h4 class="text-white">Statistics</h4>
                <span class="text-white opacity-70">Last 30 days Income</span>
              </div>
            </div>
            <div class="sm:p-5 p-4 custome-tooltip !pb-0">
              <div id="chartTimeline" class="-mt-11">
                <ClientOnly>
                  <VueApexCharts
                    height="250px"
                    :series="state4.series"
                    :options="state4.options"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition
    v-cloak
    v-show="open.show1"
    enter-active-class="transition ease-in duration-800"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
    >
      <div
        class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
        @click.away="open.show1 = false"
      >
        <div
          class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
        >
          <div
            class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
          >
            <h5 class="modal-title" id="exampleModalLabel-2">Add new task</h5>
            <button
              type="button"
              class="btn-close p-2 text-xs dark:invert"
              @click="open.show1 = false"
            ></button>
          </div>
          <div class="relative p-7.5">
            <form>
              <label class="block mb-2">Summary:</label>
              <input
                type="text"
                class="py-1.5 px-3 bg-card leading-normal text-2xs h-11 rounded-lg border border-border w-full mb-4"
                placeholder="As a user i need set m"
              />

              <label class="block mb-2">Assigned:</label>
              <input
                type="text"
                class="py-1.5 px-3 bg-card leading-normal text-2xs h-11 rounded-lg border border-border w-full mb-4"
                placeholder="Only my task"
              />

              <label class="block mb-2">Tag:</label>
              <input
                type="text"
                class="py-1.5 px-3 bg-card leading-normal text-2xs h-11 rounded-lg border border-border w-full mb-4"
                placeholder="Add tags"
              />

              <label class="block mb-2">Description:</label>
              <textarea
                class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </form>
          </div>
          <div
            class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border"
          >
            <button
              @click="open.show1 = false"
              type="button"
              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
            >
              Close
            </button>
            <button
              @click="open.show1 = false"
              type="button"
              class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
