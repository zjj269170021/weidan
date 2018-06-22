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
        shoujia: 5.0,
        jinjia: 4.5,
        type: '1'
    },
    {
        id: 2,
        name: '红将军',
        shoujia: 6.0,
        jinjia: 5.5,
        type: '1'
    },
    {
        id: 3,
        name: '国光',
        shoujia: 7.0,
        jinjia: 6.5,
        type: '1'
    },
    {
        id: 4,
        name: '寒富',
        shoujia: 8.0,
        jinjia: 7.5,
        type: '1'
    },
    {
        id: 5,
        name: '嘎啦',
        shoujia: 9.0,
        jinjia: 8.5,
        type: '1'
    },
    {
        id: 6,
        name: '红将军',
        shoujia: 10.0,
        jinjia: 9.5,
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
        shoppingCart: [],
        animationData: null,
        animationData2: null,
        sectionValue:1,
        selItem: {},
        selStandard: 1,
        selNum: 1,
        allshoujia: 0,
        alljinjia: 0
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
        var animation2 = wx.createAnimation({
            transformOrigin: "50% 50%",
            duration: 400,
            timingFunction: "linear",
            delay: 0
        })
        this.animation2 = animation2
        animation2.translateY('300vh').step()
        this.setData({
            animationData2: animation2.export(),
        })
        setTimeout(() => {
            this.setData({
                show: true
            })
        }, 400);
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    //显示遮罩
    showMask: function (e) {
        let item = e.target.dataset.item;
        this.animation.translateY('0').step()
        this.setData({
            animationData: this.animation.export(),
            selItem: item
        })
    },
    //隐藏遮罩
    hideMask: function () {
        this.animation.translateY('300vh').step()
        this.setData({
            animationData: this.animation.export(),
        })
    },
    //选择规格
    standardSel: function(e) {
        this.setData({
            selStandard: parseFloat(e.target.dataset.type)
        })
    },
    //数量选择
    numSel: function(e) {
        this.setData({
            selNum: e.detail.value
        })
    },
    //添加到购物车
    addToShoppingCart: function(e) {
        let { shoppingCart, allshoujia, alljinjia } = this.data;
        shoppingCart.push({
            item: this.data.selItem,
            standard: this.data.selStandard,
            num: this.data.selNum
        });
        this.setData({
            shoppingCart: shoppingCart,
            allshoujia: allshoujia + this.data.selItem.shoujia * this.data.selStandard * this.data.selNum,
            alljinjia: alljinjia + this.data.selItem.jinjia * this.data.selStandard * this.data.selNum
        })
        this.hideMask();
        this.setData({
            sectionValue: 1,
            selStandard: 1,
            selNum: 1
        })
        console.log(this.data.shoppingCart);
    },
    //显示遮罩
    showMask2: function (e) {
        // let item = e.target.dataset.item;
        if (this.data.shoppingCart.length == 0) {
            return;
        }
        this.animation2.translateY('0').step()
        this.setData({
            animationData2: this.animation2.export(),
        })
    },
    //隐藏遮罩
    hideMask2: function () {
        this.animation2.translateY('300vh').step()
        this.setData({
            animationData2: this.animation2.export(),
        })
    },
})