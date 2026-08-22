---
sot_doc: true
sot: orientation-festival
sot_role: root-event
sot_type: event
title: 新生节（多城、多受众 Sponsor Programme）
---

# 匠人学院 · 新生节（多城、多受众 Sponsor Programme）

> 真相文档（SoT）。新生节相关一切以本 repo 为唯一来源。各城 deck（`{city}-{term}/index.html`）、落地页（`index.html`）都是从这份真相派生的**产物**，不是真相本身。
> ⚠️ 含赞助报价与同事私人联系方式，private repo 内部留存；对外只发 deck 链接，`content/*.md` 不作对外文案散播。

## 这是什么

匠人学院在澳洲多座城市运营“新生节”公共活动品牌。城市品牌名不绑定学校；每个 Sponsor Deck 按受众拆成独立版本，避免把大学生、留学生与本地 Year 7–12 青年生态混为同一客群。

收入模式：向适配该受众的品牌提供赞助与联合体验方案。University Edition 负责大学生与留学生场景；Local Schools Edition 负责本地 Year 7–12 新生、学校、P&C、家长/监护人与青年社区场景。两版数据、合作方、价格和线索权益独立管理。

## 公共命名与内部版本

- 对外活动名统一为 `{城市}新生节`，例如“悉尼新生节”。
- 大学或学校名称不得进入活动主标题、封面 H1 或海报主标题。
- `University Edition` / `Local Schools Edition` 只用于内部识别、Sponsor Deck 导航和后台标签。
- 悉尼双版本的唯一内容真相源见 `content/sydney-sponsor-decks-sot.md`。

## University Edition 商家成本对比口径

招商 deck 里的「价格对比」必须围绕商家真实获客成本，不要只写覆盖范围或泛泛品牌曝光：

- 学校 O-week 摊位费用通常约 $2500 / 天，且主要覆盖单校场景。
- O-week 往往还需要 4-10 人地推，人力约 $35 / 小时 / 人。
- 单校 O-week 通常获得约 400 leads（微信好友 / 可跟进线索），受摊位位置和路过人流限制。
- 新生节用套餐费 + 集中室内动线 + JR 志愿者引导承接约 1000 名到场新生，线索成本更低、私域沉淀更集中。

## 届次口径（唯一算法）

**届数按同一活动产品线连续计数。** 当前第 6 届 · 2026 S2 只适用于现有 University Edition 城市场次；Local Schools Edition 在正式立项前不继承该届数。

- ❌ 不按单城分别计数（旧稿的「第三届墨尔本大学新生见面会」「第三届布里斯班大学新生见面会」已弃用）
- ❌ 不写「首届」（旧稿的「首届悉尼大学新生见面会」已弃用——悉尼不是新开的系列，只是这一届加入的城市）
- ✅ 对外统一写法：`第 6 届 · 2026 S2 {城市}新生节`

> 新增城市或新一届时，先在这里把届数改掉，再改各城 deck；**不要在城市文档里自己另起一套届数**。

## 各城状态

| 城市 / 版本 | 受众 | 内容源 | 可播放 deck | SoT 节点 |
|-----------|---------|:---:|:---:|----------|
| 墨尔本 University · 2026 S2 | 大学新生 | ✅ | ✅ | `melbourne-2026-s2/` |
| 布里斯班 University · 2026 S2 | 大学新生 | ✅ | ✅ | `brisbane-2026-s1/`（目录沿用旧名） |
| 悉尼 University · 2026 S2 | 大学生、留学生 | ✅ | ✅ | `sydney-2026-s2-v2/` |
| 悉尼 Local Schools | Year 7–12 新生与本地青年生态 | ✅ | ✅ Discovery | `sydney-local-schools/` |

悉尼 Local Schools 另有英文语言派生版 `sydney-local-schools-en/`；它与中文 canonical 版属于同一商业线，不单独计为活动或 SoT 根节点。

> 每座城市每一届 = 一个子 SoT（`parent: orientation-festival`），各自目录下的 `design.md` 是那场活动的真相文档。

## 对谁、解决什么

- **University Edition**：服务大学新生的城市落地、社交、学习与职业场景；由学生本人决定是否留下后续联系。
- **Local Schools Edition**：服务进入新学校、新年级和新阶段的 Year 7–12 青少年，连接学校、P&C、家长/监护人与青年社区；涉及未成年人后续联系时使用 parent / guardian 或其他合规授权渠道。
- **对 Sponsor**：获得与对应受众匹配的现场体验、内容与经授权的后续触点，而不是购买一份混合人群名单。

## 产品玩法系统（Admin 已沉淀）

> 本节是现有 University Edition 互动玩法的产品 SoT。Local Schools Edition 可以复用系统能力，但必须另设适龄报名、未成年人隐私、拍摄同意、合规授权和 Sponsor 数据边界；不得直接照搬大学版规则。当前主平台 Admin 入口是 `jr-academy-admin/src/pages/FestivalConfigPage.tsx`，仅对 `jrEventType === 'freshersFestival'` 的活动开放。

核心原则：所有互动玩法最终都沉淀到报名记录 `MeetupEnrollment.lotteryTickets` 上，抽奖大屏按抽奖券权重抽取中奖者。`lotteryTicketHistory.source` 用来追踪券来源，当前主要来源为：

| 来源 | 含义 | 触发 |
|------|------|------|
| `checkin` | 签到基础券 | 报名记录首次签到，且活动开启 lottery |
| `team_bonus` | 组队奖励 | 队伍满员且成员全部签到后自动/手动发放 |
| `vendor_stamp` | 商家集章 | 学生扫商家展位二维码并通过限制校验 |
| `task_complete` | 社交任务 | 管理员审核通过用户上传的社交任务截图 |
| `referral` | 邀请奖励 | 被邀请人签到后给邀请人发券 |
| `admin` | 人工调整 | 运营在报名管理里手动增减券 |

### Admin 运营台结构

新生节配置页包含 7 个 tab：

| Tab | 作用 |
|-----|------|
| 概览 | 汇总报名人数、已签到、印章扫码、抽奖轮次完成情况，并提供快捷入口 |
| 组队报名 | 配置组队规则、邀请码、队伍列表、成员增删、发放组队券 |
| 商家展位 | 关联 Company、配置展位与赞助级别、生成展位 QR、导出商家线索 |
| 印章打卡 | 配置每章奖励与上限，查看 TOP 20 排行，导出全部扫码记录 |
| 社交任务 | 配置任务类型/奖励/提交上限，审核截图，批量通过/拒绝 |
| 优惠券 | 配置签到自动发放或手动发放的新生专属优惠券 |
| 实时数据 | 活动期间看报名、签到、扫码、抽奖等运营数据 |

活动详情页还提供独立快捷入口：抽奖轮次、奖品管理、抽奖券管理、组队配置、商家展位、印章打卡、实时数据。旧面板里出现过“实习机会”入口；当前成熟实现应按“商家展位里的 `offersInternship` 标记 + 商家线索导出”理解，不要对外承诺完整岗位 marketplace。

### 组队报名

组队功能由 `Meetup.freshersFestivalConfig.teamConfig` 控制，默认规则：

| 队伍 | 奖励 |
|------|------|
| 3 人队 | 每人 2 张抽奖券 |
| 5 人队 | 每人 3 张抽奖券 |

队长创建队伍后生成邀请码，成员用邀请码加入；队伍状态为 `recruiting` / `full` / `disbanded`。队伍满员后不立刻发券，发券条件是**队伍满员 + 全员签到**。发券逻辑会检查 `lotteryTicketHistory.source === 'team_bonus'`，避免重复补发。Admin 可手动创建队伍、搜索可加入参与者、添加/移除成员、删除队伍、手动发放或幂等补发抽奖券。

### 商家展位与 QR

商家展位不是独立商家实体，而是“某个 Company 参加某场新生节”的配置关系。核心字段：

| 字段 | 含义 |
|------|------|
| `sponsorshipTier` | `platinum` / `gold` / `silver` / `bronze`，Admin 可改展示名 |
| `boothLocation` | 展位位置 |
| `giftSummary` | 礼品概览 |
| `participateInStamp` | 是否参与印章打卡 |
| `offersInternship` | 是否提供实习/工作机会的轻量标记 |
| `qrCode` / `stampToken` | 商家展位扫码二维码 |
| `scanCount` | 扫码次数统计 |

Admin 支持搜索现有 Company 后加入活动、编辑展位、拖拽排序、生成/下载 QR、生成商家登录魔法链接、导出商家线索 CSV、审核商家申请。招商材料里可以把它表述为“展位曝光 + 扫码线索沉淀 + 活动后数据反馈”。

### 集章打卡

集章规则由 `vendor-stamp` 配置控制，默认值：

| 配置 | 默认 |
|------|------|
| 是否启用 | 启用 |
| 每个印章奖励 | 1 张抽奖券 |
| 每人上限 | 8 个商家 |

学生扫商家 QR 后进入 `/events/{meetupId}/scan?token={stampToken}`。校验规则：

- 活动开启集章功能；
- 商家是该活动参展商；
- 用户已报名该活动；
- 用户已填写微信号，便于活动后联系；
- 同一用户同一商家只能集章一次；
- 达到 `maxStamps` 后不再发券。

通过后创建 `VendorStamp` 记录，并给报名记录增加 `vendor_stamp` 来源的抽奖券。Admin 可看印章排行榜 TOP 20，也可导出全部扫码明细（用户、邮箱、商家、展位、扫码时间）。

### 社交任务

社交任务由 `Meetup.freshersFestivalConfig.socialTaskConfig` 控制。每个任务包含：

| 字段 | 含义 |
|------|------|
| `taskType` | 任务类型 |
| `rewardTickets` | 审核通过后奖励几张抽奖券 |
| `maxSubmissions` | 同一任务最大有效提交次数，被拒绝的不计入上限 |
| `description` | 展示给用户的任务说明 |

**每次提交还会存 `screenshotHash`（截图内容 SHA-256）。** 同一场活动内命中已有 hash 直接拒收，
不分是本人重传还是几个人传同一张 —— 这条是 2026-08-08 墨尔本场加的，
起因是大量学员拿同一张照片反复上传刷券，而当时的「重复截图」风控面板按 `screenshotUrl` 分组、
上传链路又给每次上传塞了毫秒时间戳，同一张图每次 URL 都不同，面板恒为空。

被拒绝的提交不占 `maxSubmissions`（学员改好能重来），但总尝试次数封顶
`maxSubmissions × 3`，防止「传一张 → 被拒 → 再传一张」无限循环。

当前支持的任务类型：

- 小红书分享：`xiaohongshu_share`
- Instagram 分享：`instagram_share`
- 转发朋友圈：`wechat_moments`
- 现场拍照 @ 官方：`onsite_photo`
- 直播/短视频：`live_video`
- 抖音视频分享：`douyin_video`
- LinkedIn 分享：`linkedin_share`
- 转发微信群：`wechat_group`
- 集赞挑战：`collect_likes`
- 录一段安利视频：`promo_video`
- 推广达人：`top_promoter`

用户端上传截图后进入 `pending`；Admin 审核通过后才发 `task_complete` 抽奖券。审核台支持按状态/类型筛选、批量通过/拒绝、查看截图，并统计提交漏斗、高价值用户、重复截图、高频提交等风控线索。

**拒绝必须选理由。** 理由字典是 `SOCIAL_TASK_REJECTION_REASONS`（后端 `socialTask.schema.ts`），
经 `GET /social-task/rejection-reasons` 同时供 admin 下拉和学员端说明使用 —— 一份文案，两端共用，
admin 不另抄一份。学员在活动页能看到「未通过：{理由} + 怎么改」，改好可重新提交。

**分享类任务的对外规则**（写在活动页 `SocialTasksSection` 的发帖指引里，marketing 对外口径要一致）：

- 笔记要公开发布并**保留到活动结束**，不能发完就删或转私密。
- 截图**必须露出发布账号名** —— 审核员按账号名去平台逐篇核对笔记是否真实存在，搜不到就拒绝。
- 几篇券就得是**几篇不同的笔记**；同一张截图被系统当场拦下，同一篇笔记换角度截图由人工拒绝。

### 优惠券

优惠券用于活动后转化，不等同于抽奖券。模板字段包括标题、描述、优惠码、折扣类型（固定金额/百分比）、折扣值、兑换链接、有效期、商家名称/logo、排序和发放触发方式。

发放触发方式：

| 方式 | 说明 |
|------|------|
| `checkin` | 用户签到后自动发放所有启用的该类优惠券 |
| `manual` | 运营手动发放或后续活动使用 |

用户优惠券状态为 `available` / `used` / `expired`。同一报名记录对同一优惠券模板有唯一索引，签到重复处理不会重复发券。

### 抽奖轮次与抽奖券

抽奖轮次由 `raffle-round` 模块管理，可按开始时间、结束时间、间隔分钟批量生成，默认间隔 30 分钟。轮次状态为 `pending` / `active` / `completed` / `skipped`，奖品可分配到某一轮，也可取消关联。

抽奖本身复用 `event-lottery`：持有抽奖券的报名记录进入券池，券数越多概率越高。中奖不会直接扣减 `lotteryTickets` 字段；抽奖服务会按已中奖次数构建“已用券”映射，避免同一张券在同场活动里重复使用。

### 招商表达口径

对商家可统一表达为：

- 签到发券提高现场到场动力；
- 组队报名带来自传播和多人同行；
- 集章打卡把人流导向每个展位；
- 社交任务把现场内容转成小红书/朋友圈/Instagram 等 UGC；
- 优惠券承接活动后转化；
- 抽奖轮次把现场节奏切成多个高峰，给赞助商更多露出机会；
- Admin 后台能导出扫码/线索/发券/中奖数据，支持活动后复盘。

## 为什么是匠人办（招商背书）

「课代表系列」自 2017 年运营 7 年+，聚焦在澳留学生：

- **自媒体矩阵**：小红书 8 个账号（5 万+粉丝、22,000+ 收藏、50 万+点赞）；微信公众号 6 个账号（7 万+粉丝，含 UQ 课代表 14000+ / 墨大 8200+ / USYD 6200+ / UNSW 5878+ / 阿德 3200+ / Monash 2900+）。
- **社群**：小红书活跃社群 1000+、微信高粘性社群 10,000+。
- **覆盖**：澳洲 4 地区、8 所高校（UniMelb / Monash / RMIT / UQ / QUT / USYD / UNSW / Adelaide）。
- **活动经验**：7 年累计 200+ 场（校花校草选举、新生见面会、校园招聘会等），平均每场 100+ 参与者；与 Atlassian / AWS / Canva 等本地企业合作过职业讲座、Hackathon。

## 赞助套餐（结构）

按 Silver / Gold / Diamond 三档递增（具体报价、专属权益、早鸟优惠、招商联系人见各城内容源 `content/{city}.md`）。权益维度：线上曝光（顶部 banner / 鸣谢 list / 品牌介绍 / 活动回顾露出）、线下曝光（展位选位 / 地推传单 / 主持口播 / 加微沉淀）、活动后数据反馈。

> 报价与私人联系方式是会变的招商细节，**放各城内容源维护**，本真相文档只描述结构，避免两处重复漂移。

## 派生产物在哪

- **落地页**：根 `index.html`（列各城 deck 入口）
- **各城招商 deck**：`{city}-{term}/index.html`（三件套播放器，视觉真相是同目录 `design.md`）
- **内容源 / 逐页存档**：`content/{city}-{term}-pages.md`、`content/design-style.md`

新增一座城市：复制一套 deck 三件套 → 套 `content/{city}-pages.md` 文字 → 改 `styles.css` 城市主题色 → 根 `index.html` 加入口 → 更新该城 `design.md`，并在该城目录放 `_sot.yml`（`parent: orientation-festival`）。
