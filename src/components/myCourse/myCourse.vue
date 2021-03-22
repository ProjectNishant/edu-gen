<template>
  <div class="myCourse">
    <div id="header">
      <app-header></app-header>
      <!-- <app-menu></app-menu> -->
    </div>

    <div id="myCourseHeader header">
      <app-myCourseHeader></app-myCourseHeader>
    </div>
    <div
      v-if="isDataFetching"
      style="height:150px"
      class="pt-5 mt-5 d-flex justify-content-center"
    >
      <app-spinner></app-spinner>
    </div>
    <div v-else id="featureCard" class="container pt-5 pl-5 mb-5">
      <div class="ml-3 pl-md-5" v-if="myCourses">
        <!-- featre card start -->
        <div class="row  d-flex">
          <div
            class="pt-5 col-md-4 col-12"
            v-for="(myCourse, index) in myCourses"
            :key="index"
          >
            <div class="shadow h-100 card position-relative">
              <img
                :src="myCourse.url"
                height="125px"
                class="card-img-top w-100 "
              />

              <div class="card-body position-relative">
                <p>
                  <strong class="pr-2">Course:</strong>{{ myCourse.courseName }}
                </p>
                <p>
                  <strong class="pr-2">Category:</strong>{{ myCourse.category }}
                </p>
                <p class="pb-3 text-secondary">
                  {{ myCourse.summary | truncate(30) }}
                </p>

                <!-- <p class="text-success ">{{myCourse.startDate +'-'+ myCourse.endDate}}</p> -->
                <span
                  class="pt-3 position-absolute d-flex justify-content-end rating"
                >
                  <!-- <app-rating :rating="myCourse.rating"></app-rating> -->
                  <a
                    @click="showLearningPage(index)"
                    class="m-3 d-flex justify-content-end"
                    style="color:#ff6400"
                    ><u>Start learning</u></a
                  >
                </span>
              </div>
            </div>
            <!-- Feature card end -->
          </div>
        </div>
      </div>
      <h3 style="height:200px" class="pt-5 align-middle" v-else>
        You have not enrolled in any course
      </h3>
    </div>

    <div id="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import header from "../shared/Header.vue";
// import menu from '../shared/MenuBar.vue'
import myCourseHeader from "./mycourseComponent/myCourseHeader.vue";
import footer from "../shared/footerDetails.vue";
import spinner from "../shared/spinner.vue";
// import rating from '../shared/rating.vue'

export default {
  components: {
    "app-header": header,
    "app-myCourseHeader": myCourseHeader,
    "app-footer": footer,
    "app-spinner": spinner,
    // 'app-rating':rating
    // 'app-menu':menu
  },
  data() {
    return {
      myCourses: [],
      courseId: null,
      isDataFetching: false,
    };
  },
  methods: {
    showLearningPage(index) {
      // console.log(index)
      this.courseId = this.myCourses[index]._id;

      this.$router.push("/learning/" + this.courseId);
    },
  },

  mounted() {
    console.log("naman");
    this.isDataFetching = true;
    console.log(this.$store.state.enrolledCourse);
    if (this.$store.state.enrolledCourse == null) {
      var val = localStorage.getItem("dataStatsAuthToken");
      console.log(val);
      axios({
        method: "GET",
        url: this.$store.state.courseApi.getEnrolledCourses,
        headers: { authorization: val },
      })
        .then((resData) => {
          console.log(resData);

          this.myCourses = resData.data.useCaseDetails;
          this.isDataFetching = false;
          // console.log(this.myCourses)
        })
        .catch((err) => {
          // console.log(err)
          err;
        });
    } else {
      this.myCourses = this.$store.state.enrolledCourse;
      this.isDataFetching = false;
    }
  },
};
</script>

<style scoped>
.myCourse {
  height: 100vh;
}

#header {
  height: 9%;
}

a {
  cursor: pointer;
  color: #ff6400;
}
p {
  margin-bottom: 0rem;
}

#header {
  z-index: 2;
}

.card {
  width: 270px;
}

.rating {
  bottom: 0;
  right: 0;
}
</style>
