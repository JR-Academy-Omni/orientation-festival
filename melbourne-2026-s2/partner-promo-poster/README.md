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

当前批次已生成 22 张大 Logo 版和 18 张礼品/抽奖版。ACIC、JobPin AI、亿忆网、17 社在当前活动资料中没有可核实的现场礼品或已发布抽奖，因此只生成大 Logo 版。

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
