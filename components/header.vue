<template>
  <header>
    <h1>S1LV3R</h1>
    <div id="flex-right">
      <div id="theme-select" @click="cycleTheme">
        <fa-icon :icon="themeButtons[activeTheme].icon"></fa-icon>
        <p>{{ themeButtons[activeTheme].theme }}</p>
      </div>
      <nav>
        <NuxtLink to="/" exact><Octicon icon="home" /> home</NuxtLink>
        |
        <NuxtLink to="/links/"><Octicon icon="link" /> links</NuxtLink>
        |
        <NuxtLink to="/blog/"><Octicon icon="note" /> blog </NuxtLink>
        |
        <NuxtLink to="/files/"><Octicon icon="file" /> files</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import { faLaptop, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import Octicon from '@/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },

  data() {
    return {
      themeButtons: [
        { icon: faLaptop, theme: 'System' },
        { icon: faMoon, theme: 'Dark' },
        { icon: faSun, theme: 'Light' },
      ],
      activeTheme: 0,
    }
  },
  methods: {
    cycleTheme() {
      if (this.activeTheme === this.themeButtons.length - 1) {
        this.activeTheme = 0
      } else {
        this.activeTheme++
      }

      this.$colorMode.preference =
        this.themeButtons[this.activeTheme].theme.toLowerCase()
    },
  },
})
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  font-style: italic;
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: currentColor;

  &:visited {
    color: currentColor;
  }
}

a {
  text-decoration: none;

  .octicon {
    vertical-align: middle;
  }

  &:hover {
    text-decoration: underline;
  }

  white-space: nowrap;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#flex-right {
  display: flex;
  flex-direction: row;

  & > * {
    margin: auto 0.25rem;
  }
}

#theme-select {
  & > p {
    display: inline;
  }

  margin: auto 0.5rem;
  border-radius: 9999px;
  padding: 0.35rem;
  white-space: nowrap;
}

:root {
  &.light-mode {
    #theme-select {
      background-color: $darkFooterTextColor;
    }
  }

  &.dark-mode {
    #theme-select {
      background-color: $lightFooterTextColor;
    }
  }
}
</style>
