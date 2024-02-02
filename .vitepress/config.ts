import { defineConfigWithTheme } from 'vitepress';

import type { Config as ThemeConfig } from '@vue/theme';
import baseConfig from '@vue/theme/config';

const nav: ThemeConfig['nav'] = [
  {
    text: 'ドキュメント',
    activeMatch: `^/tutorial/`,
    items: [
      {
        text: 'チュートリアル',
        items: [
          { text: 'API', link: '/tutorial/api-examples' },
          { text: 'Markdown', link: '/tutorial/markdown-examples' }
        ]
      },
    ]

  },
  {
    text: 'サイト',
    activeMatch: `^/site/`,
    items: [
      { text: 'K Web Storage', link: 'https://k-web-storage.lab.kuwanomi0.com/' }
    ]
  },
];

export const sidebar: ThemeConfig['sidebar'] = {
  '/tutorial/': [
    {
      text: 'API',
      items: [
        { text: 'Runtime API Example', link: '/tutorial/api-examples' },
        { text: 'Markdown Extension Examples', link: '/tutorial/markdown-examples' }
      ]
    },
  ],
};

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'ja',
  title: 'blog.kuwanomi0.com',
  description: 'kuwanomi0のサイト',
  srcDir: 'src',

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://blog.kuwanomi0.com/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'blog.kuwanomi0.com' }],
    ['meta', { property: 'og:description', content: 'kuwanomi0' }],
    ['meta', { name: 'twitter:site', content: '@kuwanomi0' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
  ],

  themeConfig: {
    nav,
    sidebar,

    localeLinks: [],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/kuwanomi0' },
    ],
  },

  // vite: {
  //   define: {
  //     __VUE_OPTIONS_API__: false
  //   },
  //   optimizeDeps: {
  //     include: ['gsap', 'dynamics.js'],
  //     exclude: ['@vue/repl']
  //   },
  //   // @ts-ignore
  //   ssr: {
  //     external: ['@vue/repl']
  //   },
  //   server: {
  //     host: true,
  //     fs: {
  //       // for when developing with locally linked theme
  //       allow: ['../..']
  //     }
  //   },
  //   build: {
  //     minify: 'terser',
  //     chunkSizeWarningLimit: Infinity
  //   },
  //   json: {
  //     stringify: true
  //   }
  // }
});
