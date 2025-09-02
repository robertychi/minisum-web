<template lang="pug">
.install-step-win.mb-12
  h3.text-h4.font-weight-medium.white--text.mb-6 Windows 安裝步驟

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
                code.white--text https://drive.google.com/file/d/14UVT1SiBrQwZu00Eb9bKO2B00-oTm6cn/view?usp=drive_link

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 檔案說明
            p.body-2.grey--text.text--lighten-1.mb-2 壓縮檔案名稱：
              span.font-weight-medium.white--text windows.zip
            p.body-2.grey--text.text--lighten-1.mb-3 解壓後包含以下目錄：
            
            v-list(color="transparent" dense)
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-3
                  v-icon(color="#2cbbb0" size="16") mdi-folder
                v-list-item-content
                  .d-flex.align-center
                    span.body-2.font-weight-medium.white--text.mr-2 install
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
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 1. 下載 PHP 8.3
            p.body-2.grey--text.text--lighten-1.mb-3 從官方網站下載 PHP：
            
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-4"
            )
              pre.code-text
                code.white--text https://windows.php.net/downloads/releases/php-8.3.24-Win32-vs16-x64.zip

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 2. 建立 PHP 安裝目錄
            
            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 1：使用檔案總管
              v-list(color="transparent" dense class="ml-4")
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-numeric-1-circle-outline
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 開啟檔案總管
                
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-numeric-2-circle-outline
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 導航至 
                      span.font-weight-medium.white--text C:\
                      | 磁碟機根目錄
                
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-numeric-3-circle-outline
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 右鍵點選空白處，選擇「新增」→「資料夾」
                
                v-list-item(class="px-0 py-1")
                  v-list-item-icon.mr-2
                    v-icon(color="#2cbbb0" size="14") mdi-numeric-4-circle-outline
                  v-list-item-content
                    p.body-2.grey--text.text--lighten-1.mb-0 將資料夾命名為 
                      span.font-weight-medium.white--text php

            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 2：使用命令列
              p.body-2.grey--text.text--lighten-1.mb-2 以系統管理員身分開啟命令提示字元 (cmd)，執行：
              
              v-card(
                color="rgba(0, 0, 0, 0.3)"
                flat
                class="pa-3"
              )
                pre.code-text
                  code.white--text mkdir C:\php

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 3. 解壓 PHP 檔至安裝目錄
            v-list(color="transparent" dense class="mb-3")
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-1-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 將下載的 
                    span.font-weight-medium.white--text php-8.3.24-Win32-vs16-x64.zip
                    | 解壓到 
                    span.font-weight-medium.white--text C:\php
                    | 目錄下
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-2-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 確認 
                    span.font-weight-medium.white--text php.exe
                    | 等檔案直接在 
                    span.font-weight-medium.white--text C:\php
                    | 目錄中
            
            p.body-2.grey--text.text--lighten-1.mb-2 目錄結構應如下：
            v-card(
              color="rgba(0, 0, 0, 0.2)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text.text-caption
                code.grey--text.text--lighten-1 C:\php\
                br
                code.grey--text.text--lighten-1 ├── php.exe
                br
                code.grey--text.text--lighten-1 ├── php.ini-development
                br
                code.grey--text.text--lighten-1 ├── php.ini-production
                br
                code.grey--text.text--lighten-1 └── ... 其他檔案

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 4. 設定環境變數
            v-list(color="transparent" dense class="mb-3")
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-1-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 按下 
                    span.font-weight-medium.white--text Win + R
                    | ，輸入 
                    span.font-weight-medium.white--text sysdm.cpl
                    | ，按 Enter
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-2-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 點擊「進階」分頁
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-3-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 點擊「環境變數」按鈕
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-4-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 在「系統變數」中找到 
                    span.font-weight-medium.white--text Path
                    | ，點擊「編輯」
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-5-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 點擊「新增」，輸入 
                    span.font-weight-medium.white--text C:\php
              
              v-list-item(class="px-0 py-1")
                v-list-item-icon.mr-2
                  v-icon(color="#2cbbb0" size="14") mdi-numeric-6-circle-outline
                v-list-item-content
                  p.body-2.grey--text.text--lighten-1.mb-0 按「確定」儲存所有設定

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 5. 驗證 PHP 安裝
            
            p.body-2.grey--text.text--lighten-1.mb-3 開啟命令提示字元 (cmd) 或 PowerShell 或 Cmder：
            p.body-2.grey--text.text--lighten-2.mb-3 按下 
              span.font-weight-medium.white--text Win + R
              | ，輸入 
              span.font-weight-medium.white--text cmd
              | 可開啟命令提示字元
            
            h6.text-subtitle-2.font-weight-medium.white--text 確認 PHP 版本：
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

            h6.text-subtitle-2.font-weight-medium.white--text 確認安裝路徑：
            v-card(
              color="rgba(0, 0, 0, 0.3)"
              flat
              class="pa-3 mb-3"
            )
              pre.code-text
                code.white--text where php
            
            p.body-2.grey--text.text--lighten-1.mb-2 應顯示：
            v-card(
              color="rgba(0, 0, 0, 0.2)"
              flat
              class="pa-3"
            )
              pre.code-text
                code.grey--text.text--lighten-1 C:\php\php.exe

    // Step 3: 建立系統目錄
    v-expansion-panel
      v-expansion-panel-title(color="rgba(44, 187, 176, 0.1)")
        .d-flex.align-center
          v-avatar.mr-4(
            color="rgba(44, 187, 176, 0.2)"
            size="32"
          )
            span.white--text 3
          h4.text-h6.font-weight-medium.white--text 建立系統目錄
          
      v-expansion-panel-text
        v-card(
          color="rgba(255,255,255,0.03)"
          flat
          class="pa-4"
        )
          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 1. 資料庫目錄
            p.body-2.grey--text.text--lighten-1.mb-3 在「文件」資料夾中建立 minisum 目錄：
            
            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 1：使用檔案總管
              p.body-2.grey--text.text--lighten-1.ml-4.mb-2 開啟檔案總管，導航至 
                span.font-weight-medium.white--text C:\Users\您的使用者名稱\Documents
              p.body-2.grey--text.text--lighten-1.ml-4 建立新資料夾，命名為 
                span.font-weight-medium.white--text minisum

            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 2：使用命令列
              v-card(
                color="rgba(0, 0, 0, 0.3)"
                flat
                class="pa-3 mb-2"
              )
                pre.code-text
                  code.white--text mkdir "%USERPROFILE%\Documents\minisum"
            
            p.body-2.grey--text.text--lighten-2.font-italic 此目錄用於存放資料庫檔案

          .mb-4
            h5.text-subtitle-1.font-weight-medium(style="color: #2cbbb0") 2. 圖片目錄
            p.body-2.grey--text.text--lighten-1.mb-3 在「圖片」資料夾中建立 minisum 目錄：
            
            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 1：使用檔案總管
              p.body-2.grey--text.text--lighten-1.ml-4.mb-2 開啟檔案總管，導航至 
                span.font-weight-medium.white--text C:\Users\您的使用者名稱\Pictures
              p.body-2.grey--text.text--lighten-1.ml-4 建立新資料夾，命名為 
                span.font-weight-medium.white--text minisum

            .mb-3
              h6.text-subtitle-2.font-weight-medium.white--text 方法 2：使用命令列
              v-card(
                color="rgba(0, 0, 0, 0.3)"
                flat
                class="pa-3 mb-2"
              )
                pre.code-text
                  code.white--text mkdir "%USERPROFILE%\Pictures\minisum"
            
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
          ).mb-2
            pre.code-text
              code.white--text C:\Users\您的使用者名稱\Documents\minisum\Database.sqlite

          p.body-2.grey--text.text--lighten-2.font-italic 「您的使用者名稱」 代表電腦系統的使用者帳號名稱，會依照每台電腦的設定而有所不同。

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
                  span.font-weight-medium.white--text minisum_xx.xx.xx_x64_zh-TW.exe
            
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-2-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 以系統管理員身分執行安裝程式
            
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-3-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 依照安裝精靈指示完成安裝
            
            v-list-item(class="px-0 py-2")
              v-list-item-icon.mr-3
                v-icon(color="#2cbbb0" size="16") mdi-numeric-4-circle
              v-list-item-content
                p.body-2.grey--text.text--lighten-1.mb-0 安裝完成後，執行該程式開始使用

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
  name: "InstallStepWin",
  data() {
    return {
      activePanel: [0], // 預設展開第一個面板
    };
  },
};
</script>

<style scoped>
.install-step-win {
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
