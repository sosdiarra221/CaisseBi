<script lang="ts" setup>
import OptionSelect from "~/components/OptionSelect.vue";
import img from "~/assets/images/svg/england.svg";
import img2 from "~/assets/images/svg/india.svg";
import img3 from "~/assets/images/svg/united-arab-emirates.svg";
</script>

<template>
  <div class="xl:col-span-4 col-span-12">
    <div class="card !h-auto overflow-hidden">
      <div class="relative pt-4 px-5 flex justify-between items-center flex-wrap">
        <h4 class="heading mb-0">Auto Writer</h4>
        <OptionSelect
          class-name="nice-select normal-select  mr-5 image-select img-sm !text-textdark after:!text-textdark"
          :options="[
            { img: img, lable: 'England' },
            { img: img2, lable: 'India' },
            { img: img3, lable: 'UAE' },
          ]"
        />
      </div>
      <div class="sm:px-5 px-4 pt-4">
        <div class="grid grid-cols-12">
          <div class="col-span-12">
            <div class="mb-4">
              <textarea class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="exampleFormControlTextarea1" rows="4">
Write a brief description of the topic you want to write about...
													</textarea
              >
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput2" class="form-label text-secondary">Write a brief description of the topic you want to write about...</label>
              <input
                type="text"
                class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                id="exampleFormControlInput2"
                placeholder="Find My Device"
              />
            </div>

            <label class="form-label text-secondary">Post type</label>
            <div class="mb-4">
              <OptionSelect
                class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                :options="[{ lable: 'Post' }, { lable: 'Product' }]"
              />
            </div>
            <label class="form-label text-secondary">Post category</label>
            <div class="mb-4">
              <OptionSelect
                class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                :options="[{ lable: 'Uncategorized' }, { lable: 'Categorized' }]"
              />
            </div>
            <label class="form-label text-secondary">Post status</label>
            <div class="mb-4">
              <OptionSelect
                class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                :options="[{ lable: 'Draft' }, { lable: 'Categorized' }]"
              />
            </div>
            <div class="row">
              <div class="w-full">
                <div class="mb-4 flex items-center">
                  <label for="exampleFormControlInput10" class="form-label text-secondary me-2 mb-0">Articles:</label>
                  <input
                    type="number"
                    class="py-1.5 px-3 h-11 border border-border rounded-lg !w-1/2 duration-500 focus:border-primary bg-transparent"
                    id="exampleFormControlInput10"
                    placeholder="10"
                  />
                </div>
              </div>
              <div class="w-full">
                <div class="mb-4 flex items-center">
                  <label for="exampleFormControlInput3" class="form-label text-secondary me-2 mb-0">Sections per article:</label>
                  <input type="number" class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/2 duration-500 focus:border-primary bg-transparent" id="exampleFormControlInput3" placeholder="10" />
                </div>
              </div>
              <div class="w-full">
                <div class="mb-4 flex items-center">
                  <label for="exampleFormControlInput4" class="form-label text-secondary me-2 mb-0">Maximum words per section:</label>
                  <input type="number" class="py-1.5 px-3 h-11 border border-border rounded-lg w-1/4 duration-500 focus:border-primary bg-transparent" id="exampleFormControlInput4" placeholder="10" />
                </div>
              </div>
            </div>
            <hr style="margin-left: -31px; margin-right: -31px" />
            <div class="block card-length" role="group">
              <input type="checkbox" class="btn-check" id="btncheck1" />
              <label class="btn btn-outline-primary border border-primary text-primary btn-sm me-1" for="btncheck1">Include outline</label>

              <input type="checkbox" class="btn-check" id="btncheck2" />
              <label class="btn btn-outline-primary border border-primary text-primary btn-sm me-1" for="btncheck2">Include conclusion</label>

              <input type="checkbox" class="btn-check" id="btncheck3" />
              <label class="btn btn-outline-primary border border-primary text-primary btn-sm me-1" for="btncheck3">Include TL;DR</label>

              <input type="checkbox" class="btn-check me-1" id="btncheck4" />
              <label class="btn btn-outline-primary border border-primary text-primary btn-sm me-1" for="btncheck4">Include featured article Image3</label>

              <input type="checkbox" class="btn-check" id="btncheck5" />
              <label class="btn btn-outline-primary border border-primary text-primary btn-sm" for="btncheck5">Include section images</label>
            </div>
            <hr style="margin-left: -31px; margin-right: -31px; margin-bottom: 0" />
          </div>
        </div>
      </div>
      <div class="py-4 px-5">
        <div class="text-center">
          <a href="javascript:void(0);" class="btn border border-primary text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white me-2 group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_28_2466)">
                <path class="group-hover:stroke-white" d="M0.833496 3.33301V8.33301H5.8335" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path class="group-hover:stroke-white" d="M19.1665 16.667V11.667H14.1665" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  class="group-hover:stroke-white"
                  d="M17.0752 7.49998C16.6525 6.30564 15.9342 5.23782 14.9873 4.39616C14.0403 3.55451 12.8956 2.96645 11.6599 2.68686C10.4242 2.40727 9.13787 2.44527 7.92084 2.79729C6.70381 3.14932 5.59579 3.80391 4.70016 4.69998L0.833496 8.33331M19.1668 11.6666L15.3002 15.3C14.4045 16.1961 13.2965 16.8506 12.0795 17.2027C10.8625 17.5547 9.57609 17.5927 8.3404 17.3131C7.10472 17.0335 5.96 16.4455 5.01305 15.6038C4.06611 14.7621 3.3478 13.6943 2.92516 12.5"
                  stroke="var(--primary)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_28_2466">
                  <rect width="20" height="20" fill="var(--primary)" />
                </clipPath>
              </defs>
            </svg>
            Schedule</a
          >
          <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.1498 15.1013H7.30563L6.86828 12.8455H4.15205L3.71469 15.1013H0.0546875L2.67883 0.806641H8.52563L11.1498 15.1013ZM6.43092 10.1523L5.62526 5.04211H5.46413L4.65847 10.1523H6.43092Z"
                fill="white"
              />
              <path d="M16.4903 0.806641H12.5771V15.1013H16.4903V0.806641Z" fill="white" />
            </svg>

            Generate</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
