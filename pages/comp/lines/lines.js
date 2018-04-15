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
  },

  onReady: function () {
    // 屏幕适配
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }

    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '成交量2',
        data: [70, 40, 65, 100, 34, 18]
      }],
      yAxis: {
        title: '成交金额 (万元)',
        titleFontColor: '#7cb5ec',
        format: function (val) {
          return val + '万';
        }
      },
      width: windowWidth,
      height: 210,
    });

    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      series: [{
        name: '客单价1',
        data: [0.10, 0.15, 0.2, 0.45, 0.37, 0.4, 0.8, 0.60, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '客单价2',
        data: [0.25, 0.30, 0.37, 0.65, 0.78, 0.69, 0.94, 0.60, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '客单价 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth ,// 屏幕超出15px
      height: 210
    });


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
  }

});
