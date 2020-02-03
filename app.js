//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    userInfo: null,
    Main_Server:"http://localhost:8080",//主请求服务器
    LON:"116.2",//经度
    LAT:"39.9",//纬度
    inp:1,
    fjd:0,
    fwd:0
  }
})