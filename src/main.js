import Vue from 'vue'
import App from './App.vue'
import vuex from "vuex"
import router from "@/router";
import store from "@/store"
import animate from "animate.css"

Vue.config.productionTip = false

Vue.use("vuex",vuex)
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
