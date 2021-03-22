<template>
  <div>
    <app-header></app-header>
    <app-menu></app-menu>

    <div style="background:#f5f5f5; ">
      <div class="container-fluid p-md-2">
        <div class="row w-100  h-100 d-md-flex ">
          <div class="col-md-12">
            <!-- <div class="container">
              <app-liveSession></app-liveSession>
            </div> -->
          </div>

          <div class="col-md-7 col-12">
            <app-learningVideo></app-learningVideo>
          </div>

          <div class="col-md-5 col-12">
            <app-learningSchedule></app-learningSchedule>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../shared/Header.vue";
import MenuBar from "../shared/MenuBar.vue";
import learningScheduleVue from "./learningComponents/learningSchedule.vue";
import learningVideoVue from "./learningComponents/learningVideo.vue";
// import liveSession from "./learningComponents/liveSessionInfo.vue";
import axios from "axios";
import { bus } from "../../main.js";
export default {
  components: {
    "app-learningSchedule": learningScheduleVue,
    "app-learningVideo": learningVideoVue,
    // "app-liveSession": liveSession,
    "app-header": Header,
    "app-menu": MenuBar,
  },
  created() {
    // var courseId=this.$route.params.id
    // axios.get('https://boiling-garden-13643.herokuapp.com/course/getsessionDetails/'+courseId).then(res=>{
    //     console.log(res)
    // })

    axios
      .get(
        "https://boiling-garden-13643.herokuapp.com/course/getsessionDetails/" +
          this.$route.params.id
      )
      .then((res) => {
        console.log(res, "asdasd");
        // console.log(res.data.traininig)
        bus.$emit("classSchedule", res.data.training);
        bus.$emit("nextSession", res.data.nextSession);
      });
  },
};
</script>

<style scoped>
.row {
  /* display:block */
}

.container-fluid {
  /* padding-left: 0;
        padding-right: 0; */
}
</style>
