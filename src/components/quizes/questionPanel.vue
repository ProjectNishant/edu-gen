<template>
  <div>
    <div class="card" v-if="!isSubmited">
      <div class="card-body">
        <h5 class="px-4 py-2 border-bottom border-primary">
          {{ questionIndex + 1 }}. &nbsp;
          {{ quiz.quizQuestions[questionIndex].question }}
        </h5>
        <!-- <div
          v-for="(o, i) in quiz.quizQuestions[questionIndex].options"
          :key="i"
          class="px-4 py-2 my-4 border-bottom border-secondary"
        >
          {{ o }}
        </div> -->

        <div
          class="px-4 py-2 my-4 form-check option border-bottom border-secondary"
          :key="i"
          v-for="(o, i) in quiz.quizQuestions[questionIndex].options"
        >
          <input
            class="form-check-input"
            type="radio"
            @change="onSelectOption(i)"
            v-model="selectedOption[questionIndex]"
            name="exampleRadios"
            :id="'exampleRadios' + i"
            :value="o"
          />
          <label class="form-check-label w-100 " :for="'exampleRadios' + i">
            {{ o }}
          </label>
        </div>

        <div class="row">
          <div class="col-6">
            <button
              @click="questionIndex = questionIndex - 1"
              v-if="questionIndex != 0"
              style="background:#ff6400"
              class="text-white btn"
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>

              Prev
            </button>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <button
              @click="questionIndex = questionIndex + 1"
              v-if="questionIndex != quiz.quizQuestions.length - 1"
              class="text-white btn "
              style="background:#ff6400"
            >
              Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>

          <div class="col-md-6"></div>
        </div>

        <div class="mt-4 d-flex justify-content-center">
          <span v-if="!isLoading">
            <button
              v-if="questionIndex == quiz.quizQuestions.length - 1"
              class="text-white btn "
              @click="submitQuiz"
              style="background:#ff6400"
            >
              Submit
            </button>
          </span>

          <span v-else>
            <button
              class="text-white btn "
              @click="submitQuiz"
              style="background:#ff6400"
            >
              <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </span>
        </div>
      </div>
    </div>

    <!-- <div v-else>
      <div class="flex row justify-content-center">
        <div class="card col-md-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="flex row justify-content-center" v-else>
      <div class="col-4 bg-success">
        <p class="pt-4 text-center text-white">Quiz Submitted Successfully</p>
        <h4 class="pb-4 text-center text-white">
          Your Score is {{ calculatedScore }} from
          {{ quiz.quizQuestions.length }}
        </h4>
      </div>
    </div> -->
  </div>
</template>

<script>
import { bus } from "../../main.js";
import axios from "axios";

export default {
  data() {
    return {
      questionIndex: 0,
      selectedOption: [],
      selectedOptions: [],
      answerStatus: [],
      isSubmited: false,
      isLoading: false,
    };
  },
  watch: {
    questionIndex: function() {
      console.log(this.questionIndex);
      bus.$emit("selectedQues", this.questionIndex);
    },
  },
  props: {
    quiz: {
      type: Object,
      default: null,
    },
  },

  created() {
    for (let q in this.quiz.quizQuestions) {
      console.log(q);
      this.answerStatus.push(false);
      this.selectedOption.push("");
    }
    console.log(this.answerStatus);
    console.log(this.quiz.quizQuestions[this.questionIndex]);
  },
  mounted() {
    bus.$on("onSubmit", () => {
      console.log("kn");
      this.submitQuiz();
    });
    console.log(this.quiz);
    bus.$on("changeQue", (i) => {
      this.questionIndex = i;
    });
  },
  methods: {
    submitQuiz() {
      var val = localStorage.getItem("dataStatsAuthToken");

      // axios({
      //   method: "PATCH",
      //   url: this.$store.state.courseApi.submitQuiz,
      //   headers: { authorization: val },
      // }).then((val) => {
      //   console.log(val);
      // });
      var calculatedScore = 0;
      this.isLoading = true;
      this.answerStatus.forEach((a) => {
        if (a) {
          calculatedScore++;
        }
      });

      console.log(calculatedScore);

      // axios
      //   .patch(
      //     this.$store.state.courseApi.submitQuiz + "/" + this.quiz._id,
      //     {
      //       score: calculatedScore,
      //     },
      //     { headers: { Authorization: val } }
      //   )
      //   .then((a) => {
      //     console.log(a);
      //   });
      axios;
      val;
      // this.$emit("submited", calculatedScore);

      axios({
        method: "PATCH",
        url: this.$store.state.courseApi.submitQuiz + "/" + this.quiz._id,
        data: {
          score: calculatedScore,
        },
        headers: { Authorization: val },
      }).then((val) => {
        console.log(val);
        // this.isSubmited = true;
        // this.$emit("onSubmit");
        // this.isSubmited = true;
        this.$emit("submited", calculatedScore, this.answerStatus);
        // this.$swal({
        //   text: `You Scored  ${calculatedScore} Out of
        //   ${this.quiz.quizQuestions.length}`,
        //   // text: "You clicked the button!",
        //   icon: "success",
        // }).then(() => {
        //   this.isLoading = false;
        //   this.$router.push("/techQuiz");
        // });
      });
    },

    async onSelectOption() {
      console.log(this.selectedOption);
      console.log(this.quiz.quizQuestions[this.questionIndex].answer);
      if (
        this.selectedOption[this.questionIndex] ==
        this.quiz.quizQuestions[this.questionIndex].answer
      ) {
        console.log("correct");
        this.answerStatus[this.questionIndex] = true;
      } else {
        console.log("wrong");
        this.answerStatus[this.questionIndex] = false;
        console.log(this.answerStatus[this.questionIndex]);
        console.log(this.answerStatus);
      }
      console.log(this.answerStatus);
    },
  },
};
</script>

<style scoped>
.btn:hover {
  opacity: 0.8;
}
.option:hover {
  background: #d3d3d3;
}

/* .option {
  cursor: pointer;
} */
.form-check-label {
  cursor: pointer;
}
</style>
