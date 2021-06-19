<template>
  <div>
    <h2>当前值为：{{ count }}</h2>
    <button @click="handle1">+1</button>
    <button @click="handle2">+2</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['asyncAddN']),
    handle1 () {
      // 原生方法
      this.$store.dispatch('asyncAdd')
    },
    handle2 () {
      // mapActions 按需加载
      this.asyncAddN(4)
    }
  }
}
</script>

<style lang="scss" scoped></style>
