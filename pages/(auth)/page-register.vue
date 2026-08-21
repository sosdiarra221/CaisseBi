<script lang="ts" setup>
import { ref } from "vue";

const hide = ref(false);
definePageMeta({ layout: "auth" });
</script>

<template>
  <div class="flex min-h-screen h-full">
    <div class="container-fluid h-full">
      <div class="row h-full">
        <div class="lg:w-1/2 mx-auto self-center">
          <div class="lg:p-13.5 sm:p-6 p-3.5 max-w-[600px] mx-auto">
            <div class="text-center">
              <img src="assets/images/logo-full.png" class="mb-4 sm:hidden mx-auto inline-block dark:invert" alt="" />
              <h3 class="mb-2">Sign up your account</h3>
              <p class="sm:text-sm mb-4">Sign in to your account to start using NexaDash</p>
            </div>
            <form action="/">
              <div class="mb-6">
                <label class="mb-1">Username<span class="text-danger"> *</span></label>
                <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="Username " />
              </div>
              <div class="mb-6">
                <label class="mb-1">Email<span class="text-danger"> *</span></label>
                <input type="email" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="hello@example.com" />
              </div>
              <div class="mb-6 relative">
                <label class="mb-1">Password<span class="text-danger"> *</span></label>
                <input
                  :type="`${!hide ? 'password' : ''}`"
                  id="dz-password"
                  class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent dz-password"
                  value="Password"
                />
                <span :class="`show-pass eye absolute right-5 bottom-2.5 cursor-pointer ${hide ? 'active' : ''}`" @click="hide = !hide">
                  <i class="fa fa-eye-slash"></i>
                  <i class="fa fa-eye"></i>
                </span>
              </div>
              <div class="form-row flex justify-between mt-6 mb-2">
                <div class="mb-6">
                  <div class="form-check custom-checkbox !mb-4">
                    <input type="checkbox" class="form-check-input" id="customCheckBox1" />
                    <label class="form-check-label ml-1.1 font-semibold mt-1" for="customCheckBox1">Remember my preference</label>
                  </div>
                </div>
                <div class="mb-6">
                  <NuxtLink to="/page-forgot-password" class="text-primary">Sign in</NuxtLink>
                </div>
              </div>
              <div class="text-center mb-6 grid">
                <button type="submit" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full">Sign Up</button>
              </div>
              <h6
                class="text-center relative mb-12 z-1 flex items-center after:content-[''] before:content-[''] after:h-px before:h-px after:flex-[1_1] before:flex-[1_1] after:left-0 before:left-0 after:bg-[#E1E1F0] before:bg-[#E1E1F0] after:top-1/2 before:top-1/2 after:-z-1 before:-z-1"
              >
                <span class="px-4">Or continue with</span>
              </h6>

              <div class="mb-4">
                <ul class="flex self-center justify-center">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/"
                      class="fab fa-facebook-f bg-facebook text-white inline-block text-center size-10 leading-10 rounded-full duration-300 hover:bg-facebookhover"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.google.com/"
                      class="fab fa-google-plus-g bg-google-plus mx-2 text-white inline-block text-center size-10 leading-10 rounded-full duration-300 hover:bg-google-plushover"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/"
                      class="fab fa-linkedin-in bg-linkedin me-2 text-white inline-block text-center size-10 leading-10 rounded-full duration-300 hover:bg-linkedinhover"
                    ></a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/"
                      class="fab fa-twitter bg-twitter text-white inline-block text-center size-10 leading-10 rounded-full duration-300 hover:bg-twitterhover"
                    ></a>
                  </li>
                </ul>
              </div>
              <p class="text-center sm:text-sm mb-4">
                Not registered?
                <NuxtLink class="text-primary" to="/page-register">Register</NuxtLink>
              </p>
            </form>
          </div>
        </div>
        <div class="lg:w-1/2">
          <div class="bg-card h-full max-lg:hidden">
            <div class="text-center lg:pl-17 sm:pl-13.5 pl-3.5 lg:pt-17 sm:pt-10 pt-3.5">
              <NuxtLink to="/"><img src="assets/images/logo-full.png" class="mb-4 inline-block dark:invert" alt="" /></NuxtLink>
              <p class="text-xl text-secondary leading-normal mx-auto max-w-[500px]">CRM dashboard uses line charts to visualize customer-related metrics and trends over time.</p>
            </div>
            <div class="sm:mt-20 mt-5 text-center">
              <img src="assets/images/login.png" alt="" class="lg:w-[74%] w-4/5 inline-block max-sm:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
