import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard, Photo, PhotoStrip, GiantStat, GiantRow } from './_layout';
import { colors, fonts, border, radius, shadow } from '../ui';

export function S12_RecapDivider() {
	return (
		<PhotoSlide img="past-events/blockclub-booth.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, borderRadius: radius, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>RECAP</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				匠人学院新生节<br /><span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, borderRadius: radius, boxShadow: shadow }}>活动精彩回顾</span>
			</h1>
		</PhotoSlide>
	);
}

export function S13_RecapOverview() {
	const items = [
		['🏫', '帮助新生适应校园', '提供校园资源、学习方法、生活建议，帮助新生更快融入大学生活。', colors.yellow],
		['💬', '促进新生交流', '提供相互认识、交流、建立友谊的平台，增强归属感。', colors.blue],
		['🧭', '学习规划指导', '邀请学长及顾问就学业、职业及移民规划提供建议与指导。', colors.green],
		['🛍️', '展示商家资源', '通过展位 + 互动环节向新生介绍各类资源；与多家机构达成合作意向。', colors.red],
	] as const;
	return (
		<Page tag="11 · 活动概述" title="Overview · 我们做了什么" watermark="01" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

export function S14_Data() {
	const palette = [colors.yellow, colors.red, colors.blue, colors.green, colors.purple, colors.yellow, colors.red, colors.blue];
	const stats = [['90%', '报名到场率'], ['1000+', 'UniMelb 学生'], ['600+', 'Monash 学生'], ['200+', 'RMIT 学生'], ['22', '参展企业'], ['500+', '赞助商平均获客'], ['5000+', '发放展位礼物'], ['5000+', '发放抽奖券']] as const;
	return (
		<Page tag="12 · 活动数据" title="往期活动数据一览" bg={colors.dark} tone="dark" accent={colors.red} watermark="22" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S15_Data2() {
	const stats = [['300+', '共抽奖奖品数量'], ['$6000+', '抽奖礼品总价值'], ['900次+', '接待咨询']] as const;
	return (
		<Page tag="12 · 活动数据（续）" title="还有这些成果">
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
					{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} bg={i === 1 ? colors.yellow : colors.white} accent={i === 1 ? colors.black : colors.red} />)}
				</div>
				<PhotoStrip h={170} imgs={[{ img: 'past-events/hers-luxe-booth.jpg', caption: '赞助商展位' }, { img: 'past-events/speaker-host.jpg', caption: '主持分享' }, { img: 'past-events/venue-queue.jpg', caption: '入场排队' }]} />
			</div>
		</Page>
	);
}

export function S16_Sponsors() {
	const slots = ['BANKING', 'HOUSING', 'EDUCATION', 'LEGAL', 'TRAVEL', 'RETAIL', 'LIFESTYLE'] as const;
	return (
		<Page tag="13 · 赞助商" title="赞助商 & 合作伙伴" accent={colors.purple} align="top">
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }}>
				{slots.map((slot, i) => (
					<div key={slot} style={{
						border, background: colors.white, boxShadow: shadow, height: 112,
						display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
						gap: 7, position: 'relative', overflow: 'hidden',
					}}>
						<span style={{ position: 'absolute', top: 0, left: 0, background: i % 2 ? colors.blue : colors.red, color: colors.white, borderRight: border, borderBottom: border, padding: '4px 8px', fontFamily: fonts.mono, fontSize: 11, fontWeight: 800 }}>
							{String(i + 1).padStart(2, '0')}
						</span>
						<div style={{ fontFamily: fonts.heading, fontWeight: 900, fontSize: 23, color: colors.black }}>LOGO SLOT</div>
						<div style={{ fontFamily: fonts.mono, fontWeight: 800, fontSize: 11, color: colors.purple, letterSpacing: 1.4 }}>{slot}</div>
					</div>
				))}
				<div style={{ border, borderRadius: radius, background: colors.dark, boxShadow: shadow, height: 112, display: 'grid', placeItems: 'center', color: colors.yellow, fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>+14</div>
			</div>
			<div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
				<span style={{ border, borderRadius: radius, background: colors.black, color: colors.yellow, boxShadow: shadow, padding: '12px 18px', fontFamily: fonts.mono, fontWeight: 800 }}>PAST EVENT · 22 EXHIBITORS</span>
				<span style={{ border, borderRadius: radius, background: colors.white, color: colors.black, boxShadow: shadow, padding: '12px 18px', fontWeight: 800 }}>上线前替换为真实赞助商 logo</span>
			</div>
		</Page>
	);
}

export function S17_Highlights() {
	const items = [
		['🎡', '丰富的互动环节', '展位多种互动游戏，参与率达 90%；特别转盘活动氛围热烈。', colors.red],
		['💡', '答疑环节', '4 位学长及移民规划老师一对一解答课程、学习、职业与移民规划。', colors.blue],
		['🙌', '志愿者团队', '在校学生志愿者全程支持签到、引导、答疑与后勤，广受赞誉。', colors.green],
		['🎁', '抽奖 & 展位', '共 50 轮抽奖（电子产品/学习用品/纪念品）；18 个参展商展位。', colors.yellow],
	] as const;
	return (
		<Page tag="14 · 活动亮点" title="现场亮点回顾" bg={colors.purple} tone="dark" accent={colors.dark} watermark="!" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

// 反馈页 · 不署名亮点：只用本 deck 已有事实（往期数据 / 现场亮点 / 原反馈摘录）归纳，不写人名、不用引号
export function S18_FbAttendee() {
	const items = [
		['🎁', '免费礼品拿到手软', '现场发出 5000+ 份展位礼物，新生逛一圈就能领到不少实用福利。', colors.red],
		['🎡', '抽奖和互动最热闹', '5000+ 张抽奖券、300+ 份奖品，转盘和抽奖环节全场欢呼。', colors.yellow],
		['💡', '学长学姐当面答疑', '课程、学习、职业规划都能直接问，让新生对大学生活更有底。', colors.blue],
		['🤝', '认识新朋友', '三校新生在同一个场地互相认识、交流，更快找到归属感。', colors.green],
	] as const;
	return (
		<Page tag="15 · 反馈 · 参与者" title="新生最喜欢的">
			<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 24, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 16, minHeight: 0 }}>
					<StatCard i={0} n="98%" label="总体满意度（600 名参与者）" />
					<Photo i={1} img="past-events/checkin-1.jpg" caption="新生签到现场" />
				</div>
				<CardsGrid cols={2} gap={18} style={{ alignContent: 'center' }}>
					{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
				</CardsGrid>
			</div>
		</Page>
	);
}

export function S19_FbExhibitor() {
	const items = [
		['📈', '获客效率高', '赞助商平均获客 500+，现场接待咨询累计 900+ 次。', colors.blue],
		['🎯', '人群精准', '到场的都是 UniMelb、Monash、RMIT 新生，正是刚到墨尔本、需求最集中的时候。', colors.yellow],
		['🧭', '签到引导顺畅', '签到与引导高效，志愿者团队热情专业，帮展位把人流导进来。', colors.green],
		['🗣️', '内容口碑好', '讲座丰富实用，互动有趣且有教育意义，学长学姐答疑广受好评。', colors.red],
	] as const;
	return (
		<Page tag="16 · 反馈 · 参展商" title="参展商最认可的" bg={colors.dark} tone="dark" accent={colors.blue} watermark="98" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.6fr 1.4fr', gap: 26, alignItems: 'center' }}>
				<StatCard i={0} n="98%" label="参展商总体满意度" accent={colors.blue} />
				<CardsGrid cols={2} gap={18}>
					{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i + 1} emoji={e} title={t} desc={d} accent={a} />)}
				</CardsGrid>
			</div>
		</Page>
	);
}

export function S20_FbVolunteer() {
	const items = [
		['🎉', '辛苦都值得', '看到新生开心参与、领到礼品，抽奖时全场欢呼，是志愿者最有成就感的时刻。', colors.yellow],
		['💬', '帮新生解决问题', '从签到到找展位、答疑，帮刚来的新生安心融入，自己也很开心。', colors.blue],
		['🤝', '体验团队合作', '签到、引导、答疑、后勤分工配合，真切感受到团队的力量。', colors.red],
		['👋', '结识新朋友', '和来自不同学校的同学一起办活动，认识了很多新朋友。', colors.purple],
	] as const;
	return (
		<Page tag="17 · 反馈 · 志愿者" title="志愿者的收获" bg={colors.green} accent={colors.dark} watermark="♥" align="center">
			<CardsGrid cols={2} gap={20}>
				{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}
			</CardsGrid>
		</Page>
	);
}
