<template>
  <footer>
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <Octicon icon="pencil" /> Edit on GitHub!
    </a>
    <!-- <p>
      Last commit: <code>{{$gitInfo.shorthash}}</code> - <code></code> <br />
      Commit date:
    </p> -->
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },

  computed: {
    url() {
      // @ts-ignore
      return `https://github.com/${this.$globalVars.repo}/blob/${
        // @ts-ignore
        this.$globalVars.branch
      }/pages/${
        this.$route.path.slice(-1) === '/' ? 'index' : this.$route.path
      }.vue`
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

  margin: 1rem 0 1rem 0;
  padding-bottom: 1rem;
  flex-shrink: 1;

  & > a {
    text-decoration: none;

    .octicon {
      vertical-align: baseline;
    }
  }
}
</style>
