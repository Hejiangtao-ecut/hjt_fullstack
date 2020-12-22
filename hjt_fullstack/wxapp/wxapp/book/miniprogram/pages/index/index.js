//使用云端数据
const db = wx.cloud.database();//连接云端数据库
const phoneTable = db.collection("produce");//使用db的数据
Page({
  data:{
    phone_list:[]
  },
  onLoad(){
    //加载数据
    db
      .collection("produce")
      .get({
        success: res => {
          // console.log(res);
          this.setData({
            phone_list:res.data
          })
        }
      })
    
  },
  viewItem(e){
    var id = e.currentTarget.dataSet.id;
    wx.navigateto({
      url:'../phoneDetail/phoneDetail?id='+ id
    })
  }
})