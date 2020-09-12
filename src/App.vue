<template>
  <AboutMe />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutMe from "./components/AboutMe.vue";

export default defineComponent({
  name: "App",
  components: {
    AboutMe: AboutMe
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
