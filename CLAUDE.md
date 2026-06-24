# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

匠人学院（JR Academy）多城「大学新生节」**商家招商 deck** 仓库 —— 2026-06 从 `jr-wiki` 抽离独立。
新生节相关的一切（可播放 deck + 各城内容源 + 视觉规范）以**本 repo 为唯一真相源**，不要再在 jr-wiki 或别处留并行副本。

纯静态站点：没有 build / lint / test / package.json。

## Commands

```bash
# 预览某城 deck（任选其一）
open melbourne-2026-s2/index.html              # 直接浏览器打开（相对路径 + CDN 字体都正常）
python3 -m http.server 8000                     # 然后访问 http://localhost:8000/melbourne-2026-s2/

# deck 播放器快捷键：← → 翻页 · E 编辑文字 · G 总览 · F 全屏
```

## 仓库结构

- `index.html` — 落地页，列出各城 deck 入口（自包含样式）
- `{city}-{term}/` — 一个城市一届的可播放 deck（目前只有 `melbourne-2026-s2/`，已完成）
- `content/` — **内部**内容源 + 视觉规范（见下方隐私红线，不可公开 serve）
- 各 deck 目录下的 `design.md` = **那套 deck 的唯一视觉真相源**，改样式前必读

## Deck 架构（三文件播放器，需读多个文件才看懂）

每个 deck 是自包含的三件套，无框架、无构建：

- `index.html` — 每页是一个 `<section class="slide" data-seg="...">`；可编辑文字标 `data-edit`
- `deck.js`（~100 行 vanilla）— 翻页 / hash 路由（`#3` 直达第 3 页）/ 编辑开关 / 总览 / 全屏 / 待机隐藏
- `styles.css` — 所有视觉

三类幻灯片（墨尔本 deck v3「Airbotix 质感」）：
- `.slide`（默认）= **内容页**：暖奶油底 `#FDF6EF` + 角落极淡色晕（无天际线、无圆点噪点）；大号粗体 ink 标题 + 珊瑚短杠；圆角白卡 + 柔阴影；`.body` 内网格/单卡撑满正文高度
- `.slide.hero` = 需要满版色块的分隔/CTA：品牌珊瑚暖渐变 + 白字大标题（加 `.blue` 用蓝渐变）
- `.slide.photobg` = **封面 / 场地 / 往期回顾 / 成果展示 / 联络**：满铺现场照 + 暗渐变叠加 + 白字，照片用内联 `style="--bg:url('assets/past-events/xxx.jpg')"`

**装饰极简**：不再用天际线 / 圆点 / 纸飞机 / 滑板少年插画（旧 v2 元素已废）。视觉靠：现场照背景 + 彩色 `.ico` chip + 标签 `.tag` pill + 珊瑚数据大字。卡片图标 / 摊位图仍是内联 `<svg>`。照片为本地 asset（`assets/past-events/`，源自品牌往期归档），**除 Google Fonts CDN 外不引外部网络资源**，不 hotlink 网图。

## 视觉规范（改样式前先读对应 deck 的 design.md）

- **城市主题色 = `styles.css` 顶部 `:root` 里 `--accent*` / `--blue*` 一块**（墨尔本 = 珊瑚 `#FF6B5C` + 蓝 `#5B9BFF`）。换城市改这一块。
- 字体：中文/大标题 **Noto Sans SC**（`--font-cn`），拉丁/数字/正文 **Sora**（`--font`），`<head>` 里引 Google Fonts。
- hero·photobg 大标题 = 白字 + 柔投影，点睛字 `.c` 暖黄 `#FFE15D`。**不要黑色描边贴纸字**（旧版被否决）。
- 标题 marker 用珊瑚渐变短杠 `.h .mk`，**不用 emoji 当 UI 标记**。
- **每页固定真 v2 logo**：内容页右上黑标 `assets/logo-zh.svg`、hero·photobg 左上白标 `assets/logo-zh-white.png`，`:has()` 自动切换。
- 每个 HTML `<head>` 必须保留 `<meta name="robots" content="noindex, nofollow">`。

## 新增一座城市的 deck

1. `cp -r melbourne-2026-s2/ {city}-{term}/`
2. 用 `content/{city}-{term}-pages.md` 的逐页文字替换 deck 文案
3. 只改 `styles.css` 顶部 `--accent*` / `--blue*` 城市主题色块
4. 在根 `index.html` 加一张城市卡片入口
5. 更新该 deck 的 `design.md`，使其与实现一致

## 🚨 隐私红线（决定本 repo 为何私有 + 如何部署）

deck 含**赞助套餐报价 + 同事私人手机/邮箱（PII）**，`content/*-pages.md` 明确标注「不对外发布」。因此：

- **repo 是 private**，且 `content/` **绝不可被公开 serve**。
- 线上托管 = GitHub Pages，源是 **`gh-pages` 分支**，该分支**只含落地页 + 各城 deck，刻意排除 `content/`**。
- **更新已有公开页**（push 到 `gh-pages`）正常；**创建新的公开入口**（把 repo 设 public / 启用 Pages）会被安全策略硬拦，必须由人工在自己终端执行。

### 重新部署（deck 改完后）

```bash
# 1) 源码提交到 private main
git add -A && git commit -m "..." && git push origin main
# 2) 把更新叠到 gh-pages（不含 content/），再推
git checkout gh-pages
git checkout main -- index.html .nojekyll README.md pdf-output {city}-{term}
git commit -am "deploy: ..." && git push origin gh-pages
git checkout main
```

线上：`https://jr-academy-omni.github.io/orientation-festival/`（各城 deck 在子目录）。

## 数据完整性

`content/melbourne-2026-s2-pages.md` 是从 Canva 原稿逐页提取的存档，**已标注原稿笔误**（"布里斯班"复制残留 / "880 澳元" vs 套餐表最低 $990 / "JLU" 应为 JULY / "S1" 应为 S2）。这些是原稿问题、不是 bug，**不要静默"修正"**——外发前由人工校对决定。
