<template lang="pug">
.install-step-mac.mb-12
  h3.text-h4.font-weight-medium.white--text.mb-6 
    v-icon.mr-3(color="#2cbbb0") mdi-apple
    | macOS 安裝步驟

  v-expansion-panels(
    v-model="activePanel"
    multiple
    variant="accordion"
    class="mb-6"
  )
    // Step 1: 下載資料
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 1
          h4.text-h6.font-weight-medium.white--text 下載資料
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") Google Drive 下載連結
            p.body-2.grey--text.text--lighten-1.mb-3 從以下連結下載安裝檔案：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-4"
            )
              pre.code-text
                code.white--text https://drive.google.com/file/d/1l2lJiTXfaR0jJFQGDNPYUZe1HddAoY9t/view?usp=drive_link

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 檔案說明
            p.body-2.grey--text.text--lighten-1.mb-2 壓縮檔案名稱：
              span.font-weight-medium.white--text mac.zip
            p.body-2.grey--text.text--lighten-1.mb-3 解壓後包含以下目錄：
            
            v-list(color="transparent" dense)
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-3
                  v-icon(color="#2cbbb0" size="16") mdi-folder
                v-list-item-content
                  .d-flex.align-center
                    span.body-2.font-weight-medium.white--text.mr-2 Dmg
                    span.body-2.grey--text.text--lighten-1 - minisum 安裝程式
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-3
                  v-icon(color="#2cbbb0" size="16") mdi-folder
                v-list-item-content
                  .d-flex.align-center
                    span.body-2.font-weight-medium.white--text.mr-2 DB
                    span.body-2.grey--text.text--lighten-1 - 預設資料庫

    // Step 2: PHP 8.3 安裝
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 2
          h4.text-h6.font-weight-medium.white--text PHP 8.3 安裝
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 1. 安裝 Homebrew
            p.body-2.grey--text.text--lighten-1.mb-3 如尚未安裝 Homebrew，請執行以下指令：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-4"
            )
              pre.code-text
                code.white--text /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 2. 安裝 PHP 8.3
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-4"
            )
              pre.code-text
                code.white--text brew install php@8.3

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 3. 驗證 PHP 版本
            p.body-2.grey--text.text--lighten-1.mb-3 執行以下指令確認版本：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text
                code.white--text php -v
            
            p.body-2.grey--text.text--lighten-1.mb-2 應顯示類似結果：
            v-card(
              color="rgba(0, 0, 0, 0.2)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text.text-caption
                code.grey--text.text--lighten-1 PHP 8.3.x (cli) (built: xxx) ( NTS )
                br
                code.grey--text.text--lighten-1 Copyright (c) The PHP Group
                br  
                code.grey--text.text--lighten-1 Zend Engine v4.3.x, Copyright (c) Zend Technologies
            
            v-alert(
              color="warning"
              icon="mdi-alert"
              outlined
              dense
              class="mb-4"
            )
              span.body-2 
                strong 重要：
                | 必須確認版本為 PHP 8.3，其他版本可能造成程式執行問題

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 4. 確認安裝路徑
            p.body-2.grey--text.text--lighten-1.mb-3 執行以下指令確認路徑：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text
                code.white--text which php
            
            p.body-2.grey--text.text--lighten-1.mb-2 應顯示路徑：
            v-card(
              color="rgba(0, 0, 0, 0.2)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text
                code.grey--text.text--lighten-1 /opt/homebrew/bin/php
            
            v-alert(
              color="warning"
              icon="mdi-alert"
              outlined
              dense
            )
              span.body-2 
                strong 重要：
                | 路徑應為 /opt/homebrew/bin/php，如路徑不同可能影響程式執行

    // Step 3: 建立目錄
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 3
          h4.text-h6.font-weight-medium.white--text 建立目錄
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 1. 資料庫目錄
            p.body-2.grey--text.text--lighten-1.mb-3 在「文件」資料夾中建立 minisum 目錄：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-2"
            )
              pre.code-text
                code.white--text mkdir ~/Documents/minisum
            
            p.body-2.grey--text.text--lighten-2.font-italic 此目錄用於存放資料庫檔案

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 2. 圖片目錄
            p.body-2.grey--text.text--lighten-1.mb-3 在「圖片」資料夾中建立 minisum 目錄：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-2"
            )
              pre.code-text
                code.white--text mkdir ~/Pictures/minisum
            
            p.body-2.grey--text.text--lighten-2.font-italic 此目錄用於存放上傳的圖片檔案

    // Step 4: 設置資料庫
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 4
          h4.text-h6.font-weight-medium.white--text 設置資料庫
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          p.body-2.grey--text.text--lighten-1.mb-3 將下載檔案中 
            span.font-weight-medium.white--text DB
            | 目錄內的 
            span.font-weight-medium.white--text Database.sqlite
            | 複製至：
          
          v-card(
            color="rgba(0, 0, 0, 0.3)"
            flat
            class="pa-3"
          )
            pre.code-text
              code.white--text ~/Documents/minisum/Database.sqlite

    // Step 5: 安裝主程式
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 5
          h4.text-h6.font-weight-medium.white--text 安裝主程式
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          v-list(color="transparent" dense)
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-1-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 找到主程式檔案：
                  span.font-weight-medium.white--text minisum_xx.xx.xx_aarch64.dmg
            
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-2-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 將 
                  span.font-weight-medium.white--text minisum
                  | 拖移至「應用程式」目錄
            
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-3-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 執行該程式開始使用

          v-alert(
            color="info"
            icon="mdi-information"
            outlined
            dense
            class="mt-4"
          )
            span.body-2 
              strong 註解：
              | xx 為數字版本編號，會依版本不同而改變
</template>

<script>
export default {
  name: "InstallStepMac",
  data() {
    return {
      activePanel: [0], // 預設展開第一個面板
    };
  },
};
</script>

<style scoped>
.install-step-mac {
  width: 100%;
}

.code-text {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-all;
}

/* 自定義 expansion panel 樣式 */
:deep(.v-expansion-panel) {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(44, 187, 176, 0.1);
  margin-bottom: 1rem;
  border-radius: 8px !important;
}

:deep(.v-expansion-panel-title) {
  padding: 1rem 1.5rem;
}

:deep(.v-expansion-panel-title:hover) {
  background-color: rgba(44, 187, 176, 0.05) !important;
}

:deep(.v-expansion-panel-text__wrapper) {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

/* Alert 樣式調整 */
:deep(.v-alert) {
  background-color: rgba(255, 193, 7, 0.1) !important;
  border-color: rgba(255, 193, 7, 0.3) !important;
}

:deep(.v-alert.v-alert--variant-outlined.v-theme--dark) {
  color: #fff !important;
}

:deep(.v-alert--variant-outlined .v-alert__wrapper) {
  color: inherit !important;
}
</style>
