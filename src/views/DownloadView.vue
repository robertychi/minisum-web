<template lang="pug">
  v-app
    // (component)
    AppBarNav
    // Main Content
    v-main
      // Hero Section - Reduced Height
      .hero-section
        v-container(fluid)
          v-row.justify-center.align-center(style="min-height: 70vh; padding-top: 3rem; padding-bottom: 3rem;")
            v-col(cols="12" md="8" class="text-center")
              v-icon.mb-6(
                color="#2cbbb0"
                size="80"
              ) mdi-download-circle
              
              h1.display-1.font-weight-medium.white--text.mb-4 感謝您下載 MiniSum
              h2.text-h4.font-weight-light.mb-6(style="color: #2cbbb0") 您的智慧商務管理之路即將開始
              p.text-h6.grey--text.text--lighten-1.mb-10 請按照以下安裝教學，輕鬆完成軟體安裝，開始體驗高效的商務管理
              
              .download-action.mb-8
                v-card(
                  color="rgba(44, 187, 176, 0.1)"
                  flat
                  class="pa-6"
                )
                  .d-flex.align-center.justify-center
                    v-btn(
                      large
                      rounded
                      color="#2cbbb0"
                      dark
                      class="px-8 py-3 text-h6 font-weight-medium mr-6"
                      elevation="2"
                      @click="startDownload"
                    ) 
                      v-icon.mr-2 mdi-download
                      | 下載程式
                    
                    .d-flex.align-center
                      v-icon.mr-2(color="#2cbbb0" size="20") mdi-check-circle
                      span.body-1.grey--text.text--lighten-1 {{ getSupportText }}

      // Installation Section
      .section-transition
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(:style=`{ color: $vuetify.theme.themes.light.subStyle2 }`) 安裝教學

        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            // macOS Installation Guide
            InstallStepMac(v-if="systemType === 'mac'")
            
            // Windows Installation Guide
            InstallStepWin(v-if="systemType === 'windows'")

      // System Requirements Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 系統需求

        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            v-row
              v-col(
                cols="12"
                md="6"
                class="mb-6"
              )
                v-card(
                  color="rgba(255,255,255,0.05)"
                  class="pa-6 h-100"
                )
                  .d-flex.align-center.mb-4
                    v-icon.mr-3(color="#2cbbb0" size="32") mdi-apple
                    h3.text-h5.font-weight-medium.white--text macOS 系統需求
                  
                  v-list(color="transparent")
                    v-list-item(
                      v-for="req in macRequirements"
                      :key="req"
                      class="px-0"
                    )
                      v-list-item-icon
                        v-icon(color="#2cbbb0" size="16") mdi-check
                      v-list-item-content
                        p.body-2.grey--text.text--lighten-1.mb-0 {{ req }}
              
              v-col(
                cols="12"
                md="6"
                class="mb-6"
              )
                v-card(
                  color="rgba(255,255,255,0.05)"
                  class="pa-6 h-100"
                )
                  .d-flex.align-center.mb-4
                    v-icon.mr-3(color="#2cbbb0" size="32") mdi-microsoft-windows
                    h3.text-h5.font-weight-medium.white--text Windows 系統需求
                  
                  v-list(color="transparent")
                    v-list-item(
                      v-for="req in windowsRequirements"
                      :key="req"
                      class="px-0"
                    )
                      v-list-item-icon
                        v-icon(color="#2cbbb0" size="16") mdi-check
                      v-list-item-content
                        p.body-2.grey--text.text--lighten-1.mb-0 {{ req }}

      // Support Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 需要協助？

        v-row.justify-center
          v-col(cols="12" md="8" class="text-center")
            p.text-h6.grey--text.text--lighten-1.mb-8 如果在安裝過程中遇到任何問題，我們隨時為您提供支援
            
            .d-flex.justify-center.flex-wrap.gap-4
              v-btn(
                large
                rounded
                outlined
                color="#2cbbb0"
                class="px-8 py-3 text-h6 font-weight-medium mb-4"
              ) 查看常見問題
              
              v-btn(
                large
                rounded
                color="#2cbbb0"
                dark
                class="px-8 py-3 text-h6 font-weight-medium mb-4"
              ) 聯繫客服

    // Footer
    AppFooter
</template>

<script>
export default {
  name: "DownloadPage",
  metaInfo() {
    return {
      title: "下載 - MiniSum",
      titleTemplate: "%s | MiniSum",
      meta: [
        {
          name: "description",
          content: "下載 MiniSum 智慧商務管理系統，查看詳細安裝教學與系統需求",
        },
        { property: "og:title", content: "下載 MiniSum - 智慧 ERP 輕鬆管理" },
        { property: "og:image", content: "https://example.com/minisum-og.jpg" },
        {
          property: "og:description",
          content: "下載並安裝 MiniSum，開始您的智慧商務管理之路",
        },
      ],
    };
  },
  data() {
    return {
      systemType: "other", // 預設為其他
      macRequirements: [
        "macOS 11.0 (Big Sur) 或更新版本",
        "Apple Silicon (M1/M2) 或 Intel 處理器",
        "至少 4GB RAM",
        "500MB 可用儲存空間",
        "網路連線（用於軟體驗證）",
      ],
      windowsRequirements: [
        "Windows 10 版本 1903 或更新版本",
        "64位元處理器與作業系統",
        "至少 4GB RAM",
        "500MB 可用儲存空間",
        "網路連線（用於軟體驗證）",
      ],
    };
  },
  computed: {
    getDownloadFileName() {
      if (this.systemType === "mac") return "MiniSum.dmg";
      if (this.systemType === "windows") return "MiniSum-Setup.exe";
      return "MiniSum安裝檔";
    },
    getSupportText() {
      if (this.systemType === "mac") return "支援 Apple Silicon";
      if (this.systemType === "windows") return "支援 Windows 10+";
      return "持續開發中";
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
  methods: {
    startDownload() {
      // 在這裡處理實際的下載邏輯
      console.log("開始下載:", this.getDownloadFileName);
      // 例如：window.location.href = '/download/' + this.getDownloadFileName;
    },
  },
};
</script>

<style scoped>
/* Hero Section - Reduced Height */
.hero-section {
  min-height: 70vh;
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

.download-action {
  max-width: 600px;
  margin: 0 auto;
}

.gap-4 > * {
  margin: 0.5rem;
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

/* Timeline customization */
.v-timeline-item .v-card {
  border: 1px solid rgba(44, 187, 176, 0.1);
}

.v-timeline-item .v-card:hover {
  border-color: rgba(44, 187, 176, 0.3);
  transform: translateY(-2px);
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
