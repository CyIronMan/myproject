// pages/personal_center/Add_address/Add_address.js
var address = require('../../utils/city.js');

var a = 0;
Page({

  /**
   * 页面的初始数据
   */
  // var animation = {

  // };
  data: {
    animationAddressMenu: {},
    addressMenuIsShow: false,
    value: [0, 0, 0],
    provinces: [],
    citys: [],
    areas: [],
    areaInfo: '',
    add_show:0,
    add_se:0,
    niming: 'http://wsypic.000e.com/upload_qiniu/muzhi/images/chanpinyufuwu/pingjia/img2.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = address.provinces[0].id
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id],
    });
    console.log(address)
  },
  formSubmit:function(event){
    console.log(event.detail)
  },
  selectDistrict: function (e) {
    var that = this;
    if (that.data.addressMenuIsShow) {
      return
    }
    that.startAddressAnimation(true)
  },
  startAddressAnimation: function (isShow) {
    console.log(isShow)
    var that = this
    // if (isShow) {
    //   that.animation.translateY(0 + 'vh').step()
    // } else {
    //   that.animation.translateY(40 + 'vh').step()
    // }
    that.setData({
      // animationAddressMenu: that.animation.export(),
      addressMenuIsShow: isShow,
    })
  },
  cityCancel: function (e) {
    this.startAddressAnimation(false);
  },
  citySure: function (e) {
    var that = this
    var city = that.data.city;
    var value = that.data.value;
    that.startAddressAnimation(false);
    var areaInfo = that.data.provinces[value[0]].name + ',' + that.data.citys[value[1]].name + ',' + that.data.areas[value[2]].name
    that.setData({
      areaInfo: areaInfo,
    })
    console.log(areaInfo)
  },
  hideCitySelected: function (e) {
    console.log(e);
    this.startAddressAnimation(false);
  },
  cityChange: function (e) {
    console.log(e);
    var value = e.detail.value;
    var provinces = this.data.provinces;
    var citys = this.data.citys;
    var areas = this.data.areas;
    var provinceNum = value[0];
    var cityNum = value[1];
    var countyNum = value[2];
    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id;
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      })
    } else if (this.data.value[1] != cityNum) {
      var id = citys[cityNum].id;
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      })
    } else {
      this.setData({
        value: [provinceNum, cityNum, countyNum]
      })
    }
    console.log(this.data)
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
 
  niming: function () {
    if (a == 0) {
      a = a + 1;
      this.setData({
        niming: 'http://wsypic.000e.com/upload_qiniu/muzhi/images/chanpinyufuwu/pingjia/imgyes.png'
      })
    } else {
      a = 0;
      this.setData({
        niming: 'http://wsypic.000e.com/upload_qiniu/muzhi/images/chanpinyufuwu/pingjia/img2.png'
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})