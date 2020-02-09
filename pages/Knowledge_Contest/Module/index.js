// pages/qa/mokuai/index.js




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
    this.setData({
      pic1: app.globalData.Main_Server + '/images/datiansai.JPG',
      pic2: app.globalData.Main_Server + '/images/diyuexi.jpg',
      pic3: app.globalData.Main_Server + '/images/hangkonghangtian.jpg',
      pic4: app.globalData.Main_Server + '/images/hengxing.jpg',
      pic5: app.globalData.Main_Server + '/images/taiyangxi.jpg',
      pic6: app.globalData.Main_Server + '/images/tianwenguance.jpg',
      pic7: app.globalData.Main_Server + '/images/tianwenxianxiang.JPG',
      pic8: app.globalData.Main_Server + '/images/lengzhishi.JPG',
      pic9: app.globalData.Main_Server + '/images/tianwenxueshi.jpg',
      pic10: app.globalData.Main_Server + '/images/jichuzhishi.JPG',
      pic11: app.globalData.Main_Server + '/images/xingzuoxingtu.jpg',
      pic12: app.globalData.Main_Server + '/images/yinhexi.jpg',
      pic13: app.globalData.Main_Server + '/images/zhongxigudai.jpg',
      //icon60: app.globalData.Main_Server + '/images/datiansai.JPG',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, resul: function (e) {
    app.globalData.search = e.currentTarget.id;
    wx.navigateTo({ url: 'result', })
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
    var that = this
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/user/AddIntergal",
      data: {
        count: 8,
        name: "分享积分",
        token: token,
        openid: openid

      },
      fail(res) {
        //console.log(res)
        wx.showModal({
          content: '分享失败，请稍后重试！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')

            }
          }
        })
      },
      success(res) {
      }
    })

  }
})