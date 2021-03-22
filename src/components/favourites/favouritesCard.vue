<template>
    <div class="container">


    <div class="row" >
        <div class="col-md-8">
      <div  class="card mt-5 ml-3" style="height:200px" >
                <div class="card-horizontal">
                    <div class="img-square-wrapper position-relative">
                        <img class="" style="height:200px" width="200px" :src="course.url" alt="Card image cap">
                        <i class="fa fa-play-circle position-absolute text-white" aria-hidden="true"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Course Name: {{course.courseName}}  <small class="pl-5">Provided By: {{course.companyName}}</small></h5>
                        <p class="card-text pl-3">
                       
                        <span class="row">
                        <p class="text-success "> Start Date: {{course.startDate}}</p>
                        <h5 class="pl-5 ml-5">Price: {{course.price - course.discount}}</h5>
                        </span>
                        
                        
                        <span class=" text-danger row">End Date: {{course.endDate}} <h5 class="pl-5 ml-5"><app-rating :rating="course.rating"></app-rating></h5></span>
                       
                       
                       <span class="row"> 
                       <span class="col-md-12"> <a class="pt-2 text-info d-flex justify-content-end"  @click="$router.push('/courseDetails/'+course._id)">Vew Course <i class="fa fa-long-arrow-right pl-3 pt-1" aria-hidden="true"></i></a> </span>
                       </span>
                        </p>

                    </div>
                </div>
            </div>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import rating from '../shared/rating.vue'
import {bus} from '../../main.js'

export default {
    props:['cardId'],
    data(){
        return{
            course:null,
        }
    },
    components:{
        'app-rating':rating

    },
    mounted(){
        console.log(this.cardId)
        axios.get('https://cors-anywhere.herokuapp.com/https://boiling-garden-13643.herokuapp.com/course/courseDescription/'+this.cardId).then(res=>{
            console.log(res.data)
            this.course=res.data
            bus.$emit('dataFetched')
        })
    }
}
</script>

<style scoped>
.card-horizontal{
        display:flex;
        flex: 1 1 auto;
    }

    a{
        cursor: pointer;
    }

</style>