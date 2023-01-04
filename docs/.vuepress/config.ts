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
    navbar: [
      {
        text: 'Vue2 & React 版本',
        children: [
          {
            text: 'Vue2版本',
            link: 'http://datav.jiaminghi.com/',
          },
          {
            text: 'React版本',
            link: 'http://datav-react.jiaminghi.com/',
          },
        ],
      },
      {
        text: 'Github',
        link: 'https://github.com/DataV-Team/DataV-Vue3',
      },
      {
        text: '相关链接',
        children: [
          {
            text: 'Vue',
            link: 'https://vuejs.org/',
          },
          {
            text: 'Vite',
            link: 'https://vitejs.dev/',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': ['/guide/index.md/', '/guide/borderBox.md', '/guide/decoration.md/'],
    },
  }),
  bundler: viteBundler({
    viteOptions: {
      plugins: [vueJsx() as any],
    },
  }),
});
