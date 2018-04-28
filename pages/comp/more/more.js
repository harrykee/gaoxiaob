// pages/comp/more/more.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    start:0,
    pageSize:7,
    isFormload:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var catekey = options.catekey
    var start = 0
    var pageSize = this.data.pageSize
    const that = this
    wx.request({
      url: apiUrl,
      data:{
        ac:'getMoreArticle',
        catekey:catekey,
        start:start,
        pageSize:pageSize
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          articleList: res.data.articleList,
          catekey: catekey
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
    var catekey=this.data.catekey
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'getMoreArticle',
        catekey: catekey,
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