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
    wx.login({
      success: res => {
        var code = res.code
        wx.request({
          url: apiUrl,
          data: {
            ac: "getOpenid",
            code: code
          },
          success: function (res) {
            getApp().globalData.openid = res.data.openid
          }
        })
      }
    })
  },
  onShareAppMessage: function () {
  
  }
})