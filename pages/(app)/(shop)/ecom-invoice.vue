<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Invoice" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card mt-4 !h-auto">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              Invoice <strong>01/12/2024</strong> <span class="float-end"> <strong>Status:</strong> Pending</span>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="row mb-12">
                <div class="mt-6 lg:w-1/4 md:w-1/2 w-full">
                  <h6 class="mb-2">From:</h6>
                  <div><strong>Webz Poland</strong></div>
                  <div>Madalinskiego 8</div>
                  <div>71-101 Szczecin, Poland</div>
                  <div>Email: info@webz.com.pl</div>
                  <div>Phone: +48 444 666 3333</div>
                </div>
                <div class="mt-6 lg:w-1/4 md:w-1/2 w-full">
                  <h6 class="mb-2">To:</h6>
                  <div><strong>Bob Mart</strong></div>
                  <div>Attn: Daniel Marek</div>
                  <div>43-190 Mikolow, Poland</div>
                  <div>Email: marek@daniel.com</div>
                  <div>Phone: +48 123 456 789</div>
                </div>
                <div class="mt-6 lg:w-1/2 flex lg:justify-end justify-start">
                  <div class="row items-center">
                    <div class="sm:w-3/4">
                      <div class="brand-logo mb-4">
                        <img src="assets/images/logo-full.png" class="mb-4 dark:invert inline-block" alt="" />
                      </div>
                      <span>Please send exact amount: <strong class="block">0.15050000 BTC</strong> <strong>1DonateWffyhwAjskoEwXt83pHZxhLTr8H</strong></span
                      ><br />
                      <small class="text-muted">Current exchange rate 1BTC = $6590 USD</small>
                    </div>
                    <div class="sm:w-1/4 mt-6"><img src="assets/images/qr.png" alt="" class="w-[6.875rem]" /></div>
                  </div>
                </div>
              </div>
              <div class="overflow-x-auto table-scroll">
                <table class="table w-full mb-4 text-left">
                  <thead>
                    <tr>
                      <th class="border-b sm:text-base font-medium text-secondary">#</th>
                      <th class="border-b sm:text-base font-medium text-secondary">Item</th>
                      <th class="border-b sm:text-base font-medium text-secondary">Description</th>
                      <th class="border-b sm:text-base font-medium text-secondary">Unit Cost</th>
                      <th class="border-b sm:text-base font-medium text-secondary">Qty</th>
                      <th class="border-b sm:text-base font-medium text-right text-secondary">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b">1</td>
                      <td class="border-b strong">Origin License</td>
                      <td class="border-b">Extended License</td>
                      <td class="border-b">$999,00</td>
                      <td class="border-b">1</td>
                      <td class="border-b text-right">$999,00</td>
                    </tr>
                    <tr>
                      <td class="border-b">2</td>
                      <td class="border-b">Custom Services</td>
                      <td class="border-b">Instalation and Customization (cost per hour)</td>
                      <td class="border-b">$150,00</td>
                      <td class="border-b">20</td>
                      <td class="border-b text-right">$3.000,00</td>
                    </tr>
                    <tr class="bg-[#efefef] dark:bg-d-bg">
                      <td class="border-b">3</td>
                      <td class="border-b">Hosting</td>
                      <td class="border-b">1 year subcription</td>
                      <td class="border-b">$499,00</td>
                      <td class="border-b">1</td>
                      <td class="border-b text-right">$499,00</td>
                    </tr>
                    <tr>
                      <td class="border-b">4</td>
                      <td class="border-b">Platinum Support</td>
                      <td class="border-b">1 year subcription 24/7</td>
                      <td class="border-b">$3.999,00</td>
                      <td class="border-b">1</td>
                      <td class="border-b text-right">$3.999,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="lg:w-1/3 sm:w-5/12 w-full"></div>
                <div class="lg:w-1/3 sm:w-5/12 w-full ml-auto">
                  <table class="table w-full mb-4 table-clear">
                    <tbody>
                      <tr>
                        <td class="border-b"><strong class="text-secondary">Subtotal</strong></td>
                        <td class="border-b text-right">$8.497,00</td>
                      </tr>
                      <tr>
                        <td class="border-b"><strong class="text-secondary">Discount (20%)</strong></td>
                        <td class="border-b text-right">$1,699,40</td>
                      </tr>
                      <tr>
                        <td class="border-b"><strong class="text-secondary">VAT (10%)</strong></td>
                        <td class="border-b text-right">$679,76</td>
                      </tr>
                      <tr>
                        <td class="border-b"><strong class="text-secondary">Total</strong></td>
                        <td class="border-b text-right">
                          <strong class="text-secondary">$7.477,36</strong><br />
                          <strong class="text-secondary">0.15050000 BTC</strong>
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
</template>
