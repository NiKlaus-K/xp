// miniprogram/pages/index/index.js
Page({

  // 页面的初始数据
  data: {
    banner: [
      '../../assets/images/banner/banner1.jpg', '../../assets/images/banner/banner2.jpg', '../../assets/images/banner/banner3.jpg'
    ],
    inputShowed: false,
    inputVal: ""
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // search
    this.setData({
      search: this.search.bind(this)
    }) 
  },
  // search
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  // 在输入框focus的时候触发事件
  bindfocus: function(){
    
  },
  // 在选择搜索结果的时候触发事件
  selectResult: function (e) {
    console.log('select result', e.detail)
  }
})