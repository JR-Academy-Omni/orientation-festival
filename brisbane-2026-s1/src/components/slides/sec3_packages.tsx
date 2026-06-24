import { motion } from 'framer-motion';
import { Page } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

function Tier({
	i,
	name,
	price,
	tone,
	perks,
	hot,
	scale = 1,
}: {
	i: number;
	name: string;
	price: string;
	tone: string;
	perks: readonly string[];
	hot?: boolean;
	scale?: number;
}) {
	return (
		<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
			style={{
				position: 'relative', border, background: hot ? colors.red : colors.white,
				boxShadow: hot ? `10px 10px 0px ${colors.yellow}` : shadow,
				padding: '18px 20px', transform: `scale(${scale})`, zIndex: hot ? 2 : 1,
				minHeight: 250, display: 'flex', flexDirection: 'column',
			}}>
			{hot && <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.yellow, color: colors.black, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, padding: '3px 14px' }}>★ 热门</span>}
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
				<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 27, color: hot ? colors.white : colors.black }}>{name}</div>
				<div style={{ background: tone, color: tone === colors.yellow ? colors.black : colors.white, border, padding: '4px 10px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>PACK</div>
			</div>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: hot ? 50 : 46, color: hot ? colors.yellow : colors.red, letterSpacing: -1, margin: '8px 0 4px' }}>{price}</div>
			<div style={{ fontSize: 12.5, fontWeight: 800, color: hot ? colors.white : colors.black, marginBottom: 8 }}>+ 800 Student Gift Packs</div>
			<div style={{ display: 'grid', gap: 7, marginTop: 'auto' }}>
				{perks.map((perk) => (
					<div key={perk} style={{
						background: hot ? colors.white : colors.warmBg,
						color: colors.black, border: `2px solid ${colors.black}`,
						padding: '6px 9px', fontSize: 12.5, fontWeight: 700, lineHeight: 1.2,
					}}>
						{perk}
					</div>
				))}
			</div>
		</motion.div>
	);
}

export function S10_Packages() {
	const tiers = [
		{ name: 'Silver', price: '$880', tone: colors.blue, perks: ['基础线上露出', '展位互动入口', '活动后回顾素材'] },
		{ name: 'Diamond', price: '$2970', tone: colors.yellow, hot: true, scale: 1.05, perks: ['优先选择展位', '主持人口播', '活动后数据反馈'] },
		{ name: 'Gold', price: '$1980', tone: colors.green, perks: ['多渠道预热', '品牌详细介绍', '社群触达'] },
	] as const;
	const benefits = [
		'顶部 Banner',
		'鸣谢 List + 礼品介绍',
		'品牌详细信息（logo + 海报 + 一段话）',
		'活动回顾推文 + 笔记内摊位照片曝光',
		'海报放 logo',
		'评论区 @官号 + 置顶感谢',
		'大学群 & 朋友圈（文字 + 海报带 logo）',
		'线下海报张贴 & 传单地推',
		'二维码加学生微信',
		'工作人员引导',
		'Banner 数量',
		'入口处高人流量展位优先选择权',
		'其他展位优先选择权',
		'主持人口播发言',
		'活动后数据反馈',
	] as const;

	return (
		<Page tag="08 · 合作套餐" title="合作伙伴权益 · 套餐" bg={colors.dark} tone="dark" accent={colors.yellow} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 12, alignItems: 'center' }}>
				{tiers.map((tier, i) => <Tier key={tier.name} i={i} {...tier} />)}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1.45fr 0.55fr', gap: 14 }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '12px 14px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 17, marginBottom: 7 }}>完整权益维度</h3>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 5 }}>
						{benefits.map((item) => (
							<span key={item} style={{ border: `2px solid ${colors.black}`, background: colors.warmBg, padding: '4px 6px', fontSize: 10.2, fontWeight: 800, lineHeight: 1.14 }}>
								{item}
							</span>
						))}
					</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'center' }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>公众号</b><br />UQ 课代表 / QUT 课代表 / 社群推送</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>小红书 & 社群</b><br />UQ 课代表 / QUT 课代表 / 线下宣传</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.3 }}><b>曝光</b><br />线上 100,000+ ｜ 线下人流量 2,000+</div>
					<div style={{ border, background: colors.yellow, boxShadow: shadow, padding: '8px 12px', fontSize: 14, fontWeight: 900 }}>Early Bird · 6 月 1 日前 10% off</div>
				</div>
			</div>
		</Page>
	);
}

export function S11_PriceCompare() {
	const metrics = [
		['$2,500/day', '学校 O-week 标准摊位', '通常只覆盖单一大学；位置和路过人流决定实际获客。', colors.blue],
		['$35/hr', '额外地推人力成本', '常见配置 4-10 人，4 小时现场就会多出 $560-$1,400。', colors.red],
		['1000+', '新生集中到场', 'UQ + QUT + Griffith 三校学生在一个室内场景里完成逛摊、扫码、咨询。', colors.green],
	] as const;
	return (
		<Page tag="09 · ROI 对比" title="用一场活动替代单校摊位 + 地推" accent={colors.blue} watermark="ROI" align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginBottom: 22 }}>
				{metrics.map(([num, label, desc, accent], i) => (
					<motion.div key={label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38, delay: 0.08 * i }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '22px 20px', minHeight: 208, display: 'flex', flexDirection: 'column' }}>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 45, lineHeight: 1, color: accent, marginBottom: 12 }}>{num}</div>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 23, marginBottom: 10 }}>{label}</h3>
						<p style={{ fontSize: 16, lineHeight: 1.45, fontWeight: 700, color: '#333' }}>{desc}</p>
					</motion.div>
				))}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ border, background: colors.dark, color: colors.white, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontFamily: fonts.mono, color: colors.yellow, fontWeight: 900, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>SCHOOL O-WEEK</div>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>摊位费只是开始，真正贵的是分散人流和额外地推</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, color: '#e9ebf4', fontWeight: 700 }}>一般商家在学校 O-week 能拿到约 400 个 leads，但还要靠 4-10 名地推持续拦截，整体成本很容易超过摊位报价本身。</p>
				</div>
				<div style={{ border, background: colors.yellow, color: colors.black, boxShadow: shadow, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
					<div style={{ fontFamily: fonts.mono, color: colors.red, fontWeight: 900, letterSpacing: 2, fontSize: 14, marginBottom: 14 }}>JR ORIENTATION FESTIVAL</div>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, lineHeight: 1.12, marginBottom: 16 }}>学生在一个房间里逛完展位，志愿者帮你把人流导进来</h3>
					<p style={{ fontSize: 19, lineHeight: 1.55, fontWeight: 800 }}>合作从 $880 起，三校学生集中到场；商家重点做福利、二维码、咨询和后续私域转化，不需要再雇大批地推。</p>
				</div>
			</div>
		</Page>
	);
}

export function S12_Engagement() {
	const mechanics = [
		['签到基础券', '到场先拿 1 张券，现场签到直接进入抽奖池', colors.yellow],
		['组队奖励', '3 人队每人 2 张，5 人队每人 3 张，带动同学结伴报名', colors.green],
		['集章打卡', '每扫一个商家展位给 1 张券，默认最多 8 个展位', colors.blue],
		['社交任务', '小红书、朋友圈、Instagram 截图审核，通过后加券', colors.purple],
	] as const;

	return (
		<Page tag="10 · 现场玩法" title="抽奖券驱动现场动线" accent={colors.purple} watermark="PLAY" align="top">
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 24, alignItems: 'stretch', minHeight: 0 }}>
				<div style={{ border, background: colors.dark, boxShadow: shadow, padding: 28, color: colors.white, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
					<div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 14, letterSpacing: 2, color: colors.yellow, marginBottom: 18 }}>SPONSOR VALUE</div>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 36, lineHeight: 1.15, marginBottom: 18 }}>把学生从“路过”变成“逛展、扫码、分享、复访”</h3>
						<p style={{ fontSize: 20, lineHeight: 1.6, color: '#e9ebf4', fontWeight: 600 }}>
							每个互动都回到同一个奖励单位：抽奖券。学生为了多拿券，会主动组队、逛摊、扫码、发社交平台内容；商家拿到的是更均匀的人流和可跟进线索。
						</p>
					</div>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginTop: 24 }}>
						{[['8', '默认集章上限'], ['4+', '核心拿券路径'], ['TOP', '排行榜刺激参与']].map(([n, label]) => (
							<div key={label} style={{ border, background: colors.white, color: colors.black, padding: '14px 10px', textAlign: 'center' }}>
								<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 34, color: colors.red }}>{n}</div>
								<div style={{ fontSize: 13, fontWeight: 800 }}>{label}</div>
							</div>
						))}
					</div>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
					{mechanics.map(([title, desc, accent], i) => (
						<motion.div
							key={title}
							initial={{ opacity: 0, y: 22 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.38, delay: 0.08 * i }}
							style={{ border, background: colors.white, boxShadow: shadow, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}
						>
							<div style={{ width: 48, height: 48, border, background: accent, display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 24 }}>{i + 1}</div>
							<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 26, color: colors.black }}>{title}</h3>
							<p style={{ fontSize: 17, lineHeight: 1.55, color: '#333', fontWeight: 600 }}>{desc}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div style={{ marginTop: 18, border, background: colors.yellow, boxShadow: shadow, padding: '14px 20px', fontSize: 20, lineHeight: 1.45, fontWeight: 900 }}>
				活动后可按报名、签到、扫码、社交任务、中奖记录和商家线索做复盘，赞助曝光不只停留在“摆摊露出”。
			</div>
		</Page>
	);
}
