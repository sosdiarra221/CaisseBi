<script lang="ts" setup>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IMAGES } from "~/lib/Theme";

const galleryone = [
  { img: IMAGES.imgFull, className: "col-span-12" },
  { img: IMAGES.img2, className: "col-span-4 relative overflow-hidden" },
  { img: IMAGES.img1, className: "col-span-4 relative overflow-hidden" },
  {
    img: IMAGES.img3,
    className:
      "col-span-4 relative overflow-hidden after:content-[attr(data-more)] after:absolute after:top-0 after:flex after:size-full after:items-center after:justify-center after:bg-black/50 after:text-white after:text-[200%]",
  },
];

const gallerytwo = [
  { img: IMAGES.imgFull2, className: "col-span-8 row-span-12 relative overflow-hidden" },
  { img: IMAGES.img4, className: "col-span-4 row-span-4 relative overflow-hidden" },
  { img: IMAGES.img5, className: "col-span-4 row-span-4 relative overflow-hidden" },
  {
    img: IMAGES.img6,
    className:
      "col-span-4 row-span-4 relative overflow-hidden after:content-[attr(data-more)] after:absolute after:top-0 after:flex after:size-full after:items-center after:justify-center after:bg-black/50 after:text-white after:text-[200%]",
  },
];
</script>

<template>
  <div class="xl:col-span-6 col-span-12">
    <div class="grid grid-cols-12 gap-x-6">
      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar1.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Jackson</h6>
                  <span class="fs-13">Yestarday at 4:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar2.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <Lightgallery
              :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }"
              class="w-full md:h-[520px] sm:h-[480px] h-[300px] grid grid-cols-12 gap-1.5 mb-3.6"
              id="lightgallery"
            >
              <a v-for="({ className, img }, ind) in galleryone" :href="img" :class="className" :key="ind" :data-more="ind == 3 && '+06'">
                <img :src="img" alt="" class="object-cover size-full max-h-[340px] max-sm:max-h-52" />
              </a>
            </Lightgallery>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar3.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <Lightgallery
              :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }"
              class="w-full md:h-[500px] sm:h-[480px] h-[300px] grid grid-cols-12 gap-1.5 mb-3.6"
              id="lightgallery2"
            >
              <a :href="img" v-for="({ className, img }, index) in gallerytwo" :key="index" :class="className">
                <img :src="img" alt="" class="object-cover size-full" />
              </a>
              <!-- <a
                href="assets/images/post/img4.jpg"
                data-exthumbimage="assets/images/post/img4.jpg"
                data-src="../../assets/images/post/img4.jpg"
                class="col-span-4 row-span-4 relative overflow-hidden"
              >
                <img src="../../assets/images/post/img4.jpg" alt="" class="object-cover size-full" />
              </a>
              <a
                href="assets/images/post/img5.jpg"
                data-exthumbimage="assets/images/post/img5.jpg"
                data-src="../../assets/images/post/img5.jpg"
                class="col-span-4 row-span-4 relative overflow-hidden"
              >
                <img src="../../assets/images/post/img5.jpg" alt="" class="object-cover size-full" />
              </a>
              <a
                href="assets/images/post/img6.jpg"
                data-exthumbimage="assets/images/post/img6.jpg"
                data-src="../../assets/images/post/img6.jpg"
                class="col-span-4 row-span-4 relative overflow-hidden after:content-[attr(data-more)] after:absolute after:top-0 after:flex after:size-full after:items-center after:justify-center after:bg-black/50 after:text-white after:text-[200%]"
                data-more="+3"
              >
                <img src="../../assets/images/post/img6.jpg" alt="" class="object-cover size-full" />
              </a> -->
            </Lightgallery>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar4.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div class="min-h-[280px] flex items-center flex-col justify-center relative bg-purple p-6 text-center mb-2 rounded-lg">
              <h3 class="text-white mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </h3>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar5.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div
              class="min-h-[280px] flex items-center flex-col justify-center relative overflow-hidden p-6 text-center mb-2 rounded-lg after:content-[''] after:bg-black/30 after:absolute after:left-0 after:top-0 after:size-full"
              :style="`background-image: url(${IMAGES.img8})`"
            >
              <div class="z-1 relative">
                <h3 class="text-white mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </h3>
              </div>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar6.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div class="mb-2">
              <img src="../../assets/images/post/img7.jpg" alt="" class="rounded-lg w-full" />
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar7.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div class="mb-2">
              <iframe
                class="rounded-lg w-full"
                width="100"
                height="166"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/539018871&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar8.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div class="mb-2 text-center overflow-hidden rounded-lg">
              <img src="../../assets/images/post/img6.jpg" alt="" class="rounded-lg inline-block" />
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar1.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Kennedy</h6>
                  <span class="fs-13">Yestarday at 5:30 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div class="mb-2">
              <iframe
                class="rounded-lg w-full 3xl:h-[420px] sm:h-[310px] h-[265px]"
                src="https://www.youtube.com/embed/pyRjzvdOSHk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="mb-3">
              <div class="flex justify-between mb-2">
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <img src="../../assets/images/avatar/avatar2.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                  </div>
                  <div class="ms-2">
                    <h6 class="font-semibold">Brad Dennis</h6>
                    <span class="fs-13">Yestarday at 5:06 PM</span>
                  </div>
                </div>
                <div class="ms-auto">
                  <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start">
                    <i class="fa-solid fa-border-all"></i>
                  </button>
                </div>
              </div>
              <div class="text-secondary">
                <p class="text-sm mb-2">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s.
                </p>
              </div>
              <div class="pt-1">
                <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 25 </a>
                <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
              </div>
            </div>
            <div class="flex py-2 relative">
              <div class="inline-block relative">
                <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
              </div>
              <div class="ms-2">
                <h6 class="mb-1 font-semibold">
                  Mr. Hamilton
                  <span class="text-xs text-muted ms-1 fw-normal">2 Day ago</span>
                </h6>
                <p class="text-sm text-secondary">There are many variations of passages of Lorem Ipsum available.</p>
              </div>
              <a href="javascript:void(0);" class="absolute right-0 top-0">Reply</a>
            </div>
            <div class="flex py-2 relative">
              <div class="inline-block relative">
                <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
              </div>
              <div class="ms-2">
                <h6 class="mb-1 font-semibold">
                  Mrs. Anderson
                  <span class="text-xs text-muted ms-1 fw-normal">3 Days ago</span>
                </h6>
                <p class="text-sm text-secondary">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                </p>
              </div>
              <a href="javascript:void(0);" class="absolute right-0 top-0">Reply</a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <div class="card">
          <div class="sm:p-5 p-4 !pb-0">
            <div class="flex justify-between mb-2">
              <div class="flex items-center py-2">
                <div class="inline-block relative">
                  <img src="../../assets/images/avatar/avatar3.jpg" alt="" class="rounded-lg size-[45px] min-w-[2.813rem]" />
                </div>
                <div class="ms-2">
                  <h6 class="font-semibold">Lewis</h6>
                  <span class="fs-13">Yestarday at 5:42 PM</span>
                </div>
              </div>
              <div class="ms-auto">
                <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
              </div>
            </div>
            <div>
              <p class="sm:text-sm mb-2 text-secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s.
              </p>
            </div>
            <div class="pt-1">
              <a href="javascript:void(0);" class="mr-4"> <i class="fa-regular fa-image"></i> 24 </a>
              <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
            </div>
            <div class="relative border-t border-border flex items-center mt-4">
              <input type="text" class="w-full h-11 pe-2 bg-transparent" placeholder="Reply.." />
              <div class="flex">
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
                <a href="javascript:void(0);" class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                      stroke="#888888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12">
        <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full mb-4">More Feeds</button>
      </div>
    </div>
  </div>
</template>
