<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
import AccountOverviewChart from "~/components/account/AccountOverviewChart.vue";
import CommoneProfile from "~/components/account/CommoneProfile.vue";


</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Overview" name="Overview" />
    <div class="container">
      <CommoneProfile title="Overview" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="xl:col-span-5 col-span-12">
            <div class="card">
              <div class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap">
                <h6 class="card-title">Profile Details</h6>
                <a href="javascript:void(0);" class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Edit Profile</a>
              </div>
              <div class="sm:p-5 p-4">
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Full Name</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">Brad Dennis</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Company</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">DexignZone</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Contact Phone</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">123 456 7890</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Company Site</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">dexignzone.com</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Country</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">United States</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Allow Changes</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">Yes</span>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 py-2">
                  <div class="col-span-6">
                    <span class="fs-13">Company Site</span>
                  </div>
                  <div class="col-span-6">
                    <span class="fs-13 font-semibold">dexignzone.com</span>
                  </div>
                </div>
                <div class="bg-warninglight border border-warning rounded-lg text-2sm p-4 mt-4 flex items-center">
                  <div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM12.6562 19.6875H14.0625V15.9375H12.6562C11.877 15.9375 11.25 15.3105 11.25 14.5312C11.25 13.752 11.877 13.125 12.6562 13.125H15.4688C16.248 13.125 16.875 13.752 16.875 14.5312V19.6875H17.3438C18.123 19.6875 18.75 20.3145 18.75 21.0938C18.75 21.873 18.123 22.5 17.3438 22.5H12.6562C11.877 22.5 11.25 21.873 11.25 21.0938C11.25 20.3145 11.877 19.6875 12.6562 19.6875ZM15 7.5C15.4973 7.5 15.9742 7.69754 16.3258 8.04918C16.6775 8.40081 16.875 8.87772 16.875 9.375C16.875 9.87228 16.6775 10.3492 16.3258 10.7008C15.9742 11.0525 15.4973 11.25 15 11.25C14.5027 11.25 14.0258 11.0525 13.6742 10.7008C13.3225 10.3492 13.125 9.87228 13.125 9.375C13.125 8.87772 13.3225 8.40081 13.6742 8.04918C14.0258 7.69754 14.5027 7.5 15 7.5Z"
                        fill="#FF8A11"
                      ></path>
                    </svg>
                  </div>
                  <div class="mx-3">
                    <h6 class="mb-0 font-semibold">We need your attention!</h6>
                    <p class="mb-0 fs-13">Your Payment was declined. To start using tools, please <a href="javascript:void(0);" class="text-warning">Add Payment Method</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 lg:col-span-6 col-span-12">
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
          <div class="xl:col-span-3 lg:col-span-6 col-span-12">
            <div class="card">
              <div class="p-4 text-center pb-1">
                <h4>
                  Upgrade to Pro <br />
                  Create Limitless Deals
                </h4>
                <p class="mb-4">Craft a headline that is both informative and will capture creating an outline, and checking facts</p>
                <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Upgrade Now</a>
              </div>
              <div class="card-footer">
                <img class="view-light w-full" src="../../assets/images/upgrade-light.png" alt="" />
              </div>
            </div>
          </div>
          <div class="xl:col-span-5 col-span-12">
            <div class="card">
              <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
                <div class="clearfix">
                  <h4>Top Selling Categories</h4>
                  <small class="block">7 Category</small>
                </div>
              </div>
              <AccountOverviewChart />
            </div>
          </div>
          <div class="xl:col-span-7 col-span-12">
            <div class="card">
              <div class="relative pt-4 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">Stock Report</h4>
                <div>
                  <OptionSelect
                    className="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
                    :options="[{ lable: 'Slow All' }, { lable: 'In Stock' }, { lable: 'Out of Stock' }]"
                  />
                  <button type="button" class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white ms-2">View All</button>
                </div>
              </div>
              <div class="sm:p-5 p-4">
                <div class="overflow-x-auto">
                  <table class="table mb-1 w-full text-left">
                    <thead>
                      <tr>
                        <th class="border-b border-border">Item</th>
                        <th class="border-b border-border">Product Id</th>
                        <th class="border-b border-border">Date Added</th>
                        <th class="border-b border-border">Status</th>
                        <th class="border-b border-border">Price</th>
                        <th class="border-b border-border text-end">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-b border-border">AudioEngine HD3</td>
                        <td class="border-b border-border">#PXF-578</td>
                        <td class="border-b border-border">Nov 01, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-success bg-successlight border-0">In Stock</span></td>
                        <td class="border-b border-border">$1,120</td>
                        <td class="border-b border-border text-end">58 PCS</td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Google Pixel 6 Pro</td>
                        <td class="border-b border-border">#XGY-356</td>
                        <td class="border-b border-border">Sep 27, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-danger bg-dangerlight border-0">Out of Stock</span></td>
                        <td class="border-b border-border">$440</td>
                        <td class="border-b border-border text-end">14 PCS</td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Dell 32 UltraSharp</td>
                        <td class="border-b border-border">#SRR-678</td>
                        <td class="border-b border-border">Jul 09, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-danger bg-dangerlight border-0">Out of Stock</span></td>
                        <td class="border-b border-border">$4,720</td>
                        <td class="border-b border-border text-end">58 PCS</td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Google Pixel 6 Pro</td>
                        <td class="border-b border-border">#XGY-356</td>
                        <td class="border-b border-border">May 14, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-success bg-successlight border-0">In Stock</span></td>
                        <td class="border-b border-border">$120</td>
                        <td class="border-b border-border text-end">11 PCS</td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">AudioEngine HD3</td>
                        <td class="border-b border-border">#XGY-356</td>
                        <td class="border-b border-border">Dec 30, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-success bg-successlight border-0">In Stock</span></td>
                        <td class="border-b border-border">$503</td>
                        <td class="border-b border-border text-end">58 PCS</td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Google Pixel 6 Pro</td>
                        <td class="border-b border-border">#SRR-678</td>
                        <td class="border-b border-border">Oct 25, 2024</td>
                        <td class="border-b border-border"><span class="badge badge-sm text-danger bg-dangerlight border-0">Out of Stock</span></td>
                        <td class="border-b border-border">$102</td>
                        <td class="border-b border-border text-end">96 PCS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
