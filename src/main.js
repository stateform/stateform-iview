import Vue from 'vue'
import 'iview/dist/styles/iview.css'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$IVIEW = {}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
