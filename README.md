# 小商 說明文檔

一個基於 Vue 2.0 開發的現代化 Web 應用程式。

## 🚀 技術棧

- **框架**: Vue 2.0
- **路由**: Vue Router
- **UI 組件庫**: Vuetify
- **元數據管理**: vue-meta
- **版本控制**: Git
- **部署平台**: GitHub Pages

## 📁 項目結構

```
src/
├── App.vue
├── components/          # 自動導入組件目錄
└── views/
    ├── RootView.vue     # 根視圖
    ├── HomeView.vue     # 首頁
    ├── AboutView.vue    # 關於我們
    ├── FeatureView.vue  # 功能介紹
    ├── InstallationView.vue # 安裝說明
    ├── DownloadView.vue # 下載頁面
    ├── ContactView.vue  # 聯絡我們
    ├── ChangeLogView.vue # 更新日誌
    └── 404View.vue      # 404 錯誤頁面
```

## 🏗️ 組件架構圖

```
App.vue
└── RootView.vue
    ├── HomeView.vue
    ├── AboutView.vue
    ├── FeatureView.vue
    ├── InstallationView.vue
    ├── DownloadView.vue
    ├── ContactView.vue
    ├── ChangeLogView.vue
    └── 404View.vue
```

## ✨ 特性

- **自動組件導入**: 放置在 `components` 目錄下的組件會自動導入，無需手動註冊
- **響應式設計**: 使用 Vuetify UI 組件庫實現現代化界面
- **路由配置**: 完整的路由系統，包含基本頁面和 404 錯誤處理
- **SEO 優化**: 集成 vue-meta 進行頁面元數據管理
- **自動部署**: 支持一鍵部署到 GitHub Pages

## 🛠️ 開發環境設置

### 前置要求

- Node.js (建議版本 12+)
- npm 或 yarn
- Git

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm run serve
```

開發服務器將在 `http://localhost:8080` 啟動。

## 📦 部署

本項目配置了自動部署到 GitHub Pages 的功能。

### 部署到 GitHub Pages

```bash
npm run deploy
```

此命令會：

1. 構建項目到 `dist` 目錄
2. 將 `dist` 內容推送到 `gh-pages` 分支
3. 觸發 GitHub Pages 自動重新部署

部署完成後，您的應用將可通過 GitHub Pages URL 訪問。

## 🔧 可用腳本

- `npm run serve` - 啟動開發服務器
- `npm run build` - 構建生產版本
- `npm run deploy` - 部署到 GitHub Pages
- `npm run lint` - 代碼檢查

## 📋 開發說明

### 添加新組件

1. 在 `src/components/` 目錄下創建組件文件
2. 組件會自動導入，無需手動註冊
3. 在需要的地方直接使用組件

### 添加新頁面

1. 在 `src/views/` 目錄下創建視圖組件
2. 在路由配置中添加對應路由
3. 更新導航菜單（如需要）

### Git 工作流程

```bash
# 拉取最新代碼
git pull origin main

# 創建功能分支
git checkout -b feature/your-feature-name

# 提交更改
git add .
git commit -m "feat: add your feature"

# 推送分支
git push origin feature/your-feature-name

# 創建 Pull Request 進行代碼審查
```

## 🤝 貢獻指南

1. Fork 此倉庫
2. 創建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟一個 Pull Request

## 📄 許可證

此項目使用 [MIT](LICENSE) 許可證。

## 📞 聯絡方式

如有問題或建議，請通過以下方式聯絡我們：

- 項目倉庫: [minisum-web](https://github.com/your-username/minisum-web)
- Issues: [GitHub Issues](https://github.com/your-username/minisum-web/issues)

---

⭐ 如果這個項目對您有幫助，請給個 Star 支持一下！
