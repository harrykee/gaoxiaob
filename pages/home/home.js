// pages/home/home.js
var apiUrl = getApp().globalData.apiUrl;

Page({
  data: {
    apiUrl:apiUrl, 
  },

  onLoad: function (options) {
    var that = this
    wx.request({
      url: apiUrl,
      data:{
        ac:"hostuni",
      },
      success:function(res){
        that.setData({
          college: res.data.colist
        })
      }
    })
  },
  onShareAppMessage: function () {
  
  }
})