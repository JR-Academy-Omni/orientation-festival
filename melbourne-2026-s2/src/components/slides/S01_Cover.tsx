import { motion } from 'framer-motion';
import { colors, fonts, border, shadow, assetPath } from '../ui';

export default function S01_Cover() {
	const meta = [
		['DATE', 'Aug. 7th, 2026'],
		['TIME', '2:00 - 5:00 PM'],
		['VENUE', 'Drill Hall, 26 Therry Street'],
	] as const;

	return (
		<div style={{
			width: '100%',
			height: '100%',
			position: 'relative',
			overflow: 'hidden',
			background:
				`linear-gradient(135deg, ${colors.dark} 0%, #173069 52%, ${colors.blue} 100%)`,
		}}>
			<img
				src={assetPath('logo-zh-white.png')}
				alt="匠人学院"
				style={{ position: 'absolute', top: 52, left: 72, width: 170, height: 'auto', zIndex: 5 }}
			/>
			<div style={{
				position: 'absolute',
				inset: 0,
				backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1.2px, transparent 1.8px)',
				backgroundSize: '26px 26px',
				opacity: 0.32,
				pointerEvents: 'none',
				zIndex: 1,
			}} />
			<motion.figure
				initial={{ opacity: 0, x: -70, scale: 1.04 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				style={{
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					width: '50%',
					margin: 0,
					overflow: 'hidden',
					zIndex: 2,
					borderRight: border,
					boxShadow: '18px 0 0 rgba(0,0,0,.16)',
					background: colors.dark,
				}}
			>
				<img
					src={assetPath('illustrations/melbourne-city-hero.png')}
					alt="墨尔本三校新生节欢迎插画"
					style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
				/>
				<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,22,47,.05) 42%, rgba(16,22,47,.82) 100%)' }} />
				<figcaption style={{
					position: 'absolute',
					left: 34,
					right: 34,
					bottom: 30,
					color: colors.white,
					fontFamily: fonts.mono,
					fontWeight: 800,
					fontSize: 16,
					letterSpacing: 1.5,
					textTransform: 'uppercase',
					textShadow: '0 3px 16px rgba(0,0,0,.45)',
				}}>
					Drill Hall · Melbourne CBD · Three Universities
				</figcaption>
			</motion.figure>
			<div style={{
				position: 'absolute',
				left: '54%',
				right: 72,
				top: 126,
				bottom: 72,
				zIndex: 3,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 14,
			}}>
			<motion.div
				initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{
					display: 'inline-block', alignSelf: 'flex-start', padding: '8px 18px',
					background: colors.black, color: colors.yellow, border,
					fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 2,
				}}>
				2026 S2 · 第 6 届新生节 · 商家合作企划
			</motion.div>

			<h1 style={{ margin: 0, fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 92, lineHeight: 1.02, letterSpacing: -2, maxWidth: 620 }}>
				<motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ display: 'block' }}>
					墨尔本三校
				</motion.span>
				<motion.span
					initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.4, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
					style={{ display: 'inline-block', background: colors.red, color: colors.white, padding: '0 22px', marginTop: 14, border, boxShadow: shadow }}>
					新生节
				</motion.span>
			</h1>

			<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: fonts.heading, fontWeight: 900, color: colors.black, background: colors.white, border, boxShadow: shadow, padding: '8px 16px', fontSize: 25, margin: 0, letterSpacing: 0 }}>
				UniMelb · Monash · RMIT
			</motion.p>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10, maxWidth: 520, width: '100%' }}>
				{meta.map(([k, v]) => (
					<span key={k} style={{ background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '11px 16px' }}>
						<span style={{ display: 'block', fontFamily: fonts.mono, color: colors.red, fontSize: 12, fontWeight: 800, letterSpacing: 1.6 }}>{k}</span>
						<span style={{ display: 'block', marginTop: 3, fontWeight: 800, fontSize: 19 }}>{v}</span>
					</span>
				))}
			</div>
			</div>
		</div>
	);
}
