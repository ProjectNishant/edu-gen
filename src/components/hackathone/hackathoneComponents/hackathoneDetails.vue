<template>

<div class="container">

<div class="my-4">
    <iframe  width="100%" height="350" src="https://www.youtube.com/embed/TFrFx7H5ZI8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

    <div class="mx-0 row">
        <div class="my-3 col-md-3" v-for="(h,index) in hackathones" :key="index">
            <div class="d-flex w-100 justify-content-center">
                <div class="card position-relative" style="width: 15rem;">
                  <div class="px-2 py-2">
                  <img class="rounded card-img-top img-fluid" :src="h.imgURL" alt="Card image cap">

                    <!-- <p class="card-title">
                       <strong> {{h.heading}}</strong>
                    </p> -->
                    <p class="card-text">From: 
                    <strong>{{h.startDate}}</strong>
                    </p>

                    <p class="card-text">
                    <span>Technology:</span> 
                    <span class="pl-2 d-inline">{{h.subTechnology}}</span>
                    </p>

                    <div class="link">
                        <strong @click="$router.push(`/hackathone/${h.technology}`)">View Details</strong>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <app-instruction></app-instruction>
</div>
</template>

<script>
import axios from 'axios'
import instruction from './instruction.vue'

// import countdown from '../../shared/countDown.vue'

export default {
   data(){
       return {
           hackathones:[]
       }
   },
   components:{
       'app-instruction':instruction

    },
    created(){
        this.getHackathone()
    },
    // props:{
    //     categories:{
    //         type:Array,
    //         default:null
    //     }
    // },
    methods:{
            getHackathone(){
                axios.get(this.$store.state.courseApi.getHackathone).then(res=>{
                    console.log(res.data)
                    this.hackathones=res.data.hackathon
                    // this.hackthones=res.data.hackthones
                })
            }
    }
}

</script>

<style  scoped>
.countHeading{
    top:0;
    /* background: black;    */
    background: rgba(255, 255, 255,0.75);
    /* opacity: 0.2; */
}
    .card-header{
        cursor:pointer
    }

    .link{
        cursor: pointer;
        color: #ff6400;
        float: right;
    }

    .link:hover{
        opacity: 0.75;
    }

    .category{
        background: #f8f9fa;
        cursor: pointer;
    }

    .category:hover{
        background: #d6d6d6;
        color:white;
        transition: all 0.2s;
    }
</style>