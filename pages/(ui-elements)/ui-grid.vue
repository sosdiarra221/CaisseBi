<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Grid" name="Grid" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base capitalize">Grid options</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="sm:text-sm mb-4">
                While Tailwind u ses or for defining most sizes,are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font
                size. See how aspects of the Tailwind grid system work across multiple devices with a handy table.
              </p>
              <div class="overflow-x-auto table-scroll">
                <table class="table w-full mb-4 text-left" style="min-width: 480px">
                  <thead>
                    <tr class="border-y border-border">
                      <th class="border border-border text-secondary sm:text-base font-medium text-center"></th>
                      <th class="border border-border text-secondary sm:text-base font-medium text-center">
                        Extra small<br />
                        <small>&lt;576px</small>
                      </th>
                      <th class="border border-border text-secondary sm:text-base font-medium text-center">
                        Small<br />
                        <small>≥576px</small>
                      </th>
                      <th class="border border-border text-secondary sm:text-base font-medium text-center">
                        Medium<br />
                        <small>≥768px</small>
                      </th>
                      <th class="border border-border text-secondary sm:text-base font-medium text-center">
                        Large<br />
                        <small>≥992px</small>
                      </th>
                      <th class="border border-border text-secondary sm:text-base font-medium text-right">
                        Extra large<br />
                        <small>≥1200px</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row">Max container width</th>
                      <td class="border border-border">None (auto)</td>
                      <td class="border border-border">540px</td>
                      <td class="border border-border">720px</td>
                      <td class="border border-border">960px</td>
                      <td class="border border-border text-right">1140px</td>
                    </tr>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row">Class prefix</th>
                      <td class="border border-border"><code class="text-danger py-1.5 px-2.5">.w-</code></td>
                      <td class="border border-border"><code class="text-danger py-1.5 px-2.5">.sm:w-</code></td>
                      <td class="border border-border"><code class="text-danger py-1.5 px-2.5">.md:w-</code></td>
                      <td class="border border-border"><code class="text-danger py-1.5 px-2.5">.lg:w-</code></td>
                      <td class="border border-border text-right"><code class="text-danger py-1.5 px-2.5">.xl:w-</code></td>
                    </tr>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row"># of columns</th>
                      <td class="border border-border text-right" colspan="5">12</td>
                    </tr>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row">Gutter width</th>
                      <td class="border border-border text-right" colspan="5">24px (12px on each side of a column)</td>
                    </tr>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row">Nestable</th>
                      <td class="border border-border text-right" colspan="5">Yes</td>
                    </tr>
                    <tr class="border-y border-border odd:bg-[#0000000d]">
                      <th class="border border-border text-dark" scope="row">Column ordering</th>
                      <td class="border border-border text-right" colspan="5">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base capitalize">Grid Column</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm">
                Using a single set of grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming
                horizontal on desktop (medium) devices. Place grid columns in any
              </p>
              <div class="row">
                <div class="w-full">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">.w-full</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-11/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-11/12</div>
                </div>
                <div class="xl:w-1/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/12</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-5/6">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-5/6</div>
                </div>
                <div class="xl:w-1/6">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/6</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-3/4">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-3/4</div>
                </div>
                <div class="xl:w-1/4">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/4</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-2/3">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-2/3</div>
                </div>
                <div class="xl:w-1/3">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/3</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-7/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-7/12</div>
                </div>
                <div class="xl:w-5/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-5/12</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-1/2">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/2</div>
                </div>
                <div class="xl:w-1/2">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/2</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-5/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-5/12</div>
                </div>
                <div class="xl:w-7/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-7/12</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-1/3">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/3</div>
                </div>
                <div class="xl:w-2/3">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-2/3</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-1/4">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/4</div>
                </div>
                <div class="xl:w-3/4">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-3/4</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-1/6">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/6</div>
                </div>
                <div class="xl:w-5/6">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-5/6</div>
                </div>
              </div>

              <div class="row">
                <div class="xl:w-1/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-1/12</div>
                </div>
                <div class="xl:w-11/12">
                  <div class="p-2 bg-[#f2f4fa] dark:bg-d-bg mb-6">xl:w-11/12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
