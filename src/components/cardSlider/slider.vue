<template>
  <div class="mt-4">
    <div v-if="!isCardDataFetched" class="slider d-flex justify-content-center">
      <app-spinner></app-spinner>
    </div>
    <div v-if="isCardDataFetched">
      <div v-for="(courseType, index) in courseTypes" :key="index">
        <app-card
          :isCardDataFetched="isCardDataFetched"
          :index="index"
          :cardDetailsSets="cardDetailsSets[courseType]"
          :courseType="courseType"
        ></app-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import card from "../shared/Card.vue";
import spinner from "../shared/spinner.vue";
import { bus } from "../../main.js";

export default {
  components: {
    "app-card": card,
    "app-spinner": spinner,
  },
  data() {
    return {
      isCardDataFetched: false,
      cardDetailsSets: null,
      courseTypes: [],
      addColor: false,
    };
  },

  created() {
    axios
      .get(this.$store.state.courseApi.getCourses, {
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((resData) => {
        // console.log(resData)
        this.cardDetailsSets = resData.data;
        this.courseTypes = Object.keys(this.cardDetailsSets);
        console.log(this.courseTypes);

        // console.log(this.courseTypes.length)

        var courseName = [];

        console.log(this.cardDetailsSets, "aaaaaaaaaa");
        console.log(this.cardDetailsSets["Pool Courses"]);
        for (let courseType of this.courseTypes) {
          console.log(this.cardDetailsSets[courseType]);
          var details = this.cardDetailsSets[courseType];
          details.forEach((d) => {
            console.log(d);
            courseName.push(d.courseName);
          });
        }
        console.log(courseName);
        this.$store.state.courses = courseName;
        console.log(this.$store.state.courses);
        bus.$emit("courseName", courseName);
        this.isCardDataFetched = true;
        // if(resData.status == 200){
        //     this.isCardDataFetched=true
        // }
        // else{
        //     this.isCardDataFetched=false
        // }
      })
      .catch((err) => {
        // console.log(err)
        err;
        this.isCardDataFetched = false;
      });
  },
};
</script>

<style scoped>
.slider {
  height: 150px;
}
</style>
