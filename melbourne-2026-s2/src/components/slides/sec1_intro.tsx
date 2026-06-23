import { motion } from 'framer-motion';
import { Page, CardsGrid, FeatureCard, Photo, PhotoStrip, Editorial } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S02_Overview() {
	return (
		<Page tag="01 · 活动概览" title="一场触达三校新生的品牌主场">
			<div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
					<motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
						style={{ border, background: colors.white, boxShadow: shadow, padding: '24px 26px' }}>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>谁会来</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 14 }}>预计参与 <b>1500 人</b>，均来自墨尔本三所主要大学新生：<b>UniMelb、Monash、RMIT</b>。</p>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>活动形式</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>300+ ㎡ 室内展区，合作伙伴设品牌专属展位，向三校新生赠送福利与小礼品，抢先获取首批大学生客户资源。</p>
					</motion.div>
					<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
						{[['📅', '8/7 周五 2–5PM'], ['📍', '33 Exhibition St'], ['🎓', '三校 · 80% 群体']].map(([k, v]) => (
							<span key={v} style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '10px 16px', fontWeight: 700, fontSize: 16 }}>{k} {v}</span>
						))}
					</div>
				</div>
				<Photo img="past-events/hers-luxe-booth.jpg" caption="往期现场 · 300+㎡ 室内展区" />
			</div>
		</Page>
	);
}

export function S03_Intro() {
	const hl = (t: string) => <b style={{ color: colors.yellow, fontWeight: 800 }}>{t}</b>;
	return (
		<Page tag="02 · 活动介绍" title={<>第 6 届「墨尔本三校<span style={{ color: colors.red }}>新生节</span>」</>}
			bg={colors.dark} tone="dark" accent={colors.yellow} watermark="03" align="center">
			<Editorial tone="dark" accent={colors.red} size={31}>
				墨尔本是澳洲最具活力与多元文化的城市之一，每年吸引大量全球大学新生。本届第 6 届新生节以{hl('「链接高校与城市资源」')}为核心，聚焦 University of Melbourne、Monash、RMIT 三校学生，预计超千名学生到场。既是新生了解本地生活、教育资源与消费选择的入口，也是品牌树立校园影响力的理想平台——{hl('提升曝光、建立口碑、高效转化')}。
			</Editorial>
		</Page>
	);
}

export function S04_Purpose() {
	return (
		<Page tag="03 · 活动目的" title="为什么办这场新生节" bg={colors.yellow} accent={colors.red} watermark="WHY" align="center">
			<CardsGrid cols={3}>
				<FeatureCard i={0} emoji="🎉" accent={colors.red} title="欢迎新生" desc="帮助新生融入校园生活和城市环境，提供实用信息和礼品。" />
				<FeatureCard i={1} emoji="📣" accent={colors.dark} title="扩大品牌影响力" desc="为商家提供展示品牌和产品的机会，增强在年轻群体中的品牌认知度。" />
				<FeatureCard i={2} emoji="🤝" accent={colors.green} title="促进交流" desc="搭建新生与商家之间的桥梁，通过互动与礼品派发增加品牌亲和力。" />
			</CardsGrid>
		</Page>
	);
}

export function S05_Highlights() {
	return (
		<Page tag="04 · 吸引新生" title="新生为什么愿意来" accent={colors.purple}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
				<CardsGrid cols={3}>
					<FeatureCard i={0} emoji="🎁" accent={colors.yellow} title="免费礼品" desc="现场可领取各种免费礼品，增加活动吸引力。" />
					<FeatureCard i={1} emoji="🎯" accent={colors.blue} title="互动活动" desc="设置多种有趣互动，提升新生参与度和现场氛围。" />
					<FeatureCard i={2} emoji="🧭" accent={colors.green} title="实用信息" desc="提供墨尔本生活和学习的实用信息，帮助新生尽快适应新环境。" />
				</CardsGrid>
				<PhotoStrip h={150} imgs={[{ img: 'past-events/consulting-table.jpg', caption: '面对面咨询' }, { img: 'past-events/blockclub-booth.jpg', caption: '展位互动' }, { img: 'past-events/venue-queue.jpg', caption: '现场人潮' }]} />
			</div>
		</Page>
	);
}

export function S06_Merchant() {
	return (
		<Page tag="05 · 商家机会" title="商家能拿到什么" bg={colors.blue} tone="dark" accent={colors.dark} watermark="$" align="center">
			<CardsGrid cols={3}>
				<FeatureCard i={0} emoji="👥" accent={colors.blue} title="直接接触目标群体" desc="面对面互动，直接触达大学新生，提升品牌曝光率。" />
				<FeatureCard i={1} emoji="📣" accent={colors.red} title="品牌推广" desc="利用活动平台宣传品牌，增强在年轻消费群体中的知名度。" />
				<FeatureCard i={2} emoji="📈" accent={colors.green} title="客户积累" desc="获取新生联系信息，为后续市场推广和销售活动奠定基础。" />
			</CardsGrid>
		</Page>
	);
}

export function S07_WhyUs() {
	const items = [
		['📣', '强大宣传支持', '14 个自媒体账号，覆盖 10 万+粉丝 + 4 万+私域学生；合作套餐含至少 3 次前期宣传。', colors.red],
		['🎓', '三校新生', 'UniMelb / Monash / RMIT，覆盖 80% 大学生消费群体，区别于单一大学 O-week 摊位。', colors.blue],
		['💰', '低成本高参与度', '合作费用低至 880 澳元，面对面接触 900+ 新生，精准流量转私域。', colors.yellow],
		['🎯', '精准触达', '工作人员协助沟通、舒适室内场地、无校方限制、现场即时获取学生反馈。', colors.green],
	] as const;
	return (
		<Page tag="06 · 为什么选匠人" title="为什么选择匠人学院" watermark="JR" align="center">
			<CardsGrid cols={2} gap={20}>
				{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
			</CardsGrid>
		</Page>
	);
}
