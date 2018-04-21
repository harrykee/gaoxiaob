// pages/bench/ask/ask.js
var apiUrl = getApp().globalData.apiUrl;
var util = require('../../../utils/util.js')
Page({

  data: {
    apiUrl:apiUrl
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  problemSubmit:function(e){
    var problem = e.detail.value.problem
    var date = util.formatTime(new Date())
    if(problem==''){
      wx.showModal({
        title: '你没有输入任何内容',
        showCancel:false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    else{
      wx.request({
        url: apiUrl,
        data: {
          ac: 'askProblem',
          problem: problem,
          userid: getApp().globalData.openid,
          askdate: date
        },
        success: function (res) {
          if (res.data == 'success') {
            wx.switchTab({
              url: '../../bench/bench',
              // success: function (e) {
              //   var page = getCurrentPages().pop();
              //   if (page == undefined || page == null) return;
              //   page.onLoad();
              // } 
            })
          }
        }
      })
    }
    

  },
})