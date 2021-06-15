<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Produce</h2>
    <hr>
    <ShopingCart />
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import ShopingCart from './ShopingCart.vue';

export default {
  name: 'App',
  components: {
    ShopingCart,
    ProductList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
