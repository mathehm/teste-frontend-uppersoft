import Vue from 'vue'
import store from './store/index'
import router from './router'
import App from './App.vue'
import '@/config/globalComponents/index'

Vue.use(router);

Vue.config.productionTip = false

new Vue({
  name: 'testeUpper',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
