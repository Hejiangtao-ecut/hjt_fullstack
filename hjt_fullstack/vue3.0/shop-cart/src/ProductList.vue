<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{product.title}}-{{product.price}}
                <br/>
                <button @click="addProductToCart(product)">
                    Add to cart
                </button>
        </li>
    </ul>
</template>
<script>
// 读状态 products connect
// 要有一个方法把product -> cart
// connect 高阶组件 -> props
import {mapState,mapActions} from 'vuex'
export default {
    // 计算属性 转态的一种 getter
    computed:mapState({
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
<style scoped>

</style>>
    