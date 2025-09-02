<template lang="pug">
.faq-content-win.mb-12
  h3.text-h4.font-weight-medium.white--text.mb-6  Windows 常見問題與故障排除

  v-expansion-panels(
    v-model="activePanel"
    multiple
    variant="accordion"
    class="mb-6"
  )
    // 故障排除 Section
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(255, 82, 82, 0.2)"
            size="32"
          )
            v-icon(color="#ff5252" size="18") mdi-alert-circle
          h4.text-h6.font-weight-medium.white--text 故障排除
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #ff5252") 無法登入問題
            
            .mb-4
              h6.text-subtitle-2.font-weight-medium.white--text 1. 密碼錯誤
              v-list(color="transparent" dense class="ml-4")
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-account
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 預設使用者：
                      span.font-weight-medium.white--text admin@minisum.com.tw
                
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-lock
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 預設密碼：
                      span.font-weight-medium.white--text password

            .mb-4
              h6.text-subtitle-2.font-weight-medium.white--text 2. 資料庫位置錯誤
              p.body-2.grey--text.text--lighten-1.ml-4 請確認 
                span.font-weight-medium.white--text Database.sqlite
                | 已正確放置在 
                span.font-weight-medium.white--text C:\Users\您的使用者名稱\Documents\minisum\
                | 目錄中

          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #ff5252") 使用者及密碼修改問題
            p.body-2.grey--text.text--lighten-1.ml-4 此版本為測試版本，並未提供修改使用者和密碼的功能。

          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #ff5252") 筆數限制問題
            p.body-2.grey--text.text--lighten-1.ml-4 此系統並沒有筆數限制，您可以無限制地新增資料。

    // 其他常見問題
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            v-icon(color="#2cbbb0" size="18") mdi-frequently-asked-questions
          h4.text-h6.font-weight-medium.white--text 其他常見問題
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") PHP 相關問題
            
            v-list(color="transparent" dense)
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-console
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 找不到 PHP 指令
                    span.body-2.grey--text.text--lighten-1 確認環境變數 Path 中已包含 
                      span.font-weight-medium.white--text C:\php
              
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-update
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 PHP 版本錯誤
                    span.body-2.grey--text.text--lighten-1 確保下載並安裝的是 PHP 8.3.x 版本
              
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-shield-alert
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 權限不足
                    span.body-2.grey--text.text--lighten-1 以系統管理員身分執行命令提示字元

          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 安裝程式問題
            
            v-list(color="transparent" dense)
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-download-off
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 安裝失敗
                    span.body-2.grey--text.text--lighten-1 請以系統管理員身分執行安裝程式
              
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-shield-remove
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 防毒軟體阻擋
                    span.body-2.grey--text.text--lighten-1 暫時停用防毒軟體或將程式加入白名單

          .mb-6
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 資料庫問題
            
            v-list(color="transparent" dense)
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-database-off
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 無法建立資料庫檔案
                    span.body-2.grey--text.text--lighten-1 確認目標目錄有寫入權限
              
              v-list-item(class="px-0 py-2")
                v-list-item-icon.mr-3
                  v-icon(color="#ff5252" size="16") mdi-database-remove
                v-list-item-content
                  .d-flex.align-start.flex-column
                    span.body-2.font-weight-medium.white--text.mb-1 資料庫檔案損壞
                    span.body-2.grey--text.text--lighten-1 重新從 DB 目錄複製 
                      span.font-weight-medium.white--text Database.sqlite

    // 使用及版權限制
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(156, 39, 176, 0.2)"
            size="32"
          )
            v-icon(color="#9c27b0" size="18") mdi-shield-check
          h4.text-h6.font-weight-medium.white--text 使用及版權限制
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          v-alert(
            color="warning"
            icon="mdi-copyright"
            outlined
            dense
          )
            span.body-2 我們免費提供該系統，但目前禁止修改、再製及再銷售修改或使用本專案的任何部分。

    // 技術支援
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(33, 150, 243, 0.2)"
            size="32"
          )
            v-icon(color="#2196f3" size="18") mdi-lifebuoy
          h4.text-h6.font-weight-medium.white--text 技術支援
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          p.body-2.grey--text.text--lighten-1.mb-4 如遇到安裝或使用問題，請查閱專案的 GitHub Issues 頁面或聯繫開發團隊。
          
          .d-flex.flex-wrap.gap-3
            v-btn(
              rounded
              outlined
              color="#2196f3"
              class="px-6"
            )
              v-icon.mr-2(size="18") mdi-github
              | GitHub Issues
            
            v-btn(
              rounded
              outlined
              color="#2cbbb0"
              class="px-6"
            )
              v-icon.mr-2(size="18") mdi-email
              | 聯繫開發團隊
</template>

<script>
export default {
  name: "FaqContentWin",
  data() {
    return {
      activePanel: [0, 1], // 預設展開前兩個面板
    };
  },
};
</script>

<style scoped>
.faq-content-win {
  width: 100%;
}

.code-text {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-all;
}

.gap-3 > * {
  margin: 0.375rem;
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
