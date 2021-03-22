<template>
<div class="mt-3 d-flex p-md-5 justify-content-center container-fluid">
    <!-- <h3 class="text-center theme_color">Our Features</h3> -->
        <!-- <hr> -->

    <!-- <div class="pt-3 row">
        <div class="pt-3 col-md-3 d-flex justify-content-center crd " v-for="(cardDetail,index) in featureCardDetails" :key=index>
    <div class="shadow card feature position-relative">
        <img :src="cardDetail.image" height="125px" class="card-img-top w-100 " >
       
        <p class="card-body ">
        {{cardDetail.description}}
     
    </p>
    </div>
    </div>
    </div> -->
    

    <div class="pl-md-5 row">
        <div class=" col-md-3 col-12" v-for="(feature,index) in featureCardDetails" :key="index">
            <div class="row">
                <div class="col-md-2 col-2">
            <img :src="feature.image" class="img-fluid ">
                </div>
            <h6 class=" col-9 d-inline-block col-md-10">{{feature.title}}</h6>
            </div>
        </div>
    </div>

<hr/>



   

</div>
</template>

<script>


export default{
    data(){
        return{
                featureCardDetails:[]
            }
    },
    mounted(){
        // this.featureCardDetails=
        // [
        // {image:require('../../assets/trainingFeature.png'),title:'Training',description:'Get trained in latest technologies from our highly qualified and experienced trainers.'},
        // {image:require('../../assets/mentorshipFeature.png'),title:'Mentorship',description:'Get 1:1 sessions with industry experts to become interview ready.'},
        // {image:require('../../assets/useCaseFeature.png'),title:'Use Case',description:'Work on exciting real-world use-cases during your training to get hands-on practice.'},
        // {image:require('../../assets/supportCI.png'),title:'Support',description:'Reach out to our support team 24/7 and have your doubts answered quickly so you can keep learning.'},
        // ]

        this.featureCardDetails = [
            {image:require('../../assets/projects.png'),title:'Project based Learning.'},
            {image:require('../../assets/doubt_clearing.png'),title:'1-1 mentorship and solve your doubts'},
            {image:require('../../assets/lifeTimeAccess.png'),title:' Recordings and content available for lifetime.'},
            {image:require('../../assets/placement_assistance.png'),title:'Placement Assistance'},
        ]
    }

}
   
</script>

<style scoped>
.feature{
    background: #e6effc;
}
/* .crd>.card{
    opacity: 0.7;
} */
.crd>.card:hover{
    opacity: 1;
}


 
    /* zoom effect on feature card */

div .crd :hover{
      -ms-transform: scale(1.03); 
   -webkit-transform: scale(1.03); 
  transform: scale(1.03); 
}

div.crd>div.card>img{
    transform: scale(1);
}

div.crd>div.card>p{
    transform: scale(1);
} 
.theme_color{
    color: #ff6400;
}

.card{
    height:300px;
    max-width:270px;
}

 @media (min-width: 575.98px) { 
         .card{
             opacity:1
         }
     }

@media (min-width: 579px) and (max-width: 1920px) {
   .crd>.card{
    opacity: 0.7;
}
}




</style>