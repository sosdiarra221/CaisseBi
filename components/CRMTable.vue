<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net";
DataTable.use(Select);
</script>

<template>
  <DataTable
    :options="{
      lengthChange: false,
      searching: false,
      pageLength: 5,
      columnDefs: [{ target: 0, orderable: false }],
    }"
    id="projects-tbl"
    class="table ItemsCheckboxSec text-2xs w-full"
  >
    <thead>
      <tr>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0 style-1"
        >
          <div class="form-check custom-checkbox ms-0">
            <input
              type="checkbox"
              class="form-check-input checkAll ml-0"
              id="checkAll"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="checkInput"
            ></label>
          </div>
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Project Name
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Project Lead
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Progress
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Assignee
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Status
        </th>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0 text-right"
        >
          Due Date
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox2"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox2"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">Batman</td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Liam Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">53%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">08 Sep 2024</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox3"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox3"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Mivy App
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Honey Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">52%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox22"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox22"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Crypto App
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Ankites Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">58%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Pending</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox33"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Bender Project
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Oliver Noah</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 30%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-danger">30%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Pending</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox044"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox044"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">Canary</td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic888.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Elijah James</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-success"
                style="width: 40%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-success">40%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-success bg-successlight">Completed</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox055"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox055"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Casanova
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">William Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">53%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox23"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox23"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Bender Project
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Oliver Noah</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 30%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-danger">30%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Pending</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox44"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox44"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">Canary</td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic888.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Elijah James</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-success"
                style="width: 40%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-success">40%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-success bg-successlight">Completed</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox55"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox55"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Casanova
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">William Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">53%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox66"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox66"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Bigfish
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Donald Benjamin</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 30%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-danger">30%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox7"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox7"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Matadors
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic888.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Liam Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">53%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox88"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox88"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Mercury
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Oliver Noah</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 30%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-danger">30%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic777.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-danger bg-dangerlight">Pending</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox99"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox99"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Whistler
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic999.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Elijah James</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-success"
                style="width: 40%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-success">40%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic666.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="badge text-success bg-successlight">Completed</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox0102"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox0102"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Time Projects
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic2.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">Lucas</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-danger"
                style="width: 33%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">33%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic999.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border font-normal !py-2.5 !pl-5 !pr-0">
          <div
            class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold"
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox110"
              required
            />
            <label
              class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal"
              for="customCheckBox110"
            ></label>
          </div>
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          Fast Ball
        </td>
        <td class="border-b border-border font-normal !py-2.5 !px-5">
          <div class="flex items-center">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block min-w-7.5 size-7.5 rounded-full relative object-cover"
              width="30px"
              height="30px"
              alt=""
            />
            <p class="ml-2">William Risher</p>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="flex items-center">
            <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1">
              <div
                class="progress-bar bg-primary"
                style="width: 53%; height: 5px; border-radius: 4px"
                role="progressbar"
              ></div>
            </div>
            <span class="text-primary">53%</span>
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <div class="avatar-list avatar-list-stacked">
            <img
              src="assets/images/contacts/pic1.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic555.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
            <img
              src="assets/images/contacts/pic999.jpg"
              class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-border relative object-cover duration-300 hover:z-1"
              alt=""
            />
          </div>
        </td>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 font-normal">
          <span class="bg-primarylight text-primary badge">Inprogress</span>
        </td>
        <td class="border-b border-border text-right font-normal !py-2.5 !px-5">
          <span class="text-body">06 Sep 2021</span>
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
