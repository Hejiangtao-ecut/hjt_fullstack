<template>
  <div class="hello">
    <h1>1. props通信</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
export default {
  name: 'props',
  data() {
    return {
      value: 'self'
    }
  },
  props: {
    msg: String,
  },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
