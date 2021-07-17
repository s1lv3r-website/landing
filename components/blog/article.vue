<template>
  <li>
    <h3 class="blog-title">
      <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
    </h3>
    <p class="blog-meta">
      {{ formatDate(article.date) }}
      <span v-if="lastUpdatedDiffers(article)">
        | Updated on {{ formatDate(article.date) }}
      </span>
      <span v-if="Array.isArray(article.tags) && article.tags.length > 0">
        |
        {{ article.tags.map((tag) => tag.toLowerCase()).join(', ') }}</span
      >
    </p>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

import { BlogPost } from "@/types/article.d"

export default Vue.extend({
  props: {
    article: { type: Object, required: true },
  },
  methods: {
    lastUpdatedDiffers(article: BlogPost) {
      return article.date !== article.updatedAt
    },
    formatDate(dateString: string) {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },
  },
})
</script>
