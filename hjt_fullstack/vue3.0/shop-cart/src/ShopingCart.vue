<template>
    <div>
        <h2>Your Cart</h2>
        <p v-show="!products.length">
            <i>空空如也！</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id"></li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex';

export default {
    computed:{
        ...mapGetters('cart',{
            products:'cartProducts',
            total:'cartTotalPrice'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>