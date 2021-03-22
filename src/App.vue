<template>
  <div>
    <router-view></router-view>
    <!-- <app-bottomCard style="right:0;bottom:0;position:fixed"></app-bottomCard> -->
  </div>
</template>

<script>
// import 'bottomCard' from './components/shared/bottomCard.vue'
export default {
  name: "app",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.stdColor {
  color: #ff6400;
}
</style>