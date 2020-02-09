// pages/Home_Page/Information/index.js
var a1="";
var a2="";
var a3="";
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
name:"1",
gender:"1",
a1:"1",
a2:"",
a3:""
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

  }, userNameInput1: function (e) {
    console.log(e.detail.value)
    a1 = e.detail.value
    this.setData({
      userName: e.detail.value
    })
  }, userNameInput2: function (e) {
    console.log(e.detail.value)
    a2 = e.detail.value
    this.setData({
      userName: e.detail.value
    })
  }, userNameInput3: function (e) {
    console.log(e.detail.value)
    a3 = e.detail.value
    this.setData({
      userName: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var a1=wx.getStorageSync('school')
    var a2=wx.getStorageSync('schoolid')
    var a3=wx.getStorageSync('name')
    var nickname = wx.getStorageSync('nickname')
    var fm = wx.getStorageSync('fm')
    var fmm = ""
    if (fm == 1) {
      fmm = "男"
    } else {
      fmm = "女"
    }
    this.setData({
      gender: fmm,
      name: nickname,
a1:a1,
a2:a2,
a3:a3
    })
  }, gotoPage2: function () {
    var that=this
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    console.log(a1+a2+a3)
    wx.request({
      url: app.globalData.Main_Server + "/api/user/modifyuser",
      data: {
           school: a1,
          name: a2,
          schoolid: a3,
          openid: openid,

        token: token,

      },
      success(res) {
        wx.setStorageSync('school',res.data.Result.school)
        wx.setStorageSync('schoolid', res.data.Result.schoolid)
        wx.setStorageSync('name', res.data.Result.name)
        wx.showModal({
          content: '修改成功！',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateBack({
                delta: 1,
              })
            }
          }
        })
          that.setData({
           
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