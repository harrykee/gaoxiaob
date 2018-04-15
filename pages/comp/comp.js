// pages/comp/comp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schnews:[{
      news:"2017年时事政治：2017厦门金砖会议",
    },
      {
        news: "这套金砖国家必知考题，你能对多少",
      },
      {
        news: "这套金砖国家必知考题，你能对多少",
      },
      {
        news: "2017年时事政治：大数据看金砖峰",
      }],

    reviewways: [{
      ways: "高考理综三巨头之一：生物的备考技巧",
    },
    {
      ways: "高考理综无耻得分法汇总",
    },
    {
      ways: "高考理综无耻得分法汇总",
    },
    {
      ways: "学霸分享：高三尖子生的数学成绩提高",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  GetNewsMore:function(){
    wx.navigateTo({
      url: 'more/more',
    })
  },

  GotoLines:function(){
    wx.navigateTo({
      url: 'lines/lines',
    })
  },
  ListSchools:function(){
    wx.navigateTo({
      url: 'school/school',
    })
  },
  GotoKnows:function(){
    wx.navigateTo({
      url: 'knows/knows',
    })
  },
  GotoWays: function () {
    wx.navigateTo({
      url: 'ways/ways',
    })
  },
  GotoLocation:function(){
    wx.navigateTo({
      url: 'location/location',
    })
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