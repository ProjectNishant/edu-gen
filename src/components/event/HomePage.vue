<template>
  <div id="home">
    <div v-if="!removeBar">
    <app-banner></app-banner>
    </div>
    <app-header></app-header>
    <app-slider></app-slider>
    <app-event-card-heading></app-event-card-heading>
    <app-event-cards></app-event-cards>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Header from "./Header.vue";
import Slider from "./Slider.vue";
import Footer from "../shared/footerDetails.vue";
import EventCardsHeading from "./EventCardsHeading.vue";
import {bus} from '../../main.js'
import EventCards from "./EventCards.vue";
export default {
  name: "HomePage",
  components: {
    appEventCards: EventCards,
    appHeader: Header,
    appFooter: Footer,
    appBanner: Banner,
    appSlider: Slider,
    appEventCardHeading: EventCardsHeading,
  },
  data(){
    return {
        removeBar:false
    }
  },

  mounted(){
    bus.$on('removeBar',()=>{
      this.removeBar=true
    })
  }
};
</script>
