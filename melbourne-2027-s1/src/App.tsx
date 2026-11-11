import SlideEngine from './components/SlideEngine';

import S01_Cover from './components/slides/S01_Cover';
import { S02_Overview, S03_Intro, S04_Purpose, S05_Highlights, S06_Merchant, S07_WhyUs } from './components/slides/sec1_intro';
import { S08_Venue, S09_FloorPlan } from './components/slides/sec2_venue';
import { S10_Packages, S11_PriceCompare, S12_Engagement } from './components/slides/sec3_packages';
import { S12_RecapDivider, S13_RecapOverview, S14_Data, S15_Data2, S17_Highlights, S18_FbAttendee, S19_FbExhibitor, S20_FbVolunteer } from './components/slides/sec4_recap';
import { S21_About, S22_Xhs, S23_XhsDesc, S24_XhsMatrix, S25_Wechat, S26_WechatDesc, S28_Community, S29_Coop } from './components/slides/sec5_coordinator';
import { S30_AchDivider, S31_UniCoop, S32_BrandAct, S33_Enterprise } from './components/slides/sec6_achievements';
import S34_Contact from './components/slides/S34_Contact';

export default function App() {
	return (
		<SlideEngine>
			{/* 封面 */}
			<S01_Cover />
			{/* CH1 · 活动介绍 */}
			<S02_Overview />
			<S03_Intro />
			<S04_Purpose />
			<S05_Highlights />
			<S06_Merchant />
			<S07_WhyUs />
			{/* CH2 · 场地 */}
			<S08_Venue />
			<S09_FloorPlan />
			{/* CH3 · 套餐与价格 */}
			<S10_Packages />
			<S11_PriceCompare />
			<S12_Engagement />
			{/* CH4 · 往期回顾 */}
			<S12_RecapDivider />
			<S13_RecapOverview />
			<S14_Data />
			<S15_Data2 />
			<S17_Highlights />
			<S18_FbAttendee />
			<S19_FbExhibitor />
			<S20_FbVolunteer />
			{/* CH5 · 课代表矩阵 */}
			<S21_About />
			<S22_Xhs />
			<S23_XhsDesc />
			<S24_XhsMatrix />
			<S25_Wechat />
			<S26_WechatDesc />
			<S28_Community />
			<S29_Coop />
			{/* CH6 · 成果展示 */}
			<S30_AchDivider />
			<S31_UniCoop />
			<S32_BrandAct />
			<S33_Enterprise />
			{/* 联络 */}
			<S34_Contact />
		</SlideEngine>
	);
}
