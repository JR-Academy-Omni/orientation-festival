# 布里斯班新生节 deck 视觉风格（实现说明 · 与 styles.css 一致）

> 本文件描述 **brisbane-2026-s1 这套 deck 当前 styles.css 实际实现** 的风格，是这套 deck 的唯一设计真相源。
> 城市主题：**布里斯班 = 橙粉日落（warm sunset）**，与墨尔本（绿青）形成「两城不同」。
> 配色根源：① 匠人品牌 v5 暖色 token（`jr-academy-brand/tokens/tokens.css`）② 布里斯班 Canva 原稿量化采样（`content/design-style.md`）。

## 风格目标

招商 deck，给 sponsor 看要够专业可信；同时是大学新生欢迎活动，要阳光、活力、年轻。
沿用墨尔本那套「浅底干净内容页 + 满版品牌渐变 hero 页」的双层结构与全部组件，**只换城市主题色**——
布里斯班把 hero 渐变换成 **黄昏橙→珊瑚→玫粉** 的日落系，点睛色用**薄荷青冷色撞色**，
正好是墨尔本「冷底（绿青）+ 暖点睛（柠檬黄）」的**温度镜像**：布里斯班 = **暖底（日落）+ 冷点睛（薄荷）**。
两城一眼可分，又共用同一套排版骨架，保证「新生节」系列的整体一致性。

## 为什么是日落橙粉（品牌依据）

| 依据 | 内容 |
|------|------|
| 匠人品牌 v5 暖色 token | warmBg `#fff1e7`、orange `#FF914D`、coral-red `#ff5757`、yellow `#FFDE59` —— 天然就是橙粉日落家族 |
| Canva 原稿主视觉 | 布里斯班滑板少年是**橙色外套**（采样 `#E76141`），日落 hero 与主角同温，视觉聚焦更稳 |
| repo 既定规则 | `CLAUDE.md` / 墨尔本 `design.md` 均写明「布里斯班保留同结构，只把 `--brand-*` 换橙粉日落」 |

## 双层结构（与墨尔本一致，不改）

| 层 | 用在哪 | 视觉 |
|----|--------|------|
| **内容页**（默认 `.slide`） | 数据 / 套餐 / 表格 / 反馈等正文页 | 浅纸白底 + 极淡半调圆点 + 角落品牌微光；细线卡片 + 柔阴影 + 大号珊瑚色数据数字 |
| **Hero 页**（`.slide.hero`） | 封面 / 场地 / 往期回顾 / 赞助商 / 成果展示 / 联络 共 6 页 | 满版**日落渐变** + 较强半调 + 大白字标题 + **薄荷青点睛**；封面与收尾页放橙衣滑板少年插画 |

## 配色 token（布里斯班 = 橙粉日落）

换城市**只改 `styles.css` 顶部「城市主题」这一块**即可：

```css
/* ---------- 城市主题（布里斯班 = 橙粉日落）---------- */
--brand-a:#FFC24B;            /* 渐变起点 暖金 amber（落日上缘）*/
--brand-b:#FF9248;            /* 渐变 芒果橙 mango（≈品牌 orange #FF914D）*/
--brand-c:#FF6F61;            /* 渐变 珊瑚 coral（≈品牌 red 暖化）*/
--brand-d:#F25C8E;            /* 渐变终点 玫粉 sunset rose（落日下缘）*/
--brand-grad:linear-gradient(135deg,var(--brand-a) 0%,var(--brand-b) 38%,var(--brand-c) 70%,var(--brand-d) 100%);
--brand-tint:255,146,72;      /* 主品牌色 RGB（浅底光晕，暖橙）*/
--brand-tint2:242,92,142;     /* 次品牌色 RGB（浅底光晕，玫粉）*/
--hero-accent:#34E3CD;        /* hero 点睛字 薄荷青（冷色撞色，warm base + cool pop）*/
```

> **通用 token 不改**（`--navy / --ink / --orange / --canvas / --paper` 等照搬墨尔本）。
> 内容页数据/CTA 仍用 `--orange:#E96343`（珊瑚橙）——它本就属日落家族，落在白底内容页上既醒目又与 hero 同系，
> 不必单独换。**两城内容页共用同一套中性白底 + 珊瑚数据色**（系列一致性），**城市识别全靠 hero 页 + 页面光晕 + 点睛色**。

### 渐变走向直觉
左上**暖金 `#FFC24B`** → 中段**芒果橙→珊瑚** → 右下**玫粉 `#F25C8E`**，135° 对角，模拟黄昏天空由高到低的橙→粉过渡。

## 字体（与墨尔本一致，已引 Google Fonts）

- 中文 / 大标题：**Noto Sans SC**（`--font-cn`）。
- 拉丁 / 数字 / 正文 Latin：**Sora**（`--font`）。
- hero 大标题 = 实色白字 + 柔和投影；点睛字 `.sticker .c` 用 `--hero-accent` 薄荷青。
- ⚠️ 不用黑色八向描边贴纸字（旧版已废）。

## 规则（与墨尔本一致，逐条保留）

- 16:9 frame、URL hash 路由、播放器行为（← → 翻页 / E 编辑 / G 总览 / F 全屏）保持不变。
- 标题前用渐变橙竖条 `.h .mk` 作 marker；**不用 emoji ⭐ 当 UI 标记**（卡片正文里的彩色 emoji 保留做活力点缀）。
- 圆角：卡片 16px、frame 20px、胶囊/状态点 999px。
- 数据数字一律珊瑚橙 `--orange` + tabular-nums；价格卡 Diamond 用 navy 边框 + 「热门」角标强调。
- 表格有深色（navy）表头带 + 斑马纹，不是裸表格线。
- 保持 `<meta name="robots" content="noindex, nofollow">`；除 Google Fonts 外不引任何外部资源；不加 analytics / SEO schema / 不改路由。

## 装饰元素（可选微调，非必须）

`styles.css` 里 `.slide::after` 的角落小装饰是硬编码 SVG data-URI：

- 黄色星星 `rgb(255,209,74)`、黄色纸飞机 —— **与日落同系，保留**。
- 青色小星 `rgb(23,196,232)`（冷色）—— 在暖底上仍是不错的撞色点，可保留；若想更统一可改成薄荷青 `rgb(52,227,205)` 呼应 `--hero-accent`。
- 底部城市天际线带（淡 navy）跨城通用，**不改**。

> 这些是装饰层、非主视觉，改与不改都不影响「日落」识别。主识别由 hero 渐变承担。

## 资产（已备）

`content/assets/` 已有布里斯班 Canva 导出图，可按需放进 deck：

- `brisbane-2026-s1-character.png` —— 橙衣滑板少年（放封面/收尾 hero，对应 `assets/character.png`）
- `brisbane-2026-s1-cover.png` —— 整页封面（备查/参考，非 deck 内嵌）
- `brisbane-2026-s1-title.png` —— 标题贴纸字（备查；deck 用 HTML 文字版，不内嵌 PNG）

> deck 内主角插画放 `brisbane-2026-s1/assets/character.png`（从上面 character 图裁好的透明版）。

## 建这套 deck 的步骤（落地指引）

1. `cp -r melbourne-2026-s2/ brisbane-2026-s1/`（本 design.md 已先行单独建好，cp 时勿覆盖它）。
2. 用 `content/brisbane-2026-s1-pages.md` 的逐页文字替换 deck 文案（UQ/QUT/Griffith、2/28、City Hall、套餐 $880/$1980/$2970 等）。
3. 只改 `styles.css` 顶部「城市主题」一块为上方日落 token。
4. 换 `assets/character.png` 为橙衣滑板少年透明版。
5. 在根 `index.html` 把布里斯班卡片从「待制作」改为「deck 已就绪」入口。
6. 校对 `content/brisbane-2026-s1-pages.md` 已标注的原稿笔误（2025 S2 / Auditrium / P13–P14 数字不一致），外发前人工定稿。
