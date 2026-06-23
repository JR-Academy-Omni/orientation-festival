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
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333', marginBottom: 14 }}>预计参与 <b>1000 人</b>，来自布里斯班三所主要大学新生：<b>UQ、QUT、Griffith</b>。</p>
						<h3 style={{ fontFamily: fonts.heading, fontWeight: 800, fontSize: 23, marginBottom: 6 }}>活动形式</h3>
						<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>300+ ㎡ 室内展区，合作伙伴设品牌专属展位，向三校新生赠送福利与小礼品，抢先获取首批大学生客户资源。</p>
					</motion.div>
					<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
					{[['📅', '2/28 周六 10AM–2PM'], ['📍', 'Brisbane City Hall'], ['🎓', 'UQ · QUT · Griffith']].map(([k, v]) => (
							<span key={v} style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '10px 16px', fontWeight: 700, fontSize: 16 }}>{k} {v}</span>
						))}
					</div>
				</div>
				<Photo img="past-events/aws-venue.jpg" caption="往期现场 · 300+㎡ 室内展区" />
			</div>
		</Page>
	);
}

export function S03_Intro() {
	const hl = (t: string) => <b style={{ color: colors.yellow, fontWeight: 800 }}>{t}</b>;
	return (
		<Page tag="02 · 活动介绍" title={<>2026 S1「布里斯班三校<span style={{ color: colors.red }}>新生节</span>」</>}
			bg={colors.dark} tone="dark" accent={colors.yellow} watermark="03" align="center">
			<Editorial tone="dark" accent={colors.red} size={31}>
				布里斯班三校新生节聚焦 UQ、QUT、Griffith 新生，从入学第一周开始把学生、城市生活资源和本地品牌放到同一个现场。活动预计 <b style={{ color: colors.yellow }}>1000 名学生</b>到场，设置室内展位、礼品派发、抽奖互动和面对面咨询。对品牌来说，这是在学生刚抵达城市时建立认知、获取线索、沉淀私域的集中窗口——{hl('曝光、互动、转化在同一场完成')}。
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
			<FeatureCard i={2} emoji="🧭" accent={colors.green} title="实用信息" desc="提供布里斯班生活、学习和校园资源信息，帮助新生尽快适应新环境。" />
				</CardsGrid>
				<PhotoStrip h={150} imgs={[{ img: 'past-events/jr-coke.jpg', caption: '品牌物料' }, { img: 'past-events/goodlife-booth.jpg', caption: '展位互动' }, { img: 'past-events/audience-session.jpg', caption: '现场讲座' }]} />
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
		['📣', '强大宣传支持', '14 个自媒体账号，覆盖 10 万+粉丝 + 2 万+私域学生；合作套餐含至少 3 次前期宣传。', colors.red],
		['🎓', '三校新生', 'UQ / QUT / Griffith，覆盖布里斯班主要高校新生，区别于单一大学 O-week 摊位。', colors.blue],
		['💰', '低成本高参与度', '合作费用低至 880 澳元，面对面接触 1000 名新生，精准流量转私域。', colors.yellow],
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
