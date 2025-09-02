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
              ) mdi-help-circle
              
              h1.display-1.font-weight-medium.white--text.mb-4 常見問題與故障排除
              h2.text-h4.font-weight-light.mb-6(style="color: #2cbbb0") 快速解決您在使用 MiniSum 時遇到的問題
              p.text-h6.grey--text.text--lighten-1.mb-10 我們整理了最常見的問題和解決方案，讓您能快速找到答案並順利使用系統

      // FAQ Content Section
      .section-transition
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(:style=`{ color: $vuetify.theme.themes.light.subStyle2 }`) 選擇您的作業系統

        v-row.justify-center
          v-col(cols="12" md="10" lg="8")
            v-card(
              color="rgba(44, 187, 176, 0.08)"
              flat
              class="pa-8 text-center mb-8"
            )
              v-icon.mb-6(
                color="#2cbbb0"
                size="64"
              ) mdi-monitor
              
              h3.text-h4.font-weight-medium.white--text.mb-6 根據您的系統查看對應解決方案
              
              .d-flex.justify-center.flex-wrap.gap-4.mb-6
                v-btn(
                  large
                  rounded
                  :color="systemType === 'mac' ? '#2cbbb0' : 'transparent'"
                  :outlined="systemType !== 'mac'"
                  dark
                  class="px-8 py-3 text-h6 font-weight-medium"
                  @click="selectSystem('mac')"
                )
                  span(:class="systemType !== 'mac' ? 'grey--text' : 'white--text'") macOS
                
                v-btn(
                  large
                  rounded
                  :color="systemType === 'windows' ? '#2cbbb0' : 'transparent'"
                  :outlined="systemType !== 'windows'"
                  dark
                  class="px-8 py-3 text-h6 font-weight-medium"
                  @click="selectSystem('windows')"
                )
                  span(:class="systemType !== 'windows' ? 'grey--text' : 'white--text'") Windows
              
              p.body-2.grey--text.text--lighten-1 
                | 目前顯示：
                span.font-weight-medium.white--text.ml-2 {{ getSystemDisplayName }}

            // FAQ Content based on selected system
            transition(name="fade" mode="out-in")
              FaqContentMac(v-if="systemType === 'mac'" key="mac")
              FaqContentWin(v-if="systemType === 'windows'" key="windows")

      // Contact Support Section
      v-container.py-16
        v-row.justify-center
          v-col(cols="12" class="text-center mb-12")
            h2.display-1.font-weight-medium(style="color: #2cbbb0") 仍然需要協助？

        v-row.justify-center
          v-col(cols="12" md="8" class="text-center")
            p.text-h6.grey--text.text--lighten-1.mb-8 如果上述解決方案無法解決您的問題，我們的技術團隊隨時為您提供支援
            
            .d-flex.justify-center.flex-wrap.gap-4
              v-btn(
                large
                rounded
                outlined
                color="#2196f3"
                class="px-8 py-3 text-h6 font-weight-medium mb-4"
              ) 
                v-icon.mr-2 mdi-github
                | GitHub Issues
              
              v-btn(
                large
                rounded
                color="#2cbbb0"
                dark
                class="px-8 py-3 text-h6 font-weight-medium mb-4"
              ) 
                v-icon.mr-2 mdi-email
                | 聯繫客服

    // Footer
    AppFooter
</template>

<script>
export default {
  name: "FaqView",
  metaInfo() {
    return {
      title: "常見問題 - MiniSum",
      titleTemplate: "%s | MiniSum",
      meta: [
        {
          name: "description",
          content: "MiniSum 常見問題與故障排除，快速解決安裝和使用上的問題",
        },
        { property: "og:title", content: "常見問題 - MiniSum 智慧商務管理" },
        { property: "og:image", content: "https://example.com/minisum-og.jpg" },
        {
          property: "og:description",
          content: "查看 MiniSum 的常見問題解答，快速解決使用上的疑問",
        },
      ],
    };
  },
  data() {
    return {
      systemType: "other", // 預設值
    };
  },
  computed: {
    getSystemDisplayName() {
      if (this.systemType === "mac") return "macOS 系統";
      if (this.systemType === "windows") return "Windows 系統";
      return "請選擇您的作業系統";
    },
  },
  mounted() {
    // 自動偵測用戶的作業系統
    this.detectUserSystem();
  },
  methods: {
    selectSystem(system) {
      this.systemType = system;
    },
    detectUserSystem() {
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
        this.systemType = "mac"; // 預設顯示 mac
      }
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

.gap-4 > * {
  margin: 0.5rem;
}

.v-application {
  background-color: #172131 !important;
}

/* Fade transition for system switching */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
