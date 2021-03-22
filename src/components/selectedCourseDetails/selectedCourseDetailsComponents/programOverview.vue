<template>
  <div class="container pt-5">
    <h1 class="pt-5 pb-2 pl-3 row">
      <span class="col-md-8 col-12">Program Overview</span>
    </h1>
    <div class="row">
      <div class="col-md-8">
        <p class="pl-1" style="font-size:32px">
          <span class="col-md-8"> Highlights</span>
        </p>
      </div>
    </div>

    <div class="pt-3 row">
      <div class="pl-4 col-md-8">
        <div class="row">
          <div
            class="col-md-6"
            v-for="(feature, index) in courseFeatures"
            :key="index"
          >
            <p class="pt-2">
              <span> <i class="fa fa-hand-peace-o" aria-hidden="true"></i></span
              ><span class="pl-3">{{ feature }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="pl-4 ">
        <div class="row ">
          <span class="col-md-6 col-6">
            <div class="shadow-lg courseDetails bgPrimary" style="">
              <h3 class="pt-4 font-weight-normal d-flex justify-content-center">
                {{ programOverviewDetails.durationOfSession }}
              </h3>
            </div>

            <p class="pt-2"><small>Learning Hours</small></p>
          </span>

          <span class=" col-md-6 col-6">
            <div class="pl-3">
              <div class="shadow-lg courseDetails bgPrimary" style="">
                <h3
                  class="pt-4 font-weight-normal d-flex justify-content-center"
                >
                  {{ programOverviewDetails.noOfProjects }}
                </h3>
              </div>
            </div>
            <p class="pt-2"><small>Case Study and Projects</small></p>
          </span>
        </div>

        <div class="pt-3 row">
          <span class="col-md-6 col-6">
            <div class="shadow-lg courseDetails bgPrimary" style="">
              <h3 class="pt-4 font-weight-normal d-flex justify-content-center">
                {{ programOverviewDetails.noOfLiveSessions }}
              </h3>
            </div>

            <p class="pt-2 pl-2"><small>Live Sessions</small></p>
          </span>

          <span class="col-md-6 col-6">
            <div class="pl-3">
              <div class="shadow-lg courseDetails bgPrimary pl-" style="">
                <h3
                  class="pt-4 font-weight-normal d-flex justify-content-center"
                >
                  {{ programOverviewDetails.noOfAssignments }}
                </h3>
              </div>
            </div>
            <p class="pt-2 d-flex justify-content-center">
              <small class="w-full text-center"> Assignments</small>
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseFeatures: [],
    };
  },
  props: ["programOverviewDetails"],
  mounted() {
    console.log(this.programOverviewDetails, "//////");
    console.log(this.programOverviewDetails.features.length);
    var feature = "";
    for (let i = 0; i <= this.programOverviewDetails.features.length - 1; i++) {
      if (this.programOverviewDetails.features[i] == "~") {
        this.courseFeatures.push(feature);
        feature = "";
      } else {
        feature = feature + this.programOverviewDetails.features[i];
      }
    }
    console.log(this.courseFeatures);
  },
};
</script>

<style scoped>
.courseDetails {
  /* background:#C2DFFF; */
  color: black;
  height: 80px;
  width: 80px;
  border-radius: 50%;
}

.bgPrimary {
  /* background: rgba(59,130,246,1); */
  background: #f5f5f5;
}
@media (max-width: 576px) {
  h1 {
    font-size: 25px;
  }
}
</style>
