<template>
  <header>
    <h1>S1LV3R</h1>
    <div>
      <nav>
        <NuxtLink to="/"><Octicon icon="home" /> home</NuxtLink>
        |
        <NuxtLink to="/links/"><Octicon icon="link" /> links</NuxtLink>
        |
        <NuxtLink to="/p/"><Octicon icon="file" /> content</NuxtLink>
      </nav>

      <div id="theme-select">
        <label for="theme">Theme</label>
        <select id="theme" v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },
})
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
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
}

header > div {
  display: flex;
  justify-content: space-between;
}
</style>
