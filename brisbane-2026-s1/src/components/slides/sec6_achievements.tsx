import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S30_AchDivider() {
	return (
		<PhotoSlide img="past-events/aws-partner-photo.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>ACHIEVEMENTS</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				<span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>往期活动</span><br />成果展示
			</h1>
		</PhotoSlide>
	);
}

export function S31_UniCoop() {
	return (
		<Page tag="22 · 大学合作" title="Orientation Week 迎新周合作" accent={colors.blue} watermark="O" align="center">
			<CardsGrid cols={2} gap={22}>
				<FeatureCard i={0} emoji="🎓" accent={colors.blue} title="迎新周官方合作" desc="每年 2 月与 7 月与各高校官方合作，新生周提供展位：Banner/海报、校园分发传单、发优惠券、礼物发放、扫码加学生/建新生群。单所大学单日人流量超 1w+。" />
				<FeatureCard i={1} emoji="🤝" accent={colors.green} title="大学社团合作" desc="迎新周是建立学生早期品牌好感度的绝佳时期；通过与各高校社团合作，借社团特色活动精准触达目标学生群体，借校园内部网络增强品牌存在感。" />
			</CardsGrid>
		</Page>
	);
}

export function S32_BrandAct() {
	return (
		<Page tag="23 · 品牌活动" title="课代表系列品牌活动" bg={colors.dark} tone="dark" accent={colors.purple} watermark="200" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 22, alignItems: 'center' }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '26px 28px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>品牌活动合作</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333', marginBottom: 16 }}>发放礼物/优惠券 · 赞助商视频展示 · 内容互动问答 · 发言环节 · 加微信 · 指定平台/APP 下载注册。</p>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 22, marginBottom: 8 }}>定制化</h3>
					<p style={{ fontSize: 18, lineHeight: 1.65, color: '#333' }}>主题活动 · 场地布置 · 物料礼品设计 · 活动冠名 · 现场展位 · Banner · 传单。</p>
				</div>
				<StatCard i={0} n="200+" label="8 年累计举办活动场次 · 单场平均参与 100+" accent={colors.purple} />
			</div>
		</Page>
	);
}

export function S33_Enterprise() {
	return (
		<Page tag="24 · 企业合作" title="澳洲本地领先企业" watermark="AU" align="center">
			<CardsGrid cols={2} gap={22}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: '28px 30px', display: 'flex', alignItems: 'center' }}>
				<p style={{ fontSize: 21, lineHeight: 1.7, color: colors.white }}>积极与 <b style={{ color: colors.yellow }}>AWS、Canva、Atlassian</b> 等澳洲本地企业深度合作，共同策划职业讲座、Hackathon 与校园活动，利用行业资源为合作伙伴创造更多价值。</p>
				</div>
				<FeatureCard i={1} emoji="🏢" accent={colors.red} title="企业合作形式" desc="冠名赞助企业参观与学习活动 · 冠名赞助企业职业发展讲座 · 冠名赞助企业主办的活动。协同发展 · 提升品牌形象。" />
			</CardsGrid>
		</Page>
	);
}
