import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

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
	const seat = (x: number, y: number, c: string) => <rect key={`${x}-${y}`} x={x} y={y} width={46} height={24} rx={2} fill={c} stroke="#000" strokeWidth={2} />;
	return (
		<Page tag="07 · Floor Plan" title="场地摊位布局概览" accent={colors.blue}>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 28, alignItems: 'center' }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
					{['📏 每张桌子尺寸：1.8m × 0.8m', '🪑 每张桌子配 3 把椅子'].map((t) => (
						<div key={t} style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 20, fontWeight: 600 }}>{t}</div>
					))}
					<div style={{ border, background: colors.red, color: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 20, fontWeight: 800 }}>Diamond 合作方可优先选择摊位位置</div>
				</div>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: 18 }}>
					<svg viewBox="0 0 400 270" style={{ width: '100%', height: 'auto' }} fontFamily="DM Sans, sans-serif">
						<rect x={8} y={8} width={384} height={254} rx={4} fill="#fff" stroke="#000" strokeWidth={3} />
						<rect x={118} y={18} width={164} height={26} rx={2} fill={colors.dark} />
						<text x={200} y={36} textAnchor="middle" fontSize={13} fill="#fff" fontWeight={700}>舞台 / 主持区</text>
						{[28, 88, 148, 208, 268, 328].map((x) => seat(x, 66, '#fff'))}
						{[28, 88, 268, 328].map((x) => seat(x, 124, '#fff'))}
						{[28, 88, 268, 328].map((x) => seat(x, 182, '#fff'))}
						{seat(150, 150, colors.red)}{seat(206, 150, colors.red)}
						<text x={200} y={166} textAnchor="middle" fontSize={10} fill="#fff" fontWeight={700}>Diamond 优先</text>
						<text x={200} y={250} textAnchor="middle" fontSize={12} fill="#000" fontWeight={700}>↑ 入口 Entrance</text>
					</svg>
				</div>
			</div>
		</Page>
	);
}
