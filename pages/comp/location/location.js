// pages/comp/location/location.js
var QQMapWX = require('../../../utils/qqmap-wx.min.js');

var demo = new QQMapWX({
  key: 'A3UBZ-5P53F-5KWJU-JCC5N-3CA6Q-OMB4L' // 必填
});

Page({

  
  data: {
  },

  onLoad: function (options) {
    const that = this
    if(options.lat&&options.lng){
      var lat = options.lat
      var lng = options.lng
      demo.reverseGeocoder({
        location: {
          latitude: lat,
          longitude: lng
        },
        success: function (addressRes) {
          var address = addressRes.result.formatted_addresses.recommend;

          that.setData({
            markers: [{
              iconPath: "../../../imgs/location.png",
              id: 0,
              latitude: lat,
              longitude: lng,
              width: 30,
              height: 30
            }],
            lat: lat,
            lng: lng,
            address: address,
            nowAdress: getApp().globalData.nowAddress,
            circles: [{
              latitude: lat,
              longitude: lng,
              radius: 300,
              fillColor: "#440000AA"
            }]
          })
        }
      })

       
    }
    else{
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          var speed = res.speed
          var accuracy = res.accuracy
          that.setData({
            markers: [{
              iconPath: "../../../imgs/postion.png",
              id: 0,
              latitude: latitude,
              longitude: longitude,
              width: 30,
              height: 30
            }],
            lat: latitude,
            lng: longitude,  
          })
          getApp().globalData.latitude = latitude
          getApp().globalData.longitude = longitude
          
          demo.reverseGeocoder({
            location: {
              latitude: res.latitude,
              longitude: res.longitude
            },
            success: function (addressRes) {
              var address = addressRes.result.formatted_addresses.recommend;
              console.log(address)
              that.setData({
                nowAdress: address
              })
              getApp().globalData.nowAddress = address
            }
          })
        }
      })
    }
    
  },
  toMapSearch:function(){
    wx.redirectTo({
      url: '../search/search',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  markertap:function(e){
    const that = this
    var lat =this.data.lat
    var lng = this.data.lng

    demo.calculateDistance({
      to: [{
        latitude: lat,
        longitude: lng
      }, {
          latitude: getApp().globalData.latitude,
        longitude: getApp().globalData.longitude
      }],
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });

    that.setData({
      polyline: [{
        points: [{
          longitude: lng,
          latitude: lat
        }, 
        {
          longitude: getApp().globalData.longitude,
          latitude: getApp().globalData.latitude
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
    })

  }
})