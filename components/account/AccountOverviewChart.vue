<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

const state = reactive({
  series: [17, 8, 8, 17, 17, 8, 25],
  chartOptions: {
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
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: "600",
              offsetY: -16,
            },
            total: {
              show: true,
              fontSize: "14px",
              color: "#888888",
              fontWeight: "500",
              label: "Total",

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
    colors: ["var(--primary)", "var(--success)", "var(--danger)", "var(--warning)", "var(--purple)", "var(--dark)", "var(--secondary)"],
    labels: ["Laptop", "Phone", "Keyboard", "Mouse", "Monitors", "Watch", "Earbuds"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ["var(--white)"],
    },
    responsive: [
      {
        breakpoint: 1480,
        options: {
          chart: {
            type: "donut",
            width: 250,
          },
        },
      },
    ],
  },
});
</script>

<template>
  <div class="sm:p-5 p-4 !pt-1">
    <div class="row items-center">
      <div class="sm:w-1/2 mb-4 flex justify-center">
        <div id="chartTopSelling">
          <ClientOnly>
            <VueApexCharts width="250px" :series="state.series" :options="state.chartOptions" />
          </ClientOnly>
        </div>
      </div>
      <div class="sm:w-1/2 mb-4">
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-primary me-1"></i> Laptop</div>
          <span>20</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-success me-1"></i> Phone</div>
          <span>05</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-danger me-1"></i> Keyboard</div>
          <span>05</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-warning me-1"></i> Mouse</div>
          <span>20</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-purple me-1"></i> Monitors</div>
          <span>21</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-secondary me-1"></i> Watch</div>
          <span>04</span>
        </div>
        <div class="flex justify-between mb-4">
          <div class="text-secondary"><i class="fa-solid fa-square text-secondary me-1"></i> Earbuds</div>
          <span>25</span>
        </div>
      </div>
    </div>
    <div class="border border-border rounded-lg p-4 sm:flex items-center justify-between">
      <p>Category report for a company's quarterly sales performance</p>
      <div class="w-full ms-auto sm:text-end mt-2 sm:mt-0">
        <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Download Report</a>
      </div>
    </div>
  </div>
</template>
