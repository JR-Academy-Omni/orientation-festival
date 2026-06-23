import { Page, StatCard, KvTable, Photo, GiantStat, GiantRow, Editorial } from './_layout';
import { colors } from '../ui';

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
	const stats = [['8', '所高校'], ['1500+', '小红书社群成员'], ['50,000', '粉丝'], ['22,000+', '收藏']] as const;
	return (
		<Page tag="19 · 小红书" title="课代表系列小红书" bg={colors.red} tone="dark" accent={colors.dark} watermark="书" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S23_XhsDesc() {
	return (
		<Page tag="19 · 小红书" title="四城八校的内容生态" accent={colors.red} watermark="XHS" align="center">
			<Editorial accent={colors.red} size={28}>
				借助小红书，「课代表系列」打造了囊括澳大利亚<b style={{ color: colors.red }}>四城八所顶级高校</b>的内容生态，其中布里斯班覆盖 UQ、QUT 与 Griffith 新生圈层。账号长期分享大学生活、教育资讯、本地活动和入学攻略。与之合作，您的品牌可<b style={{ color: colors.red }}>精准接触活跃、具消费潜力的年轻群体</b>，自然融入大学生日常，有效提升品牌知名度。
			</Editorial>
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
	return (
		<Page tag="20 · 公众号" title="课代表系列微信公众号" bg={colors.green} accent={colors.dark} watermark="W" align="center">
			<GiantRow cols={3} tone="light" gap={32}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S26_WechatDesc() {
	return (
		<Page tag="20 · 公众号" title="高忠诚度的大学生社区" accent={colors.green} watermark="WX" align="center">
			<Editorial accent={colors.green} size={28}>
				「课代表系列」公众号多年专注触达澳大利亚四大地区（墨尔本、悉尼、阿德莱德、布里斯班）及顶尖高校的学生群体，提供深度教育资讯、校园生活见解与地区活动信息。公众号用户<b style={{ color: colors.green }}>忠诚度高、活跃度高</b>，是深化与大学生群体联系、建立品牌社区的绝佳选择。
			</Editorial>
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
	const stats = [['1000+', '小红书活跃大学生社群用户'], ['20,000+', '高粘性微信大学生社群用户']] as const;
	const palette = [colors.yellow, colors.white];
	return (
		<Page tag="21 · 课代表社群" title="可直达的私域社群" bg={colors.blue} tone="dark" accent={colors.dark} watermark="@" align="center">
			<GiantRow cols={2} tone="dark" gap={40}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S29_Coop() {
	return (
		<Page tag="22 · 合作机会" title={<>深入高校市场的<span style={{ color: colors.yellow }}>桥梁</span></>}
			bg={colors.dark} tone="dark" accent={colors.red} align="center">
			<Editorial tone="dark" accent={colors.yellow} size={29}>
				基于「课代表」系列在社交媒体资源的深厚积累和丰富的线下活动经验，我们提供一系列合作机会，通过媒体影响力与紧密的大学网络，为您的品牌打造深入高校市场的桥梁。无论数字平台内容合作，还是实地活动与高校生紧密互动，<b style={{ color: colors.yellow }}>多元化合作模式</b>都能帮助您有效触达并吸引年轻活跃的目标群体。
			</Editorial>
		</Page>
	);
}
