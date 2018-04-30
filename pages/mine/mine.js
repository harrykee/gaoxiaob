// pages/mine/mine.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    hidden:true,
  },

  LinkTonews:function(){
    wx.navigateTo({
      url: 'news/news',
    })
  },
  LinkToqanda:function(){
    wx.navigateTo({
      url: 'qanda/qanda',
    })
  },
  LinkToreads: function () {
    wx.navigateTo({
      url: 'reads/reads',
    })
  },
  LinkTocollect: function () {
    wx.navigateTo({
      url: 'collect/collect',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: apiUrl,
      data:{ac:'haveMessages',userid:getApp().globalData.openid},
      success:res=>{
        if(res.data>0){
          that.setData({
            hidden:false
          })
        }
        
      }
    })
    // this.setData({
    //   username: getApp().globalData.userInfo.nickName,
    //   userpic: getApp().globalData.userInfo.avatarUrl
    // })
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
  // onShareAppMessage: function () {
  //   wx.hideShareMenu()
  //   return {
  //     title: '自定义转发标题',
  //     path: '/pages/home/home',
  //     imageUrl:'/imgs/logouse.png',
  //     success: function (res) {

  //     },
  //     fail: function (res) {

  //     }
  //   }
  // }
})