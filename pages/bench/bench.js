// pages/bench/bench.js
var app = getApp()
Page({
  data: {
    quetions:[
      {head:"../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
      tittle:"这是哪首谁给我发个我给而望各位哥特各位如果而同为耳根微微各位各位如果微软个违反问个问我学校",
      time:"1小时前",
      anwsers:"30",
      views:"123"},
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
      },
      {
        head: "../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
        tittle: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
      {
        head: "../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
        tittle: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
      {
        head: "../../imgs/txmb.jpg",
        name: "木小鱼鱼",
        dates: "2018-04-07",
        tittle: "这是哪首俺是个穷鬼哈哈啊的上的噶似的嘎学校",
        time: "1小时前",
        anwsers: "30",
        views: "123"
      },
    ]
  },
  onLoad: function () {
  },

  bindtapAsk:function(){
    wx.navigateTo({
      url: 'ask/ask',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
}) 