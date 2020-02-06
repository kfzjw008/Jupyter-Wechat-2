// pages/Knowledge_Contest/record/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that=this
    var name = wx.getStorageSync('nickname')
    wx.request({
      url: app.globalData.Main_Server + "/api/rank/myrecord",
      data: {
      nick:name,
      },
      fail(res) {
      },
      success(res) {
        console.log(res.data)
        var a1 = res.data.CurrentQuestion.rate
        var   a2= res.data.allQuestion.allquestion
        var    a3= res.data.integral.sum
         var     a4= res.data.tz.count
        that.setData({
          a1:a1,
          a2:a2,
          a3:a3,
          a4:a4,
          hidden: true
        })



        //console.log(pgc)
      }
    })
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