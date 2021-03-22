<template>
  <div class="couser_carricullum text-white  pb-5">
    <div class="container pb-5">
      <div class="row ">
        <div class="col-md-12 pt-5">
          <span class="row text-dark pl-3">
            <h2 class=" font-weight-normal d-none d-md-block">
              {{ courseBannerDetails.courseName }}. Curriculum
            </h2>
            <h4 class="font-weight-normal d-block d-md-none">
              {{ courseBannerDetails.courseName }}. Curriculum
            </h4>
          </span>

          <p class="text-dark">{{ courseBannerDetails.summary }}</p>
          <div class=" ">
            <div class="pt-5 pl-md-5" style="">
              <h5 class=" pl-md-5 ml-md-5 text-secondary">
                Topics You Will Learn-
              </h5>
              <div
                class="row pl-md-5 ml-md-5 pt-3  text-dark  mb-2 dropdown show"
                v-for="(topic, index) in topicDetails"
                :key="index"
              >
                <div
                  class="card ml-5 w-75 bg-light"
                  data-toggle="collapse"
                  :href="'#' + index"
                  role="button"
                  aria-expanded="false"
                  :aria-controls="index"
                >
                  <div class="card-body">
                    <h5 class="card-title pl-2 ">
                      Topic-{{ index + 1 }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                        topic.topicNames
                      }}
                      <span class="float-right"
                        ><i
                          class="pt-3 pr-5 fa fa-chevron-circle-down fa-2x"
                          aria-hidden="true"
                        ></i
                      ></span>
                    </h5>
                    <p class="card-text mb-3">
                      <i
                        class="fa fa-hand-pointer-o pl-2"
                        aria-hidden="true"
                      ></i>
                      <small>Click to view description</small>
                    </p>
                  </div>
                </div>

                <div style="" class="pl-5 collapse list" :id="index">
                  <div class="card card-body">
                    <ul class="list-group">
                      <li
                        class="list-group-item"
                        v-for="(desc, index) in topic.topicDescriptions"
                        :key="index"
                      >
                        {{ desc }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courseBannerDetails", "topicDetails"],

  created() {
    console.log(this.topicDetails);
    var description = "";
    this.topicDetails.forEach((val, index) => {
      var descriptions = [];
      console.log(val.topicDescriptions.length);
      for (let i = 0; i < val.topicDescriptions.length; i++) {
        if (val.topicDescriptions[i] == "~") {
          descriptions.push(description);
          description = "";
        } else {
          description = description + val.topicDescriptions[i];
        }
      }
      this.topicDetails[index].topicDescriptions = descriptions;
    });
    console.log(this.topicDetails);
  },
};
</script>

<style scoped>
.couser_carricullum {
  background: linear-gradient(155deg, #c2dfff, #ebecf0);
}
.card-body {
  padding: 0rem;
}

@media (min-width: 1024px) {
  .list {
    width: 80%;
  }
}

@media (max-width: 576px) {
  .list {
    width: 85%;
  }
}
</style>
