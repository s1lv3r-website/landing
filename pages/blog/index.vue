<template>
  <ul v-if="articles.length > 0">
    <li v-for="article in articles" :key="article.url">
      <h2 class="blog-title">
        <NuxtLink :to="`blog/${article.slug}`">{{ article.title }}</NuxtLink>
      </h2>
      <p class="blog-meta">
        {{ formatDate(article.createdAt) }}
        <span v-if="lastUpdatedDiffers(article)">
          | Updated on {{ formatDate(article.updatedAt) }}
        </span>
        <span v-if="article.author"> | Written by {{ article.author }}</span>
      </p>
    </li>
  </ul>
  <p v-else>There are no posts here yet! Come back later</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

    return { articles }
  },

  methods: {
    // @ts-ignore
    lastUpdatedDiffers(article) {
      return article.createdAt !== article.updatedAt
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

<style lang="scss" scoped>
.blog {
  &-title {
    margin: 0.25rem;
  }
  &-meta {
    margin: 0.25rem;
  }
}

html {
  &.light-mode {
    .blog-meta {
      color: $lightFooterTextColor;
    }
  }
  &.dark-mode {
    .blog-meta {
      color: $darkFooterTextColor;
    }
  }
}

li {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
