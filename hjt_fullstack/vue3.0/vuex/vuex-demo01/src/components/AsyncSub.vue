<template>
  <div>
    <h2>当前值为：{{ count }}</h2>
    <button @click="handle1">-1</button>
    <button @click="handle2">-2</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['asyncSubN']),
    handle1 () {
      //   原生方法
      this.$store.dispatch('asyncSub')
    },
    handle2 () {
      this.asyncSubN(3)
    }
  }
}
</script>

<style lang="scss" scoped></style>
