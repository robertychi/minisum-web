<template lang="pug">
  router-view
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Minisum", // 預設網頁標題
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: require("@/assets/favicon/favicon.png"), // 本地檔案
      },
      // 如果要支援更多尺寸，可以多加幾個
      // { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      // { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }
    ],
  },
};
</script>

<style></style>
