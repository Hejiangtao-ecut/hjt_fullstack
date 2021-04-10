<template>
  <div class="login">
    <!-- header -->
    <s-header name="登录"></s-header>
    <img
      class="logo"
      src="//s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
      alt=""
    />
    <!-- 登录 -->
    <div class="login login-body" v-if="type==='login'">
      <van-form>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <vue-img-verify />
          </template>
        </van-field>

        <div style="margin: 16px">
          <div class="link-register" @click="changePage">立即注册</div>
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>

    <!-- 注册 -->
    <div class="login-body register" v-else>
      <van-form>
        <van-field
          v-model="username1"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password1"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="verify"
          name="验证码"
          label="验证码"
          placeholder="请输入验证码"
        >
          <template #button>
            <vue-img-verify />
          </template>
        </van-field>

        <div style="margin: 16px">
          <div class="link-register" @click="changePage">已有账号</div>
          <van-button round block type="primary" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import sHeader from "@/components/SimpleHeader.vue";
import VueImgVerify from '@/components/vue-img-verify.vue';

export default {
    setup() {
        const state = reactive({
            username:'',
            password:'',
            type:'login'
        })

        const changePage = ()=>{
            state.type = state.type === 'login'?'register':'login'
        }

        return {
            ...toRefs(state),
            changePage
        }
    },
    components: {
        sHeader,
        VueImgVerify
    }
};
</script>

<style lang="less">
.login {
  .logo {
    width: 120px;
    height: 120px;
    display: block;
    margin: 80px auto 20px;
  }
  .login-body {
    padding: 0 20px;
  }
  .login {
    .link-register {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .register {
    .link-login {
      font-size: 14px;
      margin-bottom: 20px;
      color: #1989fa;
      display: inline-block;
    }
  }
  .verify-bar-area {
    margin-top: 24px;
    .verify-left-bar {
      border-color: #1baeae;
    }
    .verify-move-block {
      background-color: #1baeae;
      color: #fff;
    }
  }
  .verify {
    > div {
      width: 100%;
    }
    display: flex;
    justify-content: center;
    .cerify-code-panel {
      margin-top: 16px;
    }
    .verify-code {
      width: 40% !important;
      float: left !important;
    }
    .verify-code-area {
      float: left !important;
      width: 54% !important;
      margin-left: 14px !important;
      .varify-input-code {
        width: 90px;
        height: 38px !important;
        border: 1px solid #e9e9e9;
        padding-left: 10px;
        font-size: 16px;
      }
      .verify-change-area {
        line-height: 44px;
      }
    }
  }
}
</style>
