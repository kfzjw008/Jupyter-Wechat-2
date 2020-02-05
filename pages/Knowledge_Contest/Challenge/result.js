// pages/qa/cs/result.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    csrighttimu: app.globalData.tzjsqsave-1,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }, gotoPage6: function () {

    //此处填写上传内容代码


    //成功后跳转界面
    wx.redirectTo({ url: 'success', })

    //失败后跳转界面
    // wx.navigateTo({ url: 'fail', })
  }, gotoPage2: function () {
    wx.redirectTo({ url: 'start', })

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
    this.setData({
      csrighttimu: app.globalData.tzjsqsave-1,
    })
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')

    var nickname = wx.getStorageSync('nickname')
wx.request({
  url: app.globalData.Main_Server + "/api/question/updaterecord",
  data: {
    openid:openid,
    count: app.globalData.tzjsqsave - 1,
    nickname:nickname,
  },
  fail(res) {
  wx.showToast({
      title: '很遗憾，提交到排行榜失败,请稍后重试',
      icon: "none",
      duration: 2000
    })

  },
  success(res) {
    wx.showToast({
      title: '已经提交到排行榜',
      icon: "none",
      duration: 2000
    })
    console.log(res.data)
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