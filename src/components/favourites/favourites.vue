<template>
    <div>
        <app-header></app-header>
        <app-menu></app-menu>
        <div v-if="favourites.length != 0">
        <div v-if="!isDataFetched" class="d-flex justify-content-center mt-5 pt-4">
        <app-spinner></app-spinner>
        </div>
        <div v-for="(fav,index) in favourites" :key="index">
        <app-courseCard :cardId="fav"></app-courseCard>
        </div>
        </div>

        <div v-else class="container">
            <div class="card shadow mt-5">
              <div class="card-body">
               <h5 class="d-flex justify-content-center"> Your Wishlist is Empty.<u @click="$router.push('/dashboard')" class="text-primary pl-2 pr-2"> Click Here </u> to view more courses. </h5>
              </div>
            </div>
        </div>

    </div>

</template>

<script>
    import {bus} from '../../main.js'
    import Header from '../shared/Header.vue'
    import menu from '../shared/MenuBar.vue'
    import spinner from '../shared/spinner.vue'
    import card from './favouritesCard.vue'
export default {
    data(){
        return {
            favourites:[],
            isDataFetched:false
        }
    },
    components:{
        'app-header':Header,
        'app-menu':menu,
        'app-courseCard':card,
        'app-spinner':spinner
        },
     
        mounted(){
            this.favourites=JSON.parse(localStorage.getItem("dataStatsFavourite"))
            console.log(this.favourites.length)
            if(this.favourites.length == 0){
                this.isDataFetched=true
            }

            bus.$on('dataFetched',()=>{
                this.isDataFetched=true
            })
        }
    
}
</script>

<style scoped>
    u{
        cursor: pointer;
    }
</style>