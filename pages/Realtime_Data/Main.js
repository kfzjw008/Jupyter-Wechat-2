// pages/Realtime_Data/Main.js
// 在页面onLoad回调事件中创建插屏广告实例
let interstitialAd = null
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lon: "",
    lat: "",
    P0: "--"
    ,list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: app.globalData.Main_Server + "/api/user/board",
      data: {
        size: 30,
        page: app.globalData.page1

      },
      success(res) {
        wx.showModal({
          title: res.data.Board.content[0].title,
          content: res.data.Board.content[0].content,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        })
      }
    })


    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-fd7fc791b116e85f'
      })
      console.log('插屏2')
      interstitialAd.onLoad(() => {
        console.log('插屏 广告加载成功')
      })
      interstitialAd.onError((err) => {
        console.log('插屏 广告加载失败')
      })
      interstitialAd.onClose(() => {})
    }

    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        //console.log(res)
        app.globalData.LAT = res.latitude
        app.globalData.LON = res.longitude
        that.setData({
          lon: app.globalData.LON,
          lat: app.globalData.LAT,
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (interstitialAd) { //插屏广告
      console.log(interstitialAd)
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
    if (app.globalData.inp == 1) {
      var that = this
      that.setData({
        hid: false,
        hid2: true,
        isLoad: false
      })
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          that.setData({
            lon: app.globalData.LON,
            lat: app.globalData.LAT,
          })
          wx.request({
            url: app.globalData.Main_Server + "/api/function/SearchSAO",
            data: {
              LON: app.globalData.LON,
              LAT: app.globalData.LAT
            },
            fail(res) {
              try {
                var SAO_Result = wx.getStorageSync('SAO_Result')
                if (value) {
                  // Do something with return value
                }
              } catch (e) {
                // Do something when catch error
              }
              that.setData({
                hid: true,
                hid2: false,
                isLoad: false,
                P0: SAO_Result.P0.SAO,
                locat: SAO_Result.City,
                cloudcover: SAO_Result.P0.CloudCover.CloudCover_Value,
                seeing: SAO_Result.P0.Seeing.Seeing_Value,
                // rh2m: '加载失败',
                temp: '加载失', //体感温度
                temp2m: '加载失败',
                transparency: SAO_Result.P0.Transparency.Transparency_Value,
                lifted_index: SAO_Result.P0.Lifted_Index.Lifted_Index_Value,
                sseeing: SAO_Result.P0.Seeing.Explain,
                strans: SAO_Result.P0.Transparency.Explain,
                slifted: SAO_Result.P0.Lifted_Index.Explain,
                scloudcover: SAO_Result.P0.CloudCover.Explain,
                temp: SAO_Result.P0.Temperature
             
              })
              setTimeout(function () {
                that.setData({
                  hid2: true
                })
              }, 2000)
            },
            success(res) {
              //此处获取数据
              console.log(res.data.SAO_Result.P0)
              var P0 = res.data.SAO_Result.P0.SAO
              app.globalData.inp = 0
              that.setData({
                isLoad: true,
                P0: res.data.SAO_Result.P0.SAO,
                locat: res.data.SAO_Result.City,
                cloudcover: res.data.SAO_Result.P0.CloudCover.CloudCover_Value,
                seeing: res.data.SAO_Result.P0.Seeing.Seeing_Value,
                // rh2m: '加载失败',
                temp: '加载失', //体感温度
                temp2m: '加载失败',
                transparency: res.data.SAO_Result.P0.Transparency.Transparency_Value,
                lifted_index: res.data.SAO_Result.P0.Lifted_Index.Lifted_Index_Value,
                sseeing: res.data.SAO_Result.P0.Seeing.Explain,
                strans: res.data.SAO_Result.P0.Transparency.Explain,
                slifted: res.data.SAO_Result.P0.Lifted_Index.Explain,
                scloudcover: res.data.SAO_Result.P0.CloudCover.Explain,
                temp: res.data.SAO_Result.P0.Temperature
              })
              setTimeout(function () {
                that.setData({
                  hid: true
                })

              }, 2000)
//本地缓存
             
              try {
                wx.setStorageSync('SAO_Result', res.data.SAO_Result )
              } catch (e) { }
              if (P0 <= 55) {
                console.log(55)

                that.setData({
                  jpg: app.globalData.Main_Server + '/images/0-55.jpg',
                  q1: '不适宜观测'
                })
              

              }
              if (56 <= P0 && P0 <= 65) {
                console.log(65)
                console.log(P0)
                that.setData({
                  jpg: app.globalData.Main_Server + '/images/56-65.jpg',
                  q1: '勉强可以观测'
                })

              }
              if (66 <= P0 && P0 <= 80) {
                console.log(80)
                console.log(P0)
                that.setData({
                  jpg: app.globalData.Main_Server + '/images/66-80.jpg',
                  q1: '可以观测'
                })

              }
              if (81 <= P0 && P0 <= 95) {
                console.log(95)
                console.log(P0)
                that.setData({
                  jpg: app.globalData.Main_Server + '/images/81-95.jpg',
                  q1: '适合观测'
                })

              }
              if (96 <= P0 && P0 <= 100) {
                console.log(100)
                console.log(P0)
                that.setData({
                  jpg: app.globalData.Main_Server + '/images/96-100.jpg',
                  q1: '非常适合观测'
                })

              }
              wx.reportAnalytics('search_p0', {
                locat: location,
                p0: P0
              })
              app.globalData.inp = 0
            }
          })
        }
      })
    }
    app.globalData.inp = 0
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if(app.globalData.inp ==1){
      console.log(app.globalData.inp)
      this.onReady();
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  gotoPage1: function() {
      wx.navigateTo({
        url: 'More_City/index',
      })
    }

    ,
  gotoPage3: function() {
    wx.navigateTo({
      url: 'Changing_trends/index',
    })
  },
  gotoPage6: function() {
    wx.navigateTo({
      url: 'Observational_recommendations/index',
    })
  },
  fresh: function (a) {
    app.globalData.inp = 1
this.onReady();

  }
})