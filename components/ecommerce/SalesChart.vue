<script lang="ts" setup>
import OptionSelect from "~/components/OptionSelect.vue";
import VueApexCharts from "vue3-apexcharts";

defineProps<{ title: string }>();
const state3 = {
  series: [30, 40, 20, 10],
  options: {
    chart: {
      type: "donut",
      width: 250,
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
              label: "Total Traffic",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: any, b: any) => {
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
 
    <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
      <h4 class="text-base">{{ title }}</h4>
      <OptionSelect
        class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
        :options="[{ lable: 'Today' }, { lable: 'Week' }, { lable: 'Month' }]"
      />
    </div>
    <div class="sm:p-5 p-4 !pb-4">
      <div id="projectChart" class="project-chart flex justify-center">
        <ClientOnly>
          <VueApexCharts width="250px" :series="state3.series" :options="state3.options" />
        </ClientOnly>
      </div>
      <div class="project-date">
        <div class="flex items-center justify-between py-0.5">
          <p class="text-secondary leading-[1.8]">
            <svg class="mr-2 inline-block" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="12" height="12" rx="3" fill="var(--primary)" />
            </svg>
            Completed Projects
          </p>
          <span class="text-body">125 Projects</span>
        </div>
        <div class="flex items-center justify-between py-0.5">
          <p class="text-secondary leading-[1.8]">
            <svg class="mr-2 inline-block" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="12" height="12" rx="3" fill="#3AC977" />
            </svg>
            Progress Projects
          </p>
          <span class="text-body">125 Projects</span>
        </div>
        <div class="flex items-center justify-between py-0.5">
          <p class="text-secondary leading-[1.8]">
            <svg class="mr-2 inline-block" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="12" height="12" rx="3" fill="#FF5E5E" />
            </svg>
            Cancelled
          </p>
          <span class="text-body">125 Projects</span>
        </div>
        <div class="flex items-center justify-between py-0.5">
          <p class="text-secondary leading-[1.8]">
            <svg class="mr-2 inline-block" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="12" height="12" rx="3" fill="#FF9F00" />
            </svg>
            Yet to Start
          </p>
          <span class="text-body">125 Projects</span>
        </div>
      </div>
    </div>

</template>
