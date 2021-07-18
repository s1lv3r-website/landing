<template>
  <div class="wrapper">
    <div class="filter">
      <h2>Filter</h2>
      <div class="search">
        <label for="search">Search</label>
        <input
          id="search"
          v-model="searchQuery"
          type="search"
          autocomplete="off"
        />
      </div>
      <div v-if="tags && tags.length > 0" class="tags-wrapper">
        <h3>Tags</h3>
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
      </div>
    </div>
    <hr />
    <h2>Posts</h2>
    <div v-if="articles.length > 0">
      <ul class="month-list">
        <li
          v-for="monthYear in articlesByMonthYear"
          :key="`${monthYear.month}-${monthYear.year}`"
        >
          <h3>
            <span class="month-year--month">{{ monthYear.month }}</span>
            <span class="month-year--year">- {{ monthYear.year }}</span>
          </h3>
          <ul class="post-list">
            <Article
              v-for="_article in monthYear.articles"
              :key="_article.url"
              :article="_article"
            />
          </ul>
        </li>
      </ul>
    </div>
    <p v-else-if="searchQuery && searchQuery !== ''">No search results</p>
    <p v-else>There are no posts here yet! Come back later</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { BlogPost } from '@/types/article'
import Article from '~/components/blog/article.vue'

const MONTHS: { [key: string]: number } = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
}

function processArticles(articles: Array<BlogPost>) {
  let tags: Array<string> = articles
    // @ts-ignore
    .filter((article) => Array.isArray(article.tags))
    .map(
      (article: Record<string, any>): Array<string> =>
        article.tags.map((tag: string) => tag.toLowerCase())
    )
    .flat()

  if (!tags) {
    tags = []
  }

  // ? Remove duplicates
  // ? See https://stackoverflow.com/questions/9229645/
  tags = [...new Set(tags.map((tag) => tag.toLowerCase()))]

  return { articles, tags }
}

export default Vue.extend({
  components: { Article },
  async asyncData({ $content }) {
    const articles = (await $content(
      'blog'
    ).fetch()) as unknown as Array<BlogPost>

    return processArticles(articles)
  },

  data() {
    const articles: Array<BlogPost> = []
    const tags: Array<string> = []

    return {
      activeTag: (this.$route.query.tag ?? null) as string,
      searchQuery: (this.$route.query.search ?? null) as string,
      articles,
      tags,
    }
  },

  computed: {
    filteredArticles(): Array<BlogPost> {
      if (this.activeTag && this.activeTag !== '') {
        return this.articles.filter((article) => {
          if (!(article.tags?.length && article.tags.length > 0)) return false
          return article.tags
            .map((tag: string) => tag.toLowerCase())
            .includes(this.activeTag)
        })
      } else {
        // @ts-ignore
        return this.articles
      }
    },
    articlesByMonthYear() {
      const articlesByMonth: {
        month: string
        year: number
        articles: BlogPost[]
      }[] = []

      this.filteredArticles.forEach((article) => {
        const date = new Date(article.date)
        const year = date.getFullYear()
        const month = date
          .toLocaleDateString('en-US', { month: 'long' })
          .toLowerCase()

        const monthArticles = articlesByMonth.find(
          (articleByMonth) =>
            articleByMonth.month === month && articleByMonth.year === year
        )

        if (monthArticles) {
          monthArticles.articles.push(article)
        } else {
          articlesByMonth.push({
            month,
            year,
            articles: [article],
          })
        }
      })

      articlesByMonth.sort((a, b) => {
        const { month: aMonth, year: aYear } = a
        const { month: bMonth, year: bYear } = b

        const aMonthIndex = MONTHS[aMonth.toUpperCase()]
        const bMonthIndex = MONTHS[bMonth.toUpperCase()]

        if (aYear < bYear) return 1

        if (aMonthIndex > bMonthIndex) return 1

        return 0
      })

      articlesByMonth.forEach((month) => {
        month.articles.sort((a, b) => (a.date > b.date ? 0 : 1))
      })

      return articlesByMonth
    },
  },

  watch: {
    async searchQuery(searchQuery: string) {
      if (!searchQuery || searchQuery === '') {
        this.articles = processArticles(
          await this.$content('blog').fetch()
        ).articles
        this.$router.push({
          query: { ...this.$route.query, searchQuery: undefined },
        })
        return
      }

      this.$router.push({ query: { ...this.$route.query, searchQuery } })
      this.articles = await this.$content('blog')
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(searchQuery)
        .fetch()
    },
  },

  methods: {
    setActiveTag(tag: string) {
      if (this.activeTag === tag) {
        this.activeTag = ''
        this.$router.push({ query: { ...this.$route.query, tag: undefined } })
      } else {
        this.activeTag = tag
        this.$router.push({
          query: { ...this.$route.query, tag: this.activeTag },
        })
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

    .month-year {
      &--year {
        color: $darkFooterTextColor;
      }
    }
  }
  &.dark-mode {
    .blog-meta {
      color: $darkFooterTextColor;
    }

    .month-year {
      &--year {
        color: $lightFooterTextColor;
      }
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
      box-shadow: 0 0 0.1rem 0.075rem gold;
    }
  }
}

.wrapper {
  margin-top: 1rem;
}

.month-year {
  &--year {
    font-size: 1.25rem;
  }
}

.post-list > li {
  padding-left: 1.5rem;
}

#searchButtonLink {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
