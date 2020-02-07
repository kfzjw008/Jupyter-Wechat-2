// pages/bk/detail/index.js
var app = getApp();
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
    Ancient_Chinese_Name: ''
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000
    })
    var that = this
    wx.request({
      url: 'https://api.majorbillliu.com/knowledge/' + app.globalData.idp,

      fail(res) {
        //console.log(res)
        wx.showToast({
          title: '加载失败',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {
        //console.log(res)
        var id111 = res.data.id
        var Name111 = res.data.Name
        var Ancient_Chinese_Name = res.data.Ancient_Chinese_Name
        var Bayer111 = res.data.Bayer
        var Fransted111 = res.data.Fransted
        var Variable_star111 = res.data.Variable_star
        var HD111 = res.data.HD
        var HIP111 = res.data.HIP
        var Right_ascension111 = res.data.Right_ascension
        var Declination111 = res.data.Declination
        var Apparent_magnitude111 = res.data.Apparent_magnitude
        var Absolute_magnitude111 = res.data.Absolute_magnitude
        var Distance111 = res.data.Distance
        var Classification111 = res.data.Classification
        var Notes111 = res.data.Notes
        var Constellation111 = res.data.Constellation
        that.setData({
          id111: id111,
          Name111: Name111,
          Bayer111: Bayer111,
          Fransted111: Fransted111,
          Variable_star111: Variable_star111,
          HD111: HD111,
          HIP111: HIP111,
          Right_ascension111: Right_ascension111,
          Declination111: Declination111,
          Apparent_magnitude111: Apparent_magnitude111,
          Absolute_magnitude111: Absolute_magnitude111,
          Distance111: Distance111,
          Classification111: Classification111,
          Notes111: Notes111,
          Constellation111: Constellation111,
          Ancient_Chinese_Name: Ancient_Chinese_Name
        })
        //console.log(res.data)
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

  }, nextpage: function () {


    var that = this
    wx.navigateBack({
      delta: 1,

    })
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