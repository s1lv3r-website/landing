import { Plugin } from '@nuxt/types'

const vars = {
  email: 's1lv3r@corax.team',
  github_username: 'theS1LV3R',
  twitter_username: 'theS1LV3R',
  discord_username: 'Join my server',
  matrix_username: '@s1lv3r:matrix.org',
  repo: 's1lv3r-website/landing',
  branch: 'master',
}

declare module '@nuxt/types' {
  interface Context {
    $globalVars: typeof vars
  }
}

const pluginFunction: Plugin = (_, inject) => {
  inject('globalVars', vars)
}

export default pluginFunction
