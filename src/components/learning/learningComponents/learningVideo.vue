<template>
  <div class="pt-2" v-if="startLecture">
    <div class="embed-responsive embed-responsive-16by9 pt-4">
      <iframe class="embed-responsive-item" :src="url" allowfullscreen></iframe>
    </div>

    <!-- <div class="pt-4">
          <iframe id="intro1" width="100%" height="500px"
                                    :src=url 
                                    frameborder="0" allowfullscreen> 
        </iframe> 
        </div> -->

    <div v-if="successMessage" class="alert alert-primary" role="alert">
      {{ successMessage }}
    </div>

    <div class="p-3">
      <div class="form-group">
        <label for="exampleFormControlTextarea1"><h3>Ask Question ?</h3></label>
        <textarea
          class="form-control"
          @blur="$v.question.$touch()"
          v-model="question"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <p class=" pt-2 mb-0   text-danger" v-if="!$v.question.required && err">
          Please enter the question.
        </p>
      </div>
      <div class="w-100 d-flex justify-content-end">
        <button
          class="btn text-white"
          style="background:#ff6400"
          @click="askQuestion($v.$invalid)"
        >
          Submit Question
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { bus } from "../../../main.js";
import axios from "axios";
export default {
  data() {
    return {
      url: null,
      question: null,
      startLecture: false,
      successMessage: null,
      err: false,
    };
  },
  mounted() {
    bus.$on("startLearning", (val) => {
      (this.url = val), console.log(this.url);
      this.startLecture = true;

      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    });
  },

  validations: {
    question: {
      required,
    },
  },
  methods: {
    askQuestion(invalid) {
      console.log(invalid);
      if (!invalid) {
        this.err = false;
        var val = localStorage.getItem("dataStatsAuthToken");
        axios
          .post(
            this.$store.state.courseApi.askQuestion,
            { question: this.question },
            { headers: { authorization: val } }
          )
          .then((res) => {
            console.log(res);
            this.successMessage = res.data.message;

            setTimeout(() => {
              this.successMessage = null;
            }, 7000);
          });
      } else {
        this.err = true;
      }
    },
  },
};
</script>

<style scoped></style>
