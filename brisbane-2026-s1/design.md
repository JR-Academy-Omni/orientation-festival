# 布里斯班 2026 S1 新生节 Deck 设计说明

## 当前实现

`brisbane-2026-s1` 是一套 React + Vite 的网页版招商 deck，入口为 `index.html`，页面由 `src/App.tsx` 组合 34 张 slide。核心视觉沿用 JR Academy 的高对比 Neo-brutalism 结构，但内容、图片和信息层级已按布里斯班三校新生节重做。

活动主信息：
- 城市与场次：布里斯班 2026 S1
- 覆盖高校：UQ / QUT / Griffith
- 时间：2026 年 2 月 28 日，10:00 AM - 2:00 PM
- 场地：Ithaca Auditorium, Brisbane City Hall，64 Adelaide St
- 规模：预计 1000 名学生，300+ 平米室内展区
- 套餐：Silver $880 / Gold $1980 / Diamond $2970，包含 800 Student Gift Packs

## 视觉方向

布里斯班版使用「现场照片 + 亮色信息块」作为主语言：
- 满版照片页用于封面、场地、回顾分隔、成果和联系页，强化真实活动感。
- 内容页保持白底、粗黑描边、硬阴影、红黄蓝绿强对比，方便招商信息快速扫读。
- 封面选用团队合照，场地页使用 AWS venue 照，套餐页保留高密度权益信息，回顾页使用现场物料与观众照片。

## 图片资产

所有新增图片已先压缩到 1800px 长边，并以 JPEG 75 质量保存到：

`public/past-events/`

文件：
- `team-photo.jpg`：封面、课代表介绍、联系页背景
- `aws-venue.jpg`：场地页、活动概览
- `jr-coke.jpg`：回顾分隔、品牌物料
- `goodlife-booth.jpg`：展位互动
- `bupa-gifts.jpg`：福利礼品
- `jr-brochures.jpg`：品牌物料近景
- `audience-session.jpg`：新生讲座现场
- `aws-partner-photo.jpg`：成果展示页

旧复制素材已从 Brisbane deck 的 `public/past-events/` 删除，避免构建产物带入未使用照片。

## Slide 分组

- `S01_Cover.tsx`：布里斯班三校新生节封面
- `sec1_intro.tsx`：活动概览、介绍、目的、吸引新生、商家机会、为什么选匠人
- `sec2_venue.tsx`：Brisbane City Hall 场地与摊位布局
- `sec3_packages.tsx`：Silver / Gold / Diamond 合作套餐与价格对比
- `sec4_recap.tsx`：往期数据、赞助商、活动亮点、反馈
- `sec5_coordinator.tsx`：课代表媒体矩阵与社群资源
- `sec6_achievements.tsx`：大学合作、品牌活动、企业合作成果
- `S34_Contact.tsx`：Angela Han 联系页

## 运行

```bash
npm run dev
npm run build
```
