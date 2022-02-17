import type { NuxtConfig } from '@nuxt/types'

const metaData = {
  url: 's1lv3r.codes',
  title: 'S1LV3R',
  description:
    "Hey, I'm S1LV3R. I usually do programming and CTFs, but I also enjoy talking with my friends and gaming :)",
  email: 's1lv3r@corax.team',
  theme: '#B00B69',
  author: 'S1LV3R',
  locale: 'en_US',
  socials: {
    twitter: 'theS1LV3R',
    github: 'theS1LV3R',
    discord: 'Join my server',
    matrix: '@s1lv3r:matrix.org',
  },
  git: {
    repo: 's1lv3r-website/landing',
    branch: 'master',
  },
}

const config: NuxtConfig = {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) =>
      titleChunk !== 'nuxt-website'
        ? `${titleChunk} | S1LV3R`
        : "S1LV3R",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      // # Region metadata
      { name: 'title', content: metaData.title },
      { name: 'theme-color', content: metaData.theme },
      { name: 'author', content: metaData.author },
      {
        hid: 'description',
        name: 'description',
        content: metaData.description,
      },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: metaData.title },
      { property: 'og:url', content: `https://${metaData.url}` },
      { property: 'og:locale', content: metaData.locale },
      { property: 'og:description', content: metaData.description },

      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:url', content: `https://${metaData.url}` },
      { property: 'twitter:title', content: metaData.title },
      { property: 'twitter:creator', content: `@${metaData.socials.twitter}` },
      { property: 'twitter:site', content: `@${metaData.socials.twitter}` },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/globalVars.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-build-optimisations',
    '@nuxtjs/style-resources',
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/netlify-files',
    '@nuxtjs/eslint-module',
    '@nuxtjs/robots',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/svg',
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
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

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
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
  },

  colorMode: { fallback: 'dark' },

  generate: {
    fallback: '404.html',
    exclude: [/\/discord\/?/],
  },

  buildOptimisations: {
    profile: process.env.NODE_ENV === 'development' ? 'risky' : 'experimental',
    features: { esbuildLoader: true },
  },
}

export default config
