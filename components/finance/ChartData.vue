<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

const state = {
  series: [
    {
      name: "Running",
      data: [50, 90, 90],
      //radius: 12,
    },
    {
      name: "Cycling",
      data: [50, 60, 55],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 120,

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
    colors: ["#F8B940", "#FFFFFF"],
    dataLabels: {
      enabled: false,
      offsetY: -30,
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
        strokeWidth: 8,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
      },
    },
    stroke: {
      show: true,
      width: 5,
      dashArray: 0,
      curve: "smooth",
      lineCap: "round",
      colors: ["transparent"],
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY"],
      labels: {
        show: false,
        style: {
          colors: "#A5AAB4",
          fontSize: "14px",
          fontWeight: "500",
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
        show: false,
        offsetX: -16,
        style: {
          colors: "#000000",
          fontSize: "13px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  },
};

const state2 = {
  series: [
    {
      name: "Running",
      data: [40, 80, 70],
      //radius: 12,
    },
    {
      name: "Cycling",
      data: [60, 30, 70],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 120,

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
    colors: ["#FFFFFF", "#222B40"],
    dataLabels: {
      enabled: false,
      offsetY: -30,
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
        strokeWidth: 8,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,
      },
    },
    stroke: {
      show: true,
      width: 5,
      dashArray: 0,
      curve: "smooth",
      lineCap: "round",
      colors: ["transparent"],
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY"],
      labels: {
        show: false,
        style: {
          colors: "#A5AAB4",
          fontSize: "14px",
          fontWeight: "500",
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
        show: false,
        offsetX: -16,
        style: {
          colors: "#000000",
          fontSize: "13px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  },
};

const state3 = {
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
      /* radius: 30,	 */
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 40,
      //width: 400,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["var(--primary)"],
    },

    grid: {
      show: false,
      borderColor: "#eee",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -1,
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "August",
        "Sept",
        "Oct",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.9,
      colors: "var(--primary)",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "var(--primary)",
            opacity: 0.5,
          },
          {
            offset: 0.6,
            color: "var(--primary)",
            opacity: 0.5,
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
      enabled: false,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + " thousands";
        },
      },
    },
  },
};
</script>

<template>
  <div class="xl:col-span-6 col-span-12">
    <div class="grid grid-cols-12 gap-x-6">
      <div class="xl:col-span-6 sm:col-span-6 col-span-12">
        <div class="card !bg-[#003F88] text-white">
          <div
            class="flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap"
          >
            <div class="revenue-date">
              <span>revenue</span>
              <h4 class="text-white text-2xl font-semibold">$310.435</h4>
            </div>
            <div class="avatar-list avatar-list-stacked me-2">
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
              <span
                class="bg-white text-black inline-flex justify-center text-xs size-[38px] me-[-13px] leading-[1.975rem] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                >25+</span
              >
            </div>
          </div>
          <div
            class="card-body sm:p-5 p-4 sm:pb-0 pb-0 flex flex-auto items-center custome-tooltip"
          >
            <div id="chartBar" class="chartBar -mt-10 ml-[-21px]">
              <ClientOnly>
                <VueApexCharts
                  height="120px"
                  :series="state.series"
                  :options="state.options"
                />
              </ClientOnly>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="white" />
                <g clip-path="url(#clip0_3_443)">
                  <path
                    opacity="0.3"
                    d="M13.0641 7.54535C13.3245 7.285 13.3245 6.86289 13.0641 6.60254C12.8038 6.34219 12.3817 6.34219 12.1213 6.60254L6.46445 12.2594C6.2041 12.5197 6.2041 12.9419 6.46445 13.2022C6.7248 13.4626 7.14691 13.4626 7.40726 13.2022L13.0641 7.54535Z"
                    fill="black"
                  />
                  <path
                    d="M7.40729 7.26921C7.0391 7.26921 6.74062 6.97073 6.74062 6.60254C6.74062 6.23435 7.0391 5.93587 7.40729 5.93587H13.0641C13.4211 5.93587 13.7147 6.21699 13.7302 6.57358L13.9659 11.9947C13.9819 12.3626 13.6966 12.6737 13.3288 12.6897C12.961 12.7057 12.6498 12.4205 12.6338 12.0526L12.4258 7.26921H7.40729Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_443">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="matrix(-1 0 0 -1 18 18)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span class="block font-semibold">45%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-6 sm:col-span-6 col-span-12">
        <div class="card !bg-warning text-white">
          <div
            class="flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap"
          >
            <div class="revenue-date">
              <span class="text-secondary">Expenses</span>
              <h4 class="text-secondary text-2xl font-semibold">$920.035</h4>
            </div>
            <div class="avatar-list avatar-list-stacked me-2">
              <span
                class="bg-white text-black justify-center text-xs inline-flex leading-[1.975rem] size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
              >
                <NuxtLink to="#">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.83333 6.27083V1.60417C5.83333 0.959834 6.35567 0.4375 7 0.4375C7.64433 0.4375 8.16667 0.959834 8.16667 1.60417V6.27083H12.8333C13.4777 6.27083 14 6.79317 14 7.4375C14 8.08183 13.4777 8.60417 12.8333 8.60417H8.16667V13.2708C8.16667 13.9152 7.64433 14.4375 7 14.4375C6.35567 14.4375 5.83333 13.9152 5.83333 13.2708V8.60417H1.16667C0.522334 8.60417 0 8.08183 0 7.4375C0 6.79317 0.522334 6.27083 1.16667 6.27083H5.83333Z"
                      fill="#222B40"
                    />
                  </svg>
                </NuxtLink>
              </span>
            </div>
          </div>
          <div
            class="card-body sm:p-5 p-4 sm:pb-0 pb-0 flex flex-auto items-center custome-tooltip"
          >
            <div id="expensesChart" class="chartBar -mt-10 ml-[-21px]">
              <ClientOnly>
                <VueApexCharts
                  height="120px"
                  :series="state2.series"
                  :options="state2.options"
                />
              </ClientOnly>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#222B40" />
                <g clip-path="url(#clip0_3_473)">
                  <path
                    opacity="0.3"
                    d="M13.0641 7.54535C13.3245 7.285 13.3245 6.86289 13.0641 6.60254C12.8038 6.34219 12.3817 6.34219 12.1213 6.60254L6.46446 12.2594C6.20411 12.5197 6.20411 12.9419 6.46446 13.2022C6.72481 13.4626 7.14692 13.4626 7.40727 13.2022L13.0641 7.54535Z"
                    fill="white"
                  />
                  <path
                    d="M7.40728 7.26921C7.03909 7.26921 6.74061 6.97073 6.74061 6.60254C6.74061 6.23435 7.03909 5.93587 7.40728 5.93587H13.0641C13.4211 5.93587 13.7147 6.21699 13.7302 6.57358L13.9659 11.9947C13.9819 12.3626 13.6966 12.6737 13.3288 12.6897C12.9609 12.7057 12.6498 12.4205 12.6338 12.0526L12.4258 7.26921H7.40728Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3_473">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="matrix(-1 0 0 -1 18 18)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span class="block font-semibold text-secondary">45%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-6 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="card-body depostit-card p-5">
            <div
              class="depostit-card-media flex justify-between relative z-[2]"
            >
              <div>
                <h6 class="font-normal">Tasks Not Finisheds</h6>
                <h3 class="font-semibold leading-[1.346]">20</h3>
              </div>
              <div
                class="icon-box bg-warning size-10 relative flex items-center justify-center rounded-md"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_566)">
                    <path
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3V3.5C8 4.32843 8.67157 5 9.5 5H14.5C15.3284 5 16 4.32843 16 3.5V3H18C19.1046 3 20 3.89543 20 5V21C20 22.1046 19.1046 23 18 23H6C4.89543 23 4 22.1046 4 21V5C4 3.89543 4.89543 3 6 3H8Z"
                      fill="#222B40"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.875 15.75C10.6354 15.75 10.3958 15.6542 10.2042 15.4625L8.2875 13.5458C7.90417 13.1625 7.90417 12.5875 8.2875 12.2042C8.67083 11.8208 9.29375 11.8208 9.62917 12.2042L10.875 13.45L14.0375 10.2875C14.4208 9.90417 14.9958 9.90417 15.3792 10.2875C15.7625 10.6708 15.7625 11.2458 15.3792 11.6292L11.5458 15.4625C11.3542 15.6542 11.1146 15.75 10.875 15.75Z"
                      fill="#222B40"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2H14.5C14.7761 2 15 2.22386 15 2.5V3.5C15 3.77614 14.7761 4 14.5 4H9.5C9.22386 4 9 3.77614 9 3.5V2.5C9 2.22386 9.22386 2 9.5 2H11Z"
                      fill="#222B40"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3_566">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="progress-box mt-0">
              <div class="flex justify-between">
                <p>Complete Task</p>
                <p>20/28</p>
              </div>
              <div class="progress h-[5px] flex overflow-hidden rounded-md">
                <div
                  class="progress-bar bg-warning"
                  style="width: 50%; height: 5px; border-radius: 4px"
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-6 sm:col-span-6 col-span-12">
        <div class="card chart-grd same-card overflow-hidden relative">
          <div class="card-body depostit-card p-0">
            <div
              class="depostit-card-media flex justify-between px-5 pt-4.5 relative z-1"
            >
              <div>
                <h6 class="font-normal">Total Deposit</h6>
                <h3 class="font-semibold leading-[1.346]">$1200.00</h3>
              </div>
              <div
                class="icon-box bg-primary text-white size-10 relative flex items-center justify-center rounded-md"
              >
                <svg
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4642 13.7074C11.4759 12.1252 10.8504 10.8738 9.60279 9.99009C8.6392 9.30968 7.46984 8.95476 6.33882 8.6137C3.98274 7.89943 3.29927 7.52321 3.29927 6.3965C3.29927 5.14147 4.93028 4.69493 6.32655 4.69493C7.34341 4.69493 8.51331 5.01109 9.23985 5.47964L10.6802 3.24887C9.73069 2.6333 8.43112 2.21342 7.14783 2.0831V0H4.49076V2.22918C2.12884 2.74876 0.640949 4.29246 0.640949 6.3965C0.640949 7.87005 1.25327 9.03865 2.45745 9.86289C3.37331 10.4921 4.49028 10.83 5.56927 11.1572C7.88027 11.8557 8.81873 12.2813 8.80805 13.691L8.80799 13.7014C8.80799 14.8845 7.24005 15.3051 5.89676 15.3051C4.62786 15.3051 3.248 14.749 2.46582 13.9222L0.535522 15.7481C1.52607 16.7957 2.96523 17.5364 4.4907 17.8267V20.0001H7.14783V17.8735C9.7724 17.4978 11.4616 15.9177 11.4642 13.7074Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
            <div id="NewExperience">
              <ClientOnly>
                <VueApexCharts
                  height="40px"
                  :series="state3.series"
                  :options="state3.options"
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
