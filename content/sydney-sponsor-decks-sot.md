---
sot_doc: true
sot: orientation-festival
sot_role: sydney-sponsor-programme
sot_type: event
title: 悉尼新生节 · 双 Sponsor Deck 内容真相源
---

# 悉尼新生节 · 双 Sponsor Deck 内容真相源

## 1. 决策

公共活动品牌只有一个：**悉尼新生节**。

招商分成两条独立商业线，版本标签只用于内部管理和 Sponsor Deck 导航，不进入公共活动主标题：

| 对外活动名 | 内部版本 | 目标受众 | 商业职责 | Canonical deck |
|---|---|---|---|---|
| 悉尼新生节 | University Edition | 大学新生、留学生 | 社群增长、留学生服务获客、大学生场景合作 | `sydney-2026-s2-v2/` |
| 悉尼新生节 | Local Schools Edition | 悉尼 Year 7–12 新生与本地青年生态 | 青年客群 Sponsor 收入、学校与社区合作 | `sydney-local-schools/` |

英文大学版与 Local Schools 英文版分别是两条商业线的语言派生物，不是新的活动线。Local Schools 英文版路径为 `sydney-local-schools-en/`，商业事实、视觉结构和安全边界仍以 `sydney-local-schools/` 为准。

## 2. 命名规则

- 封面 H1、海报主标题、公共活动页标题统一写 **悉尼新生节**。
- 不把 USYD、UNSW、UTS、Macquarie 或任何中学名称拼进活动名称。
- `University Edition` / `Local Schools Edition` 可以出现在 deck eyebrow、文件名和后台标签中，作用是防止销售发错版本。
- 高校名称只允许出现在 University Edition 的目标人群、渠道和历史证据页。
- Local Schools Edition 在学校书面确认前，不出现学校名称、校徽或“官方合作”表述。

## 3. 两版数据必须隔离

University Edition 已有的到场、社群、学校覆盖、参展商和线索数据，只能作为大学活动的历史口径。不得用来证明 Local Schools Edition 的预期人数、青年覆盖、合作机构或 Sponsor 转化。

Local Schools Edition 当前事实状态：

| 字段 | 状态 |
|---|---|
| 日期与时间 | `TBD` |
| 场地 | `TBD` |
| 已确认学校 / P&C | `TBD`，当前不得列名 |
| 活动容量 | `TBD` |
| Sponsor 价格 | `Custom proposal`，待商业负责人确认 |
| 已确认联合主办 | 无，不沿用大学版合作方 |

没有新证据时严格保持 `TBD`，不从大学版复制数字。

## 4. University Edition 定位

大学版围绕开学季大学生需求设计：城市落地、通讯、金融、租房、餐饮、学习与职业服务。大学名单属于受众分析，不属于活动品牌。

大学版当前场次事实以公开活动记录为准：2026 年 9 月 26 日、Sydney Town Hall、报名容量 1000。套餐价格和历史数据仍按旧稿复核状态管理，不把“预计”写成已实现结果。

## 5. Local Schools Edition 定位

Local 版是面向进入新学校、新年级和新阶段的悉尼 Year 7–12 青少年的广义新生节，并连接学校、P&C、家长 / guardian、本地青年与社区组织。家庭是受众生态中的一个群体，不是活动本身；不把未成年人当作可直接收集和转卖的线索。

适配 Sponsor 方向：

- AI / STEM、机器人、编程与青少年创新；
- 补习、升学、职业探索与学习支持；
- 体育、身心健康与青少年社区服务；
- 合规、适龄的本地生活与青年服务。

不接受与学生福祉冲突的品类。与 NSW public school 合作时，学校有独立审批与 Sponsor 适配责任；活动不能暗示学校为品牌背书。

## 6. 未成年人安全与隐私底线

- 涉及未成年人联系时，以 parent / guardian 或其他合规授权渠道为准；未成年人个人信息不直接交给 Sponsor。
- Sponsor 扫码、抽奖、后续营销必须使用清晰、主动的 opt-in，并按参与者年龄执行适用授权。
- 儿童相关岗位是否需要 Working with Children Check，须按实际职责逐岗判断并完成组织核验。
- 拍摄未成年人前取得适用的家长 / guardian 同意；无同意者必须有清晰的不拍摄流程。
- Sponsor、工作人员与志愿者遵守行为守则，不安排未经批准的一对一封闭接触。
- 学校名称、校徽、场地和“官方合作”字样只在书面批准后使用。

官方依据：

- NSW Department of Education, Commercial arrangements, sponsorship and donations procedures: https://education.nsw.gov.au/policy-library/policies/pd-2009-0399-01
- NSW Office of the Children's Guardian, Who needs a Working with Children Check: https://ocg.nsw.gov.au/working-children-check/who-needs-check
- OAIC, Children and young people privacy: https://www.oaic.gov.au/privacy/your-privacy-rights/more-privacy-rights/children-and-young-people

## 7. 兼容与清理

- `sydney-2026-s2-v2/` 是 University Edition 的 canonical 路径，保留现有 URL。
- `sydney-2026-s2/` 是历史 URL，仅作为兼容入口，不再声明独立 SoT。
- `sydney-2026-s2-en/` 归属于 University Edition。
- `sydney-local-schools/` 是 Local Schools Edition 的 canonical 路径。
- `sydney-local-schools-en/` 是 Local Schools Edition 的英文语言派生路径，不声明新的 `sot_root`。
- 根入口只展示两个悉尼商业版本；语言入口放在对应版本内部。
