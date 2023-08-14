// pages/Astronomical_Query/moon/index.js
var app = getApp();
function getToday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) {
    month = "0" + month;
  };
  if (day < 10) {
    day = "0" + day;
  };
  //  如果需要时分秒 
  // var h = now.getHours(); 
  // var m = now.getMinutes(); 
  // var s = now.getSeconds(); 
  var formatDate = year + "-" + month + "-" + day;
  return formatDate;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    y: "请选择日期",
    m: "请选择日期",
    d: "请选择日期",
    moon: "请选择日期",
    re: "请选择日期",
    re2: "",
    r:"加载中",
    s:"加载中"
  }, DateChange(e) {
/*
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log(res)
        app.globalData.LAT = res.latitude
        app.globalData.LON = res.longitude
        that.setData({
          lon: app.globalData.LON,
          lat: app.globalData.LAT,
        })
      }
    })*/
    this.setData({
      date: e.detail.value
    })


    var arr = e.detail.value.split("-");
    var that = this
    wx.request({
      url: app.globalData.Main_Server + "/api/function/SearchSunriseset",
      data: {
        year: arr[0],
        month: arr[1],
        day: arr[2],
        zone: 8,
        lon: app.globalData.LON,
        lat: app.globalData.LAT

      },
      success(res) {
        var rise = res.data.Result.rise
        var set = res.data.Result.set
        that.setData({

          r: rise,
          s: set
        })

      }
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
/*
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log(res)
        app.globalData.LAT = res.latitude
        app.globalData.LON = res.longitude
        that.setData({
          lon: app.globalData.LON,
          lat: app.globalData.LAT,
        })
      }
    })*/
    var that = this

    console.log(getToday())
    this.setData({
      date: getToday()
    })
    var arr = getToday().split("-");

    wx.request({
      url: app.globalData.Main_Server + "/api/function/SearchSunriseset",
      data: {
        year: arr[0],
        month: arr[1],
        day: arr[2],
        zone: 8,
        lon: app.globalData.LON,
        lat: app.globalData.LAT

      },
      success(res) {
        var rise = res.data.Result.rise
        var set = res.data.Result.set
        that.setData({

          r: rise,
          s: set
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