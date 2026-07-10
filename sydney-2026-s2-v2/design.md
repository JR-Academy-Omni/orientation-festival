---
sot_doc: true
sot: orientation-festival/sydney-2026-s2-v2
sot_role: city-event-design
sot_type: event
title: Sydney Orientation Festival Sponsor Deck · 2026 S2
---

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
