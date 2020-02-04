
// pages/qa/testsj/index.js
var app = getApp();
var id=""
var answer=""
//https://api.majorbillliu.com/media/
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xmad: {
      adData: {},
      ad: {
        banner: "xm1466db9d06be27fe7a409a5798f754", // 按需引入

      }
    },
    AA: false,
    BB: false,
    CC: false,
    DD: false,
    Correct_Answer: '',
    inputShoweda1: true,
    inputShoweda2: false,
    inputShoweda3: false,
    inputShoweda4: false,
    inputShowedb1: true,
    inputShowedb2: false,
    inputShowedb3: false,
    inputShowedb4: false,
    inputShowedc1: true,
    inputShowedc2: false,
    inputShowedc3: false,
    inputShowedc4: false,
    inputShowedd1: true,
    inputShowedd2: false,
    inputShowedd3: false,
    inputShowedd4: false
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
      icon: "none",
      duration: 2000
    })
    console.log(app.globalData.id)
    var that = this
    var token = wx.getStorageSync('token')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/ModuleExercisesDetails",
      data: {
        token: token,
        module: app.globalData.search,
        page: app.globalData.idp+1,
        size: 1

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
        if (res.data.ModuleExercisesDetails.numberOfElements==0){
          wx.navigateBack({
            delta: 1,

          }), wx.showToast({
            title: '已经是最后一题',
            icon: "none",
            duration: 2000
          })

        }
        var Question_body = res.data.ModuleExercisesDetails.content[0].questionBody
        var A = res.data.ModuleExercisesDetails.content[0].a
        var B = res.data.ModuleExercisesDetails.content[0].b
        var C = res.data.ModuleExercisesDetails.content[0].c
        var D = res.data.ModuleExercisesDetails.content[0].d
        var Correct_Answer = res.data.ModuleExercisesDetails.content[0].correct_Answer
        var Examination_Place = res.data.ModuleExercisesDetails.content[0].question_classification
        var Question_Analysis = res.data.ModuleExercisesDetails.content[0].questionAnalysis
        id = res.data.ModuleExercisesDetails.content[0].id;
        app.globalData.id = res.data.ModuleExercisesDetails.content[0].id;
        var Image = res.data.Image
        app.globalData.Correct_Answer = Correct_Answer,
          that.setData({
            Question_body: Question_body,
            A: A,
            B: B,
            C: C,
            D: D,
            Correct_Answer: Correct_Answer,
            Image: Image,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
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

  },
  gotoPage3: function () {
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/PutRecords",
      data: {
        token: token,
        openid:openid,
        source:"模块学习",
        id:id,
        answer:"A"

        

      },
      success(res) {     
        console.log(res)
        console.log("成功上传答题数据")
      }

    })





    console.log(app.globalData.Correct_Answer)
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      console.log(app.globalData.Correct_Answer)
      
      
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true

      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      
      
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true

      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      
      
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true

      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      
      
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda4: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true

      })
    }
    // this.onLoad()
  },
  gotoPage4: function () {
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/PutRecords",
      data: {
        token: token,
        openid: openid,
        source: "模块学习",
        id: id,
        answer: "B"



      },
      success(res) {
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      
      
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true

      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      
      
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd2: true

      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      
      
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true

      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      
      
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb4: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true

      })
    }
    // this.onLoad()
  },
  gotoPage5: function () {
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/PutRecords",
      data: {
        token: token,
        openid: openid,
        source: "模块学习",
        id: id,
        answer: "C"



      },
      success(res) {
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      
      
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd2: true

      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      
      
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd2: true

      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      
      
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd2: true

      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      
      
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc4: true,
        inputShowedd1: false,
        inputShowedd3: true

      })
    }
    // this.onLoad()
  },
  gotoPage6: function () {
    var token = wx.getStorageSync('token')
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/PutRecords",
      data: {
        token: token,
        openid: openid,
        source: "模块学习",
        id: id,
        answer: "D"



      },
      success(res) {
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      
      
      console.log(app.globalData.Correct_Answer)
      that.setData({
        inputShoweda1: false,
        inputShoweda3: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd4: true

      })

    }
    else if (app.globalData.Correct_Answer == 'B') {
      
      
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb3: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd4: true

      })


    }
    else if (app.globalData.Correct_Answer == 'C') {
      
      
      console.log(3)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc3: true,
        inputShowedd1: false,
        inputShowedd4: true

      })
    }
    else if (app.globalData.Correct_Answer == 'D') {
      
      
      console.log(4)
      that.setData({
        inputShoweda1: false,
        inputShoweda2: true,
        inputShowedb1: false,
        inputShowedb2: true,
        inputShowedc1: false,
        inputShowedc2: true,
        inputShowedd1: false,
        inputShowedd3: true

      })
    }
    // this.onLoad()
  },
  gotoPage1: function () {

  },
  gotoPage2: function () {

    var that = this
    app.globalData.idp = app.globalData.idp+1
    wx.redirectTo({ url: 'test', })
  }
})