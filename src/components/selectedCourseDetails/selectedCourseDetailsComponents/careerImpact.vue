<template>
    <div class="careerImpacr pt-2" >
    <div class="container">
        <div class="pt-5  text-black position-relative">
            <p class="display-4 d-none d-md-block">
                <small>
                Career Impact
                </small>
            </p>

             <h5 class=" d-block d-md-none">
                Career Impact
            </h5>
        </div>

        <div class="row pt-2">
           


            
            <div class="  container pt-5">
                <div class="row">
                <div class="col-md-3 d-flex justify-content-center pt-2 pb-3 col-12" v-for="(cardDetail,index) in cardDetails" :key="index">
                    <div class="card w-100">
                          <img class="card-img-top" :src="cardDetail.image" alt="Card image cap">
                        <div class="card-body">
                            <p><small>{{cardDetail.description}} </small></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            cardDetails:[]
        }
    },
    mounted(){
            this.cardDetails=[
                     {
                image:require('../../../assets/careerCouncellingCI.png'),
                title:'Career Counselling',
                description:' Confused about your career? Be rest assured. Get insightful tips and advices for all stages of your career. You career is unique, own it right now.'
                    },
                {
                image:require('../../../assets/interviewPreprationCI.png'),
                title:'Interview Preparation',
                description:' Preparing for interviews? Worry not. Practice on the questions previously asked in companies. Get recent interview experiences before your interview along with mentorship for interview preparations.'
            },
            {
                image:require('../../../assets/industryProjectCI.png'),
                title:'Industry Project',
                description:'Work on real-world projects in the IT industry and earn while you learn. Learn by doing hands-on exercises that lead to real skills mastery.'
            },{
                image:require('../../../assets/supportCI.png'),
                title:'Support',
                description:'Reach out to our support team 24/7 and have your doubts answered quickly so you can keep learning.'
            }
            ]
        }
    
}
</script>

<style scoped>
    .careerImpacr{
        /* background-image: linear-gradient(135deg, #4661db, #4fb4c9); */
        /* height: 600px; */
        background: #f5f5f5;
    }

    .card{
        width: 15rem;
        min-height:315px;
        max-width: 250px;
    }
    .card:hover{
        opacity: 1;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }

    @media (min-width: 576px) {
        .careerImpacr{
            height:600px
        }
    }

    @media (max-width: 576px) {
        .card{
            opacity:1
        }
    }

</style>