<template lang="pug">
  v-app
    v-main
      v-container(fluid)
          v-row(dense)
            v-col(cols="12")
              p.title 基本架構
              ul
                li 以下幫我做成 Readme.md 檔，將以下的資料，優化及排版
                li vue
                li router 已安裝
                li vuetify 已安裝
                li views 已有基本頁面
                li git 已安裝 並且 目前remote 是 minisum-web
                li vue-meta 可用
                li 可自動導入組件 在 component 放的組件都可以自動導入
                li 開發時用 npm run serve
                li 利用 github page  開發好後，執行 npm run deploy  把 dist 推送到 gh-pages 分支 → GitHub Pages 會重新部署
                li 組件架構為 App.vue -> RootView -> HomeView & 404View  & AboutView & ChangeLogView & ContactView & DownloadView & FeatureView & installationView. 這個地方幫我結構圖
                li 開發環境 vue2.0 


</template>
<script>
export default {
  metaInfo() {
    return {
      title: "首頁 - 小商. - minisum ",
      meta: [
        { name: "description", content: "這是一篇關於 Vue Meta 的介紹" },
        { property: "og:title", content: "文章標題 - 我的網站" },
        { property: "og:image", content: "https://example.com/image.jpg" },
        { property: "og:description", content: "社群分享的描述內容" },
      ],
    };
  },
  // component(is='HomeView')
  name: "HomeView",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
