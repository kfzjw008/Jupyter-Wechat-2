
// pages/qa/testsj/index.js
var app = getApp();
var id ;
var answer = ""
var Question_body="";
var yihuoqu=1;
var bubian=1;
var tzid;
//https://api.majorbillliu.com/media/
Page({

  /**
   * 页面的初始数据
   */
  data: {
        islogin: false,
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
    getUserInfo: function (e) {
    //console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGotUserInfo: function (e) {
    this.setData({
      loadModal: true
    })
    console.log(666)
    var that = this
    app.globalData.name = that.data.jdg;
    console.log(app.globalData.name)
    app.globalData.nickname = e.detail.userInfo.nickName
    app.globalData.location = e.detail.userInfo.country + e.detail.userInfo.province + e.detail.userInfo.city
    console.log(app.globalData.nickname)
    console.log(app.globalData.location)
    console.log(e.detail.userInfo)

    //console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)


    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          console.log('登录success！' + res.code)


          //发起网络请求
          wx.request({
            url: app.globalData.Main_Server + '/api/login/qqlogin',

            data: {
              code: res.code,
              nickname: e.detail.userInfo.nickName,
              fm: e.detail.userInfo.gender, 
              province: e.detail.userInfo.province,
              city: e.detail.userInfo.city

            },
            success(res) {
              console.log(6)
              app.globalData.openid = res.data.OpenId.openId;
              wx.setStorageSync('token', res.data.OpenId.jwttoken)
              wx.setStorageSync('openid', res.data.OpenId.openId)
              wx.setStorageSync('code', "code")
              wx.setStorageSync('nickname', e.detail.userInfo.nickName)
              wx.setStorageSync('fm', e.detail.userInfo.gender)
              wx.setStorageSync('province', e.detail.userInfo.province)
              wx.setStorageSync('city', e.detail.userInfo.city)
              wx.setStorageSync('登录状态', 1)
              wx.setStorageSync('school', res.data.OpenId.school)
              wx.setStorageSync('schoolid', res.data.OpenId.schoolid)
              wx.setStorageSync('name', res.data.OpenId.name)
              console.log(res)
              console.log(app.globalData.openid)
              that.setData({
                islogin: true,
              })
              that.setData({
                loadModal: false
              })
              wx.showModal({
                content: '登录成功！',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')
                        var token = wx.getStorageSync('token')
                     wx.request({
      url: app.globalData.Main_Server + "/api/question/GetQuestion",
      data: {
        token: token,
id:tzid
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
        yihuoqu=666;
        Question_body = res.data.Question_Result.questionBody
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
            difficulty:difficulty,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }

    })
                
                

                  }
                }
              })
            }

          })






        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  },
  onLoad: function (options) {
   var that = this
    wx.getStorage({
      key: '登录状态',
      success(res2) {
      if(res2.data==2){
        console.log(666)
       that.setData({
          islogin: false,
        })
      }else{
        console.log(66666)
        console.log(res2)
        that.setData({
          islogin: true,
        })
      }
      }
    })






if(options.id!=null){
  tzid=options.id
      var token = wx.getStorageSync('token')
   wx.request({
      url: app.globalData.Main_Server + "/api/question/GetQuestion",
      data: {
        token: token,
id:options.id
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
        yihuoqu=666;
        Question_body = res.data.Question_Result.questionBody
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
            difficulty:difficulty,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }

    })

}
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
if(bubian!=666){
  wx.showToast({
      title: '加载中',
      icon: "none",
      duration: 2000
    })
    console.log(app.globalData.id)
    var that = this
    var token = wx.getStorageSync('token')
if(yihuoqu!=666){
   wx.request({
      url: app.globalData.Main_Server + "/api/question/GetQuestion",
      data: {
        token: token,
id:tzid
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
        Question_body = res.data.Question_Result.questionBody
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
            difficulty:difficulty,
            Examination_Place: Examination_Place,
            Question_Analysis: Question_Analysis,
          })
        console.log(res.data)
      }

    })
}
 yihuoqu=1
}
  bubian=1

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
        source: "随机练习",
        id: id,
        answer: "A"



      },
      success(res) {
        app.globalData.jfqs++
        if(app.globalData.jfqs%5==0){
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
        source: "随机练习",
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
        source: "随机练习",
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
        source: "随机练习",
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

  },  onShareAppMessage: function () {
    bubian=666;
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
    return {
      title: '这道天文题你会做吗：'+Question_body,
      path: '/pages/Knowledge_Contest/Random_exercises2/index?id='+id
    }
  },
  gotoPage2: function () {

    var that = this
   wx.switchTab({ url: '/pages/Realtime_Data/Main', })
  }
})