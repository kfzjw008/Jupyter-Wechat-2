// pages/znxx/znxx.js
var app = getApp();
var str="";
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    InputBottom: 0,
    searchinput:"",
    duihua:[
    //  {mytalk: "0", message: "666aaaa!", date: "3475623345642348" }, 
    //  { mytalk: "1", message: "6667aaaa!", date: "3475623445345642348" }, 
    //  { mytalk: "0", message: "6668aaaa!", date: "34756232345642348" },
    //  { mytalk: "1", message: "6669aaaa!", date: "3475623t4345642348" },
    //  {mytalk: "0", message: "6660aaaa!", date: "3475623778745642348" },
    ]
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  }, inputTyping: function (e) {
    var that = this

     str=e.detail.value
    //console.log(this.inpu);
    console.log(e.detail.value);
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },anniu(e){
    if (str.trim()!=""){
      var that = this
      var obj = {}
      obj.mytalk = "1"
      obj.message = str
      obj.date = util.formatTime(new Date());
      var duihua = that.data.duihua
      duihua.push(obj)
      that.setData({
        duihua: duihua,
        searchinput: '',
        toView: 'm-' + (duihua.length - 1)
      })
    }

   

console.log(e)
    wx.request({
      url: app.globalData.Main_Server + "/api/robot/talk",
      data: {
        content: str,
      },
fail(){
  str = ""
},
      success(res) {
        str = ""
        console.log(res)
        var obj = {}
        obj.mytalk = "0"
        obj.message = res.data.message
        obj.date = res.data.date;
        var duihua = that.data.duihua
        duihua.push(obj)
        that.setData({
          duihua: duihua,
          searchinput: '',
          toView: 'm-' + (duihua.length - 1)
        })
        //console.log(res.data)
      }
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
    var that = this
    wx.request({
      url: app.globalData.Main_Server + "/api/robot/talk",
      data: {
        content:"你好",
      },

      success(res) {
        console.log(res)
        var obj = {}
        obj.mytalk = "0"
        obj.message = res.data.message
        obj.date = res.data.date;
        var duihua = that.data.duihua
        duihua.push(obj)
        that.setData({
          duihua: duihua,
          searchinput: '',
          toView: 'm-' + (duihua.length - 1)
        })
        //console.log(res.data)
      }
    })



  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that =this
    var duihua=that.data.duihua
    console.log(duihua)

this.setData({
duihua
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