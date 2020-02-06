// pages/Knowledge_Contest/ranklist/index.js
var length = 10;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft: 0,
    list: [],
    list2: [],
  list3: []
  },
  tabSelect(e) {
    console.log(e.currentTarget)
    this.setData({
      TabCur: e.currentTarget.id,
      scrollLeft: (e.currentTarget.id - 1) * 60
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
var that=this

    wx.request({
      url: app.globalData.Main_Server + "/api/rank/integralRate",
      data: {
        page: 1,
        size: 50

      },
      fail(res) {
      },
      success(res) {
        var list2 = that.data.list2;
        length = res.data.integralRate.numberOfElements;
        /*     以下为未认证受限代码 */
        for (var i = 0; i < length; i++) {
          list2.push(res.data.integralRate.content[i]);
          console.log('插入！！！！！！！！')

          console.log(list2.length)
          //console.log(res.data.ModuleExercisesDetails.content[i])
        }

        that.setData({
          list2: list2,

          //list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,

          hidden: true
        })



        //console.log(pgc)
      }
    })


    wx.request({
      url: app.globalData.Main_Server + "/api/rank/tzRate",
      data: {
       page:1,
        size: 50

      },
      fail(res) {
      },
      success(res) {
        var list = that.data.list;
        length = res.data.tzRate.numberOfElements;
        /*     以下为未认证受限代码 */
        for (var i = 0; i < length; i++) {
          list.push(res.data.tzRate.content[i]);
          console.log('插入！！！！！！！！')

          console.log(list.length)
          //console.log(res.data.ModuleExercisesDetails.content[i])
        }
      //  app.globalData.page1 = app.globalData.page1 + 1;
        //console.log(list)


        //console.log(app.globalData.page1)

        that.setData({
          list: list,

          //list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,

          hidden: true
        })



        //console.log(pgc)
      }
    })

    wx.request({
      url: app.globalData.Main_Server + "/api/rank/AllQuestion",
      data: {
        page: 1,
        size: 50

      },
      fail(res) {
      },
      success(res) {
        var list3 = that.data.list3;
        length = res.data.AllQuestion.numberOfElements;
        /*     以下为未认证受限代码 */
        for (var i = 0; i < length; i++) {
          list3.push(res.data.AllQuestion.content[i]);
          console.log('插入！！！！！！！！')

          console.log(list3.length)
          //console.log(res.data.ModuleExercisesDetails.content[i])
        }

        that.setData({
          list3: list3,

          //list: res.data.results,
          search: app.globalData.search,
          page: app.globalData.page1,

          hidden: true
        })



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