<template>
  <div>
    <div>
      <app-header></app-header>
      <app-menu></app-menu>
    </div>
    <div style="height:150px; background-color:#505763">
      <div class="container text-white">
        <h2 class="pt-5 text-center">Personalize Projects</h2>
        <p class="pt-4 text-center">All Projects</p>
      </div>
    </div>
    <div class="my-5 d-flex justify-content-center" v-if="isLoading">
      <app-spinner></app-spinner>
    </div>
    <div v-else>
      <div
        class="container my-4"
        v-if="project && project.projectArray.length != 0"
      >
        <!-- <h4 class="my-5 text-center">
          <u><strong>Your projects</strong> </u>
        </h4> -->
        <div class="row">
          <div
            class="my-3 col-md-6 col-lg-4 col-12 d-flex justify-content-center"
            :key="index"
            v-for="(t, index) in project.projectArray"
          >
            <div class="rounded card ">
              <img
                class="img-fluid border-bottom border-secondary"
                style="height:150px"
                :src="t.projectDetails.imgUrl"
                alt="Card image cap"
              />
              <div class="card-body ">
                <h6 class="card-title">
                  <strong>{{ t.projectDetails.topicName }}</strong>
                </h6>
                <p class="card-text">
                  {{ t.projectDetails.summary }}
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
                  <!-- <div class="col-md-6">
                  <span class="link" href="#intro" data-toggle="modal">
                    <i class="fa fa-video-camera" aria-hidden="true"></i>
                    video
                  </span>
                </div> -->
                </div>
                <div
                  :class="'modal fade bd-example-modal-lg' + index"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <!-- "http://www.africau.edu/images/default/sample.pdf#toolbar=0" -->
                      <iframe
                        :src="t.projectDetails.dataFile + '#toolbar=0'"
                        height="500px"
                      >
                      </iframe>
                    </div>
                  </div>
                </div>
                <!-- <div class="bs-example">
                <div id="intro" class="modal fade">
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
                          v-if="true"
                          :src="t.video"
                          frameborder="0"
                          allowfullscreen
                        >
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

                <div class="my-2 no-gutters row">
                  <p class="col-6">
                    <small>
                      <strong> Start Date:</strong>{{ t.startDate }}
                    </small>
                  </p>
                  <p class="col-6">
                    <small> <strong>End Date:</strong>{{ t.endDate }} </small>
                  </p>
                </div>
                <!-- <div class="pb-4">
                Total Question:&nbsp;
                <strong>{{ q.quizQuestions.length }}</strong>
              </div> -->
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <!-- <a class="m-4" id="viewQuizLink">View Quiz</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container my-5">
        <div class="text-center">
          <strong>
            Please connect support@edugenix,support@data-stats and +918707506683
            to add the Projects.
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "../../main.js";
import Header from "../../components/shared/Header.vue";
import menu from "../../components/shared/MenuBar.vue";
import spinner from "../shared/spinner.vue";

export default {
  async created() {
    var val = localStorage.getItem("dataStatsAuthToken");
    if (!val) {
      bus.$emit("openlogin");
    } else {
      // this.$router.push("/quizDetails/" + i);
    }
    this.getprojects();
  },
  components: {
    "app-menu": menu,
    "app-header": Header,
    "app-spinner": spinner,
  },
  data() {
    return {
      isLoading: false,
      project: null,
      startDates: [],
      endDates: [],
      type: "Big Data",
    };
  },
  methods: {
    quizDetails(i) {
      this.$router.push("/quizDetails/" + i);
    },
    async getprojects() {
      console.log("naman");
      // axios.get(this.$store.state.courseApi.getQuizes).then((val) => {
      //   console.log(val);
      //   this.quizes = val.data.QuizDetails;
      //   this.$store.state.quizDetails = this.quizes;
      // });
      this.isLoading = true;

      var val = localStorage.getItem("dataStatsAuthToken");
      // this.quizDetails();

      await axios({
        method: "GET",
        url: this.$store.state.courseApi.getProjects + "/" + this.type,
        headers: { authorization: val },
      }).then((val) => {
        console.log(val);
        this.project = val.data;
        // this.project.projects.forEach(async (t) => {
        //   await this.getUpdateddate(t.item);
        this.isLoading = false;
        // });

        // console.log(this.startDates);
        // console.log(this.endDates);

        // this.getEndDates();
        // console.log(new Date(this.project.registerAt));
        // this.project.forEach(t => {

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
    // // },
    // async getUpdateddate(item) {
    //   console.log(item, "item");
    //   var regDate = new Date(this.project.mobRegisterAt);
    //   // var d = new Date("2021-02-04 01:02:49");
    //   var startDate = regDate.setDate(
    //     regDate.getDate() + (parseInt(item) - 1) * 7
    //   );

    //   var endsDate = new Date(this.project.mobRegisterAt);

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

    //   // var date = this.project.registerAt[0] + this.project.registerAt[1];

    //   // var month = this.project.registerAt[3] + this.project.registerAt[4];

    //   // var year =
    //   //   this.project.registerAt[6] +
    //   //   this.project.registerAt[7] +
    //   //   this.project.registerAt[8] +
    //   //   this.project.registerAt[9];

    //   // var ChangedDate = new Date(month + "/" + date + "/" + year);
    //   // var newStartDate = new Date(
    //   //   ChangedDate.getTime() + parseInt(item) * 24 * 60 * 60 * 1000
    //   // );
    //   // var newEndDate = new Date(
    //   //   newStartDate.getTime() + 7 * 24 * 60 * 60 * 1000
    //   // );
    //   // var numericEndMonth = newEndDate.getMonth() + 1;

    //   // console.log(newEndDate);

    //   // this.endDates.push(
    //   //   newEndDate.getDate() +
    //   //     "/" +
    //   //     numericEndMonth +
    //   //     "/" +
    //   //     newEndDate.getFullYear()
    //   // );

    //   // // this.startDates.push(
    //   // //   newStartDate.getDate() +
    //   // //     "/" +
    //   // //     newStartDate.getMonth() +
    //   // //     "/" +
    //   // //     newStartDate.getFullYear()
    //   // // );
    //   // var numericStartMonth = newStartDate.getMonth() + 1;

    //   // this.startDates.push(
    //   //   newStartDate.getDate() +
    //   //     "/" +
    //   //     numericStartMonth +
    //   //     "/" +
    //   //     newStartDate.getFullYear()
    //   // );
    //   // console.log(newStartDate);
    // },
  },
};
</script>

<style scoped>
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
