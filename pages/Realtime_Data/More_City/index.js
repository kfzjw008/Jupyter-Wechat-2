// pages/index/more/index.js
var app = getApp();  

const markersize = 30

function range(start, edge, step) {
  for (var ret = [];
    (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

function markers(northeast, southwest, scale, width, height) {

  const markerslng = (northeast.longitude - southwest.longitude) * markersize / width
  const markerslat = (northeast.latitude - southwest.latitude) * markersize / height

  const maxlon = northeast.longitude
  const minlon = southwest.longitude
  const maxlat = northeast.latitude
  const minlat = southwest.latitude

  const lons = range(minlon, maxlon, markerslng)
  const lats = range(minlat, maxlat, markerslat)

  let _markers = []
  lons.forEach((lon, i) => {
    lats.forEach((lat, j) => {
      _markers.push({
        id: lon + ',' + lat,
        latitude: lat,
        longitude: lon,

        alpha: 0, //将图片设置为透明,通过开发者工具看不出效果,但真机是有效果的
        width: markersize,
        height: markersize
      })
    })
  })
  return _markers
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fjd:0,
    fwd:0,
jdg:'',
    wdg: '', polygons: [],
    controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: [],

  }, createMarkers() {

    this.mapCtx = wx.createMapContext('map')
    const query = wx.createSelectorQuery()
    const map = query.select('#map').boundingClientRect()

    let that = this

    that.mapCtx.getRegion({
      success(res1) {
        that.mapCtx.getScale({
          success(res2) {
            query.exec((res) => {
              let width = res[0].width;
              let height = res[0].height;
              let _markers = markers(res1.northeast, res1.southwest, res2.scale, width, height)
              that.data.markers = _markers
              that.setData(that.data)
            })
          }
        })
      }
    })
  },
  regionchange(e) {
    this.setData({
      markers: [],

    })
    this.createMarkers()
    this.setData({

      markers: [{
        //   id: "1",
        latitude: app.globalData.fwd,
        longitude: app.globalData.fjd,
        width: 100,
        height: 100,

      }],
    })
  },
  markertap(e) {
    this.setData({
      markers: [],

    })
   this.createMarkers()


    e.alpha=1
    console.log(e.markerId.split(","))
    var jd = parseFloat(e.markerId.split(",")[0]).toFixed(4);
    var wd = parseFloat(e.markerId.split(",")[1]).toFixed(4);
    console.log(jd)
    console.log(wd)
    app.globalData.fjd=jd
    app.globalData.fwd=wd
    
   this.setData({
    jd: jd,
     wd: wd,
     markers: [{
     //   id: "1",
       latitude: wd,
       longitude: jd,
       width: 100,
      height: 100,

      }],
    })
    console.log(e.alpha)


  },
  controltap(e) {
    console.log(e.controlId)
  },
  onReady(e) {
    this.createMarkers()
  },
  
  
  jd: function (e) {
    console.log(e)
    this.setData({
      
      jdg: e.detail.value
    })
    app.globalData.fjd = e.detail.value
  },
  
   wd: function (e) {
   console.log(e)
    this.setData({
      wdg: e.detail.value
    })
  
     app.globalData.fwd = e.detail.value
  },
  gotoPage2: function (e) {
    var that = this

    if (app.globalData.fjd == '' || app.globalData.fwd=='') {
      wx.showModal({
        content: '请输入完整的经纬度！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }else{
      app.globalData.inp = 1
      console.log(app.globalData.fjd)
      app.globalData.LON = app.globalData.fjd;
          app.globalData.LAT = app.globalData.fwd;
      wx.navigateBack({
        delta: 1,
        success(res) {
          //  var jdg=
          app.globalData.LON = app.globalData.fjd;
          app.globalData.LAT = app.globalData.fwd;





          wx.request({
    
    url: app.globalData.Main_Server + "/api/function/SearchSAO",
            data: {
              LON: app.globalData.LON,
              LAT: app.globalData.LAT
            },

          })
          console.log(app.globalData.jd)
        }
      })

    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  }
})