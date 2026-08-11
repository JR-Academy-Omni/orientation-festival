import { motion } from 'framer-motion';
import { Page, CardsGrid, FeatureCard, Photo, Editorial } from './_layout';
import { colors, fonts, border, shadow, assetPath } from '../ui';

export function S02_Overview() {
	return (
		<Page tag="01 · Overview" title="Your brand's home stage to reach three universities' new students">
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '24px 26px' }}>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>Who attends</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 14 }}>An expected <b>1,000 attendees</b>, new students from Brisbane's three major universities: <b>UQ, QUT, Griffith</b>.</p>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>Format</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>300+ ㎡ indoor expo area. Partners get a branded booth to hand out perks and gifts to new students and win the first batch of student customers.</p>
					</motion.div>
					<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
					{[['📅', 'Fri 21 Aug · 2–5PM'], ['📍', 'Market Square'], ['🎓', 'UQ · QUT · Griffith']].map(([k, v]) => (
							<span key={v} style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '10px 16px', fontWeight: 700, fontSize: 16 }}>{k} {v}</span>
						))}
					</div>
				</div>
				<Photo img="past-events/syd-checkin3.jpg" caption="Past event · 300+㎡ indoor expo area" />
			</div>
		</Page>
	);
}

export function S03_Intro() {
	const hl = (t: string) => <b style={{ color: colors.yellow, fontWeight: 800 }}>{t}</b>;
	return (
		<Page tag="02 · About" title={<>The 6th Brisbane <span style={{ color: colors.red }}>Orientation Festival</span></>}
			bg={colors.dark} tone="dark" accent={colors.yellow} watermark="03" align="center">
			<Editorial tone="dark" accent={colors.red} size={31}>
				The Brisbane Orientation Festival focuses on UQ, QUT and Griffith new students, bringing students, city living resources and local brands together in one place at the start of term. An expected <b style={{ color: colors.yellow }}>1,000 students</b> attend, with indoor booths, gift giveaways, lucky draws and face-to-face Q&A. For brands, it's a concentrated window to build awareness, capture leads and grow a private community right as students arrive in the city—{hl('exposure, engagement and conversion in one event')}.
			</Editorial>
		</Page>
	);
}

export function S04_Purpose() {
	return (
		<Page tag="03 · Purpose" title="Why we run this Orientation Festival" bg={colors.yellow} accent={colors.red} watermark="WHY" align="center">
			<CardsGrid cols={3}>
				<FeatureCard i={0} emoji="🎉" accent={colors.red} title="Welcome new students" desc="Help new students settle into campus and city life with useful info and gifts." />
				<FeatureCard i={1} emoji="📣" accent={colors.dark} title="Grow brand reach" desc="Give merchants a stage to showcase their brand and products to a young audience." />
				<FeatureCard i={2} emoji="🤝" accent={colors.green} title="Spark connection" desc="Bridge new students and merchants, building brand affinity through engagement and gifts." />
			</CardsGrid>
		</Page>
	);
}

export function S05_Highlights() {
	return (
		<Page tag="04 · Student Draw" title="Why new students want to come" accent={colors.purple}>
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, x: -34 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/lucky-draw.png')} alt="Orientation Festival lucky draw illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.78))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						Gifts, lucky draws and games keep students on site
					</figcaption>
				</motion.figure>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
					<FeatureCard i={0} emoji="🎁" accent={colors.yellow} title="Free gifts" desc="Free giveaways on site that draw students in." />
					<FeatureCard i={1} emoji="🎯" accent={colors.blue} title="Interactive games" desc="Fun activities that boost participation and on-site energy." />
					<FeatureCard i={2} emoji="🧭" accent={colors.green} title="Useful info" desc="Info on Brisbane living, study and campus resources to help new students settle in fast." />
				</div>
			</div>
		</Page>
	);
}

export function S06_Merchant() {
	const funnel = [
		['01', 'Pre-event exposure', 'Warm up UQ / QUT / Griffith communities and channels early, putting your brand on the new-student checklist.', colors.yellow],
		['02', 'On-site conversion', 'Students arrive, browse booths, grab gifts and scan to add WeChat—no street-side flagging down.', colors.red],
		['03', 'Private-community follow-up', 'Keep reaching out after the event via scan, task, prize and enquiry records.', colors.green],
	] as const;
	return (
		<Page tag="05 · Merchant Opportunity" title="Sponsors get a full conversion funnel" bg={colors.blue} tone="dark" accent={colors.dark} watermark="$" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/sponsor-booth.png')} alt="Merchant booth engagement illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.82))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						Students come to you—no scrambling for foot traffic on the street
					</figcaption>
				</motion.figure>
				<div style={{ display: 'grid', gap: 14, alignContent: 'center' }}>
					{funnel.map(([step, title, desc, accent], i) => (
						<motion.div key={title} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.08 * i }}
							style={{ border, background: colors.white, color: colors.black, boxShadow: shadow, padding: '18px 20px', display: 'grid', gridTemplateColumns: '86px 1fr', gap: 18, alignItems: 'center' }}>
							<div style={{ border, background: accent, height: 74, display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>{step}</div>
							<div>
								<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 27, marginBottom: 6 }}>{title}</h3>
								<p style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 700, color: '#333' }}>{desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Page>
	);
}

export function S07_WhyUs() {
	const items = [
		['🏠', 'Rentals / Apartments / Moving', 'New to Brisbane, students need housing, furniture, broadband and insurance in their first 30 days.', colors.red],
		['💳', 'Banking / Telco / Everyday services', 'Accounts, SIM cards, transport, health cover and daily spend—perfect for perks-for-leads on site.', colors.blue],
		['📚', 'Education / Careers / Migration', 'Students actively ask about courses, tutoring, internships, visas and career plans, with longer decision cycles.', colors.yellow],
		['🍜', 'Dining / Retail / Beauty', 'Great for voucher packs, lucky draws and community perks that turn one visit into repeat business.', colors.green],
	] as const;
	return (
		<Page tag="06 · Best Fit" title="Which merchants fit the Orientation Festival best" watermark="FIT" align="center">
			<CardsGrid cols={2} gap={20}>
				{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
			</CardsGrid>
		</Page>
	);
}
