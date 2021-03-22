<template>

    <div class="h-100 w-50 pt-5 mt-5 container align-moddle" >
        <div class=" card bg-success text-white">
          <div class="card-body">
              Your Email is verified Successfully <u @click="login">Click here</u> to login
          </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {

        }
    },

    methods:{
        login(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    u{
        cursor: pointer;
    }

</style>