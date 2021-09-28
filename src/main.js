import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

Vue.config.productionTip = false;

//总线
Vue.prototype.$bus = new Vue();

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
