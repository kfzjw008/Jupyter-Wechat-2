
// 在页面中定义插屏广告
var app = getApp();
let interstitialAd = null
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    islogin: false,
    loadModal: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    timu: "加载中",

    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    xmad: {
      adData: {},
      ad: {
        banner: "xmd67cda48311485dabc084586c16008",
      }
    }
  }, onReady: function () {
    var that =this
    var token = wx.getStorageSync('token')
    var count = wx.getStorageSync('count')
    if(count!=""){
      that.setData({
        timu: count
      })
    }
    wx.request({
      url: app.globalData.Main_Server + "/api/question/QuestionCount",
      data: {
        token: token,
      },
      fail(res) {
      },
      success(res) {
       that.setData({
          timu: res.data.COUNT

        })
        try {
          wx.setStorageSync('count', res.data.COUNT)
        } catch (e) { }
      }
    })
    wx.request({
      url: app.globalData.Main_Server + "/api/question/ModuleExercises",
      data: {
        token: token,
      },
      fail(res) {
      },
      success(res) {
        try {
          wx.setStorageSync('Module', res.data.Module)
        } catch (e) { }
      }
    })


  }, onGotUserInfo: function (e) {
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
            url: app.globalData.Main_Server + '/api/login/wxlogin',

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

                    wx.getStorage({
                      key: '登录状态',
                      success(res2) {
                        if (res2.data == 2) {
                        } else {

                          var name = wx.getStorageSync('nickname')
                          wx.request({
                            url: app.globalData.Main_Server + "/api/rank/myrecord",
                            data: {
                              nick: name,
                            },
                            fail(res) {
                            },
                            success(res) {
                              console.log(res.data)
                              var a1 = res.data.CurrentQuestion.rate
                              var a2 = res.data.allQuestion.allquestion
                              var a3 = res.data.integral.sum
                              var a4 = res.data.tz.count
                              wx.setStorageSync('RECORD', res.data)
                              that.setData({
                                a1: a3,
                                a2: a2,
                                a3: a1,
                                a4: a4,
                              })


                            }
                          })


                        }
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
    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-11e58c149a2f21eb'
      })
      interstitialAd.onLoad(() => { })
      interstitialAd.onError((err) => { })
      interstitialAd.onClose(() => { })
    }
  },
  onShow: function (options) {
    this.setData({
      timu: app.globalData.allqsxs

    })
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },



});