<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

defineProps<{
  title?: string;
}>();
const tab = ref<string>("tab-Week");

const state = reactive({
  series: [
    {
      name: "Number of Projects",
      type: "column",
      data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100],
    },
    {
      name: "Revenue",
      type: "area",
      data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42],
    },
    {
      name: "Active Projects",
      type: "line",
      data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20],
    },
  ],
  options: {
    chart: {
      height: 300,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 1, 1],
      curve: "straight",
      dashArray: [0, 0, 5],
    },
    legend: {
      fontSize: "13px",
      fontFamily: "poppins",
      labels: {
        colors: "#888888",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "18%",
        borderRadius: 6,
      },
    },

    fill: {
      //opacity: [0.1, 0.1, 1],
      type: "gradient",
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        /* opacityFrom: 0.85,
						opacityTo: 0.55, */
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--primary)",
              opacity: 1,
            },
            {
              offset: 100,
              color: "var(--primary)",
              opacity: 1,
            },
          ],
          [
            {
              offset: 0,
              color: "#3AC977",
              opacity: 1,
            },
            {
              offset: 0.4,
              color: "#3AC977",
              opacity: 0.15,
            },
            {
              offset: 100,
              color: "#3AC977",
              opacity: 0,
            },
          ],
          [
            {
              offset: 0,
              color: "#FF5E5E",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#FF5E5E",
              opacity: 1,
            },
          ],
        ],
        stops: [0, 100, 100, 100],
      },
    },
    colors: ["var(--primary)", "#3AC977", "#FF5E5E"],
    labels: [
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
    markers: {
      size: 0,
    },
    xaxis: {
      type: "month",
      labels: {
        style: {
          fontSize: "13px",
          colors: "#888888",
        },
      },
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
      labels: {
        style: {
          fontSize: "13px",
          colors: "#888888",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  },
});

watch(
  () => tab.value,
  (from) => {
    switch (from) {
      case "tab-Week":
        state.series[0].data = [
          75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100,
        ];
        state.series[1].data = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
        state.series[2].data = [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20];
        break;
      case "tab-Month":
        state.series[0].data = [20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85];
        state.series[1].data = [40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 12];
        state.series[2].data = [65, 45, 25, 65, 45, 25, 75, 35, 65, 75, 15, 65];
        break;
      case "tab-Year":
        state.series[0].data = [30, 20, 80, 52, 10, 90, 50, 30, 95, 20, 60, 85];
        state.series[1].data = [40, 25, 40, 45, 85, 25, 50, 65, 45, 60, 20, 12];
        state.series[2].data = [65, 45, 30, 65, 45, 25, 75, 40, 65, 50, 15, 65];
        break;
      case "tab-All":
        state.series[0].data = [20, 50, 80, 60, 10, 80, 50, 40, 95, 20, 60, 85];
        state.series[1].data = [40, 25, 30, 45, 85, 25, 95, 65, 50, 45, 20, 12];
        state.series[2].data = [65, 45, 25, 65, 45, 25, 30, 35, 65, 75, 15, 65];
        break;
    }
  }
);
</script>

<template>
  <div class="card overflow-hidden flex flex-col">
    <div
      class="text-center flex justify-between sm:pt-6 pt-5 sm:px-5 px-4 items-center relative flex-wrap"
    >
      <h4 class="heading">{{ title }}</h4>
      <ul
        class="nav nav-pills mix-chart-tab flex flex-wrap max-sm:mt-2.5 dz-tab-area"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-primary duration-500"
            :class="{ 'bg-primary text-white': tab == 'tab-Week' }"
            @click="tab = 'tab-Week'"
            data-series="week"
            id="pills-week-tab"
          >
            Week
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-primary duration-500"
            :class="{ 'bg-primary text-white': tab == 'tab-Month' }"
            @click="tab = 'tab-Month'"
            data-series="month"
            id="pills-month-tab"
          >
            Month
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-primary duration-500"
            :class="{ 'bg-primary text-white': tab == 'tab-Year' }"
            @click="tab = 'tab-Year'"
            data-series="year"
            id="pills-year-tab"
          >
            Year
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-primary duration-500"
            :class="{ 'bg-primary text-white': tab == 'tab-All' }"
            @click="tab = 'tab-All'"
            data-series="all"
            id="pills-all-tab"
          >
            All
          </button>
        </li>
      </ul>
    </div>
    <div class="card-body relative">
      <div id="overiewChart">
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
</template>
