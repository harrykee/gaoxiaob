// pages/bench/bench.js
var apiUrl = getApp().globalData.apiUrl;
var app = getApp()
Page({
  data: {
    apiUrl:apiUrl,     
    start: 0,      //返回数据的个数  
    pageSize: 6,
    isFromSearch: true,
    search:'',
  },
  onLoad: function () {
    const that = this;
    var start = 0
    var pageSize = this.data.pageSize
    var search = this.data.search
    wx.request({
      url: apiUrl,
      data:{
        ac:'searchPro',
        search: search,
        start: start,
        pageSize: pageSize
        },
      success:function(res){
        that.setData({
          problems:res.data.problems
        })
      }
    })
  },
  loadScrollLower:function(){
    var pageSize = this.data.pageSize
    var start = this.data.start
    let that = this;
    that.setData({
      start: (start*1)+(pageSize*1),
      isFromSearch: false
    });
    that.loadMore();
  },
  loadMore:function(){
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
        ac: 'searchPro',
        search: search,
        start: start,
        pageSize: pageSize
      },
      success: function (res) {
        that.data.isFromSearch ? searchList = res.data.problems : searchList = that.data.problems.concat(res.data.problems)
          that.setData({
            problems: searchList
          })

        setTimeout(function () {
          wx.hideLoading()
        })
      }
    })
  },

  bindtapAsk:function(e){
    var nickName = e.detail.userInfo.nickName
    var avatarUrl = e.detail.userInfo.avatarUrl
    if(nickName&&avatarUrl){
      wx.request({
        url: apiUrl,
        data: {
          ac: 'userExist',
          userid: getApp().globalData.openid
        },
        success: res => {
          console.log(res.data)
          if (res.data == 'yes') {
            wx.navigateTo({
              url: 'ask/ask',
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
            
          }
          else{

            wx.showModal({
              title: '将获取您的头像和昵称',
              success: function (res) {
                if (res.confirm) {
                  wx.request({
                    url: apiUrl,
                    data: {
                      ac: 'userInfo',
                      userid: getApp().globalData.openid,
                      nickName: nickName,
                      nickName: avatarUrl
                    },
                    success: res => {
                      console.log(res.data)
                    }
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })


            
          }         
        }
      })
    }
    
  },
  searchInput:function(e){
    const that = this
    var search = e.detail.value
    var start = 0
    var pageSize = this.data.pageSize
    wx.request({
      url: apiUrl,
      data:{
        ac:'searchPro',
        search:search,
        start:start,
        pageSize: pageSize
        },
        success:function(res){
          that.setData({
            problems: res.data.problems,
            search: search
          })
        }
    })
    that.setData({
      search: search
    })
  }
}) 