// miniprogram/pages/phoneDetail/phoneDetail.js
const db = wx.cloud.database();//连接云端数据库
Page({


	/**
	 * 页面的初始数据
	 */
	data: {
		phone:{}

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const id = 'demo';
		db
			.collection('produce')
			.doc(id)
			.get({
				success:res =>{
					this.setData({
						phone: res.data
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
	onUnload: function () {

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