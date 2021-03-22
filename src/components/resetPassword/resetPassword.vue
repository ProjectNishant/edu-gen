<template>
    <div class=" h-100 bg-light position-relative">
        <div class="card shadow w-25 align-middle position-absolute">
        <div class="card-body ">
            <div class="d-flex justify-content-center theme_color"><i class="fa fa-5x fa-lock" aria-hidden="true"></i></div>
            <h3 class="d-flex justify-content-center theme_color">Reset Password</h3>

                <div class="form-group pt-3">
                  <strong><label for="exampleInputEmail1" class="">Enter New Password:</label></strong>
                  <input type="password" class="form-control" v-model="password" @blur="$v.password.$touch()"   placeholder="Enter Password">
                   <p class="pt-2 text-danger  " v-if="!$v.password.required && err">password is required</p>
                    <p class="p pt-2 text-danger   " v-if="!$v.password.minLength && err">Password must have 6 letters</p>
                </div>

                <div class="form-group pt-3">
                  <strong><label for="exampleInputEmail1" class="">Confirm Password:</label></strong>
                  <input type="password" class="form-control" v-model="confirmPassword"  @blur="$v.confirmPassword.$touch()"   placeholder="Confirm Password">
                    <p class="pt-2 text-danger " v-if="!$v.confirmPassword.sameAs && err">Password does not match</p>

                </div>

                <div class="d-flex justify-content-end"><button class="btn btn-primary" @click="resetPassword($v.$invalid)">Reset Password</button></div>
        </div>
</div>
    </div>
</template>

<script>
        import {required, minLength, sameAs} from 'vuelidate/lib/validators'
        import axios from 'axios';

export default {
    data(){
        return {
        password:null,
        confirmPassword:null,
        data:null,
        err:false
    }
    },
    validations:{
        password:{
            required,
            minLength: minLength(6)
        },
        confirmPassword:{
            required,
            sameAs:sameAs('password')
        }
    },
    mounted(){
       this.data= this.$route.params.data
    },
    methods:{
        resetPassword(invalid){
            console.log(invalid)
            if(invalid){
                this.err=true
            }
            else{
                this.err=false
                console.log("naman")    
                axios.post(this.$store.state.courseApi.resetPassword,{password:this.password,passwordResetToken:this.data}).then(res=>{
                    console.log(res)
                    this.$router.push('/dashboard')
                })
            }
        }
    }
}
</script>

<style scoped>
    .card{
        top:25%;
        left:35%
    }

    .theme_color{
        color:#ff6400
    }
</style>