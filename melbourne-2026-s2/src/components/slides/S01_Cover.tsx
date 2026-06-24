import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { colors, fonts, border, shadow, assetPath } from '../ui';

export default function S01_Cover() {
	const meta = [
		['DATE', 'Aug. 7th, 2026'],
		['TIME', '2:00 - 5:00 PM'],
		['VENUE', 'Drill Hall, 26 Therry Street'],
	] as const;

	return (
		<PhotoSlide img="past-events/venue-queue.jpg">
			<motion.img
				src={assetPath('melbourne-sticker.svg')}
				alt="2026 S2 墨尔本三校 UniMelb Monash RMIT 三校新生节"
				initial={{ opacity: 0, rotate: -8, scale: 0.86, y: 20 }}
				animate={{ opacity: 1, rotate: -5, scale: 1, y: 0 }}
				transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
				style={{
					position: 'absolute',
					right: 78,
					top: 154,
					width: 500,
					height: 'auto',
					zIndex: 0,
					pointerEvents: 'none',
				}}
			/>
			<motion.div
				initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{
					display: 'inline-block', alignSelf: 'flex-start', padding: '8px 18px', marginBottom: 22,
					background: colors.black, color: colors.yellow, border,
					fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 2,
				}}>
				2026 S2 · 第 6 届新生节 · 商家合作企划
			</motion.div>

			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 112, lineHeight: 1.02, letterSpacing: -2, maxWidth: 820 }}>
				<motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ display: 'block' }}>
					墨尔本三校
				</motion.span>
				<motion.span
					initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
					style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 26px', marginTop: 16, border, boxShadow: shadow }}>
					新生节
				</motion.span>
			</h1>

			<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
				style={{ fontFamily: fonts.heading, fontWeight: 800, color: colors.white, fontSize: 32, marginTop: 22, letterSpacing: 0 }}>
				UniMelb · Monash · RMIT
			</motion.p>

			<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}
				style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', gap: 14, marginTop: 30 }}>
				{meta.map(([k, v]) => (
					<span key={k} style={{ background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '13px 18px', minWidth: k === 'VENUE' ? 390 : 170 }}>
						<span style={{ display: 'block', fontFamily: fonts.mono, color: colors.red, fontSize: 12, fontWeight: 800, letterSpacing: 1.6 }}>{k}</span>
						<span style={{ display: 'block', marginTop: 3, fontWeight: 800, fontSize: 20 }}>{v}</span>
					</span>
				))}
			</motion.div>
		</PhotoSlide>
	);
}
