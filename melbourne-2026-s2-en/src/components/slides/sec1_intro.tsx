import { motion } from 'framer-motion';
import { Page, CardsGrid, FeatureCard, Photo, Editorial } from './_layout';
import { colors, fonts, border, shadow, assetPath } from '../ui';

export function S02_Overview() {
	return (
		<Page tag="01 · OVERVIEW" title="One stage, three universities of first-years">
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '24px 26px' }}>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>Who's coming</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 14 }}>An estimated <b>1,500 attendees</b>, all incoming first-years from Melbourne's three major universities: <b>UniMelb, Monash & RMIT</b>.</p>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>Format</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>A 300+ m² indoor exhibition space where partners run their own branded booths, hand out perks and gifts to first-years, and lock in the season's first cohort of university-student customers.</p>
					</motion.div>
					<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
						{[['📅', 'Sat 8 Aug · 2–5PM'], ['📍', 'Drill Hall · 26 Therry St'], ['🎓', '3 unis · 80% of the market']].map(([k, v]) => (
							<span key={v} style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '10px 16px', fontWeight: 700, fontSize: 16 }}>{k} {v}</span>
						))}
					</div>
				</div>
				<Photo img="past-events/hers-luxe-booth.jpg" caption="Past event · 300+ m² indoor expo" />
			</div>
		</Page>
	);
}

export function S03_Intro() {
	const hl = (t: string) => <b style={{ color: colors.yellow, fontWeight: 800 }}>{t}</b>;
	return (
		<Page tag="02 · ABOUT THE EVENT" title={<>The 6th "Melbourne Three-Uni <span style={{ color: colors.red }}>Orientation Festival</span>"</>}
			bg={colors.dark} tone="dark" accent={colors.yellow} watermark="03" align="center">
			<Editorial tone="dark" accent={colors.red} size={31}>
				Melbourne is one of Australia's most vibrant, multicultural cities, drawing a huge wave of new university students from around the world every year. Built around the idea of {hl('"connecting universities with city resources"')}, this 6th edition focuses on students from the University of Melbourne, Monash and RMIT, with 1,000+ expected on site. It's both an entry point for first-years discovering local life, education and spending options, and an ideal platform for brands to build campus influence — {hl('more exposure, stronger word of mouth, efficient conversion')}.
			</Editorial>
		</Page>
	);
}

export function S04_Purpose() {
	return (
		<Page tag="03 · PURPOSE" title="Why we run this festival" bg={colors.yellow} accent={colors.red} watermark="WHY" align="center">
			<CardsGrid cols={3}>
				<FeatureCard i={0} emoji="🎉" accent={colors.red} title="Welcome first-years" desc="Help new students settle into campus life and the city with practical info and gifts." />
				<FeatureCard i={1} emoji="📣" accent={colors.dark} title="Grow brand influence" desc="Give merchants a stage to showcase their brand and products and build awareness among a young audience." />
				<FeatureCard i={2} emoji="🤝" accent={colors.green} title="Spark connection" desc="Bridge first-years and merchants through interactive activities and gift giveaways that build brand affinity." />
			</CardsGrid>
		</Page>
	);
}

export function S05_Highlights() {
	return (
		<Page tag="04 · WHY STUDENTS COME" title="What makes first-years show up" accent={colors.purple}>
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, x: -34 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/lucky-draw.png')} alt="Orientation festival lucky draw interaction illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.78))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						Gifts, prize draws and games keep students on site
					</figcaption>
				</motion.figure>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
					<FeatureCard i={0} emoji="🎁" accent={colors.yellow} title="Free gifts" desc="A range of free gifts to collect on site — a real draw for the crowd." />
					<FeatureCard i={1} emoji="🎯" accent={colors.blue} title="Interactive games" desc="A variety of fun activities that lift first-year engagement and the on-site atmosphere." />
					<FeatureCard i={2} emoji="🧭" accent={colors.green} title="Practical info" desc="Useful guidance on living and studying in Melbourne to help new students settle in fast." />
				</div>
			</div>
		</Page>
	);
}

export function S06_Merchant() {
	const funnel = [
		['01', 'Pre-event buzz', '14 accounts + three-uni community groups plant the seed early, putting your brand on every first-year\'s arrival checklist.', colors.yellow],
		['02', 'On-site conversion', 'Students arrive together, browse booths, collect gifts and add WeChat by scanning — no street-side intercepting.', colors.red],
		['03', 'Private follow-up', 'After the event, keep reaching people via scan-ins, task records, prize winners and enquiry logs.', colors.green],
	] as const;
	return (
		<Page tag="05 · THE OPPORTUNITY" title="What sponsors get is a conversion pipeline" bg={colors.blue} tone="dark" accent={colors.dark} watermark="$" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/sponsor-booth.png')} alt="Merchant booth interaction illustration" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.82))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						Students come to you — no fighting for foot traffic on the street
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
		['🏠', 'Housing / apartments / moving', 'New to Melbourne, first-years need accommodation, furniture, broadband and insurance in their first 30 days.', colors.red],
		['💳', 'Banking / telco / everyday services', 'Account opening, SIM cards, transport, health cover and daily spending — perfect for perk giveaways in exchange for first leads.', colors.blue],
		['📚', 'Education / careers / migration', 'Students actively ask about course selection, tutoring, internships, visas and career planning — a longer decision cycle.', colors.yellow],
		['🍜', 'Food / retail / beauty', 'Ideal for coupon packs, prize draws and community perks that turn a single visit into repeat business.', colors.green],
	] as const;
	return (
		<Page tag="06 · WHO IT SUITS" title="Which merchants fit the festival best" watermark="FIT" align="center">
			<CardsGrid cols={2} gap={20}>
				{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
			</CardsGrid>
		</Page>
	);
}
