<template>
  <div class="schedule">
    <div id="accordion" v-for="(schedule, index) in details" :key="index">
      <!-- {{ selectedTutIndex == index }} -->

      <div class="mb-3 bg-white shadow card ">
        <div
          :class="selectedTutIndex == index ? 'bg-white' : 'bg-gray'"
          class="card-header collapsed"
          id="headingOne"
          data-toggle="collapse"
          :href="'#' + index"
          aria-expanded="false"
          :aria-controls="index"
        >
          <h5 class="row no-gutters align-items-center">
            <div class="col-md-3 col-1">{{ index + 1 }}</div>
            <div class="col-md-4 col-5">
              <small
                ><strong>
                  {{ schedule.tutorialDetails.topicName }}
                </strong></small
              >
            </div>
            <div class="col-md-5 col-6">
              <div class="w-100">
                <small> Start Date:</small>
                <small
                  >&nbsp;<strong>{{ schedule.startDate }}</strong></small
                >
              </div>
              <div class="w-100">
                <small> End Date:</small>
                <small
                  >&nbsp;<strong>{{ schedule.endDate }}</strong></small
                >
              </div>
            </div>
          </h5>

          <div
            :class="'modal fade card-header bd-example-modal-lg' + index"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <iframe
                  :src="schedule.tutorialDetails.link + '#toolbar=0'"
                  height="500px"
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>

        <div
          :id="index"
          class="collapse card-header"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="row border-bottom pb-1">
            <div class="col-md-12">
              <b>Summary:</b>
            </div>

            <div class="col-md-12">
              {{ schedule.tutorialDetails.summary }}
            </div>
          </div>
          <div class="pt-3 my-2 row ">
            <div class="col-md-7 col-6" v-if="schedule.tutorialDetails.video">
              <span class="link" @click="changeTut(index)">
                <i class="fa fa-play" aria-hidden="true"></i>
                Start Video
              </span>
            </div>
            <div class="col-md-5 col-6">
              <span
                class="link"
                data-toggle="modal"
                :data-target="'.bd-example-modal-lg' + index"
              >
                <i class="fa fa-file" aria-hidden="true"></i>
                PDF
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      id="accordion"
      v-for="(schedule, index) in classScheduleData"
      :key="index"
    >
      <div class="mb-3 shadow card ">
        <div
          class="bg-white card-header collapsed"
          id="headingOne"
          data-toggle="collapse"
          :href="'#' + index"
          aria-expanded="false"
          :aria-controls="index"
        >
          <h5 class="row">
            <div class="col-md-3">Session- {{ schedule.sessionNumber }}</div>
            <div class="col-md-4">
              <small
                ><strong> {{ schedule.sessionName }} </strong></small
              >
            </div>
            <div class="col-md-5 d-flex justify-content">
              <small>{{ schedule.startDateTime }}</small>
            </div>
          </h5>
        </div>

        <div
          :id="index"
          class="collapse "
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div class="row border-bottom">
              <p class="col-md-6 col-7 d-flex justify-content-start">
                <span class="learningLink" @click="showLecture(index)">
                  Start learning
                  <i class="pt-1 ml-3 fa fa-play" aria-hidden="true"></i>
                </span>
              </p>
            </div>

     

            <div
              v-if="schedule.codeLink || schedule.interviewQuestion"
              class="py-3 row no-gutters border-bottom "
            >
              <div class="col-7" v-if="schedule.codeLink">
                <a :href="schedule.codeLink" class="" target="_blank">
                  <strong class="link">
                    Session Notebook<i
                      class="pt-2 ml-2 fa fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>

              <div
                class="col-5 "
                :class="schedule.codeLink ? 'pl-4' : 'pl-0'"
                v-if="schedule.interviewQuestion"
              >
                <a :href="schedule.interviewQuestion" class="" target="_blank">
                  <strong class="link">
                    Interview Question<i
                      class="pt-2 ml-2 fa fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

            <div
              v-if="schedule.assignmentLink || schedule.dataFile"
              class="py-3 row no-gutters border-bottom"
            >
              <div class="col-7" v-if="schedule.assignmentLink">
                <a :href="schedule.assignmentLink" class="" target="_blank">
                  <strong class="link">
                    Assignments<i
                      class="pt-2 ml-2 fa fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
              <div
                class="pl-4 col-5 d-flex "
                :class="schedule.assignmentLink ? 'pl-4' : 'pl-0'"
                v-if="schedule.dataFile"
              >
                <a :href="schedule.dataFile" class="" target="_blank">
                  <strong class="link">
                    Data Files<i
                      class="pt-2 ml-2 fa fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

            <div
              v-if="schedule.others"
              class="py-3 row no-gutters border-bottom "
            >
              <div class="col-7">
                <a :href="schedule.others" class="" target="_blank">
                  <strong class="link">
                    Others<i
                      class="pt-2 ml-2 fa fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

       
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { bus } from "../../main.js";

export default {
  data() {
    return {
      selectedTutIndex: 0,
    };
  },
  methods: {
    changeTut(i) {
      this.scrollUp();
      this.selectedTutIndex = i;
      bus.$emit("changeTut", i, "video");
    },
    scrollUp() {
      window.scrollBy(0, 0);
    },
  },
  props: ["details"],
};
</script>

<style scoped>
* {
  scroll-behavior: smooth;
}
.card {
  cursor: pointer;
}
.link:hover {
  color: #ff6400;
}
.schedule {
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
