<template>
  <AboutMe />
</template>

<script lang="ts">
import Vue from "vue";

import AboutMe from "../components/AboutMe.vue";

export default Vue.extend({
  name: "Home",
  components: {
    AboutMe: AboutMe,
  },
  metaInfo: {
    title: "Home",
  },
});
</script>
