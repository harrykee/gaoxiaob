// pages/comp/knows/knows.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl: apiUrl,
    start: 0,
    pageSize: 10,
    isFormload: true,
    search: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var start = 0
    var pageSize = this.data.pageSize
    var search = this.data.search
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorList',
        start: start,
        pageSize: pageSize,
        search: search
      },
      success: function (res) {
        that.setData({
          majorList: res.data.majorList
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
    var search = this.data.search
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorList',
        start: start,
        pageSize: pageSize,
        search: search
      },
      success: function (res) {
        that.data.isFormload ? searchList = res.data.majorList : searchList = that.data.majorList.concat(res.data.majorList)
        that.setData({
          majorList: searchList
        })

        setTimeout(function () {
          wx.hideLoading()
        })
      }
    })
  },
  searchInput: function (e) {
    const that = this
    var search = e.detail.value
    var start = 0
    var pageSize = this.data.pageSize
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorList',
        start: start,
        pageSize: pageSize,
        search: search
      },
      success: function (res) {
        that.setData({
          majorList: res.data.majorList
        })
      }
    })
    that.setData({
      search: search
    })
  }
})