<template>
    <div class="search_page">
        <div class="topBar">
        <app-header @searchResult="search"></app-header>
        <app-menu></app-menu>
        </div>
        <div style="">
            <div class="">
        <app-searchResult :totalValues=totalValues></app-searchResult>
            </div>     
        <div class=" ">
            <div class="searchCards"  v-for="(search,index) in searchResults" :key="index">
        <app-searchCards :search=search></app-searchCards>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import Header from '../shared/Header.vue'
import menu from '../shared/MenuBar.vue'
import searchResult from './searchComponents/searchResult.vue'
import searchCards from './searchComponents/searchCards.vue'
// import {bus} from '../../main.js'


    export default{
        data(){
            return {
                searchResults:null,
                totalValues:null
            }
        },

        components:{
            'app-header':Header,
            'app-searchResult':searchResult,
            'app-searchCards':searchCards,
            'app-menu':menu
        },
        methods:{
            search(val){
                this.searchResults=val
                // console.log(this.searchResults)
                this.totalValues=this.searchResults.length
            }
        },
        created(){
            // console.log('namankhurana')
            // console.log(this.$store.state.searchResults)
            this.searchResults=this.$store.state.searchResults
            this.totalValues=this.searchResults.length
}

    }

</script>

<style lang="less" scoped>
    .search_page{
        height:100vh;
    }

    .topBar{
        height: 20%;
    }
</style>