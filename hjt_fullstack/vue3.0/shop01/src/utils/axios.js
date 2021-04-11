// 工具函数文件夹
import axios from 'axios';
import { Toast } from 'vant';
import router from '../router/';

// 检测环境切换请求地址
axios.defaults.baseURL = process.env.NODE_ENV == 'developement' ? '//47.99.134.126:28019/api/v1' : '//47.99.134.126:28019/api/v1'
// 请求头
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// 令牌
axios.defaults.headers['token'] = localStorage.getItem('token') || '';
axios.defaults.headers.post['Content-Type'] = 'applycation/json';

// 请求拦截

// 响应拦截
axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        // 服务器端异常
        Toast.fail('服务器端异常');
        return Promise.reject(res)
    }
    if (res.data.resultCode !== 200) {
        // 接口不对
        if (res.data.message) {
            Toast.fail(res.data.message);
        }
        if (res.data.resultCode === 416) {
            // 页面请求无效，需要重新登录
            Toast.fail("请重新登录");
            setTimeout(() => {
                // 使用路由跳转到登录页
                router.push({path:'/login'})
            },1000)
        }
        return Promise.reject(res)
    }
    return res.data
})

export default axios