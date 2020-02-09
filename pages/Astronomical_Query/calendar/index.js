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
    re:"请选择日期",
    re2:""
  }, DateChange(e) {
    this.setData({
      date: e.detail.value
    })
    var arr = e.detail.value.split("-");
    var that = this
    wx.request({
      url: app.globalData.Main_Server + "/api/function/Calendar",
      data: {
        year: arr[0],
        month: arr[1],
        day: arr[2]

      },
      success(res) {
        var y1 = res.data.Result[0].event

        var y2 = res.data.Result[0].time

        if (res.data.Result[1] != null) {
          var m1 = res.data.Result[1].event
          var m2 = res.data.Result[1].time
        }

        try {
          wx.setStorageSync('CANLENDAR', res.data.Result)
        } catch (e) { }

        if (res.data.Result[1] != null) {
          that.setData({
            re: y2 + "    " + y1,
            re2: m2 + "    " + m1
          })
        } else {
          that.setData({
            re: y2 + "    " + y1
            , re2: ""
          })
        }



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

    console.log(getToday())
    this.setData({
      date: getToday()
    })
    var arr = getToday().split("-");

    wx.request({
      url: app.globalData.Main_Server + "/api/function/Calendar",
      data: {
        year: arr[0],
        month: arr[1],
        day: arr[2]

      },
      success(res) {
        var y1 = res.data.Result[0].event
      
        var y2 = res.data.Result[0].time

        if (res.data.Result[1]!=null){
          var m1 = res.data.Result[1].event
          var m2 = res.data.Result[1].time
        }
    
        try {
          wx.setStorageSync('CANLENDAR', res.data.Result)
        } catch (e) { }

        if (res.data.Result[1] != null) {
          that.setData({
            re: y2 + "    " + y1 ,
            re2: m2 + "    " + m1
          })
        }else{
          that.setData({
            re: y2 +"    "+ y1 
            ,re2:""
          })
        }
      


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