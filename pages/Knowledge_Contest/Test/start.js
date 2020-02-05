// pages/qa/cs/start.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  }, gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

    })
  }, gotoPage6: function () {
    wx.redirectTo({ url: 'test', })
  }, gotoPage7: function () {
    wx.redirectTo({ url: 'zdy', })
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
    app.globalData.sj = 600,//修改题数
      app.globalData.tishu = 20
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    app.globalData.sj = 600,//修改题数
      app.globalData.tishu = 20
    // clearInterval(that.data.intervarID);
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