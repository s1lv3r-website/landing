<template>
  <div>
    <NuxtLink :to="previousLink"><Octicon icon="arrow-left" /> Back</NuxtLink>
    <article>
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '~/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },

  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },

  data() {
    return { previousLink: '/blog' }
  },
})
</script>
