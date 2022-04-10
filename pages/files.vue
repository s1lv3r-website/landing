<template>
  <div>
    <p>Just random stuff I've found</p>
    <p>Create an issue on the GitHub repo for any takedown requests<CursorBlink /></p>

    <ul>
      <li v-for="file in files" :key="file">
        <a :href="`/files/${file.slice(2)}`">{{ file.slice(2) }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CursorBlink from '@/components/cursor.vue'

export default Vue.extend({
  components: { CursorBlink },
  data() {
    return {
      files: require.context('@/static/files', true, /^.*$/, 'sync').keys(),
    }
  },

  head: {
    title: 'Files',
  },
})
</script>
