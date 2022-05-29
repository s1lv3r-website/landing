import { Plugin } from '@nuxt/types'

export type globalVars = {
  email: string
  github_username: string
  twitter_username: string
  discord_username: string
  matrix_username: string
  mastodon_url: string
  repo: string
  branch: string
}

declare module '@nuxt/types' {
  interface Context {
    $globalVars: globalVars
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $globalVars: globalVars
  }
}

const vars: globalVars = {
  email: 's1lv3r@corax.team',
  github_username: 'theS1LV3R',
  twitter_username: 'theS1LV3R',
  discord_username: 'Join my server',
  matrix_username: '@s1lv3r:matrix.org',
  mastodon_url: 'https://tech.lgbt/@s1lv3r',
  repo: 's1lv3r-website/landing',
  branch: 'master',
}

const pluginFunction: Plugin = (_, inject) => {
  inject('globalVars', vars)
}

export default pluginFunction
