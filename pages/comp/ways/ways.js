// pages/comp/ways/ways.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['年份', '2017', '2016', '2015', '2014', '2013'],
    scharray: ['集美大学', '厦门大学'],
    schindex:0,
    index: 0,
    currentTab: 0,
    currentTab1: 0,
    enroll:[
      {
        enyear:"2017",
        batch:"本科一批",
        science:"理科",
        highest:"600",
        lowest:"460",
        average:"530"
      },
      {
        enyear: "2016",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      },
      {
        enyear: "2015",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      },
      {
        enyear: "2014",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      }, {
        enyear: "2013",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      }
    ]
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeSchool: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
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

  swichNav1: function (e) {

    var that = this;

    if (this.data.currentTab1 === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab1: e.target.dataset.current
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