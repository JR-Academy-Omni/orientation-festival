import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { colors, fonts, border, shadow } from '../ui';

export default function S34_Contact() {
	return (
		<PhotoSlide img="past-events/consulting-table.jpg">
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 800, fontSize: 15, letterSpacing: 2.4, padding: '8px 18px', marginBottom: 18 }}>
				NEXT STEP
			</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 76, lineHeight: 1.07, letterSpacing: -1, marginBottom: 16, maxWidth: 1120 }}>
				一起把品牌放进<br /><span style={{ display: 'inline-block', marginTop: 8, background: colors.red, color: colors.white, padding: '0 20px', border, boxShadow: shadow }}>新生第一周</span>
			</h1>
			<p style={{ fontSize: 25, fontWeight: 800, color: colors.white, marginBottom: 26 }}>我们为您和您的品牌提供定制化合作方案</p>
			<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
				style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignSelf: 'flex-start', background: colors.white, border, boxShadow: shadow, minWidth: 800 }}>
				<div style={{ padding: '24px 28px', borderRight: border }}>
					<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 12, color: colors.red, letterSpacing: 1.6 }}>CONTACT</div>
					<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, color: colors.black, marginTop: 6 }}>Angela HAN</div>
				</div>
				<div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
					<div style={{ fontSize: 22, fontWeight: 800, color: colors.black }}>+61 452263727</div>
					<div style={{ fontSize: 20, fontWeight: 700, color: colors.dark }}>angela727hl@gmail.com</div>
				</div>
			</motion.div>
		</PhotoSlide>
	);
}
