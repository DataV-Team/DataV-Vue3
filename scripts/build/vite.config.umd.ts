import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';

import { ENTRY, STYLED_PLACEHOLDER } from '../config';
import { compileStyledComponentsPlugin } from '../plugins/compileStyledComponentsPlugin';

// eslint-disable-next-line
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: ENTRY,
      formats: ['umd'],
      name: 'DataV',
    },
    rollupOptions: {
      external: ['vue'],

      output: {
        dir: 'umd',
        format: 'umd',
        name: 'DataV',
        entryFileNames: 'datav.umd.js',
        sourcemap: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
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
