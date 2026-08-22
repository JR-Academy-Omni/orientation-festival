---
sot_doc: true
sot: orientation-festival
sot_role: repository-guide
sot_type: event
title: Orientation Festival · 匠人学院新生节
---

# Orientation Festival · 匠人学院新生节

匠人学院多城“新生节” Sponsor Deck、活动内容源与视觉规范仓库。公共活动名按城市统一，Sponsor proposition 按受众独立维护。

> 本 repo 是新生节唯一真相源。`content/` 含内部商业信息，不公开 serve；对外发送 deck 或 PDF。所有 HTML 保持 `noindex,nofollow`。

## 悉尼双版本

| 公共活动名 | 内部版本 | 受众 | canonical deck | 状态 |
|---|---|---|---|---|
| 悉尼新生节 | University Edition | 大学生、留学生 | `sydney-2026-s2-v2/` | 2026 S2 场次已落定 |
| 悉尼新生节 | Local Schools Edition | Year 7–12 新生、学校、P&C、家长/监护人与青年社区 | `sydney-local-schools/` | Sponsor discovery；场次事实 TBD |

`sydney-2026-s2-en/` 与 `sydney-local-schools-en/` 分别是两条商业线的英文派生版，不是新的活动版本。`sydney-2026-s2/` 是已上线历史 URL，只保留跳转兼容，不再声明 SoT。

两版共同内容真相源：`content/sydney-sponsor-decks-sot.md`。

## 目录

```text
orientation-festival/
├── _sot.yml
├── EVENT.md
├── index.html
├── content/
│   ├── sydney-sponsor-decks-sot.md
│   ├── sydney-2026-s2-prd.md
│   └── sydney-local-schools-prd.md
├── sydney-2026-s2-v2/       # University Edition canonical
├── sydney-2026-s2-en/       # University English translation
├── sydney-local-schools/    # Local Schools Edition canonical
├── sydney-local-schools-en/ # Local Schools English derivative
├── sydney-2026-s2/          # Legacy URL compatibility only
└── pdf-output/
```

## 内容规则

- 活动封面和主标题只写 `{城市}新生节`，不拼学校名称。
- 版本标签用于内部管理和 Sponsor Deck 导航。
- University 数据不能证明 Local Schools 的人数、青年覆盖、合作机构或转化。
- Local Schools 日期、场地、学校、容量和价格没有书面确认时写 `TBD` / `Custom proposal`。
- Local Schools 面向更广义的本地青年生态；涉及未成年人联系时，以 parent / guardian 或其他合规授权渠道为准，不交付学生名单。
- 学校名称、校徽和“官方合作”需要书面批准。

## 预览

```bash
python3 -m http.server 8000
```

- University: `http://localhost:8000/sydney-2026-s2-v2/`
- Local Schools: `http://localhost:8000/sydney-local-schools/`
- Local Schools English: `http://localhost:8000/sydney-local-schools-en/`

快捷键：← → 翻页 · E 编辑文字 · G 总览 · F 全屏 · P 打开 PDF。

## PDF 与 lineage

修改 deck 后重新生成对应 PDF，然后在 `jr-omni` 根目录运行：

```bash
python3 lineage/build_lineage.py
cd ../jr-academy-admin && bash scripts/sync-lineage.sh
```

不要手改 `lineage/lineage.json`、`lineage/REGISTRY.md`、`lineage/content.js` 或 Admin `graph.html` 的数据段。

## 部署

源码在 private `main`；GitHub Pages 使用不含 `content/` 的 `gh-pages`。更新已有页面前先提交并推送 main，再只把入口、deck 与 PDF 同步到 gh-pages。新建公开入口需要按仓库安全规则确认部署范围。
