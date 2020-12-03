<template>
  <div class="links">
    <h3>Links</h3>
    <ul>
      <li><a href="https://corax.team">Team Corax</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Links",
});
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

ul {
  padding: 0;
}

a {
  margin: 0.3em;
  color: currentColor;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
