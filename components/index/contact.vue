<template>
  <div>
    <h2>Contact</h2>
    <table>
      <tbody>
        <tr v-for="link in links" :key="link">
          <td>{{ link.title }}</td>
          <td>
            <a :href="link.url">
              {{ link.linkName }}
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
        <tr>
          <td>Mastodon (tech.lgbt)</td>
          <td>
            <a rel="me" href="https://tech.lgbt/@s1lv3r">Mastodon </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      links: [
        {
          linkName: this.$globalVars.github_username,
          url: `https://github.com/${this.$globalVars.github_username}`,
          title: 'GitHub',
        },
        {
          linkName: `@${this.$globalVars.twitter_username}`,
          url: `https://twitter.com/${this.$globalVars.twitter_username}`,
          title: 'Twitter',
        },
        {
          linkName: this.$globalVars.discord_username,
          url: '/discord',
          title: 'Discord',
        },
        {
          linkName: this.$globalVars.matrix_username,
          url: `https://matrix.to/#/${this.$globalVars.matrix_username}`,
          title: 'Matrix',
        },
      ] as {
        linkName: string
        url: string
        title: string
      }[],
    }
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
