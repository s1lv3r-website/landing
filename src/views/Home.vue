<template>
  <div id="container">
    <AboutMe />
    <br />
    <SocialMedia />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AboutMe from "../components/AboutMe.vue";
import Social from "../components/Social.vue";

export default Vue.extend({
  name: "Home",
  components: {
    AboutMe: AboutMe,
    SocialMedia: Social
  },
  metaInfo: {
    title: "S1LV3R",
  }
});
</script>

<style lang="scss" scoped>
#container {
  max-width: 350px;
  border: 1px currentColor solid;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
