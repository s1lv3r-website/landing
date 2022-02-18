<template>
  <p>
    <span class="" :style="`--n:${message.length}`">{{
      message
    }}</span>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    message: { type: String, required: true },
  },

  data() {
    return {
      cursor: '▌',
    }
  },
})
</script>

<style lang="scss" scoped>
.typewriter {
  font-family: monospace;
  color: #00000000;
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0,
    linear-gradient(#00dffc 0 0) 0 0;
  background-size: calc(var(--n) * 1ch) 200%;
  -webkit-background-clip: padding-box, text;
  background-clip: padding-box, text;
  background-repeat: no-repeat;
  animation: b 0.7s infinite steps(1),
    t calc(var(--n) * 0.3s) steps(var(--n)) forwards;
}

:root.dark-mode .typewriter {
  background: linear-gradient(-90deg, #00dffc 5px, #0000 0) 10px 0,
    linear-gradient(#00dffc 0 0) 0 0;
}

@keyframes t {
  from {
    background-size: 0 200%;
  }
}
@keyframes b {
  0% {
    background-position: 0 100%, 0 100%, 0 0;
  }
}
</style>
