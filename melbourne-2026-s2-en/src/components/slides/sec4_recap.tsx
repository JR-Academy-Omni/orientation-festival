import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard, Photo, PhotoStrip, GiantStat, GiantRow } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S12_RecapDivider() {
	return (
		<PhotoSlide img="past-events/blockclub-booth.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>RECAP</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				JR Academy Orientation Festival<br /><span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>Highlights from past events</span>
			</h1>
		</PhotoSlide>
	);
}

export function S13_RecapOverview() {
	const items = [
		['🏫', 'Help first-years settle in', 'Campus resources, study tips and living advice help new students find their feet on campus faster.', colors.yellow],
		['💬', 'Spark connection', 'A platform to meet, mingle and make friends — building a sense of belonging.', colors.blue],
		['🧭', 'Study & planning guidance', 'Senior students and advisors share advice on academics, careers and migration planning.', colors.green],
		['🛍️', 'Showcase merchant resources', 'Booths + activities introduce first-years to services; partnership intents secured with multiple providers.', colors.red],
	] as const;
	return (
		<Page tag="11 · OVERVIEW" title="Overview · What we delivered" watermark="01" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

export function S14_Data() {
	const palette = [colors.yellow, colors.red, colors.blue, colors.green, colors.purple, colors.yellow, colors.red, colors.blue];
	const stats = [['90%', 'Registered attendance rate'], ['1000+', 'UniMelb students'], ['600+', 'Monash students'], ['200+', 'RMIT students'], ['22', 'Exhibiting businesses'], ['500+', 'Avg. leads per sponsor'], ['5000+', 'Booth gifts handed out'], ['5000+', 'Prize tickets issued']] as const;
	return (
		<Page tag="12 · EVENT DATA" title="Past event data at a glance" bg={colors.dark} tone="dark" accent={colors.red} watermark="22" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S15_Data2() {
	const stats = [['300+', 'Total prize items drawn'], ['$6000+', 'Total value of prizes'], ['900+', 'Enquiries handled']] as const;
	return (
		<Page tag="12 · EVENT DATA (CONT.)" title="And these results too">
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
					{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} bg={i === 1 ? colors.yellow : colors.white} accent={i === 1 ? colors.black : colors.red} />)}
				</div>
				<PhotoStrip h={170} imgs={[{ img: 'past-events/hers-luxe-booth.jpg', caption: 'Sponsor booth' }, { img: 'past-events/speaker-host.jpg', caption: 'Host on stage' }, { img: 'past-events/venue-queue.jpg', caption: 'Queue at entry' }]} />
			</div>
		</Page>
	);
}

export function S16_Sponsors() {
	const slots = ['BANKING', 'HOUSING', 'EDUCATION', 'LEGAL', 'TRAVEL', 'RETAIL', 'LIFESTYLE'] as const;
	return (
		<Page tag="13 · SPONSORS" title="Sponsors & partners" accent={colors.purple} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
				{slots.map((slot, i) => (
					<div key={slot} style={{
						border, background: colors.white, boxShadow: shadow, height: 112,
						display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
						gap: 7, position: 'relative', overflow: 'hidden',
					}}>
						<span style={{ position: 'absolute', top: 0, left: 0, background: i % 2 ? colors.blue : colors.red, color: colors.white, borderRight: border, borderBottom: border, padding: '4px 8px', fontFamily: fonts.mono, fontSize: 11, fontWeight: 800 }}>
							{String(i + 1).padStart(2, '0')}
						</span>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 23, color: colors.black }}>LOGO SLOT</div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 11, color: colors.purple, letterSpacing: 1.4 }}>{slot}</div>
					</div>
				))}
				<div style={{ border, background: colors.dark, boxShadow: shadow, height: 112, display: 'grid', placeItems: 'center', color: colors.yellow, fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>+14</div>
			</div>
			<div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
				<span style={{ border, background: colors.black, color: colors.yellow, boxShadow: shadow, padding: '12px 18px', fontFamily: fonts.mono, fontWeight: 800 }}>PAST EVENT · 22 EXHIBITORS</span>
				<span style={{ border, background: colors.white, color: colors.black, boxShadow: shadow, padding: '12px 18px', fontWeight: 800 }}>Replace with real sponsor logos before going live</span>
			</div>
		</Page>
	);
}

export function S17_Highlights() {
	const items = [
		['🎡', 'Rich interactive activities', 'A range of booth games with 90% participation; the spin-wheel activity drew a big, lively crowd.', colors.red],
		['💡', 'Q&A session', '4 senior students and migration advisors gave 1-on-1 answers on courses, study, careers and migration.', colors.blue],
		['🙌', 'Volunteer team', 'Student volunteers supported check-in, guidance, Q&A and logistics throughout — widely praised.', colors.green],
		['🎁', 'Prize draws & booths', '50 rounds of draws (electronics / stationery / merch); 18 exhibitor booths.', colors.yellow],
	] as const;
	return (
		<Page tag="14 · HIGHLIGHTS" title="On-site highlights recap" bg={colors.purple} tone="dark" accent={colors.dark} watermark="!" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

function Quote({ i, text, who }: { i: number; text: string; who: string }) {
	return (
		<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
			style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px' }}>
			<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>"{text}"</p>
			<p style={{ marginTop: 8, fontWeight: 800, color: colors.red }}>— {who}</p>
		</motion.div>
	);
}

export function S18_FbAttendee() {
	return (
		<Page tag="15 · FEEDBACK · ATTENDEES" title="What first-years said">
			<div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 16, minHeight: 0 }}>
					<StatCard i={0} n="98%" label="Overall satisfaction (of 600 attendees)" />
					<Photo i={1} img="past-events/checkin-1.jpg" caption="First-year check-in" />
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
					<Quote i={0} text="Picked up so many free gifts and joined the prize draws — the seniors patiently answered everything and left me feeling confident about uni life!" who="Jarrica, UniMelb first-year" />
					<Quote i={1} text="Really well organised, the games were fun and I even won a prize!" who="Ivan, Monash first-year" />
					<Quote i={2} text="Made lots of new friends and really loved the Q&A session." who="Lucy, RMIT first-year" />
				</div>
			</div>
		</Page>
	);
}

export function S19_FbExhibitor() {
	return (
		<Page tag="16 · FEEDBACK · EXHIBITORS" title="What exhibitors said" bg={colors.dark} tone="dark" accent={colors.blue} watermark="98" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 22, alignItems: 'center' }}>
				<StatCard i={0} n="98%" label="Overall exhibitor satisfaction" accent={colors.blue} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 19, lineHeight: 1.6 }}><b>On content:</b> Rich, practical sessions and fun, educational activities — the senior-student Q&A was widely praised.</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 19, lineHeight: 1.6 }}><b>On organisation:</b> Efficient check-in and guidance; a warm, professional volunteer team.</div>
				</div>
			</div>
		</Page>
	);
}

export function S20_FbVolunteer() {
	return (
		<Page tag="17 · FEEDBACK · VOLUNTEERS" title="What volunteers said" bg={colors.green} accent={colors.dark} watermark="♥" align="center">
			<CardsGrid cols={2} gap={20}>
				<Quote i={0} text="Seeing everyone happily join in and grab gifts made all the effort worth it. The cheers at every prize draw showed me how successful the event was." who="Benny" />
				<Quote i={1} text="Helping first-years with their questions and seeing them relaxed and happy made me happy too. This event let me make new friends and feel the power of teamwork." who="Dora" />
			</CardsGrid>
		</Page>
	);
}
