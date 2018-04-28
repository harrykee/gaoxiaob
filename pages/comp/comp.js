// pages/comp/comp.js
var apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.request({
      url: apiUrl,
      data:{ac:'artitle'},
      success:function(res){
        that.setData({
          ktittles: res.data.ktitles,
          wtittles: res.data.wtitles,
          kcateid:res.data.kcateid,
          wcateid:res.data.wcateid,
          kclass: res.data.kclass,
          wclass: res.data.wclass
        })
      }
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  GetMoreArt:function(){
    var kcateid = this.data.kcateid
    wx.navigateTo({
      url: 'more/more?catekey='+kcateid,
    })
  },

  GetMoreList:function(){
    var wcateid = this.data.wcateid
    wx.navigateTo({
      url: 'more/more?catekey='+wcateid,
    })
  },

  GotoLines:function(){
    wx.navigateTo({
      url: 'lines/lines',
    })
  },
  ListSchools:function(){
    wx.navigateTo({
      url: 'school/school',
    })
  },
  GotoKnows:function(){
    wx.navigateTo({
      url: 'knows/knows',
    })
  },
  GotoWays: function () {
    wx.navigateTo({
      url: 'ways/ways',
    })
  },
  GotoLocation:function(){
    wx.navigateTo({
      url: 'location/location',
    })
  },
  GotoSundry: function () {
    wx.navigateTo({
      url: 'sundry/sundry',
    })
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