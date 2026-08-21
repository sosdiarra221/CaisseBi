<script lang="ts" setup>
import { Bar, Line } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, RadialLinearScale, ArcElement, Filler } from "chart.js";
import VueApexCharts from "vue3-apexcharts";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement, RadialLinearScale, ArcElement, Filler);

const state1 = {
  type: "bar",

  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: "0",
        barPercentage: 0.5,
        backgroundColor: "rgba(255, 255, 255, .8)",
        hoverBackgroundColor: "rgba(255, 255, 255, .8)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

const state2 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
        barPercentage: 0.2,
        backgroundColor: "#53156a",
        hoverBackgroundColor: "#000000",
      },
    ],
  },
  // data: {
  // 				defaultFontFamily: 'Poppins',
  // 				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  // 				datasets: [
  // 					{
  // 						label: "My First dataset",
  // 						data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
  // 						borderColor: chart_widget_2gradientStroke,
  // 						borderWidth: "0",
  // 						backgroundColor: chart_widget_2gradientStroke,
  // 						hoverBackgroundColor: chart_widget_2gradientStroke
  // 					}
  // 				]
  // 			},
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const state3 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Expense",
        backgroundColor: "#ff2c53",
        hoverBackgroundColor: "#ff5777",
        barPercentage: 0.2,
        data: ["20", "14", "18", "25", "27", "22", "12", "24", "20", "14", "18", "16"],
      },
      {
        label: "Earning",
        backgroundColor: "#F1F3F7",
        hoverBackgroundColor: "#F1F3F7",
        barPercentage: 0.2,
        data: ["12", "18", "14", "7", "5", "10", "20", "8", "12", "18", "14", "16"],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: false,
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        stacked: true,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const state4 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "forteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
    ],
    datasets: [
      {
        label: "Expense",
        backgroundColor: "#430b58",
        barPercentage: 0.2,
        hoverBackgroundColor: "#6c2586",
        data: [20, 14, 18, 25, 27, 22, 12, 24, 20, 14, 18, 16, 34, 32, 43, 36, 56, 12, 23, 34],
      },
      {
        label: "Earning",
        backgroundColor: "#F1F3F7",
        barPercentage: 0.2,
        hoverBackgroundColor: "#F1F3F7",
        data: [32, 58, 34, 37, 15, 41, 24, 38, 52, 38, 24, 19, 54, 34, 23, 34, 35, 22, 43, 33],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: false,
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        stacked: true,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const state5 = {
  series: [
    {
      name: "High - 2013",
      data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#20DEA6"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      offsetY: 27,
    },

    colors: ["#20DEA6"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      show: false,
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
  },
};
const state6 = {
  series: [
    {
      name: "High - 2013",
      data: [4, 5, 3.5, 5, 4, 5.5, 3.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#abdceb"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      offsetY: 27,
    },

    colors: ["#58bad7"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      show: false,
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      tickColor: "transparent",
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      font: {
        color: "#999",
        size: 8,
      },
    },
  },
};
const state7 = {
  type: "bar",

  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
        borderColor: "#ff2c53",
        borderWidth: "0",
        barPercentage: 0.5,
        backgroundColor: "#ff2c53",
        hoverBackgroundColor: "#ff2c53",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          display: false,
          max: 100,
          min: 0,
          stepSize: 10,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
        barPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
const state8 = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
  series: [
    {
      data: [4, 5, 1.5, 6, 7, 5.5, 5.8, 4.6],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 2,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    markers: {
      size: [2, 2],
      strokeWidth: [2, 2],
      strokeColors: ["var(--primary)", "#ffb64a"],
      border: 2,
      radius: 2,
      hover: {
        size: 2,
      },
    },
    chart: {
      type: "line",
      height: 300,
      toolbar: {
        show: false,
      },
    },
    offsetY: -100,
    colors: ["#5bbbd7"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  },
};
const state9 = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "January",
      "February",
      "March",
      "April",
    ],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: "#2780d4",
        pointBackgroundColor: "#2780d4",
        pointBorderColor: "#2780d4",
        pointHoverBackgroundColor: "#2780d4",
        pointHoverBorderColor: "#2780d4",
        data: [20, 10, 18, 15, 32, 18, 15, 22, 8, 6, 12, 13, 10, 18, 14, 24, 16, 12, 19, 21, 16, 14, 24, 21, 13, 15, 27, 29, 21, 11, 14, 19, 21, 17],
        fill: true,
      },
    ],
  },
  options: {
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    plugins: {
      legend: false,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.15,
      },
      point: {
        radius: 2,
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
      },
    },
  },
};
const state10 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#2780d4",
        borderColor: "#2780d4",
        pointBackgroundColor: "#2780d4",
        pointBorderColor: "#2780d4",
        pointHoverBackgroundColor: "#2780d4",
        pointHoverBorderColor: "#2780d4",
        //borderWidth: 0,
        fill: true,
        data: [20, 10, 18, 10, 32, 15, 15, 22, 18, 6, 12, 13],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.7,
      },
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 5,
        bottom: 0,
      },
    },
  },
};
const state11 = {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales Stats",
        backgroundColor: "#b0bef4",
        borderColor: "#ffaa2b",
        pointBackgroundColor: "#4cbc9a",
        pointBorderColor: "#4cbc9a",
        pointHoverBackgroundColor: "#4cbc9a",
        pointHoverBorderColor: "#4cbc9a",
        data: [0, 18, 14, 24, 16, 30],
        fill: true,
      },
    ],
  },
  options: {
    title: {
      display: !1,
    },
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 5,
      yPadding: 5,
      caretPadding: 5,
    },
    plugins: {
      legend: false,
    },
    responsive: !0,
    maintainAspectRatio: !1,
    hover: {
      mode: "index",
    },
    scales: {
      x: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Month",
        },
        ticks: {
          max: 30,
          min: 0,
        },
      },
      y: {
        display: !1,
        gridLines: !1,
        scaleLabel: {
          display: !0,
          labelString: "Value",
        },
        ticks: {
          beginAtZero: !0,
        },
      },
    },
    elements: {
      line: {
        tension: 0.15,
      },
      point: {
        radius: 2,
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
};
const state14 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [55, 30, 90, 41, 86, 45, 80],
        borderColor: "#3693FF",
        borderWidth: "2",
        backgroundColor: "transparent",
        pointBackgroundColor: "#3693FF",
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};
const state15 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 60, 30, 71, 26, 85, 50],
        borderColor: "#2780d4",
        borderWidth: "2",
        backgroundColor: "transparent",
        pointBackgroundColor: "#2780d4",
        pointRadius: 0,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};
const state16 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 60, 30, 71, 26, 85, 50],
        borderColor: "#3693FF",
        borderWidth: "2",
        backgroundColor: "#3693FF",
        pointBackgroundColor: "#3693FF",
        pointRadius: 0,
        fill: true,
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      intersect: !1,
      mode: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 20,
          padding: 0,
          display: false,
        },
        gridLines: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        ticks: {
          padding: 0,
          display: false,
          beginAtZero: true,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
};
</script>

<template>
  <div class="xl:w-1/2 lg:w-1/2 sm:w-1/2">
    <div class="card !bg-primary">
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <div class="row">
          <div class="flex-1">
            <h5 class="text-white">Power</h5>
            <span class="text-white">2017.1.20</span>
          </div>
          <div class="flex-1 text-right">
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 260</h5>
            <span class="text-white">+12.5(2.8%)</span>
          </div>
        </div>
      </div>
      <div class="chart-wrapper">
        <Bar :data="state1.data" :options="state1.options" id="chart_widget_1" />
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 lg:w-1/2 sm:w-1/2">
    <div class="card !bg-success overflow-hidden">
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <div class="row">
          <div class="flex-1">
            <h5 class="text-white">Power</h5>
            <span class="text-white">2017.1.20</span>
          </div>
          <div class="flex-1 text-right">
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 260</h5>
            <span class="text-white">+12.5(2.8%)</span>
          </div>
        </div>
      </div>
      <div class="chart-wrapper">
        <ClientOnly>
          <VueApexCharts type="area" height="150" :series="state5.series" :options="state5.chartOptions" id="chart_widget_5" />
        </ClientOnly>
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 sm:w-1/2 col-xxl-4">
    <div class="card">
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <div class="row">
          <div class="flex-1">
            <h5 class="mb-2">3650</h5>
            <span>VIEWS OF YOUR PROJECT</span>
          </div>
        </div>
      </div>
      <div class="chart-wrapper">
        <Bar :data="state2.data" :options="state2.options" id="chart_widget_2" />
      </div>
    </div>
  </div>
  <div class="sm:w-1/2 col-xxl-4">
    <div class="card">
      <div class="sm:p-5 p-4 flex-auto">
        <div class="row justify-between items-center">
          <div class="flex-[0_0_auto] !w-auto">
            <h4 class="uppercase mb-2">74,206 K</h4>
            <span>Lifetime earnings</span>
          </div>
          <div class="flex-[0_0_auto] !w-auto">
            <div class="chart-wrapper h-[6.25rem]">
              <Bar :data="state7.data" :options="state7.options" id="chart_widget_7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xxl-12">
    <div class="row">
      <div class="md:w-1/2">
        <div class="card">
          <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
            <div class="row justify-between">
              <div class="flex-[0_0_auto] !w-auto">
                <h5 class="mb-2">Lorem Ipsum</h5>
              </div>
              <div class="flex-[0_0_auto] !w-auto">
                <h5 class="mb-2">
                  <span><i class="fa fa-caret-up"></i></span>
                  <span>2,250</span>
                </h5>
              </div>
            </div>
          </div>
          <div class="chart-wrapper">
            <ClientOnly>
              <VueApexCharts type="area" height="150" :series="state6.series" :options="state6.chartOptions" id="chart_widget_6" />
            </ClientOnly>
          </div>
          <div class="py-4 px-5 f border-t border-border">
            <div class="row">
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="card">
          <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
            <div class="row justify-between">
              <div class="flex-[0_0_auto] !w-auto">
                <h5 class="mb-2">Lorem Ipsum</h5>
              </div>
              <div class="flex-[0_0_auto] !w-auto">
                <h5 class="mb-2">
                  <span><i class="fa fa-caret-up"></i></span>
                  <span>2,250</span>
                </h5>
              </div>
            </div>
          </div>
          <div class="chart-wrapper">
            <Bar id="chart_widget_3" :data="state3.data" :options="state3.options" />
          </div>
          <div class="py-4 px-5 f border-t border-border">
            <div class="row">
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
              <div class="flex-1 text-center">
                <h5 class="font-normal mb-2">1230</h5>
                <span>Type A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 lg:w-1/2">
    <div class="card overflow-hidden">
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <h4 class="uppercase font-normal text-base mb-2">Market Now</h4>
        <h2 class="font-normal text-danger xl:text-2.5xl mb-2">
          <span><i class="fa fa-caret-up"></i></span>
          <span>3454664</span>
        </h2>
        <div class="row !mt-12">
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">APPL</h5>
            <span class="text-success">+ 82.24 %</span>
          </div>
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">FB</h5>
            <span class="text-danger text-sm">- 12.24 %</span>
          </div>
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">GOOG</h5>
            <span class="text-success">+ 42.24 %</span>
          </div>
        </div>
      </div>
      <div class="chart-wrapper">
        <Bar id="chart_widget_4" class="h-[255px]" :data="state4.data" :options="state4.options" />
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 lg:w-1/2">
    <div class="card">
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <h4 class="uppercase font-normal text-base mb-2">Sales Analysis</h4>
        <h2 class="font-normal text-danger xl:text-2.5xl mb-2">
          <span><i class="fa fa-caret-up"></i></span>
          <span>3454664</span>
        </h2>
        <div class="row !mt-12">
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">Today</h5>
            <span class="text-success">+ 8224</span>
          </div>
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">Today</h5>
            <span class="text-danger text-sm">- 1224</span>
          </div>
          <div class="flex-1 text-center">
            <h5 class="font-normal mb-2">Week</h5>
            <span class="text-success">+ 4224</span>
          </div>
        </div>
      </div>
      <div class="chart-wrapper">
        <div id="chart_widget_8">
          <ClientOnly>
            <VueApexCharts height="219px" :series="state8.series" :options="state8.chartOptions" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>

  <div class="xl:w-1/2 w-full">
    <div class="card overflow-hidden">
      <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <h4 class="text-base">Top Products</h4>
      </div>
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <div class="widget-media">
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2">
                  <img alt="image" width="50" src="assets/images/avatar/1.jpg" />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Dr sultads Send you Photo</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <div class="relative self-end mt-1.1" x-data="{ open: false }">
                  <button type="button" class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                        <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                        <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </button>
                  <div
                    class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    x-transition.duration.300ms
                    x-show.transition.origin.top.right="open"
                    x-cloak
                    @click.away="open = false"
                  >
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Edit</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Delete</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-info bg-infolight">KG</div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Resport created successfully</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown class="relative self-end mt-1.1">
                  <template #trigger>
                    <button type="button" class="btn bg-successlight hover:shadow-btnsuccess text-success size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="btn-success light flex items-center justify-center size-13.5 rounded-md overflow-hidden self-start mr-2 text-xl font-bold text-success bg-successlight">
                  <i class="fa fa-home"></i>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Reminder : Treatment Time!</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <div class="relative self-end mt-1.1" x-data="{ open: false }">
                  <button type="button" class="btn bg-successlight hover:shadow-btnsuccess text-success size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                        <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                        <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </button>
                  <div
                    class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    x-transition.duration.300ms
                    x-show.transition.origin.top.right="open"
                    x-cloak
                    @click.away="open = false"
                  >
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Edit</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Delete</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="chart-wrapper">
        <Line class="h-[250px]" :data="state9.data" :options="state9.options" id="chart_widget_9" />
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 w-full">
    <div class="card overflow-hidden">
      <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <h4 class="text-base">Top Products</h4>
      </div>
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <div class="widget-media">
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2">
                  <img alt="image" width="50" src="assets/images/avatar/4.jpg" />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Dr sultads Send you Photo</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <div class="relative self-end mt-1.1" x-data="{ open: false }">
                  <button type="button" class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                    <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24" />
                        <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                        <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                        <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                      </g>
                    </svg>
                  </button>
                  <div
                    class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    x-transition.duration.300ms
                    x-show.transition.origin.top.right="open"
                    x-cloak
                    @click.away="open = false"
                  >
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Edit</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" @click="open = false" href="javascript:void(0);">Delete</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-info bg-infolight">
                  <img alt="image" width="50" src="assets/images/avatar/2.jpg" />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Resport created successfully</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown class="relative self-end mt-1.1">
                  <template #trigger>
                    <button type="button" class="btn bg-successlight hover:shadow-btnsuccess text-success size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="btn-success light flex items-center justify-center size-13.5 rounded-md overflow-hidden self-start mr-2 text-xl font-bold text-success bg-successlight">
                  <img alt="image" width="50" src="assets/images/avatar/3.jpg" />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Reminder : Treatment Time!</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown class="relative self-end mt-1.1">
                  <template #trigger>
                    <button type="button" class="btn bg-successlight hover:shadow-btnsuccess text-success size-7.5 !leading-[30px] !p-0 text-center" @click="open = true">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="chart-wrapper">
        <Line class="h-[250px]" :data="state10.data" :options="state10.options" id="chart_widget_10" />
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 col-xxl-8 w-full">
    <div class="row">
      <div class="w-full">
        <div class="card overflow-hidden">
          <div class="row no-gutters">
            <div class="!w-5/12 p-0">
              <div class="sm:p-5 p-4 flex-auto">
                <h6 class="mb-2 font-normal uppercase">Weekly sales</h6>
                <h4 class="mb-2 sm:text-lg text-base">$ 14000</h4>
                <div>
                  <span class="badge text-[#312a2a] bg-[#F3F5F8]">60%</span>
                  <span>Higher</span>
                </div>
              </div>
            </div>
            <div class="!w-7/12 p-0">
              <div class="chart-wrapper">
                <Line :data="state11.data" :options="state11.options" id="chart_widget_11" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-1/2">
        <div class="card">
          <div class="sm:p-5 p-4 flex-auto">
            <h5 class="mb-2">570</h5>
            <p class="mb-4">All Sales</p>
          </div>
          <div class="chart-wrapper">
            <Line :data="state14.data" :options="state14.options" id="chart_widget_14" />
          </div>
        </div>
      </div>
      <div class="sm:w-1/2">
        <div class="card">
          <div class="sm:p-5 p-4 flex-auto">
            <h5 class="mb-2">570</h5>
            <p class="mb-4">All Sales</p>
          </div>
          <div class="chart-wrapper">
            <Line :data="state15.data" :options="state15.options" id="chart_widget_15" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/2 col-xxl-4 w-full">
    <div class="card">
      <div class="chart-wrapper">
        <Line height="269px" :data="state16.data" :options="state16.options" id="chart_widget_16" />
      </div>
      <div class="sm:p-5 p-4 flex-auto">
        <h4 class="text-base mb-2">Sales Status</h4>
        <div class="row">
          <div class="w-full">
            <div class="flex justify-between">
              <h6 class="mb-2">67%</h6>
              <span>Grow</span>
            </div>
            <div class="h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
              <div class="progress-bar bg-primary" style="width: 80%"></div>
            </div>
          </div>
          <div class="w-full mt-6">
            <div class="flex justify-between">
              <h6 class="mb-2">67%</h6>
              <span>Grow</span>
            </div>
            <div class="h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
              <div class="progress-bar bg-success" style="width: 70%"></div>
            </div>
          </div>
          <div class="w-full mt-6">
            <div class="flex justify-between">
              <h6 class="mb-2">67%</h6>
              <span>Grow</span>
            </div>
            <div class="h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
              <div class="progress-bar bg-info" style="width: 40%"></div>
            </div>
          </div>
          <div class="w-full mt-6">
            <div class="flex justify-between">
              <h6 class="mb-2">67%</h6>
              <span>Grow</span>
            </div>
            <div class="h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
              <div class="progress-bar bg-warning" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
