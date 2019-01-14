import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: JSON.parse(localStorage.getItem('cartProducts')) || []

}
const mutations = {
  addProducts (state, cartInfo) {
    // console.log(cartInfo)

    // cartInfo 是一个对象 里面存在 商品 id 和 商品数量 count
    let temp = state.cartList.find(item => item.id === cartInfo.id)
    if (temp) {
      temp.count = cartInfo.count
    } else {
      state.cartList.push({...cartInfo, isSelected: true})
    }
    state.cartList = state.cartList.filter(item => item.count > 0)
    localStorage.setItem('cartProducts', JSON.stringify(state.cartList))
    state.cartList = JSON.parse(localStorage.getItem('cartProducts'))
  },
  updateCartList (state, list) {
    state.cartList = list.map(item => ({...item}))
    localStorage.setItem('cartProducts', JSON.stringify(state.cartList))
  }

}
const getters = {
  // 获取 已选商品总数
  totalCount (state) {
    let sum = 0
    state.cartList.forEach(item => {
      sum += item.count
    })
    return sum
  },

  // 获取 已选商品的 id
  getIds () {
    return state.cartList.map(item => item.id).join(',')
  },

  id2Data (state) {
    return state.cartList.reduce((data, item) => {
      data[item.id] = {
        // id:
        count: item.count,
        isSelected: item.isSelected
      }
      return data
    }, {})
  }
}
const actions = {
  // this.$http

}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  actions,
  getters
})

export default store
