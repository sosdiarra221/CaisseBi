<script lang="ts" setup></script>

<template>
  <div
    x-show="tab == 'project-grid'"
    x-transition:enter="transition-all duration-500 easy-in-out"
    x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
    x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
  >
    <div class="grid grid-cols-12 gap-x-6">
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/folder.png" alt="" />
            </div>
            <div>
              <h5>CRUD Invoices</h5>
              <span class="text-sm">7 files</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/folder.png" alt="" />
            </div>
            <div>
              <h5>Tower Hill Docs</h5>
              <span class="text-sm">3 files</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/folder.png" alt="" />
            </div>
            <div>
              <h5>Mivy App</h5>
              <span class="text-sm">25 files</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/folder.png" alt="" />
            </div>
            <div>
              <h5>Leaf CRM API Co..</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/csv.png" alt="" />
            </div>
            <div>
              <h5>Tower Hill bilboa..</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/css.png" alt="" />
            </div>
            <div>
              <h5>Orders backup</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/pdf.png" alt="" />
            </div>
            <div>
              <h5>Avionica Tech Req..</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/html.png" alt="" />
            </div>
            <div>
              <h5>9 Degree CRUD Req..</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/ppt.png" alt="" />
            </div>
            <div>
              <h5>User CRUD Styles</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-12">
        <div class="card">
          <div class="p-6 text-center flex flex-col justify-between">
            <div class="m-auto pb-4">
              <img src="../../assets/images/files/mp3.png" alt="" />
            </div>
            <div>
              <h5>Craft Logo</h5>
              <span class="text-sm">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
