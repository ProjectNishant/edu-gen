<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="mx-1 row align-items-center ">
          <div
            class="rounded-circle orangeBg"
            style="height:15px;width:15px;"
          ></div>
          <span class="pl-2">Selected Question</span>
        </div>
        <div
          class="py-2 mx-1 border-bottom border-secondary row align-items-center"
        >
          <div
            class="border rounded-circle bg-light border-secondary"
            style="height:15px;width:15px;"
          ></div>
          <span class="pl-2">Not Selected Question</span>
        </div>

        <div class="row">
          <div
            class="my-4 col-3 d-flex justify-content-center"
            v-for="(n, i) in quiz.quizQuestions"
            :key="i"
          >
            <div
              @click="changeQue(i)"
              class=" d-flex questionNo rounded-circle justify-content-center align-items-center"
              style="height:30px;width:30px;"
              :class="
                i == selectedQue
                  ? 'orangeBg text-white'
                  : 'bg-light border border-secondary text-black'
              "
            >
              {{ i + 1 }}
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button
            style="background:#ff6400"
            class="text-white btn"
            @click="submitQuiz"
            v-if="!isLoading"
          >
            Submit
          </button>
          <button v-else style="background:#ff6400" class="text-white btn">
            <div class="spinner-border text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main.js";

export default {
  data() {
    return {
      selectedQue: 0,
      isLoading: false,
    };
  },
  methods: {
    submitQuiz() {
      this.isLoading = true;
      console.log();
      bus.$emit("onSubmit");
    },
    changeQue(i) {
      bus.$emit("changeQue", i);
    },
  },
  mounted() {
    bus.$on("selectedQues", (val) => {
      console.log(val);
      this.selectedQue = val;
    });
  },
  props: {
    quiz: {
      default: null,
      type: Object,
    },
  },

  created() {},
};
</script>
<style scoped>
.questionNo {
  cursor: pointer;
}
.questionNo:hover {
  opacity: 0.8;
}
.orangeBg {
  background: #ff6400;
}
.btn:hover {
  opacity: 0.8;
}
</style>
