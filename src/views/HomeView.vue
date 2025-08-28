<template>
  <p>Home</p>
</template>
<script>
export default {
  metaInfo() {
    return {
      title: "文章標題 - 我的網站",
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
