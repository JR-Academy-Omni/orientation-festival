# 新生节 deck 视觉风格（实现说明 · 与 styles.css 一致）

> 本文件描述**当前 styles.css 实际实现**的风格，是这套 deck 的唯一设计真相源。
> 配色根源见 `docs/events/orientation-festival-design-style.md`（Canva 量化采样）。
> 风格定档：**活力新生节 · 精致版**（浅底内容页 + 渐变 hero，去描边、换精致字体）。

## 风格目标

招商 deck，给 sponsor 看要够专业可信；同时是大学新生欢迎活动，要阳光、活力、年轻。
用「浅底干净内容页 + 满版品牌渐变 hero 页」的对比来同时满足两者，而不是把每一页都做成高饱和海报。

## 双层结构（核心）

| 层 | 用在哪 | 视觉 |
|----|--------|------|
| **内容页**（默认 `.slide`） | 数据 / 套餐 / 表格 / 反馈等正文页 | 浅纸白底 + 极淡半调圆点 + 角落品牌微光；细线卡片 + 柔阴影 + 大号橙色数据数字 |
| **Hero 页**（`.slide.hero`） | 封面 / 场地 / 往期回顾 / 赞助商 / 成果展示 / 联络 共 6 页 | 满版品牌渐变 + 较强半调 + 大标题；封面与收尾页放滑板少年插画 |

## 字体（已引 Google Fonts）

- 中文 / 大标题：**Noto Sans SC**（`--font-cn`），干净现代，跨平台一致。
- 拉丁文 / 数字 / 正文 Latin：**Sora**（`--font`），几何感、年轻但不轻浮。
- index.html `<head>` 已 `<link>` 两个字体；离线时回退 PingFang SC / 系统字体。
- ⚠️ 不再用 PingFang 900 + 黑色八向描边贴纸字（旧版被判定丑，已废）。大标题 = 实色白字 + 柔和投影，点睛字用暖柠檬 `--hero-accent`。

## 配色 token（墨尔本 = 绿青）

```css
/* 城市主题：换城市只改这一块 */
--brand-a:#12C58A; --brand-b:#0FB2A6; --brand-c:#0E9CC8; --brand-d:#0E86D8;  /* hero 渐变 翡翠→海蓝 */
--brand-grad: linear-gradient(135deg, a 0%, b 40%, c 72%, d 100%);
--hero-accent:#FFE15D;        /* hero 点睛字 暖柠檬撞色 */
/* 通用（不随城市变） */
--navy:#0F2942; --ink:#1C2E47; --muted:#5C6E86;
--canvas:#EFF8F1; --paper:#FFFFFF; --edge:#E4EFE7;
--orange:#E96343;             /* 橙 = CTA / 数据 / 强调 */
```

> **布里斯班场**：保留同一套结构与组件，只把 `--brand-*` 渐变换成**橙粉日落系**，主题色即区分两城（满足「两城风格不同」）。

## 规则

- 16:9 frame、URL、播放器行为（← → / E 编辑 / G 总览 / F 全屏）保持不变。
- 标题前用渐变橙竖条 `.h .mk` 作 marker；**不用 emoji ⭐ 当 UI 标记**（卡片正文里的彩色 emoji 保留，做活力点缀）。
- 圆角：卡片 16px、frame 20px、胶囊/状态点 999px。
- 数据数字一律橙色 + tabular-nums；价格卡 Diamond 用 navy 边框 + 「热门」角标强调。
- 表格有深色表头带 + 斑马纹，不是裸表格线。
- 保持 `noindex, nofollow`；除 Google Fonts 外不引其它外部资源；不加 analytics / SEO schema / 改路由。
