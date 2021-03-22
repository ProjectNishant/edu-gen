<template>
    <div>

        <div class="container pt-5 mt-5">
            

              <div class="mb-3 shadow-lg card bg-light">
                <div class="card-header d-inline">
                  <span class="">User Profile</span>
                  <span style="float:right"><button class="btn btn-danger" @click="edit">Edit</button></span>
                </div>
                
                <div class="card-body">
                  <h5 class="card-title">{{email}}</h5>
                  <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <div class="row">
                    <div class="col-md-6">
               <span> <strong>Name: </strong>{{fullName || ""}}</span><br/><br/>
               <span> <strong>Phone no: </strong>{{mobNo || ""}}</span><br/><br/>
               <span> <strong>college: </strong>{{college || ""}}</span><br/><br/>
                    </div>

                    <div class="col-md-6">
                      <strong>address:   </strong> <span>{{address || ""}}</span><br/><br/>
                      <strong>country:   </strong> <span>{{country || ""}}</span>
                    </div>
                  </div>

                </div>
              </div>

        </div>


    </div>
</template>

<script>
import {bus} from '../../../main.js'
export default {
  
  data(){
    return {
      userData:null,
      email:null,
      fullName:null,
      address:null,
      mobNo:null,
      college:null,
      country:null,
      skills:null,
      }
  },


  mounted(){
    bus.$on('viewData',(val=>{
      this.userData=val
      this.fullName=this.userData.fullName
      this.college=this.userData.college
      this.address=this.userData.address

      console.log(typeof(this.country))
      console.log(typeof(this.college))

      // if(this.userData.address == 'null'){
      //   this.address=''
      // }
      // else{
      // this.address=this.userData.address

      // }

      


    //   if(this.userData.country == 'undefined'){
    //   this.country=this.userData.country
    // }else{
    //   this.country=''
    // }
      this.mobNo=this.userData.mobNo
    })
    )
},

    methods:{
        edit(){
          // console.log("EDIT")
          // this.$emit('showEdit','app-profileEdit')
          bus.$emit('switchComponent','app-profileEdit')  // emit the event to userProfile.vue
        }
    }

}
</script>

<style scoped>

</style>