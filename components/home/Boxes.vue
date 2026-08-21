<script lang="ts" setup>
const box = [
  { price: "$10,270", value: "10.55%", title: "Total Earning", colums: "col-span-12" },
  { price: "$25,302", value: "12.45%", title: "Total Expenses", colums: "col-span-6" },
  { price: "$23,411", value: "13.45%", title: "Total Balance", colums: "col-span-6" },
];
</script>

<template>
  <div class="xl:col-span-4 col-span-12">
    <div
      class="card !bg-[#F7D06B] z-1 overflow-hidden after:absolute after:content-[''] after:size-64 after:bg-[#F4BB60] after:left-[-57px] after:bottom-[-141px] after:rounded-full after:-z-1"
    >
      <div class="sm:p-5 p-4">
        <div class="flex justify-between">
          <span class="text-black uppercase font-medium">Credit Card</span>
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.7816 0.651573L14.9276 19.3929H9.80133L5.93906 4.43778C5.70129 3.51552 5.49809 3.17989 4.78512 2.78825C3.61723 2.15685 1.69617 1.56458 0 1.19567L0.118711 0.651689H8.36625C9.41813 0.651689 10.3638 1.35329 10.6016 2.56278L12.6438 13.4099L17.688 0.651689L22.7816 0.651573ZM42.8612 13.2713C42.8839 8.32759 36.0206 8.05853 36.07 5.84685C36.0833 5.17173 36.7232 4.45735 38.1245 4.277C38.8204 4.18442 40.7353 4.11657 42.9057 5.11302L43.7564 1.1406C42.5886 0.716728 41.0876 0.310791 39.222 0.310791C34.4303 0.310791 31.057 2.8595 31.0286 6.50626C30.9971 9.20298 33.4352 10.7079 35.2743 11.606C37.1626 12.525 37.794 13.1118 37.7873 13.9359C37.775 15.1938 36.2807 15.7436 34.8868 15.7683C32.4487 15.8063 31.0346 15.1095 29.9053 14.5835L29.0276 18.6925C30.1588 19.2118 32.2532 19.6628 34.4207 19.6894C39.5135 19.6892 42.8452 17.1676 42.8612 13.2713ZM55.515 19.393H60L56.0865 0.651689H51.9462C51.0158 0.651689 50.2315 1.19427 49.882 2.02548L42.6115 19.393H47.7004L48.7105 16.5941H54.9311L55.515 19.393ZM50.1052 12.7528L52.6582 5.71571L54.1269 12.7528H50.1052ZM29.71 0.651573L25.6986 19.3929H20.8495L24.8618 0.651573H29.71Z"
              fill="#111111"
            />
          </svg>
        </div>
        <h4 class="!text-black mt-[3.2rem] font-medium mb-2 text-lg"><span>**** &nbsp;****&nbsp;****&nbsp;7890</span></h4>
        <div class="flex items-center card-details">
          <div class="me-4">
            <small class="text-black font-medium opacity-70">Valid Date</small>
            <h4 class="!text-black text-base">08/27</h4>
          </div>
          <div class="ms-4">
            <small class="text-black font-medium opacity-70">Card Holder</small>
            <h4 class="!text-black text-base">Maqruezz Silalahi</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-8 col-span-12">
    <div class="grid grid-cols-12 gap-x-3">
      <div :class="`xl:col-span-4 sm:col-span-4 ${colums}`" v-for="({ title, value, colums, price }, ind) in box" :key="ind">
        <div class="card text-center">
          <div class="sm:p-5 p-4">
            <span class="text-primary font-medium">{{ title }}</span>
            <h3 class="4xl:text-2.5xl text-xl font-semibold mt-3 mb-11">{{ price }}</h3>
            <a
              href="javascript:void(0);"
              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm max-5xl:!px-2 w-9/12 max-5xl:!w-auto mb-2.5"
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16699 11.8334L11.8337 5.16675" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.16699 5.16675H11.8337V11.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {{ value }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
