//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              var nickName = res.userInfo.nickName
              var avatarUrl = res.userInfo.avatarUrl
              if (nickName && avatarUrl) {
                // 登录
                wx.login({
                  success: res => {
                    console.log(res.code)
                    var code = res.code
                    wx.request({
                      url: 'https://www.wh14.club/api',
                      data: {
                        ac: "getOpenid",
                        code: code
                      },
                      success: res => {
                        console.log(res.data.openid)
                        this.globalData.openid = res.data.openid
                        var userid = res.data.openid
                        wx.request({
                          url: 'https://www.wh14.club/api',
                          data: {
                            ac: 'userExist',
                            userid: userid
                          },
                          success: res => {
                            console.log(res.data)
                            if (res.data == 'no') {
                              wx.request({
                                url: 'https://www.wh14.club/api',
                                data: {
                                  ac: 'userInfo',
                                  userid: userid,
                                  nickName: nickName,
                                  avatarUrl: avatarUrl
                                },
                                success: res => {
                                  console.log(res.data)
                                }
                              })
                            }
                          }
                        })
                      }
                    })
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  }
                })
              }
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
        else {
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              var nickName = res.userInfo.nickName
              var avatarUrl = res.userInfo.avatarUrl
              if (nickName && avatarUrl) {
                // 登录
                wx.login({
                  success: res => {
                    console.log(res.code)
                    var code = res.code
                    wx.request({
                      url: 'https://www.wh14.club/api',
                      data: {
                        ac: "getOpenid",
                        code: code
                      },
                      success: res => {
                        console.log(res.data.openid)
                        this.globalData.openid = res.data.openid
                        var userid = res.data.openid
                        wx.request({
                          url: 'https://www.wh14.club/api',
                          data: {
                            ac: 'userExist',
                            userid: userid
                          },
                          success: res => {
                            console.log(res.data)
                            if (res.data == 'no') {
                              wx.request({
                                url: 'https://www.wh14.club/api',
                                data: {
                                  ac: 'userInfo',
                                  userid: userid,
                                  nickName: nickName,
                                  avatarUrl: avatarUrl
                                },
                                success: res => {
                                  console.log(res.data)
                                }
                              })
                            }
                          }
                        })
                      }
                    })
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  }
                })
              }
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    apiUrl:'https://www.wh14.club/api'
  }
})