<script lang="ts" setup>
import { DataTable } from "datatables.net-vue3";
import Select from "datatables.net";
DataTable.use(Select);  
</script>

<template>
  <DataTable
    id="tableLogs"
    class="table mb-6 w-full text-left dataTable no-footer"
    role="grid"
    aria-describedby="tableLogs_info"
  >
    <thead>
      <tr role="row">
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 sorting"
        >
          Location
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 sorting"
        >
          Status
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 sorting"
        >
          Device
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 sorting"
        >
          IP Address
        </th>
        <th
          class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 text-end sorting"
        >
          Time
        </th>
      </tr>
    </thead>
    <tbody>
      <tr role="row" class="odd">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">
          United States
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-danger bg-dangerlight">ERROR</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary">Safari - Mac</a>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.78</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          27 mins ago
        </td>
      </tr>
      <tr role="row" class="even">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">
          United States
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-danger bg-dangerlight">ERROR</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary">Safari - Mac</a>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.78</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          27 mins ago
        </td>
      </tr>
      <tr role="row" class="odd">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">Pakistan</td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-success bg-successlight">OK</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >Firefox - Windows</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.54</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          48 mins ago
        </td>
      </tr>
      <tr role="row" class="even">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">Pakistan</td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-success bg-successlight">OK</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >Firefox - Windows</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.54</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          48 mins ago
        </td>
      </tr>
      <tr role="row" class="odd">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">
          Indonesia
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-success bg-successlight">OK</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >iOS - iPhone Pro</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.100.56.50</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          40 mins ago
        </td>
      </tr>
      <tr role="row" class="even">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">
          Indonesia
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-success bg-successlight">OK</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >iOS - iPhone Pro</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.100.56.50</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          40 mins ago
        </td>
      </tr>
      <tr role="row" class="odd">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">India</td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-danger bg-dangerlight">ERROR</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >Firefox - Windows</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.54</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          20 mins ago
        </td>
      </tr>
      <tr role="row" class="even">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">India</td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-danger bg-dangerlight">ERROR</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >Firefox - Windows</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.54</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          20 mins ago
        </td>
      </tr>
      <tr role="row" class="odd">
        <td class="!py-2.5 !px-5 border-b border-border sorting_1">China</td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <span class="badge badge-sm text-success bg-successlight">OK</span>
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">
          <a href="javascript:void(0);" class="text-primary"
            >Chrome - Windows</a
          >
        </td>
        <td class="!py-2.5 !px-5 border-b border-border">236.125.56.78</td>
        <td class="!py-2.5 !px-5 border-b border-border text-end">
          2 mins ago
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
