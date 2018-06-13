//index.js
//获取应用实例
const app = getApp();
app.globalData.leftItemList = [{
        id: 1,
        name: '香蕉'
    },
    {
        id: 2,
        name: '橙子'
    },
    {
        id: 3,
        name: '西瓜'
    },
    {
        id: 4,
        name: '菠萝'
    },
    {
        id: 5,
        name: '苹果'
    },
    {
        id: 6,
        name: '柑橘'
    }
]
app.globalData.rightItemList = [{
        id: 1,
        name: '花牛',
        type: '1'
    },
    {
        id: 2,
        name: '红将军',
        type: '1'
    },
    {
        id: 3,
        name: '国光',
        type: '1'
    },
    {
        id: 4,
        name: '寒富',
        type: '1'
    },
    {
        id: 5,
        name: '嘎啦',
        type: '1'
    },
    {
        id: 6,
        name: '红将军',
        type: '1'
    }
]
Page({
    data: {
        leftItemList: app.globalData.leftItemList,
        rightItemList: app.globalData.rightItemList
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})