<template>
  <div>
    <p>
      Hey, I'm S1LV3R. I usually do programming and CTFs, but I also enjoy
      talking with my friends and gaming :) This website is mostly just a simple
      page to link to other websites and stuff. <span id="cursor">▌</span>
    </p>
    <p>🏳️‍🌈 Bisexual, she/they</p>

    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Contact from '@/components/index/contact.vue'

export default Vue.extend({
  components: { Contact },

  layout: 'default',

  head: {
    title: 'Home',
  },
})
</script>

<style lang="scss" scoped>
#cursor {
  animation: blinker 1.5s cubic-bezier(0.43, 0.34, 0, 1) infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
