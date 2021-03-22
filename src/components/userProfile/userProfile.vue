<template>
    <div>
          <app-Header></app-Header>
        <app-menu></app-menu>
        <keep-alive>
            <component :is="selectedComponent">
                <app-profileView @showEdit="switchComponent"></app-profileView>
                <app-profileEdit ></app-profileEdit>
            </component>
        </keep-alive>
    </div>    
</template>

<script>
import Header from "../shared/Header.vue"
import Menu from "../shared/MenuBar.vue"
import userProfileEdit from './userProfilesComponents/userProfileEdit.vue'
import userProfileView from './userProfilesComponents/userProfileView.vue'
import axios from 'axios'
import {bus} from '../../main.js'
export default {
    components:{
        'app-profileView':userProfileView,
        'app-profileEdit':userProfileEdit,
         'app-Header':Header,
        'app-menu':Menu,
    },
    data(){
        return {
        selectedComponent:'app-profileView',
        userData:null
    }
     },

     mounted(){
         this.getUserData()
         bus.$on('switchComponent',(val)=>{
             this.switchComponent(val)
         })
     },

     methods:{
         getUserData(){ 
             var val = localStorage.getItem('dataStatsAuthToken')
             axios({
                 method:'GET',
                 url:this.$store.state.courseApi.getUserProfile,
                 headers:{authorization:val}
             }).then(res=>{
                //  console.log(typeof(res.data))
                 console.log(res.data)
                bus.$emit('viewData',res.data)
             })
         },


         switchComponent(val){
            //  console.log(val)
            //  console.log("nk")
             this.selectedComponent=val
         }
     }
}
</script>

<style scoped>

</style>