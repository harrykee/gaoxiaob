// pages/mine/newfull/newfull.js
var apiUrl = getApp().globalData.apiUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhead:'../../../imgs/txmb.jpg',
    uname:'撒的发生大女大',
    protime:'123214235',
    context:'阿佛那是你大V快打吧好爱卡编辑可擦神盾局',
    askname:'fsfsd',
    askcontext:'sfsdvsdfbdassfdga'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var prokey = options.prokey
    var userid = options.userid
    var newdate = options.newdate
    var newid = options.newid
    wx.request({
      url: apiUrl,
      data:{
        ac: 'newsDetail',
        prokey: prokey,
        userid: userid,
        newdate:newdate
      },
      success:function(res){
        wx.request({
          url: apiUrl,
          data:{ac:'updateNew',newid:newid}
        })
        that.setData({
          ansname: res.data.ansname,
          anshead: res.data.anshead,
          ansdate: res.data.ansdate,
          anscontext: res.data.anscontext,
          askname: res.data.askname,
          askcontext: res.data.askcontext
        })
      }
    })
    console.log(options.prokey)
    console.log(options.userid)
    console.log(options.newid)
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