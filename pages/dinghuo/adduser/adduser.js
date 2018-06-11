//index.js
//获取应用实例
const app = getApp()

var pickerarea = require('../../../template/pickerarea/pickerarea.js')
var show = false;
var item = {};
Page({
    data: {
        item: {
            show: show
        },
        area: ""
    },
    //生命周期函数--监听页面初次渲染完成
    onReady: function(e) {
        var that = this;
        //请求数据
        pickerarea.updateAreaData(that, 0, e);
    },
    //隐藏picker-view
    hiddenFloatView: function(e) {
        pickerarea.animationEvents(this, 200, false, 400);
    },
    //滑动事件
    bindChange: function(e) {
        pickerarea.updateAreaData(this, 1, e);
        item = this.data.item;
        this.setData({
            area: `${item.provinces[item.value[0]].name} ${item.citys[item.value[1]].name} ${item.countys[item.value[2]].name}`
        });
    },
    //名字
    nameInput: function(e) {
        this.setData({
            name: e.detail.value
        })
    },
    //号码
    telInput: function(e) {
        this.setData({
            tel: e.detail.value
        })
    },
    //地址
    addrInput: function(e) {
        this.setData({
            addr: e.detail.value
        })
    },
    //打开区域选择器
    selArea: function() {
        pickerarea.animationEvents(this, 0, true, 400);
    },
    //保存信息
    doAddUser: function() {
        var pages = getCurrentPages();
        var prevPage = pages[pages.length - 2]; //上一个页面
        var userInfoList = app.globalData.userInfoList;
        userInfoList.unshift({
            id: 7,
            name: this.data.name,
            tel: this.data.tel,
            addr: `${this.data.area} ${this.data.addr}`
        });

        //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
            userInfoList: userInfoList
        });
        wx.navigateBack({
            delta: 1, // 回退前 delta(默认为1) 页面
            success: function(res) {
                // success
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    }
})