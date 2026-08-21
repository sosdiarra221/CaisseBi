export const barChart_1 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#fff",
        borderWidth: "0",
        colors: "#fff",
        barPercentage: 0.5,
        backgroundColor: "#0d6efd",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,
        //display:0,
        //labelFontColor: '#fff',

        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};

export const barChart_2 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#fff",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 250);

          gradient.addColorStop(0, "#0d6efd");
          gradient.addColorStop(1, "rgba(120, 134, 155,0.5)");

          return gradient;
        },
        borderWidth: "0",
        colors: "#fff",
        barPercentage: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,
        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};

export const barChart_3 = {
  type: "bar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Blue",
        backgroundColor: "#0d6efd",
        hoverBackgroundColor: "#6673fd",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
      {
        label: "Green",
        backgroundColor: "#627eea",
        hoverBackgroundColor: "#56c7ce",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
      {
        label: "Red",
        backgroundColor: "#ee3c3c",
        hoverBackgroundColor: "#f35757",
        data: ["12", "12", "12", "12", "12", "12", "12"],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        show: false,
        stacked: true,

        ticks: {
          beginAtZero: true,
          color: "#888",

          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here
        stacked: true,
        ticks: {
          fontColor: "#888",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,
          offsetGridLines: true,
        },
      },
    },
  },
};

export const lineChart_1 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "#0d6efd",
        borderWidth: "2",
        backgroundColor: "transparent",
        tension: 0.5,
        pointBackgroundColor: "#0d6efd",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const lineChart_2 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "#5e6064",
        borderWidth: "2",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);
          gradient.addColorStop(0, "rgba(13, 110, 253, 1)");
          gradient.addColorStop(1, "rgba(13, 110, 253, 0.5)");
          return gradient;
        },
        tension: 0.5,
        pointBackgroundColor: "rgba(13, 110, 253, 1)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const lineChart_3 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgb(56, 118, 207)",
        borderWidth: "2",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 160);
          gradient.addColorStop(0, "green");
          gradient.addColorStop(0.5, "cyan");
          gradient.addColorStop(1, "green");

          return gradient;
        },
        tension: 0.5,
        pointBackgroundColor: "#b5a3d6",
      },
      {
        label: "My First dataset",
        data: [5, 20, 15, 41, 35, 65, 80],
        borderColor: "rgb(255, 92, 0)",
        borderWidth: "2",
        backgroundColor: "rgba(255, 92, 0, 1)",
        tension: 0.5,
        pointBackgroundColor: "rgb(254, 176, 25)",
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_1 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(0, 0, 1128, .3)",
        borderWidth: 1,
        tension: 0.5,
        backgroundColor: "#0d6efd",
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_2 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],

        borderColor: "#ff2625",
        borderWidth: "4",
        tension: 0.5,
        backgroundColor: "rgba(255, 62, 62, 0.2)",
        pointBackgroundColor: "rgba(0, 0, 1128, .3)",
        fill: {
          target: true,
          above: "#fde6e6",
          below: "rgb(0, 0, 255)",
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};
export const areaChart_3 = {
  type: "line",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First dataset",
        data: [25, 20, 60, 41, 66, 45, 80],
        borderColor: "rgba(178, 167, 190, .8)",
        borderWidth: 1,
        tension: 0.5,
        backgroundColor: "#0d6efd",
        pointBackgroundColor: "rgba(178, 167, 190, .8)",
        fill: {
          target: true,
        },
      },
      {
        label: "My First dataset",
        data: [5, 25, 20, 41, 36, 75, 70],
        borderColor: "rgba(255, 219, 127, .8)",
        borderWidth: 1,
        backgroundColor: "#ffad7f",
        tension: 0.5,
        pointBackgroundColor: "#ffad7f",
        fill: {
          target: true,
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        show: false,
        borderColor: "#fff",

        ticks: {
          beginAtZero: true,
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
      x: {
        // Change here

        ticks: {
          color: "#fff",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
          borderColor: "#fff",
          borderWidth: 0,

          offsetGridLines: true,
        },
      },
    },
  },
};

export const radar_chart = {
  type: "radar",
  data: {
    defaultFontFamily: "Poppins",
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        data: [65, 59, 66, 45, 56, 55, 40],
        borderColor: "#ffff",
        borderWidth: "0",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);

          gradient.addColorStop(0, "rgba(68, 0, 235, .5)");
          gradient.addColorStop(1, "rgba(68, 236, 245, .5)");

          return gradient;
        },
      },
      {
        label: "My Second dataset",
        data: [28, 12, 40, 19, 63, 27, 87],
        borderColor: "#ffff",
        borderWidth: "3",
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(500, 0, 100, 0);

          gradient.addColorStop(0, "rgba(54, 185, 216, .5)");
          gradient.addColorStop(1, "rgba(75, 255, 162, .5)");

          return gradient;
        },
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
};
export const pie_chart = {
  data: {
    defaultFontFamily: "Poppins",
    type: "pie",
    datasets: [
      {
        data: [45, 25, 20, 10],
        borderWidth: 0,
        backgroundColor: ["#247cfd", "#5599fd", "#0d6efd", "rgba(0,0,0,0.07)"],
        hoverBackgroundColor: ["#247cfd", "#5599fd", "#0d6efd", "rgba(0,0,0,0.07)"],
      },
    ],
    labels: ["one", "two", "three", "four"],
  },
  options: {
    plugins: {
      legend: false,
      responsive: true,
    },

    aspectRatio: 2,
  },
};
export const doughnut_chart = {
  type: "doughnut",
  data: {
    weight: 10,
    defaultFontFamily: "Poppins",
    datasets: [
      {
        data: [45, 25, 20],
        borderWidth: 10,
        borderColor: "rgba(255,255,255,1)",
        backgroundColor: ["rgba(13,110,253,1)", "rgba(98, 126, 234, 1)", "rgba(238, 60, 60, 1)"],
        hoverBackgroundColor: ["rgba(44, 44, 44, 0.9)", "rgba(98, 126, 234, .9)", "rgba(238, 60, 60, .9)"],
      },
    ],
    // labels: ["green", "green", "green", "green"],
  },
  options: {
    weight: 10,
    cutoutPercentage: 10,
    responsive: true,
    maintainAspectRatio: false,
  },
};
export const polar_chart = {
  type: "polarArea",
  data: {
    defaultFontFamily: "Poppins",
    datasets: [
      {
        data: [15, 18, 9, 6, 19],
        borderWidth: 0,
        backgroundColor: ["rgba(13,110,253,1)", "rgba(98, 126, 234, 1)", "rgba(238, 60, 60, 1)", "rgba(54, 147, 255, 1)", "rgba(255, 92, 0, 1)"],
      },
    ],
  },
  options: {
    responsive: true,
    //maintainAspectRatio: false
  },
};

export const morris_donught = {
  series: [30, 12, 20],
  chartOption: {
    chart: {
      type: "donut",
      width: 250,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
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
              color: "var(--text-dark)",
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",
              color: "var(--text-dark)",
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: string, b: string) => {
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
    colors: ["#ff5c00", "#0d99ff", "#ffaa2b"],
    labels: ["In-Store-Salse", "Download Salse", "Mail-Order-Salse"],
    dataLabels: {
      enabled: false,
    },
  },
};
export const morris_line = {
  series: [
    {
      name: "line-chart",
      data: [3, 4, 3, 6, 4, 15, 2],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        show: false,
      },
    },
    xaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
      show: false,
    },
  },
};
export const morris_bar = {
  series: [
    {
      name: "Net Profit",
      data: [110, 85, 60, 85, 60, 85, 110],
    },
    {
      name: "Revenue",
      data: [100, 75, 50, 75, 50, 75, 100],
    },
    {
      name: "Free Cash Flow",
      data: [70, 50, 40, 50, 40, 50, 50],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffaa2b", "#ff9f00"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
    xaxis: {
      categories: ["2006", "", "2008", "", "2010", "", "2006"],
    },
  },
};
export const morris_bar_stalked = {
  series: [
    {
      name: "Q1 Budget",
      group: "budget",
      data: [44000, 55000, 41000, 67000, 22000, 43000, 44000, 55000, 41000, 67000, 22000, 43000],
    },

    {
      name: "Q2 Budget",
      group: "budget",
      data: [13000, 36000, 20000, 8000, 13000, 27000, 13000, 36000, 20000, 8000, 13000, 27000],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },

    chart: {
      type: "bar",
      height: 350,
      toolbar: false,
      stacked: true,
    },

    colors: ["var(--primary)", "var(--rgba-primary-1)"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#858282",
        size: 10,
      },
    },
    xaxis: {
      categories: ["2006", "", "2008", "", "2010", "", "2006"],
    },
  },
};
export const morris_area = {
  series: [
    {
      name: "High - 2013",
      data: [0, 90, 40, 30, 150, 25, 10],
    },
    {
      name: "mid - 2013",
      data: [0, 60, 80, 47, 40, 80, 10],
    },
    {
      name: "Low - 2013",
      data: [0, 25, 35, 17, 120, 40, 10],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 0,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#55b2f6", "#25dfad", "#ea8342"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007"],
    },
  },
};

export const line_chart_2 = {
  series: [
    {
      name: "High - 2013",
      data: [0, 90, 40, 30, 150, 25, 10],
    },
    {
      name: "mid - 2013",
      data: [0, 60, 80, 47, 40, 80, 10],
    },
    {
      name: "Low - 2013",
      data: [0, 25, 35, 17, 120, 40, 10],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: [4, 4],
      strokeWidth: [2, 2],
      strokeColors: ["#E47379", "#ffb64a"],
      border: 2,
      radius: 2,
      colors: ["var(--primary)", "#00abc5", "var(--primary)"],
      hover: {
        size: 10,
      },
    },
    grid: {
      borderWidth: 2,
      borderColor: "transparent",
    },

    chart: {
      type: "line",
      height: 219,
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)", "#00abc5", "var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      tickColor: "transparent",
      font: {
        color: "#999",
        size: 8,
      },
    },
    xaxis: {
      categories: ["2001", "2002", "2003", "2004", "2005", "2006", "2007"],
    },
  },
};
