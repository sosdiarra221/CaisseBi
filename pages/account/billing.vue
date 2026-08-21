<script lang="ts" setup>
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import CommonNav from "~/components/CommonNav.vue";

const tab = ref("");
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Billing" name="Billing" />
    <div class="container">
      <CommoneProfile title="Billing" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="card">
              <div class="sm:p-5 p-4">
                <div class="bg-warninglight border border-warning rounded-lg p-4 mt-1 mb-6 text-secondary flex items-center">
                  <div class="clearfix">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 30C18.9782 30 22.7936 28.4196 25.6066 25.6066C28.4196 22.7936 30 18.9782 30 15C30 11.0218 28.4196 7.20644 25.6066 4.3934C22.7936 1.58035 18.9782 0 15 0C11.0218 0 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM12.6562 19.6875H14.0625V15.9375H12.6562C11.877 15.9375 11.25 15.3105 11.25 14.5312C11.25 13.752 11.877 13.125 12.6562 13.125H15.4688C16.248 13.125 16.875 13.752 16.875 14.5312V19.6875H17.3438C18.123 19.6875 18.75 20.3145 18.75 21.0938C18.75 21.873 18.123 22.5 17.3438 22.5H12.6562C11.877 22.5 11.25 21.873 11.25 21.0938C11.25 20.3145 11.877 19.6875 12.6562 19.6875ZM15 7.5C15.4973 7.5 15.9742 7.69754 16.3258 8.04918C16.6775 8.40081 16.875 8.87772 16.875 9.375C16.875 9.87228 16.6775 10.3492 16.3258 10.7008C15.9742 11.0525 15.4973 11.25 15 11.25C14.5027 11.25 14.0258 11.0525 13.6742 10.7008C13.3225 10.3492 13.125 9.87228 13.125 9.375C13.125 8.87772 13.3225 8.40081 13.6742 8.04918C14.0258 7.69754 14.5027 7.5 15 7.5Z"
                        fill="#FF8A11"
                      ></path>
                    </svg>
                  </div>
                  <div class="mx-4">
                    <h6 class="mb-0 font-semibold">We need your attention!</h6>
                    <p>Your Payment was declined. To start using tools, please <a href="javascript:void(0);" class="text-warning">Add Payment Method</a></p>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-4">
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Remaining Account Credits</h6>
                      <p class="mb-2">We will send you a notification soon. <a href="javascript:void(0);" class="text-primary block">Make Action Here</a></p>
                      <span class="h6 mb-0">$136.00</span>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Estimated Cost for Billing Period</h6>
                      <p class="mb-2">We will send you a notification upon Subscription expiration</p>
                      <span class="h6 mb-0">$52.00</span>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Current Service Usage</h6>
                      <div class="progress bg-light mr-1.1 h-1.1 overflow-hidden flex-1 my-4">
                        <div class="progress-bar bg-primary" style="width: 60%; height: 5px; border-radius: 4px"></div>
                      </div>
                      <div class="flex justify-between">
                        <span>Team Users</span>
                        <span class="h6">57 of 100 Used</span>
                      </div>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4 h-full">
                      <h6 class="mb-2">Billing Alerts</h6>
                      <p class="mb-2">Create alerts to notify you on Billing. <a href="javascript:void(0);" class="text-primary">My Alerts Here</a></p>
                      <span class="badge badge-sm text-success bg-successlight">New Alert</span>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 items-center mt-4">
                  <div class="lg:col-span-6 md:col-span-7 col-span-12">
                    <h6 class="mb-1">Bob Marley <span class="text-muted">Is your last bill payer</span></h6>
                    <p class="mb-0">Extended Pro Package. Up to 100 Agents & 25 Projects. Make your business effective</p>
                  </div>
                  <div class="lg:col-span-6 md:col-span-5 col-span-12 md:text-end mt-4 md:mt-0">
                    <a href="javascript:void(0);" class="btn bg-dangerlight text-danger hover:bg-danger hover:text-white hover:shadow-btndanger my-1">Cancel Subcription</a>
                    <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white my-1 ms-2">Upgrade Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-6 col-span-12">
            <div class="card">
              <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">Payment Methods</h4>
              </div>
              <div class="sm:p-5 p-4">
                <div class="grid grid-cols-12 gap-4">
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-4">Marcus Morris <span class="badge badge-sm text-success bg-successlight ms-2">New</span></h6>
                      <div class="flex items-center mb-4">
                        <div class="clearfix me-2">
                          <img src="assets/images/card1.jpg" alt="" />
                        </div>
                        <div class="clearfix">
                          <h6 class="mb-1">Visa **** 1679</h6>
                          <p>Card expires at 09/24</p>
                        </div>
                      </div>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Marcus Morris <span class="badge badge-sm text-success bg-successlight ms-2">New</span></h6>
                      <div class="flex items-center mb-4">
                        <div class="clearfix me-2">
                          <img src="assets/images/card1.jpg" alt="" />
                        </div>
                        <div class="clearfix">
                          <h6 class="mb-1">Visa **** 1679</h6>
                          <p>Card expires at 09/24</p>
                        </div>
                      </div>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Jason Davis</h6>
                      <div class="flex items-center mb-4">
                        <div class="clearfix me-2">
                          <img src="assets/images/card2.jpg" alt="" />
                        </div>
                        <div class="clearfix">
                          <h6 class="mb-1">Mastercard **** 2704</h6>
                          <p>Card expires at 02/26</p>
                        </div>
                      </div>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Jason Davis</h6>
                      <div class="flex items-center mb-4">
                        <div class="clearfix me-2">
                          <img src="assets/images/card2.jpg" alt="" />
                        </div>
                        <div class="clearfix">
                          <h6 class="mb-1">Mastercard **** 2704</h6>
                          <p>Card expires at 02/26</p>
                        </div>
                      </div>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 items-center mt-4">
                  <div class="lg:col-span-6 md:col-span-7 col-span-12">
                    <h6 class="mb-1">You have 2 active cards. <span class="text-muted">Another 3 are inactive</span></h6>
                    <p class="mb-0">Extended Pro Package. Up to 100 Agents & 25 Projects. Make your business effective</p>
                  </div>
                  <div class="lg:col-span-6 md:col-span-5 col-span-12 md:text-end mt-4 md:mt-0">
                    <a href="javascript:void(0);" class="btn bg-light text-textdark my-1">Action</a>
                    <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white my-1 ms-2">Add New Card</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-6 col-span-12">
            <div class="card">
              <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">Billing Addresses</h4>
              </div>
              <div class="sm:p-5 p-4">
                <div class="grid grid-cols-12 gap-4">
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Address 1 <span class="badge badge-sm text-success bg-successlight ms-2">New</span></h6>
                      <p class="mb-2">Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 United States</p>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Address 1</h6>
                      <p class="mb-2">Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 United States</p>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Address 1</h6>
                      <p class="mb-2">Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 United States</p>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                  <div class="sm:col-span-6 col-span-12">
                    <div class="border border-border rounded-md p-4">
                      <h6 class="mb-2">Address 1</h6>
                      <p class="mb-2">Ap #285-7193 Ullamcorper Avenue Amesbury HI 93373 United States</p>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-dangerlight text-danger">Delete</a>
                      <a href="javascript:void(0);" class="btn btn-xxs bg-infolight text-info">Edit</a>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 items-center mt-4">
                  <div class="md:col-span-6 col-span-12">
                    <h6 class="mb-0">Tax Location</h6>
                    <p>United States - 10% VAT <a href="javascript:void(0);" class="text-primary">More Info</a></p>
                  </div>
                  <div class="md:col-span-6 col-span-12 md:text-end mt-4 md:mt-0">
                    <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Add New Address</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="card !h-auto" x-data="{ tab: 'tabWeek' }">
              <div class="relative pt-4 px-5 justify-between items-center flex-wrap block sm:flex pb-0">
                <h4 class="heading mb-0">Billing History</h4>
                <ul class="flex flex-wrap nav-pills mt-4 sm:mt-0 revenue-tab" id="myTabBillingHistory" role="tablist">
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabWeek' }"
                      @click.prevent="tab = 'tabWeek'"
                      type="button"
                    >
                      Week
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabMonth' }"
                      @click.prevent="tab = 'tabMonth'"
                      type="button"
                    >
                      Month
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabYear' }"
                      @click.prevent="tab = 'tabYear'"
                      type="button"
                    >
                      Year
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabAll' }"
                      @click.prevent="tab = 'tabAll'"
                      type="button"
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
              <div class="sm:p-5 p-4">
                <div class="tab-content">
                  <div>
                    <div class="overflow-x-auto">
                      <table class="table !mb-1 w-full text-left">
                        <thead>
                          <tr>
                            <th class="border-b border-border">Date</th>
                            <th class="border-b border-border">Description</th>
                            <th class="border-b border-border">Amount</th>
                            <th class="border-b border-border text-end">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-b border-border">Nov 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for Ocrober 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Oct 08, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for September 2024</span></td>
                            <td class="border-b border-border">$98.03</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 24, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$35.07</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jul 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for June 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 17, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$23.09</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for May 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <div class="overflow-x-auto">
                      <table class="table !mb-1 w-full text-left">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th class="text-end">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-b border-border">Nov 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for Ocrober 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 24, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$35.07</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for July 2024</span></td>
                            <td class="border-b border-border">$142.80</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jul 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for June 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for May 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    x-show="tab == 'tabYear'"
                    x-transition:enter="transition-all duration-500 easy-in-out"
                    x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                    x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                  >
                    <div class="overflow-x-auto">
                      <table class="table !mb-1 w-full text-left">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th class="text-end">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-b border-border">Nov 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for Ocrober 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 24, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$35.07</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for July 2024</span></td>
                            <td class="border-b border-border">$142.80</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jul 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for June 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 17, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$23.09</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    x-show="tab == 'tabAll'"
                    x-transition:enter="transition-all duration-500 easy-in-out"
                    x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                    x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                  >
                    <div class="overflow-x-auto">
                      <table class="table !mb-1 w-full text-left">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th class="text-end">Invoice</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="border-b border-border">Nov 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for Ocrober 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Oct 08, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for September 2024</span></td>
                            <td class="border-b border-border">$98.03</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Aug 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for July 2024</span></td>
                            <td class="border-b border-border">$142.80</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jul 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for June 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 17, 2024</td>
                            <td class="border-b border-border">Paypal</td>
                            <td class="border-b border-border">$23.09</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
                          </tr>
                          <tr>
                            <td class="border-b border-border">Jun 01, 2024</td>
                            <td class="border-b border-border"><span class="text-primary">Invoice for May 2024</span></td>
                            <td class="border-b border-border">$123.79</td>
                            <td class="border-b border-border text-end">
                              <button type="button" class="btn btn-xxs bg-light text-textdark">PDF</button>
                              <button type="button" class="btn btn-xxs bg-light text-textdark ms-2">View</button>
                            </td>
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
    </div>
  </div>
</template>
