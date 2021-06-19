<template>
  <div>
    <h2>当前值为：{{ count }}</h2>
    <button @click="handel1">-1</button>
    <button @click="handle2">-2</button>
  </div>
</template>

<script>
// 按需导入state的值
// 按需导入mutations方法
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SubCount',
  computed: {
    // 将全局组件映射为当前组件的计算属性
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    handel1 () {
      this.sub()
    },
    handle2 () {
      this.subN(2)
    }
  }
}
</script>

<style lang="less" scoped></style>
