<template>
  <div>
    <div>
      <app-header></app-header>
      <app-menu></app-menu>
    </div>

    <div style="height:150px; background-color:#505763">
      <div class="container text-white">
        <h2 class="pt-5 text-center">Personalize Tutorials</h2>
        <p class="pt-4 text-center">All Tutorials</p>
      </div>
    </div>
    <div v-if="isLoading" class="my-5 d-flex justify-content-center">
      <app-spinner></app-spinner>
    </div>
    <div v-else>
      <div
        class="mx-md-5 mx-2 my-4"
        v-if="tutorial && tutorial.tutorialArray.length != 0"
      >
        <div class="row">
          <div class="col-md-7 col-12">
            <app-tutorialVideo
              :details="tutorial.tutorialArray"
            ></app-tutorialVideo>
          </div>
          <div class="col-md-5 col-12 my-2">
            <app-tutorialSchedule
              :details="tutorial.tutorialArray"
            ></app-tutorialSchedule>
          </div>
        </div>
        <!-- <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
            <iframe class=" w-100 w-md-75" :src="selectedTutorial.video" />
          </div>
          <h5 class="py-2 text-center w-100">
            <u> {{ selectedTutorial.topicName }}</u>
          </h5>
        </div>

        <div class="row">
          <div
            class="my-3 col-lg-4 col-12 col-md-6 d-flex justify-content-center"
            :key="index"
            v-for="(t, index) in details"
          >
            <div class="rounded card ">
              <img
                class="img-fluid border-bottom border-secondary"
                style="height:150px"
                :src="t.imgUrl"
                alt="Card image cap"
              />
              <div class="card-body ">
                <h6 class="card-title">
                  <strong>{{ t.topicName }}</strong>
                </h6>
                <p class="card-text">
                  {{ t.summary }}
                </p>

                <div class="row">
                  <div class="col-6">
                    <span
                      class="link"
                      data-toggle="modal"
                      :data-target="'.bd-example-modal-lg' + index"
                    >
                      <i class="fa fa-file" aria-hidden="true"></i>
                      PDF
                    </span>
                  </div>
                  <div class="col-6">
                    <span
                      class="link"
                      v-if="t.video != '' && t.video != null"
                      @click="showVideo(index)"
                    >
                      <i class="fa fa-video-camera" aria-hidden="true"></i>
                      video
                    </span>
                  </div>
                </div>

                <div class="bs-example">
                  <div :id="'intro' + index" class="modal fade">
                    <div class="modal-dialog modal-lg modal-dialog-centered ">
                      <div class="modal-content" style="">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                        </div>
                        <div class="modal-body">
                          <iframe
                            id="intro1"
                            width="100%"
                            height="500px"
                            :src="t.video"
                            frameborder="0"
                            allowfullscreen
                          >
                          </iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-2 no-gutters row">
                  <p class="col-6">
                    <small>
                      <strong> Start Date:&nbsp;</strong
                      >{{ startDates && startDates[index] }}
                    </small>
                  </p>
                  <p class="col-6">
                    <small>
                      <strong> End Date: &nbsp;</strong
                      >{{ endDates && endDates[index] }}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div v-else class="container my-5">
        <div class="text-center">
          <strong>
            Please connect support@edugenix,support@data-stats and +918707506683
            to add the Tutorials.
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import spinner from "../shared/spinner.vue";

import { bus } from "../../main.js";
import Header from "../../components/shared/Header.vue";
import tutorialVideo from "./tutorialVideo.vue";
import tutorialSchedule from "./tutorialSchedule.vue";
import menu from "../../components/shared/MenuBar.vue";

export default {
  async created() {
    var val = localStorage.getItem("dataStatsAuthToken");
    if (!val) {
      bus.$emit("openlogin");
    } else {
      // this.$router.push("/quizDetails/" + i);
    }
    this.getTutorials();
  },
  components: {
    "app-menu": menu,
    "app-header": Header,
    "app-spinner": spinner,
    "app-tutorialVideo": tutorialVideo,
    "app-tutorialSchedule": tutorialSchedule,
  },
  data() {
    return {
      tutorial: null,
      isLoading: false,
      startDates: [],
      endDates: [],
      details: [],
      selectedTutorial: null,
      type: "Big Data",
    };
  },
  methods: {
    showVideo(i) {
      this.selectedTutorial = this.details[i];
      console.log(this.selectedTutorial);
    },
    quizDetails(i) {
      this.$router.push("/quizDetails/" + i);
    },
    async getTutorials() {
      console.log("naman");
      // axios.get(this.$store.state.courseApi.getQuizes).then((val) => {
      //   console.log(val);
      //   this.quizes = val.data.QuizDetails;
      //   this.$store.state.quizDetails = this.quizes;
      // });

      var val = localStorage.getItem("dataStatsAuthToken");
      this.isLoading = true;
      // this.quizDetails();

      await axios({
        method: "GET",
        url: this.$store.state.courseApi.getTutorials + "/" + this.type,
        headers: { authorization: val },
      }).then((val) => {
        console.log(val);
        this.tutorial = val.data;
        // this.details = this.tutorial.tutorials;
        // this.tutorial.tutorials.forEach(async (t) => {
        //   // await this.getUpdateddate(t.item);
        // });
        this.isLoading = false;
        // this.selectedTutorial = this.details[0];

        // console.log(this.startDates, "start dates");
        // console.log(this.endDates, "end dates");

        // this.getEndDates();
        // console.log(new Date(this.tutorial.registerAt));
        // this.tutorial.forEach(t => {

        // });
        // this.quizes = val.data.QuizDetails;
        // this.$store.state.quizDetails = this.quizes;
      });
    },
    // getEndDates() {
    //   this.startDates.forEach((d) => {
    //     console.log(d);
    //     var date = new Date(d).getDate();
    //     console.log(date);
    //   });
    // },
    // async getUpdateddate(item) {
    //   console.log(item, "item");
    //   var regDate = new Date(this.tutorial.mobRegisterAt);
    //   // var d = new Date("2021-02-04 01:02:49");
    //   var startDate = regDate.setDate(
    //     regDate.getDate() + (parseInt(item) - 1) * 7
    //   );

    //   var endsDate = new Date(this.tutorial.mobRegisterAt);

    //   var endDate = endsDate.setDate(
    //     endsDate.getDate() + (parseInt(item) - 1) * 7 + 6
    //   );

    //   console.log(new Date(startDate).getDate());
    //   var startingDate = new Date(startDate).getDate();
    //   var startMonth = new Date(startDate).getMonth() + 1;
    //   var startYear = new Date(startDate).getFullYear();
    //   console.log(startingDate, startMonth, startYear);
    //   startMonth = (startMonth < 10 ? "0" : "") + startMonth;
    //   startingDate = (startingDate < 10 ? "0" : "") + startingDate;
    //   this.startDates.push(startingDate + "-" + startMonth + "-" + startYear);

    //   var endingDate = new Date(endDate).getDate();
    //   var endMonth = new Date(endDate).getMonth() + 1;
    //   var endYear = new Date(endDate).getFullYear();
    //   console.log(endingDate, endMonth, endYear);
    //   endMonth = (endMonth < 10 ? "0" : "") + endMonth;
    //   endingDate = (endingDate < 10 ? "0" : "") + endingDate;
    //   this.endDates.push(endingDate + "-" + endMonth + "-" + endYear);
    // },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  iframe {
    height: 250px;
  }
}

@media only screen and (min-width: 600px) {
  iframe {
    height: 300px;
  }
}
.card {
  overflow: hidden;
  width: 95%;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#viewQuizLink {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #ff6400;
  cursor: pointer;
}
.link {
  cursor: pointer;
  color: #ff6400;
}
.link:hover {
  color: black;
}
</style>
