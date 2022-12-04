import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

import { DEV_DIR } from '../config';

// eslint-disable-next-line
export default defineConfig({
  root: DEV_DIR,
  server: {
    open: true,
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
  ],
});
