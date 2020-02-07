//app.js
App({
  onLaunch: function() {

    wx.getStorage({
      key: 'token',
      success(res2) {
        wx.request({
          url: "https://www.jishestudio.com/jupyteradmin/api/user/Verifytoken",
          data: {
            token: res2.data
          },
          fail(res) {

          },
          success(res) {
            if (res.data.result == true) {
              console.log("已经登录")
              try {
                wx.setStorageSync('登录状态', 1)

              } catch (e) {}
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  if (res.code) {
                    console.log('登录success！' + res.code)
                    try {
                      var code = res.code
                      var nickname = wx.getStorageSync('nickname')
                      var fm = wx.getStorageSync('fm')
                      var province = wx.getStorageSync('province')
                      var city = wx.getStorageSync('city')

                      if (nickname != "") {
                        wx.request({
                          url: 'https://www.jishestudio.com/jupyteradmin/api/login/wxlogin',

                          data: {
                            code: code,
                            nickname: nickname,
                            fm: fm,
                            province: province,
                            city: city,

                          },
                          success(res) {
                            console.log(6)
                            wx.setStorageSync('token', res.data.OpenId.jwttoken)
                            wx.setStorageSync('openid', res.data.OpenId.openId)
                            wx.setStorageSync('登录状态', 1)
                            console.log("最新" + res.data.OpenId.jwttoken)
                            wx.setStorageSync('code', code)
                            wx.setStorageSync('nickname', res.data.OpenId.nickname)
                            wx.setStorageSync('province', res.data.OpenId.province)
                            wx.setStorageSync('city', res.data.OpenId.city)

                          }

                        })

                      } else {
                        wx.setStorageSync('登录状态', 2)
                      }
                    } catch (e) {
                      wx.setStorageSync('登录状态', 2)

                    }

                    //发起网络请求

                  }
                }
              })
            } else {
              console.log("登录超时")
              console.log(res.data.result)

              try {
                wx.setStorageSync('登录状态', 2)
              } catch (e) {}
            }


          }
        })


        console.log(res2.data)
      },
      fail(res2) {
        console.log("未登录")
        try {
          wx.setStorageSync('登录状态', 2)
        } catch (e) {}
      }
    })
    //if()
    {

    }


  },
  globalData: {
    userInfo: null,
  Main_Server: "http://localhost:8080", //主请求服务器
   //Main_Server: "https://www.jishestudio.com/jupyteradmin",
    LON: "116.2", //经度
    LAT: "39.9", //纬度
    inp: 1,
    fjd: 0,
    fwd: 0,
    openid: "",
    token: "",
    search: "", //模块练习搜索索引保存
    page1: "", //模块练习搜索页码保存
    idp: "", //模块练习索引,试题搜索索引
    Correct_Answer: "", //练习答案临时储存
    id:"",//试题反馈id记录
    page1:"",//试题搜索页码
    tishu:0,//在线测试题目计数
    cspd1:0,
    allqs:0,
    cstimu:0,
    csscore:0,
    tzjsq:1,
    tzjsqsave:0,
  }
})