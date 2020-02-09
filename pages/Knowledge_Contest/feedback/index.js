// pages/Knowledge_Contest/feedback/index.js
var content="";
var title ="";
var tel =""
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ['试题答案错误', '试题题目过时', '试题其他问题','BUG反馈','数据问题','功能建议','其余反馈内容'],
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    if (e.detail.value==0)title="试题答案错误";
    if (e.detail.value == 1) title = "试题题目过时";
    if (e.detail.value == 2) title = "试题其他问题";
    if (e.detail.value == 3) title = "BUG反馈";
    if (e.detail.value == 4) title = "数据问题";
    if (e.detail.value == 5) title = "功能建议";
    if (e.detail.value == 6) title = "其余反馈内容";
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

  }, textareaBInput(e) {
    console.log(e.detail.value)
    content = e.detail.value
    this.setData({
     
      textareaBValue: e.detail.value
    })
  }, textareaBInput2(e) {
    console.log(e.detail.value)
    tel=e.detail.value
    this.setData({
      textareaBValue2: e.detail.value
     
    })
  },
  gotoPage2: function () {

    var that = this
    var name = wx.getStorageSync('nickname')
    var token = wx.getStorageSync('token')
    wx.request({
      url: app.globalData.Main_Server + "/api/user/feedback",
      data: {
        token: token,
        title:title,
        content:content,
        name:name,
        tel:tel,
        questionnumber:app.globalData.id

      },
      fail(res) {
        console.log(res)
        wx.showToast({
          title: '反馈失败,请稍后重试',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        console.log(res.data)
        wx.showToast({
          title: '反馈成功',
          icon: "none",
          duration: 2000
        })
      }

    })



    wx.navigateBack({
      delta: 1,

    })
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