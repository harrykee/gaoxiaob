// pages/comp/ways/ways.js
const apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    schindex:0,
    index: 0,
    indexbatch:0,
    currentTab: 0,
    start: 0,
    pageSize: 15,
    isFromSearch:true,
  },
  onLoad: function (options) {
    const that = this
    wx.request({
      url: apiUrl,
      data:{ac:"getNature"},
      success:function(res){
        var yearlist = res.data.yearlist
        var batchlist = res.data.batchlist
        yearlist.unshift("")
        batchlist.unshift("")
        that.setData({
          batchlist:batchlist,
          yearlist:yearlist
        })
        console.log(yearlist)
        console.log(batchlist)
      }
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeBacth: function (e) {

    this.setData({
      indexbatch: e.detail.value
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
  },
  getValue:function(e){
    this.setData({
      inputTxt: e.currentTarget.dataset.text,
      hidden: true
    })

  },
  searchInput: function (e) {
    const that = this
    var search = e.detail.value
    if(search!=""){
      wx.request({
        url: apiUrl,
        data: {
          ac: "enrollSchoolSearch",
          search: search
        },
        success: function (res) {
          var schoolist = res.data.schoolist          
          if (schoolist) {
            if (schoolist.length>1){
              that.setData({
                schlist: schoolist,
                hidden: false,
              })
            }
          }
        }
      })

    }
    that.setData({
      inputTxt: search
    })
    
  },
  enrollScoreSerch:function(){
    const that = this
    var search = this.data.inputTxt
    var year = this.data.yearlist[this.data.index]
    var batch = this.data.batchlist[this.data.indexbatch]
    var currentTab = this.data.currentTab
    var pageSize = this.data.pageSize
    var art_sci = ""
    if(currentTab == 1) {
      art_sci = "文科"
    }
    if (currentTab == 2){
      art_sci = "理科"
    }
    if(search){
      wx.request({
        url: apiUrl,
        data:{
          ac:"enrollScoreSearch",
          school:search,
          year:year,
          batch:batch,
          artsci:art_sci,
          start:0,
          pageSize:pageSize
        },
        success:function(res){
          that.setData({
            scorelist: res.data.scorelist
          })
        }
      })
    }else{
      wx.showModal({
        title: '你没有输入学校',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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
    let searchList = []
    const that = this
    var search = this.data.inputTxt
    var year = this.data.yearlist[this.data.index]
    var batch = this.data.batchlist[this.data.indexbatch]
    var currentTab = this.data.currentTab
    var pageSize = this.data.pageSize
    var start = this.data.start
    var art_sci = ""
    if (currentTab == 1) {
      art_sci = "文科"
    }
    if (currentTab == 2) {
      art_sci = "理科"
    }
    if(search){
      wx.request({
        url: apiUrl,
        data: {
          ac: "enrollScoreSearch",
          school: search,
          year: year,
          batch: batch,
          artsci: art_sci,
          start: start,
          pageSize: pageSize
        },
        success: function (res) {
          that.data.isFromSearch ? searchList = res.data.scorelist : searchList = that.data.scorelist.concat(res.data.scorelist)
          that.setData({
            scorelist: searchList
          })
        }
      })
    }
    
  },
  
})