<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

const state = {
  series: [
    {
      name: "Sales",
      data: [28, 40, 50, 68, 30, 68, 48, 28, 20],
    },
  ],
  options: {
    labels: ["1st Week", "2st Week", "3st Week", "4st Week", "5st Week", "6st Week", "7st Week", "8st Week", "9st Week"],
    chart: {
      type: "bar",
      stacked: false,
      height: 120,
      offsetX: -8,
      offsetY: 25,

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        columnWidth: "30%",
        colors: {
          backgroundBarOpacity: 1,
        },
      },
    },
    colors: ["var(--primary)", "#000"],
    xaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#828282",
          fontSize: "14px",
          fontFamily: "Poppins",
          fontWeight: "light",
          cssClass: "apexcharts-xaxis-label",
        },
      },
      crosshairs: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    toolbar: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  },
};

const state2 = {
  series: [
    {
      name: "Net Profit",
      data: [200, 190, 200, 190, 205, 185, 200, 190],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 80,
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
    colors: ["var(--secondary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "smooth",
      colors: ["var(--secondary)"],
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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          fontSize: "8px",
        },
      },
      crosshairs: {
        show: true,
        position: "front",
        stroke: {
          width: 0,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.9,
      colors: "var(--secondary)",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "var(--secondary)",
            opacity: 0.3,
          },
          {
            offset: 0.6,
            color: "var(--secondary)",
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
  },
};

const state3 = {
  series: [12, 4, 4],
  options: {
    chart: {
      type: "donut",
      height: 100,
      width: 100,
    },
    labels: ["Mobile", "Laptop", "Cloths"],
    plotOptions: {
      pie: {
        donut: {
          size: "85%",
          labels: {
            show: true,
            name: {
              show: false,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "20px",
              fontWeight: "600",
              offsetY: 8,

              formatter: function (e: string) {
                return parseInt(e) + "M";
              },
            },
            total: {
              show: true,
              fontSize: "20px",
              fontWeight: "600",
              offsetY: -100,
              label: "",

              formatter: function (w: any) {
                var total = w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                return total + "M";
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    colors: ["#1C2430", "#01BD9B", "#738293"],
    legend: {
      position: "bottom",
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
      active: {
        filter: {
          type: "none",
        },
      },
    },
  },
};
</script>

<template>
  <div class="xl:col-span-3 md:col-span-6 col-span-12">
    <div class="card ic-chart-card">
      <div class="relative pt-4.5 px-5">
        <div class="flex justify-between">
          <h6 class="mb-0">Weekly Sales</h6>
          <span class="badge badge-sm text-success bg-successlight">+2.7%</span>
        </div>
        <span class="text-3xl">$92k</span>
      </div>
      <div>
        <div id="handleWeeklySales" class="chart-offset -mt-6">
          <ClientOnly>
            <VueApexCharts height="120px" :series="state.series" :options="state.options" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-3 md:col-span-6 col-span-12">
    <div class="card ic-chart-card">
      <div class="relative py-4.5 px-5">
        <div class="flex justify-between">
          <h6 class="mb-0">Total Order</h6>
          <span class="badge badge-sm text-info bg-infolight">+7.2%</span>
        </div>
        <span class="text-3xl">$34.2k</span>
      </div>
      <div class="pb-4">
        <div id="handleOrderChart">
          <ClientOnly>
            <VueApexCharts height="80px" :series="state2.series" :options="state2.options" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-3 md:col-span-6 col-span-12">
    <div class="card ic-chart-card">
      <div class="relative pt-4.5 px-5">
        <div class="flex justify-between">
          <h6 class="mb-0">Market Share</h6>
          <span class="badge badge-sm text-success bg-successlight">80%</span>
        </div>
        <span class="text-3xl">20M</span>
      </div>
      <div class="sm:ps-5 ps-4 flex items-center justify-between py-2 pe-1">
        <div class="clearfix">
          <div class="flex items-center mb-2">
            <svg class="me-2" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0L12.6819 4.49139L10.3206 11.7586H2.6794L0.318133 4.49139L6.5 0Z" fill="#0074FF" />
            </svg>
            <span class="text-secondary fs-13">Mobile</span>
          </div>
          <div class="flex items-center mb-2">
            <svg class="me-2" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0L12.6819 4.49139L10.3206 11.7586H2.6794L0.318133 4.49139L6.5 0Z" fill="#01BD9B" />
            </svg>
            <span class="text-secondary fs-13">Laptop</span>
          </div>
          <div class="flex items-center mb-2">
            <svg class="me-2" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0L12.6819 4.49139L10.3206 11.7586H2.6794L0.318133 4.49139L6.5 0Z" fill="#738293" />
            </svg>
            <span class="text-secondary fs-13">Cloths</span>
          </div>
        </div>
        <div id="handleMarketShare">
          <ClientOnly>
            <VueApexCharts height="100px" width="100px" :series="state3.series" :options="state3.options" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-3 md:col-span-6 col-span-12">
    <div class="card ic-chart-card">
      <div class="relative pt-4.5 px-5">
        <div class="flex justify-between">
          <h6 class="mb-0">New Customer This Month</h6>
          <span class="badge badge-sm text-success bg-successlight">15%</span>
        </div>
        <span class="text-3xl">1.2K</span>
      </div>
      <div class="py-4 px-5 border-0 mt-auto">
        <h6 class="mb-2">Today Customer</h6>
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
            <div class="size-10 leading-10 text-center object-cover inline-block relative hover:z-1 duration-500 rounded-full bg-[#F9F9FB] text-black">+4K</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
