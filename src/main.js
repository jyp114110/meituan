// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

// 引入 normalize.css
import '@/assets/css/normalize.css'
import '@/assets/css/index.css'
import '@/assets/css/mui.min.css'

// // 引入 字体图标
import '@/assets/css/font-awesome.min.css'
// 引入flexible
import '@/assets/js/flexible'
// 引入 zepto
// import '@/assets/js/zepto.min.js'
// 引入路由
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
