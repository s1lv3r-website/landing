<template>
  <div v-if="error.statusCode === 404">
    <p>That page wasn't found. Try using the links on the top of the page</p>
    <p>
      <i
        ><Octicon icon="issue-opened" /> Create an issue on
        <a
          :href="`https://github.com/${$globalVars.repo}`"
          target="_blank"
          rel="noopener noreferrer"
          >the repo</a
        >
        if you think this is incorrect.</i
      >
    </p>
  </div>
  <div v-else>
    <p>
      An error occured that i havent bothered creating an error page for. Just
      read this instead: <br />
      <pre class="language-json">{{ error }}</pre>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Octicon from '@/components/octicon.vue'

export default Vue.extend({
  components: { Octicon },
  layout: 'default',
  props: {
    error: { type: Object, required: true },
  },
  head: {
    title: 'Oops, an error occured',
    titleTemplate: '%s',
  },
})
</script>
