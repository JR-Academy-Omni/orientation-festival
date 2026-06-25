import { motion } from 'framer-motion';
import PhotoSlide from './_PhotoSlide';
import { Page, CardsGrid, FeatureCard, StatCard, Photo, PhotoStrip, GiantStat, GiantRow } from './_layout';
import { colors, fonts, border, shadow } from '../ui';

export function S12_RecapDivider() {
	return (
		<PhotoSlide img="past-events/jr-coke.jpg" center>
			<motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
				style={{ background: colors.black, color: colors.yellow, border, fontFamily: fonts.mono, fontWeight: 700, fontSize: 16, letterSpacing: 3, padding: '8px 18px' }}>RECAP</motion.span>
			<h1 style={{ fontFamily: fonts.heading, fontWeight: 900, color: colors.white, fontSize: 84, lineHeight: 1.06, letterSpacing: -1, marginTop: 22 }}>
				布里斯班三校新生节<br /><span style={{ background: colors.red, color: colors.white, padding: '0 22px', border, boxShadow: shadow }}>活动精彩回顾</span>
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
	const stats = [['90%', '报名到场率'], ['900+', 'UQ 学生'], ['600+', 'QUT 学生'], ['200+', 'Griffith 学生'], ['18', '参展企业'], ['400+', '赞助商平均获客'], ['5000+', '发放展位礼物'], ['2000+', '发放抽奖券']] as const;
	return (
		<Page tag="12 · 活动数据" title="往期活动数据一览" bg={colors.dark} tone="dark" accent={colors.red} watermark="22" align="center">
			<GiantRow cols={4} tone="dark" gap={28}>
				{stats.map(([n, l], i) => <GiantStat key={l} i={i} n={n} label={l} color={palette[i]} />)}
			</GiantRow>
		</Page>
	);
}

export function S15_Data2() {
	const stats = [['100+', '抽奖奖品数量'], ['$6000+', '抽奖礼品总价值'], ['600次+', '接待咨询']] as const;
	return (
		<Page tag="12 · 活动数据（续）" title="还有这些成果">
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
					{stats.map(([n, l], i) => <StatCard key={l} i={i} n={n} label={l} bg={i === 1 ? colors.yellow : colors.white} accent={i === 1 ? colors.black : colors.red} />)}
				</div>
				<PhotoStrip h={170} imgs={[{ img: 'past-events/goodlife-booth.jpg', caption: '赞助商展位' }, { img: 'past-events/jr-brochures.jpg', caption: '品牌物料' }, { img: 'past-events/bupa-gifts.jpg', caption: '福利礼品' }]} />
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
				<div style={{ border, background: colors.dark, boxShadow: shadow, height: 112, display: 'grid', placeItems: 'center', color: colors.yellow, fontFamily: fonts.heading, fontWeight: 900, fontSize: 34 }}>+14</div>
			</div>
			<div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
				<span style={{ border, background: colors.black, color: colors.yellow, boxShadow: shadow, padding: '12px 18px', fontFamily: fonts.mono, fontWeight: 800 }}>PAST EVENT · 18 EXHIBITORS</span>
				<span style={{ border, background: colors.white, color: colors.black, boxShadow: shadow, padding: '12px 18px', fontWeight: 800 }}>上线前替换为真实赞助商 logo</span>
			</div>
		</Page>
	);
}

export function S17_Highlights() {
	const items = [
		['🎡', '丰富的互动环节', '展位多种互动游戏，参与率达 90%；特别转盘活动氛围热烈。', colors.red],
		['💡', '答疑环节', '6 位学长及规划顾问一对一解答课程、学习、职业与移民规划。', colors.blue],
		['🙌', '志愿者团队', '在校学生志愿者全程支持签到、引导、答疑与后勤，广受赞誉。', colors.green],
		['🎁', '抽奖 & 展位', '共 9 轮抽奖，100+ 份奖品；18 个参展商展位。', colors.yellow],
	] as const;
	return (
		<Page tag="14 · 活动亮点" title="现场亮点回顾" bg={colors.purple} tone="dark" accent={colors.dark} watermark="!" align="center">
			<CardsGrid cols={2} gap={20}>{items.map(([e, t, d, a], i) => <FeatureCard key={t} i={i} emoji={e} title={t} desc={d} accent={a} />)}</CardsGrid>
		</Page>
	);
}

function Quote({ i, text, who }: { i: number; text: string; who: string }) {
	return (
		<motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
			style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px' }}>
			<p style={{ fontSize: 18, lineHeight: 1.6, color: '#333' }}>「{text}」</p>
			<p style={{ marginTop: 8, fontWeight: 800, color: colors.red }}>—— {who}</p>
		</motion.div>
	);
}

export function S18_FbAttendee() {
	return (
		<Page tag="15 · 反馈 · 参与者" title="新生怎么说">
			<div style={{ display: 'grid', gridTemplateColumns: '0.78fr 1.22fr', gap: 22, flex: 1, minHeight: 0 }}>
				<div style={{ display: 'grid', gridTemplateRows: 'auto auto 1fr', gap: 14, minHeight: 0 }}>
					<StatCard i={0} n="98%" label="总体满意度（600 名参与者）" />
					<StatCard i={1} n="600+" label="现场新生参与互动与答疑" accent={colors.purple} />
					<Photo i={2} img="past-events/audience-session.jpg" caption="新生讲座现场" />
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignContent: 'center', minHeight: 0 }}>
					<Quote i={0} text="领到超多免费礼品，还参与了抽奖，学长学姐耐心解答让我对大学生活充满信心！" who="UQ 新生 Jarrica" />
					<Quote i={1} text="活动组织得很好，互动游戏有趣，还赢得了奖品！" who="QUT 新生 Ivan" />
					<Quote i={2} text="结识了很多新朋友，特别喜欢答疑环节。" who="Griffith 新生 Lucy" />
					<Quote i={3} text="刚到布里斯班人生地不熟，现场拿到了租房、开卡、选课的实用信息，少走很多弯路。" who="UQ 新生 Cindy" />
					<Quote i={4} text="顾问帮我理清了毕业后找工作和签证规划的大致方向，心里一下有底多了。" who="QUT 新生 Marcus" />
					<Quote i={5} text="扫码加了学长微信进了新生群，开学第一周遇到问题随时有人答，特别安心。" who="Griffith 新生 Yuki" />
				</div>
			</div>
		</Page>
	);
}

export function S19_FbExhibitor() {
	return (
		<Page tag="16 · 反馈 · 参展商" title="参展商怎么说" bg={colors.dark} tone="dark" accent={colors.blue} watermark="98" align="center">
			<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 22, alignItems: 'center' }}>
				<StatCard i={0} n="98%" label="参展商总体满意度" accent={colors.blue} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 19, lineHeight: 1.6 }}><b>内容反馈：</b>讲座丰富实用，互动有趣且有教育意义，学长学姐答疑广受好评。</div>
					<div style={{ border, background: colors.white, boxShadow: shadow, padding: '18px 22px', fontSize: 19, lineHeight: 1.6 }}><b>组织反馈：</b>签到与引导高效，志愿者团队热情专业。</div>
				</div>
			</div>
		</Page>
	);
}

export function S20_FbVolunteer() {
	return (
		<Page tag="17 · 反馈 · 志愿者" title="志愿者怎么说" bg={colors.green} accent={colors.dark} watermark="♥" align="center">
			<CardsGrid cols={2} gap={20}>
				<Quote i={0} text="看到同学们开心参与、领取礼品，我觉得一切辛苦都值得。每次抽奖的欢呼让我感受到活动的成功。" who="Benny" />
				<Quote i={1} text="帮助新生解答疑问，看到他们安心快乐我也很开心。这次活动让我认识了很多新朋友，也体验到团队合作的力量。" who="Dora" />
			</CardsGrid>
		</Page>
	);
}
