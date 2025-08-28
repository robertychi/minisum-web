import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true, // 切換路由時刷新 head 資訊
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
