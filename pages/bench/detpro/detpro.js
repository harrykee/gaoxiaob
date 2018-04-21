// pages/bench/detpro/detpro.js
var apiUrl = getApp().globalData.apiUrl;
Page({
  data: {
    apiUrl: apiUrl,
    hidden:true,
    anwsers: [
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首谁给我发个我给而望各位哥特各位如果而同为耳根微微各位各位如果微软个违反问个问我学校"
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首安放到沙发上法师打啊学校",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var prokey = options.prokey
    wx.request({
      url: apiUrl,
      data: { ac: 'question', prokey: prokey },
      success: function (res) {
        var userid = res.data.openid;
        if(userid != getApp().globalData.openid){
          that.setData({
            hidden:false
          })
        }
        wx.request({
          url: apiUrl,
          data: { ac: 'answerList', prokey: prokey },
          success: function (res) {
            console.log(res.data)
            if (res.data.answerlist && res.data.nums) {
              that.setData({
                nums: res.data.nums,
                answerlist: res.data.answerlist
              })
            }
            if (res.data.nums) {
              that.setData({
                nums: res.data.nums
              })
            }
          }
        })
      
        that.setData({
          prokey: res.data.prokey,
          uname: res.data.uname,
          procontext: res.data.procontext,
          protime: res.data.protime,
          openid: res.data.openid,
          uhead: res.data.uhead
        })
      }
    })
    wx.request({
      url: apiUrl,
      data: {
        ac: 'problemView',
        prokey: prokey,
        userid:getApp().globalData.openid
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    console.log(prokey)
  },

  bindtapWrite: function () {
    const prokey = this.data.prokey
    wx.navigateTo({
      url: '../write/write?prokey='+prokey,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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