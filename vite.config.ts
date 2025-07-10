import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeSvg } from './vite-plugins/optimizeSvg';

const ICONS_PATH = './src/shared/ui/icons';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths(), optimizeSvg(ICONS_PATH)],
});
