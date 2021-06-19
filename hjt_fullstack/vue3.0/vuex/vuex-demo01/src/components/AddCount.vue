<template>
  <div>
    <h2>当前值为：{{ this.$store.state.count }}</h2>
    <button @click="handle1">+1</button>
    <button @click="handle2">+2</button>
  </div>
</template>

<script>
export default {
  name: 'Add',
  methods: {
    handle1 () {
      this.$store.commit('add')
    },
    handle2 () {
      // 第一个为commit的名称，即要调用mutation里面的方法，第二个为需要传递的参数
      this.$store.commit('addN', 2)
    }
  }
}
</script>

<style lang="less" scoped></style>
