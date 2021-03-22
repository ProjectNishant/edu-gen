
<template>

  <div class=""> 
<div class="text-lg bg-gray-200">Naman</div>
      <!-- <button type="button" class="slick-prev" ref="prevArrow"></button> -->
      <button type="button" @click="next()"></button>
      <Slick ref="slick" :options="slickOptions">
          <div v-for="(n,index) in 9" :key="index">
              <img src="../../assets/6308.jpg" height="150px">
          </div>
    
          <!-- <div>
              <img src="../../assets/banner1.jpg" height="150px">
          </div><div>
              <img src="../../assets/banner1.jpg" height="150px">
          </div><div>
              <img src="../../assets/banner1.jpg" height="150px">
          </div><div>
              <img src="../../assets/banner1.jpg" height="150px">
          </div><div>
              <img src="../../assets/banner1.jpg" height="150px">
          </div> -->
      </Slick>
      </div> 

</template>



<script>
import Slick from 'vue-slick';
// import 'node_modules/slick-carousel/slick/slick.css';


   export default {
     data(){
         return{
         slickOptions: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          autoplaySpeed: 2000,       
          prevArrow: '#gallery-prev',
        nextArrow: '#gallery-next',
            },

         }
     },
     components: {Slick},
    
          methods: {
        next() {
            this.$refs.slick.next();
        },
 
        prev() {
            this.$refs.slick.prev();
        },
 
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
    }
        } 
</script>

<style scoped>
 
</style>