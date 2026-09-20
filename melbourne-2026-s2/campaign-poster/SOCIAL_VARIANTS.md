# 墨尔本 2026 S2 新生节社交分享版

## 用途

`social-output/` 是宣传海报对应的小红书／朋友圈分享版本。素材库保留 4 个活动信息角度和 4 个普通参与者海报角度，并追加 8 个更接近学生原生分享的组队／抽奖卡片；旧素材不因新风格上线而删除。

这些图片不含二维码、可见网址、短链接或“扫码”CTA；网站活动页负责承接报名入口。

活动配置中每张图对应 5 套成对的小红书标题和正文，共 80 组。学生端每次载入会打乱 16 张图的顺序，并为每张随机选择一套文案；“换一版文案”会同步切换标题和正文，且不会连续重复当前版本。

## 事实表

- 活动：第 6 届 · 2026 S2 墨尔本三校新生节
- 学校：UNIMELB · MONASH · RMIT
- 时间：2026 年 8 月 8 日（周六）2:00 PM–5:00 PM
- 地点：Drill Hall · Multicultural Hub，26 Therry St, Melbourne VIC 3000
- 当前依据：活动 ID `6a5448bfc7d7a1b0782b41b4` 的公开活动详情与已批准 Top 5 海报
- 注意：城市 deck 内仍有 8 月 7 日旧记录，本次没有把该冲突内容带入社交版

## 编辑提示记录

逐张以对应 `output/*.png` 为参考图，保持主视觉、标题、日期、地点和学校不变；仅编辑底部报名卡：

- 删除真实二维码；
- 删除“扫码锁定入场名额”或“扫码查看活动详情”；
- 改为“发布后 @墨尔本新生节”；
- 辅助文案改为“活动信息以官方账号发布为准。”；
- 保留支持单位横幅；
- 禁止生成二维码、条码、网址或短链接。

图片模型输出按比例 cover-and-crop 到 `1242×1660`，没有非等比拉伸。最终文件已用 `zbarimg` 扫描，未检出二维码。

## 参与者角度

学生任务不使用“内容创作者招募”作为通用素材。新增素材从普通参与者的真实动机出发，每套使用不同场景与文案：

- 和室友／同学约周六同行；
- 一个人参加、从逛摊位开始认识人；
- 新生预算下的免费入场周末安排；
- 认识 UNIMELB、MONASH、RMIT 不同学校的朋友。

文案只写计划、期待和个人选择，不伪造“亲测”“我去过”等经历；学生发布前需把其中一句改成自己的学校、专业或真实参加理由。

## 文件

| # | 文件 | 主题 | SHA-256 |
|---|---|---|---|
| 01 | `social-output/01-100plus-prizes-social.png` | 超百个奖品，大奖现场送 | `f46e8c52c29f6df4e4726d004fb7566fcd1d76110471483086e2724829f3d3a0` |
| 02 | `social-output/02-5000-onsite-gifts-social.png` | 5000+份现场福利，免费入场 | `629eb2ea3108b1c4cc7016f1eb091bd483b676b9e492b9c229e182e145220a68` |
| 03 | `social-output/03-not-alone-social.png` | 刚到墨尔本，别一个人过开学季 | `60f832d50467710e735960be283728871e0582425c25fa091d3033d1aeb9cce6` |
| 04 | `social-output/04-three-hour-route-social.png` | 3小时逛完整个墨尔本新生节 | `57091c7ed6e9e47a04d9724a503fb0c38f8e0ab6adab4ea5d1dd1b7c1963a839` |
| 05 | `social-output/05-roommates-plan-social.png` | 室友群里已经约上了 | `ee0bfbc594612ff36de7a012dc1a3b2a32c7bb241e5849139304f010aeb70a5a` |
| 06 | `social-output/06-solo-friendly-social.png` | 一个人来也不会尴尬 | `83bd230ddd4428fff133a1647cf4eb31ff93b236be1461b2eaaa9f4af2ad9f65` |
| 07 | `social-output/07-budget-saturday-social.png` | 新生预算友好的周六安排 | `ec0a6bfe97fa68b355e501df873b589457810ff90a916733e9d1db48c2608c21` |
| 08 | `social-output/08-cross-campus-friends-social.png` | 想认识不同学校的朋友 | `602065c341da13eb1cbbef6a61c17e79bdb3c2cf9d53838863c8839278907db9` |

`social-output/05-student-creators-social.png` 仅保留为历史产物，不进入学生社交任务素材库。

## 追加的组队／抽奖分享卡

这组素材不延续官方 Campaign Poster 的统一商业摄影风格，而是分别采用便签拼贴、球队名单、群聊插画、手写招募、抽奖愿望单、任务清单、邀请票根和拍立得日记。用户明确要求保留原有 8 套，因此这些文件作为第 9–16 套追加。

| # | 文件 | 主题 | SHA-256 |
|---|---|---|---|
| 09 | `social-output/09-team-three-missing-one.png` | 3 人队缺 1，来个搭子 | `1893871d77200de12e1b4de5b29f9e9be1ce0068acd92f84140544a84bd8870a` |
| 10 | `social-output/10-team-five.png` | 冲个 5 人队，谁来 | `785899eb6df51cfe864f467fe033ee4274a76a9032345d336ce29f52e6a9b2f0` |
| 11 | `social-output/11-roommate-chat.png` | 室友群里已经约上了 | `ef22dbd41a1d24ea2476dae317af8a9fdfe845aec7125e675deeeeed3c35489e` |
| 12 | `social-output/12-solo-find-buddy.png` | 一个人去，现场找搭子 | `f281a86827fa42d07472c06bcb269fa5c3366a099a97728d6559e2392dd0b2ce` |
| 13 | `social-output/13-prize-wishlist.png` | 我的新生节抽奖愿望单 | `dc117f0ff0a287b8f8823f6461b55d193ce20d3468b26a566d22d83eb8f19a2f` |
| 14 | `social-output/14-ticket-task-checklist.png` | 我的抽奖券任务清单 | `7db9e41d3e867e0e81397e1d8451868e527e0fd7397cb8cf5e736bfa54675c10` |
| 15 | `social-output/15-invite-friend-ticket.png` | 我发邀请，你来签到 | `51886091d0b0a71d12de3ca74d868bd822eef3cc77770a92103f4916e3b3b9df` |
| 16 | `social-output/16-saturday-photo-diary.png` | 周六一起去新生节吗 | `d3ebbae08fc26c9adc85b2f6cd88997ea6a9c3e867cef4819ad4d9e9ff242cf9` |
