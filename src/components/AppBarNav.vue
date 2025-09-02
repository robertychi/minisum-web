<template lang="pug">
  // Navigation Bar
  v-app-bar(
    app
    flat
    color="mainStyle"
    dark
    height="70"
  )
    v-toolbar-title.d-flex.align-center
      v-img(:src="require('@/assets/favicon/favicon.png')" width="35").mr-2 
      span.text-h5.font-weight-medium Minisum
      span.text-caption.ml-2.grey--text.text--lighten-1 小商.
    
    v-spacer
    v-btn(
      text
      v-for="item in navItems"
      :key="item.title"
      class="mx-2 text-body-1"
      :to="item.route ? { name: item.route } : null"
      exact
    ) {{ item.title }}
</template>
<script>
export default {
  name: "AppBarNav",
  data() {
    return {
      navItems: [
        { title: "首頁", route: "HomeView" },
        { title: "下載程式", route: "DownloadView" },
        { title: "常見問題", route: "FaqView" },
        // { title: "安裝指南", route: "InstallGuide" },
        // { title: "常見問題", route: "FAQ" },
        // { title: "關於我們", route: "About" },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
<style>
.v-btn--active {
  background-color: transparent !important;
  color: #2cbbb0 !important;
}
</style>
