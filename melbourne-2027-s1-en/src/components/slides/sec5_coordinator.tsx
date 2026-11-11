import { Page, StatCard, KvTable, Photo, GiantStat, GiantRow, Editorial } from './_layout';
import { assetPath, colors, border, shadow } from '../ui';

export function S21_About() {
	const stats = [['50,000+', 'Xiaohongshu followers'], ['70,000+', 'WeChat followers'], ['100+', 'Events run per year'], ['4 · 8', '4 cities · 8 universities']] as const;
	return (
		<Page tag="18 · ABOUT COURSE REPS" title={<>9 years of a <span style={{ color: colors.purple }}>student brand network</span></>}
			bg={colors.dark} tone="dark" accent={colors.purple} align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 22, marginBottom: 20, alignItems: 'stretch' }}>
				<Editorial tone="dark" accent={colors.purple} size={26}>
					Built by JR Academy since <b style={{ color: colors.yellow }}>2017</b>, the Course Rep ("Kedaibiao") network is focused on university students. Over 9 years it has grown into a matrix of <b style={{ color: colors.yellow }}>8 Xiaohongshu accounts + 6 WeChat Official Accounts</b> plus an active offline community — a brand widely recognised by Chinese students across Australia.
				</Editorial>
				<Photo img="past-events/crowd-stage.jpg" caption="Offline community on site" style={{ minHeight: 200 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} accent={colors.purple} />)}</div>
		</Page>
	);
}

export function S22_Xhs() {
	const palette = [colors.white, colors.yellow, colors.dark, colors.white];
	const stats = [['8', 'Universities'], ['1500+', 'Xiaohongshu group members'], ['50,000', 'Followers'], ['22,000+', 'Saves']] as const;
	return (
		<Page tag="19 · XIAOHONGSHU" title="Course Rep Xiaohongshu network" bg={colors.red} tone="dark" accent={colors.dark} watermark="RED" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S23_XhsDesc() {
	return (
		<Page tag="19 · XIAOHONGSHU" title="A content ecosystem across 4 cities, 8 unis" accent={colors.red} watermark="XHS" align="center">
			<Editorial accent={colors.red} size={28}>
				On Xiaohongshu, the Course Rep network has built a content ecosystem spanning <b style={{ color: colors.red }}>eight top universities across four Australian cities</b> — UniMelb, Monash, RMIT, UQ, QUT, USYD, UNSW and Adelaide. Each has its own flagship account sharing uni life, education news and local events. Partner with us and your brand can <b style={{ color: colors.red }}>reach an active, high-spending-potential young audience</b>, blend naturally into students' daily lives, and lift brand awareness.
			</Editorial>
		</Page>
	);
}

export function S24_XhsMatrix() {
	return (
		<Page tag="19 · XIAOHONGSHU" title="Course Rep Xiaohongshu account matrix" accent={colors.red} watermark="XHS" align="top">
			<div style={{ border, boxShadow: shadow, background: colors.white, padding: 14 }}>
				<img
					src={assetPath('xhs-matrix.png')}
					alt="Course Rep Xiaohongshu account matrix"
					style={{ width: '100%', height: 430, objectFit: 'contain', display: 'block' }}
				/>
			</div>
			<p style={{ marginTop: 14, fontSize: 16, color: '#555', fontWeight: 800 }}>
				Covering flagship accounts at core universities in Melbourne, Sydney, Brisbane and beyond — showcasing follower scale, content reach and access to real campus-life moments.
			</p>
		</Page>
	);
}

export function S25_Wechat() {
	const stats = [['70k+', 'WeChat followers'], ['4 · 8', '4 cities · 8 universities'], ['3 pillars', 'News · Events · Guides for uni life']] as const;
	const palette = [colors.dark, colors.red, colors.dark];
	return (
		<Page tag="20 · WECHAT" title="Course Rep WeChat Official Accounts" bg={colors.green} accent={colors.dark} watermark="W" align="center">
			<GiantRow cols={3} tone="light" gap={32}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S26_WechatDesc() {
	return (
		<Page tag="20 · WECHAT" title="A highly loyal student community" accent={colors.green} watermark="WX" align="center">
			<Editorial accent={colors.green} size={28}>
				For years the Course Rep WeChat Official Accounts have focused on students across Australia's four major regions (Melbourne, Sydney, Adelaide and Brisbane) and their top universities, delivering in-depth education news, campus-life insight and regional event info. With <b style={{ color: colors.green }}>highly loyal, highly active</b> followers, they're an ideal way to deepen ties with the student community and build a brand community.
			</Editorial>
		</Page>
	);
}

export function S27_WechatMatrix() {
	return (
		<Page tag="20 · WECHAT" title="Official Account matrix data" accent={colors.green} watermark="6" align="center">
			<KvTable head={['Official Account', 'Followers', 'Avg. reach']} rows={[['UniMelb Course Rep', '8200+', '800+'], ['Monash Course Rep', '2900+', '200+'], ['UQ Course Rep', '14000+', '2000+'], ['USYD Course Rep', '6200+', '700+'], ['UNSW Course Rep', '5878+', '500+'], ['Adelaide Course Rep', '3200+', '200+']]} />
		</Page>
	);
}

export function S28_Community() {
	const stats = [['1000+', 'Active Xiaohongshu student community members'], ['10,000+', 'High-stickiness WeChat student community members']] as const;
	const palette = [colors.yellow, colors.white];
	return (
		<Page tag="21 · COMMUNITY" title="A private community you can reach directly" bg={colors.blue} tone="dark" accent={colors.dark} watermark="@" align="center">
			<GiantRow cols={2} tone="dark" gap={40}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S29_Coop() {
	return (
		<Page tag="22 · PARTNERSHIP" title={<>Your <span style={{ color: colors.yellow }}>bridge</span> into the campus market</>}
			bg={colors.dark} tone="dark" accent={colors.red} align="center">
			<Editorial tone="dark" accent={colors.yellow} size={29}>
				Built on the Course Rep network's deep social-media assets and rich offline event experience, we offer a range of partnership options that use our media influence and tight university network to build your brand a bridge deep into the campus market. Whether through digital content collaborations or hands-on activities with students, our <b style={{ color: colors.yellow }}>flexible partnership models</b> help you reach and engage a young, active target audience.
			</Editorial>
		</Page>
	);
}
