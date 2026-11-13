import { motion } from 'framer-motion';
import { colors, fonts, border, radius, shadow, assetPath } from '../ui';

// 封面 · 活力版：柠檬黄底 + 大字贴纸标题 + 右侧三张往期现场拍立得拼贴 + 彩纸
export default function S01_Cover() {
	const meta = [
		['DATE', 'Sat, Mar. 6th, 2027', colors.red],
		['TIME', '2:00 - 5:00 PM', colors.blue],
		['VENUE', 'Drill Hall, Multicultural Hub\n26 Therry St, Melbourne VIC 3000', colors.green],
	] as const;

	const polaroids = [
		{ img: 'past-events/crowd-stage.jpg', x: 900, y: 92, w: 470, rot: -6, delay: 0.25 },
		{ img: 'past-events/booth-wide.jpg', x: 1110, y: 330, w: 420, rot: 5, delay: 0.4 },
		{ img: 'past-events/checkin-11.jpg', x: 860, y: 480, w: 380, rot: -3, delay: 0.55 },
	];

	const confetti = [
		{ x: 820, y: 70, c: colors.red, kind: 'star', s: 40 },
		{ x: 1530, y: 120, c: colors.purple, kind: 'dot', s: 30 },
		{ x: 1545, y: 640, c: colors.blue, kind: 'tri', s: 38 },
		{ x: 850, y: 860, c: colors.green, kind: 'dot', s: 24 },
		{ x: 50, y: 640, c: colors.purple, kind: 'tri', s: 30 },
	] as const;

	return (
		<div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', background: colors.yellow }}>
			{/* 圆点底纹 + 右侧大珊瑚色圆 */}
			<div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,.12) 1.6px, transparent 2px)', backgroundSize: '28px 28px', opacity: 0.5 }} />
			<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}
				style={{ position: 'absolute', left: 860, top: 40, width: 820, height: 820, borderRadius: '50%', background: colors.red, border }} />
			<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.1 }}
				style={{ position: 'absolute', left: 1330, top: -120, width: 360, height: 360, borderRadius: '50%', background: colors.blue, border }} />

			{/* 彩纸 */}
			<svg width={1600} height={900} viewBox="0 0 1600 900" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 4 }}>
				{confetti.map((p, i) => {
					const t = `translate(${p.x} ${p.y})`;
					if (p.kind === 'dot') return <circle key={i} transform={t} r={p.s / 2} fill={p.c} stroke={colors.black} strokeWidth={3} />;
					if (p.kind === 'tri') return <path key={i} transform={`${t} rotate(18)`} d={`M0 ${-p.s / 2} L${p.s / 2} ${p.s / 2} L${-p.s / 2} ${p.s / 2} Z`} fill={p.c} stroke={colors.black} strokeWidth={3} strokeLinejoin="round" />;
					const s = p.s;
					return <path key={i} transform={t} d={`M0 ${-s / 2} L${s * 0.14} ${-s * 0.14} L${s / 2} 0 L${s * 0.14} ${s * 0.14} L0 ${s / 2} L${-s * 0.14} ${s * 0.14} L${-s / 2} 0 L${-s * 0.14} ${-s * 0.14} Z`} fill={p.c} stroke={colors.black} strokeWidth={3} strokeLinejoin="round" />;
				})}
			</svg>

			{/* 拍立得拼贴 */}
			{polaroids.map((p, i) => (
				<motion.figure key={p.img}
					initial={{ opacity: 0, y: 60, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: p.rot }}
					transition={{ type: 'spring', stiffness: 140, damping: 15, delay: p.delay }}
					style={{ position: 'absolute', left: p.x, top: p.y, width: p.w, margin: 0, padding: '12px 12px 14px', background: colors.white, border, borderRadius: 10, boxShadow: shadow, zIndex: 3 + i }}>
					<div style={{ position: 'absolute', top: -16, left: '50%', marginLeft: -50, width: 100, height: 30, background: 'rgba(255,255,255,.75)', border: '2px solid rgba(0,0,0,.25)', transform: `rotate(${-p.rot - 3}deg)` }} />
					<img src={assetPath(p.img)} alt="往期新生节现场" style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block', borderRadius: 6, border: `2px solid ${colors.black}` }} />
				</motion.figure>
			))}

			<motion.div initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 1, rotate: 4 }} transition={{ delay: 0.8 }}
				style={{ position: 'absolute', left: 1010, top: 790, zIndex: 8, whiteSpace: 'nowrap', background: colors.black, color: colors.yellow, border, borderRadius: 999, padding: '10px 20px', fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, letterSpacing: 1.5, textTransform: 'uppercase' }}>
				Drill Hall · Melbourne CBD · Three Universities
			</motion.div>

			{/* 左侧文字 */}
			<img src={assetPath('jr-logo.svg')} alt="匠人学院" style={{ position: 'absolute', top: 52, left: 90, width: 190, height: 'auto', zIndex: 5 }} />
			<div style={{ position: 'absolute', left: 90, top: 150, width: 720, bottom: 70, zIndex: 6, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
				<motion.div initial={{ opacity: 0, y: -16, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 0.4 }}
					style={{ alignSelf: 'flex-start', padding: '8px 20px', background: colors.dark, color: colors.yellow, border, borderRadius: 999, boxShadow: `4px 4px 0 ${colors.black}`, fontFamily: fonts.mono, fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>
					2027 S1 · 第 7 届新生节 · 商家合作企划
				</motion.div>

				<h1 style={{ margin: 0, fontFamily: fonts.heading, fontWeight: 900, color: colors.black, lineHeight: 1, letterSpacing: -3 }}>
					<motion.span initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ display: 'block', fontSize: 118 }}>
						墨尔本三校
					</motion.span>
					<motion.span
						initial={{ opacity: 0, scale: 0.6, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: -4 }}
						transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.4 }}
						style={{ display: 'inline-block', fontSize: 150, background: colors.red, color: colors.white, padding: '4px 34px 12px', marginTop: 18, border, borderRadius: 28, boxShadow: `10px 10px 0 ${colors.black}` }}>
						新生节
					</motion.span>
				</h1>

				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
					style={{ alignSelf: 'flex-start', display: 'flex', gap: 10, margin: '8px 0 0' }}>
					{['UniMelb', 'Monash', 'RMIT'].map((u, i) => (
						<span key={u} style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 24, background: [colors.blue, colors.green, colors.purple][i], color: colors.black, border, borderRadius: 999, padding: '6px 18px', boxShadow: `4px 4px 0 ${colors.black}`, transform: `rotate(${[-2, 1.5, -1][i]}deg)` }}>{u}</span>
					))}
				</motion.p>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', marginTop: 6 }}>
					{meta.map(([k, v, c], i) => (
						<motion.span key={k} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 + i * 0.08 }}
							style={{ gridColumn: k === 'VENUE' ? '1 / -1' : undefined, background: colors.white, color: colors.black, border, borderRadius: radius, boxShadow: `5px 5px 0 ${c}, 5px 5px 0 3px ${colors.black}`, padding: '12px 16px' }}>
							<span style={{ display: 'block', fontFamily: fonts.mono, color: c === colors.green ? '#14946a' : c, fontSize: 12, fontWeight: 800, letterSpacing: 1.6 }}>{k}</span>
							<span style={{ display: 'block', marginTop: 3, fontWeight: 800, fontSize: 18, whiteSpace: 'pre-line' }}>{v}</span>
						</motion.span>
					))}
				</div>
			</div>
		</div>
	);
}
