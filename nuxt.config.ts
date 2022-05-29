import type { NuxtConfig } from '@nuxt/types'

const metaData = {
  url: 's1lv3r.codes',
  title: 'S1LV3R',
  description:
    'A transfem nerd, in school to become a developer and systems engineer.',
  email: 'me@s1lv3r.codes',
  theme: '#434c5e',
  author: 'S1LV3R',
  locale: 'en_US',
  socials: {
    twitter: 'theS1LV3R',
    github: 'theS1LV3R',
    matrix: '@s1lv3r:matrix.org',
    mastodon: 'https://tech.lgbt/@s1lv3r',
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
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: (titleChunk) =>
      titleChunk !== 'nuxt-website' ? `${titleChunk} | S1LV3R` : 'S1LV3R',
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

      {
        name: 'msapplication-TileColor',
        content: metaData.theme,
      },
      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png?v=1',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png?v=1',
      },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=1',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '194x194',
        href: '/favicon-194x194.png?v=1',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-chrome-192x192.png?v=1',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=1',
      },
      { rel: 'manifest', href: '/site.webmanifest?v=1' },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=1',
        color: metaData.theme,
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico?v=1',
      },
    ],
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
