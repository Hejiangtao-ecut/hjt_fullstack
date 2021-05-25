// 线上环境的url
let prodUrl = "http://vueshop.glbuys.com";
// 线下开发环境路径
let devUrl = '/proxy';
// 根据环境切换路径
let baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl;

export default {
    baseUrl: baseUrl,
    path: '/',
    token:'1ec949a15fb709370f'
}