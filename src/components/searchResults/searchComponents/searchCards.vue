<template>
    <div class="container pt-5">
        <div class="row no-gutters" @click="sendToCourseDetails(search._id)">
        <div class="col-md-6 col-12 card ">
                <div class="row no-gutters">
                    <div class="col-md-5 col-12 w-100">
                        <img class="h-100" style="width:100% " :src="search.url" alt="Card image cap">
                    </div>
                    <div class="card-body w-100 col-md-7 col-12" style="">
                        <h5 class=" card-title">{{search.courseName}}</h5>
                        <p><small>{{search.summary}}</small></p>
                            <p class="row no-gutters pt-2">
                        <span class="col-md-7 col-7"><strong class="pr-2">Starts From</strong>{{search.startDate}}</span>
                        <span class="col-md-5 col-5">
                            <p v-if="search.discount != 0">
                                <del class="font-weight-bold pl-1">{{'Rs.'+search.price}}</del><span class="ml-2  badge badge-warning">Rs.{{ search.price-search.discount}}</span>
                            </p>

                            <p v-if="search.discount == 0">
                                <span class="font-weight-bold pl-1">{{'Rs.'+search.price}}</span>
                            </p>
                        </span>
                            </p>
                            <div class="pt-3"><app-rating :rating="search.rating"></app-rating></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rating from '../../shared/rating.vue'
export default {
    props:['search'],
    mounted(){
        console.log(this.search)
    },
    components:{
        'app-rating':rating
    },
    methods:{
        sendToCourseDetails(id){
            this.$router.push('/courseDetails/'+id)
        }
    }
}
</script>

<style lang="less" scoped>
    p{
        padding: 0;
        margin: 0;
    }
    .card-horizontal{
        cursor: pointer;
    }
    .card-body{
        // top: -15px;
        left: 10px;
    }

    @media (max-width:"576px") {
        .card{
            height: 150px;
        }
    }
</style>