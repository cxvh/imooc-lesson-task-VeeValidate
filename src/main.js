import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './router.js'
Vue.use(Vuelidate)
import "./vee-validate"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
