// pages/comp/spec/spec.js
const apiUrl = getApp().globalData.apiUrl;
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
    var sname = options.sname
    var mname = options.mname
    var year = options.year
    var cate = options.cate
    var batch = options.batch
    var prov = options.prov
    wx.request({
      url: apiUrl,
      data:{
        ac:'mojorSchoolDetail',
        sname:sname,
        mname:mname,
        year:year,
        cate:cate,
        batch:batch,
        prov:prov
      },
      success:function(res){
        that.setData({
          school: res.data.school_name,
          major: res.data.major_name,
          local: res.data.student_loca,
          category: res.data.category,
          batch: res.data.batch,
          control: res.data.control,
          lowest: res.data.lowest,
          highest: res.data.highest,
          aver: res.data.aver_score,
          year: res.data.par_year
        })
      }
    })

   
  },

})