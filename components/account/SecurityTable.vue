<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import Select from "datatables.net";


DataTable.use(Select);
</script>

<template>
  <DataTable
    class="display table !mb-6 text-left"
    id="tableLicenseUsage"
    :options="{
      lengthChange: false,
      searching: false,
    }"
  >
    <thead>
      <tr>
        <th class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 style-1">Status</th>
        <th class="!border-0 bg-primarylight text-primary !py-2.5 !px-5">Operator</th>
        <th class="!border-0 bg-primarylight text-primary !py-2.5 !px-5">IP Address</th>
        <th class="!border-0 bg-primarylight text-primary !py-2.5 !px-5">Created</th>
        <th class="!border-0 bg-primarylight text-primary !py-2.5 !px-5 text-right">API Keys</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">DSI: Workstation 2</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-danger bg-dangerlight">Unknown</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">ReXe: Workstation 29</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="flex justify-between">
            <div class="clearfix">none</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">RamenLC: Workstation 2</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>

        <td class="border-b border-border !py-2.5 !px-5">
          <div class="flex justify-between">
            <div class="clearfix">none</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">Nest Five: Workstation 86</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093912</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-danger bg-dangerlight">Unknown</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">DSI: Workstation 3</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>

        <td class="border-b border-border !py-2.5 !px-5">
          <div class="flex justify-between">
            <div class="clearfix">none</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">ReXe: Workstation 7</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-warning bg-warninglight">To be Paid</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">Swedline: Workstation 54</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">Swedline: Workstation 21</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">DSI: Workstation 320</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-danger bg-dangerlight">Unknown</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">Konami: Workstation 4</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>

        <td class="border-b border-border !py-2.5 !px-5">
          <div class="flex justify-between">
            <div class="clearfix">none</div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="border-b border-border !py-2.5 !px-5">
          <span class="badge badge-sm text-success bg-successlight">License</span>
        </td>
        <td class="border-b border-border !py-2.5 !px-5">Samsung LDE : Workstation 45</td>
        <td class="border-b border-border !py-2.5 !px-5">236.125.56.78</td>
        <td class="border-b border-border !py-2.5 !px-5">2 mins ago</td>
        <td class="border-b border-border !py-2.5 !px-5">
          <div class="select-text-wrap flex justify-between">
            <div class="text-select-copy">fftt456765gjkkjhi83093985</div>
            <button type="button" class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
          </div>
        </td>
      </tr>
    </tbody>
  </DataTable>
</template>
