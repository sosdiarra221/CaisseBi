<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

DataTable.use(Select);
</script>

<template>
  <div class="overflow-x-auto invoice-list shorting">
    <DataTable
      id="projects-tbl"
      class="table ItemsCheckboxSec text-xs text-left"
      :options="{
        searching: false,
        lengthChange: false,
        pageLength: 5,

        columnDefs: [{ target: 0, orderable: false }],
      }"
    >
      <thead>
        <tr>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary !bg-none style-1">
            <div class="form-check custom-checkbox ms-0">
              <input type="checkbox" class="form-check-input checkAllInput" required />
              <label class="form-check-label"></label>
            </div>
          </th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1">INVOICE ID</th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1">CLIENT</th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1">CONTACT</th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1">DATE</th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1">STATUS</th>
          <th class="!p-[0.7375rem] !pt-3 !pl-0 border-b !border-border text-xs text-secondary style-1 text-right">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox1" required />
              <label class="form-check-label" for="customCheckBox1"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592268</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic1.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">Donald Risher</p>
                <small class="text-xs">In USA</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-success bg-successlight !border-0 uppercase">Success</span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox2" required />
              <label class="form-check-label" for="customCheckBox2"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592269</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic2.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">Oliver Noah</p>
                <small class="text-xs">In UK</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-warning bg-warninglight !border-0 uppercase">IN progress </span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox3" required />
              <label class="form-check-label" for="customCheckBox3"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592270</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic3.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">William Risher</p>
                <small class="text-xs">In SA</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-danger bg-dangerlight !border-0 uppercase">cancel</span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox4" required />
              <label class="form-check-label" for="customCheckBox4"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592271</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic555.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">Elijah James</p>
                <small class="text-xs">In AU</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-success bg-successlight !border-0 uppercase">success</span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox55" required />
              <label class="form-check-label" for="customCheckBox55"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592271</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic666.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">James</p>
                <small class="text-xs">In AU</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-info bg-infolight !border-0 uppercase">Pending</span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
        <tr>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="form-check custom-checkbox">
              <input type="checkbox" class="form-check-input" id="customCheckBox5" required />
              <label class="form-check-label" for="customCheckBox5"></label>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="font-medium text-xs text-secondary">#592273</span></td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">
            <div class="flex items-center table-user">
              <img src="assets/images/contacts/pic777.jpg" class="inline-block relative object-cover size-9 min-w-9 rounded-full" alt="" />
              <div class="ms-2 text-start">
                <p class="text-secondary font-semibold">Lucas</p>
                <small class="text-xs">In UA</small>
              </div>
            </div>
          </td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">+00 123 456 7890</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0">20 March 2024</td>
          <td class="!p-[0.7375rem] !pt-3 !pl-0"><span class="badge text-success bg-successlight !border-0 uppercase">success</span></td>
          <td class="text-right">
            <CustomeDropDown class="relative">
              <template #trigger>
                <button type="button" class="btn bg-light min-w-7.5 !p-1.5 h-7.5 leading-5 min-h-7.5">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.0101 13.8999C7.7367 13.8999 7.50277 13.8034 7.30833 13.6104C7.11388 13.4173 7.01666 13.1853 7.01666 12.9142C7.01666 12.6536 7.11277 12.4221 7.305 12.2199C7.49722 12.0177 7.7283 11.9166 7.99823 11.9166C8.27718 11.9166 8.51111 12.0178 8.7 12.2202C8.88888 12.4226 8.98333 12.6559 8.98333 12.9202C8.98333 13.1845 8.88947 13.4138 8.70176 13.6083C8.51405 13.8027 8.2835 13.8999 8.0101 13.8999ZM8.0101 8.98325C7.7367 8.98325 7.50277 8.88714 7.30833 8.69492C7.11388 8.5027 7.01666 8.27162 7.01666 8.00168C7.01666 7.72273 7.11277 7.48881 7.305 7.29992C7.49722 7.11103 7.7283 7.01658 7.99823 7.01658C8.27718 7.01658 8.51111 7.11044 8.7 7.29815C8.88888 7.48586 8.98333 7.71642 8.98333 7.98982C8.98333 8.26322 8.88947 8.49714 8.70176 8.69159C8.51405 8.88603 8.2835 8.98325 8.0101 8.98325ZM8.0101 4.08325C7.7367 4.08325 7.50277 3.98505 7.30833 3.78864C7.11388 3.59222 7.01666 3.35611 7.01666 3.0803C7.01666 2.80449 7.11277 2.56936 7.305 2.37492C7.49722 2.18047 7.7283 2.08325 7.99823 2.08325C8.27718 2.08325 8.51111 2.18126 8.7 2.37729C8.88888 2.5733 8.98333 2.80921 8.98333 3.08502C8.98333 3.36083 8.88947 3.59616 8.70176 3.791C8.51405 3.98584 8.2835 4.08325 8.0101 4.08325Z"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </template>
              <template #menu>
                <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                  <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                </div>
              </template>
            </CustomeDropDown>
          </td>
        </tr>
      </tbody>
    </DataTable>
  </div>
</template>
