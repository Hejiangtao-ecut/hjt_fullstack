import {axiosInstance} from './config'
//所有的请求都在这里统一管理
//axios 
//url 改了怎么办
//首页
export const getBannerRequest=()=>{
    return axiosInstance.get('/banner')
}
export const getRecommendListQuest=()=>{
    return axiosInstance.get('/personlized')
}
//singers
// export const getSingleListRequest=()=>{
//     return axiosInstance.get('./personalized')
// }