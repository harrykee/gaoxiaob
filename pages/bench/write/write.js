// pages/bench/write/write.js
var apiUrl = getApp().globalData.apiUrl;
var util = require('../../../utils/util.js')
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
    console.log(options.prokey)
    this.setData({
      prokey:options.prokey
    })
  },
  answerSubmit: function (e) {
    var answer = e.detail.value.answer
    var date = util.formatTime(new Date())
    var prokey = this.data.prokey
    if (answer == '') {
      wx.showModal({
        title: '你没有输入任何内容',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else {
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAnwswer',
          answer: answer,
          userid: getApp().globalData.openid,
          ansdate: date,
          prokey: prokey
        },
        success: function (res) {
          if (res.data == 'success') {
            wx.navigateTo({
              url: '../detpro/detpro?prokey='+prokey,
            })
          }
        }
      })
    }
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