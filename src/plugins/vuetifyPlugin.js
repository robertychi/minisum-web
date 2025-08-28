import Vue from "vue";

// import Vuetify
import Vuetify from "vuetify/lib/framework";
// import 'vuetify/dist/vuetify.min.css'
import "@mdi/font/css/materialdesignicons.css";
// import Vuetify from 'vuetify'  (原始用法，如上作法無問題，就可以刪掉)
Vue.use(Vuetify);

// Vuetify 自定義配置
export default new Vuetify({
  icons: {
    iconfont: "mdi", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  theme: {
    dark: true,
    themes: {
      light: {
        beige: "#F5F5DC", // 米色
        "neon-red": "#ff1493", // 螢光紅
        "rosy-brown": "#BC8F8F", // 玫瑰褐
        bronze: "#CD7F32", // 銅色
        azure: "#007FFF", // 天藍色
        "dodger-blue": "#1E90FF", // 道奇藍
        "deep-sky-blue": "#00BFFF", // 深天藍
        "sky-blue": "#87CEEB", // 天空藍
        "tropical-orange": "#FF8033", // 熱帶橙
        goldenrod: "#DAA520", // 金菊色
        silver: "#C0C0C0", // 銀色
        coral: "#FF7F50", // 珊瑚紅
        orchid: "#DA70D6", // 蘭紫色
        lavender: "#B57EDC", // 薰衣草紫
        camellia: "#E63995", // 山茶紅
        salmon: "#FA8072", // 鮭紅
      },
      dark: {
        // primary: '#CD7F32',
        // secondary: '#c15454ff',
        // accent: '#FF4081',
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FB8C00',
        //
        beige: "#F5F5DC", // 米色
        "neon-red": "#ff1493", // 螢光紅
        "rosy-brown": "#BC8F8F", // 玫瑰褐
        bronze: "#CD7F32", // 銅色
        azure: "#007FFF", // 天藍色
        "dodger-blue": "#1E90FF", // 道奇藍
        "deep-sky-blue": "#00BFFF", // 深天藍
        "sky-blue": "#87CEEB", // 天空藍
        "tropical-orange": "#FF8033", // 熱帶橙
        goldenrod: "#DAA520", // 金菊色
        silver: "#C0C0C0", // 銀色
        coral: "#FF7F50", // 珊瑚紅
        orchid: "#DA70D6", // 蘭紫色
        lavender: "#B57EDC", // 薰衣草紫
        camellia: "#E63995", // 山茶紅
        salmon: "#FA8072", // 鮭紅
        // 自訂義色票
        mainStyle: "#172131",
        subStyle1: "#f5b037",
        subStyle2: "#2cbbb0",
        subStyle3: "#eeeeee",
        //
        supply: "#FF9800",
        customer: "#4CAF50",
        product: "#9C27B0",
        //
        dialogBg: "#263238",

        "blue-grey-darken-1": "#546E7A",
        "blue-grey-darken-2": "#455A64",
        "blue-grey-darken-3": "#37474F",
        "blue-grey-darken-4": "#263238",
      },
    },
    options: {
      customProperties: true, // 启用此选项以在CSS变量中使用你的自定义颜色
    },
  },
});
