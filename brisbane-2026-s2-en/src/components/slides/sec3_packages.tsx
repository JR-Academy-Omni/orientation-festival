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
				padding: '18px 20px', transform: `scale(${scale})`, zIndex: hot ? 2 : 1,
				minHeight: 250, display: 'flex', flexDirection: 'column',
			}}>
			{hot && <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.yellow, color: colors.black, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, padding: '3px 14px' }}>★ Popular</span>}
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
				<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 27, color: hot ? colors.white : colors.black }}>{name}</div>
				<div style={{ background: tone, color: tone === colors.yellow ? colors.black : colors.white, border, padding: '4px 10px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>PACK</div>
			</div>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: hot ? 50 : 46, color: hot ? colors.yellow : colors.red, letterSpacing: -1, margin: '8px 0 4px' }}>{price}</div>
			<div style={{ fontSize: 12.5, fontWeight: 800, color: hot ? colors.white : colors.black, marginBottom: 8 }}>+ 800 Student Gift Packs</div>
			<div style={{ display: 'grid', gap: 7, marginTop: 'auto' }}>
				{perks.map((perk) => (
					<div key={perk} style={{
						background: hot ? colors.white : colors.warmBg,
						color: colors.black, border: `2px solid ${colors.black}`,
						padding: '6px 9px', fontSize: 12.5, fontWeight: 700, lineHeight: 1.2,
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
		{ name: 'Silver', price: '$880', tone: colors.blue, perks: ['Basic online exposure', 'Booth interaction entry', 'Post-event recap assets'] },
		{ name: 'Diamond', price: '$2970', tone: colors.yellow, hot: true, scale: 1.05, perks: ['Priority booth choice', 'Host shout-out', 'Post-event data report'] },
		{ name: 'Gold', price: '$1980', tone: colors.green, perks: ['Multi-channel promo', 'Detailed brand intro', 'Community reach'] },
	] as const;
	const benefits = [
		'Top banner',
		'Credits list + gift intro',
		'Brand details (logo + poster + blurb)',
		'Recap post + booth photos in notes',
		'Logo on poster',
		'@official in comments + pinned thanks',
		'Uni groups & Moments (text + logo poster)',
		'On-site posters & flyer street promo',
		'QR code to add students on WeChat',
		'Staff guidance',
		'Banner count',
		'Priority pick of high-traffic entry booth',
		'Priority pick of other booths',
		'Host shout-out speech',
		'Post-event data report',
	] as const;

	return (
		<Page tag="08 · Packages" title="Partner Benefits · Packages" bg={colors.dark} tone="dark" accent={colors.yellow} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 12, alignItems: 'center' }}>
				{tiers.map((tier, i) => <Tier key={tier.name} i={i} {...tier} />)}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1.45fr 0.55fr', gap: 14 }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '12px 14px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 17, marginBottom: 7 }}>Full benefit breakdown</h3>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 5 }}>
						{benefits.map((item) => (
							<span key={item} style={{ border: `2px solid ${colors.black}`, background: colors.warmBg, padding: '4px 6px', fontSize: 10.2, fontWeight: 800, lineHeight: 1.14 }}>
								{item}
							</span>
						))}
					</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'center' }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>WeChat Official</b><br />UQ Class Rep / QUT Class Rep / community push</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>RED & Community</b><br />UQ Class Rep / QUT Class Rep / on-site promo</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>Exposure</b><br />Online 100,000+ | On-site foot traffic 2,000+</div>
				</div>
			</div>
		</Page>
	);
}

export function S11_PriceCompare() {
	const metrics = [
		['$2,500/day', 'Standard O-week campus booth', 'Usually one uni only; leads depend on spot and passing traffic.', colors.blue],
		['$35/hr', 'Extra street-promo labor', 'Typically 4-10 staff; 4 hours on-site adds $560-$1,400.', colors.red],
		['1000+', 'New students all in one place', 'UQ + QUT + Griffith students browse, scan and enquire in one indoor venue.', colors.green],
	] as const;
	return (
		<Page tag="09 · ROI Compare" title="Replace single-campus booths + street promo with one event" accent={colors.blue} watermark="ROI" align="top">
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
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>The booth fee is just the start; scattered traffic and extra street promo cost more</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, color: '#e9ebf4', fontWeight: 700 }}>A typical merchant gets about 400 leads at campus O-week, but still needs 4-10 promoters to keep intercepting, so total cost easily exceeds the booth fee itself.</p>
				</div>
				<div style={{ border, background: colors.yellow, color: colors.black, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>JR ORIENTATION FESTIVAL</div>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>Students browse every booth in one room while volunteers drive traffic to you</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, fontWeight: 800 }}>Partnerships from $880, with students from three unis on-site; focus on gifts, QR codes, enquiries and private-community conversion, no big street-promo team needed.</p>
				</div>
			</div>
		</Page>
	);
}

export function S12_Engagement() {
	const mechanics = [
		['Check-in base ticket', 'Get 1 ticket on arrival; check-in enters the draw pool', colors.yellow],
		['Team-up bonus', 'Team of 3: 2 each; team of 5: 3 each, driving group sign-ups', colors.green],
		['Stamp rally', '1 ticket per booth scanned, up to 8 booths by default', colors.blue],
		['Social task', 'RED, Moments and Instagram screenshots reviewed, tickets added once approved', colors.purple],
	] as const;

	return (
		<Page tag="10 · On-site Play" title="Raffle tickets drive foot-traffic flow" accent={colors.purple} watermark="PLAY" align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 24, alignItems: 'stretch', minHeight: 0 }}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: 28, color: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
					<div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, letterSpacing: 2, color: colors.yellow, marginBottom: 18 }}>SPONSOR VALUE</div>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 36, lineHeight: 1.15, marginBottom: 18 }}>Turn students from "passing by" into "browse, scan, share, revisit"</h3>
						<p style={{ fontSize: 20, lineHeight: 1.6, color: '#e9ebf4', fontWeight: 600 }}>
							Every interaction ties back to one reward: raffle tickets. To earn more, students team up, browse booths, scan codes and post on social; merchants get more even foot traffic and follow-up leads.
						</p>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 24 }}>
						{[['8', 'Default stamp cap'], ['4+', 'Core ticket paths'], ['TOP', 'Leaderboard drives play']].map(([n, label]) => (
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
				After the event, review by sign-ups, check-ins, scans, social tasks, winners and merchant leads, so sponsor exposure goes beyond just "having a booth".
			</div>
		</Page>
	);
}
