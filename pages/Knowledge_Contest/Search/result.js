// pages/bk/result.js
var app = getApp();
 var token = wx.getStorageSync('token');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: '',
    pgc: '',
    search: '',
    page: "",
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.page1 = 1
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, nextpage: function () {
    console.log(pgc)
    // this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 + 1
    var pgc = app.globalData.page1
    wx.request({
      url: app.globalData.Main_Server + "/api/question/Search",
      data: {
        token: token,
        word: app.globalData.search,
        size: 10,
        page: app.globalData.page1
      },
      fail(res) {
        console.log(res)
     wx.showToast({
          title: '加载失败,请稍后重试',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {

        console.log(res)
        var count = res.data.SearchResult.totalElements
        console.log(app.globalData.page1)
        /*权限设置 */

        that.setData({
          count: count,

          list: res.data.SearchResult.content,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 20
        })

        var count = res.data.count
        if (app.globalData.rz == 0 && count > 1) count = 1
        var pgc = count / 20
        console.log(res.data.results)
      }
    })

  }, nextpage2: function () {
    console.log(pgc)
    //this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 - 1
    var pgc = app.globalData.page1
    wx.request({
      url: app.globalData.Main_Server + "/api/question/Search",
      data: {
        token: token,
        word: app.globalData.search,
        size: 10,
        page: app.globalData.page1
      },
      fail(res) {
        console.log(res)
      wx.showToast({
          title: '加载失败,请稍后重试',
          icon: "none",
          duration: 2000
        })

      },
      success(res) {

        console.log(res)
        var count = res.data.SearchResult.totalElements
        console.log(app.globalData.page1)
        /*权限设置 */

        that.setData({
          count: count,

          list: res.data.SearchResult.content,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 20
        })

        var count = res.data.count
        if (app.globalData.rz == 0 && count > 1) count = 1
        var pgc = count / 20
        console.log(res.data.results)
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  det: function (e) {


    app.globalData.idp = e.currentTarget.id;
    wx.navigateTo({ url: 'detail/index', })


  },
  onShow: function (res) {

    var that = this
    console.log(res)

      wx.request({
      url: app.globalData.Main_Server + "/api/question/Search",
        data: {
token:token,
          word: app.globalData.search,
          size:10,
          page: app.globalData.page1
        },
        fail(res) {
          console.log(res)
          wx.navigateBack({
            delta: 1,

          }), wx.showToast({
            title: '加载失败,请稍后重试',
            icon: "none",
            duration: 2000
          })

        },
        success(res) {

          console.log(res)
          var count = res.data.SearchResult.totalElements
          console.log(app.globalData.page1)
          /*权限设置 */

          that.setData({
            count: count,

            list: res.data.SearchResult.content,
            search: app.globalData.search,
            page: app.globalData.page1,
            pgc: count / 20
          })

          var count = res.data.count
          if (app.globalData.rz == 0 && count > 1) count = 1
          var pgc = count / 20
          console.log(res.data.results)
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