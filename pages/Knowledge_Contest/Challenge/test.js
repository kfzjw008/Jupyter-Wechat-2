
// pages/qa/testsj/index.js
var app = getApp();
var id = ""
var answer = ""
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
    tzjsq:app.globalData.tzjsq,
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
    this.setData({
      tzjsq: app.globalData.tzjsq
    })
    wx.showToast({
      title: '加载中',
      icon: "none",
      duration: 1000
    })
    console.log(app.globalData.id)
    var that = this
    var token = wx.getStorageSync('token')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/RandomGetQuestion",
      data: {
        token: token,

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
        var Question_body = res.data.Question_Result.questionBody
        var A = res.data.Question_Result.a
        var B = res.data.Question_Result.b
        var C = res.data.Question_Result.c
        var D = res.data.Question_Result.d
        var Correct_Answer = res.data.Question_Result.correct_Answer
        var Examination_Place = res.data.Question_Result.question_classification.title
        var difficulty = res.data.Question_Result.difficulty
        var Question_Analysis = res.data.Question_Result.questionAnalysis
        id = res.data.Question_Result.id;
        app.globalData.id = res.data.Question_Result.id;
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
            difficulty: difficulty,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          tzjsq: app.globalData.tzjsq
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

  },
  gotoPage3: function () {
    var token = wx.getStorageSync('token')
    
    var openid = wx.getStorageSync('openid')
    wx.request({
      url: app.globalData.Main_Server + "/api/question/PutRecords",
      data: {
        token: token,
        openid: openid,
        source: "挑战模式",
        id: id,
        answer: "A"



      },
      success(res) {
        app.globalData.jfqs++
        if (app.globalData.jfqs % 5 == 0) {
          var token = wx.getStorageSync('token')
          var openid = wx.getStorageSync('openid')
          wx.request({
            url: app.globalData.Main_Server + "/api/user/AddIntergal",
            data: {
              count: 1,
              name: "练习积分",
              token: token,
              openid: openid

            },
            fail(res) {
              //console.log(res)
            },
            success(res) {
            }
          })

        }
        console.log(res)
        console.log("成功上传答题数据")
      }

    })





    console.log(app.globalData.Correct_Answer)
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      console.log(app.globalData.Correct_Answer)
      app.globalData.tzjsq++
      if (app.globalData.tzjsq == 5 || app.globalData.tzjsq==10) {
        var token = wx.getStorageSync('token')
        var openid = wx.getStorageSync('openid')
        wx.request({
          url: app.globalData.Main_Server + "/api/user/AddIntergal",
          data: {
            count: 10,
            name: "挑战积分",
            token: token,
            openid: openid

          },
          fail(res) {
            //console.log(res)
          },
          success(res) {
          }
        })

      }
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
      
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
        source: "挑战模式",
        id: id,
        answer: "B"



      },
      success(res) {
        app.globalData.jfqs++
        if (app.globalData.jfqs % 5 == 0) {
          var token = wx.getStorageSync('token')
          var openid = wx.getStorageSync('openid')
          wx.request({
            url: app.globalData.Main_Server + "/api/user/AddIntergal",
            data: {
              count: 1,
              name: "练习积分",
              token: token,
              openid: openid

            },
            fail(res) {
              //console.log(res)
            },
            success(res) {
            }
          })

        }
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsq++
      if (app.globalData.tzjsq == 5 || app.globalData.tzjsq == 10) {
        var token = wx.getStorageSync('token')
        var openid = wx.getStorageSync('openid')
        wx.request({
          url: app.globalData.Main_Server + "/api/user/AddIntergal",
          data: {
            count: 10,
            name: "挑战积分",
            token: token,
            openid: openid

          },
          fail(res) {
            //console.log(res)
          },
          success(res) {
          }
        })

      }
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1

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
        source: "挑战模式",
        id: id,
        answer: "C"



      },
      success(res) {
        app.globalData.jfqs++
        if (app.globalData.jfqs % 5 == 0) {
          var token = wx.getStorageSync('token')
          var openid = wx.getStorageSync('openid')
          wx.request({
            url: app.globalData.Main_Server + "/api/user/AddIntergal",
            data: {
              count: 1,
              name: "练习积分",
              token: token,
              openid: openid

            },
            fail(res) {
              //console.log(res)
            },
            success(res) {
            }
          })

        }
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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

      app.globalData.tzjsq++
      if (app.globalData.tzjsq == 5 || app.globalData.tzjsq == 10) {
        var token = wx.getStorageSync('token')
        var openid = wx.getStorageSync('openid')
        wx.request({
          url: app.globalData.Main_Server + "/api/user/AddIntergal",
          data: {
            count: 10,
            name: "挑战积分",
            token: token,
            openid: openid

          },
          fail(res) {
            //console.log(res)
          },
          success(res) {
          }
        })

      }
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1

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
        source: "挑战模式",
        id: id,
        answer: "D"



      },
      success(res) {
        app.globalData.jfqs++
        if (app.globalData.jfqs % 5 == 0) {
          var token = wx.getStorageSync('token')
          var openid = wx.getStorageSync('openid')
          wx.request({
            url: app.globalData.Main_Server + "/api/user/AddIntergal",
            data: {
              count: 1,
              name: "练习积分",
              token: token,
              openid: openid

            },
            fail(res) {
              //console.log(res)
            },
            success(res) {
            }
          })

        }
        console.log(res)
        console.log("成功上传答题数据")
      }

    })
    var that = this
    if (app.globalData.Correct_Answer == 'A') {
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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
      app.globalData.tzjsqsave = app.globalData.tzjsq
      app.globalData.tzjsq = -1
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

      app.globalData.tzjsq++
      if (app.globalData.tzjsq == 5 || app.globalData.tzjsq == 10) {
        var token = wx.getStorageSync('token')
        var openid = wx.getStorageSync('openid')
        wx.request({
          url: app.globalData.Main_Server + "/api/user/AddIntergal",
          data: {
            count: 10,
            name: "挑战积分",
            token: token,
            openid: openid

          },
          fail(res) {
            //console.log(res)
          },
          success(res) {
          }
        })

      }
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
    if (app.globalData.tzjsq == -1) {

      wx.redirectTo({
        url: 'result',
      })
    }
    else{
      wx.redirectTo({ url: 'test', })
    }
   
  }
})