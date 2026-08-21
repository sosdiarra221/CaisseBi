<script lang="ts" setup>
import { ref } from "vue";
import OptionSelect from "../OptionSelect.vue";

const tab = ref("pills-bitcoin-tab");
const chartRef = ref(null);

import { Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, RadialLinearScale, ArcElement, Filler } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, RadialLinearScale, ArcElement, Filler);

function chartHandler(to: string) {
  tab.value = to;
  switch (to) {
    case "pills-bitcoin-tab":
      state.data.datasets[0].data = [3000, 3500, 3000, 4000, 4000, 3000, 4000, 4000, 3000, 4000, 4500];
      state.data.datasets[1].data = [2500, 4000, 3500, 4500, 3800, 3500, 3800, 3500, 3500, 3800, 4000];
      break;
    case "pills-ethereum-tab":
      state.data.datasets[0].data = [35, 35, 40, 30, 38, 40, 50, 38, 40, 50, 38];
      state.data.datasets[1].data = [38, 38, 38, 28, 40, 38, 45, 30, 30, 25, 30];
      break;
    case "pills-bnp-tab":
      state.data.datasets[0].data = [35, 35, 40, 30, 38, 50, 60, 38, 40, 50, 38];
      state.data.datasets[1].data = [38, 38, 38, 28, 40, 28, 35, 30, 30, 25, 30];
      break;
  }
}

const state = reactive<any>({
  type: "line",
  data: {
    labels: ["10:59PM", "11:59PM", "12:59AM", "1:59AM", "2:59AM", "3:59AM", "4:59AM", "5:59AM", "6:59AM", "7:59AM"],
    datasets: [
      {
        label: "Active",
        backgroundColor: "rgba(28, 28, 28, 0)",
        borderColor: "#1C1C1C",
        data: [3000, 3500, 3000, 4000, 4000, 3000, 4000, 4000, 3000, 4000, 4500],
        borderWidth: 1.972,
        tension: 0.5,
      },
      {
        label: "Inactive",
        backgroundColor: "rgba(255, 142, 38, 0)",
        borderColor: "#1D69D6",
        data: [2500, 4000, 3500, 4500, 3800, 3500, 3800, 3500, 3500, 3800, 4000],
        borderWidth: 1.972,
        tension: 0.5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        grid: {
          color: "rgba(233,236,255,0.5)",
          drawBorder: true,
        },
        ticks: {
          fontSize: 14,
          fontColor: "#6E6E6E",
          fontFamily: "Poppins",
        },
      },
      x: {
        grid: {
          display: false,
          zeroLineColor: "white",
        },
        ticks: {
          fontSize: 14,
          stepSize: 5,
          fontColor: "#6E6E6E",
          fontFamily: "Poppins",
        },
      },
    },
    tooltips: {
      enabled: false,
      mode: "index",
      intersect: false,
      titleFontColor: "#888",
      bodyFontColor: "#555",
      titleFontSize: 12,
      bodyFontSize: 15,
      backgroundColor: "rgba(256,256,256,0.95)",
      displayColors: true,
      xPadding: 10,
      yPadding: 7,
      borderColor: "rgba(220, 220, 220, 0.9)",
      borderWidth: 2,
      caretSize: 6,
      caretPadding: 10,
    },
  },
});
</script>

<template>
  <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
    <h4 class="text-base">Revenue Updates</h4>
    <div class="flex items-baseline">
      <ul class="flex flex-wrap nav-pills revenue-tab max-xl:mt-4" id="pills-tab111" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
            type="button"
            :class="{ 'bg-primary text-white': tab === 'pills-bitcoin-tab' }"
            @click="chartHandler('pills-bitcoin-tab')"
          >
            <img src="/assets/images/crypto/btcsm.svg" alt="" class="me-1 inline-block" />
            Bitcoin
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
            type="button"
            :class="{ 'bg-primary text-white': tab === 'pills-ethereum-tab' }"
            @click="chartHandler('pills-ethereum-tab')"
          >
            <img src="/assets/images/crypto/ethsm.svg" alt="" class="me-1 inline-block" />
            Ethereum
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
            type="button"
            :class="{ 'bg-primary text-white': tab === 'pills-bnp-tab' }"
            @click="chartHandler('pills-bnp-tab')"
          >
            <img src="/assets/images/crypto/bnbsm.svg" alt="" class="me-1 inline-block" />
            BNB
          </button>
        </li>
      </ul>
      <OptionSelect
        class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 text-primary inline-flex items-center border-0 h-[34px] max-sm:hidden style-1 open"
        :options="[{ lable: 'Yearly' }, { lable: 'Weekly' }, { lable: 'Monthly' }]"
      />
    </div>
  </div>
  <div class="sm:p-5 p-4">
    <div class="tab-content" id="pills-tabContent">
      <div class="show" id="bitcoin">
        <Line ref="chartRef" id="activity" height="200" class="!h-[270px]" :data="state.data" :options="state.options" />
      </div>
    </div>
  </div>
</template>
