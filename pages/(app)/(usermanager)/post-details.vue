<script lang="ts" setup>
import AppContentLeft from "~/components/app/AppContentLeft.vue";
import CommonProfileDetail from "~/components/app/CommonProfileDetail.vue";
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Post Detail" name="Post Detail" />
    <div class="container">
      <CommonProfileDetail />
      <div class="row">
        <AppContentLeft />
        <div class="xl:w-2/3">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="post-details">
                <h3 class="mb-2 text-secondary">Collection of textile samples lay spread</h3>
                <ul class="mb-6 post-meta flex flex-wrap">
                  <li class="post-author text-sm mr-4">By Admin</li>
                  <li class="post-date text-sm mr-4"><i class="far fa-calendar-plus mr-2"></i>18 Nov 2020</li>
                  <li class="post-comment text-sm"><i class="far fa-comment mr-2"></i>28</li>
                </ul>
                <img src="assets/images/profile/8.jpg" alt="" class="w-full mb-4 !h-auto rounded-lg" />
                <p class="mb-4 sm:text-sm">
                  A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like
                  these sweet morning of spare which enjoy whole heart.
                </p>
                <p class="mb-4 sm:text-sm">
                  A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated
                  magazine and housed in a nice, gilded frame.
                </p>
                <blockquote class="mb-4 sm:text-sm text-xs">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Has been the industry's standard text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimencenturies.
                </blockquote>
                <p class="mb-4 sm:text-sm">
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was
                  created for the bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                </p>
                <div class="profile-skills mb-12 mt-12">
                  <h4 class="text-primary mb-2 text-lg">Skills</h4>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1">Admin</a>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1">Dashboard</a>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1">Photoshop</a>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1">Tailwind</a>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1">Responsive</a>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1">Crypto</a>
                </div>
                <div class="comment-respond" id="respond">
                  <h4 class="text-primary text-lg mb-4" id="reply-title">Leave a Reply</h4>
                  <form class="comment-form" id="commentform" method="post">
                    <div class="row">
                      <div class="lg:w-1/2 w-full">
                        <div class="mb-4">
                          <label for="author" class="text-secondary form-label">Name <span class="required text-danger">*</span></label>
                          <input
                            type="text"
                            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            value="Author"
                            name="Author"
                            placeholder="Author"
                            id="author"
                          />
                        </div>
                      </div>
                      <div class="lg:w-1/2 w-full">
                        <div class="mb-4">
                          <label for="email" class="text-secondary form-label">Email <span class="required text-danger">*</span></label>
                          <input
                            type="text"
                            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            value="Email"
                            placeholder="Email"
                            name="Email"
                            id="email"
                          />
                        </div>
                      </div>
                      <div class="w-full">
                        <div class="mb-4">
                          <label for="comment" class="text-secondary form-label">Comment <span class="required text-danger">*</span></label>
                          <textarea
                            rows="6"
                            class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                            name="comment"
                            placeholder="Comment"
                            id="comment"
                          ></textarea>
                        </div>
                      </div>
                      <div class="w-full">
                        <div class="mb-4">
                          <input type="submit" value="Post Comment" class="btn !bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1" id="submit" name="submit" />
                        </div>
                      </div>
                    </div>
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
