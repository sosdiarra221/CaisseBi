<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import Filters from "~/components/ecommerce/shop/Filters.vue";
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Product Grid" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/4 col-xxl-3 md:w-1/3 max-md:w-72 max-md:fixed max-md:h-full max-md:duration-500 max-md:left-[-22rem] max-md:top-0 max-md:z-999 mail-left-body">
          <Filters />
        </div>
        <div class="md:hidden flex items-center">
          <h4>Filter</h4>
          <div
            class="float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover ml-auto email-tools-box"
          >
            <i class="fas fa-sort-amount-up-alt"></i>
          </div>
        </div>
        <div class="xl:w-3/4 col-xxl-9 md:w-2/3 !mt-6 md:!mt-0">
          <div class="row">
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/1.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic1.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$159</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/2.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic2.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$179</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/3.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic3.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$189</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/4.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic4.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$149</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/5.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic5.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$159</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/6.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic6.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$245</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/7.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic7.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$364</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 col-xxl-4 sm:w-1/2">
              <div class="card">
                <div class="sm:p-5 p-4 relative overflow-hidden group">
                  <div class="relative h-auto overflow-hidden">
                    <img loading="lazy" class="absolute top-0 left-0 size-full object-cover" src="assets/images/product/1.jpg" alt="" />
                    <img loading="lazy" class="opacity-0 size-full relative duration-500 group-hover:opacity-100" src="assets/images/product/pic1.jpg" alt="" />
                    <div class="absolute z-1 duration-500 top-3.6 -right-10 grid opacity-0 group-hover:right-3 group-hover:opacity-100">
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full mb-2">
                        <i class="fa-regular fa-heart"></i>
                      </a>
                      <a href="javascript:void(0);" class="size-9 flex items-center justify-center bg-card border border-border rounded-full">
                        <i class="fa-regular fa-eye"></i>
                      </a>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                    <h4 class="text-base mb-2.5"><NuxtLink to="/ecom-product-detail">Bonorum et Malorum</NuxtLink></h4>
                    <ul class="star-rating">
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa fa-star mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke mr-1"></i></li>
                      <li class="inline-block"><i class="text-gold fa-solid fa-star-half-stroke"></i></li>
                    </ul>
                    <del>$761.00</del>
                    <span class="text-lg text-primary font-semibold">$548</span>
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
