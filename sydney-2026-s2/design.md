---
sot_doc: true
sot: orientation-festival/sydney-2026-s2
sot_role: city-event-design
sot_type: event
title: 新生节 · 悉尼 2026 S2
---

# 2026 S2 悉尼四校新生节 deck · 视觉真相源

本文件是 `sydney-2026-s2/` 的视觉真相源。改 `styles.css` 或 deck 结构前先读这里。

状态：已建，可直接打开 `index.html` 预览。实现采用三文件静态 deck：`index.html`、`styles.css`、`deck.js`。

## 定位

悉尼场的关键词是：海港都会、四校新生、课代表学生私域、活力中带精致。

本 deck 需要同时接住两种叙事：

- 学生端：USYD / UNSW / UTS / Macquarie 四校新生，开学季现场活动、礼品、答疑、社交。
- 商家端：课代表系列的学生私域、线上内容矩阵、大学群和线下活动经验，支持 Premium $6000 旗舰招商档。

## 视觉系统

页面仍沿用全系列双层结构：

| 类型 | 用途 | 视觉 |
| --- | --- | --- |
| 内容页 `.slide` | 活动概览、套餐、数据、表格、反馈 | 冷白纸底、浅海港蓝光晕、细线卡片、柔阴影、橙色数据数字 |
| Hero 页 `.slide.hero` | 封面、场地、回顾、成果、联络 | 海港蓝渐变或活动插画/真实现场照片、暖金点睛、半调纹理、白色大标题 |
| 照片页 `.photo-slide` | 现场照片 | 满版真实活动照片，顶部胶囊标题，不放卡片框 |

## Token

`styles.css` 顶部 token 为当前实现基准：

```css
--brand-a:#0A4D8C;
--brand-b:#106DB8;
--brand-c:#1791D6;
--brand-d:#19B6E0;
--hero-accent:#FFC83D;
--harbour-gold:#FFC83D;
--harbour-deep:#062A4A;
--harbour-cyan:#2FD0E8;
--navy:#0C2A4A;
--canvas:#EEF5FB;
--edge:#DCE9F4;
--orange:#F2683C;
```

数据数字继续用 `--orange`，Hero 点睛字和 Premium 角标用 `--harbour-gold`。不要改回橙粉日落主题，那是旧 Sydney 草稿/其他城市风格。

## Sydney 装饰

内容页和 Hero 页底部使用内联 SVG 的 Opera House + Harbour Bridge 轮廓，写在 `.slide::after` / `.slide.hero::after`。规则：

- 只用 CSS data URI，不 hotlink 外部图片。
- 轮廓颜色来自 `--harbour-deep`，桥灯/星点用暖金。
- 保持低透明度，不能盖住正文。
- 不再使用旧版通用城市高楼天际线。

## 关键页型

### 封面

封面使用 `assets/illustrations/sydney-welcome-students.png` 作为满版 Sydney 新生欢迎插画，叠深海港蓝遮罩。四校校名必须完整出现：

`USYD · UNSW · UTS · Macquarie`

### 宣传矩阵页

第 3 页是悉尼专属「课代表系列 · 宣传矩阵」页：

- 左侧：课代表系列，强调 14 个自媒体账号、2w+ 私域学生。
- 右侧：内容分发 + 线下转化，强调 10w+ 线上粉丝、3+ 前期宣传、2000+ 线下人流。

这里不能出现第二主办方、第二联系人或外部财经社区信息。

### 合作套餐

四档并排：Silver / Gold / Diamond / Premium。

Premium 是最高规格卡，样式为暖金描边 + 浅金蓝渐变 + `旗舰 · 优先资源`角标。不要把 Premium 降级成普通“热门”卡。

### 现场玩法

价格对比后新增「抽奖券驱动现场动线」页：签到基础券、组队奖励、集章打卡、社交任务都收敛到抽奖券，赞助商价值表达为“逛展、扫码、分享、复访”。活动后复盘口径包含报名、签到、扫码、社交任务、中奖记录和商家线索。该页仍是内容页 `.slide`，可使用 `assets/illustrations/lucky-draw.png` 补足现场感，关键强调色用 `--harbour-gold`。

### 插画资产

生成插画放在 `assets/illustrations/`：

- `sydney-welcome-students.png`：封面欢迎主视觉。
- `sponsor-booth.png`：商家机会/联络页展位互动视觉。
- `lucky-draw.png`：抽奖券动线页视觉。

插画不得包含可读品牌名、学校 logo 或不确定合作方 logo。若后续有真实现场图/真实 sponsor logo，优先用真实素材替换对应占位视觉。

### 照片页

真实活动照片用 `.photo-slide` 满版展示。图片来自本目录 `assets/photo-1.jpg`、`assets/photo-2.jpg`。不要保留“替换为真实活动照片”的占位页；没有素材就先删掉。

## 规则

- 每个 `<head>` 保留 `<meta name="robots" content="noindex, nofollow">`。
- 除 Google Fonts 外不引外部资源。
- 不加 analytics、SEO schema 或新路由。
- 不改播放器行为：左右翻页、`E` 编辑、`G` 总览、`F` 全屏。
- 不在 UI 标记里用 emoji；需要图形感时用内联 SVG icon 或 CSS 装饰。
- 活动报价、联系人、PRD 内容属于招商物料，不要把 `content/` 目录公开 serve。
