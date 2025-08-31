<template lang="pug">
  v-footer.mt-12(
      color="#0f1419"
      padless
      )
      v-container
        v-row.justify-center.align-center.py-8
          v-col(cols="12" class="text-center")
            .mb-6
              v-img(
                :src="require('@/assets/favicon/favicon.png')"
                alt="MiniSum Logo"
                max-width="50"
                class="mx-auto mb-4"
                contain
              )
              h3.text-h6.font-weight-medium.white--text.mb-2 MiniSum
              p.body-2.grey--text.text--lighten-1 專為微小型企業量身打造的智能商務管理平台
            
            v-divider.my-6(color="rgba(255,255,255,0.1)")
            
            v-row.justify-center
              v-col(cols="12" md="3" class="text-center mb-4")
                h4.text-subtitle-1.font-weight-medium.white--text.mb-3 產品資訊
                p.body-2.grey--text.text--lighten-1.mb-2 功能特色
                p.body-2.grey--text.text--lighten-1.mb-2 系統需求
                p.body-2.grey--text.text--lighten-1.mb-2 版本更新
              
              v-col(cols="12" md="3" class="text-center mb-4")
                h4.text-subtitle-1.font-weight-medium.white--text.mb-3 支援服務
                p.body-2.grey--text.text--lighten-1.mb-2 使用說明
                p.body-2.grey--text.text--lighten-1.mb-2 常見問題
                p.body-2.grey--text.text--lighten-1.mb-2 技術支援
              
              v-col(cols="12" md="3" class="text-center mb-4")
                h4.text-subtitle-1.font-weight-medium.white--text.mb-3 聯絡我們
                p.body-2.grey--text.text--lighten-1.mb-2 客服信箱
                p.body-2.grey--text.text--lighten-1.mb-2 意見回饋
                p.body-2.grey--text.text--lighten-1.mb-2 合作洽談
        
        v-divider(color="rgba(255,255,255,0.1)")
        
        v-row.justify-center.align-center.py-4
          v-col(cols="12" class="text-center")
            p.body-2.grey--text.text--lighten-2.mb-0 
              | © 2025 MiniSum. All rights reserved. | 
              span.mx-2 隱私權政策
              span.mx-2 服務條款
</template>
<script>
import { mapGetters } from "vuex";

export default {
  // component(is='AppFooter')
  name: "AppFooter",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPage"]),
  },
  methods: {},
};
</script>
