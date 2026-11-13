import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { Slide, assetPath, colors, fonts, border, radius, shadow, shadowSm } from '../ui';

// 让 accent 在浅色（黄/绿）上自动用黑字，其余用白字
function onAccent(accent: string) {
	return accent === colors.yellow || accent === colors.green ? colors.black : colors.white;
}

// 新生节活力版装饰：按 tag 文本挑一组彩纸（圆点/星星/波浪/三角），右上 + 左下两角散布，每页位置不同
const CONFETTI_COLORS = [colors.red, colors.yellow, colors.blue, colors.green, colors.purple, colors.orange];
function hashStr(s: string) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
	return h;
}
function Confetti({ seed }: { seed: string }) {
	const h = hashStr(seed);
	const c = (k: number) => CONFETTI_COLORS[(h + k) % CONFETTI_COLORS.length];
	const pieces: { x: number; y: number; kind: number; size: number; rot: number }[] = [
		{ x: 1340, y: 90, kind: h % 4, size: 46, rot: 15 },
		{ x: 1460, y: 190, kind: (h >> 2) % 4, size: 34, rot: -20 },
		{ x: 1250, y: 40, kind: (h >> 4) % 4, size: 26, rot: 40 },
		{ x: 60, y: 780, kind: (h >> 6) % 4, size: 40, rot: -10 },
		{ x: 170, y: 840, kind: (h >> 8) % 4, size: 28, rot: 25 },
	];
	return (
		<svg width={1600} height={900} viewBox="0 0 1600 900" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
			{pieces.map((p, i) => {
				const fill = c(i);
				const t = `translate(${p.x} ${p.y}) rotate(${p.rot})`;
				const s = p.size;
				if (p.kind === 0) return <circle key={i} transform={t} r={s / 2} fill={fill} stroke={colors.black} strokeWidth={3} />;
				if (p.kind === 1) return <path key={i} transform={t} d={`M0 ${-s / 2} L${s * 0.14} ${-s * 0.14} L${s / 2} 0 L${s * 0.14} ${s * 0.14} L0 ${s / 2} L${-s * 0.14} ${s * 0.14} L${-s / 2} 0 L${-s * 0.14} ${-s * 0.14} Z`} fill={fill} stroke={colors.black} strokeWidth={3} strokeLinejoin="round" />;
				if (p.kind === 2) return <path key={i} transform={t} d={`M${-s} 0 q${s / 4} ${-s / 3} ${s / 2} 0 t${s / 2} 0 t${s / 2} 0 t${s / 2} 0`} fill="none" stroke={fill} strokeWidth={8} strokeLinecap="round" />;
				return <path key={i} transform={t} d={`M0 ${-s / 2} L${s / 2} ${s / 2} L${-s / 2} ${s / 2} Z`} fill={fill} stroke={colors.black} strokeWidth={3} strokeLinejoin="round" />;
			})}
		</svg>
	);
}

// 标题下的手绘波浪线
function Squiggle({ color }: { color: string }) {
	return (
		<svg width={180} height={18} viewBox="0 0 180 18" style={{ display: 'block', marginTop: 8 }}>
			<path d="M3 11 Q 18 1 33 11 T 63 11 T 93 11 T 123 11 T 153 11 T 177 9" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
		</svg>
	);
}

// 内容页统一外壳：左上「章节 Tag + 大标题」+ 下方内容区（撑满）。
// tone='dark' → 白标题（深底/彩底用）；watermark → 角落巨型半透明数字水印，增强翻页节奏差异；
// align='top' → 内容贴顶不居中（巨数字 / 多卡片页更稳）。
export function Page({ tag, title, accent = colors.red, children, bg = colors.warmBg, tone = 'light', watermark, titleColor, align = 'center' }:
	{ tag: string; title: ReactNode; accent?: string; children: ReactNode; bg?: string; tone?: 'light' | 'dark'; watermark?: string; titleColor?: string; align?: 'center' | 'top' }) {
	const dark = tone === 'dark';
	const tColor = titleColor ?? (dark ? colors.white : colors.black);
	return (
		<Slide bg={bg} style={{ position: 'relative' }}>
			{watermark && (
				<div style={{ position: 'absolute', right: -28, bottom: -90, fontFamily: fonts.heading, fontWeight: 900, fontSize: 460, lineHeight: 0.8, letterSpacing: -16, color: dark ? 'rgba(255,255,255,0.055)' : 'rgba(0,0,0,0.045)', pointerEvents: 'none', userSelect: 'none' }}>{watermark}</div>
			)}
			<Confetti seed={tag} />
			<div style={{ width: '88%', maxWidth: 1420, height: '82%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
				<motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
					<motion.span initial={{ rotate: 0 }} animate={{ rotate: -3 }} transition={{ type: 'spring', stiffness: 260, damping: 10, delay: 0.2 }}
						style={{ display: 'inline-block', padding: '6px 18px', marginBottom: 16, background: accent, color: onAccent(accent), fontFamily: fonts.mono, fontSize: 14, fontWeight: 700, letterSpacing: 2, border, borderRadius: 999, boxShadow: shadowSm }}>{tag}</motion.span>
					<h2 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 52, lineHeight: 1.1, letterSpacing: -1, color: tColor }}>{title}</h2>
					<Squiggle color={accent === colors.dark ? colors.yellow : accent} />
				</motion.div>
				<div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: align === 'top' ? 'flex-start' : 'center', marginTop: 18 }}>
					{children}
				</div>
			</div>
		</Slide>
	);
}

// 巨数字 —— 数字直接打在页面底色上（不套卡），给「数据 POP」页用。
// 文字色用 inherit，由外层容器（GiantRow）决定深/浅底。
export function GiantStat({ i = 0, n, label, color: c = colors.red, sub }:
	{ i?: number; n: string; label: string; color?: string; sub?: string }) {
	return (
		<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 180, damping: 16, delay: 0.07 * i }}
			style={{ display: 'flex', flexDirection: 'column' }}>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 92, lineHeight: 0.95, letterSpacing: -4, color: c, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
			<div style={{ width: 46, height: 5, background: c, margin: '10px 0 8px' }} />
			<div style={{ fontSize: 18, fontWeight: 700, color: 'inherit', lineHeight: 1.35 }}>{label}</div>
			{sub && <div style={{ fontSize: 14, color: 'inherit', opacity: 0.6, marginTop: 2 }}>{sub}</div>}
		</motion.div>
	);
}

// 巨数字行容器 —— 控制深/浅底下的统一文字色
export function GiantRow({ cols, children, tone = 'light', gap = 40 }:
	{ cols: number; children: ReactNode; tone?: 'light' | 'dark'; gap?: number }) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap, alignItems: 'start', color: tone === 'dark' ? colors.white : colors.black }}>
			{children}
		</div>
	);
}

// 编辑型大字声明 —— 替代普通段落卡，给「介绍 / 理念 / 合作」页更大胆的排版。
// 左侧粗 accent 竖条 + 大号 heading 字体段落；tone 控制深/浅底。
export function Editorial({ children, tone = 'light', accent = colors.red, size = 30 }:
	{ children: ReactNode; tone?: 'light' | 'dark'; accent?: string; size?: number }) {
	const dark = tone === 'dark';
	return (
		<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
			style={{ position: 'relative', paddingLeft: 40 }}>
			<div style={{ position: 'absolute', left: 0, top: 4, bottom: 4, width: 10, background: accent }} />
			<p style={{ fontFamily: fonts.heading, fontSize: size, fontWeight: 600, lineHeight: 1.5, letterSpacing: -0.4, color: dark ? '#e9ebf4' : '#222' }}>{children}</p>
		</motion.div>
	);
}

// 卡片网格
export function CardsGrid({ cols, gap = 22, children, style }:
	{ cols: number; gap?: number; children: ReactNode; style?: CSSProperties }) {
	return <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap, alignItems: 'stretch', ...style }}>{children}</div>;
}

// neo-brutalism 框图：黑边 + 硬阴影 + 现场照（左下可挂黑黄 caption 标签）
export function Photo({ img, caption, i = 0, style }:
	{ img: string; caption?: string; i?: number; style?: CSSProperties }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.08 * i }}
			style={{ position: 'relative', border, borderRadius: radius, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0, ...style }}>
			<img src={assetPath(img)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
			{caption && <span style={{ position: 'absolute', left: 0, bottom: 0, background: colors.black, color: colors.yellow, fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, padding: '5px 12px', letterSpacing: 1 }}>{caption}</span>}
		</motion.div>
	);
}

// 装饰图片条（一排小框图）
export function PhotoStrip({ imgs, h = 160 }: { imgs: { img: string; caption?: string }[]; h?: number }) {
	return (
		<div style={{ display: 'grid', gridTemplateColumns: `repeat(${imgs.length},1fr)`, gap: 14, height: h }}>
			{imgs.map((p, i) => <Photo key={i} i={i} img={p.img} caption={p.caption} />)}
		</div>
	);
}

// 功能卡（图标 emoji + 标题 + 描述）
export function FeatureCard({ i = 0, emoji, title, desc, accent = colors.red }:
	{ i?: number; emoji?: string; title: string; desc: string; accent?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24, rotate: 0 }} animate={{ opacity: 1, y: 0, rotate: i % 2 ? 0.8 : -0.8 }} transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 + i * 0.1 }}
			style={{ border, borderRadius: radius, background: colors.white, boxShadow: `6px 6px 0 ${accent}, 6px 6px 0 3px ${colors.black}`, padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
			{emoji && <div style={{ width: 58, height: 58, display: 'grid', placeItems: 'center', fontSize: 28, background: accent, border, borderRadius: '50%', marginBottom: 6 }}>{emoji}</div>}
			<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 24, color: colors.black }}>{title}</h3>
			<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', fontWeight: 500 }}>{desc}</p>
		</motion.div>
	);
}

// 数据卡（大数字 + 标签）
export function StatCard({ i = 0, n, label, accent = colors.red, bg = colors.white }:
	{ i?: number; n: string; label: string; accent?: string; bg?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85, rotate: 0 }} animate={{ opacity: 1, scale: 1, rotate: i % 2 ? 1 : -1 }}
			transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.08 * i }}
			style={{ border, borderRadius: radius, background: bg, boxShadow: shadowSm, padding: '24px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: 8 }}>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 52, lineHeight: 1, letterSpacing: -2, color: accent, fontVariantNumeric: 'tabular-nums' }}>{n}</div>
			<div style={{ fontSize: 15, fontWeight: 600, color: '#555', lineHeight: 1.4 }}>{label}</div>
		</motion.div>
	);
}

// 简单表格（neo-brutalism）
export function KvTable({ head, rows }: { head: string[]; rows: string[][] }) {
	return (
		<div style={{ border, borderRadius: radius, boxShadow: shadow, background: colors.white, overflow: 'hidden' }}>
			<div style={{ display: 'grid', gridTemplateColumns: `repeat(${head.length},1fr)`, background: colors.dark }}>
				{head.map((h) => <div key={h} style={{ padding: '14px 18px', color: colors.white, fontWeight: 800, fontFamily: fonts.heading, fontSize: 18 }}>{h}</div>)}
			</div>
			{rows.map((r, ri) => (
				<div key={ri} style={{ display: 'grid', gridTemplateColumns: `repeat(${head.length},1fr)`, background: ri % 2 ? '#fff6ef' : colors.white, borderTop: border }}>
					{r.map((c, ci) => <div key={ci} style={{ padding: '13px 18px', fontSize: 17, fontWeight: ci === 0 ? 700 : 500, color: ci === 0 ? colors.black : '#333' }}>{c}</div>)}
				</div>
			))}
		</div>
	);
}
