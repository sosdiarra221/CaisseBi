<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

const tab = ref<string>("tab-week");

const state = reactive({
  series: [
    {
      name: "Revenue",
      data: [0, 52, 25, 75, 52, 100, 25],
    },
  ],
  options: {
    chart: {
      height: 220,
      type: "area",
      toolbar: false,
    },
    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["var(--primary)"],
    },
    legend: {
      show: false,
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
    fill: {
      opacity: 0.5,
      colors: "var(--primary)",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0.6,
            color: "var(--primary)",
            opacity: 0.2,
          },
          {
            offset: 0.6,
            color: "var(--primary)",
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
    grid: {
      strokeDashArray: 5,
      borderColor: "$border-color",
    },
  },
});

watch(
  () => tab.value,
  () => {
    switch (tab.value) {
      case "tab-week":
        state.series[0].data = [30, 52, 25, 75, 52, 100, 25, 45];
        break;
      case "tab-month":
        state.series[0].data = [30, 35, 45, 35, 55, 45, 35, 45];
        break;
      case "tab-year":
        state.series[0].data = [30, 40, 80, 25, 65, 40, 100, 45];
        break;
      case "tab-all":
        state.series[0].data = [30, 60, 20, 60, 45, 100, 70, 45];
        break;
      default:
        state.series[0].data = [30, 40, 75, 55, 45, 100, 35];
    }
  }
);
</script>

<template>
  <div class="card">
    <div class="border-b border-border relative py-4.5 px-5 justify-between items-center flex flex-wrap gap-2">
      <h4 class="card-title sm-mb-2">Revenue Updates</h4>
      <ul class="nav nav-tabs updates-tabs flex items-center" role="tablist">
        <li class="nav-item m-0">
          <a
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
            :class="{ 'bg-primary text-white': tab == 'tab-week' }"
            @click.prevent="tab = 'tab-week'"
            href="javascript:void(0);"
            >Week</a
          >
        </li>
        <li class="nav-item m-0">
          <a
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
            :class="{ 'bg-primary text-white': tab == 'tab-month' }"
            @click.prevent="tab = 'tab-month'"
            href="javascript:void(0);"
            >Month</a
          >
        </li>
        <li class="nav-item m-0">
          <a
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
            :class="{ 'bg-primary text-white': tab == 'tab-year' }"
            @click.prevent="tab = 'tab-year'"
            href="javascript:void(0);"
            >Year</a
          >
        </li>
        <li class="nav-item m-0">
          <a
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
            :class="{ 'bg-primary text-white': tab == 'tab-all' }"
            @click.prevent="tab = 'tab-all'"
            href="javascript:void(0);"
            data-series="all"
            >All</a
          >
        </li>
      </ul>
    </div>
    <div class="sm:pt-5 pt-4 pb-0 px-1">
      <div>
        <h4 class="text-xl ps-4">$18,217k <span class="text-xs font-bold text-success">+2.7%</span></h4>
        <div id="updates-chart">
          <ClientOnly>
            <VueApexCharts height="220px" :series="state.series" :options="state.options" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
