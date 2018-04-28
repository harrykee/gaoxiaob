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
    quetions:[
      {
        head: "../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
        tittle: "这是哪首安放到沙发上法师打啊学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
      {
        head: "../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
        tittle: "这是哪首阿三发射点嘎啊是刚刚和人学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      }
    ]
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

  bindtapAsk:function(){
    wx.navigateTo({
      url: 'ask/ask',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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