# 墨尔本新生节 · 企业联合传播海报

## 核心标题

`5000+ 份礼品｜免费领 · 现场抽大奖`

标题先回答学生最关心的三件事：礼品多、免费、可以抽大奖；“墨尔本三校新生节”保留为活动正式名称。

## 产物

- `melbourne-2026-s2-partner-promo.png`：不指定企业的通用版
- `variants/logo-only/`：企业大 Logo 联名版
- `variants/gifts/`：明确区分现场礼品与抽奖奖品的企业礼品版
- `index.html?partner={slug}&mode=logo|gifts`：两种模式共用的唯一模板
- `partner-data.js`：企业名称、slug、Logo、抽奖与现场礼品的派生映射
- `render-partner-posters.mjs`：批量导出 1242 × 1660 PNG
- `validate-partner-data.mjs`：对照活动页与抽奖目录验证企业映射
- `DESIGN.md`：以后同类企业联名海报必须复用的视觉 SoT

当前批次已生成 23 张大 Logo 版和 18 张礼品/抽奖版。JobPin AI、亿忆网、17 社、莫纳什中文辩论社在当前活动资料中没有可核实的现场礼品或已发布抽奖，因此只生成大 Logo 版。

## 抽奖目录待补项（2026-08-07）

`evidence/lottery-prizes.json` 已按活动后台补齐到 **41 款 · 86 份**，但下列 7 家的抽奖奖品**尚未写进 `partner-data.js`**，因此礼品版海报仍是旧口径。校验脚本要求一家有 `prizes` 就至少有一张真实存在的代表图，缺图会 fail-closed，所以补图之后才能补映射：

| 商家 | 已发布抽奖奖品 | 缺什么 |
|---|---|---|
| 饭团外卖 | Apapaya 身体香膏 × 20 | 奖品图 |
| Zircle | 100 朱光玉限时代金券 × 3 | 奖品图 |
| 澳大利亚中华道教协会 | 「财库」挂坠 × 2、手绘陶瓷手串 × 1 | 奖品图 |
| ACIC 移民留学 | 惠普打印机 × 1、Monash 小熊 × 2 | 奖品图（补齐后可首次生成礼品版） |
| 澳洲太平洋地产投资集团 | Stanley Quencher 水杯 × 1 | 奖品图 |
| 玩咖玩乐馆 | 古风市集通票门票 × 2 | 奖品图。归属已定：**通票门票归抽奖**（活动页 `evidence/event-content.md:165` 的抽奖奖品区也列了它），已从 `onsiteGift.items` 移除 |
| LMILE | lululemon 水杯 × 2 | 奖品图 + Logo，`partner-data.js` 中尚无该商家条目 |

另需注意：

- [`index.html`](index.html) 中「当前奖品口径：31 款、56 份」为硬编码旧数字，重导海报前要一并改为 41 款 · 86 份。
- **古风市集第二场门票已确认不存在**（2026-08-07 用户确认），已从玩咖玩乐馆的 `onsiteGift.items` 移除。活动页 `evidence/event-content.md` 的 `:121`（现场礼包）和 `:165`（抽奖奖品区）两处仍写着这一项，属于活动页残留错误，需要在活动页侧一并删掉，否则学生会照着活动页来要票。

企业确有已发布抽奖奖品时，在 `partner-data.js` 增加 `prizes`；模板显示一张代表图片以及该企业全部已发布奖品名称和数量。企业有活动页已核实的现场礼包时，增加 `onsiteGift`。现场礼包、优惠券或尚未进入 `lottery-prizes.json` 的内容不得写进抽奖区。

Logo 来自当前生产活动页已归档的企业介绍图片，不使用搜索结果中的低清 favicon，也不重画品牌标识。

## 重新导出

```bash
node render-partner-posters.mjs
```

只重做一家公司的两种版本：

```bash
node render-partner-posters.mjs --partner bupa
```

只导出指定版本：

```bash
node render-partner-posters.mjs --partner bupa --mode logo
node render-partner-posters.mjs --partner bupa --mode gifts
```

礼品版导出前先核验映射：

```bash
node validate-partner-data.mjs --partner bupa --require-benefits
```

商家海报不放二维码。报名链接由配套发布文案承接：

`https://jiangren.com.au/events/6a5448bfc7d7a1b0782b41b4`
