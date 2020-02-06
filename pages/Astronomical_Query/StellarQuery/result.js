// pages/bk/result.js
var app = getApp();

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
    app.globalData.page1 = 1;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, nextpage: function () {
    //console.log(pgc)
    // this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 + 1
    var pgc = app.globalData.page1
    wx.request({
      url: 'https://api.majorbillliu.com/knowledge',
      data: {
        search: app.globalData.search,
        page: app.globalData.page1
      }, success(res) {
        var count = res.data.count
        var pgc = count / 15
        //console.log(pgc)
        that.setData({
          count: res.data.count,
          list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 15
        })
      }

    })

  }, nextpage2: function () {
    //console.log(pgc)
    // this.onLoad()
    var that = this
    app.globalData.page1 = app.globalData.page1 - 1
    var pgc = app.globalData.page1
    wx.request({
      url: 'https://api.majorbillliu.com/knowledge',
      data: {
        search: app.globalData.search,
        page: app.globalData.page1
      }, success(res) {
        var count = res.data.count
        var pgc = count / 15
        //console.log(pgc)
        that.setData({
          count: res.data.count,
          list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 15
        })
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
    //console.log(res)
    wx.showToast({
      title: '搜索中',
      icon: 'loading',
      duration: 6000
    }),
      // app.globalData.page1=1,


      wx.request({
      url: app.globalData.Main_Server + "/api/function/StarSearch",
        data: {
          string: app.globalData.search,
         page: app.globalData.page1

        },
        success(res) {
          var count = res.data.count
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
      wx.request({
        url: 'https://api.majorbillliu.com/knowledge',
        data: {
          search: app.globalData.search,
          page: app.globalData.page1-1,
        },
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
          wx.showToast({
            title: '加载成功',
            icon: 'success',
            duration: 2000
          })
          var count = res.data.count




          //console.log(app.globalData.page1)

          that.setData({
            count: count,
            list: res.data.results,
            search: app.globalData.search,
            page: app.globalData.page1,
            pgc: count / 15
          })
          var count = res.data.count
          var pgc = count / 15
          //console.log(pgc)
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