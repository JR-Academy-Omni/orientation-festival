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
	const stats = [['50,000+', 'RED followers'], ['70,000+', 'WeChat followers'], ['100+', 'Events per year'], ['4 · 8', '4 cities · 8 campuses']] as const;
	return (
		<Page tag="18 · About Class Rep" title={<>9 Years of a <span style={{ color: colors.purple }}>Student Brand Matrix</span></>}
			bg={colors.dark} tone="dark" accent={colors.purple} align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 22, marginBottom: 20, alignItems: 'stretch' }}>
				<Editorial tone="dark" accent={colors.purple} size={26}>
					The Class Rep series was created by JR Academy in <b style={{ color: colors.yellow }}>2017</b>. Focused on university students over 9 years of operation, it has built a matrix of <b style={{ color: colors.yellow }}>8 RED accounts + 6 WeChat Official Accounts</b> plus active offline communities, becoming a brand widely recognised by international students in Australia.
				</Editorial>
				<Photo img="past-events/team-photo.jpg" caption="Offline community event" style={{ minHeight: 200 }} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} accent={colors.purple} />)}</div>
		</Page>
	);
}

export function S22_Xhs() {
	const palette = [colors.white, colors.yellow, colors.dark, colors.white];
	const stats = [
		['8', 'Campuses', 'Melb / Syd / Adl / Bris · 8 campuses'],
		['1500+', 'RED group members', 'Grouped by campus · highly active'],
		['50,000', 'Followers', 'Across the 8-account matrix'],
		['22,000+', 'Saves', 'Built up from high engagement'],
	] as const;
	return (
		<Page tag="19 · RED" title="Class Rep Series on RED" bg={colors.red} tone="dark" accent={colors.dark} watermark="RED" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l, s], i) => <GiantStat key={l} i={i} n={n} label={l} sub={s} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S23_XhsDesc() {
	const pillars = [
		['Uni life', 'Course selection · housing · social · campus guides, covering the full arrival journey'],
		['Education news', 'First-hand takes on courses · further study · job hunting · visa policy'],
		['Local events', 'Meetups · talks · offline perks that bring online traffic on-site'],
		['Arrival guides', 'New-student onboarding · pitfall guides, in high demand every intake'],
	] as const;
	return (
		<Page tag="19 · RED" title="A Content Ecosystem Across 4 Cities & 8 Campuses" accent={colors.red} watermark="XHS" align="center">
			<Editorial accent={colors.red} size={25}>
				Through RED, the Class Rep series has built a content ecosystem spanning <b style={{ color: colors.red }}>8 top campuses across 4 Australian cities</b>, with Brisbane covering the UQ, QUT and Griffith new-student communities. The accounts post frequently year-round with highly engaged notes. Partnering with us, your brand can <b style={{ color: colors.red }}>precisely reach an active, high-spending young audience</b>, blending naturally into student life through note recommendations, topic engagement and offline tie-ins.
			</Editorial>
			<CardsGrid cols={4} gap={16} style={{ marginTop: 26 }}>
				{pillars.map(([t, d]) => <InfoCard key={t} t={t} d={d} accent={colors.red} />)}
			</CardsGrid>
		</Page>
	);
}

export function S24_XhsMatrix() {
	return (
		<Page tag="19 · RED" title="Account Matrix Data" accent={colors.red} watermark="4★" align="center">
			<KvTable head={['Metric', 'Typical account range']} rows={[['Likes', '5,628 – 12,000'], ['Saves', '28,000 – 55,000'], ['Avg. views', '35,000 – 49,000'], ['Account weight rating', '4 – 5 (RED internal score)']]} />
			<p style={{ marginTop: 14, fontSize: 15, color: '#777' }}>A 4–5 rating requires long-term, consistent, high-quality original content, a stable following, high engagement and no violations.</p>
		</Page>
	);
}

export function S25_Wechat() {
	const stats = [['70k+', 'WeChat followers'], ['4 · 8', '4 cities · 8 campuses'], ['3 types', 'News · events · guides for uni life']] as const;
	const palette = [colors.dark, colors.red, colors.dark];
	const detail = [
		['Matrix & reach', 'A 6-account matrix with 70k+ followers, covering 8 campuses across Melbourne / Sydney / Adelaide / Brisbane; in Brisbane the UQ · QUT Class Reps reach students at all three campuses.'],
		['Three content types', 'Education news (courses / further study / jobs / visas) · campus events (meetups / talks / perks) · arrival guides (onboarding / avoiding pitfalls), covering the whole uni-life cycle.'],
		['Partnership value', 'Top banner placement · in-depth integration in articles · brand exposure in thank-you lists · targeted community pushes, reaching loyal, highly active student users directly.'],
	] as const;
	return (
		<Page tag="20 · WeChat" title="Class Rep Series WeChat Official Accounts" bg={colors.green} accent={colors.dark} watermark="W" align="center">
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
		<Page tag="20 · WeChat" title="A Highly Loyal Student Community" accent={colors.green} watermark="WX" align="center">
			<Editorial accent={colors.green} size={25}>
				For years the Class Rep WeChat accounts have focused on reaching students across Australia's four major cities (Melbourne, Sydney, Adelaide, Brisbane) and top universities, offering in-depth education news, campus-life insights and local event info. The audience is <b style={{ color: colors.green }}>highly loyal and highly active</b> — an excellent way to deepen ties with students and build a brand community.
			</Editorial>
			<CardsGrid cols={3} gap={16} style={{ marginTop: 26 }}>
				<InfoCard t="Why so loyal" d="Years of consistent must-have content on course selection / visas / jobs mean users subscribe by choice and stay long-term — not followers bought in bulk." accent={colors.green} />
				<InfoCard t="Signs of engagement" d="Steady article opens and interaction; the menu bar + community groups form daily touchpoints, so students return the moment they have a need." accent={colors.green} />
				<InfoCard t="What it means for brands" d="Not one-off exposure, but a place in students' chain of trust — ideal for building a brand community and long-term mindshare." accent={colors.green} />
			</CardsGrid>
		</Page>
	);
}

export function S27_WechatMatrix() {
	return (
		<Page tag="20 · WeChat" title="WeChat Matrix Data" accent={colors.green} watermark="6" align="center">
			<KvTable head={['Account', 'Followers', 'Avg. reach']} rows={[['UQ Class Rep', '14,000+', '2,000+'], ['QUT Class Rep', 'Active community reach', 'Targeted campus-event reach'], ['UniMelb Class Rep', '8,200+', '800+'], ['Monash Class Rep', '2,900+', '200+'], ['USYD Class Rep', '6,200+', '700+'], ['UNSW Class Rep', '5,878+', '500+']]} />
		</Page>
	);
}

export function S28_Community() {
	const stats = [
		['1000+', 'Active RED student community members', 'Grouped by campus · highly active'],
		['20,000+', 'Sticky WeChat student community members', 'Targetable by city / campus'],
	] as const;
	const palette = [colors.yellow, colors.white];
	return (
		<Page tag="21 · Class Rep Community" title="Private Communities You Can Reach Directly" bg={colors.blue} tone="dark" accent={colors.dark} watermark="@" align="center">
			<GiantRow cols={2} tone="dark" gap={40}>
				{stats.map(([n, l, s], i) => <GiantStat key={l} i={i} n={n} label={l} sub={s} color={palette[i]} />)}
			</GiantRow>
			<CardsGrid cols={3} gap={16} style={{ marginTop: 28 }}>
				<InfoCard t="Day-to-day in the groups" d="Course reminders · event call-outs · perk giveaways · Q&A — high-frequency touchpoints where students choose to stay." accent={colors.dark} />
				<InfoCard t="Targeted reach" d="Precise pushes by city / campus deliver brand messages straight to target students, undiluted by public-feed algorithms." accent={colors.dark} />
				<InfoCard t="Conversion levers" d="Scan to join → long-term reach → event call-outs → lead capture; a private community you can work again and again." accent={colors.dark} />
			</CardsGrid>
		</Page>
	);
}

export function S29_Coop() {
	return (
		<Page tag="22 · Partnership" title={<>Your <span style={{ color: colors.yellow }}>Bridge</span> Into the Campus Market</>}
			bg={colors.dark} tone="dark" accent={colors.red} align="center">
			<Editorial tone="dark" accent={colors.yellow} size={25}>
				Built on the Class Rep series' deep social-media resources and extensive offline-event experience, we offer a range of partnership opportunities that use our media influence and tight university network to build your brand a bridge into the campus market. Whether through digital content collaboration or hands-on events with close student interaction, our <b style={{ color: colors.yellow }}>diverse partnership models</b> help you effectively reach and engage a young, active target audience.
			</Editorial>
			<CardsGrid cols={2} gap={16} style={{ marginTop: 24 }}>
				<InfoCard t="Content collaboration" d="RED note recommendations · WeChat article pushes · topic / collection campaigns that blend naturally into student life." accent={colors.red} />
				<InfoCard t="Offline events" d="Orientation Festival booths · campus talks · meetups · brand naming rights, engaging students face-to-face." accent={colors.red} />
				<InfoCard t="Direct community reach" d="Targeted private-community pushes · scan to add WeChat and capture leads, with ongoing follow-up after the event." accent={colors.red} />
				<InfoCard t="Campus network" d="A Class Rep KOC matrix · tie-ins with university clubs, using internal campus networks to boost brand presence." accent={colors.red} />
			</CardsGrid>
		</Page>
	);
}
