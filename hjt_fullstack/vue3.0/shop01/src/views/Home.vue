<template>
  <div>
    {{count}}
    <button @click="Add">add</button>
    {{count}}
  </div>
</template>

<script>
import {reactive, toRefs,computed} from 'vue'
import {useStore} from 'vuex';

export default {

  setup() {
    const store = useStore();
    // const state =reactive({ vue3 非响应式store
    //   count:store.state.count
    // }) 
    const count = computed(() => {
      return store.state.count;
    })

    const Add = () =>{
      // state.count++
      store.dispatch('actionAddCount')
    }

    return {
    // ...toRefs(state),
    count,
    Add
    }
  }
}
</script>
