<script lang="ts" setup>
import CrmCharts from "~/components/dashboard/CrmCharts.vue";
import OverviewChart from "~/components/dashboard/OverviewChart.vue";
import TodoItem from "~/components/TodoItem.vue";

import OptionSelect from "~/components/OptionSelect.vue";
import VueApexCharts from "vue3-apexcharts";
import CRMTable from "~/components/CRMTable.vue";

const layout = ref<number>(0);

const layoutHandler = () => {
  if (process.client) {
    layout.value = window.innerWidth;
  }
};

onMounted(() => {
  layoutHandler(); // Initial layout setting
  window.addEventListener("resize", layoutHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", layoutHandler);
});

useHead(() => ({
  bodyAttrs: {
    "data-layout": layout.value >= 775 ? "horizontal" : "vertical",
    "data-sidebarbg": "color_3",
    "data-nav-headerbg": "color_4",
    "data-headerbg": "color_4",
    "data-typography": "inter",
    "data-secondary": "color_1",
  },
}));

const state = {
  series: [30, 40, 20, 10],
  options: {
    chart: {
      type: "donut",
      width: 280,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Arial",
              fontWeight: "500",
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",
              label: "Total projects",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#FF9F00", "var(--primary)", "#3AC977", "#FF5E5E"],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  },
};
</script>

<template>
  <div
    class="content-body after:content-[''] after:absolute after:h-[410px] after:w-full after:bg-[#003F88] after:left-0 after:top-0 after:-z-1"
  >
    <div class="container">
      <div class="grid grid-cols-12 gap-x-6">
        <CrmCharts />
        <div class="xl:col-span-8 col-span-12">
          <OverviewChart title="Projects Overview" />
        </div>
        <div class="xl:col-span-4 lg:col-span-6 col-span-12 same-card">
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
        <div class="xl:col-span-8 col-span-12 active-p">
          <div class="card">
            <div class="card-body p-0">
              <div class="overflow-x-auto active-projects shorting">
                <div class="p-5">
                  <h4 class="heading">Active Projects</h4>
                </div>
                <ClientOnly>
                  <CRMTable />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-4 lg:col-span-6 col-span-12">
          <div class="card flex flex-col">
            <div class="flex justify-between px-5 pt-6 relative z-[2]">
              <h4 class="heading">Projects Status</h4>
              <OptionSelect
                className="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                :options="[
                  { lable: 'Today' },
                  { lable: 'Week' },
                  { lable: 'Month' },
                ]"
              />
            </div>
            <div class="p-5">
              <div id="projectChart" class="project-chart flex justify-center">
                <ClientOnly>
                  <VueApexCharts
                    width="250px"
                    :series="state.series"
                    :options="state.options"
                  />
                </ClientOnly>
              </div>

              <div class="project-date">
                <div class="flex items-center justify-between py-0.5">
                  <p class="text-secondary leading-[1.8]">
                    <svg
                      class="mr-2 inline-block"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="12"
                        height="12"
                        rx="3"
                        fill="var(--primary)"
                      />
                    </svg>
                    Completed Projects
                  </p>
                  <span class="text-body">125 Projects</span>
                </div>
                <div class="flex items-center justify-between py-0.5">
                  <p class="text-secondary leading-[1.8]">
                    <svg
                      class="mr-2 inline-block"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="12"
                        height="12"
                        rx="3"
                        fill="#3AC977"
                      />
                    </svg>
                    Progress Projects
                  </p>
                  <span class="text-body">125 Projects</span>
                </div>
                <div class="flex items-center justify-between py-0.5">
                  <p class="text-secondary leading-[1.8]">
                    <svg
                      class="mr-2 inline-block"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="12"
                        height="12"
                        rx="3"
                        fill="#FF5E5E"
                      />
                    </svg>
                    Cancelled
                  </p>
                  <span class="text-body">125 Projects</span>
                </div>
                <div class="flex items-center justify-between py-0.5">
                  <p class="text-secondary leading-[1.8]">
                    <svg
                      class="mr-2 inline-block"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.5"
                        width="12"
                        height="12"
                        rx="3"
                        fill="#FF9F00"
                      />
                    </svg>
                    Yet to Start
                  </p>
                  <span class="text-body">125 Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
