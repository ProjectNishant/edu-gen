<template>
            <span class="">
                <i class="fa fa-heart-o"  v-if="!isProductAdded" @click="addToWishlist"  aria-hidden="true"></i>
                <i class="fa fa-heart text-danger" v-if="isProductAdded" @click="removeFromWishlist"  aria-hidden="true"></i>
            </span>
</template>

<script>
export default {
    props:['courseId'],

    mounted(){
        console.log(this.courseId)
        this.checkWishList()
    },

    data(){
        return {
            addedToCourse:false,
            fav:[],
            isProductAdded:false
        }
    },

    methods:{
      
           checkWishList(){
                  this.fav=JSON.parse(localStorage.getItem("dataStatsFavourite"))
                  console.log(this.fav)
                  if(this.fav){
                      this.fav.forEach(val => {
                        if(this.courseId == val){
                            this.isProductAdded=true
                        }
                        
                      });
                  }
                  else{
                      this.isProductAdded=false
                  }
                },

                removeFromWishlist(){
                   var favrouites= JSON.parse(localStorage.getItem("dataStatsFavourite"))
                   var index= favrouites.indexOf(this.courseId)
                   favrouites.splice(index,1)
                   localStorage.setItem("dataStatsFavourite",JSON.stringify(favrouites))
                   this.isProductAdded=false
                   console.log(index)
                },



                addToWishlist(){
                  this.fav=JSON.parse(localStorage.getItem("dataStatsFavourite"))

                if(this.fav){
                
                this.fav.push(this.courseId)
                console.log(this.fav)
                localStorage.setItem("dataStatsFavourite", JSON.stringify(this.fav))
                }

                else{
                    this.fav=[]
                    this.fav.push(this.courseId)
                    localStorage.setItem("dataStatsFavourite",JSON.stringify(this.fav))
                }
                this.isProductAdded=true
                console.log(JSON.parse(localStorage.getItem("dataStatsFavourite")))
            },

    }
}
</script>

<style  scoped>
i{
    cursor:pointer;
    
}

</style>