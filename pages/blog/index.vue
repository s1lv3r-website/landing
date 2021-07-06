<template>
  <div v-if="articles.length > 0" class="wrapper">
    <div class="tags">
      <p
        v-for="tag in tags"
        :key="tag"
        class="tag"
        :class="activeTag === tag ? 'active' : ''"
        @click="setActiveTag(tag)"
      >
        {{ tag }}
      </p>
    </div>
    <ul>
      <li v-for="article in filteredArticles" :key="article.url">
        <h2 class="blog-title">
          <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
        </h2>
        <p class="blog-meta">
          {{ formatDate(article.createdAt) }}
          <span v-if="lastUpdatedDiffers(article)">
            | Updated on {{ formatDate(article.updatedAt) }}
          </span>
          <span v-if="article.tags !== []">
            |
            {{ article.tags.map((tag) => tag.toLowerCase()).join(', ') }}</span
          >
        </p>
      </li>
    </ul>
  </div>
  <p v-else>There are no posts here yet! Come back later</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

    let tags: Array<string> = articles.map(
      (article: Record<string, any>): Array<string> =>
        article.tags.map((tag: string) => tag.toLowerCase())
    ).flat()

    if (!tags) {
      tags = []
    }

    // ? Remove duplicates
    // ? See https://stackoverflow.com/questions/9229645/
    tags = [...new Set(tags.map((tag) => tag.toLowerCase()))]

    return { articles, tags }
  },

  data() {
    return { activeTag: this.$route.query?.tag ? this.$route.query.tag : '' }
  },

  computed: {
    filteredArticles() {
      if (this.activeTag !== '') {
        // @ts-ignore
        return this.articles.filter((article) =>
          article.tags
            .map((tag: string) => tag.toLowerCase())
            .includes(this.activeTag)
        )
      } else {
        // @ts-ignore
        return this.articles
      }
    },
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
    setActiveTag(tag: string) {
      if (this.activeTag === tag) {
        this.activeTag = ''
        this.$router.push({ query: {} })
      } else {
        this.activeTag = tag
        this.$router.push({ query: { tag: this.activeTag } })
      }
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

.tags {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  .tag {
    margin: 0.25rem;
    padding: 0.25rem;
    background-color: gray;
    border-radius: 0.15rem;
    cursor: pointer;

    &.active {
      box-shadow: 0 0 0.1rem 0.1rem gold;
    }
  }
}

.wrapper {
  margin-top: 1rem;
}
</style>
