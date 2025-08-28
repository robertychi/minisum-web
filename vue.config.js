const path = require("path");

const { defineConfig } = require("@vue/cli-service");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/minisum-web/" // 這裡請改成你的 repo 名稱
      : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@com": path.resolve(__dirname, "src/components"),
        "@views": path.resolve(__dirname, "src/views"),
        "@plugins": path.resolve(__dirname, "src/plugins"),
        "@router": path.resolve(__dirname, "src/router"),
      },
    },
    // import Vuetify from 'vuetify/lib/framework' for vuetify.js
    plugins: [new VuetifyLoaderPlugin()],
  },
});
