<template>
  <div>
    <p>
      A transfem nerd, in school to become a developer and systems
      engineer.<CursorBlink />
    </p>
    <p>Some fun facts about me:</p>
    <ul>
      <li>🏳️‍🌈 I am bisexual</li>
      <li>🏳‍⚧ I am trans and use she/they pronouns</li>
      <li>I am neurodivergent (autistic)</li>
    </ul>

    <div>
      <h2>How to contact me</h2>
      <table>
        <tbody>
          <tr v-for="link in links" :key="link.url">
            <td>{{ link.title }}</td>
            <td>
              <a
                :href="link.url"
                target="_blank"
                :rel="`noopener noreferrer ${link.rel || ''}`"
              >
                {{ link.urlText }}
              </a>
            </td>
          </tr>
          <tr>
            <td>PGP</td>
            <td>
              85FA 2FC2 D803 5859 AE77 FF6E 6366 60BB 3A5C 2F87<br />
              ( <a href="/public-keys.gpg">Full key</a> )
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CursorBlink from '@/components/cursor.vue'

export default Vue.extend({
  components: { CursorBlink },

  layout: 'default',

  data() {
    return {
      links: [
        {
          urlText: this.$globalVars.github_username,
          url: `https://github.com/${this.$globalVars.github_username}`,
          title: 'GitHub',
        },
        {
          urlText: `@${this.$globalVars.twitter_username}`,
          url: `https://twitter.com/${this.$globalVars.twitter_username}`,
          title: 'Twitter',
        },
        {
          urlText: 'Join my server',
          url: '/discord',
          title: 'Discord',
        },
        {
          urlText: this.$globalVars.matrix_username,
          url: `https://matrix.to/#/${this.$globalVars.matrix_username}`,
          title: 'Matrix',
        },
        {
          title: 'Mastodon (tech.lgbt)',
          urlText: 'Mastodon',
          url: this.$globalVars.mastodon_url,
          rel: 'me',
        },
        {
          title: 'Email',
          url: `mailto:${this.$globalVars.email}`,
          urlText: this.$globalVars.email,
        },
      ] as {
        title: string
        url: string
        urlText: string
        rel?: string
      }[],
    }
  },

  head: {
    title: 'Home',
  },
})
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  width: 100%;

  td,
  tr {
    padding: 0.5rem;
  }

  td:first-child {
    font-weight: bold;
  }
}
</style>
