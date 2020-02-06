// pages/Astronomical_Query/planet/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ["水星", "金星", "地球","火星","木星","土星","天王星","海王星"],

  }, PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
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
    var that =this
    wx.request({
      url: app.globalData.Main_Server + "/api/function/EightPlanets",
      data: {

      },
      success(res) {
        var y = res.data.Result
       
        try {
          wx.setStorageSync('Planet', res.data.Result)
        } catch (e) { }
        that.setData({
         
        })


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