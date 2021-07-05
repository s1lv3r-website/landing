<template>
  <div>
    <p>
      Hey, I'm S1LV3R. I usually do programming and CTFs, but I also enjoy
      talking with my friends and gaming :) This website is mostly just a simple
      page to link to other websites and stuff.
    </p>
    <p>🏳️‍🌈 Bisexual, they/them</p>

    <Contact />
    <Donate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Contact from '@/components/index/contact.vue'
import Donate from '@/components/index/donate.vue'

export default Vue.extend({
  components: { Contact, Donate },

  layout: 'default',

  head: {
    title: 'Home',
  },
})
</script>
