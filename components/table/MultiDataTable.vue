<script lang="ts" setup>
import Prism from "~/lib/HighLighter";
import { multiDatatable } from "./CodeHeightlighter";
import { DataTable } from "datatables.net-vue3";
import Select from "datatables.net";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

DataTable.use(Select);

const { code1, code2, code3, code4, code5 } = multiDatatable;

const tab = reactive({
  basic: "Preview",
  always: "Preview",
  default: "Preview",
  bordered: "Preview",
  withoutspace: "Preview",
  spacewithborder: "Preview",
  rightposition: "Preview",
  withicon: "Preview",
  headerbackground: "Preview",
  solidbackground: "Preview",
  activebackground: "Preview",
  headershadow: "Preview",
  roundedstylish: "Preview",
  gradient: "Preview",
  alertsocial: "Preview",
  messagealert: "Preview",
  withsolidcolor: "Preview",
  lefticonbig: "Preview",
});
</script>

<template>
  <div class="w-full">
    <div
      class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0"
      x-data="{ tab: 'Preview' }"
      id="basic-alerts"
    >
      <div
        class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <div>
          <h4 class="uppercase text-sm">Basic Datatable</h4>
        </div>
        <ul
          class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.basic = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.basic == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.basic = 'html'"
              :class="{ ' !text-white bg-primary': tab.basic == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <!--tab-content-->
      <div class="tab-content" id="myTabContent">
        <Transition
          v-show="tab.basic == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <div class="sm:p-7.5 p-4">
                <div class="overflow-x-auto">
                  <DataTable
                    id="example"
                    class="display table text-left text-primary pb-8"
                    style="min-width: 845px"
                  >
                    <thead>
                      <tr>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Name
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Position
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Office
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Age
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Start date
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-body !font-medium text-base"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tiger Nixon
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          System Architect
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Edinburgh
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">61</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2011/04/25
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $320,800
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Garrett Winters
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Accountant
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tokyo
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">63</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2011/07/25
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $170,750
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Ashton Cox
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Junior Technical Author
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          San Francisco
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">66</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2009/01/12
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $86,000
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cedric Kelly
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Senior Javascript Developer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Edinburgh
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/03/29
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $433,060
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Accountant
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tokyo
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">33</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2008/11/28
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $162,700
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Brielle Williamson
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Integration Specialist
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          New York
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">61</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/12/02
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $372,000
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Herrod Chandler
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sales Assistant
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          San Francisco
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">59</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/08/06
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $137,500
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Rhona Davidson
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Integration Specialist
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tokyo
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">55</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2010/10/14
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $327,900
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Colleen Hurst
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Javascript Developer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          San Francisco
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">39</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2009/09/15
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $205,500
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Software Engineer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Edinburgh
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">23</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2008/12/13
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $103,600
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Jena Gaines
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Office Manager
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          London
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">30</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2008/12/19
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $90,560
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Quinn Flynn
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Support Lead
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Edinburgh
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2013/03/03
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $342,000
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Charde Marshall
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Regional Director
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          San Francisco
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">36</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2008/10/16
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $470,600
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Haley Kennedy
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Senior Marketing Designer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          London
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">43</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/12/18
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $313,500
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tatyana Fitzpatrick
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Regional Director
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          London
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">19</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2010/03/17
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $385,750
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Michael Silva
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Marketing Designer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          London
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">66</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/11/27
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $198,500
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Paul Byrd
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Chief Financial Officer (CFO)
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          New York
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">64</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2010/06/09
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $725,000
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Gloria Little
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Systems Administrator
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          New York
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">59</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2009/04/10
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $237,500
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Bradley Greer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Software Engineer
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          London
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">41</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/10/13
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $132,000
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dai Rios
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Personnel Lead
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Edinburgh
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">35</td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          2012/09/26
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          $217,500
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Name
                        </th>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Position
                        </th>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Office
                        </th>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Age
                        </th>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Start date
                        </th>
                        <th
                          class="!border-border !border-t-0 border-b !py-4 !px-3.6 text-body !font-medium"
                        >
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.basic == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code1" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
      <!--/tab-content-->
    </div>
  </div>
  <div class="w-full">
    <div
      class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0"
      x-data="{ tab: 'colorAlerts' }"
      id="color-alerts"
    >
      <div
        class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <div>
          <h4 class="uppercase text-sm">Responsive Datatable</h4>
        </div>
        <ul
          class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5"
          id="myTab-1"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.always = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.always == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.always = 'html'"
              :class="{ ' !text-white bg-primary': tab.always == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab.always-content">
        <Transition
          v-show="tab.always == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <DataTable id="responsiveTable" class="display text-left !w-full">
                <thead>
                  <tr>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Name
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Position
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Office
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Age
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Start date
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tiger Nixon
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      System Architect
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">61</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/04/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $320,800
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Garrett Winters
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Accountant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tokyo</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">63</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/07/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $170,750
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Ashton Cox
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Junior Technical Author
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">66</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/01/12
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$86,000</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Cedric Kelly
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Senior Javascript Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/03/29
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $433,060
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Airi Satou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Accountant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tokyo</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">33</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/11/28
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $162,700
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brielle Williamson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Integration Specialist
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">61</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/02
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $372,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Herrod Chandler
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sales Assistant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">59</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/08/06
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $137,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Rhona Davidson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Integration Specialist
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tokyo</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">55</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/10/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $327,900
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Colleen Hurst
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Javascript Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">39</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/09/15
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $205,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sonya Frost
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">23</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/13
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $103,600
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jena Gaines
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Office Manager
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">30</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/19
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$90,560</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Quinn Flynn
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Support Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2013/03/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $342,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Charde Marshall
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">36</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/10/16
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $470,600
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Haley Kennedy
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Senior Marketing Designer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">43</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/18
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $313,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tatyana Fitzpatrick
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">19</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/17
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $385,750
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Michael Silva
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Marketing Designer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">66</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/11/27
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $198,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Paul Byrd
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Chief Financial Officer (CFO)
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">64</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/06/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $725,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gloria Little
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Systems Administrator
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">59</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/04/10
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $237,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Bradley Greer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">41</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/10/13
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $132,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Dai Rios
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Personnel Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">35</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/09/26
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $217,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jenette Caldwell
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Development Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">30</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/09/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $345,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Yuri Berry
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Chief Marketing Officer (CMO)
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">40</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/06/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $675,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Caesar Vance
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Pre-Sales Support
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">21</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/12/12
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $106,450
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Doris Wilder
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sales Assistant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Sidney</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">23</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/09/20
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$85,600</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Angelica Ramos
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Chief Executive Officer (CEO)
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">47</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/10/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $1,200,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gavin Joyce
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">42</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/12/22
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$92,575</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jennifer Chang
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Singapore
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">28</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/11/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $357,650
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brenden Wagner
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">28</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/06/07
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $206,850
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Fiona Green
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Chief Operating Officer (COO)
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">48</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/11
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $850,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Shou Itou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Marketing
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tokyo</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">20</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/08/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $163,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Michelle House
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Integration Specialist
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Sidney</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">37</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/06/02
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$95,400</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Suki Burks
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">53</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/10/22
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $114,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Prescott Bartlett
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Technical Author
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">27</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/05/07
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $145,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gavin Cortez
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Team Leader
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/10/26
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $235,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Martena Mccray
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Post-Sales support
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">46</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/03/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $324,050
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Unity Butler
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Marketing Designer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">47</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/12/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$85,675</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Howard Hatfield
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Office Manager
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">51</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/16
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $164,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Hope Fuentes
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Secretary
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">41</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/02/12
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $109,850
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Vivian Harrell
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Financial Controller
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">62</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/02/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $452,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Timothy Mooney
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Office Manager
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">37</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/11
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $136,200
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jackson Bradshaw
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">65</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/09/26
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $645,750
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Olivia Liang
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Support Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Singapore
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">64</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/02/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $234,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Bruno Nash
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">38</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/05/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $163,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sakura Yamamoto
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Support Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tokyo</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">37</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/08/19
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $139,575
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Thor Walton
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">61</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2013/08/11
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$98,540</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Finn Camacho
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Support Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">47</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/07/07
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$87,500</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Serge Baldwin
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Data Coordinator
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Singapore
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">64</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/04/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $138,575
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Zenaida Frank
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">63</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/01/04
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $125,250
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Zorita Serrano
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">56</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/06/01
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $115,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jennifer Acosta
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Junior Javascript Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">43</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2013/02/01
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$75,650</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Cara Stevens
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sales Assistant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">46</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/12/06
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $145,600
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Hermione Butler
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">47</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/03/21
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $356,250
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Lael Greer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Systems Administrator
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">London</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">21</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/02/27
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $103,500
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jonas Alexander
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      San Francisco
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">30</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/07/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">$86,500</td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Shad Decker
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Edinburgh
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">51</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/11/13
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $183,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Michael Bruce
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Javascript Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Singapore
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">29</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/06/27
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $183,000
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Donna Snider
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Customer Support
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      New York
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">27</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/01/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      $112,000
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Name
                    </th>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Position
                    </th>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Office
                    </th>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Age
                    </th>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Start date
                    </th>
                    <th class="!border-border !py-4 !px-3.6 !font-medium">
                      Salary
                    </th>
                  </tr>
                </tfoot>
              </DataTable>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.always == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code2" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div
      class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0"
      x-data="{ tab: 'colorAlerts' }"
      id="color-alerts"
    >
      <div
        class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <div>
          <h4 class="uppercase text-sm">Profile Datatable</h4>
        </div>
        <ul
          class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5"
          id="myTab-1"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.default = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.default == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.default = 'html'"
              :class="{ ' !text-white bg-primary': tab.default == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.default == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <DataTable
                id="example3"
                class="display table text-left"
                style="min-width: 845px"
              >
                <thead>
                  <tr>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    ></th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Name
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Department
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Gender
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Education
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Mobile
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Email
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Joining Date
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic1.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tiger Nixon
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Architect
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      M.COM., P.H.D.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/04/25
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic2.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Garrett Winters
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Accountant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      M.COM., P.H.D.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/07/25
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic3.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Ashton Cox
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Junior Technical
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/01/12
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic4.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Cedric Kelly
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/03/29
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic5.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Airi Satou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Accountant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/11/28
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic6.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brielle Williamson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Specialist
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/02
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic7.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Herrod Chandler
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sales Assistant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/08/06
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic8.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Rhona Davidson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Integration
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/10/14
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic9.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Colleen Hurst
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Javascript Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/09/15
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic10.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sonya Frost
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/13
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic1.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jena Gaines
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Office Manager
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/19
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic2.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Quinn Flynn
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Support Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2013/03/03
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic3.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Charde Marshall
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/10/16
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic4.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Haley Kennedy
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Senior Marketing
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/18
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic5.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tatyana Fitzpatrick
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/17
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic6.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Michael Silva
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Marketing Designer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/11/27
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic7.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Paul Byrd
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Financial Officer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/06/09
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic8.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gloria Little
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Systems Administrator
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/04/10
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic9.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Bradley Greer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/10/13
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic10.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Dai Rios
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Personnel Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/09/26
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic1.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jenette Caldwell
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Development Lead
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/09/03
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic2.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Yuri Berry
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Marketing Officer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/06/25
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic3.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Caesar Vance
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Pre-Sales Support
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/12/12
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic4.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Doris Wilder
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sales Assistant
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/09/20
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic5.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Angelica Ramos
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Executive Officer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/10/09
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic6.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gavin Joyce
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Developer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/12/22
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic7.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jennifer Chang
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Director
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/11/14
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic8.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brenden Wagner
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Software Engineer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.TACH, M.TACH
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/06/07
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic9.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Fiona Green
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Operating Officer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Male</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.A, B.C.A
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/11
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <img
                        class="rounded-full min-w-[35px] w-[35px]"
                        src="assets/images/profile/small/pic10.jpg"
                        alt=""
                      />
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Shou Itou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Regional Marketing
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      B.COM., M.COM.
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">123 456 7890</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      <a href="javascript:void(0);"
                        ><strong class="text-dark">info@example.com</strong></a
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/08/14
                    </td>
                    <td class="!py-4 !px-3.6 text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fas fa-pencil-alt"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </DataTable>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.default == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code3" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div
      class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0"
      x-data="{ tab: 'colorAlerts' }"
      id="color-alerts"
    >
      <div
        class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <div>
          <h4 class="uppercase text-sm">Fees Collection</h4>
        </div>
        <ul
          class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5"
          id="myTab-1"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.withoutspace = 'Preview'"
              :class="{
                ' !text-white bg-primary': tab.withoutspace == 'Preview',
              }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.withoutspace = 'html'"
              :class="{ ' !text-white bg-primary': tab.withoutspace == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withoutspace == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <DataTable
                id="example4"
                class="display table text-left"
                style="min-width: 845px"
              >
                <thead>
                  <tr>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Roll No
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Student Name
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Invoice number
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Fees Type
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Payment Type
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Status
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Date
                    </th>
                    <th
                      class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">01</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tiger Nixon
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54605</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/04/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">02</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Garrett Winters
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54687</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/07/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">03</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Ashton Cox
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#35672</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/01/12
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">04</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Cedric Kelly
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#57984</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/03/29
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">05</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Airi Satou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#12453</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/11/28
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">06</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brielle Williamson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#59723</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/02
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">07</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Herrod Chandler
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98726</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/08/06
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">08</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Rhona Davidson
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98721</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/10/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">09</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Colleen Hurst
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54605</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/09/15
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">10</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Sonya Frost
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98734</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/13
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">11</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jena Gaines
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#12457</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/12/19
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">12</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Quinn Flynn
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#36987</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2013/03/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">13</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Charde Marshall
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98756</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2008/10/16
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">14</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Haley Kennedy
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98754</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/12/18
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">15</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Tatyana Fitzpatrick
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#65248</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/17
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">16</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Michael Silva
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#75943</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/11/27
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">17</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Paul Byrd
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#87954</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/06/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">18</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gloria Little
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98746</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/04/10
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">19</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Bradley Greer
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98674</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/10/13
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">20</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Dai Rios
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#69875</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2012/09/26
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">21</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jenette Caldwell
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54678</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/09/03
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">22</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Yuri Berry
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#98756</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/06/25
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">23</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Caesar Vance
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#86754</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/12/12
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">24</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Doris Wilder
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#34251</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/09/20
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">25</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Angelica Ramos
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#65874</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2009/10/09
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">26</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Gavin Joyce
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54605</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Female</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/12/22
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">27</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Jennifer Chang
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54605</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/11/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">28</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Brenden Wagner
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#45687</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Library</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cheque</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-danger bg-dangerlight border border-transparent"
                        >Udpaid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/06/07
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">29</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Fiona Green
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#23456</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Tuition</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Cash</td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-success bg-successlight border border-transparent"
                        >Paid</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2010/03/11
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                  <tr>
                    <td class="!py-[.85rem] !px-3.6 !border-border">30</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Shou Itou
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">#54605</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">Annual</td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      Credit Card
                    </td>
                    <td class="!py-4 !px-3.6 text-left">
                      <span
                        class="badge text-warning bg-warninglight border border-transparent"
                        >Pending</span
                      >
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border">
                      2011/08/14
                    </td>
                    <td class="!py-[.85rem] !px-3.6 !border-border text-right">
                      <strong class="text-dark">120$</strong>
                    </td>
                  </tr>
                </tbody>
              </DataTable>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code4" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div
      class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0"
      x-data="{ tab: 'colorAlerts' }"
      id="color-alerts"
    >
      <div
        class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <div>
          <h4 class="uppercase text-sm">Patient</h4>
        </div>
        <ul
          class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5"
          id="myTab-1"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.spacewithborder = 'Preview'"
              :class="{
                ' !text-white bg-primary': tab.spacewithborder == 'Preview',
              }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.spacewithborder = 'html'"
              :class="{
                ' !text-white bg-primary': tab.spacewithborder == 'html',
              }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.spacewithborder == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <div class="sm:p-7.5 p-4">
                <div class="overflow-x-auto">
                  <DataTable
                    id="example5"
                    class="display table text-left"
                    style="min-width: 845px"
                    :options="{
                      searching: false,
                      paging: false,
                      info: false,
                      columnDefs: [{ target: 0, orderable: false }],
                    }"
                  >
                    <thead>
                      <tr>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm"
                        >
                          <div class="custom-control inline custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input checkAll"
                              id="checkInput"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="checkInput"
                            ></label>
                          </div>
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Patient ID
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Date Check in
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Patient Name
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Doctor Assgined
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Disease
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Status
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Room no
                        </th>
                        <th
                          class="!py-4 !pl-3.6 !pr-6.1 border-b !border-border text-2sm !font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox2"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox2"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00001
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Tiger Nixon
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Cedric
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-001
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox3"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox3"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00002
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Garrett Winters
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Cedric
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-002
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox4"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox4"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00003
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Ashton Cox
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-success bg-successlight border border-transparent"
                          >
                            <i class="fa fa-circle text-success mr-1"></i>
                            Recovered
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-003
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox5"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox5"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00004
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          29/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Ashton Cox
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Cedric
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-004
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox6"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox6"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00005
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Ashton Cox
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Cedric
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-005
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox7"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox7"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00006
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Ashton Cox
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-006
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox8"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox8"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00007
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-007
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox9"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox9"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00008
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          29/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Garrett
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-008
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox10"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox10"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00009
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          25/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-009
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox11"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox11"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00010
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-010
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox12"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox12"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00011
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Airi Satou
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-011
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox13"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox13"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00012
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          29/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Garrett
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-012
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox14"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox14"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00013
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          25/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-013
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox15"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox15"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00014
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Garrett
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-014
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox16"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox16"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00015
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-015
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox17"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox17"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00016
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          29/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Garrett
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-016
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox18"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox18"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00017
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          25/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-017
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox19"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox19"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00018
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          26/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-018
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox20"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox20"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00019
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          28/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Rhona
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Cold & Flu
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-danger bg-dangerlight border border-transparent"
                          >
                            <i class="fa fa-circle text-danger mr-1"></i>
                            New Patient
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-019
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <div class="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="customCheckBox21"
                              required
                            />
                            <label
                              class="ml-[0.313rem] mt-[0.113rem]"
                              for="customCheckBox21"
                            ></label>
                          </div>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          #P-00020
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          25/02/2020, 12:42 AM
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sonya Frost
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Dr. Garrett
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          Sleep Problem
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          <span
                            class="badge text-warning bg-warninglight border border-transparent"
                          >
                            <i class="fa fa-circle text-warning mr-1"></i>
                            In Treatment
                          </span>
                        </td>
                        <td class="!py-[.85rem] !px-3.6 !border-border">
                          AB-020
                        </td>
                        <td class="!py-[.85rem] !px-3.6 text-right">
                          <CustomeDropDown class="cursor-pointer relative">
                            <template #trigger>
                              <div class="btn-link">
                                <svg
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  version="1.1"
                                >
                                  <g
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      x="0"
                                      y="0"
                                      width="24"
                                      height="24"
                                    ></rect>
                                    <circle
                                      fill="var(--primary)"
                                      cx="5"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="12"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                    <circle
                                      fill="var(--primary)"
                                      cx="19"
                                      cy="12"
                                      r="2"
                                    ></circle>
                                  </g>
                                </svg>
                              </div>
                            </template>
                            <template #menu>
                              <div
                                class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                              >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Accept Patient</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >Reject Order</a
                                >
                                <a
                                  class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                                  href="javascript:void(0);"
                                  >View Details</a
                                >
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                    </tbody>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.spacewithborder == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code5" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
