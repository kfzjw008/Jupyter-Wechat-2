// pages/my/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    islogin: false,
    loadModal: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wd: '',
    jd: '',
    a1:"--",
    a2:"--",
    a3:"--"
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  },

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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }, loadModal() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
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


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  }, on22: function () {

    wx.showModal({
      content: '功能开发中，敬请期待！',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },




  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  kt: function () {
    wx.showToast({
      title: '此功能后续开通',
      icon: 'success',
      duration: 3000
    })
  },
  url: function () {
    wx.navigateTo({
      url: '../qa/rz/index',
    })
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

  }
})