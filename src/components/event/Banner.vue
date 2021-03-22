<template>
  <div class="container" style="max-width:100%; height:4rem; position:relative">
    <div class="row">
      <div class="col-md-10 mt-2 pt-2">
        <div class="first content text-center">
          <span>30 days money back guarantee | Hurry Up!!</span>
        </div>
      </div>
      <div class="col-md-2 mt-2 pt-2">
        <button class="btn-md btn-btn-outline-warning float-right">
          <i class="fa fa-close" @click="removeBar"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {bus} from '../../main.js'
export default {
  methods:{
  removeBar(){
    bus.$emit('removeBar')
  }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
* {
  box-sizing: border-box;
}
.container {
  background-color: #ff8f66;
}

button {
  border: none;
  background-color: #ff8f66;
}
span {
  font-size: 16px;
  font-family: "Lato";
  font-weight: 400;
}
.fa{
  cursor: pointer;
}
</style>
