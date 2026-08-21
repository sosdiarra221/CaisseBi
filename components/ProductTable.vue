<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net";

DataTable.use(Select);
</script>

<template>
  <DataTable
    id="projectlist"
    class="text-left"
    :options="{
      columnDefs: [{ target: 0, orderable: false }],
    }"
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
            <label class="form-check-label" for="checkAll"></label>
          </div>
        </th>
        <th
          class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
        >
          Product
        </th>
        <th
          class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
        >
          Category
        </th>
        <th
          class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
        >
          product Type
        </th>
        <th
          class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting"
        >
          Rating
        </th>
        <th
          class="!border-border !font-medium !py-4 !pl-3.6 !pr-[26px] sorting text-end"
        >
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox2"
              required
            />
            <label class="form-check-label" for="customCheckBox2"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d14.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Electronics
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox3"
              required
            />
            <label class="form-check-label" for="customCheckBox3"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d3.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Dress</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Fashion
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-success bg-successlight"
            >Manual</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox4"
              required
            />
            <label class="form-check-label" for="customCheckBox4"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d10.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Bag</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          School Bag
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox5"
              required
            />
            <label class="form-check-label" for="customCheckBox5"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d14.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Appliances
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox6"
              required
            />
            <label class="form-check-label" for="customCheckBox6"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d14.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Electronics
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox7"
              required
            />
            <label class="form-check-label" for="customCheckBox7"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d3.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Dress</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Fashion
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-success bg-successlight"
            >Manual</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox8"
              required
            />
            <label class="form-check-label" for="customCheckBox8"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d8.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">laptop</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Electronics
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-success bg-successlight"
            >Manual</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox9"
              required
            />
            <label class="form-check-label" for="customCheckBox9"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d2.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Men Jacket</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Fashion Jacket
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox10"
              required
            />
            <label class="form-check-label" for="customCheckBox10"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d14.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Air Conditioner</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Appliances
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox11"
              required
            />
            <label class="form-check-label" for="customCheckBox11"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d8.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">laptop</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">Laptop</td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-success bg-successlight"
            >Manual</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
      <tr>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <div class="form-check custom-checkbox checkbox-primary mr-4">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox12"
              required
            />
            <label class="form-check-label" for="customCheckBox12"></label>
          </div>
        </td>
        <td
          class="!py-[.85rem] !px-3.6 !whitespace-normal border-b"
          style="width: 30%"
        >
          <div class="flex items-center">
            <img
              src="assets/images/category-images/d13.jpg"
              class="rounded-lg me-2 min-w-14 size-14 inline-block relative object-cover"
              alt=""
            />
            <div>
              <h6 class="text-sm whitespace-nowrap">Fan</h6>
              <small
                >Our computers and tablets include all the big brands.</small
              >
            </div>
          </div>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          Electrical
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <span class="badge badge-sm text-primary bg-primarylight"
            >Automated</span
          >
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b">
          <ul class="flex items-center">
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star text-warning"></i></li>
            <li><i class="fa-solid fa-star-half-stroke text-warning"></i></li>
          </ul>
        </td>
        <td class="!py-[.85rem] !px-3.6 !whitespace-normal border-b text-end">
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
</template>
