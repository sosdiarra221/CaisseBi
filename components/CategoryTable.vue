<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net";
DataTable.use(Select);
</script>

<template>
  <div class="overflow-x-auto">
    <ClientOnly>
      <DataTable
        :options="{
          columnDefs: [{ target: 0, orderable: false }],
        }"
        id="projectlist"
        class="table text-left"
      >
        <thead>
          <tr>
            <th
              class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px]"
              style="width: 50px"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkAll"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="checkAll"
                ></label>
              </div>
            </th>
            <th
              class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
            >
              Category
            </th>
            <th
              class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
            >
              Products
            </th>
            <th
              class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
            >
              Category Type
            </th>
            <th
              class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] text-end"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox2"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox2"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d14.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox33"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox33"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d14.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox44"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox44"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d8.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">laptop</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              100
            </td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-success bg-successlight"
                >Manual</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox45"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox45"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d14.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox46"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox46"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d8.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">laptop</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              100
            </td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-success bg-successlight"
                >Manual</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox47"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox47"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d13.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Fan</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox48"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox48"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d14.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox49"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox49"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d8.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">laptop</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              100
            </td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-success bg-successlight"
                >Manual</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox50"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox50"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d13.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Fan</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox51"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox51"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d14.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="odd">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox52"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox52"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d8.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">laptop</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              100
            </td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-success bg-successlight"
                >Manual</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
          <tr role="row" class="even">
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b sorting_1"
            >
              <div class="form-check custom-checkbox checkbox-primary mr-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="customCheckBox53"
                  required
                />
                <label
                  class="form-check-label ml-1.1 mt-[3px]"
                  for="customCheckBox53"
                ></label>
              </div>
            </td>
            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
              style="width: 30%"
            >
              <div class="flex items-center">
                <img
                  src="assets/images/category-images/d13.jpg"
                  class="rounded-lg me-2 min-w-7.5"
                  width="40"
                  alt=""
                />
                <div>
                  <h6 class="text-sm whitespace-nowrap">Fan</h6>
                  <small class="text-xs"
                    >Our computers and tablets include all the big
                    brands.</small
                  >
                </div>
              </div>
            </td>
            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">10</td>

            <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
              <span class="badge badge-sm text-primary bg-primarylight"
                >Automated</span
              >
            </td>

            <td
              class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end"
            >
              <div>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-8 !p-0 text-center bg-primary text-white hover:shadow-btnprimary me-1"
                >
                  <i class="fa fa-pencil"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn size-7.5 !leading-9 !p-0 text-center bg-danger text-white hover:shadow-btndanger"
                >
                  <i class="fa fa-trash"></i
                ></a>
              </div>
            </td>
          </tr>
        </tbody>
      </DataTable>
    </ClientOnly>
  </div>
</template>
