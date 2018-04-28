// pages/mine/qanda/qanda.js
var apiUrl = getApp().globalData.apiUrl;
Page({

  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    apiUrl:apiUrl,
    start:0,
    pageSize:6,
    isFromSearch:true,
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   */
  onLoad: function (options) {
    const that = this
    var start = 0
    var pageSize = 6
    wx.request({
      url: apiUrl,
      data: {
        ac: 'userAskProblems',
        start: start,
        pageSize: pageSize,
        userid: getApp().globalData.openid
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          listData: res.data.problems,
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
  bindChange: function (e) {

    var that = this;
    var start = 0
    var pageSize = this.data.pageSize
    if (e.detail.current == 0) {
      this.setData({
        listData: [],
      })
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAskProblems',
          start: start,
          pageSize: pageSize,
          userid: getApp().globalData.openid
        },
        success: function (res) {
          that.setData({
            listData: res.data.problems,
            start:0,
          })
        }
      })

    }
    if (e.detail.current == 1) {
      this.setData({
        listData: [],
      })
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAnsProblems',
          start: start,
          pageSize: pageSize,
          userid: getApp().globalData.openid
        },
        success: function (res) {
          that.setData({
            listData: res.data.answers,
            start:0,
          })
        }
      })
    }

    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {
    let that = this;
    var start = 0
    var pageSize = this.data.pageSize
    //我的提问
    if (e.target.dataset.current == 0) {
      this.setData({
        listData: [],
      })
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAskProblems',
          start: start,
          pageSize: pageSize,
          userid:getApp().globalData.openid
        },
        success: function (res) {
            that.setData({
              listData: res.data.problems,
              start: 0,
            })
        }
      })

    } 
    // 我的回答
    if (e.target.dataset.current == 1) {
      this.setData({
        listData: [],
      })
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAnsProblems',
          start: start,
          pageSize: pageSize,
          userid: getApp().globalData.openid
        },
        success: function (res) {
            that.setData({
              listData: res.data.answers,
              start: 0,
            })
        }
      })
    }

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  loadMore:function () {
    const that = this
    var banch = this.data.currentTab
    var start = this.data.start
    var pageSize = this.data.pageSize
    var listdata = []
    if (banch == '0') {
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAskProblems',
          start: start,
          pageSize: pageSize,
          userid: getApp().globalData.openid
        },
        success: function (res) {
          that.data.isFromSearch ? listdata = res.data.problems : listdata = that.data.listData.concat(res.data.problems)
          that.setData({
            listData: listdata,
          })
        }
      })
    }
    if (banch == '1') {
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userAnsProblems',
          start: start,
          pageSize: pageSize,
          userid: getApp().globalData.openid
        },
        success: function (res) {
          that.data.isFromSearch ? listdata = res.data.answers : listdata = that.data.listData.concat(res.data.answers)
          that.setData({
            listData: listdata,
          })
        }
      })
    }
  },
  scrollLower:function(){
    var pageSize = this.data.pageSize
    var start = this.data.start
    let that = this;
    that.setData({
      start: (start * 1) + (pageSize * 1),
      isFromSearch: false
    });
    that.loadMore();
  },
  
})