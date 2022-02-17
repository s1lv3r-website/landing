<template>
  <header>
    <h1>S1LV3R</h1>
    <div id="flex-right">
      <div id="theme-select" @click="cycleTheme">
        <component
          :is="themeButtons[activeTheme].icon"
          id="theme-icon"
        ></component>
        <p>{{ themeButtons[activeTheme].theme }}</p>
      </div>
      <nav>
        <NuxtLink to="/" exact><Octicon icon="home" /> home</NuxtLink>
        |
        <NuxtLink to="/links/"><Octicon icon="link" /> links</NuxtLink>
        |
        <NuxtLink to="/files/"><Octicon icon="file" /> files</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'
import laptop from '@/assets/icons/laptop.svg?inline'
import moon from '@/assets/icons/moon.svg?inline'
import sun from '@/assets/icons/sun.svg?inline'

export default Vue.extend({
  components: { Octicon },

  data() {
    return {
      themeButtons: [
        { icon: laptop, theme: 'System' },
        { icon: moon, theme: 'Dark' },
        { icon: sun, theme: 'Light' },
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
  flex-wrap: wrap;

  & > * {
    margin: auto 0.25rem;
  }
}

#theme-select {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /* prevents wrapping of the text and icon */
  justify-content: space-evenly; // aligns horizontally
  align-items: center; // aligns vertically

  margin: auto 0.5rem;
  border-radius: 9999px;
  padding: 0.35rem;
  white-space: nowrap;
  cursor: pointer;

  #theme-icon {
    height: 1rem;
    display: inline;
  }

  * {
    margin: 0 0.2rem;
  }
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
