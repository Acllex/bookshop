import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "u-reset.css";
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
// store.replaceState(JSON.parse(sessionStorage.getItem("vuex-state")));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
