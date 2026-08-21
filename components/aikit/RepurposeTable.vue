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
    class="table text-left"
  >
    <thead>
      <tr>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          URL
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Job Type
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Keywords
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Done
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Had errors
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !pr-5 !pl-3.6 !font-medium"
        >
          Date created
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
        <td class="border-b border-border !py-2.5 !pl-5 !pr-0">
          <a
            class="max-w-52 inline-block text-ellipsis overflow-hidden"
            href="javascript:void(0);"
            >www.wsj.com/articles/harvard-discriminates-against-middle-class-kids-legacy-admissions-court-85cf4503</a
          >
        </td>
        <td class="border-b border-border !py-2.5 !px-5">URL</td>

        <td class="border-b border-border !py-2.5 !px-5">-</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-success text-white">Yes</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge bg-light text-dark">No</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">
          5:50 am July 11, 2024
        </td>
        <td class="border-b border-border !py-2.5 !px-5 text-right">
          <a
            href="javascript:void(0);"
            class="btn text-primary bg-primarylight hover:shadow-btnprimary size-8 !leading-8 !p-0 text-center mr-1"
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.625 8C0.625 8 3.125 3 7.5 3C11.875 3 14.375 8 14.375 8C14.375 8 11.875 13 7.5 13C3.125 13 0.625 8 0.625 8Z"
                stroke="var(--primary)"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 9.875C8.53553 9.875 9.375 9.03553 9.375 8C9.375 6.96447 8.53553 6.125 7.5 6.125C6.46447 6.125 5.625 6.96447 5.625 8C5.625 9.03553 6.46447 9.875 7.5 9.875Z"
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
