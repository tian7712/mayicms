import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// import './icons'
// 引入全局inco
import '@/icons'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
