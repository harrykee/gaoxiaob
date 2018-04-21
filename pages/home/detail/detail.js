// pages/home/detail/detail.js
var apiUrl = getApp().globalData.apiUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    imageWidth: wx.getSystemInfoSync().windowWidth,
    imgUrls: [
      { route: '../../../imgs/fzu01.jpg' },
      { route: '../../../imgs/xmu.jpg' },
      { route: '../../../imgs/jmu01.jpg' }
    ],
    interval: 3000,
    duration: 1000,
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    colleges:[
      {name:"计算机工程学院"},
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
      { name: "计算机工程学院" },
    ],
    school: "厦门大学（Xiamen University），简称厦大",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.openid)
    var that =this
    var schkey =options.schid
    wx.request({
      url: apiUrl,
      data:{
        ac:'detail',
        schkey:schkey
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          abst: res.data.abst
        })

      }
    })
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  
})