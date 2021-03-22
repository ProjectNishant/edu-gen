<template>
  <div>
    <h5 class="text-center">Topic: {{ name }}</h5>
    <div class="pt-4 embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="url" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main.js";

export default {
  data() {
    return {
      url: null,
      name: null,
    };
  },
  mounted() {
    bus.$on("changeTut", (i) => {
      this.url =
        "https://www.youtube.com/embed/" +
        this.details[i].tutorialDetails.video;
      this.name = this.details[i].tutorialDetails.topicName;
    });
  },
  props: ["details"],
  created() {
    console.log(this.details);
    this.url = this.details[0].tutorialDetails.video;
    this.name = this.details[0].tutorialDetails.topicName;
  },
};
</script>

<style scoped></style>
