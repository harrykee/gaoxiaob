// pages/comp/school/school.js
const apiUrl = getApp().globalData.apiUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    schools:[
      {badge:"../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"},
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"
      },
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"
      },
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"
      },
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"
      },
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address: "厦门市集美区"
      },
      {
        badge: "../../../imgs/jmu.jpg",
        name: "集美大学",
        address:"厦门市集美区"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that =this
    wx.request({
      url: apiUrl,
      data:{ac:'schooList'},
      success:function(res){
        that.setData({
          slist:res.data.schoolist
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