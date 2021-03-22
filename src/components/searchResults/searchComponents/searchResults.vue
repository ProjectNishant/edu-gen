<template>
    <div class="container pt-3 ">
        <!-- <div class="card bg-light w-50 pr-5 mr-3"> -->
            <div class="card-body pl-5 ml-3">
        <h3 class="text-secondary"><i class="fa fa-search pr-3 text-secondary" aria-hidden="true"></i> {{totalValues}} results for '{{$route.params.value}}'</h3>
            </div>
        <!-- </div> -->
        </div>
</template>

<script>
export default{
    props:['totalValues'],
    mounted(){
        // console.log("naman")
        // console.log(this.totalValues);
        
    }
}
</script>

<style scoped>
 @media (min-width:"576px") {
     .card-body{
     padding-left: 20px;
    }
 }

 @media (max-width:"576px") {
     .card-body{

    }
    h3{
        font-size: 15px;
    }
 }
    
</style>