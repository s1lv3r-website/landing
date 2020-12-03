<template>
  <div id="container">
    <Header />
    <main>
      <router-view />
    </main>
    <Navbar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";

export default Vue.extend({
  name: "App",
  metaInfo: {
    titleTemplate: "%s | S1LV3R",
  },
  components: {
    Navbar,
    Header,
  },
});
</script>

<style lang="scss">
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
#container {
  min-width: 100px;
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
