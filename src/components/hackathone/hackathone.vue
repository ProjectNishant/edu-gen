<template>
  <div>
      <div class="row ">
          <div class="col-md-12">
            <app-header></app-header>
            </div>
            <div class="col-md-12">
            <app-menu></app-menu>
            </div>
             <div class="col-md-12">
        <!-- <app-details ></app-details> -->
        <router-view></router-view>

        </div>
          <div class="col-md-12">
            <app-instructions></app-instructions>
          </div>
       
      </div>
      
  </div>
</template>

<script>
// import axios from 'axios'
import header from '../shared/Header.vue'
import menuBar from '../shared/MenuBar.vue'
// import hackathoneDetails from './hackathoneComponents/hackathoneDetails.vue'
import instruction from './hackathoneComponents/instruction.vue'
export default {
    components:{
        'app-instructions':instruction,
        // 'app-details':hackathoneDetails,
        'app-header':header,
        'app-menu':menuBar  
    },

      data(){
            return{
                categories:[],
                hackthones:[]
            }
        },

        mounted(){
            // this.getHackathone();
        },

        methods:{
            // getHackathone(){
            //     axios.get(this.$store.state.courseApi.getHackathone).then(res=>{
            //         console.log(res.data)
            //         this.categories=res.data.categories
            //         this.hackthones=res.data.hackthones
            //     })
            // }
        }
}
</script>

<style>

</style>