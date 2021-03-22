<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>
    <button
      v-if="!isOpenAnswerpanel"
      @click="isOpenAnswerpanel = !isOpenAnswerpanel"
      class="d-block d-md-none backBtn"
    ></button>
    <div v-if="isLoading" class="mt-4 w-100 d-flex justify-content-center">
      <app-spinner></app-spinner>
    </div>
    <div v-if="!isLoading">
      <div class="arrowBtn d-block d-md-none">
        <button
          @click="isOpenAnswerpanel = !isOpenAnswerpanel"
          type="button "
          class="m-4 shadow-sm rounded-pill btn btn-light"
        >
          <i
            v-if="!isOpenAnswerpanel"
            class="fa fa-chevron-right"
            aria-hidden="true"
          ></i>
          <i v-else class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
      </div>

      <div class="container my-5">
        <div v-if="!isSubmitted">
          <div class="">
            <h5 class="text-center">
              <strong>
                {{
                  $store.state.quizDetails[this.quizNumber].quizDetails.quizName
                }}</strong
              >
            </h5>
            <h5 class="text-center">
              Total Question:&nbsp;
              <strong>{{
                $store.state.quizDetails[this.questionIndex].quizDetails
                  .quizQuestions.length
              }}</strong>
            </h5>
          </div>
          <div class="row">
            <div class="col-md-9 col-12">
              <app-questionPanel
                @submited="onSubmit"
                :quiz="
                  $store.state.quizDetails[this.$route.params.no].quizDetails
                "
              ></app-questionPanel>
            </div>
            <div
              class="col-md-3 answerPanel"
              :class="
                !isOpenAnswerpanel ? 'answerPanelOpen' : 'answerPanelClose'
              "
            >
              <app-answerStatusPanel
                :quiz="
                  $store.state.quizDetails[this.$route.params.no].quizDetails
                "
              ></app-answerStatusPanel>
            </div>
          </div>
        </div>

        <div class="flex row justify-content-center" v-else>
          <div class="col-md-4 col-12 bg-secondary card-body" v-if="showResult">
            <p class="pt-4 text-center text-white">
              Quiz Submitted Successfully
            </p>
            <h4 class="pb-4 text-center text-white">
              Your Score is {{ calculatedScore }} from
              {{
                $store.state.quizDetails[quizNumber].quizDetails.quizQuestions
                  .length
              }}
            </h4>
            <div class="row">
              <div class="text-center col-6">
                <u class="link" v-if="showWrongQueLink" @click="showWrongQue"
                  >Wrong Question</u
                >
              </div>
              <div class="text-right col-6">
                <u class="link" @click="showSolution">Solutions </u>
              </div>
            </div>
          </div>

          <div
            class="col-md-6 col-12 bg-secondary card-body"
            v-if="showWrongQuestion"
          >
            <p v-if="showWrongQueLink" class="pt-4 text-center text-white">
              <strong>Wrong Questions</strong>
            </p>
            <div
              :key="i"
              v-for="(que, i) in this.$store.state.quizDetails[this.quizNumber]
                .quizDetails.quizQuestions"
            >
              <div v-if="!ansStatus[i]">
                <h6 class="pb-1 text-white">
                  Q-{{ i + 1 }}: {{ que.question }}
                </h6>
                <p class="text-white">Ans-{{ i + 1 }}:{{ que.answer }}</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center col-6 ">
                <u class="link" @click="showResultDetail">Show Result</u>
              </div>
              <div class="text-right col-6">
                <u class="link" @click="showSolution">Solutions </u>
              </div>
            </div>
          </div>

          <div class="col-12 bg-secondary card-body" v-if="showSolutions">
            <div class="py-3 row">
              <div class="text-center col-md-6">
                <u class="link" v-if="showWrongQueLink" @click="showWrongQue"
                  >Wrong Question</u
                >
              </div>
              <div class="text-center col-md-6">
                <u class="link" @click="showResultDetail">Results</u>
              </div>
            </div>
            <embed
              @contextmenu="prevent"
              class="w-100"
              EnableContextMenu="0"
              height="600px"
              :src="
                $store.state.quizDetails[quizNumber].quizDetails.solution +
                  '#toolbar=0'
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questionPanel from "./questionPanel.vue";
import answerStatusPanel from "./answerStatusPanel.vue";
import { bus } from "../../main.js";
import Header from "../../components/shared/Header.vue";
import axios from "axios";
import menu from "../../components/shared/MenuBar.vue";
import spinner from "../shared/spinner.vue";

export default {
  components: {
    "app-questionPanel": questionPanel,
    "app-answerStatusPanel": answerStatusPanel,
    "app-menu": menu,
    "app-header": Header,
    "app-spinner": spinner,
  },
  data() {
    return {
      isLoading: false,
      isOpenAnswerpanel: false,
      questionIndex: 0,
      calculatedScore: 0,
      quizNumber: null,
      isSubmitted: false,
      showResult: false,
      showWrongQuestion: false,
      showSolutions: false,
      ansStatus: [],
      quiz: null,
      showWrongQueLink: true,
    };
  },
  methods: {
    async getQuizStatus() {
      this.isLoading = true;
      console.log("get quiz status", this.quiz);
      console.log(
        this.$store.state.courseApi.getQuizStatus +
          "/" +
          this.quiz._id +
          this.quizNumber
      );
      var val = localStorage.getItem("dataStatsAuthToken");
      console.log(this.quizNumber);
      await axios({
        method: "GET",
        url:
          this.$store.state.courseApi.getQuizStatus +
          "/" +
          this.quiz.quizDetails._id,
        headers: { authorization: val },
      }).then((val) => {
        console.log(val, "fffffffffffffffffffff");
        console.log(val.data.score);
        if (val.data.score == "-1") {
          console.log("naman");
          this.isSubmitted = false;
        } else {
          console.log("khurana");
          this.calculatedScore = val.data.score;
          this.isSubmitted = true;
          this.showResult = true;
          this.showWrongQueLink = false;
        }
        // this.quizes = val.data.QuizDetails;
        // this.$store.state.quizDetails = this.quizes;
        this.isLoading = false;
      });
    },
    prevent(e) {
      e.preventDefault();
      // console.log(e);
      // return false;
    },
    showSolution() {
      this.showSolutions = true;
      this.showWrongQuestion = false;
      this.showResult = false;
    },
    showWrongQue() {
      this.showResult = false;
      this.showSolutions = false;

      this.showWrongQuestion = true;
    },
    showResultDetail() {
      this.showResult = true;
      this.showSolutions = false;

      this.showWrongQuestion = false;
    },
    // submitData() {
    //   this.isSubmitted = true;
    // },
    onSubmit(val, ansStatus) {
      // this.
      console.log(ansStatus);
      console.log(val);
      this.ansStatus = ansStatus;
      console.log(this.$store.state.quizDetails[this.quizNumber]);
      this.calculatedScore = val;
      this.isSubmitted = true;
      this.showResult = true;
    },
  },
  mounted() {
    console.log(this.$store.state.quizDetails[this.$route.params.no]);
    bus.$on("selectedQues", this.questionIndex);
  },
  created() {
    console.log("naman");

    if (!this.$store.state.quizDetails) {
      this.$router.push("/techQuiz");
    }
    console.log(this.$store.state.quizDetails);
    this.quizNumber = this.$route.params.no;
    console.log(this.$route.params.no);
    console.log(this.quizNumber);
    this.quiz = this.$store.state.quizDetails[this.quizNumber];
    console.log(this.quiz);
    this.getQuizStatus();
  },
};
</script>

<style scoped>
.link {
  color: white;
  cursor: pointer;
}
.link:hover {
  color: #ff6400;
}
.arrowBtn {
  position: fixed;
  right: 0;
  margin-top: 20px;
}
@media (max-width: 600px) {
  .answerPanelOpen {
    position: fixed;
    top: 0;
    transition: 0.5s all;
    right: 0;
    margin-top: 180px;
  }

  .answerPanelClose {
    margin-top: 180px;
    transition: 0.5s all;

    position: fixed;
    top: 0;
    right: -100%;
  }
  embed {
    height: 500px;
  }
  .backBtn {
    position: fixed;
    top: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    right: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
}
</style>
