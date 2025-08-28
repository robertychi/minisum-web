import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";
import vuetify from "@/plugins/vuetifyPlugin";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true, // 切換路由時刷新 head 資訊
});

Vue.config.productionTip = false;
import registerComponents from "./components";
registerComponents(Vue);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
