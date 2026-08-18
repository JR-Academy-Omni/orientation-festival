import type { ReactNode, CSSProperties } from 'react';
import { assetPath } from '../ui';
import { colors, fonts, border, shadow } from '../ui';

// 满铺现场照背景 + 暗渐变叠加（白字）。内容靠底部或居中。
export default function PhotoSlide({
	img,
	children,
	center,
	style,
}: { img: string; children: ReactNode; center?: boolean; style?: CSSProperties }) {
	return (
		<div style={{
			width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
			backgroundImage: `linear-gradient(90deg, rgba(16,22,47,.86) 0%, rgba(16,22,47,.58) 42%, rgba(16,22,47,.16) 100%), linear-gradient(180deg, rgba(16,22,47,.08) 0%, rgba(16,22,47,.36) 45%, rgba(16,22,47,.9) 100%), url(${assetPath(img)})`,
			backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
		}}>
			<img
				src={assetPath('logo-zh-white.png')}
				alt="匠人学院"
				style={{ position: 'absolute', top: 52, left: 72, width: 170, height: 'auto', zIndex: 2 }}
			/>
			<div style={{
				position: 'absolute', right: 78, top: 58, zIndex: 2,
				display: 'flex', alignItems: 'center', gap: 10,
				background: colors.white, color: colors.black, border, boxShadow: shadow,
				padding: '10px 16px', fontFamily: fonts.mono, fontSize: 14, fontWeight: 800, letterSpacing: 1.2,
			}}>
				<span style={{ width: 10, height: 10, background: colors.red, border: `2px solid ${colors.black}` }} />
				BRISBANE 2026 S2
			</div>
			<div style={{
				position: 'absolute', inset: 0, padding: '0 110px',
				display: 'flex', flexDirection: 'column',
				justifyContent: center ? 'center' : 'flex-end',
				paddingBottom: center ? 0 : 116,
				...(center ? { alignItems: 'center', textAlign: 'center' } : {}),
				...style,
			}}>
				{children}
			</div>
		</div>
	);
}
