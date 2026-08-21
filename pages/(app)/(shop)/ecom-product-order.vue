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
    <CommonNav title="Ecommerce" name="Product List" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="overflow-x-auto table-scroll ItemsCheckboxSec">
                <table class="table text-left w-full">
                  <thead>
                    <tr>
                      <th class="border-b text-base font-medium">
                        <div class="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            class="form-check-input checkAll"
                            id="checkInput"
                            @input="checkboxHandler"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkInput"
                          ></label>
                        </div>
                      </th>
                      <th class="border-b text-base font-medium">Order</th>
                      <th class="border-b text-base font-medium">Date</th>
                      <th
                        class="border-b text-base font-medium"
                        style="min-width: 12.5rem"
                      >
                        Ship To
                      </th>
                      <th
                        class="border-b text-base font-medium align-middle text-right"
                      >
                        Status
                      </th>
                      <th
                        class="border-b text-base font-medium align-middle text-right"
                      >
                        Amount
                      </th>
                      <th class="border-b text-base font-medium text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody id="orders">
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-success"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="checkbox"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkbox"
                          ></label>
                        </div>
                      </td>
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#181</strong></a
                        >
                        by <strong class="text-secondary">Ricky Antony</strong
                        ><br /><a href="mailto:ricky@example.com"
                          >ricky@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">20/04/2020</td>
                      <td class="!py-2 border-b">
                        Ricky Antony, 2392 Main Avenue, Penasauka, New Jersey
                        02149
                        <p>Via Flat Rate</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-success text-white border border-success"
                          >Completed<span class="ml-1 fa fa-check"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$99</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div class="form-check custom-checkbox">
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#182</strong></a
                        >
                        by <strong class="text-secondary">Kin Rossow</strong
                        ><br /><a href="mailto:kin@example.com"
                          >kin@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">20/04/2020</td>
                      <td class="!py-2 border-b">
                        Kin Rossow, 1 Hollywood Blvd,Beverly Hills, California
                        90210
                        <p>Via Free Shipping</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-primary text-white border border-primary"
                          >Processing<span class="ml-1 fa fa-redo"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$120</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-secondary"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#183</strong></a
                        >
                        by <strong class="text-secondary">Merry Diana</strong
                        ><br /><a href="mailto:merry@example.com"
                          >merry@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">30/04/2020</td>
                      <td class="!py-2 border-b">
                        Merry Diana, 1 Infinite Loop, Cupertino, California
                        90210
                        <p>Via Link Road</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-[#1F2025] text-white border border-secondary"
                          >On Hold<span class="ml-1 fa fa-ban"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$70</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-warning"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#184</strong></a
                        >
                        by <strong class="text-secondary">Bucky Robert</strong
                        ><br /><a href="mailto:bucky@example.com"
                          >bucky@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">30/04/2020</td>
                      <td class="!py-2 border-b">
                        Bucky Robert, 1 Infinite Loop, Cupertino, California
                        90210
                        <p>Via Free Shipping</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-warning text-white border border-warning"
                          >Pending<span class="ml-1 fas fa-stream"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$92</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-secondary"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#185</strong></a
                        >
                        by <strong class="text-secondary">Rocky Zampa</strong
                        ><br /><a href="mailto:rocky@example.com"
                          >rocky@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">30/04/2020</td>
                      <td class="!py-2 border-b">
                        Rocky Zampa, 1 Infinite Loop, Cupertino, California
                        90210
                        <p>Via Free Road</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-[#1F2025] text-white border border-secondary"
                          >On Hold<span class="ml-1 fa fa-ban"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$120</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div class="form-check custom-checkbox">
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#186</strong></a
                        >
                        by <strong class="text-secondary">Ricky John</strong
                        ><br /><a href="mailto:ricky@example.com"
                          >ricky@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">30/04/2020</td>
                      <td class="!py-2 border-b">
                        Ricky John, 1 Infinite Loop, Cupertino, California 90210
                        <p>Via Free Shipping</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-primary text-white border border-primary"
                          >Processing<span class="ml-1 fa fa-redo"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$145</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-success"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#187</strong></a
                        >
                        by
                        <strong class="text-secondary">Cristofer Henric</strong
                        ><br /><a href="mailto:cristofer@example.com"
                          >cristofer@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">30/04/2020</td>
                      <td class="!py-2 border-b">
                        Cristofer Henric, 1 Infinite Loop, Cupertino, California
                        90210
                        <p>Via Flat Rate</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-success text-white border border-success"
                          >Completed<span class="ml-1 fa fa-check"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$55</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-secondary"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#188</strong></a
                        >
                        by <strong class="text-secondary">Brate Lee</strong
                        ><br /><a href="mailto:lee@example.com"
                          >lee@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">29/04/2020</td>
                      <td class="!py-2 border-b">
                        Brate Lee, 1 Infinite Loop, Cupertino, California 90210
                        <p>Via Link Road</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-[#1F2025] text-white border border-secondary"
                          >On Hold<span class="ml-1 fa fa-ban"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$90</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div class="form-check custom-checkbox">
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#189</strong></a
                        >
                        by
                        <strong class="text-secondary">Thomas Stephenson</strong
                        ><br /><a href="mailto:Stephenson@example.com"
                          >Stephenson@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">29/04/2020</td>
                      <td class="!py-2 border-b">
                        Thomas Stephenson, 116 Ballifeary Road, Bamff
                        <p>Via Flat Rate</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-primary text-white border border-primary"
                          >Processing<span class="ml-1 fa fa-redo"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$52</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-success"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#190</strong></a
                        >
                        by <strong class="text-secondary">Evie Singh</strong
                        ><br /><a href="mailto:eviewsing@example.com"
                          >eviewsing@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">29/04/2020</td>
                      <td class="!py-2 border-b">
                        Evie Singh, 54 Castledore Road, Tunstead
                        <p>Via Flat Rate</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-success text-white border border-success"
                          >Completed<span class="ml-1 fa fa-check"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$90</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div
                          class="form-check custom-checkbox checkbox-success"
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#191</strong></a
                        >
                        by <strong class="text-secondary">David Peters</strong
                        ><br /><a href="mailto:peter@example.com"
                          >peter@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">29/04/2020</td>
                      <td class="!py-2 border-b">
                        David Peters, Rhyd Y Groes, Rhosgoch, LL66 0AT
                        <p>Via Link Road</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-success text-white border border-success"
                          >Completed<span class="ml-1 fa fa-check"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$69</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
                    <tr class="btn-reveal-trigger">
                      <td class="!py-2 border-b">
                        <div class="form-check custom-checkbox">
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
                      <td class="!py-2 border-b">
                        <a href="javascript:void(0);">
                          <strong class="text-secondary">#192</strong></a
                        >
                        by <strong>Jennifer Johnson</strong><br /><a
                          href="mailto:jennifer@example.com"
                          >jennifer@example.com
                        </a>
                      </td>
                      <td class="!py-2 border-b">28/04/2020</td>
                      <td class="!py-2 border-b">
                        Jennifer Johnson, Rhyd Y Groes, Rhosgoch, LL66 0AT
                        <p>Via Flat Rate</p>
                      </td>
                      <td class="!py-2 border-b text-right">
                        <span
                          class="badge bg-primary text-white border border-primary"
                          >Processing<span class="ml-1 fa fa-redo"></span>
                        </span>
                      </td>
                      <td class="!py-2 border-b text-right">$112</td>
                      <td class="!py-2 border-b text-right">
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
                                    <circle
                                      fill="#fff"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </span>
                            </button>
                          </template>
                          <template #menu>
                            <div
                              class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left dz-dropdown-menu"
                            >
                              <div class="py-2">
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Completed</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Processing</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >On Hold</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Pending</a
                                >
                                <div
                                  class="my-2 border-t border-border overflow-hidden"
                                ></div>
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
