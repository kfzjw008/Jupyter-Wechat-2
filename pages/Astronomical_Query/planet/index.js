// pages/Astronomical_Query/planet/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: ["水星", "金星", "地球","火星","木星","土星","天王星","海王星"],
    p:null,
    index:"地球"

  }, PickerChange(e) {
    var pp=null
    var name=""
    if (e.detail.value=='0'){
       pp = wx.getStorageSync('planet').MercuryMap
       name="水星"
    }else
    if (e.detail.value =='1') {
     pp = wx.getStorageSync('planet').VenusMap
      name = "金星"
    }else
    if (e.detail.value == '2') {
       pp = wx.getStorageSync('planet').EarthMap
      name = "地球"
    } else
    if (e.detail.value == '3') {
      pp = wx.getStorageSync('planet').MarsMap
      name = "火星"
    } else
    if (e.detail.value == '4') {
       pp = wx.getStorageSync('planet').JupiterMap
      name = "木星"
    } else
    if (e.detail.value =='5') {
      pp = wx.getStorageSync('planet').SaturnMap
      name = "土星"
    } else
    if (e.detail.value == '6') {
      pp = wx.getStorageSync('planet').UranusMap
      name = "天王星"
    } else
    if (e.detail.value == '7') {
    pp = wx.getStorageSync('planet').NeptuneMap
      name = "海王星"
    }else{
    pp = wx.getStorageSync('planet').EarthMap
      name = "地球"
      console.log("艹" + e.detail.value);
    }
    console.log("ca:"+e.detail.value);
    console.log(pp);
    this.setData({
      index: name,
      p:pp
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
    var that =this
    wx.request({
      url: app.globalData.Main_Server + "/api/function/EightPlanets",
      data: {

      },
      success(res) {
        var y = res.data.Result
       
        that.setData({
          p: res.data.Result.EarthMap
        })
        try {
          wx.setStorageSync('planet', res.data.Result)
        } catch (e) { }

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