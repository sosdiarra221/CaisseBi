<script lang="ts" setup>
import { ref } from "vue";
import VueApexCharts from "vue3-apexcharts";

const tab = ref<string>("week");

const state = reactive({
  series: [
    {
      name: "Visitors",
      data: [90, 60, 70, 45, 40, 48, 27, 30],
    },
  ],

  options: {
    chart: {
      height: 230,
      type: "bar",
      // toolbar: false,
    },
    colors: ["var(--primary)"],
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "19%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
          fontFamily: "inter",
          color: "var(--text)",
        },
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"],
      labels: {
        style: {
          fontSize: "13px",
          fontFamily: "inter",
          color: "var(--text)",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "$border-color",
    },
  },
});

watch(
  () => tab.value,
  (from) => {
    switch (from) {
      case "week":
        state.series[0].data = [30, 52, 25, 75, 52, 100, 25, 40];
        break;
      case "month":
        state.series[0].data = [30, 35, 45, 35, 55, 45, 35, 70];
        break;
      case "year":
        state.series[0].data = [50, 40, 55, 25, 90, 40, 35, 55];
        break;
      case "all":
        state.series[0].data = [34, 60, 75, 40, 45, 60, 30, 55];
        break;
      default:
        state.series[0].data = [50, 40, 55, 25, 45, 40, 35];
    }
  }
);
</script>

<template>
  <div class="card" id="user-activity" x-data="{ tab: 'week' }">
    <div class="border-b border-border relative py-4.5 px-5 justify-between items-center flex-wrap flex">
      <h4 class="card-title">Visitors</h4>
      <ul class="nav nav-tabs visitors-tabs flex items-center">
        <li class="cursor-pointer nav-item m-0">
          <a class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs" :class="{ 'bg-primary text-white': tab == 'week' }" @click.prevent="tab = 'week'">Week</a>
        </li>
        <li class="cursor-pointer nav-item m-0">
          <a class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs" :class="{ 'bg-primary text-white': tab == 'month' }" @click.prevent="tab = 'month'">Month</a>
        </li>
        <li class="cursor-pointer nav-item m-0">
          <a class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs" :class="{ 'bg-primary text-white': tab == 'year' }" @click.prevent="tab = 'year'">Year</a>
        </li>
        <li class="cursor-pointer nav-item m-0">
          <a class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs" :class="{ 'bg-primary text-white': tab == 'all' }" @click.prevent="tab = 'all'">All</a>
        </li>
      </ul>
    </div>
    <div class="sm:p-5 p-4 !pb-0 !ps-1">
      <div class="ps-4">
        <h4 class="text-xl">70200k <span class="font-bold text-xs text-success">+2.7%</span></h4>
      </div>
      <div id="visitors-chart">
        <ClientOnly>
          <VueApexCharts height="230px" :series="state.series" :options="state.options" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
