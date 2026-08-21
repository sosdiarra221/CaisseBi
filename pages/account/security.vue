<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import SecuritySlide from "~/components/account/SecuritySlide.vue";
import SecurityTable from "~/components/account/SecurityTable.vue";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";

const tab = ref("agents");

let chartWidth = ref<number>();

onMounted(() => {
  chartWidth.value = document.querySelector(
    "#lineChartSecuritySummary"
  )?.clientWidth;
});
const state = reactive({
  series: [
    {
      name: "Net Profit",
      data: [700, 650, 680, 590, 720, 610, 760, 530, 610],
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      height: 230,
      toolbar: {
        show: false,
      },
      offsetX: -45,
      zoom: {
        enabled: false,
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
      show: true,
      borderColor: "#eee",

      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      min: 0,
      max: 800,
      labels: {
        offsetX: 50,
      },
    },
    xaxis: {
      categories: ["May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      overwriteCategories: undefined,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        offsetX: 25,

        style: {
          fontSize: "12px",
        },
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
            color: "var(--primary)",
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
          return "$" + val + "";
        },
      },
    },
  },
});

watch(
  () => tab.value,
  (to) => {
    switch (to) {
      case "agents":
        state.series[0].data = [700, 650, 680, 590, 720, 610, 760, 530, 610];
        break;
      case "clients":
        state.series[0].data = [680, 620, 540, 680, 640, 655, 730, 580, 620];
        break;
      default:
        break;
    }
  }
);
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Security" name="Security" />
    <div class="container">
      <CommoneProfile title="Security" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="xl:col-span-6 col-span-12">
            <div class="card" x-data="{ tab: 'agents' }">
              <div
                class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap"
              >
                <h4 class="heading mb-0">Security Summary</h4>
              </div>
              <div class="sm:p-5 p-4 !pb-0">
                <div class="grid grid-cols-12 gap-x-6 mb-2">
                  <div class="sm:col-span-4 col-span-6 mb-4">
                    <div
                      class="bg-successlight rounded-lg px-4 py-2 text-center"
                    >
                      <span class="text-success">User Sign-in</span>
                      <h3 class="mb-0 font-semibold">36,899</h3>
                    </div>
                  </div>
                  <div class="sm:col-span-4 col-span-6 mb-4">
                    <div
                      class="bg-primarylight rounded-lg px-4 py-2 text-center"
                    >
                      <span class="text-primary">Admin Sign-in</span>
                      <h3 class="mb-0 font-semibold">72</h3>
                    </div>
                  </div>
                  <div class="sm:col-span-4 col-span-6 mb-4">
                    <div
                      class="bg-dangerlight rounded-lg px-4 py-2 text-center"
                    >
                      <span class="text-danger">Failed Attempts</span>
                      <h3 class="mb-0 font-semibold">291</h3>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between">
                  <h4 class="heading mb-0">Activity Chart</h4>
                  <ul
                    class="flex flex-wrap chart-summary-tab nav-pills"
                    role="tablist"
                  >
                    <li class="nav-item ms-1">
                      <a
                        class="nav-link rounded-md py-2.5 px-3.6 text-primary duration-500 hover:bg-light"
                        @click="tab = 'agents'"
                        :class="{ ' !bg-primary !text-white': tab == 'agents' }"
                        data-series="agents"
                        href="javascript:void(0);"
                        >Agents</a
                      >
                    </li>
                    <li class="nav-item ms-1">
                      <a
                        class="nav-link rounded-md py-2.5 px-3.6 text-primary duration-500 hover:bg-light"
                        @click="tab = 'clients'"
                        :class="{
                          ' !bg-primary !text-white': tab == 'clients',
                        }"
                        data-series="clients"
                        href="javascript:void(0);"
                        >Clients</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix overflow-hidden">
                <div id="lineChartSecuritySummary">
                  <ClientOnly>
                    <VueApexCharts
                      height="230px"
                      :width="chartWidth ? chartWidth + 60 : ''"
                      :series="state.series"
                      :options="state.chartOptions"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
          <SecuritySlide />
          <div class="xl:col-span-3 lg:col-span-6 col-span-12">
            <div class="card">
              <div class="p-4 text-center pb-1">
                <h4 class="mb-2 text-lg">
                  Upgrade to Pro <br />
                  Create Limitless Deals
                </h4>
                <p class="mb-4">
                  Craft a headline that is both informative and will capture
                  creating an outline, and checking facts
                </p>
                <a
                  href="javascript:void(0);"
                  class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                  >Upgrade Now</a
                >
              </div>
              <div class="px-4">
                <img
                  class="view-light w-full"
                  src="../../assets/images/upgrade-light.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="card">
              <div
                class="relative py-4 px-5 flex justify-between items-center flex-wrap"
              >
                <h4 class="heading mb-0">License Usage</h4>
                <div class="clearfix flex items-center">
                  <OptionSelect
                    :options="[
                      { lable: 'All Time' },
                      { lable: 'Today' },
                      { lable: 'Weekly' },
                      { lable: 'Months' },
                    ]"
                    class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                  />
                  <div id="licenseUsageExcelBTN"></div>
                </div>
              </div>
              <div class="sm:px-5 px-4">
                <div class="overflow-x-auto active-projects">
                  <ClientOnly>
                    <SecurityTable />
                  </ClientOnly>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
