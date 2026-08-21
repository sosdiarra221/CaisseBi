<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import {
  line_chart_2,
  morris_area,
  morris_bar,
  morris_bar_stalked,
  morris_donught,
  morris_line,
} from "../../components/chartData";
import VueApexCharts from "vue3-apexcharts";
</script>

<template>
  <!-- 
  <apexchart height="210" :options="morris_line.chartOptions" :series="morris_line.series"></apexchart>
  <apexchart height="210" :options="morris_bar.chartOptions" :series="morris_bar.series"></apexchart>
  <apexchart height="210" :options="line_chart_2.chartOptions" :series="line_chart_2.series"></apexchart>
  <apexchart height="210" :options="morris_bar_stalked.chartOptions" :series="morris_bar_stalked.series"></apexchart>
  </apexchart> -->
  <div class="content-body default-height">
    <CommonNav title="Apex Chart" name="Apex Chart" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Donught Chart</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <ClientOnly>
                    <VueApexCharts
                      id="morris_donught"
                      height="210"
                      :options="morris_donught.chartOption"
                      :series="morris_donught.series"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Line Chart</h4>
                </div>
                <div class="card-body p-0">
                  <ClientOnly>
                    <VueApexCharts
                      id="morris_line"
                      class="morris_chart_height h-[15.7rem]"
                      height="210"
                      :options="morris_line.chartOptions"
                      :series="morris_line.series"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Bar Chart</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <ClientOnly>
                    <VueApexCharts
                      id="morris_bar"
                      class="morris_chart_height h-60"
                      height="210"
                      :options="morris_bar.chartOptions"
                      :series="morris_bar.series"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Line Chart</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <ClientOnly>
                    <VueApexCharts
                      id="line_chart_2"
                      class="morris_chart_height h-60"
                      height="210"
                      :options="line_chart_2.chartOptions"
                      :series="line_chart_2.series"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Bar Chart</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <ClientOnly>
                    <VueApexCharts
                      id="morris_bar_stalked"
                      class="morris_chart_height h-60"
                      height="210"
                      :options="morris_bar_stalked.chartOptions"
                      :series="morris_bar_stalked.series"
                    />
                  </ClientOnly>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="card">
                <div
                  class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
                >
                  <h4 class="text-base">Area Chart</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <ClientOnly>
                    <VueApexCharts
                      id="morris_area"
                      class="morris_chart_height h-60"
                      height="210"
                      :options="morris_area.chartOptions"
                      :series="morris_area.series"
                    />
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
