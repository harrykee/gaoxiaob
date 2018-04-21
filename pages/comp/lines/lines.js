var wxCharts = require('../../../utils/wxcharts.js');

const app = getApp();
const apiUrl = getApp().globalData.apiUrl

Page({
  data: {  
    currentTab: 0,
    apiUrl:apiUrl,
    isArtShow: false,
    isSciShow: true,
    enroll: [
      {
        enyear: "2017",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      },
      {
        enyear: "2016",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      },
      {
        enyear: "2015",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      },
      {
        enyear: "2014",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      }, {
        enyear: "2013",
        batch: "本科一批",
        science: "理科",
        highest: "600",
        lowest: "460",
        average: "530"
      }
    ]
  },
  onLoad:function(e){
    var that = this;
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    var date = new Date()
    that.setData({
      year:date.getFullYear()
    });
    wx.request({
      url: apiUrl,
      data:{ac:'batchLine'},
      success:res=>{
        var years = res.data.years;
        var one_aci = res.data.one_aci;
        var one_art =res.data.one_art;
        var two_aci = res.data.two_aci;
        var two_art = res.data.two_art;
        var trd_aci = res.data.trd_aci;
        var trd_art = res.data.trd_art;

        let windowWidth = 320;
        try {
          let res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
        } catch (e) {
          // do something when get system info failed
        }

        new wxCharts({
          canvasId: 'columnCanvas',
          type: 'line',
          categories: years,
          series: [{
            name: '本科一批',
            data: one_art,
            format: function (val) {
              return val;
            }
          },
          {
            name: '本科二批',
            data: two_art,
            format: function (val) {
              return val;
            }
          }, {
            name: '专科',
            data: trd_art,
            format: function (val) {
              return val;
            }
          }],
          yAxis: {
            title: '分数',
            format: function (val) {
              return val;
            },
            min: 200
          },
          width: windowWidth,// 屏幕超出15px
          height: 210
        });

        new wxCharts({
          canvasId: 'lineCanvas',
          type: 'line',
          categories: years,
          series: [{
            name: '本科一批',
            data: one_aci,
            format: function (val) {
              return val;
            }
          },
          {
            name: '本科二批',
            data: two_aci,
            format: function (val) {
              return val;
            }
          }, {
            name: '专科',
            data: trd_aci,
            format: function (val) {
              return val;
            }
          }],
          yAxis: {
            title: '分数',
            format: function (val) {
              return val;
            },
            min: 200
          },
          width: windowWidth,// 屏幕超出15px
          height: 210
        });


      }
    })
  },

  onReady: function () {
    // 屏幕适配
  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    if (this.data.currentTab==0){
      that.setData({
        isArtShow: false,
        isSciShow: true,
      })
    }
    if (this.data.currentTab == 1) {
      that.setData({
        isArtShow: true,
        isSciShow: false,
      })
    }
  },

  bindChange: function (e) {

    var that = this;
    that.setData({ convertTab: e.detail.current });

  },

  swichTab: function (e) {

    var that = this;

    if (this.data.convertTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        convertTab: e.target.dataset.current
      })
    }
    var num = e.target.dataset.current
    var date = new Date()
    var getyear = date.getFullYear()
    var year = getyear-(num*1+1)
    wx.request({
      url: apiUrl,
      data:{ac:'batchYear',year:year},
      success:function(res){
        that.setData({
          batchlist:res.data
        })
        console.log(res.data)
      }
    })
    console.log(year-(num*1+1))
  }

});
