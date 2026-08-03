# 墨尔本 2026 S2 企业与礼品对应核验

首次核验：2026-08-02（Australia/Sydney）；海报双模式更新：2026-08-03（Australia/Brisbane）

## 真相源边界

- 活动招商内容：`orientation-festival/content/melbourne-2026-s2.md`
- 当前活动页内容证据：`jr-academy-ai/jr-academy-web-zh/src/content/events/melbourne-freshers-2026-s2/notion-export/content.md`
- 网站抽奖奖品 SoT：`jr-academy-ai/jr-academy-web-zh/src/content/events/melbourne-freshers-2026-s2/lottery-prizes.json`
- 当前生产活动页：`https://jiangren.com.au/events/6a5448bfc7d7a1b0782b41b4`

招商内容、到场礼包与抽奖目录是三类不同口径。只有 `lottery-prizes.json` 中明确列出的 `sponsor` 才能写成“该企业提供抽奖奖品”；企业出现在活动页或提供礼包，不等于它出现在抽奖目录。

## 招商目录 10 家企业与当前礼品对应

| 企业 | 抽奖目录直接对应 | 活动页到场礼包 / 权益证据 | 结论 |
|---|---|---|---|
| Bupa | Bupa 大礼包 × 3 | 500+ 新生健康福利包 | 抽奖 + 到场礼包均有对应；数量按 2026-08-03 用户确认更新 |
| 饭团外卖 | 无 | 1000+ 新人专属礼品 | 仅能写到场礼包，不能写成抽奖赞助方 |
| Dsoul 舞蹈工作室 | 无 | 200+ 首次免费体验卡 | 仅能写体验权益，不能写成抽奖赞助方 |
| 海底捞 | 4 款、12 件 | 400+ 新生礼包 | 抽奖 + 到场礼包均有对应 |
| PromosPhone | iWatch SE、AirPods 4 | 400+ 礼品与优惠券 | 抽奖 + 到场礼包均有对应；活动页另提 iPad 128G，但当前抽奖 JSON 未列该项 |
| 澳洲太平洋地产投资集团 | 无 | 800+ 新生入学及入住礼包等权益 | 仅能写到场礼包 / 权益，不能写成抽奖赞助方 |
| DealMoon 澳洲省钱快报 | 3 款、3 件 | 800+ 新生礼包 | 抽奖 + 到场礼包均有对应 |
| 澳大利亚环球热气球 | 亚拉河谷平日飞行券 × 1 | 活动页有企业介绍 | 抽奖目录有直接对应 |
| 澳大利亚中华道教协会 | 无 | 800+ 正能量挂件 | 仅能写到场礼包，不能写成抽奖赞助方 |
| Zircle | 无 | 100+ 新生礼包及朱光玉权益 | 仅能写到场礼包 / 权益，不能写成抽奖赞助方 |

## 抽奖目录中另外可直接对应的机构

| 机构 | 条目数 | 件数 | 奖品 |
|---|---:|---:|---|
| JR Academy | 12 | 21 | Nintendo Switch 2、DJI OSMO Pocket 3、华硕显示器、Canon 打印机、Dyson Supersonic 吹风机等 |
| 墨大 CSSA | 5 | 6 | UniMelb 官方卫衣、UniMelb 毕业小熊等 |
| 澳世网络 | 1 | 1 | TUF-BE6500 路由器 |
| ICE U | 1 | 1 | 双狗两小时使用权 |
| Amo Lumie | 1 | 6 | Amo Lumie 手工香氛 |

当前抽奖目录合计 **31 款、56 份**，校验脚本通过；31 项均为 `published`。

## 发现的不一致

1. 招商内容源仍写 `2026-08-07（周五）`，但当前生产活动页结构化数据、Notion 活动内容和页面文案均为 `2026-08-08（周六）14:00–17:00`。本次对外海报采用生产活动页口径。
2. 招商作战手册中的“已确定 10 家 / 正在联系 3 家”已不能完整代表当前活动页：活动页还出现 ICE U、Amo Lumie、墨大 CSSA、MCSA、玩咖玩乐馆等内容。
3. PromosPhone 的活动页礼包段落提到 iPad 128G；当前抽奖 JSON 只明确列出 iWatch SE 与 AirPods 4，因此海报不宣传 PromosPhone iPad。
4. `lottery-prizes.json` 是当前网站抽奖 SoT；Notion 导出中的“部分，更新中”清单不可覆盖结构化目录。

## 海报口径

- 对外日期：2026-08-08（周六）14:00–17:00
- 地点：Drill Hall, Multicultural Hub, 26 Therry St, Melbourne VIC 3000
- 报名：免费报名、必须提前登记、不接受 walk-in
- 奖品：只写当前目录可证明的 `31 款 · 56 份`，并列 Switch 2、DJI OSMO Pocket 3、iWatch SE、AirPods 4、Dyson 作为示例
- 主标题：优先传达 `5000+ 份礼品｜免费领 · 现场抽大奖`，正式活动名保留为“墨尔本三校新生节”
- 企业传播：通用版使用“合作伙伴联合传播”；另按当前活动页企业介绍区的 20 个真实 Logo 生成独立联名版
- Logo 边界：中国驻墨尔本总领事馆属于活动支持信息，不作为“企业联名版”批量生成；未使用搜索结果中的低清 favicon

## Bupa 双模式样例

- 大 Logo 联名版：只放大已归档 Bupa Logo，不显示 Bupa 礼品归属。
- 礼品与抽奖版：抽奖区显示 `Bupa 大礼包 × 3`；现场免费礼品区显示 `500+ 份 Bupa 新生健康福利包`，代表物品为健康纸巾、品牌圆珠笔、保湿唇膏。
- 活动页提到的现场投保优惠带有条件，本次未放入主海报，避免在未附最新条款时形成无条件承诺。

## 全商家输出覆盖

- 大 Logo 联名版：当前企业区 20 家全部生成。
- 礼品与抽奖版：17 家生成；同一企业的全部已发布抽奖条目均逐项展示。
- 仅大 Logo 版：ACIC 移民留学、JobPin AI、亿忆网。当前活动资料没有可核实的现场礼品或已发布抽奖，礼品版按 fail-closed 规则不生成。
