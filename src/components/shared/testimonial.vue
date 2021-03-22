<template>
<div class="" >
     <!-- <div class="mx-0 part5 bg-muted row">
                    <svg viewBox="0 0 500 100" preserveAspectRatio="none" style=" width: 100%;">
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                            style="stroke: none; fill: #007bff;"></path>
                    </svg>
        </div> -->


        <!-- <div class="bg-primary">
    <div class="container pt-5 pb-5 position-relative">
<h4 style="" class="text-white"> Customer Testimonial:</h4>
<Slick    ref="slick" :options="slickOptions" >
    <div v-for="testimonial in testimonials" :key="testimonial.id">
        <div  class="pb-md-3 mt-md-3 ml-md-2 w-100 card text-secondary">
  <div class="card-body position-relative">
    <h6 class="mb-2 d-none d-md-inline-block card-subtitle text-primary">{{testimonial.summary}}</h6>
    <p class="mb-2 d-block d-md-none card-subtitle text-primary">{{testimonial.summary}}</p>
    <h5 class="pt-4 card-title position-absolute">{{testimonial.username}}</h5>
  </div>
</div>
</div>
</Slick> -->

    <!-- <div class="row mobile_view">
        <div class="col-12"  v-for="testimonial in testimonials" :key="testimonial.id">
             <div  class="pb-3 mt-3 ml-2 card text-secondary">
                <div class="card-body position-relative">
                <h6 class="pb-4 mb-2 card-subtitle text-primary">{{testimonial.summary}}</h6>
                <h5 class="pt-5 card-title position-absolute">{{testimonial.username}}</h5>
              </div>
            </div>
            </div>
        </div> -->

<!-- 
    </div>
        </div> -->


        <svg viewBox="0 0 500 90"  preserveAspectRatio="none" style=" width: 100%;">
                        <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                            style="stroke: none; fill:  rgba(59,130,246,1);; "></path>
                    </svg>

        <div class="testimonial" >
    <div class="container pb-5 position-relative">

<h4  class="text-white pl-md-4" style="font-family: Times New Roman, Times, serif;"> Customer Testimonial:</h4>
<Slick   class="row " ref="slick" :options="slickOptions" >
    <div v-for="(testimonial,i) in testimonials" :key="testimonial.id">
        <!-- <div  class="pb-3 mx-2 mt-3 ml-md-2 card text-secondary">
  <div class="card-body position-relative">
    <h6 class="mb-2 card-subtitle text-primary">{{testimonial.summary}}</h6>
    <h5 class="pt-4 card-title position-absolute">{{testimonial.username}}</h5>
  </div>
</div> -->
<div class="d-flex justify-content-center">
<app-testimonialCard :index="i" :details="testimonial"></app-testimonialCard>
</div>
</div>

</Slick>

    <!-- <div class="row mobile_view">
        <div class="col-12"  v-for="testimonial in testimonials" :key="testimonial.id">
             <div  class="pb-3 mt-3 ml-2 card text-secondary">
                <div class="card-body position-relative">
                <h6 class="pb-4 mb-2 card-subtitle text-primary">{{testimonial.summary}}</h6>
                <h5 class="pt-5 card-title position-absolute">{{testimonial.username}}</h5>
              </div>
            </div>
            </div>
        </div> -->


    </div>
    </div>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import axios from 'axios'
import testimonialCard from './testimonialCard.vue'
export default {
    data(){
        return {
            testimonials:[
             
            ],
            slickOptions: {
                 slidesToShow: 3,
                 dots:true,
                 slidesToScroll: 2,
                 autoplay: false,
                 arrows: true,
                 autoplaySpeed: 7000,  
                 infinite:false,
                 
                 responsive:[
                     {
                         breakpoint:576,
                         settings:{
                             slidesToShow:1,
                             slidesToScroll:1,
                             infinite:false,
                             dots:true
                         }
                     }
                 ]     
               
                   },
        }
    },
    components:{
        Slick,
        'app-testimonialCard':testimonialCard

    },
    mounted(){
    //     window.$(document).ready(function() { 
    // if (window.$(window).width() <=576 ) {
    //         console.log("naman")
    //            this.slickOptions= {
    //              slidesToShow: 1,
    //              dots:true,
    //              slidesToScroll: 1,
    //              autoplay: false,
    //              arrows: true,
    //              autoplaySpeed: 7000,       
    //                }
    //     }
    // });
    },
    methods: {
         // card slider methods
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
    },
    created(){
        axios.get(this.$store.state.courseApi.getTestimonial).then(res=>{
            this.testimonials=res.data
            // console.log(this.testimonials)
        });
        
    },
    beforeUpdate() {
        if (this.$refs.slick) {
            this.$refs.slick.destroy();
        }
    },
    updated() {
        this.$nextTick(function () {
            if (this.$refs.slick) {
                this.$refs.slick.create(this.slickOptions);
            }
        });
    },
}
</script>

<style scoped>
.testimonial{
           background: rgba(59,130,246,1);
}
    .slick-prev{
    
    background: black;
    }
    .card {
        border-radius:10px
    }
    .card-subtitle{
        /* color:purple */
    }
     @media (max-width: 768px) { 
            .mobile_view{
                display: block;
        } 
         .desktop_view{
                display: none;
            }
        }
     @media (min-width: 770px) and (max-width: 1980px) { 
        .desktop_view{
            display: block;
        }
           .mobile_view{
            display: none;
        } 
         }
    .card-title{
        bottom: 0%;
    }
    .card{
        min-height:195px;
    }
</style>