import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

import { DEV_DIR, STYLED_PLACEHOLDER } from '../config';
import { compileStyledComponentsPlugin } from '../plugins/compileStyledComponentsPlugin';

// eslint-disable-next-line
export default defineConfig({
  root: DEV_DIR,
  server: {
    open: true,
  },
  plugins: [
    compileStyledComponentsPlugin(STYLED_PLACEHOLDER),
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
  ],
  define: {
    __STYLED_PLACEHOLDER__: `"${STYLED_PLACEHOLDER}"`,
  },
});
