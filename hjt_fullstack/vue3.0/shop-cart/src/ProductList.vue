<template>
    <div>

    </div>
</template>

<script>
// 读状态 products connect
import { mapState,mapActions } from 'vuex'

export default {
    // 计算属性
    // data() { // 不写自身状态了，因为如果有自身状态，就不会被回收
    //     return {
            
    //     }
    // },
    // 将中央的属性计算过来
    computed:mapState({
        // 获取中央的products的所有状态
        products:state=>state.products.all
    }),
    methods:mapActions('cart',[
        'addProductToCart'
    ]),
    created() {
        this.$store.dispatch('products/getAllProducts');

    },
}
</script>

<style lang="scss" scoped>

</style>