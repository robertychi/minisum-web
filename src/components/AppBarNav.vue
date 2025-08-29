<template lang="pug">
  span 
    v-toolbar-items
        v-btn(
          text
          v-for="item in navItems"
          :key="item.title"
          class="mx-2 text-body-1"
        ) {{ item.title }}
</template>
<script>
export default {
  // component(is='AppbarNav')
  name: "AppBarNav",
  data() {
    return {
      navItems: [
        { title: "核心功能" },
        { title: "安裝指南" },
        { title: "常見問題" },
        { title: "關於我們" },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
