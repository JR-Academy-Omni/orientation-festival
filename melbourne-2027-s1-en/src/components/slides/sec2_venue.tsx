import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page } from './_layout';
import { assetPath, colors, fonts, border, shadow } from '../ui';

export function S08_Venue() {
	return (
		<PhotoSlide img="past-events/hers-luxe-booth.jpg">
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '6px 16px', marginBottom: 16, background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
				VENUE
			</motion.span>
			<h2 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 64, lineHeight: 1.08, letterSpacing: -1 }}>Drill Hall<br />26 Therry Street</h2>
			<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', marginTop: 18, background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '12px 20px', fontWeight: 700, fontSize: 20 }}>
				A comfortable, elegant indoor expo space · 300+ m²
			</motion.span>
		</PhotoSlide>
	);
}

export function S09_FloorPlan() {
	return (
		<Page tag="07 · FLOOR PLAN" title="Melbourne festival booth layout" accent={colors.blue} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 22, alignItems: 'stretch', minHeight: 0 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					{[
						['ENTRY / EXIT', 'Entry and exit on the same side for easy check-in and crowd flow'],
						['QUEUEING AREA', 'A queue zone right past the entrance keeps the booth area clear'],
						['LUCKY DRAW', 'A large prize-draw area on the right concentrates interactive traffic'],
						['POWER ROWS', 'Top and bottom rows can be wired for power — ideal for device demos'],
					].map(([title, desc]) => (
						<div key={title} style={{ border, background: colors.white, boxShadow: shadow, padding: '14px 16px' }}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 20, color: colors.black }}>{title}</div>
							<div style={{ marginTop: 5, fontSize: 14, lineHeight: 1.35, color: '#444', fontWeight: 700 }}>{desc}</div>
						</div>
					))}
					<div style={{ border, background: colors.red, color: colors.white, boxShadow: shadow, padding: '14px 16px', fontSize: 17, fontWeight: 900 }}>Diamond partners get first pick of booth position</div>
				</div>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
					<img
						src={assetPath('melbourne-floor-plan.png')}
						alt="Melbourne orientation festival booth layout"
						style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
					/>
				</div>
			</div>
		</Page>
	);
}
