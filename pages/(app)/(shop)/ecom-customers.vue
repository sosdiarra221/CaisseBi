<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const checkboxHandler = (e: Event) => {
  let Target = e.target as HTMLInputElement;

  let elements =
    document.querySelectorAll<HTMLInputElement>(".form-check-input");
  elements.forEach((ele) => {
    if (Target.checked) {
      ele.checked = true;
    } else {
      ele.checked = false;
    }
    ele.addEventListener("input", function (event: Event) {
      if (!(event.target as HTMLInputElement).checked) {
        Target.checked = false;
      }
    });
  });
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Customers" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="overflow-x-auto table-scroll">
                <table class="table text-left w-full ItemsCheckboxSec">
                  <thead>
                    <tr>
                      <th
                        class="border-b border-border text-base font-medium text-secondary"
                      >
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input checkAll ml-0"
                            id="checkAll"
                            @input="checkboxHandler"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkAll"
                          ></label>
                        </div>
                      </th>
                      <th
                        class="border-b border-border text-base font-medium text-secondary"
                      >
                        Name
                      </th>
                      <th
                        class="border-b border-border text-base font-medium text-secondary"
                      >
                        Email
                      </th>
                      <th
                        class="border-b border-border text-base font-medium text-secondary"
                      >
                        Phone
                      </th>
                      <th
                        class="!pl-12 border-b border-border text-base font-medium text-secondary"
                        style="min-width: 200px"
                      >
                        Billing Address
                      </th>
                      <th
                        class="border-b border-border text-base font-medium text-secondary"
                      >
                        Joined
                      </th>
                      <th
                        class="border-b border-border text-base font-medium text-right text-secondary"
                      ></th>
                    </tr>
                  </thead>
                  <tbody id="customers">
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox1"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox1"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Ricky Antony</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:ricky@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2012001851">(201) 200-1851</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2392 Main Avenue, Penasauka
                      </td>
                      <td class="border-b border-border !py-2">30/03/2018</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox2"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox2"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Emma Watson</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:emma@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2122288403">(212) 228-8403</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2289 5th Avenue, New York
                      </td>
                      <td class="border-b border-border !py-2">11/07/2017</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox3"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox3"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Rowen Atkinson</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:rown@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2012001851">(201) 200-1851</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        112 Bostwick Avenue, Jersey City
                      </td>
                      <td class="border-b border-border !py-2">05/04/2016</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox4"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox4"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Antony Hopkins</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:antony@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:9013243127">(901) 324-3127</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        3448 Ile De France St #242,
                      </td>
                      <td class="border-b border-border !py-2">05/04/2018</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox5"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox5"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Jennifer Schramm</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:jennifer@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:8283829631">(828) 382-9631</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        659 Hannah Street, Charlotte
                      </td>
                      <td class="border-b border-border !py-2">17/03/2016</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox6"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox6"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Raymond Mims</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:raymond@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:5624685646">(562) 468-5646</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2298 Locust Court, Artesia
                      </td>
                      <td class="border-b border-border !py-2">12/07/2014</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox7"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox7"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Michael Jenkins</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:jenkins@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:3026138829">(302) 613-8829</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        4678 Maud Street, Philadelphia
                      </td>
                      <td class="border-b border-border !py-2">15/06/2014</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox8"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox8"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Kristine Cadena</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:cadena@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:3172737814">(317) 273-7814</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        3412 Crestview Manor, Indianapolis
                      </td>
                      <td class="border-b border-border !py-2">15/04/2015</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox9"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox9"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Ricky Antony</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:ricky@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2012001851">(201) 200-1851</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2392 Main Avenue, Penasauka
                      </td>
                      <td class="border-b border-border !py-2">30/03/2018</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox10"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox10"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Emma Watson</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:emma@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2122288403">(212) 228-8403</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2289 5th Avenue, New York
                      </td>
                      <td class="border-b border-border !py-2">11/07/2017</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox11"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox11"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Rowen Atkinson</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:rown@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:2012001851">(201) 200-1851</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        112 Bostwick Avenue, Jersey City
                      </td>
                      <td class="border-b border-border !py-2">05/04/2016</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox12"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox12"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Antony Hopkins</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:antony@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:9013243127">(901) 324-3127</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        3448 Ile De France St #242
                      </td>
                      <td class="border-b border-border !py-2">05/04/2018</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox13"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox13"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Jennifer Schramm</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:jennifer@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:8283829631">(828) 382-9631</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        659 Hannah Street, Charlotte
                      </td>
                      <td class="border-b border-border !py-2">17/03/2016</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox14"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox14"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <div>
                                <img
                                  class="rounded-full img-fluid"
                                  src="assets/images/avatar/5.png"
                                  width="30"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div class="flex-1">
                              <h5>Raymond Mims</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:raymond@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:5624685646">(562) 468-5646</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        2298 Locust Court, Artesia
                      </td>
                      <td class="border-b border-border !py-2">12/07/2014</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox15"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox15"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Michael Jenkins</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:jenkins@example.com"
                          >info@example.com</a
                        >
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:3026138829">(302) 613-8829</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        4678 Maud Street, Philadelphia
                      </td>
                      <td class="border-b border-border !py-2">15/06/2014</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border !py-2">
                        <div
                          class="form-check custom-checkbox leading-normal block min-h-[1.3125rem] mx-2"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox16"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox16"
                          ></label>
                        </div>
                      </td>
                      <td class="border-b border-border !py-4">
                        <a href="javascript:void(0);">
                          <div class="media flex items-center">
                            <div
                              class="inline-block size-7.5 rounded-full relative object-cover mr-2"
                            >
                              <img
                                class="rounded-full img-fluid"
                                src="assets/images/avatar/1.png"
                                alt=""
                                width="30"
                              />
                            </div>
                            <div class="flex-1">
                              <h5>Kristine Cadena</h5>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="mailto:cadena@example.com">info@example.com</a>
                      </td>
                      <td class="border-b border-border !py-2">
                        <a href="tel:3172737814">(317) 273-7814</a>
                      </td>
                      <td class="border-b border-border !py-2 !pl-12">
                        3412 Crestview Manor, Indianapolis
                      </td>
                      <td class="border-b border-border !py-2">15/04/2015</td>
                      <td class="border-b border-border !py-2 text-right">
                        <CustomeDropDown class="relative">
                          <template #trigger>
                            <button
                              class="btn bg-primary size-7.5 !leading-5 !p-0 text-center hover:shadow-btnprimary"
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="18px"
                                  height="18px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="#fff"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="#fff"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle fill="#fff" cx="19" cy="12" r="2">
                                      5/circle&gt;
                                    </circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Edit</a
                                >
                                <a
                                  class="py-2 px-5 block text-danger"
                                  href="javascript:void(0);"
                                  >Delete</a
                                >
                              </div>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
