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
    app.globalData.page1 = 0;
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
      url: app.globalData.Main_Server + "/api/function/StarSearch",
      data: {
        string: app.globalData.search,
        page: app.globalData.page1

      },
      success(res) {
        var pgc = count / 10
        var count = res.data.Result.count
        var list = that.data.list;
        console.log("结果：" + res.data.Result.Data1.bayer)
        if (res.data.Result.Data1 != null) {
          list.push(res.data.Result.Data1)
        }
        if (res.data.Result.Data2 != null) {
          list.push(res.data.Result.Data2)
        }
        if (res.data.Result.Data3 != null) {
          list.push(res.data.Result.Data3)
        }
        if (res.data.Result.Data14 != null) {
          list.push(res.data.Result.Data4)
        }
        if (res.data.Result.Data5 != null) {
          list.push(res.data.Result.Data5)
        }
        if (res.data.Result.Data6 != null) {
          list.push(res.data.Result.Data6)
        }
        if (res.data.Result.Data7 != null) {
          list.push(res.data.Result.Data7)
        }
        if (res.data.Result.Data8 != null) {
          list.push(res.data.Result.Data8)
        }
        if (res.data.Result.Data9 != null) {
          list.push(res.data.Result.Data9)
        }
        if (res.data.Result.Data10 != null) {
          list.push(res.data.Result.Data10)
        }
        that.setData({
          count: count,
          list: list,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 10
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
      url: app.globalData.Main_Server + "/api/function/StarSearch",
      data: {
        string: app.globalData.search,
        page: app.globalData.page1

      },
      success(res) {
        var pgc = count / 10
        var count = res.data.Result.count
        var list = that.data.list;
        console.log("结果：" + res.data.Result.Data1.bayer)
        if (res.data.Result.Data1 != null) {
          list.push(res.data.Result.Data1)
        }
        if (res.data.Result.Data2 != null) {
          list.push(res.data.Result.Data2)
        }
        if (res.data.Result.Data3 != null) {
          list.push(res.data.Result.Data3)
        }
        if (res.data.Result.Data14 != null) {
          list.push(res.data.Result.Data4)
        }
        if (res.data.Result.Data5 != null) {
          list.push(res.data.Result.Data5)
        }
        if (res.data.Result.Data6 != null) {
          list.push(res.data.Result.Data6)
        }
        if (res.data.Result.Data7 != null) {
          list.push(res.data.Result.Data7)
        }
        if (res.data.Result.Data8 != null) {
          list.push(res.data.Result.Data8)
        }
        if (res.data.Result.Data9 != null) {
          list.push(res.data.Result.Data9)
        }
        if (res.data.Result.Data10 != null) {
          list.push(res.data.Result.Data10)
        }
        that.setData({
          count: count,
          list: list,
          search: app.globalData.search,
          page: app.globalData.page1,
          pgc: count / 10
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
      duration: 2000
    }),
      // app.globalData.page1=1,


      wx.request({
      url: app.globalData.Main_Server + "/api/function/StarSearch",
        data: {
          string: app.globalData.search,
         page: app.globalData.page1

        },
        success(res) {
          var pgc = count / 10
          var count = res.data.Result.count
          var list = that.data.list;
          console.log("结果："+res.data.Result.Data1.bayer)
          if (res.data.Result.Data1!=null){
            list.push(res.data.Result.Data1)
          }
          if (res.data.Result.Data2 != null) {
            list.push(res.data.Result.Data2)
          }
          if (res.data.Result.Data3 != null) {
            list.push(res.data.Result.Data3)
          }
          if (res.data.Result.Data14 != null) {
            list.push(res.data.Result.Data4)
          }
          if (res.data.Result.Data5 != null) {
            list.push(res.data.Result.Data5)
          }
          if (res.data.Result.Data6 != null) {
            list.push(res.data.Result.Data6)
          }
          if (res.data.Result.Data7 != null) {
            list.push(res.data.Result.Data7)
          }
          if (res.data.Result.Data8 != null) {
            list.push(res.data.Result.Data8)
          }
          if (res.data.Result.Data9 != null) {
            list.push(res.data.Result.Data9)
          }
          if (res.data.Result.Data10 != null) {
            list.push(res.data.Result.Data10)
          }
          that.setData({
            count: count,
            list: list,
            search: app.globalData.search,
            page: app.globalData.page1,
            pgc: count / 10
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