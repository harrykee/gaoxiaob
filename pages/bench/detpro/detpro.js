// pages/bench/detpro/detpro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anwsers: [
      {
        head: "../../../imgs/txmb.jpg",
        name:"木小鱼鱼",
        time:"2018-04-07",
        anwser: "这是哪首谁给我发个我给而望各位哥特各位如果而同为耳根微微各位各位如果微软个违反问个问我学校"
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首安放到沙发上法师打啊学校",
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首阿三发射点嘎啊是刚刚和人学校",
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
      },
      {
        head: "../../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        time: "2018-04-07",
        anwser: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindtapWrite:function(){
    wx.navigateTo({
      url: '../write/write',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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