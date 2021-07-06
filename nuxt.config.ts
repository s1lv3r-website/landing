import { IContentDocument } from '@nuxt/content/types/content'
import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk !== '' ? `${titleChunk} | S1LV3R` : 'S1LV3R',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/globalVars.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/netlify-files',
    '@nuxtjs/eslint-module',
    '@nuxtjs/robots',
    '@aceforth/nuxt-optimized-images',
    // '@nuxtjs/feed',
    '@nuxtjs/sitemap', // KEEP THIS AT THE END
  ],

  styleResources: {
    scss: ['./assets/vars/*.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    workbox: false,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  telemetry: false,

  sitemap: {
    hostname: 'https://s1lv3r.codes',
    exclude: ['/admin/**'],
  },

  robots: [
    { UserAgent: '*', Allow: '*', Disallow: '/admin', Sitemap: '/sitemap.xml' },
  ],

  optimizedImages: {
    optimizeImages: true,
  },

  colorMode: { fallback: 'dark' },

  async feed() {
    const baseUrlBlog = this.sitemap.hostname + '/blog'
    const baseLinkFeedBlog = '/feed/blog'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    const { $content } = await import('@nuxt/content')

    // @ts-ignore
    const createFeedBlog = async function (feed) {
      feed.options = {
        // @ts-ignore Cuz reasons
        title: config.head.titleTemplate(),
        description: '',
        link: baseUrlBlog,
      }

      const articles = await $content('blog').fetch()

      articles.forEach((article: IContentDocument) => {
        const url = `${baseUrlBlog}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: article.published,
          description: article.description,
          content: article.summary,
          author: article.authors,
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedBlog}/${file}`,
      type,
      create: createFeedBlog,
    }))
  },
}
export default config
