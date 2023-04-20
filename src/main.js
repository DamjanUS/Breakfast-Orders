import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./index.css"

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)

import VModal from 'vue-js-modal'
Vue.use(VModal)

import 'vue-select/dist/vue-select.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


