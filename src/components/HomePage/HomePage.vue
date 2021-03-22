<template>
  <div style="">
    <div class="position-relative">
      <!-- <div v-if="!removeSalesBar">
        <app-sales @remove="removeBar"></app-sales>
      </div> -->

      <app-Header></app-Header>
      <app-menu></app-menu>

      <app-bannerImage></app-bannerImage>
      <app-featureCard></app-featureCard>

      <app-cardSlider></app-cardSlider>
      <div class="">
        <app-keyHighlights></app-keyHighlights>

        <app-testimonial></app-testimonial>
        <app-trainer></app-trainer>
      </div>
      <div class="position-fixed mb-3 mr-3" style="bottom:0;right:0">
        <app-bottomCard></app-bottomCard>
      </div>
      <app-footer></app-footer>
    </div>

    <!-- Book A free demo Ends -->
  </div>
</template>

<script>
import menu from "../../components/shared/MenuBar.vue";
import axios from "axios";

import { required, email } from "vuelidate/lib/validators";
// import salesDetails from "../../components/shared/saleDetails.vue";
import keyHighlights from "../../components/shared/keyHighLights.vue";
import bottomCard from "../../components/shared/bottomCard.vue";

// import Card from '../shared/Card.vue'
import cardSlider from "../cardSlider/slider.vue";
// import axios from 'axios'
// import spinner from '../../components/shared/spinner.vue'
import FeatureCard from "../../components/shared/FeatureCard.vue";
// import WebBanner from '../../components/shared/webBanner.vue'
import Header from "../../components/shared/Header.vue";
import footer from "../../components/shared/footerDetails.vue";
import bannerImage from "../../components/shared/bannerImage.vue";
import testimonial from "../../components/shared/testimonial.vue";
import trainer from "../trainerDetails/trainer.vue";

// import {bus} from '../../main.js'
export default {
  mounted() {
    setTimeout(() => {
      window.$("#demo").modal("toggle");
    }, 20000);
  },

  components: {
    // "app-sales": salesDetails,
    // 'app-card':Card,
    // 'app-spinner':spinner,
    "app-menu": menu,
    "app-keyHighlights": keyHighlights,

    "app-bannerImage": bannerImage,
    "app-featureCard": FeatureCard,
    "app-bottomCard": bottomCard,
    // 'app-courseBanner':WebBanner,
    "app-Header": Header,
    "app-footer": footer,
    "app-testimonial": testimonial,
    "app-cardSlider": cardSlider,
    "app-trainer": trainer,
  },
  data() {
    return {
      removeSalesBar: false,
      isCardDataFetched: false,
      cardDetailsSets: null,
      courseTypes: [],
      addColor: false,
      email: null,
      err: null,
      showSuccessMessage: false,
      message: null,
    };
  },

  validations: {
    email: {
      email,
      required,
    },
  },
  created() {
    console.log(this.$router.currentRoute.path);
    //             axios.get('https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/course/courseDetailsNew')
    //             .then(resData=>{
    //                 console.log(resData)
    //                 this.cardDetailsSets=resData.data;
    //                 this.courseTypes=Object.keys(this.cardDetailsSets)
    //                 console.log(this.courseTypes)
    //                 console.log(this.courseTypes.length)
    //                 console.log(this.cardDetailsSets);
    //                 this.isCardDataFetched=true
    //                 // if(resData.status == 200){
    //                 //     this.isCardDataFetched=true
    //                 // }
    //                 // else{
    //                 //     this.isCardDataFetched=false
    //                 // }
    // })
    //             .catch(err=>{
    //                 console.log(err)
    //                 this.isCardDataFetched=false
    //             })
  },
  methods: {
    bookUser(invalid) {
      console.log(invalid);
      if (invalid) {
        this.err = true;
      } else {
        this.err = false;
        axios
          .post(this.$store.state.courseApi.bookFreeDemo, { email: this.email })
          .then((res) => {
            console.log(res);
            if (res.data.code == 3) {
              this.message = res.data.message;
              this.showSuccessMessage = true;
              this.email = null;
              setTimeout(() => {
                this.showSuccessMessage = false;
              }, 3000);
            }
          });
      }
    },
    removeBar(val) {
      // console.log(val)
      val;
      this.removeSalesBar = true;
    },
  },
};
</script>

<style scoped>
.titleFontStyle {
  font-family: Arial, Helvetica, sans-serif;
}
.contentFontStyle {
  font-family: normal;
}
</style>
