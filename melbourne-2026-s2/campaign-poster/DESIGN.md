# 墨尔本 2026 S2 新生节 Campaign Poster 设计规范

状态：已建立视觉母版与 Top 5 系列。最终图片在 `output/`。

## 定位

学生端活动宣传，不是招商 deck，也不是单一合作商海报。目标是在手机信息流中用一个明确利益点吸引报名。

## 视觉母版

- 画布：`1242x1660` PNG，原生 3:4 构图。
- 配色：暖奶油 `#FDF6EF`、海军蓝 `#12213F`、珊瑚 `#FF6B5C`、天蓝 `#5B9BFF`、明黄 `#FFE15D`。
- 城市：Flinders Street Station、CBD 与绿色复古电车；城市元素融入场景，不做贴纸拼贴。
- 气质：高端软风商业摄影、暖阳、柔和立体光影、礼盒和彩带、自然人物互动。
- 排版：主标题左对齐，信息层级少而强；底部使用上下层级，不做拥挤三栏。
- 禁止：Neo-Brutalism、黑色粗边、硬阴影、网页截图感、非等比拉伸。

## 活动事实

- 名称：第 6 届 · 2026 S2 墨尔本三校新生节。
- 学校：`UNIMELB · MONASH · RMIT`。
- 时间：8 月 8 日 · 周六，2:00 PM–5:00 PM。
- 地点：Drill Hall · Multicultural Hub，26 Therry St, Melbourne VIC 3000。
- 报名 URL：`https://jiangren.com.au/events/6a5448bfc7d7a1b0782b41b4`。

## 生成边界

图片模型负责完整场景、人物、城市、奖品展台、路线和彩带。JR Logo、领馆支持横幅、二维码与强制细字使用确定性图层。模型生成的二维码即使外观相似也不得直接发布。

模型输出不是 3:4 时，必须用等比例 cover-and-crop；禁止把 `969x1624` 直接改为 `1242x1660`。最终二维码必须从扁平 PNG 解码验证。

## 系列结构

五张内容与逐张文案见 [CONTENT.md](CONTENT.md)。视觉应保持同一品牌家族，但每张使用不同中心场景。

生产提示词见 [PROMPTS.md](PROMPTS.md)，交付清单与校验哈希见 [MANIFEST.md](MANIFEST.md)。
