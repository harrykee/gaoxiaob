// pages/home/home.js
var apiUrl = getApp().globalData.apiUrl;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    apiUrl:apiUrl, 
    college:[
      {
        colimg:"../../imgs/jmu01.jpg",
        colname:"集美大学",
        coladd:"厦门市集美区银江路185号",
        colicon:"../../imgs/jmu.jpg"
      },
      {
        colimg: "../../imgs/xmu.jpg",
        colname: "厦门大学",
        coladd: "厦门市思明区思明南路422号",
        colicon: "../../imgs/xmu00.jpg"
      },
      {
        colimg: "../../imgs/fzu01.jpg",
        colname: "福州大学",
        coladd: "福州市闽侯县大学新区学园路2号",
        colicon: "../../imgs/fzu.jpg"
      },
      {
        colimg: "../../imgs/xmu.jpg",
        colname: "厦门大学",
        coladd: "厦门市思明区思明南路422号",
        colicon: "../../imgs/xmu00.jpg"
      },
      {
        colimg: "../../imgs/jmu01.jpg",
        colname: "集美大学",
        coladd: "厦门市集美区银江路185号",
        colicon: "../../imgs/jmu.jpg"
      },
      {
        colimg: "../../imgs/xmu.jpg",
        colname: "厦门大学",
        coladd: "厦门市思明区思明南路422号",
        colicon: "../../imgs/xmu00.jpg"
      },
      {
        colimg: "../../imgs/jmu01.jpg",
        colname: "集美大学",
        coladd: "厦门市集美区银江路185号",
        colicon: "../../imgs/jmu.jpg"
      }
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: apiUrl,
      data:{
        ac:"hostuni",
      },
      success:function(res){
        that.setData({
          college: res.data.colist
        })
        // wx.getSetting({
        //   success: res => {
        //     if (res.authSetting['scope.userInfo']) {
        //       wx.getUserInfo({
        //         success: res => {
        //           getApp().globalData.userInfo = res.userInfo
        //           var nickName = res.userInfo.nickName
        //           var avatarUrl = res.userInfo.avatarUrl
        //           if (nickName && avatarUrl) {
        //             wx.login({
        //               success: res => {
        //                 console.log(res.code)
        //                 var code = res.code
        //                 wx.request({
        //                   url: 'https://www.wh14.club/api',
        //                   data: {
        //                     ac: "getOpenid",
        //                     code: code
        //                   },
        //                   success: res => {
        //                     console.log(res.data.openid)
        //                     getApp().globalData.openid = res.data.openid
        //                     var userid = res.data.openid
        //                     wx.request({
        //                       url: 'https://www.wh14.club/api',
        //                       data: {
        //                         ac: 'userExist',
        //                         userid: userid
        //                       },
        //                       success: res => {
        //                         console.log(res.data)
        //                         if (res.data == 'no') {
        //                           wx.request({
        //                             url: 'https://www.wh14.club/api',
        //                             data: {
        //                               ac: 'userInfo',
        //                               userid: userid,
        //                               nickName: nickName,
        //                               avatarUrl: avatarUrl
        //                             },
        //                             success: res => {
        //                               console.log(res.data)
        //                             }
        //                           })
        //                         }
        //                       }
        //                     })
        //                   }
        //                 })
        //               }
        //             })
        //           }

        //           if (this.userInfoReadyCallback) {
        //             this.userInfoReadyCallback(res)
        //           }
        //         }
        //       })
        //     }
        //     else{
        //       wx.getUserInfo({
        //         success: res => {
        //           getApp().globalData.userInfo = res.userInfo
        //           var nickName = res.userInfo.nickName
        //           var avatarUrl = res.userInfo.avatarUrl
        //           if (nickName && avatarUrl) {
        //             wx.login({
        //               success: res => {
        //                 console.log(res.code)
        //                 var code = res.code
        //                 wx.request({
        //                   url: 'https://www.wh14.club/api',
        //                   data: {
        //                     ac: "getOpenid",
        //                     code: code
        //                   },
        //                   success: res => {
        //                     console.log(res.data.openid)
        //                     getApp().globalData.openid = res.data.openid
        //                     var userid = res.data.openid
        //                     wx.request({
        //                       url: 'https://www.wh14.club/api',
        //                       data: {
        //                         ac: 'userExist',
        //                         userid: userid
        //                       },
        //                       success: res => {
        //                         console.log(res.data)
        //                         if (res.data == 'no') {
        //                           wx.request({
        //                             url: 'https://www.wh14.club/api',
        //                             data: {
        //                               ac: 'userInfo',
        //                               userid: userid,
        //                               nickName: nickName,
        //                               avatarUrl: avatarUrl
        //                             },
        //                             success: res => {
        //                               console.log(res.data)
        //                             }
        //                           })
        //                         }
        //                       }
        //                     })
        //                   }
        //                 })
        //               }
        //             })
        //           }

        //           if (this.userInfoReadyCallback) {
        //             this.userInfoReadyCallback(res)
        //           }
        //         }
        //       })  
        //     }
        //   }
        // })
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