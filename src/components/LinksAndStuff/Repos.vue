<template>
  <div class="repos">
    <h3>Repos</h3>
    <ul>
      <li>
        <a
          href="https://github.com/theS1lV3R/dotfiles"
          target="_blank"
          rel="noopener noreferrer"
          >Dotfiles</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Repos",
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
