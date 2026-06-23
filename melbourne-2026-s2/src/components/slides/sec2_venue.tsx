import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page } from './_layout';
import { assetPath, colors, fonts, border, shadow } from '../ui';

export function S08_Venue() {
	return (
		<PhotoSlide img="past-events/hers-luxe-booth.jpg">
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '6px 16px', marginBottom: 16, background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
				VENUE · 场地
			</motion.span>
			<h2 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 64, lineHeight: 1.08, letterSpacing: -1 }}>Ground Floor<br />33 Exhibition Street</h2>
			<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', marginTop: 18, background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '12px 20px', fontWeight: 700, fontSize: 20 }}>
				舒适优雅室内展区 · 300+ ㎡
			</motion.span>
		</PhotoSlide>
	);
}

export function S09_FloorPlan() {
	return (
		<Page tag="07 · Floor Plan" title="墨尔本新生节展位布局" accent={colors.blue} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 22, alignItems: 'stretch', minHeight: 0 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					{[
						['ENTRY / EXIT', '入口与出口同侧，方便集中签到和分流'],
						['QUEUEING AREA', '入口后设置排队区，避免摊位区拥堵'],
						['LUCKY DRAW', '右侧大面积抽奖区，集中承接互动流量'],
						['POWER ROWS', '上下两排可安排电源，适合设备展示'],
					].map(([title, desc]) => (
						<div key={title} style={{ border, background: colors.white, boxShadow: shadow, padding: '14px 16px' }}>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 20, color: colors.black }}>{title}</div>
							<div style={{ marginTop: 5, fontSize: 14, lineHeight: 1.35, color: '#444', fontWeight: 700 }}>{desc}</div>
						</div>
					))}
					<div style={{ border, background: colors.red, color: colors.white, boxShadow: shadow, padding: '14px 16px', fontSize: 17, fontWeight: 900 }}>Diamond 合作方可优先选择摊位位置</div>
				</div>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
					<img
						src={assetPath('melbourne-floor-plan.png')}
						alt="墨尔本新生节展位布局图"
						style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
					/>
				</div>
			</div>
		</Page>
	);
}
