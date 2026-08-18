import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page } from './_layout';
import { colors, fonts, border, shadow, assetPath } from '../ui';

export function S08_Venue() {
	return (
		<PhotoSlide img="past-events/syd-hall2.jpg">
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '6px 16px', marginBottom: 16, background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
				VENUE · 场地
			</motion.span>
			<h2 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 64, lineHeight: 1.08, letterSpacing: -1 }}>Market Square</h2>
			<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
				style={{ display: 'inline-block', alignSelf: 'flex-start', marginTop: 18, background: colors.white, color: colors.black, border, boxShadow: shadow, padding: '12px 20px', fontWeight: 700, fontSize: 20 }}>
				Market Square · 300+ ㎡ 室内展区
			</motion.span>
		</PhotoSlide>
	);
}

export function S09_FloorPlan() {
	return (
		<Page tag="07 · Floor Plan" title="场地摊位布局概览" accent={colors.blue} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 22, alignItems: 'stretch', minHeight: 0 }}>
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					style={{ border, background: colors.white, boxShadow: shadow, padding: 12, minHeight: 0 }}
				>
					<img
						src={assetPath('brisbane-floor-plan.png')}
						alt="布里斯班新生节场地摊位布局图"
						style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
					/>
				</motion.div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
					{[
						['桌椅配置', '每张 1.5m 桌，配 2 把椅子'],
						['Silver 商家区', '左侧 6 个 · 中间 6 个 · 右侧 6 个'],
						['Gold 赞助商位', '靠近抽奖舞台与主视线区域'],
						['排队动线', '左侧 / 中间 / 右侧三处排队区'],
						['礼品摆放', '礼品直接放在桌上，便于互动领取'],
					].map(([k, v], i) => (
						<motion.div
							key={k}
							initial={{ opacity: 0, x: 24 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
							style={{ border, background: i === 0 ? colors.yellow : colors.white, boxShadow: shadow, padding: '14px 16px' }}
						>
							<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 18, marginBottom: 4 }}>{k}</div>
							<div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, color: '#333' }}>{v}</div>
						</motion.div>
					))}
					<div style={{ marginTop: 'auto', border, background: colors.red, color: colors.white, boxShadow: shadow, padding: '15px 18px', fontSize: 18, fontWeight: 900, lineHeight: 1.35 }}>
						最终摊位位置以现场执行图为准
					</div>
				</div>
			</div>
		</Page>
	);
}
