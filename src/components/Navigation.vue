<template>
  <ul id="navbar">
    <li>
      <router-link to="/" exact>Home</router-link>
    </li>
    |
    <li>
      <router-link to="/socials">Socials</router-link>
    </li>
    |
    <li>
      <router-link to="/projects">Projects</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation",
});
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  display: inline;
}

ul {
  padding: 0
}

a {
  color: #42b983;
  text-decoration: none;

  &:hover {
    color: #359368;
  }
}

.router-link-active {
  font-weight: bold;
}
</style>
