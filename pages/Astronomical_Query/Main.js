
// 在页面中定义插屏广告
var app = getApp();
let interstitialAd = null
Page({
  data: {


    timu: app.globalData.allqsxs,

    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    xmad: {
      adData: {},
      ad: {
        banner: "xmd67cda48311485dabc084586c16008",
      }
    }
  },
  onLoad: function (options) {
    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-11e58c149a2f21eb'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }
  },
  onShow: function (options) {
    this.setData({
      timu: app.globalData.allqsxs

    })
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },



});