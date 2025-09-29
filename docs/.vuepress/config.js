import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Eng. Zeravan Qadir',
  description: 'My first VuePress Site',
  base: '/profile/',

  theme: defaultTheme({

    lastUpdated: false,
contributors: false,
  }),

    bundler: viteBundler(),
  })

  