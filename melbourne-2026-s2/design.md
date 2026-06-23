# 墨尔本新生节 deck —— 基于 talk-deck（React + Vite）

> **2026-06 重构**：本 deck 从手搓 vanilla HTML 改为基于公司标准讲座工具 **talk-deck**（`jr-omni/talk-deck`，React + Vite + framer-motion）。
> 旧的 `index.html / styles.css / deck.js` 三件套已废弃删除。

## 为什么换

手搓那套是个居中圆角卡片浮在背景上、四周留白，**不是全屏**，还缺动画/摄像头/缩放等能力。talk-deck 自带：
- **真·全屏**：1600×900 画布 `transform:scale()` 按 viewport 整屏缩放铺满（黑边 letterbox），尺寸写绝对 px、不用管响应式。
- **JR Neo-Brutalism** 设计语言（= `jr-academy-brand` v5）：粗黑边 `3px` + 偏移硬阴影 `6px 6px 0` + 饱和品牌色 + 暖底 `#fff1e7`；字体 Bricolage Grotesque / DM Sans / Space Mono。
- framer-motion 入场动画、演讲者摄像头（按 C）、URL `?page=N` 翻页、`/add-slide` skill 加页。

## 跑 / 出成品

```bash
npm install
npm run dev      # http://localhost:5173（← → 翻页 · F 全屏 · C 摄像头）
npm run build    # 产物 dist/，纯静态可托管
```

## 结构（改内容看这里）

- `src/App.tsx` — 33 页放映顺序（按 CH 注释分章节）
- `src/components/slides/*.tsx` — 每章一个文件，多个 `Snn_*` 组件；封面 `S01_Cover` 与联络 `S34_Contact` 单独成文件
- `src/components/slides/_PhotoSlide.tsx` — **照片满铺背景**基元（封面/场地/往期回顾/成果展示/联络 5 页用）
- `src/components/slides/_layout.tsx` — 内容层助手：`Page`（章节 Tag + 大标题 + 内容区）/ `FeatureCard` / `StatCard` / `KvTable` / `CardsGrid`
- `src/components/slides/sec3_packages.tsx` — 合作套餐、价格对比与抽奖券现场玩法
- `public/past-events/*.jpg` — 真实往期现场照（满铺背景用，源自品牌归档，与 `sydney-2026-s2` 同批）
- `public/jr-box.svg` — 右上角矢量品牌 mark（引擎渲染，避免完整中文 logo 缩小后发糊）
- `public/melbourne-sticker.svg` — 封面贴纸图，文字为 `2026 S2 / 墨尔本三校 / UNIMELB · MONASH · RMIT / 三校新生节`
- `public/xhs-matrix.png` — 课代表系列小红书账号矩阵图，用于 `S24_XhsMatrix`
- `public/melbourne-floor-plan.png` — 墨尔本新生节展位布局图，用于 `S09_FloorPlan`

## 设计纪律（照搬 talk-deck）

- **引擎别碰**：`src/components/SlideEngine.tsx` / `ui.tsx` / `CameraBubble.tsx` / `src/styles/theme.ts` 是测过的运行时，加页/改页只动 `slides/*` + `App.tsx`。
- **配色字体只用 `theme.ts` 令牌**（`colors` / `fonts` / `border` / `shadow`），禁止写死 hex、禁止引新字体/CSS 框架。
- 照片做**满铺背景**（`_PhotoSlide`，暗渐变叠加保白字），不拼相册格子。
- 数据不编造；缺真实赞助商 logo / 城市专属照片 → 留占位或用品牌归档照，外发前人工替换。
- 完整约定见 `jr-omni/talk-deck/CLAUDE.md` 与 `.claude/skills/add-slide/SKILL.md`。
