<template><span id="cursor">█</span></template>

<style lang="scss" scoped>
#cursor {
  animation: blinker 1.5s cubic-bezier(0.43, 0.34, 0, 1) infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
