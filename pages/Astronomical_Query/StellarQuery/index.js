var app = getApp();
// 在页面中定义插屏广告
let interstitialAd = null
//var Page = require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;
Page({
  data: {
    xmad: {
      adData: {},
      ad: {
        banner: "xm9065dd29902f0f3959d5fb0becfa6d",
      }
    },
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
    //console.log(e.detail.value,app.globalData.search)
    wx.navigateTo({ url: 'result', })
    //inputVal: "",
    //inputShowed: false

  }, hideInput2: function (e) {
    var that = this
    app.globalData.search = e.currentTarget.id

    // app.globalData.search = e.detail.value,
    //console.log(e.detail.value, app.globalData.search)
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

    app.globalData.search = e.detail.value
    //console.log(this.inpu);
    //console.log(e.detail.value);
  },
  onLoad: function (options) {
    // 在页面onLoad回调事件中创建插屏广告实例
    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-eb36e0673d1c9991'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }
  },
  onShow: function (options) {
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
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
})
