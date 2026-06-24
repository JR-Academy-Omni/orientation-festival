import { Children, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, assetPath } from './ui';
import CameraBubble from './CameraBubble';

const DESIGN_WIDTH = 1600;
const DESIGN_HEIGHT = 900;
const PDF_FILE = 'brisbane-2026-s2.pdf';

interface SlideEngineProps {
	children: ReactNode[];
}

function useSlideScale() {
	const [scale, setScale] = useState(() => {
		if (typeof window === 'undefined') return 1;
		return Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT);
	});
	useEffect(() => {
		const update = () => {
			setScale(Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT));
		};
		update();
		window.addEventListener('resize', update);
		window.addEventListener('orientationchange', update);
		return () => {
			window.removeEventListener('resize', update);
			window.removeEventListener('orientationchange', update);
		};
	}, []);
	return scale;
}

function readPageFromUrl(total: number): number {
	if (typeof window === 'undefined') return 0;
	const params = new URLSearchParams(window.location.search);
	const raw = Number(params.get('page'));
	if (!Number.isFinite(raw) || raw < 1) return 0;
	return Math.min(Math.max(0, Math.floor(raw) - 1), total - 1);
}

function pdfHref(): string {
	if (typeof window === 'undefined') return `../pdf-output/${PDF_FILE}`;
	const path = window.location.pathname;
	return path.includes('/dist/') || path.endsWith('/dist')
		? `../../pdf-output/${PDF_FILE}`
		: `../pdf-output/${PDF_FILE}`;
}

export default function SlideEngine({ children }: SlideEngineProps) {
	const slides = Children.toArray(children);
	const total = slides.length;
	const [current, setCurrent] = useState(() => readPageFromUrl(total));
	const isAnimating = useRef(false);
	const touchStart = useRef({ x: 0, y: 0 });
	const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
	const scale = useSlideScale();

	const go = useCallback((index: number) => {
		if (isAnimating.current || index < 0 || index >= total || index === current) return;
		isAnimating.current = true;
		setCurrent(index);
		setTimeout(() => { isAnimating.current = false; }, 500);
	}, [current, total]);

	const next = useCallback(() => go(current + 1), [go, current]);
	const prev = useCallback(() => go(current - 1), [go, current]);
	const exportPdf = useCallback(() => {
		window.open(pdfHref(), '_blank', 'noopener');
	}, []);

	useEffect(() => {
		const url = new URL(window.location.href);
		url.searchParams.set('page', String(current + 1));
		window.history.replaceState({ page: current + 1 }, '', url.toString());
	}, [current]);

	useEffect(() => {
		const onPop = () => setCurrent(readPageFromUrl(total));
		window.addEventListener('popstate', onPop);
		return () => window.removeEventListener('popstate', onPop);
	}, [total]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
			else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
			else if (e.key === 'f' || e.key === 'F') {
				if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
				else document.exitFullscreen().catch(() => {});
			}
			else if (e.key === 'p' || e.key === 'P') {
				e.preventDefault();
				exportPdf();
			}
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [next, prev, exportPdf]);

	useEffect(() => {
		const onStart = (e: TouchEvent) => { touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; };
		const onEnd = (e: TouchEvent) => {
			const dx = e.changedTouches[0].clientX - touchStart.current.x;
			const dy = e.changedTouches[0].clientY - touchStart.current.y;
			if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
		};
		window.addEventListener('touchstart', onStart, { passive: true });
		window.addEventListener('touchend', onEnd, { passive: true });
		return () => { window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd); };
	}, [next, prev]);

	useEffect(() => {
		const handler = (e: WheelEvent) => {
			if (wheelTimer.current) return;
			wheelTimer.current = setTimeout(() => { wheelTimer.current = null; }, 700);
			if (e.deltaX > 30 || e.deltaY > 30) next();
			else if (e.deltaX < -30 || e.deltaY < -30) prev();
		};
		window.addEventListener('wheel', handler, { passive: true });
		return () => window.removeEventListener('wheel', handler);
	}, [next, prev]);

	const pad = (n: number) => String(n).padStart(2, '0');

	return (
		<div className="deck-root" style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
			<style>{`
				.print-deck { display: none; }
				@media print {
					@page { size: 16in 9in; margin: 0; }
					html, body, #root {
						width: 1600px;
						height: auto;
						margin: 0;
						background: #fff !important;
						overflow: visible !important;
					}
					.screen-deck { display: none !important; }
					.deck-root {
						width: 1600px !important;
						height: auto !important;
						position: static !important;
						overflow: visible !important;
					}
					.print-deck {
						display: block !important;
						width: 1600px;
						background: #fff;
					}
					.print-slide {
						width: 1600px;
						height: 900px;
						position: relative;
						overflow: hidden;
						page-break-after: always;
						break-after: page;
					}
					.print-slide:last-child {
						page-break-after: auto;
						break-after: auto;
					}
				}
			`}</style>
			<div className="print-deck">
				{slides.map((child, i) => (
					<div className="print-slide" key={i}>
						{child}
					</div>
				))}
			</div>
			<div className="screen-deck" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
			{/* 演讲者摄像头圆圈（按 C 开关 · 录播露脸用） */}
			<CameraBubble />
			<a
				href={pdfHref()}
				target="_blank"
				rel="noreferrer"
				title="打开 PDF（P）"
				style={{
					position: 'fixed', top: 18, right: 150, zIndex: 1000,
					border: `3px solid ${colors.black}`,
					background: colors.yellow,
					color: colors.black,
					textDecoration: 'none',
					boxShadow: '4px 4px 0px #000',
					fontFamily: '"Space Mono", monospace',
					fontSize: 13,
					fontWeight: 800,
					padding: '10px 14px',
					cursor: 'pointer',
				}}
			>
				PDF
			</a>
			<div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: 4, background: 'rgba(255,255,255,0.1)', zIndex: 1000 }}>
				<motion.div animate={{ width: `${((current + 1) / total) * 100}%` }} transition={{ duration: 0.3 }} style={{ height: '100%', background: colors.indigo }} />
			</div>
			<div style={{
				position: 'fixed', bottom: 24, right: 32, fontFamily: '"Space Mono", monospace',
				fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.5)', zIndex: 1000, letterSpacing: 2,
				mixBlendMode: 'difference',
			}}>
				{pad(current + 1)} / {pad(total)}
			</div>
			<div style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 1000 }}>
				{slides.map((_, i) => (
					<button key={i} onClick={() => go(i)} style={{
						width: i === current ? 28 : 10, height: 10, borderRadius: 5, border: 'none',
						background: i === current ? colors.indigo : 'rgba(255,255,255,0.3)',
						cursor: 'pointer', transition: 'all 0.2s',
					}} />
				))}
			</div>
			<NavArrow direction="prev" onClick={prev} disabled={current === 0} />
			<NavArrow direction="next" onClick={next} disabled={current === total - 1} />
			<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
				<div style={{
					width: DESIGN_WIDTH,
					height: DESIGN_HEIGHT,
					position: 'relative',
					overflow: 'hidden',
					flexShrink: 0,
					transform: `scale(${scale})`,
					transformOrigin: 'center center',
				}}>
					{/* 固定品牌 logo · 跟 slide 一起 scale · 半透明不抢内容 */}
					<div style={{
						position: 'absolute', top: 18, right: 22, zIndex: 50,
						display: 'flex', alignItems: 'center',
						pointerEvents: 'none', opacity: 0.86,
						background: 'rgba(16,22,47,0.86)',
						border: `2px solid ${colors.black}`,
						padding: '7px 12px',
					}}>
						<img
							src={assetPath('logo-zh-white.png')}
							alt="匠人学院"
							style={{ height: 32, width: 'auto', display: 'block' }}
						/>
					</div>
					<AnimatePresence mode="wait">
						<motion.div
							key={current}
							initial={{ opacity: 0, x: 80 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -80 }}
							transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
							style={{ width: '100%', height: '100%' }}
						>
							{slides[current]}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
			</div>
		</div>
	);
}

function NavArrow({ direction, onClick, disabled }: { direction: 'prev' | 'next'; onClick: () => void; disabled: boolean }) {
	const [hover, setHover] = useState(false);
	return (
		<button
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				position: 'fixed', top: '50%',
				[direction === 'prev' ? 'left' : 'right']: 16,
				transform: `translateY(-50%) ${hover ? 'translate(3px,3px)' : ''}`,
				width: 52, height: 52,
				border: `3px solid ${colors.black}`,
				background: colors.white,
				fontSize: 22, fontWeight: 700, cursor: 'pointer',
				zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
				boxShadow: hover ? 'none' : '4px 4px 0px #000',
				opacity: disabled ? 0.3 : 1,
				transition: 'all 0.15s',
			}}
		>
			{direction === 'prev' ? '←' : '→'}
		</button>
	);
}
