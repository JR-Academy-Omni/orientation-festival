import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionGlobalConfig } from 'framer-motion';
import App from './App';

// ?static=1 —— 跳过入场动画直接渲染最终态（用于无头截图导出 PDF，避免截到动画中途）
if (new URLSearchParams(location.search).has('static')) {
	MotionGlobalConfig.skipAnimations = true;
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
