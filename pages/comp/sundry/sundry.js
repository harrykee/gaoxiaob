// pages/comp/sundry/sundry.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  data: {
    apiUrl:apiUrl,
    pageSize:15,
    start:0,
    searchm:'',
    searchc:'',
    isFromSearch:true
  },
  onLoad: function (options) {
    var start = 0
    var pageSize = this.data.pageSize
    const that = this
    var searchm = ""
    var searchc = ""
    wx.request({
      url: apiUrl,
      data:{
        ac:'majorScore',
        start:start,
        pageSize:pageSize,
        searchm:searchm,
        searchc:searchc
      },
      success:function(res){
        that.setData({
          scorelist: res.data.scorelist
        })
      }
    })
  },

  majorInput: function (e) {
    this.setData({
      searchm: e.detail.value
    })
  },
  schoolInput: function (e) {
    this.setData({
      searchc: e.detail.value
    })
  },

  ScrollLower: function () {
    var pageSize = this.data.pageSize
    var start = this.data.start
    let that = this;
    that.setData({
      start: (start * 1) + (pageSize * 1),
      isFromSearch: false
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
    var searchm = this.data.searchm
    var searchc = this.data.searchc
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorScore',
        start: start,
        pageSize: pageSize,
        searchm: searchm,
        searchc: searchc
      },
      success: function (res) {
        that.data.isFromSearch ? searchList = res.data.scorelist : searchList = that.data.scorelist.concat(res.data.scorelist)
        that.setData({
          scorelist: searchList
        })

        setTimeout(function () {
          wx.hideLoading()
        })
      }
    })
  },
  searchScore:function(){
    this.data.scorelist = []
    var start = 0
    var pageSize = this.data.pageSize
    var searchm = this.data.searchm
    var searchc = this.data.searchc
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorScore',
        start: start,
        pageSize: pageSize,
        searchm: searchm,
        searchc: searchc
      },
      success: function (res) {
        that.setData({
          scorelist: res.data.scorelist
        })
      }
    })
  }

})