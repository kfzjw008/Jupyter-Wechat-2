// pages/Home_Page/jf/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    b1: true,
    b2: true,
    b3: true,
    b4: true,
    all: 0,
    allt: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/user/UserIntergal",
      data: {
        token: token,
        openid: openid

      },
      fail(res) {
        //console.log(res)
        wx.showModal({
          content: '加载失败，请稍后重试！',
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateBack({
                delta: 1,
              })
            }
          }
        })
      },
      success(res) {
     var   a1 = res.data.Result.Score.QianDao
        var   a2 = res.data.Result.Score.Practice
        var    a3 = res.data.Result.Score.Right
        var    a4 = res.data.Result.Score.Share
        var     b1 = res.data.Result.Status.QianDao
        var     b2 = res.data.Result.Status.Practice
        var     b3 = res.data.Result.Status.Right
        var     b4 = res.data.Result.Status.Share
        var     all = res.data.Result.AllScore
        var      allt = res.data.Result.ALLScoreToday
        that.setData({
          a1: a1,
          a2: a2,
          a3: a3,
          a4: a4,
          b1: b1,
          b2: b2,
          b3: b3,
          b4: b4,
          all: all,
          allt: allt
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  }, on222: function () {
    wx.redirectTo({
      url: '../../Knowledge_Contest/Random_exercises/index',
    })

  }, on223: function () {
    wx.redirectTo({
      url: '../../Knowledge_Contest/Challenge/start',
    })

  }
  , on225: function () {
    wx.navigateTo({
      url: '../../Knowledge_Contest/ranklist/index',
    })
  
  },
  on224: function () {
  
  wx.showModal({
    content: '点击右上角菜单，选择分享给朋友，成功后即可获得积分！',
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')

      }
    }
  })},
  
  
   on221: function () {
    var that = this
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/user/AddIntergal",
      data: {
     count:3,
     name:"签到积分",
     token:token,
     openid:openid

      },
      fail(res) {
        //console.log(res)
        wx.showModal({
          content: '签到失败，请稍后重试！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
         
            }
          }
        })
      },
      success(res) {
        wx.showModal({
          content: '签到成功！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
wx.redirectTo({
  url: 'index',
})
            }
          }
        })
        }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  }

  /**
   * 用户点击右上角分享
   */

})