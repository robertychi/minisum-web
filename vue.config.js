const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/minisum-web/" // 這裡請改成你的 repo 名稱
      : "/",
});
