<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";
import ProjectDetailChart from "~/components/profile/ProjectDetailChart.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Project Details" name="Project Details" />
    <div class="container">
      <CommoneProfile title="Projects" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="flex justify-between items-center mb-3">
          <h5 class="mb-0">Projects Details</h5>
          <div class="flex items-center">
            <NuxtLink to="/profile/projects" class="text-primary ms-2">More Project</NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-x-6">
          <ProjectDetailChart />
          <div class="lg:col-span-6 col-span-12">
            <div class="card">
              <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
                <div>
                  <h4>Projects Contributions</h4>
                  <small class="block">84 New Tasks & 29 Guides</small>
                </div>
                <div class="ms-auto">
                  <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                </div>
              </div>
              <div class="sm:p-5 p-4">
                <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
                  <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                    <img src="../../assets/images/logo/google.png" alt="" />
                  </div>
                  <div class="ml-4">
                    <h6 class="font-semibold">Piper Aerostar</h6>
                    <span class="fs-13">piper-aircraft-class.jsp</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
                  </div>
                </div>
                <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
                  <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                    <img src="../../assets/images/logo/figma.png" alt="" />
                  </div>
                  <div class="ml-4">
                    <h6 class="font-semibold">Cirrus SR22</h6>
                    <span class="fs-13">cirrus-aircraft.jsp</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">3</span>
                  </div>
                </div>
                <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
                  <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                    <img src="../../assets/images/logo/slack.png" alt="" />
                  </div>
                  <div class="ml-4">
                    <h6 class="font-semibold">Beachcraft Baron</h6>
                    <span class="fs-13">baron-class.pyt</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
                  </div>
                </div>
                <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
                  <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                    <img src="../../assets/images/logo/html.png" alt="" />
                  </div>
                  <div class="ml-4">
                    <h6 class="font-semibold">Cessna SF150</h6>
                    <span class="fs-13">cessna-aircraft-class.jsp</span>
                  </div>
                  <div class="ms-auto">
                    <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
                  </div>
                </div>
                <div class="bg-primarylight border border-primary rounded-lg text-2sm p-4 mt-4 text-secondary">
                  <strong class="text-primary">Intive New .NET Collaborators</strong> to creating great outstanding business to business .jsp modutr class scripts
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 col-span-12">
            <div class="card">
              <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
                <div class="clearfix">
                  <h4 class="card-title mb-0">New Contributors</h4>
                  <small class="block">From total 482 Participants</small>
                </div>
                <a href="javascript:void(0);" class="btn btn-sm bg-light text-textdark">View All</a>
              </div>
              <div class="sm:p-5 p-4">
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <img src="../../assets/images/avatar/5.jpg" alt="" class="inline-block relative object-cover size-9 min-w-9 rounded-full" />
                    <span class="fa fa-circle text-success absolute bottom-0 right-0"></span>
                  </div>
                  <div class="clearfix ml-4">
                    <h6>Karina Clark</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">8</span>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <img src="../../assets/images/avatar/6.jpg" alt="" class="inline-block relative object-cover size-9 min-w-9 rounded-full" />
                    <span class="fa fa-circle text-success absolute bottom-0 right-0"></span>
                  </div>
                  <div class="clearfix ml-4">
                    <h6>Rober Doe</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">6</span>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="relative size-9 min-w-9 rounded-full bg-successlight text-success rounded-circle flex items-center justify-center">N</div>
                  <div class="clearfix ml-4">
                    <h6>Neil Owen</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">7</span>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <img src="../../assets/images/avatar/7.jpg" alt="" class="inline-block relative object-cover size-9 min-w-9 rounded-full" />
                    <span class="fa fa-circle text-success absolute bottom-0 right-0"></span>
                  </div>
                  <div class="clearfix ml-4">
                    <h6>Olivia Wild</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">5</span>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <div class="relative size-9 min-w-9 rounded-full bg-infolight text-info rounded-circle flex items-center justify-center">S</div>
                    <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0"></span>
                  </div>
                  <div class="clearfix ml-4">
                    <h6>Sean Bean</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">3</span>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="inline-block relative">
                    <img src="../../assets/images/avatar/6.jpg" alt="" class="inline-block relative object-cover size-9 min-w-9 rounded-full" />
                    <span class="fa fa-circle text-success absolute bottom-0 right-0"></span>
                  </div>
                  <div class="clearfix ml-4">
                    <h6>Rober Doe</h6>
                    <span class="text-2xs">8 Pending & 97 Completed Tasks</span>
                  </div>
                  <div class="clearfix ms-auto">
                    <span class="badge badge-sm bg-light text-dark">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 col-span-12">
            <div class="card">
              <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
                <div class="clearfix">
                  <h4 class="card-title mb-0">My Tasks</h4>
                  <small class="block">From total 482 Participants</small>
                </div>
                <a href="javascript:void(0);" class="btn btn-sm bg-light text-textdark">View All</a>
              </div>
              <div class="sm:p-5 p-4">
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox1" required />
                    <label class="form-check-label" for="customCheckBox1"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>Create FureStibe branding logo</h6>
                    <span class="text-2xs">Due in 1 day <span class="text-primary">Karina Clark</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox2" required />
                    <label class="form-check-label" for="customCheckBox2"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>Schedule a meeting with FireBear CTO John</h6>
                    <span class="text-2xs">Due in 3 days <span class="text-primary">Rober Doe</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox3" required />
                    <label class="form-check-label" for="customCheckBox3"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>9 Degree Porject Estimation</h6>
                    <span class="text-2xs">Due in 1 week <span class="text-primary">Neil Owen</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start">
                      <i class="fa-solid fa-border-all"></i>
                    </button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox4" required />
                    <label class="form-check-label" for="customCheckBox4"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>Dashgboard UI & UX for Leafr CRM</h6>
                    <span class="text-2xs">Due in 1 week <span class="text-primary">Olivia Wild</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox5" required />
                    <label class="form-check-label" for="customCheckBox5"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>Mivy App R&D, Meeting with clients</h6>
                    <span class="text-2xs">Due in 2 weeks <span class="text-primary">Sean Bean</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="w-1 min-w-1 self-stretch bg-light me-2"></div>
                  <div class="form-check custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="customCheckBox6" required />
                    <label class="form-check-label" for="customCheckBox6"></label>
                  </div>
                  <div class="clearfix ms-2">
                    <h6>Create FureStibe branding logo</h6>
                    <span class="text-2xs">Due in 1 day <span class="text-primary">Karina Clark</span></span>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 col-span-12">
            <div class="card">
              <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
                <div class="clearfix">
                  <h4 class="card-title mb-0">Latest Files</h4>
                  <small class="block">Total 382 fiels, 2,6GB space usage</small>
                </div>
                <a href="javascript:void(0);" class="btn btn-sm bg-light text-textdark">View All</a>
              </div>
              <div class="sm:p-5 p-4">
                <div class="flex items-center py-2">
                  <div class="flex items-center">
                    <div class="me-2">
                      <img src="../../assets/images/files/pdf.png" width="32" alt="" />
                    </div>
                    <div class="clearfix">
                      <h6>Project tech requirements</h6>
                      <span class="text-2xs">2 days ago <span class="text-primary">Karina Clark</span></span>
                    </div>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="flex items-center">
                    <div class="me-2">
                      <img src="../../assets/images/files/css.png" width="32" alt="" />
                    </div>
                    <div class="clearfix">
                      <h6>Create FureStibe branding logo</h6>
                      <span class="text-2xs">Due in 1 day <span class="text-primary">Karina Clark</span></span>
                    </div>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="flex items-center">
                    <div class="me-2">
                      <img src="../../assets/images/files/csv.png" width="32" alt="" />
                    </div>
                    <div class="clearfix">
                      <h6>Create FureStibe branding logo</h6>
                      <span class="text-2xs">Due in 1 day <span class="text-primary">Karina Clark</span></span>
                    </div>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="flex items-center py-2">
                  <div class="flex items-center">
                    <div class="me-2">
                      <img src="../../assets/images/files/mp3.png" width="32" alt="" />
                    </div>
                    <div class="clearfix">
                      <h6>Create FureStibe branding logo</h6>
                      <span class="text-2xs">Due in 1 day <span class="text-primary">Karina Clark</span></span>
                    </div>
                  </div>
                  <div class="clearfix ms-auto">
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                </div>
                <div class="bg-primarylight border border-primary rounded-lg py-4 px-4 flex items-center mb-0 mt-4">
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      opacity="0.25"
                      d="M4.125 5.5C4.125 3.22183 5.97183 1.375 8.25 1.375H21.6664C22.7604 1.375 23.8096 1.8096 24.5832 2.58318L27.6668 5.66682C28.4404 6.4404 28.875 7.48961 28.875 8.58363V27.5C28.875 29.7782 27.0282 31.625 24.75 31.625H8.25C5.97183 31.625 4.125 29.7782 4.125 27.5V5.5Z"
                      fill="#0D99FF"
                    />
                    <path
                      d="M20.625 2.60123C20.625 1.924 21.174 1.375 21.8512 1.375C22.8269 1.375 23.7626 1.76258 24.4525 2.45247L27.7975 5.79753C28.4874 6.48742 28.875 7.42312 28.875 8.39877C28.875 9.076 28.326 9.625 27.6488 9.625H22C21.2406 9.625 20.625 9.00939 20.625 8.25V2.60123Z"
                      fill="#0D99FF"
                    />
                    <path
                      d="M15.9737 12.4793C15.8115 12.5464 15.6596 12.6459 15.5277 12.7777L11.4027 16.9027C10.8658 17.4397 10.8658 18.3103 11.4027 18.8473C11.9397 19.3842 12.8103 19.3842 13.3473 18.8473L15.125 17.0695V23.375C15.125 24.1344 15.7406 24.75 16.5 24.75C17.2594 24.75 17.875 24.1344 17.875 23.375V17.0695L19.6527 18.8473C20.1897 19.3842 21.0603 19.3842 21.5973 18.8473C22.1342 18.3103 22.1342 17.4397 21.5973 16.9027L17.4723 12.7777C17.0671 12.3726 16.4721 12.2731 15.9737 12.4793Z"
                      fill="#0D99FF"
                    />
                  </svg>
                  <div class="mx-3">
                    <h6 class="font-semibold mb-1">Quick file uploader</h6>
                    <p class="fs-14 mb-0 text-secondary">Drag & Drop or choose files from computer</p>
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
