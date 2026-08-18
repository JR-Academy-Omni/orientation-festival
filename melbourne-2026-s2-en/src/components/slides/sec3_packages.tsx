import { motion } from 'framer-motion';
import { Page } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

function Tier({
	i,
	name,
	price,
	tone,
	perks,
	hot,
	scale = 1,
}: {
	i: number;
	name: string;
	price: string;
	tone: string;
	perks: readonly string[];
	hot?: boolean;
	scale?: number;
}) {
	return (
		<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
			style={{
				position: 'relative', border, background: hot ? colors.red : colors.white,
				boxShadow: hot ? `10px 10px 0px ${colors.yellow}` : shadow,
				padding: '24px 22px', transform: `scale(${scale})`, zIndex: hot ? 2 : 1,
				minHeight: 290, display: 'flex', flexDirection: 'column',
			}}>
			{hot && <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.yellow, color: colors.black, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, padding: '3px 14px' }}>★ POPULAR</span>}
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
				<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, color: hot ? colors.white : colors.black }}>{name}</div>
				<div style={{ background: tone, color: tone === colors.yellow ? colors.black : colors.white, border, padding: '4px 10px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>PACK</div>
			</div>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: hot ? 58 : 52, color: hot ? colors.yellow : colors.red, letterSpacing: -1, margin: '12px 0 6px' }}>{price}</div>
			<div style={{ fontSize: 14, fontWeight: 800, color: hot ? colors.white : colors.black, marginBottom: 14 }}>+ 1000 Student Gift Packs</div>
			<div style={{ display: 'grid', gap: 8, marginTop: 'auto' }}>
				{perks.map((perk) => (
					<div key={perk} style={{
						background: hot ? colors.white : colors.warmBg,
						color: colors.black, border: `2px solid ${colors.black}`,
						padding: '7px 10px', fontSize: 14, fontWeight: 700, lineHeight: 1.3,
					}}>
						{perk}
					</div>
				))}
			</div>
		</motion.div>
	);
}

export function S10_Packages() {
	const tiers = [
		{ name: 'Silver', price: '$990', tone: colors.blue, perks: ['Core online exposure', 'Booth interaction point', 'Post-event recap assets'] },
		{ name: 'Diamond', price: '$3960', tone: colors.yellow, hot: true, scale: 1.03, perks: ['First pick of booth', 'Host announcement', 'Post-event data report'] },
		{ name: 'Gold', price: '$1980', tone: colors.green, perks: ['Multi-channel warm-up', 'Full brand feature', 'Community reach'] },
	] as const;
	const benefits = [
		'Top banner',
		'Thank-you list + gift feature',
		'Full brand info (logo + poster + blurb)',
		'Booth photos in recap posts / notes',
		'Logo on event poster',
		'Comment @official + pinned thanks',
		'Uni groups & Moments (text + poster w/ logo)',
		'On-site poster placement & flyer handout',
		'QR code to add students on WeChat',
		'Staff-led guidance',
		'Number of banners',
		'Priority pick of high-traffic entrance booth',
		'Priority pick of other booths',
		'Host shout-out & speaking slot',
		'Post-event data report',
	] as const;

	return (
		<Page tag="08 · PACKAGES" title="Partner benefits · Packages" bg={colors.dark} tone="dark" accent={colors.yellow} align="center">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginBottom: 18, alignItems: 'center' }}>
				{tiers.map((tier, i) => <Tier key={tier.name} i={i} {...tier} />)}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: 18 }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 20px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 21, marginBottom: 10 }}>Full benefit checklist</h3>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8 }}>
						{benefits.map((item) => (
							<span key={item} style={{ border: `2px solid ${colors.black}`, background: colors.warmBg, padding: '6px 8px', fontSize: 11.5, fontWeight: 800, lineHeight: 1.25 }}>
								{item}
							</span>
						))}
					</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '13px 16px', fontSize: 14.5, lineHeight: 1.45 }}><b>Channels</b><br />WeChat: UniMelb / Monash / RMIT Course Reps<br />Xiaohongshu: UniMelb / Monash Course Reps<br />Community: on-site promotion</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '13px 16px', fontSize: 14.5, lineHeight: 1.45 }}><b>Reach</b><br />Online 100,000+ ｜ On-site foot traffic 2,000+</div>
					<div style={{ border, background: colors.yellow, boxShadow: shadow, padding: '12px 16px', fontSize: 17, fontWeight: 900 }}>Early Bird · 10% off before 15 July</div>
				</div>
			</div>
		</Page>
	);
}

export function S11_PriceCompare() {
	const metrics = [
		['$2,500/day', 'Standard uni O-week booth', 'Usually covers just one campus; your leads depend on booth position and passing foot traffic.', colors.blue],
		['$35/hr', 'Extra street-team labour', 'A typical crew of 4-10 people adds $560-$1,400 for a 4-hour shift on site.', colors.red],
		['1000+', 'First-years in one place', 'UniMelb + Monash + RMIT students browse booths, scan and enquire in a single indoor setting.', colors.green],
	] as const;
	return (
		<Page tag="09 · ROI" title="One event replaces a single-uni booth + street team" accent={colors.blue} watermark="ROI" align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 22 }}>
				{metrics.map(([num, label, desc, accent], i) => (
					<motion.div key={label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.08 * i }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '22px 20px', minHeight: 208, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 45, lineHeight: 1, color: accent, marginBottom: 12 }}>{num}</div>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 23, marginBottom: 10 }}>{label}</h3>
						<p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 700, color: '#333' }}>{desc}</p>
					</motion.div>
				))}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ border, background: colors.dark, color: colors.white, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>SCHOOL O-WEEK</div>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>The booth fee is just the start — scattered traffic and extra street teams are the real cost</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, color: '#e9ebf4', fontWeight: 700 }}>A typical merchant gets around 400 leads at a school O-week, but still needs 4-10 people to keep intercepting passers-by, so the total cost easily runs above the booth price itself.</p>
				</div>
				<div style={{ border, background: colors.yellow, color: colors.black, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>JR ORIENTATION FESTIVAL</div>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>Students browse every booth in one room, and volunteers drive the traffic to you</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, fontWeight: 800 }}>Partnerships start at $990 with all three universities in one place. Merchants focus on perks, QR codes, enquiries and private-domain follow-up — no need to hire a big street team.</p>
				</div>
			</div>
		</Page>
	);
}

export function S12_Engagement() {
	const mechanics = [
		['Check-in ticket', 'Everyone gets 1 ticket on arrival — checking in drops you straight into the prize pool.', colors.yellow],
		['Team-up bonus', 'Teams of 3 get 2 tickets each, teams of 5 get 3 each — nudging students to sign up with friends.', colors.green],
		['Stamp rally', 'One ticket for every merchant booth scanned, up to 8 booths by default.', colors.blue],
		['Social tasks', 'Screenshots on Xiaohongshu, WeChat Moments and Instagram earn extra tickets once verified.', colors.purple],
	] as const;

	return (
		<Page tag="10 · ON-SITE PLAY" title="Prize tickets drive the on-site flow" accent={colors.purple} watermark="PLAY" align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 24, alignItems: 'stretch', minHeight: 0 }}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: 28, color: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
					<div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, letterSpacing: 2, color: colors.yellow, marginBottom: 18 }}>SPONSOR VALUE</div>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 36, lineHeight: 1.15, marginBottom: 18 }}>Turn students from "just passing by" into "browse, scan, share, come back"</h3>
						<p style={{ fontSize: 20, lineHeight: 1.6, color: '#e9ebf4', fontWeight: 600 }}>
							Every interaction feeds back to one reward unit: the prize ticket. To earn more tickets, students team up, browse booths, scan QR codes and post to social — so you get more even foot traffic and leads worth following up.
						</p>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 24 }}>
						{[['8', 'Default stamp cap'], ['4+', 'Core ways to earn tickets'], ['TOP', 'Leaderboard drives play']].map(([n, label]) => (
							<div key={label} style={{ border, background: colors.white, color: colors.black, padding: '14px 10px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, color: colors.red }}>{n}</div>
								<div style={{ fontSize: 13, fontWeight: 800 }}>{label}</div>
							</div>
						))}
					</div>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
					{mechanics.map(([title, desc, accent], i) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 22 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.08 * i }}
							style={{ border, background: colors.white, boxShadow: shadow, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}
						>
							<div style={{ width: 48, height: 48, border, background: accent, display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 24 }}>{i + 1}</div>
							<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26, color: colors.black }}>{title}</h3>
							<p style={{ fontSize: 17, lineHeight: 1.55, color: '#333', fontWeight: 600 }}>{desc}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div style={{ marginTop: 18, border, background: colors.yellow, boxShadow: shadow, padding: '14px 20px', fontSize: 20, lineHeight: 1.45, fontWeight: 900 }}>
				After the event you get a full read-out — sign-ups, check-ins, scans, social tasks, prize records and merchant leads — so sponsor exposure goes well beyond "just a booth".
			</div>
		</Page>
	);
}
