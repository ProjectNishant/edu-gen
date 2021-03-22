<template>
  <div class="pt-2" v-if="classes.length != 0">
    <!-- schedule description card start -->
    <!-- <h4>Previous Sessions:</h4> -->
    <div
      id="accordion"
      v-for="(schedule, index) in classScheduleData"
      :key="index"
    >
      <div class="card shadow mb-3 ">
        <div
          class="card-header bg-white collapsed"
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
                  <i class="fa pt-1 ml-3 fa-play" aria-hidden="true"></i>
                </span>
              </p>
            </div>

            <!-- <div class="row">
              <strong class="pl-2">About course: </strong>
              <p class="pl-2">{{ schedule.sessionAgenda }}</p>
            </div> -->

            <div
              v-if="schedule.codeLink || schedule.interviewQuestion"
              class="row py-3  no-gutters  border-bottom  "
            >
              <div class="col-7" v-if="schedule.codeLink">
                <a :href="schedule.codeLink" class="" target="_blank">
                  <strong class="link">
                    Session Notebook<i
                      class="fa pt-2 ml-2 fa-files-o"
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
                      class="fa pt-2 ml-2 fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

            <div
              v-if="schedule.assignmentLink || schedule.dataFile"
              class="row no-gutters py-3 border-bottom"
            >
              <div class="col-7" v-if="schedule.assignmentLink">
                <a :href="schedule.assignmentLink" class="" target="_blank">
                  <strong class="link">
                    Assignments<i
                      class="fa pt-2 ml-2 fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
              <div
                class="col-5 pl-4 d-flex "
                :class="schedule.assignmentLink ? 'pl-4' : 'pl-0'"
                v-if="schedule.dataFile"
              >
                <a :href="schedule.dataFile" class="" target="_blank">
                  <strong class="link">
                    Data Files<i
                      class="fa pt-2 ml-2 fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

            <div
              v-if="schedule.others"
              class="row no-gutters py-3 border-bottom "
            >
              <div class="col-7">
                <a :href="schedule.others" class="" target="_blank">
                  <strong class="link">
                    Others<i
                      class="fa pt-2 ml-2 fa-files-o"
                      aria-hidden="true"
                    ></i></strong
                ></a>
              </div>
            </div>

            <!-- <div class="row">
              <a
                :href="schedule.notebookURL"
                class="col-md-6 col-12"
                target="_blank"
              >
                <strong>
                  Others<i
                    class="fa pt-2 ml-2 fa-files-o"
                    aria-hidden="true"
                  ></i></strong
              ></a>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- schedule description card end -->
  </div>
</template>

<script>
import { bus } from "../../../main.js";
export default {
  data() {
    return {
      classScheduleData: null,
      classes: [],
    };
  },
  mounted() {
    bus.$on("classSchedule", (val) => {
      console.log(val);
      this.classes = val;
      if (this.classes.length > 0) {
        this.classScheduleData = val;
        bus.$emit("startLearning", this.classScheduleData[0].recordingUrl); // event listen in learningVideo.vue
      }
    });
  },
  methods: {
    showLecture(index) {
      bus.$emit("startLearning", this.classScheduleData[index].recordingUrl); // event listen in learningVideo.vue
    },
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  .card-body {
    padding: 1rem;
  }
}

.learningLink {
  cursor: pointer;
}

.learningLink:hover {
  font-weight: bold;
}

.card-header {
  cursor: pointer;
}
.link {
  cursor: pointer;
}
.link:hover {
  color: #ff6400;
}

.fa-play {
  cursor: pointer;
  color: #ff6400;
}
</style>
