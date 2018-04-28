var wxCharts = require('../../../utils/wxcharts.js');

const app = getApp();
const apiUrl = getApp().globalData.apiUrl

Page({
  data: {  
    currentTab: 0,
    yearTab:0,
    apiUrl:apiUrl,
    isArtShow: false,
    isSciShow: true,
  },
  onLoad:function(e){
    var that = this;
    var date = new Date()
    var num = 0
    var getyear = date.getFullYear()
    var year = getyear - (num * 1 + 1)
    that.setData({
      year:date.getFullYear()
    });
    wx.request({
      url: apiUrl,
      data:{ac:'getProvince'},
      success:res=>{  
        var province = res.data.lend[23]
        wx.request({
          url: apiUrl,
          data: { ac: 'batchLine',province:province},
          success: res => {
            var years = res.data.years;
            var one_aci = res.data.one_aci;
            var one_art = res.data.one_art;
            var two_aci = res.data.two_aci;
            var two_art = res.data.two_art;
            var trd_aci = res.data.trd_aci;
            var trd_art = res.data.trd_art;
            that.artsLine(years, one_art, two_art, trd_art)
            that.scienceLine(years, one_aci, two_aci, trd_aci)

          }
        })

        wx.request({
          url: apiUrl,
          data: { 
            ac: 'batchYear', 
            year: year,
            province:province 
          },
          success: function (res) {
            that.setData({
              batchlist: res.data
            })
            console.log(res.data)
          }
        })
        that.setData({
          array: res.data.lend,
          index:23
        })
      }
    })
    
  },

  bindPickerChange: function (e) {
    var province = this.data.array[e.detail.value]
    var that = this;
    var date = new Date()
    var num = this.data.yearTab
    var getyear = date.getFullYear()
    var year = getyear - (num * 1 + 1)
    this.setData({
      index: e.detail.value
    })
    wx.request({
      url: apiUrl,
      data: { ac: 'batchLine', province: province },
      success: res => {
        var years = res.data.years;
        var one_aci = res.data.one_aci;
        var one_art = res.data.one_art;
        var two_aci = res.data.two_aci;
        var two_art = res.data.two_art;
        var trd_aci = res.data.trd_aci;
        var trd_art = res.data.trd_art;
        that.artsLine(years, one_art, two_art, trd_art)
        that.scienceLine(years, one_aci, two_aci, trd_aci)

      }
    })

    wx.request({
      url: apiUrl,
      data: {
        ac: 'batchYear',
        year: year,
        province: province
      },
      success: function (res) {
        that.setData({
          batchlist: res.data
        })
        console.log(res.data)
      }
    })
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

  swichTab: function (e) {

    var that = this;

    if (this.data.yearTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        yearTab: e.target.dataset.current
      })
    }
    var num = e.target.dataset.current
    var date = new Date()
    var getyear = date.getFullYear()
    var year = getyear-(num*1+1)
    var array = this.data.array
    var province = this.data.array[this.data.index]
    wx.request({
      url: apiUrl,
      data:{
        ac:'batchYear',
        year:year,
        province: province
        },
      success:function(res){
        that.setData({
          batchlist:res.data
        })
        console.log(res.data)
      }
    })
    console.log(year-(num*1+1))
  },
  scienceLine:function(years,one_aci,two_aci,trd_aci){
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
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
  },
  artsLine: function (years, one_art, two_art, trd_art){
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
  }

});
