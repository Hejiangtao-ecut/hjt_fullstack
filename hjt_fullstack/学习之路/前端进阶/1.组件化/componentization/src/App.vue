<template>
  <props msg="这是props通信"/>
  <hr>
  <ref ref="ref" />
  <button @click="changeData">切换ref的值</button>
  <hr>
  <emit @sendValue="changeValue"/>
  <h2>{{data1}}</h2>
</template>

<script>
import Props from './components/props.vue';
import Ref from './components/ref.vue';
import Emit from './components/emit.vue';

export default {
  name: 'App',
  data() {
    return {
      data1:"父元素的值"
    }
  },
  components: {
    Props,
    Ref,
    Emit
  },
  mounted() {
    // vue3 已将此方法移除
    // console.log(this.$parent.$children);
  },
  methods: {
    changeData() {
      this.$refs.ref.refsData = "我被改变了";
    },
    changeValue(value) {
      this.data1 = value;
    }
  },
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
