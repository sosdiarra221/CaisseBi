<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Checkout" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="row">
                <div class="lg:w-1/3 lg:order-2 mb-6">
                  <h4 class="flex justify-between items-center mb-4">
                    <span class="text-secondary text-lg">Your cart</span>
                    <span class="badge bg-primary text-white">3</span>
                  </h4>
                  <ul class="list-group flex flex-col rounded-lg mb-4">
                    <li class="py-4 px-6 border border-border relative flex justify-between rounded-ss-md rounded-se-md lh-condensed">
                      <div>
                        <h6>Product name</h6>
                        <small class="text-[#7e7e7ebf]">Brief description</small>
                      </div>
                      <span class="text-[#7e7e7ebf]">$12</span>
                    </li>
                    <li class="py-4 px-6 border border-border relative flex justify-between border-t-0 lh-condensed">
                      <div>
                        <h6>Second product</h6>
                        <small class="text-[#7e7e7ebf]">Brief description</small>
                      </div>
                      <span class="text-[#7e7e7ebf]">$8</span>
                    </li>
                    <li class="py-4 px-6 border border-border relative flex justify-between border-t-0 lh-condensed">
                      <div>
                        <h6>Third item</h6>
                        <small class="text-[#7e7e7ebf]">Brief description</small>
                      </div>
                      <span class="text-[#7e7e7ebf]">$5</span>
                    </li>
                    <li class="py-4 px-6 border border-primary relative flex justify-between bg-primary text-white -my-px active">
                      <div class="text-white">
                        <h6 class="my-0 text-white">Promo code</h6>
                        <small>EXAMPLECODE</small>
                      </div>
                      <span class="text-white">-$5</span>
                    </li>
                    <li class="py-4 px-6 border border-border relative flex justify-between rounded-es-md rounded-ee-md">
                      <span>Total (USD)</span>
                      <strong class="text-[#7e7e7ebf]">$20</strong>
                    </li>
                  </ul>

                  <form>
                    <div class="relative flex flex-wrap items-stretch w-full">
                      <input type="text" class="relative flex-1 w-[1%] h-11 border border-border block rounded-s-md py-1.5 px-3 duration-500 focus:border-primary" placeholder="Promo code" />
                      <button type="submit" class="input-group-text bg-bodybg border border-border !rounded-s-none">Redeem</button>
                    </div>
                  </form>
                </div>
                <div class="lg:w-4/6 lg:order-1">
                  <h4 class="mb-4 text-lg">Billing address</h4>
                  <form class="needs-validation" novalidate>
                    <div class="row">
                      <div class="md:w-1/2 mb-4">
                        <label for="firstName" class="form-label text-secondary">First name</label>
                        <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="firstName" placeholder="" required />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Valid first name is required.</div>
                      </div>
                      <div class="md:w-1/2 mb-4">
                        <label for="lastName" class="form-label text-secondary">Last name</label>
                        <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="lastName" placeholder="" required />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Valid last name is required.</div>
                      </div>
                    </div>

                    <div class="mb-4">
                      <label for="username" class="form-label text-secondary">Username</label>
                      <div class="relative flex flex-wrap items-stretch w-full">
                        <span class="input-group-text bg-bodybg border border-border !rounded-e-none">@</span>
                        <input
                          type="text"
                          class="relative flex-1 w-[1%] h-11 border border-border block rounded-e-md py-1.5 px-3 duration-500 focus:border-primary -ml-px"
                          id="username"
                          placeholder="Username"
                          required
                        />
                        <div class="text-danger text-invalid w-full mt-1 hidden" style="width: 100%">Your username is required.</div>
                      </div>
                    </div>

                    <div class="mb-4">
                      <label for="email" class="form-label text-secondary">Email <span class="text-[#7e7e7ebf]">(Optional)</span></label>
                      <input type="email" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="email" placeholder="you@example.com" />
                      <div class="text-danger text-invalid w-full mt-1 hidden">Please enter a valid email address for shipping updates.</div>
                    </div>

                    <div class="mb-4">
                      <label for="address" class="form-label text-secondary">Address</label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div class="text-danger text-invalid w-full mt-1 hidden">Please enter your shipping address.</div>
                    </div>

                    <div class="mb-4">
                      <label for="address2" class="form-label text-secondary">Address 2 <span class="text-[#7e7e7ebf]">(Optional)</span></label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div class="row">
                      <div class="md:w-5/12 mb-4">
                        <label class="form-label text-secondary">Country</label>
                        <OptionSelect
                          class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                          :options="[{ lable: 'Choose...' }, { lable: 'United States' }]"
                        />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Please select a valid country.</div>
                      </div>
                      <div class="md:w-1/3 mb-4">
                        <label class="form-label text-secondary">State</label>
                        <OptionSelect
                          class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                          :options="[{ lable: 'Choose...' }, { lable: 'United States' }]"
                        />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Please provide a valid state.</div>
                      </div>
                      <div class="md:w-1/4 mb-4">
                        <label for="zip" class="form-label text-secondary">Zip</label>
                        <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="zip" placeholder="" required />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Zip code required.</div>
                      </div>
                    </div>
                    <hr class="my-4 border-t opacity-30 border-solid border-[#7e7e7e]" />
                    <div class="form-check custom-checkbox leading-normal block min-h-[21px] pl-[1.5em] mb-2">
                      <input type="checkbox" class="form-check-input" id="same-address" />
                      <label class="form-check-label ml-1.1 mt-[0.113rem]" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
                    <div class="form-check custom-checkbox leading-normal block min-h-[21px] pl-[1.5em] mb-2">
                      <input type="checkbox" class="form-check-input" id="save-info" />
                      <label class="form-check-label ml-1.1 mt-[0.113rem]" for="save-info">Save this information for next time</label>
                    </div>
                    <hr class="my-4 border-t opacity-30 border-solid border-[#7e7e7e]" />

                    <h4 class="mb-4 text-lg">Payment</h4>

                    <div class="block my-4">
                      <div class="form-check custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                        <label class="form-check-label ml-1.1 mt-[0.113rem]" for="credit">Credit card</label>
                      </div>
                      <div class="form-check custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                        <label class="form-check-label ml-1.1 mt-[0.113rem]" for="debit">Debit card</label>
                      </div>
                      <div class="form-check custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                        <label class="form-check-label ml-1.1 mt-[0.113rem]" for="paypal">Paypal</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="md:w-1/2 mb-4">
                        <label for="cc-name" class="form-label text-secondary">Name on card</label>
                        <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="cc-name" placeholder="" required />
                        <small class="text-[#7e7e7ebf]">Full name as displayed on card</small>
                        <div class="text-danger text-invalid w-full mt-1 hidden">Name on card is required</div>
                      </div>
                      <div class="md:w-1/2 mb-4">
                        <label for="cc-number" class="form-label text-secondary">Credit card number</label>
                        <input type="number" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" id="cc-number" placeholder="" required />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Credit card number is required</div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="md:w-1/4 mb-4">
                        <label for="cc-expiration" class="form-label text-secondary">Expiration</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Expiration date required</div>
                      </div>
                      <div class="md:w-1/4 mb-4">
                        <label for="cc-expiration" class="form-label text-secondary">CVV</label>
                        <input type="number" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" placeholder="" required />
                        <div class="text-danger text-invalid w-full mt-1 hidden">Security code required</div>
                      </div>
                    </div>
                    <hr class="mb-6 mt-4 border-t opacity-30 border-solid border-[#7e7e7e]" />
                    <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full text-center" type="submit">Continue to checkout</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
