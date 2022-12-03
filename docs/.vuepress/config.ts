import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DataV',
  description: 'Vue 大屏数据展示组件库',
  head: [
    ['meta', { name: 'keywords', content: 'datav,data,bi,开源,免费,大屏' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
});
