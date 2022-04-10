<template>
  <div>
    <p>
      Links to stuff I've made, stuff I find interesting, or just generally
      other things you should have a look at.<CursorBlink />
    </p>

    <table>
      <tbody>
        <tr v-for="link in links" :key="link">
          <td>
            <a :href="link.url" target="_blank">
              {{ link.title }}
            </a>
          </td>
          <td>
            {{ link.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CursorBlink from '@/components/cursor.vue'

export default Vue.extend({
  components: { CursorBlink },

  data() {
    return {
      links: [
        {
          title: 'HackTheBox',
          url: 'https://www.hackthebox.eu/home/users/profile/266080',
          description: 'My HackTheBox profile.',
        },
        {
          title: 'CTFNote',
          url: 'https://github.com/CTFNote',
          description:
            'CTFNote is a notepad and tool for CTF teams to better manage and organize CTFs and CTF challenges.',
        },
        {
          title: 'dotfiles',
          url: `https://github.com/${this.$globalVars.github_username}/dotfiles`,
          description: 'The repo with all my dotfiles and stuff.',
        },
        {
          title: 'Team Corax',
          url: 'https://corax.team',
          description: "The CTF team I'm a part of.",
        },
        {
          title: 'nerd.s1lv3r.codes',
          url: 'https://nerd.s1lv3r.codes',
          description: 'Nerd',
        },
        {
          title: 'Very cool',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          description: 'Such a cool website',
        },
        {
          title: `${this.$globalVars.repo}`,
          url: `https://github.com/${this.$globalVars.repo}`,
          description: 'The GitHub repository for this website',
        },
        {
          title: `${this.$globalVars.github_username}`,
          url: `https://github.com/${this.$globalVars.github_username}`,
          description: 'My GitHub page',
        },
      ] as {
        title: string
        url: string
        description: string
      }[],
    }
  },

  head: {
    title: 'Links',
  },
})
</script>

<style lang="scss" scoped>
tr,
td {
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>
