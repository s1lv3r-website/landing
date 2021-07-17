<template>
  <div>
    <a @click.prevent="$router.go(-1)"><Octicon icon="arrow-left" /> Back</a>
    <article>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Prism from 'prismjs'

// #region PrismJS plugins
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'

import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import 'prismjs/plugins/line-highlight/prism-line-highlight.min.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
// #endregion

import Octicon from '~/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },

  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },

  mounted() {
    Prism.highlightAll()
  },
})
</script>
