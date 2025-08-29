<template lang="pug">
  v-app
    // Navigation Bar
    v-app-bar(
      app
      flat
      color="mainStyle"
      dark
      height="70"
    )
      v-toolbar-title.d-flex.align-center
        //- v-icon.mr-2(color="accentYellow" size="32") mdi-chart-line
        v-img(src="./favicon/favicon.png" width="35").mr-2 
        span.text-h5.font-weight-medium Minisum
        span.text-caption.ml-2.grey--text.text--lighten-1 小商.
      
      v-spacer
      
      AppBarNav
    // Main Content
    v-main
      // Hero Section
      v-container.hero-section(fluid)
        v-row.justify-center.align-center(style="min-height: 60vh")
          v-col(cols="12" md="8" class="text-center")
            h1.display-1.font-weight-medium.white--text.mb-4 Smart ERP for Small Business
            h2.text-h4.font-weight-light.mb-6(style="color: #2cbbb0") 專為微小型企業打造的智能商務管理平台
            //- p.text-h6.grey--text.text--lighten-1.mb-10 Minisum 是一款專為小型企業打造的輕量級 ERP 商務管理軟體<br>能有效簡化流程、提升營運效率，助您更專注於業務成長
            
            .d-flex.justify-center.flex-wrap.gap-4
              v-btn(
                large
                rounded
                color="accentYellow"
                dark
                class="px-8 py-3 text-h6 font-weight-medium mr-4 mb-4"
                elevation="0"
              ) 立即下載
              
              v-btn(
                large
                rounded
                outlined
                color="accentTeal"
                class="px-8 py-3 text-h6 font-weight-medium mb-4 white--text"
              ) 了解更多

      // Features Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 核心功能
        
        v-row.justify-center
          v-col(cols="12" xl="10" lg="9" md="8" sm="12" xs="12")
            v-row(dense)
              v-col(
                cols="12" 
                md="4"
                v-for="feature in features"
                :key="feature.title"
                class="text-center mb-8"
              )
                v-card(color="rgba(255,255,255,0.05)").pa-12
                  v-icon.mb-4(
                    :color="feature.iconColor"
                    size="48"
                  ) {{ feature.icon }}
                  
                  h3.text-h5.font-weight-medium.white--text.mb-4 {{ feature.title }}
                  
                  p.body-1.grey--text.text--lighten-1 {{ feature.description }}

      // Installation Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 安裝指南
        
        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            // macOS Section
            .mb-12
              h3.text-h4.font-weight-medium.white--text.mb-6 macOS
              
              v-card(
                color="rgba(255,255,255,0.05)"
                flat
                class="pa-6"
              )
                pre.code-block
                  code.white--text $ brew install minisum
            
            // Windows Section
            .mb-12
              h3.text-h4.font-weight-medium.white--text.mb-6 Windows
              
              p.body-1.grey--text.text--lighten-1 下載安裝程式 → 執行安裝程式 → 完成設定步驟
</template>

<script>
export default {
  name: "SoftwareDownloadPage",
  data() {
    return {
      navItems: [
        { title: "核心功能" },
        { title: "安裝指南" },
        { title: "常見問題" },
        { title: "關於我們" },
      ],
      features: [
        {
          icon: "mdi-flash",
          iconColor: "#2cbbb0",
          title: "高效能處理",
          description:
            "採用先進技術架構，提供快速響應與穩定的系統效能，讓您的業務運作更加順暢。",
        },
        {
          icon: "mdi-puzzle",
          iconColor: "#2cbbb0",
          title: "簡易整合",
          description:
            "無縫整合現有業務系統，快速上手，降低導入成本，輕鬆提升工作效率。",
        },
        {
          icon: "mdi-shield-check",
          iconColor: "#2cbbb0",
          title: "安全可靠",
          description:
            "採用企業級安全防護機制，確保您的商業資料安全無虞，值得信賴的商務夥伴。",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  background-color: #172131;
  min-height: 60vh;
}

.gap-4 > * {
  margin: 0.5rem;
}

.code-block {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  font-family: "Courier New", monospace;
  font-size: 1.1rem;
  line-height: 1.6;
  overflow-x: auto;
}

.v-application {
  background-color: #172131 !important;
}

/* Custom button styles */
.v-btn {
  text-transform: none !important;
  letter-spacing: normal !important;
}

/* Navigation items hover effect */
.v-toolbar .v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>

<style>
/* Global styles for Vuetify theme colors */
.theme--light.v-application {
  background: #172131;
  color: #ffffff;
}

.v-application .main {
  background-color: #172131 !important;
  border-color: #172131 !important;
}

.v-application .accentYellow {
  background-color: #f5b037 !important;
  border-color: #f5b037 !important;
}

.v-application .accentTeal {
  background-color: #2cbbb0 !important;
  border-color: #2cbbb0 !important;
}

.v-application .lightGray {
  background-color: #eeeeee !important;
  border-color: #eeeeee !important;
}
</style>
