<template>
  <div>
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '@/components/footer.vue'
import Header from '~/components/header.vue'

export default Vue.extend({
  components: { Footer, Header },
})
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  height: 100%;
  padding: 0;
  margin: 0;
}

#__layout > div {
  font-family: $bodyFont;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 8px;
  height: 100%;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}

html {
  &.dark-mode {
    background: $darkBgColor;
    color: $darkTextColor;

    a {
      color: $darkLinkColor;

      &:visited {
        color: $darkLinkVisitedColor;
      }
    }
  }

  &.light-mode {
    background: $lightBgColor;
    color: $lightTextColor;

    a {
      color: $lightLinkColor;

      &:visited {
        color: $lightLinkVisitedColor;
      }
    }
  }
}

a:active {
  color: $linkActiveColor;
}

td {
  padding-right: 1rem;
}
</style>
