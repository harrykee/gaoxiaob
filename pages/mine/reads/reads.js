// pages/mine/reads/reads.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl: apiUrl,
    start: 0,
    pageSize: 6,
    isFormload: true,
  
  },
  onLoad: function (options) {
    var start = 0
    var pageSize = this.data.pageSize
    const that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'getReadArticle',
        userid: getApp().globalData.openid,
        start: start,
        pageSize: pageSize
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          articleList: res.data.articleList,
        })
      }
    })
  },
  scrollLower: function () {
    var pageSize = this.data.pageSize
    var start = this.data.start
    let that = this;
    that.setData({
      start: (start * 1) + (pageSize * 1),
      isFormload: false
    });
    that.loadMore();
  },
  loadMore: function () {
    wx.showLoading({
      title: '加载更多...',
    })
    let searchList = []
    var start = this.data.start
    var pageSize = this.data.pageSize
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'getReadArticle',
        userid: getApp().globalData.openid,
        start: start,
        pageSize: pageSize
      },
      success: function (res) {
        that.data.isFormload ? searchList = res.data.articleList : searchList = that.data.articleList.concat(res.data.articleList)
        that.setData({
          articleList: searchList
        })

        setTimeout(function () {
          wx.hideLoading()
        })
      }
    })
  },
})