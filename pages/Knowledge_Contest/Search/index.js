var app = getApp();

Page({
  data: {
    inputShowed: false,
    inpu: ''
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function (e) {
    var that = this
    that.setData({



    });
    // app.globalData.search = e.detail.value,
    console.log(e.detail.value, app.globalData.search)
    wx.navigateTo({ url: 'result', })
    //inputVal: "",
    //inputShowed: false

  },
  clearInput: function () {
    this.setData({

    });
  },
  inputTyping: function (e) {
    var that = this

    app.globalData.search = e.detail.value,
      console.log(this.inpu);
    console.log(e.detail.value);
    app.globalData.search = e.detail.value
  }

});
