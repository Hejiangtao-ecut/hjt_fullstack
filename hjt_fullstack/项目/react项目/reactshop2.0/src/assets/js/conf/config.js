// 线上环境的url
let prodUrl = "http://vueshop.glbuys.com";
// 线下路径
let devUrl = 'http://vueshop.glbuys.com';
// 根据环境切换路径
let baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl;

export default {
    baseUrl: baseUrl,
    path: '/',
    token:''
}