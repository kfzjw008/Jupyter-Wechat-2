var app = getApp();

Page({
  data: {
    inputShowed: false,
    inpu: ''
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function (e) {
    var that = this
    that.setData({



    });
    // app.globalData.search = e.detail.value,
    console.log(e.detail.value, app.globalData.search)
    wx.navigateTo({ url: 'result', })
    //inputVal: "",
    //inputShowed: false

  },
  clearInput: function () {
    this.setData({

    });
  },
  inputTyping: function (e) {
    var that = this

    app.globalData.search = e.detail.value,
      console.log(this.inpu);
    console.log(e.detail.value);
    app.globalData.search = e.detail.value
  }, onShareAppMessage: function () {
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

});
