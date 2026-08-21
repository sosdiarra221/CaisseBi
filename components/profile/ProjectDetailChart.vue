<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import OptionSelect from "../OptionSelect.vue";

const state = reactive({
  series: [25, 17, 20, 38],
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
    colors: ["var(--primary)", "var(--success)", "var(--danger)", "var(--warning)"],
    labels: ["Employee", "Present", "Absent", "Holiday"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ["var(--white)"],
    },
  },
});

const state2 = reactive({
  series: [
    {
      name: "Incomplete",
      data: [90, 120, 120, 100, 100, 90],
    },
    {
      name: "Comple",
      data: [50, 75, 75, 55, 55, 70],
    },
  ],
  chartOptions: {
    chart: {
      height: 280,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["var(--danger)", "var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "var(--border-light)",
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: {
        style: {
          colors: "#888888",
          fontSize: "14px",
        },
        formatter: function (value: string) {
          return value;
        },
      },
    },
    xaxis: {
      categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      labels: {
        style: {
          colors: "#888888",
          fontSize: "12px",
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              color: "var(--danger)",
              opacity: 0.2,
            },
            {
              offset: 50,
              color: "var(--danger)",
              opacity: 0.1,
            },
            {
              offset: 80,
              color: "var(--danger)",
              opacity: 0,
            },
          ],
          [
            {
              offset: 0,
              color: "var(--primary)",
              opacity: 0.2,
            },
            {
              offset: 0.4,
              color: "var(--primary)",
              opacity: 0.2,
            },
            {
              offset: 100,
              color: "var(--primary)",
              opacity: 0.2,
            },
          ],
        ],
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 200,
          },
          stroke: {
            width: 3,
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "11px",
              },
            },
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "11px",
              },
            },
          },
        },
      },
    ],
  },
});

function seriesHandler(e: Event) {
  const target = e.target as HTMLInputElement;
  switch (target.value) {
    case "Incomplete":
      if (target.checked) {
        state2.series[0].data.length = 0;
      } else {
        state2.series[0].data = [90, 120, 120, 100, 100, 90];
      }
      break;
    case "Complete":
      if (target.checked) {
        state2.series[1].data.length = 0;
      } else {
        state2.series[1].data = [50, 75, 75, 55, 55, 70];
      }
      break;
  }
}
</script>

<template>
  <div class="lg:col-span-6 col-span-12">
    <div class="card">
      <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
        <div class="clearfix">
          <h4 class="card-title mb-0">Tasks Summary</h4>
          <small class="block">24 Overdue Tasks</small>
        </div>
        <a href="javascript:void(0);" class="btn btn-sm bg-light text-textdark">View Tasks</a>
      </div>
      <div class="sm:p-5 p-4">
        <div class="row items-center">
          <div class="sm:w-1/2 mb-4">
            <div id="chartTasksSummary" class="project-chart flex justify-center">
              <ClientOnly>
                <VueApexCharts width="250px" :series="state.series" :options="state.chartOptions" />
              </ClientOnly>
            </div>
          </div>
          <div class="sm:w-1/2 mb-4">
            <div class="flex justify-between mb-3">
              <div class="text-secondary"><i class="fa-solid fa-square text-primary me-1"></i> Employee</div>
              <span>25</span>
            </div>
            <div class="flex justify-between mb-3">
              <div class="text-secondary"><i class="fa-solid fa-square text-success me-1"></i> Present</div>
              <span>17</span>
            </div>
            <div class="flex justify-between mb-3">
              <div class="text-secondary"><i class="fa-solid fa-square text-danger me-1"></i> Absent</div>
              <span>20</span>
            </div>
            <div class="flex justify-between">
              <div class="text-secondary"><i class="fa-solid fa-square text-warning me-1"></i> Holiday</div>
              <span>38</span>
            </div>
          </div>
        </div>
        <div class="border border-border rounded-lg p-4 text-secondary">
          <strong class="text-primary">Intive New .NET Collaborators</strong> to creating great outstanding business to business .jsp modutr class
          scripts
        </div>
      </div>
    </div>
  </div>
  <div class="lg:col-span-6 col-span-12">
    <div class="card" id="user-activity">
      <div class="relative pt-4.5 px-5 flex justify-between items-start flex-wrap">
        <div class="clearfix">
          <h4 class="card-title mb-0">Tasks Over Time</h4>
          <div class="clearfix flex">
            <div class="chart-series mr-4" id="seriesIncomplete">
              <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="3" rx="1.5" fill="var(--danger)" />
              </svg>
              <input class="hidden" type="checkbox" id="checkSeriesIncomplete" name="chart-series" value="Incomplete" @change="seriesHandler" />
              <label class="mb-0 fs-14" for="checkSeriesIncomplete">Incomplete</label>
            </div>
            <div class="chart-series" id="seriesComple">
              <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="8" height="3" rx="1.5" fill="var(--primary)" />
              </svg>
              <input class="hidden" type="checkbox" id="checkSeriesComple" name="chart-series" value="Complete" @change="seriesHandler" />
              <label class="mb-0 fs-14" for="checkSeriesComple">Complete</label>
            </div>
          </div>
        </div>
        <OptionSelect :options="[{ lable: '2024' }, { lable: '2021' }, { lable: '2022' }, { lable: '2024' }, { lable: '2024' }]" />
      </div>
      <div class="sm:pt-5 pt-4 pe-1 pb-1">
        <div id="chartTasksOverTime">
          <ClientOnly>
            <VueApexCharts :series="state2.series" :options="state2.chartOptions" height="280px" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
