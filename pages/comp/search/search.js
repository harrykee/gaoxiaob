// pages/comp/search/search.js
var QQMapWX = require('../../../utils/qqmap-wx.min.js');

var demo = new QQMapWX({
  key: 'A3UBZ-5P53F-5KWJU-JCC5N-3CA6Q-OMB4L' // 必填
});
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
  
  },

  searchInput: function (e) {
    const that = this
    var search = e.detail.value
    if (search != "") {
      demo.getSuggestion({
        keyword: search,
        success: function (res) {
          that.setData({
            resultlist: res.data
          })
        },
        fail: function (res) {
          console.log(res);
        },
        complete: function (res) {
          console.log(res);
        }
      });
    }
  },
})