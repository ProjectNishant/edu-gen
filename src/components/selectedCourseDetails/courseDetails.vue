<template>
  <div>
    <div>
      <app-header></app-header>
      <app-menu></app-menu>
    </div>
    <div v-if="!isDataLoading">
      <div>
        <app-courseBanner
          :bannerDetails="courseBannerDetails"
        ></app-courseBanner>
      </div>
      <app-program
        :programOverviewDetails="programOverviewDetails"
      ></app-program>
      <app-courseCarriculum
        :courseBannerDetails="courseBannerDetails"
        :topicDetails="topicDetails"
      ></app-courseCarriculum>
      <app-career></app-career>
      <app-footer></app-footer>
    </div>

    <div v-else class="pt-5 mt-5 h-100 d-flex justify-content-center">
      <app-spinner></app-spinner>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import courseCurriculum from "./selectedCourseDetailsComponents/courseCurriculam.vue";
import courseBanner from "./selectedCourseDetailsComponents/courseBanner.vue";
import Header from "../../components/shared/Header.vue";
import menu from "../../components/shared/MenuBar.vue";
import programOverview from "./selectedCourseDetailsComponents/programOverview.vue";
import careerImpact from "./selectedCourseDetailsComponents/careerImpact.vue";
import footer from "../../components/shared/footerDetails.vue";
import spinner from "../../components/shared/spinner.vue";

export default {
  components: {
    "app-courseBanner": courseBanner,
    "app-header": Header,
    "app-program": programOverview,
    "app-courseCarriculum": courseCurriculum,
    "app-career": careerImpact,
    "app-footer": footer,
    "app-spinner": spinner,
    "app-menu": menu,
  },
  data() {
    return {
      id: Number,
      courseBannerDetails: {},
      programOverviewDetails: {},
      topicDetails: [],
      isDataLoading: false,
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.isDataLoading = true;
    axios
      .get(this.$store.state.courseApi.getCourseDetails + this.id)
      .then((resData) => {
        console.log(resData);
        this.courseBannerDetails = {
          brochureURL: resData.data.brochureURL,
          courseName: resData.data.courseName,
          price: resData.data.price,
          discount: resData.data.discount,
          startDate: resData.data.startDate,
          endDate: resData.data.endDate,
          summary: resData.data.summary,
          imageUrl: resData.data.url,
          introUrl: resData.data.introURL,
          noOfProjects: resData.data.noOfProjects,
          noOfLiveSessions: resData.data.noOfLiveSessions,
          specialisations: resData.data.specialisations,
          topic: resData.data.topic,
          category: resData.data.category,
          startCourseTime: resData.data.courseStartTime,
          durationOfCourse: resData.data.durationOfCourse,
        };
        this.programOverviewDetails = {
          features: resData.data.courseFeatures,
          durationOfSession: resData.data.durationOfSession,
          noOfLiveSessions: resData.data.noOfLiveSessions,
          noOfWeeks: resData.data.noOfWeeks,
          noOfProjects: resData.data.noOfProjects,
          noOfAssignments: resData.data.noOfAssignments,
        };

        this.topicDetails = resData.data.trainerTopics;

        this.isDataLoading = false;
      });
  },
};
</script>
