<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";

const valid = ref(false);
const valid2 = ref(false);
const show = ref(false);
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Form Validation" name="Form Validation" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Form Validation</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="form-validation">
                <form :class="`needs-validation ${valid ? 'was-validated' : ''}`" novalidate @submit.prevent="valid = true">
                  <div class="row">
                    <div class="xl:w-1/2">
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom01"
                          >Username
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom01"
                            placeholder="Enter a username.."
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a username.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom02">Email <span class="text-danger">*</span> </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom02"
                            placeholder="Your valid email.."
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a Email.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom03"
                          >Password
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="password"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom03"
                            placeholder="Choose a safe one.."
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a password.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom04">Suggestions <span class="text-danger">*</span> </label>
                        <div class="lg:w-1/2">
                          <textarea
                            class="form-control py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom04"
                            rows="5"
                            placeholder="What would you like to see?"
                            required
                          ></textarea>
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a Suggestions.</div>
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-1/2">
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom05"
                          >Best Skill
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <OptionSelect
                            class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                            :options="[
                              { lable: 'Please select' },
                              { lable: 'HTML' },
                              { lable: 'CSS' },
                              { lable: 'JavaScript' },
                              { lable: 'Angular' },
                              { lable: 'React' },
                              { lable: 'Vue.js' },
                              { lable: 'Ruby' },
                              { lable: 'PHP' },
                              { lable: 'ASP.NET' },
                              { lable: 'Python' },
                              { lable: 'MySQL' },
                            ]"
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please select a one.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom06"
                          >Currency
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom06"
                            placeholder="$21.60"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a Currency.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom07"
                          >Website
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom07"
                            placeholder="http://example.com"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a url.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom08"
                          >Phone (US)
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom08"
                            placeholder="212-999-0000"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a phone no.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom09">Digits <span class="text-danger">*</span> </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom09"
                            placeholder="5"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a digits.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom10">Number <span class="text-danger">*</span> </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom10"
                            placeholder="5.0"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please enter a num.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited" for="validationCustom11"
                          >Range [1, 5]
                          <span class="text-danger">*</span>
                        </label>
                        <div class="lg:w-1/2">
                          <input
                            type="text"
                            class="form-control py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            id="validationCustom11"
                            placeholder="4"
                            required
                          />
                          <div class="hidden w-full text-danger mt-1 invalid-feedback">Please select a range.</div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <label class="lg:w-1/3 py-[7px] !mb-0 text-inherited"><a href="javascript:void(0);">Terms &amp; Conditions</a> <span class="text-danger">*</span> </label>
                        <div class="lg:w-2/3">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="validationCustom12" required />
                            <label class="form-check-label ml-1.1 mt-[3px] font-semibold" for="validationCustom12"> Agree to terms and conditions </label>
                          </div>
                        </div>
                      </div>
                      <div class="mb-4 row">
                        <div class="lg:w-2/3 ms-auto">
                          <button type="submit" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Vertical Forms with icon</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form :class="`form-valide-with-icon needs-validation ${valid2 ? 'was-validated' : ''}`" novalidate @submit.prevent="valid2 = true">
                  <div class="mb-3">
                    <label class="text-label form-label" for="validationCustomUsername">Username</label>
                    <div class="relative flex flex-wrap items-stretch">
                      <span class="input-group-text border border-border bg-light !rounded-e-none border-e-0"> <i class="fa fa-user"></i> </span>
                      <input
                        type="text"
                        class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                        id="validationCustomUsername"
                        placeholder="Enter a username.."
                        required
                      />
                      <div class="hidden w-full text-danger mt-1 invalid-feedback">Please Enter a username.</div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="text-label form-label" for="dz-password">Password <span class="text-danger"> *</span></label>
                    <div class="relative flex flex-wrap items-stretch transparent-append">
                      <span class="input-group-text border border-border bg-light !rounded-e-none border-e-0"> <i class="fa fa-lock"></i> </span>
                      <input
                        :type="`${!show ? 'password' : 'text'}`"
                        class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border duration-500 focus:border-primary bg-transparent dz-password"
                        id="dz-password"
                        placeholder="Choose a safe one.."
                        required
                      />
                      <span :class="`input-group-text border border-border bg-light !rounded-s-none border-s-0 show-pass ${show && 'active'}`" @click="show = !show">
                        <i class="fa fa-eye-slash"></i>
                        <i class="fa fa-eye"></i>
                      </span>
                      <div class="hidden w-full text-danger mt-1 invalid-feedback">Please Enter a username.</div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                      <label class="form-check-label ml-1.1 mt-[3px] font-semibold" for="invalidCheck2"> Check Me out </label>
                    </div>
                  </div>
                  <button type="submit" class="btn me-2 bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Submit</button>
                  <button type="submit" class="btn btn bg-dangerlight hover:shadow-btndanger text-danger">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
