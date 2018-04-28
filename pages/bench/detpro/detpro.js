// pages/bench/detpro/detpro.js
var apiUrl = getApp().globalData.apiUrl;
Page({
  data: {
    apiUrl: apiUrl,
    hidden:true,
    start: 0,      
    pageSize: 6,
    isFromSearch: true,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var prokey = options.prokey
    var start = this.data.start
    var pageSize = this.data.pageSize
    wx.request({
      url: apiUrl,
      data: { ac: 'question', prokey: prokey },
      success: function (res) {
        var userid = res.data.openid;
        if(userid != getApp().globalData.openid){
          that.setData({
            hidden:false
          })
        }
        wx.request({
          url: apiUrl,
          data: { 
            ac: 'answerList', 
            prokey: prokey ,
            start:start,
            pageSize:pageSize
            },
          success: function (res) {
            console.log(res.data)
            if (res.data.answerlist) {
              that.setData({
                answerlist: res.data.answerlist
              })
            }
          }
        })
      
        that.setData({
          prokey: res.data.prokey,
          uname: res.data.uname,
          procontext: res.data.procontext,
          protime: res.data.protime,
          openid: res.data.openid,
          uhead: res.data.uhead,
          nums:res.data.nums,
          proid:prokey
        })
      }
    })
    wx.request({
      url: apiUrl,
      data: {
        ac: 'problemView',
        prokey: prokey,
        userid:getApp().globalData.openid
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    console.log(prokey)
  },

  bindtapWrite: function () {
    const prokey = this.data.prokey
    wx.navigateTo({
      url: '../write/write?prokey='+prokey,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  loadScrollLower: function () {
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
    var prokey = this.data.proid
    var that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'answerList',
        prokey: prokey,
        start: start,
        pageSize: pageSize
      },
      success: function (res) {
        that.data.isFromSearch ? searchList = res.data.answerlist : searchList = that.data.answerlist.concat(res.data.answerlist)
        that.setData({
          answerlist: searchList
        })

        setTimeout(function () {
          wx.hideLoading()
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