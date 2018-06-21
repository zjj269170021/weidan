//index.js
//获取应用实例
const app = getApp();

app.globalData.topItemList = [{
        id: 1,
        name: '新风水果批发行'
    },
    {
        id: 2,
        name: '高翔弄副批发行'
    },
    {
        id: 3,
        name: '郭太师西瓜批发行'
    },
    {
        id: 4,
        name: '新风水果批发行'
    },
    {
        id: 5,
        name: '高翔弄副批发行'
    },
    {
        id: 6,
        name: '郭太师西瓜批发行'
    }
]
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
app.globalData.animation = wx.createAnimation({
    transformOrigin: "50% 50%",
    duration: 400,
    timingFunction: "linear",
    delay: 0
})
Page({
    data: {
        topItemList: app.globalData.topItemList,
        leftItemList: app.globalData.leftItemList,
        rightItemList: app.globalData.rightItemList,
        shoppingCart: []
    },
    onLoad: function() {
        var animation = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 400,
            timingFunction: "linear",
            delay: 0
        })
        this.animation = animation
        animation.translateY('300vh').step()
        this.setData({
            animationData: animation.export(),
        })
        setTimeout(() => {
            this.setData({
                show: false
            })
        }, 400);
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    addToShoppingCart: function(e) {
        console.log(e.target.dataset.item);
        let { shoppingCart } = this.data;
        shoppingCart.push(e.target.dataset.item);
        this.setData({
            shoppingCart: shoppingCart
        })
    },
    //显示遮罩
    showMask: function () {
        this.animation.translateY('0').step()
        this.setData({
            animationData: this.animation.export(),
            show: true
        })
    },
    //隐藏遮罩
    hideMask: function () {
        this.animation.translateY('300vh').step()
        this.setData({
            animationData: this.animation.export(),
            show: false
        })
    }
})