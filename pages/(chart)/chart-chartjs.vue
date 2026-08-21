<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

import { Line, Bar, Pie, Radar, Doughnut, PolarArea } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Filler,
} from "chart.js";
import {
  areaChart_1,
  areaChart_2,
  areaChart_3,
  barChart_1,
  barChart_2,
  barChart_3,
  doughnut_chart,
  lineChart_1,
  lineChart_2,
  lineChart_3,
  pie_chart,
  polar_chart,
  radar_chart,
} from "../../components/chartData";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  RadialLinearScale,
  ArcElement,
  Filler
);
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="ChartJs Chart" name="ChartJs Chart" />
    <div class="container">
      <div class="row">
        <ClientOnly>
          <div class="w-full">
            <div class="grid grid-cols-12 gap-x-6">
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Basic Bar Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->
                    <Bar
                      id="barChart_1"
                      :data="barChart_1.data"
                      :options="barChart_1.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Gradient Bar Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Bar
                      id="barChart_2"
                      :data="barChart_2.data"
                      :options="barChart_2.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Stalked Bar Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Bar
                      id="barChart_3"
                      :data="barChart_3.data"
                      :options="barChart_3.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Basic Line Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="lineChart_1"
                      :data="lineChart_1.data"
                      :options="lineChart_1.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Gradient Line Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="lineChart_2"
                      :data="lineChart_2.data"
                      :options="lineChart_2.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Dual Line Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="lineChart_3"
                      :data="lineChart_3.data"
                      :options="lineChart_3.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Basic Area Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="areaChart_1"
                      :data="areaChart_1.data"
                      :options="areaChart_1.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Gradinet Area Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="areaChart_2"
                      :data="areaChart_2.data"
                      :options="areaChart_2.options"
                    />
                  </div>
                </div>
              </div>
              <div class="xl:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Dual Area Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Line
                      id="areaChart_3"
                      :data="areaChart_3.data"
                      :options="areaChart_3.options"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Radar Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Radar
                      id="radar_chart"
                      :data="radar_chart.data"
                      :options="radar_chart.options"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Pie Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <!-- @vue-expect-error -->

                    <Pie
                      id="pie_chart"
                      :data="pie_chart.data"
                      :options="pie_chart.options"
                    />
                  </div>
                </div>
              </div>
              <div class="sm:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Doughnut Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <div class="chart-point flex items-center justify-center">
                      <div
                        class="check-point-area -mt-2.5 -ml-2.5 size-[6.25rem]"
                      >
                        <Doughnut
                          id="doughnut_chart"
                          :data="doughnut_chart.data"
                          :options="doughnut_chart.options"
                        />
                      </div>
                      <ul class="chart-point-list pl-[5px]">
                        <li class="py-0.5 text-xs">
                          <i class="fa fa-circle text-primary me-1"></i> 40%
                          Tickets
                        </li>
                        <li class="py-0.5 text-xs">
                          <i class="fa fa-circle text-success me-1"></i> 35%
                          Events
                        </li>
                        <li class="py-0.5 text-xs">
                          <i class="fa fa-circle text-warning me-1"></i> 25%
                          Other
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-6 col-span-12">
                <div class="card">
                  <div
                    class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                  >
                    <h4 class="text-base">Polar Chart</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <PolarArea
                      id="polar_chart"
                      :data="polar_chart.data"
                      :options="polar_chart.options"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
