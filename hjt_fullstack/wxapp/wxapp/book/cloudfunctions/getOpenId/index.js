// 云函数入口文件
const cloud = require('wx-server-sdk')//引入微信云服务SDK
//初始化这个云
cloud.init()

// 云函数入口函数
// 一个云函数就是一个项目，都是独立的，serverLess
// main 入口
exports.main = async (event, context) => {
	// event 是一次向云端的请求函数
  return event.userInfo
}