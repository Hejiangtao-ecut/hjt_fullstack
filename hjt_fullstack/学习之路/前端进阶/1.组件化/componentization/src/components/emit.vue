<template>
    <div>
        <div>向父元素传值</div>
        <button @click="onClick">向父元素传值</button>
    </div>
</template>

<script>
export default {
    name:"emit",
    methods: {
        onClick(){
            this.$emit("sendValue","我是来自子元素的值");
            this.$parent.$emit('bro', 'come from bro');
        }
    },
}
</script>