<template>
  <!-- <list /> -->
  <TodoList />
</template>

<script>
// import List from './components/list.vue'
import TodoList from './components/todoList.vue';
export default {
  name: 'App',
  components: {
    // List
    TodoList
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
