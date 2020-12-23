// miniprogram/pages/add.js
const db = wx.cloud.database()
const photos = db.collection('photos')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},


	upload(){
		// 打开手机的摄像头或者相册
		wx.chooseImage({
			count:9,
			// 是否压缩
			sizeType: ['original', 'compressed'],
			// 相册， 拍摄
			sourceType: ['album', 'camera'],
			success: res => {
				// 拿到图片文件
			  console.log(res);
			//   图片的地址数据
			  wx.chooseImage({
				count:9,
				// 压缩与否 
				sizeType: ['original', 'compressed'],
				// 相册， 拍摄
				sourceType: ['album', 'camera'],
				success: res => {
				  // 拿到图片文件 
				  console.log(res);
				//   图片地址
				  const tempFilePaths = res.tempFilePaths
				//   单独处理每张图片
				  for(var i = 0; i < tempFilePaths.length; i ++ ){
					//   随机生成每张图片的专属名字
					let randString = Math.floor(Math.random() * 1000000).toString() + '.png'
					// 向云端上传文件
					wx.cloud.uploadFile({
					// 云端地址 目的地址
					  cloudPath: randString, // 上传至云端的路径
					//   文件地址
					  filePath: tempFilePaths[i], // 小程序临时文件路径
					  success: res => {
						  console.log(res);
						//   上传成功
						photos.add({
							// 向photos表插入数据
						  data: {
							image: res.fileID
						  }
						}).then(res => {
						  wx.showToast({
							//   上传后弹出 toast 提示框
							title: '上传成功',
							icon: 'success'
						  })
						})
					  },
					  fail: console.error
					})
				  }
				
				},
				fail: err => {
				  console.error(err)
				}
			  })
			}
		  })
	  
	},

	

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	Unload: function () {


	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})