<script lang="ts" setup>
import EmailLeftContent from "~/components/app/email/emailLeftContent.vue";
import EmailRightContent from "~/components/app/email/emailRightContent.vue";
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Email Compose" name="Email Compose" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div>
              <div class="row !mx-0">
                <div class="xl:w-1/4 col-xxl-4 !p-0">
                  <EmailLeftContent />
                </div>

                <div class="xl:w-3/4 col-xxl-8 !p-0">
                  <EmailRightContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
