import Vue from 'vue'
import App from './App.vue'
import Notice from '@/plugins/Notice'

Vue.config.productionTip = false
Vue.use(Notice);

new Vue({
  render: h => h(App),
}).$mount('#app')
