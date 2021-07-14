<template>
  <div>
    <p>Just random stuff I've found</p>
    <p>Create an issue on the GitHub repo for any takedown requests</p>

    <ul>
      <li v-for="file in files" :key="file">
        <a :href="`/files/${video.slice(2)}`">{{ video.slice(2) }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
