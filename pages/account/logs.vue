<script lang="ts" setup>
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
import AccountLogDatatable from "~/components/AccountLogDatatable.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Logs" name="Logs" />
    <div class="container">
      <CommoneProfile title="Logs" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="card">
              <div
                class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
              >
                <h4 class="heading mb-0">Logs</h4>
                <div class="flex items-center">
                  <OptionSelect
                    class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                    :options="[
                      { lable: 'All Time' },
                      { lable: 'Week' },
                      { lable: 'Month' },
                    ]"
                  />
                  <button
                    class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white ms-2"
                  >
                    View All
                  </button>
                </div>
              </div>
              <div>
                <div class="overflow-x-auto">
                  <table class="table mb-6 w-full text-left">
                    <thead>
                      <tr>
                        <th class="border-b border-border">Status</th>
                        <th class="border-b border-border">URL</th>
                        <th class="border-b border-border text-end">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-success bg-successlight"
                            >OK</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/not_found</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          20 Dec 2024, 2:40 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-danger bg-dangerlight"
                            >ERROR</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/invalid</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          25 Jul 2024, 5:30 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-danger bg-dangerlight"
                            >ERROR</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/payment</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          20 Dec 2024, 2:40 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-success bg-successlight"
                            >OK</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/not_found</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          21 Feb 2024, 2:40 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-success bg-successlight"
                            >OK</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/not_found</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          25 Jul 2024, 5:30 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-danger bg-dangerlight"
                            >ERROR</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/not_found</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          20 Dec 2024, 2:40 pm
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">
                          <span
                            class="badge badge-sm text-success bg-successlight"
                            >OK</span
                          >
                        </td>
                        <td class="border-b border-border">
                          <a href="javascript:void(0);" class="text-primary"
                            >POST/project/NexaDash/5482344/payment</a
                          >
                        </td>
                        <td class="border-b border-border text-end">
                          20 Dec 2024, 2:40 pm
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="card">
              <div
                class="relative py-4.5 px-5 flex justify-between items-center flex-wrap"
              >
                <h4 class="heading mb-0">Login Sessions</h4>
                <div id="tableLogsExcelBTN">
                  <div class="dt-buttons">
                    <button
                      class="dt-button buttons-excel buttons-html5 btn btn-primary tp-btn-light btn-sm mb-0 me-0"
                      tabindex="0"
                      aria-controls="tableLogs"
                      type="button"
                    >
                      <span><i class="las la-file"></i> Export Report</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="sm:px-5 px-4">
                <div class="overflow-x-auto active-projects">
                  <div
                    id="tableLogs_wrapper"
                    class="dataTables_wrapper no-footer"
                  >
                    <ClientOnly>
                      <AccountLogDatatable />
                    </ClientOnly>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
