<template>
    <div></div>
</template>

<script>
export default {
    // 服务端 Nuxt
    asyncData({app}) {
        // 在 nuxt 运行，所以需要解构 app 实例
        app.$allFunc("服务端");
    },
    // 客户端 vue
    mounted() {
        this.$allFunc("客户端");
    }
}
</script>