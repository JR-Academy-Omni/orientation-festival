import { motion } from 'framer-motion';
import { Page, KvTable } from './_layout';
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
				padding: '24px 24px', transform: `scale(${scale})`, zIndex: hot ? 2 : 1,
				minHeight: 286, display: 'flex', flexDirection: 'column',
			}}>
			{hot && <span style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.yellow, color: colors.black, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 13, padding: '3px 14px' }}>★ 热门</span>}
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
				<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 30, color: hot ? colors.white : colors.black }}>{name}</div>
				<div style={{ background: tone, color: tone === colors.yellow ? colors.black : colors.white, border, padding: '4px 10px', fontFamily: fonts.mono, fontSize: 12, fontWeight: 800 }}>PACK</div>
			</div>
			<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: hot ? 58 : 52, color: hot ? colors.yellow : colors.red, letterSpacing: -2, margin: '12px 0 6px' }}>{price}</div>
			<div style={{ fontSize: 14, fontWeight: 800, color: hot ? colors.white : colors.black, marginBottom: 12 }}>+ 800 Student Gift Packs</div>
			<div style={{ display: 'grid', gap: 10, marginTop: 'auto' }}>
				{perks.map((perk) => (
					<div key={perk} style={{
						background: hot ? colors.white : colors.warmBg,
						color: colors.black, border: `2px solid ${colors.black}`,
						padding: '8px 10px', fontSize: 14, fontWeight: 700, lineHeight: 1.25,
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
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 16, alignItems: 'center' }}>
				{tiers.map((tier, i) => <Tier key={tier.name} i={i} {...tier} />)}
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: 18 }}>
				<div style={{ border, background: colors.white, boxShadow: shadow, padding: '14px 18px' }}>
					<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 19, marginBottom: 8 }}>完整权益维度</h3>
					<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 7 }}>
						{benefits.map((item) => (
							<span key={item} style={{ border: `2px solid ${colors.black}`, background: colors.warmBg, padding: '5px 8px', fontSize: 11.5, fontWeight: 800, lineHeight: 1.18 }}>
								{item}
							</span>
						))}
					</div>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 9, justifyContent: 'center' }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '10px 16px', fontSize: 14, lineHeight: 1.35 }}><b>公众号</b><br />UQ 课代表 / QUT 课代表 / 社群推送</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '10px 16px', fontSize: 14, lineHeight: 1.35 }}><b>小红书 & 社群</b><br />UQ 课代表 / QUT 课代表 / 线下宣传</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '10px 16px', fontSize: 14, lineHeight: 1.35 }}><b>曝光</b><br />线上 100,000+ ｜ 线下人流量 2,000+</div>
					<div style={{ border, background: colors.yellow, boxShadow: shadow, padding: '10px 16px', fontSize: 16, fontWeight: 900 }}>Early Bird · 6 月 1 日前 10% off</div>
				</div>
			</div>
		</Page>
	);
}

export function S11_PriceCompare() {
	return (
		<Page tag="09 · 价格对比" title="对比单一大学学生社团摊位" accent={colors.blue} watermark="VS" align="center">
			<KvTable
				head={['对比项', '匠人学院三校新生节', '单一大学社团']}
				rows={[
					['覆盖高校', 'UQ + QUT + Griffith（三校）', '单一大学'],
					['预宣传', '14 账号 / 10 万+粉 / 至少 3 次', '有限'],
					['触达新生', '1000 人面对面', '受单校客流限制'],
					['私域转化', '扫码加微信 + 社群沉淀', '—'],
				]}
			/>
		</Page>
	);
}
