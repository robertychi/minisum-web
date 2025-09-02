<template lang="pug">
  v-app
    // (component)
    AppBarNav
    // Main Content
    v-main
      // Hero Section - Full Screen
      .hero-section
        v-container(fluid fill-height)
          v-row.justify-center.align-center(fill-height)
            v-col(cols="12" md="8" class="text-center")
              h1.display-1.font-weight-medium.white--text.mb-4 智慧 ERP 輕鬆管理
              h2.text-h4.font-weight-light.mb-6(style="color: #2cbbb0") 專為微小型企業量身打造的智能商務管理平台
              p.text-h6.grey--text.text--lighten-1.mb-10 讓您的生意管理變得更簡單、更高效，專注於業務成長與發展
              
              .d-flex.justify-center.flex-wrap.gap-4
                .d-flex.flex-column.align-center
                  v-btn(
                    large
                    rounded
                    color="subStyle1"
                    dark
                    class="px-8 py-3 text-h6 font-weight-medium mb-2"
                    elevation="0"
                  ) 立即下載
                  p.body-2.grey--text.text--lighten-2 {{getDownloadText}}
                
                v-btn(
                  large
                  rounded
                  outlined
                  class="px-8 py-3 text-h6 font-weight-medium mb-4 white--text"
                ) 了解更多

      // Target Audience Section - Smooth Transition
      .section-transition
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(:style=`{ color: $vuetify.theme.themes.light.subStyle2 }`) 適用對象

        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            v-card(
              color="rgba(44, 187, 176, 0.08)"
              flat
              class="pa-8 text-center"
            )
              v-icon.mb-6(
                color="#2cbbb0"
                size="64"
              ) mdi-store
              
              h3.text-h4.font-weight-medium.white--text.mb-6 專為您打造的商務解決方案
              
              p.text-h6.grey--text.text--lighten-1.mb-6 適用於您僅需要一個簡易 ERP 系統，輕鬆管理生意的每個環節
              
              .text-left.mx-auto(style="max-width: 600px")
                v-row(dense)
                  v-col(
                    cols="12"
                    sm="6"
                    v-for="target in targetAudience"
                    :key="target"
                    class="py-2"
                  )
                    .d-flex.align-center
                      v-icon.mr-3(color="#2cbbb0" size="20") mdi-check-circle
                      span.body-1.grey--text.text--lighten-1 {{ target }}

      // Features Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(:style=`{ color: $vuetify.theme.themes.light.subStyle2 }`) 核心功能

        v-row.justify-center
          v-col(cols="12" xl="10" lg="11" md="12" sm="12" xs="12")
            v-row
              v-col(
                cols="12" 
                md="4"
                v-for="feature in features"
                :key="feature.title"
                class="text-center mb-8"
              )
                v-card(
                  color="rgba(255,255,255,0.05)"
                  hover
                  class="pa-8 feature-card"
                  height="100%"
                )
                  v-icon.mb-6(
                    :color="feature.iconColor"
                    size="56"
                  ) {{ feature.icon }}
                  
                  h3.text-h5.font-weight-medium.white--text.mb-4 {{ feature.title }}
                  
                  p.body-1.grey--text.text--lighten-1(style="line-height: 1.7") {{ feature.description }}

      // Benefits Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 讓您的生意更上一層樓

        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            v-row
              v-col(
                cols="12"
                md="6"
                v-for="benefit in benefits"
                :key="benefit.title"
                class="mb-6"
              )
                .d-flex.align-start
                  v-avatar.mr-4(
                    color="rgba(44, 187, 176, 0.2)"
                    size="48"
                  )
                    v-icon(color="#2cbbb0") {{ benefit.icon }}
                  
                  div
                    h4.text-h6.font-weight-medium.white--text.mb-2 {{ benefit.title }}
                    p.body-2.grey--text.text--lighten-1(style="line-height: 1.6") {{ benefit.description }}

    // Footer
    AppFooter
    
</template>

<script>
export default {
  name: "HomeView",
  metaInfo() {
    return {
      title: "首頁 - MiniSum",
      titleTemplate: "%s | 小商.",
      meta: [
        {
          name: "description",
          content:
            "MiniSum 專為微小型企業打造的智能商務管理平台，讓您的生意管理變得更簡單、更高效",
        },
        { property: "og:title", content: "MiniSum - 智慧 ERP 輕鬆管理" },
        { property: "og:image", content: "https://example.com/minisum-og.jpg" },
        {
          property: "og:description",
          content: "專為微小型企業量身打造的智能商務管理平台",
        },
      ],
    };
  },
  data() {
    return {
      systemType: "other", // 預設為其他
      targetAudience: [
        "網路電商賣家",
        "服務業經營者",
        "手工藝品創作者",
        "工作室經營者",
        "個人創業家",
        "小型製造業",
      ],
      features: [
        {
          icon: "mdi-heart-outline",
          iconColor: "#2cbbb0",
          title: "貼心友善介面",
          description:
            "直觀清晰的設計語言，大幅降低學習門檻，讓您快速上手，輕鬆掌握每個功能",
        },
        {
          icon: "mdi-gesture-tap",
          iconColor: "#2cbbb0",
          title: "簡單操作體驗",
          description: "化繁為簡的操作流程，將複雜的商務管理變成簡單的點擊動作",
        },
        {
          icon: "mdi-shield-check",
          iconColor: "#2cbbb0",
          title: "資料安全",
          description:
            "獨立資料庫架構，所有資料皆儲存於使用者本機，無需雲端同步，確保隱私與安全。",
        },
      ],
      benefits: [
        {
          icon: "mdi-trending-up",
          title: "提升營運效率",
          description:
            "自動化處理重複性工作，讓您有更多時間專注於業務發展與客戶服務",
        },
        {
          icon: "mdi-shield-check-outline",
          title: "降低管理成本",
          description: "一套系統整合多項功能，減少軟體採購成本與學習時間",
        },
        {
          icon: "mdi-chart-line",
          title: "數據洞察分析",
          description:
            "清晰的報表與圖表，幫助您掌握生意脈動，做出明智的經營決策",
        },
        {
          icon: "mdi-clock-outline",
          title: "節省時間成本",
          description:
            "簡化繁瑣的管理流程，減少手動作業時間，讓您把寶貴時間投入在更重要的事情上",
        },
      ],
    };
  },
  computed: {
    getDownloadText() {
      if (this.systemType === "mac") return "支援 MacOS(Apple silicon)";
      if (this.systemType === "windows") return "支援 Windows 10以上系統";
      return "目前不技援該系統，持續開發中，請期待";
    },
    getDownloadLink() {
      if (this.systemType === "mac") return "/downloadMacView";
      if (this.systemType === "windows") return "/downloadWindowsView";
      return null;
    },
    getIsDownloadDisabled() {
      return this.systemType === "other";
    },
  },
  mounted() {
    let ua = "";

    // 先嘗試用新的 API
    if (navigator.userAgentData && navigator.userAgentData.platform) {
      ua = navigator.userAgentData.platform.toLowerCase();
    } else {
      // fallback: 用舊的 userAgent
      ua = navigator.userAgent.toLowerCase();
    }

    if (ua.includes("mac")) {
      this.systemType = "mac";
    } else if (ua.includes("win")) {
      this.systemType = "windows";
    } else {
      this.systemType = "other";
    }
  },
};
</script>

<style scoped>
/* Hero Section - Full Screen */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135deg,
    #172131 0%,
    #1a242f 35%,
    #18212e 55%,
    #172131 80%,
    #172131 100%
  );
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(44, 187, 176, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(44, 187, 176, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(44, 187, 176, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.hero-section .v-container,
.hero-section .v-row,
.hero-section .v-col {
  position: relative;
  z-index: 3;
  cursor: default;
}

/* Smooth transition between hero and content */
.section-transition {
  height: 100px;
  background: linear-gradient(
    180deg,
    #172131 0%,
    #16202e 25%,
    #171f2d 50%,
    #172131 75%,
    #172131 100%
  );
  margin-top: -1px;
}

.gap-4 > * {
  margin: 0.5rem;
}

.code-block {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
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
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(44, 187, 176, 0.3);
}

/* Navigation items hover effect */
.v-toolbar .v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Feature cards hover effect */
.feature-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 187, 176, 0.1);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(44, 187, 176, 0.2);
  border-color: rgba(44, 187, 176, 0.3);
}

/* Smooth animations */
.v-card,
.v-icon,
.v-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Better spacing for mobile */
@media (max-width: 600px) {
  .display-1 {
    font-size: 2.2rem !important;
  }

  .text-h4 {
    font-size: 1.8rem !important;
  }
}
</style>
