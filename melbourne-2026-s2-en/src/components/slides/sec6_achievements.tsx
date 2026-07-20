import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S30_AchDivider() {
	return (
		<PhotoSlide img="past-events/speaker-host.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>ACHIEVEMENTS</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				<span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>Past events</span><br />Track record
			</h1>
		</PhotoSlide>
	);
}

export function S31_UniCoop() {
	return (
		<Page tag="23 · UNIVERSITY PARTNERSHIPS" title="Orientation Week partnerships" accent={colors.blue} watermark="O" align="center">
			<CardsGrid cols={2} gap={22}>
				<FeatureCard i={0} emoji="🎓" accent={colors.blue} title="Official O-Week partnerships" desc="Every February and July we partner officially with universities, running booths during O-Week: banners/posters, campus flyer handouts, coupons, gifts, and adding students via QR / new-student groups. Single-uni daily foot traffic tops 10,000+." />
				<FeatureCard i={1} emoji="🤝" accent={colors.green} title="University club partnerships" desc="O-Week is prime time to build early brand goodwill; by partnering with campus clubs, we reach targeted student groups through their signature activities and strengthen your presence via our on-campus network." />
			</CardsGrid>
		</Page>
	);
}

export function S32_BrandAct() {
	return (
		<Page tag="24 · BRAND ACTIVITIES" title="Course Rep brand activities" bg={colors.dark} tone="dark" accent={colors.purple} watermark="200" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 22, alignItems: 'center' }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '26px 28px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Brand activity partnerships</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333', marginBottom: 16 }}>Gift & coupon giveaways · sponsor video showcase · interactive Q&A · speaking slots · WeChat add · downloads & sign-ups on a chosen platform/app.</p>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Custom options</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333' }}>Themed activities · venue styling · collateral & gift design · event naming rights · on-site booth · banners · flyers.</p>
				</div>
				<StatCard i={0} n="200+" label="Events run over 8 years · 100+ avg. attendees each" accent={colors.purple} />
			</div>
		</Page>
	);
}

export function S33_Enterprise() {
	return (
		<Page tag="25 · ENTERPRISE" title="Leading Australian companies" watermark="AU" align="center">
			<CardsGrid cols={2} gap={22}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: '28px 30px', display: 'flex', alignItems: 'center' }}>
					<p style={{ fontSize: 21, lineHeight: 1.7, color: colors.white }}>We partner closely with top Australian companies like <b style={{ color: colors.yellow }}>Atlassian, AWS and Canva</b>, co-hosting career talks, hackathons and more — tapping industry leaders' resources to create extra value for our partners.</p>
				</div>
				<FeatureCard i={1} emoji="🏢" accent={colors.red} title="Enterprise partnership formats" desc="Named-sponsor site visits & learning sessions · named-sponsor career-development talks · named-sponsor-hosted events. Grow together · lift your brand image." />
			</CardsGrid>
		</Page>
	);
}
