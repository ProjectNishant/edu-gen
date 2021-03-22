<template>
    <div>
        <app-header></app-header>
        <app-menu></app-menu>
        <div class="container">

            <div class=" w-75">
            <div class="mt-5 row pb-3">
     

     <div class="form-group col-md-12">
            <label for='topic'>Experience:</label>   
            <input type="number"
            class="form-control"
            v-model="experience"
            id="experience"
            @blur="$v.experience.$touch()"              
            placeholder="Trainer's experience">
            <p  class="pt-2 mb-0 text-danger" v-if="!$v.experience.required  && err">Experience is required</p>
           
        </div>


          <div class="form-group col-md-12">
            <label for='Phone '>Phone No.:</label>   
            <input
            type="number"
            class="form-control"
            id="Phone"
            @blur="$v.Phone_Number.$touch()"
            v-model="Phone_Number"
            placeholder="Mobile No."> 
            <p  class="pt-2 mb-0 text-danger" v-if="!$v.Phone_Number.minLength  && err">Minimum 10 digits are required</p>
            <p  class="pt-2 mb-0- text-danger" v-if="!$v.Phone_Number.required  && err">Phone number is required</p>
        </div>    

        <div class="form-group col-md-12">
            <label for='topic'>Topic:</label>   
            <input type="text"
            class="form-control"
            v-model="topic"
            id="topic"
            @blur="$v.topic.$touch()"              
            placeholder="topic">
            <p  class="pt-2 mb-0 text-danger" v-if="!$v.topic.required  && err">topic is required</p>
           
        </div>     

        <div class="form-group col-md-12">
            <label for='Skills'>Skills:</label>   
            <input
            type="text"
            class="form-control"
            v-model="Skills"
             @blur="$v.Skills.$touch()"
            id="Skills"
            placeholder="Skills">
            <p  class="pt-2 mb-0- text-danger" v-if="!$v.Skills.required  && err">Skills is required</p>
        </div> 

       
        
      
        
           
        <div class="col-md-12">
            <span>
                <button class="float-right pt-1 btn btn-success" type="button"  @click="Submit($v.$invalid)">Save</button>
            </span>
        </div>
        </div>


            </div>
    

    </div>
        <!-- <button class="float-right pt-1 btn btn-success" type="button"  @click="Submit($v.$invalid)">Save</button> -->


<app-footer></app-footer>
    </div>
</template>

<script>
    import {required,minLength} from 'vuelidate/lib/validators'
    // import {bus} from '../../main.js'
    import header from '../shared/Header.vue'
    import menu from '../shared/MenuBar.vue'
    import footer from '../shared/footerDetails.vue'
    import axios from 'axios'
export default {

    data(){
        return{
             Name:null,
            Skills:null,
            experience:null,
            Phone_Number:null,
            userData:{},
            err:false,
            topic:null
        }
    },
    components:{
        'app-header':header,
        'app-menu':menu,
        'app-footer':footer
    },
      validations:{
        Name:{required},
        Skills:{required},        
        topic:{required},
        Phone_Number:{required,minLength:minLength(10)},
        experience:{required},

},

    methods:{
        Submit(error){
            console.log(error)
            if(error){
                this.err=true
            }
            else{
                this.err=false
                var val = localStorage.getItem('dataStatsAuthToken')
                console.log(this.Name, this.Skills,this.topic,this.Phone_Number)
                console.log(val)
                // axios({
                //      method:'POST',
                //      url:this.$store.state.courseApi.becomeTrainee,
                //      header:{Authorization:val},
                //      body:{
                //            skills:this.Skills,
                //            topic:this.topic,
                //            mobNo:this.Phone_Number,
                //            experience:this.experience
                //            }
                // }).then(res=>{
                //     console.log(res)
                // })

            //     axios({
            //     method:'POST',
            //     url:this.$store.state.courseApi.becomeTrainee,
            //     headers:{Authorization:val},
            //     body:this.Details
            // }).then(res=>{
            //     res
            //     console.log(res) 
            //     this.clear()
            // }).catch(err=>{
            //     err
            //     // console.log(err)
            // })

            axios.post(
                this.$store.state.courseApi.becomeTrainee,
                {skills:this.Skills,mobNo:this.Phone_Number,experience:this.experience,courseName:this.topic},
                {headers:{Authorization:val}}
                ).then(res=>{
                    console.log(res)
                })
              
            }
        }
    }


}
</script>

<style>

</style>