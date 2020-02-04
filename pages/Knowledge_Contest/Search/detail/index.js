// pages/bk/detail/index.js
var app = getApp();
var token = wx.getStorageSync('token');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id111: '',
    Name111: '',
    Bayer111: '',
    Fransted111: '',
    Variable_star111: '',
    HD111: '',
    HIP111: '',
    Right_ascension111: '',
    Declination111: '',
    Apparent_magnitude111: '',
    Absolute_magnitude111: '',
    Distance111: '',
    Classification111: '',
    Notes111: '',
    Constellation111: '',
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

  }, nextpage: function () {


    var that = this
    wx.navigateBack({
      delta: 1,

    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var that = this

    wx.request({
      url: app.globalData.Main_Server + "/api/question/GetQuestion" ,
data:{
token:token,
  id: app.globalData.idp
},
      fail(res) {
        console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        console.log(res.data.Question_Result)
        var id111 = res.data.Question_Result.id
        var Name111 = res.data.Question_Result.questionBody
        var Bayer111 = res.data.Question_Result.question_classification.title
        var Fransted111 = res.data.Question_Result.a
        var Variable_star111 = res.data.Question_Result.b
        var HD111 = res.data.Question_Result.c
        var HIP111 = res.data.Question_Result.d
        var Right_ascension111 = res.data.Question_Result.correct_Answer
        var Declination111 = res.data.Question_Result.questionAnalysis
        var Image = res.data.Image
        that.setData({
          id111: res.data.Question_Result.id,
          Name111: res.data.Question_Result.questionBody,
          Bayer111: res.data.Question_Result.question_classification.title,
          Fransted111: res.data.Question_Result.a,
          Variable_star111: res.data.Question_Result.b,
          HD111: res.data.Question_Result.c,
          HIP111: res.data.Question_Result.d,
          Right_ascension111: res.data.Question_Result.correct_Answer,
          Declination111: res.data.Question_Result.questionAnalysis,
          Image: Image
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
  , sc: function () {
    wx.showToast({
      title: '收藏成功！',
      icon: 'none',
      duration: 3000
    })



  },
})