<template>
  <div id="container">
    <AboutMe />
    <br />
    <SocialMedia />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMe from "./components/AboutMe.vue";
import Social from "./components/Social.vue";

export default defineComponent({
  name: "App",
  components: {
    AboutMe: AboutMe,
    SocialMedia: Social
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

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
