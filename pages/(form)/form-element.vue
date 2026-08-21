<script lang="ts" setup>
import { ref } from "vue";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const show = ref(false);
</script>
<template>
  <div class="content-body default-height">
    <CommonNav title="Form Element" name="Form Element" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Input Style</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                      placeholder="input-default"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="relative h-11 border border-border block rounded-full py-1.5 px-3 w-full duration-500 focus:border-primary"
                      placeholder="input-rounded-lg"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Floating labels</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="relative mb-4">
                <input
                  type="email"
                  class="relative h-[58px] border border-border block rounded-lg py-4 px-3 w-full duration-500 focus:border-primary peer"
                  id="floatingInput"
                />
                <label
                  for="floatingInput"
                  class="absolute top-0 left-0 z-2 h-full py-4 px-3 overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border border-transparent duration-200 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-gray-600/65"
                  >Email address</label
                >
              </div>
              <div class="relative">
                <input
                  type="password"
                  class="relative h-[58px] border border-border block rounded-lg py-4 px-3 w-full duration-500 focus:border-primary peer"
                  id="floatingPassword"
                />
                <label
                  for="floatingPassword"
                  class="absolute top-0 left-0 z-2 h-full py-4 px-3 overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border border-transparent duration-200 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-gray-600/65"
                  >Password</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Checkbox</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="row">
                <div class="!w-1/2">
                  <div class="form-check custom-checkbox !mb-4">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customCheckBox1"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox1"
                      >Checkbox 1</label
                    >
                  </div>
                </div>
                <div class="!w-1/2">
                  <div class="form-check custom-checkbox !mb-4 checkbox-info">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox2"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox2"
                      >Checkbox 2</label
                    >
                  </div>
                </div>
                <div class="!w-1/2">
                  <div
                    class="form-check custom-checkbox !mb-4 checkbox-success"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox3"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox3"
                      >Checkbox 3</label
                    >
                  </div>
                </div>
                <div class="!w-1/2">
                  <div
                    class="form-check custom-checkbox !mb-4 checkbox-warning"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox4"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox4"
                      >Checkbox 4</label
                    >
                  </div>
                </div>
                <div class="!w-1/2">
                  <div class="form-check custom-checkbox !mb-4 checkbox-danger">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox5"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox5"
                      >Checkbox 5</label
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="flex-[1_0_0%]">
                  <div class="form-check custom-checkbox !mb-4 check-xs">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox6"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox6"
                    ></label>
                  </div>
                </div>
                <div class="flex-[1_0_0%]">
                  <div class="form-check custom-checkbox !mb-4 checkbox-info">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox7"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox7"
                    ></label>
                  </div>
                </div>
                <div class="flex-[1_0_0%]">
                  <div
                    class="form-check custom-checkbox !mb-4 checkbox-success check-lg"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox8"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox8"
                    ></label>
                  </div>
                </div>
                <div class="flex-[1_0_0%]">
                  <div
                    class="form-check custom-checkbox !mb-4 checkbox-warning check-xl"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      checked
                      id="customCheckBox9"
                      required
                    />
                    <label
                      class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      for="customCheckBox9"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Textarea</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <textarea
                      class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      rows="8"
                      id="comment"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Input Size</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <input
                      class="py-1.5 px-3 h-[42px] border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent min-h-14.5 text-[17.5px] placeholder:text-[17.5px]"
                      type="text"
                      placeholder="form-control-lg"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      class="py-1.5 px-3 h-[45px] border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      type="text"
                      placeholder="Default input"
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      class="py-1.5 px-3 h-[34px] border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent text-2xs placeholder:text-2xs"
                      type="text"
                      placeholder="form-control-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Select Size</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none relative flex-auto !w-[1%] !rounded-s-none"
                      :options="[
                        { lable: 'Option 1' },
                        { lable: 'Option 2' },
                        { lable: 'Option 3' },
                      ]"
                    />
                  </div>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none h-[45px]"
                      :options="[
                        { lable: 'Option 1' },
                        { lable: 'Option 2' },
                        { lable: 'Option 3' },
                      ]"
                    />
                  </div>
                  <div class="mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none h-[34px]"
                      :options="[
                        { lable: 'Option 1' },
                        { lable: 'Option 2' },
                        { lable: 'Option 3' },
                      ]"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Select List</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <label class="form-label">Select list (select one):</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[
                        { lable: '1' },
                        { lable: '2' },
                        { lable: '3' },
                        { lable: '4' },
                      ]"
                    />
                  </div>
                  <OptionSelect
                    class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none mt-4"
                    :options="[
                      { lable: '1' },
                      { lable: '2' },
                      { lable: '3' },
                      { lable: '4' },
                      { lable: '5' },
                    ]"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Horizontal Form</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row">
                    <div class="mb-4 md:w-1/2">
                      <label class="form-label">First Name</label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="mb-4 md:w-1/2">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-4 md:w-1/2">
                      <label class="form-label">Password</label>
                      <input
                        type="password"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                        placeholder="Password"
                      />
                    </div>
                    <div class="mb-4 md:w-1/2">
                      <label>City</label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-4 md:w-1/3">
                      <label class="form-label">State</label>
                      <OptionSelect
                        class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                        :options="[
                          { lable: 'Choose...' },
                          { lable: '1' },
                          { lable: '2' },
                          { lable: '3' },
                        ]"
                      />
                    </div>
                    <div class="mb-4 md:w-1/6">
                      <label class="form-label">Zip</label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      >
                        Check me out
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Vertical Form</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4 row">
                    <label class="sm:w-1/4 py-[7px] text-dark">Email</label>
                    <div class="sm:w-3/4">
                      <input
                        type="email"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label class="sm:w-1/4 py-[7px] text-dark">Password</label>
                    <div class="sm:w-3/4">
                      <input
                        type="password"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <fieldset class="mb-4">
                    <div class="row">
                      <label class="py-[7px] text-dark sm:w-1/4 pt-0"
                        >Radios</label
                      >
                      <div class="sm:w-3/4">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            value="option1"
                            checked
                          />
                          <label
                            class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          >
                            First radio
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            value="option2"
                          />
                          <label
                            class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          >
                            Second radio
                          </label>
                        </div>
                        <div class="form-check pointer-events-none opacity-65">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            value="option3"
                            disabled
                          />
                          <label
                            class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          >
                            Third disabled radio
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div class="mb-4 row">
                    <div class="sm:w-1/4">Checkbox</div>
                    <div class="sm:w-3/4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        >
                          Example checkbox
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <div class="sm:w-5/6">
                      <button
                        type="submit"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Checkboxes</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <div class="form-check !mb-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check1"
                        value=""
                        checked
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="check1"
                        >Option 1</label
                      >
                    </div>
                    <div class="form-check !mb-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check2"
                        value=""
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="check2"
                        >Option 2</label
                      >
                    </div>
                    <div class="form-check pointer-events-none opacity-65">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check3"
                        value=""
                        disabled
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="check3"
                        >Disabled</label
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Inline Checkboxes</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <div class="form-check inline-block mr-4">
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input mr-2.5"
                          value=""
                          checked
                        />Option 1
                      </label>
                    </div>
                    <div class="form-check inline-block mr-4">
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input mr-2.5"
                          value=""
                        />Option 2
                      </label>
                    </div>
                    <div
                      class="form-check inline-block mr-4 pointer-events-none opacity-65"
                    >
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      >
                        <input
                          type="checkbox"
                          class="form-check-input mr-2.5"
                          value=""
                          disabled
                        />Disabled
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Radio Buttons</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row">
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-primary"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox1"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox1"
                          >Checkbox 1</label
                        >
                      </div>
                    </div>
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-secondary"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox2"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox2"
                          >Checkbox 2</label
                        >
                      </div>
                    </div>
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-info"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox3"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox3"
                          >Checkbox 2</label
                        >
                      </div>
                    </div>
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-success"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox4"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox4"
                          >Checkbox 3</label
                        >
                      </div>
                    </div>
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-warning"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox5"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox5"
                          >Checkbox 4</label
                        >
                      </div>
                    </div>
                    <div class="xl:!w-1/3 !w-1/2">
                      <div
                        class="form-check custom-checkbox !mb-4 checkbox-danger"
                      >
                        <input
                          type="radio"
                          class="form-check-input"
                          id="customRadioBox6"
                          name="optradioCustom"
                        />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                          for="customRadioBox6"
                          >Checkbox 5</label
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Inline Radio</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <div class="form-check inline-block mr-4 mb-2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="customRadioBox7"
                        name="optradioCustom1"
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="customRadioBox7"
                        >Checkbox 1</label
                      >
                    </div>
                    <div class="form-check inline-block mr-4 mb-2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="customRadioBox8"
                        name="optradioCustom1"
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="customRadioBox8"
                        >Checkbox 1</label
                      >
                    </div>
                    <div class="form-check inline-block mr-4 mb-2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="customRadioBox9"
                        name="optradioCustom1"
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        for="customRadioBox9"
                        >Checkbox 1</label
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Readonly</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4">
                    <input
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                      type="text"
                      placeholder="Readonly input here…"
                      readonly
                    />
                  </div>
                  <div class="mb-4 row">
                    <label class="sm:w-1/4 py-[7px] !mb-0">Email</label>
                    <div class="sm:w-3/4">
                      <input
                        type="text"
                        readonly
                        class="py-1.5 bg-transparent w-full"
                        value="email@example.com"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label class="py-[7px] !w-1/6 !my-auto">Password</label>
                    <div class="!w-5/6">
                      <div class="relative flex flex-wrap items-stretch">
                        <span
                          class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                        >
                          <i class="fa fa-lock"></i>
                        </span>
                        <input
                          :type="`${!show ? 'password' : 'text'}`"
                          class="relative flex-auto w-[1%] h-11 border border-border block py-1.5 px-3 duration-500 focus:border-primary dz-password"
                          id="dz-password"
                          placeholder="Choose a safe one.."
                          required
                        />
                        <span
                          :class="`${
                            show ? 'active' : ''
                          } input-group-text border border-border bg-light !rounded-s-none border-s-0 show-pass`"
                          @click="show = !show"
                        >
                          <i class="fa fa-eye-slash"></i>
                          <i class="fa fa-eye"></i>
                        </span>
                        <div class="hidden w-full text-danger mt-1">
                          Please Enter a username.
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Inline Form</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form class="flex items-center flex-wrap sm:flex-nowrap">
                  <div class="mb-4">
                    <label class="sr-only">Email</label>
                    <input
                      type="text"
                      readonly
                      class="py-1.5 bg-transparent w-full"
                      value="email@example.com"
                    />
                  </div>
                  <div class="mb-4 mt-2 sm:mx-2">
                    <label class="sr-only">Password</label>
                    <input
                      type="password"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2"
                  >
                    Confirm
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Form grid</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row">
                    <div class="sm:w-1/2">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="First name"
                      />
                    </div>
                    <div class="sm:w-1/2 mt-2 sm:mt-0">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Form Row</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row">
                    <div class="sm:w-1/2">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="First name"
                      />
                    </div>
                    <div class="sm:w-1/2 mt-2 sm:mt-0">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Form Label Size</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="mb-4 row">
                    <label class="sm:w-1/6 py-[7px]">Email</label>
                    <div class="sm:w-5/6">
                      <input
                        type="email"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label class="sm:w-1/6">Email</label>
                    <div class="sm:w-5/6">
                      <input
                        type="email"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full"
                        placeholder="col-form-label"
                      />
                    </div>
                  </div>
                  <div class="mb-4 row">
                    <label class="sm:w-1/6 py-[7px]">Email</label>
                    <div class="sm:w-5/6">
                      <input
                        type="email"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full"
                        placeholder="col-form-label-lg"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Column size</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row">
                    <div class="sm:w-7/12">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="City"
                      />
                    </div>
                    <div class="flex-[1_0_0%] mt-2 sm:mt-0">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="State"
                      />
                    </div>
                    <div class="flex-[1_0_0%] mt-2 sm:mt-0">
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="Zip"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Auto-sizing</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row items-center">
                    <div class="!w-auto flex-initial">
                      <label class="sr-only">Name</label>
                      <input
                        type="text"
                        class="relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary mb-2"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div class="!w-auto flex-initial">
                      <label class="sr-only">Username</label>
                      <div class="relative flex flex-wrap items-stretch mb-2">
                        <div
                          class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                        >
                          @
                        </div>
                        <input
                          type="text"
                          class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div class="!w-auto flex-initial">
                      <div class="form-check !mb-2">
                        <input class="form-check-input" type="checkbox" />
                        <label
                          class="form-check-label ml-1.1 mt-[3px] font-semibold"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="w-full">
                      <button
                        type="submit"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Custom Select</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <div class="row items-center">
                    <div class="!w-auto flex-initial my-1">
                      <label class="sm:me-2">Preference</label>
                      <OptionSelect
                        class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] sm:me-2 nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                        :options="[
                          { lable: 'Choose...' },
                          { lable: 'One' },
                          { lable: 'Two' },
                          { lable: 'OThree' },
                        ]"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Disabled forms</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form>
                  <fieldset disabled>
                    <div class="mb-4">
                      <label class="form-label">Disabled input</label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="Disabled input"
                      />
                    </div>
                    <div class="mb-4">
                      <label class="form-label">Disabled select menu</label>
                      <OptionSelect
                        class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none pointer-events-none after:hidden"
                        :options="[{ lable: 'Disabled select' }]"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        disabled
                      />
                      <label
                        class="form-check-label ml-1.1 mt-[3px] font-semibold"
                      >
                        Can't check this
                      </label>
                    </div>
                    <button
                      type="submit"
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mt-4"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Input Group</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-warning text-warning !rounded-e-none border-e-0"
                      >@</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-warning rounded-e-lg duration-500 bg-transparent"
                      placeholder="Username"
                    />
                  </div>
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-success text-success !rounded-e-none border-e-0"
                      >@</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-success rounded-e-lg duration-500 bg-transparent"
                      placeholder="Username"
                    />
                  </div>
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-primary rounded-s-lg duration-500 focus:border-primary bg-transparent"
                      placeholder="Recipient's username"
                    />
                    <span
                      class="input-group-text border border-primary bg-primary !text-white !rounded-s-none border-s-0"
                      >@example.com</span
                    >
                  </div>

                  <label>Your vanity URL</label>
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-success bg-success !text-white !rounded-e-none border-e-0"
                      >https://example.com</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-success rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-info bg-info !text-white !rounded-e-none border-e-0"
                      >$</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-info duration-500 focus:border-primary bg-transparent"
                    />
                    <span
                      class="input-group-text border border-info bg-info !text-white !rounded-s-none border-s-0"
                      >.00</span
                    >
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <span
                      class="input-group-text border border-danger bg-danger !text-white !rounded-e-none border-e-0"
                      >With textarea</span
                    >
                    <textarea
                      class="relative flex-auto w-[1%] py-1.5 px-3 border border-danger rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Input Group Size</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0 !py-1 !px-4"
                      >Small</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1 px-4 h-10 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent text-2xs placeholder:text-2xs"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                      >Default</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <span
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0 !py-2 !px-4"
                      >Large</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-2 px-4 h-[42px] border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent min-h-14.5 text-[17.5px] placeholder:text-[17.5px]"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Checkboxes and radios</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <div
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                    >
                      <div class="form-check custom-checkbox">
                        <input type="checkbox" class="form-check-input" />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <div
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                    >
                      <div class="form-check custom-checkbox">
                        <input type="radio" class="form-check-input" />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Multiple inputs</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch">
                    <span
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                      >First and last name</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border duration-500 focus:border-primary bg-transparent"
                    />
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent -ml-px"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Multiple addons</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <span
                      class="input-group-text border border-border bg-light !rounded-e-none border-e-0"
                      >$</span
                    >
                    <span
                      class="input-group-text border border-border bg-light !rounded-none border-e-0"
                      >0.00</span
                    >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-s-lg duration-500 focus:border-primary bg-transparent"
                    />
                    <span
                      class="input-group-text border border-border bg-light !rounded-none border-s-0"
                      >$</span
                    >
                    <span
                      class="input-group-text border border-border bg-light !rounded-s-none border-s-0"
                      >0.00</span
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Button addons</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-e-none"
                      type="button"
                    >
                      Button
                    </button>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-s-lg duration-500 focus:border-primary bg-transparent"
                    />
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-s-none"
                      type="button"
                    >
                      Button
                    </button>
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-e-none"
                      type="button"
                    >
                      Button
                    </button>
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-none"
                      type="button"
                    >
                      Button
                    </button>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-s-lg duration-500 focus:border-primary bg-transparent"
                    />
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-none"
                      type="button"
                    >
                      Button
                    </button>
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-s-none"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Buttons with dropdowns</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form @submit.prevent>
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <CustomeDropDown>
                      <template #trigger>
                        <button
                          class="btn bg-primary h-[45px] hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-e-none dropdown-toggle"
                        >
                          Dropdown
                        </button>
                      </template>
                      <template #menu>
                        <div
                          class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1"
                        >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Another action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Something else here</a
                          >
                          <div role="separator" class="dropdown-divider"></div>
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Separated link</a
                          >
                        </div>
                        <input
                          type="text"
                          class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                        />
                      </template>
                    </CustomeDropDown>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                      data-v-inspector="pages/(form)/form-element.vue:1625:21"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-s-lg duration-500 focus:border-primary bg-transparent"
                    />
                    <CustomeDropDown>
                      <template #trigger>
                        <button
                          class="btn bg-primary h-[45px] hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-s-none dropdown-toggle"
                        >
                          Dropdown
                        </button>
                      </template>
                      <template #menu>
                        <div
                          class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1"
                        >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Another action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Something else here</a
                          >
                          <div role="separator" class="dropdown-divider"></div>
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Separated link</a
                          >
                        </div>
                      </template>
                    </CustomeDropDown>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Segmented buttons</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form @change.prevent>
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <CustomeDropDown>
                      <template #trigger>
                        <button
                          type="button"
                          class="btn bg-primary h-[45px] hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-e-none"
                        >
                          Action
                        </button>
                        <button
                          type="button"
                          class="btn bg-primary h-[45px] hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-none opacity-85 !py-0 !px-2.5 dropdown-toggle dropdown-toggle-split"
                        >
                          <span class="sr-only">Toggle Dropdown</span>
                        </button>
                      </template>

                      <template #menu>
                        <div
                          class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1"
                        >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Another action</a
                          >
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Something else here</a
                          >
                          <div role="separator" class="dropdown-divider"></div>
                          <a
                            class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                            href="javascript:void(0);"
                            >Separated link</a
                          >
                        </div>
                      </template>
                    </CustomeDropDown>
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                  </div>

                  <div
                    class="relative flex flex-wrap items-stretch"
                    x-data="{ open: false }"
                  >
                    <input
                      type="text"
                      class="relative flex-auto w-[1%] py-1.5 px-3 h-11 border border-border rounded-e-lg duration-500 focus:border-primary bg-transparent"
                    />
                    <button
                      type="button"
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-none"
                    >
                      Action
                    </button>
                    <button
                      type="button"
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-s-none opacity-85 !py-0 !px-2.5 dropdown-toggle dropdown-toggle-split"
                    >
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <!-- <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1"
                      x-transition.duration.300ms
                      x-show.transition.origin.top.left="open"
                      x-cloak
                    >
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Action</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Another action</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Something else here</a>
                      <div role="separator" class="dropdown-divider"></div>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Separated link</a>
                    </div> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Custom select</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="basic-form">
                <form action="#">
                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <label
                      class="input-group-text border border-border bg-light !mb-0 !rounded-e-none border-e-0"
                      >Options</label
                    >
                    <OptionSelect
                      class-name="nice-select form-control border border-border inline-flex justify-between items-center wide bg-transparent float-none relative flex-auto !w-[1%] !rounded-s-none "
                      :options="[
                        { lable: 'Choose...' },
                        { lable: 'One' },
                        { lable: 'Two' },
                        { lable: 'Three' },
                      ]"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <OptionSelect
                      class-name="nice-select form-control border border-border inline-flex justify-between items-center wide bg-transparent float-none relative flex-auto !w-[1%] rounded-s-none !rounded-e-none"
                      :options="[
                        { lable: 'Choose...' },
                        { lable: 'One' },
                        { lable: 'Two' },
                        { lable: 'Three' },
                      ]"
                    />
                    <label
                      class="input-group-text border border-border bg-light !mb-0 !rounded-s-none border-s-0"
                      >Options</label
                    >
                  </div>

                  <div class="relative flex flex-wrap items-stretch mb-4">
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-e-none"
                      type="button"
                    >
                      Button
                    </button>
                    <OptionSelect
                      class-name="nice-select form-control border border-border inline-flex justify-between items-center wide bg-transparent float-none relative flex-auto !w-[1%] !rounded-s-none"
                      :options="[
                        { lable: 'Choose...' },
                        { lable: 'One' },
                        { lable: 'Two' },
                        { lable: 'Three' },
                      ]"
                    />
                  </div>

                  <div class="relative flex flex-wrap items-stretch">
                    <OptionSelect
                      class-name="nice-select form-control border border-border inline-flex justify-between items-center wide bg-transparent float-none relative flex-auto !w-[1%] !rounded-s-none"
                      :options="[
                        { lable: 'Choose...' },
                        { lable: 'One' },
                        { lable: 'Two' },
                        { lable: 'Three' },
                      ]"
                    />
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-s-none"
                      type="button"
                    >
                      Button
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div
              class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap"
            >
              <h4 class="text-base">Custom file input</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="mb-4">
                <label for="formFile">Default file input example</label>
                <input
                  class="relative h-11 file:h-11 file:py-1.5 file:px-3 file:bg-bodybg border border-border file:border-border block rounded-lg duration-500 focus:border-primary-5 w-full"
                  type="file"
                  id="formFile"
                />
              </div>
              <div class="mb-4">
                <label for="formFileMultiple"
                  >Multiple files input example</label
                >
                <input
                  class="relative h-11 file:h-11 file:py-1.5 file:px-3 file:bg-bodybg border border-border file:border-border block rounded-lg duration-500 focus:border-primary-5 w-full"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <div class="mb-4">
                <label for="formFileDisabled"
                  >Disabled file input example</label
                >
                <input
                  class="relative h-11 file:h-11 file:py-1.5 file:px-3 file:bg-bodybg border border-border file:border-border block rounded-lg duration-500 focus:border-primary-5 w-full"
                  type="file"
                  id="formFileDisabled"
                  disabled
                />
              </div>
              <div class="mb-4">
                <label for="formFileSm">Small file input example</label>
                <input
                  class="relative h-10 file:h-10 file:p-1 file:pl-2 file:bg-bodybg border border-border file:border-border block rounded-lg duration-500 focus:border-primary-5 w-full"
                  id="formFileSm"
                  type="file"
                />
              </div>
              <div>
                <label for="formFileLg">Large file input example</label>
                <input
                  class="relative text-[17.5px] h-14.5 file:h-14.5 file:py-[2.8px] file:pl-2.5 file:pr-3 file:bg-bodybg border border-border file:border-border block rounded-lg duration-500 focus:border-primary-5 w-full"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
