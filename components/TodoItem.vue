<script lang="ts" setup>
import { VueDraggableNext } from "vue-draggable-next";
</script>

<template>
  <div class="dt-do-bx">
    <VueDraggableNext handle=".draggable-handle" class="draggable-zone dropzoneContainer to-dodroup dz-scroll h-[362px] overflow-y-scroll relative overflow-x-hidden">
      <div class="sub-card draggable-handle draggable border-b border-border cursor-all-scroll">
        <div class="d-items py-3.6 px-5">
          <span class="text-warning dang block mb-2">
            <svg class="inline-block mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.61051 15.3276H14.3978C15.5843 15.3276 16.329 14.0451 15.7395 13.0146L10.35 3.59085C9.75676 2.5536 8.26126 2.55285 7.66726 3.5901L2.26876 13.0139C1.67926 14.0444 2.42326 15.3276 3.61051 15.3276Z"
                stroke="#FF9F00"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M9.00189 10.0611V7.7361" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.99625 12.375H9.00375" stroke="#FF9F00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Latest to do's
          </span>
          <div class="flex justify-between">
            <div class="d-iteml-2 flex items-baseline">
              <div>
                <svg class="inline-block mr-[10px]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="1" fill="#888888" />
                  <rect y="3" width="1" height="1" fill="#888888" />
                  <rect y="6" width="1" height="1" fill="#888888" />
                  <rect y="9" width="1" height="1" fill="#888888" />
                  <rect y="12" width="1" height="1" fill="#888888" />
                  <rect y="15" width="1" height="1" fill="#888888" />
                  <rect x="4" width="1" height="1" fill="#888888" />
                  <rect x="4" y="3" width="1" height="1" fill="#888888" />
                  <rect x="4" y="6" width="1" height="1" fill="#888888" />
                  <rect x="4" y="9" width="1" height="1" fill="#888888" />
                  <rect x="4" y="12" width="1" height="1" fill="#888888" />
                  <rect x="4" y="15" width="1" height="1" fill="#888888" />
                  <rect x="8" width="1" height="1" fill="#888888" />
                  <rect x="8" y="3" width="1" height="1" fill="#888888" />
                  <rect x="8" y="6" width="1" height="1" fill="#888888" />
                  <rect x="8" y="9" width="1" height="1" fill="#888888" />
                  <rect x="8" y="12" width="1" height="1" fill="#888888" />
                  <rect x="8" y="15" width="1" height="1" fill="#888888" />
                </svg>
              </div>
              <div>
                <div class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold">
                  <input type="checkbox" class="form-check-input" id="customCheckBox1" required />
                  <label class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal" for="customCheckBox1">Compete this projects</label>
                </div>
                <span class="text-body">2024-12-26 07:15:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="icon-box size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-dangerlight mr-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="icon-box text-primary size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-primarylight ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16492 13.6286H14" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                    stroke="var(--primary)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.34723 4.00059L10.9821 6.79201" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-card draggable-handle draggable border-b border-border cursor-all-scroll">
        <div class="d-items py-3.6 px-5">
          <span class="text-success dang block mb-2">
            <svg class="inline-block mr-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 4.5L6.75 12.75L3 9" stroke="#3AC977" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Latest finished to do's
          </span>
          <div class="flex justify-between">
            <div class="d-iteml-2 flex items-baseline">
              <div>
                <svg class="inline-block mr-[10px]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="1" fill="#888888" />
                  <rect y="3" width="1" height="1" fill="#888888" />
                  <rect y="6" width="1" height="1" fill="#888888" />
                  <rect y="9" width="1" height="1" fill="#888888" />
                  <rect y="12" width="1" height="1" fill="#888888" />
                  <rect y="15" width="1" height="1" fill="#888888" />
                  <rect x="4" width="1" height="1" fill="#888888" />
                  <rect x="4" y="3" width="1" height="1" fill="#888888" />
                  <rect x="4" y="6" width="1" height="1" fill="#888888" />
                  <rect x="4" y="9" width="1" height="1" fill="#888888" />
                  <rect x="4" y="12" width="1" height="1" fill="#888888" />
                  <rect x="4" y="15" width="1" height="1" fill="#888888" />
                  <rect x="8" width="1" height="1" fill="#888888" />
                  <rect x="8" y="3" width="1" height="1" fill="#888888" />
                  <rect x="8" y="6" width="1" height="1" fill="#888888" />
                  <rect x="8" y="9" width="1" height="1" fill="#888888" />
                  <rect x="8" y="12" width="1" height="1" fill="#888888" />
                  <rect x="8" y="15" width="1" height="1" fill="#888888" />
                </svg>
              </div>
              <div>
                <div class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold">
                  <input type="checkbox" class="form-check-input" id="customCheckBox02" required />
                  <label class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal" for="customCheckBox02">Projects Done Monday</label>
                </div>
                <span class="text-body">2024-12-26 07:15:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="icon-box size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-dangerlight mr-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="icon-box text-primary size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-primarylight ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16492 13.6286H14" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                    stroke="var(--primary)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.34723 4.00059L10.9821 6.79201" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-card draggable-handle draggable border-b border-border cursor-all-scroll">
        <div class="d-items py-3.6 px-5">
          <div class="flex justify-between">
            <div class="d-iteml-2 flex items-baseline">
              <div>
                <svg class="inline-block mr-[10px]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="1" fill="#888888" />
                  <rect y="3" width="1" height="1" fill="#888888" />
                  <rect y="6" width="1" height="1" fill="#888888" />
                  <rect y="9" width="1" height="1" fill="#888888" />
                  <rect y="12" width="1" height="1" fill="#888888" />
                  <rect y="15" width="1" height="1" fill="#888888" />
                  <rect x="4" width="1" height="1" fill="#888888" />
                  <rect x="4" y="3" width="1" height="1" fill="#888888" />
                  <rect x="4" y="6" width="1" height="1" fill="#888888" />
                  <rect x="4" y="9" width="1" height="1" fill="#888888" />
                  <rect x="4" y="12" width="1" height="1" fill="#888888" />
                  <rect x="4" y="15" width="1" height="1" fill="#888888" />
                  <rect x="8" width="1" height="1" fill="#888888" />
                  <rect x="8" y="3" width="1" height="1" fill="#888888" />
                  <rect x="8" y="6" width="1" height="1" fill="#888888" />
                  <rect x="8" y="9" width="1" height="1" fill="#888888" />
                  <rect x="8" y="12" width="1" height="1" fill="#888888" />
                  <rect x="8" y="15" width="1" height="1" fill="#888888" />
                </svg>
              </div>
              <div>
                <div class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold">
                  <input type="checkbox" class="form-check-input" id="customCheckBox03" required />
                  <label class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal" for="customCheckBox03">Task Done Monday</label>
                </div>
                <span class="text-body">2024-12-26 07:15:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="icon-box size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-dangerlight mr-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="icon-box text-primary size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-primarylight ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16492 13.6286H14" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                    stroke="var(--primary)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.34723 4.00059L10.9821 6.79201" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-card draggable-handle draggable border-b border-border cursor-all-scroll">
        <div class="d-items py-3.6 px-5">
          <div class="flex justify-between">
            <div class="d-iteml-2 flex items-baseline">
              <div>
                <svg class="inline-block mr-[10px]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="1" fill="#888888" />
                  <rect y="3" width="1" height="1" fill="#888888" />
                  <rect y="6" width="1" height="1" fill="#888888" />
                  <rect y="9" width="1" height="1" fill="#888888" />
                  <rect y="12" width="1" height="1" fill="#888888" />
                  <rect y="15" width="1" height="1" fill="#888888" />
                  <rect x="4" width="1" height="1" fill="#888888" />
                  <rect x="4" y="3" width="1" height="1" fill="#888888" />
                  <rect x="4" y="6" width="1" height="1" fill="#888888" />
                  <rect x="4" y="9" width="1" height="1" fill="#888888" />
                  <rect x="4" y="12" width="1" height="1" fill="#888888" />
                  <rect x="4" y="15" width="1" height="1" fill="#888888" />
                  <rect x="8" width="1" height="1" fill="#888888" />
                  <rect x="8" y="3" width="1" height="1" fill="#888888" />
                  <rect x="8" y="6" width="1" height="1" fill="#888888" />
                  <rect x="8" y="9" width="1" height="1" fill="#888888" />
                  <rect x="8" y="12" width="1" height="1" fill="#888888" />
                  <rect x="8" y="15" width="1" height="1" fill="#888888" />
                </svg>
              </div>
              <div>
                <div class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold">
                  <input type="checkbox" class="form-check-input" id="customCheckBox4" required />
                  <label class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal" for="customCheckBox4">Scss Done </label>
                </div>
                <span class="text-body">2024-12-26 07:15:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="icon-box size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-dangerlight mr-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="icon-box text-primary size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-primarylight ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16492 13.6286H14" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                    stroke="var(--primary)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.34723 4.00059L10.9821 6.79201" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-card draggable-handle draggable border-b border-border cursor-all-scroll">
        <div class="d-items py-3.6 px-5">
          <div class="flex justify-between">
            <div class="d-iteml-2 flex items-baseline">
              <div>
                <svg class="inline-block mr-[10px]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1" height="1" fill="#888888" />
                  <rect y="3" width="1" height="1" fill="#888888" />
                  <rect y="6" width="1" height="1" fill="#888888" />
                  <rect y="9" width="1" height="1" fill="#888888" />
                  <rect y="12" width="1" height="1" fill="#888888" />
                  <rect y="15" width="1" height="1" fill="#888888" />
                  <rect x="4" width="1" height="1" fill="#888888" />
                  <rect x="4" y="3" width="1" height="1" fill="#888888" />
                  <rect x="4" y="6" width="1" height="1" fill="#888888" />
                  <rect x="4" y="9" width="1" height="1" fill="#888888" />
                  <rect x="4" y="12" width="1" height="1" fill="#888888" />
                  <rect x="4" y="15" width="1" height="1" fill="#888888" />
                  <rect x="8" width="1" height="1" fill="#888888" />
                  <rect x="8" y="3" width="1" height="1" fill="#888888" />
                  <rect x="8" y="6" width="1" height="1" fill="#888888" />
                  <rect x="8" y="9" width="1" height="1" fill="#888888" />
                  <rect x="8" y="12" width="1" height="1" fill="#888888" />
                  <rect x="8" y="15" width="1" height="1" fill="#888888" />
                </svg>
              </div>
              <div>
                <div class="form-check custom-checkbox block min-h-[21px] mb-0.5 pl-[1.5em] font-semibold">
                  <input type="checkbox" class="form-check-input" id="customCheckBox5" required />
                  <label class="form-check-label ml-1.1 text-secondary mt-[3px] font-normal" for="customCheckBox5">CSS Runnng Monday</label>
                </div>
                <span class="text-body">2024-12-26 07:15:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="icon-box size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-dangerlight mr-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.8833 6.31213C12.8833 6.31213 12.5213 10.8021 12.3113 12.6935C12.2113 13.5968 11.6533 14.1261 10.7393 14.1428C8.99994 14.1741 7.25861 14.1761 5.51994 14.1395C4.64061 14.1215 4.09194 13.5855 3.99394 12.6981C3.78261 10.7901 3.42261 6.31213 3.42261 6.31213"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.8055 4.1598H2.50012" stroke="#FF5E5E" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M11.6271 4.1598C11.1037 4.1598 10.6531 3.7898 10.5504 3.27713L10.3884 2.46647C10.2884 2.09247 9.94974 1.8338 9.56374 1.8338H6.74174C6.35574 1.8338 6.01707 2.09247 5.91707 2.46647L5.75507 3.27713C5.65241 3.7898 5.20174 4.1598 4.67841 4.1598"
                    stroke="#FF5E5E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="icon-box text-primary size-7 cursor-pointer relative flex items-center justify-center rounded-md icon-box-md bg-primarylight ml-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16492 13.6286H14" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.52001 2.52986C9.0371 1.91186 9.96666 1.82124 10.5975 2.32782C10.6324 2.35531 11.753 3.22586 11.753 3.22586C12.446 3.64479 12.6613 4.5354 12.2329 5.21506C12.2102 5.25146 5.87463 13.1763 5.87463 13.1763C5.66385 13.4393 5.34389 13.5945 5.00194 13.5982L2.57569 13.6287L2.02902 11.3149C1.95244 10.9895 2.02902 10.6478 2.2398 10.3849L8.52001 2.52986Z"
                    stroke="var(--primary)"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M7.34723 4.00059L10.9821 6.79201" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>
