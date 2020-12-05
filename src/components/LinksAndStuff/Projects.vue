<template>
  <div class="projects">
    <h3>Projects</h3>
    <ul>
      <li>
        <a
          href="https://github.com/CTFNote"
          target="_blank"
          rel="noopener noreferrer"
          >CTFNote</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Projects",
});
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

ul {
  padding: 0;

  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
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
