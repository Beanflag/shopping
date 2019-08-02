import Vue from 'vue'
import App from './App'
import router from './router'
import elFooter from "./components/footer"
import header from "./components/header"

Vue.config.productionTip = false
Vue.component("el-footer",elFooter)
Vue.component("el-header",header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
