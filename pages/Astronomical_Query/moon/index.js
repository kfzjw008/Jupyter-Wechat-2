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
  var formatDate = year + "-" + month +"-" + day;
  return formatDate;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020-01-01',
    src:"http://www.help.bj.cn/weather/images/nl/moon15.gif",
    y:"请选择日期",
    m:"请选择日期",
    d:"请选择日期",
    moon:"请选择日期"
  }, DateChange(e) {
    this.setData({
      date: e.detail.value
    })
   var  arr = e.detail.value.split("-");
var that=this
    wx.request({
      url: app.globalData.Main_Server + "/api/function/SearchSMoonPhase",
      data: {
     year:arr[0],
     month:arr[1],
     day:arr[2]

      },
      success(res) {
        var y=res.data.Result.year
        var m = res.data.Result.month
        var d = res.data.Result.day
        var moon = res.data.Result.phase
        var src = res.data.Result.phasePNG
        that.setData({
          src:src,
          y: y,
          m: m,
          d: d,
          moon: moon
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
    var that = this
    var moon = wx.getStorageSync('MOON')
if (moon!=null||moon!=""){
  that.setData({
    src: moon.phasePNG,
    y: moon.year,
    m: moon.month,
    d: moon.day,
    moon: moon.phase
    
  })

}
    console.log(getToday())
    this.setData({
      date: getToday()
    })
    var arr = getToday().split("-");

    wx.request({
      url: app.globalData.Main_Server + "/api/function/SearchSMoonPhase",
      data: {
        year: arr[0],
        month: arr[1],
        day: arr[2]

      },
      success(res) {
        var y = res.data.Result.year
        var m = res.data.Result.month
        var d = res.data.Result.day
        var moon = res.data.Result.phase
        var src = res.data.Result.phasePNG
        try {
          wx.setStorageSync('MOON', res.data.Result)
        } catch (e) { }
        that.setData({
          src: src,
          y: y,
          m: m,
          d: d,
          moon: moon
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