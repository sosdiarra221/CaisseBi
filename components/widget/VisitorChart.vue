<script lang="ts" setup>
const tab = ref<string>("home-tab");

import VueApexCharts from "vue3-apexcharts";

const state = reactive({
  series: [
    {
      name: "bar chart",
      data: [35, 48, 25, 35, 40, 24, 30, 25, 22, 20, 45, 35],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#0d99ff",
      },
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: "#0d99ff",
    },
    chart: {
      type: "bar",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["#256efa"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
      labels: {
        formatter: (val: number) => {
          return `${val}`;
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
  },
});

watch(
  () => tab.value,
  (value) => {
    switch (value) {
      case "home-tab":
        state.series[0].data = [35, 48, 25, 35, 40, 24, 30, 25, 22, 20, 45, 35];
        break;
      case "profile-tab":
        state.series[0].data = [50, 35, 35, 45, 40, 50, 60, 80, 25, 50, 34, 35];
        break;
      case "contact-tab":
        state.series[0].data = [20, 35, 60, 45, 40, 70, 30, 80, 65, 70, 60, 35];
        break;
      default:
        break;
    }
  }
);
</script>

<template>
  <div id="user-activity" class="card dz-tab-area" x-data="{ tab: 'home-tab' }">
    <div
      class="sm:flex justify-between items-center sm:pt-6 pt-5 sm:px-5 px-4 relative z-[2] block"
    >
      <h4 class="text-base">Visitor Activity</h4>
      <div class="card-action sm:mb-0 my-2">
        <ul
          class="nav nav-tabs flex flex-wrap border-b border-border boder-tabs"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              href="javascript:void(0);"
              class="py-2 px-4 block -mb-0.5 font-medium border border-transparent rounded-t-lg text-primary duration-500 border-t-border bg-card"
              id="home-tab"
              :class="{
                'border-t-border border-x-border bg-card': tab == 'home-tab',
              }"
              @click.prevent="tab = 'home-tab'"
              >Day</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="javascript:void(0);"
              class="py-2 px-4 block -mb-0.5 font-medium border border-transparent rounded-t-lg text-primary duration-500"
              id="profile-tab"
              :class="{
                'border-t-border border-x-border bg-card': tab == 'profile-tab',
              }"
              @click.prevent="tab = 'profile-tab'"
              >Month</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="javascript:void(0);"
              class="py-2 px-4 block -mb-0.5 font-medium border border-transparent rounded-t-lg text-primary duration-500"
              id="contact-tab"
              :class="{
                'border-t-border border-x-border bg-card': tab == 'contact-tab',
              }"
              @click.prevent="tab = 'contact-tab'"
            >
              Year</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="sm:p-5 p-4 flex-auto">
      <div class="tab-content-area">
        <div class="show active" id="user" role="tabpanel">
          <div id="activity" class="chartjs">
            <ClientOnly>
              <VueApexCharts
                height="300px"
                :series="state.series"
                :options="state.chartOptions"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
