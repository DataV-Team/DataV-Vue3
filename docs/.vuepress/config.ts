import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DataV-Vue3',
  description: 'Vue 大屏数据展示组件库',
  head: [
    ['meta', { name: 'keywords', content: 'datav,data,bi,开源,免费,大屏' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [vueJsx() as any],
    },
  }),
});
