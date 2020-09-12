<template>
  <div id="aboutMe">
    <img
      src="http://gravatar.com/avatar/708126e718f81d89e6daffba2b153c72.png?size=200&d=retro"
      alt="My logo"
    />
    <h1 id="username">ent3r_</h1>
    <p
      id="description"
    >Oh hey. I'm me. I do some programming every now and then. You're probably here because you found one of the things I made. Thats cool.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 30px 0 0;
}
</style>
