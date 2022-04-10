<template>
  <div>
    <p>{{ frontpageText }}<CursorBlink /></p>
    <p>🏳️‍🌈 Bisexual, she/they</p>

    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Contact from '@/components/index/contact.vue'
import CursorBlink from '@/components/cursor.vue'

export default Vue.extend({
  components: { Contact, CursorBlink },

  layout: 'default',

  data() {
    return {
      frontpageText:
        "Hey, I'm S1LV3R. I usually do programming and CTFs, but I also enjoy talking with my friends and gaming :) This website is mostly just a simple page to link to other websites and stuff.",
    }
  },

  head: {
    title: 'Home',
  },
})
</script>
