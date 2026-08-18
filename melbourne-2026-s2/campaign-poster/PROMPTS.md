# 墨尔本 Top 5 图片模型提示词规范

## 共用前缀

```text
Use case: ads-marketing
Asset type: 1242x1660 portrait social poster
Create a native 3:4 JR Academy Melbourne Freshers Festival campaign poster.
Use a warm cream base, coral and navy hierarchy, soft editorial advertising light,
Melbourne CBD, Flinders Street Station and a green heritage tram.
Keep the main title left aligned with generous negative space.
Create one unified image-model scene, not a web-card screenshot.
Leave a clean bottom CTA area and blank official support/QR zones for deterministic overlays.
Avoid Neo-Brutalism, black borders, hard offset shadows, fake logos, distorted people,
duplicate Chinese text, random QR patterns and non-uniform scaling.
```

## 01 奖品展台

主体为 Nintendo Switch 2、DJI OSMO Pocket 3、iWatch SE、AirPods 4 的真实广告级错落展台。标题使用 `超百个奖品 / 大奖现场送`。不写奖品项数和抽奖轮数。

## 02 到场福利

主体为礼袋、生活用品、饮品和新生现场领取福利。标题使用 `5000+份现场福利 / 免费入场`，辅助标题 `逛展就能领`。不重复四件大奖构图。

## 03 新生社交

主体为 4–6 位不同背景的新生组成开放半圆，自然交谈或交换联系方式。标题使用 `刚到墨尔本？ / 别一个人过开学季`，辅助标题 `一次认识三校新朋友`。避免情侣感和摆拍。

## 04 三小时路线

主体为一条珊瑚色连续路线，连接 `逛展位 / 领福利 / 认识新朋友 / 现场互动` 四个真实人物场景。标题使用 `3小时逛完整个 / 墨尔本新生节`，辅助标题 `从入场到满载而归`。不编造各站时间。

必须请求原生 3:4；如果模型返回窄幅图，重新构图或等比例扩展画布，不得强制拉宽。

## 05 内容创作者

主体为新生使用手机或小型相机现场拍摄、采访与记录。标题使用 `墨尔本新生 / 内容创作者招募`，副标题 `用你的镜头，记录开学第一现场`，平台定位 `小红书 · 抖音 · 校园 KOC`。人物服装不得生成大学校徽。

## 共用精确文字

```text
第 6 届 · 2026 S2
墨尔本三校新生节
UNIMELB · MONASH · RMIT
8 月 8 日 · 周六
2:00 PM – 5:00 PM
Drill Hall · Multicultural Hub
26 Therry St, Melbourne VIC 3000
免费报名
扫码锁定入场名额
奖品与现场安排以活动页最新信息为准。
```

模型文字必须逐项检查。JR Logo、领馆横幅和二维码仍以 `assets/` 中的确定性文件为准。
