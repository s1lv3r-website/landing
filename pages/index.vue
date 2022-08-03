<template>
  <div>
    <p>
      Autistic transfem nerd, in school to become a developer and systems
      engineer.<CursorBlink />
    </p>
    <p>Some fun facts about me:</p>
    <ul>
      <li>🏳️‍🌈 I am bisexual</li>
      <li>🏳‍⚧ I am trans and use she/they pronouns</li>
      <li>
        <span id="asd">
          <AsdSymbol /> I am neurodivergent (autistic). Highly interested in
          everything computers, servers, and generally technical
        </span>
      </li>
    </ul>
    <p id="nordfan">
      I am also a big fan of the
      <a href="https://nordtheme.com" target="_blank" rel="noopener noreferrer"
        >Nord</a
      >
      color scheme
    </p>
    <div>
      <h2>How to contact me</h2>
      <div id="contact-links">
        <div v-for="link in links" :key="link.url" class="contact-item">
          <h4>{{ link.title }}</h4>
          <a
            :href="link.url"
            target="_blank"
            :rel="`noopener noreferrer ${link.rel || ''}`"
          >
            {{ link.urlText }}
          </a>
        </div>
        <div class="contact-item">
          <h4>PGP</h4>
          <p>
            85FA 2FC2 D803 5859 AE77 FF6E 6366 60BB 3A5C 2F87<br />
            ( <a href="/public-keys.gpg">Full key</a> )
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CursorBlink from '@/components/cursor.vue'
import AsdSymbol from '@/components/asd-symbol.vue'

export default Vue.extend({
  components: { CursorBlink, AsdSymbol },

  layout: 'default',

  data() {
    return {
      links: [
        {
          title: 'Pronouns.page',
          url: 'https://pronouns.page/u/s1lv3r',
          urlText: 'https://pronouns.page/u/s1lv3r',
          rel: 'me',
        },
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
          title: 'Mastodon (lgbt.pm)',
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

#contact-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .contact-item {
    margin: 0.5rem;
  }

  h4 {
    margin: 0.25rem;
    margin-left: 0;
  }
}

#nordfan {
  font-style: italic;
}

li, ul {
  list-style-type: none;
  padding: 0;
}

#asd {
  display: flex;
  align-items: baseline;
  & > svg {
    display: inline;
    max-height: 0.8rem;
    max-width: 1.3rem;
    padding-top: 0.1rem;
    margin: auto 0;
    margin-right: 0.5rem;
  }
}
</style>
