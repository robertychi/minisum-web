import Vue from "vue";

// import Vuetify
import Vuetify from "vuetify/lib/framework";
// import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css";
// import Vuetify from 'vuetify'  (原始用法，如上作法無問題，就可以刪掉)
Vue.use(Vuetify);

const sharedColors = {
  mainStyle: "#172131",
  subStyle1: "#f5b037",
  subStyle2: "#2cbbb0",
  subStyle3: "#eeeeee",
};

// Vuetify 自定義配置
export default new Vuetify({
  icons: {
    iconfont: "mdi", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        ...sharedColors,
      },
      dark: {
        // 自訂義色票
        ...sharedColors,
      },
    },
    options: {
      customProperties: true, // 启用此选项以在CSS变量中使用你的自定义颜色
    },
  },
});
