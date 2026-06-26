import { Page, StatCard, KvTable, Photo, GiantStat, GiantRow, Editorial, CardsGrid } from './_layout';
import { colors, border, shadow } from '../ui';

function InfoCard({ t, d, accent }: { t: string; d: string; accent: string }) {
	return (
		<div style={{ border, background: colors.white, boxShadow: shadow, padding: '16px 18px' }}>
			<div style={{ fontWeight: 900, fontSize: 19, color: accent, marginBottom: 6 }}>{t}</div>
			<div style={{ fontSize: 15, lineHeight: 1.5, color: '#444' }}>{d}</div>
		</div>
	);
}

export function S21_About() {
	const stats = [['50,000+', '小红书粉丝'], ['70,000+', '公众号粉丝'], ['100+', '每年举办活动'], ['4 · 8', '覆盖 4 地区 8 校']] as const;
	return (
		<Page tag="18 · 关于课代表" title={<>9 年的<span style={{ color: colors.purple }}>大学生品牌矩阵</span></>}
			bg={colors.dark} tone="dark" accent={colors.purple} align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 22, marginBottom: 20, alignItems: 'stretch' }}>
				<Editorial tone="dark" accent={colors.purple} size={26}>
					课代表系列由匠人学院自 <b style={{ color: colors.yellow }}>2017 年</b> 创建，聚焦大学生群体，9 年运营，打造 <b style={{ color: colors.yellow }}>8 个小红书账号 + 6 个微信公众号</b> 矩阵及活跃线下社区，已成为澳洲留学生广泛认可的品牌。
				</Editorial>
				<Photo img="past-events/team-photo.jpg" caption="线下社区现场" style={{ minHeight: 200 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} accent={colors.purple} />)}</div>
		</Page>
	);
}

export function S22_Xhs() {
	const palette = [colors.white, colors.yellow, colors.dark, colors.white];
	const stats = [
		['8', '所高校', '墨 / 悉 / 阿 / 布 四城 8 校'],
		['1500+', '小红书社群成员', '按高校分群 · 高活跃'],
		['50,000', '粉丝', '8 个账号矩阵累计'],
		['22,000+', '收藏', '内容高互动沉淀'],
	] as const;
	return (
		<Page tag="19 · 小红书" title="课代表系列小红书" bg={colors.red} tone="dark" accent={colors.dark} watermark="书" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l, s], i) => <GiantStat key={l} i={i} n={n} label={l} sub={s} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S23_XhsDesc() {
	const pillars = [
		['大学生活', '选课 · 租房 · 社交 · 校园攻略，覆盖新生落地全场景'],
		['教育资讯', '课程动态 · 升学 · 求职 · 签证政策第一手解读'],
		['本地活动', 'meetup · 讲座 · 线下福利，把线上流量带到现场'],
		['入学攻略', '新生 onboarding · 避坑指南，开学季高频刚需'],
	] as const;
	return (
		<Page tag="19 · 小红书" title="四城八校的内容生态" accent={colors.red} watermark="XHS" align="center">
			<Editorial accent={colors.red} size={25}>
				借助小红书，「课代表系列」打造了囊括澳大利亚<b style={{ color: colors.red }}>四城八所顶级高校</b>的内容生态，其中布里斯班覆盖 UQ、QUT 与 Griffith 新生圈层。账号常年高频更新、笔记互动活跃，与之合作，您的品牌可<b style={{ color: colors.red }}>精准接触活跃、具消费潜力的年轻群体</b>，通过笔记种草、话题互动与线下联动自然融入大学生日常。
			</Editorial>
			<CardsGrid cols={4} gap={16} style={{ marginTop: 26 }}>
				{pillars.map(([t, d]) => <InfoCard key={t} t={t} d={d} accent={colors.red} />)}
			</CardsGrid>
		</Page>
	);
}

export function S24_XhsMatrix() {
	return (
		<Page tag="19 · 小红书" title="账号矩阵数据" accent={colors.red} watermark="4★" align="center">
			<KvTable head={['指标', '典型账号区间']} rows={[['点赞量', '5628 ～ 1.2 万'], ['收藏量', '2.8 万 ～ 5.5 万'], ['平均阅读量', '3.5 万 ～ 4.9 万'], ['账号权重评级', '4 ～ 5 分（小红书内部评分）']]} />
			<p style={{ marginTop: 14, fontSize: 15, color: '#777' }}>4~5 分需长期稳定优质原创、稳定粉丝、高互动、无违规。</p>
		</Page>
	);
}

export function S25_Wechat() {
	const stats = [['7w+', '公众号粉丝'], ['4 · 8', '覆盖 4 地区 8 校'], ['3 类', '资讯 · 活动 · 攻略 聚焦大学生活']] as const;
	const palette = [colors.dark, colors.red, colors.dark];
	const detail = [
		['矩阵与覆盖', '6 个公众号矩阵累计 7w+ 粉丝，覆盖墨尔本 / 悉尼 / 阿德莱德 / 布里斯班四地 8 所高校；布里斯班以 UQ · QUT 课代表为核心触达三校新生。'],
		['内容三类', '教育资讯（课程 / 升学 / 求职 / 签证）· 校园活动（meetup / 讲座 / 福利）· 入学攻略（onboarding / 避坑），覆盖大学生活全周期。'],
		['合作价值', '顶部 Banner 露出 · 图文推文深度植入 · 鸣谢 List 品牌曝光 · 社群定向推送，直达忠诚度高、活跃度高的大学生用户。'],
	] as const;
	return (
		<Page tag="20 · 公众号" title="课代表系列微信公众号" bg={colors.green} accent={colors.dark} watermark="W" align="center">
			<GiantRow cols={3} tone="light" gap={32}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
			<CardsGrid cols={3} gap={16} style={{ marginTop: 30 }}>
				{detail.map(([t, d]) => <InfoCard key={t} t={t} d={d} accent={colors.dark} />)}
			</CardsGrid>
		</Page>
	);
}

export function S26_WechatDesc() {
	return (
		<Page tag="20 · 公众号" title="高忠诚度的大学生社区" accent={colors.green} watermark="WX" align="center">
			<Editorial accent={colors.green} size={25}>
				「课代表系列」公众号多年专注触达澳大利亚四大地区（墨尔本、悉尼、阿德莱德、布里斯班）及顶尖高校的学生群体，提供深度教育资讯、校园生活见解与地区活动信息。公众号用户<b style={{ color: colors.green }}>忠诚度高、活跃度高</b>，是深化与大学生群体联系、建立品牌社区的绝佳选择。
			</Editorial>
			<CardsGrid cols={3} gap={16} style={{ marginTop: 26 }}>
				<InfoCard t="为什么忠诚度高" d="多年持续输出选课 / 签证 / 求职等刚需内容，用户主动订阅、长期留存，不是买量堆出来的粉丝。" accent={colors.green} />
				<InfoCard t="活跃度体现" d="推文打开与互动稳定，菜单栏 + 社群形成日常触点，学生有需求第一时间会回来看。" accent={colors.green} />
				<InfoCard t="对品牌意味着" d="不是一次性曝光，而是嵌入学生信任链路，适合建立品牌社区、做长期心智沉淀。" accent={colors.green} />
			</CardsGrid>
		</Page>
	);
}

export function S27_WechatMatrix() {
	return (
		<Page tag="20 · 公众号" title="公众号矩阵数据" accent={colors.green} watermark="6" align="center">
			<KvTable head={['公众号', '粉丝', '平均曝光']} rows={[['UQ 课代表', '14000+', '2000+'], ['QUT 课代表', '活跃社群覆盖', '校园活动定向触达'], ['墨大课代表', '8200+', '800+'], ['Monash 课代表', '2900+', '200+'], ['USYD 课代表', '6200+', '700+'], ['UNSW 课代表', '5878+', '500+']]} />
		</Page>
	);
}

export function S28_Community() {
	const stats = [
		['1000+', '小红书活跃大学生社群用户', '按高校分群 · 高活跃'],
		['20,000+', '高粘性微信大学生社群用户', '可定向城市 / 高校推送'],
	] as const;
	const palette = [colors.yellow, colors.white];
	return (
		<Page tag="21 · 课代表社群" title="可直达的私域社群" bg={colors.blue} tone="dark" accent={colors.dark} watermark="@" align="center">
			<GiantRow cols={2} tone="dark" gap={40}>
				{stats.map(([n, l, s], i) => <GiantStat key={l} i={i} n={n} label={l} sub={s} color={palette[i]} />)}
			</GiantRow>
			<CardsGrid cols={3} gap={16} style={{ marginTop: 28 }}>
				<InfoCard t="群内日常" d="课程提醒 · 活动召集 · 福利派发 · 答疑互动，是学生主动留存的高频触点。" accent={colors.dark} />
				<InfoCard t="可定向触达" d="按城市 / 高校精准推送，品牌信息直达目标新生，不被公域算法稀释。" accent={colors.dark} />
				<InfoCard t="转化抓手" d="扫码进群 → 长期触达 → 活动召集 → 线索沉淀，私域可反复运营。" accent={colors.dark} />
			</CardsGrid>
		</Page>
	);
}

export function S29_Coop() {
	return (
		<Page tag="22 · 合作机会" title={<>深入高校市场的<span style={{ color: colors.yellow }}>桥梁</span></>}
			bg={colors.dark} tone="dark" accent={colors.red} align="center">
			<Editorial tone="dark" accent={colors.yellow} size={25}>
				基于「课代表」系列在社交媒体资源的深厚积累和丰富的线下活动经验，我们提供一系列合作机会，通过媒体影响力与紧密的大学网络，为您的品牌打造深入高校市场的桥梁。无论数字平台内容合作，还是实地活动与高校生紧密互动，<b style={{ color: colors.yellow }}>多元化合作模式</b>都能帮助您有效触达并吸引年轻活跃的目标群体。
			</Editorial>
			<CardsGrid cols={2} gap={16} style={{ marginTop: 24 }}>
				<InfoCard t="内容合作" d="小红书笔记种草 · 公众号图文推送 · 话题 / 合集运营，自然植入大学生日常。" accent={colors.red} />
				<InfoCard t="线下活动" d="新生节展位 · 校园讲座 · meetup · 品牌冠名，与高校生面对面互动。" accent={colors.red} />
				<InfoCard t="社群直达" d="私域社群定向推送 · 扫码加微信沉淀线索，活动后可持续跟进。" accent={colors.red} />
				<InfoCard t="校园网络" d="课代表 KOC 矩阵 · 高校社团联动，借校园内部网络增强品牌存在感。" accent={colors.red} />
			</CardsGrid>
		</Page>
	);
}
