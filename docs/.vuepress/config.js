import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  title: 'VuePress模板',
  description: '一个VuePress模板',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  // host: "0.0.0.0",
  // port: 8080,
  // temp: "",
  // dest: "",
  // locales: "",
  // shouldPrefetch
  // extraWatchFiles
  // cache
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
