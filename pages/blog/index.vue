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
      <li v-for="monthYear in articlesByMonthYear" :key="monthYear.monthYear">
        <h2>
          <span class="month-year--month">{{ monthYear.month }}</span>
          <span class="month-year--year">- {{ monthYear.year }}</span>
        </h2>
        <hr />
        <ul>
          <li v-for="article in monthYear.articles" :key="article.url">
            <h2 class="blog-title">
              <NuxtLink :to="`/blog/${article.slug}`">{{
                article.title
              }}</NuxtLink>
            </h2>
            <p class="blog-meta">
              {{ formatDate(article.date) }}
              <span v-if="lastUpdatedDiffers(article)">
                | Updated on {{ formatDate(article.date) }}
              </span>
              <span
                v-if="Array.isArray(article.tags) && article.tags.length > 0"
              >
                |
                {{
                  article.tags.map((tag) => tag.toLowerCase()).join(', ')
                }}</span
              >
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <p v-else>There are no posts here yet! Come back later</p>
</template>

<script lang="ts">
import Vue from 'vue'

interface IContentDocument extends Record<string, any> {
  dir: string
  path: string
  extension: '.md' | '.json' | '.yaml' | '.xml' | '.csv' | string
  slug: string
  createdAt: Date
  updatedAt: Date
}

interface BlogPost extends IContentDocument {
  title: string
  date: string
  tags?: Array<string>
}

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

export default Vue.extend({
  async asyncData({ $content }) {
    const articles = await $content('blog').fetch()

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
  },

  data() {
    return { activeTag: this.$route.query?.tag ? this.$route.query.tag : '' }
  },

  computed: {
    filteredArticles(): Array<BlogPost> {
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

  methods: {
    // @ts-ignore
    lastUpdatedDiffers(article) {
      return article.date !== article.updatedAt
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
</style>
