import Vue from 'vue'
import "@/assets/app.css"
import router from './router'
import store from './store'
import App from './App.vue'
import formatDistance from "date-fns/formatDistance";
import AppButton from "@/components/Button"

Vue.component('AppButton', AppButton)

Vue.filter('repoUpdate', value => {
	return formatDistance(new Date(value), Date.now(), { includeSeconds: true })
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')