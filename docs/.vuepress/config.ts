import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defaultTheme } from '@vuepress/theme-default';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DataV',
  description: 'Vue 大屏数据展示组件库',
  head: [
    ['meta', { name: 'keywords', content: 'datav,data,bi,开源,免费,大屏' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  theme: defaultTheme({
    sidebar: {
      '/guide/': ['', 'borderBox'],
    },
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [vueJsx() as any],
    },
  }),
});
