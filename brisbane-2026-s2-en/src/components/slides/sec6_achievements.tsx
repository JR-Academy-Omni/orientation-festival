import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard, Photo } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S30_RecapPhotos1() {
	return (
		<Page tag="Past Events" title="Past Events On-Site (1)" accent={colors.red} watermark="01" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
				<Photo i={0} img="past-events/venue-queue.jpg" caption="On-site queue" />
				<Photo i={1} img="past-events/syd-checkin2.jpg" caption="Packed house" />
				<Photo i={2} img="past-events/syd-checkin8.jpg" caption="Check-in lineup" />
				<Photo i={3} img="past-events/syd-checkin13.jpg" caption="Crowded booths" />
			</div>
		</Page>
	);
}

export function S30_RecapPhotos2() {
	return (
		<Page tag="Past Events" title="Past Events On-Site (2)" accent={colors.red} watermark="02" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 14, flex: 1, minHeight: 0 }}>
				<Photo i={0} img="past-events/booth-wide.jpg" caption="Busy exhibitor booths" />
				<Photo i={1} img="past-events/syd-hall3.jpg" caption="Full house" />
				<Photo i={2} img="past-events/mel-checkin11.jpg" caption="Students engaging on-site" />
				<Photo i={3} img="past-events/mel-checkin6.jpg" caption="On-site enquiries" />
			</div>
		</Page>
	);
}

export function S30_AchDivider() {
	return (
		<PhotoSlide img="past-events/crowd-stage.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>ACHIEVEMENTS</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				<span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>Track Record</span><br />& Achievements
			</h1>
		</PhotoSlide>
	);
}

export function S31_UniCoop() {
	return (
		<Page tag="23 · University Partnership" title="Orientation Week Partnerships" accent={colors.blue} watermark="O" align="center">
			<CardsGrid cols={2} gap={22}>
				<FeatureCard i={0} emoji="🎓" accent={colors.blue} title="Official O-Week Partnership" desc="Every February and July we partner officially with universities during O-Week, with a booth for banners/posters, campus flyer distribution, coupon and gift giveaways, and QR sign-ups to add students / build new-student groups. Over 10,000 foot traffic per campus per day." />
				<FeatureCard i={1} emoji="🤝" accent={colors.green} title="University Club Partnerships" desc="O-Week is the prime time to build early brand affinity with students. Partnering with campus clubs lets us reach target student groups precisely through their signature activities and strengthen brand presence via internal campus networks." />
			</CardsGrid>
		</Page>
	);
}

export function S32_BrandAct() {
	return (
		<Page tag="24 · Brand Events" title="Class Rep Brand Event Series" bg={colors.dark} tone="dark" accent={colors.purple} watermark="200" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 22, alignItems: 'center' }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '26px 28px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Brand Event Partnership</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333', marginBottom: 16 }}>Gift/coupon giveaways · sponsor video showcase · interactive Q&A · speaking slot · WeChat add · downloads/sign-ups on a designated platform/app.</p>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>Customization</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333' }}>Themed events · venue setup · collateral & gift design · event naming sponsorship · on-site booth · banner · flyers.</p>
				</div>
				<StatCard i={0} n="200+" label="Events held over 9 years · 100+ average attendance per event" accent={colors.purple} />
			</div>
		</Page>
	);
}

export function S33_Enterprise() {
	return (
		<Page tag="25 · Enterprise Partnership" title="Leading Local Australian Enterprises" watermark="AU" align="center">
			<CardsGrid cols={2} gap={22}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: '28px 30px', display: 'flex', alignItems: 'center' }}>
				<p style={{ fontSize: 21, lineHeight: 1.7, color: colors.white }}>We actively partner deeply with local Australian enterprises such as <b style={{ color: colors.yellow }}>AWS, Canva, and Atlassian</b>, co-hosting career talks, Hackathons, and campus events, and leveraging industry resources to create more value for our partners.</p>
				</div>
				<FeatureCard i={1} emoji="🏢" accent={colors.red} title="Enterprise Partnership Formats" desc="Naming sponsorship of company visits & learning events · naming sponsorship of career development talks · naming sponsorship of enterprise-hosted events. Grow together · elevate your brand image." />
			</CardsGrid>
		</Page>
	);
}
