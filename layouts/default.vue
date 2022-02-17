<template>
  <div id="_template-container">
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

#__layout {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#_template-container {
  font-family: $bodyFont;

  max-width: 800px;
  height: 100%;
  margin: 0 1rem;
  padding: 0 8px;

  display: grid;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / minMax(min-content, 800px);
  grid-gap: 1rem;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  flex: 1 0 auto;
}

footer {
  grid-area: footer;
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

  font-weight: $bodyFontWeight;
  font-size: $bodyFontSize;
}

a:active {
  color: $linkActiveColor;
}

td {
  padding-right: 1rem;
}
</style>
