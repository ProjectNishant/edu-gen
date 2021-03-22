<template>
    <div>
        <p v-if="rating == 1">
        <span class="text-secondary font-weight-bold">({{rating}})</span><i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </p>

        <p v-if="rating == 2">
        <span class="text-secondary font-weight-bold">({{rating}})</span><i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </p>

        <p v-if="rating == 3">
        <span class="text-secondary font-weight-bold">({{rating}})</span><i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </p>

        <p v-if="rating == 4">
        <span class="text-secondary font-weight-bold">({{rating}})</span><i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-o" aria-hidden="true"></i>
        </p>

        <p v-if="rating == 5">
        <span class="text-secondary font-weight-bold">({{rating}})</span><i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        </p>
    </div>
</template>

<script>
export default {
    props:['rating'],
    mounted(){
        console.log(this.rating)
    }
}
</script>

<style lang="less" scoped>

</style>