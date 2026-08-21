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
      info: false,
      paging: false,
      columnDefs: [{ target: 0, orderable: false }],
    }"
    id="transaction-tbl"
    class="table transaction-tbl ItemsCheckboxSec text-left !border-spacing-y-2"
  >
    <thead class="border-self">
      <tr>
        <th
          class="border !border-border bg-light !py-2 !px-3.6 border-r-0 rounded-s-lg style-1"
        >
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input checkAllInput"
              id="checkAll"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="checkAll"
            ></label>
          </div>
          <span>ID</span>
        </th>
        <th class="border-y !border-border bg-light !py-2 !px-3.6">Date</th>
        <th class="border-y !border-border bg-light !py-2 !px-3.6">Client</th>
        <th class="border-y !border-border bg-light !py-2 !px-3.6">Payment</th>
        <th class="border-y !border-border bg-light !py-2 !px-3.6">Status</th>
        <th
          class="border !border-border bg-light !py-2 !px-3.6 border-l-0 rounded-e-lg"
        >
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox33"
            ></label>
          </div>
          <span>129361171</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Rolex leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox2"
            ></label>
          </div>
          <span>129361178</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Jaction leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox3"
            ></label>
          </div>
          <span>129361179</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Rolex leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-warning">$254.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-warning bg-warninglight border-0"
            >Inprogress</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox3"
            ></label>
          </div>
          <span>129361179</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Meview Otis</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-danger">$254.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-danger bg-dangerlight">Pending</span>
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox33"
            ></label>
          </div>
          <span>129361171</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Rolex leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox2"
            ></label>
          </div>
          <span>129361178</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Jaction leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox33"
            ></label>
          </div>
          <span>129361171</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Rolex leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox2"
            ></label>
          </div>
          <span>129361178</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Jaction leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-success">$376.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-primary bg-primarylight border-0"
            >Completed</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
      <tr>
        <td class="border !border-border !py-2 !px-3.6 border-r-0 rounded-s-lg">
          <div class="form-check custom-checkbox inline-block">
            <input
              type="checkbox"
              class="form-check-input"
              id="customCheckBox33"
              required
            />
            <label
              class="form-check-label ml-1.1 mt-[3px] font-normal"
              for="customCheckBox3"
            ></label>
          </div>
          <span>129361179</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <p class="mb-0 ms-2">18 Feb 2024</p>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span>Rolex leo</span>
        </td>
        <td class="border-y !border-border !py-2 !px-3.6">
          <span class="text-warning">$254.24</span>
        </td>
        <td class="border-y !border-border !py-2 !pl-3.6 !pr-0">
          <span class="badge text-warning bg-warninglight border-0"
            >Inprogress</span
          >
        </td>
        <td
          class="border !border-border !py-2 !px-3.6 border-l-0 rounded-e-lg text-center"
        >
          <CustomeDropDown class="ms-2 relative">
            <template #trigger>
              <div class="btn-link custome-d">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="7" width="2" height="2" fill="var(--secondary)" />
                  <rect width="2" height="2" fill="var(--secondary)" />
                  <rect
                    x="7"
                    y="7"
                    width="2"
                    height="2"
                    fill="var(--secondary)"
                  />
                  <rect x="7" width="2" height="2" fill="var(--secondary)" />
                </svg>
              </div>
            </template>
            <template #menu>
              <div
                class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
              >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Delete</a
                >
                <a
                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                  href="javascript:void(0);"
                  >Edit</a
                >
              </div>
            </template>
          </CustomeDropDown>
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
