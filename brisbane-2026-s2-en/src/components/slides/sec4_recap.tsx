import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard, Photo, PhotoStrip, GiantStat, GiantRow } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S12_RecapDivider() {
	return (
		<PhotoSlide img="past-events/jr-coke.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>RECAP</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				Brisbane Tri-Campus Orientation<br /><span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>Event Highlights</span>
			</h1>
		</PhotoSlide>
	);
}

export function S13_RecapOverview() {
	const items = [
		['🏫', 'Help students settle in', 'Campus resources, study tips and life advice to help new students adapt to uni faster.', colors.yellow],
		['💬', 'Connect new students', 'A platform to meet, connect and build friendships, strengthening a sense of belonging.', colors.blue],
		['🧭', 'Study & planning guidance', 'Senior students and advisors offer guidance on academics, careers and migration planning.', colors.green],
		['🛍️', 'Showcase partner resources', 'Booths + interactive sessions introduce resources to students; partnerships formed with many organisations.', colors.red],
	] as const;
	return (
		<Page tag="11 · Overview" title="Overview · What We Did" watermark="01" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

export function S14_Data() {
	const palette = [colors.yellow, colors.red, colors.blue, colors.green, colors.purple, colors.yellow, colors.red, colors.blue];
	const stats = [['90%', 'Registration turnout'], ['600+', 'UQ students'], ['200+', 'QUT students'], ['200+', 'Griffith students'], ['18', 'Exhibitors'], ['600+', 'Avg. leads per sponsor'], ['5000+', 'Booth gifts handed out'], ['5000+', 'Lucky draw tickets']] as const;
	return (
		<Page tag="12 · Event Data" title="Past Event Data at a Glance" bg={colors.dark} tone="dark" accent={colors.red} watermark="22" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S15_Data2() {
	const stats = [['100+', 'Lucky draw prizes'], ['$6000+', 'Total prize value'], ['600+', 'Consultations handled']] as const;
	return (
		<Page tag="12 · Event Data (cont.)" title="More of What We Achieved">
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
					{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} bg={i === 1 ? colors.yellow : colors.white} accent={i === 1 ? colors.black : colors.red} />)}
				</div>
				<PhotoStrip h={170} imgs={[{ img: 'past-events/goodlife-booth.jpg', caption: 'Sponsor booth' }, { img: 'past-events/jr-brochures.jpg', caption: 'Brand collateral' }, { img: 'past-events/bupa-gifts.jpg', caption: 'Gifts & giveaways' }]} />
			</div>
		</Page>
	);
}

export function S16_Sponsors() {
	const slots = ['BANKING', 'HOUSING', 'EDUCATION', 'LEGAL', 'TRAVEL', 'RETAIL', 'LIFESTYLE'] as const;
	return (
		<Page tag="13 · Sponsors" title="Sponsors & Partners" accent={colors.purple} align="top">
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
				<span style={{ border, background: colors.black, color: colors.yellow, boxShadow: shadow, padding: '12px 18px', fontFamily: fonts.mono, fontWeight: 800 }}>PAST EVENT · 18 EXHIBITORS</span>
				<span style={{ border, background: colors.white, color: colors.black, boxShadow: shadow, padding: '12px 18px', fontWeight: 800 }}>Replace with real sponsor logos before launch</span>
			</div>
		</Page>
	);
}

export function S17_Highlights() {
	const items = [
		['🎡', 'Rich interactive activities', 'Multiple booth games with a 90% participation rate; the spin-wheel drew lively crowds.', colors.red],
		['💡', 'Q&A sessions', '6 senior students and advisors gave one-on-one guidance on courses, study, careers and migration.', colors.blue],
		['🙌', 'Volunteer team', 'Student volunteers supported check-in, wayfinding, Q&A and logistics throughout, and were widely praised.', colors.green],
		['🎁', 'Lucky draw & booths', '9 rounds of lucky draws with 100+ prizes; 18 exhibitor booths.', colors.yellow],
	] as const;
	return (
		<Page tag="14 · Highlights" title="Highlights from the Day" bg={colors.purple} tone="dark" accent={colors.dark} watermark="!" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

function Quote({ i, text, who }: { i: number; text: string; who: string }) {
	return (
		<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
			style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px' }}>
			<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>“{text}”</p>
			<p style={{ marginTop: 8, fontWeight: 800, color: colors.red }}>—— {who}</p>
		</motion.div>
	);
}

export function S18_FbAttendee() {
	return (
		<Page tag="15 · Feedback · Attendees" title="What New Students Say">
			<div style={{ display: 'grid', gridTemplateColumns: '0.78fr 1.22fr', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr', gap: 14, minHeight: 0 }}>
					<StatCard i={0} n="98%" label="Overall satisfaction (600 attendees)" />
					<StatCard i={1} n="600+" label="Students joined activities & Q&A" accent={colors.purple} />
					<Photo i={2} img="past-events/audience-session.jpg" caption="Student talk in session" />
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignContent: 'center', minHeight: 0 }}>
					<Quote i={0} text="I got tons of free gifts and joined the lucky draw. The seniors patiently answered everything and gave me real confidence for uni life!" who="UQ student · Jarrica" />
					<Quote i={1} text="The event was well organised, the games were fun, and I even won a prize!" who="QUT student · Ivan" />
					<Quote i={2} text="I made lots of new friends and really loved the Q&A session." who="Griffith student · Lucy" />
					<Quote i={3} text="New to Brisbane and knowing no one, I picked up practical tips on housing, bank cards and course selection, and saved myself a lot of trouble." who="UQ student · Cindy" />
					<Quote i={4} text="An advisor helped me map out job hunting and visa planning after graduation, and I felt far more at ease." who="QUT student · Marcus" />
					<Quote i={5} text="I scanned to add a senior on WeChat and joined the new-student group, so there's always someone to help during O-week." who="Griffith student · Yuki" />
				</div>
			</div>
		</Page>
	);
}

export function S19_FbExhibitor() {
	return (
		<Page tag="16 · Feedback · Exhibitors" title="What Exhibitors Say" bg={colors.dark} tone="dark" accent={colors.blue} watermark="98" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.72fr 1.28fr', gap: 22, alignItems: 'center' }}>
				<StatCard i={0} n="98%" label="Overall exhibitor satisfaction" accent={colors.blue} />
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
					<Quote i={0} text="Three campuses in one venue meant more valid student WeChat contacts in half a day than a full day at a single-campus O-week." who="Financial services exhibitor" />
					<Quote i={1} text="Steady foot traffic, and the lucky draw and demos kept passing students at our booth, giving concentrated brand exposure." who="Telecom brand exhibitor" />
					<Quote i={2} text="Staff proactively helped with guiding and communication, so everything ran smoothly and we could focus on engaging students." who="Local food & beverage exhibitor" />
					<Quote i={3} text="Scanning for WeChat built up a batch of precise student leads we can keep following up after the event — great value." who="Education services exhibitor" />
				</div>
			</div>
		</Page>
	);
}

export function S20_FbVolunteer() {
	return (
		<Page tag="17 · Feedback · Volunteers" title="What Volunteers Say" bg={colors.green} accent={colors.dark} watermark="♥" align="center">
			<CardsGrid cols={2} gap={16}>
				<Quote i={0} text="Seeing students enjoy themselves and collect gifts made all the effort worth it. The cheers at every draw showed me the event was a success." who="Benny" />
				<Quote i={1} text="Helping new students with their questions and seeing them happy made me happy too. I made many new friends and felt the power of teamwork." who="Dora" />
				<Quote i={2} text="It was my first time running check-in. I learned how to calm nervous students and became more confident reaching out to people." who="Ariel" />
				<Quote i={3} text="Running the whole event with the team, our coordination kept improving, and by the end everyone felt a real sense of achievement." who="Kevin" />
				<Quote i={4} text="Answering students' questions, I realised I actually knew a lot, and that feeling of being needed was really special." who="Mia" />
				<Quote i={5} text="Warming up the crowd for the lucky draw and watching the energy lift instantly — in that moment it was all worth it." who="Tom" />
			</CardsGrid>
		</Page>
	);
}
