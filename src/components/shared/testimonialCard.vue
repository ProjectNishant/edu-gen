<template>
  <div class="mb-4">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title d-flex">
          <h3
            class="align-items-center d-inline-flex nameTitle justify-content-center"
            :class="{
              'bg-primary text-white': index % 7 == 1,
              'bg-secondary text-white': index % 7 == 2,
              'bg-success text-white': index % 7 == 3,
              'bg-danger text-white': index % 7 == 4,
              'bg-warning text-white': index % 7 == 5,
              'bg-dark text-white': index % 7 == 6,
              'bg-primary text-white': index % 7 == 0,
            }"
          >
            {{ details.username[0] }}
          </h3>
          <span class="ml-3 d-flex align-items-center"
            >{{ details.username }}
          </span>
        </h5>
        <h5 class="card-text text-gray ">
          <small class="pb-2 font-weight-bold border-secondary border-bottom">{{
            details.course
          }}</small>
        </h5>

        <p class="pt-2" v-if="!showScroll">
          {{ details.summary | truncate(100, "...") }}
          <span
            v-if="val.length > 100 && !showScroll"
            class="text-primary font-weight-bold"
            @click="showScroll = true"
            >Read more</span
          >
        </p>

        <p class="pt-2 scroll my-2" v-else>
          {{ details.summary }}
          <!-- <span v-if="val.length>100 && !showScroll" class="text-primary font-weight-bold" @click="showScroll=true">Read more</span> -->
        </p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val:
        " Lorem Ipsum is ssssimply  text of the prsasd asd asd aqsdsdas asd aasd a sdas d as dasda sd asd as sad as df saf",
      showScroll: false,
    };
  },
  props: ["details", "index"],
  mounted() {
    console.log(this.details);
  },
};
</script>

<style scoped>
.nameTitle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.scroll {
  height: 110px;
  overflow-y: scroll;
}

.card {
  height: 270px;
}

.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 1s all;
}
</style>
