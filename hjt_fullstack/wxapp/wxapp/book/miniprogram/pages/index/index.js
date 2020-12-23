// 云数据库
const db = wx.cloud.database()
// Info 表
const userInfo = db.collection('userInfo')

Page({
  data :{
    userList:[]
  },
  navigatTo(){

  },
  getUserInfo(result){

    // 登录
    // 一切的云开发都是从调用一个函数开始
    wx.cloud.callFunction({
      name: 'getOpenId',
      // 回调函数，res为返回结果
      complete: res => {
		  console.log(res)
		//   where mysql 条件查询
		  userInfo.where({
			//   去云端就是为了拿openId，相当于身份证
			//   用户的openId是唯一的，用来识别用户
			_openid:res.result.openId
		  }).count().then( res =>{
			//   console.log(res);
			// 新用户
			if (res.total == 0){
				// 插入用户
				// Insert 插入
				userInfo.add({
					data: result.detail.userInfo
				  }).then(res => {
					wx.navigateTo({
					  url: '../add/add',
					})
				  }).catch(err => {
					console.error(err)
				  })
	  
			}else{
				wx.navigateTo({
					url: '../add/add',
				  })
			}
		  })
      }
    })
  }
})