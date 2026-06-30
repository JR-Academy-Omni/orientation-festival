import { motion } from 'framer-motion';
import { Page, CardsGrid, FeatureCard, Photo, Editorial } from './_layout';
import { colors, fonts, border, shadow, assetPath } from '../ui';

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
					{[['📅', '8/21 周五 10AM–2PM'], ['📍', 'Market Square'], ['🎓', 'UQ · QUT · Griffith']].map(([k, v]) => (
							<span key={v} style={{ background: colors.dark, color: colors.white, border, boxShadow: shadow, padding: '10px 16px', fontWeight: 700, fontSize: 16 }}>{k} {v}</span>
						))}
					</div>
				</div>
				<Photo img="past-events/syd-checkin3.jpg" caption="往期现场 · 300+㎡ 室内展区" />
			</div>
		</Page>
	);
}

export function S03_Intro() {
	const hl = (t: string) => <b style={{ color: colors.yellow, fontWeight: 800 }}>{t}</b>;
	return (
		<Page tag="02 · 活动介绍" title={<>2026 S2「布里斯班三校<span style={{ color: colors.red }}>新生节</span>」</>}
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
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, x: -34 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/lucky-draw.png')} alt="新生节抽奖互动插画" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.78))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						礼品、抽奖、互动，把学生留在现场
					</figcaption>
				</motion.figure>
				<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 }}>
					<FeatureCard i={0} emoji="🎁" accent={colors.yellow} title="免费礼品" desc="现场可领取各种免费礼品，增加活动吸引力。" />
					<FeatureCard i={1} emoji="🎯" accent={colors.blue} title="互动活动" desc="设置多种有趣互动，提升新生参与度和现场氛围。" />
					<FeatureCard i={2} emoji="🧭" accent={colors.green} title="实用信息" desc="提供布里斯班生活、学习和校园资源信息，帮助新生尽快适应新环境。" />
				</div>
			</div>
		</Page>
	);
}

export function S06_Merchant() {
	const funnel = [
		['01', '预热曝光', 'UQ / QUT / Griffith 社群与账号提前种草，把品牌放进新生行前清单。', colors.yellow],
		['02', '现场转化', '学生集中进场、逛摊、领礼品、扫码加微信，不靠路边拦截。', colors.red],
		['03', '私域跟进', '活动后可按扫码、任务、中奖与咨询记录继续触达。', colors.green],
	] as const;
	return (
		<Page tag="05 · 商家机会" title="赞助商拿到的是一条转化链路" bg={colors.blue} tone="dark" accent={colors.dark} watermark="$" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 24, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
				<motion.figure
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					style={{ position: 'relative', margin: 0, border, boxShadow: shadow, overflow: 'hidden', background: colors.dark, minHeight: 0 }}
				>
					<img src={assetPath('illustrations/sponsor-booth.png')} alt="商家展位互动插画" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 48%, rgba(16,22,47,.82))' }} />
					<figcaption style={{ position: 'absolute', left: 18, right: 18, bottom: 16, color: colors.white, fontFamily: fonts.heading, fontWeight: 900, fontSize: 26 }}>
						学生主动入场，商家不需要在路边抢人流
					</figcaption>
				</motion.figure>
				<div style={{ display: 'grid', gap: 14, alignContent: 'center' }}>
					{funnel.map(([step, title, desc, accent], i) => (
						<motion.div key={title} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.08 * i }}
							style={{ border, background: colors.white, color: colors.black, boxShadow: shadow, padding: '18px 20px', display: 'grid', gridTemplateColumns: '86px 1fr', gap: 18, alignItems: 'center' }}>
							<div style={{ border, background: accent, height: 74, display: 'grid', placeItems: 'center', fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>{step}</div>
							<div>
								<h3 style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 27, marginBottom: 6 }}>{title}</h3>
								<p style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 700, color: '#333' }}>{desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Page>
	);
}

export function S07_WhyUs() {
	const items = [
		['🏠', '租房 / 公寓 / 搬家', '新生刚到布里斯班，住宿、家具、宽带、保险是前 30 天刚需。', colors.red],
		['💳', '银行 / 电信 / 生活服务', '开户、手机卡、交通、医保、日常消费，适合现场派福利换首批线索。', colors.blue],
		['📚', '教育 / 职业 / 移民', '学生会主动咨询选课、补习、实习、签证与职业规划，决策周期更长。', colors.yellow],
		['🍜', '餐饮 / 零售 / 美业', '适合用券包、抽奖和社群福利，把一次体验变成持续复购。', colors.green],
	] as const;
	return (
		<Page tag="06 · 适合谁投" title="哪些商家最适合新生节" watermark="FIT" align="center">
			<CardsGrid cols={2} gap={20}>
				{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
			</CardsGrid>
		</Page>
	);
}
