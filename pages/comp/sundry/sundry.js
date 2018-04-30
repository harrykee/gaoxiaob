// pages/comp/sundry/sundry.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  data: {
    apiUrl:apiUrl,
    pageSize:15,
    start:0,
    searchm:'',
    searchc:'',
    isFromSearch:true,
    index:1
  },
  onLoad: function (options) {
    var start = 0
    var pageSize = this.data.pageSize
    const that = this
    var searchm = ""
    var searchc = ""
    wx.request({
      url: apiUrl,
      data:{ac:'getSpecYear'},
      success:function(res){
        var year = res.data.array[1]
        that.setData({
          array: res.data.array
        })
        wx.request({
          url: apiUrl,
          data: {
            ac: 'majorScore',
            start: start,
            pageSize: pageSize,
            searchm: searchm,
            searchc: searchc,
            year: year
          },
          success: function (res) {
            that.setData({
              scorelist: res.data.scorelist,
            })
          }
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
    var year = this.data.array[this.data.index]
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorScore',
        start: start,
        pageSize: pageSize,
        searchm: searchm,
        searchc: searchc,
        year:year
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
    var year = this.data.array[this.data.index]
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorScore',
        start: start,
        pageSize: pageSize,
        searchm: searchm,
        searchc: searchc,
        year:year
      },
      success: function (res) {
        that.setData({
          scorelist: res.data.scorelist,
          start: 0
        })
      }
    })
  },
  SpecialtyDetail:function(e){
    var sname =e.currentTarget.dataset.sname
    var mname = e.currentTarget.dataset.mname
    var year = e.currentTarget.dataset.year
    var cate = e.currentTarget.dataset.cate
    var batch = e.currentTarget.dataset.batch
    var prov = e.currentTarget.dataset.prov
    wx.navigateTo({
      url: '../spec/spec?sname='+sname+'&mname='+mname+'&year='+year+'&cate='+cate+'&batch='+batch+'&prov='+prov,
    })
  },
  bindPickerChange: function (e) {
    const that = this
    var start = 0
    var pageSize = this.data.pageSize
    var searchm = this.data.searchm
    var searchc = this.data.searchc
    var year = this.data.array[e.detail.value]
    wx.request({
      url: apiUrl,
      data: {
        ac: 'majorScore',
        start: start,
        pageSize: pageSize,
        searchm: searchm,
        searchc: searchc,
        year:year
      },
      success:function(res){
        that.setData({
          scorelist: res.data.scorelist,
          start:0
        })
      }

    })
    this.setData({
      index: e.detail.value
    })
  },

})