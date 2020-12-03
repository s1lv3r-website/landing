<template>
  <div>
    <Links />
    <Projects />
    <Repos />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Links from "@/components/LinksAndStuff/Links.vue";
import Projects from "@/components/LinksAndStuff/Projects.vue";
import Repos from "@/components/LinksAndStuff/Repos.vue";

export default Vue.extend({
  name: "ProjectsAndRepos",

  components: {
    Links,
    Repos,
    Projects,
  },

  metaInfo: {
    title: "Projects and repos",
  },
});
</script>

<style lang="scss" scoped>
#div {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
}
</style>
