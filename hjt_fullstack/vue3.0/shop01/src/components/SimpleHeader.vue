<template>
    <div class="simple-header">
        <van-icon name="arrow-left" @click="goBack" />
        <div class="simple-header-name">{{name}}</div>
        <van-icon name="ellipsis" />
    </div>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
    props:{ //从父组件接收值
        name:{
            type:String,
            default:''
        } 
    },

    setup() {
        const Router = useRouter();

        const goBack = ()=>{
            console.log('老子要回上一层了');
            Router.go(-1); //返回上一层
        }

        return {
            goBack
        }
    }

}
</script>

<style lang="less" scoped> // 私有化
@import '../common/style/mixin.less';
.simple-header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .fj();
    .wh(100%,40px);
    line-height:44px;
    padding: 0 10px;
    .boxSizing();
    color: black;
    background-color: #fff;
    border-bottom: 1px solid rgba(179, 172, 172, 0.74);
    font-size: 14px;
    .van-icon{
        line-height: 44px;
    }
}
</style>