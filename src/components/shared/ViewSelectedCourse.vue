<template>
  <div>
      <app-header></app-header>
      <app-menu></app-menu>

        <div v-if="courses">
    <app-allCards :type="type" :courses="courses"></app-allCards>
    </div>
    <div v-else class="d-flex justify-content-center my-5" style="height:200px">
        <app-spinner></app-spinner>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import menu from './MenuBar.vue'
import axios from 'axios'
import allCards from './allCards.vue'
import spinner from './spinner.vue'
import footer from './footerDetails.vue'
export default {
    components:{
        'app-header':Header,
        'app-menu':menu,
        'app-allCards':allCards,
        'app-spinner':spinner,
        'app-footer':footer
    },
    data(){
        return{
            courses:null,
            type:null
        }
    },
    created(){
        console.log(this.$route.params.name)

          axios.get(this.$store.state.courseApi.getCourses)
            .then(resData=>{
                console.log(resData)
                // this.courses=Object.keys(resData.data)
                this.type = this.$route.params.name

                this.courses=resData.data[this.type]
                console.log(this.courses)
                this.isCardDataFetched=true
               
            })
            .catch(err=>{
                err
                this.isCardDataFetched=false
            })
    }
}
</script>

<style>

</style>