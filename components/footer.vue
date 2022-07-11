<template>
  <footer class="foot">
    <!--    <a :href="url" target="_blank" rel="noopener noreferrer">
      <Octicon icon="pencil" /> Edit on GitHub!
    </a>-->
    <p>
      Last commit:
      <a :href="commitUrl" target="_blank" rel="noopener noreferrer"
        ><code>{{ commitsha }}</code> - <code>{{ commitmessage }}</code></a
      >
      <br />
      Commit date: <code>{{ commitdate }}</code>
    </p>
    <p>
      <a
        href="https://app.netlify.com/sites/s1lv3r/deploys"
        target="_blank"
        rel="noopener noreferrer"
        ><img
          src="https://img.shields.io/netlify/f7d0d017-8ec3-4b62-81ca-47bbc8393229?logo=netlify&style=flat-square"
          alt="Netlify Status"
          loading="lazy"
      /></a>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },

  data() {
    return {
      commitsha: process.env.NUXT_ENV_COMMIT_SHA,
      commitmessage: process.env.NUXT_ENV_COMMIT_MESSAGE,
      commitdate: process.env.NUXT_ENV_COMMIT_DATE,
    }
  },

  computed: {
    url() {
      return `https://github.com/${this.$globalVars.repo}/blob/${
        this.$globalVars.branch
      }/pages/${
        this.$route.path.slice(-1) === '/' ? 'index' : this.$route.path
      }.vue`
    },
    commitUrl() {
      return `https://github.com/${this.$globalVars.repo}/commit/${process.env.NUXT_ENV_COMMIT_SHA}`
    },
  },
})
</script>

<style lang="scss" scoped>
footer {
  @media (prefers-color-scheme: dark) {
    color: $darkFooterTextColor;

    & > a:visited {
      color: $darkLinkColor;
    }
  }

  @media (prefers-color-scheme: light) {
    color: $lightFooterTextColor;

    & > a:visited {
      color: $lightLinkColor;
    }
  }

  margin: 1rem 0 0.5rem 0;
  flex-shrink: 1;

  & > a {
    text-decoration: none;

    .octicon {
      vertical-align: baseline;
    }
  }

  transition: ease-in-out 0.2s;
  filter: brightness(50%);
  text-align: center;
  &:hover {
    filter: brightness(100%);
  }
}
</style>
