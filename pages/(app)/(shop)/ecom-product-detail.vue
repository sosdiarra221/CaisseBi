<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

const tab = ref("tab1");
const tabPanel = ref("AllStatus");
const open = ref(false);

interface timerType {
  day: string | number;
  hour: string | number;
  min: string | number;
  sec: string | number;
}
const titmer = reactive<timerType>({ day: 0, hour: 0, min: 0, sec: 0 });

onMounted(() => {
  var countDownDate = new Date("Jan 5, 2026").getTime();
  setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    titmer.day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    titmer.hour = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    titmer.min = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    titmer.sec = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    );

    if (distance < 0) {
      countDownDate = new Date(new Date().getFullYear() + 1).getTime();
    }
  }, 1000);
});

const qty = ref(1);
const qtyHanlder = (value: string) => {
  switch (value) {
    case "decrease":
      qty.value > 1 ? qty.value-- : qty.value;
      break;
    case "increase":
      qty.value++;
      break;
  }
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Product List" />
    <div class="container-fluid">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="row">
                <div class="xl:w-1/3">
                  <div>
                    <div>
                      <Transition
                        v-show="tab == 'tab1'"
                        enter-active-class="transition-all duration-700 easy-in-out"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity - 100"
                      >
                        <img
                          class="max-w-full !h-auto rounded-lg w-full"
                          src="assets/images/product/1.jpg"
                          alt=""
                        />
                      </Transition>
                      <Transition
                        v-show="tab == 'tab2'"
                        enter-active-class="transition-all duration-700 easy-in-out"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity - 100"
                      >
                        <img
                          class="max-w-full !h-auto rounded-lg w-full"
                          src="assets/images/product/2.jpg"
                          alt=""
                        />
                      </Transition>
                      <Transition
                        v-show="tab == 'tab3'"
                        enter-active-class="transition-all duration-700 easy-in-out"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity - 100"
                      >
                        <img
                          class="max-w-full !h-auto rounded-lg w-full"
                          src="assets/images/product/3.jpg"
                          alt=""
                        />
                      </Transition>
                      <Transition
                        v-show="tab == 'tab4'"
                        enter-active-class="transition-all duration-700 easy-in-out"
                        enter-from-class="opacity-0"
                        enter-to-class="opacity - 100"
                      >
                        <img
                          class="max-w-full !h-auto rounded-lg w-full"
                          src="assets/images/product/4.jpg"
                          alt=""
                        />
                      </Transition>
                    </div>
                    <div class="mb-6 xl:mb-0">
                      <!-- Nav tabs -->
                      <ul
                        class="nav nav-tabs slide-item-list mx-[-0.3125rem] text-center mt-4 flex flex-wrap"
                        id="myTab"
                        role="tablist"
                      >
                        <li
                          class="nav-item px-[0.3125rem] w-1/4 inline-block"
                          role="presentation"
                        >
                          <a
                            href="#first"
                            class="nav-link"
                            @click.prevent="tab = 'tab1'"
                            ><img
                              class="size-full max-w-full !h-auto mr-2 rounded-lg"
                              src="assets/images/tab/1.jpg"
                              alt=""
                              width="80"
                          /></a>
                        </li>
                        <li
                          class="nav-item px-[0.3125rem] w-1/4 inline-block"
                          role="presentation"
                        >
                          <a
                            href="#second"
                            class="nav-link"
                            @click.prevent="tab = 'tab2'"
                            ><img
                              class="size-full max-w-full !h-auto mr-2 rounded-lg"
                              src="assets/images/tab/2.jpg"
                              alt=""
                              width="80"
                          /></a>
                        </li>
                        <li
                          class="nav-item px-[0.3125rem] w-1/4 inline-block"
                          role="presentation"
                        >
                          <a
                            href="#third"
                            class="nav-link"
                            @click.prevent="tab = 'tab3'"
                            ><img
                              class="size-full max-w-full !h-auto mr-2 rounded-lg"
                              src="assets/images/tab/3.jpg"
                              alt=""
                              width="80"
                          /></a>
                        </li>
                        <li
                          class="nav-item px-[0.3125rem] w-1/4 inline-block"
                          role="presentation"
                        >
                          <a
                            href="#forth"
                            class="nav-link"
                            @click.prevent="tab = 'tab4'"
                            ><img
                              class="size-full max-w-full !h-auto rounded-lg"
                              src="assets/images/tab/4.jpg"
                              alt=""
                              width="80"
                          /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="xl:w-5/12">
                  <div class="product-details-bx">
                    <div class="new-arrival-content pr">
                      <h5 class="mb-2">
                        Lightweight Puffer Jacket With a Hood
                      </h5>
                      <div class="mb-3.6 w-full table">
                        <ul class="mb-2">
                          <li class="inline-block">
                            <span
                              class="badge bg-success text-white badge-sm mr-4"
                              >#1 Best Seller</span
                            >
                          </li>
                          <li class="inline-block">
                            <i class="fa fa-star text-gold mr-1"></i>
                          </li>
                          <li class="inline-block">
                            <i class="fa fa-star text-gold mr-1"></i>
                          </li>
                          <li class="inline-block">
                            <i class="fa fa-star text-gold mr-1"></i>
                          </li>
                          <li class="inline-block">
                            <i class="fa fa-star text-gold mr-1"></i>
                          </li>
                          <li class="inline-block">
                            <i class="fa fa-star text-gold"></i>
                          </li>
                        </ul>
                        <span class="review-text">(34 reviews) / </span>
                        <a
                          class="text-secondary underline"
                          href="javascript:void(0);"
                          @click="open = true"
                          >Write a review?</a
                        >
                      </div>
                      <div class="py-3.6 border-t border-dashed border-border">
                        <div class="row">
                          <div class="sm:w-1/2">
                            <div class="size-filter">
                              <h5 class="mb-3.6">Available size</h5>
                              <div
                                class="flex select-size mb-2"
                                role="group"
                                aria-label="Basic radio toggle button group"
                              >
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio1"
                                  checked
                                />
                                <label
                                  class="btn-outline-primary min-w-[46px] h-[46px] p-[7px] min-h-[46px] mr-1.1 text-center text-primary border border-primary sm:text-[16px] leading-[1.9rem] rounded-lg duration-300 mb-0"
                                  for="btnradio1"
                                  >XS</label
                                >

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio2"
                                />
                                <label
                                  class="btn-outline-primary min-w-[46px] h-[46px] p-[7px] min-h-[46px] mx-1.1 text-center text-primary border border-primary sm:text-[16px] leading-[1.9rem] rounded-lg duration-300 mb-0"
                                  for="btnradio2"
                                  >SM</label
                                >

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio3"
                                />
                                <label
                                  class="btn-outline-primary min-w-[46px] h-[46px] p-[7px] min-h-[46px] mx-1.1 text-center text-primary border border-primary sm:text-[16px] leading-[1.9rem] rounded-lg duration-300 mb-0"
                                  for="btnradio3"
                                  >MD</label
                                >

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio4"
                                />
                                <label
                                  class="btn-outline-primary min-w-[46px] h-[46px] p-[7px] min-h-[46px] mx-1.1 text-center text-primary border border-primary sm:text-[16px] leading-[1.9rem] rounded-lg duration-300 mb-0"
                                  for="btnradio4"
                                  >LG</label
                                >

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio5"
                                />
                                <label
                                  class="btn-outline-primary min-w-[46px] h-[46px] p-[7px] min-h-[46px] mx-1.1 text-center text-primary border border-primary sm:text-[16px] leading-[1.9rem] rounded-lg duration-300 mb-0"
                                  for="btnradio5"
                                  >XL</label
                                >
                              </div>
                            </div>
                          </div>
                          <div class="sm:w-1/2 self-center">
                            <div class="ml-0 sm:ml-12 mt-4 sm:mt-0">
                              <h5 class="mb-2">Available Color</h5>
                              <div class="flex items-center color-filter">
                                <div class="form-check !p-0">
                                  <input
                                    class="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input !ml-0 !mt-0"
                                    type="radio"
                                    name="radioNoLabel"
                                    id="radioNoLabel11"
                                    value="#24262B"
                                    aria-label="..."
                                    checked
                                  />
                                  <span
                                    class="mr-3.6 size-4 block relative rounded-full z-1"
                                    style="background-color: rgb(36, 38, 43)"
                                  ></span>
                                </div>
                                <div class="form-check !p-0">
                                  <input
                                    class="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input !ml-0 !mt-0"
                                    type="radio"
                                    name="radioNoLabel"
                                    id="radioNoLabel12"
                                    value="#8CB2D1"
                                    aria-label="..."
                                  />
                                  <span
                                    class="mr-3.6 size-4 block relative rounded-full z-1"
                                    style="background-color: rgb(140, 178, 209)"
                                  ></span>
                                </div>
                                <div class="form-check !p-0">
                                  <input
                                    class="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input !ml-0 !mt-0"
                                    type="radio"
                                    name="radioNoLabel"
                                    id="radioNoLabel13"
                                    value="#0D775E"
                                    aria-label="..."
                                  />
                                  <span
                                    class="mr-3.6 size-4 block relative rounded-full z-1"
                                    style="background-color: rgb(13, 119, 94)"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="py-3.6 border-t border-dashed border-border">
                        <div class="row">
                          <div class="xl:w-5/12 !w-1/2">
                            <div class="flex items-center">
                              <button
                                class="min-w-11 min-h-11 bg-black text-white text-2xxl rounded-lg border border-black"
                                data-decrease
                                @click="qtyHanlder('decrease')"
                              >
                                -
                              </button>
                              <input
                                class="py-1.5 px-3 h-11 border border-border rounded-lg duration-500 focus:border-primary bg-transparent mx-2 w-16 text-center"
                                data-value
                                type="text"
                                v-model="qty"
                              />
                              <button
                                class="min-w-11 min-h-11 bg-black text-white text-2xxl rounded-lg border border-black"
                                data-increase
                                @click="qtyHanlder('increase')"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div class="xl:w-7/12 !w-1/2">
                            <div>
                              <a
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white"
                              >
                                <i class="flaticon-shopping-cart me-2"></i>Add
                                To Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="row">
                          <div class="w-full">
                            <div
                              class="border border-dashed border-border p-3.6 rounded-lg flex items-center mt-6.1 max-3xl:block max-3xl:mt-0 max-lg:!mt-5 max-sm:text-center month-deal"
                            >
                              <div>
                                <h5 class="mb-2">Deal of the month</h5>
                                <p class="sm:text-sm leading-6">
                                  Yes! Send me exclusive offers, personalised,
                                  and unique gift ideas, tips for shopping on
                                  Nexadash
                                  <NuxtLink to="#" class="hover:text-primary"
                                    >View All Products</NuxtLink
                                  >
                                </p>
                              </div>
                              <div>
                                <div class="countdown text-center flex">
                                  <div class="mx-1.1">
                                    <span
                                      class="time days text-xxl text-black bg-[#F3F5F8] size-13.5 leading-[50px] rounded-[3px] mb-1 mx-auto block font-medium"
                                      >{{ titmer.day }}</span
                                    >
                                    <span class="uppercase text-xs">Days</span>
                                  </div>
                                  <div class="mx-1.1">
                                    <span
                                      class="time hours text-xxl text-black bg-[#F3F5F8] size-13.5 leading-[50px] rounded-[3px] mb-1 mx-auto block font-medium"
                                      >{{ titmer.hour }}</span
                                    >
                                    <span class="uppercase text-xs">Hours</span>
                                  </div>
                                  <div class="mx-1.1">
                                    <span
                                      class="time mins text-xxl text-black bg-[#F3F5F8] size-13.5 leading-[50px] rounded-[3px] mb-1 mx-auto block font-medium"
                                      >{{ titmer.min }}</span
                                    >
                                    <span class="uppercase text-xs"
                                      >Minutess</span
                                    >
                                  </div>
                                  <div class="mx-1.1">
                                    <span
                                      class="time secs text-xxl text-black bg-[#F3F5F8] size-13.5 leading-[50px] rounded-[3px] mb-1 mx-auto block font-medium"
                                      >{{ titmer.sec }}</span
                                    >
                                    <span class="uppercase text-xs"
                                      >Second</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-3.6">
                      <div class="row">
                        <div class="w-full">
                          <div>
                            <ul>
                              <li class="mb-2">
                                <strong class="text-secondary me-2"
                                  >SKU:</strong
                                >
                                <span>PRT584E63A</span>
                              </li>
                              <li class="mb-2">
                                <strong class="text-secondary me-2"
                                  >Category:</strong
                                >
                                <span>Cable handles,</span>
                                <span>Rubber Weight,</span>
                                <span>Fitness Rope,</span>
                                <span>Hand Strengthener,</span>
                                <span>Kettle Bell</span>
                              </li>
                              <li class="mb-2">
                                <strong class="text-secondary me-2"
                                  >Tags:</strong
                                >
                                <a href="javascript:void(0);">Fitness,</a>
                                <a href="javascript:void(0);">Shoes,</a>
                                <a href="javascript:void(0);">Everyday,</a>
                                <a href="javascript:void(0);">Sport</a>
                              </li>
                              <li class="social-bx">
                                <strong class="text-secondary me-2"
                                  >Share:</strong
                                >
                                <span class="social-media">
                                  <a
                                    href="https://www.facebook.com/dexignzone"
                                    target="_blank"
                                  >
                                    <i
                                      class="fa-brands fa-facebook-f mr-2.5 text-secondary text-base"
                                    ></i>
                                  </a>
                                </span>
                                <span class="social-media">
                                  <a
                                    href="https://www.linkedin.com/showcase/3686700/admin/"
                                    target="_blank"
                                  >
                                    <i
                                      class="fa-brands fa-linkedin-in mr-2.5 text-secondary text-base"
                                    ></i>
                                  </a>
                                </span>
                                <span class="social-media">
                                  <a
                                    href="https://www.instagram.com/dexignzone/"
                                    target="_blank"
                                  >
                                    <i
                                      class="fa-brands fa-instagram mr-2.5 text-secondary text-base"
                                    ></i>
                                  </a>
                                </span>
                                <span class="social-media">
                                  <a
                                    href="https://twitter.com/dexignzones"
                                    target="_blank"
                                  >
                                    <i
                                      class="fa-brands fa-twitter mr-2.5 text-secondary text-base"
                                    ></i>
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/4">
                  <div
                    class="border border-border border-dashed rounded-lg 4xl:py-9 4xl:px-7.5 py-5 px-3.6"
                  >
                    <a
                      href="javascript:void(0);"
                      class="btn border border-primary text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white !block w-full text-center"
                      >Bank Offer 5% Cashback</a
                    >
                    <div
                      class="flex items-center border border-border border-dashed mt-3.6 rounded-lg p-2.5"
                    >
                      <i
                        class="flaticon flaticon-ship text-primary text-4.5xl mr-3.6"
                      ></i>
                      <div>
                        <h6>Easy Returen</h6>
                        <p>30 Days</p>
                      </div>
                    </div>
                    <div
                      class="flex items-center border border-border border-dashed mt-3.6 rounded-lg p-2.5"
                    >
                      <i
                        class="flaticon-box text-primary text-4.5xl mr-3.6"
                      ></i>
                      <div>
                        <h6>Enjoy The Product</h6>
                        <p>Lorem Ipsum is simply.</p>
                      </div>
                    </div>
                    <div
                      class="border-b border-border flex items-center mt-6 pb-4"
                    >
                      <svg
                        class="mr-4 svg-details"
                        height="20"
                        viewBox="1 1 511.99984 511"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m512 256.5c0 50.53125-15 99.671875-43.375 142.113281-3.855469 5.769531-10.191406 8.886719-16.644531 8.886719-3.820313 0-7.683594-1.089844-11.097657-3.375-9.183593-6.136719-11.648437-18.558594-5.511718-27.742188 23.964844-35.839843 36.628906-77.292968 36.628906-119.882812 0-18.300781-2.289062-36.476562-6.804688-54.015625-2.753906-10.695313 3.6875-21.601563 14.382813-24.355469 10.703125-2.75 21.601563 3.6875 24.355469 14.382813 5.351562 20.796875 8.066406 42.324219 8.066406 63.988281zm-144.265625 184.894531c-33.59375 20.347657-72.230469 31.105469-111.734375 31.105469-119.101562 0-216-96.898438-216-216s96.898438-216 216-216c44.097656 0 86.5 13.195312 122.628906 38.160156 9.085938 6.277344 21.542969 4 27.824219-5.085937 6.277344-9.085938 4.003906-21.542969-5.085937-27.824219-42.84375-29.601562-93.109376-45.25-145.367188-45.25-68.378906 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469 46.8125 0 92.617188-12.757812 132.460938-36.894531 9.449218-5.722657 12.46875-18.019531 6.746093-27.46875-5.726562-9.449219-18.023437-12.464844-27.472656-6.742188zm-109.804687-126.902343c-3.167969.125-6.125-1-8.421876-3.1875l-104.746093-99.316407c-8.015625-7.601562-20.675781-7.265625-28.273438.75-7.601562 8.015625-7.265625 20.675781.75 28.273438l104.726563 99.300781c9.671875 9.195312 22.183594 14.1875 35.441406 14.1875.710938 0 1.421875-.015625 2.132812-.042969 14.042969-.566406 26.941407-6.644531 36.316407-17.117187.238281-.261719.464843-.53125.6875-.808594l211.042969-262.5c6.921874-8.609375 5.554687-21.199219-3.054688-28.117188-8.605469-6.921874-21.199219-5.554687-28.121094 3.054688l-210.628906 261.988281c-2.070312 2.160157-4.84375 3.414063-7.851562 3.535157zm0 0"
                        />
                      </svg>
                      <p class="text-secondary">
                        You will save ₹504 on this order
                      </p>
                    </div>
                    <div class="flex items-center justify-between mt-4">
                      <p class="mb-4">Price</p>
                      <h4 class="text-base mb-2">$125.75</h4>
                    </div>
                    <div>
                      <button
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full text-center mb-4"
                      >
                        Add to Cart
                      </button>
                      <button
                        class="btn border border-primary text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white !block w-full text-center"
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="mt-12">
                    <div class="project">
                      <ul
                        class="flex flex-wrap items-center justify-center border-b border-border"
                      >
                        <li class="nav-item">
                          <a
                            class="py-2 px-4 block text-primary border border-transparent border-b-0 rounded-t-lg -mb-px"
                            @click.prevent="tabPanel = 'AllStatus'"
                            :class="{
                              'bg-bodybg !border-border !text-secondary':
                                tabPanel == 'AllStatus',
                            }"
                            href="javascript:void(0);"
                            >Description</a
                          >
                        </li>
                        <li class="nav-item">
                          <a
                            class="py-2 px-4 block text-primary border border-transparent border-b-0 rounded-t-lg -mb-px"
                            @click.prevent="tabPanel = 'OnProgress'"
                            :class="{
                              'bg-bodybg !border-border !text-secondary':
                                tabPanel == 'OnProgress',
                            }"
                            href="javascript:void(0);"
                            >Reviews (2)</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="tab-content">
                      <Transition
                        v-show="tabPanel == 'AllStatus'"
                        enter-active-class="transition-all duration-500 easy-in-out"
                        enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                        enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                      >
                        <template>
                          <div class="text-center mt-6">
                            <h5 class="text-base mb-2">
                              Eco-friendly Products Revolution
                            </h5>
                            <p class="mb-4">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                            <ul
                              class="flex items-center lg:justify-center justify-start flex-wrap"
                            >
                              <li
                                class="flex items-center py-2.5 pr-7.5 text-left"
                              >
                                <i
                                  class="fa-solid fa-check text-xxl flex items-center justify-center border border-primary rounded-full size-10 min-w-10 mr-2.5 text-primary"
                                ></i>
                                <h5 class="mb-0">
                                  Transform Your Look with Confidence
                                </h5>
                              </li>
                              <li
                                class="flex items-center py-2.5 pr-7.5 text-left"
                              >
                                <i
                                  class="fa-solid fa-check text-xxl flex items-center justify-center border border-primary rounded-full size-10 min-w-10 mr-2.5 text-primary"
                                ></i>
                                <h5 class="mb-0">
                                  Timeless Beauty Secrets Revealed
                                </h5>
                              </li>
                              <li
                                class="flex items-center py-2.5 pr-7.5 text-left"
                              >
                                <i
                                  class="fa-solid fa-check text-xxl flex items-center justify-center border border-primary rounded-full size-10 min-w-10 mr-2.5 text-primary"
                                ></i>
                                <h5 class="mb-0">
                                  Radiate Confidence Through Timeless Beauty
                                </h5>
                              </li>
                            </ul>
                          </div>
                          <h5 class="text-base my-4">
                            Related Product Details
                          </h5>
                          <div class="row">
                            <div class="xl:w-1/4 sm:w-1/2">
                              <div class="card">
                                <div
                                  class="sm:p-5 p-4 relative overflow-hidden group"
                                >
                                  <div class="relative h-auto overflow-hidden">
                                    <img
                                      loading="lazy"
                                      class="absolute top-0 left-0 size-full object-cover"
                                      src="assets/images/product/1.jpg"
                                      alt=""
                                    />
                                    <img
                                      loading="lazy"
                                      class="opacity-0 size-full relative duration-500 group-hover:opacity-100"
                                      src="assets/images/product/pic1.jpg"
                                      alt=""
                                    />
                                    <div
                                      class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100"
                                    >
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2"
                                      >
                                        <i class="fa-regular fa-heart"></i>
                                      </a>
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full"
                                      >
                                        <i class="fa-regular fa-eye"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="text-center mt-4">
                                    <h4 class="text-base mb-2.5">
                                      <NuxtLink to="/ecom-product-detail"
                                        >Bonorum et Malorum</NuxtLink
                                      >
                                    </h4>
                                    <ul class="star-rating">
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa-solid fa-star-half-stroke mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa-solid fa-star-half-stroke"
                                        ></i>
                                      </li>
                                    </ul>
                                    <del>$761.00</del>
                                    <span
                                      class="text-lg text-primary font-semibold"
                                      >$159</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="xl:w-1/4 sm:w-1/2">
                              <div class="card">
                                <div
                                  class="sm:p-5 p-4 relative overflow-hidden group"
                                >
                                  <div class="relative h-auto overflow-hidden">
                                    <img
                                      loading="lazy"
                                      class="absolute top-0 left-0 size-full object-cover"
                                      src="assets/images/product/2.jpg"
                                      alt=""
                                    />
                                    <img
                                      loading="lazy"
                                      class="opacity-0 size-full relative duration-500 group-hover:opacity-100"
                                      src="assets/images/product/pic2.jpg"
                                      alt=""
                                    />
                                    <div
                                      class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100"
                                    >
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2"
                                      >
                                        <i class="fa-regular fa-heart"></i>
                                      </a>
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full"
                                      >
                                        <i class="fa-regular fa-eye"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="text-center mt-4">
                                    <h4 class="text-base mb-2.5">
                                      <NuxtLink to="/ecom-product-detail"
                                        >Striped Dress</NuxtLink
                                      >
                                    </h4>
                                    <ul class="star-rating">
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i class="text-gold fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <del>$761.00</del>
                                    <span
                                      class="text-lg text-primary font-semibold"
                                      >$179</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="xl:w-1/4 sm:w-1/2">
                              <div class="card">
                                <div
                                  class="sm:p-5 p-4 relative overflow-hidden group"
                                >
                                  <div class="relative h-auto overflow-hidden">
                                    <img
                                      loading="lazy"
                                      class="absolute top-0 left-0 size-full object-cover"
                                      src="assets/images/product/3.jpg"
                                      alt=""
                                    />
                                    <img
                                      loading="lazy"
                                      class="opacity-0 size-full relative duration-500 group-hover:opacity-100"
                                      src="assets/images/product/pic3.jpg"
                                      alt=""
                                    />
                                    <div
                                      class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100"
                                    >
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2"
                                      >
                                        <i class="fa-regular fa-heart"></i>
                                      </a>
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full"
                                      >
                                        <i class="fa-regular fa-eye"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="text-center mt-4">
                                    <h4 class="text-base mb-2.5">
                                      <NuxtLink to="/ecom-product-detail"
                                        >Bonorum et Malorum</NuxtLink
                                      >
                                    </h4>
                                    <ul class="star-rating">
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i class="text-gold fa fa-star"></i>
                                      </li>
                                    </ul>
                                    <del>$761.00</del>
                                    <span
                                      class="text-lg text-primary font-semibold"
                                      >$189</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="xl:w-1/4 sm:w-1/2">
                              <div class="card">
                                <div
                                  class="sm:p-5 p-4 relative overflow-hidden group"
                                >
                                  <div class="relative h-auto overflow-hidden">
                                    <img
                                      loading="lazy"
                                      class="absolute top-0 left-0 size-full object-cover"
                                      src="assets/images/product/4.jpg"
                                      alt=""
                                    />
                                    <img
                                      loading="lazy"
                                      class="opacity-0 size-full relative duration-500 group-hover:opacity-100"
                                      src="assets/images/product/pic4.jpg"
                                      alt=""
                                    />
                                    <div
                                      class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100"
                                    >
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2"
                                      >
                                        <i class="fa-regular fa-heart"></i>
                                      </a>
                                      <a
                                        href="javascript:void(0);"
                                        class="size-9 flex items-center justify-center bg-card border border-border rounded-full"
                                      >
                                        <i class="fa-regular fa-eye"></i>
                                      </a>
                                    </div>
                                  </div>
                                  <div class="text-center mt-4">
                                    <h4 class="text-base mb-2.5">
                                      <NuxtLink to="/ecom-product-detail"
                                        >Bonorum et Malorum</NuxtLink
                                      >
                                    </h4>
                                    <ul class="star-rating">
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa fa-star mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa-solid fa-star-half-stroke mr-1"
                                        ></i>
                                      </li>
                                      <li class="inline-block">
                                        <i
                                          class="text-gold fa-solid fa-star-half-stroke"
                                        ></i>
                                      </li>
                                    </ul>
                                    <del>$761.00</del>
                                    <span
                                      class="text-lg text-primary font-semibold"
                                      >$149</span
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </template>
                      </Transition>
                      <Transition
                        v-show="tabPanel == 'OnProgress'"
                        enter-active-class="transition-all duration-500 easy-in-out"
                        enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                        enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                      >
                        <template>
                          <h4 class="text-base mb-2 mt-6">Comments[02]</h4>
                          <p class="mb-4">
                            There Are Many Variations Of Passages Of Lorem Ipsum
                            Available.
                          </p>
                          <div class="row">
                            <div class="xl:w-1/2">
                              <div class="flex items-strat">
                                <img
                                  src="assets/images/users/pic1.jpg"
                                  class="size-14.5 rounded-lg mr-3.5"
                                  alt=""
                                />
                                <div>
                                  <h5>Monsur Rahman Lito</h5>
                                  <ul class="flex items-center">
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning"
                                      ></i>
                                    </li>
                                  </ul>
                                  <p class="mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Qui quae, ipsum commodi
                                    rerum porro totam libero est.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="xl:w-1/2">
                              <div class="flex items-strat">
                                <img
                                  src="assets/images/users/pic1.jpg"
                                  class="size-14.5 rounded-lg mr-3.5"
                                  alt=""
                                />
                                <div>
                                  <h5>Monsur Rahman Lito</h5>
                                  <ul class="flex items-center">
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning mr-1"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        class="fa-solid fa-star text-warning"
                                      ></i>
                                    </li>
                                  </ul>
                                  <p class="mb-4">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Qui quae, ipsum commodi
                                    rerum porro totam libero est.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="comment mt-4">
                            <h3 class="text-base mb-2">Leave Comment</h3>
                            <div class="row">
                              <div class="sm:w-1/2">
                                <div class="mb-4">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label required"
                                    >Name</label
                                  >
                                  <input
                                    type="text"
                                    class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                    id="exampleFormControlInput1"
                                    placeholder="Karen Hope"
                                  />
                                </div>
                              </div>
                              <div class="sm:w-1/2">
                                <div class="mb-4">
                                  <label
                                    for="exampleFormControlInput2"
                                    class="form-label required"
                                    >Email Id</label
                                  >
                                  <input
                                    type="email"
                                    class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                    id="exampleFormControlInput2"
                                    placeholder="hello@example.com"
                                  />
                                </div>
                              </div>
                              <div class="w-full">
                                <div class="mb-4">
                                  <label
                                    for="exampleFormControlTextarea3"
                                    class="form-label required"
                                    >Messasge</label
                                  >
                                  <textarea
                                    class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                    id="exampleFormControlTextarea3"
                                    rows="3"
                                  >
Messasge</textarea
                                  >
                                </div>
                              </div>
                              <div>
                                <button
                                  class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                                  type="submit"
                                >
                                  Submit A Comment
                                </button>
                              </div>
                            </div>
                          </div>
                        </template>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- review -->
        <Transition
          v-cloak
          v-show="open"
          enter-active-class="transition ease-in duration-800"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-500"
          leave-to-class="opacity-100"
          leave-from-class-="opacity-0"
        >
          <div
            class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
          >
            <div
              class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
              @click.away="open = false"
            >
              <div
                class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
              >
                <div
                  class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
                >
                  <h5 class="modal-title">Review</h5>
                  <button
                    type="button"
                    class="btn-close dark:invert"
                    @click="open = false"
                  ></button>
                </div>
                <div class="relative p-7.5">
                  <form>
                    <div class="text-center mb-6">
                      <img
                        class="max-w-full !h-auto inline-block rounded-lg"
                        width="78"
                        src="assets/images/avatar/1.jpg"
                        alt="DexignZone"
                      />
                    </div>
                    <div class="mb-4">
                      <div class="rating-widget mb-4 text-center">
                        <div class="rating-stars mb-6 text-center">
                          <ul id="stars">
                            <li
                              class="star inline-block"
                              title="Poor"
                              data-value="1"
                            >
                              <i class="fa fa-star fa-fw"></i>
                            </li>
                            <li
                              class="star inline-block"
                              title="Fair"
                              data-value="2"
                            >
                              <i class="fa fa-star fa-fw"></i>
                            </li>
                            <li
                              class="star inline-block"
                              title="Good"
                              data-value="3"
                            >
                              <i class="fa fa-star fa-fw"></i>
                            </li>
                            <li
                              class="star inline-block"
                              title="Excellent"
                              data-value="4"
                            >
                              <i class="fa fa-star fa-fw"></i>
                            </li>
                            <li
                              class="star inline-block"
                              title="WOW!!!"
                              data-value="5"
                            >
                              <i class="fa fa-star fa-fw"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4">
                      <textarea
                        class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                        placeholder="Comment"
                        rows="5"
                      ></textarea>
                    </div>
                    <button
                      class="btn bg-success hover:shadow-btnsuccess text-white block text-center w-full"
                    >
                      RATE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
