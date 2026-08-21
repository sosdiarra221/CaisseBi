<script lang="ts" setup>
// @ts-nocheck
import noUiSlider from "nouislider";
import wNumb from "wnumb";
import OptionSelect from "../OptionSelect.vue";
import { data } from "./data";

const sliders = [
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
  ref<globalThis.Ref | null>(null),
];

const slider1 = ref<number | string>(2000.0);
const slider2 = ref<{ one: string | number; two: string | number }>({
  one: 20,
  two: 80,
});
const slider3 = ref<{ one: string | number; two: string | number }>({
  one: 10,
  two: 50,
});

const slider4 = ref<{ one: string | number; two: string | number }>({
  one: 10,
  two: 50,
});

const slider5 = ref<any>();
const unconstrainedValues = ref<any>();
onMounted(() => {
  noUiSlider.create(sliders[0].value, {
    start: [40, 346],
    connect: true,
    range: {
      min: 0,
      max: 400,
    },
  });

  let getRenge = noUiSlider.create(sliders[1].value, {
    start: [2000],
    connect: false,
    range: {
      min: 2000,
      max: 10000,
    },
    step: 10, // Step size
  });

  getRenge.on("update", function (value, handle) {
    slider1.value = value[handle];
  });

  let getRenge2 = noUiSlider.create(sliders[2].value, {
    start: [0, 100],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  getRenge2.on("update", function (value, _) {
    slider2.value.one = value[0];
    slider2.value.two = value[1];
  });

  let getRenge3 = noUiSlider.create(sliders[3].value, {
    start: [10, 120],
    limit: 40,
    behaviour: "drag",
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  getRenge3.on("update", function (value, _) {
    slider3.value.one = value[0];
    slider3.value.two = value[1];
  });

  let getRenge4 = noUiSlider.create(sliders[4].value, {
    start: [10, 85],
    limit: 70,
    behaviour: "drag",
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
  getRenge4.on("update", function (value, _) {
    slider4.value.one = value[0];
    slider4.value.two = value[1];
  });

  noUiSlider.create(sliders[5].value, {
    start: [20, 80, 120],
    tooltips: [false, wNumb({ decimals: 1 }), true],
    range: {
      min: 0,
      max: 200,
    },
  });

  noUiSlider.create(sliders[6].value, {
    start: [20, 40],
    step: 10,
    behaviour: "drag",
    connect: true,
    range: {
      min: 20,
      max: 80,
    },
  });

  noUiSlider.create(sliders[7].value, {
    start: 40,
    behaviour: "tap",
    connect: [false, true],
    range: {
      min: 20,
      max: 80,
    },
  });

  noUiSlider.create(sliders[8].value, {
    start: [40, 60],
    behaviour: "drag-fixed",
    connect: true,
    range: {
      min: 20,
      max: 80,
    },
  });

  noUiSlider.create(sliders[9].value, {
    start: 40,
    behaviour: "snap",
    connect: [true, false],
    range: {
      min: 20,
      max: 80,
    },
  });

  let getRenge5 = noUiSlider.create(sliders[10].value, {
    start: 20,
    behaviour: "hover-snap",
    direction: "rtl",
    range: {
      min: 0,
      max: 10,
    },
  });

  getRenge5.on("hover", function (value) {
    slider5.value = value;
  });

  let unconstrainedSlider = noUiSlider.create(sliders[11].value, {
    start: [20, 50, 80],
    behaviour: "unconstrained-tap",
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });

  unconstrainedSlider.on("update", function (values) {
    unconstrainedValues.value = values.join(" :: ");
  });

  noUiSlider.create(sliders[12].value, {
    start: [40, 60],
    behaviour: "drag-smooth-steps-tap",
    step: 10,
    connect: true,
    range: {
      min: 20,
      max: 80,
    },
  });

  let range_all_sliders = {
    min: [0],
    "10%": [500, 500],
    "50%": [4000, 1000],
    max: [10000],
  };

  noUiSlider.create(sliders[13].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "range",
      density: 3,
    },
  });

  noUiSlider.create(sliders[14].value, {
    range: range_all_sliders,
    start: 0,
    direction: "rtl",
    pips: {
      mode: "range",
      density: 3,
    },
  });

  noUiSlider.create(sliders[17].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "positions",
      values: [0, 25, 50, 75, 100],
      density: 4,
    },
  });
  noUiSlider.create(sliders[18].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "positions",
      values: [0, 25, 50, 75, 100],
      density: 4,
      stepped: true,
    },
  });
  noUiSlider.create(sliders[19].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "count",
      values: 6,
      density: 4,
    },
  });
  noUiSlider.create(sliders[20].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "count",
      values: 6,
      density: 4,
      stepped: true,
    },
  });
  noUiSlider.create(sliders[21].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "values",
      values: [50, 552, 2251, 3200, 5000, 7080, 9000],
      density: 4,
    },
  });
  noUiSlider.create(sliders[22].value, {
    range: range_all_sliders,
    start: 0,
    pips: {
      mode: "values",
      values: [50, 552, 4651, 4952, 5000, 7080, 9000],
      density: 4,
      stepped: true,
    },
  });

  var disSlider1 = document.getElementById("disable1");
  var checkbox1 = document.getElementById("checkbox1");
  function toggle(element: any) {
    // If the checkbox is checked, disabled the slider.
    // Otherwise, re-enable it.
    if (this.checked) {
      element.setAttribute("disabled", true);
    } else {
      element.removeAttribute("disabled");
    }
  }

  noUiSlider.create(disSlider1, {
    start: 80,
    connect: [true, false],
    range: {
      min: 0,
      max: 100,
    },
  });

  checkbox1.addEventListener("click", function () {
    toggle.call(this, disSlider1);
  });

  setTimeout(() => {
    var disSlider2 = document.getElementById("disable2");
    var origins = disSlider2.getElementsByClassName("noUi-origin");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");

    noUiSlider.create(disSlider2, {
      start: [20, 80],
      range: {
        min: 0,
        max: 100,
      },
    });

    checkbox2.addEventListener("click", function () {
      toggle.call(this, origins[0]);
    });

    checkbox3.addEventListener("click", function () {
      toggle.call(this, origins[1]);
    });
  }, 100);

  //updating a slider
  var updateSlider = document.getElementById("slider-update");
  var updateSliderValue = document.getElementById("slider-update-value");

  noUiSlider.create(updateSlider, {
    range: {
      min: 0,
      max: 40,
    },
    start: 20,
    margin: 2,
    step: 2,
  });

  updateSlider.noUiSlider.on("update", function (values, handle) {
    updateSliderValue.innerHTML = values[handle];
  });

  var button1 = document.getElementById("update-1");
  var button2 = document.getElementById("update-2");

  function updateSliderRange(min, max) {
    updateSlider.noUiSlider.updateOptions({
      range: {
        min: min,
        max: max,
      },
    });
  }

  button1.addEventListener("click", function () {
    updateSliderRange(20, 50);
  });

  button2.addEventListener("click", function () {
    updateSliderRange(10, 40);
  });
  let keyboardslider = document.getElementById("keyboardslider");
  noUiSlider.create(keyboardslider, {
    start: 10,
    step: 10,
    range: {
      min: 0,
      max: 100,
    },
  });
  var dateSlider = document.getElementById("slider-date");

  function timestamp(str) {
    return new Date(str).getTime();
  }
  noUiSlider.create(dateSlider, {
    // Create two timestamps to define a range.
    range: {
      min: timestamp("2010"),
      max: timestamp("2016"),
    },

    // Steps of one week
    step: 7 * 24 * 60 * 60 * 1000,

    // Two more timestamps indicate the handle starting positions.
    start: [timestamp("2011"), timestamp("2015")],

    // No decimals
    format: wNumb({
      decimals: 0,
    }),
  });

  var dateValues = [document.getElementById("event-start"), document.getElementById("event-end")];

  // Create a list of day and month names.
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  dateSlider.noUiSlider.on("update", function (values, handle) {
    dateValues[handle].innerHTML = formatDate(new Date(+values[handle]));
  });
  function nth(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  // Create a string representation of the date.
  function formatDate(date) {
    return weekdays[date.getDay()] + ", " + date.getDate() + nth(date.getDate()) + " " + months[date.getMonth()] + " " + date.getFullYear();
  }
  var html5Slider = document.getElementById("html5");
  noUiSlider.create(html5Slider, {
    start: [10, 30],
    connect: true,
    range: {
      min: -20,
      max: 40,
    },
  });
  var nonLinearSlider = document.getElementById("nonlinear");
  noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: "tap",
    start: [500, 4000],
    range: {
      // Starting at 500, step the value by 500,
      // until 4000 is reached. From there, step by 1000.
      min: [0],
      "10%": [500, 500],
      "50%": [4000, 1000],
      max: [10000],
    },
  });
  var nodes = [
    document.getElementById("lower-value"), // 0
    document.getElementById("upper-value"), // 1
  ];

  // Display the slider value and how far the handle moved
  // from the left edge of the slider.
  nonLinearSlider.noUiSlider.on("update", function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = values[handle] + ", " + positions[handle].toFixed(2) + "%";
  });
  //non-linear slider ^
  var snapSlider = document.getElementById("slider-snap");
  noUiSlider.create(snapSlider, {
    start: [0, 500],
    snap: true,
    connect: true,
    range: {
      min: 0,
      "10%": 50,
      "20%": 100,
      "30%": 150,
      "40%": 500,
      "50%": 800,
      max: 1000,
    },
  });

  var snapValues = [document.getElementById("slider-snap-value-lower"), document.getElementById("slider-snap-value-upper")];

  snapSlider.noUiSlider.on("update", function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
  });

  var nonLinearStepSlider = document.getElementById("slider-non-linear-step");
  noUiSlider.create(nonLinearStepSlider, {
    start: [500, 4000],
    range: {
      min: [0],
      "10%": [500, 500],
      "50%": [4000, 1000],
      max: [10000],
    },
  });

  var nonLinearStepSliderValueElement = document.getElementById("slider-non-linear-step-value");
  nonLinearStepSlider.noUiSlider.on("update", function (values, handle) {
    nonLinearStepSliderValueElement.innerHTML = values[handle];
  });
  var sliderFormat = document.getElementById("slider-format");
  noUiSlider.create(sliderFormat, {
    start: [20000],
    step: 1000,
    range: {
      min: [20000],
      max: [80000],
    },
    ariaFormat: wNumb({
      decimals: 3,
    }),
    format: wNumb({
      decimals: 3,
      thousand: ".",
      suffix: " (US $)",
    }),
  });

  var inputFormat = document.getElementById("input-format");
  sliderFormat.noUiSlider.on("update", function (values, handle) {
    inputFormat.value = values[handle];
  });

  inputFormat.addEventListener("change", function () {
    sliderFormat.noUiSlider.set(this.value);
  });
  var slider = document.getElementById("slider");
  noUiSlider.create(slider, {
    start: [80],
    range: {
      min: [0],
      max: [100],
    },
  });

  //locking sliders together
  var lockedState = false;
  var lockedSlider = false;
  var lockedValues = [60, 80];

  var slider_1 = document.getElementById("slider1");
  var slider_2 = document.getElementById("slider2");

  var lockButton = document.getElementById("lockbutton");
  var slider1Value = document.getElementById("slider1-span");
  var slider2Value = document.getElementById("slider2-span");

  // When the button is clicked, the locked state is inverted.
  lockButton.addEventListener("click", function () {
    lockedState = !lockedState;
    this.textContent = lockedState ? "unlock" : "lock";
  });

  function crossUpdate(value, slider) {
    // If the sliders aren't interlocked, don't
    // cross-update.
    if (!lockedState) return;

    // Select whether to increase or decrease
    // the other slider value.
    var a = slider_1 === slider ? 0 : 1;

    // Invert a
    var b = a ? 0 : 1;

    // Offset the slider value.
    value -= lockedValues[b] - lockedValues[a];

    // Set the value
    slider.noUiSlider.set(value);
  }

  noUiSlider.create(slider_1, {
    start: 60,

    // Disable animation on value-setting,
    // so the sliders respond immediately.
    animate: false,
    range: {
      min: 50,
      max: 100,
    },
  });

  noUiSlider.create(slider_2, {
    start: 80,
    animate: false,
    range: {
      min: 50,
      max: 100,
    },
  });

  slider_1.noUiSlider.on("update", function (values, handle) {
    slider1Value.innerHTML = values[handle];
  });

  slider_2.noUiSlider.on("update", function (values, handle) {
    slider2Value.innerHTML = values[handle];
  });

  function setLockedValues() {
    lockedValues = [Number(slider_1.noUiSlider.get()), Number(slider_2.noUiSlider.get())];
  }

  slider_1.noUiSlider.on("change", setLockedValues);
  slider_2.noUiSlider.on("change", setLockedValues);

  slider_1.noUiSlider.on("slide", function (values, handle) {
    crossUpdate(values[handle], slider_2);
  });

  slider_2.noUiSlider.on("slide", function (values, handle) {
    crossUpdate(values[handle], slider_1);
  });

  var pipsSlider = document.getElementById("slider-pips");
  noUiSlider.create(pipsSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: [50],
    pips: { mode: "count", values: 5 },
  });

  var pips = pipsSlider.querySelectorAll(".noUi-value");
  function clickOnPip() {
    var value = Number(this.getAttribute("data-value"));
    pipsSlider.noUiSlider.set(value);
  }

  for (var i = 0; i < pips.length; i++) {
    // For this example. Do this in CSS!
    pips[i].style.cursor = "pointer";
    pips[i].addEventListener("click", clickOnPip);
  }

  var slider = document.getElementById("slider-color");
  noUiSlider.create(slider, {
    start: [4000, 8000, 12000, 16000],
    connect: [false, true, true, true, true],
    range: {
      min: [2000],
      max: [20000],
    },
  });

  var connect = slider.querySelectorAll(".noUi-connect");
  var classes = ["c-1-color", "c-2-color", "c-3-color", "c-4-color", "c-5-color"];

  for (var i = 0; i < connect.length; i++) {
    connect[i].classList.add(classes[i]);
  }

  var keypressSlider = document.getElementById("keypress");
  var input0 = document.getElementById("input-with-keypress-0");
  var input1 = document.getElementById("input-with-keypress-1");
  var inputs = [input0, input1];

  noUiSlider.create(keypressSlider, {
    start: [20, 80],
    connect: true,
    tooltips: [true, wNumb({ decimals: 1 })],
    range: {
      min: [0],
      "10%": [10, 10],
      "50%": [80, 50],
      "80%": 150,
      max: 200,
    },
  });

  keypressSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {
    input.addEventListener("change", function () {
      keypressSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener("keydown", function (e) {
      var values = keypressSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = keypressSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {
        case 13:
          keypressSlider.noUiSlider.setHandle(handle, this.value);
          break;

        case 38:
          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            keypressSlider.noUiSlider.setHandle(handle, value + position);
          }

          break;

        case 40:
          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            keypressSlider.noUiSlider.setHandle(handle, value - position);
          }

          break;
      }
    });
  });

  var skipSlider = document.getElementById("skipstep");
  noUiSlider.create(skipSlider, {
    range: {
      min: 0,
      "10%": 10,
      "20%": 20,
      "30%": 30,
      // Nope, 40 is no fun.
      "50%": 50,
      "60%": 60,
      "70%": 70,
      // I never liked 80.
      "90%": 90,
      max: 100,
    },
    snap: true,
    start: [20, 90],
  });

  var skipValues = [document.getElementById("skip-value-lower"), document.getElementById("skip-value-upper")];

  skipSlider.noUiSlider.on("update", function (values, handle) {
    skipValues[handle].innerHTML = values[handle];
  });

  //Using the slider with huge numbers
  var bigValueSlider = document.getElementById("slider-huge");
  var bigValueSpan = document.getElementById("huge-value");

  noUiSlider.create(bigValueSlider, {
    start: 0,
    step: 1,
    format: wNumb({
      decimals: 0,
    }),
    range: {
      min: 0,
      max: 13,
    },
  });

  // Note how these are 'string' values, not numbers.
  var range = [
    "0",
    "2097152",
    "4194304",
    "8388608",
    "16777216",
    "33554432",
    "67108864",
    "134217728",
    "268435456",
    "536870912",
    "1073741824",
    "2147483648",
    "4294967296",
    "8589934592",
  ];

  bigValueSlider.noUiSlider.on("update", function (values, handle) {
    bigValueSpan.innerHTML = range[values[handle]];
  });

  var softSlider = document.getElementById("soft");
  noUiSlider.create(softSlider, {
    start: 50,
    range: {
      min: 0,
      max: 100,
    },
    pips: {
      mode: "values",
      values: [20, 80],
      density: 4,
    },
  });

  softSlider.noUiSlider.on("change", function (values, handle) {
    if (values[handle] < 20) {
      softSlider.noUiSlider.set(20);
    } else if (values[handle] > 80) {
      softSlider.noUiSlider.set(80);
    }
  });

  var directionSlider = document.getElementById("slider-direction");
  noUiSlider.create(directionSlider, {
    start: 20,
    direction: "rtl",
    range: {
      min: 0,
      max: 100,
    },
  });

  var directionField = document.getElementById("field");
  directionSlider.noUiSlider.on("update", function (values, handle) {
    directionField.innerHTML = values[handle];
  });
});
</script>

<template>
  <div class="row">
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Basic slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div :ref="sliders[0]"></div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Stepping and snapping to values</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="stepping-slider">
            <div :ref="sliders[1]"></div>
            <span class="example-val" id="slider-step-value">{{ slider1 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider margin</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="margin-slider">
            <div :ref="sliders[2]"></div>
            <span class="example-val" id="slider-margin-value-min">{{ slider2.one }}</span>
            <span class="example-val" id="slider-margin-value-max">{{ slider2.two }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider limit</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="limit-slider">
            <div :ref="sliders[3]"></div>
            <span class="example-val" id="slider-limit-value-min">{{ slider3.one }}</span>
            <span class="example-val" id="slider-limit-value-max">{{ slider3.two }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider padding</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="padding-slider">
            <div :ref="sliders[4]"></div>
            <span class="example-val" id="slider-padding-value-min">{{ slider4.one }}</span
            >{{ " " }}
            <span class="example-val" id="slider-padding-value-max">{{ slider4.two }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider tooltip</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-tooltip">
            <div :ref="sliders[5]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (Drag)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-behaviour">
            <div :ref="sliders[6]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (Tap)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-behaviour">
            <div :ref="sliders[7]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (Fixed dragging)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-behaviour">
            <div :ref="sliders[8]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (Snap)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="snap">
            <div :ref="sliders[9]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (hover)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="snap">
            <div :ref="sliders[10]"></div>
            <span class="example-val mt-4 inline-block" id="hover-val">{{ slider5 }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (unconstrained)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="unconstrained">
            <div :ref="sliders[11]"></div>
            <span class="example-val" id="unconstrained-values">{{ unconstrainedValues }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider behaviour (combined)</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="combined">
            <div :ref="sliders[12]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider range (left to right)</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="slider-range mb-12">
            <div :ref="sliders[13]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider range (right to left)</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="slider-range mb-12">
            <div :ref="sliders[14]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pip positions</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pip-position mb-12">
            <div :ref="sliders[17]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pip position stepped</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pip-position mb-12">
            <div :ref="sliders[18]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pips count</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pips-count mb-12">
            <div :ref="sliders[19]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pips count (stepped)</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pips-count mb-12">
            <div :ref="sliders[20]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pips value</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pips-values mb-12">
            <div :ref="sliders[21]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/2">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Pips values (stepped)</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="pips-values mb-12">
            <div :ref="sliders[22]" id="pips-range-vertical"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Disabling a slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-disabled">
            <div id="disable1" class="mb-4"></div>
            <label>
              <input class="ms-2 form-check-input mt-0" type="checkbox" id="checkbox1" />
              Disable slider
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Disabling a slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-disabled">
            <div id="disable2"></div>
            <label>
              <input type="checkbox" class="form-check-input mt-0" id="checkbox2" />
              Disable handle 1
            </label>
            <br />
            <label>
              <input type="checkbox" class="form-check-input mt-0" id="checkbox3" />
              Disable handle 2
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Updating a slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-update">
            <div id="slider-update"></div>
            <span class="example-val block my-4" id="slider-update-value"></span>
            <button class="update-button btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm mb-2" id="update-1">Set range [20, 50]</button>{{ " " }}
            <button class="update-button btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm mb-2" id="update-2">Set range [10, 40]</button>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Keyboard slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="card-title mb-3 mb-xl-4"></div>
          <div id="keyboardslider"></div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Working with dates</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="date-slider">
            <div id="slider-date"></div>
            <div class="example-val my-4" id="event-start"></div>
            <div class="example-val" id="event-end"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Using HTML5 input elements</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="input-element">
            <div id="html5"></div>
            <div class="inputs mt-4">
              <OptionSelect
                class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none my-6"
                :options="data"
              />
              <input
                value="30.00"
                class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                type="number"
                min="-20"
                max="40"
                step="1"
                id="input-number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Non linear slider</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="nonlinear-slider">
            <div id="nonlinear"></div>
            <div class="outputs mt-4">
              <span class="example-val" id="lower-value"></span>
              <span class="example-val" id="upper-value"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Snapping between steps</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="nonlinear-slider">
            <div id="slider-snap"></div>
            <span class="example-val" id="slider-snap-value-lower"></span>
            <span class="example-val" id="slider-snap-value-upper"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Stepping in non-linear sliders</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="nonlinear-slider">
            <div id="slider-non-linear-step"></div>
            <span class="example-val" id="slider-non-linear-step-value"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Number formatting</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="format-slider">
            <div id="slider-format"></div>
            <input class="mt-4 form-control" title="Formatted number" id="input-format" />
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Getting and setting slider values</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="getnset-slider">
            <div id="slider"></div>
            <div class="logger mt-4">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm" id="write-button">Set to 20</button>{{ " " }}
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm" id="read-button">Read slider value</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Locking sliders together</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="locked-slider">
            <div class="slider" id="slider1"></div>
            <span class="example-val" id="slider1-span"></span>
            <div class="slider mt-4" id="slider2"></div>
            <span class="example-val" id="slider2-span"></span>
            <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm mt-4" id="lockbutton" style="float: right; margin: 20px 0 0">Lock</button>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Moving the slider by clicking pips</h4>
        </div>
        <div class="sm:p-5 p-4 mx-4">
          <div class="extra-padding mb-12">
            <div class="slider-pips">
              <div class="slider" id="slider-pips"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Colored Connect Elements</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-color">
            <div class="slider" id="slider-color"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Changing the slider by key press</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="keypress-slider pt-5">
            <div id="keypress"></div>
            <input type="text" class="form-control my-4" id="input-with-keypress-1" />
            <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="input-with-keypress-0" />
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Skipping steps</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="skipping-slider">
            <div id="skipstep"></div>
            <span class="example-val" id="skip-value-lower"></span>
            <span class="example-val" id="skip-value-upper"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Using the slider with huge numbers</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="hugenumber-slider">
            <div id="slider-huge"></div>
            <span class="example-val" id="huge-value"></span>
          </div>
        </div>
      </div>
    </div>

    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Soft limits</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="extra-padding mb-12">
            <div class="softlimit-slider">
              <div id="soft"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xl:w-1/3">
      <div class="card">
        <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
          <h4 class="text-base">Slider direction</h4>
        </div>
        <div class="sm:p-5 p-4">
          <div class="slider-direction">
            <div id="slider-direction"></div>
            <div class="example-val" id="field"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
