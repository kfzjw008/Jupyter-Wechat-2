// pages/index/qs/index.js
var app = getApp();
var Charts = require('charts.js');
var util = require('../../../utils/util.js');

function fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  gotoPage2: function (e) {
    var that = this
    wx.navigateBack({
      delta: 1,

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

    var time = util.formatTime(new Date());
    //获取当前时间戳
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
    //年
    var Y = date.getFullYear();
    //月
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时
    var h = date.getHours();
    //分
    var m = date.getMinutes();
    //秒
    var s = date.getSeconds();
    console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s);
    //转换为时间格式字符串
    console.log(date.toDateString());
    console.log(date.toGMTString());
    console.log(date.toISOString());
    console.log(date.toJSON());
    console.log(date.toLocaleDateString());
    console.log(date.toLocaleString());
    console.log(date.toLocaleTimeString());
    console.log(date.toString());
    console.log(date.toTimeString());
    console.log(date.toUTCString());
    //时间、时间戳加减 以加一天举例，聪明的你肯定触类旁通


    //加3小时的时间戳：
    var tomorrow_3timetamp = timestamp + 3 * 60 * 60;
    //加一天的时间：
    var n_3to = tomorrow_3timetamp * 1000;
    var tomorrow_3date = new Date(n_3to);
    //加一天后的年份
    var Y_3tomorrow = tomorrow_3date.getFullYear();
    //加一天后的月份
    var M_3tomorrow = (tomorrow_3date.getMonth() + 1 < 10 ? '0' + (tomorrow_3date.getMonth() + 1) : tomorrow_3date.getMonth() + 1);
    //加一天后的日期
    var D_3tomorrow = tomorrow_3date.getDate() < 10 ? '0' + tomorrow_3date.getDate() : tomorrow_3date.getDate();
    //加一天后的时刻
    var h_3tomorrow = tomorrow_3date.getHours();
    //加一天后的分钟
    var m_3tomorrow = tomorrow_3date.getMinutes();
    //加一天后的秒数
    var s_3tomorrow = tomorrow_3date.getSeconds();

    //加6小时的时间戳：
    var tomorrow_6timetamp = timestamp + 6 * 60 * 60;
    //加一天的时间：
    var n_6to = tomorrow_6timetamp * 1000;
    var tomorrow_6date = new Date(n_6to);
    //加一天后的年份
    var Y_6tomorrow = tomorrow_6date.getFullYear();
    //加一天后的月份
    var M_6tomorrow = (tomorrow_6date.getMonth() + 1 < 10 ? '0' + (tomorrow_6date.getMonth() + 1) : tomorrow_6date.getMonth() + 1);
    //加一天后的日期
    var D_6tomorrow = tomorrow_6date.getDate() < 10 ? '0' + tomorrow_6date.getDate() : tomorrow_6date.getDate();
    //加一天后的时刻
    var h_6tomorrow = tomorrow_6date.getHours();
    //加一天后的分钟
    var m_6tomorrow = tomorrow_6date.getMinutes();
    //加一天后的秒数
    var s_6tomorrow = tomorrow_6date.getSeconds();


    //加9小时的时间戳：
    var tomorrow_9timetamp = timestamp + 9 * 60 * 60;
    //加一天的时间：
    var n_9to = tomorrow_9timetamp * 1000;
    var tomorrow_9date = new Date(n_9to);
    //加一天后的年份
    var Y_9tomorrow = tomorrow_9date.getFullYear();
    //加一天后的月份
    var M_9tomorrow = (tomorrow_9date.getMonth() + 1 < 10 ? '0' + (tomorrow_9date.getMonth() + 1) : tomorrow_9date.getMonth() + 1);
    //加一天后的日期
    var D_9tomorrow = tomorrow_9date.getDate() < 10 ? '0' + tomorrow_9date.getDate() : tomorrow_9date.getDate();
    //加一天后的时刻
    var h_9tomorrow = tomorrow_9date.getHours();
    //加一天后的分钟
    var m_9tomorrow = tomorrow_9date.getMinutes();
    //加一天后的秒数
    var s_9tomorrow = tomorrow_9date.getSeconds();



    //加12小时的时间戳：
    var tomorrow_12timetamp = timestamp + 12 * 60 * 60;
    //加一天的时间：
    var n_12to = tomorrow_12timetamp * 1000;
    var tomorrow_12date = new Date(n_12to);
    //加一天后的年份
    var Y_12tomorrow = tomorrow_12date.getFullYear();
    //加一天后的月份
    var M_12tomorrow = (tomorrow_12date.getMonth() + 1 < 10 ? '0' + (tomorrow_12date.getMonth() + 1) : tomorrow_12date.getMonth() + 1);
    //加一天后的日期
    var D_12tomorrow = tomorrow_12date.getDate() < 10 ? '0' + tomorrow_12date.getDate() : tomorrow_12date.getDate();
    //加一天后的时刻
    var h_12tomorrow = tomorrow_12date.getHours();
    //加一天后的分钟
    var m_12tomorrow = tomorrow_12date.getMinutes();
    //加一天后的秒数
    var s_12tomorrow = tomorrow_12date.getSeconds();


    //加15小时的时间戳：
    var tomorrow_15timetamp = timestamp + 15 * 60 * 60;
    //加一天的时间：
    var n_15to = tomorrow_15timetamp * 1000;
    var tomorrow_15date = new Date(n_15to);
    //加一天后的年份
    var Y_15tomorrow = tomorrow_15date.getFullYear();
    //加一天后的月份
    var M_15tomorrow = (tomorrow_15date.getMonth() + 1 < 10 ? '0' + (tomorrow_15date.getMonth() + 1) : tomorrow_15date.getMonth() + 1);
    //加一天后的日期
    var D_15tomorrow = tomorrow_15date.getDate() < 10 ? '0' + tomorrow_15date.getDate() : tomorrow_15date.getDate();
    //加一天后的时刻
    var h_15tomorrow = tomorrow_15date.getHours();
    //加一天后的分钟
    var m_15tomorrow = tomorrow_15date.getMinutes();
    //加一天后的秒数
    var s_15tomorrow = tomorrow_15date.getSeconds();

    //加18小时的时间戳：
    var tomorrow_18timetamp = timestamp + 18 * 60 * 60;
    //加一天的时间：
    var n_18to = tomorrow_18timetamp * 1000;
    var tomorrow_18date = new Date(n_18to);
    //加一天后的年份
    var Y_18tomorrow = tomorrow_18date.getFullYear();
    //加一天后的月份
    var M_18tomorrow = (tomorrow_18date.getMonth() + 1 < 10 ? '0' + (tomorrow_18date.getMonth() + 1) : tomorrow_18date.getMonth() + 1);
    //加一天后的日期
    var D_18tomorrow = tomorrow_18date.getDate() < 10 ? '0' + tomorrow_18date.getDate() : tomorrow_18date.getDate();
    //加一天后的时刻
    var h_18tomorrow = tomorrow_18date.getHours();
    //加一天后的分钟
    var m_18tomorrow = tomorrow_18date.getMinutes();
    //加一天后的秒数
    var s_18tomorrow = tomorrow_18date.getSeconds();

    //加21小时的时间戳：
    var tomorrow_21timetamp = timestamp + 21 * 60 * 60;
    //加一天的时间：
    var n_21to = tomorrow_21timetamp * 1000;
    var tomorrow_21date = new Date(n_21to);
    //加一天后的年份
    var Y_21tomorrow = tomorrow_21date.getFullYear();
    //加一天后的月份
    var M_21tomorrow = (tomorrow_21date.getMonth() + 1 < 10 ? '0' + (tomorrow_21date.getMonth() + 1) : tomorrow_21date.getMonth() + 1);
    //加一天后的日期
    var D_21tomorrow = tomorrow_21date.getDate() < 10 ? '0' + tomorrow_21date.getDate() : tomorrow_21date.getDate();
    //加一天后的时刻
    var h_21tomorrow = tomorrow_21date.getHours();
    //加一天后的分钟
    var m_21tomorrow = tomorrow_21date.getMinutes();
    //加一天后的秒数
    var s_21tomorrow = tomorrow_21date.getSeconds();

    //加24小时的时间戳：
    var tomorrow_24timetamp = timestamp + 24 * 60 * 60;
    //加一天的时间：
    var n_24to = tomorrow_24timetamp * 1000;
    var tomorrow_24date = new Date(n_24to);
    //加一天后的年份
    var Y_24tomorrow = tomorrow_24date.getFullYear();
    //加一天后的月份
    var M_24tomorrow = (tomorrow_24date.getMonth() + 1 < 10 ? '0' + (tomorrow_24date.getMonth() + 1) : tomorrow_24date.getMonth() + 1);
    //加一天后的日期
    var D_24tomorrow = tomorrow_24date.getDate() < 10 ? '0' + tomorrow_24date.getDate() : tomorrow_24date.getDate();
    //加一天后的时刻
    var h_24tomorrow = tomorrow_24date.getHours();
    //加一天后的分钟
    var m_24tomorrow = tomorrow_24date.getMinutes();
    //加一天后的秒数
    var s_24tomorrow = tomorrow_24date.getSeconds();

    //加27小时的时间戳：
    var tomorrow_27timetamp = timestamp + 27 * 60 * 60;
    //加一天的时间：
    var n_27to = tomorrow_27timetamp * 1000;
    var tomorrow_27date = new Date(n_27to);
    //加一天后的年份
    var Y_27tomorrow = tomorrow_27date.getFullYear();
    //加一天后的月份
    var M_27tomorrow = (tomorrow_27date.getMonth() + 1 < 10 ? '0' + (tomorrow_27date.getMonth() + 1) : tomorrow_27date.getMonth() + 1);
    //加一天后的日期
    var D_27tomorrow = tomorrow_27date.getDate() < 10 ? '0' + tomorrow_27date.getDate() : tomorrow_27date.getDate();
    //加一天后的时刻
    var h_27tomorrow = tomorrow_27date.getHours();
    //加一天后的分钟
    var m_27tomorrow = tomorrow_27date.getMinutes();
    //加一天后的秒数
    var s_27tomorrow = tomorrow_27date.getSeconds();

    //加30小时的时间戳：
    var tomorrow_30timetamp = timestamp + 30 * 60 * 60;
    //加一天的时间：
    var n_30to = tomorrow_30timetamp * 1000;
    var tomorrow_30date = new Date(n_30to);
    //加一天后的年份
    var Y_30tomorrow = tomorrow_30date.getFullYear();
    //加一天后的月份
    var M_30tomorrow = (tomorrow_30date.getMonth() + 1 < 10 ? '0' + (tomorrow_30date.getMonth() + 1) : tomorrow_30date.getMonth() + 1);
    //加一天后的日期
    var D_30tomorrow = tomorrow_30date.getDate() < 10 ? '0' + tomorrow_30date.getDate() : tomorrow_30date.getDate();
    //加一天后的时刻
    var h_30tomorrow = tomorrow_30date.getHours();
    //加一天后的分钟
    var m_30tomorrow = tomorrow_30date.getMinutes();
    //加一天后的秒数
    var s_30tomorrow = tomorrow_30date.getSeconds();

    //加33小时的时间戳：
    var tomorrow_33timetamp = timestamp + 33 * 60 * 60;
    //加一天的时间：
    var n_33to = tomorrow_33timetamp * 1000;
    var tomorrow_33date = new Date(n_33to);
    //加一天后的年份
    var Y_33tomorrow = tomorrow_33date.getFullYear();
    //加一天后的月份
    var M_33tomorrow = (tomorrow_33date.getMonth() + 1 < 10 ? '0' + (tomorrow_33date.getMonth() + 1) : tomorrow_33date.getMonth() + 1);
    //加一天后的日期
    var D_33tomorrow = tomorrow_33date.getDate() < 10 ? '0' + tomorrow_33date.getDate() : tomorrow_33date.getDate();
    //加一天后的时刻
    var h_33tomorrow = tomorrow_33date.getHours();
    //加一天后的分钟
    var m_33tomorrow = tomorrow_33date.getMinutes();
    //加一天后的秒数
    var s_33tomorrow = tomorrow_33date.getSeconds();

    //加36小时的时间戳：
    var tomorrow_36timetamp = timestamp + 36 * 60 * 60;
    //加一天的时间：
    var n_36to = tomorrow_36timetamp * 1000;
    var tomorrow_36date = new Date(n_36to);
    //加一天后的年份
    var Y_36tomorrow = tomorrow_36date.getFullYear();
    //加一天后的月份
    var M_36tomorrow = (tomorrow_36date.getMonth() + 1 < 10 ? '0' + (tomorrow_36date.getMonth() + 1) : tomorrow_36date.getMonth() + 1);
    //加一天后的日期
    var D_36tomorrow = tomorrow_36date.getDate() < 10 ? '0' + tomorrow_36date.getDate() : tomorrow_36date.getDate();
    //加一天后的时刻
    var h_36tomorrow = tomorrow_36date.getHours();
    //加一天后的分钟
    var m_36tomorrow = tomorrow_36date.getMinutes();
    //加一天后的秒数
    var s_36tomorrow = tomorrow_36date.getSeconds();

    //加39小时的时间戳：
    var tomorrow_39timetamp = timestamp + 39 * 60 * 60;
    //加一天的时间：
    var n_39to = tomorrow_39timetamp * 1000;
    var tomorrow_39date = new Date(n_39to);
    //加一天后的年份
    var Y_39tomorrow = tomorrow_39date.getFullYear();
    //加一天后的月份
    var M_39tomorrow = (tomorrow_39date.getMonth() + 1 < 10 ? '0' + (tomorrow_39date.getMonth() + 1) : tomorrow_39date.getMonth() + 1);
    //加一天后的日期
    var D_39tomorrow = tomorrow_39date.getDate() < 10 ? '0' + tomorrow_39date.getDate() : tomorrow_39date.getDate();
    //加一天后的时刻
    var h_39tomorrow = tomorrow_39date.getHours();
    //加一天后的分钟
    var m_39tomorrow = tomorrow_39date.getMinutes();
    //加一天后的秒数
    var s_39tomorrow = tomorrow_39date.getSeconds();

    //加42小时的时间戳：
    var tomorrow_42timetamp = timestamp + 42 * 60 * 60;
    //加一天的时间：
    var n_42to = tomorrow_42timetamp * 1000;
    var tomorrow_42date = new Date(n_42to);
    //加一天后的年份
    var Y_42tomorrow = tomorrow_42date.getFullYear();
    //加一天后的月份
    var M_42tomorrow = (tomorrow_42date.getMonth() + 1 < 10 ? '0' + (tomorrow_42date.getMonth() + 1) : tomorrow_42date.getMonth() + 1);
    //加一天后的日期
    var D_42tomorrow = tomorrow_42date.getDate() < 10 ? '0' + tomorrow_42date.getDate() : tomorrow_42date.getDate();
    //加一天后的时刻
    var h_42tomorrow = tomorrow_42date.getHours();
    //加一天后的分钟
    var m_42tomorrow = tomorrow_42date.getMinutes();
    //加一天后的秒数
    var s_42tomorrow = tomorrow_42date.getSeconds();

    //加45小时的时间戳：
    var tomorrow_45timetamp = timestamp + 45 * 60 * 60;
    //加一天的时间：
    var n_45to = tomorrow_45timetamp * 1000;
    var tomorrow_45date = new Date(n_45to);
    //加一天后的年份
    var Y_45tomorrow = tomorrow_45date.getFullYear();
    //加一天后的月份
    var M_45tomorrow = (tomorrow_45date.getMonth() + 1 < 10 ? '0' + (tomorrow_45date.getMonth() + 1) : tomorrow_45date.getMonth() + 1);
    //加一天后的日期
    var D_45tomorrow = tomorrow_45date.getDate() < 10 ? '0' + tomorrow_45date.getDate() : tomorrow_45date.getDate();
    //加一天后的时刻
    var h_45tomorrow = tomorrow_45date.getHours();
    //加一天后的分钟
    var m_45tomorrow = tomorrow_45date.getMinutes();
    //加一天后的秒数
    var s_45tomorrow = tomorrow_45date.getSeconds();

    //加48小时的时间戳：
    var tomorrow_48timetamp = timestamp + 48 * 60 * 60;
    //加一天的时间：
    var n_48to = tomorrow_48timetamp * 1000;
    var tomorrow_48date = new Date(n_48to);
    //加一天后的年份
    var Y_48tomorrow = tomorrow_48date.getFullYear();
    //加一天后的月份
    var M_48tomorrow = (tomorrow_48date.getMonth() + 1 < 10 ? '0' + (tomorrow_48date.getMonth() + 1) : tomorrow_48date.getMonth() + 1);
    //加一天后的日期
    var D_48tomorrow = tomorrow_48date.getDate() < 10 ? '0' + tomorrow_48date.getDate() : tomorrow_48date.getDate();
    //加一天后的时刻
    var h_48tomorrow = tomorrow_48date.getHours();
    //加一天后的分钟
    var m_48tomorrow = tomorrow_48date.getMinutes();
    //加一天后的秒数
    var s_48tomorrow = tomorrow_48date.getSeconds();

    //加51小时的时间戳：
    var tomorrow_51timetamp = timestamp + 51 * 60 * 60;
    //加一天的时间：
    var n_51to = tomorrow_51timetamp * 1000;
    var tomorrow_51date = new Date(n_51to);
    //加一天后的年份
    var Y_51tomorrow = tomorrow_51date.getFullYear();
    //加一天后的月份
    var M_51tomorrow = (tomorrow_51date.getMonth() + 1 < 10 ? '0' + (tomorrow_51date.getMonth() + 1) : tomorrow_51date.getMonth() + 1);
    //加一天后的日期
    var D_51tomorrow = tomorrow_51date.getDate() < 10 ? '0' + tomorrow_51date.getDate() : tomorrow_51date.getDate();
    //加一天后的时刻
    var h_51tomorrow = tomorrow_51date.getHours();
    //加一天后的分钟
    var m_51tomorrow = tomorrow_51date.getMinutes();
    //加一天后的秒数
    var s_51tomorrow = tomorrow_51date.getSeconds();

    //加54小时的时间戳：
    var tomorrow_54timetamp = timestamp + 54 * 60 * 60;
    //加一天的时间：
    var n_54to = tomorrow_54timetamp * 1000;
    var tomorrow_54date = new Date(n_54to);
    //加一天后的年份
    var Y_54tomorrow = tomorrow_54date.getFullYear();
    //加一天后的月份
    var M_54tomorrow = (tomorrow_54date.getMonth() + 1 < 10 ? '0' + (tomorrow_54date.getMonth() + 1) : tomorrow_54date.getMonth() + 1);
    //加一天后的日期
    var D_54tomorrow = tomorrow_54date.getDate() < 10 ? '0' + tomorrow_54date.getDate() : tomorrow_54date.getDate();
    //加一天后的时刻
    var h_54tomorrow = tomorrow_54date.getHours();
    //加一天后的分钟
    var m_54tomorrow = tomorrow_54date.getMinutes();
    //加一天后的秒数
    var s_54tomorrow = tomorrow_54date.getSeconds();

    //加57小时的时间戳：
    var tomorrow_57timetamp = timestamp + 57 * 60 * 60;
    //加一天的时间：
    var n_57to = tomorrow_57timetamp * 1000;
    var tomorrow_57date = new Date(n_57to);
    //加一天后的年份
    var Y_57tomorrow = tomorrow_57date.getFullYear();
    //加一天后的月份
    var M_57tomorrow = (tomorrow_57date.getMonth() + 1 < 10 ? '0' + (tomorrow_57date.getMonth() + 1) : tomorrow_57date.getMonth() + 1);
    //加一天后的日期
    var D_57tomorrow = tomorrow_57date.getDate() < 10 ? '0' + tomorrow_57date.getDate() : tomorrow_57date.getDate();
    //加一天后的时刻
    var h_57tomorrow = tomorrow_57date.getHours();
    //加一天后的分钟
    var m_57tomorrow = tomorrow_57date.getMinutes();
    //加一天后的秒数
    var s_57tomorrow = tomorrow_57date.getSeconds();

    //加60小时的时间戳：
    var tomorrow_60timetamp = timestamp + 60 * 60 * 60;
    //加一天的时间：
    var n_60to = tomorrow_60timetamp * 1000;
    var tomorrow_60date = new Date(n_60to);
    //加一天后的年份
    var Y_60tomorrow = tomorrow_60date.getFullYear();
    //加一天后的月份
    var M_60tomorrow = (tomorrow_60date.getMonth() + 1 < 10 ? '0' + (tomorrow_60date.getMonth() + 1) : tomorrow_60date.getMonth() + 1);
    //加一天后的日期
    var D_60tomorrow = tomorrow_60date.getDate() < 10 ? '0' + tomorrow_60date.getDate() : tomorrow_60date.getDate();
    //加一天后的时刻
    var h_60tomorrow = tomorrow_60date.getHours();
    //加一天后的分钟
    var m_60tomorrow = tomorrow_60date.getMinutes();
    //加一天后的秒数
    var s_60tomorrow = tomorrow_60date.getSeconds();
    this.setData({


      M_3tomorrow: M_3tomorrow,
      D_3tomorrow: D_3tomorrow,
      h_3tomorrow: fix(h_3tomorrow, 2),
      m_3tomorrow: fix(m_3tomorrow, 2),

      M_6tomorrow: M_6tomorrow,
      D_6tomorrow: D_6tomorrow,
      h_6tomorrow: fix(h_6tomorrow, 2),
      m_6tomorrow: fix(m_6tomorrow, 2),

      M_9tomorrow: M_9tomorrow,
      D_9tomorrow: D_9tomorrow,
      h_9tomorrow: fix(h_9tomorrow, 2),
      m_9tomorrow: fix(m_9tomorrow, 2),

      M_12tomorrow: M_12tomorrow,
      D_12tomorrow: D_12tomorrow,
      h_12tomorrow: fix(h_12tomorrow, 2),
      m_12tomorrow: fix(m_12tomorrow, 2),

      M_15tomorrow: M_15tomorrow,
      D_15tomorrow: D_15tomorrow,
      h_15tomorrow: fix(h_15tomorrow, 2),
      m_15tomorrow: fix(m_15tomorrow, 2),

      M_18tomorrow: M_18tomorrow,
      D_18tomorrow: D_18tomorrow,
      h_18tomorrow: fix(h_18tomorrow, 2),
      m_18tomorrow: fix(m_18tomorrow, 2),

      M_21tomorrow: M_21tomorrow,
      D_21tomorrow: D_21tomorrow,
      h_21tomorrow: fix(h_21tomorrow, 2),
      m_21tomorrow: fix(m_21tomorrow, 2),

      M_24tomorrow: M_24tomorrow,
      D_24tomorrow: D_24tomorrow,
      h_24tomorrow: fix(h_24tomorrow, 2),
      m_24tomorrow: fix(m_24tomorrow, 2),

      M_27tomorrow: M_27tomorrow,
      D_27tomorrow: D_27tomorrow,
      h_27tomorrow: fix(h_27tomorrow, 2),
      m_27tomorrow: fix(m_27tomorrow, 2),

      M_30tomorrow: M_30tomorrow,
      D_30tomorrow: D_30tomorrow,
      h_30tomorrow: fix(h_30tomorrow, 2),
      m_30tomorrow: fix(m_30tomorrow, 2),

      M_33tomorrow: M_33tomorrow,
      D_33tomorrow: D_33tomorrow,
      h_33tomorrow: fix(h_33tomorrow, 2),
      m_33tomorrow: fix(m_33tomorrow, 2),

      M_36tomorrow: M_36tomorrow,
      D_36tomorrow: D_36tomorrow,
      h_36tomorrow: fix(h_36tomorrow, 2),
      m_36tomorrow: fix(m_36tomorrow, 2),

      M_39tomorrow: M_39tomorrow,
      D_39tomorrow: D_39tomorrow,
      h_39tomorrow: fix(h_39tomorrow, 2),
      m_39tomorrow: fix(m_39tomorrow, 2),

      M_42tomorrow: M_42tomorrow,
      D_42tomorrow: D_42tomorrow,
      h_42tomorrow: fix(h_42tomorrow, 2),
      m_42tomorrow: fix(m_42tomorrow, 2),

      M_45tomorrow: M_45tomorrow,
      D_45tomorrow: D_45tomorrow,
      h_45tomorrow: fix(h_45tomorrow, 2),
      m_45tomorrow: fix(m_45tomorrow, 2),

      M_48tomorrow: M_48tomorrow,
      D_48tomorrow: D_48tomorrow,
      h_48tomorrow: fix(h_48tomorrow, 2),
      m_48tomorrow: fix(m_48tomorrow, 2),

      M_51tomorrow: M_51tomorrow,
      D_51tomorrow: D_51tomorrow,
      h_51tomorrow: fix(h_51tomorrow, 2),
      m_51tomorrow: fix(m_51tomorrow, 2),

      M_54tomorrow: M_54tomorrow,
      D_54tomorrow: D_54tomorrow,
      h_54tomorrow: fix(h_54tomorrow, 2),
      m_54tomorrow: fix(m_54tomorrow, 2),

      M_57tomorrow: M_57tomorrow,
      D_57tomorrow: D_57tomorrow,
      h_57tomorrow: fix(h_57tomorrow, 2),
      m_57tomorrow: fix(m_57tomorrow, 2),

      M_60tomorrow: M_60tomorrow,
      D_60tomorrow: D_60tomorrow,
      h_60tomorrow: fix(h_60tomorrow, 2),
      m_60tomorrow: fix(m_60tomorrow, 2),



    })
    that.setData({
      hid: false,
      hid2: true,
      isLoad: false
    })

            that.setData({
              isLoad: true
            })
     
            try {
              var value = wx.getStorageSync('SAO_Result')
              if (value) {
                // Do something with return value
              }
            } catch (e) {
              // Do something when catch error
            }
        
            that.setData({

              P0: value.P0.SAO,
              P1: value.P1.SAO,
              P2: value.P2.SAO,
              P3: value.P3.SAO,
              P4: value.P4.SAO,
              P5: value.P5.SAO,
              P6: value.P6.SAO,
              P7: value.P7.SAO,
              P8: value.P8.SAO,
              P9: value.P9.SAO,
              P10: value.P10.SAO,
              P11: value.P11.SAO,
              P12: value.P12.SAO,
              P13: value.P13.SAO,
              P14: value.P14.SAO,
              P15: value.P15.SAO,
              P16: value.P16.SAO,
              P17: value.P17.SAO,
              P18: value.P18.SAO,
              P19: value.P19.SAO,

            })

            //加18小时的时间戳：
            var tomorrow_timetamp = timestamp + 18 * 60 * 60;
            //加一天的时间：
            var n_to = tomorrow_timetamp * 1000;
            var tomorrow_date = new Date(n_to);
            //加一天后的年份
            var Y_tomorrow = tomorrow_date.getFullYear();
            //加一天后的月份
            var M_tomorrow = (tomorrow_date.getMonth() + 1 < 10 ? '0' + (tomorrow_date.getMonth() + 1) : tomorrow_date.getMonth() + 1);
            //加一天后的日期
            var D_tomorrow = tomorrow_date.getDate() < 10 ? '0' + tomorrow_date.getDate() : tomorrow_date.getDate();
            //加一天后的时刻
            var h_tomorrow = tomorrow_date.getHours();
            //加一天后的分钟
            var m_tomorrow = tomorrow_date.getMinutes();
            //加一天后的秒数
            var s_tomorrow = tomorrow_date.getSeconds();
            //加36小时的时间戳：
            var tomorrow_timetamp2 = timestamp + 36 * 60 * 60;
            //加一天的时间：
            var n_to2 = tomorrow_timetamp2 * 1000;
            var tomorrow_date2 = new Date(n_to2);
            //加一天后的年份
            var Y_tomorrow2 = tomorrow_date2.getFullYear();
            //加一天后的月份
            var M_tomorrow2 = (tomorrow_date2.getMonth() + 1 < 10 ? '0' + (tomorrow_date2.getMonth() + 1) : tomorrow_date2.getMonth() + 1);
            //加一天后的日期
            var D_tomorrow2 = tomorrow_date2.getDate() < 10 ? '0' + tomorrow_date2.getDate() : tomorrow_date2.getDate();
            //加一天后的时刻
            var h_tomorrow2 = tomorrow_date2.getHours();
            //加一天后的分钟
            var m_tomorrow2 = tomorrow_date2.getMinutes();
            //加一天后的秒数
            var s_tomorrow2 = tomorrow_date2.getSeconds();
            //加54小时的时间戳：
            var tomorrow_timetamp23 = timestamp + 54 * 60 * 60;
            //加一天的时间：
            var n_to23 = tomorrow_timetamp23 * 1000;
            var tomorrow_date23 = new Date(n_to23);
            //加一天后的年份
            var Y_tomorrow23 = tomorrow_date23.getFullYear();
            //加一天后的月份
            var M_tomorrow23 = (tomorrow_date23.getMonth() + 1 < 10 ? '0' + (tomorrow_date23.getMonth() + 1) : tomorrow_date23.getMonth() + 1);
            //加一天后的日期
            var D_tomorrow23 = tomorrow_date23.getDate() < 10 ? '0' + tomorrow_date23.getDate() : tomorrow_date23.getDate();
            //加一天后的时刻
            var h_tomorrow23 = tomorrow_date23.getHours();
            //加一天后的分钟
            var m_tomorrow23 = tomorrow_date23.getMinutes();
            //加一天后的秒数
            var s_tomorrow23 = tomorrow_date23.getSeconds();
            //console.log(res.data)
            new Charts({
              canvasId: 'lineCanvas',
              type: 'line',
              categories: [M + '-' + D + ' ' + h + ':' + m, '', '', h_tomorrow + ':' + m_tomorrow, '', '', M_tomorrow2 + '-' + D_tomorrow2 + ' ' + h_tomorrow2 + ':' + m_tomorrow2, '', '', h_tomorrow23 + ':' + m_tomorrow23],
              series: [{
                name: value.City + '的观测适宜度',
                data: [value.P0.SAO, value.P2.SAO, value.P4.SAO, value.P6.SAO, value.P8.SAO, value.P10.SAO, value.P12.SAO, value.P14.SAO, value.P16.SAO, value.P18.SAO],
                format: function (val) {
                  return val;
                }
              }],
              yAxis: {

                format: function (val) {
                  return val;
                },
                min: 0,
                max: 100
              },
              width: 320,
              height: 150
            });

  },

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