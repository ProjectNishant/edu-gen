<template>
  <div class="mx-4 my-5">
      <div class="row">
          <div class="col-md-12 d-flex justify-content-center">
              <div class=" w-md-75 w-100">
<div class=" ">
  <div class="">
    <div class="d-none d-md-flex justify-content-center">
    <img :src="details.imgURL" height="300" class="w-md-50 mx-4">
    </div>
    <div class="d-block d-md-none ">
    <img :src="details.imgURL"  class="img-fluid">
    </div>


    <h4 class="d-none text-center mt-5 pt-4 d-md-block">{{details.heading}}</h4>
    <h5 class="mt-3">Starting From:<span>{{details.startDate}}</span></h5>
    <h5 class="d-block d-md-none">{{details.heading}}</h5>
     <h6 class="d-none d-md-flex justify-content-left pt-2">
       <span style="font-size:24px;border-bottom: 2px solid black">About {{details.technology}} Hackathone</span>
     </h6>

       <p class="d-block d-md-none justify-content-left pt-2">
       <strong style="font-bold:12px;border-bottom: 2px solid black">About {{details.technology}} Hackathone</strong>
     </p>
    
    <div class="py-2 mb-2  desc">
     <p class="text-justify"> {{details.description}}</p>
      </div>
    <h6>
      Technology:&nbsp;
    {{details.subTechnology}}
    </h6>


    <!-- <p class=" card-text">From <strong class="text-secondary">"{{details.startDate}}"</strong > To <strong class="text-secondary">"{{details.endDate}}"</strong></p> -->
   <div class="d-flex justify-content-center">
   <button @click="participate(details._id)" class="rounded-pill btn btn-success">Participate</button>
   </div>
  </div>
</div>

              </div>
      </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import {bus} from '../../../main.js'


export default {

    data(){
        return {
            details:null
        }
    },

    created(){
        this.getHackathone()
    },
    methods:{
        participate(id){
            id
            var val = localStorage.getItem('dataStatsAuthToken')
            if(val){
                console.log("nmana")
                console.log(id)
                 axios({
        method: "PATCH",
        url: this.$store.state.courseApi.enrollForHackathone,
        headers: { authorization: val },
      }).then(res=>{
          console.log(res)
            this.$swal({
          title: 'Participated Successfully',
        //   type: 'success',
        //   input: 'text',
        //   inputPlaceholder: 'Enter your name here',
          showCloseButton: true,
        });
      })
        }
            else{
                console.log("naman")
                bus.$emit('openlogin')
            }

        },
         getHackathone(){
                axios.get(this.$store.state.courseApi.getHackathone).then(res=>{
                    console.log(res.data)
                    // this.categories=res.data.categories
                    console.log(this.$route.params.name)
                    var hackthones=res.data.hackathon
                    for(let hack of hackthones){
                        if(hack.technology == this.$route.params.name){
                            console.log(hack)
                            this.details=hack
                        }
                    }
                })
            }
    }

}
</script>

<style>
@media (min-width: 1024px) {
  
  .desc{
    column-count: 3;
    column-gap: 30px;
    text-align: justify;
  }
}
</style>