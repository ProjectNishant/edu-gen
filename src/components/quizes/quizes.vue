<template>
  <div>
    <div>
      <app-header></app-header>
      <app-menu></app-menu>
    </div>
    <div style="height:150px; background-color:#505763">
      <div class="container text-white">
        <h2 class="pt-5 pl-5 ml-5">Quizzes</h2>
        <p class="pt-4 pl-5 ml-5">All Quizzes</p>
      </div>
    </div>
    <div class="my-5 d-flex justify-content-center" v-if="isLoading">
      <app-spinner></app-spinner>
    </div>
    <div v-else>
      <div class="container my-4" v-if="quizes">
        <!-- <h4 class="my-5 text-center">
          <u><strong>Your Quizzes</strong> </u>
        </h4> -->
        <div class="row">
          <div
            class="my-3 col-md-6 col-lg-4 col-12 d-flex justify-content-center"
            :key="index"
            v-for="(q, index) in quizes"
          >
            <div class="rounded card w-75 " @click="quizDetails(index)">
              <img
                class="img-fluid"
                style="height:150px"
                :src="q.quizDetails.imgURL"
                alt="Card image cap"
              />
              <div class="card-body ">
                <h6 class="card-title">
                  <strong>{{ q.quizDetails.quizName }}</strong>
                </h6>
                <p class="card-text">
                  {{ q.quizDetails.quizSummary }}
                </p>
                <div class="pb-4">
                  Total Question:&nbsp;
                  <strong>{{ q.quizDetails.quizQuestions.length }}</strong>
                </div>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                <a class="m-4" id="viewQuizLink">View Quiz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="container my-5">
        <div class="text-center">
          <strong>
            Please connect support@edugenix,support@data-stats and +918707506683
            to add the quizzes.
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
    this.getQuizes();
  },
  components: {
    "app-menu": menu,
    "app-header": Header,
    "app-spinner": spinner,
  },
  data() {
    return {
      quizes: null,
      isLoading: false,
      type: "Big Data",
    };
  },
  methods: {
    quizDetails(i) {
      this.$router.push("/quizDetails/" + i);
    },
    async getQuizes() {
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
        url: this.$store.state.courseApi.getQuizes + "/" + this.type,
        headers: { authorization: val },
      }).then((val) => {
        console.log(val);
        this.quizes = val.data.quizArray;
        console.log(this.quizes);
        this.$store.state.quizDetails = this.quizes;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
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
</style>
