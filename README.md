# Orientation Festival · 匠人学院新生节

匠人学院多城「大学新生节」招商物料大本营 —— 可播放招商 deck + 各城内容源 + 视觉规范。
从 `jr-wiki` 抽离独立成库（2026-06），新生节相关一切以**本 repo 为唯一来源**。

> ⚠️ 含**赞助套餐报价 + 同事私人手机/邮箱**。repo 公开但 deck HTML 全站 `noindex,nofollow`；发给 sponsor 用 Pages 链接即可，不要把内容源 `content/*.md` 当对外文案散播。

## 结构

```
orientation-festival/
├── index.html               ← 落地页：列出各城 deck 入口
├── pdf-output/              ← 已生成 PDF，线上按钮直接打开这些文件
├── melbourne-2026-s2/        ← 墨尔本三校新生节 2026 S2 · 可播放 deck（已做完）
│   ├── index.html
│   └── design.md
├── brisbane-2026-s1/         ← 布里斯班三校新生节 2026 S2 · 可播放 deck（源码目录沿用旧名）
│   ├── index.html
│   └── design.md
├── sydney-2026-s2/           ← 悉尼四校新生节 2026 S2 · 可播放 deck（已做完）
│   ├── index.html  styles.css  deck.js
│   ├── design.md            ← 这套 deck 的唯一视觉真相源
│   └── assets/character.png
└── content/                 ← 内容源 / 规范（内部）
    ├── melbourne-2026-s2.md         招商要点精简版
    ├── melbourne-2026-s2-pages.md   38 页逐页文字存档（Canva 原稿提取）
    ├── brisbane-2026-s1-pages.md    布里斯班场内容源（deck 对外口径已改 2026 S2）
    ├── sydney-2026-s1-pages.md      悉尼旧场内容源
    ├── design-style.md              配色/视觉量化采样（Canva）
    └── assets/                      brisbane 封面/人物/标题 PNG
```

## 各城状态

| 城市 / 届 | 内容源 | 可播放 deck |
|-----------|--------|-------------|
| 墨尔本 2026 S2（UniMelb/Monash/RMIT） | ✅ | ✅ `melbourne-2026-s2/` |
| 布里斯班 2026 S2（UQ/QUT/Griffith） | ✅ | ✅ 已完成 |
| 悉尼 2026 S2 | ✅ | ✅ 已完成 |

## 预览 deck

纯静态，直接开浏览器即可（← → 翻页 · E 编辑文字 · G 总览 · F 全屏）：

```
open melbourne-2026-s2/index.html
```

## 在线托管（GitHub Pages）

根 `index.html` = 落地页；各城 deck 在子目录。Pages 启用后 sponsor 链接形如
`https://jr-academy-omni.github.io/orientation-festival/melbourne-2026-s2/`。
`.nojekyll` 关掉 Jekyll，按原样静态服务。

## 设计规范

> ⚠️ 墨尔本 deck 已升级到 **v3「Airbotix 质感」**（暖奶油底 + 珊瑚主色 + 现场照满铺背景 + 圆角白卡），
> 是当前的设计标杆；sydney / brisbane 仍是旧 v2「活力·精致版」（浅底 + 渐变 hero），后续按需对齐。
> **每套 deck 的唯一视觉真相源 = 该目录下的 `design.md`，改样式前先读。**

v3（墨尔本）：Noto Sans SC + Sora 字体；主题色 = `styles.css` 顶部 `--accent*` / `--blue*` 一块。

## 新增城市 deck（对齐 v3）

复制 `melbourne-2026-s2/` 三件套 → 套用 `content/{city}-pages.md` 文字 →
只改 `styles.css` 顶部 `--accent*` / `--blue*` 城市主题色块 + 换 `assets/past-events/` 现场照 → 在根 `index.html` 加入口。
