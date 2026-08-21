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
    }"
    table
    id="projects-tbl"
    class="table ItemsCheckboxSec text-2xs w-full text-left"
  >
    <thead>
      <tr>
        <th
          class="!py-2.5 !px-4 bg-primarylight text-primary !font-medium !border-0"
        >
          Category
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
          Beauty
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
          Beauty
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
          Bills & Fees
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
          Bills & Fees
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
          Car
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
          Car
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
          Education
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
          Education
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
          Entertainment
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
          Entertainment
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
    </tbody>
  </DataTable>
</template>
