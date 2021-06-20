<template>
  <div id="app">
    <h1>同步</h1>
    <add-count></add-count>
    <sub-count></sub-count>
    <hr />
    <h1>异步</h1>
    <async-add></async-add>
    <async-sub></async-sub>
    <h3>{{ getDbNums }}</h3>
  </div>
</template>

<script>
import AddCount from './components/AddCount.vue'
import SubCount from './components/SubCount.vue'
import AsyncAdd from './components/AsyncAdd.vue'
import AsyncSub from './components/AsyncSub.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getDbNums'])
  },
  components: {
    AddCount,
    SubCount,
    AsyncAdd,
    AsyncSub
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
