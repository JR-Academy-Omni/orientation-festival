---
sot_doc: true
sot: orientation-festival/sydney-2026-s2
sot_role: city-event-design-en
sot_type: event
title: 新生节 · 悉尼 2026 S2（英文版）
---

# 悉尼 2026 S2 新生节 Deck · 英文版

> **本目录是 `sydney-2026-s2-v2/` 的英文派生版，不是独立真相源。**
> 内容真相以 `sydney-2026-s2-v2/`（中文 SoT）为准；中文版改了内容，这里要跟着改，不要只改一边。
> 与中文版的差异只有三处：正文全量英译、`<html lang="en">`、PDF 链接指向 `../pdf-output/sydney-2026-s2-en.pdf`。
> 结构、class、样式、资产与中文版逐字节一致，`diff` 可核对。

## 翻译口径

- 数字一律不动（1500+ 到场、$1,110 / $2,420 / $3,740 / $6,000 / $8,800 五档、87% 到场率、98% 满意度、约 2.9x 对比）。
- 「课代表系列」统一译 **Course Rep network**；「混沌澳洲 / 混沌学园」统一译 **Hundun Australia / Hundun Academy**。
- 往期数据保留「prior events / aggregated」限定语，不写成本届承诺。
- 小红书 → RED，公众号 → WeChat Official Account，私域社群 → community / groups。
- logo 沿用中文版 `logo-zh-white.png` / `logo-zh.svg`，与 `melbourne-2026-s2-en` 保持一致。

## 已知待办

- `../pdf-output/sydney-2026-s2-en.pdf` 需用 `export-pdf.mjs` 生成后才可用（deck 内三处下载按钮指向它）。
- 中文版存在「九年活动经验」与「课代表运营 7 年+」两个口径并存；英文版把后者改写为 “Launched in 2017”，避免同页自相矛盾。中文版是否同步收敛，待 Lightman 定。

---

## 附：中文版原始设计说明（供比对）


# 悉尼新生节招商 deck · 视觉与结构真相源

本文件对应 `sydney-2026-s2-v2/` 这套全新重做的悉尼招商 deck。

## 项目目标

这套 deck 不是沿用旧 GitHub 版本修补，而是重新组织信息与视觉语言，服务两个目标：

- 对外看起来更专业，适合招商沟通、品牌提案和会面展示。
- 保留新生节的活力感，不做成传统企业路演 PPT。

核心关键词：

- 悉尼城市感
- 招商专业度
- 开学季活力
- 四校集中流量
- Sydney Town Hall 场地价值

## 视觉方向

视觉不走旧版偏“学生社团海报”的做法，而是做成更偏活动品牌提案的气质：

- 主色：深海军蓝 `#0d2038`
- 提亮色：暖金 `#f8c24e`
- 动感色：海港蓝 `#3b84f6`
- 背景：奶油纸张色 `#f4efe6` / `#fffdf8`

整体语感是：

- 深色 hero 页做气势
- 浅色内容页做信息消化
- 大标题厚重，卡片圆角但不过分可爱
- 有活力，但不是“卡通招商”

## 信息结构

当前页序：

1. 封面
2. 活动定位
3. 目标人群
4. 场地价值
5. 活动亮点
6. 商家价值
7. 双引擎传播
8. 现场玩法
9. 合作套餐
10. 权益对比
11. 往期背书
12. 现场氛围
13. 收尾与合作联系

这套结构比旧版更强调“为什么值得投”“为什么是悉尼”“品牌能拿到什么”。

## 内容原则

- 明确写死用户给定信息：`8 月 28 日`、`Sydney Town Hall`
- 招商文案先讲场景价值，再讲主办方能力
- 尽量避免空泛口号，优先写成可销售的句子
- 往期数据统一用“匠人学院新生节往期综合口径”，避免串成其他城市

## 组件约定

- `.slide.hero`：封面和结尾，负责情绪与气势
- 浅底内容页：负责解释、对比、招商逻辑
- `.photo-card` / `.photo-slide`：用于真实活动感和场地信任感
- `.tier-card`：招商套餐
- `table.kv`：权益清晰对比

## 资产使用

当前使用：

- `assets/illustrations/sydney-welcome-students.png`
- `assets/illustrations/lucky-draw.png`
- `assets/past-events/hall-1.jpg`
- `assets/past-events/checkin-10.jpg`
- `assets/photo-2.jpg`
- `assets/logo-zh.svg`
- `assets/logo-zh-white.png`

如果后续有更强的 Sydney Town Hall 现场图、赞助商现场照片或真实合作品牌素材，优先替换图片位，不必大改结构。

## 后续修改建议

- 若要继续强化“专业感”，优先加强第 7-10 页，不要先加装饰。
- 若要继续强化“活力感”，优先换更好的现场图，不要先加更多颜色。
- 若后面需要导出正式 PDF，可在不改结构的前提下做一轮字号和表格微调。
