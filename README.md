# 贵州傩戏数字档案 · NUO DIGITAL ARCHIVE

> 跨越3000年的东方原生狂欢 —— 一座以暗黑美学重铸的贵州傩戏硬核数字档案馆。
> 基于《贵州傩戏数字档案 —— 产品架构白皮书》MVP 阶段实现。

## 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| 前端框架 | Vue 3 + Vite | 单页应用骨架、热更新开发 |
| 样式 | Tailwind CSS | 原子化样式、暗黑美学设计系统 |
| 数据可视化 | Apache ECharts | 暗色系贵州交互地图 + 分布热点 |
| 滚动动画 | GSAP + ScrollTrigger | 滚动视差、叙事入场、进度条 |
| 环境音 | WebAudio API | 合成微弱白噪音（无需音频文件） |
| 部署 | Vite build → 静态托管 | 可对接 Railway / Vercel / GitHub Pages |

## 快速开始

### 1. 环境要求
- Node.js ≥ 18（推荐 20 LTS）
- npm ≥ 9

### 2. 安装依赖
```bash
cd nuo-archive
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```
浏览器自动打开 `http://localhost:5173`。

### 4. 构建生产版本
```bash
npm run build
```
产物输出到 `dist/`，可直接部署到任意静态托管平台。

### 5. 本地预览生产构建
```bash
npm run preview
```

## 四大核心模块

| 模块 | 文件 | 说明 |
|------|------|------|
| 沉浸引力区 | `src/components/HeroSection.vue` | 纯黑首屏 + 面具特写 + 白噪音开关 + 视差 |
| 贵州溯源图谱 | `src/components/GeoTracing.vue` | ECharts 暗色贵州地图，点击热点查看流派档案；武傩 vs 文傩 分屏对比 |
| 硬核微观解剖 | `src/components/CraftAnatomy.vue` | 面具交互热点（材质/色彩/结构/机关）+ 红黑白三色体系 |
| 神谱图鉴档案 | `src/components/DeityArchive.vue` | 响应式卡片网格，按 凶神/吉神/武傩/文傩 筛选 + 关键词检索 |
| 传播沉淀 | `src/components/FooterSection.vue` | 文创入口 + 社群二维码 + 价值闭环标语 |

## 数据层结构

数据采用"结构化、标签化"设计，便于未来对接低代码平台 API：

```
src/data/
├── masks.js      # 神谱图鉴：8 位傩神角色卡（神格/材质/剧目/精神内核）
├── schools.js    # 流派对比：安顺地戏(武傩) vs 德江傩堂戏(文傩)
└── anatomy.js    # 微观解剖：7 个交互热点 + 三色体系
```

> 每个数据文件的字段已对标白皮书所述的低代码平台表单模型。接入真实 API 时，只需将 `import` 替换为 `fetch` 请求即可。

## 项目结构

```
nuo-archive/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.js              # 入口
    ├── style.css           # 全局样式 + Tailwind 指令
    ├── App.vue             # 根组件 + GSAP 滚动叙事编排
    ├── assets/
    │   ├── hero-mask.jpg   # 首屏面具特写（AI 生成）
    │   └── anatomy-mask.jpg# 解剖图面具（AI 生成）
    ├── data/               # 结构化数据层
    └── components/
        ├── HeroSection.vue
        ├── GeoTracing.vue
        ├── SchoolCard.vue      # 流派档案卡（地图热点联动）
        ├── CompareColumn.vue   # 武傩vs文傩对比列
        ├── CraftAnatomy.vue
        ├── DeityArchive.vue
        └── FooterSection.vue
```

## 部署指南

### Railway（白皮书推荐 CI/CD）
1. 将项目推送到 GitHub 仓库
2. 在 Railway 新建项目，连接该 GitHub 仓库
3. 构建命令：`npm run build`，发布目录：`dist`
4. 每次 `git push` 自动触发部署

### Vercel
1. 导入 GitHub 仓库
2. 框架预设选 Vue，构建命令与输出目录已自动识别
3. 一键部署

### GitHub Pages
```bash
npm run build
# 将 dist/ 推送到 gh-pages 分支
```

## 接入真实后端 API

白皮书规划使用腾讯微搭（Weda）低代码平台。对接步骤：

1. 在微搭创建数据模型（神谱卡片、流派特征、解剖数据）
2. 获取 API 接口地址
3. 在 `src/data/` 各文件中，将静态 `export` 改为异步请求：

```js
// 改造前
export const masks = [ ... ]

// 改造后
export async function getMasks() {
  const res = await fetch('https://your-weda-api/masks')
  return res.json()
}
```

4. 在组件 `onMounted` 中调用并赋值给 `ref`

## 视觉设计规范

- **主色调**：纯黑背景（`#050505` 深空黑）
- **强调色**：朱砂红 `#c0322a`、矿物白 `#e8e2d6`
- **辅助色**：吉神金 `#c9a24b`、凶神青 `#3a6b6b`
- **字体**：Noto Serif SC（标题）、Noto Sans SC（正文）
- **处理**：所有实拍图降低饱和度 + 暗色遮罩 + 噪点叠加

## License
MIT —— 非遗数字化公益项目
