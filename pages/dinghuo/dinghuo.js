//index.js
//获取应用实例
const app = getApp();
app.globalData.userInfoList = [{
        id: 1,
        name: '张三',
        tel: '13777808881',
        addr: '台州市 临海市 云海花园21幢1单元401室'
    },
    {
        id: 2,
        name: '李四',
        tel: '13777808882',
        addr: '台州市 临海市 云海花园22幢4单元401室'
    },
    {
        id: 3,
        name: '张三',
        tel: '13777808883',
        addr: '台州市 临海市 云海花园23幢5单元401室'
    },
    {
        id: 4,
        name: '张三',
        tel: '13777808881',
        addr: '台州市 临海市 云海花园21幢1单元401室'
    },
    {
        id: 5,
        name: '李四',
        tel: '13777808882',
        addr: '台州市 临海市 云海花园22幢4单元401室'
    },
    {
        id: 6,
        name: '张三',
        tel: '13777808883',
        addr: '台州市 临海市 云海花园23幢5单元401室'
    }
]
Page({
    data: {
        userInfoList: app.globalData.userInfoList,
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    addUser: function() {
        wx.navigateTo({
            url: '/pages/dinghuo/adduser/adduser',
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
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
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