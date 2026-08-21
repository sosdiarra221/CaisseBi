<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import Filters from "~/components/ecommerce/shop/Filters.vue";
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Product List" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/6 col-xxl-3 md:w-1/3 max-md:w-72 max-md:fixed max-md:h-full max-md:duration-500 max-md:left-[-22rem] max-md:top-0 max-md:z-999 mail-left-body">
          <Filters />
        </div>
        <div class="md:hidden flex items-center mb-6">
          <h4>Filter</h4>
          <div
            class="float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover ml-auto email-tools-box"
          >
            <i class="fas fa-sort-amount-up-alt"></i>
          </div>
        </div>
        <div class="xl:w-5/6 col-xxl-9 md:w-2/3">
          <div class="row">
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink>
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row m-b-30">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/3.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink>
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row m-b-30">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/4.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink >
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row m-b-30">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/5.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink >
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink  to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row m-b-30">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/6.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink>
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/2 col-xxl-4">
              <div class="card">
                <div class="sm:p-5 p-4">
                  <div class="row m-b-30">
                    <div class="xl:w-1/3 col-xxl-12">
                      <div class="mb-6 mb-xxl-4">
                        <div class="overflow-hidden">
                          <img class="w-full" src="assets/images/product/7.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-2/3 col-xxl-12">
                      <div class="relative flex items-center mb-4">
                        <div>
                          <NuxtLink to="/ecom-product-detail">
                            <h5 class="font-medium">Smart Watch for NexaDash</h5>
                          </NuxtLink >
                          <span>Accessories, Clocks</span>
                        </div>
                        <div class="star-rating ml-auto">
                          <ul>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa fa-star text-gold mr-1"></i></li>
                            <li class="inline-block"><i class="fa-solid fa-star-half-stroke text-gold"></i></li>
                          </ul>
                          <span>34 Review</span>
                        </div>
                      </div>
                      <p class="mb-4 sm:text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                      <div class="rate">
                        <div class="flex items-center xl:mb-4 mb-2">
                          <div>
                            <h6 class="mb-2">Price</h6>
                            <span class="price-num">$40.00</span>
                          </div>
                          <div class="ml-10">
                            <h6 class="mb-2">Color</h6>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(208, 237, 255)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(241, 231, 230)"></span>
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
                                <span class="mr-3.6 size-4 block relative rounded-full z-1" style="background-color: rgb(91, 191, 191)"></span>
                              </div>
                            </div>
                          </div>
                          <div class="ml-auto">
                            <NuxtLink to="/ecom-product-detail" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary !text-white btn-sm">Add to cart</NuxtLink >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
