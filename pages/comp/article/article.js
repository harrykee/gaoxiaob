// pages/comp/article/article.js
const apiUrl = getApp().globalData.apiUrl;
var util = require('../../../utils/util.js')
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl,
    notchidden:true,
    collhidden:true,
    notcoll:'../../../imgs/collection.png',
    collection:'../../../imgs/collection_fill.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    var articlekey = options.articlekey
    var date = util.formatTime(new Date())
    console.log(options.articlekey)
    wx.request({
      url: apiUrl,
      data:{
        ac:'addArticleViews',
        articlekey:articlekey,
        userid:getApp().globalData.openid,
        readdate:date
      },
      success:function(res){
        wx.request({
          url: apiUrl,
          data: {
            ac: 'articleDetail',
            articlekey: articlekey,
            userid:getApp().globalData.openid
          },
          success: function (res) {
            var article = res.data.context
            WxParse.wxParse('article', 'html', article, that);
            that.setData({
              tittle:res.data.tittle,
              artdate: res.data.artdate,
              views: res.data.views,
              artview:'../../../imgs/view.png',
              collect:res.data.collect,
              artkey:res.data.artkey
            })
            if(res.data.collect == 'coll'){
              that.setData({
                collhidden: false,
              })
            }
            else{
              that.setData({
                notchidden: false,
              })
            } 
          }
        })
      }
    })
    
  },


  collectionBind:function(){
    var artkey = this.data.artkey
    const that = this
    wx.request({
      url: apiUrl,
      data: {
        ac: 'notArticleCollect',
        artkey: artkey,
        userid: getApp().globalData.openid
      },
      success: function (res) {
        if (res.data == 'success') {
          that.setData({
            collhidden: true,
            notchidden: false
          })
        }
      }
    })
  },
  notcollectionBind: function () {
    var date = util.formatTime(new Date())
    var artkey = this.data.artkey
    const that = this
    wx.request({
      url: apiUrl,
      data:{
        ac:'articleCollect',
        artkey:artkey,
        colldate:date,
        userid:getApp().globalData.openid
      },
      success:function(res){
        if(res.data == 'success'){
          that.setData({
            collhidden: false,
            notchidden: true
          })
        }
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