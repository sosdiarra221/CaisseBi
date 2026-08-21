<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Media Object" name="Media Object" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Media Object</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/1.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Media heading</h5>
                    <p class="sm:text-sm">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
                <div class="flex items-start mt-6">
                  <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/7.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Media heading</h5>
                    <p class="sm:text-sm">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Nesting</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/2.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Media heading</h5>
                    <p class="sm:text-sm">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <div class="flex items-start mt-6">
                      <a class="pr-4" href="javascript:void(0);">
                        <img class="rounded-lg" width="60" src="assets/images/avatar/3.jpg" alt="DexignZone" />
                      </a>
                      <div class="flex-1">
                        <h5 class="mb-2">Media heading</h5>
                        <p class="sm:text-sm">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                          condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Align Top</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <img class="self-start mr-4 rounded-lg" width="60" src="assets/images/avatar/4.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Top-aligned media</h5>
                    <p class="sm:text-sm mb-2">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <p class="sm:text-sm">
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Align Center</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <img class="self-center mr-4 rounded-lg" width="60" src="assets/images/avatar/5.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Center-aligned media</h5>
                    <p class="sm:text-sm mb-2">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <p class="sm:text-sm">
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Align Bottom</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <img class="self-end mr-4 rounded-lg" width="60" src="assets/images/avatar/6.jpg" alt="DexignZone" />
                  <div class="flex-1">
                    <h5 class="mb-2">Bottom-aligned media</h5>
                    <p class="sm:text-sm mb-2">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <p class="sm:text-sm">
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Order</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <div class="flex items-start">
                  <div class="flex-1">
                    <h5 class="mb-2">Media object</h5>
                    <p class="sm:text-sm">
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                      nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                  </div>
                  <img class="ml-4 rounded-lg" width="60" src="assets/images/avatar/7.jpg" alt="DexignZone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Media list</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tailwind-media">
                <ul class="list-unstyled">
                  <li class="flex items-start">
                    <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/8.jpg" alt="DexignZone" />
                    <div class="flex-1">
                      <h5 class="mb-2">List-based media object</h5>
                      <p class="sm:text-sm">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start my-6">
                    <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/1.jpg" alt="DexignZone" />
                    <div class="flex-1">
                      <h5 class="mb-2">List-based media object</h5>
                      <p class="sm:text-sm">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <img class="mr-4 rounded-lg" width="60" src="assets/images/avatar/2.jpg" alt="DexignZone" />
                    <div class="flex-1">
                      <h5 class="mb-2">List-based media object</h5>
                      <p class="sm:text-sm">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
