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
    }"
    id="empoloyees-tblwrapper"
    class="table text-left text-2xs"
  >
    <thead>
      <tr>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Description
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Keywords
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Status
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Interval
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Last generation
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Next generation
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Is running
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Run count
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Max run count
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium text-right"
        >
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0 text-secondary">
          Write a rat story
        </td>
        <td class="border-b border-border !py-2.5 !px-5">lion</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge text-success badge-sm bg-successlight"
            >Active</span
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">hourly</td>
        <td class="border-b border-border !py-2.5 !px-5">
          4:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">1</td>
        <td class="border-b border-border !py-2.5 !px-5">5</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-2"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.625 2.37519C10.7892 2.21104 10.984 2.08082 11.1985 1.99199C11.413 1.90315 11.6429 1.85742 11.875 1.85742C12.1071 1.85742 12.337 1.90315 12.5515 1.99199C12.766 2.08082 12.9608 2.21104 13.125 2.37519C13.2892 2.53934 13.4194 2.73422 13.5082 2.94869C13.597 3.16317 13.6428 3.39304 13.6428 3.62519C13.6428 3.85734 13.597 4.08721 13.5082 4.30168C13.4194 4.51616 13.2892 4.71104 13.125 4.87519L4.6875 13.3127L1.25 14.2502L2.1875 10.8127L10.625 2.37519Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="javascript:void(0);"
            class="btn text-danger bg-dangerlight hover:shadow-btndanger hover:bg-danger group size-8 !leading-8 !p-0 text-center"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:stroke-white"
                d="M1.875 4.25H3.125H13.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M11.875 4.25V13C11.875 13.3315 11.7433 13.6495 11.5089 13.8839C11.2745 14.1183 10.9565 14.25 10.625 14.25H4.375C4.04348 14.25 3.72554 14.1183 3.49112 13.8839C3.2567 13.6495 3.125 13.3315 3.125 13V4.25M5 4.25V3C5 2.66848 5.1317 2.35054 5.36612 2.11612C5.60054 1.8817 5.91848 1.75 6.25 1.75H8.75C9.08152 1.75 9.39946 1.8817 9.63388 2.11612C9.8683 2.35054 10 2.66848 10 3V4.25"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M6.25 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="group-hover:stroke-white"
                d="M8.75 7.375V11.125"
                stroke="#FF5B5B"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
